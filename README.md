# 🚲 BikeMax — Loja de Bicicletas

Loja virtual de bicicletas feita com **React 18 + Vite**, HTML, CSS e JavaScript.

## Funcionalidades

- **Catálogo com 18 bicicletas** em 5 categorias (Mountain Bike, Speed, Urbana, Elétrica e Infantil)
- **Filtros** por categoria, faixa de preço, busca por nome/marca (ignora acentos) e ordenação
- **Modal de detalhes** com ficha técnica, estoque e seletor de quantidade
- **Carrinho lateral** persistido no `localStorage`, com limite de estoque e barra de progresso para frete grátis
- **Notificações (toasts)** acessíveis para ações do usuário
- Formulários de **newsletter** e **contato** com validação
- Layout **responsivo** com menu mobile e suporte a `prefers-reduced-motion`

## Estrutura

```
src/
├── components/
│   ├── cart/        # Gaveta do carrinho e itens
│   ├── layout/      # Header e Footer
│   ├── product/     # Card, filtros e modal de produto
│   ├── sections/    # Seções da página (Hero, Catálogo, Vantagens...)
│   └── ui/          # Componentes reutilizáveis (Icon, Rating, Toast...)
├── context/         # Providers e reducer do carrinho
├── data/            # Catálogo de produtos
├── hooks/           # useCart, useToast, useOverlay
├── styles/          # Tokens de design e estilos globais
├── utils/           # Funções puras (formatação, filtros, validação)
└── __tests__/       # Testes unitários (Vitest)
```

## Boas práticas aplicadas

- Componentes pequenos e com responsabilidade única, agrupados por domínio
- Estado global do carrinho com **Context + useReducer** (reducer puro e testado)
- Lógica de negócio em **funções puras** separadas da interface (`utils/`)
- **Acessibilidade**: HTML semântico, `aria-*`, foco visível, link "pular para o conteúdo", fechar modais com Esc
- **Design tokens** em variáveis CSS e CSS organizado por componente
- Imagens com `loading="lazy"` e fallback em caso de erro
- **ESLint** (regras de React e Hooks) e **testes unitários** com Vitest

## Como rodar

```bash
npm install      # instala as dependências
npm run dev      # servidor de desenvolvimento em http://localhost:5173
npm test         # roda os testes
npm run lint     # verifica o código
npm run build    # gera a versão de produção em dist/
npm run preview  # serve a versão de produção em http://localhost:4173
```

## Deploy

Hospedado na [Vercel](https://vercel.com): framework **Vite**, comando de build `npm run build`, pasta de saída `dist`.

---

Projeto acadêmico. Preços, produtos e depoimentos são ilustrativos. Fotos: [Unsplash](https://unsplash.com).
