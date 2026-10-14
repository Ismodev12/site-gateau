import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail } from 'lucide-react'
import Logo from '../ui/Logo'
import SocialIcon from '../ui/SocialIcon'
import { LeafDoodle, HeartDoodle } from '../ui/Doodles'
import { siteConfig } from '../../config/siteConfig'
import { categories } from '../../data/categories'

export default function Footer() {
  const { contact, social, navigation, legalLinks, brand } = siteConfig
  const year = new Date().getFullYear()
  return (
    <footer className="on-dark relative overflow-hidden bg-forest-900 text-cream">
      <LeafDoodle className="pointer-events-none absolute -left-4 top-10 size-28 text-forest-700" />
      <HeartDoodle className="pointer-events-none absolute right-8 top-12 size-10 text-gold/60" />
      <div className="container-x relative grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
        <div>
          <Logo light />
          <p className="mt-5 max-w-xs text-cream/80">{brand.description}</p>
          <ul className="mt-6 flex gap-2">
            {social.map((s) => (
              <li key={s.name}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="grid size-11 place-items-center rounded-full bg-forest text-cream transition-colors hover:bg-gold hover:text-ink"
                  aria-label={`${s.name} (s’ouvre dans un nouvel onglet)`}
                >
                  <SocialIcon name={s.icon} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label="Pages du pied de page">
          <h2 className="text-lg font-bold text-gold">Explorer</h2>
          <ul className="mt-4 space-y-2.5">
            {navigation.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-cream/85 hover:text-gold">
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/cart" className="text-cream/85 hover:text-gold">
                Panier
              </Link>
            </li>
          </ul>
        </nav>

        <nav aria-label="Catégories">
          <h2 className="text-lg font-bold text-gold">Notre carte</h2>
          <ul className="mt-4 space-y-2.5">
            {categories.map((c) => (
              <li key={c.id}>
                <Link to={`/products?category=${c.id}`} className="text-cream/85 hover:text-gold">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-lg font-bold text-gold">Nous trouver</h2>
          <ul className="mt-4 space-y-3 text-cream/85">
            <li className="flex gap-3">
              <MapPin className="mt-1 size-5 shrink-0 text-gold" aria-hidden />
              <span>
                {contact.address}, {contact.city}
              </span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-1 size-5 shrink-0 text-gold" aria-hidden />
              <a href={contact.phoneHref} className="hover:text-gold">
                {contact.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-1 size-5 shrink-0 text-gold" aria-hidden />
              <a href={`mailto:${contact.email}`} className="break-all hover:text-gold">
                {contact.email}
              </a>
            </li>
          </ul>
          {contact.isDemo && <p className="mt-4 text-sm text-cream/60">Coordonnées de démonstration — à remplacer.</p>}
        </div>
      </div>

      <div className="border-t border-forest-700">
        <div className="container-x flex flex-col gap-3 py-6 text-sm text-cream/70 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {brand.fullName}. Tous droits réservés.
          </p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {legalLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-gold">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
