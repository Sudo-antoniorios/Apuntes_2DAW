export class Alumno {
    #nombre;
    #fechaNacimiento;
    #dni;
    #casa = null;

    constructor(nombre,fechaNacimiento,dni,casa=null){
        this.nombre = nombre;
        this.fechaNacimiento = fechaNacimiento;
        this.dni = dni;
        this.#casa = casa;
    }

    get nombre(){
        return this.#nombre
    }

    set nombre(nombre){
        const regEx = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
        if(!regEx.test(nombre) || nombre.trim() === ""){
            throw new Error("El nombre no cumple con los parámetros");
        }

        this.#nombre = nombre;
    }

    get fechaNacimiento() { return this.#fechaNacimiento };

    set fechaNacimiento(fechaNacimiento) {
        const regEx = /^\d{4}-\d{2}-\d{2}$/;
        if (!regEx.test(fechaNacimiento) || fechaNacimiento.trim() === "") {
            throw new Error("La fecha de nacimiento no cumple con los parámetros");
        }

        this.#fechaNacimiento = fechaNacimiento;
    }

    get dni() { return this.#dni };

    set dni(dni) {
        const regEx = /^\d{8}[A-Z]$/;
        if (!regEx.test(dni) || dni.trim() === "") {
            throw new Error("El dni no cumple con los parámetros");
        }

        this.#dni = dni;
    }

    asignarCasa(){
        const casas = ["Gryffindor", "Slytherin","Ravenclaw", "Hufflepuff"];
        this.casa = casas[Math.floor(Math.random() * casas.length)];
    }

    guardarEnLocalStorage(){
        localStorage.setItem("alumno", JSON.stringify({
            nombre : this.nombre,
            fechaNacimiento : this.fechaNacimiento,
            dni : this.dni,
            casa : this.casa

        
        }
        ))
    }

    static obtenerDesdeLocalStorage(){
        if (JSON.parse(localStorage.getItem("alumno"))){
            return JSON.parse(localStorage.getItem("alumno")); 
        }else{
            return null;
        }
    }
}