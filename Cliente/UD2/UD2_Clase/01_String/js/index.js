let daw = "Desarrollo de aplicaciones web";
let dam = 'Desarrollo de aplicaciones multiplataforma';
let ciclos = new String();

ciclos+=`${daw}, ${dam}\n`;
ciclos+=`son ciclos de informática`
alert(ciclos);
// alert("La longitud de la cadena ciclos es "+ciclos.length);

//Métodos
//Búsqueda
// alert("El caracter 15 de la cadena es: "+ciclos.charAt(15));
// alert("El caracter 15 de la cadena es: "+ciclos[15]);//Más habitual
//Con la primera posición de un caracter en una cadena
alert("La primera aparación de a es: "+ciclos.indexOf("a"));
//Con la última  posición de un caracter en una cadena
alert("La última aparición de a es: "+ciclos.lastIndexOf("a"));

Comparación
let cadena1 = "manzana";
let cadena2 = "naranja";
  //devuelve -1 (antes), 0 (iguales), 1 (después)
 let resultado = cadena1.localeCompare(cadena2);
console.log(resultado);
if (resultado === -1){
     console.log(`${cadena1} va antes que ${cadena2}`);
 }else if(resultado === 0){
    console.log(`${cadena1} es igual que ${cadena2}`);
}else{
    console.log(`${cadena1} va después que ${cadena2}`);
 }
//Incluye, empieza o termina
console.log("¿incluye 'aplicaciones' ?: "+daw.includes("aplicaciones"));
console.log("¿Empieza daw con la palabra 'aplicaciones' "+daw.startsWith("aplicaciones"));
console.log("¿Termina daw co la palabra 'aplicaciones'? "+ daw.endsWith("aplicaciones"));

//Repeteción
console.log("Repetir daw \n"+daw.repeat(3));

//Extracción
console.log("La cadena que hay entreel 0 y el 1 en daw es: "+daw.slice(0,1));
console.log("La cadena que hay entreel 0 y el 1 en daw es: "+daw.substring(0,6));
console.log("la cadena daw separada por espacios: "+daw.split(" ",2));//EL 2 indica el límite máximo de elementos del array
console.log("La cadena sin espacios: \n"+"      holaaaa       ".trim());

//Mayúsculas y minúsculas
console.log(daw.toLowerCase());
console.log(daw.toUpperCase());



