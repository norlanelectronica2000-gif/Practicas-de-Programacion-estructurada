// Tarea 1: Clasificación de figuras geométricas
// Solicite al usuario el número de lados de una figura (3, 4, 5, 6).
// Utilizando Switch, muestre el nombre de la figura correspondiente: 
// 3=Triángulo, 4=Cuadrilátero, 5=Pentágono, 
// 6=Hexágono. Si el número no está en la lista, 
// muestre "Figura no reconocida".

const readline = require('readline');

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question('Ingrese el numero de lados de la figura (3, 4, 5 y 6): ', (lados)=>{
    let figuraslados = parseInt(lados);
    switch(figuraslados){
        case 3:
            console.log('Selecciono: Triangulo')
            break;
        case 4:
            console.log('Selecciono: Cuadrilatero')
            break;
        case 5:
            console.log('Selecciono: Pentagono')
            break;
        case 6:
            console.log('Selecciono: Hexagono')
            break;
        default:
            console.log('Error: Figura no Reconocida.')
            break;
    }
    rl.close();
})