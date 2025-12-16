
// Importa as rotas do React Router
import { Route, Routes } from 'react-router-dom'
// Importa o cabeçalho do site
import { Header } from './components/Header'
// Importa o rodapé do site
import { Footer } from './components/Footer'
// Importa a página inicial
import Home from './pages/Home'
// Importa a página de catálogo de produtos
import Catalog from './pages/Catalog'
// Importa a página de detalhes do produto
import ProductDetails from './pages/ProductDetails'
// Importa a página do carrinho de compras
import Cart from './pages/Cart'
// Importa a página Sobre
import About from './pages/About'
// Importa a página de Contato
import Contact from './pages/Contact'
// Importa a página de Política de Privacidade
import Privacy from './pages/Privacy'
// Importa o provedor do contexto do carrinho
import { CartProvider } from './contexts/CartContext'


// Função principal do aplicativo
export default function App() {
  // Retorna a estrutura do site
  return (
    // Provedor do carrinho envolve todo o app para compartilhar o estado do carrinho
    <CartProvider>
      {/* Div principal que define altura mínima da tela e layout em coluna */}
      <div className="min-h-screen flex flex-col">
        {/* Cabeçalho do site */}
        <Header />
        {/* Conteúdo principal, centralizado e com espaçamento */}
        <main className="flex-1 container mx-auto max-w-6xl px-4 md:px-6 py-6 md:py-8">
          {/* Define as rotas do site */}
          <Routes>
            {/* Página inicial */}
            <Route path="/" element={<Home />} />
            {/* Página de catálogo */}
            <Route path="/catalog" element={<Catalog />} />
            {/* Página de detalhes do produto */}
            <Route path="/product/:id" element={<ProductDetails />} />
            {/* Página do carrinho */}
            <Route path="/cart" element={<Cart />} />
            {/* Página Sobre */}
            <Route path="/about" element={<About />} />
            {/* Página de Contato */}
            <Route path="/contact" element={<Contact />} />
            {/* Página de Política de Privacidade */}
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
        </main>
        {/* Rodapé do site */}
        <Footer />
      </div>
    </CartProvider>
  )
}