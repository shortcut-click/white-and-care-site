import { btn, link, ui, eyebrow, chip, dentalIcon, glassBlock, zigzag, featureGrid, stepGrid, ctaBanner, faqSection, reviewsSection, statsStrip, sectionHead, langueSection, tile, PHONE, relatedServices } from "../lib.mjs";
import { heroHome, pageHeroSplit, pageHeroGradient } from "../heroes.mjs";
import { SITE, schema, faqSchema, howToSchema, LANGUE } from "../seo-helpers.mjs";

export default function () {
  const url = SITE + "/urgence-dentaire-anderlecht";

  const faq = [
    ["Que faire en cas d'urgence dentaire à Anderlecht ?",
      "Appelez White & Care au +32 2 493 53 53. Nous gardons chaque jour, du lundi au samedi, des créneaux réservés aux urgences et nous vous recevons en priorité, le jour même dans la plupart des cas. Décrivez votre situation par téléphone : nous vous orientons immédiatement."],
    ["Avez-vous un dentiste de garde à Bruxelles ?",
      "En semaine, du lundi au samedi de 10h à 19h, vous n'avez pas besoin d'un service de garde : appelez directement le cabinet, nous avons des créneaux d'urgence quotidiens. Le dimanche et les jours fériés, une garde dentaire régionale est organisée à Bruxelles ; consultez le service officiel de garde (gardedentaire.be) et appelez avant de vous déplacer."],
    ["J'ai une rage de dent insupportable, surtout la nuit. Que faire ?",
      "Une douleur intense qui empire la nuit signale souvent une atteinte du nerf. En attendant, un antidouleur adapté peut soulager, mais seul un traitement règle le problème. Appelez-nous dès l'ouverture ; en cas de douleur ingérable la nuit ou le dimanche, orientez-vous vers la garde régionale ou, si l'état général se dégrade, le 112."],
    ["Que faire si une dent est tombée (expulsée) après un choc ?",
      "Pour une dent définitive, chaque minute compte. Tenez-la par la couronne, pas par la racine, rincez-la brièvement si elle est sale, replacez-la dans son logement si possible, sinon conservez-la dans du lait ou dans votre salive. Venez immédiatement et appelez-nous en route. Pour une dent de lait, ne la replacez pas mais appelez quand même."],
    ["Que faire en cas d'abcès dentaire ?",
      "Un abcès (gonflement, parfois fièvre) est une infection qui ne disparaît pas seule. Appelez le cabinet sans attendre. Si vous avez une forte fièvre, du mal à respirer ou à avaler, ou un gonflement qui s'étend vite, appelez le 112 : c'est une urgence médicale."],
    ["Ma dent s'est cassée, est-ce une urgence ?",
      "Oui, surtout si elle est douloureuse ou sensible. Gardez le fragment, rincez à l'eau tiède, ne mâchez pas de ce côté et appelez-nous. Une dent cassée peut souvent être réparée ou protégée si vous consultez rapidement."],
    ["Puis-je venir sans rendez-vous ?",
      "Oui, dans la limite des créneaux d'urgence du jour. Un appel préalable au +32 2 493 53 53 reste vivement conseillé : il nous permet de vous garder une place et de réduire votre attente."],
    ["Combien coûte une consultation d'urgence ?",
      "Le tarif dépend du soin réalisé. White & Care compte de nombreux dentistes conventionnés INAMI, ce qui ouvre droit aux tarifs officiels et au remboursement mutuelle pour les soins concernés. Appelez-nous pour un renseignement clair avant votre venue."],
    ["Une couronne ou une prothèse s'est descellée, est-ce urgent ?",
      "Ce n'est généralement pas douloureux, mais mieux vaut consulter vite pour protéger la dent. Conservez la pièce, ne la recollez pas avec une colle du commerce et appelez-nous pour un rendez-vous rapide."],
    ["En combien de temps puis-je être reçu ?",
      "Dans la plupart des cas, le jour même pendant nos heures d'ouverture. Plus vous appelez tôt dans la journée, plus il est facile de vous trouver un créneau."],
  ];

  const gardeSteps = [
    { title: "En semaine : appelez le cabinet", body: "Du lundi au samedi, de 10h à 19h, inutile de chercher une garde : appelez White & Care au " + PHONE + ". Nous avons des créneaux d'urgence chaque jour d'ouverture." },
    { title: "Week-end et jours fériés : la garde régionale", body: "Le dimanche et les jours fériés, lorsque les cabinets sont fermés, une garde dentaire est organisée à Bruxelles. Renseignez-vous via le service officiel de garde (gardedentaire.be) et appelez toujours avant de vous déplacer." },
    { title: "Urgence vitale : le 112", body: "Traumatisme grave du visage, difficulté à respirer ou à avaler, gonflement qui s'étend vite ou saignement impossible à contrôler : c'est une urgence médicale, appelez le 112 ou rendez-vous aux urgences hospitalières." },
  ];

  const body = [
    pageHeroSplit({
      eyebrow: "Urgence dentaire",
      title: "Urgence dentaire à Anderlecht",
      lead: "Rage de dent, abcès, dent cassée : on vous reçoit en priorité, le jour même dans la plupart des cas. Appelez avant de venir.",
      image: "/assets/photos/urgence.avif",
      alt: "Prise en charge d'une urgence dentaire chez White & Care à Anderlecht",
      primaryLabel: "Appelez maintenant",
    }),

    // Bloc d'appel principal, très visible, au-dessus de la ligne de flottaison
    `<section class="wc-section"><div class="wc-container"><div class="wc-cta-banner">`
      + `<span class="blob" style="right:-70px;top:-70px;width:230px;height:230px"></span>`
      + `<span class="blob" style="left:-50px;bottom:-50px;width:190px;height:190px"></span>`
      + `<div class="wc-cta-inner" style="flex-direction:column;align-items:flex-start;gap:14px">`
      + `<p style="font-size:22px;font-weight:700;margin:0">${dentalIcon("alert-tooth", 24)}Une urgence ? Appelez le ${PHONE}</p>`
      + `<p style="margin:0;opacity:.92">Du lundi au samedi, de 10h à 19h. On vous reçoit en priorité. Créneaux d'urgence chaque jour, parking gratuit au Cora, accueil multilingue.</p>`
      + `<div>${btn("Appeler maintenant : " + PHONE, { variant: "white", iconLeft: ui.phone(15), book: true })}</div>`
      + `</div></div></div></section>`,

    statsStrip([
      ["Jour même", "créneaux d'urgence réservés"],
      ["6 j/7", "lun-sam, 10h à 19h"],
      ["12", "fauteuils, équipe pluridisciplinaire"],
      ["4,6/5", "sur 191 avis Google"],
    ]),

    // H2 · Une urgence ? Appelez maintenant, on vous recoit vite
    glassBlock({
      eyebrow: "Pris en charge le jour même",
      title: "Une urgence dentaire ? Appelez maintenant, on vous reçoit vite",
      paras: [
        "Une douleur qui ne passe pas, une joue qui gonfle, une dent qui se casse : une urgence dentaire arrive toujours au mauvais moment. Chez White & Care, au centre commercial Cora à Anderlecht, notre équipe pluridisciplinaire garde chaque jour des créneaux réservés aux urgences. Vous n'avez pas à attendre des jours pour être soulagé.",
        "<strong>Pourquoi appeler avant de venir</strong> : un simple appel nous permet de préparer votre arrivée, d'évaluer la gravité, de vous orienter vers le bon praticien et de vous donner un créneau au plus vite. Décrivez votre situation en quelques mots (depuis quand, où, douleur, gonflement, fièvre). Si plusieurs langues vous mettent plus à l'aise, précisez-le dès l'appel.",
      ],
      checks: [
        "Créneaux d'urgence réservés chaque jour d'ouverture",
        "Une grande équipe de dentistes, dont de nombreux praticiens conventionnés",
        "Accueil multilingue : précisez votre langue dès l'appel",
      ],
      cta: btn("Appeler maintenant : " + PHONE, { variant: "primary", iconLeft: ui.phone(15), book: true }),
    }),

    // H2 · Que faire en cas d'urgence dentaire (par situation)
    featureGrid({
      eyebrow: "Que faire en cas d'urgence dentaire",
      title: "Chaque situation, la conduite à tenir",
      intro: "Voici les urgences que nous prenons en charge et les premiers réflexes. Dans tous les cas, appelez-nous : ces conseils servent à patienter, pas à remplacer un examen.",
      cols: 2,
      cards: [
        {
          icon: "alert-tooth",
          title: "Rage de dent (douleur intense, pulpite)",
          body: "Une douleur vive, lancinante, qui irradie ou empire la nuit signale souvent que le nerf est touché (pulpite). Un antidouleur adapté soulage temporairement, mais seul un traitement met fin à la douleur. Appelez-nous : selon le cas, un soin de la carie ou un traitement de la racine (endodontie) règle le problème.",
        },
        {
          icon: "heart-care",
          title: "Abcès dentaire (joue gonflée, fièvre)",
          body: "Un gonflement de la gencive ou de la joue, parfois avec de la fièvre ou un mauvais goût, évoque une infection. Un abcès ne se soigne pas seul. Appelez le cabinet sans tarder. En cas de fièvre élevée, de difficulté à respirer ou à avaler, ou d'un gonflement qui s'étend vite vers l'oeil ou le cou, appelez le 112.",
        },
        {
          icon: "tooth",
          title: "Dent cassée ou fêlée",
          body: "Après un choc ou en croquant quelque chose de dur, un morceau de dent peut se casser. Récupérez si possible le fragment et gardez-le. Rincez doucement à l'eau tiède, évitez de mâcher de ce côté et appelez-nous : selon la fracture, la dent peut souvent être réparée ou protégée.",
        },
        {
          icon: "alert-tooth",
          title: "Dent expulsée (tombée après un choc)",
          body: "Une dent définitive sortie de son alvéole est une urgence où chaque minute compte. Tenez-la par la couronne, jamais par la racine, ne la frottez pas. Rincez-la quelques secondes à l'eau ou au lait si elle est sale, replacez-la doucement ou conservez-la dans du lait ou la salive, jamais à sec. Venez tout de suite et appelez-nous en route. Une dent perdue peut ensuite être " + link("remplacée définitivement", "/implant-dentaire") + ". Pour une dent de lait, ne la replacez pas mais appelez quand même.",
        },
        {
          icon: "shield-tooth",
          title: "Saignement qui ne s'arrête pas",
          body: "Après une extraction ou un choc, un saignement modéré est normal quelques heures. S'il persiste, mordez fermement une compresse propre ou un mouchoir pendant dix à quinze minutes, sans cracher ni rincer sans arrêt. Si le saignement reste abondant et incontrôlable, appelez-nous ou, en cas d'hémorragie importante, le 112.",
        },
        {
          icon: "calendar-check",
          title: "Couronne, bridge ou prothèse descellé",
          body: "Une couronne descellée, un bridge décollé ou une prothèse qui ne tient plus n'est pas douloureux mais fragilisé la dent. Conservez la pièce, ne tentez pas de la recoller avec une colle du commerce et appelez le cabinet pour un rendez-vous rapide. Un appareil orthodontique qui blesse peut être protégé avec de la cire ; ne coupez jamais le fil vous-même.",
        },
      ],
    }),

    // H2 · Premiers gestes en attendant votre rendez-vous
    glassBlock({
      eyebrow: "Premiers gestes prudents",
      title: "Premiers gestes en attendant votre rendez-vous",
      paras: [
        "Quelques réflexes simples et prudents soulagent en attendant. Ils ne remplacent pas un examen : en cas de doute, le bon réflexe reste toujours le même, appelez le " + PHONE + ".",
      ],
      checks: [
        "Rincez délicatement à l'eau tiède légèrement salée.",
        "Appliquez une poche de froid sur la joue, à l'extérieur, par intervalles de quinze minutes, en cas de gonflement.",
        "Prenez un antidouleur que vous tolérez habituellement, en respectant la notice (le paracétamol est souvent préféré).",
        "Ne posez jamais d'aspirine ou de comprimé directement sur la dent ou la gencive : cela brûle les tissus.",
        "Évitez le très chaud, le très froid et le très sucré sur la zone douloureuse.",
      ],
      cta: btn("En cas de doute, appelez : " + PHONE, { variant: "primary", iconLeft: ui.phone(15), book: true }),
    }),

    // H2 · Dentiste de garde à Anderlecht et à Bruxelles
    stepGrid({
      eyebrow: "Dentiste de garde à Anderlecht et à Bruxelles",
      title: "Comment vous orienter selon le moment",
      intro: "Beaucoup cherchent un dentiste de garde alors qu'un cabinet ouvert répond souvent plus vite. Voici comment vous orienter.",
      cols: 3,
      steps: gardeSteps,
    }),

    // H2 · Urgence dentaire sans rendez-vous + prise en charge le jour même (zigzag)
    zigzag({
      eyebrow: "Sans rendez-vous",
      title: "Urgence dentaire sans rendez-vous, prise en charge le jour même",
      paras: [
        "On ne planifie pas une rage de dent. Nous vous accueillons sans rendez-vous préalable dans la limite des créneaux d'urgence du jour. Un appel rapide avant de venir reste fortement conseillé : il nous permet de vous garder une place et de réduire votre attente sur place.",
        "Parce qu'une urgence n'attend pas, nous réservons chaque jour des créneaux dédiés. Quand vous appelez, nous évaluons votre situation et vous proposons le rendez-vous le plus rapide possible, le jour même dans la plupart des cas. L'objectif : vous soulager d'abord, puis planifier sereinement la suite si nécessaire.",
      ],
      bullets: [
        ["calendar-check", "Créneaux d'urgence réservés chaque jour d'ouverture"],
        ["shield-tooth", "Un appel avant de venir vous garde une place et réduit l'attente"],
        ["heart-care", "On vous soulage d'abord, on planifie la suite ensuite"],
      ],
      image: "/assets/photos/urgence.avif",
      imageSide: "right",
      alt: "Accueil d'urgence sans rendez-vous chez White & Care Anderlecht",
      cta: btn("Appeler maintenant : " + PHONE, { variant: "primary", iconLeft: ui.phone(15), book: true }),
    }),

    // H2 · Horaires et acces + coût (conventionne)
    glassBlock({
      eyebrow: "Horaires, accès et tarifs",
      title: "Horaires, accès et coût d'une urgence dentaire",
      paras: [
        "White & Care vous reçoit du lundi au samedi, de 10h à 19h, au centre commercial Cora à Anderlecht (1070 Bruxelles). Parking gratuit, accès facile en voiture comme en transports, et un cabinet facilement accessible depuis Molenbeek, Forest et Saint-Gilles. Pour situer le cabinet, voir " + link("notre cabinet à Anderlecht", "/soins-dentaires/votre-cabinet-dentaire-a-anderlecht") + ".",
        "Le coût dépend du soin réalisé (consultation, soin de la douleur, traitement de racine, etc.). White & Care compte de nombreux " + link("dentistes conventionnés INAMI", "/dentiste-conventionne") + ", ce qui permet de bénéficier des tarifs officiels et d'un remboursement par votre mutuelle pour les soins concernés. Pour connaître le tarif précis de votre situation, le mieux est de nous appeler : nous vous renseignons en toute transparence.",
      ],
      checks: [
        "Centre commercial Cora, 1070 Anderlecht, parking gratuit",
        "Ouvert du lundi au samedi, de 10h à 19h",
        "De nombreux praticiens conventionnés : tarifs officiels et remboursement mutuelle",
      ],
      cta: btn("Appeler le cabinet : " + PHONE, { variant: "primary", iconLeft: ui.phone(15), book: true }),
    }),

    faqSection({ title: "Questions fréquentes sur l'urgence dentaire", items: faq }),

    relatedServices([
      { href: "/implant-dentaire", icon: "implant", title: "Implant dentaire", body: "Remplacer durablement une dent perdue." },
      { href: "/dentiste-conventionne", icon: "euro", title: "Dentiste conventionné", body: "Tarifs officiels et remboursement mutuelle." },
      { href: "/soins-dentaires/votre-cabinet-dentaire-a-anderlecht", icon: "clipboard", title: "Le cabinet à Anderlecht", body: "Notre équipe et nos installations au centre Cora." },
    ]),

    reviewsSection(),

    ctaBanner("Ne restez pas avec votre douleur. White & Care vous reçoit en priorité, du lundi au samedi de 10h à 19h. Appelez le " + PHONE + ".", { ctaLabel: "Appeler maintenant" }),
  ].join("\n");

  return {
    path: "urgence-dentaire-anderlecht/index.html",
    meta: {
      title: "Urgence dentaire Anderlecht | Pris en charge le jour même",
      description: "Urgence dentaire à Anderlecht : rage de dent, abcès, dent cassée traités en priorité. Lun-sam 10h-19h, créneaux d'urgence. Appelez le +32 2 493 53 53.",
      canonical: url,
      breadcrumb: [["Accueil", "/"], ["Urgence dentaire", "/urgence-dentaire-anderlecht"]],
      schema: [
        schema({
          url,
          type: "MedicalWebPage",
          name: "White & Care · Urgence dentaire",
          description: "Urgence dentaire à Anderlecht (centre Cora, 1070) : rage de dent, abcès, dent cassée ou expulsée prises en charge en priorité, le jour même. Ouvert du lundi au samedi de 10h à 19h.",
        }),
        faqSchema(faq),
        howToSchema({ name: "Urgence dentaire : comment vous orienter selon le moment", description: "Que faire en cas d'urgence dentaire à Anderlecht selon le jour et la gravité.", steps: gardeSteps }),
      ],
    },
    body,
  };
}
