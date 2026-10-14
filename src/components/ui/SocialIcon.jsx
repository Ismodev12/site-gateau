/** Icônes des réseaux sociaux (SVG simples, sans dépendance) */
const paths = {
  facebook: 'M14 8h3V4h-3c-2.8 0-4.5 1.8-4.5 4.6V11H7v4h2.5v9h4v-9h3l.5-4h-3.5V8.8c0-.5.3-.8.5-.8z',
  instagram: null,
  tiktok: 'M16.5 3c.4 2.4 1.9 4 4.5 4.2v3.6c-1.7 0-3.2-.5-4.5-1.4v6.4c0 3.6-2.6 6.2-6.1 6.2S4.3 19.4 4.3 16s2.7-6.1 6.3-6v3.7c-1.5-.2-2.6.9-2.6 2.3 0 1.3 1 2.4 2.4 2.4s2.4-1 2.4-2.6V3h3.7z',
  whatsapp:
    'M12 2.5A9.5 9.5 0 0 0 3.8 16.8L2.5 21.5l4.8-1.3A9.5 9.5 0 1 0 12 2.5zm5.4 13.4c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.3 0 .5l-.4.6-.3.4c.1.2.6 1 1.3 1.7.9.8 1.7 1.1 1.9 1.2.2.1.4.1.5-.1l.7-.9c.2-.2.3-.2.6-.1l1.9.9c.2.1.4.2.4.3.1.1.1.6-.1 1.2z',
}

export default function SocialIcon({ name, className = 'size-5' }) {
  if (name === 'instagram') {
    return (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
      <path d={paths[name]} />
    </svg>
  )
}
