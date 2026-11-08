const precios = [10.00, 25.50, 5.99, 100.00, 45.30];

const preciosConIVA = precios.map(precio => precio * 1.13);

console.log("Precios originales: " + precios);

const preciosRedondeados = preciosConIVA.map(p => p.toFixed(2));
console.log("Precios finales con IVA (13%): " + preciosRedondeados);