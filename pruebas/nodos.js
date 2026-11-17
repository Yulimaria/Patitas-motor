const { Nodo} = require("../src/Nodo"); /* importamos la clase nodo y el arreglo Blue desde el archivo Nodo.js */

const atencion1 = {
    motivo: "Vacunación",
    fecha: "2026-02-02",
    veterinario: "Dra. Ríos",
    costo: 85000
};

const atencion2 = {
    motivo: "Control de peso",
    fecha: "2026-03-15",
    veterinario: "Dr. Gómez",
    costo: 40000
};

const atencion3 = {
    motivo: "Limpieza dental",
    fecha: "2026-05-20",
    veterinario: "Dra. Ríos",
    costo: 150000
};

/* creamos los nodos con la información de las atenciones */
/* Creamos los tres nodos */
const nodo1 = new Nodo(atencion1);
const nodo2 = new Nodo(atencion2);
const nodo3 = new Nodo(atencion3);

/* De esta manera, cada nodo recibe un objeto del arreglo. */

/*Aca enlazo los nodos para formar la lista enlazada */
nodo1.siguiente = nodo2;
nodo2.siguiente = nodo3;
nodo3.siguiente =null;
 /* el último nodo apunta a null, indicando el final de la lista. */

const cabeza = nodo1; /* la cabeza de la lista enlazada es el primer nodo. */

while (cabeza !== null) {

    console.log(cabeza.dato);
break
}

let actual = cabeza;
let total = 0;

while (actual !== null) {

    total = total + actual.dato.costo;

    actual = actual.siguiente;
}

console.log("Total de gastos:", total);