const readline = require('readline');

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question('Ingrese el numero de la bebida: ', (bebida)=>{
    let opcion = parseInt(bebida);
    let bebidaSeleccionada = "";

    switch(opcion){
        case 1:
            bebidaSeleccionada = "Agua";
            break;
        case 2:
            bebidaSeleccionada = "Refresco";
            break;
        case 3:
            bebidaSeleccionada = "Jugo";
            break;
        case 4:
            bebidaSeleccionada = "Cafe";
            break;
        case 5:
            bebidaSeleccionada = "Té";
            break;
        default:
            bebidaSeleccionada = "";
            break;
    }

    if(bebidaSeleccionada !== ""){
        console.log(`Has seleccionado: ${bebidaSeleccionada}`);

        switch(opcion){
            case 2:
            case 3:
                console.log("¿Desea agregar hielo?");
                break;
            default:
                break;
        }
    } else{
        console.log("Bebida no desponible.");
    }
    rl.close();
})