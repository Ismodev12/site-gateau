import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import PageHeader from '../components/ui/PageHeader'
import ContactForm from '../components/contact/ContactForm'
import DemoNotice from '../components/ui/DemoNotice'
import SocialIcon from '../components/ui/SocialIcon'
import { HeartDoodle } from '../components/ui/Doodles'
import { siteConfig } from '../config/siteConfig'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

export default function Contact() {
  useDocumentTitle('Contact')
  const { contact, hours, social } = siteConfig
  const items = [
    { icon: MapPin, label: 'Nous rendre visite', value: `${contact.address}, ${contact.city}`, href: contact.mapUrl, external: true },
    { icon: Phone, label: 'Nous appeler', value: contact.phone, href: contact.phoneHref },
    { icon: Mail, label: 'Nous écrire', value: contact.email, href: `mailto:${contact.email}` },
  ]
  return (
    <>
      <PageHeader
        script="Dites-nous bonjour"
        title="Nous serions ravis de vous lire"
        text="Une question sur une commande, un gâteau personnalisé pour une fête ou simplement un petit mot ? Notre équipe est là pour vous."
        breadcrumbs={[{ label: 'Accueil', to: '/' }, { label: 'Contact' }]}
      />
      <section className="container-x pb-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr]">
          <div className="space-y-5">
            <div className="on-dark relative overflow-hidden rounded-[2rem] bg-forest p-7 text-cream sm:p-8">
              <HeartDoodle className="absolute right-6 top-6 size-9 text-gold" />
              <h2 className="text-2xl text-cream">Nos coordonnées</h2>
              <ul className="mt-6 space-y-5">
                {items.map((it) => (
                  <li key={it.label} className="flex gap-4">
                    <span className="grid size-12 shrink-0 place-items-center rounded-full bg-gold text-ink">
                      <it.icon className="size-5" aria-hidden />
                    </span>
                    <div className="min-w-0">
                      <p className="text-sm text-cream/70">{it.label}</p>
                      <a
                        href={it.href}
                        {...(it.external ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
                        className="break-words text-lg font-semibold hover:text-gold"
                      >
                        {it.value}
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
              <ul className="mt-7 flex gap-2">
                {social.map((s) => (
                  <li key={s.name}>
                    <a href={s.href} target="_blank" rel="noreferrer noopener" className="grid size-11 place-items-center rounded-full bg-forest-700 hover:bg-gold hover:text-ink" aria-label={`${s.name} (s’ouvre dans un nouvel onglet)`}>
                      <SocialIcon name={s.icon} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[2rem] bg-gold-100 p-7 sm:p-8">
              <h2 className="flex items-center gap-2 text-2xl">
                <Clock className="size-6" aria-hidden /> Horaires d’ouverture
              </h2>
              <dl className="mt-5 space-y-3">
                {hours.map((h) => (
                  <div key={h.days} className="flex justify-between gap-4 border-b border-gold/40 pb-3 last:border-0">
                    <dt className="font-semibold">{h.days}</dt>
                    <dd className="text-ink-soft">{h.time}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {contact.isDemo && <DemoNotice>Adresse, téléphone, e-mail et horaires sont des informations provisoires de démonstration.</DemoNotice>}
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  )
}
