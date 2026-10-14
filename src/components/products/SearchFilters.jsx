import { Search, RotateCcw } from 'lucide-react'
import { categories } from '../../data/categories'
import { siteConfig } from '../../config/siteConfig'
import { cn } from '../../utils/format'

/**
 * Panneau de filtres du catalogue : recherche, catégories, prix.
 * Contrôlé par la page (état stocké dans l'URL).
 */
export default function SearchFilters({ filters, setFilter, onReset, counts, idPrefix = 'f' }) {
  return (
    <div className="space-y-8">
      <div>
        <label htmlFor={`${idPrefix}-search`} className="mb-2 block font-bold text-forest">
          Rechercher
        </label>
        <div className="relative">
          <Search className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-ink-soft" aria-hidden />
          <input
            id={`${idPrefix}-search`}
            type="search"
            value={filters.q}
            onChange={(e) => setFilter('q', e.target.value)}
            placeholder="Rechercher une douceur…"
            className="field-input pl-12"
          />
        </div>
      </div>

      <fieldset>
        <legend className="mb-3 font-bold text-forest">Catégorie</legend>
        <div className="flex flex-wrap gap-2">
          {[{ id: 'all', name: 'Toutes' }, ...categories].map((c) => {
            const active = filters.category === c.id
            return (
              <button
                key={c.id}
                type="button"
                aria-pressed={active}
                onClick={() => setFilter('category', c.id)}
                className={cn(
                  'rounded-full border-2 px-4 py-2 text-[0.95rem] font-semibold transition-colors',
                  active ? 'border-forest bg-forest text-cream' : 'border-cream-300 bg-white text-ink hover:border-forest',
                )}
              >
                {c.name}
                {counts && <span className={cn('ml-1.5 text-sm', active ? 'text-gold' : 'text-ink-soft')}>{counts[c.id] ?? 0}</span>}
              </button>
            )
          })}
        </div>
      </fieldset>

      <fieldset>
        <legend className="mb-3 font-bold text-forest">Prix ({siteConfig.currency.symbol})</legend>
        <div className="space-y-1">
          {siteConfig.catalog.priceRanges.map((r) => (
            <label key={r.id} className="flex cursor-pointer items-center gap-3 rounded-xl px-2 py-2 hover:bg-cream-200">
              <input
                type="radio"
                name={`${idPrefix}-price`}
                value={r.id}
                checked={filters.price === r.id}
                onChange={() => setFilter('price', r.id)}
                className="size-5 accent-[#07543F]"
              />
              <span className="font-medium">{r.label}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <label className="flex cursor-pointer items-center gap-3 rounded-xl px-2 py-2 hover:bg-cream-200">
        <input type="checkbox" checked={filters.inStock} onChange={(e) => setFilter('inStock', e.target.checked)} className="size-5 accent-[#07543F]" />
        <span className="font-medium">Disponibles aujourd’hui uniquement</span>
      </label>

      <button type="button" onClick={onReset} className="inline-flex items-center gap-2 font-bold text-forest hover:underline">
        <RotateCcw className="size-4" aria-hidden /> Réinitialiser les filtres
      </button>
    </div>
  )
}
