// Importa o hook do carrinho
import { useCart } from '../contexts/CartContext'
// Importa useState para controlar a finalização da compra
import { useState } from 'react'

// Função da página do carrinho de compras
export default function Cart() {
  // Pega os dados e funções do carrinho
  const { items, remove, updateQty, total, clear } = useCart()

  // Estado para saber se a compra foi finalizada
  const [finished, setFinished] = useState(false)

  // Variável para o conteúdo da página
  let content
  // Se o carrinho estiver vazio, mostra mensagem
  if (items.length === 0) {
    content = <p>Seu carrinho está vazio.</p>
  } else {
    // Se tem itens, monta os elementos dos produtos
    const elements = new Array<JSX.Element>()
    for (let i = 0; i < items.length; i++) {
      const item = items[i]
      elements.push(
        <div key={item.id} className="flex items-center justify-between border rounded p-3">
          {/* Informações do produto */}
          <div>
            <p className="font-semibold">{item.name}</p>
            <p className="text-sm text-gray-600">R$ {item.price.toFixed(2)}</p>
          </div>
          {/* Campo para alterar quantidade e botão de remover */}
          <div className="flex items-center gap-2">
            <input
              type="number"
              min={1}
              value={item.qty}
              onChange={function (e) { updateQty(item.id, Number(e.target.value)) }}
              className="w-16 border rounded px-2 py-1"
            />
            <button onClick={function () { remove(item.id) }} className="text-red-600">Remover</button>
          </div>
        </div>
      )
    }
    // Mostra os itens e o total
    // Se a compra já foi finalizada, mostra mensagem de sucesso
    if (finished) {
      content = (
        <div className="space-y-4">
          {/* Mensagem de confirmação */}
          <p className="text-green-700 font-semibold">Compra finalizada com sucesso! Obrigado por comprar conosco.</p>
        </div>
      )
    } else {
      // Mostra os itens, o total e o botão para finalizar
      content = (
        <div className="space-y-4">
          {elements}
          <div className="text-right font-bold">Total: R$ {total.toFixed(2)}</div>
          {/* Botão para finalizar a compra */}
          <button
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
            onClick={function () {
              // Marca como finalizado
              setFinished(true)
              // Limpa o carrinho
              clear()
            }}
          >
            Finalizar Compra
          </button>
        </div>
      )
    }
  }

  // Renderiza a página do carrinho
  return (
    <section>
      {/* Título da página */}
      <h2 className="text-2xl font-bold mb-4">Carrinho</h2>
      {/* Conteúdo do carrinho */}
      {content}
    </section>
  )
}