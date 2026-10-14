import { Link } from 'react-router-dom'
import Button from '../components/ui/Button'
import { CookieDoodle, SparkleDoodle } from '../components/ui/Doodles'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

/** Page 404 réutilisable (route inconnue, produit ou recette introuvable) */
export default function NotFound({
  title = 'Oups ! Cette page s’est émiettée.',
  text = 'La page que vous cherchez n’existe pas ou a été déplacée. Revenons vers quelque chose de plus doux.',
  backTo = '/products',
  backLabel = 'Voir les produits',
}) {
  useDocumentTitle('Page introuvable')
  return (
    <section className="container-x flex flex-col items-center py-20 text-center sm:py-28">
      <div className="relative">
        <p className="text-[7rem] font-extrabold leading-none text-forest sm:text-[10rem]" aria-hidden>
          4<span className="inline-block align-middle"><CookieDoodle className="inline size-24 text-gold sm:size-36" /></span>4
        </p>
        <SparkleDoodle className="absolute -right-8 -top-2 size-10 text-gold" />
      </div>
      <h1 className="mt-6 text-4xl sm:text-5xl">{title}</h1>
      <p className="mt-4 max-w-lg text-lg text-ink-soft">{text}</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button to={backTo} arrow>
          {backLabel}
        </Button>
        <Button to="/" variant="outline">
          Retour à l’accueil
        </Button>
      </div>
      <p className="mt-8 text-ink-soft">
        Besoin d’aide ? <Link to="/contact" className="font-bold text-forest underline">Contactez-nous</Link>
      </p>
    </section>
  )
}
