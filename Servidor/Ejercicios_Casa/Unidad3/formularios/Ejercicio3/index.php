<?php

/**
 * @author German Cosano Torres 
 * 
 * Ejercicio que muestre un fromulario para sumar varios numeros
 */
include('lib/function.php');

//Declaracion de variables
$cantidad = 0;
$mostrarSuma = false;
$resultado = 0;
$mostrarResultado = false;
$n = array();

//Recuperacion de datos
if (isset($_POST["enviar"])) {
    $cantidad = clearData($_POST["cantidad"]);
    $mostrarSuma = true;
}

if (isset($_POST["sumar"])) {
    $mostrarResultado = true;
    $cantidad = clearData($_POST["cantidad"]);
    for ($i=0; $i < $cantidad-1; $i++) { 
         $n[$i] = clearData($_POST[$n[$i]]);
    }
}


?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>formulario</title>
</head>
<body>
    <form action="" method="post">
        Cantidad de Numeros a sumar:
        <input type="text" name="cantidad" value="2"/><br>

        <button type="submit" name="enviar">Enviar</button>
    </form>

    <?php
    
    if($mostrarSuma){
           echo'<form action="" method="post">';
                for ($i=0; $i < $cantidad ; $i++) {
                    echo "Numero: " . $i+1;
                    echo'<input type="text" name="n[]"/><br/>';
                }
            echo '<button type="submit" name="sumar">Sumar</button>';
            echo '<input type="hidden" name="cantidad" value="$cantidad"';
            echo'</form>';
        if($mostrarResultado){
            echo 'Resultado: ' . $resultado; 
        }
        
    }

    ?>
    
</body>
</html>