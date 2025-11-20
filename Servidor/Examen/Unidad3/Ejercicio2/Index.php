<?php

/**
 * @author: Antonio Ríos Casado
 *
 * descripcion: Formulario de cuestionario simple con preguntas de texto y de opción múltiple.
 *
 * fecha: 05/11/2025
 *
 * @license: Proprietary 
 * 
 * @package: Examen\Unidad3\Ejercicio2\Index.php
 *
 * @version: 1.0
 */

// Array de idiomas
$languages = array("Español", "Inglés", "Francés", "Alemán", "Italiano", "Portugués");

// Array que contiene las preguntas del cuestionario
$questions = array(
    array("pregunta" => "The room where secretaries work is called an .....",
          "Tipo" => "text",
          "Respuesta" => array("office"),
          "Acierto" => 1,
          "Fallo" => 0),

    array("pregunta" => "To go to the top of the building you can take the .....",
          "Tipo" => "text",
          "Respuesta" => array("lift", "elevator"),
          "Acierto" => 1,
          "Fallo" => 0),

    array("pregunta" => "I ..... tennis every Sunday morning.",
          "Tipo" => "Multiple-choice",
          "Opciones" => array("playing","play","am playing","am play"),
          "Respuesta" => "play",
          "Acierto" => 1,
          "Fallo" => -0.25),

    array("pregunta" => "Don't make so much noise. Noriko ..... to study for her ESL test!",
          "Tipo" => "Multiple-choice",
          "Opciones" => array("try","tries","tried","is trying"),
          "Respuesta" => "is trying",
          "Acierto" => 1,
          "Fallo" => -0.25),

    array("pregunta" => "Jun-Sik ..... his teeth before breakfast every morning.",
          "Tipo" => "Multiple-choice",
          "Opciones" => array("will cleaned","is cleaning","cleans","clean"),
          "Respuesta" => "cleans",
          "Acierto" => 1,
          "Fallo" => -0.25)
);

$result_text = ""; // Aquí guardaremos el resultado

if (isset($_POST["submit"])) {
    $name = $_POST["name"];
    $language = $_POST["language"];
    $answers = $_POST["answer"];

    $score = 0; // Puntuación inicial

    // Construimos el texto del resultado
    $result_text .= "<h2>Resultado del cuestionario</h2>";
    $result_text .= "<p><b>Nombre:</b> $name</p>";
    $result_text .= "<p><b>Idioma:</b> $language</p>";
    $result_text .= "<hr>";

    // Recorremos todas las preguntas
    foreach ($questions as $i => $q) {
        $user_answer = isset($answers[$i]) ? trim($answers[$i]) : "";
        $correct = false;

        // Verificamos si la respuesta es correcta
        if ($q["Tipo"] == "text") {
            foreach ($q["Respuesta"] as $r) {
                if (strcasecmp($user_answer, $r) == 0) {
                    $correct = true;
                    break;
                }
            }
        } else {// La pregunta es de opción múltiple
            if ($user_answer == $q["Respuesta"]) {
                $correct = true;
            }
        }

        // Sumamos puntos
        if ($correct) {
            $score += $q["Acierto"];
            $result_text .= "<p><b>" . ($i+1) . ".</b> $user_answer =>  YES!! Correcto</p>";
        } else {// Respuesta incorrecta
            $score += $q["Fallo"];
            $correct_answer = is_array($q["Respuesta"]) ? implode(" / ", $q["Respuesta"]) : $q["Respuesta"];
            $result_text .= "<p><b>" . ($i+1) . ".</b> $user_answer =>  X (Correcta: $correct_answer)</p>";
        }
    }

    $result_text .= "<hr><h3>Puntuación final: $score puntos</h3>";
}

function mostrar_preguntas($questions) {// función para mostrar las preguntas del cuestionario
    foreach ($questions as $i => $q) {
        echo "<p><b>" . ($i+1) . ".</b> " . $q["pregunta"] . "</p>";

        if ($q["Tipo"] == "text") {
            echo "<input type='text' name='answer[$i]' required>";
        } else if ($q["Tipo"] == "Multiple-choice") {
            foreach ($q["Opciones"] as $opt) {
                echo "<label><input type='radio' name='answer[$i]' value='$opt' required> $opt</label><br>";
            }
        }
        echo "<br>";
    }
}

?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Cuestionario simple</title>
    
</head>
<body>

<h2>Cuestionario de idiomas</h2>
<!-- formulario principal -->
<form method="post">
    <p><label>Nombre: </label><input type="text" name="name" required></p>

    <p><label>Idioma: </label>
        <select name="language">
            <?php
            foreach ($languages as $lang) {
                echo "<option value='$lang'>$lang</option>";
            }
            ?>
        </select>
    </p>

    <hr>

    <?php mostrar_preguntas($questions);?>

    <input type="submit" name="submit" value="Enviar respuestas">
</form>

<!-- Mostramos el resultado si existe -->
<?php
if ($result_text != "") {
    echo "<div class='result'>$result_text</div>";
}
?>

</body>
</html>
