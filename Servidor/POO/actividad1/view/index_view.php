<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <title>Modelo vista controlador</title>
</head>

<body>
    <ul>
        <?php if (!empty($pares)): ?>
            <h2>Números pares</h2>
            <?php foreach ($pares as $numero): ?>
                <?= $numero ?><br>
            <?php endforeach; ?>
        <?php elseif (!empty($impares)): ?>
            <h2>Números impares</h2>
            <?php foreach ($impares as $numero): ?>
                <?= $numero ?><br>
            <?php endforeach; ?>
        <?php elseif (!empty($numPares)): ?>
            <h2>Números pares</h2>
            <?php foreach ($numPares as $numero): ?>
                <?= $numero ?><br>
            <?php endforeach; ?>
        <?php elseif (!empty($numImpares)): ?>
            <h2>Números impares</h2>
            <?php foreach ($numImpares as $numero): ?>
                <?= $numero ?><br>
            <?php endforeach; ?>
        <?php endif; ?>
    </ul>
</body>

</html>