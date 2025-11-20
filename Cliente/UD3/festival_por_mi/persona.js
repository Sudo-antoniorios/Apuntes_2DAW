export class persona {
    #nombre;
    #edad;
    #genero;
    constructor(nombre, edad, genero) {
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
    }
    get nombre(){
        return this.#nombre;
    }

    set nombre(nombre){
        if(nombre.length >= 3 ){
            this.#nombre = nombre;
        }else{
            this.#nombre = this.#nombre + "...";
        }
        
        }
     get edad(){
        return this.#edad;
     }

     set edad(edad){
        if(this.#edad <= 18){
            this.#edad === 18;
        
        } else{
            this.#edad = edad;
        }
     }

     get genero(){
        return this.#genero;
     }

     set genero(genero){
        if(genero === "Masculino" || genero === "Femenino" || genero === "Otro"){
            this.#genero = genero;
        }else{
            throw("ERROR: El género debe ser: Masculino, Femenino u Otro");
        }
     }

     toString(){
        return `El nombre es ${this.nombre}, la edad es ${this.edad} y el género ${this.genero}`
     }


     
}