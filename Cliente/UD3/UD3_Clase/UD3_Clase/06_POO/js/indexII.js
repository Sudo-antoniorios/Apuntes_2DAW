//PROPIEDAES Y MÉTODOS PRIVADOS

class Alumno{
    #nombre;
    #apellidos;
    #edad;
    constructor(nom,apelli, edad){
        this.nombre = nom;//EStoy llamando al método SET
        this.apellidos = apelli;//EStoy llamando al método SET
        this.edad = edad;//EStoy llamando al método SET
    }
    get nombre(){
        return this.#nombre;
    }
    set nombre(nombre){
        //Controlaremos la entrada de datos
        if(nombre != ""){
            this.#nombre = nombre;
        }else{
            //Generamos un error que será capturado por try
            throw ("ERROR,el nombre no puede estar vacío");
        }
    }
    get apellidos(){
        return this.#apellidos;
    }
    set apellidos(apellidos){
        //Controlamos la entrada de datos
        if(apellidos != ""){
            this.#apellidos = apellidos;
        }else{
            //Generamos un error que será capturado por un try
            throw ("ERROR, los apellidos no pueden estar vacíos.");
        }
    }
    get edad(){
        return this.#edad;
    }
    set edad(edad){
        if (edad>=18){
            this.#edad = edad;
        }else{
            throw ("ERROR, el alumno/a debe ser mayor de 18 años.");
        }
    }
    toString(){
        return `El nombre del alumno es ${this.nombre} ${this.apellidos}`;//Estamos llamando a los métodos GET no directamente a la propiedad
    }
}
try{
    const Alumno1 = new Alumno("María", "Ojeda García",17);
    console.log(Alumno1.toString());
    Alumno1.edad=3;//Da error, salta el TRY
    //Alumno1.#edad = 3 -> No me permite el acceso a esta propiedad privada
    
}catch(error){
    console.log(error);
}