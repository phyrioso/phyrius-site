import { sobre } from '@/content/site';
import { Button, Label, Rich } from '@/components/ui/Bits';

const legendas = [
  'Fotografia da equipa em trabalho real',
  'Produção de vídeo e fotografia',
  'Estúdio · Leiria',
];

export default function Sobre() {
  return (
    <section className="section about-section" data-pin-steps>
      <div className="container">
        <div className="about">
          <div className="about__media">
            {legendas.map((l, i) => (
              <figure className="about__foto" data-step-media key={l}>
                <span>[{l}]</span>
                <em>0{i + 1} / 0{legendas.length}</em>
              </figure>
            ))}
          </div>

          <div className="about__card card">
            <div className="section-head" style={{ borderTop: 0, paddingTop: 0, marginBottom: 0 }}>
              <Label num="01">Quem somos</Label>
              <p className="label">©Edição 02</p>
            </div>

            <div>
              <h2 data-split><Rich text={sobre.titulo} /></h2>
              <p className="lead" style={{ marginTop: '1.5rem', maxWidth: '55ch' }}>{sobre.texto}</p>
            </div>

            <div className="pillars">
              {sobre.pilares.map((p) => (
                <div className="pillar" key={p.letra} data-step>
                  <span className="pillar__letter">{p.letra}</span>
                  <div>
                    <h3>{p.titulo}</h3>
                    <p>{p.texto}</p>
                  </div>
                </div>
              ))}
            </div>

            <div><span data-magnetic><Button href="/contactos" variant="ghost">Falar com a equipa</Button></span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
