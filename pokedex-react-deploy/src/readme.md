# Pokédex Pro — React SPA & PokéAPI

Aplicação web Single Page Application (SPA) desenvolvida com **React**, **Tailwind CSS** e **React Router**, consumindo dados oficiais em tempo real da **PokéAPI** com artes oficiais, filtros por tipo elemental, busca instantânea e rotas dinâmicas.

🔗 **Acesse o Deploy Online:** [https://pokedex-react-deploy.vercel.app](https://pokedex-react-deploy.vercel.app) *(substitua pelo link gerado após o deploy)*

---

## 📸 Capturas de Tela

### Versão Desktop
![Preview Desktop](./docs/preview-desktop.png)

### Versão Mobile (Responsiva)
![Preview Mobile](./docs/preview-mobile.png)

---

## 🚀 Tecnologias Utilizadas

- **React 18** (`useState`, `useEffect`)
- **Vite** (Build otimizado de produção)
- **Tailwind CSS** (Estilização responsiva *mobile-first* em tema escuro)
- **React Router DOM** (Roteamento SPA com rotas dinâmicas `/pokemon/:name` e fallback de rotas)
- **PokéAPI** (Consumo REST público via `fetch` assíncrono)
- **Vercel / Netlify** (Deploy contínuo com SPA Fallback configurado via `vercel.json` e `public/_redirects`)

---

## ⚙️ Instruções para Rodar Localmente

1. Clone este repositório:
   ```bash
   git clone [https://github.com/VirtuSoares/pokedex-react-deploy.git](https://github.com/VirtuSoares/pokedex-react-deploy.git)