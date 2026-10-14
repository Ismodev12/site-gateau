import { Link } from 'react-router-dom'
import { Clock, ArrowRight } from 'lucide-react'
import ImagePlaceholder from '../ui/ImagePlaceholder'
import { formatDate } from '../../utils/format'

export default function RecipeCard({ recipe }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] bg-white shadow-[var(--shadow-card)] transition-transform duration-300 hover:-translate-y-1">
      <div className="relative">
        <ImagePlaceholder src={recipe.image} alt={recipe.title} ratio="aspect-[4/3]" imgClassName="transition-transform duration-500 group-hover:scale-105" />
        <span className="absolute left-4 top-4 rounded-full bg-cream px-3 py-1 text-sm font-bold text-forest">{recipe.category}</span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-ink-soft">
          <span>
            <time dateTime={recipe.date}>{formatDate(recipe.date)}</time> <span className="font-semibold text-gold-600">(date de démo)</span>
          </span>
          <span className="inline-flex items-center gap-1">
            <Clock className="size-4" aria-hidden /> {recipe.prepTime}
          </span>
        </p>
        <h3 className="mt-3 text-2xl leading-tight">
          <Link to={`/recipes/${recipe.slug}`} className="after:absolute after:inset-0 hover:underline">
            {recipe.title}
          </Link>
        </h3>
        <p className="mt-3 text-ink-soft">{recipe.excerpt}</p>
        <span className="mt-auto inline-flex items-center gap-1.5 pt-5 font-bold text-forest">
          Lire la recette <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
        </span>
      </div>
    </article>
  )
}
