function listaProductos(productos, callback){
    console.log('---LISTADO DE INVENTARIO DE PRODUCTOS---')
    if(productos.length === 0){
        console.log('No hay productos registrados.')
    } else{
        console.table(productos)
    }
    callback();
}

module.exports = listaProductos;