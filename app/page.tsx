import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/sections/Hero';
import Clientes from '@/components/sections/Clientes';
import Sobre from '@/components/sections/Sobre';
import Solucoes from '@/components/sections/Solucoes';
import Competencias from '@/components/sections/Competencias';
import Trabalho from '@/components/sections/Trabalho';
import Numeros from '@/components/sections/Numeros';
import Testemunhos from '@/components/sections/Testemunhos';
import CTA from '@/components/sections/CTA';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Clientes />
        <Sobre />
        <Solucoes />
        <Competencias />
        <Trabalho />
        <Numeros />
        <Testemunhos />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
