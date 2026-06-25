import { btn, link, ui, eyebrow, chip, dentalIcon, glassBlock, zigzag, featureGrid, stepGrid, ctaBanner, faqSection, reviewsSection, statsStrip, sectionHead, langueSection, tile, PHONE, relatedServices } from "../lib.mjs";
import { heroHome, pageHeroSplit, pageHeroGradient } from "../heroes.mjs";
import { SITE, schema, faqSchema, howToSchema, LANGUE } from "../seo-helpers.mjs";

export default function () {
  const url = SITE + "/blanchiment-dentaire-cabinet-dentaire-anderlecht";

  const faq = [
    ["Le blanchiment dentaire abîme-t-il l'émail ?", "Non, lorsqu'il est réalisé par un professionnel avec un produit conforme à la réglementation. Le blanchiment encadré est sans danger pour l'émail. Ce sont les produits surdosés ou utilisés sans suivi qui posent problème."],
    ["Est-ce que le blanchiment fait mal ?", "Non, le blanchiment est indolore. Une sensibilité temporaire au chaud et au froid est possible après la séance, mais elle disparaît en général en quelques jours."],
    ["Combien de temps durent les résultats ?", "En moyenne de 6 mois à 2 ans, parfois plus. Tout dépend de votre alimentation, du tabac et de votre hygiène. Une retouche annuelle aide à maintenir le résultat."],
    ["Combien coûte un blanchiment dentaire chez White & Care ?", "Le tarif dépend de la méthode et de l'état de vos dents. Nous vous le communiquons avant la séance, après un échange ou une consultation. Le blanchiment est un soin esthétique, il n'est pas remboursé par la mutuelle. Appelez-nous pour un devis."],
    ["Le blanchiment est-il remboursé par la mutuelle ?", "Non. Le blanchiment est un soin esthétique, il n'est pas pris en charge par l'assurance maladie. Le détartrage préalable, lui, relève des soins courants."],
    ["Combien de teintes peut-on gagner ?", "Cela varie selon votre teinte de départ et la méthode choisie. Le blanchiment éclaircit votre couleur naturelle sans la dénaturer. Nous évaluons votre teinte de base en consultation pour vous donner une idée réaliste."],
    ["Cabinet ou kit à domicile : quelle est la différence ?", "Le cabinet utilise un gel plus concentré pour un résultat rapide en une séance. Le kit supervisé repose sur des gouttières sur mesure et un gel plus doux, à utiliser chez vous sur une à deux semaines. Les deux sont encadrés par un dentiste."],
    ["Mes couronnes et facettes vont-elles blanchir aussi ?", "Non. Le blanchiment agit seulement sur les dents naturelles. Les couronnes, facettes, bridges et plombages ne changent pas de couleur. Si vous en avez sur des dents visibles, nous en tenons compte dans le plan de soin."],
    ["Que faut-il éviter après un blanchiment ?", "Évitez le café, le thé, le vin rouge, les aliments colorants et le tabac pendant au moins 48 heures. Conservez ensuite une bonne hygiène pour prolonger le résultat."],
    ["Le blanchiment provoque-t-il une sensibilité dentaire ?", "Une sensibilité temporaire est possible. Nos dentistes la limitent grâce à un gel protecteur sur les gencives et des produits contenant du nitrate de potassium et du fluorure."],
    ["Suis-je un bon candidat au blanchiment ?", "Si vous avez des dents et des gencives saines et des attentes réalistes, oui. Le blanchiment est déconseillé pendant la grossesse et l'allaitement, ou en présence de problèmes dentaires non traités. La consultation permet de vérifier."],
    ["Les kits achetés en pharmacie ou en ligne sont-ils efficaces ?", "Ils sont peu concentrés, sans gouttière sur mesure et sans suivi : les résultats sont souvent décevants et le risque de sensibilité plus élevé. Un blanchiment encadré par un dentiste est plus sûr et plus efficace."],
    ["Combien de temps dure une séance en cabinet ?", "En général entre 60 et 90 minutes, examen et protection des gencives compris."],
    ["Faut-il un détartrage avant le blanchiment ?", "Souvent, oui. Des dents propres améliorent le résultat et l'uniformité de la teinte. Nous le vérifions lors de l'examen préalable."],
    ["Le blanchiment fonctionne-t-il sur les dents très tachées ou dévitalisées ?", "Pas toujours. Pour les taches très profondes ou les dents dévitalisées, les facettes peuvent être une meilleure option. Nous en discutons en consultation."],
  ];

  const tableComparatif = `
    <div class="wc-glass-card wc-table-wrap" style="margin-top:8px">
      <table class="wc-table" style="width:100%;border-collapse:collapse;font-size:15px">
        <thead>
          <tr style="text-align:left">
            <th style="padding:14px 18px">Critère</th>
            <th style="padding:14px 18px">En cabinet</th>
            <th style="padding:14px 18px">Kit supervisé à domicile</th>
          </tr>
        </thead>
        <tbody>
          <tr><td style="padding:12px 18px"><strong>Vitesse</strong></td><td style="padding:12px 18px">Résultat visible dès la séance</td><td style="padding:12px 18px">Progressif, sur 1 à 2 semaines</td></tr>
          <tr><td style="padding:12px 18px"><strong>Concentration du gel</strong></td><td style="padding:12px 18px">Plus élevée</td><td style="padding:12px 18px">Plus douce</td></tr>
          <tr><td style="padding:12px 18px"><strong>Encadrement</strong></td><td style="padding:12px 18px">Dentiste, en direct</td><td style="padding:12px 18px">Dentiste, gouttières sur mesure</td></tr>
          <tr><td style="padding:12px 18px"><strong>Confort</strong></td><td style="padding:12px 18px">Une séance de 60 à 90 min</td><td style="padding:12px 18px">À votre rythme, chez vous</td></tr>
          <tr><td style="padding:12px 18px"><strong>Idéal pour</strong></td><td style="padding:12px 18px">Résultat rapide</td><td style="padding:12px 18px">Entretien et budget maîtrisé</td></tr>
        </tbody>
      </table>
    </div>`;

  const seanceSteps = [
    { title: "Examen préalable", body: "Nous vérifions vos dents et vos gencives. Le blanchiment ne s'applique que sur des dents saines. Un détartrage est réalisé au préalable si nécessaire, ce qui améliore aussi le résultat." },
    { title: "Application du gel", body: "Le dentiste protège vos gencives, puis applique le gel de blanchiment sur vos dents. Dans certains cas, une lumière dédiée accélère l'action du produit." },
    { title: "Résultat et conseils", body: "La séance dure généralement entre 60 et 90 minutes. Vous repartez avec un résultat visible et des conseils simples pour le faire durer dans le temps." },
  ];

  const body = [
    pageHeroSplit({
      eyebrow: "Esthétique du sourire",
      title: "Blanchiment dentaire à Anderlecht",
      lead: "Un sourire plus lumineux, sans risque pour vos dents. Au Shopping Cora Anderlecht, notre équipe de dentistes réalise des blanchiments professionnels, en cabinet ou en kit supervisé à domicile. Un soin esthétique mené dans un cadre médical, par des praticiens qualifiés.",
      image: "/assets/photos/blanchiment-dentaire-anderlecht-hero.webp",
      alt: "Sourire éclatant aux dents blanches après un blanchiment à Anderlecht",
    }),

    statsStrip([
      ["4,6/5", "191 avis Google"],
      ["60-90 min", "Une séance en cabinet"],
      ["Indolore", "Soin esthétique encadré"],
      ["Lun-Sam", "10h à 19h"],
    ]),

    glassBlock({
      eyebrow: "Comment ça fonctionne",
      title: "Qu'est-ce que le blanchiment dentaire et comment ça agit ?",
      paras: [
        "Le blanchiment dentaire est un soin qui éclaircit la couleur naturelle des dents et atténue les taches. Avec le temps, le café, le thé, le vin rouge, le tabac ou simplement l'âge ternissent l'émail et la dentine, la couche située juste en dessous.",
        "Le principe est simple. On applique un gel à base de peroxyde d'hydrogène ou de peroxyde de carbamide. Ce gel pénètre l'émail pour atteindre la dentine et y fragmente les molécules responsables des taches. La dent retrouve alors une teinte plus claire. Plus la concentration du produit est élevée, plus l'action est rapide : c'est pourquoi un blanchiment en cabinet agit plus vite qu'un kit grand public.",
        "Important à comprendre : le blanchiment éclaircit la teinte de base de vos dents, il ne les rend pas artificiellement blanches. Le résultat final dépend de votre couleur de départ, et c'est précisément ce qui donne un sourire naturel.",
      ],
    }),

    sectionHead({
      eyebrow: "Cabinet ou domicile",
      title: "Blanchiment en cabinet ou kit à domicile : que choisir ?",
      intro: "Il existe deux approches sérieuses, et toutes deux passent par un dentiste. Le bon choix dépend de l'état de vos dents, de votre budget, du délai souhaité et de vos préférences. Lors de la consultation, nous vous orientons vers l'option la plus adaptée.",
      center: true,
    }),

    featureGrid({
      cols: 2,
      cards: [
        { icon: "sparkle-tooth", title: "Le blanchiment en cabinet", body: "La méthode la plus rapide et la plus efficace. Le gel, plus concentré, est appliqué directement sur vos dents par le dentiste, puis souvent activé par une lumière dédiée. Vos gencives sont protégées pendant toute la séance. L'option idéale pour un résultat visible rapidement, avant un événement par exemple." },
        { icon: "shield-tooth", title: "Les kits supervisés à domicile", body: "Nous réalisons des gouttières sur mesure à partir de l'empreinte de vos dents et vous remettons un gel plus doux. Vous les portez chez vous, quelques heures par jour ou la nuit, une à deux semaines selon la concentration. Progressif, confortable et entièrement encadré. Rien à voir avec un produit acheté en ligne sans avis professionnel." },
      ],
    }),

    `<section class="wc-section"><div class="wc-container">${sectionHead({ title: "Tableau comparatif rapide", center: true })}${tableComparatif}<p style="margin-top:18px;font-size:15px;color:var(--wc-body)">Dans les deux cas, vous restez suivi par un professionnel. C'est la différence essentielle avec les solutions vendues en grande surface ou en institut non médical.</p></div></section>`,

    stepGrid({
      eyebrow: "Le déroulé",
      title: "Comment se déroule une séance chez White & Care",
      intro: "Un protocole clair, du premier examen aux conseils pour faire durer le résultat.",
      cols: 3,
      steps: seanceSteps,
    }),

    glassBlock({
      eyebrow: "Tarif",
      title: "Combien coûte un blanchiment dentaire ?",
      paras: [
        "À Bruxelles, les tarifs varient selon la méthode et l'état de départ de vos dents. Sur le marché, un blanchiment professionnel se situe le plus souvent entre une formule d'entrée de gamme et plusieurs centaines d'euros pour un protocole complet avec gouttières sur mesure. Un détartrage préalable, lorsqu'il est nécessaire, peut s'ajouter.",
        "Chez White & Care, nous préférons vous donner un tarif juste, adapté à votre cas, plutôt qu'un prix générique. C'est pourquoi nous communiquons le coût avant la séance, après un rapide échange ou une consultation. Le blanchiment étant un soin esthétique, il n'est pas pris en charge par la mutuelle.",
      ],
      cta: btn("Appeler pour un devis", { variant: "primary", iconLeft: ui.phone(15), book: true }),
    }),

    zigzag({
      eyebrow: "Sécurité",
      title: "Est-ce sans danger ? Sécurité, émail et cadre légal",
      paras: [
        "Réalisé correctement par un professionnel, le blanchiment est sûr pour vos dents. C'est l'un des points sur lesquels nous insistons, car beaucoup d'idées reçues circulent.",
        "En Europe, les produits de blanchiment sont strictement encadrés. Un dentiste utilise des gels conformes à la réglementation, correctement dosés et appliqués sous contrôle médical. C'est une garantie de sécurité que n'offrent ni les produits importés surdosés, ni les instituts non médicaux. Le vrai risque ne vient pas du blanchiment en lui-même, mais d'un produit mal dosé ou appliqué sans aucun suivi.",
      ],
      bullets: [
        ["shield-tooth", "Gels conformes au cadre légal UE, dosage maîtrisé"],
        ["award", "Réalisé ou supervisé par un dentiste qualifié"],
        ["smile", "Gencives protégées et suivi du début à la fin"],
      ],
      image: "/assets/photos/blanchiment-dentaire-sourire-lumineux-anderlecht.webp",
      imageSide: "left",
      alt: "Sourire lumineux après un blanchiment dentaire supervisé à Anderlecht",
    }),

    glassBlock({
      eyebrow: "Sensibilité",
      title: "Sensibilité dentaire : à quoi s'attendre",
      paras: [
        "Certaines personnes ressentent une sensibilité temporaire des dents pendant ou après le traitement. C'est normal : le peroxyde traverse l'émail et la dentine, ce qui peut rendre les dents passagèrement plus réactives au chaud et au froid. Cette sensibilité disparaît généralement en quelques jours.",
        "Pour la limiter, nos dentistes prennent des précautions : application d'un gel protecteur sur les gencives, et utilisation de produits contenant des agents apaisants comme le nitrate de potassium et le fluorure, qui aident aussi à renforcer l'émail. Si vous avez les dents naturellement sensibles, dites-le nous : nous adaptons le protocole.",
      ],
    }),

    featureGrid({
      eyebrow: "Bon à savoir",
      title: "Durée des résultats et bon candidat",
      cols: 2,
      cards: [
        { icon: "calendar-check", title: "Combien de temps durent les résultats ?", body: "En moyenne de 6 mois à 2 ans, parfois davantage. Tout dépend de votre alimentation, de votre consommation de café, thé, vin rouge ou tabac, et de votre hygiène. Beaucoup de patients font une cure d'entretien légère une fois par an, ou utilisent ponctuellement leurs gouttières." },
        { icon: "heart-care", title: "Êtes-vous un bon candidat ?", body: "Les meilleurs candidats ont des dents et des gencives saines et des attentes réalistes. Le blanchiment est déconseillé ou à reporter dans certains cas, par exemple pendant la grossesse ou l'allaitement, chez les enfants, ou en présence de pathologies bucco-dentaires non soignées. La consultation permet de tout vérifier." },
      ],
    }),

    glassBlock({
      eyebrow: "Restaurations",
      title: "Couronnes, facettes et plombages : ce qu'il faut savoir",
      paras: [
        "Le blanchiment agit uniquement sur les dents naturelles. Les restaurations comme les couronnes, les facettes, les bridges ou les plombages ne changent pas de couleur sous l'effet du gel. Si vous en avez sur des dents visibles, il faut en tenir compte : après un blanchiment, ces restaurations pourraient sembler plus foncées que vos dents naturelles éclaircies.",
        "Ce n'est pas un obstacle, mais cela demande un plan. Lors de la consultation, nous évaluons l'ensemble de votre sourire et, si nécessaire, nous abordons le remplacement d'une restauration pour harmoniser la teinte.",
      ],
    }),

    glassBlock({
      eyebrow: "Préparation et entretien",
      title: "Bien préparer et entretenir son blanchiment",
      paras: [
        "Quelques gestes simples font toute la différence. Avant la séance : un examen et, si besoin, un détartrage pour partir sur des dents propres. Dans les jours qui précèdent, limitez les aliments et boissons qui tachent (café, thé, vin rouge) ainsi que le tabac.",
        "Après la séance : évitez les aliments et boissons tachants pendant au moins 48 heures, le temps que vos dents se stabilisent. Brossez-vous les dents deux fois par jour, utilisez le fil dentaire et conservez une bonne hygiène pour faire durer le résultat.",
      ],
      checks: [
        "Un détartrage prépare idéalement un blanchiment",
        "48 heures sans aliments ni boissons tachants après la séance",
        "Brossage deux fois par jour et fil dentaire au quotidien",
      ],
      cta: link("Découvrir le détartrage", "/surfacage-detartrage-dentaire"),
    }),

    glassBlock({
      eyebrow: "Idées reçues",
      title: "Les mythes les plus fréquents sur le blanchiment",
      paras: [
        "Premier mythe : le blanchiment abîmerait l'émail. Faux, lorsqu'il est réalisé par un professionnel avec un produit conforme. C'est l'usage anarchique de produits surdosés qui pose problème, pas le soin encadré.",
        "Deuxième mythe : les dents deviendraient totalement blanches. En réalité, le blanchiment éclaircit votre teinte naturelle, il ne la remplace pas. Le résultat reste harmonieux et adapté à votre visage.",
        "Troisième idée reçue : un kit de pharmacie ferait aussi bien qu'un dentiste. Les kits grand public sont peu concentrés, sans gouttière sur mesure et sans suivi : les résultats sont souvent décevants et le risque de sensibilité plus élevé faute d'encadrement.",
      ],
    }),

    zigzag({
      eyebrow: "Alternative",
      title: "Et si le blanchiment ne suffit pas ? Les facettes",
      paras: [
        "Dans certains cas, le blanchiment atteint ses limites : taches très profondes, dents dévitalisées, restaurations visibles ou attentes esthétiques élevées. Les facettes en céramique ou en composite peuvent alors être une meilleure solution. Elles recouvrent la face visible de la dent pour en transformer la forme et la couleur de façon durable.",
        "Nous en discutons lors de la consultation pour déterminer ce qui correspond vraiment à votre situation et à votre budget.",
      ],
      bullets: [
        ["sparkle-tooth", "Solution durable pour les taches profondes"],
        ["smile", "Forme et couleur transformées sur la face visible"],
      ],
      cta: link("Voir notre cabinet à Anderlecht", "/soins-dentaires/votre-cabinet-dentaire-a-anderlecht"),
      image: "/assets/photos/blanchiment-resultat-sourire-eclatant-anderlecht.webp",
      imageSide: "right",
      alt: "Sourire éclatant aux dents blanches après un blanchiment à Anderlecht",
    }),

    langueSection("Chaque patient mérite de se sentir compris. Selon le praticien, vous pouvez être suivi en français, néerlandais, anglais, espagnol, arabe et d'autres langues encore. Pour la prise de rendez-vous par téléphone, l'accueil se fait principalement en français, anglais ou arabe. Pensez à préciser votre langue dès l'appel."),

    faqSection({ title: "Questions fréquentes sur le blanchiment dentaire", items: faq }),

    relatedServices([
      { href: "/surfacage-detartrage-dentaire", icon: "brush", title: "Détartrage et surfaçage", body: "La meilleure base avant un blanchiment." },
      { href: "/orthodontie-anderlecht", icon: "smile", title: "Orthodontie", body: "Aligner puis blanchir pour un sourire complet." },
      { href: "/soins-dentaires/votre-cabinet-dentaire-a-anderlecht", icon: "clipboard", title: "Le cabinet à Anderlecht", body: "Notre équipe et nos installations au Shopping Cora Anderlecht." },
    ]),

    reviewsSection(),

    ctaBanner("Envie d'un sourire plus lumineux, en toute sécurité ? Appelez White & Care : nous évaluons vos dents, vous conseillons la meilleure méthode et vous communiquons le tarif avant la séance."),
  ].join("\n");

  return {
    path: "blanchiment-dentaire-cabinet-dentaire-anderlecht/index.html",
    meta: {
      title: "Blanchiment dentaire à Anderlecht (Bruxelles) | White & Care",
      description: "Blanchiment dentaire professionnel à Anderlecht, en cabinet ou en kit supervisé par nos dentistes. Sûr pour l'émail, indolore. 4,6/5. Appelez le cabinet.",
      canonical: url,
      breadcrumb: [["Accueil", "/"], ["Blanchiment dentaire", "/blanchiment-dentaire-cabinet-dentaire-anderlecht"]],
      schema: [
        schema({ url, type: "MedicalWebPage", name: "White & Care · Blanchiment dentaire", description: "Blanchiment dentaire professionnel à Anderlecht (Bruxelles), en cabinet ou en kit supervisé par des dentistes qualifiés. Soin esthétique sûr pour l'émail, dans le cadre légal UE." }),
        faqSchema(faq),
        howToSchema({ name: "Comment se déroule une séance de blanchiment", description: "Le déroulé d'un blanchiment dentaire chez White & Care, de l'examen aux conseils.", steps: seanceSteps }),
      ],
    },
    body,
  };
}
