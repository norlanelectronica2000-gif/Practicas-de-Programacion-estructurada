const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b === 0) {
        return "Error: no se puede dividir entre cero";
    }
    return a / b;
}

rl.question("Ingrese el primer número: ", (num1) => {
    rl.question("Ingrese el segundo número: ", (num2) => {
        rl.question("Ingrese el operador (+, -, *, /): ", (operador) => {
            
            let a = parseFloat(num1);
            let b = parseFloat(num2);
            let resultado;
            
            switch (operador) {
                case '+':
                    resultado = sumar(a, b);
                    break;
                case '-':
                    resultado = restar(a, b);
                    break;
                case '*':
                    resultado = multiplicar(a, b);
                    break;
                case '/':
                    resultado = dividir(a, b);
                    break;
                default:
                    resultado = "Operador no válido";
            }
            
            console.log("\n=== RESULTADO ===");
            console.log(a + " " + operador + " " + b + " = " + resultado);
            
            rl.close();
        });
    });
});