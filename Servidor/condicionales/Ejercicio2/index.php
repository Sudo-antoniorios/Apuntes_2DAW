<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        // día y mes actual
        $hoy = date("d-m");

        if ($hoy >= "20-03" && $hoy < "20-06") {
            echo '<img src="primavera.jpeg" alt="">';
            echo '<h1>Primavera</h1>';
        } elseif ($hoy >= "20-06" && $hoy < "22-09") {
            echo '<img src="verano.jpg" alt="">';
            echo '<h1>Verano</h1>';
        } elseif ($hoy >= "22-09" && $hoy < "21-12") {
            echo '<img src="otoño.jpeg" alt="">';
            echo '<h1>Otoño</h1>';
        } else {
            echo '<img src="invierno.jpeg" alt="">';
            echo '<h1>Invierno</h1>';
        }

    ?>
    
</body>
</html>