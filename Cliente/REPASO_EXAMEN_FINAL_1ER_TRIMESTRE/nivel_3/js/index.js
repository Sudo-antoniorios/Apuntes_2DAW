/*
Autor: Antonio Ríos Casado
Fecha: 27/11/2025
Descripción: Crea un formulario, generado desde JavaScript, con un único campo:

DNI (<input type="text">)

Botón "Validar"

Cuando el usuario pulse el botón:

Debes validar que el DNI cumple el formato:
✔ 8 números seguidos de 1 letra mayúscula
✔ Ejemplo: 12345678A

Si es válido → muestra:

“DNI correcto”

Si es incorrecto → muestra:

“DNI inválido. Formato: 12345678A”

Debe usarse RegExp y el método .test().
*/

function crearInterfaz(){
    const dni = document.createElement("input");
    dni.id = "dniId";
    dni.placeholder = "Introduce 8 dígitos y 1 letra (ej: 12345678A)";
    document.body.append(dni);
    const RegExp = /^\d{8}[A-Z]$/;

    const botonValidar = document.createElement("button");
    document.body.append(botonValidar);
    botonValidar.textContent = "Validar"
    botonValidar.addEventListener("click", () =>{
        const valorDNI = dni.value
        if(RegExp.test(valorDNI)){
            alert("DNI Valido")
        }else{
            alert("DNI Invalido")
        }

    })


}

crearInterfaz()