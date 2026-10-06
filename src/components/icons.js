// Iconos decorativos: cada control mantiene su propio nombre accesible.
const paths = {
  arrow: '<path d="M4 12h15m-6-6 6 6-6 6"/>',
  diagonal: '<path d="M6 18 18 6M6 6h12v12"/>',
  phone: '<path d="m8 3 3 5-3 3a15 15 0 0 0 5 5l3-3 5 3c-1 5-4 6-8 4C7 18 3 13 3 7c0-2 2-4 5-4Z"/>',
  pin: '<path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 0 1 14 0Z"/><circle cx="12" cy="10" r="2"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  check: '<path d="m5 12 4 4L19 6"/>',
  scales: '<path d="M12 3v18M7 21h10M4 7h16M5 7l-3 7h6L5 7Zm14 0-3 7h6l-3-7Z"/><path d="M2 14q3 4 6 0m8 0q3 4 6 0"/>',
  document: '<path d="M14 2H5v20h14V7l-5-5Zm0 0v5h5M8 12h8M8 16h6"/>',
  chat: '<path d="M21 11a9 9 0 0 1-13 8l-5 2 1-6a9 9 0 1 1 17-4Z"/><path d="M8 10h8M8 14h5"/>',
  folder: '<path d="M3 6h7l2 3h9v11H3V6Zm0 0V4h7l2 2h8v3"/>',
  wallet: '<path d="M20 7H4V4h15v3ZM4 7v13h17V7M21 11h-6v5h6"/><path d="M17 13.5h.1"/>',
  people: '<circle cx="9" cy="7" r="3"/><path d="M3 21v-3a6 6 0 0 1 12 0v3M16 4a3 3 0 0 1 0 6m2 4a5 5 0 0 1 3 4v3"/>',
};

export function icon(name) {
  return `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name] ?? paths.arrow}</svg>`;
}
