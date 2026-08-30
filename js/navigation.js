window.Portfolio = window.Portfolio || {};

Portfolio.nav = {
  init: function () {
    var nav = document.getElementById("navbar");
    var btn = document.getElementById("menuBtn");
    var menu = document.getElementById("mobileMenu");
    var links = document.querySelector(".nav-links").innerHTML;
    menu.innerHTML = links;

    function onScroll() {
      nav.classList.toggle("is-scrolled", window.scrollY > 12);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    btn.addEventListener("click", function () {
      var open = menu.classList.toggle("is-open");
      btn.classList.toggle("is-open", open);
      btn.setAttribute("aria-expanded", String(open));
    });

    menu.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        menu.classList.remove("is-open");
        btn.classList.remove("is-open");
        btn.setAttribute("aria-expanded", "false");
      }
    });

    var sections = ["home", "about", "expertise", "experience", "projects", "skills", "contact"];
    var navAnchors = document.querySelectorAll(".nav-links a");
    function mark() {
      var current = "home";
      sections.forEach(function (id) {
        var el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < 120) current = id;
      });
      navAnchors.forEach(function (a) {
        var match = a.getAttribute("href") === "#" + current;
        if (match) a.setAttribute("aria-current", "true");
        else a.removeAttribute("aria-current");
      });
    }
    window.addEventListener("scroll", mark, { passive: true });
    mark();
  }
};
