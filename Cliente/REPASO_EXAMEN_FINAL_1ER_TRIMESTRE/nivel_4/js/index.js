/*
Autor: Antonio Ríos Casado
Fecha: 27/11/2025
Descripción: Crea una clase Persona con los siguientes atributos privados:

nombre (string)

edad (number)

La clase debe tener:

Setters que validen:

nombre → solo letras y espacios

edad → número entre 1 y 120

Si algún dato es incorrecto → throw new Error("Mensaje de error")

Después:

Crea un formulario simple con un input para nombre y otro para edad.

Al pulsar “Crear persona”, intenta crear una instancia de Persona.

Muestra un alert:

Si todo está bien: "Persona creada correctamente"

Si hay error: el mensaje del error.
*/

import { Persona } from "./Persona.js";

function crearInterfaz(){
    const inputNombre = document.createElement("input");
    inputNombre.placeholder = "Nombre de la persona";
    document.body.append(inputNombre);

    const inputEdad = document.createElement("input");
    inputEdad.placeholder = "Edad de la persona";
    document.body.append(inputEdad);

    const botonCrearPersona = document.createElement("button");
    botonCrearPersona.textContent = "Crear Persona";
    document.body.append(botonCrearPersona);
    botonCrearPersona.addEventListener("click", () =>{
        let persona;
        const nombre = inputNombre.value;
        const edad = inputEdad.value;
        
        try{
            const persona1 = new Persona(nombre,edad)
            alert("Persona creada")
            console.log(persona1)
            persona1.guardarEnLocalStorage()

        }catch(error){
            alert(error.message);
            return;
        }

    })

    
}

crearInterfaz()
