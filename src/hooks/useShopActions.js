import { useCart } from '../context/CartContext'
import { useFavorites } from '../context/FavoritesContext'
import { useToast } from '../context/ToastContext'

/** Actions d'achat partagées (ajout panier + favoris) avec notifications */
export function useShopActions() {
  const { addItem, openDrawer } = useCart()
  const { toggleFavorite, isFavorite } = useFavorites()
  const notify = useToast()

  const addToCart = (product, quantity = 1, { openCart = false } = {}) => {
    const ok = addItem(product.id, quantity)
    if (!ok) {
      notify(`${product.name} est épuisé aujourd’hui.`, 'error')
      return
    }
    notify(`${quantity} × ${product.name} ajouté au panier`)
    if (openCart) openDrawer()
  }

  const toggleFav = (product) => {
    const added = toggleFavorite(product.id)
    notify(added ? `${product.name} ajouté aux favoris` : `${product.name} retiré des favoris`)
  }

  return { addToCart, toggleFav, isFavorite }
}
