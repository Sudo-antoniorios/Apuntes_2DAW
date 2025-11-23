<?php

/*
 * @author: Antonio Ríos Casado
 * 
 * Fecha : 20-11-2025
 *
 */

define('APP_ROOT', __DIR__);
define('APP_DIR', APP_ROOT . '/app');
define('PUBLIC_DIR', APP_ROOT . '/public');
define('CONFIG_DIR', APP_ROOT . '/config');
define('VENDOR_DIR', APP_ROOT . '/vendor');
define('TMP_DIR', APP_ROOT . '/tmp');

require_once VENDOR_DIR . "/autoload.php";

use Dotenv\Dotenv;

try{
    $dotenv = Dotenv::createImmutable(APP_ROOT);
    $dotenv->load();

    $dotenv->required([
        "DBHOST",
        "DBNAME",
        "DBUSER",
        "DBPASS",
        "DBPORT"
    ])->notEmpty();

}catch(Exception $e){
    die("Error cargando configuracion: ".$e->getMessage());
}

const DBHOST = $_ENV["DBHOST"] ?? "localhost";
const DBNAME = $_ENV["DBNAME"] ?? "bd_superheroes";
const DBUSER = $_ENV["DBUSER"] ?? "usuario";
const DBPASS = $_ENV["DBPASS"] ?? "usuario";
const DBPORT = $_ENV["DBPORT"] ?? "3306";

const APP_ENV = $_ENV["APP_ENV"] ?? "development";
const APP_DEBUG = $_ENV["APP_DEBUG"] ?? true;

if(APP_ENV === "development" || APP_DEBUG === true){
    ini_set("display_errors", 1);
    ini_set("display_startup_errors", 1);
    error_reporting(E_ALL);
}else{
    ini_set("display_errors", 0);
    ini_set("display_startup_errors", 0);
    error_reporting(E_ALL & E_DEPRECATED);
}