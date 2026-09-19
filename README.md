# Pouso

Landing page da Pouso, fabricante de casas modulares para o campo: módulos de 3 × 6 m feitos em fábrica, levados de caminhão e montados no terreno em três dias. Seis modelos, de 18 a 72 m², e um pedido de orçamento como conversão.

> A Pouso é uma marca fictícia. Este é um projeto de portfólio.

![Hero da landing da Pouso](docs/screenshot.png)

## Stack

- Next.js 16 (App Router, totalmente estático) e React 19
- TypeScript estrito
- Tailwind CSS v4 e shadcn/ui (Base UI)
- Motion (LazyMotion) para as animações
- next-intl para pt-BR e inglês
- react-hook-form e Zod no formulário de orçamento

## Destaques técnicos

- **Acessibilidade**: WCAG 2.2 AA. Zero violações no axe nas duas línguas, navegação completa por teclado, foco visível inclusive sobre a foto, formulário com erros ligados aos campos e sucesso anunciado. As entregas usam o padrão de abas com setas do teclado. Contraste medido sobre os pixels reais das fotos.
- **Internacionalização**: pt-BR e inglês com rotas próprias (`/pt-BR`, `/en`). A troca de idioma mantém a seção atual, e preços são definidos por mercado (R$ e US$).
- **Performance**: Lighthouse mobile em build de produção: **90** Performance, **100** Acessibilidade, **100** Boas práticas e **100** SEO, nos dois idiomas. Imagens em WebP com placeholder borrado e CLS próximo de zero.
- **Movimento**: uma sequência de entrada no hero, contadores, grade escalonada e wordmark revelado no rodapé. Tudo respeita `prefers-reduced-motion`.
- **Sem rastreamento**: nenhum analytics, nenhum cookie além da preferência de idioma. O formulário é simulado no navegador e nada é enviado.
- **Segurança**: Content-Security-Policy e demais headers configurados.

## Design

Fotografia carrega a paisagem, e a interface fica quieta: tipografia Funnel leve, cinza-pedra claro, carvão (a cor da madeira queimada das casas) e controles em pílula contra cards quase retos. Cada modelo mostra sua planta em módulos. Detalhes em [DESIGN.md](DESIGN.md).

## Rodando localmente

```sh
pnpm install
pnpm dev
```

Abra `http://localhost:3000`.

| Script | Faz |
|---|---|
| `pnpm build` | Build de produção |
| `pnpm lint` | ESLint |
| `pnpm typecheck` | Checagem de tipos |
| `pnpm check:contract` | Verifica tokens, mensagens e estilos |

## Aviso

A Pouso, seus modelos, preços, entregas, endereço e contatos são fictícios. Nenhuma casa é vendida e nenhum dado é coletado. As imagens foram geradas por IA.
