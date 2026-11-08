function ejecutarOperacion(a, b, operacion) {
    return operacion(a, b);
}

const suma = (x, y) => x + y;
console.log(ejecutarOperacion(5, 3, suma)); // 8