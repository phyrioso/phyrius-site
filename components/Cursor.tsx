'use client';

import { useEffect, useRef } from 'react';
import { gsap } from '@/lib/gsap';

/** Ponto que segue o rato e cresce sobre links. Só em ecrãs com rato. */
export default function Cursor() {
  const ponto = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const el = ponto.current;
    if (!el) return;

    gsap.set(el, { xPercent: -50, yPercent: -50, opacity: 0 });
    const x = gsap.quickTo(el, 'x', { duration: 0.35, ease: 'power3' });
    const y = gsap.quickTo(el, 'y', { duration: 0.35, ease: 'power3' });

    const mover = (e: MouseEvent) => { gsap.to(el, { opacity: 1, duration: 0.2 }); x(e.clientX); y(e.clientY); };
    const sobre = (e: Event) => {
      const alvo = (e.target as HTMLElement).closest('a, button');
      gsap.to(el, { scale: alvo ? 3.4 : 1, duration: 0.35, ease: 'brand' });
    };

    window.addEventListener('mousemove', mover);
    document.addEventListener('mouseover', sobre);
    return () => {
      window.removeEventListener('mousemove', mover);
      document.removeEventListener('mouseover', sobre);
    };
  }, []);

  return <div className="cursor" ref={ponto} aria-hidden="true" />;
}
