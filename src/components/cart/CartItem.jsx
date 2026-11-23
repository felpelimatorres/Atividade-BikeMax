import ProductImage from '../ui/ProductImage.jsx'
import QuantityInput from '../ui/QuantityInput.jsx'
import Icon from '../ui/Icon.jsx'
import { formatPrice } from '../../utils/format.js'

export default function CartItem({ item, onUpdateQty, onRemove }) {
  return (
    <li className="cart-item">
      <ProductImage src={item.image.replace('w=800', 'w=200')} alt={item.name} className="cart-item__img" />
      <div className="cart-item__info">
        <div className="cart-item__top">
          <strong>{item.name}</strong>
          <button
            type="button"
            className="cart-item__remove"
            onClick={() => onRemove(item.id)}
            aria-label={`Remover ${item.name}`}
          >
            <Icon name="trash" size={16} />
          </button>
        </div>
        <div className="cart-item__bottom">
          <QuantityInput
            value={item.qty}
            min={0}
            max={item.stock}
            onChange={(qty) => onUpdateQty(item.id, qty)}
            label={item.name}
          />
          <span className="cart-item__price">{formatPrice(item.price * item.qty)}</span>
        </div>
      </div>
    </li>
  )
}
