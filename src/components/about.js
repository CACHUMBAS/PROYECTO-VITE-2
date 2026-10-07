import { site } from '../data/site.js';
import { icon } from './icons.js';
import portrait from '../assets/gabriel-tomas-gili.webp';
import portraitSmall from '../assets/gabriel-tomas-gili-600.webp';

export function About() {
  const section = document.createElement('section');
  section.id = 'procurador';
  section.className = 'about';
  section.tabIndex = -1;
  section.setAttribute('aria-labelledby', 'procurador-title');
  section.innerHTML = `
    <style>
      .about { background: #e7e2d7; border-top: 1px solid #d2cbbc; }
      .about:focus-visible { outline: 2px solid var(--accent); outline-offset: -2px; }
      .about__heading { display: flex; justify-content: space-between; gap: 24px; padding-top: 47px; }
      .about__heading .eyebrow { color: var(--muted); }
      .about__heading > span { font-size: 11px; color: var(--muted); }
      .about__inner { display: grid; grid-template-columns: 1fr 1.05fr; align-items: center; gap: 88px; padding-block: 50px 94px; }
      .about__portrait { margin: 0; min-width: 0; }
      .about__frame { position: relative; padding: 0 18px 18px 0; isolation: isolate; }
      .about__frame::before { content: ''; position: absolute; inset: 30px 0 0 30px; border: 1px solid #a69b84; z-index: -1; }
      .about__frame img { width: 100%; height: auto; }
      .about__caption { display: flex; align-items: center; justify-content: space-between; gap: 16px; padding-top: 21px; color: var(--muted); font-size: 11px; line-height: 1.6; }
      .about__caption > span { display: flex; gap: 7px; align-items: center; }
      .about__caption .icon { width: 15px; height: 15px; }
      .about__caption small { font-size: 10px; letter-spacing: .1em; text-transform: uppercase; }
      .about__copy { min-width: 0; }
      .about__name { font: 400 clamp(58px, 6.2vw, 89px)/.94 var(--serif); letter-spacing: -.045em; color: var(--ink); max-width: 560px; text-wrap: balance; }
      .about__registration { display: flex; align-items: center; gap: 9px; font-size: 12px; line-height: 1.7; color: var(--muted); margin-top: 22px; }
      .about__registration .icon { width: 19px; height: 19px; }
      .about__intro { font: italic 33px/1.1 var(--serif); color: var(--accent); margin-top: 32px; }
      .about__description { color: #5e5b51; font-size: 15px; max-width: 480px; margin-top: 20px; }
      .about__values { margin: 28px 0; border-top: 1px solid #c2b9a8; }
      .about__values > div { display: grid; grid-template-columns: 100px minmax(0, 1fr); gap: 16px; border-bottom: 1px solid #c2b9a8; padding-block: 15px; font-size: 12px; line-height: 1.7; }
      .about__values dt { color: var(--muted); }
      .about__values dd { margin: 0; color: var(--ink); }
      .about__actions { display: flex; align-items: center; gap: 25px; flex-wrap: wrap; }
      .about__actions .button { gap: 21px; }
      .about__phone { font-size: 13px; text-decoration: none; padding-block: 15px; }
      .about__phone:hover { text-decoration: underline; }
      @media (max-width: 1100px) {
        .about__inner { gap: 45px; }
        .about__name { font-size: clamp(54px, 6vw, 69px); }
        .about__caption { flex-wrap: wrap; gap: 8px; }
        .about__actions { gap: 12px; }
      }
      @media (max-width: 900px) {
        .about__inner { grid-template-columns: minmax(0, 1fr); gap: 42px; padding-block: 34px 65px; }
        .about__portrait { width: 100%; max-width: 600px; }
        .about__copy { max-width: 620px; }
        .about__name { font-size: clamp(52px, 9vw, 76px); }
        .about__description { max-width: 580px; }
      }
      @media (max-width: 760px) {
        .about__heading { padding-top: 32px; }
        .about__heading > span { display: none; }
        .about__inner { gap: 34px; padding-block: 28px 58px; }
        .about__frame { padding: 0 12px 12px 0; }
        .about__frame::before { inset: 22px 0 0 22px; }
        .about__caption small { display: none; }
        .about__intro { font-size: 30px; margin-top: 27px; }
        .about__values > div { grid-template-columns: 80px minmax(0, 1fr); gap: 12px; }
      }
    </style>
    <div class="about__heading section-inner"><p class="eyebrow">02 / Conoce a tu procurador</p><span>Representación, con nombre propio.</span></div>
    <div class="about__inner section-inner">
      <figure class="about__portrait">
        <div class="about__frame"><img src="${portrait}" srcset="${portraitSmall} 600w, ${portrait} 1100w" sizes="(max-width: 760px) calc(100vw - 60px), (max-width: 900px) 582px, (max-width: 1100px) 40vw, 570px" alt="Retrato de ${site.professional}, procurador" width="1100" height="1071" loading="lazy" decoding="async" /></div>
        <figcaption class="about__caption"><span>${icon('pin')} Mallorca · Palma, Manacor e Inca</span><small>Tu procurador, cerca de ti</small></figcaption>
      </figure>
      <div class="about__copy">
        <h3 class="about__name" id="procurador-title">${site.professional}</h3>
        <p class="about__registration">${icon('scales')} ${site.registration}</p>
        <p class="about__intro">Una persona al frente.<br>Atención en cada paso.</p>
        <p class="about__description">Representación procesal y tramitación judicial con trato directo. Gabriel Tomás Gili se ocupa del seguimiento del procedimiento, los plazos y las comunicaciones, en coordinación con tu abogado.</p>
        <dl class="about__values"><div><dt>Atención</dt><dd>A particulares y profesionales</dd></div><div><dt>Seguimiento</dt><dd>Plazos, comunicaciones y señalamientos</dd></div><div><dt>Actuación</dt><dd>Palma, Manacor e Inca</dd></div></dl>
        <div class="about__actions"><a class="button" href="#contacto">Contactar con Gabriel ${icon('diagonal')}</a><a class="about__phone" href="tel:${site.telephone}">${site.telephoneLabel}</a></div>
      </div>
    </div>`;
  return section;
}
