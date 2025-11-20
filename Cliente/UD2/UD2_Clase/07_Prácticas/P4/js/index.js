"use strict"

let A;
let B;
let apuesta;
let ganadas=0;
let perdidas=0;

do{
    do{
        //Generar números aleatorios
        A = Math.round(Math.random() * 100) + 1;
        B = Math.round(Math.random() * 100) + 1;
    }while(A == B);

    //Pedimos apuesta
    do{
        apuesta = prompt("¿Por quién apuestas [A o B]:").toUpperCase();
    }while(apuesta != "A" && apuesta != "B")
        

    console.log(`El A ha sacado ${A}`);
    console.log(`El B ha sacado ${B}`);

    //Comprobamos si ha ganado o no
    if(apuesta == "A" && A > B){
        console.log(`Hs ganado con A!`);
        ganadas++;
    }else if(apuesta == "B" && B > A){
        console.log(`Has ganado con B!`);
        ganadas++;
    }else{
        console.log(`Has perdido! :( )`);
        perdidas++;
    }
    //Mostramos su marcador
    console.log(`Llevasa ganadas ${ganadas} y  perdidas ${perdidas}`);
    
}while(confirm("¿Quieres seguir jugando?"));
