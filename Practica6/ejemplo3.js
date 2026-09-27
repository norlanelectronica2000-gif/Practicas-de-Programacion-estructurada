const readline = require('readline');

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question('¿Cuántos terminos de la series Fibonacci deseas ver?: ', cantidad=>{
    
    let n = parseInt(cantidad);
    
    let a = 0;
    let b = 1;
    let serie = '';
    
    for (let i=1; i<=n; i++){
        serie=serie+a;
        if(i<n){
            serie=serie+', ';
        }
        let siguiente = a+b;
        a = b;
        b = siguiente;
    }
    
    console.log('\n=== SERIE FIBONACCI ===');
    console.log('Primeros '+n+' terminos:');
    console.log(serie);
    
    rl.close();

})