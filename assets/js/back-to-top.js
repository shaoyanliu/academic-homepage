// Original template helper; distributed under this repository's CC0 license.
(function () {
  "use strict";

  var button = document.createElement("button");
  button.id = "back-to-top";
  button.type = "button";
  button.textContent = "Back to Top";
  button.setAttribute("aria-label", "Back to top of page");
  button.hidden = true;
  document.body.appendChild(button);

  function updateVisibility() {
    button.hidden = window.scrollY < 200;
  }

  button.addEventListener("click", function () {
    var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  });

  window.addEventListener("scroll", updateVisibility, { passive: true });
  updateVisibility();
})();
