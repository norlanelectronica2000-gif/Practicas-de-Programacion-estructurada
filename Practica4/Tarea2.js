// Tarea 2: Nivel de estudios
// Solicite al usuario su nivel de estudios con un número del 1 al 5: 
// 1=Primaria, 2=Secundaria, 3=Bachillerato, 4=Universidad, 5=Postgrado. 
// Usando Switch, muestre el nivel correspondiente. 
// Si el número no es válido, muestre "Nivel no válido".

const readline = require('readline');

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question('Ingrese su nivel se estudio (Nivel 1 a Nuvel 5): ', (nivel)=>{
    let nivelEstudio = parseInt(nivel);
    switch(nivelEstudio){
        case 1:
            console.log('Nivel: Primaria');
            break;
        case 2:
            console.log('Nivel: Secundaria');
            break;
        case 3:
            console.log('Nivel: Bachillerato');
            break;
        case 4:
            console.log('Nivel: Universidad');
            break;
        case 5:
            console.log('Nivel: Postgrado');
            break;
        default:
            console.log('Nivel no valido');
            break;
    }
    rl.close();
})