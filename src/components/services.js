import { site } from '../data/site.js';
import { icon } from './icons.js';
import { About } from './about.js';

const services = [
  { title: 'Representación procesal', description: 'Ante los juzgados, en coordinación con tu abogado. Representación e impulso del procedimiento.' },
  { title: 'Actos de comunicación', description: 'Notificaciones, citaciones, requerimientos y emplazamientos. Cada diligencia, atendida.' },
  { title: 'Tramitación judicial', description: 'Mandamientos, testimonios, oficios y exhortos en Palma, Manacor e Inca.' },
  { title: 'Control de plazos', description: 'Seguimiento diario de plazos y señalamientos para mantener el procedimiento al día.' },
  { title: 'Gestión de depósitos y tasas', description: 'Consignación de depósitos y liquidación de tasas vinculadas al procedimiento judicial.' },
  { title: 'Acompañamiento judicial', description: 'Atención personal y acompañamiento al cliente en sus comparecencias en sede judicial.' },
];

export function Services() {
  const root = document.createElement('div');
  root.innerHTML = `
    <style>
      .services { display: grid; grid-template-columns: .8fr 1.3fr; gap: 95px; padding-block: 100px 110px; }
      .services__intro { position: sticky; top: 145px; align-self: start; }
      .services__intro .eyebrow { margin-bottom: 27px; }
      .services__intro .section-heading { max-width: 425px; font-size: clamp(45px, 4.4vw, 65px); }
      .services__intro .section-heading em { color: var(--purple-light); font-weight: 400; }
      .services__intro p:last-of-type { max-width: 305px; font-size: 12px; color: var(--muted); margin-top: 26px; }
      .services__index { display: flex; align-items: center; gap: 20px; margin-top: 38px; color: #816d7d; }
      .services__index span { font: 58px/1 var(--serif); }
      .services__index small { font-size: 9px; letter-spacing: .1em; text-transform: uppercase; max-width: 105px; line-height: 1.8; color: var(--muted); }
      .services__list { margin: 0; padding: 0; list-style: none; border-top: 1px solid #cdbfc9; }
      .service { border-bottom: 1px solid #cdbfc9; }
      .service__link { display: grid; grid-template-columns: 24px 1fr 40px; gap: 23px; padding: 27px 0 28px; align-items: start; text-decoration: none; }
      .service__number { font-size: 9px; color: var(--purple-light); padding-top: 12px; }
      .service h3 { font: 400 33px/1.15 var(--serif); letter-spacing: -.025em; color: var(--purple); transition: transform .25s; }
      .service p { color: var(--muted); font-size: 11px; line-height: 1.8; margin-top: 8px; max-width: 420px; }
      .service__arrow { display: grid; place-items: center; margin-top: 5px; width: 40px; height: 40px; border: 1px solid #cdbfc9; border-radius: 50%; transition: background .25s, color .25s; }
      .service__arrow .icon { width: 16px; height: 16px; }
      .service__link:hover .service__arrow { background: var(--purple); color: white; }
      .service__link:hover h3 { transform: translateX(6px); }
      .territory { position: relative; overflow: hidden; background: var(--purple); color: var(--paper); }
      .territory__inner { padding-block: 55px 47px; }
      .territory__heading { display: flex; justify-content: space-between; align-items: center; gap: 30px; }
      .territory .eyebrow { color: #d2bed0; }
      .territory__heading p:last-child { font-size: 11px; color: #ccb9c9; max-width: 300px; }
      .territory__word { font: 400 clamp(100px, 17vw, 245px)/1.1 var(--serif); text-align: center; letter-spacing: -.05em; color: #e8dce5; margin: 8px 0 4px; }
      .territory__locations { display: grid; grid-template-columns: repeat(3, 1fr); border-top: 1px solid #ffffff30; }
      .territory__location { display: flex; justify-content: center; align-items: center; gap: 12px; padding-top: 26px; }
      .territory__location .icon { color: #c8b0c2; width: 17px; height: 17px; }
      .territory__location strong { font-size: 11px; font-weight: 500; }
      .territory__location small { font-size: 8px; color: #c8b0c2; margin-left: 2px; }
      .faq { display: grid; grid-template-columns: .85fr 1.3fr; gap: 95px; padding-block: 94px 106px; }
      .faq .eyebrow { margin-bottom: 21px; }
      .faq h3 { font: 400 57px/.98 var(--serif); color: var(--purple); letter-spacing: -.04em; }
      .faq__intro { color: var(--muted); font-size: 12px; max-width: 255px; margin-top: 21px; }
      .faq details { border-bottom: 1px solid #cdbfc9; }
      .faq details:first-child { border-top: 1px solid #cdbfc9; }
      .faq summary { display: flex; justify-content: space-between; gap: 22px; align-items: center; cursor: pointer; list-style: none; font-size: 12px; line-height: 1.7; color: var(--purple); padding-block: 25px; }
      .faq summary::-webkit-details-marker { display: none; }
      .faq summary::after { content: '+'; font: 24px var(--serif); }
      .faq details[open] summary::after { content: '−'; }
      .faq details p { font-size: 12px; color: var(--muted); padding: 0 27px 24px 0; }
      @media (max-width: 1100px) { .services, .faq { gap: 45px; } .service__link { gap: 13px; } .service h3 { font-size: 29px; } }
      @media (max-width: 760px) {
        .services { grid-template-columns: 1fr; padding-block: 58px 66px; gap: 34px; }
        .services__intro { position: static; }
        .services__intro .section-heading { max-width: 440px; font-size: 51px; }
        .services__intro .eyebrow { margin-bottom: 19px; }
        .services__intro p:last-of-type { max-width: 410px; margin-top: 20px; }
        .services__index { display: none; }
        .service__link { grid-template-columns: 17px minmax(0, 1fr) 32px; gap: 11px; padding-block: 23px; }
        .service h3 { font-size: 29px; }
        .service__arrow { width: 32px; height: 32px; }
        .service__number { font-size: 8px; padding-top: 9px; }
        .service p { font-size: 11px; }
        .territory__inner { padding-block: 37px 32px; }
        .territory__heading { align-items: flex-start; flex-direction: column; gap: 13px; }
        .territory__word { font-size: clamp(87px, 21vw, 150px); margin-block: 23px 14px; }
        .territory__location { flex-direction: column; gap: 6px; padding-top: 20px; }
        .territory__location small { display: none; }
        .territory__location strong { font-size: 10px; }
        .faq { grid-template-columns: 1fr; gap: 30px; padding-block: 58px 64px; }
        .faq h3 { font-size: 50px; }
        .faq__intro { max-width: 320px; }
      }
    </style>
    <div class="services section-inner">
      <div class="services__intro"><p class="eyebrow">01 / Lo que hacemos</p><h2 class="section-heading" id="servicios-title">Nuestros servicios <em>destacados.</em></h2><p>Tu procedimiento requiere atención en cada fase. Nos ocupamos de las gestiones para que tú puedas centrarte en lo importante.</p><div class="services__index"><span>06</span><small>Servicios.<br>Un mismo compromiso.</small></div></div>
      <ol class="services__list">${services.map((service, index) => `<li class="service"><a class="service__link" href="#contacto" data-service="${service.title}" aria-label="Consultar sobre ${service.title.toLowerCase()}"><span class="service__number">0${index + 1}</span><div><h3>${service.title}</h3><p>${service.description}</p></div><span class="service__arrow">${icon('diagonal')}</span></a></li>`).join('')}</ol>
    </div>
    <div data-about></div>
    <div class="territory"><div class="territory__inner section-inner"><div class="territory__heading"><p class="eyebrow">03 / Cerca de donde nos necesitas</p><p>Representación en Palma, Manacor e Inca.<br>Otros partidos judiciales, por encargo.</p></div><p class="territory__word" aria-hidden="true">Mallorca.</p><div class="territory__locations">${['Palma', 'Manacor', 'Inca'].map((place, index) => `<div class="territory__location">${icon('pin')}<strong>${place}</strong><small>0${index + 1}</small></div>`).join('')}</div></div></div>
    <div class="faq section-inner"><div><p class="eyebrow">Antes de dar el primer paso</p><h3>Claridad desde<br>el principio.</h3><p class="faq__intro">Resolvemos algunas de las dudas más habituales sobre nuestros servicios.</p></div><div>
      <details><summary>¿Qué servicios puedo consultar?</summary><p>Puedes contactar para consultar la representación procesal, la tramitación judicial, los actos de comunicación y el seguimiento de plazos. Describe brevemente qué gestión necesitas.</p></details>
      <details><summary>¿En qué partidos judiciales trabaja el despacho?</summary><p>En Palma, Manacor e Inca. Para actuaciones en otros partidos judiciales, consulta previamente la disponibilidad por encargo.</p></details>
      <details><summary>¿Cómo puedo contactar?</summary><p>Puedes llamar al <a href="tel:${site.telephone}">${site.telephoneLabel}</a> o preparar una consulta por WhatsApp en el formulario. El horario publicado del despacho es de lunes a viernes, de 8:00 a 19:00.</p></details>
    </div></div>`;
  root.querySelector('[data-about]').replaceWith(About());
  return root;
}
