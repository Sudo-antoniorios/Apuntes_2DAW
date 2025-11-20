const boton = document.getElementById("boton");

boton.addEventListener("click", () =>{
    // Selector de etiqueta h1, coge el primero que encuentre
    const titulo = document.querySelector("h1");
    if (titulo){
        titulo.textContent = "Titulo Modificado";
        titulo.style.color = "Yellow"
    }

// Selector por clase (soo el primero)
const primerParrafo = document.querySelector(".parrafo");
if (primerParrafo){
    primerParrafo.textContent = "Primer Párrafo modificado";
    primerParrafo.style.color = "color"
}

// Selector por ID
const tituloSecundario = document.querySelector("#titulo-secundario");
if(tituloSecundario){
    tituloSecundario.textContent = "Titulo secundario modificado";
    tituloSecundario.style.color = "blue";
    tituloSecundario.style.fontSize = "50px";
}

// Selector por atributo
const inputTexto = document.querySelector("input[name=inputTexto]")
if(inputTexto){
    inputTexto.value = "Texto modificado";
}

// Selector combinado (solo el primero que encuentra)
const parrafoEnContenedor = document.querySelector(".contenedor .parrafo");
if(parrafoEnContenedor){
    parrafoEnContenedor.style.backgroundColor = "pink"
}

// El uso de querySelectorAll
const todosInputs = document.querySelectorAll("input[name=inputTexto]");
todosInputs.forEach((input,i) => {
    input.style.border = "2px solid red"
    input.value = `Texto del input ${i + 1}`;

});

// Selecciona un elemento dentro de una lista
const lista = document.querySelectorAll(".lista li");
const tercerElemento = lista[2];
if(tercerElemento){
    tercerElemento.textContent = "Tercer elemento modificado"
}

// Seleccionar todos los elementos por clase
const subtitulos = document.querySelectorAll(".subtitulo");
subtitulos.forEach((sub,i) =>{
    sub.style.color = "green";
})

})
