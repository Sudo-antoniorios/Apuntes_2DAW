<?php

/**
 * @author German Cosano Torres
 * 
 * Ejercicio 1: 1. Almacena tres números en variables y escribirlos en pantalla de manera ordenada.
 * 
 * @version 1.0
 * 
 * @package Ejercicios_Casa\Unidad3\Condiciones
 */

$num1 = 10;
$num2 = 20;
$num3 = 30;

if ($num1 <= $num2 && $num1 <= $num3) {
    if ($num2 <= $num3) {
        echo "$num1, $num2, $num3";
    } else {
        echo "$num1, $num3, $num2";
    }
} elseif ($num2 <= $num1 && $num2 <= $num3) {
    if ($num1 <= $num3) {
        echo "$num2, $num1, $num3";
    } else {
        echo "$num2, $num3, $num1";
    }
} else {
    if ($num1 <= $num2) {
        echo "$num3, $num1, $num2";
    } else {
        echo "$num3, $num2, $num1";
    }
}