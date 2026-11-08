// Tarea 1: Acumulación con reduce
// Cree un arreglo con las notas de un estudiante (por ejemplo: 8, 7, 9, 6, 10).
// Utilice el método reduce para calcular el promedio de las notas.
// Muestre el resultado en consola con 2 decimales.

const nota = [5, 3.5, 10, 8, 7.5, 9.6, 10]
const sumaN = nota.reduce((acumular, notaActual)=> acumular + notaActual, 0);
const Promedio = sumaN / nota.length;

console.log(`Notas del estudiante: [${nota.join(", ")}]`)
console.log(`Promedio: ${Promedio.toFixed(2)}`);