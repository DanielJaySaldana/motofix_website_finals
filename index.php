<?php
declare(strict_types=1);

function renderPromotionalFile(string $filename, array $ancestors = []): string
{
    $directory = __DIR__ . '/motofix-complete/source/promotional';
    $path = realpath($directory . '/' . $filename);
    $root = realpath($directory);

    if ($path === false || $root === false || !str_starts_with($path, $root . DIRECTORY_SEPARATOR) || strtolower(pathinfo($path, PATHINFO_EXTENSION)) !== 'html') {
        http_response_code(500);
        throw new RuntimeException('A promotional HTML section could not be loaded.');
    }
    if (in_array($path, $ancestors, true)) {
        throw new RuntimeException('A circular promotional HTML include was found.');
    }

    $html = file_get_contents($path);
    if ($html === false) {
        throw new RuntimeException('A promotional HTML section could not be read.');
    }

    return preg_replace_callback(
        '/<!--\s*include:\s*"([^"]+)"\s*-->/i',
        static function (array $match) use ($directory, $path, $ancestors): string {
            $include = $match[1];
            $includePath = realpath(dirname($path) . '/' . $include);
            $root = realpath($directory);
            if ($includePath === false || $root === false || !str_starts_with($includePath, $root . DIRECTORY_SEPARATOR)) {
                throw new RuntimeException('A promotional HTML include points outside the section folder.');
            }
            return renderPromotionalFile(basename($includePath), [...$ancestors, $path]);
        },
        $html
    ) ?? $html;
}

$mountPath = rtrim(str_replace('\\', '/', dirname($_SERVER['SCRIPT_NAME'] ?? '/')), '/');
if ($mountPath === '.') {
    $mountPath = '';
}
$assetBase = $mountPath . '/motofix-complete/website';
$shell = renderPromotionalFile('index.html');

$shell = str_replace(
    '<div id="root">',
    '<div id="root" data-asset-base="' . htmlspecialchars($assetBase, ENT_QUOTES, 'UTF-8') . '" data-base-url="' . htmlspecialchars($mountPath, ENT_QUOTES, 'UTF-8') . '">',
    $shell
);
$shell = str_replace('href="/preview?', 'href="' . $mountPath . '/preview.php?', $shell);
$shell = str_replace('href="/preview"', 'href="' . $mountPath . '/preview.php"', $shell);
$shell = str_replace('href="/"', 'href="' . ($mountPath === '' ? '/' : $mountPath . '/') . '"', $shell);
$shell = str_replace('/motofix-logo.jpg', $assetBase . '/motofix-logo.jpg', $shell);
$shell = str_replace('/promo/', $assetBase . '/promo/', $shell);
$shell = str_replace('/preview/', $assetBase . '/preview/', $shell);
$shell = str_replace(
    '<script type="module" src="/src/promotional/entry.tsx"></script>',
    '<script type="module" src="' . $mountPath . '/motofix-complete/source/xampp/entry.js"></script>',
    $shell
);
$styleLinks = '<link rel="stylesheet" href="' . $mountPath . '/local-css.php?sheet=shared">' . PHP_EOL
    . '    <link rel="stylesheet" href="' . $mountPath . '/local-css.php?sheet=promotional-source">';
$shell = str_replace('</head>', $styleLinks . PHP_EOL . '  </head>', $shell);

header('Content-Type: text/html; charset=UTF-8');
echo $shell;
