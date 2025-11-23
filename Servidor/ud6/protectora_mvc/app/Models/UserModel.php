<?php

/*
 * @author: Antonio Ríos Casado
 * 
 * Fecha : 20-11-2025
 *
 */

namespace App\Models;

class UserModel extends DAbstractModel
{
    private $id;
    private $nombre;
    private $apellidos;
    private $telefono;
    private $usuario;
    private $password;
    private $rol;

    // =======================
    // Métodos protegidos (herencia)
    // =======================

    // READ
    protected function get($id = '')
    {
        try {
            $this->clearParameters();
            $this->query = "SELECT * FROM usuario";
            if ($id !== '') {
                $this->query .= " WHERE id = :id";
                $this->params = [':id' => $id];
            }
            $this->get_results_from_query();
            return $this->rows;
        } catch (\PDOException $e) {
            throw new \Exception($e->getMessage());
        }
    }

    // CREATE
    protected function set()
    {
        try {
            $this->clearParameters();
            $this->query = "
                INSERT INTO usuario (nombre, apellidos, telefono, usuario, password, rol)
                VALUES (:nombre, :apellidos, :telefono, :usuario, :password, :rol)
            ";
            $this->params = [
                ':nombre' => $this->nombre,
                ':apellidos' => $this->apellidos,
                ':telefono' => $this->telefono,
                ':usuario' => $this->usuario,
                ':password' => $this->password,
                ':rol' => $this->rol
            ];
            $this->execute_single_query();
        } catch (\PDOException $e) {
            throw new \Exception($e->getMessage());
        }
    }

    // UPDATE
    protected function edit()
    {
        try {
            $this->clearParameters();
            $this->query = "
                UPDATE usuario
                SET nombre = :nombre, apellidos = :apellidos, telefono = :telefono,
                    usuario = :usuario, password = :password, rol = :rol
                WHERE id = :id
            ";
            $this->params = [
                ':nombre' => $this->nombre,
                ':apellidos' => $this->apellidos,
                ':telefono' => $this->telefono,
                ':usuario' => $this->usuario,
                ':password' => $this->password,
                ':rol' => $this->rol,
                ':id' => $this->id
            ];
            $this->execute_single_query();
        } catch (\PDOException $e) {
            throw new \Exception($e->getMessage());
        }
    }

    // DELETE
    protected function delete($id = '')
    {
        try {
            $this->clearParameters();
            $this->query = "DELETE FROM usuario WHERE id = :id";
            $this->params = [':id' => $id];
            $this->execute_single_query();
        } catch (\PDOException $e) {
            throw new \Exception($e->getMessage());
        }
    }

    // Wrappers públicos para el servicio

    public function fetch($id = '')
    {
        return $this->get($id);
    }

    public function createUser()
    {
        return $this->set();
    }

    public function updateUser()
    {
        return $this->edit();
    }

    public function remove($id)
    {
        return $this->delete($id);
    }

    // =======================
    // Getters / Setters
    // =======================
    public function setId($v)
    {
        $this->id = $v;
    }
    public function setNombre($v)
    {
        $this->nombre = $v;
    }
    public function setApellidos($v)
    {
        $this->apellidos = $v;
    }
    public function setTelefono($v)
    {
        $this->telefono = $v;
    }
    public function setUsuario($v)
    {
        $this->usuario = $v;
    }
    public function setPassword($v)
    {
        $this->password = password_hash($v, PASSWORD_DEFAULT);
    }
    public function setRol($v)
    {
        $this->rol = $v;
    }
}