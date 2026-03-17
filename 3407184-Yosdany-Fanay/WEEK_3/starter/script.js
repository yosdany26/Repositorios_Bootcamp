

// ============================================
// PROYECTO SEMANA 03: Calculadora de Dominio
// DOMINIO: Servicios Financieros YF
// ============================================

// ============================================
// SECCIÓN 1: Datos del Servicio Finaciero 
// ============================================

const TASA_INTERES_ANUAL = 0.15;    // 15% anual
const COMISION_TRANSACCION = 3500;  // Cobro fijo por operación
const SALDO_MINIMO_REQUERIDO = 100000; // Para evitar cobros de manejo
const LIMITE_CREDITO_MAX = 10000000; // 10 millones de tope base

// ============================================
// SECCIÓN 2: Operaciones aritméticas
// ============================================
console.log("=== Operaciones básicas ===");

const depositoInicial = 500000;
const interesMensual = (depositoInicial * TASA_INTERES_ANUAL) / 12;
console.log("Interés generado este mes (+):", interesMensual);

const saldoConInteres = depositoInicial + interesMensual;
const saldoTrasComision = saldoConInteres - COMISION_TRANSACCION;
console.log("Saldo final tras comisión (-):", saldoTrasComision);

const presupuestoSemanal = saldoTrasComision / 4;
console.log("Presupuesto semanal disponible (/):", presupuestoSemanal);

const proyeccionAhorroTresAnos = depositoInicial * (1 + TASA_INTERES_ANUAL) ** 3;
console.log("Proyección a 3 años (**):", proyeccionAhorroTresAnos);

console.log("");

// ============================================
// SECCIÓN 3: Asignación compuesta
// ============================================
console.log("=== Asignación compuesta ===");

let balanceCuenta = 250000;
console.log("Saldo inicial:", balanceCuenta);

balanceCuenta += 120000; // Depósito de sueldo
console.log("Tras depósito de sueldo (+=):", balanceCuenta);

balanceCuenta -= 45000;  // Pago de suscripciones
console.log("Tras pago de servicios (-=):", balanceCuenta);

balanceCuenta *= 1.02;   // Rendimiento extra del 2% por campaña
console.log("Tras bono de lealtad (*=):", balanceCuenta);

console.log("");

// ============================================
// SECCIÓN 4: Comparación estricta
// ============================================
console.log("=== Validaciones con === ===");

const deudaPendiente = 0;
const estaLibreDeDeuda = deudaPendiente === 0;
console.log("¿La cuenta está sin deudas?:", estaLibreDeDeuda);

const montoPrestamoDeseado = 8000000;
const esPrestamoValido = montoPrestamoDeseado <= LIMITE_CREDITO_MAX;
console.log("¿El monto solicitado es permitido?:", esPrestamoValido);

const tieneFondoSuficiente = balanceCuenta >= SALDO_MINIMO_REQUERIDO;
console.log("¿Cumple con el saldo mínimo?:", tieneFondoSuficiente);

console.log("");

// ============================================
// SECCIÓN 5: Operadores lógicos
// ============================================
console.log("=== Condiciones lógicas ===");

const tieneBuenHistorial = true;
const tieneIngresosEstables = true;
const estaEnListaNegra = false;

// Cliente VIP: Buen historial Y saldo mayor a 300,000
const esClienteVIP = tieneBuenHistorial && balanceCuenta > 300000;
console.log("¿Califica como cliente VIP? (&&):", esClienteVIP);

// Aprobación: (Historial O Ingresos) Y NO estar en lista negra
const creditoAprobado = (tieneBuenHistorial || tieneIngresosEstables) && !estaEnListaNegra;
console.log("¿Crédito aprobado automáticamente? (||, !):", creditoAprobado);

console.log("");

// ============================================
// SECCIÓN 6: Resumen final
// ============================================
console.log("=== Resumen de Cuenta YF ===");

console.log(`Balance Final: $${balanceCuenta.toFixed(2)}`);
console.log(`Estatus de Crédito: ${creditoAprobado ? "APROBADO" : "EN REVISIÓN"}`);
console.log(`Tipo de Cuenta: ${esClienteVIP ? "PREMIUM" : "ESTÁNDAR"}`);

console.log("");