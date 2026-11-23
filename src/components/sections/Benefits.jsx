import Icon from '../ui/Icon.jsx'
import './sections.css'

const BENEFITS = [
  { icon: 'truck', title: 'Frete grátis', text: 'Em compras acima de R$ 1.999, com a bike entregue montada.' },
  { icon: 'card', title: '12x sem juros', text: 'Parcele no cartão ou ganhe 5% de desconto no Pix.' },
  { icon: 'wrench', title: 'Oficina própria', text: 'Revisão gratuita em 30 dias e mecânicos certificados.' },
  { icon: 'shield', title: 'Garantia de 2 anos', text: 'Quadros e componentes com garantia estendida BikeMax.' },
]

export default function Benefits() {
  return (
    <section id="vantagens" className="section section--muted">
      <div className="container">
        <header className="section__header">
          <span className="eyebrow">Vantagens</span>
          <h2 className="section__title">Por que comprar na BikeMax?</h2>
        </header>
        <ul className="benefits">
          {BENEFITS.map((b) => (
            <li key={b.title} className="benefit">
              <span className="benefit__icon">
                <Icon name={b.icon} size={26} />
              </span>
              <h3>{b.title}</h3>
              <p>{b.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
