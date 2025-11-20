let daw = "Desarrollo de aplicaciones web";
let dam = "Desarrollo de aplicaciones mutiplataforma";
let ciclos = new String();

ciclos+=`${daw}, ${dam}\n`;
ciclos+= `Son cicos de informática`
alert(ciclos);
alert("La longitud de la cadena de cilos es "+ciclos.length)

//Métodos
//Búsqueda
alert("El carácter 15 de la cadena es: "+ciclos.charAt(15));
alert("El carácter 15 de la cadena es: "+ciclos[15]);// Más habitual

//Con la primera aparicion de un caracter en una cadena
alert("La primera aparicición de a es: "+ciclos.indexOf("a"));

//Con la ultima aparicion de un caracter en una cadena
alert("La ultima aparación de a es: "+ciclos.lastIndexOf("a"));

// Comparación
let cadena1 = "Manzana";
let cadena2 = "naranja";

//devuelve -1 (antes), 0 (iguales), 1 (después)
let resultado = cadena1.localeCompare(cadena2);
console.log(resultado);

if (resultado === -1){

    console.log(`${cadena1} va antes que ${cadena2}`);
}

else if(resultado === 0){
    console.log(`${cadena1} es igual que ${cadena2}`);
    
}

else{

    console.log(`${cadena1} va después de ${cadena2}`);
    
}


// Incluye empieza o termina

console.log("Incluye 'Aplicaciones' ?"+daw.includes("Aplicaciones"));
console.log("Empieza daw con la palabra 'Aplicaciones' ?"+daw.startsWith("Aplicaciones"));
console.log("Termina daw con la palabra 'Aplicaciones' ?"+daw.endsWith("Aplicaciones"));


//Repeticion
console.log("Repetir daw \n"+daw.repeat(3));

//Extracción
console.log("La cadena que hay entre el 0 y el 1 en daw es: "+daw.slice(0,1));
console.log("La cadena que hay entre el 0 y el 1 en daw es: "+daw.substring(0,6));
console.log("La cadena daw separada por espacios: "+daw.split(" ",2)); // Hace espacios y 2 es el numero de veces que lo hace
console.log("La cadena sin espacios: \n"+"     holaaaaaaaa".trim());

//Mayúsculas y minúsculas
console.log(daw.toLowerCase());
console.log(daw.toLocaleLowerCase); 