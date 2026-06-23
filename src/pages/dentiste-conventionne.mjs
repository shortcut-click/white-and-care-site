import { btn, link, ui, eyebrow, chip, dentalIcon, glassBlock, zigzag, featureGrid, stepGrid, ctaBanner, faqSection, reviewsSection, statsStrip, sectionHead, langueSection, tile, PHONE, relatedServices } from "../lib.mjs";
import { heroHome, pageHeroSplit, pageHeroGradient } from "../heroes.mjs";
import { SITE, schema, faqSchema, LANGUE } from "../seo-helpers.mjs";

export default function () {
  const url = SITE + "/dentiste-conventionne";

  const faq = [
    ["Qu'est-ce qu'un dentiste conventionné ?",
      "Un dentiste conventionné a adhéré à la convention dento-mutualiste et s'engage à respecter les tarifs officiels fixés par l'INAMI. Vous payez un montant connu d'avance, sans supplément d'honoraires, et votre mutuelle vous rembourse sur la base de ce tarif officiel."],
    ["White & Care est-il un cabinet conventionné ?",
      "White & Care réunit une grande équipe de dentistes, dont de nombreux praticiens conventionnés. Comme dans la plupart des cabinets, tous ne le sont pas, mais vous bénéficiez d'un large choix de dentistes conventionnés pour vos soins courants. Précisez-le lors de la prise de rendez-vous au " + PHONE + "."],
    ["Quelle est la différence entre un dentiste conventionné et non conventionné ?",
      "Le dentiste conventionné applique les tarifs officiels INAMI, sans supplément. Le dentiste non conventionné fixe librement ses honoraires et peut facturer un supplément, qui reste à votre charge car la mutuelle ne rembourse que sur la base du tarif officiel. Le statut ne change rien à la qualité des soins."],
    ["Combien coûte une consultation chez un dentiste conventionné ?",
      "Selon le barème INAMI en vigueur, une consultation se situe autour de 31 euros, dont l'essentiel est remboursé pour un adulte. Il ne reste qu'un ticket modérateur de quelques euros. Pour les moins de dix-neuf ans, la plupart des soins de base sont remboursés à 100 %."],
    ["Qu'est-ce que le ticket modérateur ?",
      "Le ticket modérateur est la part du tarif officiel qui reste à votre charge après le remboursement de votre mutuelle. Chez un dentiste conventionné, comme il n'y a pas de supplément, c'est en général le seul montant que vous payez de votre poche."],
    ["Comment ma mutuelle rembourse-t-elle mes soins dentaires ?",
      "Votre mutuelle rembourse une part des soins sur la base des tarifs INAMI. Chez un dentiste conventionné, ce remboursement est calculé sur le tarif officiel et vous ne réglez que le ticket modérateur. Le montant exact dépend du soin, de votre âge et de votre situation."],
    ["Qu'est-ce que le trajet de soins buccaux ?",
      "C'est un mécanisme qui améliore vos remboursements si vous consultez un dentiste au moins une fois par année civile. Des soins courants comme le détartrage et les soins conservateurs sont alors mieux pris en charge l'année suivante. Un simple contrôle annuel suffit à le maintenir actif."],
    ["Les enfants sont-ils remboursés intégralement ?",
      "Pour les jeunes de moins de dix-neuf ans, la plupart des soins dentaires de base sont remboursés à 100 % chez un dentiste conventionné. En règle générale, il n'y a donc rien à payer pour ces soins."],
    ["Comment vérifier si mon dentiste est conventionné ?",
      "Vous pouvez le demander directement au cabinet, consulter le moteur de recherche officiel de l'INAMI, ou vous référer à l'information sur les tarifs affichée par le cabinet. Chez White & Care, nous vous indiquons toujours le statut du praticien et le coût avant tout soin."],
    ["Faut-il avancer tous les frais ou existe-t-il le tiers payant ?",
      "Selon votre situation, le tiers payant peut s'appliquer : vous ne réglez alors sur place que le ticket modérateur, sans avancer la part remboursée par la mutuelle. Les bénéficiaires du statut BIM profitent d'une prise en charge renforcée. Indiquez-nous votre situation lors de la prise de rendez-vous."],
  ];

  const inamiHref = "https://www.inami.fgov.be/fr/themes/soins-de-santé-coût-et-remboursement/les-prestations-de-santé-que-vous-rembourse-votre-mutualité/prestations-de-soins-individuelles/honoraires-prix-et-remboursements/honoraires-prix-et-remboursements-des-dentistes";

  const body = [
    pageHeroSplit({
      eyebrow: "Dentiste conventionné · Anderlecht",
      title: "Une grande équipe de dentistes conventionnés à Anderlecht",
      lead: "Au centre commercial Cora, bénéficiez d'une grande équipe de dentistes, dont de nombreux praticiens conventionnés : tarifs officiels INAMI, remboursement mutuelle clair et facture sans mauvaise surprise.",
      image: "/assets/photos/cabinet-hero.jpeg",
      alt: "Cabinet dentaire White & Care à Anderlecht",
      secondary: { label: "Découvrir nos soins", href: "#soins" },
    }),

    glassBlock({
      eyebrow: "Le principe",
      title: "Qu'est-ce qu'un dentiste conventionné ?",
      paras: [
        "Un dentiste conventionné est un praticien qui a adhéré à la convention dento-mutualiste. En signant cette convention, il s'engage à respecter les honoraires officiels fixés chaque année par l'INAMI, l'Institut national d'assurance maladie-invalidité. Pour vous, patient, c'est la garantie de payer un tarif connu d'avance, sans supplément libre ajouté au-dessus du barème.",
        "L'intérêt est double. D'une part, le coût de vos soins est prévisible : vous savez à quoi vous attendre avant même de vous installer dans le fauteuil. D'autre part, la part remboursée par votre mutuelle est calculée sur ce tarif officiel, ce qui réduit au maximum ce qui reste à votre charge. Vous payez donc essentiellement le ticket modérateur, c'est-à-dire la différence entre le tarif conventionné et le remboursement de votre mutuelle.",
        "Chez White & Care, notre équipe est nombreuse et compte de nombreux dentistes conventionnés. Comme dans la plupart des cabinets, tous les praticiens ne le sont pas, et les soins très spécialisés relèvent souvent de prestations non couvertes par la convention. Mais vous disposez d'un large choix de dentistes conventionnés pour vos soins courants, et nous vous indiquons toujours clairement le statut du praticien et le coût avant de commencer.",
      ],
    }),

    featureGrid({
      eyebrow: "Conventionné, partiellement, non conventionné",
      title: "Les trois statuts, expliqués simplement",
      intro: "Le statut ne dit rien de la qualité des soins. Un dentiste conventionné n'est ni meilleur ni moins bon qu'un autre : la différence porte uniquement sur les honoraires, et donc sur votre budget.",
      cols: 3,
      cards: [
        { icon: "shield-tooth", title: "Conventionné", body: "Le praticien applique les tarifs officiels INAMI sur l'ensemble de ses prestations couvertes. Vous ne payez aucun supplément d'honoraires." },
        { icon: "clipboard", title: "Partiellement conventionné", body: "Il respecte les tarifs officiels seulement certains jours ou certaines plages horaires. Le mieux est de demander quels créneaux sont conventionnés au moment de fixer le rendez-vous." },
        { icon: "euro", title: "Non conventionné", body: "Il fixe librement ses honoraires et peut facturer plus que le tarif officiel. Le supplément reste à votre charge, car la mutuelle ne rembourse que sur la base du tarif officiel." },
      ],
    }),

    zigzag({
      eyebrow: "Tarifs INAMI",
      title: "Ce que vous payez vraiment",
      paras: [
        "Les tarifs des soins dentaires en Belgique ne sont pas fixés par chaque cabinet : ils sont établis par l'INAMI et révisés chaque année. Chez un dentiste conventionné, ce sont ces montants officiels qui s'appliquent.",
        "Pour la plupart des soins, votre mutuelle prend en charge une grande partie du tarif officiel. La somme qui reste à votre charge est le ticket modérateur, une part volontairement modérée, d'où son nom. Chez un dentiste conventionné, comme il n'y a pas de supplément, ce ticket modérateur est en général le seul montant que vous payez de votre poche.",
        "À titre indicatif, et selon le barème INAMI en vigueur, une consultation se situe autour de 31 euros, dont l'essentiel est remboursé pour un adulte, laissant un ticket modérateur de quelques euros seulement. Un détartrage est tarifé par quadrant, par quart de la bouche, et le soin d'une carie dépend du nombre de faces de la dent à traiter. Pour les moins de dix-neuf ans, la plupart des soins de base sont remboursés à 100 %.",
        "Les montants exacts évoluant chaque année, nous vous communiquons toujours le coût précis de vos soins avant de commencer, et nous vous invitons à consulter le <a href=\"" + inamiHref + "\" target=\"_blank\" rel=\"noopener\">barème officiel de l'INAMI</a> pour le détail.",
      ],
      bullets: [
        ["euro", "Consultation autour de 31 euros, ticket modérateur de quelques euros"],
        ["smile", "Soins de base remboursés à 100 % pour les moins de 19 ans"],
        ["shield-tooth", "Détartrage tarifé par quadrant, exemple le plus parlant"],
      ],
      image: "/assets/photos/cabinet-1.avif",
      imageSide: "right",
      alt: "Salle de soins White & Care à Anderlecht",
      cta: link("Voir le remboursement du détartrage", "/surfacage-detartrage-dentaire"),
    }),

    stepGrid({
      eyebrow: "Remboursement mutuelle",
      title: "Comment votre mutuelle vous rembourse",
      intro: "Le remboursement passe par votre mutuelle, sur la base des tarifs INAMI. Chez un dentiste conventionné, le calcul est simple : la mutuelle rembourse sa part du tarif officiel, et vous ne réglez que le ticket modérateur. Deux mécanismes peuvent encore réduire ce que vous payez.",
      cols: 3,
      steps: [
        { title: "Le tarif officiel s'applique", body: "Votre soin est facturé au barème INAMI, sans supplément. Le montant de référence du remboursement est donc connu d'avance." },
        { title: "Le trajet de soins buccaux", body: "Si vous consultez au moins une fois par année civile, vos remboursements sont améliorés l'année suivante sur des soins courants comme le détartrage. Un simple contrôle annuel suffit à le maintenir actif." },
        { title: "BIM et tiers payant", body: "Avec le statut BIM, votre prise en charge est renforcée et le ticket modérateur peut être très réduit. Le tiers payant, lorsqu'il s'applique, vous évite d'avancer la part remboursée par la mutuelle." },
      ],
    }),

    glassBlock({
      eyebrow: "Vos droits",
      title: "Comment vérifier si un dentiste est conventionné",
      paras: [
        "Vous avez parfaitement le droit de savoir si votre dentiste est conventionné avant un soin, et c'est facile à vérifier.",
        "Le plus simple est de poser directement la question au cabinet, par téléphone ou à l'accueil : un dentiste conventionné vous le confirmera sans difficulté. Vous pouvez aussi consulter le moteur de recherche officiel de l'INAMI, qui recense le statut des prestataires de soins. Enfin, les cabinets sont tenus d'afficher de l'information sur les tarifs et le conventionnement.",
        "Chez White & Care, nous jouons la transparence : avant tout soin, nous vous précisons le statut du praticien qui vous prend en charge et le coût attendu. Si vous souhaitez être suivi par un dentiste conventionné pour vos soins courants, dites-le nous lors de la prise de rendez-vous, et nous organiserons votre accueil en conséquence.",
      ],
      checks: [
        "Posez la question directement au cabinet, par téléphone",
        "Consultez le moteur de recherche officiel de l'INAMI",
        "Repérez l'information tarifaire affichée au cabinet",
      ],
      cta: btn("Appeler le cabinet", { variant: "primary", iconLeft: ui.phone(15), book: true }),
    }),

    featureGrid({
      eyebrow: "Pourquoi White & Care à Anderlecht",
      title: "Des soins conventionnés, clairs et accessibles",
      intro: "À deux pas de chez vous, au centre commercial Cora à Anderlecht, dans toute la région bruxelloise.",
      cols: 3,
      cards: [
        { icon: "euro", title: "Tarifs conventionnés et transparents", body: "Avec un dentiste conventionné de notre équipe, vous bénéficiez des tarifs officiels, sans coûts cachés ni dépenses imprévues. Les montants vous sont communiqués clairement, avant les soins." },
        { icon: "heart-care", title: "Soins accessibles à tous", body: "Une grande équipe de dentistes conventionnés rend des soins de qualité accessibles au plus grand nombre : contrôle, détartrage ou soin d'une carie, à un prix maîtrisé." },
        { icon: "smile", title: "Une équipe multilingue", body: "Selon le praticien, vous pouvez être suivi en français, néerlandais, anglais, espagnol, arabe et d'autres langues. Cet accueil attentif explique notre note de 4,6 sur 5 sur près de 191 avis Google." },
      ],
    }),

    statsStrip([
      ["4,6/5", "Note Google sur ~191 avis"],
      ["6j/7", "Ouvert du lundi au samedi"],
      ["Cora", "Parking gratuit à Anderlecht"],
    ]),

    glassBlock({
      eyebrow: "Nos soins conventionnés",
      title: "Nos soins conventionnés à Anderlecht",
      paras: [
        "Notre équipe couvre l'ensemble des soins dentaires courants : consultations et contrôles réguliers, dépistage des caries et des maladies des gencives, détartrage et nettoyage professionnel, soins conservateurs (traitement des caries), ainsi que les traitements des racines et des gencives. Pour vos soins courants, vous disposez d'un large choix de dentistes conventionnés.",
        "Certains soins plus spécialisés ou esthétiques, comme les implants, les couronnes, le blanchiment ou l'orthodontie de l'adulte, ne sont pas couverts par la convention INAMI. Pour ceux-ci, nous vous présentons un devis clair et détaillé avant toute décision, afin que vous gardiez la maîtrise de votre budget.",
      ],
      checks: [
        "Consultations et contrôles réguliers",
        "Détartrage et nettoyage professionnel",
        "Soins conservateurs et traitement des caries",
        "Traitements des racines et des gencives",
      ],
    }),

    langueSection(LANGUE),

    glassBlock({
      eyebrow: "Prendre rendez-vous",
      title: "Prendre rendez-vous avec un dentiste conventionné",
      paras: [
        "Pour consulter un dentiste conventionné à Anderlecht, le plus simple est de nous appeler au " + PHONE + ". Nous sommes ouverts du lundi au samedi, de 10h à 18h30, et le parking du centre commercial Cora est gratuit.",
        "Indiquez-nous si vous souhaitez un praticien conventionné et dans quelle langue vous préférez être reçu : nous organiserons votre rendez-vous en conséquence. Le cabinet est facilement accessible depuis Molenbeek, Forest et Saint-Gilles.",
      ],
      cta: btn("Appeler le " + PHONE, { variant: "primary", iconLeft: ui.phone(15), book: true }),
    }),

    faqSection({ title: "Questions fréquentes sur le dentiste conventionné", items: faq }),
    relatedServices([
      { href: "/surfacage-detartrage-dentaire", icon: "brush", title: "Détartrage et surfaçage", body: "Soin courant remboursé, à intervalles réguliers." },
      { href: "/urgence-dentaire-anderlecht", icon: "alert-tooth", title: "Urgence dentaire", body: "Douleur ou abcès : pris en charge le jour même." },
      { href: "/soins-dentaires/votre-cabinet-dentaire-a-anderlecht", icon: "smile", title: "Le cabinet à Anderlecht", body: "Notre équipe et nos installations au centre Cora." },
    ]),

    reviewsSection(),
    ctaBanner("Un dentiste conventionné à Anderlecht, des tarifs clairs et sans mauvaise surprise. Appelez-nous."),
  ].join("\n");

  return {
    path: "dentiste-conventionne/index.html",
    meta: {
      title: "Dentiste conventionné Anderlecht | Tarifs INAMI | White & Care",
      description: "Une grande équipe de dentistes conventionnés INAMI à Anderlecht : tarifs officiels, remboursement mutuelle clair, sans mauvaise surprise. Appelez le cabinet.",
      canonical: url,
      schema: [
        schema({ url, name: "White & Care · Dentiste conventionné", description: "Dentiste conventionné INAMI à Anderlecht : tarifs officiels, remboursement mutuelle, ticket modérateur, trajet de soins buccaux, BIM et tiers payant expliqués." }),
        faqSchema(faq),
      ],
    },
    body,
  };
}
