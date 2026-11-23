import Rating from '../ui/Rating.jsx'
import './sections.css'

// Depoimentos ilustrativos para o projeto.
const TESTIMONIALS = [
  {
    name: 'Mariana S.',
    city: 'Campinas, SP',
    rating: 5,
    text: 'Comprei a Retro Classic e chegou montada e regulada. Atendimento excelente do começo ao fim!',
  },
  {
    name: 'Rafael T.',
    city: 'Belo Horizonte, MG',
    rating: 5,
    text: 'A Trail X29 é incrível nas trilhas. Me ajudaram a escolher o tamanho certo do quadro pelo chat.',
  },
  {
    name: 'Juliana P.',
    city: 'Curitiba, PR',
    rating: 4.5,
    text: 'Minha filha aprendeu a pedalar em uma semana com a Balance Kids. Leve e muito bem acabada.',
  },
]

const initials = (name) =>
  name
    .split(' ')
    .map((part) => part[0])
    .join('')

export default function Testimonials() {
  return (
    <section id="depoimentos" className="section">
      <div className="container">
        <header className="section__header">
          <span className="eyebrow">Depoimentos</span>
          <h2 className="section__title">Quem pedala com a gente recomenda</h2>
        </header>
        <ul className="testimonials">
          {TESTIMONIALS.map((t) => (
            <li key={t.name} className="testimonial">
              <Rating value={t.rating} />
              <blockquote>“{t.text}”</blockquote>
              <div className="testimonial__author">
                <span className="avatar" aria-hidden="true">{initials(t.name)}</span>
                <div>
                  <strong>{t.name}</strong>
                  <span>{t.city}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
