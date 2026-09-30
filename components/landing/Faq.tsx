'use client';

import { useState } from 'react';
import { Label, Rich } from '@/components/ui/Bits';
import type { Pergunta } from '@/content/landings';

export default function Faq({
  bloco,
  id,
}: {
  bloco: { label: string; titulo: string; itens: Pergunta[] };
  id?: string;
}) {
  const [aberta, setAberta] = useState<number | null>(0);

  return (
    <section className="section land-faq" id={id}>
      <div className="container">
        <div className="land-head">
          <Label>{bloco.label}</Label>
          <h2 data-split>
            <Rich text={bloco.titulo} />
          </h2>
        </div>

        <div className="faq">
          {bloco.itens.map((q, i) => {
            const open = aberta === i;
            return (
              <div className={open ? 'faq__item faq__item--open' : 'faq__item'} key={q.p}>
                <h3>
                  <button
                    type="button"
                    className="faq__btn"
                    aria-expanded={open}
                    aria-controls={`faq-${i}`}
                    onClick={() => setAberta(open ? null : i)}
                  >
                    <span className="faq__p">{q.p}</span>
                    <span className="faq__mark" aria-hidden="true">
                      <i />
                      <i />
                    </span>
                  </button>
                </h3>
                <div className="faq__painel" id={`faq-${i}`} hidden={!open}>
                  <p>{q.r}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
