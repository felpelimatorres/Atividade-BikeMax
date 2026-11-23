const img = (id) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=600&q=70`

export const categorias = ['Todas', 'Mountain Bike', 'Speed', 'Urbana', 'Elétrica', 'Infantil']

export const produtos = [
  { id: 1, nome: 'Trilha X29 Pro', categoria: 'Mountain Bike', preco: 4299.9, avaliacao: 4.8,
    imagem: img('photo-1576435728678-68d0fbf94e91'), descricao: 'Quadro em alumínio, aro 29, 21 marchas e suspensão dianteira.' },
  { id: 2, nome: 'Aero Speed 700', categoria: 'Speed', preco: 6899.0, avaliacao: 4.9,
    imagem: img('photo-1485965120184-e220f721d03e'), descricao: 'Quadro de carbono ultraleve, grupo 22v e freios a disco.' },
  { id: 3, nome: 'City Comfort', categoria: 'Urbana', preco: 1899.9, avaliacao: 4.5,
    imagem: img('photo-1507035895480-2b3156c31fc8'), descricao: 'Banco confortável, cestinha e paralamas para o dia a dia.' },
  { id: 4, nome: 'Volt E-Urban', categoria: 'Elétrica', preco: 8990.0, avaliacao: 4.7,
    imagem: img('photo-1571068316344-75bc76f77890'), descricao: 'Motor 350W, autonomia de 60 km e bateria removível.' },
  { id: 5, nome: 'Kids Aro 16', categoria: 'Infantil', preco: 699.9, avaliacao: 4.6,
    imagem: img('photo-1595432541891-a461100d3054'), descricao: 'Com rodinhas laterais removíveis e cores vibrantes.' },
  { id: 6, nome: 'Montanha Hardtail 27', categoria: 'Mountain Bike', preco: 3199.0, avaliacao: 4.4,
    imagem: img('photo-1532298229144-0ec0c57515c7'), descricao: 'Aro 27.5, freio hidráulico e pneus para terrenos mistos.' },
  { id: 7, nome: 'Retro Classic', categoria: 'Urbana', preco: 2299.0, avaliacao: 4.6,
    imagem: img('photo-1502744688674-c619d1586c9e'), descricao: 'Estilo vintage com quadro de aço e guidão alto.' },
  { id: 8, nome: 'Road Endurance', categoria: 'Speed', preco: 5499.9, avaliacao: 4.7,
    imagem: img('photo-1511994298241-608e28f14fde'), descricao: 'Geometria confortável para longas distâncias.' },
]
