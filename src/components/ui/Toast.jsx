import Icon from './Icon.jsx'

export default function Toast({ message, variant, onClose }) {
  return (
    <div className={`toast toast--${variant}`}>
      <Icon name={variant === 'error' ? 'close' : 'check'} size={18} />
      <span>{message}</span>
      <button type="button" className="toast__close" onClick={onClose} aria-label="Fechar aviso">
        <Icon name="close" size={14} />
      </button>
    </div>
  )
}
