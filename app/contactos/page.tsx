import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { site } from '@/content/site';
import { Label, Orbit, Rich } from '@/components/ui/Bits';
import Formulario from '@/components/Formulario';

export const metadata: Metadata = {
  title: 'Contactos',
  description: 'Fale connosco sobre a sua marca. Primeira conversa sem compromisso. Respondemos em 24 horas úteis.',
};

export default function ContactosPage() {
  return (
    <>
      <Header />
      <main>
        <section className="page-hero">
          <Orbit />
          <div className="container">
            <div className="contact">
              <div>
                <Label>Contactos</Label>
                <h1 data-split style={{ margin: '1.5rem 0' }}>
                  <Rich text={'Vamos falar\nsobre a sua\n{marca.}'} />
                </h1>
                <p className="lead" data-reveal="up">
                  Conte-nos o que precisa. A primeira conversa é sem compromisso e serve para percebermos se,
                  e como, podemos ajudar.
                </p>

                <div className="contact__info" data-reveal="up" data-stagger>
                  <div>
                    <p className="k">Email</p>
                    <a className="v" href={`mailto:${site.email}`}>{site.email}</a>
                  </div>
                  <div>
                    <p className="k">Telefone</p>
                    <a className="v" href={`tel:${site.telefoneLink}`}>{site.telefone}</a>
                  </div>
                  <div>
                    <p className="k">Horário</p>
                    <p className="v">{site.horario}</p>
                  </div>
                  <div>
                    <p className="k">Estúdio</p>
                    <p className="v">{site.morada}</p>
                  </div>
                </div>
              </div>

              <Formulario />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
