import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

/** items : [{ label, to? }] — le dernier élément est la page courante */
export default function Breadcrumbs({ items }) {
  return (
    <nav aria-label="Fil d’Ariane" className="text-[0.95rem]">
      <ol className="flex flex-wrap items-center gap-1.5 text-ink-soft">
        {items.map((item, i) => {
          const last = i === items.length - 1
          return (
            <li key={item.label} className="flex items-center gap-1.5">
              {item.to && !last ? (
                <Link to={item.to} className="font-medium hover:text-forest hover:underline">
                  {item.label}
                </Link>
              ) : (
                <span aria-current={last ? 'page' : undefined} className={last ? 'font-semibold text-forest' : ''}>
                  {item.label}
                </span>
              )}
              {!last && <ChevronRight className="size-4 opacity-60" aria-hidden />}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
