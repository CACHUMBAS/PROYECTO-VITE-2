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
    .page-section:focus { outline: none; }
    .section-inner { max-width: 1240px; margin-inline: auto; padding-inline: 32px; }
    .section-heading { font-family: var(--serif); color: var(--purple); font-weight: 400; line-height: 1.12; font-size: clamp(32px, 4vw, 48px); letter-spacing: -.035em; }
    @media (max-width: 760px) { .section-inner { padding-inline: 22px; } }
  `;
  section.append(styles);
  if (typeof contenido === 'string') {
    const template = document.createElement('template');
    // Solo se admite HTML del proyecto; nunca texto procedente del formulario.
    template.innerHTML = contenido;
    section.append(template.content.cloneNode(true));
  } else {
    section.append(contenido);
  }
  return section;
}
