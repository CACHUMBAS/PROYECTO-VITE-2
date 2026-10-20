# Proyecto Vite 2 — Procurador Tomás

Rediseño académico de [procuradortomas.com](https://www.procuradortomas.com/) con **Vite y componentes JavaScript independientes**, conforme al documento `2_Proyecto_Vite_2.docx`.

Una web de una sola página con el diseño **Umbral**: portada con una balanza de justicia a toda anchura, tipografía de gran formato, tonos carbón, piedra y champán, servicios desplegables y presentación personal del procurador. Mantiene el diseño adaptable, la navegación móvil y el formulario que prepara una consulta para WhatsApp.

El [registro de recursos del rediseño](docs/recursos-redisenyo.md) documenta las decisiones, la imagen generada, su prompt, las fuentes y sus licencias.

La [revisión de Umbral](docs/revision-umbral.md) contrasta los requisitos del documento original, registra las últimas mejoras y distingue lo verificado de lo pendiente para una publicación comercial.

## Ejecutar

Entorno comprobado: Node.js **24.16.0**, npm **11.13.0** y Vite **8.3.3**.

```sh
npm ci
npm run dev
```

Abre la dirección que indique Vite. Para la entrega de producción:

```sh
npm test
npm run build
npm run preview
```

`dist/` contiene el resultado de la compilación. `node_modules/` y `dist/` están excluidos de Git. No hacen falta cuentas, tokens, servicios de pago ni variables de entorno.

## Correspondencia con el ejercicio

| Requisito | Implementación |
| --- | --- |
| Proyecto nuevo con Vite | `package.json`, `index.html`, scripts de desarrollo y compilación |
| Navbar independiente | `src/components/navbar.js`, función `Navbar()` |
| Logotipo y enlaces Inicio, Servicios, Contacto | Navegación principal con anclas `#inicio`, `#servicios`, `#contacto` |
| Hamburguesa de tres barras en móvil | Botón con tres elementos `span`, `aria-expanded` y `aria-controls` |
| Section parametrizable | `src/components/section.js`, función `Section({ id, contenido })` |
| HTML o texto como contenido | Cadenas estáticas mediante `template`; admite también nodos de otros componentes |
| «Bienvenida al sitio» | Texto visible de la portada, sección `inicio` |
| «Nuestros servicios destacados» | Título de la sección `servicios` |
| «Contacto y formulario de consulta» | Texto visible sobre el título de la sección `contacto` |
| Importación e incorporación con `app.append(...)` | `src/main.js`, orden Navbar → Inicio → Servicios → Contacto → Footer |
| Estilos internos de los componentes | Etiquetas `style` en cada componente visual, con clases específicas |
| CSS global mínimo | `src/styles/estilos.css`, reset, variables, foco y controles compartidos |
| Actualización de la web indicada | Nombre, información profesional, servicios y canales de la web original; nueva presentación visual |

Las tres secciones se agrupan en un elemento `main` tras incorporarlas, conservando el orden solicitado y dejando cabecera y pie fuera del contenido principal.

## Estructura

```text
index.html
public/favicon.svg
public/fonts/             # WOFF2 locales y licencias OFL
src/
  main.js
  assets/                 # Balanza conceptual y retrato optimizados; recursos anteriores archivados
  components/
    brand.js              # Marca tipográfica reutilizable
    navbar.js             # Navegación y menú móvil
    motion.js             # Entradas suaves y preferencias de movimiento
    section.js            # Contenedor reutilizable
    hero.js               # Portada e información profesional
    about.js              # Retrato, presentación y contacto del procurador
    services.js           # Servicios desplegables, territorio y preguntas frecuentes
    contact-form.js       # Formulario, errores y vista previa
    footer.js             # Marca, enlaces y carácter académico
    icons.js              # Iconos SVG decorativos
  data/site.js            # Datos del despacho y asuntos admitidos
  lib/contact.js          # Validación y construcción del enlace
  styles/estilos.css
tests/contact.test.js
docs/superpowers/         # Especificación y plan de trabajo
```

## Animaciones de Umbral

Entradas suaves de 680 ms al llegar a los bloques y una breve secuencia por líneas en el titular. Servicios y preguntas frecuentes incorporan una transición de apertura de 280 ms; botones y flechas responden al puntero y al foco. Los bloques se animan una sola vez por carga, sin alterar el desplazamiento del navegador.

El acabado vive en `src/components/motion.js`, con sus estilos internos, y se inicia después de montar los componentes. Usa las API del navegador, sin dependencias nuevas. Si no hay soporte, el contenido permanece visible. La preferencia de movimiento reducido se atiende al cargar y al cambiarla; al enfocar un bloque se cancela su entrada para mantenerlo legible.

Las 7 pruebas del contacto y la compilación pasan. La inspección visual de la rama de animaciones quedó pendiente en aquella sesión: la herramienta de navegador no pudo arrancar por un fallo de su entorno aislado. Las comprobaciones de navegador del apartado siguiente corresponden a las ramas anteriores.

## Funcionamiento del contacto

1. El visitante completa nombre, asunto y consulta; el correo es opcional.
2. El formulario valida los datos, muestra errores junto a los campos y dirige el foco al primer error.
3. Se muestra una vista previa local. Los datos del visitante se insertan con `textContent`, nunca como HTML.
4. El visitante pulsa **Revisar y enviar en WhatsApp** para abrir el número público del despacho y decidir si envía el mensaje allí.
5. Cualquier edición o selección de otro servicio invalida la vista previa y elimina el enlace anterior.

No hay envío automático, servidor de correo, base de datos ni almacenamiento local de consultas. Hasta abrir el enlace externo, los datos del formulario permanecen en la página. Durante las pruebas no se enviaron mensajes reales.

## Comprobaciones realizadas

- **7 pruebas automatizadas**: campos vacíos, espacios exteriores, correo opcional e incorrecto, límites, asuntos admitidos, consentimiento, codificación Unicode y símbolos, omisión del correo.
- **Compilación con Vite** correcta.
- **Navegador a 1440, 1024, 768, 390 y 320 px**: sin desbordamiento horizontal, imágenes cargadas, secciones en orden.
- **Menú móvil**: apertura, cierre al navegar, Escape y devolución del foco al botón.
- **Anclas**: destino visible debajo de la cabecera; foco en la sección tras navegar.
- **Sección activa**: el menú sigue el desplazamiento entre Inicio, Servicios y Contacto; el perfil pertenece a Servicios. No altera la URL ni mueve el foco al actualizar el indicador.
- **Perfil del procurador**: acceso desde la portada y mediante `#procurador`, fotografía completa en móvil y enlace al contacto. Se integra en Servicios y conserva los tres apartados principales.
- **Formulario**: errores y foco, asunto preseleccionado desde el servicio desplegado, vista previa válida e invalidación al editar.
- **Servicios y preguntas frecuentes**: apertura y cierre con controles nativos; seis servicios, cada uno con acceso a su consulta.
- **Consola del navegador**: sin errores durante los recorridos comprobados.
- Revisión independiente del código sin incidencias críticas o importantes.

Accesibilidad incorporada: idioma español, estructura semántica, salto al contenido, etiquetas, textos alternativos, foco visible, errores asociados a campos y respeto a la preferencia de movimiento reducido. Esto no sustituye una auditoría completa con lectores de pantalla y todos los navegadores.

## Fuentes y alcance

Datos e imágenes consultados el **6 de octubre de 2026**:

- Web original: https://www.procuradortomas.com/
- Logotipo: https://www.procuradortomas.com/img/logoTomas1.jpg
- Fotografía: https://www.procuradortomas.com/img/balanza.jpg

Los recursos originales de la primera versión se conservan como archivo, pero el rediseño actual usa una imagen conceptual generada, una nueva composición de la marca y el retrato facilitado por el usuario para presentar a Gabriel Tomás Gili. Véase el registro de recursos para la procedencia y el prompt. Los enlaces legales remiten explícitamente a la web original. Antes de una publicación comercial habría que confirmar los permisos de los recursos, actualizar la información profesional y preparar los textos legales de esa publicación. No se incluyen testimonios, cifras de experiencia ni garantías de resultados inventadas.

Esta entrega es una propuesta académica, identificada en el pie. Se ha habilitado la indexación de su publicación pública en Vercel; el formulario mantiene su funcionamiento mediante WhatsApp y no incorpora un servidor de correo.

## Git

Repositorio: https://github.com/CACHUMBAS/PROYECTO-VITE-2.git

- `main`: preparación inicial.
- `chore/configuracion-vite`: configuración del entorno.
- `feat/web-procurador`: primera versión funcional, componentes, lógica, pruebas y documentación.
- `feat/diseno-editorial`: segunda versión visual, fuentes locales e imagen conceptual optimizada; parte de la primera versión.
- `feat/seccion-procurador`: componente de presentación con el retrato aportado, imágenes adaptables y enlaces internos; parte del rediseño editorial.
- `feat/diseno-umbral`: diseño aprobado Umbral, portada inmersiva, servicios desplegables y adaptación de todos los componentes; parte de `feat/seccion-procurador`.
- `feat/pulido-umbral`: revisión frente al ejercicio, perfil y cobertura refinados, lectura en tablet, ajustes de accesibilidad y miniatura de portada optimizada.
- `fix/navegacion-activa`: corrige el indicador del menú al desplazarse sin pulsar enlaces; parte de `feat/pulido-umbral`.

- `feat/animaciones-umbral`: acabado de movimiento, foco y preferencias de accesibilidad; parte de `fix/navegacion-activa`.

Se trabaja por ramas y commits descriptivos. La rama de la web puede revisarse antes de integrarla en `main`.

## Publicación en Vercel

Proyecto existente: `procudador-toma`, equipo `cachumbas1`, conectado al repositorio de GitHub. La rama `chore/despliegue-vercel` contiene la web completa y su configuración de despliegue; parte de `feat/animaciones-umbral`.

`vercel.json` declara Vite, instalación con `npm ci`, compilación con `npm run build` y salida `dist`. No se requieren variables de entorno para esta web. La vinculación local en `.vercel/` se excluye de Git.

Los cambios en ramas distintas de la rama de producción generan vistas previas mediante la integración con GitHub. La rama `main` conserva la preparación inicial: no debe confundirse con la versión completa de esta rama. La rama `feat/publicacion-publica`, basada en `chore/despliegue-vercel`, habilita la indexación y se publica en producción de forma explícita. Los futuros cambios de las ramas de trabajo siguen generando vistas previas; actualizar producción requiere promover su despliegue o integrarlos en la rama de producción.
Dirección pública de producción: https://procudador-toma.vercel.app/

Se incluyen URL canónica, metadatos para compartir, `public/robots.txt` y `public/sitemap.xml`. La etiqueta `noindex` se ha sustituido por `index, follow` a petición del usuario. Esto permite el rastreo, pero no garantiza aparecer en Google ni una posición determinada. No se ha solicitado indexación desde Google Search Console.

## Actualización de portada — 20 de octubre de 2026

En `feat/portada-procurador-justicia`, el titular pasa a «Procurador Tomás» y el fondo muestra una balanza de justicia en bronce, generada para mantener los tonos de Umbral. Se ajusta el tamaño del nombre en móvil y se sirven dos versiones WebP de 69 KB y 22 KB. El [registro de recursos](docs/recursos-redisenyo.md) conserva procedencia, prompt y dimensiones.

Verificado: 7 pruebas, compilación Vite e inspección de portada en 320/390/768/1440 px sin desbordamiento observado. Cambio preparado en rama y vista previa; promoción a producción pendiente.
