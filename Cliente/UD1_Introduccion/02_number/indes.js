"use strict";

// Operaciones atípicas y correcciones (convertir automáticamente)
const atipl = 100 / "casa"; //NaN
const atip2 = 100 / "10"; //10
console.log("At1: ", atipl);
console.log("At2: ",atip2);

console.log(NaN === NaN); //False. Es el único valor de JS que no es igual a si mismo
// Comprobar si algo es NaN no se debe hacer con ===
console.log("Atípico1 es NaN?", Number.isNaN(atipl));

const num1 = 123;
const num2 = new Number(123)
const num3 = new Number(123)
console.log("typeof num1:",typeof num1);
console.log("typeof num2:", typeof num2);

console.log("num1 == num2", num1 == num2);//True
console.log("num1 == num2", num1 === num2);//False
console.log("num3 == num2", num3 == num2);//False

// Si quiero comparar el valor numerico de un objeto number

console.log("num2.valueOf() === num3.valueOf()",num2.valueOf() === num3.valueOf());//True


// Precisión
const x = 9.8765
console.log("toFixed(0) :", x.toFixed(0)); //10
console.log("toFixed(0) :", x.toFixed(2)); //9.88
console.log("toFixed(0) :", x.toFixed(6)); //9.876500
console.log("toPrecision(0) :", x.toPrecision(2)); // 9.9

// ParseInt / parseFloat
console.log("parseInt(10 20)", Number.parseInt("10 10"));//10
console.log("parseInt(10 20)", Number.parseInt("casa 10"));//NaN
console.log("parseInt(10 20)", Number.parseInt("10 lo que sea"));//10

//






