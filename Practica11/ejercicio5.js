const numeros = [1, 2, 3, 4, 5];

const dobles = numeros.map(n => n * 2); 
console.log(dobles);

const pares = numeros.filter(n => n % 2 === 0);
console.log(pares);

const sumaTotal = numeros.reduce((acumulador, n) => acumulador + n, 0);
console.log(sumaTotal);