window.Portfolio = window.Portfolio || {};

Portfolio.contact = {
  icon: function (name, href, label, extra) {
    extra = extra || ' target="_blank" rel="noopener noreferrer"';
    if (href.indexOf("mailto:") === 0) extra = "";
    return (
      '<a href="' + href + '"' + extra + ' aria-label="' + label + '">' +
        '<span class="tooltip">' + label + "</span>" +
        '<img src="assets/icons/' + name + '.svg" alt="" width="18" height="18">' +
      "</a>"
    );
  },

  init: function () {
    var c = Portfolio.config;
    var hero = document.getElementById("heroSocials");
    hero.innerHTML =
      this.icon("linkedin", c.linkedin, "LinkedIn") +
      this.icon("github", c.github, "GitHub") +
      this.icon("email", "mailto:" + c.email, "Email") +
      this.icon("whatsapp", c.whatsapp, "WhatsApp") +
      this.icon("telegram", c.telegram, "Telegram", ' rel="noopener noreferrer"');

    document.getElementById("contactSocials").innerHTML =
      this.icon("facebook", c.facebook, "Facebook") +
      this.icon("instagram", c.instagram, "Instagram") +
      this.icon("linkedin", c.linkedin, "LinkedIn") +
      this.icon("github", c.github, "GitHub");

    document.getElementById("contactGrid").innerHTML =
      '<article class="card"><strong>Email</strong><a href="mailto:' + c.email + '">' + c.email + "</a></article>" +
      '<article class="card"><strong>WhatsApp</strong><a href="' + c.whatsapp + '" target="_blank" rel="noopener noreferrer">' + c.phoneDisplay + "</a></article>" +
      '<article class="card"><strong>Telegram</strong><a href="' + c.telegram + '" rel="noopener noreferrer">' + c.phoneDisplay + "</a></article>" +
      '<article class="card"><strong>LinkedIn</strong><a href="' + c.linkedin + '" target="_blank" rel="noopener noreferrer">linkedin.com/in/ayman-ayman-3a8b70430</a></article>' +
      '<article class="card"><strong>GitHub</strong><a href="' + c.github + '" target="_blank" rel="noopener noreferrer">github.com/ayman-mechatronics-software</a></article>' +
      '<article class="card"><strong>Phone</strong><span class="muted">' + c.phoneDisplay + "</span></article>";

    document.getElementById("mailBtn").href = "mailto:" + c.email;

    var url = c.portfolioUrl;
    var mount = document.getElementById("qrMount");
    if (url && url.indexOf("http") === 0 && url.indexOf("YOUR_FUTURE") === -1) {
      var img = document.createElement("img");
      img.alt = "QR Code Digital CV";
      img.width = 160;
      img.height = 160;
      img.src = "https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=" + encodeURIComponent(url);
      mount.appendChild(img);
    }

    document.getElementById("heroFlow").innerHTML =
      '<span class="flow-node">PLC</span><span class="flow-arrow">→</span>' +
      '<span class="flow-node">OPC UA</span><span class="flow-arrow">→</span>' +
      '<span class="flow-node">Digital Twin</span><span class="flow-arrow">→</span>' +
      '<span class="flow-node">Simulation</span><span class="flow-arrow">→</span>' +
      '<span class="flow-node">Dashboard</span>';
  }
};
