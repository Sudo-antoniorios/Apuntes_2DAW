crearFormulario();
let puntuacion = 0;

function crearFormulario(){

    const formulario = document.createElement("form");
    formulario.id = "formulario";
    document.body.append(formulario);

    const labelNombre = document.createElement("label");
    labelNombre.textContent = "Nombre:";
    const inputNombre = document.createElement("input");
    inputNombre.type = "text";
    inputNombre.id = "nombre";

    const labelFecha = document.createElement("label");
    labelFecha.textContent = "Fecha de nacimiento:";
    const inputFecha = document.createElement("input");
    inputFecha.type = "date";
    inputFecha.id = "fecha";

    labelNombre.append(inputNombre);
    labelFecha.append(inputFecha);
    formulario.append(labelNombre, document.createElement("br"), labelFecha, document.createElement("br"));

    const divColor = document.createElement("div");
    divColor.style.margin = "10px 0";

    const parrafoColor = document.createElement("p");
    parrafoColor.textContent = "Color de fondo:";

    const tablaColor = document.createElement("table");
    tablaColor.style.margin = "10px auto";
    tablaColor.style.borderCollapse = "collapse";
    tablaColor.style.background = "transparent";

    const filaTabla = document.createElement("tr");

    const columnaTabla1 = document.createElement("td");
    columnaTabla1.style.padding = "5px";
    columnaTabla1.style.textAlign = "center";

    const columnaTabla2 = document.createElement("td");
    columnaTabla2.style.padding = "5px";
    columnaTabla2.style.textAlign = "center";

    const columnaTabla3 = document.createElement("td");
    columnaTabla3.style.padding = "5px";
    columnaTabla3.style.textAlign = "center";

    const columnaTabla4 = document.createElement("td");
    columnaTabla4.style.padding = "5px";
    columnaTabla4.style.textAlign = "center";

    const radioTablaBlue = document.createElement("input");
    radioTablaBlue.type = "radio";
    radioTablaBlue.name = "color";
    radioTablaBlue.value = "Lightblue";
    radioTablaBlue.checked = true;

    const radioTablaGreen = document.createElement("input");
    radioTablaGreen.type = "radio";
    radioTablaGreen.name = "color";
    radioTablaGreen.value = "Lightgreen";

    const radioTablaYellow = document.createElement("input");
    radioTablaYellow.type = "radio";
    radioTablaYellow.name = "color";
    radioTablaYellow.value = "Lightyellow";

    const radioTablaPink = document.createElement("input");
    radioTablaPink.type = "radio";
    radioTablaPink.name = "color";
    radioTablaPink.value = "Lightpink";

    const divColorBlue = document.createElement("div");
    divColorBlue.style.width = "40px";
    divColorBlue.style.height = "40px";
    divColorBlue.style.background = "Lightblue";
    divColorBlue.style.border = "5px solid white";
    divColorBlue.style.marginTop = "5px";

    const divColorGreen = document.createElement("div");
    divColorGreen.style.width = "40px";
    divColorGreen.style.height = "40px";
    divColorGreen.style.background = "Lightgreen";
    divColorGreen.style.border = "5px solid white";
    divColorGreen.style.marginTop = "5px";

    const divColorYellow = document.createElement("div");
    divColorYellow.style.width = "40px";
    divColorYellow.style.height = "40px";
    divColorYellow.style.background = "Lightyellow";
    divColorYellow.style.border = "5px solid white";
    divColorYellow.style.marginTop = "5px";

    const divColorPink = document.createElement("div");
    divColorPink.style.width = "40px";
    divColorPink.style.height = "40px";
    divColorPink.style.background = "Lightpink";
    divColorPink.style.border = "5px solid white";
    divColorPink.style.marginTop = "5px";

    columnaTabla1.append(radioTablaBlue, document.createElement("br"), divColorBlue);
    columnaTabla2.append(radioTablaGreen, document.createElement("br"), divColorGreen);
    columnaTabla3.append(radioTablaYellow, document.createElement("br"), divColorYellow);
    columnaTabla4.append(radioTablaPink, document.createElement("br"), divColorPink);
    filaTabla.append(columnaTabla1, columnaTabla2, columnaTabla3, columnaTabla4);
    tablaColor.append(filaTabla);
    divColor.append(parrafoColor, tablaColor);

    formulario.append(divColor)

    const botonEnviar = document.createElement("button");
    botonEnviar.type = "submit";
    botonEnviar.textContent = "Enviar";
    formulario.append(botonEnviar);

    formulario.addEventListener("submit", (event) => {
        event.preventDefault();

        let nombre = inputNombre.value.trim();
        let fecha = inputFecha.value.trim();
        let color = formulario.querySelector('input[name="color"]:checked').value;

        const regexNombre = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
        const regexFecha = /^\d{4}-\d{2}-\d{2}$/;

        if (!nombre || !regexNombre.test(nombre)) {
            alert("Nombre inválido. Solo letras y espacios.");
            return;
        }

        if (!fecha || !regexFecha.test(fecha)) {
            alert("Fecha inválida. Formato YYYY-MM-DD.");
            return;
        }
        
        let jugador = {
            nombre,
            fecha,
            color
        }

        localStorage.setItem("jugador", JSON.stringify(jugador));

        while(document.body.firstChild){
            document.body.removeChild(document.body.firstChild);
        }

        mostrarJuego(jugador);
    });
}

function mostrarJuego(jugador){
    document.body.style.backgroundImage = "none"
    document.body.style.backgroundColor = jugador.color;

    const titulo = document.createElement("h2");
    titulo.id = "nombreJugador";
    titulo.textContent = `Jugador: ${jugador.nombre} | Puntuación: `;

    const spanPuntos = document.createElement("span");
    spanPuntos.id = "puntos";
    spanPuntos.textContent = puntuacion;

    titulo.append(spanPuntos);

    document.body.append(titulo);

    const btnCerrar = document.createElement("button");
    btnCerrar.textContent = "Cerrar sesión";
    btnCerrar.id = "btnCerrar";

    btnCerrar.addEventListener("click", ()=>{
        alert("Cerrando Sesión");
        localStorage.clear();

        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }

        crearFormulario();
        puntuacion = 0;
    });

    const btnComenzar = document.createElement("button");
    btnComenzar.textContent = "Comenzar";
    btnComenzar.id = "btnComenzar";

    btnComenzar.addEventListener("click", iniciarJuego)

    document.body.append(btnCerrar, btnComenzar);

    let tabla = document.createElement("table");
    tabla.id = "tablaJuego";

    for(let i = 0; i<3; i++){
        let fila = document.createElement("tr");
        for(let j = 0; j<3; j++){
            let celda = document.createElement("td");
            let imagen = document.createElement("img");
            imagen.src = "imagenes/agujero.png";
            imagen.style.width = "100px";
            celda.addEventListener("click", () => {
                if (imagen.src == "imagenes/topo.png"){
                    puntuacion++;
                    document.getElementById("puntos").textContent = puntuacion;
                    imagen.src = "imagenes/agujero.png";
                }
            });
            celda.append(imagen);
            fila.append(celda);
        }   
        tabla.append(fila);
    }
    document.body.append(tabla);


}

function iniciarJuego(){
    const celdas = document.querySelectorAll("td img"); // Se queda con las imágenes de los td
    let intervaloTopos = setInterval(() => {
        const indice = Math.floor(Math.random() * 9)
        if(celdas[indice].src == "imagenes/agujero.png"){
            celdas[indice].src = "imagenes/topo.png";
            setTimeout(() => {
                celdas[indice].src = "imagenes/agujero.png"
            }, 1000)
        }
    }, 2000)
}
