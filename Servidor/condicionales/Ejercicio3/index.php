<?php
/**
 * @author Germán Cosano Torres 
 * Promgrama que hace un calendario y da estilo a los festivos y finde semana
 * 
 * 
 */


$mes = 1;  
$anio = 2025;

$dias_del_mes = cal_days_in_month(CAL_GREGORIAN, $mes, $anio);

$festivos = [
    "1-1", "1-6", "2-28", "3-19", "4-17", "4-18",
    "5-1", "8-15", "10-12", "11-1", "12-6", "12-8", "12-25"
];
?>
<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="utf-8">
<title>Calendario Corregido</title>
 <style> /** Hoja de estilos integrada en el propio html*/
  table { border-collapse: collapse; width: 300px; text-align: center; }
  th, td { width: 40px; height: 40px; }
  th { background-color: #ff7300ff; color: white; }
  tr:nth-child(even) td { background-color: #f2f2f2; } 
  .fin_de_semana { background-color: #ff9999 !important; }
  .festivo { background-color: #14cc00ff !important; color: white; font-weight: bold; }

</style>
</head>
<body>
<h1>Calendario</h1>
<h2>Mes: <?php echo $mes; ?> / Año: <?php echo $anio; ?></h2>

<table border="1">
<tr>
  <th>L</th><th>M</th><th>X</th><th>J</th><th>V</th><th>S</th><th>D</th>
</tr>
<tr>
<?php
// celdas vacías antes del primer día
$primer_dia_semana = date("N", mktime(0, 0, 0, $mes, 1, $anio));
for ($i = 1; $i < $primer_dia_semana; $i++) {
    echo "<td></td>";
}
//Bucle principal del progrema
for ($dia = 1; $dia <= $dias_del_mes; $dia++) {
    $dia_semana = date("N", mktime(0, 0, 0, $mes, $dia, $anio));
    $clase = "";

    if (in_array("$mes-$dia", $festivos)) {
        $clase = "festivo";
    } elseif ($dia_semana == 6 || $dia_semana == 7) {
        $clase = "fin_de_semana";
    }

    echo "<td class='$clase'>$dia</td>";

    if ($dia_semana == 7) {
        echo "</tr>";
        if ($dia != $dias_del_mes) echo "<tr>";
    }
}

// completar la última fila si hace falta
$ultimo_dia_semana = date("N", mktime(0, 0, 0, $mes, $dias_del_mes, $anio));
if ($ultimo_dia_semana != 7) {
    for ($i = $ultimo_dia_semana + 1; $i <= 7; $i++) {
        echo "<td></td>";
    }
    echo "</tr>";
}
?>
</table>
</body>
</html>
