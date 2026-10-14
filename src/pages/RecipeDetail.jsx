import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Clock, Flame, Users, ChefHat, Check } from 'lucide-react'
import Breadcrumbs from '../components/ui/Breadcrumbs'
import ImagePlaceholder from '../components/ui/ImagePlaceholder'
import RecipeCard from '../components/recipes/RecipeCard'
import Button from '../components/ui/Button'
import { BrushBlob } from '../components/ui/Doodles'
import NotFound from './NotFound'
import { getRecipeBySlug, getRelatedRecipes } from '../data/recipes'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import { formatDate, cn } from '../utils/format'

export default function RecipeDetail() {
  const { slug } = useParams()
  const recipe = getRecipeBySlug(slug)
  useDocumentTitle(recipe?.title ?? 'Recette introuvable')
  if (!recipe) {
    return <NotFound title="Cette recette n’est pas dans notre carnet" text="Elle a peut-être été déplacée ou renommée." backTo="/recipes" backLabel="Voir toutes les recettes" />
  }
  return <RecipeContent key={recipe.slug} recipe={recipe} />
}

function RecipeContent({ recipe }) {
  const [checked, setChecked] = useState([])
  const toggle = (i) => setChecked((c) => (c.includes(i) ? c.filter((x) => x !== i) : [...c, i]))
  const related = getRelatedRecipes(recipe)
  const facts = [
    { icon: Clock, label: 'Préparation', value: recipe.prepTime },
    { icon: Flame, label: 'Cuisson', value: recipe.cookTime },
    { icon: Users, label: 'Quantité', value: recipe.servings },
    { icon: ChefHat, label: 'Difficulté', value: recipe.difficulty },
  ]

  return (
    <>
      <article className="container-x pb-16 pt-8 sm:pb-24">
        <Breadcrumbs items={[{ label: 'Accueil', to: '/' }, { label: 'Recettes', to: '/recipes' }, { label: recipe.title }]} />

        <header className="mt-8 grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <p className="eyebrow">{recipe.category}</p>
            <h1 className="mt-3 text-[2.5rem] sm:text-6xl">{recipe.title}</h1>
            <p className="mt-3 text-ink-soft">
              <time dateTime={recipe.date}>{formatDate(recipe.date)}</time> <span className="font-semibold text-gold-600">· date de démo</span>
            </p>
            <p className="mt-6 text-xl leading-relaxed">{recipe.intro}</p>
          </div>
          <div className="relative">
            <BrushBlob className="absolute -right-6 -top-6 w-1/2 text-gold" />
            <ImagePlaceholder src={recipe.image} alt={recipe.title} ratio="aspect-[4/3]" priority className="relative rounded-[2.5rem] border-8 border-white shadow-[var(--shadow-soft)]" />
          </div>
        </header>

        <dl className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {facts.map((f) => (
            <div key={f.label} className="rounded-[1.5rem] bg-forest p-5 text-cream">
              <f.icon className="size-6 text-gold" aria-hidden />
              <dt className="mt-3 text-sm text-cream/75">{f.label}</dt>
              <dd className="text-lg font-bold">{f.value}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-14 grid gap-10 lg:grid-cols-[360px_1fr] lg:gap-14">
          <section aria-labelledby="ingredients-title">
            <div className="rounded-[1.75rem] bg-gold-100 p-6 sm:p-8 lg:sticky lg:top-28">
              <h2 id="ingredients-title" className="text-3xl">
                Ingrédients
              </h2>
              <p className="mt-1 text-sm text-ink-soft">Touchez pour cocher au fur et à mesure.</p>
              <ul className="mt-5 space-y-2">
                {recipe.ingredients.map((ing, i) => (
                  <li key={ing}>
                    <button
                      type="button"
                      onClick={() => toggle(i)}
                      aria-pressed={checked.includes(i)}
                      className="flex w-full items-start gap-3 rounded-xl px-2 py-1.5 text-left hover:bg-cream/70"
                    >
                      <span
                        className={cn(
                          'mt-0.5 grid size-6 shrink-0 place-items-center rounded-md border-2 border-forest',
                          checked.includes(i) && 'bg-forest text-cream',
                        )}
                      >
                        {checked.includes(i) && <Check className="size-4" aria-hidden />}
                      </span>
                      <span className={cn(checked.includes(i) && 'text-ink-soft line-through')}>{ing}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section aria-labelledby="steps-title">
            <h2 id="steps-title" className="text-3xl">
              Préparation
            </h2>
            <ol className="mt-6 space-y-5">
              {recipe.steps.map((step, i) => (
                <li key={i} className="flex gap-5 rounded-[1.5rem] bg-white p-5 shadow-[var(--shadow-card)] sm:p-6">
                  <span className="grid size-11 shrink-0 place-items-center rounded-full bg-gold text-lg font-extrabold text-ink">{i + 1}</span>
                  <p className="pt-1.5 text-lg leading-relaxed">{step}</p>
                </li>
              ))}
            </ol>
            <div className="mt-10 rounded-[1.75rem] bg-forest p-6 text-cream sm:p-8">
              <p className="script text-3xl text-gold">Pas le temps de pâtisser ?</p>
              <p className="mt-2 text-cream/85">Laissez-nous faire — nos douceurs sont préparées fraîches chaque jour.</p>
              <Button to="/products" className="mt-5" arrow>
                Commander à la pâtisserie
              </Button>
            </div>
          </section>
        </div>
      </article>

      <section aria-labelledby="related-recipes" className="bg-cream-200/60 py-16 sm:py-20">
        <div className="container-x">
          <h2 id="related-recipes" className="text-[2.2rem] sm:text-5xl">
            D’autres recettes <span className="script text-[1.15em]">à essayer</span>
          </h2>
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((r) => (
              <li key={r.slug}>
                <RecipeCard recipe={r} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
