/**
 * 
 * German Y Antonio
 * 
 * 
 * 
 */

export class fiesta{
    #nombre;
    #lugar;
    #aInvitados = [];
    constructor(nombre, lugar, fecha){
        this.#nombre = nombre;
        this.#lugar = lugar;
    }

    get nombre(){
        return this.#nombre;
    }


    get lugar(){
        return this.#lugar;
    }


    set nombre(nom){
        if(typeof nom == "string" && nom.length >= 3){
            this.#nombre = nom;
        }else{
            throw("ERROR: Tipo incorrecto o longitud menor que 3");
        }
    }
    

    set lugar(lugar){
        if(lugar && typeof lugar == "string"){
            this.#lugar
        } else{
            throw("ERROR: Lugar no puede estar vacío y tiene que ser una cadena");
        }
    }

    anadirInvitado(personaje){
        if (personaje in this.#aInvitados){
            return false; 
        }else{
            this.#aInvitados.push(personaje);
            return true;
        }
    }
    
    eliminarInvitado(nombre) {
        if (this.#aInvitados.includes(nombre)) {
            this.#aInvitados = this.#aInvitados.filter(n => n !== nombre);
            return true;
        } else {
            return false; 
            }
        }

    toString(){
        return `El nombre es ${this.#nombre}, el lugar es ${this.#lugar}`
    }
}