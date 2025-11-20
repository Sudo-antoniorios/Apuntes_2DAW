<?php

/**
 * @author: German Cosano Torres
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

function conectaDB(){
    try {
        // $dsn = "mysql:host=localhost;dbname=mascotas";
        $db = new PDO( "mysql:host=localhost;dbname=mascotas",
                       'mascotas', 'mascotas');
        $db->setAttribute(PDO::MYSQL_ATTR_USE_BUFFERED_QUERY, true);
        $db->setAttribute(PDO::MYSQL_ATTR_INIT_COMMAND, "SET NAMES 'utf8'");
        return $db;
    } catch (PDOException $e) {
        echo "Error de conexión ";
        exit();
    }
}