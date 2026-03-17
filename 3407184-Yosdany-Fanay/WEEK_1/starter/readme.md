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
// SISTEMA YF - FICHA DE PRODUCTO FINANCIERO
// Gestión de Servicios Financieros
// =========================================

// Sección: Encabezado del sistema
console.log("=========================================");
console.log("     SISTEMA YF - SOLICITUD         ");
console.log("=========================================");

// Sección: Información general del cliente
console.log("\nINFORMACIÓN GENERAL");
console.log("--------------------");
console.log("Titular del servicio:   Juan Carlos Rey");
console.log("Código de cliente:      YF-99015");
console.log("Categoría:              Crédito de Consumo");
console.log("Estado de cuenta:       Activo");

// Sección: Detalles del servicio financiero
const montoPrestamo = 1500000;
const seguroVida = 12500;

console.log("\nDETALLES DE LA OPERACIÓN");
console.log("--------------------");
console.log("Plazo (meses):          24");    
console.log("Tasa (TEA %):           28.5");  
console.log("Monto solicitado:       " + montoPrestamo);
console.log("Desembolso neto:        " + (montoPrestamo - seguroVida));
console.log("Estudio aprobado:       true");  
console.log("Reportado en centrales: false");

// Sección: Resumen del dominio
console.log("\nRESUMEN DEL DOMINIO");
console.log("--------------------");
console.log("Dominio:         Gestión de Servicios Financieros YF");
console.log("Entidad:         Transacción Bancaria");
console.log("Total registros: 1540");

console.log("\n=========================================");
console.log("  Ficha generada con JavaScript ES2023");
console.log("=========================================");