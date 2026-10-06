import { site } from '../data/site.js';
import { icon } from './icons.js';
import balance from '../assets/balanza.jpg';

export function Hero() {
  const root = document.createElement('div');
  root.innerHTML = `
    <style>
      .hero { display: grid; grid-template-columns: 1.12fr 1fr; gap: 64px; align-items: center; padding-block: 64px 58px; }
      .hero__welcome { display: flex; align-items: center; gap: 10px; margin-bottom: 28px; }
      .hero__welcome::before { content: ''; width: 26px; height: 1px; background: currentColor; }
      .hero h1 { color: var(--purple); font-size: clamp(45px, 4.9vw, 67px); line-height: 1.05; font-weight: 400; letter-spacing: -.05em; max-width: 590px; }
      .hero h1 em { color: var(--purple-light); font-weight: 400; }
      .hero__description { font-size: 16px; color: var(--muted); max-width: 445px; margin: 24px 0 30px; }
      .hero__actions { display: flex; align-items: center; flex-wrap: wrap; gap: 12px; }
      .hero__professional { display: flex; align-items: center; gap: 14px; margin-top: 38px; padding-top: 26px; border-top: 1px solid var(--line); max-width: 440px; }
      .hero__monogram { display: grid; place-items: center; width: 44px; height: 44px; border-radius: 50%; background: #eae3ed; color: var(--purple); font: 19px var(--serif); }
      .hero__professional strong { font-size: 13px; font-weight: 600; display: block; }
      .hero__professional small { display: block; color: var(--muted); font-size: 11px; margin-top: 5px; }
      .hero__visual { position: relative; margin: 0; padding: 0 0 26px 20px; }
      .hero__visual::before { content: ''; position: absolute; inset: 30px -13px 0 0; background: #ece6ef; }
      .hero__photo { position: relative; overflow: hidden; border-radius: 130px 4px 4px 4px; background: #b09776; }
      .hero__photo img { width: 100%; height: 470px; object-fit: cover; object-position: 72% center; }
      .hero__photo::after { content: ''; position: absolute; inset: 0; background: linear-gradient(180deg, transparent 45%, #201429ad); }
      .hero__caption { position: absolute; left: 50px; bottom: 59px; right: 20px; color: white; z-index: 1; }
      .hero__caption span { display: block; font-size: 10px; text-transform: uppercase; letter-spacing: .2em; margin-bottom: 11px; }
      .hero__caption p { font: 27px/1.2 var(--serif); max-width: 240px; }
      .hero__seal { position: absolute; top: 25px; right: -3px; z-index: 2; display: flex; gap: 12px; align-items: center; padding: 17px; background: var(--paper); border: 1px solid #e3dbe6; box-shadow: 0 7px 22px #20142912; }
      .hero__seal .icon { width: 28px; height: 28px; color: var(--purple-light); }
      .hero__seal strong { display: block; font-size: 12px; font-weight: 600; }
      .hero__seal small { font-size: 10px; color: var(--muted); }
      .coverage { border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); background: #f3f0f4; }
      .coverage__inner { display: grid; grid-template-columns: 1fr 1.15fr 1fr; gap: 25px; padding-block: 24px; }
      .coverage__item { display: flex; align-items: center; gap: 14px; color: var(--purple-light); }
      .coverage__item + .coverage__item { border-left: 1px solid #d9d2dc; padding-left: 30px; }
      .coverage__item strong { display: block; color: var(--purple); font-size: 12px; font-weight: 600; }
      .coverage__item span { display: block; color: var(--muted); font-size: 11px; margin-top: 5px; }
      @media (max-width: 1000px) { .hero { gap: 34px; } .hero__photo img { height: 460px; } .hero h1 { font-size: 53px; } .hero__actions .button { padding-inline: 17px; } }
      @media (max-width: 760px) {
        .hero { grid-template-columns: 1fr; padding-block: 42px; gap: 38px; }
        .hero h1 { font-size: clamp(43px, 9vw, 65px); max-width: 590px; }
        .hero__welcome { margin-bottom: 22px; font-size: 10px; }
        .hero__description { margin-block: 22px 26px; }
        .hero__professional { margin-top: 28px; padding-top: 23px; }
        .hero__visual { margin-right: 10px; padding-left: 12px; padding-bottom: 18px; }
        .hero__photo img { height: 370px; }
        .hero__seal { top: 24px; right: -6px; }
        .hero__caption { left: 35px; bottom: 45px; }
        .coverage__inner { grid-template-columns: 1fr; gap: 20px; padding-block: 26px; }
        .coverage__item + .coverage__item { border-left: 0; padding-left: 0; }
      }
    </style>
    <div class="hero section-inner">
      <div class="hero__copy">
        <p class="hero__welcome eyebrow">Bienvenida al sitio</p>
        <h1 class="serif" id="inicio-title">La tranquilidad de estar <em>bien representado.</em></h1>
        <p class="hero__description">Procuraduría cercana y rigurosa en Mallorca. Cuidamos cada trámite y cada plazo para que tu procedimiento siga adelante.</p>
        <div class="hero__actions">
          <a class="button" href="#contacto">Hablemos de tu caso ${icon('arrow')}</a>
          <a class="button button--outline" href="#servicios">Conoce los servicios</a>
        </div>
        <div class="hero__professional">
          <span class="hero__monogram" aria-hidden="true">GT</span>
          <div><strong>${site.professional}</strong><small>${site.registration}</small></div>
        </div>
      </div>
      <figure class="hero__visual">
        <div class="hero__photo"><img src="${balance}" alt="Balanza de la justicia en una sala de vistas" width="1080" height="608" fetchpriority="high" /></div>
        <div class="hero__seal">${icon('scales')}<div><strong>Compromiso procesal</strong><small>Atención en cada paso</small></div></div>
        <figcaption class="hero__caption"><span>Procurador Tomás · Mallorca</span><p>El detalle importa.<br>Tu confianza, también.</p></figcaption>
      </figure>
    </div>
    <div class="coverage"><div class="coverage__inner section-inner">
      <div class="coverage__item">${icon('pin')}<div><strong>Palma · Manacor · Inca</strong><span>Otros partidos judiciales, por encargo</span></div></div>
      <div class="coverage__item">${icon('clock')}<div><strong>${site.hours}</strong><span>Un contacto directo con tu procurador</span></div></div>
      <div class="coverage__item">${icon('scales')}<div><strong>Representación y seguimiento</strong><span>En coordinación con tu abogado</span></div></div>
    </div></div>`;
  return root;
}
