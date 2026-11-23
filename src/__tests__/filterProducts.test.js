import { describe, expect, it } from 'vitest'
import { filterProducts } from '../utils/filterProducts.js'
import { discountPercent, formatPrice } from '../utils/format.js'
import { isValidEmail, validateContact } from '../utils/validation.js'

const list = [
  { id: '1', name: 'Trail', brand: 'Caloi', category: 'mountain', price: 3000, rating: 4.5, reviews: 10 },
  { id: '2', name: 'Elétrica Volt', brand: 'BikeMax', category: 'eletrica', price: 9000, oldPrice: 10000, rating: 4.9, reviews: 5 },
  { id: '3', name: 'Kids', brand: 'Sense', category: 'infantil', price: 600, oldPrice: 900, rating: 4.7, reviews: 3 },
]

describe('filterProducts', () => {
  it('retorna tudo com os filtros padrão', () => {
    expect(filterProducts(list)).toHaveLength(3)
  })

  it('filtra por categoria', () => {
    expect(filterProducts(list, { category: 'infantil' }).map((p) => p.id)).toEqual(['3'])
  })

  it('busca ignorando acentos e maiúsculas, inclusive pela marca', () => {
    expect(filterProducts(list, { query: 'ELETRICA' }).map((p) => p.id)).toEqual(['2'])
    expect(filterProducts(list, { query: 'caloi' }).map((p) => p.id)).toEqual(['1'])
  })

  it('filtra por faixa de preço', () => {
    expect(filterProducts(list, { priceRange: 'ate-2000' }).map((p) => p.id)).toEqual(['3'])
  })

  it('ordena por menor preço e por maior desconto', () => {
    expect(filterProducts(list, { sort: 'menor-preco' }).map((p) => p.id)).toEqual(['3', '1', '2'])
    expect(filterProducts(list, { sort: 'desconto' })[0].id).toBe('3')
  })

  it('não altera o array original', () => {
    const copy = [...list]
    filterProducts(list, { sort: 'maior-preco' })
    expect(list).toEqual(copy)
  })
})

describe('utilitários', () => {
  it('formata preço em reais', () => {
    expect(formatPrice(1299.9).replace(/\s/g, ' ')).toBe('R$ 1.299,90')
  })

  it('calcula o percentual de desconto', () => {
    expect(discountPercent(90, 100)).toBe(10)
    expect(discountPercent(100)).toBe(0)
  })

  it('valida e-mail e formulário de contato', () => {
    expect(isValidEmail('a@b.com')).toBe(true)
    expect(isValidEmail('invalido')).toBe(false)
    expect(validateContact({ name: '', email: 'x', message: 'oi' })).toHaveProperty('email')
    expect(validateContact({ name: 'Ana', email: 'ana@x.com', message: 'Mensagem longa o bastante' })).toEqual({})
  })
})
