# Revisión de Umbral — Procurador Tomás

Fecha: 7 de octubre de 2026. Revisión inicial: `feat/pulido-umbral`, basada en `703d074` (`feat/diseno-umbral`). Seguimiento: `fix/navegacion-activa`, basada en `03785cd`.

## Resultado

La implementación cubre los requisitos explícitos de `2_Proyecto_Vite_2.docx`. El documento incluye un enunciado y una posible solución, pero no una rúbrica con puntuaciones: esta revisión acredita requisitos; no garantiza una nota.

La propuesta funciona como entrega académica local. Se ha pulido la presentación interior y comprobado su comportamiento en el navegador integrado. La publicación comercial sigue pendiente de aprobación del contenido definitivo, textos legales y configuración del dominio y alojamiento.

## Correspondencia con el documento

| Requisito explícito | Evidencia | Resultado |
| --- | --- | --- |
| Proyecto con Vite | `package.json`, scripts `dev`, `build` y `preview`; compilación correcta | Cumplido |
| Navbar independiente | `src/components/navbar.js`, función `Navbar()` | Cumplido |
| Logo y enlaces Inicio, Servicios y Contacto | `Brand()` y anclas de la navegación principal | Cumplido |
| Menú móvil de tres barras | Tres `span` en un botón con nombre accesible, estado y control asociado | Cumplido |
| Estilos internos en Navbar | Etiqueta `style` dentro del componente | Cumplido |
| Section independiente | `src/components/section.js`, `Section({ id, contenido })` | Cumplido |
| Identificador único y contenido HTML o texto | `id` y conversión de cadenas estáticas mediante `template`; también admite nodos DOM | Cumplido |
| «Bienvenida al sitio» | Texto visible de `inicio` | Cumplido |
| «Nuestros servicios destacados» | Encabezado de `servicios` | Cumplido |
| «Contacto y formulario de consulta» | Texto visible de `contacto` | Cumplido |
| Importaciones en main.js | Importaciones de Navbar, Section y componentes de contenido | Cumplido |
| Incorporación ordenada con app.append(...) | Navbar → Inicio → Servicios → Contacto → Footer; los tres apartados se agrupan después en `main` | Cumplido |
| CSS interno y global mínimo | Estilos por componente; `estilos.css` contiene fuentes, variables y reglas compartidas | Cumplido |
| Actualizar procuradortomas.com mediante Vite y componentes | Datos del despacho, seis servicios, perfil y canales de contacto en componentes JavaScript | Cumplido |

La estructura sugerida por la «Posible SOLUCIÓN» se interpreta como ejemplo. No se añade un `vite.config.js` vacío: este proyecto utiliza la configuración predeterminada de Vite.

## Mejoras de esta rama

- **Perfil:** nombre con mayor presencia, retrato completo con borde desplazado y datos profesionales organizados en una lista de definiciones. Una columna hasta 900 px para evitar texto y fotografía demasiado estrechos.
- **Cobertura:** encabezado semántico «Mallorca. De cerca.», lista legible de Palma, Manacor e Inca y acceso «Consultar una actuación», que selecciona el asunto «Consulta general».
- **Preguntas frecuentes:** cuarta respuesta sobre cómo se prepara y envía una consulta; signos de apertura decorativos ocultos a la tecnología de asistencia.
- **Contacto:** explicación visual de los dos pasos, controles de 16 px y bordes más contrastados. La validación, revisión local e invalidación al editar se conservan.
- **Interacción:** enlaces legales con área de al menos 44 px de altura y contención del desplazamiento dentro del menú móvil.
- **Recursos:** miniatura de portada de 160 × 156 px y 5.286 bytes, frente a los 49.820 bytes del recurso anterior. La reducción de este archivo es del 89,4 %; no representa una reducción equivalente del tiempo total de carga.

## Comprobaciones realizadas

| Área | Evidencia |
| --- | --- |
| Lógica del contacto | 7 pruebas automatizadas pasan, sin fallos |
| Compilación | Vite genera `dist/` correctamente |
| Diseño adaptable | 1440, 1024, 768, 390 y 320 px; sin desbordamiento horizontal en el documento |
| Perfil y contacto en tablet | Una columna a 768 px; distribución en dos columnas a 1024 px |
| Retrato | Imagen cargada, proporción conservada; encuadre completo en móvil |
| Navegación móvil | Apertura, Escape, retorno del foco y cierre al navegar |
| Anclas | Perfil visible bajo la cabecera fija; foco en el destino |
| Nueva consulta desde cobertura | Asunto «Consulta general» seleccionado y navegación a Contacto |
| FAQ | Nueva respuesta abierta con Enter mediante control nativo |
| Formulario | Errores asociados a campos, foco en el primer error, consulta válida preparada, enlace codificado e invalidación al editar |
| Envíos externos | No se enviaron mensajes al despacho |
| Revisión independiente | Sin incidencias materiales en los cambios contra `703d074` |

Los bordes de los campos (`#81796a` sobre `#f1eee6`) tienen un contraste calculado de aproximadamente 3,71:1. Se mantienen etiquetas, nombres accesibles, alternativas de imagen, iconos decorativos ocultos y reglas para movimiento reducido.

La revisión toma como referencia las [Web Interface Guidelines de Vercel](https://raw.githubusercontent.com/vercel-labs/web-interface-guidelines/main/command.md). Se han aplicado las indicaciones pertinentes a esta web estática; no constituye una certificación completa de accesibilidad.

## Rendimiento: alcance de la medición

Se han comprobado tamaños de compilación y recursos locales. Tras la corrección de navegación, el JavaScript compilado ocupa aproximadamente 12,95 KB comprimido con gzip y el CSS compartido 1,04 KB. Los estilos internos de los componentes se incluyen en el JavaScript. No se han añadido dependencias de producción.

No se ha medido Lighthouse ni Core Web Vitals con una red y dispositivo reales. Tampoco se ha realizado una auditoría completa con lectores de pantalla, Safari o Firefox. Estas comprobaciones quedan como verificación adicional antes de una publicación definitiva.

## Seguimiento: navegación activa

Se reprodujo un fallo: al llegar al formulario mediante desplazamiento, sin pulsar un enlace de navegación, el menú seguía marcando «Inicio». Solo se actualizaba con los cambios del fragmento de la URL.

Ahora `Navbar()` observa las tres secciones principales y actualiza `aria-current` al pasar por una línea situada bajo la cabecera fija. El perfil sigue perteneciendo a Servicios. La posición de observación se recalcula al redimensionar y el desplazamiento no modifica la URL, el historial ni el foco.

Comprobaciones específicas de `fix/navegacion-activa`:

- Llegar al formulario sin ancla activa Contacto; volver al perfil activa Servicios y regresar a la portada activa Inicio.
- El enlace `#procurador` sigue llevando al perfil y marca Servicios.
- La navegación a Contacto funciona a 320 px; el menú se cierra al elegir el destino y Escape devuelve el foco al botón.
- El cambio entre 320 y 1440 px conserva el funcionamiento; no se detectó desbordamiento horizontal a 320 px.
- Las 7 pruebas del contacto y la compilación vuelven a pasar. La comprobación específica del menú se hizo en el navegador.
- Revisión independiente del cambio contra `03785cd`: sin incidencias materiales.

## Acabado de movimiento — 8 de octubre de 2026

Rama `feat/animaciones-umbral`, basada en `64a5713`. Se incorpora `src/components/motion.js` y su inicialización en `main.js`.

- Entradas de 680 ms mediante opacidad y desplazamiento de 18 px; líneas del titular separadas por 90 ms. Cada bloque se anima una sola vez por carga.
- Observación 32 px antes de entrar en pantalla para iniciar la transición antes de que aparezca el borde del bloque.
- Apertura breve de los servicios y las preguntas frecuentes, y respuesta de botones y flechas al puntero o al foco.
- Sin ocultación permanente por CSS: la ausencia de soporte deja el contenido visible. Se cancelan las entradas al enfocar el contenido o al activar movimiento reducido; se desconectan observadores y eventos al desmontar.
- Sin dependencias nuevas. Compilación: JavaScript de aproximadamente 13,92 KB gzip y CSS compartido de 1,04 KB gzip.
- Pasan las 7 pruebas del contacto, la comprobación de sintaxis y la compilación de Vite.

La comprobación visual de las animaciones no se ha podido realizar: la herramienta de navegador falla al iniciar por un problema de su entorno aislado. No se atribuyen a esta rama las pruebas visuales de las revisiones anteriores. La página queda disponible localmente para revisar el acabado.

## Pendiente para una publicación comercial

1. Confirmar con el despacho el contenido profesional definitivo y el uso comercial de los recursos.
2. Preparar los textos legales correspondientes a la publicación y sus canales de contacto reales; los enlaces actuales se identifican como pertenecientes a la web original.
3. Decidir si el contacto definitivo se mantiene en WhatsApp o se incorpora recepción por correo con un servicio real.
4. Configurar dominio, alojamiento y HTTPS; sustituir la identificación académica y revisar la indexación en esa fase.
5. Realizar las comprobaciones adicionales de navegadores, lectores de pantalla y rendimiento sobre el sitio publicado.

No se han contratado servicios, desplegado el sitio ni inventado datos del despacho. Se conservan el pie académico y `noindex`.
