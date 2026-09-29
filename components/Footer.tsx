import Link from 'next/link';
import { nav, site } from '@/content/site';
import { Button, Rich } from '@/components/ui/Bits';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <h2><Rich text={'Vamos pôr o seu marketing\na trabalhar{?}'} /></h2>
          <Button href="/contactos">Falar connosco</Button>
        </div>

        <div className="footer__cols">
          <div className="footer__col">
            <p className="label">Navegação</p>
            <Link href="/"><span className="muted">01 </span>Início</Link>
            {nav.map((n, i) => (
              <Link key={n.label} href={n.href}><span className="muted">0{i + 2} </span>{n.label}</Link>
            ))}
          </div>
          <div className="footer__col">
            <p className="label">Contactos</p>
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <a href={`tel:${site.telefoneLink}`}>{site.telefone}</a>
            <p className="muted">{site.horario}</p>
          </div>
          <div className="footer__col">
            <p className="label">Estúdio</p>
            <p>{site.morada}</p>
          </div>
          <div className="footer__col">
            <p className="label">Seguir</p>
            {site.redes.map((r) => (
              <a key={r.nome} href={r.url} target="_blank" rel="noreferrer">{r.nome}</a>
            ))}
            <p className="muted">{site.instagram.nome}</p>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} Phyrius. Todos os direitos reservados.</p>
          <p>Privacidade e Cookies · Livro de Reclamações</p>
          <p>Marca, conteúdo e estratégia. Desde Leiria.</p>
        </div>
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="footer__mark" src="/logo-phyrius.svg" alt="" aria-hidden="true" />
    </footer>
  );
}
