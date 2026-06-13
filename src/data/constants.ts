import { BookOpen, Music2, type LucideIcon } from 'lucide-react';

export type Project = {
  name: string;
  summary: string;
  problem: string;
  solution: string;
  icon: LucideIcon;
  href: string;
  repo: string;
  demoVideoUrl?: string;
  accent: string;
  features: string[];
  integrations: string[];
};

export const profile = {
  name: 'Gustavo Aguiar',
  tagline: 'Desenvolvedor Front-end · React · Next.js · TypeScript',
  headline:
    'Desenvolvo interfaces modernas e aplicações completas, desde o front-end ao banco de dados, com integrações de IAs e APIs',
  github: 'https://github.com/GustavoA01',
  linkedin: 'https://www.linkedin.com/in/aguiar-gustavo/',
  email: 'gustavoaguiar14325@gmail.com',
  phone: '(31) 99610-0766',
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
      'Biblioteca pessoal inteligente para buscar, salvar, organizar livros e receber sugestões com IA',
    problem:
      'Leitores têm dificuldade de acompanhar o que já leram, o que estão lendo e o que ainda querem ler, além de estabelecer metas e descobrir novos livros',
    solution:
      'O Bookly centraliza biblioteca pessoal, listas temáticas, detalhes de leitura e recomendações do Gemini em uma experiência responsiva',
    icon: BookOpen,
    href: 'https://bookly-gustavo.vercel.app/',
    repo: 'https://github.com/GustavoA01/Bookly',
    accent: 'from-teal-500 to-emerald-400',
    features: [
      'Busca de livros com a Google Books API',
      'Acompanhamento de leitura com datas, progresso e capa customizada',
      'Listas personalizadas para organizar a coleção',
      'IA que analisa sua biblioteca e sugere o próximo livro',
    ],
    integrations: ['Firebase Auth', 'Firestore', 'Gemini', 'Cloudinary'],
  },
  {
    name: 'Next Track',
    summary:
      'Recomendações musicais personalizadas com Gemini, Spotify, player integrado e estatísticas',
    problem:
      'Recomendações musicais automáticas tendem a repetir padrões e ignorar contexto, humor e preferências específicas',
    solution:
      'Você se conecta ao Spotify, escolhe uma playlist e conversa com a IA para afinar o que quer ouvir e salvar suas faixas direto na sua conta',
    icon: Music2,
    href: 'https://next-track-gustavo.vercel.app/',
    repo: 'https://github.com/GustavoA01/Next-Track',
    // demoVideoUrl:
    //   'https://github.com/user-attachments/assets/2afa0066-0e8b-4b83-81ee-8015c6a5d084',
    accent: 'from-cyan-500 to-amber-400',
    features: [
      'OAuth com Spotify e acesso às playlists',
      'Chat com IA que entende o contexto da sua playlist',
      'Controles de energia e instrumentalidade para refinar as recomendações',
      'Player integrado, estatísticas da playlist e histórico de mensagens salvo',
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
