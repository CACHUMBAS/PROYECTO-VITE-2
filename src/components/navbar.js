import { site } from '../data/site.js';
import { icon } from './icons.js';
import logo from '../assets/logo-original.jpg';

export function Navbar() {
  const header = document.createElement('header');
  header.className = 'site-header';
  header.innerHTML = `
    <style>
      .site-header { position: sticky; top: 0; z-index: 20; background: rgba(250,249,246,.98); border-bottom: 1px solid var(--line); }
      .navbar { max-width: 1240px; min-height: 92px; margin: auto; padding: 15px 32px; display: flex; align-items: center; gap: 32px; }
      .navbar__brand { flex-shrink: 0; }
      .navbar__brand img { width: 184px; height: auto; mix-blend-mode: multiply; }
      .navbar__links { display: flex; align-items: center; gap: 34px; margin-left: auto; }
      .navbar__links > a { position: relative; padding: 14px 0; font-size: 13px; text-decoration: none; color: var(--muted); }
      .navbar__links > a:hover, .navbar__links > a[aria-current] { color: var(--purple); }
      .navbar__links > a[aria-current]::after { content: ''; position: absolute; bottom: 6px; left: 0; right: 0; height: 2px; background: var(--purple-light); }
      .navbar__phone { min-height: 44px; padding: 10px 16px; margin-left: 20px; font-size: 12px; }
      .navbar__toggle { display: none; width: 46px; height: 46px; padding: 12px; border: 1px solid var(--line); border-radius: 4px; background: transparent; color: var(--purple); }
      .navbar__toggle span { display: block; height: 2px; background: currentColor; margin: 4px 0; transition: transform .2s, opacity .2s; }
      .navbar__toggle[aria-expanded='true'] span:nth-child(1) { transform: translateY(6px) rotate(45deg); }
      .navbar__toggle[aria-expanded='true'] span:nth-child(2) { opacity: 0; }
      .navbar__toggle[aria-expanded='true'] span:nth-child(3) { transform: translateY(-6px) rotate(-45deg); }
      @media (max-width: 760px) {
        .navbar { min-height: 78px; padding: 12px 22px; justify-content: space-between; gap: 18px; }
        .navbar__brand img { width: 155px; }
        .navbar__toggle { display: block; }
        .navbar__links { display: none; position: absolute; left: 0; right: 0; top: 100%; padding: 18px 24px 26px; flex-direction: column; align-items: stretch; gap: 4px; background: var(--paper); border-bottom: 1px solid var(--line); box-shadow: 0 15px 25px #30203e0d; }
        .navbar__links[data-open='true'] { display: flex; }
        .navbar__links > a { padding: 13px 4px; }
        .navbar__links > a[aria-current]::after { right: auto; width: 22px; bottom: 7px; }
        .navbar__phone { margin: 16px 0 0; }
      }
    </style>
    <nav class="navbar" aria-label="Navegación principal">
      <a href="#inicio" class="navbar__brand" aria-label="Procurador Tomás — Inicio"><img src="${logo}" alt="Procurador Tomás" width="350" height="120" /></a>
      <button class="navbar__toggle" type="button" aria-controls="navigation-links" aria-expanded="false" aria-label="Abrir menú"><span></span><span></span><span></span></button>
      <div class="navbar__links" id="navigation-links" data-open="false">
        <a href="#inicio" aria-current="location">Inicio</a>
        <a href="#servicios">Servicios</a>
        <a href="#contacto">Contacto</a>
        <a class="navbar__phone button button--outline" href="tel:${site.telephone}">${icon('phone')} ${site.telephoneLabel}</a>
      </div>
    </nav>`;

  const toggle = header.querySelector('button');
  const links = header.querySelector('.navbar__links');
  const setOpen = (open) => {
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    links.dataset.open = String(open);
  };
  toggle.addEventListener('click', () => setOpen(toggle.getAttribute('aria-expanded') !== 'true'));
  header.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      setOpen(false);
      toggle.focus();
    }
  });
  header.addEventListener('click', (event) => {
    if (event.target.closest('a')) setOpen(false);
  });
  header.addEventListener('focusout', (event) => {
    if (!header.contains(event.relatedTarget)) setOpen(false);
  });
  document.addEventListener('click', (event) => {
    if (!header.contains(event.target)) setOpen(false);
  });
  window.matchMedia('(min-width: 761px)').addEventListener('change', () => setOpen(false));

  const updateCurrent = () => {
    const current = ['#inicio', '#servicios', '#contacto'].includes(location.hash) ? location.hash : '#inicio';
    links.querySelectorAll('a[href^="#"]').forEach((link) => {
      if (link.getAttribute('href') === current) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  };
  window.addEventListener('hashchange', updateCurrent);
  updateCurrent();
  return header;
}
