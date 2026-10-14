import { siteConfig } from '../../config/siteConfig'
import { formatPrice } from '../../utils/format'

/** Récapitulatif des montants (sous-total, livraison démo, total) */
export default function OrderSummary({ totals }) {
  const { freeDeliveryFrom } = siteConfig.checkout
  const remaining = freeDeliveryFrom != null ? freeDeliveryFrom - totals.subtotal : 0
  return (
    <dl className="mt-5 space-y-3 text-[1.02rem]">
      <div className="flex justify-between">
        <dt className="text-ink-soft">Sous-total</dt>
        <dd className="font-semibold">{formatPrice(totals.subtotal)}</dd>
      </div>
      <div className="flex justify-between">
        <dt className="text-ink-soft">
          Livraison <span className="rounded-full bg-gold-100 px-2 py-0.5 text-xs font-bold text-ink">DÉMO</span>
        </dt>
        <dd className="font-semibold">{totals.delivery === 0 ? 'Offerte' : formatPrice(totals.delivery)}</dd>
      </div>
      {remaining > 0 && (
        <p className="rounded-xl bg-forest-100 px-3 py-2 text-sm text-forest">
          Plus que {formatPrice(remaining)} pour profiter de la livraison offerte.
        </p>
      )}
      <div className="flex justify-between border-t border-cream-300 pt-4 text-xl">
        <dt className="font-bold">Total</dt>
        <dd className="font-extrabold text-forest">{formatPrice(totals.total)}</dd>
      </div>
    </dl>
  )
}
