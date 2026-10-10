// Tarea 1: Sistema de calificaciones con funciones
// Cree una función que reciba una calificación numérica (0-100)
// y devuelva la letra correspondiente (A, B, C, D, F).
// Cree otra función que reciba un arreglo de calificaciones y devuelva el promedio.
// Solicite al usuario cuántas calificaciones desea ingresar, almacene cada una en un arreglo,
// y al final muestre: cada calificación con su letra, el promedio y la letra del promedio.

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function solicitarEntrada(pregunta) {
    return new Promise((resolve) =>{
        rl.question(pregunta, (respuesta) => resolve(respuesta.trim()));
    });
}

function convertirNotaLetra(nota){
    if (isNaN(nota)) return 'F';
    if (nota >= 90) return 'A';
    if (nota >= 80) return 'B';
    if (nota >= 70) return 'C';
    if (nota >= 60) return 'D';
    return 'F';
}

function calcularPromedio(notas){
    if (!notas || notas.length === 0) return 0;
    let sumaTotal = 0;
    for (let i = 0; i < notas.length; i++) {
        sumaTotal += Number(notas[i]);
    }
    return sumaTotal / notas.length;
}

async function iniciar(){
    const entradaCant = await solicitarEntrada('¿Cuantas calificaciones deseas ingresar?: ');
    const cantidad = parseInt(entradaCant);

    if(isNaN(cantidad) || cantidad<=0){
        console.log('Error: Debe ingresar un numero entero mayor a 0.');
        rl.close();
        return;
    }

    const calificaciones = [];

    for(let i = 0; i < cantidad; i++){
        let nota = -1;
        while(isNaN(nota) || nota<0 || nota>100){
            const entradaN = await solicitarEntrada(`Ingrese la calificacion #${i+1}: `)
            nota = parseFloat(entradaN);
            if(isNaN(nota) || nota<0 || nota>100){
                console.log('¡Calificacion invalida!');
            }
        }
        calificaciones.push(nota);
    }

    console.log('\n=== RESULTADOS ===');
    for(let i = 0; i < calificaciones.length; i++){
        const nota = calificaciones[i];
        const letra = convertirNotaLetra(nota);
        console.log(`Calificacion #${i+1}: ${nota.toFixed(2)}.`);
        console.log(`Letra: ${letra}`);
    }

    const promedio = calcularPromedio(calificaciones);
    const letraPromedio = convertirNotaLetra(promedio);

    console.log(`\nPromedio General: ${promedio.toFixed(2)}`);
    console.log(`Letra Promedio: ${letraPromedio}`);

    rl.close();
}
iniciar();