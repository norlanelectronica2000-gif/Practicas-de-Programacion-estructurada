const {guardarInventario} = require('../database/conexion')

function eliminarProducto(rl, productos, callback){
    rl.question('Ingrese el nombre del producto a eliminar: ', nombreEliminar =>{
        const existe = productos.some(p => p.nombre.toLowerCase() === nombreEliminar.toLowerCase())
        if(!existe){
            console.log('\nERROR: Producto no encontrado.')
        } else{
            const nuevosProductos = productos.filter(p => p.nombre.toLowerCase() !== nombreEliminar.toLowerCase());
            productos.length = 0;
            productos.push(...nuevosProductos);
            guardarInventario(productos);
            console.log('\nProducto eliminado y listado actualizado.')
        }
        callback();
    })
}

module.exports = eliminarProducto;