---
title: "Configuración en Moodle"
description: "Despliegue de herramienta externa LTI en Moodle."
---

Edurun es compatible con Moodle versión 3.9 o superior a través del estándar LTI 1.3 Advantage.

## Configuración de Herramienta Externa

1.  Acceda como Administrador al sitio.
2.  Navegue a **Administración del sitio** > **Extensiones** > **Herramienta externa** > **Administrar herramientas**.
3.  Haga clic en **"Configurar una herramienta manualmente"**.

## Parámetros de Conexión

Complete el formulario con los siguientes datos:

| Campo | Valor |
| :--- | :--- |
| **Nombre de la herramienta** | Edurun Assessment |
| **URL de la herramienta** | `https://edurun.com/launch` |
| **Versión LTI** | LTI 1.3 |
| **Tipo de clave pública** | Keyset URL |
| **URL de inicio de sesión** | `https://api.edurun.com/auth/login` |

### Privacidad y Servicios
Despliegue la sección de "Servicios" y marque:
* [x] **IMS LTI Assignment and Grade Services:** Usar este servicio para sincronizar calificaciones y gestionar columnas.
* [x] **IMS LTI Names and Role Provisioning:** Usar este servicio para recuperar los nombres de los miembros.