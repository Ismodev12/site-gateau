import { Link } from 'react-router-dom'
import { Heart, Plus } from 'lucide-react'
import ProductImage from '../ui/ProductImage'
import { formatPrice, cn } from '../../utils/format'
import { availabilityLabels } from '../../data/products'
import { getCategory } from '../../data/categories'
import { useShopActions } from '../../hooks/useShopActions'

export default function ProductCard({ product }) {
  const { addToCart, toggleFav, isFavorite } = useShopActions()
  const fav = isFavorite(product.id)
  const soldOut = product.availability === 'out-of-stock'

  return (
    <article className="group relative flex flex-col rounded-[1.75rem] bg-white p-3 shadow-[var(--shadow-card)] transition-transform duration-300 hover:-translate-y-1">
      <div className="relative">
        <Link to={`/products/${product.slug}`} tabIndex={-1} aria-hidden="true">
          <ProductImage product={product} className="rounded-[1.35rem]" imgClassName="transition-transform duration-500 group-hover:scale-105" />
        </Link>
        <button
          type="button"
          onClick={() => toggleFav(product)}
          aria-pressed={fav}
          aria-label={fav ? `Retirer ${product.name} des favoris` : `Ajouter ${product.name} aux favoris`}
          className={cn(
            'absolute right-3 top-3 z-10 grid size-10 place-items-center rounded-full shadow-sm transition-colors',
            fav ? 'bg-forest text-gold' : 'bg-cream/95 text-forest hover:bg-white',
          )}
        >
          <Heart className={cn('size-[18px]', fav && 'fill-current')} aria-hidden />
        </button>
        {product.availability !== 'in-stock' && (
          <span
            className={cn(
              'absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-bold',
              soldOut ? 'bg-ink text-cream' : 'bg-gold text-ink',
            )}
          >
            {availabilityLabels[product.availability]}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col px-2 pb-1 pt-4">
        <p className="text-sm font-semibold uppercase tracking-wider text-gold-600">{getCategory(product.category)?.name}</p>
        <h3 className="mt-1 text-xl leading-snug">
          <Link to={`/products/${product.slug}`} className="after:absolute after:inset-0 after:rounded-[1.75rem] hover:underline">
            {product.name}
          </Link>
        </h3>
        <p className="mt-1.5 line-clamp-2 text-[0.97rem] text-ink-soft">{product.shortDescription}</p>
        <div className="mt-auto flex items-center justify-between gap-3 pt-4">
          <p>
            <span className="text-xl font-extrabold text-forest">{formatPrice(product.price)}</span>
            <span className="block text-sm text-ink-soft">{product.unit}</span>
          </p>
          <button
            type="button"
            onClick={() => addToCart(product)}
            disabled={soldOut}
            className="relative z-10 grid size-12 place-items-center rounded-full bg-gold text-ink transition-all hover:scale-105 hover:bg-gold-600 disabled:cursor-not-allowed disabled:bg-cream-300 disabled:text-ink-soft disabled:hover:scale-100"
            aria-label={soldOut ? `${product.name} est épuisé` : `Ajouter ${product.name} au panier`}
          >
            <Plus className="size-5" aria-hidden />
          </button>
        </div>
      </div>
    </article>
  )
}
