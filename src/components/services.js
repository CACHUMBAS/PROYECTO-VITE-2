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
      .services { display: grid; grid-template-columns: .85fr 1.3fr; gap: 95px; padding-block: 100px 110px; }
      .services__intro { position: sticky; top: 142px; align-self: start; }
      .services__intro .eyebrow { margin-bottom: 22px; }
      .services__intro .section-heading { max-width: 440px; font-size: clamp(53px, 5.1vw, 74px); line-height: .95; }
      .services__intro .section-heading em { color: var(--accent); font-weight: 400; }
      .services__intro p:last-of-type { max-width: 345px; font-size: 14px; color: var(--muted); margin-top: 25px; }
      .services__index { display: flex; align-items: center; gap: 20px; margin-top: 38px; color: var(--accent); }
      .services__index span { font: 58px/1 var(--serif); }
      .services__index small { font-size: 10px; letter-spacing: .1em; text-transform: uppercase; line-height: 1.8; color: var(--muted); }
      .services__list { margin: 0; padding: 0; list-style: none; border-top: 1px solid var(--line); min-width: 0; }
      .service { border-bottom: 1px solid var(--line); }
      .service summary { display: grid; grid-template-columns: 24px minmax(0, 1fr) 25px; gap: 23px; padding: 28px 0; align-items: center; list-style: none; cursor: pointer; }
      .service summary::-webkit-details-marker { display: none; }
      .service__number { font-size: 11px; color: var(--accent); }
      .service__title { font: 400 34px/1.15 var(--serif); letter-spacing: -.025em; color: var(--ink); }
      .service__toggle { position: relative; width: 22px; height: 22px; }
      .service__toggle::before, .service__toggle::after { content: ''; position: absolute; background: currentColor; top: 10px; left: 4px; width: 14px; height: 1px; }
      .service__toggle::after { transform: rotate(90deg); transition: transform .2s; }
      .service[open] .service__toggle::after { transform: rotate(0); }
      .service summary:hover .service__title { color: var(--accent); }
      .service__body { padding: 0 48px 28px 47px; }
      .service__body p { color: var(--muted); font-size: 14px; max-width: 450px; }
      .service__link { display: inline-flex; align-items: center; gap: 15px; padding-block: 14px 10px; margin-top: 6px; font-size: 12px; text-decoration-thickness: 1px; }
      .service__link .icon { width: 16px; height: 16px; }
      .territory { background: var(--ink); color: var(--paper); }
      .territory__inner { display: grid; grid-template-columns: .85fr 1.3fr; align-items: center; gap: 95px; padding-block: 86px; }
      .territory .eyebrow { color: var(--champagne); margin-bottom: 27px; }
      .territory__title { font: 400 clamp(68px, 7vw, 100px)/.93 var(--serif); letter-spacing: -.045em; }
      .territory__title em { color: var(--champagne); font-weight: 400; }
      .territory__description { color: #d8d3c7; font-size: 14px; max-width: 345px; margin-top: 26px; }
      .territory__contact { display: inline-flex; align-items: center; gap: 24px; border-bottom: 1px solid #b6a888; padding-block: 15px 12px; margin-top: 15px; font-size: 13px; text-decoration: none; }
      .territory__contact .icon { width: 18px; height: 18px; transition: transform .2s; }
      .territory__contact:hover { color: var(--champagne); }
      .territory__contact:hover .icon { transform: translate(3px, -3px); }
      .territory__locations { list-style: none; margin: 0; padding: 0; border-top: 1px solid #ffffff40; }
      .territory__location { display: grid; grid-template-columns: 32px 1fr 24px; align-items: center; gap: 24px; padding-block: 30px; border-bottom: 1px solid #ffffff40; }
      .territory__location > span { font-size: 11px; color: var(--champagne); font-variant-numeric: tabular-nums; }
      .territory__location strong { font: 400 clamp(42px, 4vw, 58px)/1 var(--serif); }
      .territory__location .icon { width: 20px; height: 20px; color: var(--champagne); }
      .territory__note { color: #d8d3c7; font-size: 12px; margin-top: 23px; line-height: 1.7; max-width: 420px; }
      .faq { display: grid; grid-template-columns: .85fr 1.3fr; gap: 95px; padding-block: 94px 106px; }
      .faq .eyebrow { margin-bottom: 21px; }
      .faq h3 { font: 400 57px/.98 var(--serif); color: var(--ink); letter-spacing: -.04em; }
      .faq__intro { color: var(--muted); font-size: 14px; max-width: 255px; margin-top: 21px; }
      .faq details { border-bottom: 1px solid #c9c6bc; }
      .faq details:first-child { border-top: 1px solid #c9c6bc; }
      .faq summary { display: flex; justify-content: space-between; gap: 22px; align-items: center; cursor: pointer; list-style: none; font-size: 14px; line-height: 1.7; color: var(--ink); padding-block: 25px; }
      .faq summary::-webkit-details-marker { display: none; }
      .faq__toggle { flex-shrink: 0; position: relative; width: 22px; height: 22px; }
      .faq__toggle::before, .faq__toggle::after { content: ''; position: absolute; top: 10px; left: 4px; width: 14px; height: 1px; background: currentColor; }
      .faq__toggle::after { transform: rotate(90deg); transition: transform .2s; }
      .faq details[open] .faq__toggle::after { transform: rotate(0); }
      .faq summary:hover { color: var(--accent); }
      .faq details p { font-size: 14px; color: var(--muted); padding: 0 27px 24px 0; }
      @media (max-width: 1100px) { .services, .faq, .territory__inner { gap: 45px; } .service summary { gap: 13px; } .service__title { font-size: 30px; } .service__body { padding-left: 37px; padding-right: 25px; } }
      @media (max-width: 760px) {
        .services { grid-template-columns: 1fr; padding-block: 60px 66px; gap: 34px; }
        .services__intro { position: static; }
        .services__intro .section-heading { max-width: 440px; font-size: 56px; }
        .services__intro .eyebrow { margin-bottom: 19px; }
        .services__intro p:last-of-type { max-width: 410px; margin-top: 20px; }
        .services__index { display: none; }
        .service summary { grid-template-columns: 18px minmax(0, 1fr) 22px; gap: 11px; padding-block: 23px; }
        .service__title { font-size: 28px; }
        .service__body { padding-left: 29px; padding-right: 0; }
        .territory__inner { grid-template-columns: 1fr; padding-block: 56px; gap: 35px; }
        .territory__title { font-size: clamp(66px, 14vw, 90px); }
        .territory__description { max-width: 450px; }
        .territory__location { padding-block: 24px; gap: 15px; grid-template-columns: 24px 1fr 22px; }
        .territory__location strong { font-size: 45px; }
        .faq { grid-template-columns: 1fr; gap: 30px; padding-block: 58px 64px; }
        .faq h3 { font-size: 50px; }
        .faq__intro { max-width: 320px; }
      }
    </style>
    <div class="services section-inner">
      <div class="services__intro"><h2 class="eyebrow" id="servicios-title">Nuestros servicios destacados</h2><p class="section-heading">El detalle<br>marca la<br><em>diferencia.</em></p><p>Tu procedimiento requiere atención en cada fase. Nos ocupamos de las gestiones para que tú puedas centrarte en lo importante.</p><div class="services__index"><span>06</span><small>Servicios.<br>Un mismo compromiso.</small></div></div>
      <ol class="services__list">${services.map((service, index) => `<li><details class="service"${index === 0 ? ' open' : ''}><summary><span class="service__number" aria-hidden="true">0${index + 1}</span><span class="service__title">${service.title}</span><span class="service__toggle" aria-hidden="true"></span></summary><div class="service__body"><p>${service.description}</p><a class="service__link" href="#contacto" data-service="${service.title}" aria-label="Consultar este servicio: ${service.title.toLowerCase()}">Consultar este servicio ${icon('diagonal')}</a></div></details></li>`).join('')}</ol>
    </div>
    <div data-about></div>
    <section class="territory" aria-labelledby="territory-title"><div class="territory__inner section-inner">
      <div><p class="eyebrow">03 / El territorio</p><h3 class="territory__title" id="territory-title">Mallorca.<br><em>De cerca.</em></h3><p class="territory__description">Representación procesal en Palma, Manacor e Inca. La cercanía al territorio, al servicio de tu procedimiento.</p><a class="territory__contact" href="#contacto" data-service="Consulta general">Consultar una actuación ${icon('diagonal')}</a></div>
      <div><p class="eyebrow">Partidos judiciales</p><ul class="territory__locations">${['Palma', 'Manacor', 'Inca'].map((place, index) => `<li class="territory__location"><span aria-hidden="true">0${index + 1}</span><strong>${place}</strong>${icon('pin')}</li>`).join('')}</ul><p class="territory__note">Para actuaciones en otros partidos judiciales, consulta previamente la disponibilidad por encargo.</p></div>
    </div></section>
    <div class="faq section-inner"><div><p class="eyebrow">Antes de dar el primer paso</p><h3>Claridad desde<br>el principio.</h3><p class="faq__intro">Resolvemos algunas de las dudas más habituales sobre nuestros servicios.</p></div><div>
      <details><summary><span>¿Qué servicios puedo consultar?</span><span class="faq__toggle" aria-hidden="true"></span></summary><p>Puedes contactar para consultar la representación procesal, la tramitación judicial, los actos de comunicación y el seguimiento de plazos. Describe brevemente qué gestión necesitas.</p></details>
      <details><summary><span>¿En qué partidos judiciales trabaja el despacho?</span><span class="faq__toggle" aria-hidden="true"></span></summary><p>En Palma, Manacor e Inca. Para actuaciones en otros partidos judiciales, consulta previamente la disponibilidad por encargo.</p></details>
      <details><summary><span>¿Cómo puedo contactar?</span><span class="faq__toggle" aria-hidden="true"></span></summary><p>Puedes llamar al <a href="tel:${site.telephone}">${site.telephoneLabel}</a> o preparar una consulta por WhatsApp en el formulario. El horario publicado del despacho es de lunes a viernes, de 8:00 a 19:00.</p></details>
      <details><summary><span>¿El formulario envía mi consulta automáticamente?</span><span class="faq__toggle" aria-hidden="true"></span></summary><p>No. Primero se prepara una vista previa en esta página. Después puedes abrir WhatsApp, revisar el mensaje y decidir si lo envías. Si modificas un campo, tendrás que preparar de nuevo la consulta.</p></details>
    </div></div>`;
  root.querySelector('[data-about]').replaceWith(About());
  return root;
}
