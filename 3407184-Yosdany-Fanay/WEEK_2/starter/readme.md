# Proyecto Semanal — Semana 02: Ficha de Datos del Dominio

> 🎯 **ÚNICO ENTREGABLE**: Este proyecto es el **único entregable obligatorio** para aprobar la semana.

---

## 🎯 Objetivo

Crear una ficha de datos en consola usando las variables y tipos aprendidos esta semana. Cada aprendiz adapta el proyecto a su **servicios financieros YF**
---

## 📋 Tu Dominio Asignado

**Dominio**: (servicios financieros YF)

> ⚠️ **Política anticopia**: Cada aprendiz trabaja sobre un dominio diferente. Las implementaciones deben ser coherentes con tu dominio asignado. Se verificará que el código no sea copia de otro aprendiz.

---

## 📦 Estructura del proyecto
// =========================================
// SISTEMA FINANCIERO YF - FICHA DE CRÉDITO
// Gestión de Servicios Financieros
// =========================================

// Sección: Encabezado del sistema
console.log("=========================================");
console.log("    SISTEMA FINANCIERO YF - CRÉDITO ");
console.log("=========================================");

// Sección: Información general del cliente
console.log("\nINFORMACIÓN GENERAL");
console.log("--------------------");
console.log("Nombre del cliente:     Ana Martínez");
console.log("Código de cliente:      YF-45015");
console.log("Categoría:              Crédito de Consumo");
console.log("Estado de solicitud:    Aprobado");

// Sección: Detalles de la operación financiera
const montoAprobado = 1200000;
const seguroObligatorio = 15000;

console.log("\nDETALLES DEL PRODUCTO");
console.log("--------------------");
console.log("Plazo (meses):          12");    
console.log("Tasa de interés (%):    2.5");  
console.log("Monto del crédito:      " + montoAprobado);
console.log("Desembolso efectivo:    " + (montoAprobado - seguroObligatorio));
console.log("Firma digital:          true");  
console.log("Reporte negativo:       false");

// Sección: Resumen del dominio
console.log("\nRESUMEN DEL DOMINIO");
console.log("--------------------");
console.log("Dominio:         Sistema de Gestión Financiera YF");
console.log("Entidad:         Cartera de Créditos");
console.log("Total registros: 128");

console.log("\n=========================================");
console.log("  Ficha generada con JavaScript ES2023");
console.log("=========================================");