const readline = require('readline');

// Configuración del lector de línea
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Tasa de cambio fija
const tasaCambio = 0.85;

// Mensaje de bienvenida y explicación
console.log('Bienvenido al Convertidor de Moneda');
console.log('Este programa convierte dólares a euros utilizando una tasa de cambio fija.');

function realizarConversion() {
    // Captura de entrada
    rl.question('Por favor, ingresa la cantidad en dólares: ', function (entrada) {
        
            const dolares = parseFloat(entrada);
            if (isNaN(dolares)) {
                // Si la entrada no es un número válido, solicitamos una nueva entrada
                console.log('Entrada inválida. Por favor, ingresa un número válido en dólares.');
                realizarConversion();
            } else {
                // Cálculo de conversión
                const euros = dolares * tasaCambio;
                console.log(`${dolares} dólares equivalen a ${euros.toFixed(2)} euros.`);
                // Continuamos realizando conversiones
                realizarConversion();
            }
        
    });
}

// Iniciar el proceso de conversión
realizarConversion();
