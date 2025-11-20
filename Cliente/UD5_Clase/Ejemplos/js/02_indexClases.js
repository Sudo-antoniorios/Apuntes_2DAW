const btnReemplazarClases =document.getElementById("btnReemplazarClases");
const btnAgregarClase = document.getElementById("btnAgregarClase");
const btnQuitarClase = document.getElementById("btnQuitarClase");
const btnAlternarClase = document.getElementById("btnAlternarClase");
const btnVerificarClase = document.getElementById("btnVerificarClase");
const resultado = document.getElementById("resultado");
const titulo = document.getElementById("titulo");

//Reemeplazar todas las clases
btnReemplazarClases.addEventListener("click",() => {
    titulo.className = "verde grande";
    resultado.textContent = "Se ha reemplazado las clases del titulo por 'verde grande'";
});
//Agregar una clase usando classList.add
btnAgregarClase.addEventListener("click",() => {
    titulo.classList.add("rojo");
    resultado.textContent = "Se ha agregado la clase 'rojo'";
});
//Quitar una clase
btnQuitarClase.addEventListener("click",() => {
    if(titulo.classList.contains("rojo")){
        titulo.classList.remove("rojo");
        resultado.textContent = "Se ha quitado la clase 'rojo'";
    }
    else{
        resultado.textContent = "El título no tiene la clase 'rojo";
    }
});
//Alternar una clase
btnAlternarClase.addEventListener("click",() => {
    const estaResaltado = titulo.classList.toggle("resaltado");
    if(estaResaltado){
        resultado.textContent = "Se agregó la clase 'resultado'";        
    }else{
        resultado.textContent = "Se eliminó la clase 'resultado'";
    }
});
btnVerificarClase.addEventListener("click",() => {
    const tieneVerde = titulo.classList.contains("verde");
    if(tieneVerde){
         resultado.textContent = "El título tiene la clase verde.";
    }else{
                 resultado.textContent = "El título NO tiene la clase verde.";
    }
});