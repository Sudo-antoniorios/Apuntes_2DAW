<?php

/*
 * @author: Antonio Ríos Casado
 * 
 * Fecha : 20-11-2025
 *
 */

use App\Models\AnimalModel;

require_once __DIR__ . "/../vendor/autoload.php";

$animal = new AnimalModel();

// -------------------------------------------------
//   EDITAR – si viene ?edit=ID cargamos el animal
// -------------------------------------------------
$editAnimal = null;

if (isset($_GET['edit'])) {
    $id = (int)$_GET['edit'];
    $data = $animal->get($id);

    if (!empty($data)) {
        $editAnimal = $data[0];
    }
}

// -------------------------------------------------
//   ELIMINAR
// -------------------------------------------------
if (isset($_GET['delete'])) {
    $animal->delete((int)$_GET['delete']);
    header("Location: index.php");
    exit;
}

// -------------------------------------------------
//   INSERTAR / ACTUALIZAR
// -------------------------------------------------
if ($_SERVER["REQUEST_METHOD"] === "POST") {

    // EDITAR
    if (!empty($_POST["id"])) {
        $animal->setId($_POST["id"]);
        $animal->setNombre($_POST["nombre"]);
        $animal->setRaza($_POST["raza"]);
        $animal->setFechaNacimiento($_POST["fechaNacimiento"]);
        $animal->edit();
        header("Location: index.php");
        exit;
    }

    // INSERTAR NUEVO
    $animal->setNombre($_POST["nombre"]);
    $animal->setRaza($_POST["raza"]);
    $animal->setFechaNacimiento($_POST["fechaNacimiento"]);
    $animal->set();

    header("Location: index.php");
    exit;
}

// -------------------------------------------------
//   LISTADO
// -------------------------------------------------
$listado = $animal->get();

?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <title>CRUD Animales</title>
    <link rel="stylesheet" href="css/style.css">
</head>

<body>

    <h1>CRUD Animales</h1>

    <!-- FORMULARIO -->
    <form method="POST">
        <h3><?= $editAnimal ? "Editar Animal" : "Añadir Animal" ?></h3>

        <input type="hidden" name="id" value="<?= $editAnimal['id'] ?? '' ?>">

        <label>Nombre:</label><br>
        <input type="text" name="nombre" required
            value="<?= $editAnimal['nombre'] ?? '' ?>">

        <label>Raza:</label><br>
        <input type="text" name="raza" required
            value="<?= $editAnimal['raza'] ?? '' ?>">

        <label>Fecha de Nacimiento:</label><br>
        <input type="date" name="fechaNacimiento" required
            value="<?= $editAnimal['fechaNacimiento'] ?? '' ?>">

        <br><br>
        <button type="submit">
            <?= $editAnimal ? "Guardar Cambios" : "Añadir" ?>
        </button>
    </form>

    <!-- LISTADO -->
    <table>
        <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Raza</th>
            <th>Fecha de Nacimiento</th>
            <th>Acciones</th>
        </tr>

        <?php foreach ($listado as $a): ?>
            <tr>
                <td><?= $a['id'] ?></td>
                <td><?= htmlspecialchars($a['nombre']) ?></td>
                <td><?= htmlspecialchars($a['raza']) ?></td>
                <td><?= $a['fechaNacimiento'] ?></td>
                <td>
                    <a href="?edit=<?= $a['id'] ?>">Editar</a>
                    <a href="?delete=<?= $a['id'] ?>"
                        onclick="return confirm('¿Eliminar este animal?');">Eliminar</a>
                </td>
            </tr>
        <?php endforeach; ?>
    </table>

</body>

</html>