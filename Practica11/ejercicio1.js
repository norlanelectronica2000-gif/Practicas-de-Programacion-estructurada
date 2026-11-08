function calcular(a, b, operacion) {
    return operacion(a, b);
}

const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => a / b;

console.log("Suma (10 + 5): " + calcular(10, 5, sumar));
console.log("Resta (10 - 5): " + calcular(10, 5, restar));
console.log("Multiplicación (10 * 5): " + calcular(10, 5, multiplicar));
console.log("División (10 / 5): " + calcular(10, 5, dividir));