# Web Procurador Tomás

## Objetivo y alcance
Rediseño académico de procuradortomas.com en Vite y JavaScript, con una presentación profesional, adaptable y accesible. El usuario ha autorizado continuar el desarrollo y subir cada unidad de trabajo en una rama. Se trabaja en la carpeta del escritorio abierta en VS Code.

## Requisitos del documento
- `src/components/navbar.js`: logo, enlaces Inicio/Servicios/Contacto, tres barras en móvil y estilos internos.
- `src/components/section.js`: función `Section({ id, contenido })`, compatible con HTML o texto.
- Tres secciones iniciales, en este orden, con los textos «Bienvenida al sitio», «Nuestros servicios destacados» y «Contacto y formulario de consulta».
- `src/main.js`: importar componentes y usar `app.append(...)`.
- Estilos internos en los componentes; estilos globales mínimos en `src/styles/estilos.css`.
- Vite para desarrollo y compilación.

## Diseño
Morado profundo, papel marfil, acentos cálidos, títulos serif y texto sans serif. Cabecera compacta, portada editorial con fotografía de la web original, servicios, información profesional y contacto. Los tres apartados obligatorios contienen el resto de bloques, sin rutas adicionales.

## Comportamiento
Menú móvil con estado accesible, cierre al navegar y Escape. Anclas visibles bajo la cabecera. Servicios con acceso al formulario y asunto preseleccionado. Preguntas frecuentes desplegables dentro de Servicios.

El formulario prepara una consulta en el WhatsApp publicado del despacho. Primero valida, muestra una vista previa local y ofrece un enlace para revisar y enviar desde WhatsApp. No envía automáticamente ni afirma que se haya enviado. Sin almacenamiento, backend ni analítica. El correo del visitante es opcional. No se solicitan documentos ni información procesal sensible.

## Contenido verificado
Fuente: https://www.procuradortomas.com/ (consultada el 06/10/2026).
Gabriel Tomás Gili; Procurador colegiado ICPIB n.º 120. Palma, Manacor e Inca; otros partidos por encargo. Teléfono 971 770 574. WhatsApp 609 649 224. Horario publicado: lunes a viernes, 8:00–19:00. Se conservan los servicios descritos en la fuente, sin inventar experiencia cuantificada, testimonios ni resultados.

Los enlaces legales remiten a la web original; no constituyen documentación jurídica nueva para publicar este prototipo. La web se identifica en el pie como proyecto académico. La publicación definitiva y la autorización sobre marca/fotografías quedan fuera de esta entrega local.
