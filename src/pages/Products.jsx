import { useEffect, useMemo, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X } from 'lucide-react'
import PageHeader from '../components/ui/PageHeader'
import SearchFilters from '../components/products/SearchFilters'
import ProductGrid from '../components/products/ProductGrid'
import EmptyState from '../components/ui/EmptyState'
import Button from '../components/ui/Button'
import { products } from '../data/products'
import { categories, getCategory } from '../data/categories'
import { getCollection } from '../data/collections'
import { siteConfig } from '../config/siteConfig'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import { useFocusTrap } from '../hooks/useFocusTrap'

const SORTS = [
  { id: 'popular', label: 'Les plus populaires' },
  { id: 'newest', label: 'Nouveautés' },
  { id: 'price-asc', label: 'Prix croissant' },
  { id: 'price-desc', label: 'Prix décroissant' },
  { id: 'name', label: 'Nom (A–Z)' },
]
const DEFAULTS = { q: '', category: 'all', price: 'all', sort: 'popular', inStock: false, collection: '' }

export default function Products() {
  useDocumentTitle('Produits')
  const [params, setParams] = useSearchParams()
  const { pageSize, priceRanges } = siteConfig.catalog

  // L'état des filtres vit dans l'URL : liens partageables et bouton « retour » fonctionnel
  const filters = {
    q: params.get('q') ?? DEFAULTS.q,
    category: categories.some((c) => c.id === params.get('category')) ? params.get('category') : 'all',
    price: priceRanges.some((r) => r.id === params.get('price')) ? params.get('price') : 'all',
    sort: SORTS.some((s) => s.id === params.get('sort')) ? params.get('sort') : DEFAULTS.sort,
    inStock: params.get('available') === '1',
    collection: getCollection(params.get('collection')) ? params.get('collection') : '',
  }

  const setFilter = (key, value) => {
    const next = new URLSearchParams(params)
    const urlKey = key === 'inStock' ? 'available' : key
    const isDefault = value === DEFAULTS[key] || value === '' || value === false
    if (isDefault) next.delete(urlKey)
    else next.set(urlKey, value === true ? '1' : value)
    setParams(next, { replace: key === 'q' })
  }
  const reset = () => setParams({})

  const [visible, setVisible] = useState(pageSize)
  const paramsKey = params.toString()
  useEffect(() => setVisible(pageSize), [paramsKey, pageSize])

  // Produits filtrés sans le filtre de catégorie (pour les compteurs)
  const baseFiltered = useMemo(() => {
    const term = filters.q.trim().toLowerCase()
    const range = priceRanges.find((r) => r.id === filters.price)
    return products.filter((p) => {
      if (term && !`${p.name} ${p.shortDescription} ${p.category}`.toLowerCase().includes(term)) return false
      if (range && (p.price < range.min || p.price > range.max)) return false
      if (filters.inStock && p.availability === 'out-of-stock') return false
      if (filters.collection && !p.collections.includes(filters.collection)) return false
      return true
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters.q, filters.price, filters.inStock, filters.collection])

  const counts = useMemo(() => {
    const c = { all: baseFiltered.length }
    for (const p of baseFiltered) c[p.category] = (c[p.category] ?? 0) + 1
    return c
  }, [baseFiltered])

  const results = useMemo(() => {
    const list = filters.category === 'all' ? [...baseFiltered] : baseFiltered.filter((p) => p.category === filters.category)
    const sorters = {
      popular: (a, b) => b.popularity - a.popularity,
      newest: (a, b) => b.createdAt.localeCompare(a.createdAt),
      'price-asc': (a, b) => a.price - b.price,
      'price-desc': (a, b) => b.price - a.price,
      name: (a, b) => a.name.localeCompare(b.name),
    }
    return list.sort(sorters[filters.sort])
  }, [baseFiltered, filters.category, filters.sort])

  const shown = results.slice(0, visible)
  const activeCategory = getCategory(filters.category)
  const activeCollection = getCollection(filters.collection)
  const activeChips = [
    activeCategory && { key: 'category', label: activeCategory.name },
    activeCollection && { key: 'collection', label: activeCollection.title },
    filters.price !== 'all' && { key: 'price', label: priceRanges.find((r) => r.id === filters.price)?.label },
    filters.q && { key: 'q', label: `« ${filters.q} »` },
    filters.inStock && { key: 'inStock', label: 'Disponibles aujourd’hui' },
  ].filter(Boolean)

  // Panneau de filtres mobile
  const [panelOpen, setPanelOpen] = useState(false)
  const panelRef = useRef(null)
  const closePanel = useRef(() => setPanelOpen(false)).current
  useFocusTrap(panelRef, panelOpen, closePanel)

  return (
    <>
      <PageHeader
        script={activeCollection ? activeCollection.subtitle : 'Notre carte'}
        title={activeCollection ? activeCollection.title : activeCategory ? activeCategory.name : 'La boutique gourmande'}
        text={
          activeCollection?.description ??
          activeCategory?.description ??
          'Cookies, cupcakes, brownies, donuts, viennoiseries et pâtisseries — préparés chaque jour et prêts à commander.'
        }
        breadcrumbs={[{ label: 'Accueil', to: '/' }, { label: 'Produits', to: activeCategory || activeCollection ? '/products' : undefined }, ...(activeCategory ? [{ label: activeCategory.name }] : activeCollection ? [{ label: activeCollection.title }] : [])]}
      />

      <section className="container-x pb-20" aria-label="Catalogue des produits">
        <div className="grid gap-10 lg:grid-cols-[280px_1fr]">
          {/* Filtres desktop */}
          <aside className="hidden lg:block" aria-label="Filtres">
            <div className="sticky top-28 rounded-[1.75rem] bg-white p-6 shadow-[var(--shadow-card)]">
              <SearchFilters filters={filters} setFilter={setFilter} onReset={reset} counts={counts} idPrefix="desk" />
            </div>
          </aside>

          <div>
            {/* Barre d'outils */}
            <div className="flex flex-wrap items-center justify-between gap-4 rounded-[1.5rem] bg-cream-200 px-4 py-3 sm:px-5">
              <p className="font-semibold" aria-live="polite">
                <span className="text-forest">{results.length}</span> {results.length > 1 ? 'produits trouvés' : 'produit trouvé'}
              </p>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setPanelOpen(true)}
                  className="inline-flex h-11 items-center gap-2 rounded-full border-2 border-forest px-4 font-bold text-forest lg:hidden"
                >
                  <SlidersHorizontal className="size-4" aria-hidden /> Filtres
                  {activeChips.length > 0 && <span className="rounded-full bg-gold px-2 text-sm text-ink">{activeChips.length}</span>}
                </button>
                <label htmlFor="sort" className="sr-only">
                  Trier les produits
                </label>
                <select
                  id="sort"
                  value={filters.sort}
                  onChange={(e) => setFilter('sort', e.target.value)}
                  className="field-input h-11 w-auto py-0 pr-9 font-semibold"
                >
                  {SORTS.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {activeChips.length > 0 && (
              <ul className="mt-4 flex flex-wrap items-center gap-2" aria-label="Filtres actifs">
                {activeChips.map((chip) => (
                  <li key={chip.key}>
                    <button
                      type="button"
                      onClick={() => setFilter(chip.key, DEFAULTS[chip.key])}
                      className="inline-flex items-center gap-1.5 rounded-full bg-forest px-3.5 py-1.5 text-sm font-semibold text-cream hover:bg-forest-700"
                      aria-label={`Retirer le filtre ${chip.label}`}
                    >
                      {chip.label} <X className="size-3.5" aria-hidden />
                    </button>
                  </li>
                ))}
                <li>
                  <button type="button" onClick={reset} className="px-2 text-sm font-bold text-forest underline">
                    Tout effacer
                  </button>
                </li>
              </ul>
            )}

            <div className="mt-8">
              {results.length === 0 ? (
                <EmptyState
                  title="Aucune douceur ne correspond à votre recherche"
                  text="Essayez un autre mot, une autre catégorie ou réinitialisez les filtres."
                  actionLabel="Réinitialiser les filtres"
                  onAction={reset}
                />
              ) : (
                <>
                  <ProductGrid products={shown} columns="sm:grid-cols-2 xl:grid-cols-3" />
                  <div className="mt-12 flex flex-col items-center gap-4">
                    <p className="text-ink-soft">
                      {shown.length} sur {results.length} affichés
                    </p>
                    <div className="h-2 w-56 overflow-hidden rounded-full bg-cream-300" aria-hidden>
                      <div className="h-full rounded-full bg-gold" style={{ width: `${(shown.length / results.length) * 100}%` }} />
                    </div>
                    {visible < results.length && (
                      <Button variant="outline" onClick={() => setVisible((v) => v + pageSize)}>
                        Voir plus de produits
                      </Button>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {panelOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div className="animate-fade-in absolute inset-0 bg-forest-900/50" onClick={() => setPanelOpen(false)} aria-hidden />
          <div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="filters-title"
            className="animate-slide-in absolute inset-y-0 right-0 flex w-full max-w-sm flex-col bg-cream"
          >
            <div className="flex items-center justify-between border-b border-cream-300 px-5 py-4">
              <h2 id="filters-title" className="text-2xl">
                Filtres
              </h2>
              <button type="button" onClick={() => setPanelOpen(false)} className="grid size-11 place-items-center rounded-full text-forest hover:bg-forest-100" aria-label="Fermer les filtres">
                <X className="size-6" aria-hidden />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-5 py-6">
              <SearchFilters filters={filters} setFilter={setFilter} onReset={reset} counts={counts} idPrefix="mob" />
            </div>
            <div className="border-t border-cream-300 p-5">
              <Button className="w-full" onClick={() => setPanelOpen(false)}>
                Voir {results.length} {results.length > 1 ? 'produits' : 'produit'}
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
