console.log("Bienvenidos al sistema de facturación de energía.");

let consumoGuardado = 0;
let tarifaGuardada = 0;
let cargoFijoGuardado = 0;
let porcentajeIVAGuardado = 0;

// 4. Función de expresión: porcentaje de IVA
const obtenerPorcentajeIVA = function () {
    if (porcentajeIVAGuardado === 0) {
        let valor = parseFloat(prompt("Ingrese el porcentaje de IVA (%):"));
        while (isNaN(valor) || valor < 0) {
            valor = parseFloat(prompt("Valor inválido. Ingresa el IVA (número positivo):"));
        }
        porcentajeIVAGuardado = valor;
    }
    return porcentajeIVAGuardado;
}
obtenerPorcentajeIVA()

