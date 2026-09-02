let kwh = 250;
let preciokwh = 0.15;

let costoBase = kwh * preciokwh;
let impuesto = costoBase * 0.10;
let costoTotal = costoBase + impuesto;

console.log(`Consumo: ${kwh} kwh.`);
console.log(`Costo sin impuesto: $${costoBase.toFixed(2)}`);
console.log(`Impuesto: $${impuesto.toFixed(2)}`);
console.log(`Total a pagar: $${costoTotal.toFixed(2)}`);