import { Link } from 'react-router-dom'

export type Product = {
  id: string
  name: string
  price: number
  description: string
  image: string
  category: string
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 border flex flex-col border-yellow-200">

      <img 
        src={product.image}
        alt={product.name}
        className="w-full h-78 object-cover rounded-md mb-3"
      />

      <span className="text-xs uppercase tracking-wide text-amber-700 mb-1 font-semibold">
        {product.category}
      </span>

      <h3 className="font-bold text-lg leading-snug mb-1">
        {product.name}
      </h3>

      <p className="text-sm text-gray-600 line-clamp-2 mb-3">
        {product.description}
      </p>

      <div className="mt-auto flex items-center justify-between">
        <span className="text-lg font-bold text-amber-700">
          R$ {product.price.toFixed(2)}
        </span>

        <Link 
          to={`/product/${product.id}`} 
          className="bg-yellow-500 text-black px-3 py-1.5 rounded hover:bg-yellow-600 transition text-sm font-semibold"
        >
          Ver produto
        </Link>
      </div>
    </div>
  )
}
