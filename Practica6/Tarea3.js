// Tarea 3: Promedio de calificaciones
// Solicite al usuario cuántas calificaciones desea ingresar.
// Usando un bucle FOR y readline, solicite cada calificación,
// acumule la suma y al final calcule y muestre el promedio.
// Además, muestre la calificación más alta y la más baja ingresada.

const readline = require('readline');

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question('¿Cuantas calificaciones desea ingresar?: ', cantidad=>{
    
    let Calificaciones = parseInt(cantidad);

    if (isNaN(Calificaciones) || Calificaciones<=0){
        console.log('Error: Debe ingresar una cantidad validad mayor a 0.');
        rl.close();
        return;
    }

    let suma = 0;
    let calificacionMax = -Infinity;
    let calificacionMin = Infinity;
    let contador = 0;

    function pedirCalificacion(){
        if (contador<Calificaciones){
            rl.question(`Ingrese la calificacion #${contador+1} (0 a 100): `, notaEntrada=>{

                let nota = parseFloat(notaEntrada);

                if(isNaN(nota) || nota<0 || nota>100){
                    console.log('Calificacion invalida.')
                    pedirCalificacion();
                } else{

                    suma += nota;

                    if(nota>calificacionMax){
                        calificacionMax = nota;
                    }

                    if(nota<calificacionMin){
                        calificacionMin = nota;
                    }

                    contador++;
                    pedirCalificacion();
                }
            });
        }else{
            
            let promedio = suma/Calificaciones;

            console.log('\n--- RESUMEN DE CALFICACIONES FINALES ---')
            console.log(`Promedio: ${promedio.toFixed(2)}`);
            console.log(`Calificacion mas alta: ${calificacionMax.toFixed(2)}`);
            console.log(`Calificacion mas baja: ${calificacionMin.toFixed(2)}`);

            const escala = Math.floor(promedio/10);
            switch(escala){
                case 10:
                case 9:
                    console.log('Estado: Excelente');
                    break;
                case 8:
                case 7:
                    console.log('Estado: Bueno');
                    break;
                case 6:
                    console.log('Estado: Regular');
                    break;
                default:
                    console.log('Estado: Van a reprobar.')
            }

            rl.close();
        }
    }

    pedirCalificacion();
})