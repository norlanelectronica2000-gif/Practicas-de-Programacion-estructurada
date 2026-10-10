function sumarArreglo(arreglo) {
    let suma = 0;
    for (let numero of arreglo) {
        suma = suma + numero;
    }
    return suma;
}

function promedioArreglo(arreglo) {
    let suma = sumarArreglo(arreglo);
    return suma / arreglo.length;
}

function mayorArreglo(arreglo) {
    let mayor = arreglo[0];
    for (let numero of arreglo) {
        if (numero > mayor) {
            mayor = numero;
        }
    }
    return mayor;
}

let numeros = [15, 8, 23, 4, 42, 16];

let suma = sumarArreglo(numeros);
let promedio = promedioArreglo(numeros);
let mayor = mayorArreglo(numeros);

console.log("=== ANÁLISIS DEL ARREGLO ===");
console.log("Arreglo: [" + numeros.join(", ") + "]");
console.log("Suma de elementos: " + suma);
console.log("Promedio: " + promedio.toFixed(2));
console.log("Número mayor: " + mayor);