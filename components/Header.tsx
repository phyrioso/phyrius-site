'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { nav, site } from '@/content/site';
import { Arrow } from '@/components/ui/Bits';

export default function Header({ solid = false }: { solid?: boolean }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header className={solid ? 'header header--solid' : 'header'}>
        <Link href="/" className="logo" aria-label="Phyrius, início">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-phyrius.svg" alt="Phyrius" width={126} height={36} />
        </Link>

        <nav className="nav" aria-label="Principal">
          {nav.map((n) => (
            <Link key={n.label} href={n.href} aria-current={pathname === n.href ? 'page' : undefined}>
              {n.label}
            </Link>
          ))}
        </nav>

        <Link className="btn btn--red" href="/contactos">Falar connosco<Arrow /></Link>

        <button className="burger" type="button" aria-label="Abrir menu" aria-expanded={open} onClick={() => setOpen(true)}>
          <span /><span />
        </button>
      </header>

      {open && (
        <div className="menu" role="dialog" aria-modal="true" aria-label="Menu">
          <div className="header" style={{ position: 'static', padding: 0 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo-phyrius.svg" alt="Phyrius" width={110} height={31} />
            <button className="icon-btn" type="button" aria-label="Fechar menu" onClick={() => setOpen(false)}>✕</button>
          </div>
          <nav className="menu__list" aria-label="Principal">
            <Link href="/" onClick={() => setOpen(false)}><span className="num">01</span>Início</Link>
            {nav.map((n, i) => (
              <Link key={n.label} href={n.href} onClick={() => setOpen(false)}>
                <span className="num">0{i + 2}</span>{n.label}
              </Link>
            ))}
          </nav>
          <div className="menu__foot">
            <a href={`mailto:${site.email}`}><strong>{site.email}</strong></a>
            <a href={`tel:${site.telefoneLink}`}>{site.telefone}</a>
            <p className="label">Leiria, Portugal · Marca, conteúdo e marketing</p>
          </div>
        </div>
      )}
    </>
  );
}
