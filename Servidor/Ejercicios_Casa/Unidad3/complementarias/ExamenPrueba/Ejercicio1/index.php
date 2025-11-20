
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
 * @package: Ejercicios_Casa\Unidad3\complementarias\ExamenPrueba\index.php
 *
 * @version: 1.0
 */

### *Ejercicio 1: Análisis de notas de alumnos*

// Crea un script PHP que contenga el siguiente array asociativo:

// php
// $alumnos = [
//     "Ana" => [8, 9, 10],
//     "Luis" => [5, 6, 7],
//     "Marta" => [10, 10, 9],
//     "Carlos" => [4, 5, 3]
// ];


// Haz que el script:

// 1. Calcule la *nota media* de cada alumno.
// 2. Muestre el nombre del *alumno con mejor promedio*.
// 3. Muestre los alumnos *aprobados (media ≥ 5)* y *suspensos (media <br 5)* en dos listas separadas.
// 4. Si *no hay ningún suspenso*, debe mostrar el mensaje "Todos los alumnos han aprobado 🎉".

$alumnos = [
    "Ana" => [8, 9, 10],
    "Luis" => [5, 6, 7],
    "Marta" => [10, 10, 9],
    "Carlos" => [4, 5, 3]
];
$medias = [];
$aprobados = [];
$suspensos = [];
foreach ($alumnos as $nombre => $notas) {
    $media = array_sum($notas) / count($notas);
    $medias[$nombre] = $media;
    if ($media >= 5) {
        $aprobados[] = $nombre;
    } else {
        $suspensos[] = $nombre;
    }
}

$mejorAlumno = array_keys($medias, max($medias))[0];
echo "<h2>Alumno con mejor promedio:</h2> $mejorAlumno  (Media: " . number_format($medias[$mejorAlumno], 2) . ")\n\n </br>";
if (count($suspensos) > 0) {
    echo "<h2>Alumnos Aprobados:\n</h2> </br>";
    foreach ($aprobados as $alumno) {
        echo "- $alumno (Media: " . round($medias[$alumno], 2) . ")\n</br>";
    }
    echo "<h2>\nAlumnos Suspensos:</h2>\n";
    foreach ($suspensos as $alumno) {
        echo "- $alumno (Media: " . number_format($medias[$alumno], 2) . ")</br>\n";
    }
} else {
    echo "Todos los alumnos han aprobado 🎉\n";
}


// ### *Ejercicio 2: Formulario de selección de productos*


