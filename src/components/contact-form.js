import { site, subjects } from '../data/site.js';
import { validateContact, buildWhatsAppUrl } from '../lib/contact.js';
import { icon } from './icons.js';

export function ContactForm() {
  const root = document.createElement('div');
  root.className = 'contact';
  root.innerHTML = `
    <style>
      .contact { background: #eee9f0; border-top: 1px solid #e2dbe6; }
      .contact__inner { display: grid; grid-template-columns: 1fr 1.15fr; gap: 80px; padding-block: 76px; }
      .contact__copy .eyebrow { margin-bottom: 18px; }
      .contact__copy .section-heading { font-size: clamp(35px, 3.7vw, 46px); }
      .contact__intro { color: var(--muted); font-size: 14px; margin-top: 23px; max-width: 390px; }
      .contact__channels { list-style: none; padding: 0; margin: 32px 0 0; }
      .contact__channels li { display: flex; align-items: center; gap: 16px; margin-bottom: 23px; }
      .contact__channel-icon { display: grid; place-items: center; width: 43px; height: 43px; border: 1px solid #d6cbdc; border-radius: 50%; color: var(--purple-light); flex-shrink: 0; }
      .contact__channels small { display: block; margin-bottom: 4px; font-size: 10px; color: var(--muted); }
      .contact__channels a { font-size: 19px; font-family: var(--serif); text-decoration: none; color: var(--purple); }
      .contact__channels a:hover { text-decoration: underline; }
      .contact__channels strong { display: block; font-size: 13px; font-weight: 500; color: var(--purple); }
      .contact__note { border-top: 1px solid #d6cbdc; padding-top: 20px; margin-top: 28px; max-width: 390px; font-size: 12px; color: var(--muted); }
      .consultation { background: var(--paper); border: 1px solid #e3dce6; padding: 32px; border-radius: 5px; box-shadow: 0 12px 35px #30203e04; }
      .consultation h3 { font: 26px var(--serif); color: var(--purple); }
      .consultation__intro { font-size: 12px; color: var(--muted); margin: 10px 0 25px; }
      .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }
      .form-field { margin-bottom: 18px; }
      .form-field label { display: block; font-size: 11px; font-weight: 600; color: var(--purple); margin-bottom: 8px; }
      .form-field label span { font-weight: 400; color: var(--muted); }
      .form-field input, .form-field select, .form-field textarea { display: block; width: 100%; border: 1px solid #d6cfd9; border-radius: 3px; color: #302c32; padding: 12px 13px; min-height: 45px; background: #fff; font-size: 13px; }
      .form-field textarea { min-height: 120px; resize: vertical; line-height: 1.65; }
      .form-field input::placeholder, .form-field textarea::placeholder { color: #77717a; }
      .form-field input[aria-invalid='true'], .form-field textarea[aria-invalid='true'], .form-field select[aria-invalid='true'] { border-color: #a22d36; }
      .form-field__hint { display: block; margin-top: 6px; font-size: 10px; color: var(--muted); line-height: 1.5; }
      .form-error { color: #a22d36; font-size: 11px; line-height: 1.5; margin-top: 6px; }
      .form-error:empty { display: none; }
      .form-consent { display: flex; align-items: flex-start; gap: 10px; font-size: 11px; line-height: 1.6; color: var(--muted); cursor: pointer; }
      .form-consent input { margin: 2px 0 0; width: 17px; height: 17px; flex-shrink: 0; accent-color: var(--purple); }
      .consultation__submit { width: 100%; margin-top: 22px; }
      .consultation__privacy { text-align: center; font-size: 10px; color: var(--muted); margin-top: 12px; }
      .consultation__status { font-size: 12px; color: #a22d36; line-height: 1.6; margin-top: 12px; }
      .consultation__status:empty { display: none; }
      .consultation__preview { margin-top: 22px; border-top: 1px solid var(--line); padding-top: 22px; }
      .consultation__preview h4 { font-size: 14px; color: var(--purple); margin: 0 0 8px; }
      .consultation__preview p { font-size: 12px; color: var(--muted); }
      .consultation__message { white-space: pre-wrap; overflow-wrap: anywhere; font-size: 12px; line-height: 1.6; margin: 15px 0; padding: 16px; background: #eee9f0; border-radius: 3px; }
      .consultation__preview .button { width: 100%; }
      @media (max-width: 1000px) { .contact__inner { gap: 36px; } .consultation { padding: 25px; } .form-row { grid-template-columns: 1fr; gap: 0; } }
      @media (max-width: 760px) { .contact__inner { grid-template-columns: 1fr; padding-block: 52px; gap: 32px; } .consultation { padding: 25px 20px; } .form-field input, .form-field textarea, .form-field select { font-size: 16px; } .contact__copy .section-heading { max-width: 480px; } }
    </style>
    <div class="contact__inner section-inner">
      <div class="contact__copy">
        <p class="eyebrow">El primer paso es hablar</p>
        <h2 class="section-heading" id="contacto-title">Contacto y formulario de consulta</h2>
        <p class="contact__intro">Cuéntanos qué necesitas. Te ayudaremos a valorar las gestiones de procuraduría para tu procedimiento.</p>
        <ul class="contact__channels">
          <li><span class="contact__channel-icon">${icon('phone')}</span><div><small>Llámanos</small><a href="tel:${site.telephone}">${site.telephoneLabel}</a></div></li>
          <li><span class="contact__channel-icon">${icon('chat')}</span><div><small>Escríbenos por WhatsApp</small><a href="https://wa.me/${site.whatsapp}" target="_blank" rel="noopener noreferrer">${site.whatsappLabel} ${icon('diagonal')}</a></div></li>
          <li><span class="contact__channel-icon">${icon('clock')}</span><div><small>Horario de atención</small><strong>${site.hours}</strong></div></li>
        </ul>
        <p class="contact__note">${icon('pin')} Palma, Manacor e Inca.<br>Para otros partidos judiciales, consulta la disponibilidad.</p>
      </div>
      <form class="consultation" novalidate aria-labelledby="form-title">
        <h3 id="form-title">¿En qué podemos ayudarte?</h3>
        <p class="consultation__intro">Prepara tu consulta y revísala en WhatsApp antes de enviarla. Todos los campos son obligatorios salvo el correo.</p>
        <div class="form-row">
          <div class="form-field"><label for="contact-name">Tu nombre</label><input id="contact-name" name="name" autocomplete="name" required minlength="2" maxlength="80" placeholder="Nombre y apellidos" aria-describedby="error-name" /><p class="form-error" id="error-name"></p></div>
          <div class="form-field"><label for="contact-email">Correo <span>(opcional)</span></label><input id="contact-email" name="email" type="email" autocomplete="email" spellcheck="false" maxlength="254" placeholder="nombre@ejemplo.com" aria-describedby="error-email" /><p class="form-error" id="error-email"></p></div>
        </div>
        <div class="form-field"><label for="contact-subject">Motivo de la consulta</label><select id="contact-subject" name="subject" required aria-describedby="error-subject"><option value="">Selecciona un motivo</option>${subjects.map((subject) => `<option value="${subject}">${subject}</option>`).join('')}</select><p class="form-error" id="error-subject"></p></div>
        <div class="form-field"><label for="contact-message">Tu consulta</label><textarea id="contact-message" name="message" rows="4" required minlength="20" maxlength="1500" placeholder="Cuéntanos brevemente qué gestión necesitas…" aria-describedby="message-hint error-message"></textarea><small id="message-hint" class="form-field__hint">Entre 20 y 1500 caracteres. Evita incluir datos sensibles o documentación del procedimiento.</small><p class="form-error" id="error-message"></p></div>
        <label class="form-consent"><input type="checkbox" name="consent" required aria-describedby="error-consent" /><span>Quiero continuar mi consulta en WhatsApp y entiendo que allí podré revisar y enviar el mensaje.</span></label>
        <p class="form-error" id="error-consent"></p>
        <button type="submit" class="button consultation__submit">Preparar mi consulta ${icon('arrow')}</button>
        <p class="consultation__privacy">La consulta se prepara en tu dispositivo. No se envía automáticamente.</p>
        <p class="consultation__status" role="status" aria-live="polite"></p>
        <div class="consultation__preview" hidden tabindex="-1" aria-labelledby="preview-title">
          <h4 id="preview-title">Tu consulta está preparada</h4><p>Todavía no se ha enviado. Revisa el texto y continúa en WhatsApp.</p>
          <div class="consultation__message"></div>
          <a class="button" target="_blank" rel="noopener noreferrer">Revisar y enviar en WhatsApp ${icon('diagonal')}</a>
        </div>
      </form>
    </div>`;

  const form = root.querySelector('form');
  const preview = root.querySelector('.consultation__preview');
  const status = root.querySelector('[role="status"]');
  const fieldNames = ['name', 'email', 'subject', 'message', 'consent'];

  const invalidatePreview = () => {
    preview.hidden = true;
    preview.querySelector('a').removeAttribute('href');
    preview.querySelector('.consultation__message').textContent = '';
    status.textContent = '';
  };
  const clearFieldError = (name) => {
    if (!fieldNames.includes(name)) return;
    form.elements.namedItem(name).removeAttribute('aria-invalid');
    root.querySelector(`#error-${name}`).textContent = '';
  };
  form.addEventListener('input', (event) => {
    invalidatePreview();
    clearFieldError(event.target.name);
  });
  form.addEventListener('change', (event) => {
    invalidatePreview();
    clearFieldError(event.target.name);
  });
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    invalidatePreview();
    const data = Object.fromEntries(new FormData(form));
    data.consent = form.elements.namedItem('consent').checked;
    const errors = validateContact(data);
    fieldNames.forEach((name) => {
      root.querySelector(`#error-${name}`).textContent = errors[name] ?? '';
      form.elements.namedItem(name).setAttribute('aria-invalid', String(Boolean(errors[name])));
    });
    if (Object.keys(errors).length) {
      status.textContent = 'Revisa los campos indicados para preparar tu consulta.';
      form.elements.namedItem(Object.keys(errors)[0]).focus();
      return;
    }
    const url = buildWhatsAppUrl(data);
    preview.querySelector('.consultation__message').textContent = new URL(url).searchParams.get('text');
    preview.querySelector('a').href = url;
    preview.hidden = false;
    preview.focus();
  });

  // Un evento explícito evita acoplar las tarjetas al HTML interno del formulario.
  document.addEventListener('service-selected', (event) => {
    if (!subjects.includes(event.detail)) return;
    form.elements.namedItem('subject').value = event.detail;
    clearFieldError('subject');
    invalidatePreview();
  });
  return root;
}
