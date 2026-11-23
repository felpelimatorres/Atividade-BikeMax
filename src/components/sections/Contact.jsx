import { useState } from 'react'
import Icon from '../ui/Icon.jsx'
import { useToast } from '../../hooks/useToast.js'
import { validateContact } from '../../utils/validation.js'
import './sections.css'

const EMPTY_FORM = { name: '', email: '', message: '' }

const CONTACT_INFO = [
  { icon: 'pin', label: 'Endereço', value: 'Av. Paulista, 1000 — São Paulo/SP' },
  { icon: 'phone', label: 'Telefone', value: '(11) 4000-1234' },
  { icon: 'mail', label: 'E-mail', value: 'contato@bikemax.com.br' },
  { icon: 'clock', label: 'Horário', value: 'Seg a sáb, 9h às 19h' },
]

export default function Contact() {
  const [form, setForm] = useState(EMPTY_FORM)
  const [errors, setErrors] = useState({})
  const { showToast } = useToast()

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
    if (errors[name]) setErrors((current) => ({ ...current, [name]: undefined }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const validation = validateContact(form)
    setErrors(validation)
    if (Object.keys(validation).length > 0) return
    setForm(EMPTY_FORM)
    showToast('Mensagem enviada! Responderemos em até 24h.')
  }

  const fieldProps = (name) => ({
    id: `contact-${name}`,
    name,
    value: form[name],
    onChange: handleChange,
    'aria-invalid': Boolean(errors[name]),
    'aria-describedby': errors[name] ? `contact-${name}-error` : undefined,
  })

  return (
    <section id="contato" className="section section--muted">
      <div className="container contact">
        <div>
          <span className="eyebrow">Contato</span>
          <h2 className="section__title section__title--left">Fale com um especialista</h2>
          <p className="section__subtitle section__subtitle--left">
            Dúvidas sobre tamanho de quadro, manutenção ou pagamento? Nossa equipe responde rapidinho.
          </p>
          <ul className="contact__info">
            {CONTACT_INFO.map((item) => (
              <li key={item.label}>
                <span className="contact__icon">
                  <Icon name={item.icon} size={20} />
                </span>
                <div>
                  <small>{item.label}</small>
                  <span>{item.value}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <form className="form" onSubmit={handleSubmit} noValidate>
          <div className="form__field">
            <label htmlFor="contact-name">Nome</label>
            <input type="text" autoComplete="name" {...fieldProps('name')} />
            {errors.name && <p id="contact-name-error" className="form-error">{errors.name}</p>}
          </div>
          <div className="form__field">
            <label htmlFor="contact-email">E-mail</label>
            <input type="email" autoComplete="email" {...fieldProps('email')} />
            {errors.email && <p id="contact-email-error" className="form-error">{errors.email}</p>}
          </div>
          <div className="form__field">
            <label htmlFor="contact-message">Mensagem</label>
            <textarea rows="5" {...fieldProps('message')} />
            {errors.message && <p id="contact-message-error" className="form-error">{errors.message}</p>}
          </div>
          <button type="submit" className="btn btn--primary btn--block">
            Enviar mensagem
          </button>
        </form>
      </div>
    </section>
  )
}
