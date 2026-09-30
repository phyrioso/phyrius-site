import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { areas, projetos, setores } from '@/content/site';
import { Arrow, Label, Orbit, Rich } from '@/components/ui/Bits';

export const metadata: Metadata = {
  title: 'Serviços de Marketing, Branding e Vídeo',
  description:
    'Estratégia, branding, redes sociais, fotografia, vídeo, websites, publicidade digital e IA. Tudo numa só equipa, em Leiria.',
};

export default function ServicosPage() {
  return (
    <>
      <Header />
      <main>
        <section className="page-hero">
          <Orbit parallax={0.1} />
          <div className="container">
            <Label>Serviços</Label>
            <h1 data-split><Rich text={'Tudo o que a sua\nmarca precisa.\nNuma só {equipa.}'} /></h1>
            <p className="lead" data-reveal="up" style={{ maxWidth: '58ch' }}>
              Seis áreas, uma equipa, a mesma direção. Contrate-as em conjunto com a Phyrius 100 ou à medida,
              entre 48 serviços, com a Phyrius 48.
            </p>
          </div>
        </section>

        <div className="container">
          {areas.map((a, i) => {
            const relacionados = projetos.filter((p) => p.areas.includes(a.titulo)).slice(0, 2);
            return (
              <section className="area" id={a.slug} key={a.slug} data-reveal="fade">
                <p className="area__num">(0{i + 1})</p>
                <div>
                  <h2>{a.titulo}</h2>
                  <p>{a.valor}</p>
                  <div className="tags">
                    {a.inclui.map((x) => <span key={x}>{x}</span>)}
                  </div>
                </div>
                <div className="area__proj">
                  {relacionados.length > 0 ? (
                    relacionados.map((p) => (
                      <Link href={`/portfolio/${p.slug}`} key={p.slug}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={p.imagem} alt={p.nome} loading="lazy" />
                        <span className="n">{p.nome}</span>
                      </Link>
                    ))
                  ) : (
                    <p className="n">[Caso de IA a documentar]</p>
                  )}
                </div>
              </section>
            );
          })}

          <section className="section">
            <Label>Onde já trabalhamos</Label>
            <p className="sectors" style={{ marginTop: '1.5rem' }}>
              {setores.map((s, i) => (
                <span key={s}>{s}{i < setores.length - 1 ? <span className="sep"> · </span> : null}</span>
              ))}
            </p>
          </section>

          <section className="section">
            <h2 style={{ fontSize: 'var(--text-h1)', marginBottom: '2.5rem' }} data-split>
              <Rich text={'Como prefere trabalhar {connosco?}'} />
            </h2>
            <div className="choose" data-reveal="up" data-stagger>
              <Link className="c-red" href="/100">
                <div className="row">
                  <span>Todas as áreas, todos os meses</span>
                  <span className="mark"><Arrow /></span>
                </div>
                <div>
                  <h3>Phyrius 100</h3>
                  <p style={{ opacity: 0.9, marginTop: '0.6rem' }}>O seu departamento de marketing, pronto a usar.</p>
                </div>
              </Link>
              <Link className="c-dark" href="/48">
                <div className="row">
                  <span>Só o que precisa, quando precisa</span>
                  <span className="mark"><Arrow /></span>
                </div>
                <div>
                  <h3>Phyrius 48</h3>
                  <p style={{ color: 'var(--muted)', marginTop: '0.6rem' }}>48 serviços à escolha, sem avenças nem contratos.</p>
                </div>
              </Link>
            </div>
            <p style={{ marginTop: '2rem', color: 'var(--muted)' }}>
              Não sabe qual escolher? <Link href="/contactos" style={{ color: 'var(--fg)', borderBottom: '1px solid var(--red)' }}>Falamos primeiro.</Link>
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
