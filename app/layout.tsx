import type { Metadata } from 'next';
import './globals.css';
import '../styles/components.css';
import '../styles/landings.css';
import SmoothScroll from '@/components/SmoothScroll';
import Motion from '@/components/Motion';
import Preloader from '@/components/Preloader';
import Cursor from '@/components/Cursor';

export const metadata: Metadata = {
  metadataBase: new URL('https://phyrius.pt'),
  title: {
    default: 'Phyrius · Agência de Marketing e Branding em Leiria',
    template: '%s · Phyrius',
  },
  description:
    'Marca, conteúdo e estratégia para PME. Uma equipa completa para o seu marketing, contínuo com a Phyrius 100 ou pontual com a Phyrius 48.',
  openGraph: {
    type: 'website',
    locale: 'pt_PT',
    siteName: 'Phyrius',
    url: 'https://phyrius.pt',
  },
  alternates: { canonical: '/' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-PT">
      <body>
        <Preloader />
        <Cursor />
        <SmoothScroll />
        <Motion />
        {children}
      </body>
    </html>
  );
}
