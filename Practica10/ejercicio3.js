function arregloNumeros(n){
    let filtrado = [];
    for (let i=0; i<n.length; i++){
        if(n[i] > 10 && n[i] % 2 === 0){
            filtrado.push(n[i]);
        }
    }
    return filtrado;
}

const listaN = [5, 2, 15, 20, 70, 6, 30, 5, 100];
console.log(arregloNumeros(listaN));