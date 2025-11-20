import { persona } from "./persona.js";

export class jurado extends persona {
    #profesion;
    constructor(nombre, edad, genero, profesion) {
        super(nombre, edad, genero);
        this.profesion = profesion;
        
    }

    get profesion(){
        return this.#profesion;
    }

    set profesion(profesion){
        if(profesion.length < 5){
            throw ("ERROR: La profesión debe tener mínimo 5 carácteres.")
        
        } else{
            this.#profesion = profesion;
        }
    }

    toString(){
        return `${super.toString()} Y la profesión es ${this.profesion}`;
    }
}