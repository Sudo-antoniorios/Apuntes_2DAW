<?php
/**
 * Prueba de clase. Manejo de cookies
 * @author German Cosano Torres
 * @package category
 * @license MIT
 * 
 */
include("lib/function.php");

session_start();
if (!isset($_SESSION["contador"] )) {
    $_SESSION["contador"] = 0;

}
$contadorSesion = $_SESSION['contador'];
$contadorLocal = 0;



$procesaFormulario = false;
$msgSalida = "Credenciales bad";
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
    if (($usuario == 'admin') && ($password == 'admin'))  {
        $msgSalida = "Credenciales ok";
        if ($recordar ) {
            setcookie("ckusuario", $usuario, time() + 3600);
            setcookie("ckpassword", $password, time() + 3600);
        }
    }

}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Prueba cookie</title>
</head>
<body>
    <header>
        <h1>Aut basica</h1>
    </header>
    <form action="" method="post">
        Usuario:
        <input type="text" name="Usuario" value="<?php echo $usuario;  ?>">
        Password:
        <input type="password" name="psw" id="" value="<?php echo $password;  ?>"/>
        
        <input type="submit" value="Enviar" name="Enviar"/>

        
    </form>
    <nav>
        <?php include('include/nav_view.php') ?>
    </nav>

    <h2>Publica 2</h2>
        

        
</body>
</html>
