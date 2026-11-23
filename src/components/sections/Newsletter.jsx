import { useState } from 'react'
import { useToast } from '../../hooks/useToast.js'
import { isValidEmail } from '../../utils/validation.js'
import './sections.css'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const { showToast } = useToast()

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!isValidEmail(email)) {
      setError('Informe um e-mail válido.')
      return
    }
    setError('')
    setEmail('')
    showToast('Inscrição confirmada! Fique de olho no seu e-mail.')
  }

  return (
    <section className="newsletter">
      <div className="container newsletter__inner">
        <div>
          <h2>Ganhe 10% OFF na primeira compra</h2>
          <p>Receba lançamentos, dicas de manutenção e ofertas exclusivas.</p>
        </div>
        <form className="newsletter__form" onSubmit={handleSubmit} noValidate>
          <label htmlFor="newsletter-email" className="sr-only">E-mail</label>
          <input
            id="newsletter-email"
            type="email"
            placeholder="seu@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-invalid={Boolean(error)}
            aria-describedby={error ? 'newsletter-error' : undefined}
          />
          <button type="submit" className="btn btn--dark">Quero meu cupom</button>
          {error && (
            <p id="newsletter-error" className="form-error">{error}</p>
          )}
        </form>
      </div>
    </section>
  )
}
