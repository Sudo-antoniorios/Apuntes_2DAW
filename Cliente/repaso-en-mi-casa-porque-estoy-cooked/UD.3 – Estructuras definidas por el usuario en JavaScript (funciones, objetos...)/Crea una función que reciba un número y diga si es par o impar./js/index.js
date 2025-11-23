/*
Autor: Antonio Ríos Casado
Fecha: 23/11/2025
Descripción: Crea una función que reciba un número y diga si es par o impar.
*/


function isOdd(){

    let n = prompt("Introduce el número");
    n = parseInt(n);

    if(n % 2 == 0){
        return alert("El número es par");
    } else{
        return alert("El número es impar");
    }
}

isOdd()

