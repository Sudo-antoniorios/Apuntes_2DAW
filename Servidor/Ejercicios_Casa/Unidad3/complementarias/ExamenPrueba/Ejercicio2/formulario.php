<?php

/**
 * @author: Antonio Ríos Casado
 *
 * descripcion: 
 *
 * fecha: 04/11/2025
 *
 * @license: Proprietary 
 * 
 * @package: Ejercicios_Casa\Unidad3\complementarias\ExamenPrueba\Ejercicio1\formulario.php
 *
 * @version: 1.0
 */

// Al enviar el formulario (POST), otro archivo procesar.php debe:

// 1. Mostrar el nombre del cliente en mayúsculas.
// 2. Mostrar qué productos seleccionó (si no marcó ninguno, mostrar "No seleccionaste ningún producto.").
// 3. Calcular el total sabiendo que:

//    * Pan → 1.5€
//    * Leche → 1.2€
//    * Huevos → 2€
//    * Café → 3€
// 4. Si el total es mayor de *5€, aplicar un **10% de descuento* y mostrar el precio final. -->

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = strtoupper($_POST['nombre']);
    $productos = isset($_POST['productos']) ? $_POST['productos'] : [];
    
    echo "<h2>Nombre del cliente:</h2> $nombre<br><br>";
    
    if (empty($productos)) {
        echo "<h2>Productos seleccionados:</h2> No seleccionaste ningún producto.<br><br>";
    } else {
        echo "<h2>Productos seleccionados:</h2><ul>";
        foreach ($productos as $producto) {
            echo "<li>$producto</li>";
        }
        echo "</ul><br>";
    }
    
    $precios = [
        "Pan" => 1.5,
        "Leche" => 1.2,
        "Huevos" => 2.0,
        "Café" => 3.0
    ];
    
    $total = 0;
    foreach ($productos as $producto) {
        if (isset($precios[$producto])) {
            $total += $precios[$producto];
        }
    }
    
    echo "<h2>Total sin descuento:</h2> " . number_format($total, 2) . "€<br><br>";
    
    if ($total > 5) {
        $descuento = $total * 0.10;
        $totalFinal = $total - $descuento;
        echo "<h2>Total con descuento del 10%:</h2> " . number_format($totalFinal, 2) . "€<br><br>";
    } else {
        echo "<h2>Total final:</h2> " . number_format($total, 2) . "€<br><br>";
    }
} else {
    echo "No se han recibido datos del formulario.";
}