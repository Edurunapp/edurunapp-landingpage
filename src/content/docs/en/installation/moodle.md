---
title: "Moodle Configuration"
description: "External LTI tool deployment in Moodle."
---

This guide details how to install the Edurun tool in Moodle using the LTI 1.3 standard, including the dynamic registration method for automated configuration.

## Prerequisites

**Secure URL:** The tool must be deployed on a certified HTTPS address.

**Administrator Access:** Administrator permissions are required on the Moodle site to manage external tools.

**Dynamic Registration URL:** You must have the URL provided by your developer at hand (e.g., https://application.com/register).

## Step 1: Access Tool Management

1. Log in as an administrator to Moodle.
2. Go to **Site administration** > **Plugins** > **External tool** > **Manage tools**.
![Reference image 1](https://edurun.exposmart.cl/wp-content/uploads/2026/01/administrar-herramientas.png)

## Step 2: Dynamic Registration (Automatic Method)

This is the fastest method, as Moodle and Edurun will automatically exchange security keys and endpoints.

1. In the **Tool URL** field, paste the registration link provided by the developer.
   
   Example: `https://application.com/register`

2. Click the **Add LTI Advantage** button.

![Reference image 2](https://edurun.exposmart.cl/wp-content/uploads/2026/01/anadir-url-1.png)

3. A pop-up window from the Edurun tool will open confirming the connection. Click **Continue/Confirm**.

4. Moodle will display a message indicating that the tool has been configured correctly.

## Step 3: Activation and Final Configuration

Once added, the tool will appear in the list of managed tools.

**Enable:** Verify that the tool status is marked as "Active".

![Reference image 3](https://edurun.exposmart.cl/wp-content/uploads/2026/01/activar-herramienta.png)

**Privacy Settings:** Click the pencil icon (Configuration) of the newly created tool and ensure the following options are as shown in the screenshot:

- IMS LTI grading and assignment services
- IMS LTI role and name provisioning
- Tool settings
- Share username with the tool
- Accept grades from the tool
- Force SSL

![Reference image 4](https://edurun.exposmart.cl/wp-content/uploads/2026/01/ajustes-1.png)

> **Note for Developers:** If dynamic registration does not automatically register the platform on your server, contact the developer or email us at contacto@edurunapp.cl

## Step 4: Enable the Tool in the Course

Before you can add Edurun activities, you **must first activate the tool in the course**.

1. Go to the course where you want to use Edurun.

2. Go to **More** > **External LTI Tools**.

![Reference image 7](https://edurun.exposmart.cl/wp-content/uploads/2026/01/habilitar-herramienta.png)

3. Enable the Edurun tool.

![Reference image 8](https://edurun.exposmart.cl/wp-content/uploads/2026/01/habilitar.png)

## Step 5: Add an Edurun Activity

1. Turn on **Edit mode** in the course.

2. Click **Add an activity or resource**.

![Reference image 5](https://edurun.exposmart.cl/wp-content/uploads/2026/01/actividad-o-recurso.png)

3. Select **External tool**.

4. In **Preconfigured tool**, select **Edurun** from the dropdown menu.

![Reference image 6](https://edurun.exposmart.cl/wp-content/uploads/2026/01/actividad-edurun.png)

5. Click **Save and display**.

---

**Note:** Dynamic Registration eliminates the need to manually copy the Client ID and Keys between platforms, reducing human configuration errors.
