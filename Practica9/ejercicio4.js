function invertir(cadena) {
    if (cadena.length <= 1) {
        return cadena;
    }
    return cadena[cadena.length - 1] + invertir(cadena.slice(0, -1));
}

console.log("invertir('hola') = " + invertir("hola"));
console.log("invertir('javascript') = " + invertir("javascript"));