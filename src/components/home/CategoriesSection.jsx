import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import CategoryCard from '../products/CategoryCard'
import { categories } from '../../data/categories'
import { homeContent } from '../../config/siteConfig'
import { SparkleDoodle } from '../ui/Doodles'

export default function CategoriesSection() {
  const { categories: c } = homeContent
  const homeCategories = categories.filter((x) => x.showOnHome)
  return (
    <section aria-labelledby="categories-title" className="relative py-16 sm:py-24">
      <SparkleDoodle className="absolute right-[8%] top-10 hidden size-10 text-gold md:block" />
      <div className="container-x">
        <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr] lg:items-end">
          <div>
            <p className="eyebrow mb-3">{c.eyebrow}</p>
            <h2 id="categories-title" className="max-w-xl text-[2.3rem] sm:text-5xl lg:text-[3.4rem]">
              {c.titleStart} <span className="text-ink">{c.titleEnd}</span>
            </h2>
          </div>
          <div className="lg:pb-2">
            <p className="text-lg text-ink-soft">{c.text}</p>
            <Link to="/products" className="mt-3 inline-flex items-center gap-2 font-bold text-forest hover:underline">
              Voir tous les produits <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>
        </div>
        <ul className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {homeCategories.map((cat) => (
            <li key={cat.id}>
              <CategoryCard category={cat} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
