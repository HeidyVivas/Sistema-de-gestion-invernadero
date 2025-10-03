# 🌱 Sistema de Gestión de Invernadero

Sistema completo de gestión para invernaderos desarrollado en **TypeScript**, aplicando principios de **Programación Orientada a Objetos (POO)**, arquitectura en capas y principios **SOLID**.

---

## 📋 Descripción del Proyecto

Este sistema permite gestionar de manera integral las operaciones de un invernadero, incluyendo:
- **Crear cultivos:** Documentación de producción, tipo de cultivo y fechas de inicio.  
- **Listar cultivos:** Visualización de cultivos activos y su estado.
- **Leer sensores:** Lee tipo y valor (valor simulado).
- **Generación de reportes:** Informes en formato **CSV** sobre tipo de cultivo y fechas de inicio.
- **Análisis de eficiencia:** Métricas de producción y uso de recursos.  

---

## 🏗️ Arquitectura

El proyecto está estructurado en **4 capas principales**:

```
SISTEMA_DE_GESTION-INVERNADERO/
│
├── dist/
│   ├── app/
│   │   └── cli.js
│   │   └── cli.js.map
│   │
│   ├── domain/
│   │   ├── entities/
│   │   │   ├── Cultivo.js
│   │   │   ├── Planta.js
│   │   │   ├── Trabajador.js
│   │   │   ├── sensors/
│   │   │   │   ├── Sensor.js
│   │   │   │   └── Trabajador.js.map
│   │   │
│   │   ├── errors/
│   │   │   ├── ValidationError.js
│   │   │   └── ValidationError.js.map
│   │   │
│   │   ├── services/
│   │   │   ├── CultivoService.js
│   │   │   ├── SensorService.js
│   │   │   ├── CultivoService.js.map
│   │   │   └── SensorService.js.map
│   │   │
│   │   ├── utils/
│   │   │   ├── csvReport.js
│   │   │   └── validators.js
│   │   │
│   │   └── repositories/
│   │       ├── InMemoryRepository.js
│   │       ├── IRepository.js
│   │       ├── InMemoryRepository.js.map
│   │       └── IRepository.js.map
│   │
│
├── src/
│   ├── app/
│   │   └── cli.ts
│   │
│   ├── domain/
│   │   ├── entities/
│   │   │   ├── Cultivos.ts
│   │   │   ├── Planta.ts
│   │   │   ├── Trabajador.ts
│   │   │   └── sensors/
│   │   │       ├── Sensor.ts
│   │   │       ├── SensorHumedad.ts
│   │   │       └── SensorTemperatura.ts
│   │   │
│   │   ├── errors/
│   │   │   └── ValidationError.ts
│   │   │
│   │   ├── services/
│   │   │   ├── CultivoService.ts
│   │   │   └── SensorService.ts
│   │   │
│   │   ├── utils/
│   │   │   └── validators.ts
│   │   │
│   │   └── repositories/
│   │       ├── InMemoryRepository.ts
│   │       └── IRepository.ts
│   │
│
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
├── reporte_cultivos.csv
└── tsconfig.json

```
## 🚀 Instalación y Uso

### 🔧 Prerrequisitos
- [Node.js](https://nodejs.org/) (v16 o superior)  
- npm o yarn  

### 📥 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/HeidyVivas/Sistema-de-gestion-invernadero.git

# Navegar al directorio del proyecto
cd Sistema-de-gestion-invernadero

# Instalar dependencias
npm install

# Compilar TypeScript
npm run build

# Ejecutar el sistema
npm start
```

---

## 📜 Scripts Disponibles

```bash
npm run build   # Compila TypeScript a JavaScript
npm start       # Ejecuta el sistema
npm run dev     # Modo desarrollo con recarga automática
npm test        # Ejecuta las pruebas unitarias
npm run lint    # Verifica el código con ESLint
```

---

## 📖 Ejemplos de Ejecución

### 1️⃣ Inicio del Sistema
```
=== SISTEMA DE GESTIÓN DE INVERNADERO ===

1.Crear cultivo
2.Listar cultivos
3.Leer sensores
4.Generar reporte CSV
5.Salir

Seleccione una opción:
```

---

### 2️⃣ Crear cultivo
```
--- REGISTRO DE NUEVO CULTIVO ---
? Sistema de Invernadero - Seleccione una opción: Crear cultivo
? ID del cultivo: 123
? Tipo de cultivo: hortalizas
✓ Cultivo creado con éxito!
Operación finalizada.

```

### 3️⃣ Lista cultivos
[
  Cultivo {
    id: 7384,
    tipo: 'mazorca',
    fechaInicio: 2025-10-03T13:45:26.878Z,
    plantas: []
  },
  Cultivo {
    id: 123,
    tipo: 'horataliza',
    fechaInicio: 2025-10-03T13:53:28.118Z,
    plantas: []
  },
]
Operación finalizada.


###
 💧 Reporte de Riegos (CSV)
```csv
id,tipo,fechaInicio
123,hortalizas,Fri Oct 03 2025 08:45:20 GMT-0500 (hora estándar de Colombia)
7384,mazorca,Fri Oct 03 2025 08:45:26 GMT-0500 (hora estándar de Colombia)
```

---

### 5️⃣ Simulación de Ciclo de Producción
```
---
Seleccione una opción: Generar reporte CSV
✓ Reporte generado: reporte_cultivos.csv
Operación finalizada.

```

---


🛠️ **Tecnologías usadas:** TypeScript, Node.js, SOLID, POO, CSV
