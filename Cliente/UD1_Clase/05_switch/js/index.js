"use strict" //Obligación de declarar variables/constantes

// let nota = prompt("Introduce una nota[1-10]","1");
let resultado;
// switch(nota){
//     case "1":
//     case "2":
//     case "3":
//     case "4":
//         resultado = "Insuficiente";
//         break;
//     case "5":
//         resultado = "Suficiente";
//         break;
//     case "6":
//         resultado = "Bien";
//         break;
//     case "7":
//     case "8":
//         resultado = "Notable";
//         break;
//     case "9":
//     case "10":
//         resultado = "Sobresaliente";
//         break;
//     default:
//         resultado = "Dato incorrecto, debe ser del 1 al 10"
//         break;
// }

// console.log(`Tienes un ${resultado}`);

//Podemos usar rangos con el switch
let nota2 = parseInt(prompt("Introduce una nota[1-10]","1"));
switch(true){
    case nota2 >=1 && nota2 <=4:
        resultado = "Insuficiente";
        break;
    case nota2 >=5 && nota2 <6:
        resultado = "Suficiente";
        break;
    case nota2 >=7 && nota2 <9:
        resultado = "Notable";
        break;
    case nota2 >=9 && nota2 <11:
        resultado = "Sobresaliente";
        break;
    default:
        resultado = "Dato incorrecto, debe ser del 1 al 10"
        break          
}

console.log(`Tienes un ${resultado}`);