/** Contenido admite texto/HTML estático de confianza o un nodo DOM. */
export function Section({ id, contenido }) {
  const section = document.createElement('section');
  section.id = id;
  section.className = 'page-section';
  section.tabIndex = -1;
  section.setAttribute('aria-labelledby', `${id}-title`);
  const styles = document.createElement('style');
  styles.textContent = `
    .page-section { scroll-margin-top: 0; }
    .page-section:focus-visible { outline: 2px solid var(--accent); outline-offset: -2px; }
    .section-inner { max-width: 1440px; margin-inline: auto; padding-inline: 64px; }
    .section-heading { font-family: var(--serif); font-weight: 400; color: var(--ink); font-size: clamp(44px, 5.2vw, 72px); line-height: 1.02; letter-spacing: -.045em; }
    @media (max-width: 1100px) { .section-inner { padding-inline: 38px; } }
    @media (max-width: 760px) { .section-inner { padding-inline: 24px; } }
  `;
  section.append(styles);
  if (typeof contenido === 'string') {
    const template = document.createElement('template');
    // Solo contenido del proyecto; los datos del formulario se insertan como texto.
    template.innerHTML = contenido;
    section.append(template.content.cloneNode(true));
  } else section.append(contenido);
  return section;
}
