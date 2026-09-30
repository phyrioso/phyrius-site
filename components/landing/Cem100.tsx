import { Label, Rich } from '@/components/ui/Bits';
import { TituloSecao } from '@/components/landing/Secoes';
import { l100 } from '@/content/landings';

/* ---------- a equipa que passa a ter ---------- */

export function Equipa() {
  const e = l100.equipa;
  return (
    <section className="section land-equipa" id="equipa">
      <div className="container">
        <TituloSecao label={e.label} titulo={e.titulo} texto={e.texto} />

        <div className="land-equipa__grid" data-reveal="up" data-stagger>
          {e.itens.map((p, i) => (
            <article key={p.papel}>
              <span className="n">{String(i + 1).padStart(2, '0')}</span>
              <h3>{p.papel}</h3>
              <p>{p.texto}</p>
            </article>
          ))}
        </div>

        <div className="land-equipa__mais" data-reveal="fade">
          <p>{e.mais}</p>
          <p className="muted">{e.coordenacao}</p>
        </div>
      </div>
    </section>
  );
}

/* ---------- contratar ou ligar à Phyrius 100 ---------- */

export function Comparacao() {
  const c = l100.comparacao;
  return (
    <section className="section land-comp">
      <div className="container">
        <TituloSecao label={c.label} titulo={c.titulo} texto={c.texto} />

        <table className="land-tabela" data-reveal="up">
          <thead>
            <tr>
              {c.colunas.map((col, i) => (
                <th key={col} scope="col" className={i === 2 ? 'destaque' : undefined}>
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {c.linhas.map((l) => (
              <tr key={l[0]}>
                <th scope="row">{l[0]}</th>
                <td>{l[1]}</td>
                <td className="destaque">{l[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

/* ---------- porquê 100: C · E · M ---------- */

export function Cem() {
  const c = l100.cem;
  return (
    <section className="section land-cem">
      <div className="container">
        <div className="land-cem__topo">
          <div>
            <Label>{c.label}</Label>
            <h2 data-split>
              <Rich text={c.titulo} />
            </h2>
          </div>
          <p className="lead" data-reveal="up">
            {c.texto}
          </p>
        </div>

        <div className="land-cem__grid" data-reveal="up" data-stagger>
          {c.pilares.map((p) => (
            <article key={p.letra}>
              <span className="l">{p.letra}</span>
              <h3>{p.titulo}</h3>
              <p>{p.texto}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
