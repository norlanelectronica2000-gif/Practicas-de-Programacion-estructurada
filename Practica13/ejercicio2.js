const readline = require('readline');

const rl = readline.createInterface({ 
    input: process.stdin,
    output: process.stdout 
});

let precios =[];

function pedirPrecio(cantidad, indice, callback){
    if(indice===cantidad){
        return callback();
    }
    rl.question(`Ingrese el precio del producto #${indice+1}: $`, precio=>{
        precios.push(parseFloat(precio));
        pedirPrecio(cantidad, indice+1, callback);
    })
}
function mostrarPrecio(){
    console.log('\n**RESULTADOS DEL INVENTARIO**')
    let mayor15 = precios.filter(p => p>15);
    if (mayor15.length>0){
        mayor15.forEach((p, i) => {
            console.log(`Producto ${i+1}: $${p.toFixed(2)}`)
        })
    } else{
        console.log('Nungun precio supera a 15 dolares.');
    }
    let precioFinal = precios.reduce((acumulador, actual) => acumulador+actual, 0);    console.log(`\nSUma total de la compra: $${precioFinal.toFixed(2)}`)
    rl.close();
}

rl.question('¿Cuantos numeros va a ingresar?: ', cantidad=>{
    let total = parseInt(cantidad);
    pedirPrecio(total, 0, mostrarPrecio);
})