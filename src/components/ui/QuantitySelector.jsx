import { Minus, Plus } from 'lucide-react'
import { cn } from '../../utils/format'

/**
 * Sélecteur de quantité borné (min…max). Les saisies invalides
 * (texte, négatif, décimal, trop grand) sont corrigées automatiquement.
 */
export default function QuantitySelector({ value, onChange, min = 1, max = 20, size = 'md', label = 'Quantité', disabled }) {
  const clamp = (n) => Math.max(min, Math.min(max, Math.floor(Number(n)) || min))
  const btn = cn(
    'grid place-items-center rounded-full text-forest transition-colors hover:bg-forest-100 disabled:opacity-35 disabled:hover:bg-transparent',
    size === 'sm' ? 'size-8' : 'size-11',
  )
  return (
    <div
      className={cn(
        'inline-flex items-center rounded-full border-2 border-cream-300 bg-white',
        size === 'sm' ? 'p-0.5' : 'p-1',
        disabled && 'opacity-50',
      )}
    >
      <button type="button" className={btn} onClick={() => onChange(clamp(value - 1))} disabled={disabled || value <= min} aria-label={`Diminuer : ${label.toLowerCase()}`}>
        <Minus className="size-4" aria-hidden />
      </button>
      <input
        type="number"
        inputMode="numeric"
        min={min}
        max={max}
        value={value}
        disabled={disabled}
        aria-label={label}
        onChange={(e) => onChange(clamp(e.target.value))}
        className={cn(
          'bg-transparent text-center font-bold text-ink [appearance:textfield] focus:outline-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none',
          size === 'sm' ? 'w-8 text-sm' : 'w-12 text-lg',
        )}
      />
      <button type="button" className={btn} onClick={() => onChange(clamp(value + 1))} disabled={disabled || value >= max} aria-label={`Augmenter : ${label.toLowerCase()}`}>
        <Plus className="size-4" aria-hidden />
      </button>
    </div>
  )
}
