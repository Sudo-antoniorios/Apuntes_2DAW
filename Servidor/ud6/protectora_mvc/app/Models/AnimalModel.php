<?php

/*
 * @author: Antonio Ríos Casado
 * 
 * Fecha : 20-11-2025
 *
 */

namespace App\Models;

class AnimalModel extends DAbstractModel
{
    private $id;
    private $nombre;
    private $raza;
    private $fechaNacimiento;

    /* ==========================
       GET
       ========================== */
    public function get($id = '')
    {
        $this->params = [];
        $this->query = "SELECT * FROM mascotas";

        if ($id !== '') {
            $this->query .= " WHERE id = :id";
            $this->params = [':id' => $id];
        }

        $stmt = $this->getConnection()->prepare($this->query);
        $stmt->execute($this->params);

        $this->rows = $stmt->fetchAll(\PDO::FETCH_ASSOC);
        return $this->rows;
    }

    /* ==========================
       CREATE  (set)
       ========================== */
    public function set()
    {
        $sql = "INSERT INTO mascotas (nombre, raza, fechaNacimiento)
                VALUES (:nombre, :raza, :fechaNacimiento)";

        $stmt = $this->getConnection()->prepare($sql);
        $stmt->execute([
            ':nombre' => $this->nombre,
            ':raza' => $this->raza,
            ':fechaNacimiento' => $this->fechaNacimiento
        ]);
    }

    /* ==========================
       UPDATE  (edit)
       ========================== */
    public function edit()
    {
        $sql = "UPDATE mascotas 
                SET nombre = :nombre,
                    raza = :raza,
                    fechaNacimiento = :fechaNacimiento
                WHERE id = :id";

        $stmt = $this->getConnection()->prepare($sql);

        $stmt->execute([
            ':nombre' => $this->nombre,
            ':raza' => $this->raza,
            ':fechaNacimiento' => $this->fechaNacimiento,
            ':id' => $this->id
        ]);
    }

    /* ==========================
       DELETE  (compatible con abstract)
       ========================== */
    public function delete($id = '')
    {
        $sql = "DELETE FROM mascotas WHERE id = :id";

        $stmt = $this->getConnection()->prepare($sql);
        $stmt->execute([':id' => $id]);
    }

    /* ==========================
       GETTERS / SETTERS
       ========================== */
    public function setId($id)
    {
        $this->id = $id;
    }
    public function getId()
    {
        return $this->id;
    }

    public function setNombre($nombre)
    {
        $this->nombre = trim($nombre);
    }
    public function getNombre()
    {
        return $this->nombre;
    }

    public function setRaza($raza)
    {
        $this->raza = trim($raza);
    }
    public function getRaza()
    {
        return $this->raza;
    }

    public function setFechaNacimiento($fecha)
    {
        $this->fechaNacimiento = $fecha;
    }
    public function getFechaNacimiento()
    {
        return $this->fechaNacimiento;
    }
}
