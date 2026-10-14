import { useCallback, useMemo, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Search, X, ArrowRight } from 'lucide-react'
import { products } from '../../data/products'
import { useFocusTrap } from '../../hooks/useFocusTrap'
import { formatPrice } from '../../utils/format'
import ProductImage from '../ui/ProductImage'

/** Recherche rapide accessible depuis la navbar */
export default function SearchModal({ open, onClose }) {
  const ref = useRef(null)
  const [q, setQ] = useState('')
  const navigate = useNavigate()
  const close = useCallback(() => {
    setQ('')
    onClose()
  }, [onClose])
  useFocusTrap(ref, open, close)

  const results = useMemo(() => {
    const term = q.trim().toLowerCase()
    if (!term) return []
    return products.filter((p) => `${p.name} ${p.category} ${p.shortDescription}`.toLowerCase().includes(term)).slice(0, 5)
  }, [q])

  if (!open) return null

  const submit = (e) => {
    e.preventDefault()
    navigate(q.trim() ? `/products?q=${encodeURIComponent(q.trim())}` : '/products')
    close()
  }

  return (
    <div className="fixed inset-0 z-[60] flex items-start justify-center px-4 pt-[12vh]">
      <div className="animate-fade-in absolute inset-0 bg-forest-900/55" onClick={close} aria-hidden />
      <div ref={ref} role="dialog" aria-modal="true" aria-labelledby="search-title" className="animate-fade-up relative w-full max-w-xl rounded-[2rem] bg-cream p-5 shadow-2xl sm:p-6">
        <div className="flex items-center justify-between">
          <h2 id="search-title" className="text-2xl">
            Trouver une douceur
          </h2>
          <button type="button" onClick={close} className="grid size-10 place-items-center rounded-full text-forest hover:bg-forest-100" aria-label="Fermer la recherche">
            <X className="size-5" aria-hidden />
          </button>
        </div>
        <form onSubmit={submit} role="search" className="mt-4 flex gap-2">
          <label htmlFor="quick-search" className="sr-only">
            Rechercher un produit
          </label>
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-ink-soft" aria-hidden />
            <input
              id="quick-search"
              data-autofocus
              type="search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Cookies, brownies, croissant…"
              className="field-input pl-12"
              autoComplete="off"
            />
          </div>
          <button type="submit" className="rounded-full bg-gold px-5 font-bold text-ink hover:bg-gold-600">
            Rechercher
          </button>
        </form>
        {q.trim() && (
          <div className="mt-4">
            {results.length ? (
              <ul className="divide-y divide-cream-300">
                {results.map((p) => (
                  <li key={p.id}>
                    <Link to={`/products/${p.slug}`} onClick={close} className="flex items-center gap-3 rounded-xl px-2 py-2.5 hover:bg-cream-200">
                      <ProductImage product={p} className="size-12 shrink-0 rounded-xl" showLabel={false} />
                      <span className="flex-1 font-semibold text-ink">{p.name}</span>
                      <span className="text-sm font-bold text-forest">{formatPrice(p.price)}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="px-2 py-3 text-ink-soft">Aucun produit ne correspond à « {q} ». Essayez un autre mot.</p>
            )}
            <button type="button" onClick={submit} className="mt-3 inline-flex items-center gap-1.5 px-2 font-bold text-forest hover:underline">
              Voir tous les résultats <ArrowRight className="size-4" aria-hidden />
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
