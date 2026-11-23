import { describe, expect, it } from 'vitest'
import { cartActions, cartReducer, getCartTotals, FREE_SHIPPING_THRESHOLD } from '../context/cartReducer.js'

const bike = { id: 'a', name: 'Bike A', price: 1000, image: 'a.jpg', stock: 3 }

describe('cartReducer', () => {
  it('adiciona um produto novo com quantidade 1', () => {
    const state = cartReducer([], { type: cartActions.ADD, payload: { product: bike } })
    expect(state).toEqual([{ ...bike, qty: 1 }])
  })

  it('soma a quantidade quando o produto já está no carrinho', () => {
    const initial = [{ ...bike, qty: 1 }]
    const state = cartReducer(initial, { type: cartActions.ADD, payload: { product: bike, qty: 1 } })
    expect(state[0].qty).toBe(2)
  })

  it('não ultrapassa o estoque disponível', () => {
    const state = cartReducer([], { type: cartActions.ADD, payload: { product: bike, qty: 10 } })
    expect(state[0].qty).toBe(3)
  })

  it('remove o item quando a quantidade chega a zero', () => {
    const state = cartReducer([{ ...bike, qty: 1 }], {
      type: cartActions.UPDATE_QTY,
      payload: { id: 'a', qty: 0 },
    })
    expect(state).toEqual([])
  })

  it('não altera o estado original (imutabilidade)', () => {
    const initial = [{ ...bike, qty: 1 }]
    const frozen = Object.freeze(initial.map(Object.freeze))
    expect(() =>
      cartReducer(frozen, { type: cartActions.ADD, payload: { product: bike } })
    ).not.toThrow()
  })

  it('esvazia o carrinho', () => {
    expect(cartReducer([{ ...bike, qty: 2 }], { type: cartActions.CLEAR })).toEqual([])
  })
})

describe('getCartTotals', () => {
  it('calcula subtotal, contagem e quanto falta para o frete grátis', () => {
    const totals = getCartTotals([{ ...bike, qty: 1 }])
    expect(totals).toEqual({
      subtotal: 1000,
      count: 1,
      missingForFreeShipping: FREE_SHIPPING_THRESHOLD - 1000,
    })
  })

  it('zera o valor faltante quando atinge o frete grátis', () => {
    expect(getCartTotals([{ ...bike, qty: 3 }]).missingForFreeShipping).toBe(0)
  })
})
