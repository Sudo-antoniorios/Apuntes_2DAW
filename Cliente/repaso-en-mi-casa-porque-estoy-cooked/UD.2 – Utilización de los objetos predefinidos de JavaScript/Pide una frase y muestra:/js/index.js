/*
Autor: Antonio Ríos Casado
Fecha: 23/11/2025
Descripción: Pide una frase y muestra:

en mayúsculas

en minúsculas

cuántas veces aparece la letra "a"
*/

let phrase = prompt("Introduce la frase : ");

let upperPrhase = phrase.toUpperCase();

let lowerPrhase = phrase.toLowerCase();

let a_letter = phrase.split("a").length - 1;

alert(`La frase en minúscula es : 

    ${lowerPrhase}


    La frase en mayúscula es : 

    ${upperPrhase}

    
    La letra a aparece ${a_letter} veces`)


