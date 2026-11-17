
 /* creamos el molde para fabricar nodos.*/
class Nodo {
    constructor(dato){ /* recibimos la información que tendrá cada nodo.*/
        this.dato = dato; /*guardamos esa información.*/
        this.siguiente = null;
    }
}

module.exports = {Nodo}; /* exportamos la clase nodo para poder usarla en otros archivos. */