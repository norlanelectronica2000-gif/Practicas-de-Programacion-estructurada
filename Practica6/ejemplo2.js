const readline = require('readline');

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question('Ingrese un numero N: ', numero=>{
    
    let n = parseInt(numero);
    
    let sumaPares = 0;
    let sumaImpares = 0;
    
    for (let i=1; i<=n; i++){
        if(i%2 === 0){
            sumaPares=sumaPares+i;
        } else{
            sumaImpares=sumaImpares+i;
        }
    }
    
    console.log('\n=== RESULTADO ===');
    console.log('Rango del 1 al '+n);
    console.log('Suma de numeros pares: '+sumaPares);
    console.log('Suma de numeros impares: '+sumaImpares);
    
    rl.close();
    
})