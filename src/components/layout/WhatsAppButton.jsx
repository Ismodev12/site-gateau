import { useLocation } from 'react-router-dom'
import SocialIcon from '../ui/SocialIcon'
import { whatsappLink } from '../../utils/whatsapp'
import { siteConfig } from '../../config/siteConfig'

/** Bouton flottant pour écrire à la pâtisserie (masqué sur la page de commande) */
export default function WhatsAppButton() {
  const { pathname } = useLocation()
  if (pathname === '/checkout' || pathname === '/order-confirmation') return null
  return (
    <a
      href={whatsappLink(`Bonjour ${siteConfig.brand.fullName} 👋, j’ai une question.`)}
      target="_blank"
      rel="noreferrer noopener"
      aria-label="Nous écrire sur WhatsApp (s’ouvre dans un nouvel onglet)"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#1FA855] p-4 text-white shadow-[0_12px_30px_-10px_rgb(20_100_50/0.7)] transition-transform hover:scale-105 sm:bottom-6 sm:right-6"
    >
      <SocialIcon name="whatsapp" className="size-7" />
      <span className="hidden pr-1 font-bold sm:group-hover:inline">Une question ?</span>
    </a>
  )
}
