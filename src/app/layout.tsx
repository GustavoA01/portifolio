import type { Metadata } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import './globals.css';
import { Providers } from '@/components/Providers';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
  weight: ['500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Gustavo Aguiar | Portifolio',
  description:
    'Portifolio de Gustavo Aguiar, desenvolvedor front-end especializado em React e Next.js',
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <html
    lang="pt-BR"
    className={`${inter.variable} ${montserrat.variable} h-full antialiased`}
    suppressHydrationWarning
  >
    <body className="flex min-h-full flex-col">
      <Providers>{children}</Providers>
    </body>
  </html>
);

export default RootLayout;
