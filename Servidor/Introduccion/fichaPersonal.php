<?php
/* 
 * @author Antonio Ríos Casado
 * Fecha: 16/09/25
*/
# DECLARAMOS UNA VARIABLE DE MENSAJE
$nombre = "Antonio";
$apellidos = "Ríos Casado";
$dianacimiento = 20;
$mesnacimiento = 9;
$añonacimiento = 2000;
$diaactual = 16;
$mesactual = 9;
$añoactual = 2025;
$edad = $añoactual - $añonacimiento;
if (($dianacimiento <= $diaactual) && ($mesnacimiento <= $mesactual)) {
    $edad = $edad + 1;
}
?>
<!--Vista-->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ficha personal</title>
</head>
<body>
    <?php 
    #Mostramos los datos personales oncatenados
    echo $nombre . " " .$apellidos;
    echo "Tu edad es: " . $edad;
    ?>
</body>
</html>