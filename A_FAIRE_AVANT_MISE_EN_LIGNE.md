# White & Care — à compléter avant la mise en ligne

Checklist des points restants à corriger/valider avant le déploiement du nouveau site.
À tenir à jour. Cocher au fur et à mesure.

---

## 1. Contenu légal (bloquant)

- [ ] **Mentions légales** : renseigner le **numéro d'entreprise (BCE)** et le **numéro de TVA**
      (actuellement « à compléter par l'éditeur » dans `src/pages.mjs` → fonction `mentions()`).
- [ ] **Directeur de la publication** : nom exact (placeholder « la direction de White & Care SRL »).
- [ ] **Hébergeur** : nom + coordonnées une fois l'hébergement choisi (Cloudflare / OVH).
- [ ] **CGU Iubenda** : vérifier que l'URL du footer s'ouvre bien
      (`terms-and-conditions/80675497`). Le footer du site d'origine renvoyait un chemin
      différent — confirmer la bonne URL.
- [ ] Vérifier les 3 liens Iubenda (confidentialité, cookies, CGU) → ID `80675497`.

## 2. Bandeau cookies / consentement (bloquant RGPD)

- [ ] Ajouter un **bandeau de consentement cookies** (le site d'origine utilisait Iubenda
      Cookie Solution). À réintégrer ou remplacer par une solution équivalente.

## 3. Appel à l'action = téléphoner (fait)

- [x] Action unique : tous les boutons CTA / appel / prise de rendez-vous appellent
      directement le cabinet (`tel:+32 2 493 53 53`). Plus de formulaire ni de modale.
- [ ] Vérifier que le numéro `+3224935353` est le bon partout (constante `TEL` dans `src/lib.mjs`).

## 4. Images

- [ ] Remplacer les **tuiles placeholder de marque** (dégradé + icône) par de vraies photos
      là où il en manque (ex : mosaïque page « Le cabinet », certaines sections).
- [ ] Vérifier/optimiser le poids des images (avif/webp) et les `alt`.
- [ ] Fournir une vraie **image de partage** (`og:image`) — actuellement `cabinet-hero.jpeg`.

## 5. Domaine & déploiement

- [ ] Choisir l'hébergement final (Cloudflare Pages ou OVH).
- [ ] Si déploiement sur un domaine de test : adapter la constante `SITE`
      (`src/partials.mjs`) avant build, puis remettre `https://www.whiteandcare.be` en prod.
- [ ] Mettre en place les **redirections 301** depuis les anciennes URLs si la structure change
      (les URLs actuelles reprennent celles de l'original — à confirmer 1:1).
- [ ] Vérifier `sitemap.xml` + `robots.txt` générés, et soumettre à la Search Console.

## 6. Cohérence éditoriale / SEO

- [x] **Règle conventionnement** : audit fait. « INAMI » et « remboursé » = 0 sur implant,
      invisalign, orthodontie. Footer neutralisé sur ces pages (flag `specialist`), carte
      « Conventionné / tiers payant » retirée d'orthodontie.
- [x] **Équipe mixte (réalité corrigée)** : suppression des affirmations absolues
      (« 100% conventionné », « tous nos dentistes », « sans exception ») ET de toute
      mention « sur demande » (qui créait de la friction). Ton positif retenu partout :
      **« une grande équipe de dentistes conventionnés »**, avec un paragraphe sobre
      expliquant que tous ne le sont pas (spécialistes rarement, comme dans tout cabinet).
- [ ] Décision à valider : les **liens de navigation** « Conventionné » (menu + footer)
      pointent vers la page conventionné et restent visibles sur les pages spécialistes
      (wayfinding, pas une affirmation). Si tu veux les masquer aussi sur ces pages, dis-le.
- [ ] Relire toutes les meta title / description (longueur, doublons).
- [ ] Vérifier les schemas JSON-LD (Dentist + FAQPage) sur le Rich Results Test.
- [ ] Avis Google : les 3 avis affichés sont statiques — décider si on intègre un flux réel.

## 7. Accessibilité / contraste (audit fait)

- [x] Audit WCAG AA des contrastes : corps, titres, muted, liens, nav, footer = OK.
- [x] Extrémité bleue du gradient assombrie (#3b82f6 → #2563eb) → texte blanc + eyebrows
      + texte gradient passent AA (≥4.5).
- [x] Badge « trust » vert : texte foncé (#0f7a40) → 4.95:1.
- [x] Icônes check passées en vert-700 (#149c52) → ≥3:1.
- [x] `prefers-reduced-motion` respecté (animations/scroll désactivés).
- [x] Focus clavier visible (`:focus-visible`, anneau clair sur footer sombre).
- [x] Liens inline soulignés (pas distingués par la couleur seule).
- [x] FAQ : `aria-expanded` mis à jour à l'ouverture.
- [ ] **Étoiles ambre** (#f5a524, 2.04:1) : conservées (convention « avis Google »).
      Acceptable car la note est aussi en texte (« 4,6/5 · 191 avis ») à côté. À garder en tête.
- [ ] Test final recommandé : Lighthouse / axe DevTools sur le site déployé + essai lecteur
      d'écran (NVDA/VoiceOver) sur 1-2 pages.

## 8. Détails UI à revoir (point 4 de la session — à préciser)

- [ ] Header mobile : le logo (wordmark) est un peu serré à côté du bouton téléphone +
      hamburger → envisager le **sigle seul** sur petit écran.
- [ ] _(Liste à compléter avec les autres corrections design demandées.)_

---

_Dernière mise à jour : 23 juin 2026._
