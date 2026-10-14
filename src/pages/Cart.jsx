import { Link } from 'react-router-dom'
import { Trash2, ShoppingBag } from 'lucide-react'
import PageHeader from '../components/ui/PageHeader'
import ProductImage from '../components/ui/ProductImage'
import QuantitySelector from '../components/ui/QuantitySelector'
import Button from '../components/ui/Button'
import EmptyState from '../components/ui/EmptyState'
import OrderSummary from '../components/products/OrderSummary'
import { useCart } from '../context/CartContext'
import { useToast } from '../context/ToastContext'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import { formatPrice } from '../utils/format'

export default function Cart() {
  useDocumentTitle('Votre panier')
  const { lines, count, totals, updateQuantity, removeItem, clearCart, maxQuantity } = useCart()
  const notify = useToast()

  return (
    <>
      <PageHeader script="Presque à vous" title="Votre panier" breadcrumbs={[{ label: 'Accueil', to: '/' }, { label: 'Panier' }]} />
      <section className="container-x pb-20">
        {lines.length === 0 ? (
          <EmptyState
            icon={<ShoppingBag className="size-10" aria-hidden />}
            title="Votre panier est vide"
            text="Rien pour l’instant — nos cookies vous attendent."
            actionLabel="Aller à la boutique"
            actionTo="/products"
          />
        ) : (
          <div className="grid gap-10 lg:grid-cols-[1fr_380px]">
            <div>
              <div className="flex items-center justify-between">
                <p className="font-semibold">
                  {count} {count > 1 ? 'articles' : 'article'}
                </p>
                <button
                  type="button"
                  onClick={() => {
                    clearCart()
                    notify('Votre panier a été vidé')
                  }}
                  className="inline-flex items-center gap-1.5 font-bold text-forest hover:underline"
                >
                  <Trash2 className="size-4" aria-hidden /> Vider le panier
                </button>
              </div>
              <ul className="mt-5 space-y-4">
                {lines.map((line) => (
                  <li key={line.id} className="grid grid-cols-[88px_1fr] gap-4 rounded-[1.75rem] bg-white p-3 shadow-[var(--shadow-card)] sm:grid-cols-[120px_1fr] sm:p-4">
                    <Link to={`/products/${line.slug}`}>
                      <ProductImage product={{ ...line, shortDescription: '' }} className="rounded-2xl" showLabel={false} />
                    </Link>
                    <div className="flex min-w-0 flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <div className="min-w-0">
                        <Link to={`/products/${line.slug}`} className="text-lg font-bold leading-snug text-ink hover:text-forest">
                          {line.name}
                        </Link>
                        <p className="text-ink-soft">
                          {line.unit} · {formatPrice(line.price)} l’unité
                        </p>
                      </div>
                      <div className="flex flex-wrap items-center justify-between gap-3 sm:justify-end sm:gap-5">
                        <QuantitySelector size="sm" value={line.quantity} max={maxQuantity} onChange={(q) => updateQuantity(line.id, q)} label={`Quantité de ${line.name}`} />
                        <span className="min-w-24 text-right text-lg font-extrabold text-forest">{formatPrice(line.lineTotal)}</span>
                        <button
                          type="button"
                          onClick={() => removeItem(line.id)}
                          className="grid size-10 place-items-center rounded-full text-ink-soft hover:bg-cream-200 hover:text-[#B3261E]"
                          aria-label={`Retirer ${line.name} du panier`}
                        >
                          <Trash2 className="size-5" aria-hidden />
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <Link to="/products" className="mt-6 inline-block font-bold text-forest hover:underline">
                ← Continuer mes achats
              </Link>
            </div>

            <aside aria-label="Récapitulatif">
              <div className="sticky top-28 rounded-[1.75rem] bg-white p-6 shadow-[var(--shadow-card)]">
                <h2 className="text-2xl">Récapitulatif</h2>
                <OrderSummary totals={totals} />
                <Button to="/checkout" size="lg" className="mt-6 w-full" arrow>
                  Passer la commande
                </Button>
                <p className="mt-3 text-center text-sm text-ink-soft">Commande de démonstration — aucun paiement réel.</p>
              </div>
            </aside>
          </div>
        )}
      </section>
    </>
  )
}
