// Información de estudiante: 
// Solicite nombre, apellido, año de ingreso y promedio. 
// Muestre nombre y apellido en mayúsculas, 
// primeras 3 letras del apellido, últimos 2 dígitos del año 
// y promedio con 2 decimales.

let nombre = "norlan";
let apellido = "yocky";
let anio = 2006;
let promedio = 8.2222;

console.log("Su nombre y apellido en mayuscula es: "+ nombre.toUpperCase() + ` ` + apellido.toLowerCase());
console.log("Las primeras 3 letras del apellido es: "+apellido.slice(0,3));
console.log("Los 2 digitos del año son: "+anio.toString().slice(2,4)); 
console.log("Su promedio con 2 decimales es: "+promedio.toFixed(2));