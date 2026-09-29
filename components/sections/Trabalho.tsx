import Link from 'next/link';
import { projetos } from '@/content/site';
import { Button, SectionHead, Rich } from '@/components/ui/Bits';

export default function Trabalho() {
  const destaques = projetos.filter((p) => p.destaque).slice(0, 4);

  return (
    <section className="section">
      <div className="container">
        <SectionHead label="Trabalho" num="04" edition="©Edição 05" />

        <div className="work__head">
          <h2 data-split="words"><Rich text={'©Trabalho que\nfala por {nós.}'} /></h2>
          <span data-magnetic><Button href="/portfolio" variant="ghost">Ver todo o portfólio</Button></span>
        </div>

        <div className="grid-projects">
          {destaques.map((p, i) => (
            <Link className="project" href={`/portfolio/${p.slug}`} key={p.slug}>
              <div className="project__media" data-tilt={i % 2 === 0 ? -5 : 4}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.imagem} alt={p.nome} data-zoom loading={i < 2 ? 'eager' : 'lazy'} />
                <span className="project__ver">Ver projeto</span>
              </div>
              <div className="project__meta" data-reveal="up">
                <div>
                  <h3>{p.nome}</h3>
                  <p>{p.resumo}</p>
                </div>
                <span className="project__year">©{p.ano.slice(2)}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
