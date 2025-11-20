<form action="" method="post">
        Usuario:
        <input type="text" name="Usuario" value="<?php echo $usuario;  ?>">
        Password:
        <input type="password" name="psw" id="" value="<?php echo $password;  ?>"/>
        
        <input type="submit" value="Enviar" name="Enviar"/>

        <span><?php echo $msgSalida ?></span>
        </form>

        