import { useEffect, useMemo, useState } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Filtros from './components/Filtros.jsx'
import ProductCard from './components/ProductCard.jsx'
import Carrinho from './components/Carrinho.jsx'
import Servicos from './components/Servicos.jsx'
import Contato from './components/Contato.jsx'
import Footer from './components/Footer.jsx'
import { produtos } from './data.js'

function carregarCarrinho() {
  try {
    return JSON.parse(localStorage.getItem('carrinho')) || []
  } catch {
    return []
  }
}

export default function App() {
  const [categoria, setCategoria] = useState('Todas')
  const [busca, setBusca] = useState('')
  const [ordem, setOrdem] = useState('relevancia')
  const [carrinho, setCarrinho] = useState(carregarCarrinho)
  const [carrinhoAberto, setCarrinhoAberto] = useState(false)

  useEffect(() => {
    try {
      localStorage.setItem('carrinho', JSON.stringify(carrinho))
    } catch {
      /* armazenamento indisponível */
    }
  }, [carrinho])

  const lista = useMemo(() => {
    const termo = busca.trim().toLowerCase()
    let r = produtos.filter(
      (p) =>
        (categoria === 'Todas' || p.categoria === categoria) &&
        p.nome.toLowerCase().includes(termo)
    )
    if (ordem === 'menor') r = [...r].sort((a, b) => a.preco - b.preco)
    if (ordem === 'maior') r = [...r].sort((a, b) => b.preco - a.preco)
    if (ordem === 'avaliacao') r = [...r].sort((a, b) => b.avaliacao - a.avaliacao)
    return r
  }, [categoria, busca, ordem])

  function adicionar(produto) {
    setCarrinho((atual) => {
      const item = atual.find((i) => i.id === produto.id)
      if (item) return atual.map((i) => (i.id === produto.id ? { ...i, qtd: i.qtd + 1 } : i))
      return [...atual, { ...produto, qtd: 1 }]
    })
  }

  function alterarQtd(id, delta) {
    setCarrinho((atual) =>
      atual
        .map((i) => (i.id === id ? { ...i, qtd: i.qtd + delta } : i))
        .filter((i) => i.qtd > 0)
    )
  }

  const totalItens = carrinho.reduce((s, i) => s + i.qtd, 0)

  return (
    <>
      <Header totalItens={totalItens} onAbrirCarrinho={() => setCarrinhoAberto(true)} />
      <main>
        <Hero />
        <section id="produtos" className="secao container">
          <h2 className="titulo-secao">Nossas bicicletas</h2>
          <Filtros
            categoria={categoria}
            setCategoria={setCategoria}
            busca={busca}
            setBusca={setBusca}
            ordem={ordem}
            setOrdem={setOrdem}
          />
          {lista.length ? (
            <div className="grade">
              {lista.map((p) => (
                <ProductCard key={p.id} produto={p} onAdicionar={adicionar} />
              ))}
            </div>
          ) : (
            <p className="vazio">Nenhuma bicicleta encontrada.</p>
          )}
        </section>
        <Servicos />
        <Contato />
      </main>
      <Footer />
      <Carrinho
        aberto={carrinhoAberto}
        itens={carrinho}
        onFechar={() => setCarrinhoAberto(false)}
        onAlterarQtd={alterarQtd}
        onLimpar={() => setCarrinho([])}
      />
    </>
  )
}
