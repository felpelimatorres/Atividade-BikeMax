const currency = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })

/** Formata um número como moeda brasileira (ex.: R$ 1.299,90). */
export const formatPrice = (value) => currency.format(value)

/** Percentual de desconto arredondado entre o preço antigo e o atual. */
export const discountPercent = (price, oldPrice) =>
  oldPrice && oldPrice > price ? Math.round((1 - price / oldPrice) * 100) : 0

/** Valor de cada parcela sem juros. */
export const installment = (price, times = 12) => price / times
