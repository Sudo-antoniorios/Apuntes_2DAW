// Tenemos un objeto con información de una persona
const persona = {
  nombre: "Ana",
  edad: 28,
  ciudad: "Madrid"
};

// 🔽 Destructuring
const { nombre, edad, ciudad } = persona;

// Es equivalente a:
// const nombre = persona.nombre;
// const edad = persona.edad;
// const ciudad = persona.ciudad;

console.log(nombre); // "Ana"
console.log(edad);   // 28
console.log(ciudad); // "Madrid"


// Tenemos un array con varios valores
const colores = ["rojo", "verde", "azul"];

// 🔽 Destructuring
const [primero, segundo, tercero] = colores;

console.log(primero); // "rojo"
console.log(segundo); // "verde"
console.log(tercero); // "azul"


const frutas = ["manzana", "pera"];

// Podemos omitir el segundo elemento y dar un valor por defecto al tercero
const [primera, , tercera = "plátano"] = frutas;

console.log(primera); // "manzana"
console.log(tercera); // "plátano"


// Ejemplo con objetos
function mostrarPersona({ nombre, edad }) {
  console.log(`Nombre: ${nombre}, Edad: ${edad}`);
}

const usuario = { nombre: "Luis", edad: 35, ciudad: "Sevilla" };

mostrarPersona(usuario);
// 👉 "Nombre: Luis, Edad: 35"
