import { btn, link, ui, eyebrow, chip, dentalIcon, glassBlock, zigzag, featureGrid, stepGrid, ctaBanner, faqSection, reviewsSection, statsStrip, sectionHead, langueSection, tile, PHONE } from "../lib.mjs";
import { heroHome, pageHeroSplit, pageHeroGradient } from "../heroes.mjs";
import { SITE, schema, faqSchema, LANGUE } from "../seo-helpers.mjs";

export default function () {
  const url = SITE + "/implant-dentaire";

  const faq = [
    ["La pose d'un implant est-elle douloureuse ?",
      "La pose se fait sous anesthésie locale : vous ne ressentez aucune douleur pendant l'intervention. Dans les jours qui suivent, un léger inconfort comparable à une extraction simple est possible et se contrôle très bien avec des antidouleurs courants. Notre équipe est habituée aux patients anxieux et prend le temps de vous mettre à l'aise."],
    ["Combien de temps dure un implant dentaire ?",
      "Un implant est conçu pour durer de nombreuses années, souvent toute une vie. La racine est très stable dans le temps ; seule la couronne peut éventuellement être renouvelée après de longues années. Une bonne hygiène et des contrôles réguliers sont les meilleurs garants de sa longévité."],
    ["Quel est le prix d'un implant dentaire ?",
      "Le prix dépend du nombre d'implants, du matériau, de la nécessité d'une greffe osseuse et de la complexité du cas. Nous vous remettons un devis détaillé et transparent après votre bilan, qui précise chaque élément. Appelez le cabinet au " + PHONE + " pour en parler."],
    ["Implant ou prothèse amovible : que choisir ?",
      "Contrairement à la prothèse amovible, qui repose sur la gencive et doit être retirée pour le nettoyage, l'implant est fixe et fonctionne comme une vraie dent. Il offre une meilleure stabilité et prévient la fonte osseuse de la mâchoire."],
    ["Combien de temps dure tout le traitement, de la pose à la couronne ?",
      "Comptez en général quelques mois entre la pose de l'implant et la couronne définitive : ce délai laisse à l'os le temps de se lier à l'implant (l'ostéo-intégration). Une dent provisoire peut être prévue pour que vous ne restiez jamais avec un espace visible."],
    ["Faut-il choisir un implant en titane ou en zircone ?",
      "Le titane est le matériau de référence, avec le plus grand recul clinique et adapté à la majorité des cas. La zircone est une céramique blanche sans métal, intéressante pour les patients recherchant une solution sans métal ou sur les zones très visibles. Le choix se décide en consultation selon votre situation."],
    ["Que se passe-t-il si je n'ai pas assez d'os ?",
      "Quand l'os s'est résorbé, une greffe osseuse ou une élévation de sinus permet de reconstituer le volume nécessaire avant la pose. Ce sont des gestes courants pour nos chirurgiens. Ils ajoutent un délai de cicatrisation, mais rendent l'implant possible là où il ne le serait pas."],
    ["Peut-on poser un implant quand on fume ?",
      "Le tabac ralentit la cicatrisation et augmente le risque de complications, mais il n'interdit pas l'implant. Nous vous conseillons de réduire ou d'arrêter, au moins autour de l'intervention, et nous adaptons le suivi. Le bilan initial permet d'en discuter."],
    ["Le diabète empêche-t-il la pose d'un implant ?",
      "Un diabète bien équilibré n'est généralement pas un obstacle. C'est surtout le bon contrôle de la glycémie qui compte pour la cicatrisation. Nous évaluons votre situation lors du bilan et adaptons le plan de traitement si nécessaire."],
    ["Un implant peut-il remplacer plusieurs dents ?",
      "Oui. Lorsque plusieurs dents voisines manquent, un bridge sur implants permet de les remplacer en s'appuyant sur quelques implants seulement, sans poser un implant par dent. C'est une solution fixe, stable et durable."],
    ["L'implant abîme-t-il les dents voisines ?",
      "Non, au contraire. Contrairement au bridge classique qui nécessite de tailler les dents adjacentes, l'implant est autonome et préserve les dents saines autour de lui."],
    ["Comment entretenir un implant au quotidien ?",
      "Comme une dent naturelle : brossage soigneux deux fois par jour, nettoyage des espaces entre les dents et contrôles réguliers au cabinet. Un bon entretien est ce qui assure la longévité de votre implant."],
  ];

  const body = [
    pageHeroSplit({
      eyebrow: "Implantologie",
      title: "Implant dentaire à Anderlecht : une dent fixe, naturelle et durable",
      lead: "Perdre une dent change le quotidien : on mâche d'un seul côté, on hésite à sourire. Chez White & Care, la pose est assurée par des chirurgiens spécialisés en implantologie, dans un cabinet où l'on prend le temps de vous expliquer chaque étape.",
      image: "/assets/photos/implant-1.avif",
      alt: "Pose d'un implant dentaire par un chirurgien spécialisé à Anderlecht",
      secondary: { label: "Voir notre cabinet", href: "/cabinet" },
    }),

    glassBlock({
      eyebrow: "Comprendre l'implant",
      title: "Qu'est-ce qu'un implant dentaire ?",
      paras: [
        "Un implant dentaire est une petite racine artificielle, le plus souvent en titane, que le chirurgien place dans l'os de la mâchoire à l'endroit de la dent absente. Une fois l'os cicatrisé autour de cette racine, elle sert de support solide à une dent fixe. Contrairement à une prothèse posée sur la gencive, l'implant est ancré dans l'os : il ne bouge pas, ne se retire pas et fonctionne comme une dent naturelle.",
        "Une dent sur implant se compose de trois parties. L'implant est la racine insérée dans l'os ; le pilier est la pièce de connexion qui dépasse légèrement de la gencive ; la couronne est la partie visible, fabriquée sur mesure pour ressembler à vos autres dents en forme et en teinte. C'est cet ensemble qui restitue à la fois la fonction et l'esthétique de la dent d'origine.",
      ],
      checks: [
        "L'ostéo-intégration : l'os enserre l'implant comme une vraie racine, en quelques semaines à quelques mois.",
        "En sollicitant l'os à chaque mastication, l'implant prévient la fonte osseuse qui suit la perte d'une dent.",
        "Un résultat fixe, fonctionnel et esthétique, très proche de la dent naturelle.",
      ],
      cta: btn("Parler à un chirurgien", { variant: "primary", iconLeft: ui.phone(15), book: true }),
    }),

    zigzag({
      eyebrow: "Matériaux",
      title: "Implant titane ou zircone : quel matériau pour votre cas ?",
      paras: [
        "Le choix du matériau se discute en consultation, selon votre situation clinique et vos préférences. Les deux options offrent une excellente biocompatibilité et de très bons résultats à long terme.",
        "Le titane est le matériau de référence en implantologie depuis des décennies : solide, parfaitement toléré par l'organisme et avec le plus grand recul clinique au monde. La zircone est une céramique blanche, sans métal, choisie par les patients recherchant une solution entièrement biocompatible ou présentant une sensibilité particulière ; sa teinte claire est un atout sur les zones très visibles et lorsque la gencive est fine.",
      ],
      bullets: [
        ["shield-tooth", "Titane : la référence éprouvée, adaptée à la grande majorité des cas."],
        ["sparkle-tooth", "Zircone : l'option sans métal, idéale sur les zones esthétiques."],
        ["heart-care", "Le bon choix décidé avec nos chirurgiens, selon votre cas précis."],
      ],
      image: "/assets/photos/implant-2.avif",
      imageSide: "right",
      alt: "Implant en titane et implant en zircone White & Care",
    }),

    stepGrid({
      eyebrow: "Le parcours",
      title: "La pose d'un implant dentaire, étape par étape",
      intro: "La pose n'est pas une intervention unique mais un parcours encadré qui s'étale sur quelques mois, le temps que l'os intègre l'implant.",
      cols: 4,
      steps: [
        { title: "Le bilan et le plan de traitement", body: "Examen complet et, le plus souvent, imagerie 3D pour évaluer le volume d'os. Le chirurgien établit un plan personnalisé et vous remet un devis détaillé avant toute intervention." },
        { title: "La pose de l'implant", body: "Sous anesthésie locale, lors d'une intervention courte et précise. Le chirurgien place l'implant dans l'os puis referme la gencive. La plupart des patients reprennent une activité normale dès le lendemain." },
        { title: "La cicatrisation et l'ostéo-intégration", body: "Pendant les semaines qui suivent, l'os se lie à l'implant. Une dent provisoire peut être prévue pour que vous ne restiez jamais avec un trou visible." },
        { title: "La couronne définitive", body: "Une fois l'implant intégré, le pilier puis la couronne sur mesure sont mis en place, ajustés en teinte et en forme. Vous repartez avec une dent fixe et naturelle." },
      ],
    }),

    glassBlock({
      eyebrow: "Douleur et confort",
      title: "Est-ce que la pose d'un implant fait mal ?",
      paras: [
        "C'est la première question de presque tous nos patients, et la réponse est rassurante. L'intervention se déroule sous anesthésie locale : vous ne ressentez aucune douleur pendant la pose. Notre équipe est habituée aux patients qui appréhendent le dentiste et prend le temps nécessaire pour vous mettre à l'aise.",
        "Après la pose, un léger inconfort de quelques jours est possible, comparable à celui d'une extraction simple. Il se gère très bien avec des antidouleurs courants et quelques conseils d'hygiène que nous vous donnons. La plupart des patients sont surpris de constater que les suites sont plus discrètes qu'ils ne l'imaginaient.",
      ],
      checks: [
        "Anesthésie locale : aucune douleur pendant l'intervention.",
        "Une prise en charge attentive des patients anxieux.",
        "Un accueil multilingue pour expliquer chaque geste dans votre langue.",
      ],
    }),

    featureGrid({
      eyebrow: "Durabilité et os",
      title: "Une solution faite pour durer",
      intro: "Bien entretenu, un implant accompagne souvent toute une vie. Et même en cas de manque d'os, des solutions existent pour rendre la pose possible.",
      cols: 3,
      cards: [
        { icon: "award", title: "Une longévité remarquable", body: "Un implant est conçu pour durer de nombreuses années, souvent toute une vie. La racine en titane ou zircone est très stable ; seule la couronne peut être renouvelée après de longues années. Hygiène soignée et contrôles réguliers en sont les meilleurs garants." },
        { icon: "syringe", title: "Greffe osseuse et sinus lift", body: "Quand l'os s'est résorbé, une greffe osseuse reconstitue le volume nécessaire avant la pose. Sur la mâchoire supérieure, près des sinus, une élévation de sinus est parfois réalisée. Des gestes courants et maîtrisés par nos chirurgiens." },
        { icon: "clipboard", title: "Êtes-vous candidat ?", body: "La majorité des adultes en bonne santé peuvent recevoir un implant. Volume d'os, diabète à équilibrer ou tabac demandent une attention particulière, mais sont rarement des obstacles définitifs. Un bilan personnalisé le détermine." },
      ],
    }),

    zigzag({
      eyebrow: "Comparaison",
      title: "Implant, bridge ou prothèse : comment choisir ?",
      paras: [
        "Plusieurs solutions existent pour remplacer une dent manquante. Le bridge classique s'appuie sur les deux dents voisines, qu'il faut tailler ; l'implant, lui, est autonome et préserve les dents saines adjacentes. C'est souvent l'argument décisif lorsque les dents voisines sont en bon état.",
        "Face à la prothèse amovible, qui repose sur la gencive et peut bouger en mangeant ou en parlant, l'implant est fixe, stable et redonne une sensation très proche de la dent naturelle. Quand plusieurs dents contiguës manquent, un bridge sur implants permet de remplacer plusieurs dents en s'appuyant sur quelques implants seulement.",
      ],
      bullets: [
        ["tooth", "Face au bridge : aucune dent saine taillée, les voisines sont préservées."],
        ["smile", "Face à la prothèse : fixe, stable, et prévient la fonte osseuse."],
        ["implant", "Plusieurs dents : un bridge sur implants, alternative durable à la grande prothèse."],
      ],
      image: "/assets/photos/implant-1.avif",
      imageSide: "left",
      alt: "Comparaison implant, bridge et prothèse dentaire",
      cta: link("Découvrez aussi l'orthodontie à Anderlecht", "/orthodontie-anderlecht"),
    }),

    glassBlock({
      eyebrow: "Le devis",
      title: "Le prix d'un implant dentaire : ce qui entre dans le devis",
      paras: [
        "Le coût d'un implant dépend de plusieurs facteurs : le nombre de dents à remplacer, le matériau choisi, la nécessité ou non d'une greffe osseuse et la complexité du cas. Plutôt qu'un tarif affiché qui ne correspondrait à personne, nous établissons un devis détaillé et transparent après votre bilan, qui précise chaque élément (implant, pilier, couronne, éventuelle greffe).",
        "Vous savez exactement à quoi correspond chaque montant avant de décider quoi que ce soit. La qualité des implants que nous utilisons et l'expertise de nos chirurgiens sont au service d'un résultat fait pour durer.",
      ],
      cta: btn("Demander votre devis personnalisé", { variant: "primary", iconLeft: ui.phone(15), book: true }),
    }),

    langueSection(LANGUE),

    statsStrip([
      ["4,6/5", "Note sur 191 avis Google"],
      ["~9", "Dentistes, dont chirurgiens implantologues"],
      ["Lun-Sam", "Ouvert de 10h à 18h30"],
      ["Cora", "Parking gratuit à Anderlecht"],
    ]),

    glassBlock({
      eyebrow: "SEO local",
      title: "Votre cabinet d'implantologie à Anderlecht",
      paras: [
        "White & Care réunit une équipe pluridisciplinaire, dont des chirurgiens spécialisés en implantologie, au cœur du centre commercial Cora à Anderlecht. Vous bénéficiez d'un parking gratuit Cora, d'un accueil multilingue et d'une ouverture du lundi au samedi de 10h à 18h30.",
        "Nous accueillons les patients d'Anderlecht, Cureghem, Neerpede et plus largement du sud-ouest de Bruxelles : Forest, Saint-Gilles, Drogenbos et Dilbeek. Pour planifier votre première consultation implant, appelez le " + PHONE + ".",
      ],
      checks: [
        "Centre commercial Cora, 1070 Anderlecht.",
        "Chirurgiens spécialisés en implantologie.",
        "Note 4,6 sur 5 sur la base de près de 191 avis Google.",
      ],
      cta: btn("Appeler le cabinet", { variant: "primary", iconLeft: ui.phone(15), book: true }),
    }),

    faqSection({ title: "Vos questions sur les implants dentaires", items: faq }),
    reviewsSection(),
    ctaBanner("Une dent manquante ? Parlons de votre implant dès aujourd'hui."),
  ].join("\n");

  return {
    path: "implant-dentaire/index.html",
    meta: {
      title: "Implant Dentaire Anderlecht | Pose par Chirurgiens | White & Care",
      description: "Implant dentaire à Anderlecht posé par des chirurgiens spécialisés. Implant titane ou zircone, dent fixe et durable. Devis transparent. Appelez le cabinet.",
      canonical: url,
      specialist: true,
      schema: [
        schema({ url, name: "White & Care · Implant dentaire", description: "Pose d'implants dentaires à Anderlecht par des chirurgiens spécialisés en implantologie : titane ou zircone, dent fixe et durable, devis personnalisé et transparent." }),
        faqSchema(faq),
      ],
    },
    body,
  };
}
