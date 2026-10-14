import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Heart, ShoppingBag, Truck, Leaf, CheckCircle2, AlertTriangle, XCircle } from 'lucide-react'
import Breadcrumbs from '../components/ui/Breadcrumbs'
import ProductImage from '../components/ui/ProductImage'
import QuantitySelector from '../components/ui/QuantitySelector'
import Button from '../components/ui/Button'
import DemoNotice from '../components/ui/DemoNotice'
import ProductGrid from '../components/products/ProductGrid'
import { BrushBlob, SparkleDoodle } from '../components/ui/Doodles'
import NotFound from './NotFound'
import SocialIcon from '../components/ui/SocialIcon'
import { buildProductMessage, whatsappLink } from '../utils/whatsapp'
import { getProductBySlug, getRelatedProducts, availabilityLabels } from '../data/products'
import { getCategory } from '../data/categories'
import { siteConfig } from '../config/siteConfig'
import { useShopActions } from '../hooks/useShopActions'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import { formatPrice, cn } from '../utils/format'

const availabilityStyle = {
  'in-stock': { icon: CheckCircle2, cls: 'bg-forest-100 text-forest' },
  'low-stock': { icon: AlertTriangle, cls: 'bg-gold-100 text-ink' },
  'out-of-stock': { icon: XCircle, cls: 'bg-cream-300 text-ink' },
}

export default function ProductDetail() {
  const { slug } = useParams()
  const product = getProductBySlug(slug)
  useDocumentTitle(product?.name ?? 'Produit introuvable')
  // `key` sur le contenu : la quantité est réinitialisée quand on change de produit
  if (!product) {
    return (
      <NotFound
        title="Cette douceur est introuvable"
        text="Ce produit n’existe pas ou n’est plus à la carte. Découvrez plutôt les douceurs du jour."
      />
    )
  }
  return <ProductContent key={product.id} product={product} />
}

function ProductContent({ product }) {
  const [qty, setQty] = useState(1)
  const { addToCart, toggleFav, isFavorite } = useShopActions()
  const category = getCategory(product.category)
  const related = getRelatedProducts(product, 4)
  const soldOut = product.availability === 'out-of-stock'
  const fav = isFavorite(product.id)
  const avail = availabilityStyle[product.availability]
  const max = siteConfig.checkout.maxQuantityPerItem

  return (
    <>
      <section className="container-x pb-16 pt-8 sm:pb-24">
        <Breadcrumbs
          items={[
            { label: 'Accueil', to: '/' },
            { label: 'Produits', to: '/products' },
            { label: category?.name ?? 'Catégorie', to: `/products?category=${product.category}` },
            { label: product.name },
          ]}
        />

        <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <div className="relative">
            <BrushBlob className="absolute -left-6 -top-6 w-1/2 text-gold" />
            <SparkleDoodle className="absolute -right-2 -top-4 size-10 text-forest" />
            <ProductImage product={product} priority className="relative rounded-[2.5rem] border-8 border-white shadow-[var(--shadow-soft)]" />
          </div>

          {/* Informations */}
          <div className="flex flex-col">
            <Link to={`/products?category=${product.category}`} className="eyebrow hover:underline">
              {category?.name}
            </Link>
            <h1 className="mt-3 text-[2.6rem] sm:text-6xl">{product.name}</h1>
            <p className="mt-4 flex flex-wrap items-baseline gap-3">
              <span className="text-3xl font-extrabold text-forest">{formatPrice(product.price)}</span>
              <span className="text-lg text-ink-soft">/ {product.unit}</span>
            </p>
            <p className={cn('mt-4 inline-flex w-fit items-center gap-2 rounded-full px-3.5 py-1.5 font-semibold', avail.cls)}>
              <avail.icon className="size-4" aria-hidden /> {availabilityLabels[product.availability]}
            </p>
            <p className="mt-6 text-lg leading-relaxed text-ink">{product.description}</p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <QuantitySelector value={qty} onChange={setQty} max={max} disabled={soldOut} />
              <Button size="lg" onClick={() => addToCart(product, qty, { openCart: true })} disabled={soldOut} className="flex-1 sm:flex-none">
                <ShoppingBag className="size-5" aria-hidden />
                {soldOut ? 'Épuisé aujourd’hui' : 'Ajouter au panier'}
              </Button>
              <button
                type="button"
                onClick={() => toggleFav(product)}
                aria-pressed={fav}
                aria-label={fav ? 'Retirer des favoris' : 'Ajouter aux favoris'}
                className={cn(
                  'grid size-14 place-items-center rounded-full border-2 transition-colors',
                  fav ? 'border-forest bg-forest text-gold' : 'border-forest text-forest hover:bg-forest-100',
                )}
              >
                <Heart className={cn('size-6', fav && 'fill-current')} aria-hidden />
              </button>
            </div>
            {!soldOut && (
              <a
                href={whatsappLink(buildProductMessage(product, qty))}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-3 inline-flex w-fit items-center gap-2 rounded-full border-2 border-[#1FA855] px-5 py-2.5 font-bold text-[#147A3D] transition-colors hover:bg-[#1FA855] hover:text-white"
              >
                <SocialIcon name="whatsapp" className="size-5" /> Commander sur WhatsApp
              </a>
            )}
            {!soldOut && (
              <p className="mt-3 text-ink-soft">
                Total pour {qty} : <strong className="text-forest">{formatPrice(product.price * qty)}</strong> · {max} max. par commande
              </p>
            )}

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              <li className="flex items-center gap-3 rounded-2xl bg-cream-200 px-4 py-3">
                <Leaf className="size-5 text-forest" aria-hidden /> Préparé frais chaque matin
              </li>
              <li className="flex items-center gap-3 rounded-2xl bg-cream-200 px-4 py-3">
                <Truck className="size-5 text-forest" aria-hidden /> Livraison le jour même (démo)
              </li>
            </ul>

            <div className="mt-8 grid gap-6 border-t border-cream-300 pt-8 sm:grid-cols-2">
              <div>
                <h2 className="text-xl">Ingrédients</h2>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {product.ingredients.map((i) => (
                    <li key={i} className="rounded-full bg-white px-3 py-1 text-[0.95rem] shadow-sm">
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
              {product.allergens?.length > 0 && (
                <div>
                  <h2 className="text-xl">Allergènes</h2>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {product.allergens.map((a) => (
                      <li key={a} className="rounded-full bg-gold-100 px-3 py-1 text-[0.95rem] font-semibold">
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <DemoNotice className="mt-6">
              Les ingrédients et allergènes affichés sont des <strong>informations d’exemple</strong>, non vérifiées. En cas d’allergie,
              contactez-nous avant de commander.
            </DemoNotice>
          </div>
        </div>
      </section>

      <section aria-labelledby="related-title" className="bg-cream-200/60 py-16 sm:py-20">
        <div className="container-x">
          <h2 id="related-title" className="text-[2.2rem] sm:text-5xl">
            Vous allez <span className="script text-[1.15em]">aussi adorer</span>
          </h2>
          <div className="mt-10">
            <ProductGrid products={related} columns="sm:grid-cols-2 lg:grid-cols-4" />
          </div>
        </div>
      </section>
    </>
  )
}
