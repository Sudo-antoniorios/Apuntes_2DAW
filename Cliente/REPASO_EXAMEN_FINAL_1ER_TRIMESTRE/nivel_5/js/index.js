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

// index.js
import { Usuario } from "./Usuario.js";

function crearInterfaz() {
    // 1. Crear el contenedor principal del formulario
    const contenedorFormulario = document.createElement("div");
    contenedorFormulario.id = "formularioRegistro"; // Le damos un ID para ocultarlo
    document.body.append(contenedorFormulario);

    // 2. Crear el contenedor para el mensaje de éxito (inicialmente oculto)
    const mensajeExito = document.createElement("div");
    mensajeExito.id = "mensajeExito";
    mensajeExito.innerHTML = "<h2>🎉 Usuario registrado con éxito</h2>";
    mensajeExito.style.display = "none"; // Ocultamos el mensaje inicialmente
    document.body.append(mensajeExito);


    // --- Creación de inputs (los adjuntamos al nuevo contenedor) ---

    const inputNombre = document.createElement("input");
    inputNombre.placeholder = "Nombre";
    contenedorFormulario.append(inputNombre);
    
    // ... Puedes añadir <br> o usar CSS para mejor formato ...
    contenedorFormulario.append(document.createElement("br")); 


    const inputEmail = document.createElement("input");
    inputEmail.placeholder = "Email";
    contenedorFormulario.append(inputEmail);
    contenedorFormulario.append(document.createElement("br"));

    const inputEdad = document.createElement("input");
    inputEdad.placeholder = "Edad";
    contenedorFormulario.append(inputEdad);
    contenedorFormulario.append(document.createElement("br"));


    const botonRegistrar = document.createElement("button");
    botonRegistrar.textContent = "Registrar";
    contenedorFormulario.append(botonRegistrar);


    // --- Lógica del Botón ---
    botonRegistrar.addEventListener("click", () => {
        const nombre = inputNombre.value;
        const email = inputEmail.value;
        const edad = inputEdad.value;

        try {
            // Intenta crear el usuario, lo que ejecuta las validaciones
            const usuario = new Usuario(nombre, email, edad);

            // SI ES VÁLIDO:
            usuario.guardarEnLocalStorage();
            console.log("Usuario registrado:", usuario);

            // a) Ocultar el formulario
            contenedorFormulario.style.display = "none";

            // b) Mostrar el mensaje de éxito
            mensajeExito.style.display = "block";
            
            // Si el alert no es necesario, puedes eliminarlo, 
            // pero lo dejo si el requisito lo pide estrictamente
            alert("Usuario Creado con Éxito"); 


        } catch (error) {
            // SI ES INVÁLIDO:
            alert(error.message);
            // El formulario permanece visible
            return;
        }
    });

}

crearInterfaz();
