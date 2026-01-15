---
title: Arquitectura del Sistema
description: Descripción técnica de los componentes de Edurun.
---

Edurun utiliza una arquitectura de microservicios moderna diseñada para la escalabilidad y la seguridad en la evaluación de código.

## Diagrama de Componentes

El sistema se compone de tres bloques principales interactuando a través de **LTI 1.3**:

1. **Frontend (Vue.js)**: Interfaz reactiva para estudiantes y docentes.
2. **Backend (FastAPI)**: Gestiona la lógica de negocio y la orquestación de contenedores.
3. **Motor de Ejecución (Docker)**: Entornos aislados y efímeros para cada ejecución de código.

### Flujo de Ejecución

Cuando un estudiante envía su código:
1. El **Frontend** envía el script al endpoint `/api/run-code/`.
2. **FastAPI** levanta un contenedor Docker con límites de memoria y CPU.
3. El código se ejecuta en aislamiento total (sin acceso a red externa).
4. Se capturan `stdout` y `stderr` y se devuelven al navegador.

> **Nota de Seguridad:** Se bloquean librerías del sistema operativo (`os`, `sys`) para evitar escalada de privilegios.