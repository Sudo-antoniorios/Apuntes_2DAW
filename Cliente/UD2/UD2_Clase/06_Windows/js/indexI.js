"use strict";

//SALUDO
let interval1;
function saludar(){
    alert("Hola!");
}
function saludarDespues(){
    //Espera un tiempo hasta que llama a la función UNA vez
    interval1 = setTimeout(saludar,5000); //5000 ms = 5 s
}
function cancelarSaludo(){
    clearTimeout(interval1);
}

//CONTROL SOBRE VENTANA
let interval2;
let ventana = open("","ventana", "height=200,width=200");
ventana.document.body.bgColor = "blue";

function cambiarColor(){
    if (ventana.document.body.bgColor == "blue"){
        ventana.document.body.bgColor = "pink"
    }else
        ventana.document.body.bgColor = "blue"
}
function empezarCambioColor(){
    ventana.focus(); //Le da el foco a la ventana secundaria
    //Llama a la función cada X milisengundos
    interval2 = setInterval(cambiarColor,500);//Simulará un parpadeo de colores
}
function cancelarCambioColor(){//Limpiamos el intervalo para parar el efecto
    clearInterval(interval2);
}