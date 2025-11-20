const contenedor = document.getElementById("contenedor-ejemplo");
if(contenedor){
//Elemento input
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Introduce tu nombre";
//Elemento botón
    const boton = document.createElement("button");
    boton.textContent = "Enviar";
    boton.addEventListener("click", () => {
        const nombre = input.value.trim();
        alert(nombre ? `Hola ${nombre}` : "El input debe contener tu nombre");
    });
//Contenedor para este "formulario"
    const contFormulario = document.createElement("div");
    contFormulario.append(input,boton);
    contenedor.append(contFormulario);

//Elemento imagen
    const contMedia = document.createElement("div");
    const imagen = document.createElement("img");
    imagen.src = "PC.webp";
    imagen.alt= "Imagen de la pruincesa chicle";
    imagen.style.maxWidth = "240px";

//Elemento video
    const video = document.createElement("video");
    video.src = "https://www.w3schools.com/html/mov_bbb.mp4";
    imagen.style.maxWidth = "320px";
    video.controls = true;

    contMedia.append(imagen,video);
    contenedor.append(contMedia);

//URL
    const enlace = document.createElement("a");
    enlace.href = "https://towardsdatascience.com/";
    enlace.textContent =" Acceso a artículos de DataScience";
    enlace.target = "_blank"; 
    enlace.rel = "noopener noreferrer";
    contenedor.append(enlace);
}