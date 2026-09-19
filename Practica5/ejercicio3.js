// Ejercicio Práctico 3: 
// Sistema de tarifas de estacionamiento

const readline = require('readline');

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

console.log("ESTACIONAMIENTO")
console.log("Moto");
console.log("Sedan");
console.log("Camioneta");
console.log("Autobus");

rl.question("Ingrese su tipo de veehiculo(1/4): ", opcion=>{
    rl.question("Ingrese las horas de estacionamiento: ", horas=>{

        let opcionI = parseInt(opcion);
        let horasP = parseFloat(horas);
        let tarifa = 0;
        let tipodevehiculo = '';

        switch(opcionI){
            case 1:
                tarifa = 1;
                tipodevehiculo = 'Moto';
                break;
            case 2:
                tarifa = 2;
                tipodevehiculo = 'Sedan'
                break;
            case 3:
                tarifa = 3;
                tipodevehiculo = 'Camioneta';
                break;
            case 4:
                tarifa = 5;
                tipodevehiculo = 'Autobus';
                break;
            default:
                console.log("Opcion invalida");
                rl.close();
                break;
        }

        if(tarifa>0){
            let subtotal = horasP * tarifa;
            let descuento = 0;

            if(horasP>5){
                descuento = subtotal*0.20;
            }

            let total = subtotal - descuento;

            console.log("Factura");
            console.log("Tipo de Vehiculo: ", tipodevehiculo);
            console.log("Horas de Parqueo: ", horasP);
            console.log("Tarifa por hora: ", tarifa);
            console.log("Subtotal: ", subtotal.toFixed(2));
            console.log("Descuento: ", descuento.toFixed(2));
            console.log("Total: ", total.toFixed(2));

        rl.close();
        }

        
        
    })
})