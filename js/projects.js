window.Portfolio = window.Portfolio || {};

Portfolio.projectsUi = {
  filter: "all",

  openModal: function (title, html) {
    var modal = document.getElementById("modal");
    document.getElementById("modalTitle").textContent = title;
    document.getElementById("modalBody").innerHTML = html;
    modal.hidden = false;
    modal.classList.add("is-open");
    document.getElementById("modalClose").focus();
  },

  closeModal: function () {
    var modal = document.getElementById("modal");
    modal.classList.remove("is-open");
    modal.hidden = true;
  },

  lang: function () {
    return Portfolio.i18n.lang;
  },

  renderFilters: function () {
    var keys = ["all", "mechatronics", "digital-twin", "automation", "web", "ai"];
    var box = document.getElementById("projectFilters");
    var self = this;
    box.innerHTML = keys.map(function (k) {
      var pressed = k === self.filter ? "true" : "false";
      return '<button type="button" data-filter="' + k + '" aria-pressed="' + pressed + '" data-i18n="filter.' + k + '">' + Portfolio.i18n.t("filter." + k) + "</button>";
    }).join("");
    box.querySelectorAll("button").forEach(function (btn) {
      btn.addEventListener("click", function () {
        self.filter = btn.getAttribute("data-filter");
        self.refresh();
      });
    });
  },

  cardHtml: function (p) {
    var l = this.lang();
    var tags = p.filters.join(" ");
    var hide = this.filter !== "all" && p.filters.indexOf(this.filter) === -1;
    return (
      '<article class="project-card" data-tags="' + tags + '"' + (hide ? " hidden" : "") + ">" +
        '<img src="' + p.image + '" alt="" width="640" height="300" loading="lazy">' +
        "<h3>" + p.title[l] + "</h3>" +
        '<p class="muted">' + p.category[l] + "</p>" +
        "<p>" + p.summary[l] + "</p>" +
        '<ul class="chips">' + p.tech.map(function (t) { return "<li>" + t + "</li>"; }).join("") + "</ul>" +
        '<button type="button" class="btn" data-open="' + p.id + '" style="margin-top:14px">' + Portfolio.i18n.t("projects.view") + "</button>" +
      "</article>"
    );
  },

  detailHtml: function (p) {
    var l = this.lang();
    var gh = p.github
      ? '<p><a href="' + p.github + '" target="_blank" rel="noopener noreferrer">' + Portfolio.i18n.t("projects.github") + "</a></p>"
      : "";
    return (
      "<p>" + p.summary[l] + "</p>" +
      "<h4>" + Portfolio.i18n.t("projects.goal") + "</h4><p>" + p.goal[l] + "</p>" +
      "<h4>" + Portfolio.i18n.t("projects.arch") + "</h4><p>" + p.architecture[l] + "</p>" +
      "<h4>" + Portfolio.i18n.t("projects.results") + "</h4><p>" + p.results[l] + "</p>" +
      "<h4>" + Portfolio.i18n.t("modal.tech") + "</h4><p>" + p.tech.join(" · ") + "</p>" +
      gh
    );
  },

  refresh: function () {
    var self = this;
    this.renderFilters();
    var grid = document.getElementById("projectGrid");
    grid.innerHTML = Portfolio.projects.map(function (p) { return self.cardHtml(p); }).join("");
    grid.querySelectorAll("[data-open]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var p = Portfolio.projects.find(function (x) { return x.id === btn.getAttribute("data-open"); });
        if (p) self.openModal(p.title[self.lang()], self.detailHtml(p));
      });
    });
  },

  init: function () {
    var self = this;
    this.refresh();
    document.getElementById("modalClose").addEventListener("click", function () { self.closeModal(); });
    document.getElementById("modal").addEventListener("click", function (e) {
      if (e.target.id === "modal") self.closeModal();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") self.closeModal();
    });
  }
};
