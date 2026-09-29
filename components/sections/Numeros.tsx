import { numeros } from '@/content/site';

export default function Numeros() {
  return (
    <section className="section">
      <div className="container">
        <div className="stats" data-reveal="up" data-stagger>
          {numeros.map((n) => (
            <div className="stat" key={n.label}>
              <p className="v">
                <span data-counter={/^\d+$/.test(n.valor) ? n.valor : undefined}>{n.valor}</span>
                <span className="red">{n.sufixo}</span>
              </p>
              <p className="l">{n.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
