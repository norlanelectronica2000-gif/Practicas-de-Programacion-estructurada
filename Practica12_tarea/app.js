const readline = require('readline');
const {obtenerInventario} = require('./database/conexion')

const registrarProducto = require('./operaciones/registrarProducto')
const listaProductos = require('./operaciones/listaProductos')
const actualizarProducto = require('./operaciones/actualizarProductos')
const eliminarProducto = require('./operaciones/eliminarProductos')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let productos = obtenerInventario();

function mostraMenu(){
    console.log('TIENDA DE ELECTRONICO - INVENTARIO')
    console.log('1. Registrar producto \n2. Mostrar inventario \n3. Actualizar producto \n4. Eliminar producto \n5. Salir')
    rl.question('Seleccione una opcion: ', opcion =>{
        switch(opcion){
            case '1':
                registrarProducto(rl, productos, mostraMenu);
                break;
            case '2':
                listaProductos(productos, mostraMenu);
                break;
            case '3':
                actualizarProducto(rl, productos, mostraMenu);
                break;
            case '4':
                eliminarProducto(rl, productos, mostraMenu);
                break;
            case '5':
                console.log('Saliendo del sistema.')
                rl.close();
                break;
            default:
                console.log('\nERROR: Opcion no valida.')
                mostraMenu();
                break;
        }
    })
}

mostraMenu();