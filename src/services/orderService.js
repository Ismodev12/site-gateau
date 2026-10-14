import { siteConfig } from '../config/siteConfig'

/**
 * SERVICE DE COMMANDE — VERSION DÉMO
 * ------------------------------------------------------------------
 * Aucune donnée n'est envoyée : la commande est simulée et enregistrée
 * dans le navigateur. Pour brancher un backend plus tard, remplacez le
 * contenu de `submitOrder` par un appel API (fetch/axios) qui renvoie
 * le même format d'objet.
 */
const LAST_ORDER_KEY = 'antixor:last-order'

export function computeTotals(lines) {
  const subtotal = lines.reduce((sum, l) => sum + l.price * l.quantity, 0)
  const { deliveryFee, freeDeliveryFrom } = siteConfig.checkout
  const delivery =
    subtotal === 0 ? 0 : freeDeliveryFrom != null && subtotal >= freeDeliveryFrom ? 0 : deliveryFee
  return { subtotal, delivery, total: subtotal + delivery }
}

function generateOrderNumber() {
  const d = new Date()
  const ymd = `${String(d.getFullYear()).slice(2)}${String(d.getMonth() + 1).padStart(2, '0')}${String(d.getDate()).padStart(2, '0')}`
  const rand = Math.floor(1000 + Math.random() * 9000)
  return `${siteConfig.checkout.orderPrefix}-${ymd}-${rand}`
}

/**
 * Crée la commande immédiatement (synchrone) : nécessaire pour ouvrir
 * WhatsApp directement au clic, sans être bloqué par le navigateur.
 */
export function createOrder({ customer, lines, channel = 'whatsapp' }) {
  const order = {
    number: generateOrderNumber(),
    createdAt: new Date().toISOString(),
    customer,
    lines,
    totals: computeTotals(lines),
    channel,
    isDemo: true,
  }
  try {
    localStorage.setItem(LAST_ORDER_KEY, JSON.stringify(order))
  } catch {
    /* stockage indisponible : la confirmation reste affichée via l'état de navigation */
  }
  return order
}

/** Version asynchrone, prête à être remplacée par un appel API */
export async function submitOrder(payload) {
  await new Promise((r) => setTimeout(r, 300))
  return createOrder(payload)
}

export function getLastOrder() {
  try {
    return JSON.parse(localStorage.getItem(LAST_ORDER_KEY) || 'null')
  } catch {
    return null
  }
}
