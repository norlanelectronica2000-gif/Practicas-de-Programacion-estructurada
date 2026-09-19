// Tarea 2: Clasificador de números con múltiples condiciones
// Solicite tres números al usuario (a, b, c). Usando IF...ELSE IF y operadores 
// lógicos, determine y muestre:
// - Si los tres son iguales: "Los tres números son iguales"
// - Si los tres son diferentes: "Los tres números son diferentes"
// - Si exactamente dos son iguales: "Hay dos números iguales"
// - Además, indique cuál de los tres números es el mayor y cuál es el menor.
// - Si algún número es negativo, agregue el mensaje "Hay números negativos".

const readline = require('readline');

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question('Ingrese el primer numero (a): ', a=>{
    rl.question('Ingrese el segundo nuemro (b): ', b=>{
        rl.question('Ingrese el tercer numero (c): ', c=>{

            let a1 = parseFloat(a);
            let b1 = parseFloat(b);
            let c1 = parseFloat(c);

            console.log('Resultados: ');

            if(a1 === b1 && b1 === c1){
                console.log('Los tres numeros son iguales.');
            } else if(a1 !== b1 && a1 !== c1 && b1 !== c1){
                console.log('Los tres numeros son diferentes.');
            } else{
                console.log('Hay tres numeros negativos.');
            }

            let mayor = a1;
            let menor = a1;

            if (b1 > mayor) mayor = b1;
            if (b1 < menor) menor = b1;
            if (c1 > mayor) mayor = c1;
            if (c1 < menor) menor = c1;

            console.log(`El numero mayor es: ${mayor}`);
            console.log(`El numero menor es: ${menor}`);

            if (a1 < 0 || b1 < 0 || c1 < 0){
                console.log('Hay numeros negativos.');
            }

            rl.close();

        })
    })
})