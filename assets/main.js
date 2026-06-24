/* White & Care — site interactions: mobile menu, FAQ accordion.
   Note: there is no booking form. Every CTA / call / appointment button is a
   tel: link that dials the clinic directly. */
(function () {
  "use strict";

  // ---- Mobile menu ----
  var hamburger = document.querySelector(".wc-hamburger");
  var mobileMenu = document.querySelector(".wc-mobile-menu");
  if (hamburger && mobileMenu) {
    hamburger.addEventListener("click", function () {
      var open = mobileMenu.classList.toggle("open");
      hamburger.setAttribute("aria-expanded", open ? "true" : "false");
    });
    mobileMenu.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () { mobileMenu.classList.remove("open"); });
    });
  }

  // ---- FAQ accordion ----
  document.querySelectorAll(".wc-faq-q").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var item = btn.closest(".wc-faq-item");
      if (!item) return;
      var open = item.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
      wcPush("faq_toggle", {
        faq_question: (btn.textContent || "").replace(/\s*\+\s*$/, "").trim().slice(0, 120),
        faq_state: open ? "open" : "close",
        page_path: location.pathname
      });
    });
  });

  // ---- Tracking : couche dataLayer (consommée par GTM en prod) ----
  // Convention : events en snake_case. GTM crée les triggers sur ces noms et
  // diffuse vers GA4 / Google Ads / Meta. No-op sûr en preview (pas de GTM).
  window.dataLayer = window.dataLayer || [];
  function wcPush(event, params) {
    try { window.dataLayer.push(Object.assign({ event: event }, params || {})); } catch (e) {}
  }
  function wcLocation(el) {
    if (el.closest(".wc-mobile-cta")) return "sticky_mobile";
    if (el.closest(".wc-mobile-menu")) return "mobile_menu";
    if (el.closest(".wc-header")) return "header";
    if (el.closest(".wc-footer")) return "footer";
    if (el.closest(".wc-cta-banner")) return "cta_banner";
    if (el.closest("main")) return "content";
    return "other";
  }
  document.addEventListener("click", function (e) {
    var a = e.target.closest && e.target.closest("a");
    if (!a) return;
    var href = a.getAttribute("href") || "";
    if (href.indexOf("tel:") === 0) {
      // Conversion principale du site : clic-pour-appeler.
      wcPush("phone_call_click", {
        link_location: wcLocation(a),
        link_url: href,
        link_text: (a.textContent || "").trim().slice(0, 80),
        page_path: location.pathname
      });
    } else if (/google\.[a-z.]+\/maps|maps\.google|maps\.app\.goo\.gl/.test(href)) {
      wcPush("directions_click", {
        link_location: wcLocation(a),
        link_url: href,
        page_path: location.pathname
      });
    }
  }, true);
})();
