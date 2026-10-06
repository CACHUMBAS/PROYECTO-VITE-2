import { site } from '../data/site.js';
import { icon } from './icons.js';
import { Brand } from './brand.js';

export function Footer() {
  const footer = document.createElement('footer');
  footer.className = 'footer';
  footer.innerHTML = `
    <style>
      .footer { background: var(--paper); color: var(--purple); overflow: hidden; }
      .footer__top { display: flex; align-items: center; justify-content: space-between; gap: 30px; padding-top: 50px; }
      .footer__brand { text-decoration: none; }
      .footer__motto { font-size: 10px; color: var(--muted); max-width: 200px; }
      .footer__up { display: flex; align-items: center; gap: 12px; text-decoration: none; font-size: 9px; }
      .footer__up .icon { border: 1px solid #b9a8b5; border-radius: 50%; width: 45px; height: 45px; padding: 13px; transform: rotate(-90deg); }
      .footer__up:hover .icon { background: #e9e1e8; }
      .footer__wordmark { font: 400 clamp(100px, 20vw, 290px)/.98 var(--serif); text-align: center; letter-spacing: .07em; margin: 23px -15px 30px 0; }
      .footer__bottom { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 16px; border-top: 1px solid var(--line); padding-block: 23px; font-size: 8px; color: var(--muted); }
      .footer__links { display: flex; flex-wrap: wrap; gap: 20px; }
      .footer__links a { text-decoration: none; }
      .footer__links a:hover { text-decoration: underline; }
      @media (max-width: 760px) { .footer__top { padding-top: 34px; gap: 22px; } .footer__motto { display: none; } .footer__up span { display: none; } .footer__wordmark { font-size: clamp(90px, 21vw, 140px); margin-block: 30px 27px; margin-right: -5px; letter-spacing: .025em; } .footer__bottom { font-size: 8px; gap: 14px; } .footer__links { gap: 13px; } }
    </style>
    <div class="section-inner">
      <div class="footer__top"><a class="footer__brand" href="#inicio" aria-label="Procurador Tomás — Volver al inicio">${Brand()}</a><p class="footer__motto">Rigor en cada gestión.<br>Cercanía en cada conversación.</p><a class="footer__up" href="#inicio" aria-label="Volver al inicio"><span>Volver al inicio</span>${icon('arrow')}</a></div>
      <p class="footer__wordmark" aria-hidden="true">TOMÁS</p>
      <div class="footer__bottom"><span>Proyecto académico · Propuesta de rediseño · 2026</span><div class="footer__links"><a href="${site.original}legal.html" target="_blank" rel="noopener noreferrer">Aviso legal original ↗</a><a href="${site.original}politicaprivacidad.html" target="_blank" rel="noopener noreferrer">Privacidad original ↗</a></div></div>
    </div>`;
  return footer;
}
