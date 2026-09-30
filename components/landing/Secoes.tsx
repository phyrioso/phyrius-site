import Link from 'next/link';
import type { ReactNode } from 'react';
import { Arrow, Button, Label, Orbit, Rich } from '@/components/ui/Bits';
import Formulario from '@/components/Formulario';
import { site } from '@/content/site';
import type { Base, Cta, Passo } from '@/content/landings';

/* ---------- peças comuns ---------- */

function Acao({ cta }: { cta: Cta }) {
  return (
    <span data-magnetic>
      <Button href={cta.href} variant={cta.variante ?? 'red'}>
        {cta.label}
      </Button>
    </span>
  );
}

export function TituloSecao({ label, titulo, texto, children }: { label: string; titulo: string; texto?: string; children?: ReactNode }) {
  return (
    <div className="land-head">
      <Label>{label}</Label>
      <h2 data-split>
        <Rich text={titulo} />
      </h2>
      {texto ? (
        <p className="lead" data-reveal="up" style={{ maxWidth: '62ch' }}>
          {texto}
        </p>
      ) : null}
      {children}
    </div>
  );
}

/* ---------- hero ---------- */

export function LandHero({ numero, hero }: { numero: string; hero: Base['hero'] }) {
  return (
    <section className="land-hero">
      <Orbit parallax={0.12} spin={200} />
      <div className="container land-hero__grid">
        <div>
          <p className="label land-hero__etiqueta">{hero.etiqueta}</p>
          <h1 data-split>
            <Rich text={hero.titulo} />
          </h1>
          <p className="land-hero__texto" data-reveal="up">
            {hero.texto}
          </p>
          <div className="land-hero__ctas" data-reveal="up" data-stagger>
            {hero.ctas.map((c) => (
              <Acao key={c.label} cta={c} />
            ))}
          </div>
          <ul className="land-hero__notas" data-reveal="fade" data-stagger>
            {hero.notas.map((n) => (
              <li key={n}>{n}</li>
            ))}
          </ul>
        </div>

        <figure className="land-foto land-hero__foto" data-tilt="-5">
          <span className="land-foto__n" data-counter={numero}>
            {numero}
          </span>
          <figcaption>{hero.foto}</figcaption>
        </figure>
      </div>
    </section>
  );
}

/* ---------- faixa infinita de palavras ---------- */

export function Faixa({ itens }: { itens: string[] }) {
  const duplicado = [...itens, ...itens];
  return (
    <div className="land-faixa words-wrap" aria-hidden="true">
      <div className="land-faixa__linha" data-marquee="-50">
        {duplicado.map((t, i) => (
          <span key={`${t}-${i}`}>{t}</span>
        ))}
      </div>
    </div>
  );
}

/* ---------- dores ---------- */

export function Dores({ dores }: { dores: Base['dores'] }) {
  const foto = dores.foto;
  return (
    <section className="section land-dores">
      <div className="container">
        <TituloSecao label={dores.label} titulo={dores.titulo} texto={dores.texto} />
        <ul className="land-dores__lista" data-reveal="up" data-stagger>
          {dores.itens.map((d) => (
            <li key={d}>
              <span className="mark" aria-hidden="true">
                +
              </span>
              {d}
            </li>
          ))}
        </ul>
        {foto ? (
          <figure className="land-foto land-foto--larga" data-reveal="clip">
            <figcaption>{foto}</figcaption>
          </figure>
        ) : null}
      </div>
    </section>
  );
}

/* ---------- solução ---------- */

export function Solucao({ solucao }: { solucao: Base['solucao'] }) {
  return (
    <section className="section land-solucao">
      <div className="container">
        <div className={solucao.foto ? 'land-solucao__grid' : 'land-solucao__grid land-solucao__grid--so-texto'}>
          <div>
            <Label>{solucao.label}</Label>
            <h2 data-split>
              <Rich text={solucao.titulo} />
            </h2>
            <div className="land-solucao__texto" data-reveal="up" data-stagger>
              {solucao.paragrafos.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
            <Acao cta={solucao.cta} />
          </div>
          {solucao.foto ? (
            <figure className="land-foto" data-tilt="4">
              <figcaption>{solucao.foto}</figcaption>
            </figure>
          ) : null}
        </div>

        <p className="land-frase" data-split="words">
          <Rich text={solucao.frase} />
        </p>
      </div>
    </section>
  );
}

/* ---------- garantias (cartões curtos) ---------- */

export function Garantias({ itens }: { itens: { titulo: string; texto: string }[] }) {
  return (
    <section className="section">
      <div className="container">
        <div className="land-garantias" data-reveal="up" data-stagger>
          {itens.map((g) => (
            <article key={g.titulo}>
              <h3>{g.titulo}</h3>
              <p>{g.texto}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- passos ---------- */

export function Passos({ passos, id }: { passos: { label: string; titulo: string; itens: Passo[] }; id?: string }) {
  return (
    <section className="section land-passos" id={id}>
      <div className="container">
        <TituloSecao label={passos.label} titulo={passos.titulo} />
        <ol className="land-passos__lista" data-reveal="up" data-stagger>
          {passos.itens.map((p) => (
            <li key={p.num}>
              <span className="n">{p.num}</span>
              <h3>{p.titulo}</h3>
              <p>{p.texto}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------- lista de bullets (para quem é / benefícios) ---------- */

export function Bullets({
  bloco,
  id,
}: {
  bloco: { label: string; titulo: string; texto?: string; itens: string[] };
  id?: string;
}) {
  return (
    <section className="section" id={id}>
      <div className="container">
        <div className="land-bullets">
          <div>
            <Label>{bloco.label}</Label>
            <h2 data-split>
              <Rich text={bloco.titulo} />
            </h2>
            {bloco.texto ? (
              <p className="lead" data-reveal="up" style={{ marginTop: '1.5rem', maxWidth: '46ch' }}>
                {bloco.texto}
              </p>
            ) : null}
          </div>
          <ul data-reveal="up" data-stagger>
            {bloco.itens.map((i) => (
              <li key={i}>
                <span className="tick" aria-hidden="true">
                  <Arrow size={14} />
                </span>
                {i}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------- venda cruzada ---------- */

export function Cruzada({ cruzada }: { cruzada: Base['cruzada'] }) {
  return (
    <section className="section">
      <div className="container">
        <div className="land-cruzada" data-reveal="up">
          <Orbit spin={240} />
          <p className="label">{cruzada.label}</p>
          <h2>{cruzada.pergunta}</h2>
          <p className="t">{cruzada.texto}</p>
          <Acao cta={cruzada.cta} />
        </div>
      </div>
    </section>
  );
}

/* ---------- bloco final com formulário ---------- */

export function LandFinal({ numero, final }: { numero: string; final: Base['final'] }) {
  return (
    <section className="section land-final" id="falar">
      <div className="container">
        <div className="land-final__grid">
          <div>
            <Label>{final.label}</Label>
            <h2 data-split>
              <Rich text={final.titulo} />
            </h2>
            <p className="lead" data-reveal="up" style={{ marginTop: '1.5rem', maxWidth: '48ch' }}>
              {final.texto}
            </p>
            <div className="land-final__info">
              <div>
                <p className="k">Email</p>
                <a className="v" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              </div>
              <div>
                <p className="k">Telefone</p>
                <a className="v" href={`tel:${site.telefoneLink}`}>
                  {site.telefone}
                </a>
                <p className="c">(chamada para rede móvel nacional)</p>
              </div>
              <div>
                <p className="k">Horário</p>
                <p className="v">{site.horario}</p>
              </div>
            </div>
            <p className="land-final__nota">{final.nota}</p>
          </div>

          <Formulario
            titulo={final.form.titulo}
            origem={`Phyrius ${numero}`}
            campo={final.form.campo}
            opcoes={final.form.opcoes}
            botao={final.form.botao}
            consentimento
          />
        </div>

        <p className="land-final__voltar">
          <Link href="/">Voltar ao site da Phyrius</Link>
        </p>
      </div>
    </section>
  );
}
