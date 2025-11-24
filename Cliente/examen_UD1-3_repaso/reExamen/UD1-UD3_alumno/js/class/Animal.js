/*
/**
 * 
 * German Feo Y Antonio guapo
 * 
 * 
 * 
 */

import { Personaje } from "./Personaje.js";

export class Animal extends Personaje{
    #especie
    #trabajo

    constructor(nombre,especie,trabajo){
        super(nombre),
        this.#especie = especie,
        this.#trabajo = trabajo;
    }

    get especie(){
        return this.#especie
    }


    get trabajo(){
        return this.#trabajo;
    }

    set especie(especie){
        if ( typeof especie == "string" && especie == "esponja" || especie == "estrella de mar" || especie == "calamar" || especie == "cangrejo" || especie == "ardilla") {
            this.#especie = especie
        }else{
            throw("ERROR: la especie debe ser una cadena y un valor valido")
        }
    }
    

    set trabajo(trabajo){
        if(typeof trabajo == "string" && trabajo.includes(" ") && trabajo.length >= 3){
            this.#trabajo
        }else{
            throw ("ERROR: Trabajo debe ser una cadena de más de 3 carácteres y ser una sola palabla")
        }
        
    }

    toString(){
        return `El nombre es ${super.nombre}, la especie es ${this.#especie} y el trabajo es ${this.#trabajo}`
    }
    
}