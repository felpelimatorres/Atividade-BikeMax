import { useState } from 'react'
import Icon from './Icon.jsx'

/** Imagem com carregamento preguiçoso e placeholder caso a URL falhe. */
export default function ProductImage({ src, alt, className = '', eager = false }) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div className={`product-image product-image--fallback ${className}`} role="img" aria-label={alt}>
        <Icon name="bike" size={48} strokeWidth={1.5} />
      </div>
    )
  }

  return (
    <img
      className={`product-image ${className}`}
      src={src}
      alt={alt}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      onError={() => setFailed(true)}
    />
  )
}
