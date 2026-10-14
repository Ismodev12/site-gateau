import { useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import PageHeader from '../components/ui/PageHeader'
import RecipeCard from '../components/recipes/RecipeCard'
import EmptyState from '../components/ui/EmptyState'
import { recipes, recipeCategories } from '../data/recipes'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import { cn } from '../utils/format'

export default function Recipes() {
  useDocumentTitle('Recettes')
  const [category, setCategory] = useState('Toutes')
  const [q, setQ] = useState('')

  const results = useMemo(() => {
    const term = q.trim().toLowerCase()
    return recipes
      .filter((r) => category === 'Toutes' || r.category === category)
      .filter((r) => !term || `${r.title} ${r.excerpt} ${r.category}`.toLowerCase().includes(term))
      .sort((a, b) => b.date.localeCompare(a.date))
  }, [category, q])

  return (
    <>
      <PageHeader
        script="Depuis notre cuisine"
        title="Recettes & astuces pâtissières"
        text="Nos recettes préférées, nos petits secrets et nos conseils pour réussir de belles douceurs à la maison."
        breadcrumbs={[{ label: 'Accueil', to: '/' }, { label: 'Recettes' }]}
      />
      <section className="container-x pb-20">
        <div className="flex flex-col gap-5 rounded-[1.75rem] bg-white p-4 shadow-[var(--shadow-card)] sm:p-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-2" role="group" aria-label="Catégories de recettes">
            {recipeCategories.map((c) => (
              <button
                key={c}
                type="button"
                aria-pressed={category === c}
                onClick={() => setCategory(c)}
                className={cn(
                  'rounded-full border-2 px-4 py-2 font-semibold transition-colors',
                  category === c ? 'border-forest bg-forest text-cream' : 'border-cream-300 hover:border-forest',
                )}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="relative lg:w-80">
            <label htmlFor="recipe-search" className="sr-only">
              Rechercher une recette
            </label>
            <Search className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-ink-soft" aria-hidden />
            <input id="recipe-search" type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Rechercher une recette…" className="field-input pl-12" />
          </div>
        </div>

        <p className="mt-6 font-semibold" aria-live="polite">
          {results.length} {results.length > 1 ? 'articles' : 'article'}
        </p>

        <div className="mt-6">
          {results.length ? (
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {results.map((r) => (
                <li key={r.slug}>
                  <RecipeCard recipe={r} />
                </li>
              ))}
            </ul>
          ) : (
            <EmptyState
              title="Aucune recette trouvée"
              text="Essayez un autre mot-clé ou une autre catégorie."
              actionLabel="Voir toutes les recettes"
              onAction={() => {
                setQ('')
                setCategory('Toutes')
              }}
            />
          )}
        </div>
      </section>
    </>
  )
}
