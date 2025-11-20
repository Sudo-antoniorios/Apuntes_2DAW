<?php

$apaises = array(
    array("id" => "es", "pais" => "España", "capital" => "Madrid"),
    array("id" => "it", "pais" => "Italia", "capital" => "Roma"),
    array("id" => "fr", "pais" => "Francia", "capital" => "Paris"),
);

$nombrePaises = array_map(Function($pais): {
    return $pais["pais"];
},);
print_r($nombrePaises)