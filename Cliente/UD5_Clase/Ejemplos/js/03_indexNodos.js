//APPENDCHILD
document.getElementById("crearNodoDIV").addEventListener("click", () => {
    const nuevoElemento = document.createElement("div");
    const texto = document.createTextNode("Esto es un contenedor creado con appendChild");
    nuevoElemento.appendChild(texto);
    document.getElementById("contenedorVacio").appendChild(nuevoElemento);
});
document.getElementById("crearNodoP").addEventListener("click", () => {
    const nuevoElemento = document.createElement("p");
    const texto = document.createTextNode("Esto es un párrafo creado con appendChild");
    nuevoElemento.appendChild(texto);
    document.getElementById("contenedorVacio").appendChild(nuevoElemento);
});
//APPEND
document.getElementById("append").addEventListener("click", () => {
    const nuevoParrafo = document.createElement("p");
    nuevoParrafo.textContent = "Este párrafo has sido creado con append";
    document.getElementById("contenedorVacio").append(nuevoParrafo);
});
//ELIMINAR ELEMENTOS
document.getElementById("removeChild").addEventListener("click", () => {
    const contVacio = document.getElementById("contenedorVacio");
    //Eliminar el úlltimo elemento
    if(contVacio.lastChild){
        contVacio.removeChild(contVacio.lastChild);
    }
    else{
        alert("No tiene elementos para elimar, está vacío el contenedor");
    }
});
document.getElementById("remove").addEventListener("click", () => {
    const contVacio = document.getElementById("contenedorVacio");
    //Eliminar el úlltimo elemento
    if(contVacio){
        contVacio.remove();
        alert("El contenedor vacío ha sido eliminado.")
    }
    else{
        alert("No existe el contnedor vacío");
    }
});
//REEMPLAZAR NODOS
document.getElementById("replaceChild").addEventListener("click", () => {
    const sustituir = document.getElementById("tituloAntiguo");
    const contenedorPadre = document.getElementById("contenedor")
    if(sustituir){
        const nodoNuevo = document.createElement("h2");
        nodoNuevo.textContent = "Este es el nuevo titulo reemplazado";
        sustituir.replaceWith(nodoNuevo);
        //contenedorPadre.replaceChild(nodoNuevo,sustituir);
    }
});