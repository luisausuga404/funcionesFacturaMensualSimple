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
// 8. Función final: mostrar la factura completa
function mostrarFactura() {

    const consumo = obtenerConsumo();
    const tarifa = obtenerTarifa();
    const cargoFijo = obtenerCargoFijo();
    const porcentajeIVA = obtenerPorcentajeIVA();
    const subtotal = calcularSubtotal();
    const montoIVA = calcularIVA();
    const total = calcularTotal();

    console.log("\n   FACTURA DE ENERGÍA    ");
    console.log("Consumo mensual:", consumo, "kilovatio");
    console.log("Tarifa por kilovatio:", tarifa, "pesos");
    console.log("Subtotal:", subtotal, "pesos");
    console.log("Cargo fijo:", cargoFijo, "pesos");
    console.log("Porcentaje IVA:", porcentajeIVA, "%");
    console.log(" IVA:", montoIVA, "pesos");
    console.log("--------------------------------");
    console.log("TOTAL A PAGAR:", total, "pesos \n");
}

let continuar = true;
while (continuar) {
    consumoGuardado = 0;
    tarifaGuardada = 0;
    cargoFijoGuardado = 0;
    porcentajeIVAGuardado = 0;

    mostrarFactura();

    const respuesta = prompt("¿Deseas generar otra factura? Escribe si 'no', cualquier otra tecla para continuar:");

    if (respuesta === "no" || respuesta === "n") {
        continuar = false;
    }
}

console.log("Gracias por usar el sistema de facturación.");




