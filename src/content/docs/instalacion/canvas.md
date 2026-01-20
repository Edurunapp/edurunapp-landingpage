---
title: "Configuración en Canvas"
description: "Guía paso a paso para integrar Edurun mediante LTI 1.3 en Canvas LMS."
---


# Guía de Instalación de Edurun en Canvas

Esta guía detalla el proceso técnico para instalar e integrar la herramienta Edurun (Edurunapp) en una instancia de Canvas LMS.

## Prerrequisitos

Antes de iniciar la configuración, verifique el cumplimiento de los siguientes requisitos:

1.  **Estado del Despliegue:**
    
    -   La herramienta debe estar desplegada con certificación SSL activa (`https://`).
        
    -   Debe existir conectividad de red entre la instancia de Canvas y la aplicación.
        
2.  **Acceso al Código Fuente:**
    
    -   Capacidad para modificar la configuración del servidor (archivo de registro de plataformas) o contacto directo con el equipo de desarrollo.
        
3.  **Permisos en Canvas:**
    
    -   Rol de Administrador de la cuenta o permisos granulares para gestionar "Claves de desarrollador" (Developer Keys).
        

## Parte 1: Creación de Clave del Desarrollador (Developer Key)

### 1. Acceso a la Configuración

1.  Inicie sesión con una cuenta de **Administrador**.
    
2.  Navegue al menú **Admin** > Seleccione la cuenta.
    
3.  En el menú lateral, seleccione **Claves de Desarrollador** (Developer Keys).

![Imagen de referencia 1](https://edurun.exposmart.cl/wp-content/uploads/2026/01/Canvas_img1.png)

### 2. Generación de la Clave

1.  Haga clic en el botón **+ Clave del desarrollador**.
    
2.  Seleccione la opción **+ Clave LTI** (LTI Key).
    
 ![Imagen de referencia 2](https://edurun.exposmart.cl/wp-content/uploads/2026/01/Canvas_img2.png)

### 3. Configuración de Parámetros

Asegúrese de que el formulario esté en modo **Entrada Manual**.
![Imagen de referencia 3](https://edurun.exposmart.cl/wp-content/uploads/2026/01/Canvas_img3.png)

| Campo | Valor Requerido |
|---|---|
| **Nombre de la clave** |`Edurun Code-Learning`| 
| **Redireccionar URI** | `https://edurunapp.cl/tool` | 
| **Título** | `Edurun Code-Learning` |
|**Descripción** | `Plataforma Edurun` | 
| **Enlace meta de URI** | `https://edurunapp.cl/tool` |
|**URL de iniciación OIDC**| `https://edurunapp.cl/tool/login` |
|**Método de JWK**| `URL pública de JWK` |
|**URL pública de JWK**| `https://edurunapp.cl/tool/keys` |

![Imagen de referencia 1](https://edurun.exposmart.cl/wp-content/uploads/2026/01/Canvas_img5.png)

### 4. Configuración de Servicios LTI (LTI Advantage)

En la sección "Servicios de ventaja de LTI", despliegue el menú y **active todos los interruptores**. Esto habilita funcionalidades críticas como:

-   Sincronización del libro de calificaciones (Gradebook).
    
-   Recepción de envíos y actualizaciones de notas.
    
-   Obtención de información de contexto del usuario.
    
![Imagen de referencia 1](https://edurun.exposmart.cl/wp-content/uploads/2026/01/Canvas_img6.png)

### 5. Configuración de Ubicaciones (Placements)

En la sección "Configuraciones adicionales" > "Ubicaciones", busque y seleccione únicamente las siguientes opciones:

-   `Course Navigation` (Navegación del curso)
    
-   `Assignment Selection` (Selección de tareas)
    
 ![Imagen de referencia 1](https://edurun.exposmart.cl/wp-content/uploads/2026/01/Canvas_img7.png)

### 6. Finalización

1.  Haga clic en **Guardar**.
    
2.  En la lista principal de claves, localice la nueva clave creada.
    
3.  Cambie el **Estado** de `OFF` a **`ON`**.
    
4.  Copie el número numérico visible en la columna **Detalles** (arriba del botón "Mostrar clave"). Este es su **ID de Cliente** (Client ID).

![Imagen de referencia 1](https://edurun.exposmart.cl/wp-content/uploads/2026/01/Canvas_img8.png)
    

## Parte 2: Registro de Plataforma en la Herramienta

A continuación debe contactar a una persona del equipo de desarrollo y entregarle su ID de cliente (Obtenido anteriormente), para activar la herramienta dentro de su Canvas.

En Canvas el ClientID o ID de cliente tiene un formato parecido a este:
```
1000000003
```

>**Nota**: Este proceso puede tardar desde 15min, hasta 24 horas, dependiendo la disponibilidad de nuestro personal.

## Parte 3: Instalación en un Curso

Una vez configurada la clave global y el backend, los instructores o administradores pueden añadir la herramienta a los cursos.

1.  Ingrese al curso deseado en Canvas.
    
2.  Vaya a **Configuración** (Settings) en el menú del curso.
    
3.  Seleccione la pestaña **Aplicaciones** (Apps).
    
4.  Haga clic en el botón **+ Aplicación** (+ App).
    
5.  En el menú "Tipo de configuración", seleccione **Por identificación del cliente** (By Client ID).
    
6.  Pegue el **ID de Cliente** (ej. `10000000000007`) obtenido en la Parte 1.
    
7.  Haga clic en **Entregar** e instale la herramienta.
    
![Imagen de referencia 1](https://edurun.exposmart.cl/wp-content/uploads/2026/01/Canvas_img9.png)

![Imagen de referencia 1](https://edurun.exposmart.cl/wp-content/uploads/2026/01/Canvas_img10.png)

La herramienta "Edurun Code-Learning" aparecerá ahora en el menú de navegación del curso.
<!--stackedit_data:
eyJoaXN0b3J5IjpbNTI2NTMzODc0LDE2ODcyNjQ0MTRdfQ==
-->
