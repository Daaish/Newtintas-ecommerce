// Função que representa a página "Sobre" do site
export default function About() {
  return (
    // Seção centralizada com informações sobre a loja
    <section className="max-w-3xl mx-auto py-12 px-4">
      {/* Título da página */}
      <h1 className="text-3xl font-bold mb-6 text-yellow-600">
        Sobre a Nossa Loja
      </h1>

      {/* Texto principal */}
      <p className="mb-4 text-gray-700 leading-relaxed">
        Somos uma loja especializada em tintas, vernizes e soluções completas para pintura.
        Trabalhamos com produtos de alta qualidade para atender desde pequenos reparos até grandes projetos residenciais e comerciais.
      </p>

      <p className="mb-6 text-gray-700 leading-relaxed">
        Nosso compromisso é oferecer os melhores produtos, com preços justos, atendimento de confiança
        e entrega rápida para que sua obra ou reforma aconteça sem complicações.
      </p>

      {/* Lista de diferenciais */}
      <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
        <li>Grande variedade de tintas, vernizes e sprays</li>
        <li>Produtos para uso interno, externo e automotivo</li>
        <li>Entrega rápida para todo o Brasil</li>
        <li>Suporte para escolher a tinta ideal para seu projeto</li>
      </ul>

      {/* Mensagem final */}
      <p className="font-semibold text-gray-800">
        Pintar é transformar. Conte com a gente para dar mais cor aos seus projetos!
      </p>
    </section>
  )
}
