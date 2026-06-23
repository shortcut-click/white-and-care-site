import { btn, link, ui, eyebrow, chip, dentalIcon, glassBlock, zigzag, featureGrid, stepGrid, ctaBanner, faqSection, reviewsSection, statsStrip, sectionHead, langueSection, tile, PHONE, relatedServices } from "../lib.mjs";
import { heroHome, pageHeroSplit, pageHeroGradient } from "../heroes.mjs";
import { SITE, schema, faqSchema, LANGUE } from "../seo-helpers.mjs";

export default function () {
  const url = SITE + "/invisalign";

  const faq = [
    ["Combien de temps dure un traitement Invisalign ?",
      "La durée dépend de la complexité de votre cas. En moyenne, le traitement dure entre 12 et 18 mois. Les corrections légères peuvent aboutir plus rapidement, parfois en quelques mois, tandis que les cas plus complexes demandent davantage de temps. Le respect du temps de port quotidien est déterminant pour avancer comme prévu."],
    ["Les gouttières Invisalign sont-elles douloureuses ?",
      "Non, mais une légère pression peut se faire sentir les premiers jours avec un nouveau jeu d'aligneurs. C'est tout à fait normal : cela signifie que vos dents se déplacent. Cette sensation est généralement bien moins intense qu'avec des bagues traditionnelles et disparaît vite."],
    ["Combien d'heures par jour faut-il porter les aligneurs ?",
      "Pour des résultats optimaux, portez vos aligneurs 20 à 22 heures par jour. Vous ne les retirez que pour manger, boire autre chose que de l'eau et vous brosser les dents. Plus le temps de port est respecté, plus le traitement avance efficacement."],
    ["Peut-on manger avec les aligneurs Invisalign ?",
      "Non, il faut retirer vos aligneurs pour manger et pour boire autre chose que de l'eau. Cela préserve vos gouttières et vous permet de garder une excellente hygiène. C'est l'un des grands avantages d'Invisalign par rapport aux bagues : aucune restriction alimentaire."],
    ["Combien coûte un traitement Invisalign à Bruxelles ?",
      "À Bruxelles et en Belgique, un traitement complet se situe généralement entre 2 500 EUR et 6 000 EUR, selon la complexité du cas et le nombre d'aligneurs. Ce budget couvre habituellement le diagnostic, les aligneurs et le suivi. Le prix exact de votre traitement vous est communiqué après un bilan personnalisé."],
    ["Invisalign convient-il aux adolescents ?",
      "Oui, dès que la dentition définitive est suffisamment en place. Une consultation avec scanner 3D permet d'évaluer si le traitement est adapté à votre adolescent et de définir un plan sur mesure."],
    ["À quelle fréquence change-t-on de gouttières ?",
      "En général toutes les une à deux semaines, selon le plan de traitement personnalisé établi par votre praticien. Chaque nouveau jeu d'aligneurs poursuit le déplacement de vos dents vers leur position idéale."],
    ["Que faire si je perds ou casse une gouttière Invisalign ?",
      "Contactez rapidement notre cabinet à Anderlecht. Selon votre situation, nous vous conseillerons de reprendre la gouttière précédente ou de passer à la suivante en attendant un remplacement, afin d'assurer la continuité de votre traitement."],
    ["Invisalign est-il vraiment invisible ?",
      "Les aligneurs sont transparents et s'ajustent au plus près de vos dents : ils sont quasiment indétectables lorsque vous souriez ou que vous parlez. C'est ce qui en fait une solution d'orthodontie discrète, particulièrement appréciée des adultes."],
    ["Comment se passe le premier rendez-vous ?",
      "Nous réalisons un scanner 3D de vos dents, sans moulage. Grâce à la technologie ClinCheck, nous vous montrons le déplacement de vos dents et le résultat final avant de commencer. Vous obtenez une estimation de durée et un devis clair, sans engagement."],
    ["Invisalign abîme-t-il les dents ?",
      "Non. Les aligneurs exercent une pression douce et progressive, planifiée numériquement et suivie par votre orthodontiste. Comme ils sont amovibles, vous conservez un brossage et un passage du fil dentaire normaux, ce qui aide à préserver votre hygiène pendant tout le traitement."],
  ];

  const comparatif = `<section class="wc-section-lg"><div class="wc-container">`
    + sectionHead({ eyebrow: "Comparatif", title: "Invisalign ou bagues traditionnelles : quelles différences ?", intro: "Les deux méthodes corrigent l'alignement des dents, mais l'expérience au quotidien diffère beaucoup.", center: true })
    + `<div class="wc-cards-2" style="margin-top:28px">`
    + `<article class="wc-card"><span class="wc-chip">${dentalIcon("smile", 26)}</span><h3>Invisalign, aligneurs transparents</h3>`
    + `<ul class="wc-checks">`
    + `<li><span class="ic">${ui.check(20)}</span><span>Quasiment invisibles au quotidien</span></li>`
    + `<li><span class="ic">${ui.check(20)}</span><span>Amovibles pour manger et l'hygiène</span></li>`
    + `<li><span class="ic">${ui.check(20)}</span><span>Pas de fil ni de partie métallique coupante</span></li>`
    + `<li><span class="ic">${ui.check(20)}</span><span>Aucune restriction alimentaire</span></li>`
    + `<li><span class="ic">${ui.check(20)}</span><span>Brossage et fil dentaire normaux</span></li>`
    + `<li><span class="ic">${ui.check(20)}</span><span>Simulation 3D du résultat avant de commencer</span></li>`
    + `</ul></article>`
    + `<article class="wc-card"><span class="wc-chip">${dentalIcon("tooth", 26)}</span><h3>Bagues traditionnelles</h3>`
    + `<ul style="list-style:none;padding:0;margin:18px 0 0;display:grid;gap:12px">`
    + `<li style="font-size:15px;line-height:1.5;color:var(--wc-body)">Visibles (brackets et fils)</li>`
    + `<li style="font-size:15px;line-height:1.5;color:var(--wc-body)">Fixées en permanence, non amovibles</li>`
    + `<li style="font-size:15px;line-height:1.5;color:var(--wc-body)">Frottements possibles sur les joues</li>`
    + `<li style="font-size:15px;line-height:1.5;color:var(--wc-body)">Certains aliments déconseillés</li>`
    + `<li style="font-size:15px;line-height:1.5;color:var(--wc-body)">Nettoyage plus délicat autour des fils</li>`
    + `<li style="font-size:15px;line-height:1.5;color:var(--wc-body)">Pas de simulation préalable du résultat</li>`
    + `</ul></article>`
    + `</div>`
    + `<p style="margin-top:22px;font-size:15.5px;line-height:1.65;color:var(--wc-body)">Pour beaucoup de patients, la discrétion et la liberté de retirer les aligneurs font la différence. Les ${link("bagues traditionnelles", "/orthodontie-anderlecht")} restent toutefois indiquées dans certaines situations : votre praticien vous orientera vers la solution la mieux adaptée lors du bilan.</p>`
    + `</div></section>`;

  const body = [
    pageHeroSplit({
      eyebrow: "Orthodontie invisible",
      title: "Invisalign à Anderlecht et Bruxelles : réalignez votre sourire sans bagues",
      lead: "Des aligneurs transparents sur mesure pour corriger votre sourire en toute discrétion. Scanner 3D, simulation ClinCheck et suivi par un orthodontiste Invisalign Provider, au centre commercial Cora à Anderlecht.",
      image: "/assets/photos/invisalign-hero.webp",
      alt: "Aligneurs transparents Invisalign White & Care Anderlecht",
    }),

    glassBlock({
      eyebrow: "Comment ça marche",
      title: "Qu'est-ce qu'Invisalign et comment ça fonctionne ?",
      paras: [
        "Invisalign est un système d'aligneurs transparents qui remplace les bagues classiques. Au lieu de fils métalliques et de brackets collés sur les dents, vous portez une série de gouttières en plastique transparent, fabriquées sur mesure d'après une empreinte numérique de votre bouche. Chaque jeu d'aligneurs corrige une étape précise du déplacement, puis cède la place au suivant.",
        "Les aligneurs exercent une pression légère et continue sur les dents ciblées. Vous changez de gouttières environ toutes les une à deux semaines, selon le plan établi par votre praticien. Comme elles sont quasiment invisibles, personne ne remarque que vous suivez un traitement. Et parce qu'elles sont amovibles, vous les retirez pour manger, boire autre chose que de l'eau, et vous brosser les dents : un vrai changement par rapport aux appareils fixes.",
      ],
      checks: [
        "Gouttières dentaires invisibles, fabriquées sur mesure",
        "Une orthodontie invisible pour adultes et adolescents",
        "Légers chevauchements, dents espacées, sourire déplacé avec les années",
      ],
    }),

    stepGrid({
      eyebrow: "Étape par étape",
      title: "Votre parcours Invisalign chez White & Care",
      intro: "Tout commence par un bilan dans notre cabinet d'Anderlecht. Voici comment se déroule un traitement, du premier scanner au sourire final.",
      cols: 4,
      steps: [
        { title: "Scanner 3D et empreinte numérique", body: "Sans moulage en pâte désagréable : l'empreinte est numérique, rapide et précise. Cette image en trois dimensions sert de base à tout votre traitement." },
        { title: "Simulation ClinCheck", body: "Grâce à la technologie ClinCheck, nous visualisons avec vous le déplacement de vos dents, étape par étape, et le résultat final, avant même de commencer." },
        { title: "Fabrication sur mesure", body: "Une fois le plan validé, vos aligneurs transparents sont fabriqués sur mesure. Vous les portez 20 à 22 heures par jour et passez au jeu suivant toutes les une à deux semaines." },
        { title: "Suivi avec votre orthodontiste", body: "Des rendez-vous réguliers vérifient que vos dents se déplacent comme prévu. Notre cabinet est reconnu Invisalign Provider : un praticien formé à la méthode vous suit à Anderlecht." },
      ],
    }),

    glassBlock({
      eyebrow: "Durée",
      title: "Combien de temps dure un traitement Invisalign ?",
      paras: [
        "La durée dépend de la complexité de votre cas. En moyenne, un traitement Invisalign s'étend sur 12 à 18 mois. Les corrections légères peuvent aboutir nettement plus vite, parfois en quelques mois seulement, tandis que les cas plus complexes demandent davantage de temps.",
        "Le port régulier des aligneurs, 20 à 22 heures par jour, est le facteur qui influence le plus la rapidité des résultats : plus vous respectez le temps de port, plus le traitement avance comme prévu. Lors de la simulation ClinCheck, nous vous donnons une estimation de durée adaptée à votre situation.",
      ],
    }),

    glassBlock({
      eyebrow: "Budget",
      title: "Prix d'un traitement Invisalign à Bruxelles : à quoi s'attendre",
      paras: [
        "Le prix d'un traitement Invisalign varie selon la complexité de votre cas et le nombre d'aligneurs nécessaires. À Bruxelles et en Belgique, les traitements complets se situent généralement entre 2 500 EUR et 6 000 EUR, les corrections les plus légères pouvant être moins élevées et les cas les plus complexes davantage. Ce budget couvre habituellement le diagnostic, l'ensemble des aligneurs et le suivi.",
        "Le seul moyen de connaître le prix précis de votre traitement est un bilan personnalisé. Appelez-nous pour convenir d'un rendez-vous : nous évaluons votre situation et vous communiquons un devis clair avant de commencer.",
      ],
      checks: [
        "L'ampleur de la correction à réaliser",
        "La durée du traitement et le nombre de gouttières",
        "Les éventuels actes complémentaires nécessaires",
      ],
      cta: btn("Demandez votre devis personnalisé : " + PHONE, { variant: "primary", iconLeft: ui.phone(15), book: true }),
    }),

    comparatif,

    zigzag({
      eyebrow: "Au quotidien",
      title: "Confort, hygiène et entretien",
      paras: [
        "Les premiers jours avec un nouveau jeu d'aligneurs, vous pouvez ressentir une légère pression : c'est le signe que vos dents se déplacent. Cette sensation reste généralement bien plus douce qu'avec un appareil fixe et s'estompe rapidement.",
        "Côté hygiène, Invisalign simplifie la vie. Comme vous retirez les gouttières pour manger et vous brosser les dents, vous gardez vos habitudes de brossage et de fil dentaire sans contourner de fils ni de brackets.",
      ],
      bullets: [
        ["brush", "Brossage et fil dentaire normaux, sans obstacle"],
        ["smile", "Aucune restriction alimentaire : gouttières retirées pour manger"],
        ["shield-tooth", "Rincez et nettoyez doucement vos aligneurs chaque jour, rangez-les dans leur boîtier"],
      ],
      image: "/assets/photos/invisalign.avif",
      imageSide: "right",
      alt: "Entretien des gouttières Invisalign White & Care",
    }),

    glassBlock({
      eyebrow: "Éligibilité",
      title: "Invisalign est-il fait pour vous ? Ado, adulte, cas concernés",
      paras: [
        "Invisalign s'adresse aux adultes comme aux adolescents dont la dentition définitive est en place. Il corrige de nombreuses situations : dents légèrement chevauchées, espaces entre les dents, sourire qui s'est refermé ou déplacé avec le temps, ou simple envie d'harmoniser son sourire.",
        "Certains cas très complexes peuvent nécessiter une autre approche, parfois en complément. La seule manière de le savoir est un examen avec scanner 3D : il permet de confirmer votre éligibilité et de vous montrer le résultat attendu avant tout engagement. Découvrez aussi notre offre complète d'" + link("orthodontie", "/orthodontie-anderlecht") + " pour adultes et enfants.",
      ],
    }),

    featureGrid({
      eyebrow: "Pourquoi nous",
      title: "Pourquoi choisir White & Care à Anderlecht",
      cols: 3,
      cards: [
        { icon: "scanner", title: "Scanner 3D et ClinCheck sur place", body: "Empreinte numérique sans moulage et visualisation de votre résultat avant de commencer." },
        { icon: "award", title: "Orthodontiste Invisalign Provider", body: "Un suivi par un praticien formé à la méthode, du premier scanner au sourire final." },
        { icon: "smile", title: "Une équipe multilingue", body: "Vous êtes accueilli en français, néerlandais, anglais, espagnol, arabe et d'autres langues selon le praticien." },
        { icon: "shield-tooth", title: "Accessible et pratique", body: "Au centre commercial Cora à Anderlecht, parking gratuit, ouvert du lundi au samedi de 10h à 18h30." },
        { icon: "heart-care", title: "La confiance des patients", body: "4,6/5 sur environ 191 avis Google, dans le sud-ouest de Bruxelles." },
        { icon: "calendar-check", title: "Un seul geste : appelez", body: "Nous fixons votre bilan, réalisons le scanner 3D et vous montrons votre futur sourire." },
      ],
    }),

    langueSection(LANGUE),

    statsStrip([
      ["12-18", "mois en moyenne"],
      ["20-22h", "de port par jour"],
      ["3D", "scanner et ClinCheck"],
      ["4,6/5", "sur 191 avis Google"],
    ]),

    faqSection({ title: "Vos questions sur Invisalign", items: faq }),

    relatedServices([
      { href: "/orthodontie-anderlecht", icon: "smile", title: "Orthodontie", body: "Bagues et aligneurs pour tous les âges." },
      { href: "/blanchiment-dentaire-cabinet-dentaire-anderlecht", icon: "sparkle-tooth", title: "Blanchiment dentaire", body: "Parfaire le sourire une fois les dents alignées." },
      { href: "/soins-dentaires/votre-cabinet-dentaire-a-anderlecht", icon: "clipboard", title: "Le cabinet à Anderlecht", body: "Notre équipe et nos installations au centre Cora." },
    ]),

    reviewsSection(),

    ctaBanner("Vous vous demandez si Invisalign est la bonne solution pour votre sourire ? Appelez White & Care à Anderlecht : scanner 3D, simulation ClinCheck et devis clair, sans engagement."),
  ].join("\n");

  return {
    path: "invisalign/index.html",
    meta: {
      title: "Invisalign Anderlecht & Bruxelles | Aligneurs | White & Care",
      description: "Invisalign à Anderlecht et Bruxelles : aligneurs transparents sur mesure, scanner 3D et orthodontiste Invisalign Provider. 4,6/5 sur 191 avis. Appelez-nous.",
      canonical: url,
      specialist: true,
      schema: [
        schema({ url, name: "White & Care : Invisalign", description: "Traitement Invisalign à Anderlecht et Bruxelles : aligneurs transparents sur mesure, scanner 3D, simulation ClinCheck et suivi par un orthodontiste Invisalign Provider." }),
        faqSchema(faq),
      ],
    },
    body,
  };
}
