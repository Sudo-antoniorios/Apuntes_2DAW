/*
 * Author: Antonio Ríos Casado
 * Fecha: 21-10-2025
 * Descripción: Exámen UD1-UD3: Clase fiesta :).
 */

export class fiesta {
    #nombre;
    #lugar;
    #fecha;
    #ainvitados;
    constructor(nombre, lugar, fecha, ainvitados) {
        this.nombre = nombre;
        this.lugar = lugar;
        this.fecha = fecha;
        this.ainvitados = []; // Acabar
        
    }
    get nombre(){
        return this.#nombre;
    }

    set nombre(nombre){
        if(nombre.length >= 3 ){ 
            this.#nombre = nombre;
        }else{
            throw ("ERROR: El nombre tiene que tener mínimo 3 carácteres y no puede contener números");
        }
        
        }
    
    get lugar(){
        return this.#lugar;
    }

    set lugar(lugar){
        if(!lugar){
            throw("ERROR: Lugar no puede estar vacío");
        
        }else{
            this.#lugar = lugar;
        }
    }

    
    get fecha(){
        return this.#fecha;
    }

    set fecha(fecha){
        this.#fecha = fecha; // No sé validar la fecha :(
    }

    get ainvitados(){
        return this.#ainvitados;
    }

    set ainvitados(ainvitados){
            this.#ainvitados = ainvitados;
    }
        
    toString(){
        return `El nombre de la fiesta es ${this.#lugar}, se ubica en ${this.#lugar}, es el ${this.#fecha} y los invitados son ${this.#ainvitados}, `
     }

     // ACABAR METODO METER Y SACAR INVITADOS DEL ARRAY

}

     
