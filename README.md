# Site Phyrius

Site institucional da Phyrius (phyrius.pt). Next.js com **exportação estática**: o build
gera HTML/CSS/JS na pasta `out/`, que corre em qualquer alojamento normal (Plesk, Apache),
sem Node no servidor.

## Arrancar

```bash
npm install     # uma vez
npm run dev     # http://localhost:3000 (com recarregamento automático)
```

## Publicar

```bash
npm run build   # gera a pasta out/
```

Depois envia-se o conteúdo de `out/` para a document root do domínio (via Git no Plesk ou FTP).

## Onde está o quê

| Pasta | O que tem |
| --- | --- |
| `content/site.ts` | **Todo o texto do site.** Editar aqui muda o site inteiro |
| `app/` | As páginas: Home, Serviços, Portfólio, projeto, Contactos |
| `components/sections/` | As secções da Home |
| `components/ui/Bits.tsx` | Botões, chips, etiquetas, padrão |
| `app/globals.css` | **Tokens da marca**: cores, tipografia, espaçamento |
| `styles/components.css` | Estilos das secções |
| `lib/gsap.ts` + `components/Motion.tsx` | Sistema de animação |
| `public/` | Fontes Nexa, logótipo, padrão, imagens, `contacto.php` |

## Como se anima uma secção

Não se escreve GSAP nas secções. Põe-se um atributo no HTML:

```tsx
<h2 data-split="lines|words|chars">…</h2>    // título revelado com máscara
<div data-reveal="up|fade|clip" data-stagger>…</div>
<div data-tilt="-6">…</div>                  // card entra inclinado e endireita
<img data-zoom />                            // escala lenta dentro do card
<section data-pin-steps>…</section>          // secção presa, passos que trocam
<span data-counter="31">31</span>            // contador
<div data-parallax="0.2">…</div>             // deslocamento no scroll
<img data-spin="180" />                      // rotação contínua (padrão)
<div data-marquee="-50">…</div>              // faixa infinita
<span data-magnetic>…</span>                 // botão que persegue o rato
```

Há ainda, sem atributos: cortina de entrada (`Preloader`), cursor próprio (`Cursor`),
header que se esconde ao descer, acordeão dos serviços e a tagline rotativa do hero.

O `components/Motion.tsx` trata do resto. Respeita `prefers-reduced-motion`.

## Formulário de contacto

O `public/contacto.php` recebe o POST e envia por email. Antes de publicar:

1. Confirmar `DESTINO` e `REMETENTE` no ficheiro (o remetente tem de ser do domínio).
2. Testar em produção — em `npm run dev` o PHP não corre.

## Por fazer

- [ ] Fotografia da equipa (secção Quem somos) e do contacto no hero
- [ ] Números reais na secção de estatísticas
- [ ] Três testemunhos
- [ ] Desafio / O que fizemos / Resultado de cada projeto em `content/site.ts`
- [ ] Logótipos dos clientes (hoje são os nomes escritos)
- [ ] Links reais das landing pages Phyrius 100 e 48
