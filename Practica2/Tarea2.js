// Tarea 2: Información de producto con precio
// Solicite el nombre del producto, 
// precio unitario y cantidad. 
// Muestre el nombre en mayúsculas, 
// extraiga las primeras 3 letras del producto y 
// muestre el precio total con 2 decimales.

let nombreProducto = "Camisa";
let precio = 39.99;
let cantidad = 3;

let productoMayuscula = nombreProducto.toUpperCase();
let codigo = nombreProducto.slice(0,3).toUpperCase();
let total = precio*cantidad;
let precioFormateado = total.toFixed(2);

console.log("Nombre del producto en mayuscula: "+productoMayuscula);
console.log("Codigo de 3 letras: "+codigo);
console.log("Precio Total: "+precioFormateado);