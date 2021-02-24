import { DOMParser } from "https://deno.land/x/deno_dom/deno-dom-wasm.ts";

const logger = (log: any) => {
  console.log("data returned:", log);
};

const res = await fetch("https://github.com/iemong");

const html = await res.text();

const document = new DOMParser().parseFromString(html, 'text/html');

if(!document) throw new Error('cannot get document.')

const grass = document.querySelector('.js-calendar-graph-svg')

logger(grass?.outerHTML);
