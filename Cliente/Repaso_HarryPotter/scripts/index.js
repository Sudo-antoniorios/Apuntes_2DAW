import { Alumno } from "./alumno.js";

function crearInterfaz() {
    const titulo = document.createElement("h1");
    titulo.textContent = "CEREMONIA DE SELECCIÓN";
    document.body.append(titulo);

    const formulario = document.createElement("div");
    formulario.id = "formulario";

    const titulo2 = document.createElement("h2");
    titulo2.textContent = "Bienvenido a Hogwarts";
    formulario.append(titulo2);

    const etiquetaN = document.createElement("label");
    etiquetaN.textContent = "Nombre:";
    etiquetaN.setAttribute("for", "nombre");
    formulario.append(etiquetaN);

    const inputN = document.createElement("input");
    inputN.type = "text";
    inputN.id = "nombre";
    formulario.append(inputN);

    const etiquetaF = document.createElement("label");
    etiquetaF.textContent = "Fecha de nacimiento:";
    etiquetaF.setAttribute("for", "fecha");
    formulario.append(etiquetaF);

    const inputF = document.createElement("input");
    inputF.type = "date";
    inputF.id = "fecha";
    formulario.append(inputF);

    const etiquetaD = document.createElement("label");
    etiquetaD.textContent = "DNI:";
    etiquetaD.setAttribute("for", "dni");
    formulario.append(etiquetaD);

    const inputD = document.createElement("input");
    inputD.type = "text";
    inputD.id = "dni";
    formulario.append(inputD);

    const botonEnviar = document.createElement("button");
    botonEnviar.id = "enviar";
    botonEnviar.textContent = "Enviar";
    formulario.append(botonEnviar);

    formulario.append(titulo2, etiquetaN, inputN, etiquetaF, inputF, etiquetaD, inputD, botonEnviar);
    document.body.append(formulario);

    const divImagenes = document.createElement("div");
    divImagenes.id = "imagenes";
    divImagenes.style.display = "none";

    const h2Imagenes = document.createElement("h2");
    h2Imagenes.textContent = "Mucha suerte!";
    divImagenes.appendChild(h2Imagenes);

    const divImagen = document.createElement("div");
    divImagen.id = "imagen";
    divImagenes.appendChild(divImagen);

    const img = document.createElement("img");
    img.id = "imagenSombrero";
    img.src = "imagenes/sombrero.gif";
    img.alt = "Sombrero seleccionador";


    divImagen.appendChild(img);

    const mensaje = document.createElement("p");
    mensaje.id = "mensaje";
    mensaje.textContent = "Sombrero está pensando...";
    divImagenes.appendChild(mensaje);

    document.body.appendChild(divImagenes);

    botonEnviar.addEventListener("click", () => {
        let alumno;
        const nombre = document.getElementById("nombre").value;
        const fecha = document.getElementById("fecha").value;
        const dni = document.getElementById("dni").value;

        try {
            alumno = new Alumno(nombre, fecha, dni);

        } catch (error) {
            alert(error.message);
            return;
        }

        sombreroPensando(alumno);
    });
}

crearInterfaz();

function sombreroPensando(alumno){
    const formulario = document.getElementById("formulario");
    formulario.style.display = "none";
    
    const imagenes = document.getElementById("imagenes");
    imagenes.style.display = "block";
    
    setTimeout(() => {

        document.querySelector("#imagenSombrero").src = "imagenes/casas.jpg";

        document.querySelector("#mensaje").textContent = "Pulsa en la imágen";

        document.querySelector("#imagenSombrero").addEventListener("click", () => {
            alumno.asignarCasa();
            alumno.guardarEnLocalStorage();
            alert(`Felicidades has sido seleccionado en la casa ${alumno.casa}`)
        })
    },6000);
}
