import { useState } from 'react'
import { brl } from '../format.js'

export default function ProductCard({ produto, onAdicionar }) {
  const [adicionado, setAdicionado] = useState(false)

  function clicar() {
    onAdicionar(produto)
    setAdicionado(true)
    setTimeout(() => setAdicionado(false), 1200)
  }

  return (
    <article className="card">
      <div className="card-img">
        <img src={produto.imagem} alt={produto.nome} loading="lazy" />
        <span className="tag">{produto.categoria}</span>
      </div>
      <div className="card-corpo">
        <h3>{produto.nome}</h3>
        <p className="descricao">{produto.descricao}</p>
        <p className="avaliacao">★ {produto.avaliacao.toFixed(1)}</p>
        <div className="card-rodape">
          <div>
            <strong className="preco">{brl(produto.preco)}</strong>
            <small>12x de {brl(produto.preco / 12)}</small>
          </div>
          <button className={`btn btn-primario ${adicionado ? 'ok' : ''}`} onClick={clicar}>
            {adicionado ? '✓ Adicionado' : 'Comprar'}
          </button>
        </div>
      </div>
    </article>
  )
}
