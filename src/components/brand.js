export function Brand() {
  return `<style>
    .brand { display: inline-flex; flex-direction: column; align-items: center; color: inherit; }
    .brand strong { font: 400 34px/.9 var(--serif); letter-spacing: .02em; }
    .brand small { font-size: 9px; font-weight: 500; letter-spacing: .24em; margin-top: 9px; }
  </style><span class="brand" aria-hidden="true"><strong>TOMÁS</strong><small>PROCURADOR</small></span>`;
}
