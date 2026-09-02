const readline = require('readline');

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question("Ingrese la edad del usuario: ", (edad)=>{
    if(edad>12){
        if(edad<18){
            console.log("Usted es un adolescente.");
        } else if(edad<65){
            console.log("Usted es un Adulto");
        } else{
            console.log("Usted es un Adulto Mayor");
        }
    } else{
        console.log("Usted es un niño")
    }
    rl.close();
})