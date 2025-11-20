<?php

define('MIN', 0);
define('MAX', 100);
define('TAM', 10);

$arrayPares = array();
$arrayCuadrados = array();

while (count($arrayPares) < TAM) { 
    $num = rand(MIN,MAX);
    if ($num % 2 == 0 && !in_array($num, $arrayPares)) {
        $arrayPares[] = $num;
    }
       
}
print_r($arrayPares);