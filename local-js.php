<?php
declare(strict_types=1);

$mountPath = rtrim(str_replace('\\', '/', dirname($_SERVER['SCRIPT_NAME'] ?? '/')), '/');
if ($mountPath === '.') {
    $mountPath = '';
}
$assetBase = $mountPath . '/motofix-complete/website';
$scripts = [
    'system' => 'system-BNj6uwxs.js',
];
$script = $_GET['script'] ?? '';
if ($script !== 'system' && $script !== 'system-app') {
    http_response_code(404);
    exit;
}

$filename = $script === 'system-app'
    ? __DIR__ . '/motofix-complete/source/src/system/system.js'
    : __DIR__ . '/motofix-complete/website/assets/' . $scripts[$script];
$javascript = file_get_contents($filename);
if ($javascript === false) {
    http_response_code(500);
    exit;
}

$javascript = str_replace('./src-BfilOrMr.js', $assetBase . '/assets/src-BfilOrMr.js', $javascript);
$javascript = str_replace('./system-DNpkNjpt.js', $mountPath . '/local-js.php?script=system-app', $javascript);
$javascript = str_replace('./system-BNj6uwxs.js', $mountPath . '/local-js.php?script=system', $javascript);
$javascript = str_replace('./icons-CyCc1hW4.js', $assetBase . '/assets/icons-CyCc1hW4.js', $javascript);
foreach (['/assets/', '/promo/', '/preview/', '/motofix-system/', '/motofix-logo.jpg', '/panabo-demo-map.png'] as $path) {
    $javascript = str_replace('"' . $path, '"' . $assetBase . $path, $javascript);
    $javascript = str_replace('`' . $path, '`' . $assetBase . $path, $javascript);
}
header('Content-Type: application/javascript; charset=UTF-8');
header($script === 'system-app' ? 'Cache-Control: no-store' : 'Cache-Control: public, max-age=3600');
echo $javascript;
