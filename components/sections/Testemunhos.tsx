import { testemunhos } from '@/content/site';
import { SectionHead, Rich } from '@/components/ui/Bits';

export default function Testemunhos() {
  return (
    <section className="section">
      <div className="container">
        <SectionHead label="Clientes" num="05" edition="©Edição 06" />
        <h2 data-split="words" style={{ marginBottom: '2.5rem', fontSize: 'var(--text-h1)' }}>
          <Rich text={'O que dizem de {nós.}'} />
        </h2>

        <div className="quotes" data-reveal="up" data-stagger>
          {testemunhos.map((t, i) => (
            <figure className="quote card" key={i}>
              <span className="mark" aria-hidden="true">“</span>
              <blockquote><p>{t.texto}</p></blockquote>
              <figcaption className="quote__who">
                <span className="quote__av" aria-hidden="true" />
                <span>
                  <span className="n" style={{ display: 'block' }}>{t.nome}</span>
                  <span className="c">{t.cargo}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
