# Plan de tagging — White & Care

Site 100% click-to-call (aucun formulaire). La conversion = **clic sur le numéro**.
La fondation (couche dataLayer + Consent Mode) est dans le code. Les tags/triggers
GTM se créent dans l'interface GTM (conteneur `GTM-KW4N87BB`).

## 1. Comptes / IDs

| Outil | ID | Chargement |
|---|---|---|
| GA4 | `G-787XZYH3EH` | gtag.js direct + (à vérifier) GTM |
| Google Tag Manager | `GTM-KW4N87BB` | porte Clarity + Google Ads |
| Microsoft Clarity | `lm9q43jtiu` | via GTM |
| Google Ads | `AW-11016373499` | via GTM |
| Meta Pixel | `900731829579651` | direct |

## 2. Convention de nommage

- Events dataLayer : `snake_case`, verbe + objet (`phone_call_click`, `directions_click`, `faq_toggle`).
- Paramètres : `snake_case` (`link_location`, `link_url`, `link_text`, `page_path`, `faq_question`, `faq_state`).
- Valeurs de `link_location` (origine du clic) : `header`, `mobile_menu`, `sticky_mobile`, `footer`, `cta_banner`, `content`, `other`.

## 3. Events poussés par le site (déjà en place dans `assets/main.js`)

| Event dataLayer | Déclencheur | Paramètres |
|---|---|---|
| `phone_call_click` | clic sur tout lien `tel:` | `link_location`, `link_url`, `link_text`, `page_path` |
| `directions_click` | clic sur un lien Google Maps | `link_location`, `link_url`, `page_path` |
| `faq_toggle` | ouverture/fermeture d'une FAQ | `faq_question`, `faq_state`, `page_path` |

`page_view`, `scroll`, `click` sortant, `file_download` → laissés à la **mesure améliorée GA4** (ne pas dupliquer).

## 4. Tags / triggers à créer dans GTM

### Variables (Data Layer Variable)
`DLV - link_location`, `DLV - link_url`, `DLV - link_text`, `DLV - page_path`, `DLV - faq_question`, `DLV - faq_state`.

### Triggers (Custom Event)
- `CE - phone_call_click`
- `CE - directions_click`
- `CE - faq_toggle`

### Tags
| Tag | Type | Trigger | Notes |
|---|---|---|---|
| GA4 - generate_lead (appel) | GA4 Event, event `generate_lead` | `CE - phone_call_click` | params : `link_location`, `link_text`. Marquer **conversion** dans GA4. |
| Google Ads - Conversion Appel | Conversion Ads (`AW-11016373499`) | `CE - phone_call_click` | label de conversion à créer côté Ads |
| Meta - Contact | Meta Pixel event `Contact` | `CE - phone_call_click` | via tag custom HTML `fbq('track','Contact')` ou template Meta |
| GA4 - directions_click | GA4 Event `directions_click` | `CE - directions_click` | micro-conversion |
| GA4 - faq_toggle | GA4 Event `faq_toggle` | `CE - faq_toggle` | engagement (non conversion) |

> Tous les tags de mesure doivent être en **Consent Mode** : cocher "Require additional consent" / type `analytics_storage` ou `ad_storage` selon l'outil.

## 5. Consent Mode v2 + iubenda (RGPD — Belgique)

- **Consent Mode v2** : défaut **refusé** posé dans `<head>` avant GTM/gtag (`src/partials.mjs`, `trackingHead`).
  `ad_storage / ad_user_data / ad_personalization / analytics_storage = denied`.
- **iubenda Cookie Solution** intégré (repris du site original) : `siteId 3379023`, `cookiePolicyId 80675497`,
  `lang fr`, bannière `float-top-center` (boutons accepter / personnaliser / refuser), **autoblocking** `3379023.js`.
  - L'autoblocking iubenda bloque physiquement GA/GTM/Meta jusqu'au consentement (chargé avant eux).
  - Gaté en prod uniquement (pas sur la preview) via `TRACKING_ENABLED`.
- **À finir côté dashboard iubenda** : activer **Google Consent Mode** dans iubenda (Cookie Solution > intégrations)
  pour qu'iubenda envoie `gtag('consent','update',{...})` à l'acceptation. Sans ça, l'autoblocking gère le blocage
  mais Google ne reçoit pas les signaux de consentement (pings cookieless).

## 6. Point de vigilance — double-comptage GA4

GA4 `G-787XZYH3EH` est chargé via gtag.js **en direct** (dans `trackingHead`).
Si le conteneur GTM contient AUSSI un tag "GA4 Configuration" pour le même ID,
les `page_view` sont comptés deux fois.

**Décision à prendre :**
- soit GA4 vit **uniquement dans GTM** → retirer le `gtag('config','G-787XZYH3EH')` du code ;
- soit GA4 vit **en direct** → s'assurer qu'aucun tag GA4 Config n'existe dans GTM.

Recommandé : tout passer par GTM (le bloc gtag direct ne reste utile que pour le Consent Mode + Google Ads en secours).

## 7. QA avant mise en ligne

1. Build **sans** `WC_BASE` → tracking actif + `index, follow`.
2. GTM Preview (Tag Assistant) : vérifier que `phone_call_click` / `directions_click` / `faq_toggle` remontent avec leurs params.
3. GA4 DebugView : voir `generate_lead` arriver, le marquer comme conversion.
4. Meta Events Manager (Test Events) : `Contact` reçu.
5. Vérifier le double-comptage `page_view` (cf. §6).
6. Vérifier Consent Mode : aucun cookie analytics/ads avant acceptation iubenda, déclenchement après.
