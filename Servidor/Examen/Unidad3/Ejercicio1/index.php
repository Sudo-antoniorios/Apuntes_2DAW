<?php

/**
 * @author: Antonio Ríos Casado
 *
 * descripcion: Ejercicio del examen de 2º DAW - Unidad 3
 *
 * fecha: 05/11/2025
 *
 * @license: Proprietary 
 * 
 * @package: Examen\Unidad3\index.php
 *
 * @version: 1.0
 */

#Ejercicio 1.
// Array que representa el horario de un grupo de 2º DAW A
$horarios = array(
    //aray principal que contiene el grupo y su horario
    array(
        "grupo" => "2º DAW A",
        //array de asignaturas
        "horario" => array(//array de asignaturas
            "DAWEB" => array(
                //array que contiene los datos de la asignatura y otro array con los dias y horas
                "nombre" => "Despliegue de Aplicaciones Web",
                "profesor" => "Francisco José Aguilera Ruiz",
                "horas" => array(
                    //array que contiene los dias y horas de la asignatura
                    array("Dia" => "Miercoles", "Hora" => "1ª"),
                    array("Dia" => "Jueves", "Hora" => "6ª"),
                    
                )
            ),
            
            "DIWEB" => array(//array con la informacion de otra asignatura
                "nombre" => "Diseño de Interfaces Web",
                "profesor" => "Ana María Seco Sánchez",
                "horas" => array(
                    array("Dia" => "Lunes", "Hora" => "5ª"),
                    array("Dia" => "Lunes", "Hora" => "6ª"),
                    array("Dia" => "Martes", "Hora" => "3ª"),
                    array("Dia" => "Martes", "Hora" => "4ª"),
                    array("Dia" => "Viernes", "Hora" => "6ª")
                )
            ),

            "DWES" => array(
                "nombre" => "Desarrollo Web en Entorno Servidor",
                "profesor" => "Francisco José Aguilera Ruiz",
                "horas" => array(
                    array("Dia" => "Lunes", "Hora" => "1ª"),
                    array("Dia" => "Lunes", "Hora" => "2ª"),
                    array("Dia" => "Martes", "Hora" => "1ª"),
                    array("Dia" => "Martes", "Hora" => "2ª"),
                    array("Dia" => "Miercoles", "Hora" => "2ª"),
                    array("Dia" => "Miercoles", "Hora" => "3ª"),
                    array("Dia" => "Jueves", "Hora" => "4ª"),
                )
            ),

            "DWEC" => array(
                "nombre" => "Desarrollo Web en Entorno Cliente",
                "profesor" => "Jaime Rabasco Ronda",
                "horas" => array(
                    array("Dia" => "Lunes", "Hora" => "3ª"),
                    array("Dia" => "Lunes", "Hora" => "4ª"),
                    array("Dia" => "Martes", "Hora" => "5ª"),
                    array("Dia" => "Martes", "Hora" => "6ª"),
                    array("Dia" => "Miercoles", "Hora" => "6ª"),
                    array("Dia" => "Viernes", "Hora" => "4ª")
                    
                )
            ),

            "IPE2" => array(
                "nombre" => "Itinerario Personal para la Empleabilidad II",
                "profesor" => "German Cosano Torres",
                "horas" => array(
                    array("Dia" => "Miercoles", "Hora" => "5ª"),
                    array("Dia" => "Viernes", "Hora" => "2ª"),
                    array("Dia" => "Viernes", "Hora" => "3ª")
                )
            ),

            "ING" => array(
                "nombre" => "Inglés",
                "profesor" => "Silvia Sánchez Pedrajas",
                "horas" => array(
                    array("Dia" => "Jueves", "Hora" => "3ª"),
                    array("Dia" => "Viernes", "Hora" => "1ª")
                )
            ),

            "OPT" => array(
                "nombre" => "Optativa Dual",
                "profesor" => "María Magarín Corvillo",
                "horas" => array(
                    array("Dia" => "Miercoles", "Hora" => "4ª"),
                    array("Dia" => "Jueves", "Hora" => "1ª"),
                    array("Dia" => "Jueves", "Hora" => "2ª")

                )
                ),
            "PRO" => array(
            "nombre" => "Proyecto",
            "profesor" => "María Magarín Corvillo",
            "horas" => array(
                    array("Dia" => "Jueves", "Hora" => "5ª"),
                    array("Dia" => "Viernes", "Hora" => "5ª"),
                    )
            )
        )
            ),
            array(//aray principal que contiene el grupo de primero y su horario
        "grupo" => "1º DAW A",
        "horario" => array(////array de asignaturas
            
            "DAWEB" => array(//array que contiene los datos de la asignatura y otro array con los dias y horas
                "nombre" => "Base de datos",
                "profesor" => "Francisco José Aguilera Ruiz",
                "horas" => array(
                    //array que contiene los dias y horas de la asignatura
                    array("Dia" => "Miercoles", "Hora" => "1ª"),
                    array("Dia" => "Jueves", "Hora" => "6ª"),
                    
                )
            ),

            "DIWEB" => array(
                "nombre" => "Diseño de Interfaces Web",
                "profesor" => "Ana María Seco Sánchez",
                "horas" => array(
                    array("Dia" => "Lunes", "Hora" => "5ª"),
                    array("Dia" => "Lunes", "Hora" => "6ª"),
                    array("Dia" => "Martes", "Hora" => "3ª"),
                    array("Dia" => "Martes", "Hora" => "4ª"),
                    array("Dia" => "Viernes", "Hora" => "6ª")
                )
            ),

            "DWES" => array(
                "nombre" => "Programación",
                "profesor" => "Francisco José Aguilera Ruiz",
                "horas" => array(
                    array("Dia" => "Lunes", "Hora" => "1ª"),
                    array("Dia" => "Lunes", "Hora" => "2ª"),
                    array("Dia" => "Martes", "Hora" => "1ª"),
                    array("Dia" => "Martes", "Hora" => "2ª"),
                    array("Dia" => "Miercoles", "Hora" => "2ª"),
                    array("Dia" => "Miercoles", "Hora" => "3ª"),
                    array("Dia" => "Jueves", "Hora" => "4ª"),
                )
            ),

            "DWEC" => array(
                "nombre" => "Desarrollo Web en Entorno Cliente",
                "profesor" => "Jaime Rabasco Ronda",
                "horas" => array(
                    array("Dia" => "Lunes", "Hora" => "3ª"),
                    array("Dia" => "Lunes", "Hora" => "4ª"),
                    array("Dia" => "Martes", "Hora" => "5ª"),
                    array("Dia" => "Martes", "Hora" => "6ª"),
                    array("Dia" => "Miercoles", "Hora" => "6ª"),
                    array("Dia" => "Viernes", "Hora" => "4ª")
                    
                )
            ),

            "IPE2" => array(
                "nombre" => "Itinerario Personal para la Empleabilidad II",
                "profesor" => "German Cosano Torres",
                "horas" => array(
                    array("Dia" => "Miercoles", "Hora" => "5ª"),
                    array("Dia" => "Viernes", "Hora" => "2ª"),
                    array("Dia" => "Viernes", "Hora" => "3ª")
                )
            ),

            "ING" => array(
                "nombre" => "Inglés",
                "profesor" => "Silvia Sánchez Pedrajas",
                "horas" => array(
                    array("Dia" => "Jueves", "Hora" => "3ª"),
                    array("Dia" => "Viernes", "Hora" => "1ª")
                )
            ),

            "OPT" => array(
                "nombre" => "Optativa Dual",
                "profesor" => "María Magarín Corvillo",
                "horas" => array(
                    array("Dia" => "Miercoles", "Hora" => "4ª"),
                    array("Dia" => "Jueves", "Hora" => "1ª"),
                    array("Dia" => "Jueves", "Hora" => "2ª")

                )
                ),
            "PRO" => array(
            "nombre" => "Proyecto",
            "profesor" => "María Magarín Corvillo",
            "horas" => array(
                    array("Dia" => "Jueves", "Hora" => "5ª"),
                    array("Dia" => "Viernes", "Hora" => "5ª"),
                    
                    )
            )
        )
    )
    
);
//funcion para mostrar el horario de un grupo
function mostrarHorario($grupo) {
    global $horarios;// importar la variable global horarios para usarla dentro de la funcion

    // Definir los dias y horas de la tabla
    $dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];
    $horas = ["1ª", "2ª", "3ª", "4ª", "5ª", "6ª"];

    // Buscar el grupo seleccionado
    foreach ($horarios as $horario) {
        if ($horario['grupo'] == $grupo) {// si el grupo coincide
            // Crear estructura vacía
            $tabla = [];
            foreach ($horas as $h) {// recorrer las horas
                foreach ($dias as $d) {// recorrer los dias
                    $tabla[$h][$d] = "";
                }
            }

            // Rellenar tabla
            foreach ($horario['horario'] as $asig) {// recorrer las asignaturas
                foreach ($asig['horas'] as $h) {// recorrer las horas de cada asignatura
                    $tabla[$h['Hora']][$h['Dia']] = $asig['nombre'];
                }
            }

            echo "<h2>Horario de $grupo</h2>";
            echo "<table border='3' cellpadding='12' style='border-collapse:collapse;text-align:center'>";
            echo "<tr><th>Hora</th>";
            foreach ($dias as $d) {// recorrer los dias para crear la cabecera
                echo "<th>$d</th>";
            }

            foreach ($horas as $h) {// recorrer las horas para crear las filas
                echo "<tr><td><b>$h</b></td>";
                foreach ($dias as $d) {// recorrer los dias para rellenar las celdas
                    echo "<td>" . ($tabla[$h][$d] ?: "-") . "</td>";
                }
                echo "</tr>";
            }

            echo "</table>";
            return;
        }
    }
}
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Horario DAW</title>
</head>
<body>
     <form method="post" action=""><!-- formulario para seleccionar el grupo -->
        <label for="grupo">Seleccione el grupo:</label>
        <select name="grupo" id="grupo">
            <option value="1º DAW A">1º DAW A</option>
            <option value="2º DAW A">2º DAW A</option>
        </select>
        <input type="submit" value="Mostrar horario">
    </form>

    <?php
    if ($_SERVER['REQUEST_METHOD'] == 'POST') {// compruebo si se ha enviado el formulario 
        $grupo = $_POST['grupo'];
        mostrarHorario($grupo);
    }
    ?>
</body>
</html>