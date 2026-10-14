import { Info } from 'lucide-react'
import { cn } from '../../utils/format'

/** Bandeau signalant un contenu ou un parcours de démonstration */
export default function DemoNotice({ children, className }) {
  return (
    <div role="note" className={cn('flex items-start gap-3 rounded-2xl border-2 border-dashed border-gold bg-gold-100/60 px-4 py-3 text-[0.95rem] text-ink', className)}>
      <Info className="mt-0.5 size-5 shrink-0 text-gold-600" aria-hidden />
      <div>{children}</div>
    </div>
  )
}
