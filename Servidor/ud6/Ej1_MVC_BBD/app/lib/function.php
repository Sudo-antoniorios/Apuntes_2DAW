<?php

/**
 * @author: Antonio Ríos Casado
 *
 * descripcion: 
 *
 * fecha: 06/11/2025
 *
 * @license: Proprietary 
 * 
 * @package: ej0\lib\function.php
 *
 * @version: 1.0
 */

require_once __DIR__ . '/vendor/autoload.php';

use Dotenv\Dotenv;

// Cargar el archivo .env
$dotenv = Dotenv::createImmutable(__DIR__);
$dotenv->load();
$user = $_ENV['DB_USER'];
$pass = $_ENV['DB_PASS'];

function conectaDB(){
    try {
        // $dsn = "mysql:host=localhost;dbname=mascotas";
        $db = new PDO( "mysql:host=localhost;dbname=mascotas",
                       $user, $pass);
        $db->setAttribute(PDO::MYSQL_ATTR_USE_BUFFERED_QUERY, true);
        $db->setAttribute(PDO::MYSQL_ATTR_INIT_COMMAND, "SET NAMES 'utf8'");
        return $db;
    } catch (PDOException $e) {
        echo "Error de conexión ";
        exit();
    }
}