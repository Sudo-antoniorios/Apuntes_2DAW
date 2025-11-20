"use strict";
/**
 * - No se instancia
 */

//Número aleatorio
console.log("Número aleatorio entre 0 y 1: ", Math.random());

//Número aleatorio entre 1 y 10
const aleatorio = Math.floor((Math.random() * 10)) + 1;
console.log("Número entre 1 y 10", aleatorio);

//Redondeo
//Redondear al entero más cercano
console.log("Math.round(4.5):", Math.round(4.5));

//Redondear hacia arriba siempre
console.log("Math.ceil(4.2):", Math.ceil(4.2));

//Redondear hacia abajo siempre
console.log("Math.floor(4.7):", Math.floor(4.7));


//Máximo y mínimo
console.log("Máximo (1,2,7,5,4,0)", Math.max(1,2,7,5,4,0));
console.log("Mínimo (1,2,7,5,4,0)", Math.min(1,2,7,5,4,0));
let numeros = [1,2,7,5,4,0];
console.log(Math.max(...numeros));
