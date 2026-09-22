window.Portfolio = window.Portfolio || {};

Portfolio.i18n = {
  lang: "en",
  dict: {
    en: {
      "nav.home": "Home",
      "nav.about": "About",
      "nav.expertise": "Expertise",
      "nav.projects": "Projects",
      "nav.experience": "Experience",
      "nav.skills": "Skills",
      "nav.contact": "Contact",
      "nav.download": "Download CV",
      "hero.role": "Mechatronics Engineering Student",
      "hero.meta": "Digital Twins • Industrial Simulation • Automation • Industrial IT",
      "hero.intro": "Final-year mechatronics student connecting industrial systems with simulation, automation and software.",
      "hero.projects": "Explore Projects",
      "hero.expertise": "View Expertise",
      "hero.contact": "Contact Me",
      "home.kicker": "Profile",
      "home.title": "Engineering + industrial technology + software",
      "level.exploring": "Exploring",
      "level.familiar": "Familiar",
      "level.working": "Working knowledge",
      "level.intermediate": "Intermediate",
      "projects.view": "View Project",
      "filter.all": "All",
      "filter.digital-twin": "Digital Twin",
      "filter.automation": "Automation",
      "filter.mechatronics": "Mechatronics",
      "footer": "Mechatronics · Digital Twins · Industrial IT"
    },
    fr: {
      "nav.home": "Accueil",
      "nav.about": "À propos",
      "nav.expertise": "Expertise",
      "nav.projects": "Projets",
      "nav.experience": "Expérience",
      "nav.skills": "Compétences",
      "nav.contact": "Contact",
      "nav.download": "Télécharger le CV",
      "hero.role": "Étudiant en génie mécatronique",
      "hero.meta": "Jumeaux numériques • Simulation industrielle • Automatisation • Informatique industrielle",
      "hero.intro": "Étudiant en dernière année de mécatronique, je relie les systèmes industriels à la simulation, à l’automatisation et au logiciel.",
      "hero.projects": "Voir les projets",
      "hero.expertise": "Voir l’expertise",
      "hero.contact": "Me contacter",
      "home.kicker": "Profil",
      "home.title": "Ingénierie + technologies industrielles + logiciel",
      "level.exploring": "Exploration",
      "level.familiar": "Familiarité",
      "level.working": "Connaissance opérationnelle",
      "level.intermediate": "Intermédiaire",
      "projects.view": "Voir le projet",
      "filter.all": "Tous",
      "filter.digital-twin": "Jumeau numérique",
      "filter.automation": "Automatisation",
      "filter.mechatronics": "Mécatronique",
      "footer": "Mécatronique · Jumeaux numériques · Informatique industrielle"
    }
  },
  t: function (key) {
    var pack = this.dict[this.lang] || this.dict.en;
    return pack[key] || this.dict.en[key] || key;
  },
  apply: function () {
    var self = this;
    document.documentElement.lang = this.lang === "fr" ? "fr" : "en";
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      el.textContent = self.t(el.getAttribute("data-i18n"));
    });
    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      btn.setAttribute("aria-pressed", String(btn.getAttribute("data-lang") === self.lang));
    });
    if (Portfolio.projectsUi && Portfolio.projectsUi.refresh) Portfolio.projectsUi.refresh();
    if (Portfolio.skillsPage && Portfolio.skillsPage.refresh) Portfolio.skillsPage.refresh();
  },
  init: function () {
    var saved = localStorage.getItem("pf-lang");
    this.lang = saved === "fr" || saved === "en" ? saved : "en";
    var self = this;
    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        self.lang = btn.getAttribute("data-lang");
        localStorage.setItem("pf-lang", self.lang);
        self.apply();
      });
    });
    this.apply();
  }
};
