<?php

/**
 * @author Antonio Ríos Casado
 * Fichero que recibe una ruta y muestra un hola mundo si es correcta
 */

require_once("../vendor/autoload.php");
require_once("../app/Config/config.php");

use App\Core\Router;
use App\Controllers\IndexController;

// Creamos un único enrutador
$router = new Router();

// Ruta principal ("/")
$router->add(array(
    'name' => 'numeros',
    'path' => '/^\/pares\/?$/',
    'action' => [IndexController::class, 'NumAction']
));

$router->add(array(
    'name' => 'numeros',
    'path' => '/^\/impares\/?$/',
    'action' => [IndexController::class, 'ImpAction']
));

$router->add(array(
    'name' => 'numeros',
    'path' => '/^\/pares\/([0-9]+)$/',
    'action' => [IndexController::class, 'NumParesAction']
));

$router->add(array(
    'name' => 'numeros',
    'path' => '/^\/impares\/([0-9]+)$/',
    'action' => [IndexController::class, 'NumImparesAction']
));

// Obtenemos la ruta de la petición
$request = str_replace(DIRBASEURL, '', $_SERVER['REQUEST_URI']);

// Buscamos coincidencia
$route = $router->match($request);

if ($route) {
    $controllerName = $route['action'][0];
    $actionName = $route['action'][1];
    $controller = new $controllerName;

    $controller->$actionName($request);
} else {
    echo "No route";
}
