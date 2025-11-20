<?php

/**
 * @author: Antonio Ríos Casado
 *
 * descripcion: 
 *
 * fecha: 13/11/2025
 *
 * @license: Proprietary 
 * 
 * @package: protectora_mvc\public\test\test1_modelo_animales.php
 *
 * @version: 1.0
 */

use App\Models\AnimalModel;
require_once __DIR__ . '/../../app/models/AnimalModel.php';
$model = new AnimalModel();
try {
    $animales = $model->get();
    foreach ($animales as $animal) {
        echo "ID: " . $animal['id'] . ", Nombre: " . $animal['nombre'] . ", Raza: " . $animal['raza'] . ", Fecha: " . $animal['fecha'] . "\n";
    }
} catch (PDOException $e) {
    echo "Error al obtener los animales: " . $e->getMessage();
}
