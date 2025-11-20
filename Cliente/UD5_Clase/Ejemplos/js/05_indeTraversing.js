const lista = document.getElementById("lista");
const resultado = document.getElementById("resultado");

//Hacia  abajo
document.getElementById("btnHijos").addEventListener("click", () => {
    const hijos = lista.children;
    resultado.textContent = `Hay ${hijos.length} elementos hijos: ${[...hijos].map(h => h.textContent).join(" - ")}`;
});
document.getElementById("btnPrimeroUltimo").addEventListener("click", () => {
    const primero = lista.firstElementChild;
    const ultimo = lista.lastElementChild;

    if(primero && ultimo){
        primero.classList.add("destacado");
        ultimo.classList.add("destacado");
    }
    resultado.textContent = `Primer hijo: ${primero.textContent} y el último hijo: ${ultimo.textContent}`;

});


document.getElementById("btnPadre").addEventListener("click", () => {
    const padre = lista.parentElement;
    resultado.textContent = `El padre de lista es  ${padre.id}`;
    padre.style.border = "2px solid"
});
document.getElementById("btnHermanos").addEventListener("click", () => {
    const hijoSegundo = lista.children[2];
    const anterior = hijoSegundo.previousElementSibling;
    const siguiente = hijoSegundo.nextElementSibling;

    resultado.textContent = `Hijo base ${hijoSegundo.textContent} - Anterior: ${anterior?.textContent ||  "No tiene"} - Siguiente: ${siguiente?.textContent ||  "No tiene"}`;
});