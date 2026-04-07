// ============================================
// SEMANA 08 — PROYECTO: Gestión de Activos YF
// Dominio: servicios financieros YF
// ============================================

"use strict";

// ---- CONFIGURACIÓN DEL DOMINIO ----
const NOMBRE_DOMINIO = "YF Servicios Financieros";
const ETIQUETA_VALOR = "activos financieros";
const MONEDA = "USD";

// ============================================
// 1. ARRAY INICIAL — Cartera de Inversiones
// ============================================

let activos = [
  { id: 1, nombre: "Bitcoin", ticker: "BTC", valor: 65000, activo: true, riesgo: "Alto" },
  { id: 2, nombre: "S&P 500 ETF", ticker: "VOO", valor: 480, activo: true, riesgo: "Bajo" },
  { id: 3, nombre: "Apple Inc.", ticker: "AAPL", valor: 175, activo: true, riesgo: "Medio" },
  { id: 4, nombre: "Bono Tesoro", ticker: "UST", valor: 1000, activo: true, riesgo: "Mínimo" },
  { id: 5, nombre: "Evergrande", ticker: "EGR", valor: 10, activo: false, riesgo: "Crítico" }
];

// ============================================
// 2. FUNCIONES DE GESTIÓN (Métodos de Arreglos)
// ============================================

// Agregar al final (push)
const agregarActivo = (nuevo) => {
  activos.push(nuevo);
  console.log(`➕ Añadido a cartera: ${nuevo.nombre}`);
};

// Eliminar el último (pop)
const eliminarUltimo = () => {
  const borrado = activos.pop();
  console.log(`➖ Retirado (último): ${borrado.nombre}`);
};

// Agregar al inicio - Prioridad (unshift)
const agregarPrioridad = (prioritario) => {
  activos.unshift(prioritario);
  console.log(`⭐ Activo prioritario: ${prioritario.nombre}`);
};

// Eliminar por índice (splice)
const eliminarPorIndice = (indice) => {
  const eliminado = activos.splice(indice, 1);
  console.log(`🗑️ Eliminado en posición ${indice}: ${eliminado[0].nombre}`);
};

// Filtrado de activos operativos (filter)
const obtenerActivosOperativos = () => activos.filter(a => a.activo);

// Búsqueda por nombre (find)
const buscarPorNombre = (nombre) => activos.find(a => a.nombre.toLowerCase() === nombre.toLowerCase());

// Formateo visual
const formatearActivo = (a) => {
  const icono = a.activo ? "✅" : "❌";
  return `[ID:${a.id}] ${icono} ${a.ticker.padEnd(5)} | ${a.nombre.padEnd(12)} | ${MONEDA} ${a.valor.toLocaleString()}`;
};

// ============================================
// 3. REPORTE DE OPERACIONES
// ============================================

console.log(`\n${"═".repeat(65)}`);
console.log(`💎 SISTEMA DE GESTIÓN — ${NOMBRE_DOMINIO.toUpperCase()}`);
console.log(`${"═".repeat(65)}\n`);

// Mostramos estado inicial (forEach)
console.log(`📋 Inventario inicial (${activos.length} ${ETIQUETA_VALOR}):`);
activos.forEach(a => console.log(`  ${formatearActivo(a)}`));

console.log("\n--- Ejecutando Movimientos de Cartera ---\n");

// Operaciones solicitadas
agregarActivo({ id: 6, nombre: "Ethereum", ticker: "ETH", valor: 3500, activo: true, riesgo: "Alto" });
agregarPrioridad({ id: 0, nombre: "Oro Onza", ticker: "GOLD", valor: 2350, activo: true, riesgo: "Bajo" });
eliminarPorIndice(3); // Elimina el activo en la posición 3
eliminarUltimo();     // Elimina el último (Ethereum en este caso)

console.log("\n--- Inventario Actualizado ---\n");
activos.forEach(a => console.log(`  ${formatearActivo(a)}`));

console.log("\n--- Análisis y Transformación ---\n");

// Búsqueda
const encontrado = buscarPorNombre("Apple Inc.");
console.log(`🔎 Búsqueda de "Apple Inc.":`, encontrado ? `Encontrado (Valor: ${MONEDA} ${encontrado.valor})` : "No encontrado");

// Transformación (map) - Proyectar valor +10%
const proyecciones = activos.map(a => ({
  ticker: a.ticker,
  futuro: +(a.valor * 1.10).toFixed(2)
}));

console.log("📈 Proyección de crecimiento (10%):");
proyecciones.forEach(p => console.log(`   · ${p.ticker}: Proyectado ${MONEDA} ${p.futuro}`));

// Resumen final
const activosValidos = obtenerActivosOperativos().length;
console.log(`\n${"═".repeat(65)}`);
console.log(`💼 RESUMEN: Activos Operativos: ${activosValidos} | Suspendidos: ${activos.length - activosValidos}`);
console.log(`© 2026 ${SERVICIOS_FINANCIEROS_YF}`);
console.log(`${"═".repeat(65)}\n`);