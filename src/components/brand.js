import { icon } from './icons.js';

export function Brand() {
  return `<style>
    .brand { display: inline-flex; align-items: center; gap: 13px; color: inherit; }
    .brand__mark { width: 39px; height: 47px; display: grid; place-items: center; border: 1px solid currentColor; border-radius: 20px 20px 0 0; }
    .brand__mark .icon { width: 25px; height: 25px; }
    .brand__name { display: flex; flex-direction: column; }
    .brand__name small { font-size: 8px; font-weight: 500; letter-spacing: .2em; margin-bottom: 0; }
    .brand__name strong { font: 400 35px/.95 var(--serif); letter-spacing: -.04em; }
  </style><span class="brand" aria-hidden="true"><span class="brand__mark">${icon('scales')}</span><span class="brand__name"><small>PROCURADOR</small><strong>TOMÁS</strong></span></span>`;
}
