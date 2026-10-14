import { images } from '../config/imagePaths'

/**
 * RECETTES & CONSEILS — contenu de démonstration modifiable
 * Les dates sont des DATES DE DÉMONSTRATION (champ `date`).
 */
export const recipeCategories = ['Toutes', 'Cookies', 'Cupcakes', 'Donuts', 'Brownies', 'Astuces']

export const recipes = [
  {
    slug: 'cookies-chocolat-parfaits',
    title: 'Réussir des cookies au chocolat parfaits',
    category: 'Cookies',
    excerpt: 'Des bords croustillants, un cœur tendre et du chocolat fondant : voici la méthode que nous utilisons.',
    intro:
      'Un bon cookie au chocolat, c’est avant tout un contraste : des bords dorés et croustillants et un cœur tendre et moelleux. Le secret ? Du beurre noisette, un mélange de sucres et un peu de patience pendant le repos de la pâte.',
    image: images.recipes.chocolateCookies,
    date: '2026-09-18',
    prepTime: '20 min',
    cookTime: '11 min',
    servings: '16 cookies',
    difficulty: 'Facile',
    ingredients: [
      '170 g de beurre',
      '150 g de sucre roux',
      '60 g de sucre blanc',
      '1 œuf + 1 jaune d’œuf',
      '1 c. à café d’extrait de vanille',
      '250 g de farine',
      '1/2 c. à café de bicarbonate',
      '1/2 c. à café de sel',
      '200 g de chocolat noir concassé',
      'Fleur de sel pour finir',
    ],
    steps: [
      'Faites fondre le beurre à feu moyen et continuez la cuisson en remuant jusqu’à ce qu’il dore et sente la noisette. Versez-le dans un saladier et laissez tiédir 10 minutes.',
      'Ajoutez les deux sucres au beurre en fouettant, puis l’œuf, le jaune et la vanille. Fouettez une bonne minute jusqu’à obtenir un mélange brillant.',
      'Incorporez la farine, le bicarbonate et le sel sans trop mélanger, puis ajoutez le chocolat.',
      'Couvrez et laissez reposer la pâte au frais au moins 1 heure (une nuit, c’est encore mieux) pour développer les arômes.',
      'Préchauffez le four à 180 °C. Formez des boules de pâte sur une plaque recouverte de papier cuisson en les espaçant bien.',
      'Faites cuire 10 à 12 minutes : les bords doivent être dorés et le centre encore légèrement mou. Parsemez de fleur de sel et laissez figer 5 minutes sur la plaque.',
    ],
  },
  {
    slug: 'secret-cupcakes-moelleux',
    title: 'Le secret de cupcakes bien moelleux',
    category: 'Cupcakes',
    excerpt: 'Légers, tendres, jamais secs : trois petites habitudes qui font toute la différence.',
    intro:
      'Des cupcakes secs viennent souvent d’une pâte trop travaillée ou d’une cuisson trop longue. Avec des ingrédients à température ambiante, des gestes doux et un œil sur le four, vous obtiendrez une mie tendre à chaque fois.',
    image: images.recipes.softCupcakes,
    date: '2026-08-30',
    prepTime: '25 min',
    cookTime: '18 min',
    servings: '12 cupcakes',
    difficulty: 'Facile',
    ingredients: [
      '115 g de beurre mou',
      '200 g de sucre',
      '2 œufs à température ambiante',
      '2 c. à café d’extrait de vanille',
      '190 g de farine',
      '1 c. à café et demie de levure chimique',
      '1/4 c. à café de sel',
      '120 ml de lait à température ambiante',
    ],
    steps: [
      'Préchauffez le four à 175 °C et garnissez un moule à muffins de 12 caissettes en papier.',
      'Battez le beurre et le sucre pendant 3 minutes jusqu’à ce que le mélange soit pâle et mousseux.',
      'Ajoutez les œufs un par un en battant bien entre chaque, puis la vanille.',
      'Mélangez farine, levure et sel. Incorporez-les en trois fois en alternant avec le lait, juste jusqu’à ce qu’il n’y ait plus de farine visible.',
      'Remplissez les caissettes aux deux tiers et faites cuire 17 à 20 minutes : un cure-dent doit ressortir avec quelques miettes humides.',
      'Laissez refroidir complètement avant de glacer — sur des cupcakes chauds, la crème au beurre fond.',
    ],
  },
  {
    slug: 'donuts-maison-faciles',
    title: 'Des donuts maison faciles',
    category: 'Donuts',
    excerpt: 'Des donuts briochés bien moelleux à faire chez vous, avec un glaçage simple au chocolat.',
    intro:
      'Les donuts maison sont plus simples qu’il n’y paraît. Une pâte levée enrichie, deux poussées et une friture maîtrisée suffisent pour obtenir des anneaux légers, prêts à recevoir le glaçage de votre choix.',
    image: images.recipes.homemadeDoughnuts,
    date: '2026-08-12',
    prepTime: '30 min + 2 h de pousse',
    cookTime: '15 min',
    servings: '10 donuts',
    difficulty: 'Moyen',
    ingredients: [
      '500 g de farine de force',
      '60 g de sucre',
      '7 g de levure boulangère sèche',
      '1 c. à café de sel',
      '240 ml de lait tiède',
      '2 œufs',
      '60 g de beurre mou',
      'Huile neutre pour la friture',
      '150 g de chocolat + 60 ml de crème pour le glaçage',
    ],
    steps: [
      'Mélangez la farine, le sucre, la levure et le sel. Ajoutez le lait tiède et les œufs, puis pétrissez 8 minutes.',
      'Ajoutez le beurre petit à petit et pétrissez jusqu’à obtenir une pâte lisse et élastique.',
      'Couvrez et laissez lever environ 1 heure dans un endroit chaud, jusqu’à ce que la pâte double de volume.',
      'Étalez sur 1,5 cm d’épaisseur, découpez des anneaux et laissez lever à nouveau 45 minutes sur un papier fariné.',
      'Faites frire dans une huile à 175 °C environ 1 minute de chaque côté, jusqu’à ce qu’ils soient dorés. Égouttez sur du papier absorbant.',
      'Faites fondre le chocolat avec la crème chaude, trempez le dessus de chaque donut refroidi et laissez figer.',
    ],
  },
  {
    slug: 'brownies-fondants-a-chaque-fois',
    title: 'Des brownies fondants à tous les coups',
    category: 'Brownies',
    excerpt: 'La croûte craquelée et le cœur fondant dépendent de la façon de fouetter les œufs et le sucre.',
    intro:
      'La fine croûte brillante d’un brownie vient d’un sucre bien dissous. Fouettez les œufs et le sucre jusqu’à ce qu’ils épaississent et blanchissent, puis arrêtez la cuisson dès que le centre est à peine pris.',
    image: images.recipes.fudgyBrownies,
    date: '2026-07-21',
    prepTime: '15 min',
    cookTime: '25 min',
    servings: '16 carrés',
    difficulty: 'Facile',
    ingredients: [
      '200 g de chocolat noir',
      '175 g de beurre',
      '250 g de sucre',
      '3 œufs',
      '1 c. à café d’extrait de vanille',
      '90 g de farine',
      '30 g de cacao en poudre',
      '1/4 c. à café de sel',
    ],
    steps: [
      'Préchauffez le four à 180 °C et chemisez un moule carré de 20 cm de papier cuisson.',
      'Faites fondre le chocolat et le beurre ensemble, puis laissez légèrement tiédir.',
      'Fouettez les œufs, le sucre et la vanille 4 à 5 minutes jusqu’à ce que le mélange soit épais, pâle et double de volume.',
      'Incorporez le chocolat fondu, puis tamisez la farine, le cacao et le sel par-dessus et mélangez délicatement.',
      'Versez dans le moule et faites cuire 22 à 25 minutes : le dessus doit être craquelé et le centre encore légèrement tremblotant.',
      'Laissez refroidir complètement dans le moule avant de découper en carrés.',
    ],
  },
  {
    slug: 'creme-au-beurre-vanille',
    title: 'Une crème au beurre vanille bien lisse',
    category: 'Astuces',
    excerpt: 'Une crème au beurre lisse, facile à pocher, qui se tient bien et n’est pas trop sucrée.',
    intro:
      'Une bonne crème au beurre doit être légère, lisse et facile à pocher. Bien battre le beurre avant d’ajouter le sucre est l’étape que l’on oublie le plus souvent.',
    image: images.recipes.buttercream,
    date: '2026-06-28',
    prepTime: '15 min',
    cookTime: '0 min',
    servings: 'Pour 12 cupcakes',
    difficulty: 'Facile',
    ingredients: [
      '250 g de beurre mou',
      '400 g de sucre glace tamisé',
      '2 à 3 c. à soupe de lait',
      '2 c. à café d’extrait de vanille',
      'Une pincée de sel',
    ],
    steps: [
      'Battez le beurre à vitesse moyenne-rapide pendant 5 minutes jusqu’à ce qu’il soit très pâle.',
      'Ajoutez le sucre glace en trois fois, d’abord à vitesse lente, puis rapide.',
      'Ajoutez la vanille, le sel et le lait cuillère par cuillère jusqu’à obtenir une crème lisse et facile à étaler.',
      'Battez encore 2 minutes pour une texture plus légère, puis pochez ou étalez.',
    ],
  },
  {
    slug: 'conserver-ses-cookies',
    title: 'Comment garder ses cookies frais plus longtemps',
    category: 'Astuces',
    excerpt: 'Des astuces simples pour garder vos cookies tendres, croustillants ou moelleux, comme vous les aimez.',
    intro:
      'Les cookies sont meilleurs le jour même, mais avec une bonne conservation ils restent délicieux plusieurs jours. Voici ce qui fonctionne sous un climat chaud.',
    image: images.recipes.storage,
    date: '2026-06-05',
    prepTime: '5 min',
    cookTime: '0 min',
    servings: 'Toute fournée',
    difficulty: 'Facile',
    ingredients: [
      'Une boîte ou un bocal hermétique',
      'Du papier cuisson',
      'Une tranche de pain (pour les cookies moelleux)',
      'Des sacs de congélation (pour une conservation longue)',
    ],
    steps: [
      'Laissez refroidir complètement les cookies avant de les ranger, sinon la vapeur les ramollit.',
      'Rangez séparément les cookies moelleux et croustillants : ils échangent leur humidité.',
      'Pour des cookies moelleux, glissez une petite tranche de pain dans la boîte pour les garder tendres.',
      'Séparez les couches avec du papier cuisson pour éviter qu’ils ne collent.',
      'Congelez les cookies en trop (ou des boules de pâte) dans des sacs de congélation jusqu’à 3 mois.',
    ],
  },
]

export const getRecipeBySlug = (slug) => recipes.find((r) => r.slug === slug)

export const getRelatedRecipes = (recipe, limit = 3) =>
  [
    ...recipes.filter((r) => r.category === recipe.category && r.slug !== recipe.slug),
    ...recipes.filter((r) => r.category !== recipe.category),
  ].slice(0, limit)
