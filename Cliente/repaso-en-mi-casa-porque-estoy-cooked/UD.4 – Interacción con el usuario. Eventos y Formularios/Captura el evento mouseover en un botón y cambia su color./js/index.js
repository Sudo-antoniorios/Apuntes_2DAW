/*
Autor: Antonio Ríos Casado
Fecha: 24/11/2025
Descripción: Captura el evento mouseover en un botón y cambia su color.
*/

const button = document.getElementById("button");

button.addEventListener("mouseover", () => {
    button.style.backgroundColor = "red"
})