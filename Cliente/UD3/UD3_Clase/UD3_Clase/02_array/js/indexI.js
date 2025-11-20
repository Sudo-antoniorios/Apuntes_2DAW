"use strict"
// //FORMAS DE DECLARAR UN ARRAY EN JS
// //1. Froma tradicional con new Array (se desaconseja salvo algunos casos)
// const nombre = new Array(6);//Array vacío con espacio para 6 elementos
// const provin = new Array("Córdoba","Sevilla");

// //2. Forma más común y recomendable (notación literal)
// const numeros = [1,2,3,4,5];
// const vacio = [];

// //ACCESO A LOS ARRAYS Y DIMENSIÓN
// console.log(nombre.length);//tamaño del array
// //Añadir un elemento al array
// nombre[nombre.length] = "Hola"; //ahora tendrá tamaño 7

// //ostrar arrays en consola
// console.log(numeros);
// console.table(numeros); //En formato tabla

// //RECORRIDO DE UN ARRAY EN JS
// const numeros = [1,2,3,,"cinco"]; //Array mixto y con espacios vacíos
// //1. Bucle FOR tradicional
// console.log("FOR Tradicional");

// for (let i = 0; i<numeros.length; i++){
//     console.log(`${i}.- ${numeros[i]}`);
// }

// //2. Bucle FOR...IN
// //Recorre las claves
// //Ignora los elementos vacíos
// console.log("FOR IN");
// for (const i in numeros){
//     console.log(`${i}.- ${numeros[i]}`);
// }

// //3. Bucle FOR ...OF
// //Recorre directamente los valores
// //Sí tiene en cuenta los "huecos"

// console.log("FOR OF");
// for (const elemento of numeros){
//     console.log(elemento);
// }
// //4. Método forEach()
// //Método de Array, ejecuta callback por cada elemento
// //Ignora los huecos vacíos

// console.log("FOREACH");
// numeros.forEach(elemento => {
//     console.log(elemento);
// });
// numeros.forEach((elemento, i) => {
//     console.log(`${i}.- ${elemento}`);
// }); 

// //INSERTAR Y ELIMINAR ELEMENTOS DE UN ARRAY
// const numeros = [1,2,3,4,"cinco"];

// //Añadir elementos
// //Insertar elementos al final usando length
// numeros[numeros.length] = 6;
// // console.table(numeros);
// //Insertar al final con push() 
// numeros.push(7);


//Eliminar elementos
//1. Con delete - borra el valor, pero deja el hueco (no es recomendable)
// delete numeros[2];


//2. Eliminar el último con pop()
//Devuelve el valor eliminado
// const ultimo = numeros.pop();
// console.log(`Eliminado con pop ${ultimo}`);
// console.table(numeros);

// //3. Eliinar el primero con shift()
// //Devuele el valor eliminado
// const primero = numeros.shift();
// console.log(`Eliminado con shift ${primero}`);
// console.table(numeros);

//4. Eliminar en una posición concreta con splice()
// console.log(" Eliminado con splice: ", numeros.splice(2,2));//(inicio, cantidad)
// console.table(numeros);
// console.log(" Eliminado con splice: ", numeros.splice(2));//(inicio, final)
// console.table(numeros);

//COPIAS EN ARRAYS EN JS
// let numeros =[1,2,3,4,"cinco"];
// let numerosCopia = numeros; //Solo copia la referencia (apunta al mismo sitio en memoria)

// numeros[5] = 0;
// numerosCopia[6] = 0;

// console.table(numeros);
// console.table(numerosCopia);

//Copia real de un array
// let numerosNuevos = numeros.slice(); //Sin parámetros copia completa
// // console.table(numerosNuevos);
// numerosNuevos[0] = "uno";
// console.table(numeros);
// console.table(numerosNuevos);

//También usamos slice(inicio, fin) para copiar una parte
// let parteNumeros = numeros.slice(1,3);
// console.table(parteNumeros); //[2,3]

// //Copia con operador Spread(...)
// let numerosSpread = [...numeros];
// console.table(numerosSpread);
// let numerosSpredII = ["UNO", "DOS", ...numeros, "SEIS"];
// console.table(numerosSpredII);

//DESTRUCTURING EN ARRAYS
//Nos permite extraer valores de un array directamente en variables
// let animales = ["perro", "gato","caballo"];

//Frma tradicional 
// let aPerro = animales.at(0);
// let aGato = animales[1];
// console.log(`Tradicional: ${aPerro} ${aGato}`);

// //Forma destructuring
// let [aPerroII, aGatoII] = animales;
// console.log(`Destructuring: ${aPerroII} ${aGatoII}`);

// //uso: Intercambiar variables
// let x = 2;
// let y = 3;
// console.log(`X: ${x} Y: ${y}`);
// [x,y] = [y, x]

// console.log(`X: ${x} Y: ${y}`);

//MÉTODO .map() 
//- Recorre el array y devuelve un nuevo array transformado

// let numeros = [1,2,3,4,5];
// let dobles = numeros.map(function (valor){
//     return valor * 2;
// });

// console.table(numeros);
// console.table(dobles);

// //Usar directamente funciones con map
// let raiz = dobles.map(Math.sqrt);
// console.table(raiz);

//let numeros = [1,2,3,4,5];
//Permite acceder al índice
// let numerosIndices = numeros.map(function (numero, i, array){
//     return i + ".-" + numero + "->" +array;
// });
// console.table(numerosIndices);

// //Versión con función flecha
// let tripes = numeros.map(n => n * 3)
// console.log(tripes);

// //Tranasformar strings
// let animales = ["perro","gato","caballo"];
// let animalesMayus = animales.map(a => a.toUpperCase());
// console.log(animalesMayus);
// let longitudes = animales.map(a => a.length);
// console.log(longitudes);

//ARRAYS BIDIMENSIONALES EN JS
//Puede contener otros arrays
let electro = [["Lavadora",100],["Micro", 30],["Horno",200]];
console.table(electro);

// //Acceso por índices a los elementos
// console.log(electro[0][0]); //Lavadora
// console.log(electro[0][1]); // 100

// //RECORRER ARRAY BIDIMENSIONAL
// for (let f = 0; f < electro.length; f++){
//     for (let c = 0; c < electro[f].length; c++){
//         console.log(electro[f][c]);
//     }
// }
//AÑADIR NUEVAS FILAS
electro.push(["Lavavajillas",250]);
console.table(electro);
