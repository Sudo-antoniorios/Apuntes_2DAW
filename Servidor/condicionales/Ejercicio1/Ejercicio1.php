<?php
/**
 * @autor : Antonio Ríos Casado
 * Ejercicio que muestra en color dependiendo del numero
 */

#Declaracion de variables
$n = -1; 
$mensaje = "";

#----Conprobacion----
if ($n == 0) {
    $mensaje = "El numero es 0";
    
}

if ($n > 0) {
    $mensaje = "El numero es positivo";
}

if ($n < 0) {
    $mensaje = "El numero es negativo";
}

?>

<!--Vista--> 
<!DOCTYPE html>
<html lang="en">
<head >
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .rojo {color: red}
    </style>
</head>
<body>
    <h1>Numero positivo/Negativo/0</h1>
    <p class = "rojo">
    <?php
    echo $mensaje;
    ?>
    </p>
</body>
</html>