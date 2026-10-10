// Tarea 2: Cajero automático mejorado (DO...WHILE)
// Cree un cajero con saldo inicial de $1000. 
// El menú debe repetirse hasta que el usuario salga: 
// 1) Consultar saldo
// 2) Retirar
// 3) Depositar
// 4) Salir.
// Valide que los retiros no excedan el saldo y que los depósitos sean mayores a 0. 
// Use Switch y DO...WHILE.

const readlineSync = require('readline-sync');

let saldo = 1000;
let salir = false;

do {
    console.log('\n=== MENU DE CAJERO AUTOMATICO ===');
    console.log('1. Consultar saldo');
    console.log('2. Retirar');
    console.log('3. Depositar');
    console.log('4. Salir');

    let opcion = parseInt(readlineSync.question('Ingrese una opcion (1-4): '));

    switch(opcion){
        case 1:
            console.log(`\nSu saldo actual es: $${saldo.toFixed(2)}`);
            break;
        case 2:
            let montoRetirar = parseFloat(readlineSync.question('Ingrese el monto para retirar: $'));

            if (isNaN(montoRetirar) || montoRetirar<=0){
                console.log('Monto invalido.');
            } else if(montoRetirar>saldo){
                console.log('Fondo insuficientes.');
            } else{
                saldo -= montoRetirar;
                console.log(`El retiro fue un exito.`);
                console.log(`Saldo restante: $${saldo.toFixed(2)}`);
            }
            break;
        case 3:
            let montoDepositar = parseFloat(readlineSync.question('Ingrese el monto a depositar: $'));

            if (isNaN(montoDepositar) || montoDepositar<=0){
                console.log('El monto a depositar debe ser mayor a $0');
            } else{
                saldo += montoDepositar;
                console.log('Deposito exitoso.');
                console.log(`Nuevo saldo: $${saldo.toFixed(2)}`);
            }
            break;
        case 4:
            console.log('Gracias por utilizar nuestros servicios.');
            salir = true;
            break;
        default:
            console.log('Opcion no valida');
    }
}
while (!salir);