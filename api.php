<?php
declare(strict_types=1);

header('Cache-Control: no-store');
header('X-Content-Type-Options: nosniff');

function apiRespond(int $status, array $payload): never
{
    http_response_code($status);
    header('Content-Type: application/json; charset=UTF-8');
    echo json_encode($payload, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_INVALID_UTF8_SUBSTITUTE);
    exit;
}

function apiInput(): array
{
    if ($_POST !== [] || $_FILES !== []) {
        return $_POST;
    }
    $raw = file_get_contents('php://input');
    if ($raw === false || trim($raw) === '') {
        return [];
    }
    $decoded = json_decode($raw, true);
    if (!is_array($decoded)) {
        apiRespond(400, ['message' => 'The request data is invalid.']);
    }
    return $decoded;
}

function apiUuid(): string
{
    $bytes = random_bytes(16);
    $bytes[6] = chr((ord($bytes[6]) & 0x0f) | 0x40);
    $bytes[8] = chr((ord($bytes[8]) & 0x3f) | 0x80);
    $hex = bin2hex($bytes);
    return substr($hex, 0, 8) . '-' . substr($hex, 8, 4) . '-' . substr($hex, 12, 4) . '-' . substr($hex, 16, 4) . '-' . substr($hex, 20);
}

function accountPayload(array $row): array
{
    return [
        'id' => (string)$row['id'],
        'displayId' => (string)$row['display_id'],
        'role' => (string)$row['role'],
        'name' => (string)$row['name'],
        'email' => (string)$row['email'],
        'username' => (string)($row['username'] ?: $row['email']),
        'phone' => (string)($row['phone'] ?? ''),
        'shopId' => (string)($row['shop_id'] ?? ''),
        'shopName' => (string)($row['shop_name'] ?? ''),
        'shopAddress' => (string)($row['shop_address'] ?? ''),
        'homeShopId' => (string)($row['home_shop_id'] ?? 'demo-shop'),
        'mechanicId' => $row['mechanic_id'] !== null ? (string)$row['mechanic_id'] : null,
        'accountStatus' => (string)$row['account_status'],
        'createdAt' => date(DATE_ATOM, strtotime((string)$row['created_at'])),
    ];
}

function findAccountById(PDO $pdo, string $id): ?array
{
    $statement = $pdo->prepare('SELECT * FROM accounts WHERE id = :id LIMIT 1');
    $statement->execute([':id' => $id]);
    $row = $statement->fetch();
    return $row ?: null;
}

function currentAccount(PDO $pdo): ?array
{
    $id = (string)($_SESSION['motofix_account_id'] ?? '');
    if ($id === '') {
        return null;
    }
    $account = findAccountById($pdo, $id);
    if (!$account || $account['account_status'] !== 'Active') {
        unset($_SESSION['motofix_account_id']);
        return null;
    }
    return $account;
}

function requireAccount(?array $account): array
{
    if (!$account) {
        apiRespond(401, ['message' => 'Please sign in to continue.']);
    }
    return $account;
}

function ensureDemoAccounts(PDO $pdo): void
{
    $accounts = [
        ['demo-rider', '2026_001', 'rider', 'Alex Santos', 'rider@motofix.local', 'rider@motofix.local', '0917 555 0123', null, null, null, 'demo-shop', null],
        ['demo-shop', '2026_002', 'shop', 'Miguel Santos', 'owner@motofix.local', 'owner@motofix.local', '0917 555 0123', 'demo-shop', 'MotoHub Service Center', '124 Street, New Visayas, Panabo City', 'demo-shop', null],
        ['demo-mechanic', '2026_003', 'mechanic', 'Marco Reyes', 'mechanic@motofix.local', 'mechanic.marco', '0917 555 0123', 'demo-shop', 'MotoHub Service Center', '124 Street, New Visayas, Panabo City', 'demo-shop', 'M-01'],
    ];
    $statement = $pdo->prepare(
        "INSERT IGNORE INTO accounts
        (id, display_id, role, name, email, username, phone, is_demo, shop_id, shop_name, shop_address, home_shop_id, mechanic_id, account_status)
        VALUES (:id, :display_id, :role, :name, :email, :username, :phone, 1, :shop_id, :shop_name, :shop_address, :home_shop_id, :mechanic_id, 'Active')"
    );
    foreach ($accounts as $account) {
        [$id, $displayId, $role, $name, $email, $username, $phone, $shopId, $shopName, $shopAddress, $homeShopId, $mechanicId] = $account;
        $statement->execute([
            ':id' => $id,
            ':display_id' => $displayId,
            ':role' => $role,
            ':name' => $name,
            ':email' => $email,
            ':username' => $username,
            ':phone' => $phone,
            ':shop_id' => $shopId,
            ':shop_name' => $shopName,
            ':shop_address' => $shopAddress,
            ':home_shop_id' => $homeShopId,
            ':mechanic_id' => $mechanicId,
        ]);
    }
}

function jsonBody(): array
{
    $body = apiInput();
    return $body;
}

function makeAccountId(PDO $pdo, string $role): string
{
    $prefix = ['rider' => 'R', 'shop' => 'S', 'mechanic' => 'M'][$role] ?? 'U';
    return $prefix . '-' . strtoupper(substr(str_replace('-', '', apiUuid()), 0, 12));
}

function stateScope(array $account): string
{
    if ($account['role'] === 'rider') {
        return 'rider:' . $account['id'];
    }
    return 'shop:' . (string)($account['shop_id'] ?: $account['id']);
}

function cleanText(mixed $value, int $max): string
{
    $value = trim((string)$value);
    if (mb_strlen($value) > $max) {
        apiRespond(422, ['message' => 'One of the fields is too long.']);
    }
    return $value;
}

function updateAccount(PDO $pdo, array $current, array $changes): array
{
    $allowed = ['name', 'email', 'username', 'phone', 'shop_name', 'shop_address', 'account_status'];
    $sets = [];
    $values = [':id' => $current['id']];
    foreach ($allowed as $column) {
        if (array_key_exists($column, $changes)) {
            $sets[] = $column . ' = :' . $column;
            $values[':' . $column] = $changes[$column];
        }
    }
    if ($sets === []) {
        return $current;
    }
    $sql = 'UPDATE accounts SET ' . implode(', ', $sets) . ' WHERE id = :id';
    try {
        $pdo->prepare($sql)->execute($values);
    } catch (PDOException $error) {
        if ((string)$error->getCode() === '23000') {
            apiRespond(409, ['message' => 'That email address or username is already in use.']);
        }
        throw $error;
    }
    return findAccountById($pdo, (string)$current['id']) ?? $current;
}

function fileOwnerMatches(array $owner, array $account): bool
{
    return ($owner['owner_account_id'] ?? '') === $account['id'] || (
        $owner['shop_id'] !== null && $account['shop_id'] !== null &&
        $owner['shop_id'] === $account['shop_id']
    );
}

try {
    require __DIR__ . '/motofix-complete/config/database.php';
    $mountPath = rtrim(str_replace('\\', '/', dirname($_SERVER['SCRIPT_NAME'] ?? '/')), '/');
    if ($mountPath === '.') {
        $mountPath = '';
    }
    session_name('MOTOFIXLOCAL');
    session_set_cookie_params([
        'lifetime' => 0,
        'path' => $mountPath === '' ? '/' : $mountPath . '/',
        'httponly' => true,
        'secure' => !empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off',
        'samesite' => 'Lax',
    ]);
    session_start();
    ensureDemoAccounts($pdo);

    $rawPath = (string)($_GET['path'] ?? '/');
    $parsedPath = parse_url($rawPath, PHP_URL_PATH);
    $path = '/' . trim(rawurldecode((string)$parsedPath), '/');
    if ($path === '/') {
        apiRespond(404, ['message' => 'The requested MotoFix action was not found.']);
    }
    $pathQuery = [];
    parse_str((string)(parse_url($rawPath, PHP_URL_QUERY) ?? ''), $pathQuery);
    $method = strtoupper($_SERVER['REQUEST_METHOD'] ?? 'GET');
    $body = jsonBody();
    $account = currentAccount($pdo);

    if ($path === '/auth/session' && $method === 'GET') {
        apiRespond(200, ['user' => $account ? accountPayload($account) : null]);
    }

    if ($path === '/auth/login' && $method === 'POST') {
        $identity = mb_strtolower(cleanText($body['identity'] ?? '', 254));
        $password = (string)($body['password'] ?? '');
        if ($identity === '' || $password === '') {
            apiRespond(422, ['message' => 'Enter your email or mobile number and password.']);
        }
        $statement = $pdo->prepare(
            'SELECT * FROM accounts WHERE LOWER(email) = :email OR LOWER(username) = :username OR phone = :phone LIMIT 1'
        );
        $statement->execute([':email' => $identity, ':username' => $identity, ':phone' => trim($identity)]);
        $user = $statement->fetch();
        $validPassword = $user && ((int)$user['is_demo'] === 1
            ? true
            : is_string($user['password_hash']) && password_verify($password, $user['password_hash']));
        if (!$user || !$validPassword || $user['account_status'] !== 'Active') {
            apiRespond(401, ['message' => 'The email, phone number, or password is not correct.']);
        }
        session_regenerate_id(true);
        $_SESSION['motofix_account_id'] = $user['id'];
        apiRespond(200, ['user' => accountPayload($user)]);
    }

    if ($path === '/auth/register' && $method === 'POST') {
        $role = (string)($body['role'] ?? '');
        if (!in_array($role, ['rider', 'shop'], true)) {
            apiRespond(422, ['message' => 'Choose a rider or motor shop account.']);
        }
        $name = cleanText($body['name'] ?? '', 120);
        $email = mb_strtolower(cleanText($body['email'] ?? '', 254));
        $phone = cleanText($body['phone'] ?? '', 40);
        $password = (string)($body['password'] ?? '');
        $shopName = $role === 'shop' ? cleanText($body['shopName'] ?? '', 160) : '';
        $shopAddress = $role === 'shop' ? cleanText($body['shopAddress'] ?? '', 255) : '';
        if (mb_strlen($name) < 2 || filter_var($email, FILTER_VALIDATE_EMAIL) === false || mb_strlen($password) < 8) {
            apiRespond(422, ['message' => 'Enter a valid name and email, and use a password with at least 8 characters.']);
        }
        if ($role === 'shop' && mb_strlen($shopName) < 2) {
            apiRespond(422, ['message' => 'Enter the motor shop name.']);
        }
        $id = apiUuid();
        $displayId = strtoupper(substr(str_replace('-', '', $id), 0, 10));
        try {
            $insert = $pdo->prepare(
                "INSERT INTO accounts (id, display_id, role, name, email, username, phone, password_hash, shop_id, shop_name, shop_address, home_shop_id, account_status)
                VALUES (:id, :display_id, :role, :name, :email, :username, :phone, :password_hash, :shop_id, :shop_name, :shop_address, 'demo-shop', 'Active')"
            );
            $insert->execute([
                ':id' => $id,
                ':display_id' => $displayId,
                ':role' => $role,
                ':name' => $name,
                ':email' => $email,
                ':username' => $email,
                ':phone' => $phone,
                ':password_hash' => password_hash($password, PASSWORD_DEFAULT),
                ':shop_id' => $role === 'shop' ? $id : null,
                ':shop_name' => $role === 'shop' ? $shopName : null,
                ':shop_address' => $role === 'shop' ? $shopAddress : null,
            ]);
        } catch (PDOException $error) {
            if ((string)$error->getCode() === '23000') {
                apiRespond(409, ['message' => 'An account already uses that email address.']);
            }
            throw $error;
        }
        $created = findAccountById($pdo, $id);
        session_regenerate_id(true);
        $_SESSION['motofix_account_id'] = $id;
        apiRespond(201, ['user' => accountPayload($created)]);
    }

    if ($path === '/auth/google/pending-signup' || $path === '/auth/google/complete-signup') {
        apiRespond(503, ['message' => 'Google sign-in needs an online Google account configuration. Use the local email sign-in or demo accounts while offline.']);
    }

    if ($path === '/auth/logout' && $method === 'POST') {
        $_SESSION = [];
        if (ini_get('session.use_cookies')) {
            $params = session_get_cookie_params();
            setcookie(session_name(), '', time() - 42000, $params['path'], $params['domain'], $params['secure'], $params['httponly']);
        }
        session_destroy();
        apiRespond(200, ['ok' => true]);
    }

    if ($path === '/auth/profile' && $method === 'PATCH') {
        $user = requireAccount($account);
        $changes = [];
        if (array_key_exists('name', $body)) {
            $changes['name'] = cleanText($body['name'], 120);
        }
        if (array_key_exists('phone', $body)) {
            $changes['phone'] = cleanText($body['phone'], 40);
        }
        apiRespond(200, ['user' => accountPayload(updateAccount($pdo, $user, $changes))]);
    }

    if ($path === '/auth/shop-registration' && $method === 'PATCH') {
        $user = requireAccount($account);
        if ($user['role'] !== 'shop') {
            apiRespond(403, ['message' => 'Only a motor shop account can update shop registration details.']);
        }
        $changes = [];
        if (array_key_exists('shopName', $body)) {
            $changes['shop_name'] = cleanText($body['shopName'], 160);
        }
        if (array_key_exists('shopAddress', $body)) {
            $changes['shop_address'] = cleanText($body['shopAddress'], 255);
        }
        apiRespond(200, ['user' => accountPayload(updateAccount($pdo, $user, $changes))]);
    }

    if ($path === '/auth/forgot-password' && $method === 'POST') {
        $identity = mb_strtolower(cleanText($body['identity'] ?? '', 254));
        $statement = $pdo->prepare('SELECT id FROM accounts WHERE LOWER(email) = :identity LIMIT 1');
        $statement->execute([':identity' => $identity]);
        $userId = $statement->fetchColumn();
        if (!$userId) {
            apiRespond(200, ['message' => 'If that email belongs to a local account, a reset link is ready.']);
        }
        $token = bin2hex(random_bytes(24));
        $insert = $pdo->prepare('INSERT INTO password_reset_tokens (token_hash, account_id, expires_at) VALUES (:hash, :id, DATE_ADD(NOW(), INTERVAL 30 MINUTE))');
        $insert->execute([':hash' => hash('sha256', $token), ':id' => $userId]);
        $resetUrl = $mountPath . '/preview?reset_token=' . rawurlencode($token);
        apiRespond(200, [
            'message' => 'This offline demo cannot email you. Use the local reset link below within 30 minutes.',
            'resetUrl' => $resetUrl,
        ]);
    }

    if ($path === '/auth/change-password' && $method === 'POST') {
        $user = requireAccount($account);
        $currentPassword = (string)($body['currentPassword'] ?? '');
        $newPassword = (string)($body['newPassword'] ?? '');
        if (mb_strlen($newPassword) < 8) {
            apiRespond(422, ['message' => 'Use a new password with at least 8 characters.']);
        }
        if ((int)$user['is_demo'] !== 1 && (!is_string($user['password_hash']) || !password_verify($currentPassword, $user['password_hash']))) {
            apiRespond(403, ['message' => 'Your current password is not correct.']);
        }
        $pdo->prepare('UPDATE accounts SET password_hash = :hash WHERE id = :id')->execute([
            ':hash' => password_hash($newPassword, PASSWORD_DEFAULT),
            ':id' => $user['id'],
        ]);
        apiRespond(200, ['ok' => true]);
    }

    if ($path === '/auth/reset-password' && $method === 'POST') {
        $token = (string)($body['token'] ?? '');
        $newPassword = (string)($body['newPassword'] ?? '');
        if (mb_strlen($newPassword) < 8) {
            apiRespond(422, ['message' => 'Use a new password with at least 8 characters.']);
        }
        $statement = $pdo->prepare('SELECT account_id FROM password_reset_tokens WHERE token_hash = :hash AND used_at IS NULL AND expires_at > NOW() LIMIT 1');
        $statement->execute([':hash' => hash('sha256', $token)]);
        $userId = $statement->fetchColumn();
        if (!$userId) {
            apiRespond(422, ['message' => 'That reset link is invalid or has expired. Request another local reset link.']);
        }
        $pdo->beginTransaction();
        $pdo->prepare('UPDATE accounts SET password_hash = :hash WHERE id = :id')->execute([
            ':hash' => password_hash($newPassword, PASSWORD_DEFAULT),
            ':id' => $userId,
        ]);
        $pdo->prepare('UPDATE password_reset_tokens SET used_at = NOW() WHERE token_hash = :hash')->execute([':hash' => hash('sha256', $token)]);
        $pdo->commit();
        apiRespond(200, ['ok' => true]);
    }

    if ($path === '/shops/directory' && $method === 'GET') {
        $shops = [
            ['id' => 'gearup', 'name' => 'GearUp Moto Works', 'rating' => 4.7, 'reviews' => 52, 'distance' => 1.8, 'address' => 'New Visayas, Panabo City', 'open' => true, 'available' => true, 'services' => ['Oil Change', 'General Maintenance', 'Chain Service'], 'phone' => ''],
            ['id' => 'twowheel', 'name' => 'TwoWheel Repair Center', 'rating' => 4.8, 'reviews' => 73, 'distance' => 3.1, 'address' => 'New Pandan, Panabo City', 'open' => true, 'available' => true, 'services' => ['Brake Service', 'Tire Replacement', 'General Maintenance'], 'phone' => ''],
            ['id' => 'roadready', 'name' => 'RoadReady Moto Garage', 'rating' => 4.6, 'reviews' => 41, 'distance' => 2.7, 'address' => 'New Visayas, Panabo City', 'open' => true, 'available' => true, 'services' => ['Engine Repair', 'Electrical Repair', 'Oil Change'], 'phone' => ''],
            ['id' => 'apex', 'name' => 'Apex Motorcycle Service', 'rating' => 4.9, 'reviews' => 95, 'distance' => 3.5, 'address' => 'Santo Niño, Panabo City', 'open' => true, 'available' => true, 'services' => ['Engine Repair', 'Brake Service', 'Chain Service'], 'phone' => ''],
            ['id' => 'ridecare', 'name' => 'RideCare Motor Shop', 'rating' => 4.7, 'reviews' => 62, 'distance' => 2.2, 'address' => 'New Pandan, Panabo City', 'open' => true, 'available' => true, 'services' => ['Tire Replacement', 'Electrical Repair', 'General Maintenance'], 'phone' => ''],
        ];
        $statement = $pdo->query("SELECT * FROM accounts WHERE role = 'shop' AND is_demo = 0 AND account_status = 'Active' ORDER BY created_at DESC");
        foreach ($statement->fetchAll() as $shop) {
            $scope = 'shop:' . ($shop['shop_id'] ?: $shop['id']);
            $stateQuery = $pdo->prepare("SELECT state_value FROM demo_state WHERE scope_key = :scope AND state_key = 'motofix-owner-v1' LIMIT 1");
            $stateQuery->execute([':scope' => $scope]);
            $state = json_decode((string)($stateQuery->fetchColumn() ?: '{}'), true) ?: [];
            $services = array_values(array_filter(array_map(static fn($service) => is_array($service) ? ($service['name'] ?? '') : (string)$service, $state['services'] ?? [])));
            $shops[] = [
                'id' => $shop['shop_id'] ?: $shop['id'],
                'name' => $state['profile']['name'] ?? $shop['shop_name'],
                'phone' => $shop['phone'] ?? '',
                'address' => $state['profile']['address'] ?? $shop['shop_address'] ?? 'Panabo City',
                'services' => $services ?: ['General Maintenance'],
                'open' => true,
                'available' => true,
                'rating' => 0,
                'reviews' => 0,
                'distance' => 0,
                'mapPosition' => [50, 50],
            ];
        }
        apiRespond(200, ['shops' => $shops]);
    }

    if (str_starts_with($path, '/state/') && in_array($method, ['GET', 'PUT'], true)) {
        $user = requireAccount($account);
        $key = rawurldecode(substr($path, strlen('/state/')));
        if ($key === '' || mb_strlen($key) > 255) {
            apiRespond(422, ['message' => 'The saved data key is invalid.']);
        }
        $scope = stateScope($user);
        if ($method === 'GET') {
            $statement = $pdo->prepare('SELECT state_value, updated_at FROM demo_state WHERE scope_key = :scope AND state_key = :key LIMIT 1');
            $statement->execute([':scope' => $scope, ':key' => $key]);
            $row = $statement->fetch();
            apiRespond(200, ['value' => $row ? json_decode($row['state_value'], true) : null, 'updatedAt' => $row ? date(DATE_ATOM, strtotime($row['updated_at'])) : null]);
        }
        $encoded = json_encode($body['value'] ?? null, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_INVALID_UTF8_SUBSTITUTE);
        if ($encoded === false || strlen($encoded) > 4_000_000) {
            apiRespond(413, ['message' => 'This saved record is too large.']);
        }
        $statement = $pdo->prepare(
            'INSERT INTO demo_state (scope_key, state_key, state_value) VALUES (:scope, :key, :value)
            ON DUPLICATE KEY UPDATE state_value = VALUES(state_value), updated_at = CURRENT_TIMESTAMP'
        );
        $statement->execute([':scope' => $scope, ':key' => $key, ':value' => $encoded]);
        if ($key === 'motofix-owner-v1' && $user['role'] === 'shop' && isset($body['value']['mechanics']) && is_array($body['value']['mechanics'])) {
            $mechanicStatus = $pdo->prepare(
                "UPDATE accounts SET account_status = :status WHERE mechanic_id = :mechanic AND shop_id = :shop AND role = 'mechanic'"
            );
            foreach ($body['value']['mechanics'] as $mechanic) {
                if (!is_array($mechanic) || empty($mechanic['id'])) {
                    continue;
                }
                $mechanicStatus->execute([
                    ':status' => ($mechanic['status'] ?? '') === 'Inactive' ? 'Inactive' : 'Active',
                    ':mechanic' => (string)$mechanic['id'],
                    ':shop' => (string)($user['shop_id'] ?: $user['id']),
                ]);
            }
        }
        apiRespond(200, ['value' => json_decode($encoded, true), 'updatedAt' => date(DATE_ATOM)]);
    }

    if ($path === '/support/tickets' && $method === 'POST') {
        $user = requireAccount($account);
        $subject = cleanText($body['subject'] ?? '', 160);
        $message = cleanText($body['message'] ?? '', 5000);
        if ($subject === '' || mb_strlen($message) < 5) {
            apiRespond(422, ['message' => 'Enter a subject and a message with at least 5 characters.']);
        }
        $id = 'DEMO-' . strtoupper(substr(bin2hex(random_bytes(5)), 0, 10));
        $statement = $pdo->prepare('INSERT INTO support_tickets (id, account_id, subject, message, status) VALUES (:id, :account, :subject, :message, :status)');
        $statement->execute([':id' => $id, ':account' => $user['id'], ':subject' => $subject, ':message' => $message, ':status' => 'Saved locally (not sent)']);
        apiRespond(201, ['id' => $id, 'status' => 'Saved locally (not sent)']);
    }

    if ($path === '/mechanics' && $method === 'POST') {
        $owner = requireAccount($account);
        if ($owner['role'] !== 'shop') {
            apiRespond(403, ['message' => 'Only a shop owner can add a mechanic.']);
        }
        $name = cleanText($body['name'] ?? '', 120);
        $email = mb_strtolower(cleanText($body['email'] ?? '', 254));
        $phone = cleanText($body['phone'] ?? '', 40);
        $username = mb_strtolower(cleanText($body['username'] ?? $email, 254));
        $password = (string)($body['password'] ?? '');
        if (mb_strlen($name) < 2 || filter_var($email, FILTER_VALIDATE_EMAIL) === false) {
            apiRespond(422, ['message' => 'Enter a valid mechanic name and email address.']);
        }
        if ($password === '') {
            $password = 'MotoFix' . strtoupper(substr(bin2hex(random_bytes(4)), 0, 6)) . '!';
        }
        $id = apiUuid();
        $mechanicId = 'M-' . strtoupper(substr(bin2hex(random_bytes(4)), 0, 8));
        try {
            $statement = $pdo->prepare(
                "INSERT INTO accounts (id, display_id, role, name, email, username, phone, password_hash, shop_id, shop_name, shop_address, mechanic_id, account_status)
                VALUES (:id, :display, 'mechanic', :name, :email, :username, :phone, :password, :shop_id, :shop_name, :shop_address, :mechanic_id, 'Active')"
            );
            $statement->execute([
                ':id' => $id,
                ':display' => $mechanicId,
                ':name' => $name,
                ':email' => $email,
                ':username' => $username,
                ':phone' => $phone,
                ':password' => password_hash($password, PASSWORD_DEFAULT),
                ':shop_id' => $owner['shop_id'] ?: $owner['id'],
                ':shop_name' => $owner['shop_name'],
                ':shop_address' => $owner['shop_address'],
                ':mechanic_id' => $mechanicId,
            ]);
        } catch (PDOException $error) {
            if ((string)$error->getCode() === '23000') {
                apiRespond(409, ['message' => 'That mechanic email or username is already in use.']);
            }
            throw $error;
        }
        $mechanic = findAccountById($pdo, $id);
        apiRespond(201, ['mechanicId' => $mechanicId, 'user' => accountPayload($mechanic), 'temporaryPassword' => $body['password'] ?? $password]);
    }

    if (preg_match('~^/mechanics/([^/]+)(?:/(reset-password))?$~', $path, $matches) && in_array($method, ['PATCH', 'POST'], true)) {
        $owner = requireAccount($account);
        if ($owner['role'] !== 'shop') {
            apiRespond(403, ['message' => 'Only a shop owner can manage mechanics.']);
        }
        $mechanicId = rawurldecode($matches[1]);
        $statement = $pdo->prepare("SELECT * FROM accounts WHERE mechanic_id = :mechanic AND shop_id = :shop AND role = 'mechanic' LIMIT 1");
        $statement->execute([':mechanic' => $mechanicId, ':shop' => $owner['shop_id'] ?: $owner['id']]);
        $mechanic = $statement->fetch();
        if (!$mechanic) {
            apiRespond(404, ['message' => 'That mechanic could not be found in your shop.']);
        }
        if (($matches[2] ?? '') === 'reset-password') {
            $password = 'DemoOnly123!';
            $pdo->prepare('UPDATE accounts SET password_hash = :password WHERE id = :id')->execute([
                ':password' => password_hash($password, PASSWORD_DEFAULT),
                ':id' => $mechanic['id'],
            ]);
            apiRespond(200, ['password' => $password]);
        }
        $changes = [];
        foreach (['name' => 'name', 'email' => 'email', 'username' => 'username', 'phone' => 'phone', 'accountStatus' => 'account_status'] as $key => $column) {
            if (array_key_exists($key, $body)) {
                $changes[$column] = cleanText($body[$key], in_array($column, ['email', 'username'], true) ? 254 : 120);
            }
        }
        if (isset($body['password']) && $body['password'] !== '') {
            if (mb_strlen((string)$body['password']) < 8) {
                apiRespond(422, ['message' => 'Use a mechanic password with at least 8 characters.']);
            }
            $pdo->prepare('UPDATE accounts SET password_hash = :password WHERE id = :id')->execute([
                ':password' => password_hash((string)$body['password'], PASSWORD_DEFAULT),
                ':id' => $mechanic['id'],
            ]);
        }
        apiRespond(200, ['user' => accountPayload(updateAccount($pdo, $mechanic, $changes))]);
    }

    if ($path === '/files' && $method === 'POST') {
        $user = requireAccount($account);
        $file = $_FILES['file'] ?? null;
        if (!$file || $file['error'] !== UPLOAD_ERR_OK || !is_uploaded_file($file['tmp_name'])) {
            apiRespond(422, ['message' => 'Choose a file to upload.']);
        }
        if ((int)$file['size'] < 1 || (int)$file['size'] > 8 * 1024 * 1024) {
            apiRespond(413, ['message' => 'Files must be smaller than 8 MB.']);
        }
        $mime = (new finfo(FILEINFO_MIME_TYPE))->file($file['tmp_name']) ?: 'application/octet-stream';
        $allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
        if (!in_array($mime, $allowedTypes, true)) {
            apiRespond(415, ['message' => 'Upload a JPG, PNG, WebP, PDF, DOC, or DOCX file.']);
        }
        $content = file_get_contents($file['tmp_name']);
        if ($content === false) {
            apiRespond(500, ['message' => 'The selected file could not be read.']);
        }
        $id = apiUuid();
        $filename = preg_replace('/[^\pL\pN._ -]/u', '', basename((string)$file['name'])) ?: 'upload';
        $statement = $pdo->prepare('INSERT INTO uploaded_files (id, account_id, file_name, mime_type, file_size, file_data) VALUES (:id, :account, :name, :mime, :size, :data)');
        $statement->bindValue(':id', $id);
        $statement->bindValue(':account', $user['id']);
        $statement->bindValue(':name', mb_substr($filename, 0, 255));
        $statement->bindValue(':mime', $mime);
        $statement->bindValue(':size', (int)$file['size'], PDO::PARAM_INT);
        $statement->bindValue(':data', $content, PDO::PARAM_LOB);
        $statement->execute();
        apiRespond(201, ['id' => $id, 'name' => $filename, 'type' => $mime, 'size' => (int)$file['size']]);
    }

    if (preg_match('~^/files/([^/]+)$~', $path, $matches) && $method === 'GET') {
        $user = requireAccount($account);
        $statement = $pdo->prepare('SELECT f.*, a.id AS owner_account_id, a.shop_id FROM uploaded_files f JOIN accounts a ON a.id = f.account_id WHERE f.id = :id LIMIT 1');
        $statement->execute([':id' => rawurldecode($matches[1])]);
        $file = $statement->fetch();
        if (!$file || !fileOwnerMatches($file, $user)) {
            apiRespond(404, ['message' => 'This file could not be found for your account.']);
        }
        header('Content-Type: ' . $file['mime_type']);
        header('Content-Length: ' . (int)$file['file_size']);
        header('Content-Disposition: inline; filename="' . str_replace('"', '', (string)$file['file_name']) . '"');
        echo $file['file_data'];
        exit;
    }

    apiRespond(404, ['message' => 'The requested MotoFix action was not found.']);
} catch (Throwable $error) {
    if (isset($pdo) && $pdo instanceof PDO && $pdo->inTransaction()) {
        $pdo->rollBack();
    }
    error_log('MotoFix local demo API error: ' . $error->getMessage());
    apiRespond(500, ['message' => 'MotoFix could not finish that request. Check that MySQL is running and the local database has been imported.']);
}
