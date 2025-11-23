<?php

/*
 * @author: Antonio Ríos Casado
 * 
 * Fecha : 20-11-2025
 *
 */

require_once __DIR__ . "/../vendor/autoload.php";

use App\Models\AnimalModel;

// Variables
$editAnimal = null;
$modelo = new AnimalModel();

// --- POST: Crear o Editar ---
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nombre = $_POST['nombre'] ?? '';
    $raza = $_POST['raza'] ?? '';
    $fecha = $_POST['fechaNacimiento'] ?? '';

    if ($_POST['action'] === 'create') {
        $nuevo = new AnimalModel();
        $nuevo->setNombre($nombre);
        $nuevo->setRaza($raza);
        $nuevo->setFechaNacimiento($fecha);
        $nuevo->set();
        header("Location: index.php");
        exit;
    } elseif ($_POST['action'] === 'edit') {
        $editar = new AnimalModel();
        $editar->setId($_POST['id']);
        $editar->setNombre($nombre);
        $editar->setRaza($raza);
        $editar->setFechaNacimiento($fecha);
        $editar->edit();
        header("Location: index.php");
        exit;
    }
}

// --- GET: Eliminar o cargar para editar ---
if (isset($_GET['delete'])) {
    $borrar = new AnimalModel();
    $borrar->delete($_GET['delete']);
    header("Location: index.php");
    exit;
} elseif (isset($_GET['edit'])) {
    $editAnimal = $modelo->get($_GET['edit'])[0] ?? null;
}

// --- Recuperar todos los animales ---
$animales = $modelo->get();
?>

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <title>CRUD Animales</title>
    <style>
        body {
            font-family: Arial;
            background: #f4f6f8;
            padding: 20px;
        }

        h1 {
            color: #333;
        }

        table {
            border-collapse: collapse;
            width: 100%;
            background: #fff;
            margin-top: 20px;
            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
        }

        th,
        td {
            border: 1px solid #ddd;
            padding: 12px;
            text-align: left;
        }

        th {
            background: #007BFF;
            color: #fff;
        }

        tr:nth-child(even) {
            background: #f2f2f2;
        }

        .actions a {
            margin-right: 5px;
            padding: 5px 10px;
            border-radius: 4px;
            color: #fff;
            text-decoration: none;
        }

        .edit-btn {
            background: #28a745;
        }

        .delete-btn {
            background: #dc3545;
        }

        form {
            background: #fff;
            padding: 20px;
            margin-top: 20px;
            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
        }

        form input {
            padding: 8px;
            margin: 5px 0;
            width: 100%;
            box-sizing: border-box;
        }

        form button {
            padding: 10px 15px;
            margin-top: 10px;
            background: #007BFF;
            color: #fff;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }
    </style>
</head>

<body>

    <h1>CRUD Animales</h1>

    <!-- Formulario Añadir / Editar -->
    <form method="POST">
        <input type="hidden" name="action" value="<?= $editAnimal ? 'edit' : 'create' ?>">
        <?php if ($editAnimal): ?>
            <input type="hidden" name="id" value="<?= htmlspecialchars($editAnimal['id']) ?>">
        <?php endif; ?>
        <label>Nombre:</label>
        <input type="text" name="nombre" value="<?= htmlspecialchars($editAnimal['nombre'] ?? '') ?>" required>
        <label>Raza:</label>
        <input type="text" name="raza" value="<?= htmlspecialchars($editAnimal['raza'] ?? '') ?>" required>
        <label>Fecha de Nacimiento:</label>
        <input type="date" name="fechaNacimiento" value="<?= htmlspecialchars($editAnimal['fechaNacimiento'] ?? '') ?>" required>
        <button type="submit"><?= $editAnimal ? 'Actualizar' : 'Añadir' ?></button>
    </form>

    <!-- Tabla de Animales -->
    <?php if (empty($animales)): ?>
        <p>No hay animales registrados.</p>
    <?php else: ?>
        <table>
            <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Raza</th>
                <th>Fecha de Nacimiento</th>
                <th>Acciones</th>
            </tr>
            <?php foreach ($animales as $a): ?>
                <tr>
                    <td><?= htmlspecialchars($a['id'] ?? '') ?></td>
                    <td><?= htmlspecialchars($a['nombre'] ?? '') ?></td>
                    <td><?= htmlspecialchars($a['raza'] ?? '') ?></td>
                    <td><?= htmlspecialchars($a['fechaNacimiento'] ?? '') ?></td>
                    <td class="actions">
                        <a class="edit-btn" href="?edit=<?= $a['id'] ?>">Editar</a>
                        <a class="delete-btn" href="?delete=<?= $a['id'] ?>" onclick="return confirm('Eliminar este animal?')">Eliminar</a>
                    </td>
                </tr>
            <?php endforeach; ?>
        </table>
    <?php endif; ?>

</body>

</html>