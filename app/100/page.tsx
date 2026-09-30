import type { Metadata } from 'next';
import Footer from '@/components/Footer';
import LandNav from '@/components/landing/LandNav';
import Faq from '@/components/landing/Faq';
import { Bullets, Cruzada, Dores, LandFinal, LandHero, Passos, Solucao } from '@/components/landing/Secoes';
import { Cem, Comparacao, Equipa } from '@/components/landing/Cem100';
import { l100 } from '@/content/landings';

export const metadata: Metadata = {
  title: l100.seo.titulo,
  description: l100.seo.descricao,
  alternates: { canonical: '/100' },
  openGraph: { title: l100.seo.titulo, description: l100.seo.descricao, url: '/100' },
};

export default function Phyrius100() {
  return (
    <div className="land land--100">
      <LandNav numero={l100.numero} itens={l100.nav} cta={l100.navCta} />
      <main>
        <LandHero numero={l100.numero} hero={l100.hero} />
        <Dores dores={l100.dores} />
        <Solucao solucao={l100.solucao} />
        <Equipa />
        <Comparacao />
        <Cem />
        <Passos passos={l100.passos} id="como-funciona" />
        <Bullets bloco={l100.paraQuem} />
        <Faq bloco={l100.faq} id="perguntas" />
        <Cruzada cruzada={l100.cruzada} />
        <LandFinal numero={l100.numero} final={l100.final} />
      </main>
      <Footer />
    </div>
  );
}
