/*
Autor: Antonio Ríos Casado
Fecha: 23/11/2025
Descripción: Crea un objeto coche con propiedades y métodos: arrancar(), detener().
*/

let coche = {
    brand: "peugeot",
    model: "407",
    color: "negro",
    cv: 150,

    start: function(){
        return alert("Coche arrancado");
    },

    stop: function(){
        return alert("Coche detenido")
    }


}

let confirma = window.confirm("Quieres arrancar el coche??");

if(confirma){
    coche.start();
    }else{
        coche.stop();
    }

