<?php
declare(strict_types=1);

$mountPath = rtrim(str_replace('\\', '/', dirname($_SERVER['SCRIPT_NAME'] ?? '/')), '/');
if ($mountPath === '.') {
    $mountPath = '';
}
$assetBase = $mountPath . '/motofix-complete/website';
$page = file_get_contents(__DIR__ . '/motofix-complete/website/system/index.html');
if ($page === false) {
    http_response_code(500);
    exit('The local MotoFix demo could not be loaded.');
}

$page = str_replace(
    ['/assets/src-2cO76zna.css', '/assets/system-DMuslwqx.css', '/assets/system-BNj6uwxs.js'],
    [$mountPath . '/local-css.php?sheet=shared', $mountPath . '/local-css.php?sheet=system', $mountPath . '/local-js.php?script=system'],
    $page
);
$page = str_replace('/assets/', $assetBase . '/assets/', $page);
$page = str_replace('/promo/', $assetBase . '/promo/', $page);
$page = str_replace('/motofix-system/', $assetBase . '/motofix-system/', $page);
$page = str_replace('/motofix-logo.jpg', $assetBase . '/motofix-logo.jpg', $page);
$page = str_replace('/panabo-demo-map.png', $assetBase . '/panabo-demo-map.png', $page);
$baseScript = '<script>window.MOTOFIX_BASE = ' . json_encode($mountPath, JSON_UNESCAPED_SLASHES | JSON_HEX_TAG | JSON_HEX_AMP | JSON_HEX_APOS | JSON_HEX_QUOT) . ';</script>';
$page = str_replace('</head>', $baseScript . '</head>', $page);

header('Content-Type: text/html; charset=UTF-8');
echo $page;
