import { useEffect, useState } from 'react'

/** État React synchronisé avec localStorage (résistant aux erreurs). */
export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const raw = localStorage.getItem(key)
      return raw != null ? JSON.parse(raw) : initialValue
    } catch {
      return initialValue
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch {
      /* stockage indisponible (navigation privée…) */
    }
  }, [key, value])

  return [value, setValue]
}
