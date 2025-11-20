
/**
 * Archivo para la teoría del exmamen de las tres primeras unidades
 * 
 * @author Antonio Ríos Casado
 * 
 */

//"use strict" //Obligación de declarar variables/constantes
// {typeof} nos devuelve el tipo de dato de una variable
// parseInt() convierte un String a entero
// parseFloat() convierte un String a decimal
// prompt() abre una ventana emergente para pedir datos al usuario y devuelve un String
// indexOf() devuelve la posición de la primera aparición de un caracter en una cadena
// lastIndexOf() devuelve la posición de la última aparición de un caracter en una cadena
// localeCompare() compara dos cadenas y devuelve -1, 0, 1
// includes() devuelve true si una cadena está contenida en otra
// startsWith() devuelve true si una cadena empieza por otra
// endsWith() devuelve true si una cadena termina por otra
// repeat() repite una cadena un número determinado de veces
// slice() extrae una parte de una cadena entre dos posiciones
// substring() extrae una parte de una cadena entre dos posiciones (no admite valores negativos)
// split() divide una cadena en un array según un separador
// trim() elimina los espacios en blanco al principio y al final de una cadena
// toLowerCase() convierte una cadena a minúsculas
// toUpperCase() convierte una cadena a mayúsculas
// localeCompare() compara dos cadenas según las reglas del idioma local y devuelve -1 (antes), 0 (iguales), 1 (después)
// tofixed() convierte un número a cadena con un número fijo de decimales
// isNaN devuelve true si el valor es NaN (Not a Number)
// valueOf() devuelve el valor primitivo de un objeto Number
// toPrecision() formatea un número a una longitud específica
// Number.isInteger() devuelve true si el valor es un número entero
// toString() convierte un número a cadena
// Math es un objeto global que tiene propiedades y métodos para constantes y funciones matemáticas.
// Math.PI devuelve el valor de PI
// Math.E devuelve el valor de Euler
// Math.random() devuelve un número aleatorio entre 0 (incluido) y 1 (excluido)
// Math.floor() redondea un número hacia abajo al entero más cercano
// Math.ceil() redondea un número hacia arriba al entero más cercano
// Math.round() redondea un número al entero más cercano
// Math.max() devuelve el número más grande de una lista de argumentos
// Math.min() devuelve el número más pequeño de una lista de argumentos
// Math.pow(base, exponente) devuelve la base elevada al exponente
// Math.sqrt() devuelve la raíz cuadrada de un número
// Math.abs() devuelve el valor absoluto de un número
// Math.sin(), Math.cos(), Math.tan() devuelven el seno, coseno y tangente de un ángulo (en radianes)
// getTime() devuelve el número de milisegundos desde el 1 de enero de 1970
// getFullYear() devuelve el año de una fecha
// getMonth() devuelve el mes de una fecha (0-11)
// getDate() devuelve el día del mes de una fecha (1-31)
// getDay() devuelve el día de la semana de una fecha (0-6)
// getHours(), getMinutes(), getSeconds(), getMilliseconds() devuelven la hora, minutos, segundos y milisegundos de una fecha
// setFullYear(), setMonth(), setDate() permiten modificar el año, mes y día de una fecha// CREAR ARRAYS BIDIMENSIONALES DIRECTAMENTE


  const matrizz = [
  ["Ana", "Luis", "Marta"],
  ["Pedro", "Laura", "Juan"]
];

//CREARLO DINAMICAMENTE

const filas = 2;
const columnas = 3;
const matriz = Array.from({ length: filas }, () => Array(columnas).fill(0));

// HACE ALGO ASÍ (DINAMICO)

[
  [0, 0, 0],
  [0, 0, 0]
]

//RECORRERLO (FOREACH)

matriz.forEach((fila, i) => {
  fila.forEach((valor, j) => {
    console.log(`Fila ${i}, Columna ${j}:`, valor);
  });
});

//POR EJEMPLO CON FESTIVAL

const personas = [
  [ // Fila 0 → Público
    { nombre: "Ana", tipo: "publico" },
    { nombre: "Luis", tipo: "publico" }
  ],
  [ // Fila 1 → Jurado
    { nombre: "Carlos", tipo: "jurado" },
    { nombre: "Elena", tipo: "jurado" }
  ]
];



