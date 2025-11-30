/*
Autor: Antonio Ríos Casado
Fecha: 30/11/2025
Descripción: En la página, crea con JavaScript:

Una imagen <img> que al cargar la página muestre:

imagen1.png

al pulsar el boton "cargar"

Un texto debajo:
"Cargando..."

Tras 3 segundos:

Cambiar la imagen a: imagen2.png

Cambiar el texto a:
"Imagen actualizada"
*/

function crearInterfaz(){
    const divImagenes = document.createElement("div");
    divImagenes.id = "imagenes";
    document.body.append(divImagenes)

    const textoPrincipal = document.createElement("p");
    textoPrincipal.textContent = "Yo antes de daw :D"
    document.body.append(textoPrincipal)

    const imagen1 = document.createElement("img");
    imagen1.id = "imagen1";
    imagen1.src = "img/yo_antes_de_daw.jpg";
    imagen1.alt = "yo antes de daw"
    imagen1.width = "350"
    divImagenes.append(imagen1)

    const imagen2 = document.createElement("img");
    imagen2.id = "imagen2"
    imagen2.src = "img/yo_despues_de_daw.jpg"
    imagen2.alt = "yo despues de daw";
    divImagenes.append(imagen2)
    imagen2.style.display = "none"

    const boton = document.createElement("button");
    boton.id = "boton";
    boton.textContent = "Cargar";
    divImagenes.append(boton);
    boton.addEventListener("click", () =>{
            imagen1.style.display = "none";
            textoPrincipal.style.display = "none"
            const textoCargando = document.createElement("h2");
            textoCargando.textContent = "Cargando ...";
            document.body.append(textoCargando);
        setTimeout(() =>{
            imagen2.style.display = "block";
            textoCargando.style.display = "none";
            boton.style.display = "none";
            const textoDespues = document.createElement("p");
            document.body.append(textoDespues);
            textoDespues.textContent = "Yo después de DAW :`("

        },3000)

    })
}

crearInterfaz()

