/*
 * Author: Antonio Ríos Casado
 * Fecha: 21-10-2025
 * Descripción: Exámen UD1-UD3: Clase personaje :).
 */

export class personaje {
    #nombre;
    constructor(nombre) {
        this.nombre = nombre;
    }
    get nombre(){
        return this.#nombre;
    }

    set nombre(nombre){
        if(nombre.length >= 4 ){ // Queda comprobar si empieza por mayúscula y que es tipo cadena
            this.#nombre = nombre;
        }else{
            throw ("ERROR: El nombre tiene que tener mínimo 4 carácteres y empezar por mayúscula");
        }
        
        }

     toString(){
        return `El nombre es ${this.nombre}`
     }

}