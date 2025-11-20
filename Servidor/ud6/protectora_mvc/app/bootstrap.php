<?php

/**
 * @author: Antonio Ríos Casado
 *
 * descripcion: 
 *
 * fecha: 17/11/2025
 *
 * @license: Proprietary 
 * 
 * @package: protectora_mvc\app\bootstrap.php
 *
 * @version: 1.0
 */

Define('APP_ROOT', realpath(__DIR__ . '/..'));
Define('APP_DIR', APP_ROOT . '/app');
Define('PUBLIC_DIR', APP_ROOT . '/public');
Define('VENDOR_DIR', APP_ROOT . '/vendor');
Define('VIEWS_DIR', APP_ROOT . '/views');


require_once APP_DIR . '/config/parametros.php';

require_once VENDOR_DIR . '/autoload.php';

use Dotnv\Dotenv;

try {
    $dotenv = Dotenv::createImmutable(APP_ROOT);
    $dotenv->load();

    //Validar que las variables de entorno existen
    $dotenv->required(['DBHOST', 'DBNAME', 'DBUSER', 'DBPASS', 'DBPORT'])->notEmpty();
} catch (Exception $e) {
    die('Error loading .env file: ' . $e->getMessage());
}

//configuracion de base de datos 
Define('DBHOST', $_ENV['DBHOST' ?? 'localhost']);
Define('DBNAME', $_ENV['DBNAME' ?? 'protectora_animales']);
Define('DBUSER', $_ENV['DBUSER'] ?? 'root');
Define('DBPASS', $_ENV['DBPASS'] ?? '');
Define('DBPORT', $_ENV['DBPORT'] ?? '3306');
