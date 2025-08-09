console.log("Bienvenidos al sistema de facturación de energía.");

let consumoGuardado = 0;
let tarifaGuardada = 0;
let cargoFijoGuardado = 0;
let porcentajeIVAGuardado = 0;

// 5. Función flecha: calcular subtotal (consumo × tarifa)
const calcularSubtotal = () => {
    const consumo = obtenerConsumo();
    const tarifa = obtenerTarifa();
    return consumo * tarifa;
}




