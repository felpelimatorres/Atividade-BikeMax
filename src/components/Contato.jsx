import { useState } from 'react'

export default function Contato() {
  const [form, setForm] = useState({ nome: '', email: '', mensagem: '' })
  const [enviado, setEnviado] = useState(false)

  const alterar = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  function enviar(e) {
    e.preventDefault()
    setEnviado(true)
    setForm({ nome: '', email: '', mensagem: '' })
  }

  return (
    <section id="contato" className="secao container">
      <h2 className="titulo-secao">Fale conosco</h2>
      {enviado ? (
        <p className="sucesso">Mensagem enviada! Responderemos em breve. 🚴</p>
      ) : (
        <form className="form" onSubmit={enviar}>
          <input name="nome" placeholder="Seu nome" value={form.nome} onChange={alterar} required />
          <input name="email" type="email" placeholder="Seu e-mail" value={form.email} onChange={alterar} required />
          <textarea name="mensagem" rows="4" placeholder="Sua mensagem" value={form.mensagem} onChange={alterar} required />
          <button className="btn btn-primario" type="submit">Enviar</button>
        </form>
      )}
    </section>
  )
}
