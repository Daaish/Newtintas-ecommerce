// Importa hooks do React e o componente de produto
import { ChangeEvent, useEffect, useState } from 'react'
import ProductCard, { Product } from '../components/ProductCard'

// Função do catálogo de produtos
export default function Catalog() {
  // Estado para lista de produtos
  const [products, setProducts] = useState<Product[]>(new Array<Product>())
  // Estado para busca
  const [q, setQ] = useState('')
  // Estado para categoria selecionada
  const [category, setCategory] = useState('all')

  // Carrega os produtos do arquivo JSON ao abrir a página
  useEffect(() => {
    fetch('/data/products.json')
      .then(function (r) { return r.json() })
      .then(function (produtos) { setProducts(produtos) })
  }, [])

  // Monta lista de categorias únicas
  let categories: string[] = new Array<string>()
  {
    // tempSet serve para não repetir categorias
    const tempSet: { [key: string]: boolean } = {}
    for (let i = 0; i < products.length; i++) {
      const cat = products[i].category
      if (!tempSet[cat]) {
        tempSet[cat] = true
      }
    }
    // Cria lista de categorias começando por 'all'
    const list: string[] = new Array<string>()
    list.push('all')
    for (const key in tempSet) {
      list.push(key)
    }
    categories = list
  }

  // Filtra produtos conforme busca e categoria
  const filtered: Product[] = new Array<Product>()
  for (let i = 0; i < products.length; i++) {
    const p = products[i]
    let matchesQ = true
    if (q) {
      // Verifica se nome ou descrição contém o texto buscado
      const nameOk = p.name.toLowerCase().indexOf(q.toLowerCase()) !== -1
      const descOk = p.description.toLowerCase().indexOf(q.toLowerCase()) !== -1
      matchesQ = nameOk || descOk
    }
    let matchesCat = true
    if (category !== 'all') {
      matchesCat = p.category === category
    }
    if (matchesQ && matchesCat) {
      filtered.push(p)
    }
  }

  // Renderiza a página do catálogo
  return (
    <section>
      {/* Título da página */}
      <h2 className="text-2xl font-bold mb-4">Catálogo</h2>

      {/* Filtros de busca e categoria */}
      <div className="flex flex-col md:flex-row gap-3 mb-6">
        {/* Campo de busca */}
        <input
          value={q}
          onChange={function (e) { setQ(e.target.value) }}
          className="border rounded px-3 py-2 flex-1"
          placeholder="Buscar por nome ou palavra-chave"
        />
        {/* Select de categoria */}
        <select value={category} onChange={function (e) { setCategory(e.target.value) }} className="border rounded px-3 py-2 w-full md:w-64 bg-white">
          {(() => {
            // Monta as opções do select
            const opts = new Array<JSX.Element>()
            for (let i = 0; i < categories.length; i++) {
              const c = categories[i]
              const label = c === 'all' ? 'Todas categorias' : c
              opts.push(<option key={c} value={c}>{label}</option>)
            }
            return opts
          })()}
        </select>
      </div>

      {/* Lista de produtos filtrados */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {(() => {
          // Monta os cards de produto
          const elements = new Array<JSX.Element>()
          for (let i = 0; i < filtered.length; i++) {
            const p = filtered[i]
            elements.push(<ProductCard key={p.id} product={p} />)
          }
          return elements
        })()}
      </div>
    </section>
  )
}