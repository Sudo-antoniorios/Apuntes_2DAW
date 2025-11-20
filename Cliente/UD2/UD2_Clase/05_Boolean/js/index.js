"use strict";

//comparación directa
// console.log(10 > 9);

console.log(Boolean(true));
//Valores TRUTHY
console.log(Boolean(100));//true
console.log(Boolean(3.4));//true
console.log(Boolean("false"));//true
console.log(Boolean(-1.2));//true


console.log(Boolean(flase));
//Valores FALSY
console.log(Boolean(0));//false
console.log(Boolean(-0));//false
console.log(Boolean(undefined));//false
console.log(Boolean(""));//false
console.log(Boolean(NaN));//false

let vari;
if (!vari){
    console.log("La variable no tiene nada");
    
}