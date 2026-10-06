# Web Procurador Tomás — plan de implementación

**Goal:** Crear una primera versión funcional y profesional que cubra los requisitos del ejercicio.
**Architecture:** Componentes DOM independientes; contenido del despacho centralizado; validación y preparación de WhatsApp como lógica pura. CSS dentro de cada componente, con un pequeño reset global.
**Tech Stack:** Vite 8.3.3, JavaScript, HTML, CSS, node:test.
**Spec:** `docs/superpowers/specs/2026-10-06-web-procurador.md`.

## Global Constraints
- JavaScript sin React: nombres y firmas requeridos por el documento.
- `Navbar`, `Section({ id, contenido })` y `app.append(...)`.
- Tres secciones con los textos obligatorios y en el orden solicitado.
- Cada tarea se guarda en la rama `feat/web-procurador`, basada en la configuración Vite existente.
- Datos profesionales obtenidos de la fuente; ninguna comunicación real durante las pruebas.

## Review Focus
- Móvil estrecho y texto ampliado: contenido sin desbordamiento y menú utilizable.
- Uso de teclado: foco visible, Escape y controles con nombres accesibles.
- Datos vacíos, Unicode, ampersands y mensajes largos: validación y codificación correctas.
- Edición tras preparar consulta: nunca conservar un enlace con datos antiguos.
- Requisitos académicos y contenido: firmas, textos, estilos internos y datos reales.

## Tarea 1 — contacto comprobable
- [x] Escribir pruebas para datos vacíos, límites, correo opcional, consentimiento y URL con caracteres especiales.
- [x] Ejecutarlas y comprobar fallo antes de implementar.
- [x] Implementar `validateContact(data)` y `buildWhatsAppUrl(data)` en `src/lib/contact.js`.
- [x] Ejecutar pruebas; resultado esperado: todas pasan.
- [x] Guardar documentación y lógica probada en un commit.

## Tarea 2 — componentes y diseño
- [x] Crear `index.html`, favicon y estilos globales mínimos.
- [x] Crear `navbar.js`, `section.js`, `hero.js`, `services.js`, `contact-form.js`, `footer.js` y `icons.js`.
- [x] Centralizar datos en `src/data/site.js`; componer con `src/main.js`.
- [x] Usar solo contenido estático de confianza en `Section`; datos del visitante mediante `textContent`.
- [x] Ejecutar pruebas y compilación. Verificar escritorio/móvil, menú, anclas, validación, vista previa y cambio de datos.
- [x] Guardar implementación en un commit.

## Tarea 3 — revisión y entrega
- [x] Revisar diferencias, accesibilidad básica, consola y cumplimiento del documento.
- [x] Documentar comprobaciones y cualquier limitación real en README.
- [x] Subir la rama y comprobar su sincronización. Mantener la vista previa y el código visibles para el usuario.

## Registro de verificación — 06/10/2026

- Pruebas: 7/7. Compilación final correcta. Diff sin errores de espacios.
- Navegador: escritorio 1440 px y móviles 390/320 px; sin desbordamiento, menú y Escape, anclas/foco, preguntas frecuentes y formulario comprobados.
- Revisión independiente: sin incidencias críticas, importantes ni menores confirmadas.
- Decisión: se mantiene la carpeta original en VS Code y se sube la rama de la web; integración en main y despliegue fuera de esta entrega.
- Límites comprobados: el enlace de WhatsApp se inspeccionó sin enviar mensajes; su entrega externa depende del visitante y de WhatsApp.
