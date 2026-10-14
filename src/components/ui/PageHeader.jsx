import Breadcrumbs from './Breadcrumbs'
import { BrushBlob, SparkleDoodle, CookieDoodle } from './Doodles'

/** En-tête éditorial des pages intérieures */
export default function PageHeader({ script, title, text, breadcrumbs, children }) {
  return (
    <header className="relative overflow-hidden bg-cream pb-12 pt-8 sm:pb-16 sm:pt-10">
      <div aria-hidden className="pointer-events-none absolute -right-24 -top-28 size-[22rem] rounded-full bg-forest blob opacity-95 sm:-right-10 sm:size-[26rem]" />
      <BrushBlob className="pointer-events-none absolute right-36 top-24 hidden size-40 text-gold md:block" />
      <CookieDoodle className="pointer-events-none absolute right-10 top-16 hidden size-14 text-cream md:block" />
      <SparkleDoodle className="pointer-events-none absolute bottom-8 left-[46%] hidden size-8 text-gold lg:block" />
      <div className="container-x relative">
        {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}
        <div className="mt-6 max-w-2xl pr-0 md:pr-24">
          {script && <p className="script text-3xl text-gold-600 sm:text-4xl">{script}</p>}
          <h1 className="mt-1 text-[2.5rem] sm:text-6xl">{title}</h1>
          {text && <p className="mt-4 max-w-xl text-lg text-ink-soft">{text}</p>}
          {children}
        </div>
      </div>
    </header>
  )
}
