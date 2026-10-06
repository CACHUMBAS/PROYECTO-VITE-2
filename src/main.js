import './styles/estilos.css';
import { Navbar } from './components/navbar.js';
import { Section } from './components/section.js';
import { Hero } from './components/hero.js';
import { Services } from './components/services.js';
import { ContactForm } from './components/contact-form.js';
import { Footer } from './components/footer.js';

const app = document.querySelector('#app');
const inicio = Section({ id: 'inicio', contenido: Hero() });
const servicios = Section({ id: 'servicios', contenido: Services() });
const contacto = Section({ id: 'contacto', contenido: ContactForm() });

// Los componentes se incorporan en el orden requerido por el ejercicio.
app.append(Navbar(), inicio, servicios, contacto, Footer());

// Agrupamos las tres secciones en el área principal, conservando su orden.
const main = document.createElement('main');
inicio.before(main);
main.append(inicio, servicios, contacto);

app.addEventListener('click', (event) => {
  const serviceLink = event.target.closest('[data-service]');
  if (serviceLink) {
    document.dispatchEvent(new CustomEvent('service-selected', { detail: serviceLink.dataset.service }));
  }
});

// Las anclas recibidas al abrir la página se resuelven tras montar los componentes.
if (['#inicio', '#servicios', '#contacto'].includes(location.hash)) {
  requestAnimationFrame(() => document.querySelector(location.hash)?.scrollIntoView());
}
