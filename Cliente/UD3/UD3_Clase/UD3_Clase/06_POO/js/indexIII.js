//HERENCIA
class Electro{
    //Constructor
    constructor(nom,precio,color){
        //Propiedaddes públicas
        this.nombre = nom;
        this.precio = precio;
        this.color = color;
        this.disponible = true; //Valor por defecto
    }
    //Métodos fuera del constructor
    toString(){
        return `El electrodoméstico es ${this.nombre}, el precio es ${this.precio} € y el color es ${this.color} `;
    }
}
//Implementamos la herencia: dispositivoElectro hereda de la clase Electro
class dispositivoElectro extends Electro{
    constructor(nom,precio,color, altura){
        //LLamamos al constructor de la clase padre con "super"
        super(nom,precio,color);
        //Propiedades específicas de la clase hija
        this.altura = altura;
    }
    toString(){
        //LLamamaos al toString del padre y añadimos más info
        return ` ${super.toString()} y la altura es ${this.altura}`;
    }
}
//Insstanciar un objeto de la clase hija
const frigo = new dispositivoElectro("FAGOR",600, "blanco","2 m");
console.log(frigo.toString());
