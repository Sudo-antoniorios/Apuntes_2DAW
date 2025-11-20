// Asociar eventos a botones
document.getElementById("verCookies").addEventListener("click",verCookies);
document.getElementById("crearCookie").addEventListener("click",crearCookie);
document.getElementById("modificarCookie").addEventListener("click",crearCookie);

function verCookies(){
    alert(document.cookie);
}

function crearCookie(){
    const clave = prompt("Introduce el nombre de la cookie");
    //Si no introduce nombre no hago nada
    if(!nombre) return;

    //Vemos que botón llama a la función
    const idElemento = event.target.id;

    //Caso 1, Boton CREAR cookie
    if(idElemento === "crearCookie"){
        let encontrada = false;
        const arrayCookies = document.cookie.split(";"); // Guardo en un array todas las cookies, porque las devuelve separadas por ;

        // Recorremos el array de cookies
        for(let c of arrayCookies){
            c = c.trim() // Quita espacios del principio y el final
            if(c.startsWith(clave + "=")){// Ya existe la cookie
                alert("No puedes crear la cookie porque ya existe, quizás quieres modificarla.");
                break
            }
        }

        if(!encontrada){// Si he recorrido el array de cookies y no la he encontrado, la creo
            const valor = prompt("Introduce el valor de la cookie")
        if(!valor) return;

        const segundos = parseInt(prompt("Introduce cuantos segundos quieres que dure la cookie"));
        if(isNaN(segundos)) return;

        document.cookie = `${clave}=${valor};max-age=${segundos}; path=/';`
}

        }else{ // Caso 2: Botón modificar cookie
            let encontrada = false;
            for(let c of arrayCookies){
            c = c.trim() // Quita espacios del principio y el final
            if(c.startsWith(clave + "=")){// Ya existe la cookie
                encontrada = true;
                alert("No puedes crear la cookie porque ya existe, quizás quieres modificarla.");
                break;
            }
        
        if(encontrada){
            const valor = prompt("Introduce el nuevo valor de la cookie")
        if(!valor) return;

        const segundos = parseInt(prompt("Introduce cuantos segundos quieres que dure la cookie"));
        if(isNaN(segundos)) return;

        document.cookie = `${clave}=${valor};max-age=${segundos}; path=/';`
        alert("Cookie modificada");

        }else{
            alert("Cookie no encontrada")
        }
        


        }
    }

}