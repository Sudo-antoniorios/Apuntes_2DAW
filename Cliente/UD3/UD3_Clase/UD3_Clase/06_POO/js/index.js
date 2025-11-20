//CLASES
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

//instanciación de objetos
const frigo = new Electro("Frigorífico",200,"rojo");
const micro = new Electro("Microondas",300,"verde");

console.log(frigo.toString());
console.log(micro.toString());

console.log(frigo.nombre);//Puedo acceder a la propiedad pq es pública
