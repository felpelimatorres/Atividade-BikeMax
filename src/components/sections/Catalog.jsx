import { useCallback, useMemo, useState } from 'react'
import ProductCard from '../product/ProductCard.jsx'
import ProductFilters from '../product/ProductFilters.jsx'
import ProductModal from '../product/ProductModal.jsx'
import { products } from '../../data/products.js'
import { filterProducts } from '../../utils/filterProducts.js'
import { useCart } from '../../hooks/useCart.js'
import { useToast } from '../../hooks/useToast.js'
import './sections.css'

const INITIAL_FILTERS = { category: 'todas', priceRange: 'todos', query: '', sort: 'relevancia' }

export default function Catalog() {
  const [filters, setFilters] = useState(INITIAL_FILTERS)
  const [selected, setSelected] = useState(null)
  const { addItem, items } = useCart()
  const { showToast } = useToast()

  const visible = useMemo(() => filterProducts(products, filters), [filters])

  const handleAdd = useCallback(
    (product, qty = 1) => {
      const inCart = items.find((i) => i.id === product.id)?.qty ?? 0
      if (inCart + qty > product.stock) {
        showToast(`Estoque máximo de ${product.name} atingido`, 'error')
        return
      }
      addItem(product, qty)
      showToast(`${product.name} adicionada ao carrinho`)
    },
    [items, addItem, showToast]
  )

  const closeModal = useCallback(() => setSelected(null), [])

  return (
    <section id="produtos" className="section">
      <div className="container">
        <header className="section__header">
          <span className="eyebrow">Catálogo</span>
          <h2 className="section__title">Escolha sua próxima bike</h2>
          <p className="section__subtitle">
            Modelos selecionados para trilha, estrada, cidade e para os pequenos ciclistas.
          </p>
        </header>

        <ProductFilters filters={filters} onChange={setFilters} />

        <p className="results-count" aria-live="polite">
          {visible.length} {visible.length === 1 ? 'produto encontrado' : 'produtos encontrados'}
        </p>

        {visible.length > 0 ? (
          <div className="product-grid">
            {visible.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAdd}
                onOpenDetails={setSelected}
              />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <p>Nenhuma bicicleta corresponde aos filtros selecionados.</p>
            <button type="button" className="btn btn--outline" onClick={() => setFilters(INITIAL_FILTERS)}>
              Limpar filtros
            </button>
          </div>
        )}
      </div>

      {selected && <ProductModal product={selected} onClose={closeModal} onAddToCart={handleAdd} />}
    </section>
  )
}
