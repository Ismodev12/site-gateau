# ANTIXOR Baked.com — site vitrine & boutique (frontend React)

Site multipage (entièrement en français) de pâtisserie artisanale : React 19 + Vite + Tailwind CSS 4 + React Router 7 + Lucide.
Version **frontend uniquement** : panier, favoris, commande et formulaires fonctionnent dans le navigateur (localStorage), sans paiement ni envoi réel.

## Démarrer

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # génère le dossier dist/
npm run preview   # teste la version de production
```

Déploiement Netlify : `netlify.toml` et `public/_redirects` sont déjà configurés (build `npm run build`, dossier `dist`, redirection des routes vers `index.html`).

## Où modifier quoi

| Je veux changer…                                   | Fichier |
|----------------------------------------------------|---------|
| Nom, coordonnées, horaires, réseaux, devise, frais de livraison, textes de l'accueil et de « À propos » | `src/config/siteConfig.js` |
| Chemins des images                                  | `src/config/imagePaths.js` |
| Produits (prix, dispo, ingrédients, allergènes)     | `src/data/products.js` |
| Catégories / collections                            | `src/data/categories.js`, `src/data/collections.js` |
| Recettes                                            | `src/data/recipes.js` |
| Pages légales                                       | `src/data/legal.js` |
| Couleurs et polices                                 | `src/index.css` (bloc `@theme`) |

## Ajouter vos images

**Téléchargement automatique :** `npm run images` récupère les 41 photos (Unsplash, licence gratuite,
usage commercial autorisé) déjà recadrées dans `public/images/...`. `npm run images -- --force` les remplace toutes.
Pour changer une photo, modifiez son identifiant dans `scripts/telecharger-images.mjs`.

Vous pouvez aussi utiliser vos propres photos :

Déposez vos photos dans `public/images/...` avec les noms listés dans `src/config/imagePaths.js`
(ex. `public/images/hero/hero-cookies.jpg`). Tant qu'une image manque, un emplacement crème
s'affiche à la place ; en mode `npm run dev`, une étiquette « Image à ajouter · nom-du-fichier » indique le fichier attendu.

Formats conseillés : Hero carré ≥ 1200 px ; produits/catégories carrés ≥ 1000 px ;
`decorations/cta-cookie.jpg` : un cookie sur fond clair.

## Pages

`/` · `/products` (recherche, catégories, prix, tri, « Voir plus ») · `/products/:slug` · `/cart` · `/checkout` ·
`/order-confirmation` · `/favorites` · `/about` · `/recipes` · `/recipes/:slug` · `/contact` ·
`/privacy-policy` · `/terms` · `/legal-notice` · 404.

## Brancher un backend plus tard

- Commandes : `src/services/orderService.js` → remplacer `submitOrder` par un appel API.
- Contact : `src/services/contactService.js` → remplacer `sendContactMessage`.
- Produits : remplacer l'import de `src/data/products.js` par un chargement API.

⚠️ Prix, disponibilités, ingrédients, allergènes, coordonnées et textes légaux sont des **données de démonstration** à remplacer.

## Commande par WhatsApp

- Réglez le numéro qui reçoit les commandes dans `src/config/siteConfig.js` → `contact.whatsapp`
  (format international, chiffres uniquement, ex. `22901XXXXXXXX`).
- Page `/checkout` : le client remplit ses informations et son mode de paiement souhaité, puis
  « Commander sur WhatsApp » ouvre WhatsApp avec la commande déjà rédigée (produits, total, adresse, référence).
- Fiche produit : bouton « Commander sur WhatsApp » pour un produit seul.
- Bouton WhatsApp flottant sur toutes les pages (sauf la commande).
- Le message est construit dans `src/utils/whatsapp.js` (modifiable).
