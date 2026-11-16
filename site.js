// ============================================================
// CHAVE UNICA: mude para true no dia em que o produto estiver
// realmente a venda na Kiwify (e o checkout testado).
// false = todos os botoes de compra mostram "Em breve".
// ============================================================
var VENDAS_ABERTAS = false;
var CHECKOUT_URL = "https://pay.kiwify.com.br/OF2ezKa";

(function () {
  "use strict";
  // Sem JS (ou com a chave em false) o HTML ja esta no estado "Em breve".
  if (VENDAS_ABERTAS) {
    document.documentElement.setAttribute("data-vendas", "abertas");
    document.querySelectorAll("a.buy").forEach(function (a) {
      a.href = CHECKOUT_URL;
      a.rel = "noopener";
      a.textContent = a.getAttribute("data-live");
      a.classList.remove("soon");
      a.classList.add("live");
    });
    document.querySelectorAll("[data-soon-only]").forEach(function (el) { el.hidden = true; });
    document.querySelectorAll("[data-live-only]").forEach(function (el) { el.hidden = false; });
  }
  // Respeita "reduzir movimento": pausa o preview do topo e mostra controles.
  var v = document.querySelector("video");
  if (v && window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches) {
    v.pause();
    v.removeAttribute("autoplay");
    v.controls = true;
  }
})();
