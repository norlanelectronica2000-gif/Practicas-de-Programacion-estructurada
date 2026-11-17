const {guardarInventario} = require('../database/conexion')

function registrarProducto(rl, productos, callback){
    rl.question('Ingrese el nombre del producto: ', nombre =>{
        rl.question('Ingrese el precio del producto: $', precio =>{
            rl.question('Ingrese el año del producto: ', año =>{
                rl.question('Ingrese la categoria del producto: ', categoria =>{
                    const productoExiste = productos.some(p => p.nombre.toLowerCase() === nombre.toLowerCase())
                    if(productoExiste){
                        console.log(`\nERROR: El producto ${nombre} ya esta registrado.`)
                    } else{
                        const nuevoProducto ={
                            nombre,
                            precio: parseFloat(precio),
                            año: parseInt(año),
                            categoria
                        }
                        productos.push(nuevoProducto)
                        guardarInventario(productos);
                        console.log('\nProducto registrado y guardado.')
                    }
                    callback();
                })
            })
        })
    })
}

module.exports = registrarProducto;