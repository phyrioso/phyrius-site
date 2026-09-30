'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Arrow } from '@/components/ui/Bits';
import type { Cta } from '@/content/landings';

/** Navegação própria das landing pages: âncoras da página + a outra solução. */
export default function LandNav({
  numero,
  itens,
  cta,
}: {
  numero: string;
  itens: { label: string; href: string }[];
  cta: Cta;
}) {
  const [open, setOpen] = useState(false);

  const link = (n: { label: string; href: string }, fechar = false) =>
    n.href.startsWith('#') ? (
      <a key={n.label} href={n.href} onClick={fechar ? () => setOpen(false) : undefined}>
        {n.label}
      </a>
    ) : (
      <Link key={n.label} href={n.href} onClick={fechar ? () => setOpen(false) : undefined}>
        {n.label}
      </Link>
    );

  return (
    <>
      <header className="header land-nav">
        <Link href="/" className="logo" aria-label="Phyrius, início">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-phyrius.svg" alt="Phyrius" width={112} height={32} />
          <span className="land-nav__n">{numero}</span>
        </Link>

        <nav className="nav" aria-label="Nesta página">
          {itens.map((n) => link(n))}
        </nav>

        <a className="btn btn--red" href={cta.href}>
          {cta.label}
          <Arrow />
        </a>

        <button
          className="burger"
          type="button"
          aria-label="Abrir menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
        >
          <span />
          <span />
        </button>
      </header>

      {open && (
        <div className="menu" role="dialog" aria-modal="true" aria-label="Menu">
          <div className="header" style={{ position: 'static', padding: 0 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo-phyrius.svg" alt="Phyrius" width={110} height={31} />
            <button className="icon-btn" type="button" aria-label="Fechar menu" onClick={() => setOpen(false)}>
              ✕
            </button>
          </div>
          <nav className="menu__list" aria-label="Nesta página">
            {itens.map((n) => link(n, true))}
            <Link href="/" onClick={() => setOpen(false)}>
              Voltar ao site
            </Link>
          </nav>
          <div className="menu__foot">
            <a className="btn btn--red" href={cta.href} onClick={() => setOpen(false)}>
              {cta.label}
              <Arrow />
            </a>
          </div>
        </div>
      )}
    </>
  );
}
