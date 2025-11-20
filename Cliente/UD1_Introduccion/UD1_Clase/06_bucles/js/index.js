"use strict" //Obligación de declarar variables/constantes

// //BUCLE FOR
// let numero, i;
// console.log("Con For tradiccional");
// for (i = 0; i < 20; i++){
//     console.log(`El índice es ${i}`);
// }

// //BUCLE forEach

// const numeros = [1,2,3,4,5,6,7];
// console.log("Con ForEach");

// numeros.forEach(function (numero){
//     console.log(numero);  
// });
// // numeros.forEach(function mostrarNum(numero){
// //     console.log(numero);  
// // });
// // numeros.forEach((numero)=>{
// //     console.log(numero);  
// // });

// //FOR OF

// console.log("Con For OF");
// for (const n of numeros){
//     console.log(n);
// }
// //Operador Spread  ...
// console.log(...numeros);

//Do While - Al menos se ejecuta una vez
let num;
let cont = 0;
// do{
//     //Pedir un número
//     num = parseInt(prompt("Introdue un número, 0 para FIN"));
//     cont+=1;
// }while(num!=0);
// console.log(`Has introducido ${cont} números`);

//While - Se ejecuta 0 o más veces
cont=0;
num = parseInt(prompt("Introdue un número, 0 para FIN"));
while(num != 0){
    cont+=1;
    num = parseInt(prompt("Introdue un número, 0 para FIN"));
}
console.log(`Has introducido ${cont} números`);