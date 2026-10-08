/** Acabado de movimiento progresivo: el contenido nunca depende de animarse. */
export function initMotion(root) {
  const styles = document.createElement('style');
  styles.dataset.umbralMotion = '';
  styles.textContent = `
    @media (prefers-reduced-motion: no-preference) {
      .service[open] > .service__body, .faq details[open] > p {
        animation: umbral-detail .28s ease-out;
      }
      .service__title, .faq summary { transition: color .2s ease; }
      .service__link .icon, .footer__up .icon { transition: translate .25s ease; }
      .button { transition: background .25s, color .25s, translate .25s; }
      .button:active { translate: 0 1px; }
      .button:focus-visible .icon { transform: translateX(4px); }
      .service__link:focus-visible .icon { translate: 3px -3px; }
      .hero__discover:focus-visible .icon { translate: 0 4px; }
      .hero__profile:focus-visible .icon, .territory__contact:focus-visible .icon { transform: translate(3px, -3px); }
      .footer__up:focus-visible .icon { translate: 0 -3px; }
      @media (hover: hover) and (pointer: fine) {
        .button:hover { translate: 0 -2px; }
        .button:active { translate: 0 1px; }
        .service__link:hover .icon { translate: 3px -3px; }
        .footer__up:hover .icon { translate: 0 -3px; }
      }
    }
    @keyframes umbral-detail {
      from { opacity: .35; transform: translateY(6px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `;
  document.head.append(styles);

  // Sin estas API, se conserva la página completamente visible y operativa.
  if (!('IntersectionObserver' in window) || !Element.prototype.animate) {
    return () => styles.remove();
  }

  const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
  const delays = new Map();
  root.querySelectorAll('.hero h1 > span').forEach((element, index) => delays.set(element, index * 90));
  root.querySelectorAll('.services__list > li').forEach((element, index) => delays.set(element, (index % 3) * 50));
  const pending = new Set(root.querySelectorAll([
    '.hero__overline', '.hero h1 > span', '.hero__description', '.hero__discover',
    '.hero__signature', '.hero__profile', '.services__intro', '.services__list > li',
    '.about__heading', '.about__portrait', '.about__copy', '.territory__inner > div',
    '.faq > div', '.contact__copy', '.consultation', '.footer__top', '.footer__wordmark',
  ].join(', ')));
  const running = new Map();
  const hasFocus = (element) => {
    const focused = document.activeElement;
    return focused && focused !== document.body &&
      (element.contains(focused) || focused.contains(element));
  };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(({ target, isIntersecting }) => {
      if (!isIntersecting || preference.matches) return;
      observer.unobserve(target);
      pending.delete(target);
      // No desvanecemos un campo o una sección que ya tiene el foco.
      if (hasFocus(target)) return;
      const animation = target.animate([
        { opacity: 0, transform: 'translateY(18px)' },
        { opacity: 1, transform: 'translateY(0)' },
      ], {
        duration: 680,
        delay: delays.get(target) ?? 0,
        easing: 'cubic-bezier(.22, 1, .36, 1)',
        fill: 'backwards',
      });
      running.set(target, animation);
      const release = () => running.delete(target);
      animation.addEventListener('finish', release, { once: true });
      animation.addEventListener('cancel', release, { once: true });
    });
  }, { rootMargin: '0px 0px 32px 0px', threshold: 0 });

  const cancelRunning = () => {
    running.forEach((animation) => animation.cancel());
    running.clear();
  };
  const syncPreference = () => {
    observer.disconnect();
    if (preference.matches) cancelRunning();
    else pending.forEach((element) => observer.observe(element));
  };
  const revealFocused = () => {
    pending.forEach((element) => {
      if (!hasFocus(element)) return;
      observer.unobserve(element);
      pending.delete(element);
    });
    running.forEach((animation, element) => {
      if (hasFocus(element)) {
        animation.cancel();
        running.delete(element);
      }
    });
  };
  preference.addEventListener('change', syncPreference);
  root.addEventListener('focusin', revealFocused);
  syncPreference();

  return () => {
    observer.disconnect();
    cancelRunning();
    preference.removeEventListener('change', syncPreference);
    root.removeEventListener('focusin', revealFocused);
    styles.remove();
  };
}
