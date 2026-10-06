import { site } from '../data/site.js';
import { icon } from './icons.js';

export function Footer() {
  const footer = document.createElement('footer');
  footer.className = 'footer';
  footer.innerHTML = `
    <style>
      .footer { background: #271b31; color: #e9e0ed; }
      .footer__top { display: flex; align-items: center; justify-content: space-between; gap: 30px; padding-block: 38px; }
      .footer__brand { display: flex; align-items: center; gap: 15px; text-decoration: none; }
      .footer__brand > .icon { width: 33px; height: 33px; color: #c9b1d0; }
      .footer__brand strong { display: block; font: 22px var(--serif); }
      .footer__brand small { display: block; font-size: 9px; letter-spacing: .17em; text-transform: uppercase; color: #c2b3c8; margin-top: 7px; }
      .footer__motto { font: italic 20px var(--serif); color: #c8b9ce; }
      .footer__bottom { padding-block: 20px; border-top: 1px solid #ffffff1c; display: flex; flex-wrap: wrap; justify-content: space-between; gap: 16px; font-size: 10px; color: #c2b3c8; }
      .footer__links { display: flex; gap: 22px; flex-wrap: wrap; }
      .footer__links a { text-decoration: none; }
      .footer__links a:hover { text-decoration: underline; }
      @media (max-width: 760px) { .footer__top { align-items: flex-start; flex-direction: column; gap: 25px; } .footer__bottom { gap: 18px; } .footer__motto { font-size: 19px; } }
    </style>
    <div class="footer__top section-inner">
      <a class="footer__brand" href="#inicio">${icon('scales')}<span><strong>Procurador Tomás</strong><small>Gabriel Tomás Gili · Mallorca</small></span></a>
      <p class="footer__motto">Cercanía en el trato. Rigor en cada trámite.</p>
    </div>
    <div class="footer__bottom section-inner">
      <span>Proyecto académico · Rediseño con Vite · 2026</span>
      <div class="footer__links"><a href="${site.original}legal.html" target="_blank" rel="noopener noreferrer">Aviso legal de la web original ↗</a><a href="${site.original}politicaprivacidad.html" target="_blank" rel="noopener noreferrer">Privacidad de la web original ↗</a><a href="#inicio">Volver arriba ↑</a></div>
    </div>`;
  return footer;
}
