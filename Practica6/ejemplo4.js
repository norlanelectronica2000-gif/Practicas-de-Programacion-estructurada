const readline = require('readline');

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question('Ingrese la cantidad de filas para la piramide: ', filas=>{
    
    let n = parseInt(filas);
    
    console.log('\n=== PIRAMIDE DE ASTERISCOS ===');
    
    for(let i=1; i<=n; i++){
        let linea = '';
        
        for(let j=1; j<=i; j++){
            linea = linea + '*';
        }
        
        console.log(linea);
    }
    
    rl.close();

})