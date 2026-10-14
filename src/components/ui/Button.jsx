import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { cn } from '../../utils/format'

const variants = {
  primary: 'bg-gold text-ink hover:bg-gold-600 shadow-[0_10px_24px_-12px_rgb(245_166_35/0.9)]',
  dark: 'bg-forest text-cream hover:bg-forest-700',
  outline: 'border-2 border-forest text-forest hover:bg-forest hover:text-cream',
  light: 'bg-cream text-forest hover:bg-white',
  ghost: 'text-forest hover:bg-forest-100',
}
const sizes = {
  sm: 'h-10 px-4 text-sm gap-1.5',
  md: 'h-12 px-6 text-base gap-2',
  lg: 'h-14 px-8 text-[1.05rem] gap-2.5',
}

/**
 * Bouton polyvalent : rendu en <Link> si `to`, en <a> si `href`, sinon <button>.
 * `arrow` ajoute la flèche → animée au survol.
 */
export default function Button({ to, href, variant = 'primary', size = 'md', arrow = false, className, children, ...props }) {
  const classes = cn(
    'group inline-flex items-center justify-center rounded-full font-bold whitespace-nowrap transition-all duration-200 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50',
    variants[variant],
    sizes[size],
    className,
  )
  const content = (
    <>
      {children}
      {arrow && <ArrowRight className="size-[1.1em] transition-transform duration-200 group-hover:translate-x-1" aria-hidden />}
    </>
  )
  if (to) return <Link to={to} className={classes} {...props}>{content}</Link>
  if (href) return <a href={href} className={classes} {...props}>{content}</a>
  return <button type="button" className={classes} {...props}>{content}</button>
}
