const fs = require('fs')
const path = require('path');

const RUTA_INVENTARIO = path.join(__dirname, '..', 'inventario.json')

function obtenerInventario(){
    if(fs.existsSync(RUTA_INVENTARIO)){
        const data = fs.readFileSync(RUTA_INVENTARIO, 'utf8')
        return JSON.parse(data);
    } else{
        fs.writeFileSync(RUTA_INVENTARIO, JSON.stringify([], null, 2))
        return []
    }
}

function guardarInventario(productos){
    fs.writeFileSync(RUTA_INVENTARIO, JSON.stringify(productos, null, 2))
}

module.exports= {obtenerInventario, guardarInventario}