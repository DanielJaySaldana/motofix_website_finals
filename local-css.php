<?php
declare(strict_types=1);

$mountPath = rtrim(str_replace('\\', '/', dirname($_SERVER['SCRIPT_NAME'] ?? '/')), '/');
if ($mountPath === '.') {
    $mountPath = '';
}
$assetBase = $mountPath . '/motofix-complete/website';
$sheets = [
    'shared' => 'src-2cO76zna.css',
    'promotional' => 'promotional-CkzSywZD.css',
    'system' => 'system-DMuslwqx.css',
];
$sectionSheets = ['shared', 'header', 'home', 'promotional-video', 'about-us', 'our-prototype', 'features', 'how-it-works', 'subscriptions', 'contact', 'footer'];
$sheet = $_GET['sheet'] ?? '';

if ($sheet === 'promotional-source') {
    $filename = __DIR__ . '/motofix-complete/source/src/promotional/promotional.css';
    $css = file_get_contents($filename);
    if ($css === false) {
        http_response_code(500);
        exit;
    }
    $css = preg_replace_callback(
        '/@import\s+"\.\/([^"]+)"\s*;/',
        static function (array $match) use ($mountPath, $sectionSheets): string {
            $section = pathinfo($match[1], PATHINFO_FILENAME);
            if (!in_array($section, $sectionSheets, true)) {
                throw new RuntimeException('Unknown promotional stylesheet import.');
            }
            return '@import url("' . $mountPath . '/local-css.php?sheet=source-' . rawurlencode($section) . '");';
        },
        $css
    ) ?? $css;
    header('Content-Type: text/css; charset=UTF-8');
    header('Cache-Control: no-store');
    echo $css;
    exit;
}

if (str_starts_with($sheet, 'source-')) {
    $section = substr($sheet, 7);
    if (!in_array($section, $sectionSheets, true)) {
        http_response_code(404);
        exit;
    }
    $css = file_get_contents(__DIR__ . '/motofix-complete/source/src/promotional/' . $section . '.css');
    if ($css === false) {
        http_response_code(500);
        exit;
    }
    $css = str_replace('/promo/', $assetBase . '/promo/', $css);
    header('Content-Type: text/css; charset=UTF-8');
    header('Cache-Control: no-store');
    echo $css;
    exit;
}

if (!isset($sheets[$sheet])) {
    http_response_code(404);
    exit;
}

$filename = __DIR__ . '/motofix-complete/website/assets/' . $sheets[$sheet];
$css = file_get_contents($filename);
if ($css === false) {
    http_response_code(500);
    exit;
}

$css = str_replace('/promo/', $assetBase . '/promo/', $css);
header('Content-Type: text/css; charset=UTF-8');
header('Cache-Control: public, max-age=3600');
echo $css;
