# Recursos del rediseño editorial

Rama: `feat/diseno-editorial`, basada en `feat/web-procurador`.

El objetivo es dar a la propuesta una identidad mediterránea y editorial que pueda presentarse a un cliente, manteniendo los requisitos académicos y el funcionamiento validado. La composición cambia, pero se conservan Vite, los tres apartados, los componentes y el formulario de WhatsApp.

## Dirección visual

- Marfil, morado profundo y tonos de piedra.
- Titulares amplios con Cormorant y texto con Manrope.
- Marca tipográfica propia de la propuesta, con el nombre existente y un símbolo SVG.
- Portada arquitectónica; servicios en filas; presentación personal y ámbito territorial; contacto con contraste y pie tipográfico.
- Animación breve de entrada de la imagen y respuestas discretas al pasar el puntero. Se respeta `prefers-reduced-motion`.
- Los estilos visuales permanecen dentro de sus componentes. No se han añadido dependencias de producción.

## Imagen conceptual

Creada con la herramienta integrada **image_gen** el 6 de octubre de 2026. No se utilizó la API mediante CLI. Es una composición arquitectónica ficticia, no una fotografía del despacho ni de un juzgado identificado. Se indica tanto en el texto alternativo como en el pie visible de la imagen.

Archivos incorporados al proyecto:

- `src/assets/arquitectura-mediterranea.webp`: 1200 × 800, 125 652 bytes.
- `src/assets/arquitectura-mediterranea-720.webp`: 720 × 480, 43 660 bytes.

Son versiones redimensionadas y comprimidas de la misma imagen, con `srcset` y dimensiones explícitas. El original generado se conserva fuera del repositorio. El logotipo y la fotografía de la primera versión permanecen archivados en `src/assets`, pero ya no se cargan en la interfaz.

Prompt utilizado:

> Use case: photorealistic-natural. Asset type: editorial architectural photograph for an elegant Spanish legal representative's website, Mediterranean Mallorca design direction. Create ONE beautiful high-end architectural image, landscape 3:2. A restrained quiet sunlit Mediterranean limestone colonnade or loggia: very tall warm ivory stone arches receding in perspective toward the right, sandy textured stone walls, crisp diagonal afternoon shadows, a sliver of muted olive foliage far outside at the right, pale limestone floor. Camera facing a massive single arch at left foreground then a rhythmic series of narrower arches receding at right; refined proportions, subtle real natural stone imperfections. Contemporary architectural magazine photography, 35mm lens, photorealistic, natural warm light and deep shadow, understated prestige, calm precise composition, exceptionally beautiful light. Rich cream and sand tones, dark warm shadows, no saturation, no orange filters. This is a conceptual architectural setting, not any identifiable real office or courthouse. No people, no furniture, no law scales, no books, no text, no letters, no logos, no watermark. Image should be visually strong when cropped into a tall portrait on the right side of a website hero, keeping the primary arch readable in center. No layout/mockup, only the photograph.

## Retrato del procurador

Añadido en la rama `feat/seccion-procurador`, basada en `feat/diseno-editorial`. El usuario facilitó `procuradottomas.png` el 6 de octubre de 2026 para presentar al dueño del despacho, Gabriel Tomás Gili. El archivo aportado mide 1271 × 1237 píxeles.

- `src/assets/gabriel-tomas-gili.webp`: 1100 × 1071, 126 112 bytes.
- `src/assets/gabriel-tomas-gili-600.webp`: 600 × 584, 49 820 bytes.

Se ha redimensionado y comprimido la imagen, conservando su encuadre y apariencia. No se ha realizado retoque generativo. El original permanece intacto en Descargas. El navegador elige la versión mediante `srcset`; se incluyen dimensiones, texto alternativo y carga diferida.

El componente independiente `About()` contiene la presentación, el número de colegiado ya recogido en los datos del proyecto y los accesos al formulario y al teléfono. Se incorpora dentro de Servicios, tras las seis prestaciones, para conservar los tres apartados principales exigidos por el ejercicio. La portada enlaza a `#procurador` y la navegación identifica ese destino como parte de Servicios.

Verificado a 320, 390, 768 y 1440 píxeles: sin desbordamiento horizontal, retrato cargado y proporcionado; enlaces al perfil y al contacto con foco en su destino. No se han añadido datos biográficos ni testimonios.

## Tipografías locales

Las fuentes se sirven desde `public/fonts` y no requieren conectar con Google Fonts durante la visita. Tres archivos WOFF2 suman 101 736 bytes. Las variantes regulares principales se precargan y todas usan `font-display: swap`.

- **Cormorant Garamond**, normal e italic, pesos 400–600. [Fuente y licencia oficial](https://github.com/google/fonts/tree/main/ofl/cormorantgaramond). Licencia conservada en `public/fonts/CormorantGaramond-OFL.txt`.
- **Manrope**, pesos 400–700. [Fuente y licencia oficial](https://github.com/google/fonts/tree/main/ofl/manrope). Licencia conservada en `public/fonts/Manrope-OFL.txt`.

Se han incluido los subconjuntos latinos, que cubren los textos españoles de la interfaz; los caracteres no incluidos utilizan la fuente de respaldo del sistema. No se han modificado las fuentes.

## Verificación del rediseño

- Anchuras de 320, 390, 768, 1024 y 1440 píxeles: sin desbordamiento horizontal en los recorridos comprobados.
- Menú móvil: apertura, Escape y cierre al navegar; foco en la sección de destino.
- Servicios: selección del asunto en el formulario.
- Formulario: errores visibles, foco en el primer error, consulta preparada, enlace codificado e invalidación al editar.
- Preguntas frecuentes y enlaces internos operativos; consola sin errores en los recorridos comprobados.
- Suite de validación y compilación con Vite comprobadas. No se han enviado mensajes al despacho.

La venta o presentación de esta propuesta no equivale a una publicación definitiva. El sitio conserva su identificación académica y `noindex`; la publicación con dominio, los textos definitivos y los datos aprobados por el cliente se prepararían en una fase posterior.


## Evolución al diseño Umbral

Rama `feat/diseno-umbral`, basada en `feat/seccion-procurador`. Concepto elegido expresamente por el usuario el 6 de octubre de 2026, tras comparar dos propuestas interactivas.

- Portada a toda anchura con la arquitectura conceptual existente, superposición oscura y titular «Que nada quede al azar.».
- Cabecera fija con marca tipográfica, enlaces académicos y teléfono. La portada reserva su altura y las anclas tienen margen de desplazamiento.
- Paleta carbón verdoso `#1e241f`, papel `#f1eee6`, champán `#d8bf8c` y acento oscuro `#726449` para textos sobre fondos claros.
- Los seis servicios se muestran con `details` y `summary` nativos. El primero está abierto inicialmente; cada uno conserva su enlace con preselección del asunto en el formulario.
- Perfil, territorio, preguntas frecuentes, contacto, pie e icono de pestaña siguen la misma dirección visual. Textos de apoyo y controles tienen mayor tamaño.
- Se conservan las imágenes y fuentes locales, el retrato sin retoque, el formulario validado y los tres apartados principales del ejercicio. No se añaden bibliotecas ni servicios externos.
- La animación de entrada es breve y las transiciones respetan la preferencia de movimiento reducido. La imagen conceptual sigue identificada de forma visible.

La maqueta usada para decidir el diseño no forma parte de la aplicación. El sitio mantiene componentes JavaScript independientes y CSS interno conforme al ejercicio.


## Pulido y revisión de Umbral — 7 de octubre de 2026

La rama `feat/pulido-umbral` conserva la dirección aprobada y mejora el perfil, la cobertura y la lectura del formulario. El informe `docs/revision-umbral.md` registra las pruebas y la correspondencia con el enunciado.

Se incorpora `src/assets/gabriel-tomas-gili-mini.webp`, 160 × 156 px y 5.286 bytes, exclusivamente para la pequeña tarjeta de portada. Procede del retrato ya facilitado: solo se ha redimensionado y comprimido mediante la biblioteca disponible en el entorno, sin retoque generativo ni instalación de dependencias en el proyecto. Las imágenes de 600 y 1100 px permanecen para la sección del procurador.


## Portada con balanza de justicia — 20 de octubre de 2026

Rama `feat/portada-procurador-justicia`, desde `29f20a7` (`feat/publicacion-publica`). Cambio solicitado por el usuario: sustituir «Que nada quede al azar.» por «Procurador Tomás» y utilizar un fondo profesional relacionado con la justicia. Se conserva Umbral, el retrato y los componentes existentes.

Nueva imagen conceptual generada con la herramienta integrada **image_gen**. No representa el despacho ni un juzgado real. Se mantienen un texto alternativo descriptivo y la indicación visible «Balanza de justicia · Imagen conceptual». No se utiliza la API por CLI ni se instalan dependencias. El original generado permanece fuera de Git; las versiones del sitio están dentro del proyecto:

- `src/assets/balanza-justicia.webp`: 1536 × 1024, 69 064 bytes.
- `src/assets/balanza-justicia-720.webp`: 720 × 480, 22 260 bytes.

Conversión WebP mediante Sharp ya disponible en el entorno, sin alterar el contenido de la imagen. `srcset`, dimensiones explícitas y prioridad de carga alta. El nombre se compone en dos líneas con tamaño adaptable; se conserva el movimiento reducido existente.

Prompt exacto:

> Use case: photorealistic-natural. Asset type: full-width hero background photograph for Procurador Tomás, an elegant Spanish legal representative's website, existing Umbral art direction in charcoal green, warm stone and restrained champagne bronze. Create ONE wide landscape image, aspect ratio 3:2, high-resolution 1536x1024 or larger. Scene: a quiet, refined legal office, dark green-charcoal plaster wall, subtle out-of-focus stone architectural recess at the far right and a dark walnut desk. Main subject: one beautifully crafted professional bronze balance of justice, structurally accurate with two symmetrical shallow circular pans suspended by fine chains from the ends of a level horizontal beam, a slender central support and stable bronze base. The full balance is visible and upright, occupying the right half of the frame, centered around x=72%, leaving the left 48% as clean dark negative space for website text which will be added in HTML. Balance from y=18% to y=85% with breathing room above and below. One softly blurred closed leather legal volume may rest on the desk; no readable titles. Style: premium editorial still-life photography, tactile subtly aged bronze, sophisticated quiet authority, natural soft directional window light from upper right, luminous metal edges and rich shadows, realistic optical depth, no glowing digital effects. Palette: muted bronze/champagne, dark desaturated olive-charcoal, walnut, ivory light. Do not include people, gavels, courtroom insignia, emblems, flags, lettering, typography, logos, watermarks, borders or website interface. This is a conceptual symbolic scene, not a photograph of an identified office or real court. Only the photograph; not a mockup.

Validación: 7/7 pruebas existentes y `npm run build` correctos. Portada inspeccionada en 320, 390, 768 y 1440 px; titular dentro del ancho, fondo cargado y sin desbordamiento horizontal observado. Capturas de móvil y escritorio revisadas; registro de errores del navegador vacío durante esta comprobación. No se han enviado consultas reales. La rama de trabajo genera una vista previa por GitHub; este cambio aún no está promovido a producción.
