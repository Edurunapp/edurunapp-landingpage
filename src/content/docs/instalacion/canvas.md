---
title: "Configuración en Canvas"
description: "Guía paso a paso para integrar Edurun mediante LTI 1.3 en Canvas LMS."
---

La integración con Canvas permite la sincronización automática de notas y el reconocimiento de roles (Docente/Estudiante) sin necesidad de logueo adicional.

## Prerrequisitos
* Cuenta de Administrador en Canvas.
* URL de la instancia de Edurun (`https://tu-dominio.com`).

## Pasos de Configuración

### 1. Claves de Desarrollador
1.  Vaya a **Admin** > **Claves de desarrollador**.
2.  Haga clic en **+ Clave de desarrollador** > **Clave LTI**.
3.  Complete los siguientes campos:
    * **Nombre de la clave:** `Edurun LTI`
    * **URL de redireccionamiento:** `https://api.edurun.com/lti/login`
    * **Método de selección de destino:** Manual

### 2. Configuración JSON
En el campo "LTI 1.3 Configuration", pegue el JSON proporcionado por Edurun. Asegúrese de habilitar los siguientes alcances (scopes):

```json
{
  "[https://purl.imsglobal.org/spec/lti-ags/scope/lineitem](https://purl.imsglobal.org/spec/lti-ags/scope/lineitem)",
  "[https://purl.imsglobal.org/spec/lti-ags/scope/result.readonly](https://purl.imsglobal.org/spec/lti-ags/scope/result.readonly)",
  "[https://purl.imsglobal.org/spec/lti-ags/scope/score](https://purl.imsglobal.org/spec/lti-ags/scope/score)"
}

**Nota:** Estos permisos son necesarios para que Edurun pueda enviar la calificación final al Gradebook de Canvas automáticamente.

3. Instalación a nivel de curso
Una vez guardada la clave, copie el Client ID (número encima del botón "Detalles") y úselo para instalar la App externa en el curso deseado.