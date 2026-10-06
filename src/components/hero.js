import { site } from '../data/site.js';
import { icon } from './icons.js';
import architecture from '../assets/arquitectura-mediterranea.webp';
import architectureSmall from '../assets/arquitectura-mediterranea-720.webp';

export function Hero() {
  const root = document.createElement('div');
  root.innerHTML = `
    <style>
      .hero { position: relative; display: grid; grid-template-columns: 1.06fr 1fr; gap: 50px; padding-block: 48px 58px; }
      .hero__copy { position: relative; z-index: 2; padding-top: 25px; }
      .hero__overline { display: flex; align-items: center; gap: 13px; margin-bottom: 32px; }
      .hero__overline::before { content: ''; width: 7px; height: 7px; border-radius: 50%; background: #927c67; }
      .hero h1 { font-family: var(--serif); font-weight: 400; font-size: clamp(74px, 8.15vw, 116px); line-height: .9; letter-spacing: -.055em; color: var(--purple); }
      .hero h1 span { display: block; }
      .hero h1 em { font-weight: 400; color: #84657e; }
      .hero__description { max-width: 355px; color: var(--muted); font-size: 13px; margin: 30px 0 25px; }
      .hero__actions { display: flex; align-items: center; gap: 25px; flex-wrap: wrap; }
      .hero__secondary { font-size: 11px; padding-block: 15px; text-decoration-thickness: 1px; }
      .hero__secondary:hover { color: var(--purple-light); }
      .hero__signature { width: fit-content; color: inherit; text-decoration: none; display: flex; align-items: center; gap: 15px; margin-top: 36px; }
      .hero__profile-link { display: block; font-size: 10px; color: var(--purple-light); margin-top: 8px; text-decoration: underline; text-underline-offset: 3px; }
      .hero__signature:hover .hero__profile-link { color: var(--purple); }
      .hero__signature .icon { height: 35px; width: 35px; color: #8a7185; padding: 2px; }
      .hero__signature strong { display: block; font-size: 11px; font-weight: 600; }
      .hero__signature small { display: block; margin-top: 5px; font-size: 10px; color: var(--muted); }
      .hero__visual { position: relative; margin: 0; padding: 0 0 28px 25px; min-width: 0; }
      .hero__frame { overflow: hidden; height: 606px; background: #d2bfa2; border-radius: 220px 0 0 0; }
      .hero__frame img { width: 100%; height: 100%; object-fit: cover; object-position: 67% center; animation: hero-image 1.3s ease-out both; }
      .hero__visual::before { content: ''; position: absolute; inset: 20px -15px 6px 47px; border: 1px solid #bbadad; border-radius: 220px 0 0 0; z-index: -1; }
      .hero__image-label { position: absolute; right: 15px; bottom: 43px; writing-mode: vertical-rl; color: var(--purple); background: #f7f4eef5; padding: 10px 6px; font-size: 8px; letter-spacing: .15em; text-transform: uppercase; }
      .hero__card { position: absolute; bottom: 48px; left: -15px; background: var(--purple); color: #f5f0e8; width: 229px; padding: 27px 29px; }
      .hero__card .icon { width: 26px; height: 26px; margin-bottom: 15px; color: #c5b0c4; }
      .hero__card p { font: 29px/1.05 var(--serif); letter-spacing: -.025em; }
      .hero__card small { display: block; color: #cbbbca; font-size: 8px; letter-spacing: .1em; text-transform: uppercase; margin-top: 16px; }
      .hero__foot { display: flex; align-items: center; justify-content: space-between; gap: 20px; border-top: 1px solid var(--line); padding-block: 20px; color: var(--muted); font-size: 9px; letter-spacing: .11em; text-transform: uppercase; }
      .hero__foot a { display: flex; align-items: center; gap: 15px; text-decoration: none; }
      .hero__foot a .icon { transform: rotate(90deg); width: 17px; }
      .hero__foot-center { color: var(--purple); }
      @keyframes hero-image { from { opacity: .5; transform: scale(1.06); } to { opacity: 1; transform: scale(1); } }
      @media (max-width: 1100px) {
        .hero { gap: 30px; } .hero h1 { font-size: clamp(66px, 8.7vw, 92px); }
        .hero__frame { height: 566px; } .hero__actions { gap: 15px; }
        .hero__card { width: 210px; padding: 23px; left: -3px; }
      }
      @media (max-width: 760px) {
        .hero { grid-template-columns: 1fr; padding-block: 34px 35px; gap: 36px; }
        .hero__copy { padding-top: 0; }
        .hero h1 { font-size: clamp(68px, 12vw, 98px); line-height: .94; }
        .hero__overline { margin-bottom: 26px; font-size: 9px; }
        .hero__description { font-size: 13px; margin-block: 23px; }
        .hero__signature { margin-top: 27px; }
        .hero__visual { padding: 0 9px 24px 15px; margin-right: 8px; }
        .hero__frame { height: 450px; border-top-left-radius: 170px; }
        .hero__visual::before { right: -7px; bottom: 6px; left: 35px; border-top-left-radius: 170px; }
        .hero__card { width: 203px; bottom: 45px; left: 0; padding: 24px; }
        .hero__card p { font-size: 28px; }
        .hero__foot { padding-block: 19px; font-size: 8px; flex-wrap: wrap; }
        .hero__foot-center { display: none; }
      }
      @media (max-width: 360px) { .hero h1 { font-size: 61px; } .hero__actions { gap: 12px; } .hero__frame { height: 390px; } }
    </style>
    <div class="hero section-inner">
      <div class="hero__copy">
        <p class="hero__overline eyebrow">Procuraduría en Mallorca</p>
        <h1 id="inicio-title"><span>Cada detalle.</span><span>Cada plazo.</span><span><em>A tu lado.</em></span></h1>
        <p class="hero__description">La tranquilidad de estar bien representado. Impulsamos tu procedimiento con rigor, atención personal y la cercanía de siempre.</p>
        <div class="hero__actions"><a class="button" href="#contacto">Hablemos de tu caso ${icon('diagonal')}</a><a class="hero__secondary" href="#servicios">Descubre nuestros servicios</a></div>
        <a class="hero__signature" href="#procurador" aria-label="Conoce a ${site.professional}, tu procurador">${icon('scales')}<div><strong>${site.professional}</strong><small>${site.registration}</small><span class="hero__profile-link">Conoce a tu procurador ↗</span></div></a>
      </div>
      <figure class="hero__visual">
        <div class="hero__frame"><img src="${architecture}" srcset="${architectureSmall} 720w, ${architecture} 1200w" sizes="(max-width: 760px) 100vw, 50vw" alt="Composición arquitectónica conceptual de arcos mediterráneos de piedra bañados por la luz" width="1200" height="800" fetchpriority="high" /></div>
        <figcaption class="hero__image-label">Arquitectura mediterránea · Imagen conceptual</figcaption>
        <div class="hero__card">${icon('pin')}<p>Conocemos el territorio.<br>Cuidamos el proceso.</p><small>Palma · Manacor · Inca</small></div>
      </figure>
    </div>
    <div class="section-inner"><div class="hero__foot"><span>Bienvenida al sitio</span><span class="hero__foot-center">Cercanía en el trato. Precisión en cada gestión.</span><a href="#servicios">Sigue descubriendo ${icon('arrow')}</a></div></div>`;
  return root;
}
