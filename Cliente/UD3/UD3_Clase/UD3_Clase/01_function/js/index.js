"use strict"

// //DECLARACIÓN TRADICIONAL

// function multiplicar(a){
//     return (a*5);
// }
// console.log(multiplicar(2));

// //EXPRESIÓN DE FUNCIÓN NOMBRADA
// const multiplicarI = function multiplicarInterno(a, b = 10){
//     return a * b;
// }
// console.log(multiplicarI(5));
// // console.log(multiplicarInterno(5)); -> Da error de acceso

// //EXPRESIÓN DE FUNCIÓN ANÓNIMA
// const multiplicarII = function (a,b=10){
//     return a * b;
// }
// console.log(multiplicarII(3,4));

//FUNCIÓN FLECHA (Arrow Function)
//Si usarmos llaves, necesitamos return
// const multiplicarIII = (a,b=10)=>{
//     return a * b;
// }
// console.log(multiplicarIII(3,5));

// //Sin return
// const multiplicarIV = (a, b = 3)=> a * b;
// console.log(multiplicarIV(6,6));

// //Con un único parámetro
// const multiplicarV = a => a * 100;
// console.log(multiplicarV(10));

//ALCANCE O SCOPE DE VARIABLES
let mensaje= "variable global";
const mostrar=function(){
    let mensaje = "Variable local";
    let nombre = "María";
    console.log(mensaje,nombre);
}
mostrar();
console.log(mensaje);
// console.log(nombre); ERROR

