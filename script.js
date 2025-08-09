console.log("Bienvenidos al sistema de facturación de energía.");

let consumoGuardado = 0;
let tarifaGuardada = 0;
let cargoFijoGuardado = 0;
let porcentajeIVAGuardado = 0;

// 2. Función declarativa: tarifa por kWh
function obtenerTarifa() {
    if (tarifaGuardada === 0) {
        let valor = parseFloat(prompt("Ingresa la tarifa por kilovatio:"));
        while (isNaN(valor) || valor < 0) {
            valor = parseFloat(prompt("Valor inválido. Ingresa la tarifa:"));
        }
        tarifaGuardada = valor;
    }
    return tarifaGuardada;
}
obtenerTarifa()

