/*
Autor: Antonio Ríos Casado
Fecha: 21/11/2025
Descripción: Simula un pequeño programa que calcule el precio final 
 de un producto aplicando IVA y descuento.
*/

let base_product_price = parseFloat(prompt("Dime el precio del producto base"));

let iva = parseFloat(prompt("Dime el iva que tiene el producto"));
iva = iva / 100;

let discount = parseFloat(prompt("Dime el decuento que tiene el producto"));

alert(`El precio final del producto es ${(base_product_price * iva) + (base_product_price - discount)}`)
