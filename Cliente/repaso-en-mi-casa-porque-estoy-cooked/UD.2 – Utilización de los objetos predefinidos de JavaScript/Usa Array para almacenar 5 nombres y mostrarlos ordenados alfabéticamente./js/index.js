/*
Autor: Antonio Ríos Casado
Fecha: 23/11/2025
Descripción: Usa Array para almacenar 5 nombres y mostrarlos ordenados alfabéticamente.
*/

let names_array = [];

for (let i = 0; i < 5; i++){
    names_array.push(prompt(`Introduce el nombre ${i + 1}`))
}

alert(names_array.sort())




