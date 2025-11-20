<?php

/**
 * @author: Antonio Ríos Casado
 *
 * descripcion: Crea un script en PHP que genere y muestre un tablero de ajedrez de 8x8 utilizando una tabla HTML.
 *
 * fecha: 04/11/2025
 *
 * @license: Proprietary 
 * 
 * @package: Ejercicios_Casa\Unidad3\complementarias\index.php
 *
 * @version: 1.0
 */

echo "<table style='border-collapse: collapse; border: 1px solid black;'>";
for ($fila = 0; $fila < 8; $fila++) {
    echo "<tr>";
    for ($columna = 0; $columna < 8; $columna++) {
        $color = ($fila + $columna) % 2 == 0 ? 'white' : 'black';
        echo "<td style='width: 50px; height: 50px; background-color: $color;'></td>";
    }
    echo "</tr>";
}
echo "</table>";