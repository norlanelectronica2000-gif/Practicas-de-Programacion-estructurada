const readline = require('readline');

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question('Ingrese un numero para ver su tabla de multiplicar: ', numero=>{
    
    let n = parseInt(numero);
    
    console.log('\n=== TABLA DE MULTIPLICAR DEL '+n+' ===');
    
    for (let i=1; i<=10; i++){
        console.log(n+' x '+i+' = '+(n*i));
    }
    
    rl.close();
    
})