<?php

session_start();

echo "Pagina 1";

echo $_SESSION['contador'];
$_SESSION['contador'] ++ ;


?>

<a href="index.php">volver</a>