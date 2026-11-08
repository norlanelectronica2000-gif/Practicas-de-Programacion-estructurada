const edades = [12, 25, 17, 40, 15, 30];

const mayoresDeEdad = edades.filter(edad => edad >= 18);

console.log("Todas las edades: " + edades);
console.log("Edades de mayores de edad (>= 18): " + mayoresDeEdad);