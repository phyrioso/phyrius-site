'use client';

import { Arrow, Label, Rich } from '@/components/ui/Bits';
import { l48 } from '@/content/landings';

/** Clicar num serviço leva ao formulário já preenchido com a área e o serviço. */
function pedir(area: string, servico: string) {
  const sel = document.querySelector<HTMLSelectElement>('#procura');
  if (sel && Array.from(sel.options).some((o) => o.value === area)) sel.value = area;

  const msg = document.querySelector<HTMLTextAreaElement>('#mensagem');
  if (msg) {
    msg.value = `Gostaria de pedir orçamento para: ${servico}.`;
    msg.dispatchEvent(new Event('input', { bubbles: true }));
  }

  document.getElementById('falar')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function Catalogo() {
  const c = l48.catalogo;
  return (
    <section className="section land-catalogo" id="catalogo">
      <div className="container">
        <div className="land-head">
          <Label>{c.label}</Label>
          <h2 data-split>
            <Rich text={c.titulo} />
          </h2>
          <p className="lead" data-reveal="up" style={{ maxWidth: '62ch' }}>
            {c.texto}
          </p>
        </div>

        <div className="land-catalogo__areas">
          {c.areas.map((a) => (
            <section className="land-area" key={a.nome} data-reveal="fade">
              <header>
                <span className="q">{a.servicos.length}</span>
                <h3>{a.nome}</h3>
              </header>
              <ul>
                {a.servicos.map((s) => (
                  <li key={s}>
                    <button type="button" onClick={() => pedir(a.nome, s)}>
                      <span>{s}</span>
                      <Arrow size={14} />
                    </button>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <p className="land-catalogo__nota" data-reveal="fade">
          {c.nota}
        </p>
      </div>
    </section>
  );
}
