import ProductImage from '../ui/ProductImage.jsx'
import Rating from '../ui/Rating.jsx'
import Icon from '../ui/Icon.jsx'
import { discountPercent, formatPrice, installment } from '../../utils/format.js'
import { CATEGORIES } from '../../data/products.js'
import './product.css'

const categoryLabel = (id) => CATEGORIES.find((c) => c.id === id)?.label ?? id

export default function ProductCard({ product, onAddToCart, onOpenDetails }) {
  const { name, brand, category, price, oldPrice, rating, reviews, stock, badge, image } = product
  const discount = discountPercent(price, oldPrice)
  const outOfStock = stock === 0

  return (
    <article className={`card ${outOfStock ? 'card--disabled' : ''}`}>
      <button
        type="button"
        className="card__media"
        onClick={() => onOpenDetails(product)}
        aria-label={`Ver detalhes de ${name}`}
      >
        <ProductImage src={image} alt={name} />
        <div className="card__badges">
          {badge && <span className="pill pill--dark">{badge}</span>}
          {discount > 0 && <span className="pill pill--accent">-{discount}%</span>}
        </div>
        {outOfStock && <span className="card__soldout">Esgotado</span>}
      </button>

      <div className="card__body">
        <p className="card__meta">
          {brand} · {categoryLabel(category)}
        </p>
        <h3 className="card__title">
          <button type="button" onClick={() => onOpenDetails(product)}>
            {name}
          </button>
        </h3>
        <Rating value={rating} reviews={reviews} />

        <div className="card__footer">
          <div className="price">
            {oldPrice && <s className="price__old">{formatPrice(oldPrice)}</s>}
            <strong className="price__current">{formatPrice(price)}</strong>
            <span className="price__installment">12x de {formatPrice(installment(price))}</span>
          </div>
          <button
            type="button"
            className="btn btn--primary btn--icon"
            onClick={() => onAddToCart(product)}
            disabled={outOfStock}
            aria-label={outOfStock ? `${name} esgotado` : `Adicionar ${name} ao carrinho`}
          >
            <Icon name="cart" size={18} />
          </button>
        </div>
      </div>
    </article>
  )
}
