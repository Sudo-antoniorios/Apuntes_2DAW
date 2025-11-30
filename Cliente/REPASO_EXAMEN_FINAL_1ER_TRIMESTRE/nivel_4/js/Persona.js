export class Persona{
    #nombre;
    #edad;

    constructor(nombre, edad){

        this.nombre = nombre;
        this.edad = edad;
    }


    get nombre(){
        return this.#nombre
    }

    get edad(){
        return this.#edad
    }

    set nombre(nombre){
        const regEx = /^[A-Za-zñÑáéíóúÁÉÍÓÚ\s]+$/
        
        if(regEx.test(nombre)){
            this.#nombre = nombre; 
        }else{
            throw new Error("El nombre solo puede tener letras y espacios.")
        }
    }

    set edad(edad){
        const edadNum = parseInt(edad, 10); 

        if (isNaN(edadNum) || edadNum < 1 || edadNum > 120) {
            throw new Error("La edad debe ser un número entre 1 y 120.");
        }
        
        this.#edad = edadNum;
    }

    guardarEnLocalStorage(){
        localStorage.setItem("Persona", JSON.stringify({
            nombre : this.nombre,
            edad : this.edad
        }
        ))
    }

    static obtenerDesdeLocalStorage(){
        if (JSON.parse(localStorage.getItem("Persona"))){
            return JSON.parse(localStorage.getItem("Persona")); 
        }else{
            return null;
        }
    }

    
}