import ImagePlaceholder from './ImagePlaceholder'

/** Image produit carrée, prête à recevoir une photo de pâtisserie */
export default function ProductImage({ product, className, ratio = 'aspect-square', fit = 'cover', ...rest }) {
  return (
    <ImagePlaceholder
      src={product.image}
      alt={`${product.name} — ${product.shortDescription ?? ''}`.trim()}
      ratio={ratio}
      fit={fit}
      className={className}
      surface="bg-cream-200 text-forest"
      {...rest}
    />
  )
}
