<?php

/**
 * @author German Cosano Torres
 * 
 * 
 */
include("config/config.php");

$alumnos = array("German", "Ali", "Antonio","Alfonso", "Adri", "Angel", "Roberto", "Fernando", "Miguel");
$num = rand(MIN , MAX)

?>



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Array </title>
</head>
<body>
    <h1>Seleccion de Alumnos</h1>
    <p><?php echo $alumnos[$num] ?></p>
    <br>
    <a href="<?php echo $_SERVER['PHP_SELF'];?>">Recargar</a>
</body>
</html>