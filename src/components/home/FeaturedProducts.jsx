import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import ProductGrid from '../products/ProductGrid'
import { products } from '../../data/products'

export default function FeaturedProducts() {
  const featured = products.filter((p) => p.featured).sort((a, b) => b.popularity - a.popularity).slice(0, 4)
  return (
    <section aria-labelledby="featured-title" className="bg-cream-200/60 py-16 sm:py-24">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow mb-3">Les préférés de nos clients</p>
            <h2 id="featured-title" className="text-[2.3rem] sm:text-5xl">
              Nos douceurs les plus aimées
            </h2>
          </div>
          <Link to="/products?sort=popular" className="inline-flex items-center gap-2 font-bold text-forest hover:underline">
            Tout voir <ArrowRight className="size-4" aria-hidden />
          </Link>
        </div>
        <div className="mt-10">
          <ProductGrid products={featured} columns="sm:grid-cols-2 lg:grid-cols-4" />
        </div>
      </div>
    </section>
  )
}
