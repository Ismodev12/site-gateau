import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import ImagePlaceholder from '../ui/ImagePlaceholder'
import { toneClasses } from '../../data/categories'
import { cn } from '../../utils/format'

/** Grande carte de catégorie (page d'accueil) — mène au catalogue filtré */
export default function CategoryCard({ category }) {
  const dark = category.tone === 'forest'
  return (
    <Link
      to={`/products?category=${category.id}`}
      className="group flex flex-col rounded-[1.75rem] bg-white p-2.5 shadow-[var(--shadow-card)] transition-transform duration-300 hover:-translate-y-1.5"
    >
      <div className={cn('relative overflow-hidden rounded-[1.4rem]', toneClasses[category.tone])}>
        <ImagePlaceholder
          src={category.image}
          alt={category.homeLabel}
          ratio="aspect-[5/4]"
          surface={cn(toneClasses[category.tone], dark ? 'text-cream' : 'text-forest')}
          imgClassName="transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex items-center justify-between gap-3 px-3 py-4">
        <h3 className="text-xl text-ink">{category.homeLabel}</h3>
        <span className="grid size-11 shrink-0 place-items-center rounded-full border-2 border-cream-300 bg-cream text-forest transition-colors group-hover:border-forest group-hover:bg-forest group-hover:text-cream">
          <ChevronRight className="size-5" aria-hidden />
          <span className="sr-only">Découvrir : {category.homeLabel}</span>
        </span>
      </div>
    </Link>
  )
}
