// Tarea 3: Simulador de cajero automático con menú
// Cree un programa que simule un cajero automático. Inicie con un saldo de $1000.
// Muestre un menú con las opciones:
// 1. Consultar saldo
// 2. Retirar dinero
// 3. Depositar dinero
// 4. Salir
// Usando Switch, ejecute la opción seleccionada:
// - Opción 1: Muestre el saldo actual.
// - Opción 2: Solicite el monto a retirar. Valide que sea mayor a 0, múltiplo de $5 
//   y que no exceda el saldo. Si cumple, reste del saldo; si no, muestre el error 
//   correspondiente.
// - Opción 3: Solicite el monto a depositar. Valide que sea mayor a 0 y que no 
//   exceda $5000 en un solo depósito. Si cumple, sume al saldo; si no, muestre 
//   el error.
// - Opción 4: Muestre "Gracias por usar el cajero" y salga.
// - Si la opción no es válida, muestre "Opción no válida".

const readline = require('readline');

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

let saldo = 1000;

function mostarMenu(){
    
    console.log('=== CAJERO AUTOMATICO ===');
    console.log('1. Consultar Saldo');
    console.log('2. Retirar Dinero');
    console.log('3. Depositar Dinero');
    console.log('4. Salir');
    
    rl.question('Seleccione una opcion: ', opcion=>{
            
        let opcion1 = parseInt(opcion);
            
        switch(opcion1){
            case 1:
                console.log(`Su saldo actual es: $${saldo}`);
                mostarMenu();
                break;
            case 2:
                rl.question('Ingrese el monto que va a retirar: ', retiro=>{
                    
                    let retiro1 = parseFloat(retiro);

                    if(retiro1 <= 0) {
                        console.log('Error: El monto a retirar debe ser mayor a 0.');
                    } else if(retiro1 % 5 !== 0) {
                        console.log('Error: El monto debe ser multiplo de $5.');
                    } else if(retiro1 > saldo){
                        console.log('Error: Saldo insuficiente para esta transaccion.');
                    } else {
                        saldo -= retiro1;
                        console.log(`Retiro exitoso.`)
                        console.log(`Su nuevo saldo es: $${saldo}`);
                    }
                    mostarMenu();
                })
                break;
            case 3:
                rl.question('Ingrese el monto que va a depositar: ', deposito=>{

                    let deposito1 = parseInt(deposito);

                    if(deposito1 <= 0) {
                        console.log('Error: El monto a depositar debe ser mayor a 0.');
                    } else if (deposito1 > 5000) {
                        console.log('Error: No puedo depositar mas de $5000 en una sola transaccion.');
                    } else {
                        saldo += deposito1;
                        console.log(`Deposito fue un exito.`);
                        console.log(`Su nuevo saldo es: $${saldo}`);
                    }
                    mostarMenu();
                })
                break;
            case 4:
                console.log('Gracias por usar el cajero.');
                rl.close();
                break;
            default:
                console.log('Opcion no valida.');
                console.log('Intentalo de nuevo.');
                mostarMenu();
                break;
        }
    })
}

mostarMenu();