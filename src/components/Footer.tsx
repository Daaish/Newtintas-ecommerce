// Função do rodapé do site
export function Footer() {
  // Renderiza o rodapé
  return (
    <footer className="bg-gray-100">
      <div className="container mx-auto px-4 py-6 text-sm text-gray-600 flex items-center justify-between">
        {/* Texto de direitos autorais com o ano atual */}
        <p>
          © {new Date().getFullYear()} Newtintas. Todos os direitos reservados.
        </p>
        {/* Link para a política de privacidade */}
        <nav className="flex gap-4">
          <a href="/privacy" className="hover:underline">Política de Privacidade</a>
        </nav>
      </div>
    </footer>
  )
}