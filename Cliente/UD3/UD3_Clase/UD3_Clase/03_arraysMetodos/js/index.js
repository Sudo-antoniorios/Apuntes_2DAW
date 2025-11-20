"use strict"

// const provincias = ["Córdoba", "Sevilla", "Málaga", "Córdoba"];

// //Saber si un elemento existe en un array

// //1. indexOf()
// // - Devuelve el índice de la primera aparición o -1 si no existe
// console.log("indexOf");

// const posicion1 = provincias.indexOf("Córdoba");
// if (posicion1 !==-1){
//     console.log(`Existe la provincia en la posición ${posicion1}`);
// }else{
//     console.log("No existe");
// }
// //2. lastIndexOf()
// //- Devuelve el índice de la última aparición o -1 si no existe
// console.log("lastIndexOf");
// const posicion2 = provincias.lastIndexOf("Córdoba");
// if (posicion2 !==-1){
//     console.log(`Existe la provincia en la posición ${posicion2}`);
// }else{
//     console.log("No existe");
// }
// //3. includes
// //Devuelve true si está en el array y false si no está
// console.log("includes");
// const estaElemento = provincias.includes("Cór");
// console.log(estaElemento ? "Existe" : "No existe");

//Buscar información en un array

// const numeros = [1,20,4,76,100];
//Filter
// - Devuelve un array con todos los elementos que cumplan una condición
// const mayorQue10 = numeros.filter(n => n > 10);
// console.log(mayorQue10);

//find
// - Devuelve solo el primer elemento que cumple la condición. Si no encuentra, 
//devuelve undefined.
// const primeroMayor50 = numeros.find(n => n > 50);
// console.log(primeroMayor50);

//some
// - Devuele true si algún elemento cumple la condición
// const hayMayor20 = numeros.some(n => n > 20);
// console.log(hayMayor20);

//every
// - Devuele true si cada elemento cumple la condición
// const todosMayores10 = numeros.every(n => n > 10);
// console.log(todosMayores10);

// //findindex
// // - Deuele el índice del primer elemento que cumple la condición
// const indiceMayor50 = numeros.findIndex(n => n > 50);
// console.log(indiceMayor50);

//Ordenación arrays
const nombres = ["María", "Antonio", "Carmen"];
//1. toSorted()
// - ES2023
// - Ordena el array pero NOmodifia el original
const nombresOrden = nombres.toSorted();
console.log("Original: ", nombres);
console.log("Ordenado: ", nombresOrden);

//2. sort()
// - Ordena el array original
nombres.sort();
console.log("Original después de ordenarlo: ", nombres);

//3. reverse
// - invertir el orden del array 
nombres.reverse();
console.log("Original después de ordenarlo y hacer reverse: ", nombres);

//Ordenar números

const numeros = [2,5,3,7,10];

//Ascendente OJO!!!!
numeros.sort((a,b) => a - b);
console.log("Números ascendente", numeros);

//Descendente
numeros.sort((a,b) => b - a);
console.log("Números descendente", numeros);