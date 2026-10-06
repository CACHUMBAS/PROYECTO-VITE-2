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
