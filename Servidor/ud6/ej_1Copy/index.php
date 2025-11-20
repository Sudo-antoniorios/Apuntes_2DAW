<?php

/**
 * @author: Antonio Ríos Casado
 *
 * descripcion: 
 *
 * fecha: 06/11/2025
 *
 * @license: Proprietary 
 * 
 * @package: ej0\index.php
 *
 * @version: 1.0
 */

require_once 'lib/function.php';
$db = conectaDB();


$result = [];
$errornombre = '';
$errorfecha = '';
$nombre = '';
$raza = '';
$fecha = '';

if (isset($_POST['submit'])) {
    $nombre = $_POST['nombre'];
    $raza = $_POST['raza'];
    $fecha = $_POST['fecha'];
    
    
    if ($nombre !== '') {
        if ($fecha !== ''){
            $sql = "INSERT INTO mascotas (Nombre, Raza, FechaNacimiento) VALUES (?, ?, ?)";
            $consulta = $db->prepare($sql);
            $consulta->execute([$nombre, $raza, $fecha]);
            // Evitar reenvío del formulario al recargar: redirigir a la misma página
            header("Location: " . $_SERVER['PHP_SELF']);
            exit;
        } else {
            $errorfecha = "La fecha no puede estar vacia.";
        }
        
    }else {
        $errornombre = "El nombre no puede estar vacío.";
    }
}

// Obtener la lista actualizada de mascotas
$stmt = $db->query("SELECT Nombre FROM mascotas");
$result = $stmt->fetchAll(PDO::FETCH_ASSOC);


?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="" method="post">
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" value="<?php echo $nombre?>">
        <input type="submit" value="Enviar" name = "submit">
        <?php echo "$errornombre";?><br><br>

        <label for="Raza">Raza:</label>
        <input type="text" name="raza" id="idraza" value="<?php echo $raza?>"><br><br>


        <label for="fecha">fecha de nacimiento:</label>
        <input type="date" name="fecha" id="idfecha" value = "<?php echo $fecha ?>"><?php echo "$errorfecha";?>
    </form>
    
    <?php
    
    echo "<h2>Lista de mascotas :</h2>";
    foreach ($result as $row) {
        echo $row['Nombre'] . "<br>";
    }
    

?>
</body>
</html>