# Especificación Técnica: AI Engineering Hub & Job Applications Vault

- **ID de la Especificación:** `specs/05-ai-engineering-and-vault.md`
- **Épica Asociada:** Épica 6 (Hub de Postulaciones y Ecosistema de Conocimiento Interconectado)
- **Fecha:** 2026-09-01
- **Autor:** Christopher Pinedo & Antigravity

---

## 1. Visión y Objetivos

1. **Capa Pública (Conocimientos):** Crear el área de conocimiento `AI Engineering` para consolidar conceptos de IA moderna (`RAG`, `MCP`, `Vector DBs`, `LLM Orchestration`, `Prompt Engineering`, `Antigravity`, `Gemini`, `Claude`) integrados a la interfaz del portafolio.
2. **Capa Privada (Job Vault):** Centralizar las 13 fichas de postulaciones laborales dentro del repositorio en `src/content/jobApplications/` bajo un esquema de cifrado en tiempo de build con **AES-256-GCM y PBKDF2** usando un PIN de 6 dígitos.
3. **Módulo Web (`/postulaciones`):** Proveer un dashboard interactivo protegido por PIN con:
   - Resumen y filtros por estado de postulación (`En Evaluación`, `Entrevista`, `Postulado`).
   - Tarjeta destacada del **Speech de 30 segundos** con botón de copia rápida para llamadas de reclutadores.
   - Panel de **Calibración Salarial** y notas preparadas.
   - **Drawer Contextual de Cheat Sheet**: Al hacer clic en cualquier tecnología de la oferta, muestra su definición, cómo defenderla en la entrevista y los proyectos del portafolio que respaldan dicha experiencia.

---

## 2. Arquitectura de Cifrado (Zero-Knowledge en GitHub Pages)

```
Markdown Privado (src/content/jobApplications/*.md)
       ↓
scripts/build-data.js (PBKDF2 100k rounds + AES-GCM-256 con PIN)
       ↓
jobApplicationsEncrypted.ts (saltHex, ivHex, authTagHex, ciphertextHex)
       ↓
Navegador Web (/postulaciones)
       ↓
PinUnlockDialog.tsx (Ingreso de PIN de 6 dígitos)
       ↓
vaultCrypto.ts (window.crypto.subtle.decrypt)
       ↓
Memoria RAM / sessionStorage (Datos descifrados listos para consulta)
```

---

## 3. Componentes Implementados

1. **`src/content/technologies/`**: Fichas `rag.md`, `mcp.md`, `vectorDbs.md`, `llmOrchestration.md`, `promptEngineering.md` y reasignación de tecnologías existentes.
2. **`scripts/build-data.js`**: Procesamiento de Markdown y cifrado de postulaciones.
3. **`src/library/common/utils/vaultCrypto.ts`**: Utilidad de descifrado nativa con Web Crypto API.
4. **`src/modules/pages/jobApplicationsPage/`**:
   - `PinUnlockDialog.tsx`: Teclado numérico táctil y teclado físico.
   - `JobApplicationsList.tsx`: Buscador en tiempo real y selector de estados.
   - `JobApplicationDetail.tsx`: Speech 30s, calibración salarial y cuerpo técnico.
   - `JobTechContextDrawer.tsx`: Inspector de tecnologías y proyectos vinculados.
5. **`dashboardMainRoutes.tsx`**: Ruta `/postulaciones` en el menú principal.
