export default function Rating({ value, reviews }) {
  const percent = (value / 5) * 100

  return (
    <div className="rating" aria-label={`Avaliação ${value.toFixed(1)} de 5`}>
      <span className="rating__stars" style={{ '--rating': `${percent}%` }} aria-hidden="true">
        ★★★★★
      </span>
      <span className="rating__value">{value.toFixed(1)}</span>
      {reviews != null && <span className="rating__reviews">({reviews})</span>}
    </div>
  )
}
