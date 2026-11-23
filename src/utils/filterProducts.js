export const SORT_OPTIONS = [
  { id: 'relevancia', label: 'Relevância' },
  { id: 'menor-preco', label: 'Menor preço' },
  { id: 'maior-preco', label: 'Maior preço' },
  { id: 'avaliacao', label: 'Melhor avaliação' },
  { id: 'desconto', label: 'Maior desconto' },
]

export const PRICE_RANGES = [
  { id: 'todos', label: 'Qualquer preço', min: 0, max: Infinity },
  { id: 'ate-2000', label: 'Até R$ 2.000', min: 0, max: 2000 },
  { id: '2000-5000', label: 'R$ 2.000 a R$ 5.000', min: 2000, max: 5000 },
  { id: 'acima-5000', label: 'Acima de R$ 5.000', min: 5000, max: Infinity },
]

const normalize = (text) =>
  text.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().trim()

const discountOf = (p) => (p.oldPrice ? 1 - p.price / p.oldPrice : 0)

const sorters = {
  'menor-preco': (a, b) => a.price - b.price,
  'maior-preco': (a, b) => b.price - a.price,
  avaliacao: (a, b) => b.rating - a.rating || b.reviews - a.reviews,
  desconto: (a, b) => discountOf(b) - discountOf(a),
}

/**
 * Função pura que aplica categoria, faixa de preço, busca e ordenação.
 * Não altera o array original.
 */
export function filterProducts(products, { category = 'todas', priceRange = 'todos', query = '', sort = 'relevancia' } = {}) {
  const range = PRICE_RANGES.find((r) => r.id === priceRange) ?? PRICE_RANGES[0]
  const term = normalize(query)

  const result = products.filter(
    (p) =>
      (category === 'todas' || p.category === category) &&
      p.price >= range.min &&
      p.price < range.max &&
      (!term || normalize(`${p.name} ${p.brand}`).includes(term))
  )

  const sorter = sorters[sort]
  return sorter ? [...result].sort(sorter) : result
}
