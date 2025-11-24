/*
Autor: Antonio Ríos Casado
Fecha: 24/11/2025
Descripción: Crea una función que reciba un array de objetos y filtre por una propiedad.
*/

// Array de ejemplo
const personas = [
  { nombre: "Ana", edad: 40 },
  { nombre: "Luis", edad: 30 },
  { nombre: "Carlos", edad: 25 },
  { nombre: "Marta", edad: 40 }
];

// Función para filtrar por propiedad
function filtrarPorPropiedad(array, propiedad, valor) {
  return array.filter(objeto => objeto[propiedad] === valor);
}

// Uso de la función
const resultado = filtrarPorPropiedad(personas, "edad", 40);
console.log(resultado);

