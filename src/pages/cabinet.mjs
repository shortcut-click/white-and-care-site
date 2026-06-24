import { btn, link, ui, eyebrow, chip, dentalIcon, glassBlock, zigzag, featureGrid, stepGrid, ctaBanner, faqSection, reviewsSection, statsStrip, sectionHead, langueSection, tile, PHONE } from "../lib.mjs";
import { heroHome, pageHeroSplit, pageHeroGradient } from "../heroes.mjs";
import { SITE, schema, faqSchema, LANGUE } from "../seo-helpers.mjs";

export default function () {
  const url = SITE + "/soins-dentaires/votre-cabinet-dentaire-a-anderlecht";

  const faq = [
    ["Ou se trouve le cabinet dentaire White & Care ?",
      "White & Care est situe à Anderlecht (1070), a l'interieur du centre commercial Cora. Vous nous trouvez facilement, avec un grand parking gratuit juste à côté du cabinet."],
    ["Le parking est-il gratuit ?",
      "Oui. Vous beneficiez du vaste parking gratuit du centre commercial Cora, a quelques pas du cabinet. Pas d'horodateur, pas de stress de stationnement."],
    ["Comment venir en transports en commun ?",
      "Le centre Cora est desservi par plusieurs lignes de bus et de tram de la STIB. Appelez-nous au " + PHONE + " et nous vous indiquerons l'arrêt et l'itinéraire les plus pratiques depuis votre quartier."],
    ["Quelles langues parle l'équipe ?",
      "Notre équipe est multilingue. Selon le praticien, vous pouvez être suivi en français, néerlandais, anglais, espagnol, arabe et d'autres langues. Precisez votre langue dès la prise de rendez-vous."],
    ["Comment se passe une première visite ?",
      "La première visite sert a faire connaissance et a dresser un bilan de votre bouche, souvent avec un examen et une imagerie si nécessaire. Nous prenons le temps de vous expliquer la situation et les options, sans aucun jugement."],
    ["Quels sont les horaires d'ouverture ?",
      "Nous sommes ouverts du lundi au samedi, de 10h a 19h."],
    ["Comment prendre rendez-vous ?",
      "Par telephone, au " + PHONE + ", du lundi au samedi de 10h a 19h. L'appel nous permet de vous orienter vers le praticien adapté à votre besoin."],
    ["Vos dentistes sont-ils conventionnés ?",
      "Une grande partie de notre équipe est conventionnee et applique les tarifs officiels INAMI. Nous vous precisons toujours, avant un soin, ce qui releve du conventionnement. Pour en savoir plus, voir notre page dentiste conventionne à Anderlecht."],
    ["Le cabinet est-il accessible aux personnes a mobilite réduite ?",
      "Le cabinet se situe dans le centre commercial Cora, équipe pour l'accueil des personnes a mobilite réduite (acces de plain-pied et ascenseurs du centre). Pour preparer au mieux votre venue, signalez-nous vos besoins lors de la prise de rendez-vous."],
    ["Prenez-vous les urgences dentaires ?",
      "Oui, nous accueillons les urgences dentaires. En cas de douleur ou d'accident, appelez-nous au plus vite au " + PHONE + " pour une urgence dentaire à Anderlecht, afin d'être pris en charge rapidement."],
  ];

  const body = [
    pageHeroSplit({
      eyebrow: "Le cabinet",
      title: "Votre cabinet dentaire à Anderlecht, au centre Cora",
      lead: "Au cœur du centre commercial Cora à Anderlecht, White & Care vous accueille dans un espace lumineux et pensé pour votre confort : une grande équipe de dentistes, un plateau technique moderne et un accueil multilingue.",
      image: "/assets/photos/clinique-dentaire-white-and-care-anderlecht.webp",
      alt: "Devanture et accueil du cabinet dentaire White & Care au centre Cora à Anderlecht",
    }),

    statsStrip([
      ["12", "fauteuils, équipe pluridisciplinaire"],
      ["15+", "langues parlées"],
      ["6 j/7", "ouvert du lundi au samedi"],
      ["4,6/5", "sur 191 avis Google"],
    ]),

    // H2 · Un centre dentaire pluridisciplinaire au coeur d'Anderlecht
    glassBlock({
      eyebrow: "Cabinet dentaire à Anderlecht",
      title: "Un centre dentaire pluridisciplinaire au cœur d'Anderlecht",
      paras: [
        "White & Care n'est pas un simple cabinet : c'est un véritable centre dentaire pluridisciplinaire. Sous un même toit, vous trouvez des praticiens dédiés aux soins généraux comme aux disciplines plus spécialisées. Cela change tout au quotidien : vous êtes suivi par la bonne personne pour chaque besoin, sans avoir à courir d'un cabinet à l'autre, et votre dossier reste centralisé.",
        "Idéalement situé à Anderlecht (1070), à l'intérieur du centre Cora, le cabinet est facile à trouver et simple d'accès, que vous veniez d'Anderlecht même, de Molenbeek, de Forest, de Saint-Gilles ou d'ailleurs dans Bruxelles. Vous combinez votre rendez-vous dentaire avec vos courses, sans perdre votre journée.",
      ],
      checks: [
        "Généralistes et spécialistes coordonnés autour de votre dossier",
        "Au centre commercial Cora (1070 Anderlecht), parking gratuit",
        "Un seul lieu pour l'ensemble de vos soins dentaires",
      ],
      cta: btn("Appelez le cabinet : " + PHONE, { variant: "primary", iconLeft: ui.phone(15), book: true }),
    }),

    // H2 · Une équipe de 9 praticiens spécialisés (+ conventionnement, maillage)
    zigzag({
      eyebrow: "Notre équipe",
      title: "Une équipe pluridisciplinaire de praticiens spécialisés",
      paras: [
        "Notre force, c'est notre équipe : une équipe pluridisciplinaire de dentistes généralistes et de spécialistes (stomatologie, orthodontie, endodontie, parodontologie), aux compétences complémentaires, qui mettent leur expérience au service de votre sourire. Cette diversité nous permet de prendre en charge l'essentiel de vos besoins dentaires en interne, du contrôle de routine aux soins plus techniques.",
        "Une grande équipe de dentistes conventionnés applique les tarifs officiels INAMI. Concrètement, cela signifie des honoraires justes, transparents et, pour de nombreux actes, mieux remboursés par votre mutuelle. Nous vous indiquons toujours clairement ce qui relève du conventionnement avant de commencer. Pour en savoir plus, découvrez notre page " + link("dentiste conventionne à Anderlecht", "/dentiste-conventionne") + ".",
        "Beaucoup de nos patients arrivent avec une appréhension du dentiste. Nous prenons le temps : d'expliquer, de montrer, de rassurer. Aucun jugement sur l'état de vos dents, jamais. Notre rôle est de vous accompagner, à votre rythme, vers une bouche saine.",
      ],
      bullets: [
        ["euro", "Une grande équipe de dentistes conventionnés, tarifs INAMI annoncés avant les soins"],
        ["smile", "Une approche pédagogique : on vous explique le pourquoi avant le comment"],
        ["heart-care", "Un accueil sans jugement, particulièrement attentif aux patients anxieux"],
      ],
      image: "/assets/photos/salle-de-soins-dentaire-anderlecht.webp",
      imageSide: "right",
      alt: "Salle de soins moderne du cabinet White & Care à Anderlecht",
    }),

    // H2 · Des soins complets, sous un même toit (HUB : liens vers les 7 pages soins)
    `<section class="wc-section-lg" id="soins"><div class="wc-container">${sectionHead({
      eyebrow: "Nos soins",
      title: "Des soins complets, sous un même toit",
      intro: "Soins généraux, esthétique du sourire, orthodontie, implantologie, urgences : nos praticiens couvrent un large éventail de soins, avec une prise en charge cohérente où chaque intervenant connaît votre situation.",
      center: true,
    })}<div class="wc-cards-3" style="margin-top:28px">`
      + `<article class="wc-card wc-feature"><span class="wc-chip">${dentalIcon("euro", 26)}</span><h3>Dentiste conventionné</h3><p>Une grande équipe de dentistes conventionnés qui appliquent les tarifs officiels INAMI. Voir notre page ${link("dentiste conventionne à Anderlecht", "/dentiste-conventionne")}.</p></article>`
      + `<article class="wc-card wc-feature"><span class="wc-chip">${dentalIcon("implant", 26)}</span><h3>Implants dentaires</h3><p>${link("Pose d'implants dentaires", "/implant-dentaire")} en titane ou zircone, couronnes et bridges sur mesure pour remplacer une ou plusieurs dents.</p></article>`
      + `<article class="wc-card wc-feature"><span class="wc-chip">${dentalIcon("sparkle-tooth", 26)}</span><h3>Invisalign</h3><p>Des ${link("gouttières Invisalign", "/invisalign")} transparentes pour réaligner vos dents en toute discrétion, chez l'adolescent comme chez l'adulte.</p></article>`
      + `<article class="wc-card wc-feature"><span class="wc-chip">${dentalIcon("smile", 26)}</span><h3>Orthodontie</h3><p>Bagues métalliques ou céramiques et aligneurs : notre ${link("orthodontie à Anderlecht", "/orthodontie-anderlecht")} corrige le sourire des enfants comme des adultes.</p></article>`
      + `<article class="wc-card wc-feature"><span class="wc-chip">${dentalIcon("tooth", 26)}</span><h3>Blanchiment dentaire</h3><p>${link("Blanchiment dentaire", "/blanchiment-dentaire-cabinet-dentaire-anderlecht")} professionnel en cabinet pour un sourire plus lumineux, avec des résultats naturels et durables.</p></article>`
      + `<article class="wc-card wc-feature"><span class="wc-chip">${dentalIcon("brush", 26)}</span><h3>Détartrage et surfaçage</h3><p>${link("Detartrage et surfacage", "/surfacage-detartrage-dentaire")} pour des gencives saines et la base d'une bouche en bonne santé, à intervalles réguliers.</p></article>`
      + `<article class="wc-card wc-feature"><span class="wc-chip">${dentalIcon("alert-tooth", 26)}</span><h3>Urgence dentaire</h3><p>Douleur, abcès, dent cassée : une prise en charge rapide, du lundi au samedi. Voir notre page ${link("urgence dentaire à Anderlecht", "/urgence-dentaire-anderlecht")}.</p></article>`
      + `</div><div style="text-align:center;margin-top:28px">${btn("Appelez White & Care : " + PHONE, { variant: "primary", iconLeft: ui.phone(15), book: true })}</div></div></section>`,

    // H2 · Un plateau technique moderne
    featureGrid({
      eyebrow: "Plateau technique",
      title: "Un plateau technique moderne",
      intro: "Des soins précis commencent par de bons outils. Le cabinet est équipé de technologies récentes qui rendent vos rendez-vous plus rapides, plus confortables et plus prévisibles.",
      cols: 2,
      cards: [
        {
          icon: "scanner",
          title: "Imagerie et empreinte numérique",
          body: "Grâce à l'imagerie 3D et à la prise d'empreinte numérique, nous établissons des diagnostics précis et préparons vos traitements sans les anciennes pâtes inconfortables. Vous voyez, vous comprenez, vous décidez en connaissance de cause.",
        },
        {
          icon: "shield-tooth",
          title: "Hygiène et stérilisation",
          body: "Votre sécurité est non négociable. Nos protocoles de stérilisation et d'hygiène suivent les normes en vigueur, avec un circuit dédié pour la désinfection des instruments à chaque patient.",
        },
      ],
    }),

    // H2 · Le cabinet en images (galerie vraies photos · E-E-A-T)
    `<section class="wc-section-lg"><div class="wc-container">${sectionHead({
      eyebrow: "En images",
      title: "Le cabinet en images",
      intro: "Imagerie 3D, microscopie, salles de soins lumineuses : un aperçu réel de notre plateau technique et de nos espaces, au centre Cora à Anderlecht.",
      center: true,
    })}<div class="wc-cards-2" style="margin-top:28px">`
      + tile("/assets/photos/radiographie-panoramique-3d-dentaire-anderlecht.webp", { alt: "Radiographie panoramique 3D au cabinet dentaire White & Care à Anderlecht", ratio: "16/10", radius: 16 })
      + tile("/assets/photos/microscope-endodontie-dentaire-anderlecht.webp", { alt: "Microscope pour les soins d'endodontie au cabinet White & Care à Anderlecht", ratio: "16/10", radius: 16 })
      + tile("/assets/photos/cabinet-dentaire-anderlecht-couloir-salles.webp", { alt: "Couloir et salles de soins du cabinet White & Care à Anderlecht", ratio: "16/10", radius: 16 })
      + tile("/assets/photos/decoration-cabinet-dentaire-anderlecht.webp", { alt: "Décoration colorée du cabinet dentaire White & Care à Anderlecht", ratio: "16/10", radius: 16 })
      + `</div></div></section>`,

    // H2 · Venir au cabinet : acces et parking gratuit (voiture + STIB)
    zigzag({
      id: "acces",
      eyebrow: "Accès & parking",
      title: "Venir au cabinet : accès et parking gratuit",
      paras: [
        "L'un des grands avantages de notre emplacement : le vaste parking gratuit du centre commercial Cora. Vous vous garez juste à côté du cabinet, sans tourner ni payer l'horodateur, ce qui est rare pour un cabinet dentaire à Bruxelles. Idéal si vous venez en famille ou si vous avez un soin un peu long.",
        "Le centre Cora est aussi desservi par plusieurs lignes de bus et de tram de la STIB. Si vous venez en transports en commun, contactez-nous : nous vous indiquerons l'arrêt le plus proche et le meilleur itinéraire selon votre point de départ dans Bruxelles.",
      ],
      bullets: [
        ["shield-tooth", "En voiture : parking gratuit du centre Cora, juste à côté du cabinet"],
        ["pin", "En transports : bus et tram STIB desservant le centre Cora"],
        ["heart-care", "Accès de plain-pied et ascenseurs du centre, pour une venue facilitée"],
      ],
      image: "/assets/photos/cabinet-dentaire-white-and-care-anderlecht-cora.webp",
      imageSide: "left",
      alt: "Entrée du cabinet White & Care dans la galerie du centre Cora à Anderlecht",
      cta: btn("Demander l'itinéraire : " + PHONE, { variant: "primary", iconLeft: ui.phone(15), book: true }),
    }),

    // H2 · Horaires d'ouverture
    glassBlock({
      eyebrow: "Horaires",
      title: "Horaires d'ouverture",
      paras: [
        "Nous sommes ouverts du lundi au samedi, de 10h à 19h. Ces horaires larges, six jours sur sept, vous permettent de trouver un créneau qui s'adapté à votre travail et à votre vie de famille, y compris le samedi.",
        "Pour prendre rendez-vous ou connaître les disponibilités, un seul réflexe : appelez-nous au " + PHONE + ". Notre accueil vous oriente vers le praticien adapté à votre demande.",
      ],
      checks: [
        "Ouvert du lundi au samedi, de 10h à 19h",
        "Rendez-vous le samedi pour s'adapter à votre semaine",
        "Prise de rendez-vous par téléphone, accueil en français, anglais ou arabe",
      ],
      cta: btn("Prendre rendez-vous : " + PHONE, { variant: "primary", iconLeft: ui.phone(15), book: true }),
    }),

    // H2 · On parle votre langue
    langueSection(LANGUE),

    // H2 · Nos engagements envers vous
    featureGrid({
      eyebrow: "Nos engagements",
      title: "Nos engagements envers vous",
      intro: "Ce qui nous guide au quotidien : une relation de confiance, claire et bienveillante, du premier appel au dernier rendez-vous.",
      cols: 2,
      cards: [
        { icon: "euro", title: "Transparence", body: "Un devis clair avant tout soin important, et l'information sur ce qui est conventionné. Vous savez où vous allez avant de commencer." },
        { icon: "smile", title: "Pédagogie", body: "On vous explique le pourquoi avant le comment. Vous comprenez votre situation et vous décidez en connaissance de cause." },
        { icon: "calendar-check", title: "Respect de votre temps", body: "Des rendez-vous organisés, un emplacement pratique au centre Cora et un parking gratuit, pour une venue sans stress." },
        { icon: "heart-care", title: "Bienveillance", body: "Un accueil sans jugement, particulièrement attentif aux patients anxieux. Nous avançons à votre rythme." },
      ],
    }),

    // H2 · Ce que disent nos patients
    reviewsSection(),

    faqSection({ title: "Questions fréquentes sur le cabinet", items: faq }),

    ctaBanner("Un centre dentaire pluridisciplinaire au cœur d'Anderlecht, parking gratuit au Cora et accueil multilingue. Appelez le " + PHONE + "."),
  ].join("\n");

  return {
    path: "soins-dentaires/votre-cabinet-dentaire-a-anderlecht/index.html",
    meta: {
      title: "Cabinet dentaire à Anderlecht (Cora) | White & Care",
      description: "Cabinet dentaire White & Care au centre Cora à Anderlecht : grande équipe de praticiens, parking gratuit, ouvert 6j/7, accueil multilingue. Appelez le 02 493 53 53.",
      canonical: url,
      breadcrumb: [["Accueil", "/"], ["Le cabinet", "/soins-dentaires/votre-cabinet-dentaire-a-anderlecht"]],
      schema: [
        schema({
          url,
          name: "White & Care · Le cabinet",
          description: "Centre dentaire pluridisciplinaire à Anderlecht (centre Cora, 1070) : grande équipe de praticiens, dont de nombreux dentistes conventionnés INAMI, parking gratuit, ouvert du lundi au samedi, accueil multilingue.",
        }),
        faqSchema(faq),
      ],
    },
    body,
  };
}
