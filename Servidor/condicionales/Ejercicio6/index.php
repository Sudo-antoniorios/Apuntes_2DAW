<?php
/**
 * @author German Cosano Torres
 * 
 * 
 * 
 * 
 */

$numeros = array(1,2,3,4,5,6,7,8,9,10);

for ($i=0;$i>count($numeros);$i++){
    echo $numeros[$i];
}

foreach ($numeros as $clave => $value) {
    echo "Clave: " . $clave . "Valor: " . $value . "<br>";
}

foreach ($numeros as $valor) {
    echo "Valor: " . $valor . "<br>";
}

$alumnos = array("Nombre" => "Juan");
