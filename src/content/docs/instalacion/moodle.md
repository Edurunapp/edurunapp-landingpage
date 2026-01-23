---
title: "Configuración en Moodle"
description: "Despliegue de herramienta externa LTI en Moodle."
---

Esta guía detalla cómo instalar la herramienta Edurun en Moodle utilizando el estándar LTI 1.3, incluyendo el método de registro dinámico para una configuración automatizada.

## Requisitos Previos

**URL Segura:** La herramienta debe estar desplegada en una dirección HTTPS certificada.

**Acceso de Administrador:** Se requieren permisos de Administrador en el sitio Moodle para gestionar herramientas externas.

**URL de Registro Dinámico:** Debe tener a mano la URL proporcionada por su desarrollador (ej. https://aplicación.com/register).

## Paso 1: Acceder a la Gestión de Herramientas

1. Inicie sesión como administrador en Moodle.
2. Vaya a **Administración del sitio** > **Extensiones (Plugins)** > **Herramientas externas (External Tool)** > **Administrar herramientas**.
![Imagen de referencia 1](https://edurun.exposmart.cl/wp-content/uploads/2026/01/administrar-herramientas.png)
## Paso 2: Registro Dinámico (Método Automático)

Este es el método más rápido, ya que Moodle y Edurun intercambiarán automáticamente las claves de seguridad y los endpoints.

1. En el campo **URL de la herramienta**, pegue el enlace de registro proporcionado por el desarrollador.
   
   Ejemplo: `https://aplicación.com/register`

2. Haga clic en el botón **Añadir LTI Advantage**.

![Imagen de referencia 2](https://edurun.exposmart.cl/wp-content/uploads/2026/01/anadir-url-1.png)

3. Se abrirá una ventana emergente de la herramienta Edurun confirmando la conexión. Haga clic en **Continuar/Confirmar**.

4. Moodle le mostrará un mensaje indicando que la herramienta se ha configurado correctamente.

## Paso 3: Activación y Configuración Final

Una vez agregada, la herramienta aparecerá en la lista de herramientas gestionadas.

**Habilitar:** Verifique que el estado de la herramienta esté marcado como "Activo".

![Imagen de referencia 3](https://edurun.exposmart.cl/wp-content/uploads/2026/01/activar-herramienta.png)

**Ajustes de Privacidad:** Haga clic en el icono del lápiz (Configuración) de la herramienta recién creada y asegúrese de que las siguientes opciones estén como en la captura de pantalla:

- Servicios de calificación y asignación de IMS LTI
- Aprovisionamiento de roles y nombres de IMS LTI
- Ajustes de la herramienta
- Compartir el nombre del usuario con la herramienta
- Aceptar calificaciones desde la herramienta
- Forzar SSL

![Imagen de referencia 4](https://edurun.exposmart.cl/wp-content/uploads/2026/01/ajustes-1.png)

> **Nota para Desarrolladores:** Si el registro dinámico no registra automáticamente la plataforma en su servidor, comuníquese con el desarrollador o contáctenos a contacto@edurunapp.cl

## Paso 4: Habilitar la Herramienta en el Curso

Antes de poder agregar actividades de Edurun, primero **debe activar la herramienta en el curso**.

1. Diríjase al curso donde desea utilizar Edurun.

2. Vaya a **Más** > **Herramientas Externas LTI**.

![Imagen de referencia 7](https://edurun.exposmart.cl/wp-content/uploads/2026/01/habilitar-herramienta.png)

3. Habilite la herramienta Edurun.

![Imagen de referencia 8](https://edurun.exposmart.cl/wp-content/uploads/2026/01/habilitar.png)

## Paso 5: Agregar una Actividad de Edurun

1. Active el **Modo de edición** del curso.

2. Haga clic en **Añadir una actividad o recurso**.

![Imagen de referencia 5](https://edurun.exposmart.cl/wp-content/uploads/2026/01/actividad-o-recurso.png)

3. Seleccione **Herramienta externa**.

4. En **Herramienta preconfigurada**, seleccione **Edurun** del menú desplegable.

![Imagen de referencia 6](https://edurun.exposmart.cl/wp-content/uploads/2026/01/actividad-edurun.png)

5. Haga clic en **Guardar cambios y mostrar**.

---

**Nota:** El Registro Dinámico elimina la necesidad de copiar manualmente el Client ID y las Keys entre plataformas, reduciendo errores humanos de configuración.