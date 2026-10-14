import { siteConfig } from '../config/siteConfig'

/** Formate un prix selon la devise définie dans siteConfig.currency */
export function formatPrice(amount) {
  const { symbol, position, locale, decimals } = siteConfig.currency
  const number = new Intl.NumberFormat(locale, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })
    .format(amount)
    .replace(/ | /g, ' ')
  return position === 'before' ? `${symbol}${number}` : `${number} ${symbol}`
}

export function formatDate(iso) {
  return new Date(iso + 'T12:00:00').toLocaleDateString(siteConfig.locale ?? 'fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export const cn = (...classes) => classes.filter(Boolean).join(' ')
