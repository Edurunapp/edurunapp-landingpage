---
title: "Canvas Configuration"
description: "Step-by-step guide to integrate Edurun via LTI 1.3 in Canvas LMS."
---

# Edurun Installation Guide for Canvas

This guide details the technical process to install and integrate the Edurun (Edurunapp) tool in a Canvas LMS instance.

## Prerequisites

Before starting the configuration, verify compliance with the following requirements:

1.  **Deployment Status:**
    
    -   The tool must be deployed with active SSL certification (`https://`).
        
    -   There must be network connectivity between the Canvas instance and the application.
        
2.  **Source Code Access:**
    
    -   Ability to modify server configuration (platform registration file) or direct contact with the development team.
        
3.  **Canvas Permissions:**
    
    -   Account Administrator role or granular permissions to manage "Developer Keys".
        

## Part 1: Developer Key Creation

### 1. Access Configuration

1.  Log in with an **Administrator** account.
    
2.  Navigate to the **Admin** menu > Select the account.
    
3.  In the sidebar, select **Developer Keys**.

![Reference image 1](https://edurun.exposmart.cl/wp-content/uploads/2026/01/Canvas_img1.png)

### 2. Key Generation

1.  Click the **+ Developer Key** button.
    
2.  Select the **+ LTI Key** option.
    
![Reference image 2](https://edurun.exposmart.cl/wp-content/uploads/2026/01/Canvas_img2.png)

### 3. Parameter Configuration

Ensure the form is in **Manual Entry** mode.
![Reference image 3](https://edurun.exposmart.cl/wp-content/uploads/2026/01/Canvas_img3.png)

| Field | Required Value |
|---|---|
| **Key Name** |`Edurun Code-Learning`| 
| **Redirect URI** | `https://edurunapp.cl/tool` | 
| **Title** | `Edurun Code-Learning` |
|**Description** | `Edurun Platform` | 
| **URI meta link** | `https://edurunapp.cl/tool` |
|**OIDC Initiation URL**| `https://edurunapp.cl/tool/login` |
|**JWK Method**| `Public JWK URL` |
|**Public JWK URL**| `https://edurunapp.cl/tool/keys` |

![Reference image 4](https://edurun.exposmart.cl/wp-content/uploads/2026/01/Canvas_img5.png)

### 4. LTI Advantage Services Configuration

In the "LTI Advantage Services" section, expand the menu and **activate all switches**. This enables critical functionalities such as:

-   Gradebook synchronization.
    
-   Receipt of submissions and grade updates.
    
-   User context information retrieval.
    
![Reference image 5](https://edurun.exposmart.cl/wp-content/uploads/2026/01/Canvas_img6.png)

### 5. Placements Configuration

In the "Additional Settings" > "Placements" section, search and select only the following options:

-   `Course Navigation`
    
-   `Assignment Selection`
    
![Reference image 6](https://edurun.exposmart.cl/wp-content/uploads/2026/01/Canvas_img7.png)

### 6. Finalization

1.  Click **Save**.
    
2.  In the main keys list, locate the newly created key.
    
3.  Change the **State** from `OFF` to **`ON`**.
    
4.  Copy the numeric number visible in the **Details** column (above the "Show Key" button). This is your **Client ID**.

![Reference image 7](https://edurun.exposmart.cl/wp-content/uploads/2026/01/Canvas_img8.png)

## Part 2: Platform Registration in the Tool

Next, you must contact a member of the development team and provide your Client ID (obtained previously) to activate the tool within your Canvas.

In Canvas, the Client ID has a format similar to this:
```
1000000003
```

>**Note**: This process can take from 15 minutes to 24 hours, depending on the availability of our staff.

## Part 3: Course Installation

Once the global key and backend are configured, instructors or administrators can add the tool to courses.

1.  Enter the desired course in Canvas.
    
2.  Go to **Settings** in the course menu.
    
3.  Select the **Apps** tab.
    
4.  Click the **+ App** button.
    
5.  In the "Configuration Type" menu, select **By Client ID**.
    
6.  Paste the **Client ID** (e.g., `10000000000007`) obtained in Part 1.
    
7.  Click **Submit** and install the tool.
    
![Reference image 8](https://edurun.exposmart.cl/wp-content/uploads/2026/01/Canvas_img9.png)

![Reference image 9](https://edurun.exposmart.cl/wp-content/uploads/2026/01/Canvas_img10.png)

The "Edurun Code-Learning" tool will now appear in the course navigation menu.
