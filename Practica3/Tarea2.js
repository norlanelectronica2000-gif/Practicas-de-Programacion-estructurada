// Tarea 2: Comparar calificaciones
// Solicite al usuario dos calificaciones (0-100).
// Compare cuál es la más alta. Si son iguales,
// indíquelo. Muestre un mensaje descriptivo con el resultado.

const readline = require('readline');

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question("Ingrese la primera calificacion: ", (calificacion1)=>{
    rl.question("Ingrese la segunda calificacion: ", (calificacion2)=>{
        
        if(calificacion1>calificacion2){
            console.log(`${calificacion1} es mayor que ${calificacion2}.`);
        } else if(calificacion1<calificacion2){
            console.log(`${calificacion1} es menos que ${calificacion2}.`);
        } else{
            console.log(`Las dos calificaiones son iguales.`);
        }
        
        rl.close();
    })
})