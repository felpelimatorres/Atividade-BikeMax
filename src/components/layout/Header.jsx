import { useState } from 'react'
import Icon from '../ui/Icon.jsx'
import { useCart } from '../../hooks/useCart.js'
import './layout.css'

const NAV_LINKS = [
  { href: '#inicio', label: 'Início' },
  { href: '#produtos', label: 'Bicicletas' },
  { href: '#vantagens', label: 'Vantagens' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#contato', label: 'Contato' },
]

export default function Header() {
  const { count, openCart } = useCart()
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="header">
      <div className="topbar">
        Frete grátis acima de R$ 1.999 · Parcele em até 12x sem juros
      </div>
      <div className="container header__inner">
        <a href="#inicio" className="logo" aria-label="BikeMax — página inicial">
          <span className="logo__mark">
            <Icon name="bike" size={22} />
          </span>
          Bike<span className="logo__accent">Max</span>
        </a>

        <nav id="menu-principal" className={`nav ${menuOpen ? 'nav--open' : ''}`} aria-label="Principal">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="header__actions">
          <button
            type="button"
            className="icon-btn"
            onClick={openCart}
            aria-label={`Abrir carrinho, ${count} ${count === 1 ? 'item' : 'itens'}`}
          >
            <Icon name="cart" size={22} />
            {count > 0 && <span className="icon-btn__badge">{count}</span>}
          </button>
          <button
            type="button"
            className="icon-btn icon-btn--menu"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="menu-principal"
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            <Icon name={menuOpen ? 'close' : 'menu'} size={22} />
          </button>
        </div>
      </div>
    </header>
  )
}
