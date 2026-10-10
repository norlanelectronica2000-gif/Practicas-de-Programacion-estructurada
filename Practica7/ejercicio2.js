const readlineSync = require('readline-sync');

let salir = false;

do {
    console.log('\n=== MENU PRINCIPAL ===');
    console.log('1. Saludar');
    console.log('2. Mostrar fecha actual');
    console.log('3. Salir');
    
    let opcion = parseInt(readlineSync.question('Seleccione una opcion (1-3): '));
    
    switch (opcion) {
        case 1:
            console.log('¡Hola! Bienvenido al sistema.');
            break;
        case 2:
            let fecha = new Date();
            console.log('Fecha actual: ' + fecha.toLocaleDateString());
            console.log('Hora actual: ' + fecha.toLocaleTimeString());
            break;
        case 3:
            console.log('Saliendo del programa... ¡Hasta luego!');
            salir = true;
            break;
        default:
            console.log('Opcion no valida. Intente de nuevo.');
    }
} while (!salir);