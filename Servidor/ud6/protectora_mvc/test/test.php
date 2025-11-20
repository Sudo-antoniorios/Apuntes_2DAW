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
 * @package: protectora_mvc\test\test.php
 *
 * @version: 1.0
 */

require_once('../vendor/autoload.php');

//definir constantes para la conexion a la base de datos
Define ('DBHOST', 'localhost');
Define ('DBNAME', 'mascotas');
Define ('DBUSER', 'mascotas');
Define ('DBPASS', 'mascotas');

use App\Models\AnimalModel as Mascota;

$mascota = new AnimalModel();

//Pruba de insercion

$mascota->setNombre('Firulais');
$mascota->setRaza('Labrador');
$mascota->setFecha('2023-10-01');

echo "Insertando mascota...\n";

//modificar animal

