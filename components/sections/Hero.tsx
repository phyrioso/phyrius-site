'use client';

import { useEffect, useRef } from 'react';
import { hero, site } from '@/content/site';
import { gsap } from '@/lib/gsap';
import { Button, Chip, Orbit, Rich, Arrow } from '@/components/ui/Bits';

export default function Hero() {
  const rotativo = useRef<HTMLSpanElement>(null);

  // Tagline que troca em ciclo, com máscara.
  useEffect(() => {
    const el = rotativo.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const itens = Array.from(el.querySelectorAll<HTMLElement>('span'));
    const pontos = document.querySelectorAll<HTMLElement>('.hero__dots i');
    gsap.set(itens.slice(1), { yPercent: 110 });

    const tl = gsap.timeline({ repeat: -1, delay: 2.4 });
    itens.forEach((_, i) => {
      const prox = (i + 1) % itens.length;
      tl.to(itens[i], { yPercent: -110, duration: 0.75, ease: 'brand' })
        .fromTo(itens[prox], { yPercent: 110 }, { yPercent: 0, duration: 0.75, ease: 'brand' }, '<')
        .to(pontos[i], { width: 8, duration: 0.4 }, '<')
        .to(pontos[prox], { width: 22, duration: 0.4 }, '<')
        .to({}, { duration: 2.6 });
    });

    return () => { tl.kill(); };
  }, []);

  return (
    <section className="hero">
      <Orbit parallax={0.12} spin={200} />
      <div className="container">
        <div className="hero__grid">
          <div>
            <div className="hero__chips" data-reveal="fade" data-stagger>
              {hero.chips.map((c) => <Chip key={c}>{c}</Chip>)}
            </div>

            <h1 data-split="chars">
              {hero.titulo.map((linha, i) => (
                <span key={i} style={{ display: 'block' }}><Rich text={linha} /></span>
              ))}
            </h1>

            <div className="hero__tagline">
              <span className="muted">{hero.prefixo}</span>
              <span className="hero__rotativo" ref={rotativo}>
                {hero.taglines.map((t) => <span key={t}>{t}</span>)}
              </span>
              <span className="hero__dots" aria-hidden="true">
                {hero.taglines.map((t, i) => <i key={t} style={{ width: i === 0 ? 22 : 8 }} />)}
              </span>
            </div>

            <div className="hero__ctas" data-reveal="up" data-stagger>
              <span data-magnetic><Button href="#solucoes">Conhecer as soluções</Button></span>
              <span data-magnetic><Button href="/portfolio" variant="ghost">Ver portfólio</Button></span>
            </div>
          </div>

          <div className="hero__services" data-reveal="fade" data-stagger>
            {hero.lista.map((s, i) => (
              <div key={s}><span className="num">(0{i + 1})</span> {s}</div>
            ))}
          </div>
        </div>

        <div className="hero__foot">
          <p className="hero__scroll">
            <span className="hero__scroll-seta">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 5v14" /><path d="M6 13l6 6 6-6" />
              </svg>
            </span>
            Explorar
          </p>

          <div className="contact-card" data-reveal="up">
            <div className="contact-card__ph" aria-hidden="true" />
            <div className="contact-card__body">
              <p className="t">{hero.cartao.titulo}</p>
              <p className="n">{hero.cartao.nome}</p>
              <p className="c">{hero.cartao.cargo} · {site.telefone}</p>
            </div>
            <a className="icon-btn" href="/contactos" aria-label="Falar connosco" data-magnetic><Arrow /></a>
          </div>
        </div>
      </div>
    </section>
  );
}
