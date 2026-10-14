import { createContext, useCallback, useContext, useMemo, useState } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { getProductById } from '../data/products'
import { siteConfig } from '../config/siteConfig'
import { computeTotals } from '../services/orderService'

/**
 * PANIER — conservé dans localStorage.
 * On ne stocke que { id, quantity } ; le nom, le prix et l'image sont
 * relus depuis data/products.js (un changement de prix est donc
 * immédiatement répercuté).
 */
const CartContext = createContext(null)
const MAX = siteConfig.checkout.maxQuantityPerItem
const clamp = (n) => Math.max(1, Math.min(MAX, Math.floor(Number(n) || 1)))

export function CartProvider({ children }) {
  const [items, setItems] = useLocalStorage('antixor:cart', [])
  const [isDrawerOpen, setDrawerOpen] = useState(false)

  const lines = useMemo(
    () =>
      items
        .map(({ id, quantity }) => {
          const product = getProductById(id)
          if (!product) return null
          return {
            id,
            slug: product.slug,
            name: product.name,
            unit: product.unit,
            price: product.price,
            image: product.image,
            quantity: clamp(quantity),
            lineTotal: product.price * clamp(quantity),
          }
        })
        .filter(Boolean),
    [items],
  )

  const addItem = useCallback(
    (id, quantity = 1) => {
      const product = getProductById(id)
      if (!product || product.availability === 'out-of-stock') return false
      setItems((prev) => {
        const existing = prev.find((i) => i.id === id)
        if (existing) return prev.map((i) => (i.id === id ? { ...i, quantity: clamp(i.quantity + quantity) } : i))
        return [...prev, { id, quantity: clamp(quantity) }]
      })
      return true
    },
    [setItems],
  )

  const updateQuantity = useCallback(
    (id, quantity) => setItems((prev) => prev.map((i) => (i.id === id ? { ...i, quantity: clamp(quantity) } : i))),
    [setItems],
  )
  const removeItem = useCallback((id) => setItems((prev) => prev.filter((i) => i.id !== id)), [setItems])
  const clearCart = useCallback(() => setItems([]), [setItems])
  const openDrawer = useCallback(() => setDrawerOpen(true), [])
  const closeDrawer = useCallback(() => setDrawerOpen(false), [])

  const count = lines.reduce((n, l) => n + l.quantity, 0)
  const totals = computeTotals(lines)

  const value = {
    lines,
    count,
    totals,
    maxQuantity: MAX,
    addItem,
    updateQuantity,
    removeItem,
    clearCart,
    isDrawerOpen,
    openDrawer,
    closeDrawer,
  }
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export const useCart = () => useContext(CartContext)
