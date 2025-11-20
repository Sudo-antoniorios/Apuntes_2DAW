/*
 * Author: Antonio Ríos Casado
 * Fecha: 21-10-2025
 * Descripción: Exámen UD1-UD3: Clase humano :).
 */

import { personaje } from "./personaje.js";

export class humano extends personaje {
    #profesion; //Comprobar que sea tipo string
    #edad; //Comprobar que sea tipo number
    constructor(edad, profesion, nombre) {
        super(nombre);
        this.profesion = profesion;
        this.edad = edad;
        
    }

    get profesion(){
        return this.#profesion;
    }

    set profesion(profesion){
        if(!profesion){
            throw("La profesión no puede estar vacía, y tiene que acabar en 'a' u 'o'");
        
        }else{
            this.#profesion = profesion;
        }
    }

    get edad(){
        return this.#edad;
    }

    set edad(edad){
    if (edad < 16 || edad > 120){
        throw("ERROR: La edad debe estar entre 16 y 120");
    
    }else{
        this.#edad = edad;
    }
}

    toString(){
        return `${super.toString()}, trabaja de ${this.#profesion} y tiene ${this.#edad} años`;
    }
}
