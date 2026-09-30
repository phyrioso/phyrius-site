import Link from 'next/link';
import type { ReactNode } from 'react';

export function Arrow({ size = 16 }: { size?: number }) {
  return (
    <svg className="arrow" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14" /><path d="M13 6l6 6-6 6" />
    </svg>
  );
}

type BtnProps = { href: string; children: ReactNode; variant?: 'red' | 'ghost' | 'white' };
export function Button({ href, children, variant = 'red' }: BtnProps) {
  const cls = `btn btn--${variant}`;
  if (href.startsWith('http') || href.startsWith('mailto') || href.startsWith('#')) {
    return <a className={cls} href={href}>{children}<Arrow /></a>;
  }
  return <Link className={cls} href={href}>{children}<Arrow /></Link>;
}

export function Label({ children, num }: { children: ReactNode; num?: string }) {
  return (
    <p className="label">
      {num ? <span className="num">({num})</span> : null} {children}
    </p>
  );
}

export function SectionHead({ label, num, edition, right }: { label: string; num?: string; edition?: string; right?: ReactNode }) {
  return (
    <div className="section-head">
      <Label num={num}>{label}</Label>
      {edition ? <p className="label">{edition}</p> : null}
      {right}
    </div>
  );
}

export function Chip({ children, light }: { children: ReactNode; light?: boolean }) {
  return <span className={light ? 'chip chip--light' : 'chip'}>{children}</span>;
}

export function Orbit({ className, parallax, spin }: { className?: string; parallax?: number; spin?: number }) {
  return (
    <div className={className ? `orbit ${className}` : 'orbit'} aria-hidden="true" data-parallax={parallax ?? undefined}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/orbit.svg" alt="" data-spin={spin ?? undefined} />
    </div>
  );
}

/**
 * Escreve texto com {palavras} a vermelho.
 * Com `quebras`, cada \n vira uma quebra de linha a sério (<br>), que o
 * SplitText respeita: o white-space: pre-line não sobrevive ao split.
 */
export function Rich({ text, quebras }: { text: string; quebras?: boolean }) {
  const partes = text.split(/(\{[^}]+\})/g);

  const escrever = (t: string, chave: string) => {
    if (!quebras || !t.includes('\n')) return t;
    return t.split('\n').map((linha, i) => (
      <span key={`${chave}-${i}`}>
        {i > 0 ? <br /> : null}
        {linha}
      </span>
    ));
  };

  return (
    <>
      {partes.map((p, i) =>
        p.startsWith('{') ? (
          <span key={i} className="red">{escrever(p.slice(1, -1), `r${i}`)}</span>
        ) : (
          <span key={i}>{escrever(p, `t${i}`)}</span>
        ),
      )}
    </>
  );
}
