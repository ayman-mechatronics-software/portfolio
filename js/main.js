window.Portfolio = window.Portfolio || {};

Portfolio.projectsUi = {
  filter: "all",
  lang: function () { return Portfolio.i18n.lang; },
  refresh: function () {
    var grid = document.getElementById("projectGrid");
    var filters = document.getElementById("projectFilters");
    if (!grid) return;
    var self = this;
    var r = Portfolio.ui.root();
    if (filters) {
      var keys = ["all", "digital-twin", "automation", "mechatronics"];
      filters.innerHTML = keys.map(function (k) {
        return '<button type="button" data-filter="' + k + '" aria-pressed="' + (k === self.filter) + '" data-i18n="filter.' + k + '">' + Portfolio.i18n.t("filter." + k) + "</button>";
      }).join("");
      filters.querySelectorAll("button").forEach(function (btn) {
        btn.addEventListener("click", function () {
          self.filter = btn.getAttribute("data-filter");
          self.refresh();
        });
      });
    }
    grid.innerHTML = Portfolio.projects.map(function (p) {
      var hide = self.filter !== "all" && p.filters.indexOf(self.filter) === -1;
      var l = self.lang();
      var href = r + p.href;
      return (
        '<article class="project-card js-in"' + (hide ? " hidden" : "") + ">" +
          '<img src="' + r + p.image + '" alt="" width="640" height="280" loading="lazy">' +
          '<p class="kicker">' + p.category[l] + "</p>" +
          "<h3>" + p.title[l] + "</h3>" +
          "<p class=\"muted\">" + p.summary[l] + "</p>" +
          '<ul class="chips">' + p.tech.map(function (t) { return "<li>" + t + "</li>"; }).join("") + "</ul>" +
          '<a class="btn" href="' + href + '" style="margin-top:14px">' + Portfolio.i18n.t("projects.view") + "</a>" +
        "</article>"
      );
    }).join("");
    Portfolio.ui.reveal();
  },
  init: function () { this.refresh(); }
};

Portfolio.skillsPage = {
  refresh: function () {
    var box = document.getElementById("skillsMount");
    if (!box) return;
    var l = Portfolio.i18n.lang;
    box.innerHTML = Portfolio.techGroups.map(function (g) {
      return (
        '<article class="skill-card js-in">' +
          "<h3>" + g.title[l] + "</h3>" +
          g.items.map(function (i) {
            return "<div><strong>" + i.name + '</strong><span class="level">' + Portfolio.i18n.t("level." + i.level) + "</span></div>";
          }).join("") +
        "</article>"
      );
    }).join("");
    Portfolio.ui.reveal();
  },
  init: function () { this.refresh(); }
};

Portfolio.contactPage = {
  init: function () {
    var c = Portfolio.config;
    var box = document.getElementById("contactGrid");
    if (!box) return;
    box.innerHTML =
      '<article class="card contact-list"><strong>Email</strong><a href="mailto:' + c.email + '">' + c.email + "</a></article>" +
      '<article class="card contact-list"><strong>WhatsApp</strong><a href="' + c.whatsapp + '" target="_blank" rel="noopener noreferrer">' + c.phoneDisplay + "</a></article>" +
      '<article class="card contact-list"><strong>Telegram</strong><a href="' + c.telegram + '" rel="noopener noreferrer">' + c.phoneDisplay + "</a></article>" +
      '<article class="card contact-list"><strong>LinkedIn</strong><a href="' + c.linkedin + '" target="_blank" rel="noopener noreferrer">linkedin.com/in/ayman-ayman-3a8b70430</a></article>' +
      '<article class="card contact-list"><strong>GitHub</strong><a href="' + c.github + '" target="_blank" rel="noopener noreferrer">github.com/ayman-mechatronics-software</a></article>' +
      '<article class="card contact-list"><strong>Phone</strong><span class="muted">' + c.phoneDisplay + "</span></article>";
    var mail = document.getElementById("mailBtn");
    if (mail) mail.href = "mailto:" + c.email;
  }
};
