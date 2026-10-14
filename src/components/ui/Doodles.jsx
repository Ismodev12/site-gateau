/**
 * Illustrations décoratives « dessinées à la main » (SVG inline).
 * Elles héritent de la couleur du texte (currentColor) et sont masquées
 * aux lecteurs d'écran.
 */
const base = { fill: 'none', stroke: 'currentColor', strokeWidth: 2.2, strokeLinecap: 'round', strokeLinejoin: 'round' }

export function CookieDoodle({ className }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <path {...base} d="M32 6c5 0 6 5 10 6s9-1 11 4-2 8 0 12 6 8 2 12-9 2-12 6-3 12-11 12-8-6-12-7-10 1-12-5 3-9 1-13-6-8-2-12 9-1 12-6S27 6 32 6z" />
      <circle cx="24" cy="24" r="2.6" fill="currentColor" />
      <circle cx="38" cy="22" r="2" fill="currentColor" />
      <circle cx="40" cy="38" r="2.6" fill="currentColor" />
      <circle cx="26" cy="40" r="2" fill="currentColor" />
      <circle cx="33" cy="31" r="1.6" fill="currentColor" />
    </svg>
  )
}

export function HeartDoodle({ className }) {
  return (
    <svg viewBox="0 0 40 36" className={className} aria-hidden="true">
      <path {...base} d="M20 32C9 24 4 18 5 11c1-6 9-8 13-2l2 3 2-3c4-6 12-4 13 2 1 7-4 13-15 21z" />
    </svg>
  )
}

export function LeafDoodle({ className }) {
  return (
    <svg viewBox="0 0 60 60" className={className} aria-hidden="true">
      <path {...base} d="M8 52C20 40 30 26 52 8" />
      <path {...base} d="M20 40c-6-2-9-8-8-14 6 1 10 6 8 14zM28 31c-2-7 1-13 7-16 2 6-1 12-7 16zM32 27c6-3 13-1 16 4-6 3-12 1-16-4zM22 38c5-4 12-4 16 0-5 4-11 4-16 0z" />
    </svg>
  )
}

export function SwirlDoodle({ className }) {
  return (
    <svg viewBox="0 0 80 40" className={className} aria-hidden="true">
      <path {...base} d="M4 30c10-18 26-22 30-12s-8 16-12 8 10-20 26-18 22 10 28 4" />
    </svg>
  )
}

export function SparkleDoodle({ className }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <path {...base} d="M20 4v10M20 26v10M4 20h10M26 20h10M9 9l5 5M26 26l5 5M31 9l-5 5M14 26l-5 5" />
    </svg>
  )
}

export function WheatDoodle({ className }) {
  return (
    <svg viewBox="0 0 60 60" className={className} aria-hidden="true">
      <path {...base} d="M10 54L46 14" />
      <path {...base} d="M40 12c2-5 7-7 10-6-1 4-5 8-10 6zM34 19c0-6 3-10 8-11 0 5-3 9-8 11zM38 22c4-4 9-5 12-3-3 4-8 5-12 3zM28 26c0-6 3-10 8-11 0 5-3 9-8 11zM32 30c4-4 9-5 12-3-3 4-8 5-12 3zM22 33c0-6 3-10 8-11 0 5-3 9-8 11zM26 37c4-4 9-5 12-3-3 4-8 5-12 3z" />
    </svg>
  )
}

export function CurlyArrow({ className }) {
  return (
    <svg viewBox="0 0 70 50" className={className} aria-hidden="true">
      <path {...base} d="M4 8c18-6 36 2 34 14s-16 8-12-2 24-10 34 18" />
      <path {...base} d="M54 30l6 9 4-10" />
    </svg>
  )
}

/** Trace de pinceau jaune (fond de la Hero, de la bannière…) */
export function BrushBlob({ className }) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M46 38c28-26 82-30 112-6 26 20 40 56 30 92-9 33-38 60-74 64-38 5-78-14-94-48C4 108 17 64 46 38z"
      />
      <path fill="currentColor" opacity=".55" d="M170 40c8 4 14 12 13 18-6-2-12-8-13-18zM20 150c6 2 10 8 9 14-5-2-9-7-9-14z" />
    </svg>
  )
}
