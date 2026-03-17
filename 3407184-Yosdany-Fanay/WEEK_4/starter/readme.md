# Proyecto Semana 04: Generador de Mensajes de Dominio

> **🎯 Servicio Financiero**: Este proyecto es el **único entregable obligatorio** para aprobar la semana.

---

## 📋 Tu Dominio Asignado Servicio Financiero

**Dominio**: [El instructor te asignará tu dominio al inicio del trimestre]

> ⚠️ **POLÍTICA ANTICOPIA**: Cada aprendiz tiene un **dominio único**. Tu código debe reflejar tu dominio específico. Una implementación copiada o no adaptada resulta en calificación de cero.

---

## 🎯 Objetivo

Construir un **generador de mensajes** en consola para tu dominio asignado, usando todos los métodos de string aprendidos esta semana y template literals para construir la salida.

---

## ✅ Requisitos Funcionales

Tu script debe:

1. **Declarar datos de tu dominio** como strings con `const`
- Nombre de la entidad principal (con espacios y mayúsculas/minúsculas mixtas)
- Categoría o tipo
- Descripción o mensaje largo
- Un identificador o código

2. **Usar al menos 5 métodos de string diferentes**:
- `toUpperCase()` o `toLowerCase()`
- `trim()`
- `includes()`, `startsWith()` o `endsWith()`
- `slice()` o `split()`
- `replace()` o `replaceAll()` o `repeat()`

3. **Construir la salida con template literals** — sin concatenación con `+`

4. **Generar dos tipos de mensajes**:
- Una **ficha / tarjeta** multilínea con los datos del dominio
- Un **mensaje corto** (tipo notificación o alerta) de una línea

5. **Mostrar al menos una validación** usando `includes`, `startsWith` o `endsWith`

---

## 💡 Ejemplo de referencia (Planetario — dominio no asignable)

```
=============================================
PLANETARIO MUNICIPAL — FICHA DE EXHIBICIÓN
=============================================
Exhibición: SISTEMA SOLAR EN 3D
Categoría: Astronomía — nivel básico
Código: EXH-001
Descripción: Exhibición inmersiva con proyección...
Disponible: Sí

--- Validaciones ---
¿Código empieza con EXH?: true
¿Descripción contiene 'inmersiva'?: true

--- Mensaje de notificación ---
📢 Nueva exhibición disponible: Sistema Solar en 3D (EXH-001)
=============================================
```

---

## 🛠️ Archivos del Proyecto

```
3-proyecto/
├── README.md ← estás aquí
├── starter/
│ └── script.js ← tu punto de partida (completar los TODOs)
└── solution/
└── script.js ← referencia del instructor (no copiar)
```

---

## 🚀 Cómo ejecutar

```bash
node starter/script.js
```

---

## 📌 Entregables

1. `script.js` funcional, adaptado a tu dominio
2. Uso visible de al menos 5 métodos de string distintos
3. Toda la salida construida con template literals
4. Al menos una validación con `includes`, `startsWith` o `endsWith`
5. Código comentado en español explicando cada sección

---