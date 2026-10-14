import { Link } from 'react-router-dom'
import PageHeader from '../components/ui/PageHeader'
import DemoNotice from '../components/ui/DemoNotice'
import { legalPages } from '../data/legal'
import { siteConfig } from '../config/siteConfig'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

/** Page légale générique — contenu dans data/legal.js */
export default function LegalPage({ pageKey }) {
  const page = legalPages[pageKey]
  useDocumentTitle(page.title)
  return (
    <>
      <PageHeader script="Bon à savoir" title={page.title} breadcrumbs={[{ label: 'Accueil', to: '/' }, { label: page.title }]} />
      <section className="container-x pb-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_280px]">
          <div className="max-w-3xl">
            <DemoNotice>
              <strong>Contenu provisoire.</strong> Cette page est un modèle à remplacer par le texte officiel de la pâtisserie, relu par un
              professionnel. Dernière mise à jour : {page.updated}.
            </DemoNotice>
            <div className="mt-8 space-y-8">
              {page.sections.map((s, i) => (
                <section key={s.heading}>
                  <h2 className="text-2xl sm:text-3xl">
                    {i + 1}. {s.heading}
                  </h2>
                  <p className="mt-3 text-lg leading-relaxed text-ink-soft">{s.body}</p>
                </section>
              ))}
            </div>
          </div>
          <nav aria-label="Pages légales" className="h-fit rounded-[1.75rem] bg-white p-6 shadow-[var(--shadow-card)] lg:sticky lg:top-28">
            <h2 className="text-lg">Informations légales</h2>
            <ul className="mt-3 space-y-2">
              {siteConfig.legalLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="font-semibold text-forest hover:underline">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>
    </>
  )
}
