const servicos = [
  { icone: '🔧', titulo: 'Oficina completa', texto: 'Revisão, regulagem de marchas e freios com mecânicos certificados.' },
  { icone: '🚚', titulo: 'Frete grátis', texto: 'Entregamos sua bike montada e regulada em todo o Brasil.' },
  { icone: '💳', titulo: '12x sem juros', texto: 'Parcele sua compra no cartão sem pagar nada a mais.' },
  { icone: '🛡️', titulo: 'Garantia de 2 anos', texto: 'Quadros e componentes com garantia estendida.' },
]

export default function Servicos() {
  return (
    <section id="servicos" className="secao secao-alt">
      <div className="container">
        <h2 className="titulo-secao">Por que comprar com a gente?</h2>
        <div className="servicos">
          {servicos.map((s) => (
            <div key={s.titulo} className="servico">
              <span className="servico-icone">{s.icone}</span>
              <h3>{s.titulo}</h3>
              <p>{s.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
