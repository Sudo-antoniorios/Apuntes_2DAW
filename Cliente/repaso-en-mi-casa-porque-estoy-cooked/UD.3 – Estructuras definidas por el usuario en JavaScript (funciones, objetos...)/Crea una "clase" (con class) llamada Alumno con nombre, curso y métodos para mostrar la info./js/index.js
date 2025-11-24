/*
Autor: Antonio Ríos Casado
Fecha: 24/11/2025
Descripción: Crea una "clase" (con class) llamada Alumno con nombre
             curso y métodos para mostrar la info.
*/

class Alumn{
    constructor(name, age){
        this._name = name;
        this._age = age;
    }

    get name(){
        return this._name;
    }

    get age(){
        return this._age;
    }

    get_info(){
        console.log(`El nombre del alumno es ${this._name} y la edad es ${this._age}`)
    }

    
}

const person1 = new Alumn("Antonio", 20);
const person2 = new Alumn("Marta", 18);

person1.get_info();
person2.get_info()