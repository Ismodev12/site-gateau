import PageHeader from '../components/ui/PageHeader'
import ImagePlaceholder from '../components/ui/ImagePlaceholder'
import Icon from '../components/ui/Icon'
import Button from '../components/ui/Button'
import { BrushBlob, HeartDoodle, LeafDoodle, SwirlDoodle } from '../components/ui/Doodles'
import { aboutContent } from '../config/siteConfig'
import { images } from '../config/imagePaths'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import { cn } from '../utils/format'

export default function About() {
  useDocumentTitle('À propos')
  const { intro, sections, values, stats } = aboutContent

  return (
    <>
      <PageHeader script={intro.script} title={intro.title} breadcrumbs={[{ label: 'Accueil', to: '/' }, { label: 'À propos' }]} />

      {/* Introduction */}
      <section className="container-x pb-16 sm:pb-24">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative order-2 lg:order-1">
            <BrushBlob className="absolute -bottom-8 -left-8 w-1/2 text-gold" />
            <ImagePlaceholder
              src={images.about.hero}
              alt="Nos pâtissiers préparant des pâtisseries fraîches"
              ratio="aspect-[4/3]"
              className="relative rounded-[2.5rem] border-8 border-white shadow-[var(--shadow-soft)]"
            />
          </div>
          <div className="order-1 lg:order-2">
            <p className="eyebrow">Nos débuts</p>
            <p className="mt-4 text-xl leading-relaxed sm:text-[1.35rem]">{intro.text}</p>
            <ul className="mt-8 grid grid-cols-3 gap-3">
              {stats.map((s) => (
                <li key={s.label} className="rounded-[1.5rem] bg-forest px-3 py-5 text-center text-cream">
                  <p className="text-3xl font-extrabold text-gold sm:text-4xl">{s.value}</p>
                  <p className="mt-1 text-sm leading-tight text-cream/85 sm:text-[0.95rem]">{s.label}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Sections éditoriales alternées */}
      <section className="bg-cream-200/60 py-16 sm:py-24" aria-label="Ce qui nous rend différents">
        <div className="container-x space-y-20 sm:space-y-28">
          {sections.map((s, i) => {
            const reversed = i % 2 === 1
            return (
              <article key={s.id} className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                <div className={cn('relative', reversed && 'lg:order-2')}>
                  <div aria-hidden className={cn('absolute -top-6 size-40 bg-forest blob', reversed ? '-right-6' : '-left-6')} />
                  <ImagePlaceholder
                    src={images.about[s.imageKey]}
                    alt={s.title}
                    ratio="aspect-[5/4]"
                    className="relative rounded-[2.5rem] shadow-[var(--shadow-soft)]"
                  />
                  {i === 0 && <HeartDoodle className="absolute -bottom-4 right-6 size-10 text-gold" />}
                  {i === 2 && <LeafDoodle className="absolute -bottom-6 right-4 size-14 text-forest" />}
                </div>
                <div>
                  <p className="eyebrow">{s.eyebrow}</p>
                  <h2 className="mt-3 text-[2.2rem] sm:text-5xl">{s.title}</h2>
                  <SwirlDoodle className="mt-3 h-5 w-32 text-gold" />
                  <p className="mt-4 text-lg leading-relaxed text-ink-soft">{s.text}</p>
                </div>
              </article>
            )
          })}
        </div>
      </section>

      {/* Valeurs */}
      <section aria-labelledby="values-title" className="py-16 sm:py-24">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <p className="script text-4xl text-gold-600">Ce en quoi nous croyons</p>
            <h2 id="values-title" className="mt-1 text-[2.4rem] sm:text-5xl">
              Nos valeurs
            </h2>
          </div>
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <li
                key={v.title}
                className={cn(
                  'rounded-[2rem] p-7 transition-transform duration-300 hover:-translate-y-1',
                  i % 2 === 0 ? 'bg-forest text-cream' : 'bg-gold-100 text-ink',
                )}
              >
                <span className={cn('grid size-14 place-items-center rounded-full', i % 2 === 0 ? 'bg-gold text-ink' : 'bg-forest text-cream')}>
                  <Icon name={v.icon} className="size-6" />
                </span>
                <h3 className={cn('mt-5 text-2xl', i % 2 === 0 ? 'text-cream' : 'text-forest')}>{v.title}</h3>
                <p className={cn('mt-2', i % 2 === 0 ? 'text-cream/85' : 'text-ink-soft')}>{v.text}</p>
              </li>
            ))}
          </ul>
          <div className="mt-14 flex flex-wrap justify-center gap-3">
            <Button to="/products" size="lg" arrow>
              Goûtez la différence
            </Button>
            <Button to="/contact" size="lg" variant="outline">
              Nous contacter
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
