# Fantasia — E-commerce

Projeto React + Vite + TypeScript com TailwindCSS para e-commerce de fantasias e acessórios.

## Scripts

- `npm run dev`: inicia servidor de desenvolvimento
- `npm run build`: build de produção
- `npm run preview`: preview do build

## Instalação (Windows)

1. Instale Node.js (se necessário) com Winget:
   - Abra PowerShell como administrador e execute:
   ```powershell
   winget install OpenJS.NodeJS
   ```
2. Instale dependências:
   ```powershell
   cd "C:\Users\dhieg\Desktop\PROJETO FINAL TIAW\newtintas-ecommerce"
   npm install
   ```
3. Rode o projeto:
   ```powershell
   npm run dev
   ```
4. Acesse: http://localhost:5173

## Estrutura

- `src/components`: Header, Footer, ProductCard
- `src/pages`: Home, Catalog, ProductDetails, Cart, About, Contact, Privacy
- `public/data/products.json`: catálogo base com filtros e busca

## Próximos passos
- Implementar estado do carrinho (Context API) com adicionar/remover/quantidade e resumo.
- Refinar tema visual e responsividade.
