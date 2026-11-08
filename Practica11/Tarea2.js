// Tarea 2: Fábrica de funciones
// Cree una función de orden superior llamada crearMultiplicador que reciba un número (el factor)
// y devuelva una nueva función que multiplique cualquier número por ese factor. Luego, cree un "duplicador" (factor 2)
// y un "triplicador" (factor 3), y pruebe ambas funciones con un número para mostrar los resultados.

const creaMultiplicador = (factor) =>{
    return (num) => num*factor;
};

const duplicar = creaMultiplicador(2);
const triplicar = creaMultiplicador(3);
const numBase = 20;

console.log(`Numero base: ${numBase}`);
console.log(`Resultados con duplicador: ${duplicar(numBase)}`);
console.log(`Resultados con triplicador: ${triplicar(numBase)}`);