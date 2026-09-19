// Ejercicio Práctico 1: 
// Sistema de calificación con bonificación

const readline = require('readline');

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question("Ingrese su nombre: ", nombre=>{
    rl.question("Ingrese su calificacion: ", calificacion=>{
        rl.question("Entrego todos sus trabajos (si/no): ", respuesta=>{

            let calificacionp = parseFloat(calificacion);
            let respuestal = respuesta.toLowerCase();
            let bonificacion = 0;

            if(calificacion<0||calificacion>100){
                console.log("La calificacion tiene que esrae entre 0 y 100");
            } else {
                if(respuestal==="si"){
                    if(calificacion>=90){
                        bonificacion = 5;
                    } else if(calificacion>70){
                        bonificacion = 3;
                    }
                }
            }
            
            let notaF = calificacionp+bonificacion;

            if(notaF>100){
                notaF = 100
            }

            console.log('Sistema de bonificacion');
            console.log('Nombre: ', nombre);
            console.log('Calificacion sin bonificacion: ', calificacionp);
            console.log('Su bonificacion es: ', bonificacion);
            console.log('Calificacion final: ', notaF);

            rl.close();

        })
    })
})