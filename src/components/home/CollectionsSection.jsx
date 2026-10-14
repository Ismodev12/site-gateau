import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import ImagePlaceholder from '../ui/ImagePlaceholder'
import { WheatDoodle, SwirlDoodle } from '../ui/Doodles'
import { collections } from '../../data/collections'
import { homeContent } from '../../config/siteConfig'

export default function CollectionsSection() {
  const { collections: c } = homeContent
  return (
    <section aria-labelledby="collections-title" className="relative py-16 sm:py-24">
      <SwirlDoodle className="absolute right-[6%] top-16 hidden h-10 w-24 text-forest/40 md:block" />
      <div className="container-x">
        <div className="flex items-start gap-3">
          <WheatDoodle className="mt-1 hidden size-12 shrink-0 text-gold sm:block" />
          <div>
            <h2 id="collections-title" className="text-[2.2rem] sm:text-5xl">
              {c.titleStart} <span className="script block text-[1.2em] text-forest sm:inline">{c.titleScript}</span>
            </h2>
            <p className="mt-3 max-w-xl text-lg text-ink-soft">{c.text}</p>
          </div>
        </div>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {collections.map((col) => (
            <li key={col.id}>
              <Link
                to={`/products?collection=${col.id}`}
                className="group flex items-center gap-4 rounded-[1.75rem] bg-white p-3 shadow-[var(--shadow-card)] transition-transform duration-300 hover:-translate-y-1 sm:flex-col sm:items-stretch sm:gap-0"
              >
                <ImagePlaceholder
                  src={col.image}
                  alt={col.title}
                  ratio="aspect-square sm:aspect-[4/3]"
                  className="w-24 shrink-0 rounded-[1.25rem] sm:w-full"
                  imgClassName="transition-transform duration-500 group-hover:scale-105"
                  showLabel={false}
                />
                <div className="flex flex-1 items-center justify-between gap-3 sm:px-2 sm:pb-2 sm:pt-4">
                  <div>
                    <h3 className="text-lg leading-tight text-ink sm:text-xl">{col.title}</h3>
                    <p className="text-[0.95rem] text-ink-soft">{col.subtitle}</p>
                    <p className="mt-2 hidden text-[0.95rem] text-ink-soft sm:block">{col.description}</p>
                  </div>
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-gold text-ink transition-transform group-hover:translate-x-1">
                    <ArrowRight className="size-4" aria-hidden />
                    <span className="sr-only">Découvrir : {col.title}</span>
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
