import { site, subjects } from '../data/site.js';

export function validateContact(data) {
  const errors = {};
  const name = (data.name ?? '').trim();
  const email = (data.email ?? '').trim();
  const message = (data.message ?? '').trim();

  if (name.length < 2 || name.length > 80) {
    errors.name = 'Escribe tu nombre (entre 2 y 80 caracteres).';
  }
  if (email && (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))) {
    errors.email = 'Revisa el correo: por ejemplo, nombre@ejemplo.com.';
  }
  if (!subjects.includes(data.subject)) {
    errors.subject = 'Selecciona el motivo de tu consulta.';
  }
  if (message.length < 20 || message.length > 1500) {
    errors.message = 'Describe tu consulta en entre 20 y 1500 caracteres.';
  }
  if (data.consent !== true) {
    errors.consent = 'Confirma que deseas continuar la consulta en WhatsApp.';
  }
  return errors;
}

export function buildWhatsAppUrl(data) {
  if (Object.keys(validateContact(data)).length) {
    throw new Error('Se necesitan datos válidos para preparar la consulta.');
  }
  const lines = [`Hola, soy ${data.name.trim()}.`, `Asunto: ${data.subject}`];
  if (data.email?.trim()) lines.push(`Correo: ${data.email.trim()}`);
  lines.push('', data.message.trim());
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(lines.join('\n'))}`;
}
