# Proyecto Semana 03: Calculadora de Servicio Financiero

> **🎯 ÚNICO ENTREGABLE**: Este proyecto es el **Servicio Financiero** para aprobar la semana.

## 🎯 Objetivo

Construir una **calculadora multi-operación** aplicada a tu dominio asignado, usando todos los operadores aprendidos esta semana: aritméticos, de asignación compuesta, de comparación estricta y lógicos.

## 📋 Tu Dominio Asignado

**Dominio**: [SERVICIO FINANCIERO]

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

## ✅ Requisitos Funcionales

Tu calculadora debe incluir al menos:

1. **Operaciones aritméticas** (`+`, `-`, `*`, `/`, `%`)
   - Calcular totales, descuentos, restos, promedios
2. **Operadores de asignación compuesta** (`+=`, `-=`, `*=`, `/=`)
   - Actualizar valores acumulados sin reescribir la variable completa
3. **Comparación estricta** (`===`, `!==`, `>=`, `<=`, `>`, `<`)
   - Validar condiciones con `===` (nunca con `==`)
4. **Operadores lógicos** (`&&`, `||`, `!`)
   - Combinar condiciones (descuento si cumple criterios, etc.)
5. **Numeric separators** para cantidades grandes (`1_000_000`)
6. **`console.log()`** con resultados claros y etiquetados

## 💡 Ejemplo de Referencia (Planetario — solo instructor)

El archivo `starter/script.js` contiene TODOs genéricos para cualquier dominio.
El archivo `solution/script.js` muestra una implementación de referencia con el dominio **Planetario** (dominio no asignable, solo para ejemplificar).