/**
 * Contacts, skills and projects. Do not invent employers, dates or extra projects.
 */
window.Portfolio = window.Portfolio || {};

Portfolio.config = {
  name: "AYMAN",
  email: "aymansbr213@gmail.com",
  phoneDisplay: "+213 660 799 175",
  phone: "+213660799175",
  whatsapp: "https://wa.me/213660799175",
  telegram: "tg://resolve?phone=213660799175",
  linkedin: "https://www.linkedin.com/in/ayman-ayman-3a8b70430/",
  github: "https://github.com/ayman-mechatronics-software",
  facebook: "https://www.facebook.com/ayman.saber.75436531?locale=fr_FR",
  instagram: "https://www.instagram.com/ayman_bensaber/",
  portfolioUrl: "https://ayman-mechatronics-software.github.io/portfolio/"
};

Portfolio.techGroups = [
  {
    title: { en: "Simulation & CAD", fr: "Simulation & CAO" },
    items: [
      { name: "Ansys Twin Builder", level: "working" },
      { name: "Siemens Process Simulate", level: "working" },
      { name: "3DEXPERIENCE", level: "working" },
      { name: "MATLAB / Simulink", level: "working" },
      { name: "SolidWorks", level: "working" }
    ]
  },
  {
    title: { en: "Automation", fr: "Automatisation" },
    items: [
      { name: "PLC", level: "working" },
      { name: "TIA Portal", level: "working" },
      { name: "PLC Open", level: "working" }
    ]
  },
  {
    title: { en: "Industrial Communication", fr: "Communication industrielle" },
    items: [
      { name: "OPC UA", level: "familiar" },
      { name: "MQTT", level: "familiar" },
      { name: "ROS 2", level: "exploring" },
      { name: "Modbus TCP", level: "familiar" }
    ]
  },
  {
    title: { en: "Software", fr: "Logiciel" },
    items: [
      { name: "Python", level: "intermediate" },
      { name: "FastAPI", level: "working" },
      { name: "JavaScript", level: "intermediate" },
      { name: "React", level: "working" },
      { name: "PHP", level: "working" },
      { name: "Laravel", level: "working" },
      { name: "SQL", level: "working" },
      { name: "Docker", level: "working" },
      { name: "WebSockets", level: "working" },
      { name: "Three.js", level: "familiar" }
    ]
  },
  {
    title: { en: "Digital Twin / Cloud", fr: "Jumeau numérique / Cloud" },
    items: [
      { name: "NVIDIA Omniverse", level: "exploring" },
      { name: "NVIDIA Isaac Sim", level: "exploring" },
      { name: "Azure Digital Twins", level: "exploring" },
      { name: "AWS IoT TwinMaker", level: "exploring" }
    ]
  }
];

Portfolio.projects = [
  {
    id: "workshop",
    href: "projects/virtual-industrial-workshop.html",
    filters: ["digital-twin", "automation", "mechatronics"],
    image: "assets/projects/workshop.svg",
    title: { en: "Virtual Industrial Workshop", fr: "Atelier industriel virtuel" },
    category: { en: "Digital Twin · Simulation", fr: "Jumeau numérique · Simulation" },
    summary: {
      en: "Group project: a virtual industrial environment to represent and simulate industrial processes.",
      fr: "Projet de groupe : un environnement industriel virtuel pour représenter et simuler des processus industriels."
    },
    tech: ["Digital Twin", "Simulation", "Automation", "Visualization"]
  },
  {
    id: "weather",
    href: "projects/weather-information-system.html",
    filters: ["mechatronics"],
    image: "assets/projects/weather.svg",
    title: { en: "Weather Information System", fr: "Système d’information météorologique" },
    category: { en: "MSII · University", fr: "MSII · Universitaire" },
    summary: {
      en: "University project in Industrial IT Systems Management (MSII). Case study: Weather Information System — Ian Sommerville.",
      fr: "Projet universitaire en Management des Systèmes d’Informatique Industrielle (MSII). Cas : Weather Information System — Ian Sommerville."
    },
    tech: ["Analysis", "Diagnosis", "System Design"]
  }
];
