// ============================================
// PROYECTO SEMANA 06: Reporte de Cartera con Bucles
// Dominio: Servicios Financieros / Inversiones (YF)
// ============================================

// ============================================
// SECCIÓN 1: Datos del dominio
// ============================================

const investments = [
  { name: "Acción Apple (AAPL)", category: "Tecnología", value: 18.5 },
  { name: "Bonos del Tesoro US", category: "Renta Fija", value: 4.2 },
  { name: "Bitcoin (BTC)", category: "Criptoactivos", value: 45.0 },
  { name: "ETF Vanguard S&P 500", category: "Indexados", value: 12.8 },
  { name: "Acción Tesla (TSLA)", category: "Tecnología", value: -5.4 },
  { name: "Ethereum (ETH)", category: "Criptoactivos", value: 22.1 },
  { name: "Oro (Gold Spot)", category: "Commodities", value: 8.3 }
];

const categories = ["Tecnología", "Renta Fija", "Criptoactivos", "Indexados", "Commodities"];

const valueLabel = "Rendimiento Anual (%)";

// ============================================
// SECCIÓN 2: Listado completo con for...of
// ============================================
console.log("=== 📋 LISTADO DE CARTERA ===");

let lineNumber = 0;
for (const asset of investments) {
  lineNumber++;
  console.log(`${lineNumber}. ${asset.name} — [${asset.category}] — ${valueLabel}: ${asset.value}%`);
}
console.log("");

// ============================================
// SECCIÓN 3: Contadores por categoría
// ============================================
console.log("=== 📂 CONTEO POR CATEGORÍA ===");

for (const cat of categories) {
  let count = 0;
  for (const asset of investments) {
    if (asset.category === cat) {
      count++;
    }
  }
  console.log(`${cat.padEnd(15)}: ${count} activo(s)`);
}
console.log("");

// ============================================
// SECCIÓN 4: Totales y promedio (acumulador)
// ============================================
console.log("=== 📊 ESTADÍSTICAS GENERALES ===");

let totalYield = 0;

for (const asset of investments) {
  totalYield += asset.value;
}

const averageYield = investments.length > 0 ? totalYield / investments.length : 0;

console.log(`Suma total de rendimientos: ${totalYield.toFixed(2)}%`);
console.log(`Promedio de cartera:        ${averageYield.toFixed(2)}%`);
console.log("");

// ============================================
// SECCIÓN 5: Máximo y mínimo
// ============================================
console.log("=== 🏆 MEJOR Y PEOR DESEMPEÑO ===");

let topAsset = investments[0] ?? null;
let bottomAsset = investments[0] ?? null;

if (investments.length > 0) {
  for (const asset of investments) {
    // Lógica para el máximo
    if (asset.value > topAsset.value) {
      topAsset = asset;
    }
    // Lógica para el mínimo
    if (asset.value < bottomAsset.value) {
      bottomAsset = asset;
    }
  }

  console.log(`🚀 Mayor ${valueLabel}: ${topAsset.name} (${topAsset.value}%)`);
  console.log(`📉 Menor ${valueLabel}: ${bottomAsset.name} (${bottomAsset.value}%)`);
}
console.log("");

// ============================================
// SECCIÓN 6: Reporte detallado con for clásico
// ============================================
console.log("=== 🔍 ANÁLISIS VS PROMEDIO ===");

for (let i = 0; i < investments.length; i++) {
  const asset = investments[i];
  
  // Determinamos si el rendimiento es superior o inferior al promedio de la cartera
  const status = asset.value >= averageYield ? "✅ SOBRE el promedio" : "❌ BAJO el promedio";

  console.log(`${i + 1}. ${asset.name.padEnd(22)} | Rendimiento: ${asset.value}% | ${status}`);
}

console.log("");
console.log("=== FIN DEL REPORTE FINANCIERO ===");