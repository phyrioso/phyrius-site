import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { projetos } from '@/content/site';
import { Button, Label, Orbit, Rich } from '@/components/ui/Bits';

export const metadata: Metadata = {
  title: 'Portfólio',
  description: 'Identidades, websites, campanhas e produções de vídeo para empresas de vários setores. Uma seleção do que fizemos desde 2019.',
};

const filtros = ['Todos', 'Estratégia', 'Branding', 'Conteúdo', 'Fotografia e vídeo', 'Web e digital', 'IA'];

export default function PortfolioPage() {
  return (
    <>
      <Header />
      <main>
        <section className="page-hero">
          <Orbit parallax={0.1} />
          <div className="container">
            <Label>Portfólio</Label>
            <h1 data-split><Rich text={'Marcas que ajudámos\na {crescer.}'} /></h1>
            <p className="lead" data-reveal="up" style={{ maxWidth: '56ch' }}>
              Identidades, websites, campanhas e produções de vídeo para empresas de vários setores.
              Uma seleção do que fizemos desde 2019.
            </p>
          </div>
        </section>

        <div className="container">
          {/* Filtros: visuais nesta fase. Ligar ao estado quando o portfólio crescer. */}
          <div className="filters">
            <div className="filters__group">
              {filtros.map((f, i) => (
                <button key={f} type="button" aria-pressed={i === 0}>{f}</button>
              ))}
            </div>
            <p className="label">{String(projetos.length).padStart(2, '0')} projetos</p>
          </div>

          <div className="grid-projects" data-reveal="fade" data-stagger>
            {projetos.map((p) => (
              <Link className="project" href={`/portfolio/${p.slug}`} key={p.slug}>
                <div className="project__media">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.imagem} alt={p.nome} loading="lazy" />
                  <span className="project__tag">{p.setor}</span>
                </div>
                <div className="project__meta">
                  <div>
                    <h3>{p.nome}</h3>
                    <p>{p.areas.join(' · ')}</p>
                  </div>
                  <span className="project__year">©{p.ano.slice(2)}</span>
                </div>
              </Link>
            ))}
          </div>

          <section className="section">
            <div className="cta" style={{ background: 'var(--surface)' }}>
              <Orbit />
              <h2 data-split><Rich text={'Quer um projeto {assim?}'} /></h2>
              <p className="lead" data-reveal="up">Conte-nos o que precisa. Ou conheça a Phyrius 100 e a Phyrius 48.</p>
              <div className="cta__row" data-reveal="up"><Button href="/contactos">Falar connosco</Button></div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
