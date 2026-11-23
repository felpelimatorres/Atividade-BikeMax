import { useCallback, useEffect, useMemo, useReducer, useState } from 'react'
import { CartContext } from './contexts.js'
import { cartActions, cartReducer, getCartTotals } from './cartReducer.js'

const STORAGE_KEY = 'bikemax:cart'

function loadCart() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY))
    return Array.isArray(saved) ? saved : []
  } catch {
    return []
  }
}

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(cartReducer, undefined, loadCart)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    } catch {
      // Armazenamento indisponível (modo privado, cota cheia): o carrinho segue em memória.
    }
  }, [items])

  const addItem = useCallback(
    (product, qty = 1) => dispatch({ type: cartActions.ADD, payload: { product, qty } }),
    []
  )
  const updateQty = useCallback(
    (id, qty) => dispatch({ type: cartActions.UPDATE_QTY, payload: { id, qty } }),
    []
  )
  const removeItem = useCallback((id) => dispatch({ type: cartActions.REMOVE, payload: { id } }), [])
  const clearCart = useCallback(() => dispatch({ type: cartActions.CLEAR }), [])
  const openCart = useCallback(() => setIsOpen(true), [])
  const closeCart = useCallback(() => setIsOpen(false), [])

  const value = useMemo(
    () => ({
      items,
      ...getCartTotals(items),
      isOpen,
      addItem,
      updateQty,
      removeItem,
      clearCart,
      openCart,
      closeCart,
    }),
    [items, isOpen, addItem, updateQty, removeItem, clearCart, openCart, closeCart]
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
