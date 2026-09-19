// Tarea 1: Sistema de acceso bancario
// Solicite al usuario su tipo de tarjeta 
// (1=Débito, 2=Crédito, 3=Premium) y el monto a retirar. 
// Usando Switch, asigne un límite de retiro según el tipo de tarjeta: 
// 1=$500, 2=$1000, 3=$2000. Luego, valide con IF si el monto solicitado es menor 
// o igual al límite y si es múltiplo de $10. Si cumple ambas condiciones, muestre 
// "Retiro exitoso". Si el monto excede el límite, muestre "Límite excedido". Si no 
// es múltiplo de $10, muestre "El monto debe ser múltiplo de 10". Si el tipo de 
// tarjeta no es válido, muestre "Tarjeta no válida".

const readline = require('readline');

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

console.log('== SISTEMA DE ACCESO BANCARIO ACTIVADO ==');
console.log('== TIPOS DE TARJETAS ==');
console.log('1. Debito');
console.log('2. Credito');
console.log('3. Premium');

rl.question("Ingrese el tipo de tarjeta: ", tarjeta=>{
    rl.question("Ingrese el monto para retirar: $", monto=>{

        let tipoTarjeta = parseInt(tarjeta);
        let monton = parseFloat(monto);

        let limite = 0;
        let tarjetaValida = true;

        switch(tipoTarjeta){
            case 1:
                limite = 500;
                break;
            case 2:
                limite = 1000;
                break;
            case 3:
                limite = 2000;
                break;
            default:
                tarjetaValida = false;
                console.log('Error: Tarjeta Invalida');
                break;
        }

        if(tarjetaValida){
            console.log(`Limite de su tarjeta: $${limite}`);
            if(monton > limite){
                console.log('Error: Se exedio el Limite.');
            } else if(monton % 10 !== 0){
                console.log('Error: El monto debe ser multiplo de 10.');
            } else if (monton <= limite && monton % 10 === 0){
                console.log('El retiro fue exitoso');
            }
        }

        rl.close();

    })
})