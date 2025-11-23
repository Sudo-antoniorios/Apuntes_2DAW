/*
Autor: Antonio Ríos Casado
Fecha: 21/11/2025
Descripción: 
*/


// Pedimos una fecha al usuario (formato: AAAA-MM-DD)
let fechaUsuario = prompt("Introduce una fecha (formato: AAAA-MM-DD):");

// Convertimos la cadena introducida en un objeto Date
let fechaObjetivo = new Date(fechaUsuario);

// Obtenemos la fecha actual (sin horas)
let hoy = new Date();
hoy.setHours(0, 0, 0, 0);

// Calculamos la diferencia en milisegundos
let diferenciaMs = fechaObjetivo - hoy;

// Convertimos milisegundos a días
let diasFaltan = Math.ceil(diferenciaMs / (1000 * 60 * 60 * 24));

if (diasFaltan >= 0) {
  alert("Faltan " + diasFaltan + " día(s) para esa fecha.");
} else {
  alert("Esa fecha ya ha pasado.");
}

console.log(diasFaltan);
