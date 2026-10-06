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
- [ ] Escribir pruebas para datos vacíos, límites, correo opcional, consentimiento y URL con caracteres especiales.
- [ ] Ejecutarlas y comprobar fallo antes de implementar.
- [ ] Implementar `validateContact(data)` y `buildWhatsAppUrl(data)` en `src/lib/contact.js`.
- [ ] Ejecutar pruebas; resultado esperado: todas pasan.
- [ ] Guardar documentación y lógica probada en un commit.

## Tarea 2 — componentes y diseño
- [ ] Crear `index.html`, favicon y estilos globales mínimos.
- [ ] Crear `navbar.js`, `section.js`, `hero.js`, `services.js`, `contact-form.js`, `footer.js` y `icons.js`.
- [ ] Centralizar datos en `src/data/site.js`; componer con `src/main.js`.
- [ ] Usar solo contenido estático de confianza en `Section`; datos del visitante mediante `textContent`.
- [ ] Ejecutar pruebas y compilación. Verificar escritorio/móvil, menú, anclas, validación, vista previa y cambio de datos.
- [ ] Guardar implementación en un commit.

## Tarea 3 — revisión y entrega
- [ ] Revisar diferencias, accesibilidad básica, consola y cumplimiento del documento.
- [ ] Documentar comprobaciones y cualquier limitación real en README.
- [ ] Subir la rama y comprobar su sincronización. Mantener la vista previa y el código visibles para el usuario.
