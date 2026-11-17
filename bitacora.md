**Experimento: pérdida de un enlace en una lista enlazada**

Inicialmente, los tres nodos estaban conectados en orden cronológico: Nodo 1 → Nodo 2 → Nodo 3 → null.

Después asigné `null` a la propiedad `siguiente` del primer nodo.

Como resultado, el recorrido comenzó en el primer nodo, imprimió la atención de vacunación y terminó porque encontró `null`.

Los nodos 2 y 3 continuaron existiendo, pero dejaron de ser accesibles desde la cabeza de la lista.

**Conclusión:** las referencias son fundamentales en una lista enlazada porque permiten conectar y recorrer los nodos.

Lista enlazada de Lola
cabeza

Nodo 1                    Nodo2                   Nodo 3

Vacunación                control de peso        Limpieza dental

siguiente                 siguiente              siguiente
Nodo 2                    Nodo3                  null
