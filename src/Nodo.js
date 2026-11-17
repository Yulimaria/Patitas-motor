/* crear la clase nodo.
Cada atención es un objeto con fecha, motivo, veterinario y costo. */

const Blue = [
    { fecha: "2023-01-01", motivo: "Vacunación", veterinario: "Dr. Pérez", costo: 50 },
    { fecha: "2023-01-02", motivo: "Chequeo", veterinario: "Dr. García", costo: 30 },
    { fecha: "2023-01-03", motivo: "Desparasitación", veterinario: "Dr. López", costo: 40 },
];

/* creacion de clase nodo para la lista enlazada */
class Nodo {
  constructor(dato) {
    this.dato = dato;
    this.siguiente = null;
  }
}