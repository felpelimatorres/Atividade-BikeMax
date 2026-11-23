import { useState } from 'react'

export default function Header({ totalItens, onAbrirCarrinho }) {
  const [menuAberto, setMenuAberto] = useState(false)
  const fechar = () => setMenuAberto(false)

  return (
    <header className="header">
      <div className="container header-conteudo">
        <a href="#inicio" className="logo">🚲 Pedal<span>Livre</span></a>
        <nav className={`nav ${menuAberto ? 'aberto' : ''}`}>
          <a href="#inicio" onClick={fechar}>Início</a>
          <a href="#produtos" onClick={fechar}>Bicicletas</a>
          <a href="#servicos" onClick={fechar}>Serviços</a>
          <a href="#contato" onClick={fechar}>Contato</a>
        </nav>
        <div className="header-acoes">
          <button className="btn-carrinho" onClick={onAbrirCarrinho} aria-label="Abrir carrinho">
            🛒 {totalItens > 0 && <span className="badge">{totalItens}</span>}
          </button>
          <button className="btn-menu" onClick={() => setMenuAberto(!menuAberto)} aria-label="Menu">
            ☰
          </button>
        </div>
      </div>
    </header>
  )
}
