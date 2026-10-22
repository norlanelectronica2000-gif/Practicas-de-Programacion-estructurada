// Tarea 1: Funciones recursivas para cálculos matemáticos
// Cree una función recursiva que calcule el factorial de un número entero positivo.
// Cree otra función recursiva que calcule la potencia de una base elevada a un exponente
// sin usar el operador **. Cree una tercera función recursiva que sume todos los números
// desde 1 hasta n. Solicite al usuario un número, y muestre el factorial, la potencia
// (usando ese número como base y como exponente) y la suma hasta ese número.

function factorial(n){
    if(n === 0 || n === 1){
        return 1;
    }
    return n * factorial(n-1);
}

function potencia(base, exponente){
    if (exponente === 0){
        return 1;
    }
    return base * potencia(base, exponente -1);
}

function sumaN(n){
    if(n<=1){
        return n === 1 ? 1:0;
    }
    return n+sumaN(n-1);
}

let n=5;

console.log('Numero ingresado: '+n);
console.log('Factorial('+n+') = ' + factorial(n));
console.log('Potencial: '+potencia(n,n));
console.log(`Suma hasta ${n} = ${sumaN(n)}`);