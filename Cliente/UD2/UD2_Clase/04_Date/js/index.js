"use strict";

/**DATE
 * - Los meses empiezan en 0
 * - Fecha de refernecia es 1970-01-01
 */

//Fecha actual
const ahora = new Date();
console.log("Ahora: ", ahora);
console.log("GetTime: ", ahora.getTime());

//Crear fechas
const finDeEnero = new Date(2025, 8, 23);
console.log(finDeEnero.toString());

//Recuperar partes de la fecha
const f = new Date();
console.log("Año: ", f.getFullYear());
console.log("Mes: ", f.getMonth());
console.log("Día: ", f.getDate());
console.log("Día: ", f.getDay());//Devuelve el número de día de la semana
console.log("Hora:min:seg:ms: ", f.getHours(),f.getMinutes(),f.getSeconds(),f.getMilliseconds());

//Mutar/modificar un objeto
f = new Date();
f.setFullYear(2025);
f.setMonth(9);
f.setDate(7);
console.log("Fecha modificada: ", f.toString());

