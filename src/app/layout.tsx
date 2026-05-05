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
  title: 'Gustavo Aguiar | Desenvolvedor Front-end',
  description:
    'Portifolio de Gustavo Aguiar, desenvolvedor front-end especializado em React e Next.js',
  applicationName: 'Portifolio Gustavo Aguiar',
  authors: [{ name: 'Gustavo Aguiar' }],
  creator: 'Gustavo Aguiar',
  keywords: [
    'Gustavo Aguiar',
    'Desenvolvedor Front-end',
    'React',
    'Next.js',
    'TypeScript',
    'Tailwind CSS',
    'Portfólio',
  ],
  icons: {
    icon: [
      {
        url: '/favicon.png',
        type: 'image/png',
      },
      {
        url: '/icon.png',
        type: 'image/png',
      },
    ],
    apple: [
      {
        url: '/apple-icon.png',
        type: 'image/png',
      },
    ],
  },
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
