import { images } from '../config/imagePaths'

/**
 * COLLECTIONS ("Crafted Menus for Every Moment")
 * Chaque produit peut appartenir à une ou plusieurs collections
 * (champ `collections` dans products.js).
 */
export const collections = [
  {
    id: 'sweet-treats',
    title: 'Petites douceurs',
    subtitle: 'pour les moments heureux',
    description: 'De petites bouchées de bonheur pour chaque jour de la semaine.',
    image: images.collections.sweetTreats,
  },
  {
    id: 'fresh-bakes',
    title: 'Sorties du four',
    subtitle: 'pour vos envies',
    description: 'Tout droit sorties du four, encore chaudes et dorées.',
    image: images.collections.freshBakes,
  },
  {
    id: 'indulgent-desserts',
    title: 'Desserts gourmands',
    subtitle: 'pour les jours spéciaux',
    description: 'Des créations riches et généreuses, faites pour célébrer.',
    image: images.collections.indulgentDesserts,
  },
  {
    id: 'seasonal-specials',
    title: 'Spécialités de saison',
    subtitle: 'pour encore plus de joie',
    description: 'Des saveurs éphémères inspirées par la saison.',
    image: images.collections.seasonalSpecials,
  },
]

export const getCollection = (id) => collections.find((c) => c.id === id)
