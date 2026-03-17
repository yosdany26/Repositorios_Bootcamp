// ============================================
// PROYECTO SEMANA 04: Generador de Mensajes
// DOMINIO: Servicios Financieros (YF)
// ============================================

// ============================================
// SECCIÓN 1: Datos del Servicio Financiero YF
// ============================================

// TODO: Define el nombre de tu dominio
const DOMAIN_NAME = " YF";

// TODO: Define el nombre de la entidad principal
const rawEntityName = " Portafolio de Criptoactivos Estratégico ";

// TODO: Define una categoría o tipo (string)
const entityCategory = "Inversión de Alto Rendimiento";

// TODO: Define un código identificador (string)
const entityCode = "YF-INV-990";

// TODO: Define una descripción corta (string)
const entityDescription = "Fondo de inversión diversificado con exposición a activos digitales y yield farming.";

// TODO: Define un dato numérico relevante (number)
const mainValue = 12500.50; // Saldo en USD

// TODO: Define un estado booleano
const isActive = true;


// ============================================
// SECCIÓN 2: Transformaciones de string
// ============================================

// TODO: Limpia el nombre con trim()
const entityName = rawEntityName.trim();

// TODO: Obtén el nombre en mayúsculas para el encabezado
const entityNameUpper = entityName.toUpperCase();

// TODO: Obtén el nombre en minúsculas para el código
const entityNameLower = entityName.toLowerCase();

// TODO: Extrae las primeras letras del código con slice()
const codePrefix = entityCode.slice(0, 2); // Resultado: "YF"


// ============================================
// SECCIÓN 3: Validaciones con búsqueda
// ============================================

// TODO: Verifica si el código empieza con el prefijo correcto
const hasValidPrefix = entityCode.startsWith("YF");

// TODO: Verifica si la descripción contiene una palabra clave
const descriptionIsRelevant = entityDescription.includes("yield");

// TODO: Verifica si el código termina con los dígitos
const hasValidSuffix = entityCode.endsWith("990");


// ============================================
// SECCIÓN 4: Generación de la ficha principal
// ============================================

const separator = "=".repeat(50);
const subSeparator = "-".repeat(50);

// TODO: Construye la ficha multilínea usando template literals
const mainCard = `
${separator}
SISTEMA FINANCIERO — ${DOMAIN_NAME.toUpperCase()}
${separator}
Entidad: ${entityNameUpper}
Clase: ${entityCategory}
Identificador: ${entityCode}
Ref. Interna: ${codePrefix}
Balance: $${mainValue.toLocaleString()} USD
Estatus: ${isActive ? "🟢 OPERATIVO" : "🔴 SUSPENDIDO"}

${subSeparator}
Detalle Técnico:
"${entityDescription}"
${separator}
`;

console.log(mainCard);


// ============================================
// SECCIÓN 5: Validaciones
// ============================================

console.log("--- Reporte de Integridad de Datos ---");
// TODO: Muestra los resultados de las validaciones con template literals
console.log(`¿Prefijo corporativo '${codePrefix}' detectado?: ${hasValidPrefix}`);
console.log(`¿Incluye concepto 'yield' en descripción?: ${descriptionIsRelevant}`);
console.log(`¿ID de transacción finaliza en '990'?: ${hasValidSuffix}`);
console.log("");


// ============================================
// SECCIÓN 6: Mensaje de notificación corto
// ============================================

console.log("--- Notificación de Movimiento ---");

// TODO: Construye un mensaje corto de una línea
const notification = `💼 Alerta YF: El activo "${entityName}" (${entityCode}) ha actualizado su valoración de mercado.`;
console.log(notification);
console.log("");