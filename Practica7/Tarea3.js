// Tarea 3: Inventario de productos (FOR...OF y FOR...IN)
// Cree un arreglo de objetos que represente un inventario con al menos 4 productos. 
// Cada producto debe tener: nombre, precio y cantidad. Usando FOR...OF, 
// recorra el arreglo y muestre cada producto con su valor total (precio × cantidad). 
// Además, usando FOR...IN, recorra un objeto que represente el resumen del inventario 
// (total de productos, valor total del inventario) y muestre sus propiedades.

const inventario = [
    {nombre: 'Monitor de PC', precio: 150, cantidad: 5},
    {nombre: 'DELL Inspirion 3511', precio: 900, cantidad: 4},
    {nombre: 'Teclado', precio: 50, cantidad: 10},
    {nombre: 'Mouse Inalambrico', precio: 20, cantidad: 30}
]

let valorTotal = 0;
let unidadTotal = 0;

for(const producto of inventario){
    let valorTotalProducto = producto.precio*producto.cantidad;

    valorTotal += valorTotalProducto;
    unidadTotal += producto.cantidad;

    console.log(`Producto: ${producto.nombre}`);
    console.log(`Precio unitario: $${producto.precio}`);
    console.log(`Cantidad en stock: ${producto.cantidad}`);
    console.log(`Valor total acumulado: $${valorTotalProducto}`);
}

const resumen = {
    Tipo_de_Producto: inventario.length,
    Unidad_en_Stock: unidadTotal,
    Valor_Total_de_Inventario: `$${valorTotal}`
}

for(const clave in resumen){
    console.log(`${clave}: ${resumen[clave]}`);
}