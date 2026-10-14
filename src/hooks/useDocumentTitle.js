import { useEffect } from 'react'
import { siteConfig } from '../config/siteConfig'

export function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} — ${siteConfig.brand.fullName}` : `${siteConfig.brand.fullName} — Pâtisserie artisanale`
  }, [title])
}
