import { CookieDoodle } from './Doodles'
import Button from './Button'

export default function EmptyState({ title, text, actionLabel, actionTo, onAction, icon }) {
  return (
    <div className="mx-auto flex max-w-lg flex-col items-center rounded-[2rem] bg-cream-200 px-6 py-14 text-center">
      <div className="mb-5 grid size-24 place-items-center rounded-full bg-gold-100 text-forest">
        {icon ?? <CookieDoodle className="size-14" />}
      </div>
      <h2 className="text-2xl sm:text-3xl">{title}</h2>
      {text && <p className="mt-3 text-ink-soft">{text}</p>}
      {actionLabel && (
        <Button to={actionTo} onClick={onAction} className="mt-7" arrow>
          {actionLabel}
        </Button>
      )}
    </div>
  )
}
