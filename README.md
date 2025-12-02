# NaMão — protótipo de app de receitas

Este repositório contém um protótipo frontend (React + Vite + TypeScript) chamado **NaMão** — um app simples para descobrir receitas com os ingredientes que você tem em casa. O projeto é intencionalmente leve e voltado para demonstração / UI mock.

Principais características
- Lista de receitas mockadas (em `src/data/mockData.ts`).
- Busca por ingredientes: a tela `Home` passa os ingredientes para `ReceitasEncontradas` via `location.state` e a página filtra receitas por substring nos ingredientes.
- Perfil do usuário persistido no `localStorage` (chave `namao_user_profile`).
- Receitas salvas persistidas no `localStorage` (chave `namao_saved_recipes`).
- Favicon definido programaticamente usando `src/assets/hand-flame-icon.png` (em `src/main.tsx`).

Tech stack
- Vite
- React + TypeScript
- Tailwind CSS
- React Router
- TanStack React Query

Estrutura importante
- `src/pages/` — páginas da aplicação (Home, Perfil, Salvas, Receita, etc.).
- `src/data/mockData.ts` — receitas mock e dados iniciais.
- `src/lib/userProfile.ts` — helper para persistir o perfil no localStorage.
- `src/lib/recipes.ts` — helper para gerenciar ids de receitas salvas no localStorage.
- `src/types/assets.d.ts` — declarações mínimas para importar imagens (png/jpg/svg).

Scripts
- Instalar dependências:
	```bash
	npm install
	```
- Rodar em desenvolvimento:
	```bash
	npm run dev
	```
- Build para produção:
	```bash
	npm run build
	```
- Pré-visualizar build:
	```bash
	npm run preview
	```

