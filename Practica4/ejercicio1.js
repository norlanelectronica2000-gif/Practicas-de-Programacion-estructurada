const readline = require('readline');

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question("Ingrese un numero del 1 al 7: ", (numero)=>{
    
    let dia = parseInt(numero);

    switch(dia){
        case 1:
            console.log('Lunes');
            break;
        case 2:
            console.log('Martes');
            break;
        case 3:
            console.log('Miercoles');
            break;
        case 4:
            console.log('Jueves');
            break;
        case 5:
            console.log('Viernes');
            break;
        case 6:
            console.log('Sabado');
            break;
        case 7:
            console.log('Domingo');
            break;
        default:
            console.log('Dia no valido.');
    }

    rl.close();
})