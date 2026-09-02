// Tarea 3: Calcular edad y años de experiencia
// Solicite al usuario su año de nacimiento.
// Obtenga el año actual, calcule su edad y muestre:
// "Tu edad aproximada es: X años."

let fecha = new Date();

let nacimiento = 2006;
let actualidad = fecha.getFullYear();
let edad = actualidad-nacimiento;

console.log("Año de nacimiento: "+nacimiento);
console.log("Año actual: "+actualidad);
console.log("Edad aproximada: "+edad);