import { btn, link, ui, eyebrow, chip, dentalIcon, glassBlock, zigzag, featureGrid, stepGrid, ctaBanner, faqSection, reviewsSection, statsStrip, sectionHead, langueSection, tile, PHONE } from "../lib.mjs";
import { heroHome, pageHeroSplit, pageHeroGradient } from "../heroes.mjs";
import { SITE, schema, faqSchema, LANGUE } from "../seo-helpers.mjs";

export default function () {
  const url = SITE + "/surfacage-detartrage-dentaire";

  const faq = [
    ["Le détartrage fait-il mal ?",
      "Non, un détartrage classique est généralement indolore : vous ressentez surtout des vibrations et une sensation de fraîcheur. Pour un surfaçâge sous la gencive, nous réalisons une anesthésie locale afin que le soin soit totalement confortable."],
    ["Le détartrage est-il remboursé par la mutuelle en Belgique ?",
      "Oui. L'assurance obligatoire (INAMI) prévoit le remboursement d'un détartrage par année civile via votre mutuelle. Le reste à votre charge dépend de votre situation (visite l'année précédente, statut BIM). Chez un dentiste conventionné, vous ne payez que le ticket modérateur, sans supplément."],
    ["Quelle est la différence entre un détartrage et un surfaçâge ?",
      "Le détartrage retire le tartre sur la partie visible de la dent et au bord de la gencive. Le surfaçâge radiculaire va sous la gencive pour nettoyer le tartre accumulé le long de la racine et lisser cette racine. Le surfaçâge est indiqué quand les gencives sont atteintes en profondeur."],
    ["Le surfaçâge radiculaire est-il remboursé ?",
      "Oui, sous conditions. Il est pris en charge par quadrant, une fois toutes les trois années civiles, pour les patients de 19 à 64 ans, avec un score de gencive (DPSI) suffisant, un soin réalisé sous anesthésie locale et un examen préalable récent. Notre équipe vérifie votre éligibilité avant de commencer."],
    ["À quelle fréquence faut-il faire un détartrage ?",
      "Pour la plupart des adultes, une fois par an suffit, ce qui correspond aussi au rythme de remboursement. Un rythme plus rapproché peut être conseillé si vous formez du tartre rapidement, si vous fumez ou si vous avez déjà eu une maladie des gencives."],
    ["Mes gencives saignent quand je me brosse les dents, est-ce grave ?",
      "Un saignement n'est pas normal : c'est souvent le premier signe d'une gingivite, l'inflammation de la gencive. Prise à temps, elle est réversible. Sans soin, elle peut évoluer en parodontite et fragiliser la dent. Mieux vaut consulter rapidement."],
    ["Combien de temps dure un détartrage ?",
      "Un détartrage de routine prend généralement une trentaine de minutes. Un surfaçâge est plus long et peut se faire en une ou plusieurs séances selon le nombre de zones à traiter."],
    ["Que faire après un surfaçâge ?",
      "Une légère sensibilité ou un petit saignement peuvent apparaître quelques jours, c'est normal. Maintenez un brossage doux, utilisez le fil dentaire ou des brossettes, et suivez les conseils que nous vous donnons. Le tabac est à éviter car il ralentit la guérison des gencives."],
    ["Le détartrage abîme-t-il l'émail des dents ?",
      "Non. L'appareil à ultrasons cible le tartre par vibration sans entamer l'émail. Le détartrage protège au contraire vos dents en retirant les dépôts responsables des caries et de l'inflammation."],
    ["Faut-il un dentiste conventionné pour être bien remboursé ?",
      "Chez un dentiste conventionné, les honoraires respectent les tarifs officiels, donc pas de supplément : vous ne payez que la part non couverte par la mutuelle. White & Care compte une grande équipe de dentistes, dont de nombreux praticiens conventionnés. Précisez-le lors de la prise de rendez-vous."],
  ];

  const body = [
    pageHeroSplit({
      eyebrow: "Parodontologie",
      title: "Détartrage et surfaçâge à Anderlecht : un sourire sain, sans douleur",
      lead: "Au cabinet White & Care, dans le centre commercial Cora à Anderlecht, notre équipe réalise des détartrages en douceur et des surfaçâges plus approfondis quand les gencives ont besoin d'un soin particulier. L'objectif reste le même : des dents propres, des gencives saines, et une visite sans stress ni douleur.",
      image: "/assets/photos/detartrage.avif",
      alt: "Détartrage dentaire au cabinet White & Care à Anderlecht",
    }),

    statsStrip([
      ["1&times;/an", "détartrage remboursé par la mutuelle"],
      ["Indolore", "ultrasons en douceur, sans abîmer l'émail"],
      ["6 j/7", "ouvert du lundi au samedi"],
      ["4,6/5", "sur 191 avis Google"],
    ]),

    // H2 · Detartrage ou surfacage : quelle difference ? (zigzag)
    zigzag({
      eyebrow: "Bien comprendre",
      title: "Détartrage ou surfaçâge : quelle différence ?",
      paras: [
        "Les deux soins servent à retirer le tartre, mais ils n'interviennent pas au même endroit. Chaque jour, un film invisible se dépose sur vos dents : la plaque dentaire, composée de bactéries et de résidus alimentaires. Si elle n'est pas éliminée par le brossage, elle durcit et se transforme en tartre, une couche solide que la brosse à dents ne peut plus enlever.",
        "Le <strong>détartrage</strong> retire ce tartre des surfaces visibles de la dent et juste au bord de la gencive, le plus souvent à l'aide d'un appareil à ultrasons qui décolle le tartre par vibration, sans abîmer l'émail. C'est un soin de routine, recommandé régulièrement pour prévenir les caries et l'inflammation des gencives.",
        "Le <strong>surfaçâge radiculaire</strong>, parfois appelé détartrage sous-gingival, va plus loin : il nettoie le tartre et la plaque accumulés sous la gencive, le long de la racine de la dent. On y a recours quand le tartre a fragilisé le parodonte, c'est-à-dire l'ensemble des tissus qui soutiennent la dent (gencive et os). Le praticien lisse ensuite la racine pour que la gencive puisse de nouveau y adhérer. Ce soin se réalise sous anesthésie locale et peut nécessiter une ou plusieurs séances selon l'étendue à traiter.",
      ],
      bullets: [
        ["tooth", "Détartrage : nettoyage de routine, partie visible et bord de la gencive"],
        ["heart-care", "Surfaçâge : nettoyage en profondeur des racines, sous la gencive"],
        ["shield-tooth", "Un soin clé pour stopper une maladie des gencives à temps"],
      ],
      image: "/assets/photos/detartrage.avif",
      imageSide: "right",
      alt: "Différence entre détartrage et surfaçâge radiculaire",
    }),

    // H2 · Comment se déroule un detartrage chez White & Care (steps)
    stepGrid({
      eyebrow: "Pas à pas",
      title: "Comment se déroule un détartrage chez White & Care",
      intro: "Un soin simple et bien rodé, du premier examen jusqu'aux conseils que vous emportez. Beaucoup de patients appréhendent le dentiste : notre équipe y est habituée et avance à votre rythme, en vous expliquant chaque geste.",
      cols: 4,
      steps: [
        { title: "Évaluation", body: "Le praticien examine vos dents et vos gencives pour mesurer l'état du parodonte et déterminer si un simple détartrage suffit ou si un surfaçâge est nécessaire." },
        { title: "Nettoyage", body: "À l'aide d'instruments à ultrasons et, si besoin, d'instruments manuels, le tartre et la plaque sont retirés délicatement, y compris dans les zones difficiles d'accès." },
        { title: "Polissage", body: "Les surfaces sont lissées et polies pour retarder le retour de la plaque et redonner de l'éclat aux dents." },
        { title: "Conseils", body: "Vous repartez avec des recommandations d'hygiène adaptées à votre bouche, pour garder le bénéfice du soin le plus longtemps possible." },
      ],
    }),

    // H3 · Est-ce que ca fait mal ? (reassurance indolore + anesthésie)
    glassBlock({
      eyebrow: "Réassurance",
      title: "Est-ce que ça fait mal ?",
      h2: false,
      paras: [
        "C'est la question qui revient le plus souvent, et la réponse est rassurante. Un détartrage classique est généralement indolore : vous ressentez surtout des vibrations et une sensation de fraîcheur. Pour le surfaçâge, qui travaille sous la gencive, nous réalisons une anesthésie locale afin que le soin soit totalement confortable.",
        "Notre équipe est habituée à accompagner les patients qui appréhendent le dentiste. Nous prenons le temps de tout vous expliquer et nous avançons à votre rythme, pour une visite sereine.",
      ],
      cta: btn("Appelez le cabinet : " + PHONE, { variant: "primary", iconLeft: ui.phone(15), book: true }),
    }),

    // H2 · Detartrage rembourse par la mutuelle (section claire, AUTORISEE ici)
    `<section class="wc-section-lg"><div class="wc-container">${sectionHead({
      eyebrow: "Remboursement",
      title: "Détartrage remboursé par la mutuelle : ce qu'il faut savoir",
      intro: "C'est souvent la première question : ce soin est-il remboursé ? Bonne nouvelle, en Belgique le détartrage fait partie des soins pris en charge par l'assurance obligatoire (INAMI), via votre mutuelle.",
      center: true,
    })}<div class="wc-cards-3" style="margin-top:28px">`
      + `<article class="wc-card wc-feature"><span class="wc-chip">${dentalIcon("euro", 26)}</span><h3>Le détartrage classique, remboursé environ une fois par an</h3><p>L'INAMI prévoit le remboursement d'un détartrage par année civile. Le montant qui reste à votre charge dépend de votre situation : avoir consulté un dentiste l'année précédente améliore le remboursement, et le statut BIM (bénéficiaire de l'intervention majorée) réduit encore le reste à charge. Pour le montant précis selon votre profil, demandez-nous au téléphone ou vérifiez auprès de votre mutuelle.</p></article>`
      + `<article class="wc-card wc-feature"><span class="wc-chip">${dentalIcon("calendar-check", 26)}</span><h3>Le surfaçâge radiculaire et son remboursement</h3><p>Le surfaçâge (détartrage sous-gingival) est lui aussi remboursé, selon des règles plus encadrées : par quadrant de la bouche, une fois toutes les trois années civiles, pour les patients de 19 à 64 ans, sous conditions (score de gencive DPSI suffisant, soin sous anesthésie locale, examen ou détartrage préalable récent). C'est notre équipe qui vérifie votre éligibilité et vous explique clairement votre prise en charge avant de commencer.</p></article>`
      + `<article class="wc-card wc-feature"><span class="wc-chip">${dentalIcon("shield-tooth", 26)}</span><h3>Conventionné = pas de mauvaise surprise sur la facture</h3><p>White & Care compte une grande équipe de dentistes, dont de nombreux praticiens conventionnés. Choisir un praticien conventionné signifie des honoraires conformes aux tarifs officiels, donc pas de supplément inattendu sur votre détartrage. Au moment de prendre rendez-vous, précisez que vous souhaitez consulter un dentiste conventionné.</p></article>`
      + `</div><div class="wc-glass-card" style="padding:32px 40px;margin-top:28px"><p style="font-size:15.5px;line-height:1.7;color:var(--wc-body)">Pour aller plus loin sur les tarifs officiels et le remboursement, découvrez notre page ${link("dentiste conventionné à Anderlecht", "/dentiste-conventionne")}. Le montant exact remboursé dépend de votre mutuelle : c'est auprès d'elle que vous obtenez le chiffre précis pour votre situation.</p>`
      + `<div style="margin-top:22px">${btn("Demandez votre remboursement : " + PHONE, { variant: "primary", iconLeft: ui.phone(15), book: true })}</div></div></div></section>`,

    // H2 · A quelle fréquence (glass)
    glassBlock({
      eyebrow: "Bonnes habitudes",
      title: "À quelle fréquence faut-il faire un détartrage ?",
      paras: [
        "Pour la plupart des adultes, un détartrage par an suffit à garder des gencives saines et coïncide avec le rythme de remboursement. Si vous avez tendance à former du tartre rapidement, si vous fumez, si vous portez un appareil ou si vous avez déjà eu une maladie des gencives, votre praticien pourra vous recommander un rythme plus rapproché.",
        "Un suivi régulier reste le meilleur moyen de détecter tôt un problème et d'éviter un soin plus lourd ensuite.",
      ],
      checks: [
        "Un détartrage par an pour la plupart des adultes",
        "Un rythme plus rapproché en cas de tabac, d'appareil ou d'antécédent",
        "Un suivi régulier pour prévenir plutôt que guérir",
      ],
    }),

    // H2 · Gencives qui saignent (zigzag, image a gauche)
    zigzag({
      eyebrow: "Gencives qui saignent",
      title: "Gingivite, parodontite et poches parodontales",
      paras: [
        "Des gencives qui saignent au brossage ne sont pas normales : c'est souvent le premier signe d'une <strong>gingivite</strong>, une inflammation de la gencive causée par l'accumulation de plaque. Prise à temps, la gingivite est réversible. Si rien n'est fait, elle peut évoluer en <strong>parodontite</strong> : l'inflammation atteint alors les tissus profonds et l'os qui soutiennent la dent, ce qui peut entraîner un déchaussement, voire la perte de dents.",
        "Lorsque la parodontite s'installe, des <strong>poches parodontales</strong> se forment : des espaces qui se creusent entre la dent et la gencive, où le tartre s'accumule à l'abri de la brosse. Le surfaçâge radiculaire sert précisément à nettoyer ces poches en profondeur et à lisser la racine pour que la gencive se recolle. C'est le traitement de référence pour stabiliser une parodontite et préserver vos dents.",
      ],
      bullets: [
        ["alert-tooth", "Saignement au brossage : premier signal à ne pas ignorer"],
        ["heart-care", "Gingivite réversible si elle est prise à temps"],
        ["shield-tooth", "Surfaçâge : le traitement de référence contre la parodontite"],
      ],
      image: "/assets/photos/detartrage.avif",
      imageSide: "left",
      alt: "Soin des gencives et parodontologie à Anderlecht",
      cta: btn("Faites évaluer vos gencives : " + PHONE, { variant: "primary", iconLeft: ui.phone(15), book: true }),
    }),

    // H2 · Après le soin (feature grid 2)
    featureGrid({
      eyebrow: "Après le soin",
      title: "Nos conseils pour garder des gencives saines",
      intro: "Un détartrage repart à zéro, mais l'entretien quotidien fait le reste. Quelques gestes simples prolongent le bénéfice du soin.",
      cols: 2,
      cards: [
        {
          icon: "brush",
          title: "Au quotidien",
          body: "Brossez vos dents deux fois par jour pendant deux minutes, complétez avec du fil dentaire ou des brossettes interdentaires pour nettoyer entre les dents, et limitez le tabac, qui favorise les maladies des gencives.",
        },
        {
          icon: "heart-care",
          title: "Après un surfaçâge",
          body: "Une légère sensibilité ou un petit saignement peuvent apparaître quelques jours : c'est normal. Maintenez un brossage doux et suivez nos conseils post-soin, qui vous aideront à passer ce cap sereinement.",
        },
      ],
    }),

    // H2 · Combien coute un detartrage (glass)
    glassBlock({
      eyebrow: "Tarifs",
      title: "Combien coûte un détartrage à Anderlecht ?",
      paras: [
        "Le détartrage suit les tarifs officiels de l'INAMI, et chez un dentiste conventionné vous ne payez que la part non remboursée (le ticket modérateur), sans supplément. Le coût d'un surfaçâge dépend du nombre de zones (quadrants) à traiter.",
        "Plutôt que d'avancer un chiffre qui varierait selon votre situation et votre remboursement, nous préférons vous donner une estimation claire au téléphone, après avoir compris votre besoin. Appelez-nous, nous répondons volontiers à vos questions de tarif avant tout rendez-vous.",
      ],
      cta: btn("Demandez une estimation : " + PHONE, { variant: "primary", iconLeft: ui.phone(15), book: true }),
    }),

    // H2 · On parle votre langue
    langueSection(LANGUE),

    // H2 · Prendre rendez-vous (zigzag acces)
    zigzag({
      id: "acces",
      eyebrow: "Prendre rendez-vous",
      title: "Prendre rendez-vous pour un détartrage à Anderlecht",
      paras: [
        "Notre cabinet vous accueille dans le centre commercial Cora à Anderlecht, du lundi au samedi de 10h à 18h30, avec un parking gratuit. Facile d'accès depuis Molenbeek, Forest et Saint-Gilles, en voiture comme en transports en commun.",
        "Notre équipe est multilingue et notée 4,6 sur 5 par près de 191 patients sur Google. Pour réserver votre détartrage ou faire évaluer vos gencives, le plus simple est de nous appeler.",
      ],
      bullets: [
        ["shield-tooth", "Centre commercial Cora (1070 Anderlecht), parking gratuit"],
        ["calendar-check", "Ouvert du lundi au samedi, de 10h à 18h30, sur rendez-vous"],
        ["smile", "Équipe multilingue, notée 4,6/5 sur 191 avis Google"],
      ],
      image: "/assets/photos/detartrage.avif",
      imageSide: "right",
      alt: "Prendre rendez-vous pour un détartrage à Anderlecht",
      cta: btn("Appelez White & Care : " + PHONE, { variant: "primary", iconLeft: ui.phone(15), book: true }),
    }),

    reviewsSection(),

    faqSection({ title: "Questions fréquentes sur le détartrage et le surfaçâge", items: faq }),

    ctaBanner("Détartrage remboursé, surfaçâge des gencives, indolore et 6 j/7 au Cora à Anderlecht. Appelez le " + PHONE + "."),
  ].join("\n");

  return {
    path: "surfacage-detartrage-dentaire/index.html",
    meta: {
      title: "Détartrage & Surfaçâge Anderlecht | Remboursé - White & Care",
      description: "Détartrage remboursé par la mutuelle (env. 1x/an) chez un dentiste conventionné à Anderlecht. Surfaçâge pour gencives qui saignent. Indolore, 6j/7. Appelez le cabinet.",
      canonical: url,
      schema: [
        schema({
          url,
          name: "White & Care · Détartrage & surfaçâge",
          description: "Détartrage et surfaçâge radiculaire à Anderlecht (centre Cora, 1070). Détartrage remboursé par la mutuelle chez un dentiste conventionné INAMI, indolore, ouvert du lundi au samedi.",
        }),
        faqSchema(faq),
      ],
    },
    body,
  };
}
