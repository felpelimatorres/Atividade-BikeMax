import Icon from '../ui/Icon.jsx'
import './sections.css'

const STATS = [
  { value: '+15 mil', label: 'clientes satisfeitos' },
  { value: '4,8/5', label: 'nota média' },
  { value: '2 anos', label: 'de garantia' },
]

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="container hero__inner">
        <span className="eyebrow eyebrow--light">Nova coleção 2026</span>
        <h1 className="hero__title">
          Pedale mais longe com a <span>BikeMax</span>
        </h1>
        <p className="hero__text">
          Mountain bikes, speeds, urbanas, elétricas e infantis das melhores marcas, com entrega
          montada e regulada em todo o Brasil.
        </p>
        <div className="hero__actions">
          <a href="#produtos" className="btn btn--primary btn--lg">
            Ver bicicletas <Icon name="arrowRight" size={18} />
          </a>
          <a href="#contato" className="btn btn--ghost btn--lg">
            Fale com um especialista
          </a>
        </div>
        <dl className="hero__stats">
          {STATS.map((s) => (
            <div key={s.label}>
              <dt>{s.value}</dt>
              <dd>{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
