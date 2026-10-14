import { cn } from '../../utils/format'

/**
 * Champ de formulaire accessible : libellé, aide, message d'erreur relié
 * par aria-describedby, aria-invalid.
 */
export default function FormField({ id, label, error, hint, optional, as = 'input', className, ...props }) {
  const Cmp = as
  const describedBy = [hint && `${id}-hint`, error && `${id}-error`].filter(Boolean).join(' ') || undefined
  return (
    <div className={cn('flex flex-col gap-1.5', className)}>
      <label htmlFor={id} className="font-semibold text-ink">
        {label} {optional && <span className="font-normal text-ink-soft">(facultatif)</span>}
      </label>
      <Cmp
        id={id}
        name={id}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={describedBy}
        className={cn('field-input', as === 'textarea' && 'min-h-36 resize-y')}
        {...props}
      />
      {hint && !error && (
        <p id={`${id}-hint`} className="text-sm text-ink-soft">
          {hint}
        </p>
      )}
      {error && (
        <p id={`${id}-error`} className="text-sm font-semibold text-[#B3261E]">
          {error}
        </p>
      )}
    </div>
  )
}
