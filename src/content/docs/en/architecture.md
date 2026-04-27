---
title: System Architecture
description: Technical description of Edurun components.
---

Edurun uses a modern microservices architecture designed for scalability and security in code evaluation.

## Component Diagram

The system consists of three main blocks interacting through **LTI 1.3**:

1. **Frontend (Vue.js)**: Reactive interface for students and teachers.
2. **Backend (FastAPI)**: Manages business logic and container orchestration.
3. **Execution Engine (Docker)**: Isolated and ephemeral environments for each code execution.

### Execution Flow

When a student submits their code:
1. The **Frontend** sends the script to the `/api/run-code/` endpoint.
2. **FastAPI** spins up a Docker container with memory and CPU limits.
3. The code executes in complete isolation (no external network access).
4. `stdout` and `stderr` are captured and returned to the browser.

> **Security Note:** Operating system libraries (`os`, `sys`) are blocked to prevent privilege escalation.
