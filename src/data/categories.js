import { images } from '../config/imagePaths'

/**
 * CATÉGORIES DU CATALOGUE
 * `tone` choisit la couleur de fond de la carte (uniquement des nuances
 * de la palette) : 'forest' | 'gold' | 'forest-light' | 'gold-light'.
 * `homeLabel` : titre affiché sur la page d'accueil (si `showOnHome`).
 */
export const categories = [
  {
    id: 'cupcakes',
    name: 'Cupcakes',
    homeLabel: 'Cupcakes',
    description: 'Une génoise moelleuse, un glaçage soyeux et une touche d’éclat.',
    image: images.categories.cupcakes,
    tone: 'forest',
    showOnHome: true,
  },
  {
    id: 'cookies',
    name: 'Cookies',
    homeLabel: 'Cookies cacahuète',
    description: 'Des bords croustillants, un cœur fondant et de généreux morceaux.',
    image: images.categories.cookies,
    tone: 'gold',
    showOnHome: true,
  },
  {
    id: 'doughnuts',
    name: 'Donuts',
    homeLabel: 'Donuts',
    description: 'Moelleux, dorés et glacés à la perfection.',
    image: images.categories.doughnuts,
    tone: 'forest-light',
    showOnHome: true,
  },
  {
    id: 'pastries',
    name: 'Pâtisseries',
    homeLabel: 'Pâtisseries',
    description: 'Tartes élégantes, éclairs et grands classiques français.',
    image: images.categories.pastries,
    tone: 'gold-light',
    showOnHome: true,
  },
  {
    id: 'brownies',
    name: 'Brownies',
    homeLabel: 'Brownies',
    description: 'Des carrés fondants, riches et intensément chocolatés.',
    image: images.categories.brownies,
    tone: 'forest',
    showOnHome: false,
  },
  {
    id: 'viennoiseries',
    name: 'Viennoiseries',
    homeLabel: 'Viennoiseries',
    description: 'Croissants feuilletés pur beurre et favoris du petit-déjeuner.',
    image: images.categories.viennoiseries,
    tone: 'gold',
    showOnHome: false,
  },
]

export const getCategory = (id) => categories.find((c) => c.id === id)

/** Classes de couleur associées à chaque "tone" */
export const toneClasses = {
  forest: 'bg-forest',
  gold: 'bg-gold',
  'forest-light': 'bg-forest-100',
  'gold-light': 'bg-gold-100',
}
