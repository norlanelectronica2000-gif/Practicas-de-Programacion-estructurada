const readline = require('readline');

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

function mostrarMenu() {
    console.log('\n=== MENÚ DE CONVERSIONES ===');
    console.log('1. Convertir de Celsius a Fahrenheit');
    console.log('2. Convertir de Fahrenheit a Celsius');
    console.log('3. Salir');
}

function celsiusAFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function fahrenheitACelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

mostrarMenu();
rl.question('Seleccione una opcion (1-3): ', (opcion)=>{
    
    let opcionSeleccionada = parseInt(opcion);

    switch(opcionSeleccionada){
        case 1:
            rl.question('Ingrese los grados Celsius: ', (celsius)=>{
                
                let gradosCelsius = parseFloat(celsius);
                let resultado = celsiusAFahrenheit(gradosCelsius);
                
                console.log(gradosCelsius +'°C equivale a '+ resultado.toFixed(2)+'°F.');
                
                rl.close();
            })
            break;
        case 2:
            rl.question('Ingrese los grados Fahrenheit: ', (farhrenheit)=>{
                
                let gradosFahrenheit = parseFloat(farhrenheit);
                let resultado = fahrenheitACelsius(gradosFahrenheit);
                
                console.log(gradosFahrenheit+ '°F equivale a '+resultado.toFixed(2)+'°C');
                
                rl.close();
            })
            break;
        case 3:
            console.log('Saliendo del programa... ¡Hasta Luego!');
            
            rl.close();
            
            break;
        default:
            console.log('Opcion no valida');
            
            rl.close();
    }
})