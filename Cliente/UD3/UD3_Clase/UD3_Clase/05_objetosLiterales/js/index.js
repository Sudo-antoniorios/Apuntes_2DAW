"use strict"
//DEFINICIÓN DE OBJETOS LITERALES
const electro1 = {
    nombre: "Frigo",
    precio: 600,
    color: "rojo"
};
const electro2 = {
    nombre: "Miccro",
    precio: 40,
    color: "negro"
};

//Mostrar objeto completo
console.log(electro1);

//Acceso a propiedades
console.log(electro1.nombre);
console.log(electro1["nombre"]);

//Modificar propiedades
console.log(electro1.color);
electro1.color = "rosa";
console.log(electro1.color);
electro1["color"] = "amarillo";
console.log(electro1.color);

//Añadir propiedades nuevas
electro1.disponible = true;
// console.log(electro1);
// console.log(electro2);

//Eliminar propiedades
delete electro1.disponible;

//DESTRUCTURING
const {nombre, precio } = electro1;
// console.log(`El nombre es ${nombre} y el precio ${precio}`);

// //Recorrer un objeto
// for (let propiedad in electro1){
//     console.log(`Clave: ${propiedad} -- Valor: ${electro1[propiedad]}`);
// }

//OBJETOS ANIDADOS: objetos dentro de otros objetos
const electro4={
    nombre: "Conge",
    precio: 300,
    color: "rojo",
    informacion:{
        medidas:{
            peso: "50kg",
            altura: "1m"
        },
        fabricacion:{
            pais: "ESpaña"
        }
    },
    toString: function (){
      
//Object.keys()
//Devuelve un array con las claves
console.log(Object.keys(electro1));

//Object.values()
//Devuelve array con los valores
console.log(Object.values(electro1));

//Object.entries() devuelve array de arrays [clave, valor]
console.log(Object.entries(electro1));

//MÉTODOS DENTRO DE UN OBJETO (FUNCIONES)
const electro3 = {
    nombre: "Horno",
    precio: 500,
    color: "plateado",
    encender: function (){
        console.log(`${this.nombre} está encendido`);
    }
};
electro3.encender();

//OBJETOS ANIDADOS: objetos dentro de otros objetos
const electro4={
    nombre: "Conge",
    precio: 300,
    color: "rojo",
    informacion:{
        medidas:{
            peso: "50kg",
            altura: "1m"
        },
        fabricacion:{
            pais: "ESpaña"
        }
    },
    toString: function (){
        return `El electrodoméstico es ${this.nombre} y está fabricado en ${this.informacion.fabricacion.pais}`
    }
};
console.log(electro4.toString());
