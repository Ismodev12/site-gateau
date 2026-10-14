import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { X, Trash2, ShoppingBag } from 'lucide-react'
import { useCart } from '../../context/CartContext'
import { useFocusTrap } from '../../hooks/useFocusTrap'
import { formatPrice } from '../../utils/format'
import ProductImage from '../ui/ProductImage'
import QuantitySelector from '../ui/QuantitySelector'
import Button from '../ui/Button'

/** Tiroir latéral du panier (ouvert depuis la navbar ou après un ajout) */
export default function CartDrawer() {
  const { isDrawerOpen, closeDrawer, lines, totals, count, updateQuantity, removeItem, maxQuantity } = useCart()
  const ref = useRef(null)
  useFocusTrap(ref, isDrawerOpen, closeDrawer)
  if (!isDrawerOpen) return null

  return (
    <div className="fixed inset-0 z-[60]">
      <div className="animate-fade-in absolute inset-0 bg-forest-900/50" onClick={closeDrawer} aria-hidden />
      <aside
        ref={ref}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cart-drawer-title"
        className="animate-slide-in absolute inset-y-0 right-0 flex w-full max-w-md flex-col bg-cream shadow-2xl"
      >
        <div className="flex items-center justify-between border-b border-cream-300 px-5 py-4 sm:px-6">
          <h2 id="cart-drawer-title" className="text-2xl">
            Votre panier <span className="text-lg font-semibold text-ink-soft">({count})</span>
          </h2>
          <button type="button" onClick={closeDrawer} className="grid size-11 place-items-center rounded-full text-forest hover:bg-forest-100" aria-label="Fermer le panier">
            <X className="size-6" aria-hidden />
          </button>
        </div>

        {lines.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
            <div className="grid size-20 place-items-center rounded-full bg-gold-100 text-forest">
              <ShoppingBag className="size-9" aria-hidden />
            </div>
            <p className="mt-5 text-xl font-bold text-forest">Votre panier est vide</p>
            <p className="mt-2 text-ink-soft">Remplissons-le de douceurs.</p>
            <Button to="/products" onClick={closeDrawer} className="mt-6" arrow>
              Voir les produits
            </Button>
          </div>
        ) : (
          <>
            <ul className="flex-1 space-y-4 overflow-y-auto px-5 py-5 sm:px-6">
              {lines.map((line) => (
                <li key={line.id} className="flex gap-4 rounded-2xl bg-white p-3 shadow-[var(--shadow-card)]">
                  <Link to={`/products/${line.slug}`} onClick={closeDrawer} className="shrink-0">
                    <ProductImage product={{ ...line, shortDescription: '' }} className="size-20 rounded-xl" showLabel={false} />
                  </Link>
                  <div className="flex min-w-0 flex-1 flex-col">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <Link to={`/products/${line.slug}`} onClick={closeDrawer} className="font-bold leading-snug text-ink hover:text-forest">
                          {line.name}
                        </Link>
                        <p className="text-sm text-ink-soft">{line.unit} · {formatPrice(line.price)}</p>
                      </div>
                      <button type="button" onClick={() => removeItem(line.id)} className="grid size-9 shrink-0 place-items-center rounded-full text-ink-soft hover:bg-cream-200 hover:text-[#B3261E]" aria-label={`Retirer ${line.name}`}>
                        <Trash2 className="size-4" aria-hidden />
                      </button>
                    </div>
                    <div className="mt-auto flex items-center justify-between pt-2">
                      <QuantitySelector size="sm" value={line.quantity} max={maxQuantity} onChange={(q) => updateQuantity(line.id, q)} label={`Quantité de ${line.name}`} />
                      <span className="font-bold text-forest">{formatPrice(line.lineTotal)}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="border-t border-cream-300 bg-cream-200 px-5 py-5 sm:px-6">
              <div className="flex justify-between text-lg">
                <span className="font-semibold">Sous-total</span>
                <span className="font-extrabold text-forest">{formatPrice(totals.subtotal)}</span>
              </div>
              <p className="mt-1 text-sm text-ink-soft">Livraison calculée à la commande (démo).</p>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <Button to="/cart" variant="outline" onClick={closeDrawer}>
                  Voir le panier
                </Button>
                <Button to="/checkout" onClick={closeDrawer}>
                  Commander
                </Button>
              </div>
            </div>
          </>
        )}
      </aside>
    </div>
  )
}
