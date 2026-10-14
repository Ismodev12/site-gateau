import { useLocation } from 'react-router-dom'
import { CheckCircle2 } from 'lucide-react'
import SocialIcon from '../components/ui/SocialIcon'
import { buildOrderMessage, whatsappLink } from '../utils/whatsapp'
import Button from '../components/ui/Button'
import DemoNotice from '../components/ui/DemoNotice'
import OrderSummary from '../components/products/OrderSummary'
import { HeartDoodle, SparkleDoodle } from '../components/ui/Doodles'
import NotFound from './NotFound'
import { getLastOrder } from '../services/orderService'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import { formatPrice } from '../utils/format'

export default function OrderConfirmation() {
  useDocumentTitle('Commande envoyée')
  const location = useLocation()
  const order = location.state?.order ?? getLastOrder()

  if (!order) {
    return <NotFound title="Aucune commande à afficher" text="Vous n’avez pas encore passé de commande de démonstration." backTo="/products" backLabel="Commencer mes achats" />
  }

  return (
    <section className="container-x py-12 sm:py-20">
      <div className="mx-auto max-w-2xl">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-forest px-6 py-12 text-center text-cream sm:px-12">
          <SparkleDoodle className="absolute left-6 top-6 size-10 text-gold" />
          <HeartDoodle className="absolute bottom-6 right-8 size-9 text-gold/70" />
          <CheckCircle2 className="mx-auto size-16 text-gold" aria-hidden />
          <p className="script mt-4 text-4xl text-gold">Merci, {order.customer.firstName} !</p>
          <h1 className="mt-2 text-4xl text-cream sm:text-5xl">
            {order.channel === 'whatsapp' ? 'Plus qu’une étape sur WhatsApp' : 'Votre commande est enregistrée'}
          </h1>
          <p className="mt-4 text-lg text-cream/85">
            Numéro de commande <strong className="rounded-full bg-cream px-3 py-1 font-extrabold text-forest">{order.number}</strong>
          </p>
        </div>

        {order.channel === 'whatsapp' ? (
          <div className="mt-6 rounded-[1.75rem] border-2 border-[#1FA855] bg-white p-6 text-center sm:p-8">
            <p className="text-lg">
              Votre commande s’est ouverte dans WhatsApp. <strong>Appuyez sur « Envoyer »</strong> pour la transmettre à la pâtisserie : elle
              vous confirmera la disponibilité, l’heure de livraison et le paiement.
            </p>
            <a
              href={whatsappLink(buildOrderMessage(order))}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-5 inline-flex h-14 items-center justify-center gap-2.5 rounded-full bg-[#1FA855] px-8 font-bold text-white hover:bg-[#178A45]"
            >
              <SocialIcon name="whatsapp" className="size-5" />
              WhatsApp ne s’est pas ouvert ? Cliquez ici
            </a>
          </div>
        ) : (
          <DemoNotice className="mt-6">
            Cette confirmation est une <strong>simulation</strong>. Aucun paiement n’a été encaissé et la commande n’a pas été transmise à la
            pâtisserie.
          </DemoNotice>
        )}

        <div className="mt-6 rounded-[1.75rem] bg-white p-6 shadow-[var(--shadow-card)] sm:p-8">
          <h2 className="text-2xl">Détail de la commande</h2>
          <ul className="mt-4 divide-y divide-cream-300">
            {order.lines.map((l) => (
              <li key={l.id} className="flex justify-between gap-4 py-3">
                <span>
                  <strong>{l.quantity} ×</strong> {l.name}
                </span>
                <span className="font-semibold">{formatPrice(l.lineTotal)}</span>
              </li>
            ))}
          </ul>
          <OrderSummary totals={order.totals} />
          <div className="mt-6 rounded-2xl bg-cream-200 p-4">
            <h3 className="text-lg">Livraison à</h3>
            <p className="mt-1 text-ink-soft">
              {order.customer.firstName} {order.customer.lastName}
              <br />
              {order.customer.address}, {order.customer.city}
              {order.customer.phone && (
                <>
                  <br />
                  {order.customer.phone}
                </>
              )}
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button to="/products" arrow>
            Continuer mes achats
          </Button>
          <Button to="/" variant="outline">
            Retour à l’accueil
          </Button>
        </div>
      </div>
    </section>
  )
}
