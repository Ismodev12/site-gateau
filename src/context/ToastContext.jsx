import { createContext, useCallback, useContext, useRef, useState } from 'react'
import { CheckCircle2, AlertCircle, X } from 'lucide-react'

const ToastContext = createContext(null)

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([])
  const idRef = useRef(0)

  const dismiss = useCallback((id) => setToasts((t) => t.filter((x) => x.id !== id)), [])

  const notify = useCallback(
    (message, type = 'success') => {
      const id = ++idRef.current
      setToasts((t) => [...t.slice(-2), { id, message, type }])
      setTimeout(() => dismiss(id), 3200)
    },
    [dismiss],
  )

  return (
    <ToastContext.Provider value={notify}>
      {children}
      <div
        aria-live="polite"
        role="status"
        className="pointer-events-none fixed inset-x-0 bottom-4 z-[70] flex flex-col items-center gap-2 px-4 sm:bottom-6"
      >
        {toasts.map((t) => (
          <div
            key={t.id}
            className="animate-fade-up pointer-events-auto flex w-full max-w-sm items-center gap-3 rounded-2xl bg-forest px-4 py-3 text-cream shadow-[var(--shadow-soft)]"
          >
            {t.type === 'error' ? (
              <AlertCircle className="size-5 shrink-0 text-gold" aria-hidden />
            ) : (
              <CheckCircle2 className="size-5 shrink-0 text-gold" aria-hidden />
            )}
            <p className="flex-1 text-[0.95rem] font-medium">{t.message}</p>
            <button
              type="button"
              onClick={() => dismiss(t.id)}
              className="rounded-full p-1 text-cream/80 hover:text-cream"
              aria-label="Fermer la notification"
            >
              <X className="size-4" />
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  )
}

export const useToast = () => useContext(ToastContext)
