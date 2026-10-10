let estudiante = {
    nombre: "Norlan Ismael",
    edad: 20,
    carrera: "Ingenieria en Desarrolo de Software",
    promedio: 8.2,
    universidad: "UNIVO"
};

console.log('=== DATOS DEL ESTUDIANTE ===');

for (let propiedad in estudiante) {
    console.log(propiedad + ': ' + estudiante[propiedad]);
}

console.log('\n=== EVALUACION ===');
if (estudiante.promedio >= 8) {
    console.log('Estudiante destacado');
} else {
    console.log('Estudiante regular');
}