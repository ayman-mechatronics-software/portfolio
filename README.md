# Portfolio — Ayman

Site portfolio **Mechatronics / Digital Twin / Industrial Automation / Software**.

Aucun Node.js, npm, React ou serveur n’est requis.

## Ouvrir le site

1. Ouvrez le dossier du projet.
2. Double-cliquez sur `index.html`.
3. Le site s’ouvre dans Chrome ou Edge.

Si les styles ne se chargent pas, faites un clic droit sur `index.html` → Ouvrir avec → Chrome.

## Structure

```text
index.html
css/          style.css, animations.css, responsive.css
js/           config, i18n, navigation, animations, projects, skills, contact, main
assets/icons/
assets/projects/
README.md
```

## Modifier les contacts

Éditez uniquement `js/config.js` :

- email, téléphone, WhatsApp, Telegram
- LinkedIn, GitHub, Facebook, Instagram
- `portfolioUrl` : mettez une adresse `https://...` quand le site sera en ligne (QR code)

Projets et technologies : mêmes fichiers `js/config.js`.

## Langue et thème

- FR / EN : boutons dans la barre de navigation (`localStorage`)
- Clair / sombre : bouton lune / soleil (`localStorage` + `prefers-color-scheme`)

## Télécharger le CV

Bouton **Download CV** → impression du navigateur → Enregistrer au format PDF.

## Bibliothèques

- **Google Fonts** (IBM Plex Sans, Syne) : optionnel, nécessite Internet. Sinon polices système.
- **QR** : `api.qrserver.com` seulement si `portfolioUrl` est une URL http(s). Pas de QR vers `file://`.
- **Pas de Three.js** : le jumeau numérique est en SVG + JavaScript pour rester compatible avec un double-clic local.

## Accessibilité

Focus visible, `aria-label` sur les icônes, Escape pour fermer les modales, `prefers-reduced-motion`.
