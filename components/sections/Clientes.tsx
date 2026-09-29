import { clientes } from '@/content/site';
import { SectionHead } from '@/components/ui/Bits';

export default function Clientes() {
  return (
    <section className="section">
      <div className="container">
        <SectionHead label="Marcas que confiam em nós" edition="©Edição 01" />
        <div className="clients" data-reveal="up" data-stagger>
          {clientes.map((c) => <div key={c}>{c}</div>)}
        </div>
      </div>
    </section>
  );
}
