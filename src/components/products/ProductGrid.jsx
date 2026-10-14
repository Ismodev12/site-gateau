import ProductCard from './ProductCard'

export default function ProductGrid({ products, columns = 'sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' }) {
  return (
    <ul className={`grid grid-cols-1 gap-5 min-[480px]:grid-cols-2 sm:gap-6 ${columns}`}>
      {products.map((p) => (
        <li key={p.id} className="flex">
          <div className="w-full">
            <ProductCard product={p} />
          </div>
        </li>
      ))}
    </ul>
  )
}
