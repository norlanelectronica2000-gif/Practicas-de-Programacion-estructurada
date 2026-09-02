// Extracción de datos: 
// Solicite un código con formato "EST20260645". Extraiga los primeros 3 caracteres y los últimos 4.

let codigo = "EST20260645"

let codigo3caracter = codigo.slice(0,3);
let codigo4caracter = codigo.slice(7,11);

console.log("El codigo extraido de los primeros 3 caracteres son: "+codigo3caracter);
console.log("El codigo extraido de los ultimos 4 caracteres son: "+codigo4caracter);