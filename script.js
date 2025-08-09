console.log("Bienvenidos al sistema de facturación de energía.");

let consumoGuardado = 0;
let tarifaGuardada = 0;
let cargoFijoGuardado = 0;
let porcentajeIVAGuardado = 0;

// 3. Función de expresión: cargo fijo por servicio
const obtenerCargoFijo = function () {
    if (cargoFijoGuardado === 0) {
        let valor = parseFloat(prompt("Ingrese el cargo fijo por servicio:"));
        while (isNaN(valor) || valor < 0) {
            valor = parseFloat(prompt("Valor inválido. Ingresa el cargo fijo:"));
        }
        cargoFijoGuardado = valor;
    }
    return cargoFijoGuardado;
}  
obtenerCargoFijo()

