<?php

require_once '../models/Persona.php';
require_once '../models/perro.php';

use App\Models\Persona;
use App\Models\Perro;

$perro = new Perro("Firulais", "Marron");
echo "Dame la pata:<br>";
$perro->darPata();
$perro->entrenar();
$perro->entrenar();
$perro->entrenar();
$perro->entrenar();
$perro->entrenar();
$perro->entrenar();
$perro->entrenar();
$perro->entrenar();