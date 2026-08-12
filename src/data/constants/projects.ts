import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'bookly',
    accessMode: 'live',
    accessLabel: 'Experimentar agora',
    name: 'Bookly',
    tagline: 'Sua biblioteca pessoal inteligente',
    summary:
      'Biblioteca pessoal com busca de livros, organização por listas e recomendações com IA',
    about:
      'O Bookly é uma aplicação web de biblioteca pessoal. O usuário busca livros pela Google Books API, salva na própria coleção, organiza em listas temáticas e acompanha o progresso de leitura com datas, páginas lidas e capa personalizada. O diferencial é o Bookly IA, um chat que analisa a biblioteca do usuário e sugere o próximo livro a ler.',
    problem:
      'Quem lê com frequência perde o controle do que já terminou, do que está em andamento e do que ainda quer ler. Sem um lugar centralizado, fica difícil organizar a coleção, criar listas temáticas e descobrir novos títulos alinhados ao gosto pessoal.',
    solution:
      'O Bookly reúne busca, biblioteca pessoal, listas e acompanhamento de leitura em uma única interface responsiva com dark mode. A integração com Gemini transforma o histórico de leitura em recomendações contextuais, enquanto Firebase e Cloudinary cuidam de autenticação, persistência e upload de capas.',
    iconUrl: '/project-icons/bookly-icon.png',
    href: 'https://bookly-gustavo.vercel.app/',
    repo: 'https://github.com/GustavoA01/Bookly',
    accent: 'from-teal-500 to-emerald-400',
    highlights: [
      {
        title: 'Explorar livros',
        description:
          'Busca pela Google Books API com paginação, levando da descoberta ao detalhe do livro em poucos cliques.',
      },
      {
        title: 'Biblioteca pessoal',
        description:
          'Datas de início e fim, páginas lidas e capa customizada para cada título da sua coleção.',
      },
      {
        title: 'Bookly IA',
        description:
          'Chat com Gemini que lê sua biblioteca e sugere novos livros com base no que você já leu.',
      },
      {
        title: 'Listas temáticas',
        description:
          'Organize títulos em listas personalizadas: clássicos, fila de leitura, favoritos e mais.',
      },
    ],
    features: [
      'Busca de livros com Google Books API e paginação',
      'Biblioteca pessoal com progresso de leitura e capa customizada',
      'Listas temáticas para organizar a coleção',
      'Bookly IA com Gemini para recomendações contextuais',
      'Upload de capa com Cloudinary',
      'Autenticação com login, cadastro e redefinição de senha',
      'Interface responsiva com dark mode ativo por padrão',
    ],
    integrations: [
      'Firebase Auth',
      'Firestore',
      'Gemini',
      'Cloudinary',
      'Google Books API',
      'TanStack Query',
      'React Hook Form',
      'Zod',
    ],
  },
  {
    id: 'track-log',
    accessMode: 'live',
    accessLabel: 'Experimentar agora',
    name: 'Track Log',
    tagline: 'Organize o repertório e acompanhe a prática',
    summary:
      'App para músicos cadastrarem músicas, organizarem pastas e registrarem sessões de estudo',
    about:
      'O Track Log é uma aplicação web para músicos organizarem o repertório e acompanharem a evolução dos estudos. O usuário cadastra músicas com artista, gênero, instrumento, dificuldade e status de aprendizado, agrupa em pastas personalizadas, registra sessões de prática com cronômetro e consulta histórico e estatísticas de progresso.',
    problem:
      'Quem estuda instrumento costuma espalhar o repertório entre anotações, playlists e planilhas. Sem um lugar único, fica difícil saber o que está aprendendo, quanto tempo já praticou e quais músicas avançaram de fato.',
    solution:
      'O Track Log centraliza biblioteca, pastas e sessões de prática em uma interface responsiva com tema claro e escuro. Firebase cuida da autenticação, Prisma e PostgreSQL persistem músicas, pastas e histórico, e o cronômetro registra cada sessão com duração e observações.',
    iconUrl: '/project-icons/track-log-icon.jpg',
    href: 'https://app-track-log.vercel.app/',
    repo: 'https://github.com/GustavoA01/Track-Log',
    accent: 'from-amber-400 to-teal-500',
    highlights: [
      {
        title: 'Biblioteca de músicas',
        description:
          'Cadastre título, artista, gênero, instrumento, dificuldade, status e links de vídeo ou tablatura.',
      },
      {
        title: 'Pastas personalizadas',
        description:
          'Organize o repertório em pastas com cor e capa, associando cada música a um ou mais grupos.',
      },
      {
        title: 'Sessões com cronômetro',
        description:
          'Inicie e finalize práticas com timer, registre minutos e anotações por música.',
      },
      {
        title: 'Histórico e estatísticas',
        description:
          'Acompanhe sessões anteriores e veja indicadores como tempo total praticado e volume de estudos.',
      },
    ],
    features: [
      'Autenticação com login, cadastro e recuperação de senha',
      'Biblioteca de músicas com status de aprendizado e filtros',
      'Pastas personalizadas com cor e imagem de capa',
      'Sessões de prática com cronômetro, duração e observações',
      'Histórico completo das sessões realizadas',
      'Cards de estatísticas de progresso e tempo praticado',
    ],
    integrations: [
      'Firebase Auth',
      'Prisma',
      'PostgreSQL',
      'TanStack Query',
      'React Hook Form',
      'Zod',
      'Jest',
      'Testing Library',
    ],
  },
  {
    id: 'next-track',
    accessMode: 'video',
    name: 'Next Track',
    tagline: 'Recomendações musicais guiadas por conversa',
    summary:
      'IA + Spotify para descobrir músicas fora do algoritmo convencional',
    about:
      'O Next Track nasceu da frustração com a repetição do algoritmo do Spotify. A aplicação conecta a conta do usuário via OAuth, lê o contexto completo de uma playlist e abre um chat com Gemini 2.5 Flash para pedir recomendações por sentimento, situação ou gênero abstrato, como "músicas para programar em um dia chuvoso". As faixas sugeridas podem ser ouvidas no player integrado e salvas direto na playlist do Spotify.',
    problem:
      'Recomendações automáticas de streaming tendem a repetir os mesmos padrões e ignoram nuances como humor, contexto e preferências específicas, como artistas que o usuário não quer ouvir.',
    solution:
      'Integrando Spotify Web API, Playback SDK e Gemini, o Next Track permite conversar com a IA sobre o que se quer ouvir, ajustar energia, humor e instrumentalidade, escutar as sugestões na interface e persistir o histórico do chat no Firebase por playlist.',
    note: 'Por políticas da API do Spotify em 2025, o acesso público é limitado a usuários autorizados manualmente. Para testar, entre em contato ou rode localmente com suas credenciais.',
    iconUrl: '/project-icons/next-track-icon.png',
    href: 'https://next-track-gustavo.vercel.app/',
    repo: 'https://github.com/GustavoA01/Next-Track',
    demoVideoUrl: '/videos/next-track.mp4',
    youtubeUrl: 'https://youtu.be/2Qgd_q-ggZY',
    accent: 'from-cyan-500 to-amber-400',
    highlights: [
      {
        title: 'Curadoria conversacional',
        description:
          'Peça recomendações por sentimento, situação ou estilo, a IA entende o contexto da playlist inteira.',
      },
      {
        title: 'Ajuste de vibes',
        description:
          'Sliders de energia, humor e instrumentalidade influenciam diretamente o que a IA sugere.',
      },
      {
        title: 'Player integrado',
        description:
          'Ouça as faixas sugeridas na interface usando o Spotify Web Playback SDK, sem sair do app.',
      },
      {
        title: 'Estatísticas da playlist',
        description:
          'Artistas mais presentes, gêneros dominantes e gráfico de popularidade com Recharts.',
      },
    ],
    features: [
      'Login OAuth com Spotify e listagem das playlists do usuário',
      'Chat com Gemini 2.5 Flash baseado no contexto da playlist',
      'Controles de energia, humor e instrumentalidade',
      'Player integrado ao Spotify Web Playback SDK',
      'Salvar músicas sugeridas direto nas playlists do Spotify',
      'Estatísticas com artistas, gêneros e gráfico de popularidade',
      'Histórico de conversa persistido no Firebase por playlist',
    ],
    integrations: [
      'Spotify Web API',
      'Spotify Playback SDK',
      'Gemini 2.5 Flash',
      'Firebase',
      'Recharts',
      'TanStack Query',
      'React Hook Form',
      'Zod',
    ],
  },
  {
    id: 'chameleon-wallpaper',
    accessMode: 'live',
    name: 'Chameleon Wallpaper',
    tagline: 'Controle do papel de parede do computador',
    summary:
      'Web app + agente Python para trocar wallpapers manualmente ou em intervalos de tempo',
    about:
      'Trocar o wallpaper com frequência costuma ser chato: você precisa baixar as imagens, organizá-las em pastas e trocar manualmente pelas configurações do sistema, sem nenhuma forma simples de automatizar esse processo.',
    problem:
      'Manter wallpapers organizados e trocá-los com frequência exige salvar imagens em pastas, repetir ações no sistema operacional e não há uma forma simples de automatizar a troca em intervalos.',
    solution:
      'O painel web centraliza suas imagens e dispositivos em coleções. Um agente instalado no Windows recebe os comandos e troca o wallpaper automaticamente, com opções de troca manual, por intervalo de tempo, ou já na inicialização do sistema.',
    note: 'O agente que efetivamente troca o papel de parede funciona apenas no Windows, pois usa winreg e a API SystemParametersInfoW do sistema.',
    iconUrl: '/project-icons/chamaleon-icon.png',
    href: 'https://chameleon-wallpaper.vercel.app/',
    repo: 'https://github.com/GustavoA01/Chameleon-Wallpaper',
    demoVideoUrl: '/videos/chameleon-wallpaper.mp4',
    youtubeUrl: 'https://youtu.be/A-iz9xvwVNo',
    accent: 'from-emerald-500 to-lime-400',
    highlights: [
      {
        title: 'Web app completa',
        description:
          'Interface para pastas, upload de imagens, dispositivos e controle remoto da troca de wallpaper.',
      },
      {
        title: 'Agente Python local',
        description:
          'Servidor Flask no Windows que escuta comandos da web app e aplica o wallpaper no SO.',
      },
      {
        title: 'Troca automática',
        description:
          'Configure intervalos para alternar wallpapers sem intervenção manual.',
      },
      {
        title: 'Início com o Windows',
        description:
          'Scripts PowerShell para rodar o agente em segundo plano ao ligar o computador.',
      },
    ],
    features: [
      'Criação de pastas para organizar coleções de wallpapers',
      'Upload e gerenciamento de imagens com Cloudinary',
      'Cadastro de dispositivos e configuração de intervalo de troca',
      'Troca manual ou automática por meio de comandos da web app',
      'Agente Flask em Python que aplica o wallpaper no Windows',
      'Tarefa agendada do Windows para iniciar o agente automaticamente',
    ],
    integrations: [
      'Prisma',
      'PostgreSQL',
      'Cloudinary',
      'Python Flask',
      'Radix UI',
      'React Hook Form',
      'Zod',
    ],
  },
];
