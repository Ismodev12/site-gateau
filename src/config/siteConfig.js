/**
 * CONFIGURATION CENTRALE DU SITE
 * ------------------------------------------------------------------
 * Modifiez ici le nom, les coordonnées, la devise, les frais de
 * livraison, les réseaux sociaux et les textes principaux.
 * Toutes les informations marquées "DÉMO" sont provisoires.
 */

export const siteConfig = {
  brand: {
    name: 'ANTIXOR',
    suffix: 'Baked.com',
    fullName: 'ANTIXOR Baked.com',
    tagline: 'Des douceurs fraîches, préparées avec amour.',
    description:
      'Une pâtisserie artisanale qui prépare chaque jour cookies, cupcakes, brownies, donuts et pâtisseries avec de bons ingrédients et beaucoup d’amour.',
  },

  // DÉMO — coordonnées provisoires à remplacer
  contact: {
    isDemo: true,
    phone: '+229 01 00 00 00 00',
    phoneHref: 'tel:+2290100000000',
    // Numéro WhatsApp qui reçoit les commandes : format international,
    // chiffres uniquement, sans + ni espaces (ex. Bénin : 229 + numéro)
    whatsapp: '2290100000000',
    email: 'bonjour@antixorbaked.com',
    address: '123 rue des Douceurs',
    city: 'Cotonou, Bénin',
    mapUrl: 'https://www.openstreetmap.org/search?query=Cotonou',
  },

  // DÉMO — horaires provisoires
  hours: [
    { days: 'Lundi – Vendredi', time: '7 h 00 – 19 h 00' },
    { days: 'Samedi', time: '8 h 00 – 20 h 00' },
    { days: 'Dimanche', time: '9 h 00 – 14 h 00' },
  ],

  // Liens réseaux sociaux (remplacez par vos vraies pages)
  social: [
    { name: 'Facebook', href: 'https://www.facebook.com/', icon: 'facebook' },
    { name: 'Instagram', href: 'https://www.instagram.com/', icon: 'instagram' },
    { name: 'TikTok', href: 'https://www.tiktok.com/', icon: 'tiktok' },
    { name: 'WhatsApp', href: 'https://wa.me/2290100000000', icon: 'whatsapp' },
  ],

  // Devise : modifiez le symbole, sa position et le format des nombres
  currency: {
    symbol: 'FCFA',
    position: 'after', // 'before' (ex. "$12") ou 'after' (ex. "1 500 FCFA")
    locale: 'fr-FR',
    decimals: 0,
  },

  // Langue utilisée pour les dates
  locale: 'fr-FR',

  // DÉMO — règles de commande (aucun paiement réel)
  checkout: {
    deliveryFee: 1000,
    freeDeliveryFrom: 15000, // livraison offerte au-delà de ce montant (null pour désactiver)
    maxQuantityPerItem: 20,
    orderPrefix: 'AXR',
    // Modes de paiement proposés (réglés avec la pâtisserie sur WhatsApp)
    paymentMethods: [
      { id: 'cash', label: 'Espèces à la livraison' },
      { id: 'momo', label: 'Mobile Money (MTN / Moov)' },
    ],
  },

  // Catalogue
  catalog: {
    pageSize: 8,
    // Tranches de prix utilisées par les filtres (dans la devise ci-dessus)
    priceRanges: [
      { id: 'all', label: 'Tous les prix', min: 0, max: Infinity },
      { id: 'under-1500', label: 'Moins de 1 500', min: 0, max: 1499 },
      { id: '1500-3000', label: '1 500 – 3 000', min: 1500, max: 3000 },
      { id: '3000-6000', label: '3 000 – 6 000', min: 3001, max: 6000 },
      { id: 'over-6000', label: 'Plus de 6 000', min: 6001, max: Infinity },
    ],
  },

  navigation: [
    { label: 'Accueil', to: '/' },
    { label: 'À propos', to: '/about' },
    { label: 'Produits', to: '/products' },
    { label: 'Recettes', to: '/recipes' },
    { label: 'Contact', to: '/contact' },
  ],

  legalLinks: [
    { label: 'Politique de confidentialité', to: '/privacy-policy' },
    { label: 'Conditions générales', to: '/terms' },
    { label: 'Mentions légales', to: '/legal-notice' },
  ],
}

/** Textes de la page d'accueil — modifiables ici */
export const homeContent = {
  hero: {
    script: 'Tout juste sorti du four',
    titleLine1: 'Du bonheur',
    titleLine2: 'à chaque bouchée',
    description:
      'Chez ANTIXOR Baked.com, nous préparons des douceurs fraîches et gourmandes avec des ingrédients de qualité et beaucoup d’amour.',
    cta: 'Commander',
    // Petit texte manuscrit sur la forme verte (2 lignes séparées par |)
    badge: 'La vie est plus douce|avec des cookies',
    trust: [
      { icon: 'leaf', label: 'Ingrédients frais' },
      { icon: 'heart', label: 'Goût fait maison' },
      { icon: 'star', label: 'Qualité premium' },
    ],
  },
  categories: {
    eyebrow: 'Notre carte',
    titleStart: 'Découvrez nos',
    titleEnd: 'créations gourmandes',
    text: 'Des cookies tout chauds aux pâtisseries délicates, préparés avec amour et les meilleurs ingrédients.',
  },
  story: {
    title: 'Préparé avec amour',
    eyebrow: 'Depuis notre première fournée',
    text: 'Chaque recette commence par un peu de créativité, des ingrédients de qualité et l’envie de faire sourire. De notre four à votre table, chaque bouchée est préparée avec soin.',
    cta: 'Notre histoire',
  },
  collections: {
    titleStart: 'Des menus',
    titleScript: 'pour chaque moment',
    text: 'Des petites douceurs du quotidien aux desserts les plus gourmands, chaque création rend vos moments plus doux.',
  },
  cta: {
    script: 'Une envie de douceur ?',
    text: 'Commandez vos gourmandises préférées et savourez des pâtisseries fraîches, livrées avec amour.',
    button: 'Découvrir la carte',
  },
}

/** Textes de la page À propos */
export const aboutContent = {
  intro: {
    script: 'Notre histoire',
    title: 'Une petite pâtisserie avec un grand amour du métier',
    text: 'ANTIXOR Baked.com est née d’une idée simple : tout le monde mérite une douceur au vrai goût du fait maison. Ce qui a commencé par des pâtisseries du week-end pour la famille et les amis est devenu une pâtisserie construite autour de fours chauds, d’ingrédients honnêtes et de recettes que nous sommes fiers de partager.',
  },
  sections: [
    {
      id: 'passion',
      eyebrow: 'Notre passion',
      title: 'Des pâtisseries qui font sourire',
      text: 'Nous aimons ce moment où l’on croque dans une pâtisserie et où un sourire apparaît. C’est ce qui guide chacune de nos fournées, du croquant d’un bord de cookie à la douceur d’un cupcake fraîchement glacé.',
      imageKey: 'aboutPassion',
    },
    {
      id: 'craft',
      eyebrow: 'Notre approche artisanale',
      title: 'De petites fournées, faites à la main',
      text: 'Nous cuisons en petites quantités tout au long de la journée pour que chaque produit vous arrive frais. Les pâtes reposent, les crèmes sont montées à la commande et chaque décoration est finie à la main.',
      imageKey: 'aboutCraft',
    },
    {
      id: 'ingredients',
      eyebrow: 'Nos ingrédients',
      title: 'Des ingrédients choisis avec soin',
      text: 'Du vrai beurre, du bon chocolat, des œufs frais et des fruits de saison. Nous choisissons nos ingrédients pour leur goût et leur qualité, et travaillons avec des producteurs locaux dès que possible.',
      imageKey: 'aboutIngredients',
    },
  ],
  values: [
    { icon: 'leaf', title: 'La fraîcheur avant tout', text: 'Cuit chaque matin, jamais oublié des jours en vitrine.' },
    { icon: 'heart', title: 'Fait avec amour', text: 'Chaque produit est façonné, garni et décoré à la main.' },
    { icon: 'sparkles', title: 'Créativité', text: 'Des recettes classiques et de nouvelles saveurs au fil des saisons.' },
    { icon: 'users', title: 'Accueil chaleureux', text: 'Une équipe souriante, heureuse de vous aider à trouver la douceur idéale.' },
  ],
  stats: [
    { value: '30+', label: 'Recettes signature' },
    { value: '100 %', label: 'Fait maison' },
    { value: '7j/7', label: 'Frais chaque jour' },
  ],
}
