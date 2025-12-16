// Importa funções do React para contexto, efeito colateral e estado
import { createContext, useContext, useEffect, useState } from 'react'
// Importa o tipo Product do componente ProductCard
import type { Product } from '../components/ProductCard'

// Define o tipo de um item do carrinho
export type CartItem = {
  id: string // id do produto
  name: string // nome do produto
  price: number // preço do produto
  qty: number // quantidade desse produto no carrinho
}

// Define o formato do contexto do carrinho
export type CartContextType = {
  items: CartItem[] // lista de itens no carrinho
  add: (product: Product) => void // função para adicionar produto
  remove: (id: string) => void // função para remover produto
  updateQty: (id: string, qty: number) => void // função para atualizar quantidade
  total: number // valor total do carrinho
  clear: () => void // função para limpar todo o carrinho
}

// Cria o contexto do carrinho
const CartContext = createContext<CartContextType | undefined>(undefined)


// Provedor do carrinho, envolve o app e fornece o contexto
export function CartProvider({ children }: { children: React.ReactNode }) {
  // Estado dos itens do carrinho, inicializa do localStorage se existir
  const [items, setItems] = useState<CartItem[]>(function () {
    const saved = localStorage.getItem('cart-items') // busca do localStorage
    if (saved) {
      const parsed = JSON.parse(saved) as CartItem[] // converte para array
      if (Array.isArray(parsed)) {
        return parsed // retorna array salvo
      } else {
        return new Array<CartItem>() // retorna array vazio
      }
    } else {
      return new Array<CartItem>() // retorna array vazio
    }
  })

  // Função para adicionar produto ao carrinho
  const add = function (product: Product) {
    setItems(function (prev) {
      const next = new Array<CartItem>() // novo array de itens
      let found = false // flag para saber se já existe
      for (let i = 0; i < prev.length; i++) {
        const item = prev[i]
        if (item.id === product.id) {
          // Se já existe, aumenta a quantidade
          const updated: CartItem = { id: item.id, name: item.name, price: item.price, qty: item.qty + 1 }
          next.push(updated)
          found = true
        } else {
          next.push(item)
        }
      }
      if (!found) {
        // Se não existe, adiciona novo
        next.push({ id: product.id, name: product.name, price: product.price, qty: 1 })
      }
      return next
    })
  }

  // Função para remover produto do carrinho
  const remove = function (id: string) {
    setItems(function (prev) {
      const next = new Array<CartItem>()
      for (let i = 0; i < prev.length; i++) {
        const item = prev[i]
        if (item.id !== id) {
          next.push(item)
        }
      }
      return next
    })
  }

  // Função para atualizar quantidade de um produto
  const updateQty = function (id: string, qty: number) {
    setItems(function (prev) {
      const next = new Array<CartItem>()
      for (let i = 0; i < prev.length; i++) {
        const item = prev[i]
        if (item.id === id) {
          const updated: CartItem = { id: item.id, name: item.name, price: item.price, qty: qty }
          next.push(updated)
        } else {
          next.push(item)
        }
      }
      return next
    })
  }

  // Função para limpar todos os itens do carrinho
  const clear = function () {
    setItems(function () {
      const empty = new Array<CartItem>() // cria um array vazio
      return empty // retorna vazio para zerar o carrinho
    })
  }

  // Calcula o total do carrinho
  let total = 0
  for (let i = 0; i < items.length; i++) {
    total = total + (items[i].price * items[i].qty)
  }

  // Monta o valor do contexto
  const value: CartContextType = { items: items, add: add, remove: remove, updateQty: updateQty, total: total, clear: clear }
  
  // Salva o carrinho no localStorage sempre que mudar
  useEffect(function () {
    localStorage.setItem('cart-items', JSON.stringify(items))
  }, [items])

  // Retorna o provedor do contexto
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}


// Hook para acessar o contexto do carrinho
export function useCart() {
  const ctx = useContext(CartContext) // pega o contexto
  if (ctx) {
    return ctx // retorna contexto se existe
  } else {
    // Se não existe, retorna um contexto vazio
    const emptyItems = new Array<CartItem>()
    function noAdd(product: Product) { void product } // referenciar parâmetro para evitar erro de não utilizado
    function noRemove(id: string) { void id } // referenciar parâmetro para evitar erro de não utilizado
    function noUpdateQty(id: string, qty: number) { void id; void qty } // referenciar parâmetros para evitar erro de não utilizado
    function noClear() { /* nada */ } // função vazia para limpar
    const total = 0
    const fallback: CartContextType = { items: emptyItems, add: noAdd, remove: noRemove, updateQty: noUpdateQty, total: total, clear: noClear }
    return fallback
  }
}
