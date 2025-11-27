/*
Autor: Antonio Ríos Casado
Fecha: 26/11/2025
Descripción: Crea una página web donde todos los elementos se generen dinámicamente con JavaScript, sin usar innerHTML.

Debes crear:

Un título <h1> con el texto: "Bienvenido"

Un párrafo <p> con el texto: "Este texto ha sido creado con JavaScript."

Un botón con el texto: "Haz clic aquí"

Cuando el usuario pulse el botón debe aparecer un alert diciendo:

“¡Has pulsado el botón!”

*/

    
function crearPagina(){
    
    const titulo = document.createElement("h1");
    titulo.textContent = "Bienvenido"
    document.body.append(titulo);

    const parrafo = document.createElement("p");
    parrafo.textContent = "Este parrafo está hecho con js :D"
    document.body.append(parrafo);

}

const boton = document.createElement("button");
    boton.textContent = "Boton para generar la página"
    document.body.append(boton);
    boton.addEventListener("click", () =>{
        crearPagina()

    })



