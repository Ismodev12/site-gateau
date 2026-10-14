import { createContext, useCallback, useContext } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

/** FAVORIS — liste d'identifiants produits conservée dans localStorage */
const FavoritesContext = createContext(null)

export function FavoritesProvider({ children }) {
  const [ids, setIds] = useLocalStorage('antixor:favorites', [])

  const isFavorite = useCallback((id) => ids.includes(id), [ids])
  const toggleFavorite = useCallback(
    (id) => {
      const added = !ids.includes(id)
      setIds((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]))
      return added
    },
    [ids, setIds],
  )

  return (
    <FavoritesContext.Provider value={{ ids, isFavorite, toggleFavorite, count: ids.length }}>
      {children}
    </FavoritesContext.Provider>
  )
}

export const useFavorites = () => useContext(FavoritesContext)
