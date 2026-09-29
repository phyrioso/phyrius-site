import { solucoes } from '@/content/site';
import { Button, Chip, Orbit, SectionHead, Rich } from '@/components/ui/Bits';

export default function Solucoes() {
  return (
    <section className="section" id="solucoes">
      <div className="container">
        <SectionHead label="Como trabalhar connosco" num="02" edition="©Edição 03" />

        <div className="solutions__head">
          <h2 data-split="words"><Rich text={'Dois momentos.\nDuas {soluções.}'} /></h2>
          <p className="lead" data-reveal="up">Seja qual for o momento da sua marca, a Phyrius acompanha.</p>
        </div>

        <div className="solutions">
          {solucoes.map((s) => (
            <article key={s.id} className={`solution ${s.destaque ? 'solution--red' : 'solution--dark'}`} data-reveal="up">
              <Orbit spin={180} />
              <div className="solution__mark">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/logo-phyrius.svg" alt="Phyrius" style={s.destaque ? { filter: 'brightness(10)' } : undefined} />
                <span className="bar" />
                <span className="n">{s.numero}</span>
              </div>
              <p className="solution__para">{s.paraQuem}</p>
              <h3>{s.titulo}</h3>
              <p className="t">{s.texto}</p>
              <div className="solution__tags">
                {s.tags.map((t) => <Chip key={t} light={s.destaque}>{t}</Chip>)}
              </div>
              <span data-magnetic><Button href={s.href} variant={s.destaque ? 'white' : 'red'}>{s.cta}</Button></span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
