// Tarea 1: Factorial de un número
// Solicite un número entero positivo al usuario. 
// Usando un bucle FOR, calcule y muestre su factorial. 
// Ejemplo: 5! = 5 × 4 × 3 × 2 × 1 = 120.

const readline = require('readline');

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question('Ingrese un numer entero positivo para calcular su factorial: ', entrada=>{
    
    let n = parseInt(entrada);
    
    if (isNaN(n) || n<0){
        console.log('Error: Debe ingresar un numero entero maypr o igual a 0.');
    } else{
        let factorial = 1;
        
        for(let i=1; i<=n; i++){
            factorial *= i;
        }
        
        console.log(`\nEl Factorial de ${n} es: ${factorial}`);
    
    }

    rl.close();

})