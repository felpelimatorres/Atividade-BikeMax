import Icon from '../ui/Icon.jsx'
import './layout.css'

const FOOTER_LINKS = {
  Loja: [
    { href: '#produtos', label: 'Bicicletas' },
    { href: '#vantagens', label: 'Vantagens' },
    { href: '#depoimentos', label: 'Depoimentos' },
  ],
  Ajuda: [
    { href: '#contato', label: 'Fale conosco' },
    { href: '#contato', label: 'Trocas e devoluções' },
    { href: '#contato', label: 'Garantia' },
  ],
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <a href="#inicio" className="logo logo--light">
            <span className="logo__mark">
              <Icon name="bike" size={22} />
            </span>
            Bike<span className="logo__accent">Max</span>
          </a>
          <p className="footer__about">
            Bicicletas, assistência técnica e paixão por pedalar desde 2010.
          </p>
        </div>

        {Object.entries(FOOTER_LINKS).map(([title, links]) => (
          <nav key={title} aria-label={title}>
            <h3 className="footer__title">{title}</h3>
            <ul className="footer__list">
              {links.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <div>
          <h3 className="footer__title">Atendimento</h3>
          <ul className="footer__list">
            <li>(11) 4000-1234</li>
            <li>contato@bikemax.com.br</li>
            <li>Seg a sáb, 9h às 19h</li>
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>© {year} BikeMax. Todos os direitos reservados.</p>
        <p>Projeto acadêmico — preços e produtos ilustrativos.</p>
      </div>
    </footer>
  )
}
