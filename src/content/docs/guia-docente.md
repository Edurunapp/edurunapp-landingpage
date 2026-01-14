--- 
title: Manual del Docente
description: Manual para el uso de la plataforma Edurun orientado a Docentes.
---


# Manual del Docente: Gestión y Evaluación en Edurun

## 1. Descripción General

**Edurun** es una plataforma de evaluación en línea para programación en Python, diseñada para integrarse nativamente con LMS como Canvas. Permite crear ejercicios con corrección automática mediante tests unitarios y monitorear la integridad académica de los estudiantes a través de reportes de trazabilidad detallados.


----------

## 2. Acceso y Roles

El acceso a la plataforma se realiza directamente desde Canvas, eliminando la necesidad de crear cuentas adicionales.

-   **Autenticación:** Al ingresar desde el curso en Canvas, Edurun detecta automáticamente su rol de **Docente**.
    
-   **Vista de Gestión:** A diferencia de los estudiantes, los docentes acceden a un panel de control para crear, editar y revisar actividades como "Tareas" o "Evaluaciones".
    

----------

## 3. Tipos de Actividades

Edurun permite gestionar dos tipos de actividades diferenciadas4:
| **Tipo** | **Descripción** | **Uso Recomendado** |
|:------------:|:------------:|:------------:|
| **Tarea**    | Actividad  disponible con tests unitarios. No es evaluada con nota al libro de calificaciones.    | Práctica formativa y ejercicios de clase    |
| **Evaluación**    | Actividad calificada. Incluye **medidas anti-plagio** (bloqueo de copia, pantalla completa) y reporte de trazabilidad.    |Pruebas solemnes, controles y exámenes. |

----------

## 4. Creación de Evaluaciones

Para crear una nueva actividad, diríjase al "Panel de Actividades" en Edurun y seleccione "Crear Actividad". Deberá configurar los siguientes parámetros:

1.  ### Información General:
    
    -   **Tipo de Actividad:** Seleccione "Tarea" o "Evaluación".
        
    -   **Título:** Nombre del ejercicio.
        
    -   **Descripción/Enunciado:** Instrucciones detalladas para el estudiante.
        
        
2.  ### Configuración de Tests Unitarios (Python):
    
    Debe definir los casos de prueba que validarán automáticamente el código del estudiante. Edurun ejecuta estos tests cada vez que el alumno envía su solución.
    
    _Ejemplo de estructura de test en el editor:_
    
    Python
    
    ```
    def test_suma_basica():
        """Prueba básica de la función suma"""
        assert suma(2, 3) == 5
        assert suma(-1, 1) == 0
    
    ```
    
    > **Nota:** El sistema calculará la calificación basándose en el porcentaje de tests aprobados.
    > **Nota:** Un instructivo mas detallado se encuentra dentro de la aplicacion, en el apartado de Actividades > Crear Actividad > Test Unitarios.
 
----------

## 5. Publicación en Canvas (Vinculación)

Una vez creada la evaluación en Edurun, debe vincularla a una tarea de Canvas para que los estudiantes puedan acceder y para que la nota se sincronice.

1.  Cree una nueva "Tarea" en Canvas.
    
2.  En el campo **"Tipo de entrega"**, seleccione **"Herramienta Externa"**.

4. Asegúrese que la calificación sea por **Puntos**, con un máximo de **100**   
    
5.  Busque y seleccione **Edurun**.
    
6.  Aparecerá una ventana emergente con la lista de sus evaluaciones creadas en Edurun. Haga clic en **"Seleccionar"** sobre la evaluación correspondiente.
    
7.  Guarde y publique la tarea en Canvas.
    

> **Importante:** Solo los estudiantes matriculados en el curso específico de Canvas podrán acceder a la evaluación vinculada.

----------

## 6. Integridad Académica y Trazabilidad

Edurun incluye un módulo avanzado para detectar comportamientos deshonestos y verificar la autoría del código.

### Medidas de Seguridad Automáticas

-   **Bloqueo de Portapapeles:** Los estudiantes no pueden copiar, cortar ni pegar código dentro del editor.
    
    
-   **Control de Pantalla Completa:** La evaluación exige estar en pantalla completa. Si el estudiante sale de este modo (ej. `Alt+Tab`, `Esc`), la prueba se **invalida automáticamente con nota 0** y se registra el incidente.
    

### Reporte de Trazabilidad (SpeedGrader)

Al revisar una entrega a través de SpeedGrader en Canvas, usted visualizará el **Reporte de Trazabilidad**, el cual incluye:

-	**Resultados:** El porcentaje de test-unitarios completados

-   **Código Enviado:** El script final entregado por el alumno.
    
-   **Métricas de Esfuerzo:**
    
    -   _Ejecuciones de código:_ Cuántas veces probó su código manualmente.
        
    -   _Ejecuciones de tests:_ Cuántas veces intentó enviar la solución.
        
    -   _Tiempo Total:_ Duración efectiva del desarrollo.
        
-   **Actividades Sospechosas:**
    
    -   Intentos de copiar, cortar o pegar contenido, que fueron bloqueados.
        
    -   Pérdida de foco (veces que cambió de ventana o pestaña).
        
    -   Tiempo fuera de la evaluación (segundos acumulados en otras ventana).
        
    -   Alertas de salida de pantalla completa (EVALUACIÓN INVALIDADA).

>**Nota:** Es posible que un estudiante tenga 100% en el apartado "Resultados", a pesar que haya hecho trampa, pero aun asi sera calificado con 0, esto esta pensado asi para darle la informacion suficiente al docente para cambiar la nota del estudiante si asi lo considera.
----------

## 7. Calificaciones

-   **Sincronización Automática:** Al finalizar el estudiante su intento, la nota (0 a 100) se envía automáticamente al libro de calificaciones de Canvas.
    
-   **Retroalimentación:** Puede utilizar las herramientas nativas de SpeedGrader para dejar comentarios cualitativos adicionales sobre la entrega.
<!--stackedit_data:
eyJoaXN0b3J5IjpbNTI2NzcxMzE1LC0zMTExMjkwMTAsLTE0MT
k0MzA0NzNdfQ==
-->