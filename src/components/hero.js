import { site } from '../data/site.js';
import { icon } from './icons.js';
import justice from '../assets/balanza-justicia.webp';
import justiceSmall from '../assets/balanza-justicia-720.webp';
import portraitThumbnail from '../assets/gabriel-tomas-gili-mini.webp';

export function Hero() {
  const root = document.createElement('div');
  root.innerHTML = `
    <style>
      .hero { position: relative; isolation: isolate; overflow: hidden; background: var(--ink); color: var(--paper); }
      .hero__visual { position: absolute; inset: 0; z-index: -2; margin: 0; }
      .hero__visual img { width: 100%; height: 100%; object-fit: cover; object-position: 64% center; animation: hero-image 1.2s ease-out both; }
      .hero::before { content: ''; position: absolute; z-index: -1; inset: 0; background: linear-gradient(90deg, #141815f5, #141815b8 37%, #1418151a 75%), linear-gradient(0deg, #141815d9, transparent 44%); }
      .hero__inner { position: relative; min-height: min(940px, 100svh); display: flex; flex-direction: column; padding-top: 154px; padding-bottom: 28px; }
      .hero__copy { padding-bottom: 46px; }
      .hero__overline { display: flex; align-items: center; gap: 14px; color: var(--champagne); margin-bottom: 30px; }
      .hero__overline::before { content: ''; width: 28px; height: 1px; background: currentColor; flex-shrink: 0; }
      .hero h1 { font: 400 clamp(76px, 8.6vw, 124px)/.96 var(--serif); letter-spacing: -.055em; }
      .hero h1 span { display: block; }
      .hero h1 span + span { margin-top: .06em; }
      .hero h1 em { color: var(--champagne); font-size: 1.32em; font-weight: 400; }
      .hero__description { color: #e8e2d6; max-width: 460px; font-size: 15px; line-height: 1.7; margin-top: 31px; }
      .hero__actions { display: flex; flex-wrap: wrap; align-items: center; gap: 14px 28px; margin-top: 24px; }
      .hero__contact { background: var(--champagne); color: var(--ink); border-color: var(--champagne); }
      .hero__contact:hover { background: #ead5ae; }
      .hero__discover { display: inline-flex; align-items: center; gap: 24px; min-height: 48px; padding-block: 14px 10px; border-bottom: 1px solid #b6a888; font-size: 13px; text-decoration: none; }
      .hero__discover .icon { width: 18px; height: 18px; transform: rotate(90deg); transition: translate .25s; }
      .hero__discover:hover .icon { translate: 0 4px; }
      .hero__location { position: absolute; right: 24px; top: 38%; writing-mode: vertical-rl; font-size: 10px; letter-spacing: .18em; }
      .hero__bottom { display: flex; align-items: end; justify-content: space-between; gap: 30px; margin-top: auto; }
      .hero__signature small { display: block; font-size: 10px; line-height: 1.6; letter-spacing: .14em; text-transform: uppercase; color: #e8e2d6; margin-bottom: 12px; }
      .hero__signature p { font: 400 27px/1.05 var(--serif); }
      .hero__profile { display: flex; align-items: center; gap: 20px; padding: 10px 20px 10px 10px; min-width: 277px; background: var(--paper); color: var(--ink); font-size: 13px; line-height: 1.5; text-decoration: none; transition: background .25s; }
      .hero__profile img { width: 66px; height: 74px; object-fit: cover; object-position: 50% 25%; }
      .hero__profile .icon { margin-left: auto; width: 19px; height: 19px; transition: transform .25s; }
      .hero__profile:hover { background: #e6dcc7; }
      .hero__profile:hover .icon { transform: translate(3px, -3px); }
      .hero__caption { text-align: right; font-size: 10px; color: #e8e2d6; margin-top: 14px; letter-spacing: .06em; }
      .hero__benefits { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); list-style: none; padding: 36px 0; border-bottom: 1px solid var(--line); }
      .hero__benefit { display: grid; grid-template-columns: 22px minmax(0, 1fr); align-content: start; gap: 16px; padding-inline: 28px; }
      .hero__benefit:first-child { padding-left: 0; }
      .hero__benefit:last-child { padding-right: 0; }
      .hero__benefit + .hero__benefit { border-left: 1px solid var(--line); }
      .hero__benefit > .icon { width: 22px; height: 22px; margin-top: 5px; color: var(--accent); }
      .hero__benefit h2 { font: 500 29px/1.1 var(--serif); letter-spacing: -.02em; }
      .hero__benefit p { max-width: 30ch; margin-top: 10px; color: var(--muted); font-size: 13px; line-height: 1.7; }
      .hero__foot { display: flex; justify-content: space-between; gap: 20px; padding-block: 20px; border-bottom: 1px solid var(--line); color: var(--muted); font-size: 10px; line-height: 1.7; letter-spacing: .1em; text-transform: uppercase; }
      @keyframes hero-image { from { opacity: .6; transform: scale(1.035); } to { opacity: 1; transform: scale(1); } }
      @media (max-width: 1100px) { .hero__inner { padding-top: 138px; } .hero__location { right: 13px; } }
      @media (max-width: 760px) {
        .hero__inner { min-height: 0; padding-top: 126px; padding-bottom: 23px; }
        .hero::before { background: linear-gradient(90deg, #141815e8, #1418158f 72%, #14181566), linear-gradient(0deg, #141815ed, transparent 60%); }
        .hero__visual img { object-position: 73% center; }
        .hero__overline { max-width: 280px; font-size: 10px; gap: 10px; margin-bottom: 26px; }
        .hero__overline::before { width: 20px; }
        .hero h1 { font-size: clamp(48px, 14.2vw, 96px); }
        .hero__description { font-size: 14px; margin-top: 28px; }
        .hero__actions { gap: 12px 22px; }
        .hero__contact { min-height: 52px; padding: 15px 20px; gap: 20px; }
        .hero__discover { font-size: 12px; gap: 16px; }
        .hero__benefits { grid-template-columns: 1fr; padding-block: 8px; }
        .hero__benefit, .hero__benefit:first-child, .hero__benefit:last-child { padding: 24px 0; }
        .hero__benefit + .hero__benefit { border-left: 0; border-top: 1px solid var(--line); }
        .hero__benefit h2 { font-size: 28px; }
        .hero__benefit p { max-width: 44ch; margin-top: 6px; }
        .hero__copy { padding-bottom: 38px; }
        .hero__location { display: none; }
        .hero__bottom { align-items: stretch; flex-direction: column; gap: 25px; }
        .hero__signature { display: flex; justify-content: space-between; align-items: center; gap: 20px; padding-top: 22px; border-top: 1px solid #ffffff40; }
        .hero__signature small { margin: 0; max-width: 115px; }
        .hero__signature p { font-size: 23px; }
        .hero__profile { min-width: 0; width: 100%; }
        .hero__caption { font-size: 10px; text-align: left; }
        .hero__foot { padding-block: 17px; font-size: 10px; flex-wrap: wrap; gap: 6px 20px; }
      }
    </style>
    <div class="hero">
      <figure class="hero__visual"><img src="${justice}" srcset="${justiceSmall} 720w, ${justice} 1536w" sizes="100vw" alt="Imagen conceptual de una balanza de justicia en bronce sobre un escritorio, iluminada por una ventana" width="1536" height="1024" fetchpriority="high" /></figure>
      <div class="hero__inner section-inner">
        <div class="hero__copy">
          <p class="hero__overline eyebrow">Representación procesal en Mallorca</p>
          <h1 id="inicio-title"><span>Procurador</span> <span><em>Tomás</em></span></h1>
          <p class="hero__description">Representación procesal en Palma, Manacor e Inca. Seguimiento de procedimientos y atención directa a particulares y abogados.</p>
          <div class="hero__actions">
            <a class="button hero__contact" href="#contacto">Consultar mi asunto ${icon('arrow')}</a>
            <a class="hero__discover" href="#servicios">Ver servicios ${icon('arrow')}</a>
          </div>
        </div>
        <span class="hero__location" aria-hidden="true">PALMA · MANACOR · INCA</span>
        <div class="hero__bottom">
          <div class="hero__signature"><small>${site.professional}</small><p>Rigor profesional.<br>Trato personal.</p></div>
          <a class="hero__profile" href="#procurador"><img src="${portraitThumbnail}" width="66" height="74" decoding="async" alt="" /><span>Conoce a<br>tu procurador</span>${icon('diagonal')}</a>
        </div>
        <p class="hero__caption">Balanza de justicia · Imagen conceptual</p>
      </div>
    </div>
    <div class="section-inner">
      <ul class="hero__benefits" aria-label="Cómo te acompaña el despacho">
        <li class="hero__benefit">
          ${icon('clock')}
          <div><h2>Control de plazos</h2><p>Atención a las fechas y vencimientos de cada procedimiento.</p></div>
        </li>
        <li class="hero__benefit">
          ${icon('chat')}
          <div><h2>Comunicación directa</h2><p>Contacto con el despacho y coordinación con tu abogado.</p></div>
        </li>
        <li class="hero__benefit">
          ${icon('folder')}
          <div><h2>Seguimiento del asunto</h2><p>Gestiones y notificaciones atendidas en cada fase del proceso.</p></div>
        </li>
      </ul>
      <div class="hero__foot"><span>Bienvenida al sitio</span><span>Palma · Manacor · Inca</span></div>
    </div>`;
  return root;
}
