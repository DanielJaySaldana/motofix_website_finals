<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=UTF-8');
header('Cache-Control: no-store');

function respond(int $status, array $payload): never
{
    http_response_code($status);
    echo json_encode($payload, JSON_UNESCAPED_UNICODE | JSON_INVALID_UTF8_SUBSTITUTE);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Allow: POST');
    respond(405, ['ok' => false, 'message' => 'Use the feedback form to submit a message.']);
}

$name = trim((string)($_POST['fullName'] ?? ''));
$email = trim((string)($_POST['email'] ?? ''));
$category = trim((string)($_POST['category'] ?? ''));
$message = trim((string)($_POST['message'] ?? ''));
$honeypot = trim((string)($_POST['website'] ?? ''));

if ($honeypot !== '') {
    respond(200, ['ok' => true, 'message' => 'Thank you for your feedback.']);
}

$allowedCategories = ['Suggestions', 'General Feedback', 'General Fedback', 'Bug Report', 'Complaint', 'Other'];
if (mb_strlen($name) < 2 || mb_strlen($name) > 100) {
    respond(422, ['ok' => false, 'message' => 'Please enter a name between 2 and 100 characters.']);
}
if (mb_strlen($email) > 254 || filter_var($email, FILTER_VALIDATE_EMAIL) === false) {
    respond(422, ['ok' => false, 'message' => 'Please enter a valid email address.']);
}
if (!in_array($category, $allowedCategories, true)) {
    respond(422, ['ok' => false, 'message' => 'Please choose a feedback category.']);
}
if (mb_strlen($message) < 10 || mb_strlen($message) > 5000) {
    respond(422, ['ok' => false, 'message' => 'Your message must be between 10 and 5,000 characters.']);
}

try {
    require __DIR__ . '/motofix-complete/config/database.php';
    $statement = $pdo->prepare(
        'INSERT INTO feedback_submissions (full_name, email, category, message) VALUES (:full_name, :email, :category, :message)'
    );
    $statement->execute([
        ':full_name' => $name,
        ':email' => $email,
        ':category' => $category,
        ':message' => $message,
    ]);
    respond(201, ['ok' => true, 'message' => 'Thank you. Your feedback has been saved to the local MotoFix database.']);
} catch (Throwable $error) {
    error_log('MotoFix feedback could not be saved: ' . $error->getMessage());
    respond(500, ['ok' => false, 'message' => 'Feedback could not be saved. Start MySQL and import motofix-complete/database/motofix.sql, then try again.']);
}
