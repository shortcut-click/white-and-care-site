import { btn, link, ui, eyebrow, chip, dentalIcon, glassBlock, zigzag, featureGrid, stepGrid, ctaBanner, faqSection, reviewsSection, statsStrip, sectionHead, langueSection, tile, PHONE, relatedServices } from "../lib.mjs";
import { heroHome, pageHeroSplit, pageHeroGradient } from "../heroes.mjs";
import { SITE, schema, faqSchema, LANGUE } from "../seo-helpers.mjs";

export default function () {
  const url = SITE + "/orthodontie-anderlecht";

  const faq = [
    ["À quel âge faut-il consulter un orthodontiste ?",
      "Une première visite est recommandée vers 7 ans, pour depister un eventuel probleme pendant la croissance. Mais il n'y a pas d'âge : nous traitons aussi les adolescents et les adultes."],
    ["Combien de temps dure un traitement orthodontique ?",
      "De 6 a 12 mois pour un cas simple, jusqu'a 18 a 30 mois pour un cas complexe. Nous vous donnons une estimation précise après le diagnostic."],
    ["Le traitement est-il douloureux ?",
      "Non. Une legere gene ou sensibilite est normale les premiers jours après la pose ou un ajustement, signe que les dents bougent. Cet inconfort est temporaire. Les aligneurs sont souvent decrits comme plus confortables que les bagues."],
    ["Les aligneurs transparents sont-ils vraiment discrets ?",
      "Oui. Fabriques dans un plastique transparent et sur mesure, ils passent quasiment inapercus. La plupart des gens ne remarqueront pas que vous en portez : c'est une solution ideale pour les adultes actifs."],
    ["Combien d'heures par jour faut-il porter les aligneurs ?",
      "Environ 20 a 22 heures par jour pour qu'ils soient efficaces. Vous les retirez uniquement pour manger, boire autre chose que de l'eau, et vous brosser les dents."],
    ["Peut-on manger normalement avec un appareil ?",
      "Avec les aligneurs amovibles, oui : vous les retirez pour les repas. Avec des bagues fixes, il vaut mieux eviter les aliments très durs, collants ou très croquants qui pourraient les abimer."],
    ["Comment entretenir son appareil et garder une bonne hygiène ?",
      "Un brossage régulier des dents et de l'appareil est essentiel. Nous vous donnons des instructions precises. Les gouttières amovibles facilitent beaucoup le nettoyage au quotidien."],
    ["Quel est le prix d'un appareil dentaire ?",
      "Cela dépend du type d'appareil et de la complexite. Les bagues metalliques sont l'option la plus accessible, les aligneurs et le lingual les plus élevés. À titre indicatif, un traitement par aligneurs se situe souvent entre 2 000 et 7 000 EUR. Nous remettons un devis détaillé avant de commencer."],
    ["Existe-t-il des aides pour financer le traitement ?",
      "Selon l'âge et la situation, des aides peuvent exister, en particulier pour les enfants et adolescents dont le traitement débuté tot. Votre mutualité vous indiquera vos droits précis. De notre cote, nous remettons un devis clair et proposons des paiements echelonnes."],
    ["Proposez-vous des facilites de paiement ?",
      "Oui. Nous proposons des paiements echelonnes pour etaler le coût du traitement sur plusieurs mois et le rendre plus accessible."],
    ["À quoi sert la contention après le traitement ?",
      "À maintenir durablement le résultat. Une fois l'appareil retiré, un fil discret colle derriere les dents ou une gouttière de nuit empeche les dents de rebouger. C'est une étape indispensable."],
  ];

  const body = [
    pageHeroSplit({
      eyebrow: "Orthodontie",
      title: "Orthodontiste à Anderlecht",
      lead: "Bagues et aligneurs pour enfants, adolescents et adultes. Des traitements discrets, fiables et adaptés à chaque âge, ici même à Anderlecht. Ouvert du lundi au samedi, de 10h à 18h30.",
      image: "/assets/photos/img-17.avif",
      alt: "Patiente souriante après un traitement d'orthodontie chez White & Care à Anderlecht",
      secondary: { label: "Voir Invisalign", href: "/invisalign" },
    }),

    glassBlock({
      eyebrow: "À tout âge",
      title: "Corriger l'alignement de vos dents, à tout âge",
      paras: [
        "Des dents qui se chevauchent, des espaces disgracieux, une mâchoire qui ne s'emboîte pas correctement : un mauvais alignement peut affecter votre confiance, votre confort de mastication et la santé de vos gencives. La bonne nouvelle, c'est qu'il n'y a pas d'âge pour y remédier.",
        "À notre cabinet d'Anderlecht, nous proposons une gamme complète de traitements modernes pour les enfants, les adolescents et les adultes. Tout commence par une consultation où nous analysons votre situation et vous expliquons, clairement, les options qui s'offrent à vous.",
      ],
      checks: [
        "Aligneurs transparents, bagues métal, céramique ou linguales",
        "Enfants, adolescents et adultes accueillis",
        "Scanner 3D pour des empreintes sans inconfort",
      ],
      cta: btn("Appelez le " + PHONE, { variant: "primary", iconLeft: ui.phone(15), book: true }),
    }),

    featureGrid({
      eyebrow: "Solutions",
      title: "Quel appareil dentaire pour votre situation ?",
      intro: "Il n'existe pas un seul appareil dentaire, mais plusieurs solutions. Le choix dépend de la complexité de votre cas, de vos priorités esthétiques et de votre budget.",
      cols: 3,
      cards: [
        { icon: "smile", title: "Aligneurs transparents (Invisalign®)", body: "Des gouttières sur mesure, transparentes et amovibles, que vous retirez pour manger et vous brosser les dents. La solution la plus demandée chez les adultes et les adolescents : on aligne ses dents sans que l'entourage le remarque. " + link("Découvrir notre page Invisalign", "/invisalign") },
        { icon: "brush", title: "Bagues métalliques", body: "L'option traditionnelle, robuste et éprouvée. Elle reste souvent la plus économique et convient à la grande majorité des situations, y compris les cas complexes." },
        { icon: "sparkle-tooth", title: "Bagues céramiques (esthétiques)", body: "Le même principe que les bagues métalliques, mais avec des attaches de la couleur des dents, beaucoup plus discrètes. Un bon compromis entre efficacité et esthétique. Le système Damon est également disponible." },
        { icon: "shield-tooth", title: "Orthodontie linguale (invisible)", body: "Des bagues fixées sur la face interne des dents, du côté de la langue. Totalement invisibles de l'extérieur, même de près : la solution la plus discrète qui existe." },
        { icon: "heart-care", title: "Orthodontie interceptive (enfants 6 à 10 ans)", body: "Intervenir tôt, pendant la croissance, permet de guider le développement des mâchoires et d'éviter des traitements plus lourds plus tard. Une première visite de dépistage est recommandée vers 7 ans." },
        { icon: "tooth", title: "Appareils fonctionnels, amovibles et solutions spécifiques", body: "Plaque palatine et appareils amovibles pour corriger certains décalages pendant la croissance, mini-vis d'ancrage ou préparation à une chirurgie orthognatique lorsque le cas le nécessite." },
      ],
    }),

    zigzag({
      eyebrow: "Enfants & adolescents",
      title: "Orthodontie pour enfants et adolescents",
      paras: [
        "Vous vous demandez à quel âge emmener votre enfant ? Une première visite vers 7 ans permet de repérer un éventuel décalage des mâchoires ou un manque de place, même si toutes les dents définitives ne sont pas encore là. Agir au bon moment, c'est parfois éviter un traitement plus long à l'adolescence. Rassurez-vous : si la fenêtre des 7 ans est passée, il n'est jamais trop tard, l'adolescence reste un excellent moment pour traiter.",
        "Côté budget, sachez que des aides peuvent exister selon l'âge et la situation, en particulier lorsque le traitement d'un enfant ou d'un adolescent débute tôt. Nous vous remettons un devis détaillé avant tout traitement et proposons des facilités de paiement ; pour vos droits précis, votre mutualité reste votre meilleur interlocuteur.",
      ],
      bullets: [
        ["calendar-check", "Première visite de dépistage recommandée vers 7 ans"],
        ["heart-care", "Orthodontie interceptive pendant la croissance"],
        ["clipboard", "Devis détaillé remis avant tout traitement"],
      ],
      image: "/assets/photos/img-17.avif",
      imageSide: "right",
      alt: "Adolescent en consultation d'orthodontie à Anderlecht",
    }),

    zigzag({
      eyebrow: "Adultes",
      title: "Orthodontie pour adultes : discrète et compatible avec votre quotidien",
      paras: [
        "L'orthodontie n'est plus réservée aux adolescents : une part importante des patients sont aujourd'hui des adultes. Beaucoup ont reporté ce projet pendant des années, par crainte des bagues visibles. Les solutions modernes changent la donne : avec les aligneurs transparents ou les bagues linguales, vous pouvez suivre un traitement sans que cela se remarque en réunion ou sur vos photos.",
        "Au-delà de l'esthétique, réaligner ses dents facilite le brossage, réduit l'usure prématurée et peut soulager certaines tensions liées à une mauvaise occlusion. Bref, c'est un investissement sur votre confort autant que sur votre sourire.",
      ],
      bullets: [
        ["smile", "Aligneurs transparents quasi invisibles au travail"],
        ["shield-tooth", "Orthodontie linguale, invisible de l'extérieur"],
        ["heart-care", "Un brossage facilité et une occlusion plus saine"],
      ],
      image: "/assets/photos/invisalign.avif",
      imageSide: "left",
      alt: "Adulte portant des aligneurs transparents discrets",
      cta: btn("Appelez le " + PHONE, { variant: "primary", iconLeft: ui.phone(15), book: true }),
    }),

    stepGrid({
      eyebrow: "Votre parcours",
      title: "Comment se déroule votre traitement ?",
      cols: 4,
      steps: [
        { title: "Consultation et diagnostic", body: "Examen clinique, photos et radiographies si nécessaire, et empreintes numériques grâce à notre scanner 3D, fini la pâte désagréable. Nous discutons de vos attentes et répondons à vos questions." },
        { title: "Plan de traitement et devis", body: "Un plan personnalisé : type d'appareil recommandé, durée estimée et devis précis. Pour les aligneurs, vous visualisez une simulation 3D du résultat avant même de commencer." },
        { title: "Pose de l'appareil", body: "Installation de votre appareil avec toutes les explications pour l'entretien et l'utilisation au quotidien." },
        { title: "Suivi et contention", body: "Des visites de contrôle régulières, en général une fois par mois pour les bagues et toutes les 8 à 10 semaines pour les aligneurs. Une fois l'alignement obtenu, la contention (fil discret ou gouttière de nuit) garantit un résultat durable." },
      ],
    }),

    glassBlock({
      eyebrow: "Durée",
      title: "Combien de temps dure un traitement orthodontique ?",
      paras: [
        "Cela dépend beaucoup de la complexité du cas. Un cas simple peut se régler en 6 à 12 mois, tandis qu'un cas plus complet demande généralement entre 18 et 30 mois. Lors de votre consultation, nous vous donnons une estimation réaliste et personnalisée.",
      ],
    }),

    glassBlock({
      eyebrow: "Prix & financement",
      title: "Prix de l'orthodontie à Anderlecht et financement",
      paras: [
        "Le coût d'un traitement varie selon le type d'appareil, la durée et la complexité. En Belgique, les bagues métalliques sont l'option la plus accessible, suivies des bagues céramiques, puis des aligneurs transparents et du lingual, généralement les plus élevés. À titre indicatif, un traitement par aligneurs se situe le plus souvent entre 2 000 et 7 000 € selon les cas.",
        "Des aides peuvent exister selon l'âge et la situation, en particulier pour les enfants et adolescents dont le traitement débute tôt. Pour connaître vos droits précis, votre mutualité reste l'interlocuteur de référence.",
        "Nous remettons toujours un devis clair et détaillé avant de commencer, et nous proposons des facilités de paiement pour étaler le coût sur plusieurs mois. N'hésitez pas à nous en parler lors de la consultation.",
      ],
      checks: [
        "Bagues métalliques : l'option la plus accessible",
        "Aligneurs : généralement entre 2 000 et 7 000 € selon les cas",
        "Devis détaillé et paiements échelonnés proposés",
      ],
      cta: btn("Une question sur votre cas ? Appelez le " + PHONE, { variant: "primary", iconLeft: ui.phone(15), book: true }),
    }),

    zigzag({
      eyebrow: "Technologie",
      title: "Une technologie au service de votre confort",
      paras: [
        "Nous utilisons un scanner intra-oral 3D pour des empreintes précises et sans inconfort, ainsi que la planification numérique du traitement, par exemple ClinCheck® pour Invisalign®.",
        "Résultat : un diagnostic plus fin, une simulation visuelle de votre futur sourire, et souvent un parcours plus confortable du début à la fin.",
      ],
      bullets: [
        ["scanner", "Scanner intra-oral 3D, sans pâte d'empreinte"],
        ["smile", "Simulation visuelle de votre futur sourire"],
        ["heart-care", "Un parcours de traitement plus confortable"],
      ],
      image: "/assets/photos/invisalign.avif",
      imageSide: "right",
      alt: "Scanner 3D intra-oral utilisé au cabinet White & Care",
    }),

    featureGrid({
      eyebrow: "Pourquoi nous",
      title: "Pourquoi choisir White & Care à Anderlecht ?",
      cols: 3,
      cards: [
        { icon: "award", title: "Une équipe expérimentée", body: "Une équipe au cœur d'Anderlecht qui traite enfants comme adultes, et prend le temps d'écouter pour bâtir un plan vraiment adapté à votre situation." },
        { icon: "shield-tooth", title: "Parking gratuit au Cora", body: "Le cabinet se situe dans le centre commercial Cora, avec un parking gratuit : un vrai plus pour un traitement à visites régulières. Un accueil multilingue vous attend." },
        { icon: "heart-care", title: "La confiance des patients", body: "4,6/5 sur la base de 191 avis Google. Nous accueillons les patients d'Anderlecht, Molenbeek, Forest, Saint-Gilles et des environs de Bruxelles." },
      ],
    }),

    langueSection(LANGUE),

    faqSection({ title: "Vos questions fréquentes sur l'orthodontie", items: faq }),

    relatedServices([
      { href: "/invisalign", icon: "sparkle-tooth", title: "Invisalign", body: "Des aligneurs transparents et amovibles." },
      { href: "/blanchiment-dentaire-cabinet-dentaire-anderlecht", icon: "smile", title: "Blanchiment dentaire", body: "Un sourire plus lumineux après le traitement." },
      { href: "/soins-dentaires/votre-cabinet-dentaire-a-anderlecht", icon: "clipboard", title: "Le cabinet à Anderlecht", body: "Notre équipe et nos installations au centre Cora." },
    ]),

    reviewsSection(),

    glassBlock({
      eyebrow: "Pour finir",
      title: "Parfaire votre sourire",
      paras: [
        "Une fois vos dents alignées, pensez au " + link("blanchiment", "/blanchiment-dentaire-cabinet-dentaire-anderlecht") + " pour parfaire votre sourire. Pour en savoir plus sur notre équipe et nos installations, découvrez " + link("le cabinet", "/soins-dentaires/votre-cabinet-dentaire-a-anderlecht") + ".",
      ],
    }),

    ctaBanner("Prenez rendez-vous avec votre orthodontiste à Anderlecht. Appelez le " + PHONE + ".", { book: true }),
  ].join("\n");

  return {
    path: "orthodontie-anderlecht/index.html",
    meta: {
      title: "Orthodontiste à Anderlecht | Bagues & aligneurs adultes et enfants",
      description: "Orthodontiste à Anderlecht : bagues métal, céramique, lingual ou aligneurs transparents. Enfants et adultes. 4,6/5 · 191 avis. Appelez le +32 2 493 53 53.",
      canonical: url,
      specialist: true,
      schema: [
        schema({ url, name: "White & Care · Orthodontie", description: "Orthodontiste à Anderlecht (Bruxelles) : bagues métalliques, céramiques, orthodontie linguale et aligneurs transparents pour enfants, adolescents et adultes." }),
        faqSchema(faq),
      ],
    },
    body,
  };
}
