import { site } from '../data/site.js';
import { icon } from './icons.js';

const services = [
  { title: 'Representación procesal', icon: 'scales', description: 'Representación ante los juzgados e impulso del procedimiento, en coordinación con tu abogado.' },
  { title: 'Actos de comunicación', icon: 'chat', description: 'Notificaciones, citaciones, requerimientos y emplazamientos con atención a cada diligencia.' },
  { title: 'Tramitación judicial', icon: 'folder', description: 'Gestión de mandamientos, testimonios, oficios y exhortos en Palma, Manacor e Inca.' },
  { title: 'Control de plazos', icon: 'clock', description: 'Seguimiento diario de los plazos y señalamientos para mantener el procedimiento al día.' },
  { title: 'Gestión de depósitos y tasas', icon: 'wallet', description: 'Consignación de depósitos y liquidación de tasas vinculadas al procedimiento judicial.' },
  { title: 'Acompañamiento judicial', icon: 'people', description: 'Acompañamiento al cliente en sus comparecencias y atención a las gestiones en sede judicial.' },
];

export function Services() {
  const root = document.createElement('div');
  root.innerHTML = `
    <style>
      .services { padding-block: 88px 80px; }
      .services__heading { display: grid; grid-template-columns: 1.25fr 1fr; gap: 70px; align-items: end; margin-bottom: 38px; }
      .services__heading .eyebrow { margin-bottom: 16px; }
      .services__heading .section-heading { max-width: 520px; }
      .services__intro { color: var(--muted); font-size: 15px; padding-bottom: 4px; max-width: 410px; }
      .services__grid { display: grid; grid-template-columns: repeat(3, 1fr); border-top: 1px solid var(--line); border-left: 1px solid var(--line); }
      .service { padding: 32px 30px 27px; border-right: 1px solid var(--line); border-bottom: 1px solid var(--line); background: #fffefa; display: flex; flex-direction: column; transition: background .2s; }
      .service:hover { background: #f1edf3; }
      .service__top { display: flex; align-items: center; justify-content: space-between; margin-bottom: 30px; color: #796285; }
      .service__top .icon { width: 28px; height: 28px; }
      .service__number { color: #8a818f; font-size: 11px; letter-spacing: .1em; }
      .service h3 { font: 23px/1.2 var(--serif); color: var(--purple); margin-bottom: 13px; }
      .service p { font-size: 13px; color: var(--muted); margin-bottom: 24px; }
      .service__link { display: flex; justify-content: space-between; align-items: center; gap: 10px; text-decoration: none; font-size: 11px; font-weight: 600; color: var(--purple); margin-top: auto; min-height: 30px; }
      .service__link .icon { width: 18px; height: 18px; transition: transform .2s; }
      .service__link:hover .icon { transform: translate(3px, -3px); }
      .approach { margin-top: 68px; background: var(--purple); color: #f8f4fa; display: grid; grid-template-columns: 1fr 1.15fr; gap: 64px; padding: 46px 48px; border-radius: 4px; }
      .approach .eyebrow { color: #c7afce; margin-bottom: 18px; }
      .approach h3 { font: 36px/1.14 var(--serif); letter-spacing: -.025em; margin-bottom: 18px; }
      .approach__intro { font-size: 13px; color: #d7cddb; }
      .approach__steps { list-style: none; padding: 0; margin: 0; }
      .approach__steps li { display: flex; gap: 20px; padding-block: 16px; border-bottom: 1px solid #ffffff24; }
      .approach__steps li:first-child { padding-top: 2px; }
      .approach__steps li:last-child { border-bottom: 0; padding-bottom: 0; }
      .approach__steps span { font-size: 12px; color: #c5accd; padding-top: 3px; }
      .approach__steps strong { font-size: 13px; display: block; font-weight: 600; margin-bottom: 5px; }
      .approach__steps p { color: #d7cddb; font-size: 12px; }
      .faq { display: grid; grid-template-columns: .9fr 1.3fr; gap: 80px; padding-top: 78px; }
      .faq h3 { font: 34px/1.2 var(--serif); color: var(--purple); margin: 14px 0 18px; }
      .faq__intro { font-size: 14px; color: var(--muted); }
      .faq details { border-bottom: 1px solid var(--line); }
      .faq details:first-child { border-top: 1px solid var(--line); }
      .faq summary { display: flex; gap: 20px; justify-content: space-between; align-items: center; cursor: pointer; list-style: none; padding-block: 22px; font-size: 14px; font-weight: 600; color: var(--purple); }
      .faq summary::-webkit-details-marker { display: none; }
      .faq summary::after { content: '+'; font-size: 22px; font-weight: 400; color: #836b8d; }
      .faq details[open] summary::after { content: '−'; }
      .faq details p { font-size: 13px; color: var(--muted); padding: 0 35px 23px 0; }
      @media (max-width: 1000px) { .services__heading { gap: 35px; } .service { padding: 26px 22px; } .approach { gap: 32px; padding: 36px; } .faq { gap: 40px; } }
      @media (max-width: 760px) {
        .services { padding-block: 58px; }
        .services__heading, .approach, .faq { grid-template-columns: 1fr; gap: 24px; }
        .services__heading { margin-bottom: 28px; }
        .services__grid { grid-template-columns: 1fr; }
        .service { padding: 27px; }
        .service__top { margin-bottom: 20px; }
        .service h3 { font-size: 25px; }
        .service p { font-size: 14px; }
        .service__link { font-size: 12px; }
        .approach { margin-top: 40px; padding: 30px 26px; gap: 30px; }
        .approach h3 { font-size: 32px; }
        .faq { padding-top: 50px; }
      }
      @media (min-width: 520px) and (max-width: 760px) { .services__grid { grid-template-columns: repeat(2, 1fr); } }
    </style>
    <div class="services section-inner">
      <div class="services__heading">
        <div><p class="eyebrow">A tu lado, en cada trámite</p><h2 class="section-heading" id="servicios-title">Nuestros servicios<br>destacados</h2></div>
        <p class="services__intro">Una gestión procesal integral, con atención al detalle y comunicación directa. Para particulares y profesionales del derecho.</p>
      </div>
      <div class="services__grid">${services.map((service, index) => `
        <article class="service">
          <div class="service__top">${icon(service.icon)}<span class="service__number">0${index + 1}</span></div>
          <h3>${service.title}</h3><p>${service.description}</p>
          <a class="service__link" href="#contacto" data-service="${service.title}" aria-label="Consultar sobre ${service.title.toLowerCase()}">Consultar este servicio ${icon('diagonal')}</a>
        </article>`).join('')}
      </div>
      <div class="approach">
        <div><p class="eyebrow">Cercanía y rigor</p><h3>Detrás de cada expediente,<br>hay una persona.</h3><p class="approach__intro">${site.professional} pone el seguimiento del procedimiento y el contacto directo en el centro de su trabajo.</p></div>
        <ol class="approach__steps">
          <li><span>01</span><div><strong>Escuchamos tu consulta</strong><p>Nos cuentas qué necesitas y en qué punto se encuentra el procedimiento.</p></div></li>
          <li><span>02</span><div><strong>Coordinamos las gestiones</strong><p>Organizamos la representación y los trámites en contacto con tu abogado.</p></div></li>
          <li><span>03</span><div><strong>Seguimos cada paso</strong><p>Controlamos plazos, comunicaciones y señalamientos durante la tramitación.</p></div></li>
        </ol>
      </div>
      <div class="faq">
        <div><p class="eyebrow">Resolvemos tus dudas</p><h3>Antes de empezar.</h3><p class="faq__intro">Algunas respuestas para conocer mejor cómo podemos ayudarte.</p></div>
        <div>
          <details><summary>¿Qué servicios puedo consultar?</summary><p>Puedes contactar para consultar la representación procesal, la tramitación judicial, los actos de comunicación y el seguimiento de plazos. Describe brevemente qué gestión necesitas.</p></details>
          <details><summary>¿En qué partidos judiciales trabaja el despacho?</summary><p>En Palma, Manacor e Inca. Para actuaciones en otros partidos judiciales, consulta previamente la disponibilidad por encargo.</p></details>
          <details><summary>¿Cómo puedo contactar?</summary><p>Puedes llamar al <a href="tel:${site.telephone}">${site.telephoneLabel}</a> o preparar una consulta por WhatsApp en el formulario. El horario publicado del despacho es de lunes a viernes, de 8:00 a 19:00.</p></details>
        </div>
      </div>
    </div>`;
  return root;
}
