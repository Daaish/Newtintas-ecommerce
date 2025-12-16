// Importa hooks do React
import { useEffect, useState } from 'react'
// Importa função para pegar parâmetros da URL
import { useParams } from 'react-router-dom'
// Importa o tipo Product
import type { Product } from '../components/ProductCard'
// Importa o hook do carrinho
import { useCart } from '../contexts/CartContext'

// Função da página de detalhes do produto
export default function ProductDetails() {
  // Pega o id do produto da URL
  const { id } = useParams()
  // Estado para o produto exibido
  const [product, setProduct] = useState<Product | null>(null)
  // Função para adicionar ao carrinho
  const { add } = useCart()
  // Estado para mensagem de item adicionado
  const [addedMsg, setAddedMsg] = useState('')

  // Busca o produto pelo id ao abrir a página
  useEffect(function () {
    fetch('/data/products.json')
      .then(function (r) { return r.json() })
      .then(function (list: Product[]) {
        let found: Product | null = null
        for (let i = 0; i < list.length; i++) {
          const p = list[i]
          if (p.id === id) {
            found = p
            break
          }
        }
        setProduct(found)
      })
  }, [id])

  // Se não encontrou o produto, mostra mensagem de carregando
  if (!product) return <p>Carregando...</p>

  // Renderiza a página de detalhes do produto
  return (
    <section className="grid md:grid-cols-2 gap-6">
      {/* Imagem do produto */}
      <img src={product.image} alt={product.name} className="w-full h-200 object-cover rounded" />
      <div>
        {/* Nome do produto */}
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{product.name}</h2>
        {/* Descrição do produto */}
        <p className="mt-2 text-gray-700 leading-relaxed">{product.description}</p>
        {/* Preço do produto */}
        <p className="mt-4 text-xl md:text-2xl font-semibold text-violet-700">R$ {product.price.toFixed(2)}</p>
        {/* Botão para adicionar ao carrinho */}
        <button
          onClick={function () {
            add(product)
            setAddedMsg('Item adicionado!')
            setTimeout(function () { setAddedMsg('') }, 1500)
          }}
          className="mt-6 bg-violet-700 text-white px-5 py-3 rounded shadow hover:bg-violet-800"
        >
          Adicionar ao Carrinho
        </button>
        {/* Mensagem de item adicionado */}
        {(() => {
          if (addedMsg !== '') {
            return (
              <div className="mt-3 inline-block bg-green-100 text-green-700 px-3 py-2 rounded">
                {addedMsg}
              </div>
            )
          } else {
            return null
          }
        })()}
      </div>
    </section>
  )
}