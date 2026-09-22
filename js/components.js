window.Portfolio = window.Portfolio || {};

Portfolio.theme = {
  apply: function (theme) {
    document.documentElement.setAttribute("data-theme", theme);
    var btn = document.getElementById("themeToggle");
    if (!btn) return;
    btn.textContent = theme === "dark" ? "☀️" : "🌙";
    btn.setAttribute("aria-label", theme === "dark" ? "Light mode" : "Dark mode");
    localStorage.setItem("pf-theme", theme);
  },
  init: function () {
    var saved = localStorage.getItem("pf-theme");
    var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    this.apply(saved || (prefersDark ? "dark" : "light"));
    var self = this;
    var btn = document.getElementById("themeToggle");
    if (btn) {
      btn.addEventListener("click", function () {
        self.apply(document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark");
      });
    }
  }
};

Portfolio.ui = {
  root: function () {
    return document.body.getAttribute("data-root") || "";
  },
  page: function () {
    return document.body.getAttribute("data-page") || "home";
  },
  href: function (file) {
    return this.root() + file;
  },
  mountNav: function () {
    var r = this.root();
    var page = this.page();
    var items = [
      ["home", "index.html", "nav.home"],
      ["about", "about.html", "nav.about"],
      ["expertise", "expertise.html", "nav.expertise"],
      ["projects", "projects.html", "nav.projects"],
      ["experience", "experience.html", "nav.experience"],
      ["skills", "skills.html", "nav.skills"],
      ["contact", "contact.html", "nav.contact"]
    ];
    function links(cls) {
      return items.map(function (it) {
        var current = it[0] === page ? ' aria-current="page"' : "";
        return "<li><a href=\"" + r + it[1] + "\" data-i18n=\"" + it[2] + "\"" + current + "></a></li>";
      }).join("");
    }
    var nav = document.getElementById("site-nav");
    nav.innerHTML =
      '<div class="wrap nav-inner">' +
        '<a class="logo" href="' + r + 'index.html">AYMAN</a>' +
        '<nav aria-label="Primary"><ul class="nav-links">' + links() + "</ul></nav>" +
        '<div class="nav-actions">' +
          '<button type="button" class="lang-btn" data-lang="fr" aria-label="Français">FR</button>' +
          '<button type="button" class="lang-btn" data-lang="en" aria-label="English">EN</button>' +
          '<button type="button" class="btn btn-ghost print-hide" id="btnPrint" data-i18n="nav.download"></button>' +
          '<button type="button" class="icon-btn" id="themeToggle" aria-label="Toggle theme">🌙</button>' +
          '<button type="button" class="hamburger" id="menuBtn" aria-label="Open menu" aria-expanded="false"><span></span><span></span><span></span></button>' +
        "</div></div>" +
        '<div class="mobile-panel" id="mobileMenu"><nav aria-label="Mobile"><ul>' + links() + "</ul></nav></div>";
  },
  mountFooter: function () {
    var el = document.getElementById("site-footer");
    if (!el) return;
    el.innerHTML = '<div class="wrap">© <span id="year"></span> Ayman — <span data-i18n="footer"></span></div>';
    var y = document.getElementById("year");
    if (y) y.textContent = String(new Date().getFullYear());
  },
  social: function (ids, extra) {
    extra = extra || ["linkedin", "github", "email"];
    var c = Portfolio.config;
    var r = this.root();
    var map = {
      linkedin: [c.linkedin, "LinkedIn", "linkedin.svg", ' target="_blank" rel="noopener noreferrer"'],
      github: [c.github, "GitHub", "github.svg", ' target="_blank" rel="noopener noreferrer"'],
      email: ["mailto:" + c.email, "Email", "email.svg", ""],
      whatsapp: [c.whatsapp, "WhatsApp", "whatsapp.svg", ' target="_blank" rel="noopener noreferrer"'],
      telegram: [c.telegram, "Telegram", "telegram.svg", ' rel="noopener noreferrer"'],
      facebook: [c.facebook, "Facebook", "facebook.svg", ' target="_blank" rel="noopener noreferrer"'],
      instagram: [c.instagram, "Instagram", "instagram.svg", ' target="_blank" rel="noopener noreferrer"']
    };
    var box = document.getElementById(ids);
    if (!box) return;
    box.innerHTML = extra.map(function (key) {
      var m = map[key];
      return '<a href="' + m[0] + '"' + m[3] + ' aria-label="' + m[1] + '"><span class="tooltip">' + m[1] + '</span><img src="' + r + "assets/icons/" + m[2] + '" alt="" width="16" height="16"></a>';
    }).join("");
  },
  initMenu: function () {
    var btn = document.getElementById("menuBtn");
    var panel = document.getElementById("mobileMenu");
    if (!btn || !panel) return;
    btn.addEventListener("click", function () {
      var open = panel.classList.toggle("is-open");
      btn.classList.toggle("is-open", open);
      btn.setAttribute("aria-expanded", String(open));
    });
  },
  initPrint: function () {
    function printCv() { window.print(); }
    document.querySelectorAll("#btnPrint, #btnPrint2").forEach(function (el) {
      el.addEventListener("click", printCv);
    });
  },
  reveal: function () {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.querySelectorAll(".js-in").forEach(function (el) { el.classList.add("is-visible"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("is-visible");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll(".js-in").forEach(function (el) { io.observe(el); });
  }
};

document.addEventListener("DOMContentLoaded", function () {
  Portfolio.ui.mountNav();
  Portfolio.ui.mountFooter();
  Portfolio.theme.init();
  Portfolio.i18n.init();
  Portfolio.ui.initMenu();
  Portfolio.ui.initPrint();
  Portfolio.ui.social("heroSocials", ["linkedin", "github", "email"]);
  Portfolio.ui.social("contactSocials", ["linkedin", "github", "email", "whatsapp", "telegram", "facebook", "instagram"]);
  Portfolio.ui.reveal();
  if (Portfolio.projectsUi && Portfolio.projectsUi.init) Portfolio.projectsUi.init();
  if (Portfolio.skillsPage && Portfolio.skillsPage.init) Portfolio.skillsPage.init();
  if (Portfolio.contactPage && Portfolio.contactPage.init) Portfolio.contactPage.init();
});
