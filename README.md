# Klipel Studio — Portfólio

Site portfólio de miniaturas artesanais para RPG. Feito com **Astro** + **Bootstrap** (CDN), conteúdo em **Markdown**, deploy automático no **GitHub Pages**.

## Estrutura

```
src/
  content/minis/*.md   <- 1 arquivo por miniatura (o conteúdo do site)
  content/config.ts    <- schema dos campos do .md
  layouts/Layout.astro <- layout base (nav, footer, Bootstrap)
  components/MiniCard.astro
  pages/
    index.astro        <- início (destaques)
    galeria.astro      <- todas as miniaturas + filtro por categoria
    sobre.astro
    contato.astro
    minis/[...slug].astro <- página de cada miniatura
public/img/            <- imagens das miniaturas
.github/workflows/deploy.yml <- deploy GitHub Pages
```

## Adicionar uma miniatura

Crie `src/content/minis/nome.md`:

```markdown
---
titulo: "Nome da Miniatura"
descricao: "Frase curta de descrição."
imagem: "/img/foto.jpg"
categoria: "Aventureiros"   # vira filtro na galeria
escala: "32mm"
material: "Resina 8K"
data: 2026-06-19
destaque: true              # aparece na home
galeria:                    # opcional, fotos extras
  - "/img/foto-2.jpg"
---

Texto livre em Markdown sobre a peça.
```

Coloque a imagem em `public/img/`. URLs externas (`https://...`) também funcionam.

## Deploy

1. No GitHub: **Settings → Pages → Source = GitHub Actions**.
2. `git push` na branch `main` dispara o workflow e publica em:
   `https://klipelstudio.github.io/Portfolio/`

Se mudar o nome do repositório, ajuste `site` e `base` em `astro.config.mjs`.

## Rodar localmente (opcional, precisa de Node)

```bash
npm install
npm run dev      # http://localhost:4321/Portfolio
npm run build    # gera dist/
```
