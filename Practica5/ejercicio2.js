// Ejercicio Práctico 2: 
// Clasificador de triángulos

const readline = require('readline');

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

console.log("CLASIFICADOR DE TRIANGULOS");
console.log('1. Equilatero');
console.log('2. Isosceles');
console.log('3. Escaleno');

rl.question("Ingrese el lado 1: ", lado1=>{
    rl.question("Ingrese el lado 2: ", lado2=>{
        rl.question("Ingrese el lado 3: ", lado3=>{
            
            let l1 = parseFloat(lado1);
            let l2 = parseFloat(lado2);
            let l3 = parseFloat(lado3);
            
            if(l1+l2 > l3 && l1+l3 > l2 && l2+l3 >l1){
                
                let tipo;
                
                switch(true){
                    case (l1 === l2 && l2 === l3):
                        tipo = "Es un equilatero";
                        break;
                    case (l1 === l2 || l1 === l3 || l2 === l3):
                        tipo = "Es un isósceles";
                        break;
                    default:
                        tipo = "Es un escaleno"
                        break;
                }
                
                let perimetro = l1 + l2 + l3;

                console.log(`Tipo de triangulo: ${tipo}`);
                console.log(`Perimetro: ${perimetro}`);

            } else {
                console.log(`Error: Los lados no pueden formar un triangulo.`);
            }

            rl.close();

        })
    })
})