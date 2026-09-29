// Todo o texto do site num só ficheiro. Editar aqui muda o site inteiro.
// Fonte: copy deck aprovado (Claude Doc "Copy deck — novo site Phyrius").

export const site = {
  nome: 'Phyrius',
  dominio: 'phyrius.pt',
  desde: 2019,
  email: 'mkt@phyrius.pt',
  telefone: '+351 918 740 569',
  telefoneLink: '+351918740569',
  horario: 'Segunda a sexta, 9h–13h e 14h–18h',
  morada: 'Rua Júlia das Dores da Silva Crespo, LT10 LJ139, Leiria',
  instagram: { nome: '@phyri.us', url: 'https://instagram.com/phyri.us' },
  redes: [
    { nome: 'Instagram', url: 'https://instagram.com/phyri.us' },
    { nome: 'LinkedIn', url: '#' },
    { nome: 'Facebook', url: '#' },
  ],
};

export const nav = [
  { label: 'Serviços', href: '/servicos' },
  { label: 'Portfólio', href: '/portfolio' },
  { label: 'Phyrius 100', href: '/#solucoes' },
  { label: 'Phyrius 48', href: '/#solucoes' },
  { label: 'Contactos', href: '/contactos' },
];

export const hero = {
  chips: ['Estúdio criativo', 'Leiria', 'Desde 2019'],
  titulo: ['O marketing', 'está a mudar.', 'A {Phyrius}', 'também{.}'],
  prefixo: 'Somos',
  taglines: [
    'o seu departamento de marketing.',
    'a equipa que faltava.',
    'estratégia com execução.',
    'marca, conteúdo e resultados.',
  ],
  lista: ['Estratégia', 'Branding', 'Conteúdo', 'Vídeo', 'Digital'],
  cartao: { titulo: 'Vamos falar?', nome: '[Nome]', cargo: '[Cargo]' },
};

export const clientes = [
  'ADIRA', 'Gordalina', 'Crioclean', 'Shopping NorteSul',
  'HOUSA', 'Golden Essences', 'Anodigold', 'Kriativos',
];

export const sobre = {
  titulo: 'Ideias boas são fáceis. Executá-las com consistência, {não.}',
  texto:
    'Somos uma equipa de estratégia, design, conteúdo e vídeo que trabalha como extensão da sua empresa. Pensamos a marca, planeamos a comunicação e fazemos acontecer, com a mesma equipa do início ao fim.',
  pilares: [
    { letra: 'C', titulo: 'Conteúdo', texto: 'Fotografia, vídeo, design e texto que dão razões para ficar.' },
    { letra: 'E', titulo: 'Estratégia', texto: 'Objetivos claros, prioridades definidas e resultados medidos.' },
    { letra: 'M', titulo: 'Marca', texto: 'Identidade, posicionamento e tom que tornam a sua empresa reconhecível.' },
  ],
};

export const solucoes = [
  {
    id: 'phyrius-100',
    numero: '100',
    destaque: true,
    paraQuem: 'Precisa de uma equipa completa, todos os meses',
    titulo: 'O seu departamento de marketing, pronto a usar.',
    texto:
      'Estratégia, conteúdo, design, vídeo e digital, com uma equipa dedicada e acompanhamento contínuo. Marketing a 100%.',
    tags: ['Contínuo', 'Equipa dedicada', 'Preço fixo mensal'],
    cta: 'Conhecer a Phyrius 100',
    href: '#',
  },
  {
    id: 'phyrius-48',
    numero: '48',
    destaque: false,
    paraQuem: 'Precisa de uma coisa concreta, agora',
    titulo: 'O marketing que precisa, quando precisa.',
    texto:
      'Um post, uma campanha, um vídeo. Escolha entre 48 serviços pré-definidos, com preço fechado e execução rápida, sem avenças nem contratos.',
    tags: ['On-demand', 'Sem contrato', '48 serviços à escolha'],
    cta: 'Conhecer a Phyrius 48',
    href: '#',
  },
];

export const areas = [
  {
    slug: 'estrategia',
    titulo: 'Estratégia e planeamento',
    valor: 'Saber para onde vai antes de gastar tempo e dinheiro a ir.',
    inclui: ['Diagnóstico de marketing', 'Plano de comunicação', 'Posicionamento', 'Público e objetivos', 'Consultoria'],
  },
  {
    slug: 'branding',
    titulo: 'Branding e design',
    valor: 'Uma marca que se reconhece à primeira e se lembra depois.',
    inclui: ['Estratégia de marca', 'Naming e slogan', 'Logótipo e identidade', 'Tom de voz', 'Manual de marca', 'Design gráfico'],
  },
  {
    slug: 'conteudo',
    titulo: 'Conteúdo e redes sociais',
    valor: 'Presença consistente, com conteúdos que dão razões para seguir.',
    inclui: ['Gestão de redes sociais', 'Calendário editorial', 'Copywriting', 'Email marketing', 'Newsletters'],
  },
  {
    slug: 'video',
    titulo: 'Fotografia e vídeo',
    valor: 'Imagens que mostram o que a sua empresa faz melhor.',
    inclui: ['Produto, espaço e equipa', 'Vídeo institucional', 'Vídeo publicitário', 'Reels e formatos curtos', 'Eventos', 'Drone e edição'],
  },
  {
    slug: 'digital',
    titulo: 'Websites e publicidade digital',
    valor: 'Um site que converte e anúncios que trazem as pessoas certas.',
    inclui: ['Websites e landing pages', 'Lojas online', 'SEO', 'Google Ads', 'Meta Ads', 'LinkedIn Ads', 'Análise e otimização'],
  },
  {
    slug: 'ia',
    titulo: 'IA e automação',
    valor: 'Menos tarefas repetitivas, respostas mais rápidas, mais tempo para o que importa.',
    inclui: ['Atendimento 24h multilingue', 'Gestão de leads', 'Marcações e lembretes', 'Notificações de estado', 'Conteúdo com IA'],
  },
];

export const setores = ['Indústria', 'Restauração e alimentar', 'Imobiliário', 'Saúde', 'Retalho', 'Serviços'];

export type Projeto = {
  slug: string;
  nome: string;
  setor: string;
  ano: string;
  resumo: string;
  areas: string[];
  imagem: string;
  destaque: boolean;
  desafio: string;
  oQueFizemos: string;
  resultado: string;
};

// [A preencher] Desafio, O que fizemos e Resultado por projeto.
export const projetos: Projeto[] = [
  {
    slug: 'adira', nome: 'ADIRA Metal Forming Solutions', setor: 'Indústria', ano: '2023',
    resumo: 'Website e conteúdos', areas: ['Websites e publicidade digital', 'Conteúdo e redes sociais'],
    imagem: '/img/proj-adira.jpg', destaque: true,
    desafio: '[O que o cliente precisava e porquê · até 40 palavras]',
    oQueFizemos: '[As ações concretas, pela ordem em que aconteceram · até 60 palavras]',
    resultado: '[O que mudou · um número se houver, senão uma frase do cliente]',
  },
  {
    slug: 'gordalina', nome: 'Gordalina', setor: 'Alimentar', ano: '2023',
    resumo: 'Catálogo e identidade', areas: ['Branding e design', 'Fotografia e vídeo'],
    imagem: '/img/proj-gordalina.jpg', destaque: true,
    desafio: '[A preencher]', oQueFizemos: '[A preencher]', resultado: '[A preencher]',
  },
  {
    slug: 'golden-essences', nome: 'Golden Essences', setor: 'Consumo', ano: '2023',
    resumo: 'Branding e redes sociais', areas: ['Branding e design', 'Conteúdo e redes sociais'],
    imagem: '/img/proj-golden.jpg', destaque: true,
    desafio: '[A preencher]', oQueFizemos: '[A preencher]', resultado: '[A preencher]',
  },
  {
    slug: 'shopping-nortesul', nome: 'Shopping NorteSul', setor: 'Retalho', ano: '2023',
    resumo: 'Branding, marketing e vídeo', areas: ['Branding e design', 'Conteúdo e redes sociais', 'Fotografia e vídeo'],
    imagem: '/img/proj-norteSul.jpg', destaque: true,
    desafio: '[A preencher]', oQueFizemos: '[A preencher]', resultado: '[A preencher]',
  },
  {
    slug: 'housa', nome: 'HOUSA', setor: 'Imobiliário', ano: '2023',
    resumo: 'Identidade e estratégia', areas: ['Branding e design', 'Estratégia e planeamento'],
    imagem: '/img/proj-housa.png', destaque: false,
    desafio: '[A preencher]', oQueFizemos: '[A preencher]', resultado: '[A preencher]',
  },
  {
    slug: 'crioclean', nome: 'Crioclean', setor: 'Indústria', ano: '2023',
    resumo: 'Conteúdo e redes sociais', areas: ['Conteúdo e redes sociais'],
    imagem: '/img/proj-crioclean.jpg', destaque: false,
    desafio: '[A preencher]', oQueFizemos: '[A preencher]', resultado: '[A preencher]',
  },
  {
    slug: 'takitos', nome: 'Takitos', setor: 'Restauração', ano: '2023',
    resumo: 'Branding e conteúdo', areas: ['Branding e design', 'Conteúdo e redes sociais'],
    imagem: '/img/proj-takitos.jpg', destaque: false,
    desafio: '[A preencher]', oQueFizemos: '[A preencher]', resultado: '[A preencher]',
  },
  {
    slug: 'ferro-em-brasa', nome: 'Ferro em Brasa', setor: 'Restauração', ano: '2023',
    resumo: 'Branding e vídeo', areas: ['Branding e design', 'Fotografia e vídeo'],
    imagem: '/img/proj-ferro.jpg', destaque: false,
    desafio: '[A preencher]', oQueFizemos: '[A preencher]', resultado: '[A preencher]',
  },
];

// [A confirmar] Números reais desde outubro de 2019.
export const numeros = [
  { valor: '7', sufixo: '', label: 'Anos a criar marcas' },
  { valor: '[X]', sufixo: '+', label: 'Marcas acompanhadas' },
  { valor: '[X]', sufixo: '+', label: 'Projetos entregues' },
];

// [Em recrutamento] Ver guia no copy deck.
export const testemunhos = [
  { texto: '[Testemunho em recrutamento · cliente industrial B2B · 25 a 40 palavras]', nome: '[Nome]', cargo: '[Cargo], [Empresa]' },
  { texto: '[Testemunho em recrutamento · cliente de consumo · 25 a 40 palavras]', nome: '[Nome]', cargo: '[Cargo], [Empresa]' },
  { texto: '[Testemunho em recrutamento · cliente de avença · 25 a 40 palavras]', nome: '[Nome]', cargo: '[Cargo], [Empresa]' },
];

export const palavrasFinais = ['Marca', 'Conteúdo', 'Estratégia', 'Resultados'];
