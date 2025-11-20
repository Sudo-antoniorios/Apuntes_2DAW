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

//VaRIABLES DEL JUEGO
let jugadores = {};
let victoriasJugadores = JSON.parse(localStorage.getItem("victoriasJugadores")) || {};
let jugadorActual= "X";
let intervalo = null;
let ganador;

//Al pricipio, las celdas están vacías
const estadoTablero = Array(9).fill(null);

//Pedir los nombres de los jugadores
const pedirNombres = () => {
    const jugadorX = prompt("Introduce el nombre del jugador X");
    const jugadorO = prompt("Introduce el nombre del jugador O");
    jugadores = { X: jugadorX, O: jugadorO };
    parrafoResultado.textContent = `Turno de: ${jugadorX}`;
    iniciarJuego();
}

const iniciarJuego = () => {
     limpiarTablero();

    //El jugador que tiene el turno en este momento
    jugadorActual= "X";
    
    tablero.addEventListener("click", manejarclicksTablero);

    iniciarTemporizador();
}
const iniciarTemporizador = () => {
    
//Primero tendré que limpiar si había un intervalo anterior
    if(intervalo){
        clearInterval(intervalo);
        intervalo = null;
    }

    let tiempoRestante = 10;
    intervalo = setInterval(() => {
        parrafoTiempo.textContent = `Tiempo restante: ${tiempoRestante} segundos`;
        tiempoRestante--;

        if (tiempoRestante === 0){
            parrafoResultado.textContent = `Tiempo agotado, pierde turno ${jugadorActual}`;
            cambiarTurno();
        }
    }, 1000);
};
const cambiarTurno = () => {
    jugadorActual = jugadorActual === "X" ? "O" : "X";
    iniciarTemporizador();
    parrafoResultado.textContent = `Turno de: ${jugadores[jugadorActual]}`;
};

const manejarclicksTablero = (evento) => {
    const celda = evento.target;
    if(!celda.classList.contains("celda")) return;
    
    //nos quedamos con el índice
    const indice = Number(celda.dataset.index);
    if(estadoTablero[indice] !== null) return;

    celda.textContent = jugadorActual;
    estadoTablero[indice] = jugadorActual;

    verificarFinPartida();
};

const verificarFinPartida = () => {

    // 1. Verificar si hay un ganador
    if (verificarSiGanador()) {
        guardarResultadoEnLocalStorage(jugadores[jugadorActual]);
        clearInterval(intervalo);
        intervalo = null;
        tablero.removeEventListener("click", manejarclicksTablero);
        parrafoTiempo.textContent = "";

        // Se puede usar la variable 'ganador' para el alert y el mensaje
        const nombreGanador = jugadores[jugadorActual]; 
        alert(`¡Jugador ${nombreGanador} gana!`);
        parrafoResultado.textContent = `Juego terminado - Ganador: ${nombreGanador}`;
        return true;
    } 
    
    // 2. Si NO hay ganador, verificar si hay empate (tablero lleno)
    if (!estadoTablero.includes(null)) {
        clearInterval(intervalo);
        intervalo = null;
        tablero.removeEventListener("click", manejarclicksTablero);
        parrafoTiempo.textContent = "";
        
        alert(`¡Empate!`);
        parrafoResultado.textContent = "Juego terminado - Empate";
        return true;
    }

    // 3. Si no hay ganador ni empate, el juego continúa
    cambiarTurno();
    return false;
}
function verificarSiGanador(){
        //Coprobaciones de filas
        for(let i = 0; i < 9 ; i+=3){
            if(estadoTablero[i] != null && estadoTablero[i]==estadoTablero[i+1] && estadoTablero[i]==estadoTablero[i+2]) return true;
        }
        //Comprobaciones de columnas
        for(let i = 0; i < 3 ;i++){
            if(estadoTablero[i] != null && estadoTablero[i]==estadoTablero[i+3] && estadoTablero[i]==estadoTablero[i+6]) return true;
        }
        //Coprobar diagonales
        if(estadoTablero[0] != null && estadoTablero[0] == estadoTablero[4] && estadoTablero[0] == estadoTablero[8]) return true;
        //Coprobar diagonales
        if(estadoTablero[2] != null && estadoTablero[2] == estadoTablero[4] && estadoTablero[2] == estadoTablero[6]) return true;
        
        return false;  
}
function guardarResultadoEnLocalStorage(ganador) {

    if (!victoriasJugadores[ganador]) {
        victoriasJugadores[ganador] = 0;
    }
    victoriasJugadores[ganador]++;
    localStorage.setItem("victoriasJugadores", JSON.stringify(victoriasJugadores));
}
function limpiarTablero(){
    estadoTablero.fill(null);
    document.querySelectorAll(".celda").forEach(celda => celda.textContent = "");
    parrafoTiempo.textContent = "";
}
const mostrarHistorial = () => {
  // Cargamos de nuevo las victorias desde localStorage (por si han cambiado)
  const victorias =
    JSON.parse(localStorage.getItem("victoriasJugadores")) || {};

  // Obtenemos un array con los nombres de los jugadores (las claves del objeto)
  const nombres = Object.keys(victorias);

  // Construimos el mensaje que se mostrará en la alerta
  const mensaje =
    nombres.length === 0
      ? "No hay victorias registradas aún."
      : nombres
          .map((jugador) => `${jugador}: ${victorias[jugador]} victorias`)
          .join("<br>"); // Un jugador por línea

  // Mostramos la ventana de SweetAlert con el historial
  Swal.fire({
    title: "Historial de Victorias",
    html: `Historial de victorias:<br>${mensaje}`,
    icon: "info",
    confirmButtonText: "Ok",
  });
};
//EVENTOS
botonComenzar.addEventListener("click", pedirNombres);
// Cuando se hace clic en "Ver Historial", mostramos el historial de victorias
botonHistorial.addEventListener("click", () => mostrarHistorial());
