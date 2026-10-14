import { Heart } from 'lucide-react'
import PageHeader from '../components/ui/PageHeader'
import ProductGrid from '../components/products/ProductGrid'
import EmptyState from '../components/ui/EmptyState'
import { useFavorites } from '../context/FavoritesContext'
import { getProductById } from '../data/products'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

export default function Favorites() {
  useDocumentTitle('Favoris')
  const { ids } = useFavorites()
  const items = ids.map(getProductById).filter(Boolean)
  return (
    <>
      <PageHeader script="Gardés pour plus tard" title="Vos favoris" breadcrumbs={[{ label: 'Accueil', to: '/' }, { label: 'Favoris' }]} />
      <section className="container-x pb-20">
        {items.length ? (
          <ProductGrid products={items} />
        ) : (
          <EmptyState
            icon={<Heart className="size-10" aria-hidden />}
            title="Pas encore de favoris"
            text="Touchez le cœur d’un produit pour l’enregistrer ici."
            actionLabel="Découvrir nos douceurs"
            actionTo="/products"
          />
        )}
      </section>
    </>
  )
}
