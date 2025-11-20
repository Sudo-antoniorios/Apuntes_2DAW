/*
 * Author: Antonio Ríos Casado
 * Fecha: 21-10-2025
 * Descripción: Exámen UD1-UD3: Clase animal :).
 */

import { personaje } from "./personaje.js";

export class animal extends personaje {
    #especie; 
    #trabajo; 
    constructor(especie, trabajo, nombre) {
        super(nombre);
        this.especie = especie;
        this.trabajo = trabajo;
        
    }

    get especie(){
        return this.#especie;
    }

    set especie(especie){
        //if(especie != "esponja" || especie !=  "estrella de mar" || especie !=  "calamar" || especie !=  "cangrejo" || especie !=  "ardilla"){
            //throw("La especie tiene que ser 'esponja', 'estrella de mar', 'calamar', 'cangrejo' o 'ardilla'");
            this.#especie = especie;
        
    }

    get trabajo(){
        return this.#trabajo;
    }
            /*
            set trabajo(trabajo){
            var array_prueba_espacios = trabajo.split(" ");     Pensaba que tenía que tener mínimo 2 palabras, aún así no sé si está bien validado
            if (length(array_prueba_espacios) > 1){             pero lo dejo para despues confirmar si funciona
                this.#trabajo = trabajo;
            */
    set trabajo(trabajo){
        if(trabajo.length < 4){
            throw("ERROR: Trabajo tiene que tener mínimo 3 letras.")
        
        }else{
            this.#trabajo = trabajo;
        }

    }

    toString(){
        return `${super.toString()}, trabaja de ${this.#trabajo} y su especie es ${this.#especie}`;
    }
}

    

