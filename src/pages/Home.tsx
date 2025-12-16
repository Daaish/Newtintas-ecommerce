import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section className="space-y-14">

      {/* HERO */}
      <div className="bg-amber-700 text-white rounded-2xl p-10 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold">
          A Cor Certa para o Seu Projeto
        </h1>

        <p className="mt-4 text-lg text-amber-100 max-w-2xl">
          Tintas, vernizes e sprays para transformar ambientes,
          renovar espaços e dar vida às suas ideias.
        </p>

        <div className="mt-8 flex gap-4 flex-col sm:flex-row">
          <Link
            to="/catalog"
            className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-3 rounded-lg shadow font-semibold transition"
          >
            Ver Produtos
          </Link>

          <Link
            to="/about"
            className="border border-white px-8 py-3 rounded-lg hover:bg-white hover:text-amber-800 transition"
          >
            Sobre a Loja
          </Link>
        </div>
      </div>

      {/* BENEFÍCIOS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          ['Alta Qualidade', 'Tintas de excelente rendimento e durabilidade.'],
          ['Entrega Rápida', 'Enviamos para todo o Brasil com agilidade.'],
          ['Atendimento Especializado', 'Suporte para escolher a tinta ideal.'],
        ].map((item, i) => (
          <div key={i} className="bg-white rounded-xl shadow p-6 text-center">
            <h3 className="font-bold text-lg mb-2">{item[0]}</h3>
            <p className="text-gray-600">{item[1]}</p>
          </div>
        ))}
      </div>

      {/* CATEGORIAS */}
      <div>
        <h2 className="text-2xl font-bold mb-6 text-center">
          Principais Categorias
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            ['Tintas Imobiliárias', 'Paredes internas e externas'],
            ['Sprays', 'Artes, reformas e automotivo'],
            ['Vernizes', 'Proteção e acabamento'],
          ].map((item, i) => (
            <div key={i} className="bg-yellow-50 rounded-xl p-6 text-center border border-yellow-200">
              <h3 className="font-semibold text-lg mb-2 text-amber-800">
                {item[0]}
              </h3>
              <p className="text-gray-600">{item[1]}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FAIXA FINAL */}
      <div className="bg-gradient-to-r from-yellow-500 to-amber-600 text-black rounded-2xl p-10 text-center">
        <h2 className="text-3xl font-bold mb-3">
          Pronto para transformar o seu ambiente?
        </h2>

        <p className="opacity-90 mb-6">
          Confira agora nossas tintas e comece sua transformação hoje mesmo.
        </p>

        <Link
          to="/catalog"
          className="bg-black text-yellow-400 px-8 py-3 rounded-lg font-semibold shadow hover:bg-gray-900 transition"
        >
          Acessar Catálogo
        </Link>
      </div>
    </section>
  )
}
