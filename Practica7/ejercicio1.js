const readlineSync = require('readline-sync');

let suma = 0;
let contador = 0;

console.log('=== SUMA HASTA SUPERAR 100 ===');

while (suma <= 100) {
    let entrada = readlineSync.question('Ingrese un numero: ');
    let numero = parseFloat(entrada);

    if (isNaN(numero)) {
        console.log('El dato debe ser numerico\n');
    } else {
        suma += numero;
        contador++;
        console.log('Suma actual: ' + suma + '\n');
    }
}

console.log('=== RESULTADO FINAL ===');
console.log('Suma total: ' + suma);
console.log('Cantidad de numeros ingresados: ' + contador);