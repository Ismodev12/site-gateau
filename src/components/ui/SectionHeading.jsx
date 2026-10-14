import { cn } from '../../utils/format'

export default function SectionHeading({ eyebrow, title, script, text, align = 'left', className, as: Tag = 'h2' }) {
  return (
    <div className={cn(align === 'center' && 'mx-auto text-center', 'max-w-2xl', className)}>
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <Tag className="text-[2.1rem] sm:text-5xl">
        {title}
        {script && <span className="script block text-[1.15em] font-bold text-forest sm:inline sm:pl-3">{script}</span>}
      </Tag>
      {text && <p className="mt-4 text-lg text-ink-soft">{text}</p>}
    </div>
  )
}
