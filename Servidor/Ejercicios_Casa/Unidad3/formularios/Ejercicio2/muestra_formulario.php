<?php
$procesaFormulario = false;
$message = "";
//Declaramos mensajes de error
$nameError = $emailError = $groupError = "";
//declaramos valores iniciales de las variables
$name = "";
$email = "";
$group = "";
$intereses = array();
//determinamos si se pulso "SUBMIT" en el formulario
if(isset($_POST['enviar'])){
    $procesaFormulario = true;
    $name = $_POST["nombre"];
    $email = $_POST["email"];
    $group = $_POST["curso"];
    
    //Validacion
    if (empty($name)) {//validacion si esta vacia
        $procesaFormulario = false;
        $nameError = "Nombre requerido";     
    }

    if(filter_var($email, FILTER_VALIDATE_EMAIL)){
        $procesaFormulario = false;
        $emailError = "El formato del email no es valido";

    if (empty($group)) {
        $procesaFormulario = false;
        $groupError = "El grupo es rquerido";
    }

}
}



?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        $procesaFormulario = ;//bandera
        if (!$procesaFormulario) {
            ?>
            <form action="procesa_formulario.php" method="post">
            <label for="">Nombre:</label>
            <input type="text" name="nombre" id="" value="<?php echo $name . '<span class = "'.$nameError.'"></span>'?>"><br><br>
            Email:
            <input type="text" name="email" id="" value="<?php echo $email .'<span class = "'.$nameError.'"></span>'?>"><br>

            <br>
            Seleciona tu curso:
            <br>
            <?php
                include('config/config.php');
                foreach($aData as $clave => $valor) {
                    echo '<input type="radio" name="curso" value="' . $clave . '"/>' . $valor .  '<br/>';
                }
            ?>
        
            <button type="submit" name="enviar">Enviar</button>

            </form>
        <?php 
        }else{

        }
    ?>
    
</body>
</html>