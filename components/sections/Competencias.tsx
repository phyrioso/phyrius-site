'use client';

import { useState } from 'react';
import { areas } from '@/content/site';
import { Button, SectionHead, Rich } from '@/components/ui/Bits';

export default function Competencias() {
  const [aberto, setAberto] = useState(0);

  return (
    <section className="section">
      <div className="container">
        <SectionHead label="Competências" num="03" edition="©Edição 04" />

        <div className="skills__head">
          <h2 data-split><Rich text={'Tudo o que a sua marca precisa.\nNuma só {equipa.}'} /></h2>
          <span data-magnetic><Button href="/servicos" variant="ghost">Ver todos os serviços</Button></span>
        </div>

        <div className="skills" data-reveal="fade" data-stagger>
          {areas.map((a, i) => {
            const ativo = aberto === i;
            return (
              <div className={ativo ? 'skill skill--open' : 'skill'} key={a.slug}>
                <button
                  type="button"
                  className="skill__btn"
                  aria-expanded={ativo}
                  aria-controls={`area-${a.slug}`}
                  onClick={() => setAberto(ativo ? -1 : i)}
                >
                  <span className="skill__num">(0{i + 1})</span>
                  <span className="skill__titulo">{a.titulo}</span>
                  <span className="skill__mark" aria-hidden="true"><i /><i /></span>
                </button>
                <div className="skill__painel" id={`area-${a.slug}`} hidden={!ativo}>
                  <p>{a.valor}</p>
                  <div className="tags">
                    {a.inclui.map((x) => <span key={x}>{x}</span>)}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
