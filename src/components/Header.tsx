import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import { useCart } from '../contexts/CartContext'

export function Header() {
  const { items } = useCart()
  const [open, setOpen] = useState(false)

  let count = 0
  for (let i = 0; i < items.length; i++) {
    count = count + items[i].qty
  }

  return (
    <header className="bg-yellow-500 text-black">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">

        <Link to="/" className="font-bold text-xl tracking-tight">
          NewTintas
        </Link>

        <button
          className="md:hidden border border-black/40 rounded px-3 py-2"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menu"
        >
          <span className="block w-6 h-0.5 bg-black mb-1"></span>
          <span className="block w-6 h-0.5 bg-black mb-1"></span>
          <span className="block w-6 h-0.5 bg-black"></span>
        </button>

        <nav className="hidden md:flex gap-5 items-center text-sm md:text-base font-semibold">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/catalog">Catálogo</NavLink>
          <NavLink to="/cart">
            Carrinho
            {count > 0 && (
              <span className="ml-2 bg-black text-yellow-400 rounded px-2 py-0.5 text-sm">
                {count}
              </span>
            )}
          </NavLink>
          <NavLink to="/about">Sobre</NavLink>
          <NavLink to="/contact">Contato</NavLink>
        </nav>
      </div>

      {open && (
        <div className="md:hidden border-t border-black/20 bg-yellow-400">
          <nav className="container mx-auto px-4 py-3 flex flex-col gap-2 text-sm font-semibold">
            <NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink>
            <NavLink to="/catalog" onClick={() => setOpen(false)}>Catálogo</NavLink>
            <NavLink to="/cart" onClick={() => setOpen(false)}>
              Carrinho
              {count > 0 && (
                <span className="ml-2 bg-black text-yellow-400 rounded px-2 py-0.5 text-sm">
                  {count}
                </span>
              )}
            </NavLink>
            <NavLink to="/about" onClick={() => setOpen(false)}>Sobre</NavLink>
            <NavLink to="/contact" onClick={() => setOpen(false)}>Contato</NavLink>
          </nav>
        </div>
      )}
    </header>
  )
}
