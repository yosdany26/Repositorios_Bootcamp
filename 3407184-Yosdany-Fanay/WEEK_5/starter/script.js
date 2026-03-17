// ============================================
// PROYECTO SEMANA 05: Clasificador Financiero
// Dominio: Activos de Inversión (YF)
// ============================================

// ============================================
// SECCIÓN 1: Datos del Activo Financiero
// ============================================

const elementName = "ETF Vanguard S&P 500"; 
const elementStatus = "active";              // Opciones: "active", "suspended", "closed"
const elementValue = 12.5;                   // Rendimiento anualizado (%)
const elementType = "ETF";                   // Opciones: "Stock", "ETF", "Crypto", "Bond"
const elementInfo = {                        // Objeto opcional
    riskLevel: "Medium-High",
    currency: "USD",
    managementFee: 0.03
};

// ============================================
// SECCIÓN 2: Clasificación de Rendimiento (if / else if / else)
// ============================================

let classification;
if (elementValue >= 15) {
    classification = "🔥 Alto Rendimiento (Agresivo)";
} else if (elementValue >= 7) {
    classification = "📈 Rendimiento Moderado (Crecimiento)";
} else if (elementValue > 0) {
    classification = "🛡️ Rendimiento Bajo (Conservador)";
} else {
    classification = "⚠️ Rendimiento Negativo (Alerta)";
}

// ============================================
// SECCIÓN 3: Estado de Operación (Operador Ternario)
// ============================================

const statusLabel = elementStatus === "active" ? "🟢 Mercado Abierto" : "🔴 Operaciones Suspendidas";

// ============================================
// SECCIÓN 4: Categorización por Tipo (switch)
// ============================================

let typeLabel;
switch (elementType) {
    case "Stock":
        typeLabel = "Acción de Renta Variable";
        break;
    case "ETF":
        typeLabel = "Fondo Cotizado (Diversificado)";
        break;
    case "Bond":
        typeLabel = "Instrumento de Renta Fija";
        break;
    case "Crypto":
        typeLabel = "Activo Digital Volátil";
        break;
    default:
        typeLabel = "Categoría de Inversión no Identificada";
}

// ============================================
// SECCIÓN 5 y 6: Nullish Coalescing (??) y Optional Chaining (?.)
// ============================================

// Si elementName es null/undefined, usamos el fallback
const displayName = elementName ?? "Activo Anónimo";

// Acceso seguro a propiedades anidadas y fallback si no existen
const infoDetail = elementInfo?.riskLevel ?? "Riesgo no evaluado";
const safeCurrency = elementInfo?.currency ?? "Divisa no especificada";

// ============================================
// SECCIÓN 7: Ficha de Salida (Template Literals)
// ============================================

console.log("=".repeat(45));
console.log("📊 REPORTE DE ANÁLISIS FINANCIERO");
console.log("=".repeat(45));
console.log(`Instrumento:     ${displayName}`);
console.log(`Tipo:            ${typeLabel}`);
console.log(`Estado:          ${statusLabel}`);
console.log(`Rendimiento:     ${elementValue}%`);
console.log(`Clasificación:   ${classification}`);
console.log(`Nivel de Riesgo: ${infoDetail}`);
console.log(`Moneda:          ${safeCurrency}`);
console.log("=".repeat(45));
console.log(`Generado el:     ${new Date().toLocaleDateString()}`);
console.log("=".repeat(45));