import test from 'node:test';
import assert from 'node:assert/strict';
import { validateContact, buildWhatsAppUrl } from '../src/lib/contact.js';

const valid = {
  name: 'Ana Pérez', email: '', subject: 'Consulta general',
  message: 'Quisiera información sobre sus servicios.', consent: true,
};

test('rechaza campos vacíos, espacios y falta de consentimiento', () => {
  const errors = validateContact({ name: '  ', email: '', subject: '', message: '  ', consent: false });
  assert.deepEqual(Object.keys(errors).sort(), ['consent', 'message', 'name', 'subject']);
});

test('acepta datos válidos con correo opcional y espacios exteriores', () => {
  assert.deepEqual(validateContact({ ...valid, name: '  Ana Pérez  ' }), {});
  assert.deepEqual(validateContact({ ...valid, email: '  ana@example.com  ' }), {});
});

test('rechaza correos incompletos sin bloquear direcciones con etiquetas', () => {
  for (const email of ['ana', 'ana@', 'ana@example', 'ana perez@example.com']) {
    assert.ok(validateContact({ ...valid, email }).email, email);
  }
  assert.deepEqual(validateContact({ ...valid, email: 'ana+consulta@example.com' }), {});
});

test('valida límites y asuntos permitidos antes de preparar la consulta', () => {
  assert.ok(validateContact({ ...valid, name: 'A' }).name);
  assert.ok(validateContact({ ...valid, name: 'A'.repeat(81) }).name);
  assert.ok(validateContact({ ...valid, message: 'x'.repeat(19) }).message);
  assert.ok(validateContact({ ...valid, message: 'x'.repeat(1501) }).message);
  assert.ok(validateContact({ ...valid, subject: 'Asunto desconocido' }).subject);
  assert.deepEqual(validateContact({ ...valid, name: 'Al', message: 'x'.repeat(20) }), {});
  assert.deepEqual(validateContact({ ...valid, name: 'A'.repeat(80), message: 'x'.repeat(1500) }), {});
});

test('no genera enlaces para datos inválidos', () => {
  assert.throws(() => buildWhatsAppUrl({ ...valid, consent: false }), /válidos/);
});

test('conserva Unicode, saltos de línea y símbolos sin inyectar parámetros', () => {
  const url = new URL(buildWhatsAppUrl({ ...valid, name: '  Ana & José  ', email: ' ana+consulta@example.com ', message: 'Consulta sobre representación.\nGracias & saludos #1' }));
  assert.equal(url.origin, 'https://wa.me');
  assert.equal(url.pathname, '/34609649224');
  assert.deepEqual([...url.searchParams.keys()], ['text']);
  assert.equal(url.hash, '');
  assert.equal(url.searchParams.get('text'), 'Hola, soy Ana & José.\nAsunto: Consulta general\nCorreo: ana+consulta@example.com\n\nConsulta sobre representación.\nGracias & saludos #1');
});

test('omite la línea de correo cuando no se facilita', () => {
  const url = new URL(buildWhatsAppUrl(valid));
  assert.equal(url.searchParams.get('text'), 'Hola, soy Ana Pérez.\nAsunto: Consulta general\n\nQuisiera información sobre sus servicios.');
});
