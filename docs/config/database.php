<?php
declare(strict_types=1);

// Default XAMPP credentials. Set these values if your local MySQL password differs.
$databaseHost = '127.0.0.1';
$databasePort = 3306;
$databaseName = 'motofix_promotional';
$databaseUser = 'root';
$databasePassword = '';

$pdo = new PDO(
    "mysql:host={$databaseHost};port={$databasePort};dbname={$databaseName};charset=utf8mb4",
    $databaseUser,
    $databasePassword,
    [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES => false,
    ]
);
