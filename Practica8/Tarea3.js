// Tarea 3: Funciones para manejo de cadenas
// Cree las siguientes funciones: 
// una que reciba una cadena y devuelva la cantidad de vocales; 
// otra que reciba una cadena y devuelva la cadena invertida; y 
// otra que reciba una cadena y determine si es palíndromo 
// (se lee igual al derecho y al revés). Solicite una palabra o 
// frase al usuario y muestre los tres resultados.

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function solicitarEntrada(pregunta){
    return new Promise((resolve) =>{
        rl.question(pregunta, (respuesta) => resolve(respuesta.trim()));
    });
}

function contarVocales(texto){
    let contador = 0;
    const vocales = 'aeiouáéíóúAEIOUÁÉÍÓÚ';
    
    for (let i = 0; i < texto.length; i++) {
        if (vocales.includes(texto[i])) {
            contador++;
        }
    }
    return contador;
}

function invertirCadena(texto){
    let textoInvertido = '';
    for (let i = texto.length - 1; i >= 0; i--) {
        textoInvertido += texto[i];
    }
    return textoInvertido;
}

function esPalindromo(texto){
    const cadenaL = texto.toLowerCase().replace(/[^a-z0-9áéíóúñ]/g, '');
    const cadenaI = invertirCadena(cadenaL);

    return cadenaL === cadenaI && cadenaL.length>0;
}

async function iniciar(){
    const entradaTxT = await solicitarEntrada('Ingrese una palabra o frase: ');

    if(entradaTxT.length === 0){
        console.log('Error: No ingreso ningun texto.');
        rl.close();
        return;
    }

    const cantVocales = contarVocales(entradaTxT);
    const txtI = invertirCadena(entradaTxT);
    const resultados = esPalindromo(entradaTxT);

    console.log(`Texto ingresado: "${entradaTxT}"`);
    console.log(`Cantidad de vocales: ${cantVocales}`);
    console.log(`Texto invertido: "${txtI}"`);
    console.log(`¿Es palidromo?: ${resultados} 'Si, es un palidromo' : 'No, no es palidromo'`);

    rl.close();
}
iniciar();