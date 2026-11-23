import { categorias } from '../data.js'

export default function Filtros({ categoria, setCategoria, busca, setBusca, ordem, setOrdem }) {
  return (
    <div className="filtros">
      <div className="chips">
        {categorias.map((c) => (
          <button
            key={c}
            className={`chip ${categoria === c ? 'ativo' : ''}`}
            onClick={() => setCategoria(c)}
          >
            {c}
          </button>
        ))}
      </div>
      <div className="filtros-linha">
        <input
          type="search"
          placeholder="Buscar bicicleta..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />
        <select value={ordem} onChange={(e) => setOrdem(e.target.value)}>
          <option value="relevancia">Relevância</option>
          <option value="menor">Menor preço</option>
          <option value="maior">Maior preço</option>
          <option value="avaliacao">Melhor avaliação</option>
        </select>
      </div>
    </div>
  )
}
