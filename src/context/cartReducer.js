export const FREE_SHIPPING_THRESHOLD = 1999

export const cartActions = {
  ADD: 'cart/add',
  UPDATE_QTY: 'cart/updateQty',
  REMOVE: 'cart/remove',
  CLEAR: 'cart/clear',
}

/**
 * Reducer puro do carrinho. O estado é um array de
 * `{ id, name, price, image, stock, qty }`.
 */
export function cartReducer(state, action) {
  switch (action.type) {
    case cartActions.ADD: {
      const { product, qty = 1 } = action.payload
      const existing = state.find((item) => item.id === product.id)
      if (existing) {
        return state.map((item) =>
          item.id === product.id
            ? { ...item, qty: Math.min(item.qty + qty, product.stock) }
            : item
        )
      }
      const { id, name, price, image, stock } = product
      return [...state, { id, name, price, image, stock, qty: Math.min(qty, stock) }]
    }
    case cartActions.UPDATE_QTY: {
      const { id, qty } = action.payload
      if (qty <= 0) return state.filter((item) => item.id !== id)
      return state.map((item) =>
        item.id === id ? { ...item, qty: Math.min(qty, item.stock) } : item
      )
    }
    case cartActions.REMOVE:
      return state.filter((item) => item.id !== action.payload.id)
    case cartActions.CLEAR:
      return []
    default:
      return state
  }
}

export function getCartTotals(items) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0)
  const count = items.reduce((sum, item) => sum + item.qty, 0)
  const missingForFreeShipping = Math.max(FREE_SHIPPING_THRESHOLD - subtotal, 0)
  return { subtotal, count, missingForFreeShipping }
}
