"use strict"
//CREAR DINAMICAMENTE EL DOM
const contenedor = document.createElement("div");
contenedor.id = "game-container";
document.body.append(contenedor);

const titulo = document.createElement("h1");
titulo.textContent = "Tres en Raya";
contenedor.append(titulo);

const botonComenzar = document.createElement("button");
botonComenzar.id = "comenzar";
botonComenzar.textContent = "Comenzar";
contenedor.append(botonComenzar);

const botonHistorial = document.createElement("button");
botonHistorial.id = "historial";
botonHistorial.textContent = "Historial";
contenedor.append(botonHistorial);

const parrafoTiempo = document.createElement("p");
parrafoTiempo.id = "tiempo";
contenedor.append(parrafoTiempo);

const parrafoTurno = document.createElement("p");
parrafoTurno.id = "turno";
contenedor.append(parrafoTurno);

//Crear el tablero
const tablero = document.createElement("div");
tablero.id = "tablero";
contenedor.append(tablero);
const crearCeldasTablero = () => {
    for(let i = 0 ; i < 9 ; i++){
        const celda = document.createElement("div");
        celda.classList.add("celda");
        celda.dataset.index = i;
        tablero.append(celda);
    }
};
crearCeldasTablero();

const parrafoResultado = document.createElement("p");
parrafoResultado.id = "resultado";
contenedor.append(parrafoResultado);

//VARIABLES Y LÓGICA DEL JUEGO
const combinacionesGanadoras = [
  [0, 1, 2], // filas
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6], // columnas
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8], // diagonales
  [2, 4, 6],
];

//Al pricipio, las celdas están vacías
const estadoTablero = Array(9).fill(null);//Definimos un array y lo completamos con null

//Pedir los nombres de los jugadores
const pedirNombres = () => {
    const jugadorX = prompt("Introduce el nombre del jugador X");
    const jugadorO = prompt("Introduce el nombre del jugador O");

    iniciarJuego();

}
const iniciarJuego = () => {
    //El jugador que tiene el turno en este momento
    let jugadorActual= "X";
    iniciarTemporizador();
}
const iniciarTemporizador = () => {
    let tiempoRestante = 10;
    
    const intervalo = setInterval(() => {
        tiempoRestante--;
        parrafoTiempo.textContent = `Tiempo restante: ${tiempoRestante} segundos`;

        if (tiempoRestante === 0){
            parrafoResultado.textContent = `Tiempo agotado, pierde turno ${jugadorActual}`;
            cambiarTurno();
        }
    }, 1000);
};
const cambiarTurno = () => {
    jugadorActual = jugadorActual === "X" ? "O" : "X";
    iniciarTemporizador();
};

const manejarclicksTablero = (evento) => {
    const celda = evento.target;
    if(!celda.classList.contains("celda")) return;//Comprobar que pincha sobre un div de la clase celda, no sobre un filo u otra cosa...

    //nos quedamos con el índice
    const indice = Number(celda.dataset.index);
    if(estadoTablero[indice] !== null) return;//Ya había una ficha X o O
    estadoTablero[indice] = jugadorActual;
    //Lo muestro en pantalla
    celda.textContent = jugadorActual;

    //Comprobar si la partida ha terminado
    const partidaTerminada = verificarFinPartida();

};

const verificarFinPartida = () => {
    
}
//EVENTOS
botonComenzar.addEventListener("click", pedirNombres);
tablero.addEventListener("click", manejarclicksTablero);