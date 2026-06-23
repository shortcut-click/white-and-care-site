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
    });
  });
})();
