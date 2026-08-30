window.Portfolio = window.Portfolio || {};

Portfolio.theme = {
  apply: function (theme) {
    document.documentElement.setAttribute("data-theme", theme);
    var btn = document.getElementById("themeToggle");
    btn.textContent = theme === "dark" ? "☀️" : "🌙";
    btn.setAttribute("aria-label", theme === "dark" ? "Light mode" : "Dark mode");
    localStorage.setItem("pf-theme", theme);
  },
  init: function () {
    var saved = localStorage.getItem("pf-theme");
    var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    this.apply(saved || (prefersDark ? "dark" : "light"));
    var self = this;
    document.getElementById("themeToggle").addEventListener("click", function () {
      self.apply(document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark");
    });
  }
};

Portfolio.boot = function () {
  document.getElementById("year").textContent = String(new Date().getFullYear());
  Portfolio.theme.init();
  Portfolio.i18n.init();
  Portfolio.nav.init();
  Portfolio.contact.init();
  Portfolio.projectsUi.init();
  Portfolio.skillsUi.init();
  Portfolio.i18n.apply();
  Portfolio.motion.init();

  function printCv() { window.print(); }
  ["btnPrint", "btnPrintHero", "btnPrint2"].forEach(function (id) {
    var el = document.getElementById(id);
    if (el) el.addEventListener("click", printCv);
  });
};

document.addEventListener("DOMContentLoaded", Portfolio.boot);
