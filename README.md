# White & Care — site statique

Refonte du site whiteandcare.be avec le nouveau **design system White & Care**
(violet `#642eff`, glass cards, gradient violet→blue, Poppins, icônes dentaires).
Le contenu et les URLs reprennent le site d'origine (dossier `webflow-clone`).

## Structure

```
site/
├─ assets/            # servi tel quel
│  ├─ styles.css      # design system bundlé + classes de sections
│  ├─ main.js         # menu mobile, modal RDV, accordéon FAQ
│  ├─ brand/          # logos + favicon
│  └─ photos/         # images (avif/webp/jpeg)
├─ src/               # générateur (Node, sans dépendance)
│  ├─ lib.mjs         # icônes + composants (HTML)
│  ├─ heroes.mjs      # héros home + pages internes
│  ├─ partials.mjs    # head, header, footer, modal, layout
│  └─ pages.mjs       # contenu des 9 pages
├─ build.mjs          # génère ./dist
└─ dist/              # SORTIE à déployer
```

## Générer

```bash
cd site
node build.mjs        # → ./dist (9 pages + sitemap.xml + robots.txt)
```

Aucune dépendance npm requise (Node ≥ 18, ESM + fs natif).

## Prévisualiser en local

```bash
cd site/dist
python -m http.server 4321      # http://127.0.0.1:4321
```

> Servir depuis `dist/` (les liens sont en chemins absolus `/...`).

## Déployer

Le dossier `dist/` est un site 100% statique.

- **Cloudflare Pages** : projet → build command `node build.mjs`, output directory `dist`
  (ou upload direct de `dist/` via Wrangler / drag-and-drop).
- **OVH / hébergement classique** : copier le contenu de `dist/` à la racine web
  (FTP/SFTP). Vérifier que le serveur sert `index.html` dans chaque sous-dossier.

Penser à remplacer `SITE` (`https://www.whiteandcare.be`) si l'on déploie sur un
domaine de test.

## Pages

| URL | Page |
|-----|------|
| `/` | Accueil |
| `/dentiste-conventionne` | Dentiste conventionné |
| `/implant-dentaire` | Implants dentaires |
| `/invisalign` | Invisalign |
| `/orthodontie-anderlecht` | Orthodontie |
| `/blanchiment-dentaire-cabinet-dentaire-anderlecht` | Blanchiment |
| `/surfacage-detartrage-dentaire` | Détartrage & surfaçage |
| `/urgence-dentaire-anderlecht` | Urgence dentaire |
| `/soins-dentaires/votre-cabinet-dentaire-a-anderlecht` | Le cabinet |

## À ajuster avant mise en ligne

- **Photos** : un jeu de vraies photos du cabinet est utilisé ; certaines zones
  restent en tuile placeholder de marque (à remplacer dans `assets/photos/` puis
  rebuild). Le formulaire RDV (`main.js`) est une démo front : le brancher à un
  vrai backend / e-mail.
- **Conventionnement (règle métier)** : mentions « conventionné / INAMI / remboursé »
  uniquement sur Home, urgence, détartrage, dentiste-conventionné, blanchiment.
  Ne pas en ajouter sur les pages spécialistes (implant, invisalign, orthodontie).
- **Mentions légales / cookies** : à ajouter selon le bandeau de consentement choisi.
