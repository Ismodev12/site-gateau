import { images } from '../config/imagePaths'

/**
 * CATALOGUE PRODUITS — DONNÉES DE DÉMONSTRATION
 * ------------------------------------------------------------------
 * Prix, disponibilités, ingrédients et allergènes sont FICTIFS.
 * Remplacez-les par les informations exactes et vérifiées de la
 * pâtisserie avant toute mise en ligne commerciale.
 *
 * availability : 'in-stock' | 'low-stock' | 'out-of-stock'
 * popularity   : score utilisé pour le tri « Les plus populaires » (plus haut = plus populaire)
 * createdAt    : date utilisée pour le tri « Nouveautés »
 * collections  : identifiants définis dans data/collections.js
 */
export const products = [
  // ---------- COOKIES ----------
  {
    id: 'p01',
    slug: 'cookies-pepites-chocolat',
    name: 'Cookies aux pépites de chocolat',
    category: 'cookies',
    unit: 'Boîte de 4',
    shortDescription: 'Bords croustillants, cœur fondant et gros morceaux de chocolat noir.',
    description:
      'Notre cookie signature. Une pâte au beurre noisette reposée toute une nuit, garnie de généreux morceaux de chocolat noir et terminée par une pincée de fleur de sel. Croustillant sur les bords, tendre et fondant au cœur — à déguster tiède.',
    price: 2500,
    image: images.products.chocolateCookies,
    availability: 'in-stock',
    featured: true,
    popularity: 98,
    createdAt: '2026-01-10',
    collections: ['sweet-treats', 'fresh-bakes'],
    ingredients: ['Farine de blé', 'Beurre', 'Chocolat noir', 'Sucre roux', 'Œufs', 'Vanille', 'Fleur de sel'],
    allergens: ['Gluten', 'Lait', 'Œufs', 'Soja'],
  },
  {
    id: 'p02',
    slug: 'cookies-beurre-de-cacahuete',
    name: 'Cookies au beurre de cacahuète',
    category: 'cookies',
    unit: 'Boîte de 4',
    shortDescription: 'Tendres, gourmands et légèrement salés, aux cacahuètes grillées.',
    description:
      'Un cookie fondant au beurre de cacahuète crémeux et aux éclats de cacahuètes grillées. Légèrement salé, juste assez sucré, impossible de n’en manger qu’un.',
    price: 2200,
    image: images.products.peanutCookies,
    availability: 'in-stock',
    featured: true,
    popularity: 90,
    createdAt: '2026-02-02',
    collections: ['sweet-treats'],
    ingredients: ['Farine de blé', 'Beurre de cacahuète', 'Cacahuètes grillées', 'Beurre', 'Sucre roux', 'Œufs'],
    allergens: ['Gluten', 'Arachides', 'Lait', 'Œufs'],
  },
  {
    id: 'p03',
    slug: 'cookies-double-chocolat',
    name: 'Cookies double chocolat',
    category: 'cookies',
    unit: 'Boîte de 4',
    shortDescription: 'Pâte au cacao garnie de pépites de chocolat au lait et noir.',
    description:
      'Pour les vrais amoureux du chocolat : une pâte intense au cacao garnie de pépites de chocolat au lait et de chocolat noir. Fondant, riche et cuit juste à point.',
    price: 2700,
    image: images.products.doubleChocolateCookies,
    availability: 'low-stock',
    featured: false,
    popularity: 85,
    createdAt: '2026-06-18',
    collections: ['indulgent-desserts'],
    ingredients: ['Farine de blé', 'Cacao en poudre', 'Chocolat au lait', 'Chocolat noir', 'Beurre', 'Sucre', 'Œufs'],
    allergens: ['Gluten', 'Lait', 'Œufs', 'Soja'],
  },
  {
    id: 'p04',
    slug: 'cookies-avoine-raisins',
    name: 'Cookies avoine et raisins',
    category: 'cookies',
    unit: 'Boîte de 4',
    shortDescription: 'Flocons d’avoine, raisins moelleux et une touche de cannelle.',
    description:
      'Un classique réconfortant aux flocons d’avoine, raisins moelleux et une douce touche de cannelle. Moelleux, généreux et parfait avec une tasse de thé.',
    price: 2000,
    image: images.products.oatmealCookies,
    availability: 'in-stock',
    featured: false,
    popularity: 62,
    createdAt: '2025-11-05',
    collections: ['fresh-bakes'],
    ingredients: ['Flocons d’avoine', 'Farine de blé', 'Raisins secs', 'Beurre', 'Sucre roux', 'Cannelle', 'Œufs'],
    allergens: ['Gluten', 'Lait', 'Œufs'],
  },

  // ---------- CUPCAKES ----------
  {
    id: 'p05',
    slug: 'cupcake-chocolat-menthe',
    name: 'Cupcake chocolat-menthe',
    category: 'cupcakes',
    unit: 'À l’unité',
    shortDescription: 'Génoise au chocolat moelleuse et glaçage à la menthe fraîche.',
    description:
      'Une génoise au chocolat bien moelleuse, surmontée d’un nuage de crème au chocolat et d’une feuille de menthe fraîche. Riche, léger et rafraîchissant à la fois.',
    price: 1500,
    image: images.products.cupcake,
    availability: 'in-stock',
    featured: true,
    popularity: 88,
    createdAt: '2026-03-12',
    collections: ['sweet-treats', 'indulgent-desserts'],
    ingredients: ['Farine de blé', 'Cacao', 'Beurre', 'Sucre', 'Œufs', 'Lait', 'Menthe fraîche'],
    allergens: ['Gluten', 'Lait', 'Œufs'],
  },
  {
    id: 'p06',
    slug: 'cupcake-red-velvet',
    name: 'Cupcake red velvet',
    category: 'cupcakes',
    unit: 'À l’unité',
    shortDescription: 'Génoise veloutée et glaçage acidulé au fromage frais.',
    description:
      'Une génoise tendre et veloutée au léger goût de cacao, couronnée d’un généreux tourbillon de glaçage au fromage frais.',
    price: 1700,
    image: images.products.redVelvetCupcake,
    availability: 'in-stock',
    featured: false,
    popularity: 80,
    createdAt: '2026-05-01',
    collections: ['indulgent-desserts'],
    ingredients: ['Farine de blé', 'Babeurre', 'Cacao', 'Fromage frais', 'Beurre', 'Sucre', 'Œufs'],
    allergens: ['Gluten', 'Lait', 'Œufs'],
  },
  {
    id: 'p07',
    slug: 'cupcake-citron',
    name: 'Cupcake au citron',
    category: 'cupcakes',
    unit: 'À l’unité',
    shortDescription: 'Génoise citronnée et glaçage pétillant aux agrumes.',
    description:
      'Une génoise légère au citron imbibée de sirop d’agrumes, terminée par une crème au beurre citronnée et des zestes confits. Du soleil dans un cupcake.',
    price: 1500,
    image: images.products.lemonCupcake,
    availability: 'out-of-stock',
    featured: false,
    popularity: 58,
    createdAt: '2026-08-20',
    collections: ['seasonal-specials'],
    ingredients: ['Farine de blé', 'Citron', 'Beurre', 'Sucre', 'Œufs', 'Lait'],
    allergens: ['Gluten', 'Lait', 'Œufs'],
  },

  // ---------- BROWNIES ----------
  {
    id: 'p08',
    slug: 'brownie-fondant-classique',
    name: 'Brownie fondant classique',
    category: 'brownies',
    unit: 'Boîte de 2',
    shortDescription: 'Dense, fondant et craquelé sur le dessus.',
    description:
      'Notre brownie classique : dense et fondant, avec une fine croûte brillante et craquelée. Préparé avec du vrai chocolat noir et une touche d’espresso pour intensifier le goût.',
    price: 2400,
    image: images.products.brownie,
    availability: 'in-stock',
    featured: true,
    popularity: 93,
    createdAt: '2026-02-14',
    collections: ['indulgent-desserts', 'sweet-treats'],
    ingredients: ['Chocolat noir', 'Beurre', 'Sucre', 'Œufs', 'Farine de blé', 'Cacao', 'Espresso'],
    allergens: ['Gluten', 'Lait', 'Œufs', 'Soja'],
  },
  {
    id: 'p09',
    slug: 'brownie-noix',
    name: 'Brownie aux noix',
    category: 'brownies',
    unit: 'Boîte de 2',
    shortDescription: 'Brownie fondant au chocolat et noix torréfiées.',
    description:
      'Tout ce que vous aimez dans notre brownie fondant, avec des noix torréfiées pour plus de croquant et une belle finale grillée.',
    price: 2600,
    image: images.products.fudgeBrownie,
    availability: 'low-stock',
    featured: false,
    popularity: 70,
    createdAt: '2026-07-04',
    collections: ['indulgent-desserts'],
    ingredients: ['Chocolat noir', 'Beurre', 'Sucre', 'Œufs', 'Farine de blé', 'Noix'],
    allergens: ['Gluten', 'Lait', 'Œufs', 'Fruits à coque'],
  },
  {
    id: 'p10',
    slug: 'blondie-caramel-beurre-sale',
    name: 'Blondie caramel beurre salé',
    category: 'brownies',
    unit: 'Boîte de 2',
    shortDescription: 'Blondie vanillé marbré de caramel au beurre salé.',
    description:
      'Un blondie doré et beurré au chocolat blanc, marbré de caramel au beurre salé maison. Sucré, salé et merveilleusement moelleux.',
    price: 2600,
    image: images.products.blondie,
    availability: 'in-stock',
    featured: false,
    popularity: 74,
    createdAt: '2026-09-15',
    collections: ['seasonal-specials', 'indulgent-desserts'],
    ingredients: ['Beurre', 'Sucre roux', 'Chocolat blanc', 'Œufs', 'Farine de blé', 'Caramel', 'Fleur de sel'],
    allergens: ['Gluten', 'Lait', 'Œufs'],
  },

  // ---------- DOUGHNUTS ----------
  {
    id: 'p11',
    slug: 'donut-glace-chocolat',
    name: 'Donut glacé au chocolat',
    category: 'doughnuts',
    unit: 'À l’unité',
    shortDescription: 'Donut brioché moelleux, glaçage chocolat et filet de chocolat blanc.',
    description:
      'Un donut brioché léger et moelleux, trempé dans un glaçage brillant au chocolat et décoré d’un filet de chocolat blanc.',
    price: 1200,
    image: images.products.doughnut,
    availability: 'in-stock',
    featured: true,
    popularity: 91,
    createdAt: '2026-04-08',
    collections: ['sweet-treats', 'fresh-bakes'],
    ingredients: ['Farine de blé', 'Lait', 'Beurre', 'Œufs', 'Levure', 'Sucre', 'Chocolat'],
    allergens: ['Gluten', 'Lait', 'Œufs', 'Soja'],
  },
  {
    id: 'p12',
    slug: 'donut-caramel-beurre-sale',
    name: 'Donut caramel beurre salé',
    category: 'doughnuts',
    unit: 'À l’unité',
    shortDescription: 'Garni de crème au caramel beurre salé et glacé.',
    description:
      'Notre donut brioché garni d’une crème soyeuse au caramel beurre salé et recouvert d’un glaçage doré au caramel.',
    price: 1400,
    image: images.products.caramelDoughnut,
    availability: 'in-stock',
    featured: false,
    popularity: 77,
    createdAt: '2026-09-28',
    collections: ['seasonal-specials'],
    ingredients: ['Farine de blé', 'Lait', 'Beurre', 'Œufs', 'Levure', 'Sucre', 'Crème', 'Fleur de sel'],
    allergens: ['Gluten', 'Lait', 'Œufs'],
  },
  {
    id: 'p13',
    slug: 'donuts-sucre-cannelle',
    name: 'Donuts sucre-cannelle',
    category: 'doughnuts',
    unit: 'Boîte de 3',
    shortDescription: 'Chauds, moelleux et roulés dans le sucre à la cannelle.',
    description:
      'Simples et irrésistibles : des donuts bien moelleux roulés dans le sucre à la cannelle encore tièdes.',
    price: 2500,
    image: images.products.sugarDoughnut,
    availability: 'in-stock',
    featured: false,
    popularity: 66,
    createdAt: '2025-12-01',
    collections: ['fresh-bakes'],
    ingredients: ['Farine de blé', 'Lait', 'Beurre', 'Œufs', 'Levure', 'Sucre', 'Cannelle'],
    allergens: ['Gluten', 'Lait', 'Œufs'],
  },

  // ---------- VIENNOISERIES ----------
  {
    id: 'p14',
    slug: 'croissant-pur-beurre',
    name: 'Croissant pur beurre',
    category: 'viennoiseries',
    unit: 'À l’unité',
    shortDescription: 'Feuilletage léger, croûte dorée et bon goût de beurre.',
    description:
      'Feuilleté pendant trois jours pour des couches parfaitement dessinées. Doré et croustillant à l’extérieur, tendre et aérien à l’intérieur.',
    price: 900,
    image: images.products.croissant,
    availability: 'in-stock',
    featured: false,
    popularity: 84,
    createdAt: '2025-10-20',
    collections: ['fresh-bakes'],
    ingredients: ['Farine de blé', 'Beurre', 'Lait', 'Sucre', 'Levure', 'Sel'],
    allergens: ['Gluten', 'Lait'],
  },
  {
    id: 'p15',
    slug: 'pain-au-chocolat',
    name: 'Pain au chocolat',
    category: 'viennoiseries',
    unit: 'À l’unité',
    shortDescription: 'Pâte feuilletée pur beurre et deux barres de chocolat.',
    description:
      'Notre pâte à croissant roulée autour de deux barres de chocolat noir et cuite jusqu’à ce qu’elle soit bien dorée — un incontournable du petit-déjeuner.',
    price: 1000,
    image: images.products.painChocolat,
    availability: 'in-stock',
    featured: false,
    popularity: 79,
    createdAt: '2026-01-25',
    collections: ['fresh-bakes', 'sweet-treats'],
    ingredients: ['Farine de blé', 'Beurre', 'Chocolat noir', 'Lait', 'Sucre', 'Levure'],
    allergens: ['Gluten', 'Lait', 'Soja'],
  },

  // ---------- PASTRIES ----------
  {
    id: 'p16',
    slug: 'coffret-patisseries-assorties',
    name: 'Coffret de pâtisseries assorties',
    category: 'pastries',
    unit: 'Boîte de 6',
    shortDescription: 'Une sélection colorée de nos pâtisseries préférées.',
    description:
      'Impossible de choisir ? Notre coffret réunit six de nos pâtisseries les plus appréciées — parfait pour partager, offrir ou fêter un moment.',
    price: 7500,
    image: images.products.pastries,
    availability: 'in-stock',
    featured: true,
    popularity: 87,
    createdAt: '2026-08-02',
    collections: ['indulgent-desserts', 'seasonal-specials'],
    ingredients: ['Farine de blé', 'Beurre', 'Sucre', 'Œufs', 'Crème', 'Chocolat', 'Fruits de saison'],
    allergens: ['Gluten', 'Lait', 'Œufs', 'Fruits à coque', 'Soja'],
  },
  {
    id: 'p17',
    slug: 'eclair-au-chocolat',
    name: 'Éclair au chocolat',
    category: 'pastries',
    unit: 'À l’unité',
    shortDescription: 'Pâte à choux garnie de crème au chocolat.',
    description:
      'Une pâte à choux croustillante garnie d’une crème pâtissière onctueuse au chocolat et recouverte d’un glaçage brillant.',
    price: 1800,
    image: images.products.eclair,
    availability: 'in-stock',
    featured: false,
    popularity: 72,
    createdAt: '2026-06-01',
    collections: ['indulgent-desserts'],
    ingredients: ['Farine de blé', 'Beurre', 'Œufs', 'Lait', 'Sucre', 'Chocolat noir'],
    allergens: ['Gluten', 'Lait', 'Œufs', 'Soja'],
  },
  {
    id: 'p18',
    slug: 'tarte-aux-fruits-de-saison',
    name: 'Tarte aux fruits de saison',
    category: 'pastries',
    unit: 'À l’unité',
    shortDescription: 'Pâte sablée croustillante, crème vanille et fruits frais.',
    description:
      'Une pâte sablée croustillante garnie de crème pâtissière à la vanille et de fruits frais de saison.',
    price: 2200,
    image: images.products.fruitTart,
    availability: 'low-stock',
    featured: false,
    popularity: 68,
    createdAt: '2026-10-01',
    collections: ['seasonal-specials', 'fresh-bakes'],
    ingredients: ['Farine de blé', 'Beurre', 'Sucre', 'Œufs', 'Lait', 'Vanille', 'Fruits de saison'],
    allergens: ['Gluten', 'Lait', 'Œufs'],
  },
]

export const getProductBySlug = (slug) => products.find((p) => p.slug === slug)
export const getProductById = (id) => products.find((p) => p.id === id)

export const getRelatedProducts = (product, limit = 4) => {
  const sameCategory = products.filter((p) => p.category === product.category && p.id !== product.id)
  const others = products
    .filter((p) => p.category !== product.category && p.id !== product.id)
    .sort((a, b) => b.popularity - a.popularity)
  return [...sameCategory, ...others].slice(0, limit)
}

export const availabilityLabels = {
  'in-stock': 'En stock',
  'low-stock': 'Plus que quelques-uns',
  'out-of-stock': 'Épuisé aujourd’hui',
}
