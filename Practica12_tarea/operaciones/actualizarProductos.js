const {guardarInventario} = require('../database/conexion')

function actualizarProducto(rl, productos, callback){
    rl.question('Ingrese el nombre del producto a actualizar: ', nombreBuscar =>{
        const index = productos.findIndex(p => p.nombre.toLowerCase() === nombreBuscar.toLowerCase())
        if (index === -1){
            console.log('\nERROR: Producto no encontrado.')
            callback();
        } else{
            console.log('\nProducto encontrado. \nIngrese los nuevos datos:')
            rl.question(`Ingrese el nuevo nombre (${productos[index].nombre}): `, nuevoNombre =>{
                rl.question(`Ingrese el nuevo precio (${productos[index].precio}): `, nuevoPrecio =>{
                    rl.question(`Ingrese el nuevo año (${productos[index].año}): `, nuevoAño =>{
                        rl.question(`Ingrese el nueva categoria (${productos[index].categoria}): `, nuevaCategoria =>{
                            productos[index].nombre = nuevoNombre || productos[index].nombre;
                            productos[index].precio = nuevoPrecio ? parseFloat(nuevoPrecio) : productos[index].precio;
                            productos[index].año = nuevoAño ? parseInt(nuevoAño) : productos[index].año;
                            productos[index].categoria = nuevaCategoria || productos[index].categoria;
                            guardarInventario(productos);
                            console.log('\nProductos actualizados.')
                            callback();
                        })
                    })
                })
            })
        }
    })
}

module.exports = actualizarProducto;