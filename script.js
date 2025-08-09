console.log("Bienvenidos al sistema de facturación de energía.");

let consumoGuardado = 0;
let tarifaGuardada = 0;
let cargoFijoGuardado = 0;
let porcentajeIVAGuardado = 0;

// 1. Función declarativa: consumo mensual en kWh
function obtenerConsumo() {
    if (consumoGuardado === 0) {
        let valor = parseFloat(prompt("Ingresa el consumo mensual en kilovatio:"));
        while (isNaN(valor) || valor < 0) {
            valor = parseFloat(prompt("Valor inválido. Ingresa el consumo en kilovatio:"));
        }
        consumoGuardado = valor;
    }
    return consumoGuardado;
} 





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




