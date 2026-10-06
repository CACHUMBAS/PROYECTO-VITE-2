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
      .about { background: #e9e1e8; border-block: 1px solid #d9ced8; }
      .about:focus-visible { outline: 2px solid var(--purple-light); outline-offset: -2px; }
      .about__inner { display: grid; grid-template-columns: 1fr 1.12fr; align-items: center; gap: 88px; padding-block: 82px; }
      .about__portrait { margin: 0; min-width: 0; }
      .about__frame { padding: 12px; background: var(--paper); border: 1px solid #d4c7d1; }
      .about__frame img { width: 100%; height: auto; }
      .about__caption { display: flex; align-items: center; justify-content: space-between; gap: 16px; padding-top: 17px; color: #65545f; font-size: 9px; line-height: 1.6; }
      .about__caption > span { display: flex; gap: 7px; align-items: center; }
      .about__caption .icon { width: 15px; height: 15px; }
      .about__caption small { font-size: 8px; letter-spacing: .1em; text-transform: uppercase; }
      .about__copy { min-width: 0; }
      .about__copy .eyebrow { color: #74576c; margin-bottom: 22px; }
      .about__name { font: 400 clamp(50px, 5.3vw, 76px)/.98 var(--serif); letter-spacing: -.045em; color: var(--purple); max-width: 550px; }
      .about__registration { display: flex; align-items: center; gap: 9px; font-size: 10px; line-height: 1.7; color: #65545f; margin-top: 20px; }
      .about__registration .icon { width: 20px; height: 20px; }
      .about__intro { font: italic 31px/1.12 var(--serif); color: #74576c; margin-top: 27px; max-width: 410px; }
      .about__description { color: #65545f; font-size: 12px; max-width: 480px; margin-top: 17px; }
      .about__values { list-style: none; display: grid; gap: 13px; padding: 23px 0 0; margin: 24px 0 27px; border-top: 1px solid #c8b7c5; }
      .about__values li { display: flex; align-items: center; gap: 10px; font-size: 11px; color: #594452; }
      .about__values .icon { width: 15px; height: 15px; }
      .about__actions { display: flex; align-items: center; gap: 25px; flex-wrap: wrap; }
      .about__actions .button { font-size: 11px; gap: 21px; }
      .about__phone { font-size: 11px; text-decoration: none; padding-block: 15px; }
      .about__phone:hover { text-decoration: underline; }
      @media (max-width: 1100px) {
        .about__inner { gap: 45px; padding-block: 65px; }
        .about__name { font-size: clamp(48px, 5.6vw, 62px); }
        .about__caption { flex-wrap: wrap; gap: 8px; }
        .about__actions { gap: 12px; }
      }
      @media (max-width: 760px) {
        .about__inner { grid-template-columns: 1fr; gap: 34px; padding-block: 45px 52px; }
        .about__portrait { max-width: 480px; width: 100%; margin-inline: auto; }
        .about__frame { padding: 8px; }
        .about__copy .eyebrow { margin-bottom: 18px; }
        .about__name { font-size: clamp(50px, 10vw, 67px); max-width: 480px; }
        .about__registration { font-size: 10px; margin-top: 16px; }
        .about__intro { font-size: 30px; margin-top: 24px; }
        .about__description { font-size: 12px; }
        .about__values { margin-top: 23px; }
      }
    </style>
    <div class="about__inner section-inner">
      <figure class="about__portrait">
        <div class="about__frame"><img src="${portrait}" srcset="${portraitSmall} 600w, ${portrait} 1100w" sizes="(max-width: 760px) min(100vw - 64px, 464px), (max-width: 1100px) 43vw, 550px" alt="Retrato de ${site.professional}, procurador" width="1100" height="1071" loading="lazy" decoding="async" /></div>
        <figcaption class="about__caption"><span>${icon('pin')} Mallorca · Palma, Manacor e Inca</span><small>Tu procurador, cerca de ti</small></figcaption>
      </figure>
      <div class="about__copy">
        <p class="eyebrow">02 / Conoce a tu procurador</p>
        <h3 class="about__name" id="procurador-title">${site.professional}</h3>
        <p class="about__registration">${icon('scales')} ${site.registration}</p>
        <p class="about__intro">Una persona al frente.<br>Atención en cada paso.</p>
        <p class="about__description">Representación procesal y tramitación judicial con trato directo. Gabriel Tomás Gili se ocupa del seguimiento del procedimiento, los plazos y las comunicaciones, en coordinación con tu abogado.</p>
        <ul class="about__values"><li>${icon('check')} Atención personal a particulares y profesionales</li><li>${icon('check')} Seguimiento diario de plazos y señalamientos</li><li>${icon('check')} Actuación en Palma, Manacor e Inca</li></ul>
        <div class="about__actions"><a class="button" href="#contacto">Contactar con Gabriel ${icon('diagonal')}</a><a class="about__phone" href="tel:${site.telephone}">${site.telephoneLabel}</a></div>
      </div>
    </div>`;
  return section;
}
