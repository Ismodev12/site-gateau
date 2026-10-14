import { useEffect } from 'react'

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'

/**
 * Garde le focus clavier dans un panneau (modale, tiroir) tant qu'il est ouvert,
 * ferme avec Échap et rend le focus à l'élément d'origine à la fermeture.
 */
export function useFocusTrap(ref, isOpen, onClose) {
  useEffect(() => {
    if (!isOpen || !ref.current) return
    const previouslyFocused = document.activeElement
    const node = ref.current
    const focusables = () => Array.from(node.querySelectorAll(FOCUSABLE))
    const first = focusables()[0]
    ;(node.querySelector('[data-autofocus]') || first || node).focus()

    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    function onKeyDown(e) {
      if (e.key === 'Escape') {
        e.preventDefault()
        onClose()
        return
      }
      if (e.key !== 'Tab') return
      const list = focusables()
      if (!list.length) return
      const firstEl = list[0]
      const lastEl = list[list.length - 1]
      if (e.shiftKey && document.activeElement === firstEl) {
        e.preventDefault()
        lastEl.focus()
      } else if (!e.shiftKey && document.activeElement === lastEl) {
        e.preventDefault()
        firstEl.focus()
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = prevOverflow
      if (previouslyFocused && previouslyFocused.focus) previouslyFocused.focus()
    }
  }, [isOpen, ref, onClose])
}
