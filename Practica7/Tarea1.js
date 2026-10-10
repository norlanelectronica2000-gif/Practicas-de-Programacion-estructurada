// Tarea 1: Adivinar el número secreto (WHILE)
// Genere un número secreto entre 1 y 50 usando Math.floor(Math.random() * 50) + 1. 
// Usando un bucle WHILE, solicite al usuario adivinar el número. En cada intento, 
// indique si el número es mayor o menor que el secreto. Cuente los intentos y muéstrelos al final.

const readlineSync = require('readline-sync');

const numeroSecreto = Math.floor(Math.random()*50)+1;
let intentos = 0;
let adivinar = false;

while(!adivinar){
    let entrada = readlineSync.question('Ingresa tu intento: ');
    let numeroU = parseInt(entrada);

    if(isNaN(numeroU) || numeroU<1 || numeroU>50){
        console.log('Por favor, ingresa un numero valido entre 1 y 50.\n');
        continue;
    }
    intentos++;

    if(numeroU===numeroSecreto){
        adivinar = true;
        console.log(`\n¡Felicidades! Adivinastes el numero secreto es: ${numeroSecreto}`);
        console.log('Intentos: '+ intentos);
    } else if (numeroU<numeroSecreto){
        console.log('El numero secreto es mayor.');
        console.log('Intentelo de nuevo.');
    } else{
        console.log('El numero secreto es menor.');
        console.log('Intentelo de nuevo.');
    }
}