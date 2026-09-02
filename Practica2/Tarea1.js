// Tarea 1: Procesar nombre de usuario
// Solicite al usuario su nombre completo. 
// Convierta el nombre a mayúsculas, 
// extraiga las primeras 4 letras y 
// luego conviértalo a minúsculas.
// Muestre todos los resultados.

let nombrecompleto = "Norlan Ismael Yocky Argueta";

let nombreMayuscula = nombrecompleto.toUpperCase();
let cuatroletras = nombrecompleto.slice(0,4);
let nombreMinuscula = nombrecompleto.toLowerCase();

console.log("Nombre: "+nombrecompleto);
console.log("Primeras letras: "+ cuatroletras);
console.log("Nombre en minuscula: "+nombreMinuscula);