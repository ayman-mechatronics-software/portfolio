/**
 * CONFIGURATION — modify contacts, copy, projects and skills here.
 * Do not invent new employers, degrees, dates or certifications.
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

Portfolio.twinNodes = [
  {
    id: "physical",
    titleKey: "twin.physical.title",
    bodyKey: "twin.physical.body"
  },
  {
    id: "plc",
    titleKey: "twin.plc.title",
    bodyKey: "twin.plc.body"
  },
  {
    id: "comm",
    titleKey: "twin.comm.title",
    bodyKey: "twin.comm.body"
  },
  {
    id: "twin",
    titleKey: "twin.twin.title",
    bodyKey: "twin.twin.body"
  },
  {
    id: "sim",
    titleKey: "twin.sim.title",
    bodyKey: "twin.sim.body"
  },
  {
    id: "viz",
    titleKey: "twin.viz.title",
    bodyKey: "twin.viz.body"
  },
  {
    id: "analytics",
    titleKey: "twin.analytics.title",
    bodyKey: "twin.analytics.body"
  }
];

Portfolio.tech = [
  { name: "Ansys Twin Builder", cat: "Simulation", level: "working" },
  { name: "Siemens Process Simulate", cat: "Simulation", level: "working" },
  { name: "3DEXPERIENCE", cat: "Simulation", level: "working" },
  { name: "MATLAB / Simulink", cat: "Simulation", level: "working" },
  { name: "SolidWorks", cat: "Simulation", level: "working" },
  { name: "PLC", cat: "Automation", level: "working" },
  { name: "TIA Portal", cat: "Automation", level: "working" },
  { name: "PLC Open", cat: "Automation", level: "working" },
  { name: "OPC UA", cat: "Communication", level: "familiar" },
  { name: "MQTT", cat: "Communication", level: "familiar" },
  { name: "Modbus TCP", cat: "Communication", level: "familiar" },
  { name: "ROS 2", cat: "Communication", level: "exploring" },
  { name: "Python", cat: "Software", level: "intermediate" },
  { name: "FastAPI", cat: "Software", level: "working" },
  { name: "JavaScript", cat: "Software", level: "intermediate" },
  { name: "React", cat: "Software", level: "working" },
  { name: "PHP", cat: "Software", level: "working" },
  { name: "Laravel", cat: "Software", level: "working" },
  { name: "SQL", cat: "Software", level: "working" },
  { name: "Docker", cat: "Software", level: "working" },
  { name: "WebSockets", cat: "Software", level: "working" },
  { name: "Three.js", cat: "Software", level: "familiar" },
  { name: "NVIDIA Omniverse", cat: "Cloud / Twin", level: "exploring" },
  { name: "NVIDIA Isaac Sim", cat: "Cloud / Twin", level: "exploring" },
  { name: "Azure Digital Twins", cat: "Cloud / Twin", level: "exploring" },
  { name: "AWS IoT TwinMaker", cat: "Cloud / Twin", level: "exploring" }
];

Portfolio.skillGroups = [
  {
    id: "engineering",
    titleKey: "skills.engineering",
    items: ["Mechatronics", "Multiphysics modeling", "Electronics", "Mechanical systems", "Metrology", "Sensors & actuators"]
  },
  {
    id: "automation",
    titleKey: "skills.automation",
    items: ["PLC programming", "TIA Portal", "Control systems", "Industrial sequences", "Supervision"]
  },
  {
    id: "simulation",
    titleKey: "skills.simulation",
    items: ["Digital twins", "Virtual commissioning", "Process Simulate", "Twin Builder", "MATLAB / Simulink"]
  },
  {
    id: "software",
    titleKey: "skills.software",
    items: ["Python", "FastAPI", "NiceGUI", "Docker", "WebSockets", "Git"]
  },
  {
    id: "web",
    titleKey: "skills.web",
    items: ["HTML / CSS / JS", "React", "PHP / Laravel", "SQL", "REST APIs", "E-commerce platforms"]
  },
  {
    id: "ai",
    titleKey: "skills.ai",
    items: ["AI-assisted development", "Prompt engineering", "Vibe coding", "Content generation", "Image optimization"]
  }
];

Portfolio.projects = [
  {
    id: "workshop",
    featured: true,
    filters: ["digital-twin", "automation", "mechatronics"],
    image: "assets/projects/workshop.svg",
    github: "",
    title: { en: "Virtual Industrial Workshop", fr: "Atelier industriel virtuel" },
    category: { en: "Digital Twin · Simulation", fr: "Jumeau numérique · Simulation" },
    summary: {
      en: "Group project: a virtual industrial environment to represent and simulate industrial processes.",
      fr: "Projet de groupe : un environnement industriel virtuel pour représenter et simuler des processus industriels."
    },
    goal: {
      en: "Create a virtual industrial workshop that can represent and simulate industrial processes.",
      fr: "Créer un atelier industriel virtuel permettant de représenter et simuler des processus industriels."
    },
    architecture: {
      en: "Physical process concepts → virtual environment → simulation / visualization of industrial systems. Unconfirmed features are not listed.",
      fr: "Concepts de processus physiques → environnement virtuel → simulation / visualisation des systèmes industriels. Aucune fonctionnalité non confirmée n’est listée."
    },
    results: {
      en: "A shared group deliverable around virtual industrial environments, simulation and automation concepts.",
      fr: "Un livrable de groupe autour des environnements industriels virtuels, de la simulation et de l’automatisation."
    },
    tech: ["Digital Twin", "Simulation", "Automation", "Virtual Environment", "Visualization"]
  },
  {
    id: "elibrahimi",
    featured: true,
    filters: ["web", "ai"],
    image: "assets/projects/elibrahimi.svg",
    github: "",
    title: { en: "Elibrahimi Digital Platform", fr: "Plateforme digitale Elibrahimi" },
    category: { en: "Web · Digitalization · E-commerce · AI", fr: "Web · Digitalisation · E-commerce · IA" },
    summary: {
      en: "Digitalization of a commercial activity: web platform, catalogue operations and e-commerce thinking.",
      fr: "Digitalisation d’une activité commerciale : plateforme web, catalogue et réflexion e-commerce."
    },
    goal: {
      en: "Improve digital presence and structure product data for a commercial catalogue.",
      fr: "Améliorer la présence digitale et structurer les données produits d’un catalogue commercial."
    },
    architecture: {
      en: "Web platform → product catalogue (categories, prices, images, descriptions) → UX and delivery-API reflection, with AI tools to accelerate production.",
      fr: "Plateforme web → catalogue (catégories, prix, images, descriptions) → UX et réflexion API livraison, avec outils d’IA pour accélérer la production."
    },
    results: {
      en: "Catalogue feeding, product integration, image optimization, descriptions, and digitalization of commercial processes.",
      fr: "Alimentation du catalogue, intégration produits, optimisation d’images, descriptions et digitalisation des processus commerciaux."
    },
    tech: ["HTML", "CSS", "JavaScript", "E-commerce", "AI tools"]
  },
  {
    id: "weather",
    featured: false,
    filters: ["mechatronics"],
    image: "assets/projects/weather.svg",
    github: "",
    title: { en: "Weather Information System", fr: "Système d’information météorologique" },
    category: { en: "MSII · University case study", fr: "MSII · Étude universitaire" },
    summary: {
      en: "University project in Industrial IT Systems Management (MSII). Case study: Weather Information System — Ian Sommerville.",
      fr: "Projet universitaire en Management des Systèmes d’Informatique Industrielle (MSII). Cas : Weather Information System — Ian Sommerville."
    },
    goal: {
      en: "Analyse, diagnose and design an information system solution.",
      fr: "Analyser, diagnostiquer et concevoir une solution de système d’information."
    },
    architecture: {
      en: "Requirements analysis → diagnosis → system design of an IT solution. No undeclared implementation stack is claimed.",
      fr: "Analyse des besoins → diagnostic → conception d’une solution informatique. Aucune stack d’implémentation non déclarée n’est revendiquée."
    },
    results: {
      en: "Structured analysis, diagnosis and system design artefacts.",
      fr: "Livrables d’analyse, de diagnostic et de conception du système."
    },
    tech: ["Analysis", "Diagnosis", "System Design"]
  }
];
