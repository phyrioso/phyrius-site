import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { projetos } from '@/content/site';
import { Button, Chip, Label, Rich } from '@/components/ui/Bits';

export function generateStaticParams() {
  return projetos.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = projetos.find((x) => x.slug === slug);
  if (!p) return {};
  return { title: p.nome, description: `${p.resumo} · ${p.setor} · ${p.ano}` };
}

export default async function ProjetoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = projetos.find((x) => x.slug === slug);
  if (!p) notFound();

  const idx = projetos.findIndex((x) => x.slug === slug);
  const proximo = projetos[(idx + 1) % projetos.length];

  return (
    <>
      <Header solid />
      <main>
        <section className="section">
          <div className="container">
            <Link className="label" href="/portfolio">← Portfólio</Link>

            <div className="case__head" style={{ marginTop: '2rem' }}>
              <h1 data-split>{p.nome}</h1>
              <div className="case__chips">
                <Chip>{p.setor}</Chip>
                <Chip>{p.ano}</Chip>
                {p.areas.slice(0, 2).map((a) => <Chip key={a}>{a}</Chip>)}
              </div>
            </div>

            <div className="case__cover" data-reveal="fade">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.imagem} alt={p.nome} />
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="case__blocks" data-reveal="up" data-stagger>
              <div className="case__block">
                <Label num="01">Desafio</Label>
                <p>{p.desafio}</p>
              </div>
              <div className="case__block">
                <Label num="02">O que fizemos</Label>
                <p>{p.oQueFizemos}</p>
              </div>
              <div className="case__block result">
                <Label num="03">Resultado</Label>
                <p>{p.resultado}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="case__gallery" data-reveal="fade" data-stagger>
              <div className="case__ph">[Galeria · imagem 2]</div>
              <div className="case__ph">[Galeria · imagem 3]</div>
              <div className="case__ph case__ph--wide">[Galeria · imagem ou vídeo em largura total]</div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <Link className="case__next card" href={`/portfolio/${proximo.slug}`}>
              <div className="t">
                <p className="label">Próximo projeto</p>
                <h2>{proximo.nome} <span className="red">→</span></h2>
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={proximo.imagem} alt={proximo.nome} loading="lazy" />
            </Link>
          </div>
        </section>

        <section className="section">
          <div className="container" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem' }}>
            <h2 style={{ fontSize: 'var(--text-h2)' }}><Rich text={'Quer um projeto {assim?}'} /></h2>
            <Button href="/contactos">Falar connosco</Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
