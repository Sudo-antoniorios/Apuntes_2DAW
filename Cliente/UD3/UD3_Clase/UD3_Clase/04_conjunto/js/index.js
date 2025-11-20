"use strict"

//Creación de un conjunto 
// const conjunto1 = new Set();
// conjunto1.add(1);
// conjunto1.add(2);
// conjunto1.add(1); //Como está duplicado no se añade

// // console.log("Conjunto1: ", conjunto1);

// const conjunto2 = new Set([1,"a",true, "casa", 1]);
// console.log("Conjunto2: ", conjunto2);

// //Tamaño de un conjunto
// console.log("Tamaño: ", conjunto2.size);

// //Coprobar si existe un elemento
// console.log("¿Contiene 'a'?", conjunto2.has("a"));
// console.log("¿Contiene 'b'?", conjunto2.has("b"));

// //Eliminar elementos 
// conjunto2.delete("a");
// console.log("Conjunto2 después de borrar 'a': ", conjunto2);

// //Recorrer un conjunto
// conjunto2.forEach(elemento => console.log(elemento));

// //Convertir un conjunto en un Array
// const arrayDeConjunto = [...conjunto2];
// console.log("Array del conjunto: ", arrayDeConjunto);

//Vamos a usar Set para eliminar duplicados
const arrayConDuplicados = [1,1,3,4,4,3,5,6,7,7,1];
const arraySinDuplicados = [...new Set(arrayConDuplicados)];

console.log("Array con duplicados: ", arrayConDuplicados);
console.log("Array sin duplicados: ", arraySinDuplicados);