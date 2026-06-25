import { btn, link, ui, eyebrow, chip, dentalIcon, glassBlock, zigzag, featureGrid, stepGrid, ctaBanner, faqSection, reviewsSection, statsStrip, sectionHead, langueSection, tile, PHONE, relatedServices } from "../lib.mjs";
import { heroHome, pageHeroSplit, pageHeroGradient } from "../heroes.mjs";
import { SITE, schema, faqSchema, howToSchema, LANGUE } from "../seo-helpers.mjs";

export default function () {
  const url = SITE + "/urgence-dentaire-anderlecht";

  const faq = [
    ["Que faire en cas d'urgence dentaire à Anderlecht ?",
      "Appelez d'abord White & Care au +32 2 493 53 53. Décrivez votre situation : nous vérifions nos disponibilités et, si notre planning le permet, nous vous donnons un rendez-vous le jour même pour vous soigner. Si ce n'est pas possible, nous vous proposons la disponibilité la plus rapide. L'appel préalable est indispensable : nous ne recevons pas d'urgence sans rendez-vous."],
    ["Avez-vous un dentiste de garde à Bruxelles ?",
      "En semaine, du lundi au samedi de 10h à 19h, vous n'avez pas besoin d'un service de garde : appelez directement le cabinet. Selon nos disponibilités, nous cherchons à vous recevoir le jour même. Le dimanche et les jours fériés, une garde dentaire régionale est organisée à Bruxelles ; consultez le service officiel de garde (gardedentaire.be) et appelez avant de vous déplacer."],
    ["J'ai une rage de dent insupportable, surtout la nuit. Que faire ?",
      "Une douleur intense qui empire la nuit signale souvent une atteinte du nerf. En attendant, un antidouleur adapté peut soulager, mais seul un traitement règle le problème. Appelez-nous dès l'ouverture ; en cas de douleur ingérable la nuit ou le dimanche, orientez-vous vers la garde régionale ou, si l'état général se dégrade, le 112."],
    ["Que faire si une dent est tombée (expulsée) après un choc ?",
      "Pour une dent définitive, chaque minute compte. Tenez-la par la couronne, pas par la racine, rincez-la brièvement si elle est sale, replacez-la dans son logement si possible, sinon conservez-la dans du lait ou dans votre salive. Venez immédiatement et appelez-nous en route. Pour une dent de lait, ne la replacez pas mais appelez quand même."],
    ["Que faire en cas d'abcès dentaire ?",
      "Un abcès (gonflement, parfois fièvre) est une infection qui ne disparaît pas seule. Appelez le cabinet sans attendre. Si vous avez une forte fièvre, du mal à respirer ou à avaler, ou un gonflement qui s'étend vite, appelez le 112 : c'est une urgence médicale."],
    ["Ma dent s'est cassée, est-ce une urgence ?",
      "Oui, surtout si elle est douloureuse ou sensible. Gardez le fragment, rincez à l'eau tiède, ne mâchez pas de ce côté et appelez-nous. Une dent cassée peut souvent être réparée ou protégée si vous consultez rapidement."],
    ["Puis-je venir sans rendez-vous ?",
      "Non, appelez-nous d'abord au +32 2 493 53 53. En téléphonant, nous vérifions nos disponibilités et, dans la mesure du possible, nous vous donnons un rendez-vous le jour même. Si nous ne pouvons pas vous prendre à temps, nous vous le disons clairement et nous vous orientons vers la solution la plus rapide."],
    ["Combien coûte une consultation d'urgence ?",
      "Le tarif dépend du soin réalisé. White & Care compte de nombreux dentistes conventionnés INAMI, ce qui ouvre droit aux tarifs officiels et au remboursement mutuelle pour les soins concernés. Appelez-nous pour un renseignement clair avant votre venue."],
    ["Une couronne ou une prothèse s'est descellée, est-ce urgent ?",
      "Ce n'est généralement pas douloureux, mais mieux vaut consulter vite pour protéger la dent. Conservez la pièce, ne la recollez pas avec une colle du commerce et appelez-nous pour un rendez-vous rapide."],
    ["En combien de temps puis-je être reçu ?",
      "Souvent le jour même si notre planning le permet, sinon à la première disponibilité. Plus vous appelez tôt dans la journée, plus il est facile de vous trouver une place. Dans tous les cas, l'appel préalable est nécessaire : nous ne prenons pas d'urgence sans rendez-vous."],
  ];

  const gardeSteps = [
    { title: "En semaine : appelez le cabinet", body: "Du lundi au samedi, de 10h à 19h, inutile de chercher une garde : appelez White & Care au " + PHONE + ". Selon nos disponibilités, nous cherchons à vous recevoir le jour même." },
    { title: "Week-end et jours fériés : la garde régionale", body: "Le dimanche et les jours fériés, lorsque les cabinets sont fermés, une garde dentaire est organisée à Bruxelles. Renseignez-vous via le service officiel de garde (gardedentaire.be) et appelez toujours avant de vous déplacer." },
    { title: "Urgence vitale : le 112", body: "Traumatisme grave du visage, difficulté à respirer ou à avaler, gonflement qui s'étend vite ou saignement impossible à contrôler : c'est une urgence médicale, appelez le 112 ou rendez-vous aux urgences hospitalières." },
  ];

  const body = [
    pageHeroSplit({
      eyebrow: "Urgence dentaire",
      title: "Urgence dentaire à Anderlecht",
      lead: "Rage de dent, abcès, dent cassée : on vous reçoit en priorité, souvent le jour même. Appelez d'abord, c'est indispensable : nous vérifions que nous pouvons vous prendre en charge.",
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
      + `<p style="margin:0;opacity:.92">Du lundi au samedi, de 10h à 19h. On vous reçoit en priorité selon nos disponibilités. Appelez d'abord, parking gratuit au Shopping Cora Anderlecht, accueil multilingue.</p>`
      + `<div>${btn("Appeler maintenant : " + PHONE, { variant: "white", iconLeft: ui.phone(15), book: true })}</div>`
      + `</div></div></div></section>`,

    statsStrip([
      ["Souvent", "reçu le jour même"],
      ["6 j/7", "lun-sam, 10h à 19h"],
      ["12", "fauteuils, équipe pluridisciplinaire"],
      ["4,6/5", "sur 191 avis Google"],
    ]),

    // H2 · Une urgence ? Appelez maintenant, on vous recoit vite
    glassBlock({
      eyebrow: "Appelez d'abord",
      title: "Une urgence dentaire ? Appelez maintenant, on vous reçoit vite",
      paras: [
        "Une douleur qui ne passe pas, une joue qui gonfle, une dent qui se casse : une urgence dentaire arrive toujours au mauvais moment. Chez White & Care, au Shopping Cora Anderlecht, notre équipe pluridisciplinaire fait son possible pour vous recevoir au plus vite. Appelez d'abord : selon nos disponibilités, nous vous donnons un rendez-vous le jour même et, si ce n'est pas possible, la disponibilité la plus rapide.",
        "<strong>Pourquoi appeler avant de venir</strong> : nous ne recevons pas d'urgence sans rendez-vous. Un appel nous permet d'évaluer la gravité, de vérifier que nous pouvons vous prendre en charge, de vous orienter vers le bon praticien et de vous éviter un déplacement inutile. Décrivez votre situation en quelques mots (depuis quand, où, douleur, gonflement, fièvre). Si plusieurs langues vous mettent plus à l'aise, précisez-le dès l'appel.",
      ],
      checks: [
        "Un rendez-vous le jour même dès que notre planning le permet",
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

    // H2 · Comment se passe une urgence : appeler d'abord, RDV le jour même si possible (zigzag)
    zigzag({
      eyebrow: "Comment ça se passe",
      title: "Urgence dentaire : appelez, on vous reçoit au plus vite",
      paras: [
        "On ne planifie pas une rage de dent, mais on ne débarque pas non plus sans prévenir : nous ne recevons pas d'urgence sans rendez-vous. Le premier réflexe, c'est l'appel. Il nous permet d'évaluer votre situation et de vérifier que nous sommes en capacité de vous prendre en charge.",
        "Quand vous appelez, si notre planning le permet, nous vous donnons un rendez-vous le jour même pour vous soigner. Si ce n'est pas possible, nous vous proposons la disponibilité la plus rapide. Et si nous ne pouvons vraiment pas vous prendre à temps, nous vous le disons clairement et vous orientons. L'objectif reste le même : vous soulager au plus vite.",
      ],
      bullets: [
        ["calendar-check", "Un appel d'abord : nous vérifions que nous pouvons vous recevoir"],
        ["shield-tooth", "Un rendez-vous le jour même dès que notre planning le permet"],
        ["heart-care", "On vous soulage d'abord, on planifie la suite ensuite"],
      ],
      image: "/assets/photos/urgence.avif",
      imageSide: "right",
      alt: "Prise en charge d'une urgence dentaire chez White & Care à Anderlecht",
      cta: btn("Appeler maintenant : " + PHONE, { variant: "primary", iconLeft: ui.phone(15), book: true }),
    }),

    // H2 · Horaires et acces + coût (conventionne)
    glassBlock({
      eyebrow: "Horaires, accès et tarifs",
      title: "Horaires, accès et coût d'une urgence dentaire",
      paras: [
        "White & Care vous reçoit du lundi au samedi, de 10h à 19h, au Shopping Cora Anderlecht (1070 Bruxelles). Parking gratuit, accès facile en voiture comme en transports, et un cabinet facilement accessible depuis Molenbeek, Forest et Saint-Gilles. Pour situer le cabinet, voir " + link("notre cabinet à Anderlecht", "/soins-dentaires/votre-cabinet-dentaire-a-anderlecht") + ".",
        "Le coût dépend du soin réalisé (consultation, soin de la douleur, traitement de racine, etc.). White & Care compte de nombreux " + link("dentistes conventionnés INAMI", "/dentiste-conventionne") + ", ce qui permet de bénéficier des tarifs officiels et d'un remboursement par votre mutuelle pour les soins concernés. Pour connaître le tarif précis de votre situation, le mieux est de nous appeler : nous vous renseignons en toute transparence.",
      ],
      checks: [
        "Shopping Cora Anderlecht, 1070 Anderlecht, parking gratuit",
        "Ouvert du lundi au samedi, de 10h à 19h",
        "De nombreux praticiens conventionnés : tarifs officiels et remboursement mutuelle",
      ],
      cta: btn("Appeler le cabinet : " + PHONE, { variant: "primary", iconLeft: ui.phone(15), book: true }),
    }),

    faqSection({ title: "Questions fréquentes sur l'urgence dentaire", items: faq }),

    relatedServices([
      { href: "/implant-dentaire", icon: "implant", title: "Implant dentaire", body: "Remplacer durablement une dent perdue." },
      { href: "/dentiste-conventionne", icon: "euro", title: "Dentiste conventionné", body: "Tarifs officiels et remboursement mutuelle." },
      { href: "/soins-dentaires/votre-cabinet-dentaire-a-anderlecht", icon: "clipboard", title: "Le cabinet à Anderlecht", body: "Notre équipe et nos installations au Shopping Cora Anderlecht." },
    ]),

    reviewsSection(),

    ctaBanner("Ne restez pas avec votre douleur. White & Care vous reçoit en priorité, du lundi au samedi de 10h à 19h. Appelez le " + PHONE + ".", { ctaLabel: "Appeler maintenant" }),
  ].join("\n");

  return {
    path: "urgence-dentaire-anderlecht/index.html",
    meta: {
      title: "Urgence dentaire Anderlecht | Souvent reçu le jour même",
      description: "Urgence dentaire à Anderlecht : rage de dent, abcès, dent cassée traités en priorité, souvent le jour même. Appelez d'abord, lun-sam 10h-19h : +32 2 493 53 53.",
      canonical: url,
      breadcrumb: [["Accueil", "/"], ["Urgence dentaire", "/urgence-dentaire-anderlecht"]],
      schema: [
        schema({
          url,
          type: "MedicalWebPage",
          name: "White & Care · Urgence dentaire",
          description: "Urgence dentaire à Anderlecht (Shopping Cora Anderlecht, 1070) : rage de dent, abcès, dent cassée ou expulsée prises en charge en priorité, souvent le jour même selon les disponibilités. Appel préalable nécessaire. Ouvert du lundi au samedi de 10h à 19h.",
        }),
        faqSchema(faq),
        howToSchema({ name: "Urgence dentaire : comment vous orienter selon le moment", description: "Que faire en cas d'urgence dentaire à Anderlecht selon le jour et la gravité.", steps: gardeSteps }),
      ],
    },
    body,
  };
}
