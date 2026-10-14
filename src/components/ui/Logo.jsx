import { Link } from 'react-router-dom'
import { siteConfig } from '../../config/siteConfig'
import { cn } from '../../utils/format'

export default function Logo({ light = false, className }) {
  return (
    <Link to="/" className={cn('inline-flex flex-col leading-none', className)} aria-label={`${siteConfig.brand.fullName} — accueil`}>
      <span className={cn('text-[1.2rem] font-extrabold sm:text-[1.45rem] tracking-tight', light ? 'text-cream' : 'text-forest')}>
        {siteConfig.brand.name}
      </span>
      <span className="script -mt-0.5 ml-4 text-[1.2rem] sm:ml-5 sm:text-[1.45rem] text-gold">{siteConfig.brand.suffix}</span>
    </Link>
  )
}
