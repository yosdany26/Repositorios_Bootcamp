// ============================================
// PROYECTO SEMANA 07 — YF Servicios Financieros
// Dominio: Gestión de Inversiones y Patrimonio
// ============================================

"use strict"; // Modo estricto para un código más limpio

// ============================================
// SECCIÓN 1: Constantes y datos del dominio
// ============================================

const NOMBRE_DOMINIO = "SERVICIOS FINANCIEROS YF";
const ETIQUETA_VALOR = "Valor de Mercado";
const MONEDA = "USD";
const TASA_COMISION = 0.015; // Comisión de gestión anual (1.5%)

// Cartera de activos financieros (Portfolio)
const activos = [
  { id: 1, nombre: "Bitcoin", ticker: "BTC", categoria: "Cripto", valor: 65000, activo: true },
  { id: 2, nombre: "S&P 500 ETF", ticker: "VOO", categoria: "ETF", valor: 480, activo: true },
  { id: 3, nombre: "Apple Inc.", ticker: "AAPL", categoria: "Acción", valor: 175, activo: true },
  { id: 4, nombre: "Bono Evergrande", ticker: "EGR", categoria: "Bono", valor: 15, activo: false },
  { id: 5, nombre: "Oro Físico", ticker: "GOLD", categoria: "Metal", valor: 2300, activo: true }
];

// ============================================
// SECCIÓN 2: Función de formato (Arrow Function)
// ============================================

// Formatea el activo para mostrarlo en una lista profesional
const formatearActivo = (item) => 
  `📈 ${item.ticker.padEnd(5)} | ${item.nombre.padEnd(15)} [${item.categoria.toUpperCase()}] — ${MONEDA} ${item.valor.toLocaleString()}`;

// ============================================
// SECCIÓN 3: Función de cálculo (Función Pura)
// ============================================

/**
 * Calcula el valor proyectado a un año restando la comisión de gestión.
 * @param {number} valorActual - Precio actual del mercado.
 * @param {number} rendimientoEsperado - Porcentaje de ganancia (ej: 0.10 para 10%).
 * @returns {number} Valor neto final.
 */
const calcularProyeccion = (valorActual, rendimientoEsperado = 0.08) => {
  const gananciaBruta = valorActual * (1 + rendimientoEsperado);
  const costoGestion = gananciaBruta * TASA_COMISION;
  return +(gananciaBruta - costoGestion).toFixed(2);
};

// ============================================
// SECCIÓN 4: Función de validación
// ============================================

// Verifica si el activo es apto para el comercio (activo y con valor real)
const esAptoParaOperar = (item) => item.activo === true && item.valor > 0;

// ============================================
// SECCIÓN 5: Función con parámetro por defecto
// ============================================

// Crea una etiqueta de resumen financiero formateada
const formatearConDefault = (monto, etiqueta = ETIQUETA_VALOR, simbolo = "$") => {
  const montoFormateado = monto.toLocaleString('en-US', { minimumFractionDigits: 2 });
  return `${etiqueta.toUpperCase()}: ${simbolo}${montoFormateado}`;
};

// ============================================
// SECCIÓN 6: Reporte Financiero YF
// ============================================

console.log(`\n${"═".repeat(65)}`);
console.log(`   💎 ${NOMBRE_DOMINIO} — REPORTE DE CARTERA`);
console.log(`${"═".repeat(65)}`);

if (activos.length === 0) {
  console.log("\n⚠️ Error: No se encontraron activos en la base de datos.");
} else {
  // --- Listado de Activos ---
  console.log("\n📊 COMPOSICIÓN DE LA CARTERA:");
  let contador = 1;
  for (const activo of activos) {
    const iconoEstado = activo.activo ? "✅" : "❌";
    console.log(`  ${contador.toString().padStart(2, '0')}. ${iconoEstado} ${formatearActivo(activo)}`);
    contador++;
  }

  // --- Análisis de Validación ---
  let activosOperativos = 0;
  for (const activo of activos) {
    if (esAptoParaOperar(activo)) {
      activosOperativos++;
    }
  }
  
  console.log(`\n${"-".repeat(65)}`);
  console.log(`✅ Activos Operativos: ${activosOperativos} de ${activos.length}`);
  console.log(`⚠️ Activos Suspendidos: ${activos.length - activosOperativos}`);

  // --- Cálculos de Resumen ---
  let balanceTotalActual = 0;
  let balanceTotalProyectado = 0;
  const RENDIMIENTO_ANUAL = 0.12; // Proyección optimista del 12%

  for (const activo of activos) {
    if (esAptoParaOperar(activo)) {
      balanceTotalActual += activo.valor;
      balanceTotalProyectado += calcularProyeccion(activo.valor, RENDIMIENTO_ANUAL);
    }
  }

  console.log(`${"-".repeat(65)}`);
  console.log(`\n💰 RESUMEN ESTRATÉGICO:`);
  console.log(`  > ${formatearConDefault(balanceTotalActual, "Balance Actual")}`);
  console.log(`  > ${formatearConDefault(balanceTotalProyectado, "Proyección Neta (1 año)")}`);
  
  const gananciaNeta = balanceTotalProyectado - balanceTotalActual;
  console.log(`  > RETORNO ESTIMADO: ${MONEDA} ${gananciaNeta.toLocaleString()}`);
}

console.log(`\n${"═".repeat(65)}`);
console.log(`   Generado el: ${new Date().toLocaleDateString()} | © YF Services`);
console.log(`${"═".repeat(65)}\n`);