/*
/**
 * 
 * German Feo Y Antonio guapo
 * 
 * 
 * 
 */


import { Personaje } from "./Personaje.js";

export class Humano extends Personaje {
    #profesion;
    #edad;
    constructor(edad, profesion, nombre){
        super(nombre);
        this.profesion = profesion;
        this.edad = edad;
    }
    
    get profesion(){
        return this.#profesion;
    }


    set profesion(profesion){
        if (typeof profesion === "string" && profesion.length > 0 || profesion.slice(-1) == "a" || profesion.slice(-1) == "o"){
            this.#profesion
        }else{
            throw("ERROR: Profesión no puede estar vacía u debe terminar en 'a' o en 'u'")
        }
    }

    get edad(){
        return this.#edad;
    };

    set edad(edad){
        if(typeof edad == "number" && edad >= 16 && edad <= 120){
            this.#edad = edad;
        }else{
            throw ("ERROR: La edad tiene que ser un numero y estar entre 16 y 120 ");
        }
    }

    toString(){
        return `La edad es ${this.#edad} y la profesión es ${this.#profesion}`
    }
}