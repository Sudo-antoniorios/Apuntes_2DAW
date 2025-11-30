/*
Autor: Antonio Ríos Casado
Fecha: 28/11/2025
Descripción: Crea dinámicamente un formulario con estos campos:

Nombre

Email

Edad

Botón "Registrar"

Debe existir una clase Usuario que valide:

Nombre → solo letras

Email → formato válido (con RegExp)

Edad → mayor o igual a 18 años

Al pulsar Registrar:

Si los datos no son válidos → mostrar alert con el error.

Si son válidos:

Ocultar el formulario

Mostrar un mensaje en pantalla:
"Usuario registrado con éxito"

*/

export class Usuario{
    #nombre
    #email
    #edad

    constructor(nombre,email,edad){
        nombre = this.nombre;
        email = this.email;
        edad = this.edad
    }

    get nombre(){
        return this.#nombre
    }

    get email(){
        return this.#email
    }

    get edad(){
        return this.#edad
    }

    set nombre(nombre){
        const regEx = /^[A-Za-zñÑáéíóúÁÉÍÓÚ\s]+$/;
        if(regEx.test(nombre)){
            this.#nombre = nombre
        }else{
            throw new Error("El nombre solo puede contener espacios y letras")
        }
    }

    set email(email){
        const regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
        if(regEx.test(email)){
            this.#email = email
        }else{
            throw new Error("El email no tiene un formato correcto")
            
        }

    }

    set edad(edad){
        if(edad <= 18){
            this.#edad = edad
        }else{
            throw new Error("La edad tiene que ser mayor o igual a 18")
        }
    }

    guardarEnLocalStorage(){
        localStorage.setItem("Usuario", JSON.stringify({
            nombre : this.nombre,
            edad : this.edad,
            email : this.email
        }
        ))
    }

    static obtenerDesdeLocalStorage(){
        if (JSON.parse(localStorage.getItem("Usuario"))){
            return JSON.parse(localStorage.getItem("Usuario")); 
        }else{
            return null;
        }
    }

}
