<?php

/*
 * @author: Antonio Ríos Casado
 * 
 * Fecha : 20-11-2025
 *
 */

namespace App\Services;

use App\Models\UserModel;

class UserService
{
    private UserModel $userModel;

    public function __construct()
    {
        $this->userModel = new UserModel();
    }

    public function getAll()
    {
        return $this->userModel->fetch();
    }

    public function getById($id)
    {
        $result = $this->userModel->fetch($id);
        return $result[0] ?? null;
    }

    public function create(array $data)
    {
        $this->userModel->setNombre($data['nombre']);
        $this->userModel->setApellidos($data['apellidos']);
        $this->userModel->setTelefono($data['telefono']);
        $this->userModel->setUsuario($data['usuario']);
        $this->userModel->setPassword($data['password']);
        $this->userModel->setRol($data['rol']);

        $this->userModel->createUser();
    }

    public function update(int $id, array $data)
    {
        $this->userModel->setId($id);
        $this->userModel->setNombre($data['nombre']);
        $this->userModel->setApellidos($data['apellidos']);
        $this->userModel->setTelefono($data['telefono']);
        $this->userModel->setUsuario($data['usuario']);

        if (!empty($data['password'])) {
            $this->userModel->setPassword($data['password']);
        }

        $this->userModel->setRol($data['rol']);

        $this->userModel->updateUser();
    }

    public function delete($id)
    {
        $this->userModel->remove($id);
    }
}
