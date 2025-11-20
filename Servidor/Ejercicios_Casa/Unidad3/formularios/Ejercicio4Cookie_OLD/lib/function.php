<?php
/**
 * 
 * 
 * 
 * 
 */

function clearData($aData)
{
    $aData = trim($aData);//quita los espacios en blanco
    $aData = stripcslashes($aData);//Las barras de la url las escapea
    $aData = htmlspecialchars($aData);//los caractes especiales los sustituye para que no tengan funcionalidad
    return $aData;
};