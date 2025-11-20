<?php

/**
 * @author: Antonio Ríos Casado
 *
 * descripcion: 
 *
 * fecha: 17/11/2025
 *
 * @license: Proprietary 
 * 
 * @package: protectora_mvc\app\services\AnimalService.php
 *
 * @version: 1.0
 */

namespace App\Services;
use App\Models\AnimalModel;
class AnimalService
{
    private $animalModel;

    public function __construct()
    {
        $this->animalModel = new AnimalModel();
    }

    public function getAnimal($id = '')
    {
        return $this->animalModel->get($id);
    }

    public function addAnimal($nombre, $raza, $fecha)
    {
        $this->animalModel->setNombre($nombre);
        $this->animalModel->setRaza($raza);
        $this->animalModel->setFecha($fecha);
        return $this->animalModel->set();
    }

    public function updateAnimal($id, $nombre, $raza, $fecha)
    {
        $this->animalModel->setId($id);
        $this->animalModel->setNombre($nombre);
        $this->animalModel->setRaza($raza);
        $this->animalModel->setFecha($fecha);
        return $this->animalModel->edit();
    }

    public function deleteAnimal($id)
    {
        return $this->animalModel->delete($id);
    }
}