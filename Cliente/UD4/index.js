/* 
CREAR COOKIE
Cookie:
nombre - Persona
valor - Antonio
Duración - 90 segundos
path: rutas válidas

*/

document.cookie = "persona=Antonio; max-age=90; path=/";

// Si no ponemos fecha de expiración

document.cookie = "persona2=Antonio; path=/";

//Leer cookies
const misCookies = document.cookie;
console.log("Cookies actuales: ", misCookies);

// Modificar cookies
document.cookie = "persona=carmen; path=/"
misCookies = document.cookie;
console.log("Cookies actuales después de modificarlas: ",misCookies);

// Eliminar cookie
document.cookie = "persona=carmen; path=/"
misCookies = document.cookie;
console.log("Cookies actuales después de modificarlas: ",misCookies);