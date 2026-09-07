// Tarea 3: Descuento por monto de compra
// Solicite el monto de compra. Si es mayor a $100,
// aplique 15% de descuento. Si es mayor a $50,
// aplique 10%. En otro caso, no hay descuento.
// Muestre el monto original, el descuento aplicado
// y el total a pagar con 2 decimales.

const readline = require('readline');

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question("Ingrese el monto de compra: ", (monto)=>{
    
    if(monto>50){
        let descuento = monto * 0.10;
        let montototal = monto - descuento;
        console.log(`El monto total es: $${montototal.toFixed(2)}`);
    } else if(monto>100){
        let descuento = monto * 0.15;
        let montototal = monto - descuento;
        console.log(`El monto total es: $${montototal.toFixed(2)}`);
    } else{
        console.log(`No aplica el descuento.`);
        let descuento = monto * 0;
        let montototal = monto - descuento;
        console.log(`El monto total es: $${montototal.toFixed(2)}`);
    }
    
    rl.close();
})