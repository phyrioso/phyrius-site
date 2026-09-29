'use client';

import { useEffect, useRef } from 'react';
import { gsap } from '@/lib/gsap';

/** Cortina de entrada: o logótipo aparece e a cortina sobe. Uma vez por sessão. */
export default function Preloader() {
  const raiz = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = raiz.current;
    if (!el) return;

    const jaVisto = sessionStorage.getItem('phyrius-entrada');
    const reduzido = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (jaVisto || reduzido) {
      gsap.set(el, { display: 'none' });
      document.body.style.overflow = '';
      return;
    }

    document.body.style.overflow = 'hidden';
    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = '';
        sessionStorage.setItem('phyrius-entrada', '1');
        gsap.set(el, { display: 'none' });
      },
    });

    tl.to(el.querySelector('.preloader__logo'), { opacity: 1, y: 0, duration: 0.9, ease: 'brand' })
      .to(el.querySelector('.preloader__barra i'), { scaleX: 1, duration: 1, ease: 'power2.inOut' }, 0.2)
      .to(el.querySelector('.preloader__logo'), { opacity: 0, y: -16, duration: 0.5 }, '+=0.15')
      .to(el, { clipPath: 'inset(0% 0% 100% 0%)', duration: 1, ease: 'brand' }, '-=0.15');

    return () => { tl.kill(); document.body.style.overflow = ''; };
  }, []);

  return (
    <div className="preloader" ref={raiz} aria-hidden="true">
      <div className="preloader__logo">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo-phyrius.svg" alt="" width={180} height={51} />
      </div>
      <div className="preloader__barra"><i /></div>
    </div>
  );
}
