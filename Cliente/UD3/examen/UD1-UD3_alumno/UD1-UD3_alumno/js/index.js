import { animal } from "./animal.js";
import { fiesta } from "./fiesta.js";
import { humano } from "./humano.js";

document.getElementById("crearObjetos").addEventListener("click",crearObjetos);
document.getElementById("verFiesta").addEventListener("click",verFiesta);



// Creo Humanos

function crearObjetos(){
const Parches = new humano(45, "Pirata", "Parches el pirata");
console.log(Parches.toString());

const Antonio = new humano(20, "Estudiante", "Antonio Rios");
console.log(Antonio.toString());


// Creo animales
const bobEsponja = new animal("esponja", "Cocinero", "Bob esponja");
console.log(bobEsponja.toString());

const Patricio = new animal("estrella de mar", "Nada", "Patricio");
console.log(Patricio.toString());

const Calamardo = new animal("calamar", "Cajero", "Calamardo");
console.log(Calamardo.toString());

alert("Objetos creados revisa la consola (F12) para ver los detalles")
}


//Creo fiesta
const fiesta1 = new fiesta("Primera fiesta", "Fondo de bikini", 2025-10-22);
function verFiesta(){
    alert(fiesta1.toString())
}