const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

export const isValidEmail = (value) => EMAIL_REGEX.test(value.trim())

/** Valida o formulário de contato e retorna um objeto { campo: mensagem }. */
export function validateContact({ name, email, message }) {
  const errors = {}
  if (name.trim().length < 2) errors.name = 'Informe seu nome.'
  if (!isValidEmail(email)) errors.email = 'Informe um e-mail válido.'
  if (message.trim().length < 10) errors.message = 'A mensagem deve ter pelo menos 10 caracteres.'
  return errors
}
