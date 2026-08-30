window.Portfolio = window.Portfolio || {};

Portfolio.motion = {
  init: function () {
    var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      document.querySelectorAll(".js-reveal").forEach(function (el) {
        el.style.opacity = "1";
      });
      return;
    }

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-inview");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.16 });
    document.querySelectorAll(".js-reveal, .v-item, .tech-card, .expertise-card").forEach(function (el) {
      io.observe(el);
    });

    var packet = document.getElementById("packet");
    if (packet) {
      var t = 0;
      function tick() {
        t = (t + 0.008) % 1;
        packet.setAttribute("cx", String(30 + t * 340));
        requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    }
  }
};
