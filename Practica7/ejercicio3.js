let nombres = ["Diego", "Alejandra", "Maria", "Cristobal", "Marxivillanovich"];

let nombreMasLargo = "";
let longitudMaxima = 0;

console.log('=== LISTA DE NOMBRES ===');

for (let nombre of nombres) {
    console.log(nombre + ' tiene ' + nombre.length + ' letras');
    
    if (nombre.length > longitudMaxima) {
        longitudMaxima = nombre.length;
        nombreMasLargo = nombre;
    }
}

// Mostrar el nombre más largo
console.log('\n=== NOMBRE MAS LARGO ===');
console.log('El nombre mas largo es: ' + nombreMasLargo + ' (' + longitudMaxima + ' letras)');