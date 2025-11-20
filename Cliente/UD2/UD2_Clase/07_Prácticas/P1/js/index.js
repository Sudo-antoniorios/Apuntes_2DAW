"use strict"
let fechaUsu = prompt("Introduce una fecha con formato dd/mm/aaaa");

let dia = fechaUsu.substring(0,2);
let mes = fechaUsu.substring(3,5) - 1;
let anno = fechaUsu.substring(6,10);

let miFecha = new Date(anno,mes,dia); //Va a ajusstarse a una fecha correcta

//Vamos comprobar si el constructor ha hecho algún cambio con un dato erroneo
if(miFecha.getDate() == dia && miFecha.getMonth() == mes && miFecha.getFullYear() == anno){
    let fechaMas30 = new Date(miFecha);
    fechaMas30.setDate(fechaMas30.getDate() + 30);
    console.log(`La fecha del usuario más 1 mes es: ${fechaMas30}`);
    let fechaMas60 = new Date(miFecha);
    fechaMas60.setDate(fechaMas60.getDate() + 60);
    console.log(`La fecha del usuario más 1 mes es: ${fechaMas60}`);
    let fechaMas90 = new Date(miFecha);
    fechaMas90.setDate(fechaMas90.getDate() + 90);
    console.log(`La fecha del usuario más 1 mes es: ${fechaMas90}`);

}else{
    alert("La fecha introducida, no cumple con el formato");
}