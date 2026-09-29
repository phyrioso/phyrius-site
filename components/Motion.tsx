'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { gsap, ScrollTrigger, SplitText } from '@/lib/gsap';

/**
 * Sistema de movimento do site. As secções declaram a intenção com atributos
 * data-*; este ficheiro é o único sítio onde se escreve GSAP.
 *
 *  data-split="lines|words|chars"  título revelado com máscara
 *  data-reveal="up|fade|clip"      entrada ao aparecer  (+ data-stagger nos filhos)
 *  data-tilt="-6"                  card entra inclinado e endireita com o scroll
 *  data-zoom                       imagem com escala lenta dentro do card
 *  data-pin-steps                  secção presa, com passos que trocam
 *  data-stack                      cards que encaixam uns nos outros
 *  data-counter="31"               contador
 *  data-parallax="0.2"             deslocamento no scroll
 *  data-spin="120"                 rotação contínua (padrão da marca)
 *  data-marquee="-50"              faixa infinita
 *  data-magnetic                   botão que persegue o rato
 *  data-hover-line                 sublinhado que abre da esquerda
 */
export default function Motion() {
  const pathname = usePathname();

  useEffect(() => {
    const reduzido = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduzido) {
      document.documentElement.classList.add('no-motion');
      ScrollTrigger.refresh();
      return;
    }

    const ctx = gsap.context(() => {
      /* ---------- títulos com máscara ---------- */
      document.querySelectorAll<HTMLElement>('[data-split]').forEach((el) => {
        const tipo = (el.dataset.split || 'lines') as 'lines' | 'words' | 'chars';
        const split = new SplitText(el, {
          type: tipo === 'chars' ? 'chars,words,lines' : tipo === 'words' ? 'words,lines' : 'lines',
          mask: 'lines',
          linesClass: 'linha',
        });
        const alvos = tipo === 'chars' ? split.chars : tipo === 'words' ? split.words : split.lines;
        gsap.set(el, { opacity: 1 });
        gsap.from(alvos, {
          yPercent: 118,
          rotate: tipo === 'lines' ? 0 : 2,
          duration: tipo === 'chars' ? 0.9 : 1.15,
          stagger: tipo === 'chars' ? 0.016 : tipo === 'words' ? 0.045 : 0.09,
          ease: 'brand',
          scrollTrigger: { trigger: el, start: 'top 88%' },
        });
      });

      /* ---------- entradas ---------- */
      document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => {
        const tipo = el.dataset.reveal || 'up';
        const alvos = el.hasAttribute('data-stagger') ? Array.from(el.children) : [el];
        gsap.set(el, { opacity: 1 });
        const from: gsap.TweenVars =
          tipo === 'clip'
            ? { clipPath: 'inset(0% 0% 100% 0%)', opacity: 1 }
            : { opacity: 0, y: tipo === 'fade' ? 0 : 44, scale: tipo === 'fade' ? 1 : 0.985 };
        gsap.from(alvos, {
          ...from,
          duration: 1,
          ease: 'brand',
          stagger: el.hasAttribute('data-stagger') ? 0.08 : 0,
          scrollTrigger: { trigger: el, start: 'top 88%' },
        });
      });

      /* ---------- cards inclinados + zoom da imagem ---------- */
      document.querySelectorAll<HTMLElement>('[data-tilt]').forEach((el) => {
        gsap.fromTo(
          el,
          { rotate: Number(el.dataset.tilt) || -4, yPercent: 8, scale: 0.94 },
          {
            rotate: 0, yPercent: 0, scale: 1, ease: 'none',
            scrollTrigger: { trigger: el, start: 'top 95%', end: 'top 40%', scrub: 0.8 },
          },
        );
      });
      document.querySelectorAll<HTMLElement>('[data-zoom]').forEach((el) => {
        gsap.fromTo(el, { scale: 1.22 }, {
          scale: 1, ease: 'none',
          scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true },
        });
      });

      /* ---------- secção presa com passos ---------- */
      document.querySelectorAll<HTMLElement>('[data-pin-steps]').forEach((sec) => {
        const media = sec.querySelectorAll<HTMLElement>('[data-step-media]');
        const passos = sec.querySelectorAll<HTMLElement>('[data-step]');
        if (!media.length) return;
        gsap.set(Array.from(media).slice(1), { autoAlpha: 0, scale: 1.08 });
        gsap.set(Array.from(passos).slice(1), { opacity: 0.25 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sec, start: 'top top', end: `+=${media.length * 65}%`,
            pin: true, scrub: 0.6, invalidateOnRefresh: true,
          },
        });
        media.forEach((m, i) => {
          if (i === 0) return;
          tl.to(media[i - 1], { autoAlpha: 0, scale: 1.05, duration: 0.6 }, i - 1)
            .to(m, { autoAlpha: 1, scale: 1, duration: 0.6 }, i - 1)
            .to(passos[i - 1], { opacity: 0.25, duration: 0.4 }, i - 1)
            .to(passos[i], { opacity: 1, duration: 0.4 }, i - 1);
        });
      });

      /* ---------- cards empilhados ---------- */
      const stacks = document.querySelectorAll<HTMLElement>('[data-stack] > *');
      stacks.forEach((card, i) => {
        if (i === stacks.length - 1) return;
        gsap.to(card, {
          scale: 0.93, yPercent: -4, filter: 'brightness(0.65)', ease: 'none',
          scrollTrigger: { trigger: stacks[i + 1], start: 'top 80%', end: 'top 20%', scrub: 0.6 },
        });
      });

      /* ---------- contadores ---------- */
      document.querySelectorAll<HTMLElement>('[data-counter]').forEach((el) => {
        const ate = Number(el.dataset.counter);
        if (Number.isNaN(ate)) return;
        const o = { v: 0 };
        gsap.to(o, {
          v: ate, duration: 2, ease: 'power2.out',
          onUpdate: () => { el.textContent = String(Math.round(o.v)); },
          scrollTrigger: { trigger: el, start: 'top 92%', once: true },
        });
      });

      /* ---------- parallax e rotação ---------- */
      document.querySelectorAll<HTMLElement>('[data-parallax]').forEach((el) => {
        gsap.to(el, {
          yPercent: (Number(el.dataset.parallax) || 0.15) * 100, ease: 'none',
          scrollTrigger: { trigger: el.parentElement || el, start: 'top bottom', end: 'bottom top', scrub: true },
        });
      });
      document.querySelectorAll<HTMLElement>('[data-spin]').forEach((el) => {
        gsap.to(el, { rotation: 360, duration: Number(el.dataset.spin) || 120, repeat: -1, ease: 'none' });
      });

      /* ---------- faixa infinita ---------- */
      document.querySelectorAll<HTMLElement>('[data-marquee]').forEach((el) => {
        const dist = Number(el.dataset.marquee) || -50;
        gsap.to(el, { xPercent: dist, duration: 26, repeat: -1, ease: 'none' });
      });

      /* ---------- header que se esconde ao descer ---------- */
      const header = document.querySelector<HTMLElement>('.header');
      if (header) {
        ScrollTrigger.create({
          start: 'top -120',
          end: 99999,
          onUpdate: (self) => {
            const desce = self.direction === 1;
            header.classList.toggle('header--escondido', desce && self.scroll() > 200);
            header.classList.toggle('header--fixo', self.scroll() > 200);
          },
        });
      }

      /* ---------- botões magnéticos ---------- */
      if (window.matchMedia('(pointer: fine)').matches) {
        document.querySelectorAll<HTMLElement>('[data-magnetic]').forEach((el) => {
          const x = gsap.quickTo(el, 'x', { duration: 0.5, ease: 'brand' });
          const y = gsap.quickTo(el, 'y', { duration: 0.5, ease: 'brand' });
          const mover = (e: MouseEvent) => {
            const r = el.getBoundingClientRect();
            x((e.clientX - (r.left + r.width / 2)) * 0.28);
            y((e.clientY - (r.top + r.height / 2)) * 0.4);
          };
          const sair = () => { x(0); y(0); };
          el.addEventListener('mousemove', mover);
          el.addEventListener('mouseleave', sair);
        });
      }
    });

    const refrescar = () => ScrollTrigger.refresh();
    document.fonts?.ready.then(refrescar);
    window.addEventListener('load', refrescar);

    return () => {
      ctx.revert();
      window.removeEventListener('load', refrescar);
    };
  }, [pathname]);

  return null;
}
