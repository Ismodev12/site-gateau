import Button from '../ui/Button'
import Icon from '../ui/Icon'
import ImagePlaceholder from '../ui/ImagePlaceholder'
import { BrushBlob, CookieDoodle, HeartDoodle, LeafDoodle, SwirlDoodle, SparkleDoodle } from '../ui/Doodles'
import { homeContent } from '../../config/siteConfig'
import { images } from '../../config/imagePaths'

export default function Hero() {
  const { hero } = homeContent
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden pb-14 pt-6 sm:pb-20 lg:pb-24 lg:pt-10">
      {/* Grande forme organique verte (desktop) */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-[18%] -top-[6%] hidden h-[108%] w-[58%] bg-forest lg:block"
        style={{ borderRadius: '58% 0 0 46% / 52% 0 0 58%' }}
      />
      <div className="container-x relative grid items-center gap-x-10 gap-y-10 lg:grid-cols-[1fr_1.05fr]">
        {/* Texte */}
        <div className="animate-fade-up relative z-10 lg:col-start-1 lg:row-start-1 lg:pt-6">
          <p className="script relative inline-block text-[2.1rem] text-gold-600 sm:text-[2.6rem]">
            {hero.script}
            <SwirlDoodle className="absolute -bottom-3 left-2 h-4 w-28 text-gold" />
          </p>
          <h1 id="hero-title" className="mt-4 text-[3.1rem] leading-[1.02] sm:text-7xl xl:text-[5.4rem]">
            <span className="block text-forest">{hero.titleLine1}</span>
            <span className="block text-ink">{hero.titleLine2}</span>
          </h1>
          <p className="mt-6 max-w-md text-lg text-ink-soft sm:text-xl">{hero.description}</p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button to="/products" size="lg" arrow>
              {hero.cta}
            </Button>
            <Button to="/about" size="lg" variant="ghost">
              Notre histoire
            </Button>
          </div>
        </div>

        {/* Visuel */}
        <div className="relative lg:col-start-2 lg:row-span-2 lg:row-start-1">
          {/* forme verte (mobile/tablette) */}
          <div aria-hidden className="absolute -right-10 -top-6 h-[85%] w-[80%] bg-forest blob lg:hidden" />
          <BrushBlob className="absolute -left-4 top-[6%] w-[46%] text-gold sm:-left-8" />
          <p className="script absolute right-2 top-0 z-20 rotate-[-6deg] text-right text-[1.7rem] leading-none text-cream sm:right-6 sm:text-[2.1rem] lg:-top-2">
            {hero.badge.split('|')[0]}
            <br />
            {hero.badge.split('|')[1] ?? ''}
            <HeartDoodle className="ml-auto mt-1 size-6 text-cream" />
          </p>
          <div className="relative mx-auto mt-20 w-[86%] sm:mt-24 sm:w-[76%] lg:mt-24 lg:w-[84%]">
            <ImagePlaceholder
              src={images.hero}
              alt="Une pile de cookies au chocolat sur une assiette"
              ratio="aspect-[1/1]"
              priority
              className="rounded-[50%] border-[10px] border-cream shadow-[0_40px_80px_-30px_rgb(3_48_31/0.7)]"
              surface="bg-cream-200 text-forest"
            />
            <CookieDoodle className="absolute -bottom-2 -left-8 size-16 text-forest sm:-left-12 sm:size-20" />
            <LeafDoodle className="absolute -right-2 bottom-6 size-14 text-gold lg:text-gold" />
            <SparkleDoodle className="absolute -left-2 top-4 size-8 text-forest" />
          </div>
        </div>

        {/* Arguments de confiance */}
        <ul className="relative z-10 grid grid-cols-3 divide-x divide-cream-300 rounded-[1.75rem] bg-white/70 py-4 shadow-[var(--shadow-card)] sm:max-w-lg lg:col-start-1 lg:row-start-2 lg:self-start lg:bg-transparent lg:py-0 lg:shadow-none">
          {hero.trust.map((t) => (
            <li key={t.label} className="flex flex-col items-center gap-2 px-2 text-center lg:items-start lg:px-6 lg:text-left lg:first:pl-0">
              <span className="grid size-12 place-items-center rounded-full border-2 border-forest/20 text-forest">
                <Icon name={t.icon} className="size-5" />
              </span>
              <span className="text-[0.95rem] font-semibold leading-tight text-ink">{t.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
