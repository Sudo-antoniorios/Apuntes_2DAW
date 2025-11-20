<?php
/**
 * @author German Cosano Torres
 * Fichero que recibe una ruta y muestra un hola mundo si es correcta
 */

// Requerimos autocarga de clases y ficheros de configuración
require_once ("../vendor/autoload.php");
require_once ("../app/config/config.php");

// Usamos las clases necesarias
use App\Core\Router;
use App\Controllers\IndexController;

// Creamos el enrutador
$router = new Router();

// Añadimos las rutas. Ruta = acompaña al index.php
$router->add(array(
    'name'=>'home',
    'path'=>'/^\/$/',
    'action'=>[IndexController::class, 'IndexAction']));

// Obtenemos la ruta de la petición
$request = str_replace(DIRBASEURL, '', $_SERVER['REQUEST_URI']);

$route = $router->match($request);

// Comprobamos si la ruta es válida
if ($route) {

    // Creamos un objeto controlador y lanzamos una acción
    $controllerName = $route['action'][0];
    $actionName = $route['action'][1];
    $controller = new $controllerName;
    $controller->$actionName($request);
} else {

    // No hay ruta válida por lo que salta un error por pantalla
    echo "No route";
}
