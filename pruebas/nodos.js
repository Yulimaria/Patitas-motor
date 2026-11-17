class Nodo{ /* creamos el molde para fabricar nodos.*/
    constrauctor(dato){ /* recibimos la información que tendrá cada nodo.*/
        this.dato = dato; /*guardamos esa información.*/
        this.siguiente = null;
    }
}

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
const nodo1 = new Nodo(atencion1);
const nodo2 = new Nodo(atencion2);
const nodo3 = new Nodo(atencion3);