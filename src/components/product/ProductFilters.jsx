import Icon from '../ui/Icon.jsx'
import { CATEGORIES } from '../../data/products.js'
import { PRICE_RANGES, SORT_OPTIONS } from '../../utils/filterProducts.js'
import './product.css'

export default function ProductFilters({ filters, onChange }) {
  const update = (field) => (event) => onChange({ ...filters, [field]: event.target.value })

  return (
    <div className="filters">
      <div className="filters__chips" role="group" aria-label="Filtrar por categoria">
        {CATEGORIES.map((c) => (
          <button
            key={c.id}
            type="button"
            className={`chip ${filters.category === c.id ? 'chip--active' : ''}`}
            aria-pressed={filters.category === c.id}
            onClick={() => onChange({ ...filters, category: c.id })}
          >
            {c.label}
          </button>
        ))}
      </div>

      <div className="filters__row">
        <label className="field field--search">
          <span className="sr-only">Buscar por nome ou marca</span>
          <Icon name="search" size={18} />
          <input
            type="search"
            placeholder="Buscar por nome ou marca..."
            value={filters.query}
            onChange={update('query')}
          />
        </label>

        <label className="field">
          <span className="sr-only">Faixa de preço</span>
          <select value={filters.priceRange} onChange={update('priceRange')}>
            {PRICE_RANGES.map((r) => (
              <option key={r.id} value={r.id}>
                {r.label}
              </option>
            ))}
          </select>
        </label>

        <label className="field">
          <span className="sr-only">Ordenar por</span>
          <select value={filters.sort} onChange={update('sort')}>
            {SORT_OPTIONS.map((o) => (
              <option key={o.id} value={o.id}>
                {o.label}
              </option>
            ))}
          </select>
        </label>
      </div>
    </div>
  )
}
