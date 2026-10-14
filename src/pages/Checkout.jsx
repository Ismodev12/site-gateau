import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import SocialIcon from '../components/ui/SocialIcon'
import PageHeader from '../components/ui/PageHeader'
import FormField from '../components/ui/FormField'
import Button from '../components/ui/Button'
import EmptyState from '../components/ui/EmptyState'
import DemoNotice from '../components/ui/DemoNotice'
import ProductImage from '../components/ui/ProductImage'
import OrderSummary from '../components/products/OrderSummary'
import { useCart } from '../context/CartContext'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import { rules, validate } from '../utils/validation'
import { formatPrice } from '../utils/format'
import { createOrder } from '../services/orderService'
import { buildOrderMessage, whatsappLink } from '../utils/whatsapp'
import { siteConfig } from '../config/siteConfig'

const schema = {
  firstName: [rules.required('votre prénom')],
  lastName: [rules.required('votre nom')],
  email: [rules.required('votre e-mail'), rules.email()],
  phone: [rules.phoneOptional()],
  address: [rules.required('l’adresse de livraison'), rules.minLength('adresse', 5)],
  city: [rules.required('la ville')],
}
const initial = { firstName: '', lastName: '', email: '', phone: '', address: '', city: '', instructions: '', payment: siteConfig.checkout.paymentMethods[0]?.id ?? '' }

export default function Checkout() {
  useDocumentTitle('Commande')
  const { lines, totals, clearCart } = useCart()
  const [values, setValues] = useState(initial)
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const navigate = useNavigate()

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }))
  }
  const onBlur = (e) => {
    const { name } = e.target
    if (!schema[name]) return
    const err = validate({ [name]: values[name] }, { [name]: schema[name] })[name]
    setErrors((er) => ({ ...er, [name]: err }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const found = validate(values, schema)
    setErrors(found)
    const firstError = Object.keys(found)[0]
    if (firstError) {
      document.getElementById(firstError)?.focus()
      return
    }
    setSubmitting(true)
    // Commande créée localement puis envoyée sur WhatsApp (ouvert dans un nouvel onglet / l'application)
    const order = createOrder({ customer: values, lines, channel: 'whatsapp' })
    window.open(whatsappLink(buildOrderMessage(order)), '_blank', 'noopener')
    navigate('/order-confirmation', { state: { order }, replace: true })
    clearCart()
  }

  const crumbs = [{ label: 'Accueil', to: '/' }, { label: 'Panier', to: '/cart' }, { label: 'Commande' }]

  if (lines.length === 0) {
    return (
      <>
        <PageHeader script="Commande" title="Rien à commander pour l’instant" breadcrumbs={crumbs} />
        <section className="container-x pb-20">
          <EmptyState
            icon={<ShoppingBag className="size-10" aria-hidden />}
            title="Votre panier est vide"
            text="Ajoutez quelques douceurs à votre panier avant de commander."
            actionLabel="Aller à la boutique"
            actionTo="/products"
          />
        </section>
      </>
    )
  }

  const errorCount = Object.values(errors).filter(Boolean).length

  return (
    <>
      <PageHeader script="Presque fini" title="Finaliser la commande" breadcrumbs={crumbs} />
      <section className="container-x pb-20">
        <DemoNotice className="mb-8">
          <strong>Comment ça marche :</strong> remplissez vos informations puis cliquez sur « Commander sur WhatsApp ». Votre commande s’ouvre
          dans WhatsApp, déjà rédigée : il ne reste qu’à appuyer sur <strong>Envoyer</strong>. Aucun paiement n’est demandé sur le site — il se
          règle avec la pâtisserie (espèces ou Mobile Money).
        </DemoNotice>

        <form noValidate onSubmit={onSubmit} className="grid gap-10 lg:grid-cols-[1fr_400px]">
          <div className="space-y-8">
            {errorCount > 0 && (
              <p role="alert" className="rounded-2xl bg-[#FBE9E7] px-4 py-3 font-semibold text-[#B3261E]">
                Veuillez corriger {errorCount} {errorCount > 1 ? 'champs' : 'champ'} ci-dessous.
              </p>
            )}
            <fieldset className="rounded-[1.75rem] bg-white p-6 shadow-[var(--shadow-card)] sm:p-8">
              <legend className="sr-only">Vos coordonnées</legend>
              <h2 className="text-2xl" aria-hidden>
                1. Vos coordonnées
              </h2>
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <FormField id="firstName" label="Prénom" value={values.firstName} onChange={onChange} onBlur={onBlur} error={errors.firstName} autoComplete="given-name" />
                <FormField id="lastName" label="Nom" value={values.lastName} onChange={onChange} onBlur={onBlur} error={errors.lastName} autoComplete="family-name" />
                <FormField id="email" type="email" label="E-mail" value={values.email} onChange={onChange} onBlur={onBlur} error={errors.email} autoComplete="email" />
                <FormField id="phone" type="tel" label="Téléphone" optional value={values.phone} onChange={onChange} onBlur={onBlur} error={errors.phone} autoComplete="tel" hint="Utile pour le livreur." />
              </div>
            </fieldset>

            <fieldset className="rounded-[1.75rem] bg-white p-6 shadow-[var(--shadow-card)] sm:p-8">
              <legend className="sr-only">Livraison</legend>
              <h2 className="text-2xl" aria-hidden>
                2. Livraison
              </h2>
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <FormField id="address" label="Adresse de livraison" value={values.address} onChange={onChange} onBlur={onBlur} error={errors.address} autoComplete="street-address" className="sm:col-span-2" />
                <FormField id="city" label="Ville" value={values.city} onChange={onChange} onBlur={onBlur} error={errors.city} autoComplete="address-level2" />
                <FormField
                  id="instructions"
                  as="textarea"
                  label="Instructions de livraison"
                  optional
                  value={values.instructions}
                  onChange={onChange}
                  className="sm:col-span-2"
                  placeholder="Code du portail, point de repère, heure souhaitée…"
                />
              </div>
            </fieldset>

            <fieldset className="rounded-[1.75rem] bg-white p-6 shadow-[var(--shadow-card)] sm:p-8">
              <legend className="sr-only">Paiement</legend>
              <h2 className="text-2xl" aria-hidden>
                3. Paiement souhaité
              </h2>
              <p className="mt-2 text-ink-soft">Le paiement se fait directement avec la pâtisserie, pas sur le site.</p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {siteConfig.checkout.paymentMethods.map((m) => (
                  <label
                    key={m.id}
                    className={`flex cursor-pointer items-center gap-3 rounded-2xl border-2 px-4 py-3.5 font-semibold transition-colors ${
                      values.payment === m.id ? 'border-forest bg-forest-100' : 'border-cream-300 hover:border-forest'
                    }`}
                  >
                    <input type="radio" name="payment" value={m.id} checked={values.payment === m.id} onChange={onChange} className="size-5 accent-[#07543F]" />
                    {m.label}
                  </label>
                ))}
              </div>
            </fieldset>
          </div>

          <aside aria-label="Récapitulatif">
            <div className="sticky top-28 rounded-[1.75rem] bg-white p-6 shadow-[var(--shadow-card)]">
              <h2 className="text-2xl">Votre commande</h2>
              <ul className="mt-5 max-h-72 space-y-3 overflow-y-auto pr-1">
                {lines.map((l) => (
                  <li key={l.id} className="flex items-center gap-3">
                    <div className="relative">
                      <ProductImage product={{ ...l, shortDescription: '' }} className="size-14 rounded-xl" showLabel={false} />
                      <span className="absolute -right-1.5 -top-1.5 grid size-6 place-items-center rounded-full bg-forest text-xs font-bold text-cream">{l.quantity}</span>
                    </div>
                    <span className="flex-1 font-semibold leading-snug">{l.name}</span>
                    <span className="font-bold text-forest">{formatPrice(l.lineTotal)}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 border-t border-cream-300 pt-1">
                <OrderSummary totals={totals} />
              </div>
              <Button type="submit" size="lg" className="mt-6 w-full !bg-[#1FA855] !text-white hover:!bg-[#178A45]" disabled={submitting}>
                <SocialIcon name="whatsapp" className="size-5" />
                {submitting ? 'Ouverture de WhatsApp…' : 'Commander sur WhatsApp'}
              </Button>
              <p className="mt-3 text-center text-sm text-ink-soft">Total : {formatPrice(totals.total)} · aucun paiement sur le site</p>
            </div>
          </aside>
        </form>
      </section>
    </>
  )
}
