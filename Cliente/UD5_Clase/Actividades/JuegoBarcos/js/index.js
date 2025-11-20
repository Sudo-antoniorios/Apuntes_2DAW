"use strict"

let aBarcos = []; 
let aciertos = 0;   // Contador de aciertos
let fallos = 0;   // Contador de fallos

crearTitulo();
crearFormulario();

function crearTitulo(){
    const titulo = document.createElement("h3");
    titulo.textContent = "Juego de barcos";
    document.body.append(titulo);
}

function crearFormulario(){
    const formulario = document.createElement("form");

    const etiqueta = document.createElement("label");
    etiqueta.textContent = "Edad del tripulante";
    const inputEdad = document.createElement("input");
    inputEdad.id = "edad";
    inputEdad.type = "number";
    inputEdad.placeholder = "Introduce tu edad";
    inputEdad.min = 1;

    const boton = document.createElement("button");
    boton.type = "button";
    boton.id ="botonComenzar";
    boton.textContent = "Comenzar!!";
    boton.disabled = true;

    //Acctivamos el botón si edad es válida
    inputEdad.addEventListener("input", () => {
        boton.disabled = !(inputEdad.value.trim() !== "" && inputEdad.value > 0);
    })

    formulario.append(etiqueta,inputEdad,boton);
    document.body.append(formulario);

    boton.addEventListener("click",comenzar);
}
function comenzar(evento){
    // evento.preventDefault();
    //Comprobar la edad y crear un tablero del tamaño indicado
    const edad = parseInt(document.getElementById("edad").value);
    document.getElementById("botonComenzar").disabled = true;
    document.getElementById("edad").disabled = true;
    const tamanno = edad < 10 ? 5 : 10;
    crearTablero(tamanno);
}

function crearTablero(tamanno){
    generarBarcosAleatorios(tamanno);

    //Crear una tabla y sus celdas
    const tabla = document.createElement("table");
    tabla.style.borderCollapse = "collapse"; //Quita el espacio entre las líneas
    tabla.style.marginTop = "15px";
    tabla.id = "tabla";

    let contador = 0;
    for (let f=0; f < tamanno; f++){
        const fila = document.createElement("tr");
        for (let c=0; c < tamanno; c++){
            const celda = document.createElement("td");
            celda.id = ++contador;
            celda.style.border = "1px solid";
            celda.style.width = "40px";
            celda.style.height = "40px";
            celda.style.cursor = "pointer";

            celda.addEventListener("click", pulsar);
            fila.append(celda);
        }
        tabla.append(fila);
    }
    document.body.append(tabla);
}
function generarBarcosAleatorios(tamanno){
    aBarcos.length = 0;
    const totalCeldas = tamanno * tamanno;
    while(aBarcos.length <  5){
        const numero = Math.floor(Math.random() * totalCeldas) + 1;
        if(!aBarcos.includes(numero)) aBarcos.push(numero);
    }
    console.log("Barcos están: ", aBarcos);
    
}
function pulsar(){
    const celdaId = parseInt(this.id);
    const imagen = document.createElement("img");
    imagen.style.width = "100%";
    imagen.style.height = "100%";
    const celda = this;
    celda.append(imagen);
    if (aBarcos.includes(celdaId)){
        imagen.src = "imagenes/barco.jpg";
        aciertos ++;
    }else{
        imagen.src = "imagenes/agua.jpg";
        fallos ++;
    }
    //Desactivamos el click en esta celda
    this.removeEventListener("click",pulsar);

    //Comprobamos si ha encontrado los 5 barcos
    if (aciertos == 5)  finalizar();

}
function finalizar(){
      Swal.fire({
        title: `¡Terminado!`,
        text: `Has encontrado todos los barcos y fallado ${fallos} veces.`,
        icon: "success",
        confirmButtonText: "Aceptar",
    }).then(() => {
        limpiar(); // Reinicia el juego directamente
    });
}
function limpiar(){
    document.getElementById("tabla").remove();
    document.getElementById("edad").value  = "";
    document.getElementById("edad").disabled = false;
    // document.getElementById("botonComenzar").disabled = true;

    aBarcos = [];
    aciertos = 0;
    fallos = 0;
}