import { btn, link, ui, eyebrow, chip, dentalIcon, glassBlock, zigzag, featureGrid, stepGrid, ctaBanner, faqSection, reviewsSection, statsStrip, sectionHead, langueSection, tile, PHONE } from "../lib.mjs";
import { heroHome, pageHeroSplit, pageHeroGradient } from "../heroes.mjs";
import { SITE, schema, faqSchema, LANGUE } from "../seo-helpers.mjs";

export default function () {
  const url = SITE + "/";

  const faq = [
    ["Ou se trouve le cabinet dentaire White & Care à Anderlecht ?",
      "White & Care est situé au centre commercial Cora, à Anderlecht (1070), à Bruxelles. Vous bénéficiez d'un parking gratuit sur place, ce qui facilite votre venue en voiture comme en transports en commun."],
    ["Quels sont les horaires d'ouverture ?",
      "Le cabinet est ouvert du lundi au samedi, de 10h à 18h30. Les consultations se font sur rendez-vous, que vous pouvez prendre par téléphone au +32 2 493 53 53."],
    ["Vos dentistes sont-ils conventionnés ?",
      "Notre équipe compte de nombreux dentistes conventionnés, qui appliquent les tarifs officiels INAMI. Comme dans tout cabinet, tous les praticiens ne le sont pas, et les spécialistes le sont plus rarement. Si vous souhaitez consulter un praticien conventionné, indiquez-le lors de la prise de rendez-vous et nous vous orientons."],
    ["Comment savoir si je serai bien rembourse ?",
      "Lorsque votre praticien est conventionné, vous payez le ticket modérateur, soit la différence entre le tarif officiel INAMI et le montant remboursé par votre mutuelle. Les tarifs vous sont expliqués avant le début des soins, sans surprise."],
    ["Le cabinet prend-il en charge les urgences dentaires ?",
      "Oui. En cas de douleur intense, d'abcès, de dent cassée ou descellée, nous mettons tout en oeuvre pour vous recevoir rapidement, du lundi au samedi. Appelez-nous avant de vous déplacer afin que nous organisions votre prise en charge."],
    ["Dans quelles langues puis-je être recu ?",
      "Selon le praticien, vous pouvez être suivi en français, néerlandais, anglais, espagnol, arabe et dans d'autres langues encore. Pour la prise de rendez-vous par téléphone, l'accueil se fait principalement en français, anglais ou arabe. Précisez votre langue dès la réservation."],
    ["Comment prendre rendez-vous ?",
      "Le plus simple est de nous appeler au +32 2 493 53 53. Notre équipe vous propose un créneau adapté à votre demande et, si besoin, vous oriente vers le bon praticien."],
    ["Proposez-vous des soins pour les enfants ?",
      "Oui. Nous accueillons toute la famille, des enfants aux adultes, avec une approche rassurante et adaptée à chaque âge pour préserver la santé bucco-dentaire dès le plus jeune âge."],
    ["Quels soins proposez-vous ?",
      "Soins généraux et détartrage, implants et prothèses, orthodontie et Invisalign, blanchiment et dentisterie esthétique, endodontie, parodontologie et urgences dentaires. Généralistes et spécialistes travaillent sous un même toit."],
    ["Y a-t-il un parking pres du cabinet ?",
      "Oui, vous profitez du parking gratuit du centre commercial Cora, juste à côté du cabinet. C'est l'un des accès les plus pratiques pour un dentiste à Anderlecht."],
  ];

  const body = [
    heroHome(),

    statsStrip([
      ["4,6/5", "sur 191 avis Google"],
      ["12", "fauteuils, équipe pluridisciplinaire"],
      ["6 j/7", "ouvert du lundi au samedi"],
      ["0&euro;", "parking gratuit au Cora"],
    ]),

    // H2 · Une grande équipe de dentistes conventionnés à Anderlecht
    glassBlock({
      eyebrow: "Cabinet dentaire à Anderlecht",
      title: "Une grande équipe de dentistes conventionnés à Anderlecht",
      paras: [
        "White & Care est un cabinet dentaire situé au centre commercial Cora, à Anderlecht (1070), au coeur de Bruxelles. Notre équipe pluridisciplinaire accueille toute la famille, des enfants aux adultes, six jours sur sept. Vous cherchez un dentiste proche, accessible et qui pratique des tarifs clairs ? Nous réunissons sous un même toit des dentistes généralistes et des spécialistes : stomatologie, orthodontie, endodontie et parodontologie.",
        "Notre cabinet réunit de nombreux dentistes, et une grande partie d'entre eux sont conventionnés. Concrètement, cela veut dire qu'ils respectent les tarifs fixés par l'accord conclu entre les dentistes et les mutuelles. Pour vous, c'est la garantie de soins de qualité, à des prix justes et annoncés à l'avance, avec un meilleur remboursement par votre mutuelle.",
        "Comme dans tout cabinet dentaire, tous les praticiens ne sont pas conventionnés, et les spécialistes le sont plus rarement. Mais notre équipe est nombreuse : vous y trouvez un large choix de praticiens. Lors de la prise de rendez-vous, n'hésitez pas à nous indiquer que vous souhaitez consulter un <strong>dentiste conventionné à Anderlecht</strong>, nous vous orientons vers la bonne personne. Pour découvrir notre équipe et nos installations, voir " + link("notre cabinet à Anderlecht", "/soins-dentaires/votre-cabinet-dentaire-a-anderlecht") + ".",
      ],
      checks: [
        "Tarifs INAMI clairs, annoncés avant le début des soins",
        "Généralistes et spécialistes coordonnés autour de votre dossier",
        "Une grande équipe de dentistes conventionnés pour vos soins courants",
      ],
      cta: btn("Appelez le cabinet : " + PHONE, { variant: "primary", iconLeft: ui.phone(15), book: true }),
    }),

    // H2 · Tarifs INAMI & cabinet pluridisciplinaire (deux blocs en feature grid)
    featureGrid({
      eyebrow: "Transparence & simplicite",
      title: "Des tarifs clairs, une équipe coordonnée",
      intro: "Personne n'aime les mauvaises surprises quand il s'agit de santé. Chez White & Care, vous savez où vous allez dès la première consultation.",
      cols: 2,
      cards: [
        {
          icon: "euro",
          title: "Tarifs INAMI annoncés avant les soins",
          body: "Lorsque votre praticien est conventionné, il applique les tarifs officiels de l'INAMI : vous payez le ticket modérateur, c'est-à-dire la différence entre le tarif conventionné et le montant remboursé par votre mutuelle. Les tarifs vous sont expliqués avant le début des soins.",
        },
        {
          icon: "clipboard",
          title: "Généralistes et spécialistes sous un même toit",
          body: "Pas besoin de courir d'un cabinet à l'autre. Le détartrage, le soin d'une carie, la pose d'un implant, un traitement d'orthodontie ou la prise en charge d'une urgence se font au même endroit, avec une équipe qui se coordonne autour de votre dossier.",
        },
      ],
    }),

    // H2 · Le conventionnement dentaire en Belgique, explique simplement
    `<section class="wc-section-lg"><div class="wc-container">${sectionHead({
      eyebrow: "Bien comprendre",
      title: "Le conventionnement dentaire en Belgique, expliqué simplement",
      intro: "Avant de choisir votre dentiste à Anderlecht, il est utile de comprendre les trois statuts qui existent en Belgique. Cela vous aide à anticiper ce que vous coûtera réellement une visite.",
      center: true,
    })}<div class="wc-cards-3" style="margin-top:28px">`
      + `<article class="wc-card wc-feature"><span class="wc-chip">${dentalIcon("shield-tooth", 26)}</span><h3>Dentiste entièrement conventionné</h3><p>Ce praticien applique les tarifs conventionnés pour tous ses patients, à tout moment. C'est le cas de plusieurs de nos dentistes. Votre remboursement par la mutuelle est optimal et votre reste à charge réduit.</p></article>`
      + `<article class="wc-card wc-feature"><span class="wc-chip">${dentalIcon("calendar-check", 26)}</span><h3>Dentiste partiellement conventionné</h3><p>Ce praticien respecte les tarifs conventionnés seulement pendant certaines plages horaires. En dehors de ces heures, il peut pratiquer des dépassements d'honoraires, qui augmentent votre reste à charge.</p></article>`
      + `<article class="wc-card wc-feature"><span class="wc-chip">${dentalIcon("tooth", 26)}</span><h3>Dentiste non conventionné</h3><p>Ce praticien fixe librement ses honoraires, souvent plus élevés. La mutuelle rembourse toujours sur la base du tarif officiel, ce qui veut dire un coût supplémentaire à votre charge.</p></article>`
      + `</div><div class="wc-glass-card" style="padding:32px 40px;margin-top:28px"><p style="font-size:15.5px;line-height:1.7;color:var(--wc-body)">Vous pouvez vérifier le statut d'un dentiste sur le site de l'INAMI, auprès de votre mutuelle, ou tout simplement en nous posant la question au téléphone. Nous vous répondons en toute transparence. Pour en savoir plus, découvrez notre page ${link("dentiste conventionne à Anderlecht", "/dentiste-conventionne")}.</p></div></div></section>`,

    // H2 · On parle votre langue à Anderlecht
    langueSection(LANGUE),

    // H2 · Nos soins dentaires à Anderlecht (avec maillage interne contextuel)
    `<section class="wc-section-lg" id="soins"><div class="wc-container">${sectionHead({
      eyebrow: "Nos soins dentaires à Anderlecht",
      title: "Tous vos soins dentaires sous un même toit",
      intro: "De la visite de contrôle aux traitements les plus spécialisés, notre équipe pluridisciplinaire prend en charge l'ensemble de vos besoins.",
      center: true,
    })}<div class="wc-cards-3" style="margin-top:28px">`
      + `<article class="wc-card wc-feature"><span class="wc-chip">${dentalIcon("brush", 26)}</span><h3>Soins généraux et détartrage</h3><p>Consultations de contrôle, traitement des caries, ${link("detartrage et surfacage", "/surfacage-detartrage-dentaire")} pour des gencives saines : la base d'une bouche en bonne santé, à intervalles réguliers.</p></article>`
      + `<article class="wc-card wc-feature"><span class="wc-chip">${dentalIcon("implant", 26)}</span><h3>Implants et prothèses dentaires</h3><p>${link("Implants et protheses dentaires", "/implant-dentaire")} en titane ou zircone, couronnes et bridges sur mesure pour remplacer une ou plusieurs dents et retrouver une dentition complète, fonctionnelle et naturelle.</p></article>`
      + `<article class="wc-card wc-feature"><span class="wc-chip">${dentalIcon("smile", 26)}</span><h3>Orthodontie et Invisalign</h3><p>Bagues métalliques ou céramiques et ${link("aligneurs Invisalign", "/invisalign")} pour les enfants, les adolescents et les adultes. Découvrez aussi notre ${link("orthodontie à Anderlecht", "/orthodontie-anderlecht")} pour réaligner vos dents en toute discrétion.</p></article>`
      + `<article class="wc-card wc-feature"><span class="wc-chip">${dentalIcon("sparkle-tooth", 26)}</span><h3>Blanchiment et dentisterie esthétique</h3><p>${link("Blanchiment dentaire", "/blanchiment-dentaire-cabinet-dentaire-anderlecht")} professionnel en cabinet, facettes et restaurations en composite pour un sourire plus lumineux, avec des résultats naturels et durables.</p></article>`
      + `<article class="wc-card wc-feature"><span class="wc-chip">${dentalIcon("heart-care", 26)}</span><h3>Endodontie et parodontologie</h3><p>Traitements de canal pour sauver une dent abîmée et soins des gencives pour prévenir et traiter les maladies parodontales, afin de préserver vos dents naturelles le plus longtemps possible.</p></article>`
      + `<article class="wc-card wc-feature"><span class="wc-chip">${dentalIcon("alert-tooth", 26)}</span><h3>Urgence dentaire</h3><p>Douleur intense, abcès, dent cassée ou descellée : nous mettons tout en oeuvre pour une prise en charge rapide, du lundi au samedi. Voir notre page ${link("urgence dentaire à Anderlecht", "/urgence-dentaire-anderlecht")}.</p></article>`
      + `</div><div style="text-align:center;margin-top:28px">${btn("Appelez White & Care : " + PHONE, { variant: "primary", iconLeft: ui.phone(15), book: true })}</div></div></section>`,

    // H2 · Un cabinet dentaire facile d'acces à Anderlecht (zigzag accessibilité)
    zigzag({
      id: "acces",
      eyebrow: "Facile d'acces",
      title: "Un cabinet dentaire facile d'accès à Anderlecht",
      paras: [
        "White & Care se trouve au centre commercial Cora, à Anderlecht. Vous profitez d'un parking gratuit et d'un accès simple, que vous veniez en voiture ou en transports en commun. Idéal pour combiner un rendez-vous chez le dentiste avec vos courses, sans stress de stationnement.",
        "Notre cabinet est ouvert du lundi au samedi, de 10h à 18h30. Cette large amplitude, samedi compris, vous permet de trouver un créneau qui s'adapté à votre travail et à votre vie de famille. Nous accueillons aussi les patients des communes voisines : Molenbeek, Forest, Saint-Gilles et Berchem-Sainte-Agathe.",
      ],
      bullets: [
        ["shield-tooth", "Au centre commercial Cora (1070 Anderlecht), parking gratuit"],
        ["calendar-check", "Ouvert du lundi au samedi, de 10h à 18h30, sur rendez-vous"],
        ["smile", "Facilement accessible en voiture comme en transports en commun"],
      ],
      image: "/assets/photos/img-17.avif",
      imageSide: "right",
      alt: "Cabinet dentaire White & Care au centre Cora à Anderlecht",
      cta: btn("Prendre rendez-vous : " + PHONE, { variant: "primary", iconLeft: ui.phone(15), book: true }),
    }),

    // H2 · Prendre rendez-vous (steps)
    stepGrid({
      eyebrow: "Prendre rendez-vous chez votre dentiste à Anderlecht",
      title: "Un rendez-vous en trois étapes simples",
      intro: "Prendre rendez-vous chez White & Care est simple et rapide. Un seul numéro, une équipe à votre écoute, et un cabinet ouvert six jours sur sept au centre Cora d'Anderlecht.",
      cols: 3,
      steps: [
        { title: "Appelez le cabinet", body: "Composez le " + PHONE + ". Notre accueil vous répond en français, anglais ou arabe et écoute votre demande." },
        { title: "Choisissez votre créneau", body: "Nous vous proposons un créneau adapté, du lundi au samedi de 10h à 18h30, et vous orientons vers le bon praticien." },
        { title: "Venez en confiance", body: "Que ce soit pour un contrôle, un soin spécialisé ou une urgence, nous sommes prêts à vous accueillir au centre Cora." },
      ],
    }),

    // H2 · Ce que disent nos patients
    reviewsSection(),

    faqSection({ title: "Questions fréquentes sur votre dentiste à Anderlecht", items: faq }),

    ctaBanner("Un dentiste à Anderlecht, ouvert du lundi au samedi, avec parking gratuit au Cora. Appelez le " + PHONE + "."),
  ].join("\n");

  return {
    path: "index.html",
    meta: {
      title: "Dentiste Anderlecht | Cabinet conventionné | White & Care",
      description: "Cabinet dentaire à Anderlecht (Cora) : grande équipe de dentistes, dont de nombreux praticiens conventionnés INAMI. 4,6/5 sur 191 avis. Ouvert lun-sam.",
      canonical: url,
      schema: [
        schema({
          url,
          name: "White & Care",
          description: "Cabinet dentaire à Anderlecht (centre Cora, 1070) : grande équipe de dentistes, dont de nombreux praticiens conventionnés INAMI. Généralistes et spécialistes, ouvert du lundi au samedi.",
        }),
        faqSchema(faq),
      ],
    },
    body,
  };
}
