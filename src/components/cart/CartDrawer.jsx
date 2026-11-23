import { useState } from 'react'
import CartItem from './CartItem.jsx'
import Icon from '../ui/Icon.jsx'
import { useCart } from '../../hooks/useCart.js'
import { useOverlay } from '../../hooks/useOverlay.js'
import { FREE_SHIPPING_THRESHOLD } from '../../context/cartReducer.js'
import { formatPrice, installment } from '../../utils/format.js'
import './cart.css'

export default function CartDrawer() {
  const { items, subtotal, missingForFreeShipping, isOpen, closeCart, updateQty, removeItem, clearCart } =
    useCart()
  const [orderPlaced, setOrderPlaced] = useState(false)

  const handleClose = () => {
    closeCart()
    setOrderPlaced(false)
  }
  useOverlay(isOpen, handleClose)

  const handleCheckout = () => {
    clearCart()
    setOrderPlaced(true)
  }

  const shippingProgress = Math.min((subtotal / FREE_SHIPPING_THRESHOLD) * 100, 100)

  return (
    <>
      <div className={`backdrop ${isOpen ? 'backdrop--visible' : ''}`} onClick={handleClose} />
      <aside
        className={`drawer ${isOpen ? 'drawer--open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cart-title"
        aria-hidden={!isOpen}
      >
        <div className="drawer__header">
          <h2 id="cart-title">Seu carrinho</h2>
          <button type="button" className="icon-btn icon-btn--dark" onClick={handleClose} aria-label="Fechar carrinho">
            <Icon name="close" size={20} />
          </button>
        </div>

        {orderPlaced ? (
          <div className="drawer__empty">
            <span className="drawer__success-icon">
              <Icon name="check" size={32} />
            </span>
            <h3>Pedido confirmado!</h3>
            <p>Obrigado por comprar na BikeMax. Você receberá os detalhes por e-mail.</p>
            <button type="button" className="btn btn--primary" onClick={handleClose}>
              Continuar comprando
            </button>
          </div>
        ) : items.length === 0 ? (
          <div className="drawer__empty">
            <Icon name="cart" size={48} strokeWidth={1.5} />
            <p>Seu carrinho está vazio.</p>
            <a href="#produtos" className="btn btn--primary" onClick={handleClose}>
              Ver bicicletas
            </a>
          </div>
        ) : (
          <>
            <div className="shipping">
              <p>
                {missingForFreeShipping > 0 ? (
                  <>
                    Faltam <strong>{formatPrice(missingForFreeShipping)}</strong> para o frete grátis
                  </>
                ) : (
                  <strong>Você ganhou frete grátis!</strong>
                )}
              </p>
              <div className="shipping__bar">
                <span style={{ width: `${shippingProgress}%` }} />
              </div>
            </div>

            <ul className="drawer__list">
              {items.map((item) => (
                <CartItem key={item.id} item={item} onUpdateQty={updateQty} onRemove={removeItem} />
              ))}
            </ul>

            <div className="drawer__footer">
              <div className="drawer__row">
                <span>Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <div className="drawer__row">
                <span>Frete</span>
                <span>{missingForFreeShipping > 0 ? 'Calculado no checkout' : 'Grátis'}</span>
              </div>
              <div className="drawer__row drawer__row--total">
                <span>Total</span>
                <strong>{formatPrice(subtotal)}</strong>
              </div>
              <p className="drawer__installment">ou 12x de {formatPrice(installment(subtotal))} sem juros</p>
              <button type="button" className="btn btn--primary btn--block" onClick={handleCheckout}>
                Finalizar compra <Icon name="arrowRight" size={18} />
              </button>
              <button type="button" className="btn-link" onClick={clearCart}>
                Esvaziar carrinho
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  )
}
