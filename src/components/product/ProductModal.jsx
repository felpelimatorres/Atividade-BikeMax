import { useState } from 'react'
import ProductImage from '../ui/ProductImage.jsx'
import Rating from '../ui/Rating.jsx'
import Icon from '../ui/Icon.jsx'
import QuantityInput from '../ui/QuantityInput.jsx'
import { useOverlay } from '../../hooks/useOverlay.js'
import { discountPercent, formatPrice, installment } from '../../utils/format.js'
import './product.css'

export default function ProductModal({ product, onClose, onAddToCart }) {
  const [qty, setQty] = useState(1)
  useOverlay(true, onClose)

  const { name, brand, price, oldPrice, rating, reviews, stock, image, description, specs } = product
  const discount = discountPercent(price, oldPrice)
  const outOfStock = stock === 0

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button type="button" className="modal__close icon-btn" onClick={onClose} aria-label="Fechar" autoFocus>
          <Icon name="close" size={20} />
        </button>

        <div className="modal__media">
          <ProductImage src={image.replace('w=800', 'w=1200')} alt={name} eager />
        </div>

        <div className="modal__content">
          <p className="card__meta">{brand}</p>
          <h2 id="modal-title" className="modal__title">{name}</h2>
          <Rating value={rating} reviews={reviews} />

          <div className="price price--large">
            {oldPrice && (
              <span>
                <s className="price__old">{formatPrice(oldPrice)}</s>
                <span className="pill pill--accent">-{discount}%</span>
              </span>
            )}
            <strong className="price__current">{formatPrice(price)}</strong>
            <span className="price__installment">ou 12x de {formatPrice(installment(price))} sem juros</span>
          </div>

          <p className="modal__description">{description}</p>

          <dl className="specs">
            {Object.entries(specs).map(([label, value]) => (
              <div key={label} className="specs__row">
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>

          <p className={`stock ${stock > 0 && stock <= 5 ? 'stock--low' : ''}`}>
            {outOfStock
              ? 'Produto esgotado no momento'
              : stock <= 5
                ? `Últimas ${stock} unidades!`
                : 'Em estoque — pronta entrega'}
          </p>

          {!outOfStock && (
            <div className="modal__actions">
              <QuantityInput value={qty} max={stock} onChange={setQty} label={name} />
              <button
                type="button"
                className="btn btn--primary btn--block"
                onClick={() => {
                  onAddToCart(product, qty)
                  onClose()
                }}
              >
                <Icon name="cart" size={18} /> Adicionar ao carrinho
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
