const readline = require('readline');

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question("Ingrese la calificacion: ", (nota)=>{
    if(nota>=0 && nota<=10.0){
        if(nota>=6.0){
            console.log("Usted aprobo.");
        } else{
            console.log("Usted reprobo.");
        }
    } else{
        console.log("Usted tiene que estar en el rango de (0-100)");
    }
    rl.close();
})