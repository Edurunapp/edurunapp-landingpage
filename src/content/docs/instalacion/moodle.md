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
2. Vaya a **Administración del sitio** > **Extensiones (Plugins)** > **Herramientas externas (External Tool)** > **Gestionar herramientas**.

## Paso 2: Registro Dinámico (Método Automático)

Este es el método más rápido, ya que Moodle y Edurun intercambiarán automáticamente las claves de seguridad y los endpoints.

1. En el campo **URL de la herramienta**, pegue el enlace de registro proporcionado por el desarrollador.
   
   Ejemplo: `https://aplicación.com/register`

2. Haga clic en el botón **Añadir LTI de forma dinámica**.

3. Se abrirá una ventana emergente de la herramienta Edurun confirmando la conexión. Haga clic en **Continuar/Confirmar**.

4. Moodle le mostrará un mensaje indicando que la herramienta se ha configurado correctamente.

## Paso 3: Activación y Configuración Final

Una vez agregada, la herramienta aparecerá en la lista de herramientas gestionadas.

**Habilitar:** Verifique que el estado de la herramienta esté marcado como "Activo".

**Ajustes de Privacidad:** Haga clic en el icono de engranaje (Configuración) de la herramienta recién creada y asegúrese de que las siguientes opciones estén en "Siempre":

- Compartir el nombre del lanzador con la herramienta.
- Compartir el correo electrónico del lanzador con la herramienta.
- Aceptar calificaciones de la herramienta.

## Paso 4: Registro en LTIjs (Para el Desarrollador)

Si el registro dinámico no registra automáticamente la plataforma en su servidor, el desarrollador debe añadir manualmente la instancia de Moodle en el archivo index.js de LTIjs:

```javascript
await lti.registerPlatform({
  url: 'https://tu-moodle.com', // URL base de su Moodle
  name: 'Moodle_Produccion', // Nombre a elección
  // Las siguientes variables se encuentran en "Detalles de configuración" de la herramienta en Moodle
  clientId: 'VALOR_GENERADO_POR_MOODLE',
  authenticationEndpoint: 'https://tu-moodle.com/mod/lti/auth.php',
  accesstokenEndpoint: 'https://tu-moodle.com/mod/lti/token.php',
  authConfig: { 
      method: 'JWK_SET', 
      key: 'https://tu-moodle.com/mod/lti/certs.php' 
  }
})
```

## Paso 5: Agregar la Herramienta a un Curso

1. Diríjase al curso donde desea utilizar Edurun.
2. Active el **Modo de edición**.
3. Haga clic en **Añadir una actividad o recurso**.
4. Seleccione **Herramienta externa**.
5. En **Herramienta preconfigurada**, seleccione **Edurun** del menú desplegable.
6. Haga clic en **Guardar cambios y mostrar**.

---

**Nota:** El Registro Dinámico elimina la necesidad de copiar manualmente el Client ID y las Keys entre plataformas, reduciendo errores humanos de configuración.