console.log("Bienvenidos al sistema de facturación de energía.");

// let consumoGuardado = 0;
// let tarifaGuardada = 0;
// let cargoFijoGuardado = 0;
// let porcentajeIVAGuardado = 0;

// 5. Función flecha: calcular subtotal (consumo × tarifa)
const calcularSubtotal = () => {
    const consumo = obtenerConsumo();
    const tarifa = obtenerTarifa();
    return consumo * tarifa;
}

// 6. Función flecha: calcular monto del IVA
const calcularIVA = () => {
    const subtotal = calcularSubtotal();
    const porcentaje = obtenerPorcentajeIVA();
    return (subtotal * porcentaje) / 100;
}
// 7. Función flecha: total a pagar
const calcularTotal = () => {
    const subtotal = calcularSubtotal();
    const iva = calcularIVA();
    const cargo = obtenerCargoFijo();
    return subtotal + iva + cargo;
}





