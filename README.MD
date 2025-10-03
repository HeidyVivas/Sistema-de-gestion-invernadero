# 🌱 Sistema de Gestión de Invernadero

Sistema completo de gestión para invernaderos desarrollado en **TypeScript**, aplicando principios de **Programación Orientada a Objetos (POO)**, arquitectura en capas y principios **SOLID**.

---

## 📋 Descripción del Proyecto

Este sistema permite gestionar de manera integral las operaciones de un invernadero, incluyendo:

- **Registro de plantas:** Control de especies, cantidades, ubicación y fechas de plantación.  
- **Control de riegos:** Monitoreo del consumo de agua y programación de riegos.  
- **Control de plagas:** Seguimiento de plagas detectadas y tratamientos aplicados.  
- **Registro de cosechas:** Documentación de producción, calidad y fechas de cosecha.  
- **Generación de reportes:** Informes en formato **JSON** y **CSV** sobre producción, riegos y control de plagas.  
- **Análisis de eficiencia:** Métricas de producción y uso de recursos.  

---

## 🏗️ Arquitectura

El proyecto está estructurado en **4 capas principales**:

```
src/
├── presentation/          # Capa de Presentación
│   └── MenuInteractivo.ts
├── services/              # Capa de Servicios (Lógica de Negocio)
│   ├── InvernaderoService.ts
│   └── ReporteService.ts
├── repositories/          # Capa de Acceso a Datos
│   ├── InvernaderoRepository.ts
│   ├── PlantaRepository.ts
│   ├── RiegoRepository.ts
│   └── CosechaRepository.ts
└── models/                # Capa de Dominio
    ├── Planta.ts
    ├── Riego.ts
    ├── Cosecha.ts
    ├── ControlPlaga.ts
    └── enums/
        ├── TipoPlanta.ts
        ├── EstadoPlanta.ts
        ├── CalidadCosecha.ts
        └── TipoReporte.ts
```

---
