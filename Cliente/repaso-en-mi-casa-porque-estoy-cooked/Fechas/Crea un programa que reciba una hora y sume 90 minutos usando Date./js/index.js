/*
Autor: Antonio Ríos Casado
Fecha: 23/11/2025
Descripción: Crea un programa que reciba una hora y sume 90 minutos usando Date.
*/

// Pedimos la hora en formato HH:MM
let horaEntrada = prompt("Introduce una hora (formato HH:MM):");

// Creamos un objeto Date con la hora indicada
let [horas, minutos] = horaEntrada.split(":").map(Number);
let fecha = new Date();

// Establecemos la hora introducida
fecha.setHours(horas, minutos, 0, 0);

// Sumamos 90 minutos
fecha.setMinutes(fecha.getMinutes() + 90);

// Obtenemos la nueva hora formateada
let nuevaHora =
  fecha.getHours().toString().padStart(2, "0") + ":" +
  fecha.getMinutes().toString().padStart(2, "0");

// Mostramos el resultado
alert("La nueva hora es: " + nuevaHora);
console.log("La nueva hora es:", nuevaHora);

