"use strict" //Obligación de declarar variables/constantes

let edadMaria, edadAntonio;

edadMaria = parseInt(prompt("Introduce la edad de María"));//El prompt devuelve String, tengo que cambiarlo
edadAntonio = parseInt(prompt("Introduce la edad de Antonio"));

if (edadMaria > edadAntonio){
    console.log("María es mayor que Antonio");
}else if (edadMaria < edadAntonio){
            console.log("María es menor que Antonio");
}else { 
            console.log("María es igual que Antonio");
}
