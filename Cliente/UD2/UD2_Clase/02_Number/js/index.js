"use strict";

//Operaciones atípicas y coerciones (convertir automáticamente)
const atip1 = 100 / "casa"; //NaN
const atip2 = 100 / "10"; //10
console.log("At1: ",atip1);
console.log("At2: ",atip2)

console.log(NaN === NaN);//false. Es elúnico valor de JS que no es igual a sí mismo.
//Comprobar si algo es NaN no se debehacer con ===
console.log("Atípico1 es NaN?", Number.isNaN(atip1));

const num1 = 123;
const num2 = new Number(123);//No se recomienda
const num3 = new Number(123);//No se recomienda
console.log("typeof num1:", typeof num1);
console.log("typeof num2:", typeof num2);

console.log("num1 == num2", num1 == num2);//true
console.log("num1 === num2", num1 === num2);//false
console.log("num3 === num2", num3 === num2);//false
//Si quiero comparar el valor numérico de un objeto number
console.log("num2.valueOf() === num3.valueOf()",num2.valueOf() === num3.valueOf());//true


//Precisión
//toFixed - formatea un número con exactamente ese número de decimales
//toPrecision - fija n cifras (contando antes y después de la coma)
const x = 9.8765
console.log("toFixed(0):",x.toFixed(0)); //10
console.log("toFixed(0):",x.toFixed(2)); //9.88
console.log("toFixed(0):",x.toFixed(6)); //9.876500
console.log("toPrecision(2):",x.toPrecision(2)); //9.9

//parseInt /parseFloat
console.log("parseInt (10 20)", Number.parseInt("10 10"));//10
console.log("parseInt (10 20)", Number.parseInt("casa 10"));//NaN
console.log("parseInt (10 20)", Number.parseInt("10 loquesea"));//10

//Comprobación
console.log("Number.isInteger(3):",Number.isInteger(3)); //true
console.log("Number.isInteger(3.3):",Number.isInteger(3.3)); //false

