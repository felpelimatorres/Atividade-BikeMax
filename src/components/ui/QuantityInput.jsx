import Icon from './Icon.jsx'

export default function QuantityInput({ value, onChange, min = 1, max = Infinity, label }) {
  return (
    <div className="qty" role="group" aria-label={`Quantidade de ${label}`}>
      <button
        type="button"
        onClick={() => onChange(value - 1)}
        disabled={value <= min}
        aria-label="Diminuir quantidade"
      >
        <Icon name="minus" size={14} />
      </button>
      <span className="qty__value" aria-live="polite">{value}</span>
      <button
        type="button"
        onClick={() => onChange(value + 1)}
        disabled={value >= max}
        aria-label="Aumentar quantidade"
      >
        <Icon name="plus" size={14} />
      </button>
    </div>
  )
}
