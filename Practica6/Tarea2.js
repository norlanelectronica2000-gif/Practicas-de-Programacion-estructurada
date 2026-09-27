// Tarea 2: Números primos
// Solicite un número N. Usando un bucle FOR,
// determine si el número es primo o no.
// Un número primo solo es divisible entre 1 y
// sí mismo. Muestre el resultado. Además, muestre
// todos los números primos desde 1 hasta N.

const readline = require('readline');

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question('Ingrese un numero N entero positivo mayor a 1: ', entrada=>{
    
    let n = parseInt(entrada);
    
    if (isNaN(n) || n<2){
        console,log('Error: Para evaluar numeros primos, debe ingresarse un numero mayor o igual a 2.');
    } else{
        let primo = true;
        
        for (let i=2; i<n; i++){
            if(n % i === 0){
                primo = false;
                break;
            }
        }
        
        if(primo) {
            console.log(`\nEl numero ${n} si es numero primo.`);
        } else{
            console.log(`\nEl numero ${n} no es numero primo.`);
        }
        
        console.log(`Numeros primos entre 1 y ${n}:`);
        
        let primosEncontrados = [];
        
        for (let num=2; num<=n; num++){
            let primoActual = true;
            
            for (let j=2; j<=Math.sqrt(num); j++){
                if(num % j === 0){
                    primoActual = false;
                    break;
                }
            }
            
            if(primoActual){
                primosEncontrados.push(num);
            }

        }
        
        console.log('Los primos encontrados son: '+primosEncontrados.join(', '));

    }

    rl.close();

})