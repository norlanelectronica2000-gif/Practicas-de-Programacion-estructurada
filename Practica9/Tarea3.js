function contarVocales(cadena, indice = 0){
    if(indice>=cadena.length){
        return 0;
    }
    let c = cadena[indice].toLowerCase();
    let esV =(c === 'a' || c === 'e' || c === 'i' || c === 'o' || c === 'u');
    return (esV ? 1 : 0)+ contarVocales(cadena, indice + 1);
}

function invertirCadena(cadena){
    if(cadena === ''){
        return '';
    }
    return cadena.slice(-1)+invertirCadena(cadena.slice(0, -1));
}

function esPalindromo(cadena){
    let limpio = cadena.toLowerCase().replace(/[^a-z]/g, '');

    function verificar(str, inicio, fin){
        if(inicio>=fin){
            return true;
        }
        if(str[inicio] !== str[fin]){
            return false;
        }
        return verificar(str, inicio +1, fin -1);
    }
    return verificar(limpio, 0, limpio.length -1);
}

let texto = 'Bienvenido a la Universidad de Oriente UNIVO'

console.log(`Texto Integrado: ${texto}`)
console.log(`Cantidad de vocales: ${contarVocales(texto)}`)
console.log(`Cadena invertida: ${invertirCadena(texto)}`)
console.log(`¿Es palidromo?: ${esPalindromo(texto)}`);