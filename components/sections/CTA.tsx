import { site, palavrasFinais } from '@/content/site';
import { Button, Orbit, Rich } from '@/components/ui/Bits';

export default function CTA() {
  const palavras = [...palavrasFinais, ...palavrasFinais];

  return (
    <>
      <section className="section">
        <div className="container">
          <div className="cta">
            <Orbit parallax={0.1} spin={160} />
            <h2 data-split="words"><Rich text={'Vamos pôr o seu\nmarketing a {trabalhar?}'} /></h2>
            <p style={{ fontSize: '1.3rem', maxWidth: '40ch' }} data-reveal="up">
              Conte-nos o que precisa. Respondemos em 24 horas úteis.
            </p>
            <div className="cta__row" data-reveal="up">
              <span data-magnetic><Button href="/contactos">Marcar uma conversa</Button></span>
              <a className="mail" href={`mailto:${site.email}`}>ou escreva para <span>{site.email}</span></a>
            </div>
          </div>
        </div>
      </section>

      <div className="words-wrap" aria-hidden="true">
        <div className="words" data-marquee="-50">
          {palavras.map((w, i) => (
            <span key={i}>{w}<span className="red">.</span></span>
          ))}
        </div>
      </div>
    </>
  );
}
