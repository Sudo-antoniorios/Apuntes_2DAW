"use strict";
 
//Asignar propiedades a window
window.name ="Ventana Principal";
//Ver propiedades de window
console.log(`Nombre: ${window.name}`);
console.log(`Ancho externo: ${window.outerWidth}`);
console.log(`Alto externo: ${window.outerHeight}`);

//MÉTODOS DE WINDOWS
let miVentanaSecundaria = null;

function crearVentana(){
//Comprobamos si hay una ventana y está abierta
    if(miVentanaSecundaria && !miVentanaSecundaria.closed){
        alert("Ya hay una vetana abierta");
    }
    else{
        miVentanaSecundaria = window.open("","_blank","width=200,height=200");
        //Vamos a controlar que el navegador bloquee la creaciónde ventanas
        if(!miVentanaSecundaria){
            alert("El navegador ha bloqueado la ventana emergente.");
        }
    }
}
 function cerrarVentana(){
    //Comprobamos que hay una ventana y que está abierta
    if(miVentanaSecundaria && !miVentanaSecundaria.closed){
        miVentanaSecundaria.close();
    }
    else{
        alert("No hay ventana para cerrar");
    }
 }
 function redimensionarVentana(){
    //Comprobamos que hay una ventana y que está abierta
    if(miVentanaSecundaria && !miVentanaSecundaria.closed){
        miVentanaSecundaria.resizeBy(10,10);
    }
    else{
        alert("No hay ventana para redimensionar");
    }
 }
 function moverVentana(){
    //Comprobamos que hay una ventana y que está abierta
    if(miVentanaSecundaria && !miVentanaSecundaria.closed){
        miVentanaSecundaria.moveBy(10,10);
    }
    else{
        alert("No hay ventana para mover");
    }
 }
function enfocar(){
    //Comprobamos que hay una ventana y que está abierta
    if(miVentanaSecundaria && !miVentanaSecundaria.closed){
        miVentanaSecundaria.focus();
    }
    else{
        alert("No hay ventana para enfocar");
    }
}
