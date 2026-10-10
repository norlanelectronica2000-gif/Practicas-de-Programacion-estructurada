// Tarea 2: Funciones para figuras geométricas
// Cree funciones para calcular el área y el perímetro de las siguientes figuras:
// círculo, cuadrado, rectángulo y triángulo. 
// Cada función debe recibir los parámetros necesarios y retornar el resultado. 
// Cree un menú con Switch para que el usuario elija la figura y luego ingrese los datos necesarios. 
// Muestre el área y el perímetro con 2 decimales.

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function solicitarEntrada(pregunta){
    return new Promise((resolve) =>{
        rl.question(pregunta, (respuesta) => resolve(respuesta.trim()));
    })
}
// Circulo
function calcularAreacirculo(radio){
    return Math.PI * Math.pow(radio,2);
}
function calcularPerimetrocirculo(radio){
    return 2 * Math.PI * radio;
}
// Cuadrado
function calcularAreacuadrado(lado){
    return lado*lado;
}
function calcularPerimetrocuadrado(lado){
    return 4*lado;
}
// Rectangulo
function calcularArearectangulo(base, altura){
    return base*altura;
}
function calcularPerimetrorectangulo(base, altura){
    return 2*(base+altura);
}
// Triangulo
function calcularAreatriangulo(base, altura){
    return (base*altura)/2;
}
function calcularPerimetrotriangulo(base, altura){
    return l1+l2+l3;
}

async function iniciar(){
    console.log('1. Circulo');
    console.log('2. Cuadrado');
    console.log('3. Rectangulo');
    console.log('4. Triangulo\n');

    const opcion = await solicitarEntrada('Seleccione una figura: ');

    let area = 0;
    let perimetro = 0;

    switch(opcion){
        case '1': {
            const entradaRadio = await solicitarEntrada('Ingrese el radio del circulo: ');
            const radio = parseFloat(entradaRadio);

            if (isNaN(radio) || radio<=0){
                console.log('Error: El radio debe ser un numero positivo.');
                rl.close();
                return;
            }

            area = calcularAreacirculo(radio);
            perimetro = calcularPerimetrocirculo(radio);
            break;
        }
        case '2': {
            const entradaLado = await solicitarEntrada('Ingrese la longitud del lado cuadrado: ');
            const lado = parseFloat(entradaLado);

            if (isNaN(lado) || lado <= 0){
                console.log('Error: El lado debe ser un numero positivo.');
                rl.close();
                return;
            }

            area = calcularAreacuadrado(lado);
            perimetro = calcularPerimetrocuadrado(lado);
            break;
        }
        case '3': {
            const entradaBase = await solicitarEntrada('Ingrese la base del rectangulo: ');
            const entradaAltura = await solicitarEntrada('Ingrese la altura del rectangulo: ');

            const base = parseFloat(entradaBase);
            const altura = parseFloat(entradaAltura);

            if(isNaN(base) || isNaN(altura) || base<=0 || altura<=0){
                console.log('Error: La base y altura debe ser un numero positivo.');
                rl.close();
                return;
            }

            area = calcularArearectangulo(base, altura);
            perimetro = calcularPerimetrorectangulo(base, altura);
            break;
        }
        case '4': {
            const entradaBase = await solicitarEntrada('Ingrese la base del triángulo: ');
            const entradaAltura = await solicitarEntrada('Ingrese la altura del triángulo: ');
            const entradaLado1 = await solicitarEntrada('Ingrese la medida del Lado 1: ');
            const entradaLado2 = await solicitarEntrada('Ingrese la medida del Lado 2: ');
            const entradaLado3 = await solicitarEntrada('Ingrese la medida del Lado 3: ');

            const base = parseFloat(entradaBase);
            const altura = parseFloat(entradaAltura);
            const l1 = parseFloat(entradaLado1);
            const l2 = parseFloat(entradaLado2);
            const l3 = parseFloat(entradaLado3);

            if (isNaN(base) || isNaN(altura) || isNaN(lado1) || isNaN(lado2) || isNaN(lado3) ||
                base <= 0 || altura <= 0 || l1 <= 0 || l2 <= 0 || l3 <= 0) {
                console.log('Error: Todos los datos del triángulo deben ser números positivos.');
                rl.close();
                return;
            }

            area = calcularAreatriangulo(base, altura);
            perimetro = calcularPerimetrotriangulo(l1, l2, l3);
            break;
        }
        default:
            console.log('Opcion Invalida');
            rl.close();
            return;
    }

    console.log(`Area: ${area.toFixed(2)}`);
    console.log(`Perimetro: ${perimetro.toFixed(2)}`);

    rl.close();
}
iniciar();