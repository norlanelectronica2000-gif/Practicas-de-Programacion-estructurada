const productos = [
    { nombre: "DELL Inspirion 3511", precio: 1300},
    { nombre: "Mouse Inalambrico / Alambrico", precio: 40},
    { nombre: "Funda de Mouse", precio: 5},
    { nombre: "Monitor 4K", precio: 150},
    { nombre: "Teclado", precio: 20}
];

console.log("Listado completo de productos:");
productos.forEach((productos)=>{
    console.log(`   - ${productos.nombre}: $${productos.precio}`);
});

const productosFiltrados = productos.filter((productos)=> productos.precio > 100);

console.log("Productos con precio mayor a $100:")
console.log(productosFiltrados);