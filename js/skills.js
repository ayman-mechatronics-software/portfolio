window.Portfolio = window.Portfolio || {};

Portfolio.skillsUi = {
  levelLabel: function (level) {
    return Portfolio.i18n.t("level." + level);
  },

  refresh: function () {
    var grid = document.getElementById("techGrid");
    if (grid) {
      grid.innerHTML = Portfolio.tech.map(function (t) {
        return (
          '<article class="tech-card">' +
            '<div class="cat">' + t.cat + "</div>" +
            "<strong>" + t.name + "</strong>" +
            '<div class="level">' + Portfolio.i18n.t("level." + t.level) + "</div>" +
          "</article>"
        );
      }).join("");
    }

    var skills = document.getElementById("skillsGrid");
    if (skills) {
      skills.innerHTML = Portfolio.skillGroups.map(function (g) {
        return (
          '<article class="skill-card js-reveal">' +
            "<h3>" + Portfolio.i18n.t(g.titleKey) + "</h3>" +
            '<ul class="chips">' + g.items.map(function (i) { return "<li>" + i + "</li>"; }).join("") + "</ul>" +
          "</article>"
        );
      }).join("");
    }
  },

  init: function () {
    var expertise = [
      { icon: "⚙️", title: "Mechatronics", key: "exp.mech.d" },
      { icon: "🤖", title: "Automation", key: "exp.auto.d" },
      { icon: "🧠", title: "Digital Twins", key: "exp.twin.d" },
      { icon: "🏭", title: "Industrial Simulation", key: "exp.sim.d" },
      { icon: "🔌", title: "Industrial IoT", key: "exp.iot.d" },
      { icon: "💻", title: "Software", key: "exp.soft.d" }
    ];
    document.getElementById("expertiseGrid").innerHTML = expertise.map(function (c) {
      return (
        '<article class="card expertise-card js-reveal">' +
          '<div class="icon-mark" aria-hidden="true">' + c.icon + "</div>" +
          "<h3>" + c.title + "</h3>" +
          '<p class="muted" data-i18n="' + c.key + '">' + Portfolio.i18n.t(c.key) + "</p>" +
        "</article>"
      );
    }).join("");

    var chain = document.getElementById("twinChain");
    chain.innerHTML = Portfolio.twinNodes.map(function (n, i) {
      var arrow = i < Portfolio.twinNodes.length - 1 ? '<div class="dt-connector" aria-hidden="true"></div>' : "";
      return (
        '<button type="button" class="card dt-node" data-node="' + n.id + '">' +
          "<strong data-i18n=\"" + n.titleKey + "\">" + Portfolio.i18n.t(n.titleKey) + "</strong>" +
        "</button>" + arrow
      );
    }).join("");
    chain.querySelectorAll(".dt-node").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var node = Portfolio.twinNodes.find(function (x) { return x.id === btn.getAttribute("data-node"); });
        if (!node) return;
        Portfolio.projectsUi.openModal(Portfolio.i18n.t(node.titleKey), "<p>" + Portfolio.i18n.t(node.bodyKey) + "</p>");
      });
    });

    var path = [
      "Education — Mechatronics (final year)",
      "Industrial Internships — Sonelgaz Group",
      "Mechatronics projects",
      "Virtual Industrial Workshop",
      "Freelance development",
      "Elibrahimi Digital Platform",
      "Digital Twin / Industrial Simulation"
    ];
    document.getElementById("pathTimeline").innerHTML = path.map(function (item) {
      return '<div class="v-item card">' + item + "</div>";
    }).join("");

    this.refresh();
  }
};
