// Tarea 4: Información completa de fecha y hora
// Obtenga la fecha y hora actual. 
// Muestre en formato: "Hoy es 26/8/2026 y son las 9:15:30"

let fechaActual = new Date();

let dia = fechaActual.getDay();
let mes = fechaActual.getMonth()+1;
let anio = fechaActual.getFullYear();
let horas = fechaActual.getHours();
let minutos = fechaActual.getMinutes();
let segundos = fechaActual.getUTCSeconds();

console.log(`Fecha: ${dia}/${mes}/${anio}`);
console.log(`Hora: ${horas}:${minutos}:${segundos}`);