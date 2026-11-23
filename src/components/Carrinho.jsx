import { brl } from '../format.js'

export default function Carrinho({ aberto, itens, onFechar, onAlterarQtd, onLimpar }) {
  const total = itens.reduce((s, i) => s + i.preco * i.qtd, 0)

  function finalizar() {
    alert(`Pedido finalizado! Total: ${brl(total)}\nObrigado por comprar na Pedal Livre.`)
    onLimpar()
    onFechar()
  }

  return (
    <>
      <div className={`overlay ${aberto ? 'visivel' : ''}`} onClick={onFechar} />
      <aside className={`carrinho ${aberto ? 'aberto' : ''}`} aria-hidden={!aberto}>
        <div className="carrinho-topo">
          <h2>Seu carrinho</h2>
          <button className="btn-fechar" onClick={onFechar} aria-label="Fechar">✕</button>
        </div>
        {itens.length === 0 ? (
          <p className="vazio">Seu carrinho está vazio.</p>
        ) : (
          <>
            <ul className="carrinho-lista">
              {itens.map((i) => (
                <li key={i.id}>
                  <img src={i.imagem} alt={i.nome} />
                  <div className="carrinho-info">
                    <strong>{i.nome}</strong>
                    <span>{brl(i.preco)}</span>
                    <div className="qtd">
                      <button onClick={() => onAlterarQtd(i.id, -1)} aria-label="Diminuir">−</button>
                      <span>{i.qtd}</span>
                      <button onClick={() => onAlterarQtd(i.id, 1)} aria-label="Aumentar">+</button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="carrinho-total">
              <span>Total</span>
              <strong>{brl(total)}</strong>
            </div>
            <button className="btn btn-primario largura-total" onClick={finalizar}>
              Finalizar compra
            </button>
            <button className="btn-link" onClick={onLimpar}>Esvaziar carrinho</button>
          </>
        )}
      </aside>
    </>
  )
}
