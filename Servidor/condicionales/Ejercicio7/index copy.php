<?php

$paises = array(
    array("id" => "es", "pais" => "España", "capital" => "Madrid"),
    array("id" => "it", "pais" => "Italia", "capital" => "Roma"),
    array("id" => "fr", "pais" => "Francia", "capital" => "Paris"),
);

$nombrePais  = array();

    foreach ($paises as $valor){
        echo $valor["pais "]; 
    }