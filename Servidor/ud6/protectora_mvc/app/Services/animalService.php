<?php

/*
 * @author: Antonio Ríos Casado
 * 
 * Fecha : 20-11-2025
 *
 */

namespace App\Services;

use App\Models\AnimalModel;

class AnimalService
{
    private AnimalModel $animalModel;

    public function __construct()
    {
        $this->animalModel = new AnimalModel();
    }

    /**
     * Obtener todos los animales o uno por ID.
     */
    public function get($id = '')
    {
        return $this->animalModel->get($id);
    }

    /**
     * Crear un nuevo animal.
     */
    public function create(array $data)
    {
        $this->animalModel->setNombre($data['nombre']);
        $this->animalModel->setRaza($data['raza']);
        $this->animalModel->setFechaNacimiento($data['fechaNacimiento']);

        $this->animalModel->set();
        return true;
    }

    /**
     * Editar un animal existente.
     */
    public function update(int $id, array $data)
    {
        $this->animalModel->setId($id);
        $this->animalModel->setNombre($data['nombre']);
        $this->animalModel->setRaza($data['raza']);
        $this->animalModel->setFechaNacimiento($data['fechaNacimiento']);

        $this->animalModel->edit();
        return true;
    }

    /**
     * Eliminar un animal.
     */
    public function delete(int $id)
    {
        $this->animalModel->delete($id);
        return true;
    }
}
