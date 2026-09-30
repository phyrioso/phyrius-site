import type { Metadata } from 'next';
import Footer from '@/components/Footer';
import LandNav from '@/components/landing/LandNav';
import Faq from '@/components/landing/Faq';
import Catalogo from '@/components/landing/Catalogo';
import {
  Bullets,
  Cruzada,
  Dores,
  Faixa,
  Garantias,
  LandFinal,
  LandHero,
  Passos,
  Solucao,
} from '@/components/landing/Secoes';
import { l48 } from '@/content/landings';

export const metadata: Metadata = {
  title: l48.seo.titulo,
  description: l48.seo.descricao,
  alternates: { canonical: '/48' },
  openGraph: { title: l48.seo.titulo, description: l48.seo.descricao, url: '/48' },
};

export default function Phyrius48() {
  return (
    <div className="land land--48">
      <LandNav numero={l48.numero} itens={l48.nav} cta={l48.navCta} />
      <main>
        <LandHero numero={l48.numero} hero={l48.hero} />
        <Faixa itens={l48.marquee} />
        <Dores dores={l48.dores} />
        <Solucao solucao={l48.solucao} />
        <Garantias itens={l48.garantias} />
        <Catalogo />
        <Passos passos={l48.passos} id="como-funciona" />
        <Bullets bloco={l48.paraQuem} />
        <Bullets bloco={l48.beneficios} />
        <Faq bloco={l48.faq} id="perguntas" />
        <Cruzada cruzada={l48.cruzada} />
        <LandFinal numero={l48.numero} final={l48.final} />
      </main>
      <Footer />
    </div>
  );
}
