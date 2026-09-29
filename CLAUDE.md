# Regras deste projeto

Site estático da Phyrius. Next.js 15 (App Router) + TypeScript + GSAP, com `output: 'export'`.
O servidor de produção é alojamento PHP normal, **sem Node** — nada pode depender de runtime.

## Proibido

- Renderização no servidor, Server Actions, rotas de API, `next/image` com otimização
- jQuery, Bootstrap, CSS-in-JS
- Cores em hexadecimal dentro dos componentes: usar as variáveis de `app/globals.css`
- Texto escrito dentro do JSX: vem sempre de `content/site.ts`
- GSAP importado diretamente nas secções: só através de `lib/gsap.ts` e dos atributos `data-*`

## Convenções

- Secções novas em `components/sections/`, compostas em `app/page.tsx`
- Animação declarada com `data-split`, `data-reveal`, `data-tilt`, `data-zoom`, `data-pin-steps`, `data-counter`, `data-parallax`, `data-spin`, `data-marquee`, `data-magnetic`
- Máscaras de texto precisam de folga vertical para os acentos (ver `.linha` em globals.css)
- `.orbit` é sempre `position: absolute`: nunca pode entrar no fluxo e empurrar conteúdo
- Estilos em `styles/components.css`, com classes descritivas em português
- Tudo em português de Portugal, incluindo nomes de variáveis de conteúdo
- Imagens em `public/img/`, servidas com `<img>` simples (o `next/image` otimizado não funciona em estático)

## Antes de fechar uma tarefa

1. `npm run build` sem erros
2. Verificar a 1280px, 768px e 390px
3. Testar com movimento reduzido ativo
4. Confirmar que nada novo ficou fora de `content/site.ts`
