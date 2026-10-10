const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function celsiusAFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function fahrenheitACelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

console.log("=== CONVERSOR DE TEMPERATURAS ===");
console.log("1. Celsius a Fahrenheit");
console.log("2. Fahrenheit a Celsius");

rl.question("Seleccione una opción (1-2): ", (opcion) => {
    rl.question("Ingrese la temperatura: ", (temperatura) => {
        
        let op = parseInt(opcion);
        let temp = parseFloat(temperatura);
        let resultado;
        let unidadOrigen;
        let unidadDestino;
        
        switch (op) {
            case 1:
                resultado = celsiusAFahrenheit(temp);
                unidadOrigen = "°C";
                unidadDestino = "°F";
                break;
            case 2:
                resultado = fahrenheitACelsius(temp);
                unidadOrigen = "°F";
                unidadDestino = "°C";
                break;
            default:
                console.log("Opción no válida");
                rl.close();
                return;
        }
        
        console.log("\n=== RESULTADO ===");
        console.log(temp + unidadOrigen + " equivale a " + resultado.toFixed(2) + unidadDestino);
        
        rl.close();
    });
});