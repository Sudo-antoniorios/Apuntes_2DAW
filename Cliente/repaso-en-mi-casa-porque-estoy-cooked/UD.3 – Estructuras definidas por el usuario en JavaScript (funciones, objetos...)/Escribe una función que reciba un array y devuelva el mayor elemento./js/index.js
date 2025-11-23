/*
Autor: Antonio Ríos Casado
Fecha: 23/11/2025
Descripción: Escribe una función que reciba un array y devuelva el mayor elemento.
*/

let test_array = [1,2,3,4,5,6,7,8,9,10,12,14,15,35,364,347,373,57];

function arrayHigherElement(array){
    let aux_max_number = array[0]
    for(let i = 0; i < array.length; i++){
        if(array[i] > aux_max_number){
            aux_max_number = array[i];
        }

    }

    return alert(`El número mayor es ${aux_max_number}`)

}

arrayHigherElement(test_array)
