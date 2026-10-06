import { site } from '../data/site.js';
import { icon } from './icons.js';
import { Brand } from './brand.js';

export function Navbar() {
  const header = document.createElement('header');
  header.className = 'site-header';
  header.innerHTML = `
    <style>
      .site-header { position: sticky; top: 0; z-index: 20; background: #f7f4eef5; backdrop-filter: blur(14px); border-bottom: 1px solid #dcd4d799; }
      .navbar { max-width: 1440px; min-height: 101px; margin: auto; padding: 20px 64px; display: flex; align-items: center; gap: 30px; }
      .navbar__brand { flex-shrink: 0; color: var(--purple); text-decoration: none; }
      .navbar__location { margin-left: 26px; font-size: 8px; line-height: 1.8; letter-spacing: .1em; text-transform: uppercase; color: var(--muted); padding-left: 24px; border-left: 1px solid var(--line); }
      .navbar__links { display: flex; align-items: center; gap: 31px; margin-left: auto; }
      .navbar__links > a { position: relative; padding: 14px 0; font-size: 11px; text-decoration: none; color: var(--muted); }
      .navbar__links > a:hover, .navbar__links > a[aria-current] { color: var(--purple); }
      .navbar__links > a[aria-current]::after { content: ''; position: absolute; bottom: 5px; left: 0; width: 17px; height: 1px; background: var(--purple-light); }
      .navbar__links > .navbar__phone { display: flex; align-items: center; gap: 10px; margin-left: 26px; color: var(--purple); font-size: 11px; }
      .navbar__phone .icon { padding: 12px; border: 1px solid #c6b9c3; border-radius: 50%; width: 44px; height: 44px; }
      .navbar__phone:hover .icon { background: #e9e1e7; }
      .navbar__toggle { display: none; width: 46px; height: 46px; padding: 13px; border: 1px solid #cabdc7; border-radius: 50%; background: transparent; color: var(--purple); }
      .navbar__toggle span { display: block; height: 1px; background: currentColor; margin: 5px 0; transition: transform .2s, opacity .2s; }
      .navbar__toggle[aria-expanded='true'] span:nth-child(1) { transform: translateY(6px) rotate(45deg); }
      .navbar__toggle[aria-expanded='true'] span:nth-child(2) { opacity: 0; }
      .navbar__toggle[aria-expanded='true'] span:nth-child(3) { transform: translateY(-6px) rotate(-45deg); }
      @media (max-width: 1100px) { .navbar { padding-inline: 38px; gap: 25px; } .navbar__location { display: none; } .navbar__links > .navbar__phone { margin-left: 0; } }
      @media (max-width: 760px) {
        .navbar { min-height: 83px; padding: 16px 24px; justify-content: space-between; gap: 18px; }
        .navbar__toggle { display: block; }
        .navbar__brand .brand__mark { width: 33px; height: 42px; }
        .navbar__brand .brand__name strong { font-size: 30px; }
        .navbar__links { display: none; position: absolute; left: 0; right: 0; top: 100%; padding: 12px 26px 25px; flex-direction: column; align-items: stretch; gap: 0; background: var(--paper); border-bottom: 1px solid var(--line); box-shadow: 0 20px 25px #3826380c; max-height: calc(100dvh - 83px); overflow-y: auto; }
        .navbar__links[data-open='true'] { display: flex; }
        .navbar__links > a { padding: 14px 0; font-size: 20px; font-family: var(--serif); border-bottom: 1px solid var(--line); }
        .navbar__links > a[aria-current]::after { bottom: 8px; width: 18px; }
        .navbar__links > .navbar__phone { margin-top: 12px; border: 0; font-family: inherit; font-size: 12px; }
      }
    </style>
    <nav class="navbar" aria-label="Navegación principal">
      <a href="#inicio" class="navbar__brand" aria-label="Procurador Tomás — Inicio">${Brand()}</a>
      <span class="navbar__location">Palma · Manacor · Inca<br>Mallorca, Islas Baleares</span>
      <button class="navbar__toggle" type="button" aria-controls="navigation-links" aria-expanded="false" aria-label="Abrir menú"><span></span><span></span><span></span></button>
      <div class="navbar__links" id="navigation-links" data-open="false">
        <a href="#inicio" aria-current="location">Inicio</a>
        <a href="#servicios">Servicios</a>
        <a href="#contacto">Contacto</a>
        <a class="navbar__phone" href="tel:${site.telephone}">${icon('phone')} ${site.telephoneLabel}</a>
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
    const hash = location.hash === '#procurador' ? '#servicios' : location.hash;
    const current = ['#inicio', '#servicios', '#contacto'].includes(hash) ? hash : '#inicio';
    links.querySelectorAll('a[href^="#"]').forEach((link) => {
      if (link.getAttribute('href') === current) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  };
  window.addEventListener('hashchange', updateCurrent);
  updateCurrent();
  return header;
}
