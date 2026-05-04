import { BookOpen, Music2, type LucideIcon } from 'lucide-react';

export type Project = {
  name: string;
  summary: string;
  problem: string;
  solution: string;
  icon: LucideIcon;
  href: string;
  repo: string;
  accent: string;
  features: string[];
  integrations: string[];
};

export const profile = {
  name: 'Gustavo Aguiar',
  tagline: 'Next.js, IA e produtos digitais',
  headline:
    'Desenvolvedor focado em interfaces modernas, aplicações completas com Next.js e integrações reais com IA, Firebase e APIs externas',
  github: 'https://github.com/GustavoA01',
  linkedin: 'https://www.linkedin.com/in/aguiar-gustavo/',
  email: 'gustavoaguiar14325@gmail.com',
  phone: '(31) 9 9610-0766',
};

export const navigationItems = [
  {
    label: 'Projetos',
    href: '#projetos',
  },
  {
    label: 'Stack',
    href: '#stack',
  },
  {
    label: 'Contato',
    href: '#contato',
  },
];

export const projects: Project[] = [
  {
    name: 'Bookly',
    summary:
      'Biblioteca pessoal inteligente para buscar, salvar, organizar livros e receber sugestões com IA.',
    problem:
      'Leitores costumam espalhar livros, listas e progresso de leitura em ferramentas diferentes.',
    solution:
      'O Bookly centraliza biblioteca pessoal, listas temáticas, detalhes de leitura e recomendações do Gemini em uma experiência responsiva.',
    icon: BookOpen,
    href: 'https://bookly-gustavo.vercel.app/',
    repo: 'https://github.com/GustavoA01/Bookly',
    accent: 'from-teal-500 to-emerald-400',
    features: [
      'Busca paginada pela Google Books API',
      'Biblioteca com datas, páginas lidas e capa personalizada',
      'Listas temáticas para organizar livros',
      'Bookly IA com recomendações baseadas na coleção',
    ],
    integrations: ['Firebase Auth', 'Firestore', 'Gemini', 'Cloudinary'],
  },
  {
    name: 'Next Track',
    summary:
      'Recomendações musicais personalizadas com Gemini, Spotify OAuth, player integrado e estatísticas.',
    problem:
      'Recomendações musicais automáticas tendem a repetir padrões e ignorar contexto, humor e preferências específicas.',
    solution:
      'O Next Track conecta Spotify e Gemini para gerar playlists por conversa, ajustar vibes e salvar faixas direto na conta do usuário.',
    icon: Music2,
    href: 'https://next-track-gustavo.vercel.app/',
    repo: 'https://github.com/GustavoA01/Next-Track',
    accent: 'from-cyan-500 to-amber-400',
    features: [
      'OAuth com Spotify e acesso às playlists',
      'Chat com Gemini baseado na playlist completa',
      'Sliders de energia, humor e instrumentalidade',
      'Player integrado, estatísticas e histórico persistido',
    ],
    integrations: [
      'Spotify Web API',
      'Spotify Playback SDK',
      'Gemini 2.5 Flash',
      'Recharts',
    ],
  },
];

export const stack = [
  'HTML5',
  'CSS3',
  'TypeScript',
  'Next.js',
  'React',
  'React Native',
  'Tailwind CSS',
  'shadcn/ui',
  'Material UI',
  'Prisma ORM',
  'Firebase',
  'TanStack Query',
  'Axios',
  'Framer Motion',
  'React Hook Form',
  'Zod',
  'Jest',
  'Testing Library',
  'Git',
  'Vercel',
];

export const projectBaseStack = [
  'Next.js 16',
  'TypeScript',
  'Tailwind CSS',
  'shadcn/ui',
  'Jest',
];
