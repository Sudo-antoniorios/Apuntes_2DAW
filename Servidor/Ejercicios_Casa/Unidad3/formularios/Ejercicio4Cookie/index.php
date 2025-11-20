<?php
/**
 * Prueba de clase. Manejo de cookies
 * @author German Cosano Torres
 * @package category
 * @license MIT
 * 
 */
include("lib/function.php");
include("cierreSesion.php");
include("config/usuarios.php");

session_start();

if (!isset($_SESSION["auth"])) {
    $_SESSION["auth"] = false;
    $_SESSION["user"] = "Invitado";
}

$procesaFormulario = false;
$msgSalida = "";
$recordar = false;
$usuario = "";
$password = "";
if (isset($_COOKIE['ckusuario'])) {
    $usuario = $_COOKIE['ckusuario'];
    $password = $_COOKIE['ckpassword'];
}



if (isset($_POST["Enviar"])) {
    // var_dump($_POST);
    $procesaFormulario = true;
    $usuario = clearData($_POST['Usuario']);
    $password = clearData($_POST['psw']);
    $recordar = clearData($_POST["save"]);
    $indice = array_search($usuario, array_column($usuarios , 'usuario'));
    if ($indice) {
        if ($usuarios[$indice]["password"] == $password) {
            $_SESSION["auth"] = true;
            $_SESSION["user"] = $usuarios[$indice]["nombre"];
        } else{
            $msgSalida = "Credenciales BAD";
        }
        
        
    }

}

//Variables para la vista 

$nombre = $_SESSION["user"];
$auth = $_SESSION["auth"];

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.">
    <title>Autentificacion</title>
</head>
<body>
    <header>
        <h1>Aut basica</h1>
    </header>
    <?php
    if ($auth) {
        include("include/login_view.php");
    }else {
        echo "<p>Nombre usuario: ". $nombre . "</p>" 
        . '<a href="cierreSesion.php">Cierre de Sesion</a>';
    }
    
    ?>
    
    <nav>
        <?php 
        if ($auth) {
            include('include/nav_view.php');

        }else {
            include('include/user_view.php');
        }
         ?>
    </nav>
                
</body>
</html>
