const readline = require('readline');

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question("Ingrese su primer numero: ", (num1)=>{
    rl.question("Ingrese el segundo numero: ", (num2)=>{

        if(num1>num2){
            console.log("Su numero mayor es: ",num1);
        } else if(num1<num2){
            console.log("Su numero menor es: ",num2);
        } else{
            console.log("Sus numeros son iguales: ",num1,"=",num2);
        }

        rl.close();
    })
})