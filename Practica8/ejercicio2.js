const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function esParOImpar(numero) {
    if (numero % 2 === 0) {
        return "par";
    } else {
        return "impar";
    }
}

function esPrimo(numero) {
    if (numero <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false; 
        }
    }
    return true; 
}

rl.question("Ingrese un número: ", (numero) => {
    let n = parseInt(numero);
    
    let tipo = esParOImpar(n);
    let primo = esPrimo(n);
    
    console.log("\n=== RESULTADO ===");
    console.log("El número " + n + " es " + tipo);
    
    if (primo) {
        console.log("El número " + n + " ES primo");
    } else {
        console.log("El número " + n + " NO es primo");
    }
    
    rl.close();
});