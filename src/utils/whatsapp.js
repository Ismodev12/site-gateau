import { siteConfig } from '../config/siteConfig'
import { formatPrice } from './format'

/**
 * WHATSAPP — construction des liens et des messages de commande
 * Le numéro se règle dans siteConfig.contact.whatsapp
 */
export function whatsappLink(message = '') {
  const number = siteConfig.contact.whatsapp
  return `https://wa.me/${number}${message ? `?text=${encodeURIComponent(message)}` : ''}`
}

/** Message complet envoyé depuis la page de commande */
export function buildOrderMessage(order) {
  const { customer, lines, totals, number } = order
  const payment = siteConfig.checkout.paymentMethods.find((m) => m.id === customer.payment)?.label
  const out = [
    `Bonjour ${siteConfig.brand.fullName} 👋`,
    `Je souhaite passer une commande (réf. ${number}).`,
    '',
    '🧁 *Ma commande*',
    ...lines.map((l) => `• ${l.quantity} × ${l.name} (${l.unit}) — ${formatPrice(l.lineTotal)}`),
    '',
    `Sous-total : ${formatPrice(totals.subtotal)}`,
    `Livraison : ${totals.delivery === 0 ? 'offerte' : formatPrice(totals.delivery)}`,
    `*Total : ${formatPrice(totals.total)}*`,
    '',
    '📍 *Livraison*',
    `${customer.firstName} ${customer.lastName}`,
    customer.phone ? `Tél. : ${customer.phone}` : null,
    `E-mail : ${customer.email}`,
    `${customer.address}, ${customer.city}`,
    customer.instructions ? `Instructions : ${customer.instructions}` : null,
    '',
    payment ? `💳 Paiement souhaité : ${payment}` : null,
    '',
    'Merci de me confirmer la commande 🙏',
  ]
  return out.filter((x) => typeof x === 'string').join('\n').replace(/\n{3,}/g, '\n\n')
}

/** Message court depuis une fiche produit */
export function buildProductMessage(product, quantity = 1) {
  return `Bonjour ${siteConfig.brand.fullName} 👋\nJe souhaite commander : ${quantity} × ${product.name} (${product.unit}) — ${formatPrice(product.price * quantity)}.\nEst-ce disponible ?`
}
