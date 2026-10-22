// Tarea 2: Funciones recursivas con figuras y menú
// Cree funciones recursivas para calcular lo siguiente:
// una que sume los primeros n números pares; otra que sume
// los primeros n números impares; y otra que calcule el n-ésimo
// término de la serie de Fibonacci. Cree un menú con Switch para
// que el usuario elija la operación, luego ingrese el valor de n.
// Muestre el resultado con mensajes descriptivos.

function sumaPares(n){
    if(n<=0){
        return 0;
    }
    return (2*n)+sumaPares(n-1);
}

function sumaImpar(n){
    if(n<=0){
        return 0;
    }
    return (2*n-1) + sumaImpar(n-1);
}

function fibonacci(n){
    if(n<=0){
        return 0;
    }
    if(n===1){
        return 1;
    }
    return fibonacci(n-1) + fibonacci(n-2);
}

function menu(op, n){
    switch(op){
        case 1:
            return `Suma de los primiros ${n} a numero pares es = ${sumaPares(n)}`;
        case 2:
            return `Suma de los primeros ${n} a numeros impares es = ${sumaImpar(n)}`;
        case 3:
            return `EL termino ${n} de la serie de Fibonacci es = ${fibonacci(n)}`;
        default: 
            return 'No suma nada, ya que es opcion invalida.';
    }
}

console.log(menu(1, 7));
console.log(menu(2, 8));
console.log(menu(3, 4));