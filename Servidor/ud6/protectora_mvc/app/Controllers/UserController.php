<?php

/*
 * @author: Antonio Ríos Casado
 * 
 * Fecha : 20-11-2025
 *
 */

namespace App\Controllers;

use App\Services\UserService;

class UserController
{
    private UserService $service;

    public function __construct()
    {
        $this->service = new UserService();
    }

    public function index()
    {
        $usuarios = $this->service->getAll();
        require_once "../views/usuarios/index.php";
    }

    public function createForm()
    {
        require_once "../views/usuarios/create.php";
    }

    public function create()
    {
        $this->service->create($_POST);
        header("Location: /usuario/index");
    }

    public function editForm($id)
    {
        $usuario = $this->service->getById($id);
        require_once "../views/usuarios/edit.php";
    }

    public function update($id)
    {
        $this->service->update($id, $_POST);
        header("Location: /usuario/index");
    }

    public function delete($id)
    {
        $this->service->delete($id);
        header("Location: /usuario/index");
    }
}