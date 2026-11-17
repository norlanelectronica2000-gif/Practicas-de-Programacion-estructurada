const readline = require('readline');

const rl = readline.createInterface({ 
    input: process.stdin,
    output: process.stdout 
});

let edades =[];

function pedirEdades(cantidad, indice, callback){
    if(indice===cantidad){
        return callback();
    }
    rl.question(`Ingrese la edad de la persona ${indice+1}: `, edad=>{
        edades.push(parseInt(edad));
        pedirEdades(cantidad, indice + 1, callback)
    })
}

function mostrarEdades(){
    console.log('\n La lista de las edades registradas son:')
    let sumEdades = 0;
    for(let i=0; i<edades.length; i++){
        console.log(`Persona ${i+1}: ${edades[i]} años.`)
        sumEdades += edades[i];
    }
    let promedio = sumEdades/edades.length;
    console.log(`\n El promedio de edades es: ${promedio.toFixed(2)} años.`);
    rl.close();
}

rl.question('Ingrese el numero de edades que va registrar: ', cantidad=>{
    let total = parseInt(cantidad);
    pedirEdades(total, 0, mostrarEdades);
})