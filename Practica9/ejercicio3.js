function sumaDigitos(n) {
    if (n < 10) {
        return n;
    }
    return (n % 10) + sumaDigitos(Math.floor(n / 10));
}

console.log("sumaDigitos(1234) = " + sumaDigitos(1234));
console.log("sumaDigitos(9876) = " + sumaDigitos(9876));