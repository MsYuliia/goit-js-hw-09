var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,o){n[e]=o},e.parcelRequired7c6=t);var r=t("iQIUW");const l=document.querySelector('[name="delay"]'),u=document.querySelector('[name="step"]'),i=document.querySelector('[name="amount"]');function c(e,o,n){return new Promise(((t,r)=>{const l=Math.random()>.3,u=o+(e-1)*n;setTimeout((()=>{l?t(`✅ Fulfilled promise ${e} in ${u} ms`):r(`❌ Rejected promise ${e} in ${u} ms`)}),u)}))}document.querySelector("button").addEventListener("click",(function(e){e.preventDefault();const o=Number(l.value),n=Number(u.value),t=Number(i.value);for(let e=1;e<=t;e++)c(e,o,n).then((e=>{r.Notify.success(e),console.log(e)})).catch((e=>{r.Notify.failure(e),console.log(e)}))}));
//# sourceMappingURL=03-promises.ad4dabd0.js.map
