/**
 * TÉLÉCHARGEMENT DES IMAGES DU SITE
 * ------------------------------------------------------------------
 * Lance :  npm run images      (ou : node scripts/telecharger-images.mjs)
 *
 * Télécharge les 41 photos (Unsplash, licence libre et gratuite, usage
 * commercial autorisé) dans public/images/..., déjà recadrées au bon format.
 * Les fichiers déjà présents sont ignorés : ajoutez --force pour tout
 * re-télécharger. Pour changer une photo, remplacez son identifiant
 * "photo-..." ci-dessous (visible dans l'URL de l'image sur unsplash.com).
 */
import { mkdir, writeFile, access } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', 'public', 'images')
const FORCE = process.argv.includes('--force')

// [fichier, identifiant Unsplash, largeur, hauteur]
const IMAGES = [
  ['hero/hero-cookies.jpg', 'photo-1592065201038-52c9da2a6194', 1400, 1400],
  ['products/chocolate-cookies.jpg', 'photo-1499636136210-6f4ee915583e', 1000, 1000],
  ['products/cupcake.jpg', 'photo-1629091734834-e2419a131050', 1000, 1000],
  ['products/peanut-cookies.jpg', 'photo-1621353354739-1420ff28ead9', 1000, 1000],
  ['products/doughnut.jpg', 'photo-1579761314336-f27ea6297ae1', 1000, 1000],
  ['products/pastries.jpg', 'photo-1483695028939-5bb13f8648b0', 1000, 1000],
  ['products/brownie.jpg', 'photo-1606313564200-e75d5e30476c', 1000, 1000],
  ['products/oatmeal-raisin-cookies.jpg', 'photo-1631311253861-52eaf0337adb', 1000, 1000],
  ['products/double-chocolate-cookies.jpg', 'photo-1590080874088-eec64895b423', 1000, 1000],
  ['products/red-velvet-cupcake.jpg', 'photo-1614707267537-b85aaf00c4b7', 1000, 1000],
  ['products/lemon-cupcake.jpg', 'photo-1576618148400-f54bed99fcfd', 1000, 1000],
  ['products/fudge-brownie.jpg', 'photo-1461009312844-e80697a81cc7', 1000, 1000],
  ['products/caramel-blondie.jpg', 'photo-1603380207318-371ad12c0c0e', 1000, 1000],
  ['products/caramel-doughnut.jpg', 'photo-1597419765826-5b03fa018c18', 1000, 1000],
  ['products/cinnamon-sugar-doughnut.jpg', 'photo-1639427444469-e3369c559b74', 1000, 1000],
  ['products/butter-croissant.jpg', 'photo-1555507036-ab1f4038808a', 1000, 1000],
  ['products/pain-au-chocolat.jpg', 'photo-1681218424681-b4f8228ecea9', 1000, 1000],
  ['products/chocolate-eclair.jpg', 'photo-1552598827-ea6f80fcbcfc', 1000, 1000],
  ['products/fruit-tart.jpg', 'photo-1620980776848-84ac10194945', 1000, 1000],
  ['categories/cupcakes.jpg', 'photo-1426869884541-df7117556757', 1000, 800],
  ['categories/peanut-cookies.jpg', 'photo-1738101840141-59f84501bdd8', 1000, 800],
  ['categories/doughnuts.jpg', 'photo-1551024601-bec78aea704b', 1000, 800],
  ['categories/pastries.jpg', 'photo-1710077717714-976db5604dd7', 1000, 800],
  ['categories/brownies.jpg', 'photo-1515037893149-de7f840978e2', 1000, 800],
  ['categories/viennoiseries.jpg', 'photo-1623334044303-241021148842', 1000, 800],
  ['story/baked-with-love.jpg', 'photo-1600147566401-c2056eb69479', 900, 900],
  ['collections/sweet-treats.jpg', 'photo-1569864358642-9d1684040f43', 900, 675],
  ['collections/fresh-bakes.jpg', 'photo-1752850744269-53da2c47fe01', 900, 675],
  ['collections/indulgent-desserts.jpg', 'photo-1713274785893-8879f807aff6', 900, 675],
  ['collections/seasonal-specials.jpg', 'photo-1503485838016-53579610c389', 900, 675],
  ['decorations/cta-cookie.jpg', 'photo-1661416958579-94e624f7332d', 800, 800],
  ['about/about-hero.jpg', 'photo-1567941723610-db0bcb4cca67', 1400, 1050],
  ['about/our-passion.jpg', 'photo-1625489461079-bcfdfe726d51', 1000, 800],
  ['about/our-craft.jpg', 'photo-1652283321082-72bb2b601abd', 1000, 800],
  ['about/our-ingredients.jpg', 'photo-1588467850695-a898367ce465', 1000, 800],
  ['recipes/perfect-chocolate-cookies.jpg', 'photo-1639694171537-250e3d924b6c', 1200, 900],
  ['recipes/soft-cupcakes.jpg', 'photo-1565498253128-c06e0488ddee', 1200, 900],
  ['recipes/homemade-doughnuts.jpg', 'photo-1527904324834-3bda86da6771', 1200, 900],
  ['recipes/fudgy-brownies.jpg', 'photo-1636743715220-d8f8dd900b87', 1200, 900],
  ['recipes/silky-buttercream.jpg', 'photo-1657502096852-340a75dc56f7', 1200, 900],
  ['recipes/keep-cookies-fresh.jpg', 'photo-1574156812219-2ddcf745088e', 1200, 900],
]

const url = (id, w, h) =>
  `https://images.unsplash.com/${id}?w=${w}&h=${h}&fit=crop&q=80&fm=jpg`

const exists = (p) => access(p).then(() => true, () => false)

let ok = 0, skipped = 0, failed = 0
for (const [file, id, w, h] of IMAGES) {
  const dest = join(ROOT, file)
  if (!FORCE && (await exists(dest))) { skipped++; continue }
  try {
    const res = await fetch(url(id, w, h))
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    await mkdir(dirname(dest), { recursive: true })
    await writeFile(dest, Buffer.from(await res.arrayBuffer()))
    ok++
    console.log(`✔ ${file}`)
  } catch (e) {
    failed++
    console.log(`✘ ${file} — ${e.message}`)
  }
}
console.log(`\nTerminé : ${ok} téléchargée(s), ${skipped} déjà présente(s), ${failed} échec(s).`)
if (failed) console.log('Relancez la commande pour réessayer les échecs (vérifiez votre connexion).')
