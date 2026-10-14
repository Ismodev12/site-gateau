import { useEffect, useState } from 'react'
import { cn } from '../../utils/format'

/**
 * Emplacement d'image robuste.
 * - Affiche l'image si elle existe.
 * - Sinon, garde exactement les proportions avec une surface crème
 *   décorée, sans jamais montrer d'icône d'image cassée.
 * - En développement (npm run dev), une petite étiquette « Image à ajouter »
 *   indique le chemin attendu.
 *
 * props :
 *  src, alt          — chemin (voir config/imagePaths.js) et texte alternatif
 *  ratio             — classe Tailwind de proportion (ex. 'aspect-square')
 *  fit               — 'cover' | 'contain'
 *  className         — classes du conteneur (arrondis, taille…)
 *  surface           — classes de fond utilisées tant que l'image manque
 *  imgClassName      — classes supplémentaires pour <img>
 *  priority          — charge l'image immédiatement (hero)
 */
export default function ImagePlaceholder({
  src,
  alt = '',
  ratio = 'aspect-square',
  fit = 'cover',
  className,
  surface = 'bg-cream-200 text-forest',
  imgClassName,
  priority = false,
  showLabel = true,
}) {
  const [status, setStatus] = useState(src ? 'loading' : 'error')

  useEffect(() => {
    setStatus(src ? 'loading' : 'error')
  }, [src])

  const missing = status === 'error'

  return (
    <div className={cn('relative overflow-hidden', ratio, missing || status === 'loading' ? surface : '', className)}>
      {missing && <PlaceholderArt />}
      {missing && showLabel && import.meta.env.DEV && (
        <span className="absolute bottom-2 left-1/2 z-10 max-w-[90%] -translate-x-1/2 truncate rounded-full bg-cream/90 px-2.5 py-1 text-[11px] font-semibold text-forest shadow-sm">
          Image à ajouter{src ? ` · ${src.split('/').pop()}` : ''}
        </span>
      )}
      {src && !missing && (
        <img
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          onLoad={() => setStatus('loaded')}
          onError={() => setStatus('error')}
          className={cn(
            'absolute inset-0 h-full w-full transition-opacity duration-500',
            fit === 'contain' ? 'object-contain' : 'object-cover',
            status === 'loaded' ? 'opacity-100' : 'opacity-0',
            imgClassName,
          )}
        />
      )}
      {missing && alt && <span className="sr-only">{alt}</span>}
    </div>
  )
}

/** Motif discret affiché à la place d'une image manquante */
function PlaceholderArt() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid meet"
      className="absolute left-1/2 top-1/2 h-[42%] w-[42%] -translate-x-1/2 -translate-y-1/2 text-current opacity-[0.18]"
    >
      <circle cx="50" cy="50" r="36" fill="none" stroke="currentColor" strokeWidth="3" strokeDasharray="6 5" />
      <circle cx="40" cy="42" r="4.5" fill="currentColor" />
      <circle cx="58" cy="38" r="3.5" fill="currentColor" />
      <circle cx="56" cy="58" r="4.5" fill="currentColor" />
      <circle cx="40" cy="60" r="3" fill="currentColor" />
      <circle cx="66" cy="50" r="2.5" fill="currentColor" />
    </svg>
  )
}
