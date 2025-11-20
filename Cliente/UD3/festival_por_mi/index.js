import { persona } from "./persona.js";
import { jurado } from "./jurado.js";

const persona1 = new persona("Hose", 20, "Masculino");
console.log(persona1.toString());

const jurado1 = new jurado("German", 20, "Masculino", "Macarra");
console.log(jurado1.toString());