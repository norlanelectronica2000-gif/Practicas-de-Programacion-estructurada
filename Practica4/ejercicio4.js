const readline = require('readline');

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question('Ingrese la calificacion numerica (0-100): ', (calificacion)=>{

    let nota = parseFloat(calificacion);
    let letra;

    if(nota < 0 || nota > 100){
        console.log('Error: La calificacion debe estar entr 0 y 100.');
    } else{
        
        let rango = Math.floor(nota / 10);

        switch (rango){
            case 10:
            case 9:
                letra = 'A';
                break
            case 8:
                letra = 'B';
                break;
            case 7:
                letra = 'C';
                break;
            case 6:
                letra = 'D';
                break;
            default:
                letra = 'F';
        }

        console.log('Calificacion: '+nota + ' => '+ letra);
    }

    rl.close();

})