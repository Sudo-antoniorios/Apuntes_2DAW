/**
 * 
 * German Y Antonio
 * 
 * 
 * 
 */



export class Personaje{
    #nombre
    constructor(nombre){
        this.#nombre = nombre
    }

    set nombre(nombre){
        if (length.this.#nombre >= 4 && this.#nombre.slice(0,1) != this.#nombre.slice(0,1).toUpperCase() ) {
            this.nombre = nombre;

        }else{
            throw("ERROR: El nombre tiene que tener mínimo 4 carácteres y empezar por mayúscula")
        }      
    }
    

    get nombre(){
        return this.#nombre;
    }

    toString(){
        return `El nombre es ${this.#nombre}`
    }



}