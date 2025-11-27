/*
Autor: Antonio Ríos Casado
Fecha: 27/11/2025
Descripción: Crea un pequeño formulario dinámicamente con JavaScript que contenga:

Un <label> para el nombre

Un <input type="text">

Un botón con el texto "Enviar"

Cuando el usuario pulse el botón:

Recupera el valor del input.

Muestra un alert que diga:

“Hola, nombre introducido”

Si el campo está vacío, el alert debe decir:

“Por favor, introduce un nombre.”

*/

function generarFormulario(){

    const etiqueta = document.createElement("label");
    etiqueta.textContent = "Nombre";
    document.body.append(etiqueta);

    const input = document.createElement("input");
    input.textContent = "Escribe aquí tu nombre";
    input.id = "idInput"
    document.body.append(input)

    const botonEnviar = document.createElement("button");
    botonEnviar.textContent = "Enviar";
    document.body.append(botonEnviar)
    botonEnviar.addEventListener("click", () =>{
        if(input.value){
            alert(`Hola ${input.value}`)
        }else{
            alert("El nombre no puede estar vacío")
        }
    })
}

generarFormulario()