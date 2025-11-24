/*
*
* 
*
*/

import { Humano } from "./class/Humano.js";

const botonCrearObjetos = document.getElementById("crearObjetos");

botonCrearObjetos.addEventListener("click", () => {
    const humano1 = new Humano(53, "Lotera", "Lolita");
    const humano2 = new Humano(20, "Chatarrero", "Ose");

    alert("Objetos creados con éxito");
    console.log(humano1);
    console.log(humano2);
});
