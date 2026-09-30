// Texto das duas landing pages: /100 e /48.
// Fonte: canvas "Landing Pages Phyrius 100 & 48" (artboards aprovados).
// Em {chavetas} fica o que aparece a vermelho. \n marca uma quebra de linha.

export type Passo = { num: string; titulo: string; texto: string };
export type Pergunta = { p: string; r: string };
export type Cta = { label: string; href: string; variante?: 'red' | 'ghost' | 'white' };

export type Base = {
  slug: string;
  numero: string;
  seo: { titulo: string; descricao: string };
  nav: { label: string; href: string }[];
  navCta: Cta;
  hero: {
    etiqueta: string;
    titulo: string;
    texto: string;
    ctas: Cta[];
    notas: string[];
    foto: string;
  };
  dores: { label: string; titulo: string; texto: string; itens: string[]; foto?: string };
  solucao: { label: string; titulo: string; paragrafos: string[]; cta: Cta; frase: string; foto: string };
  passos: { label: string; titulo: string; itens: Passo[] };
  paraQuem: { label: string; titulo: string; texto?: string; itens: string[] };
  faq: { label: string; titulo: string; itens: Pergunta[] };
  cruzada: { label: string; pergunta: string; texto: string; cta: Cta };
  final: {
    label: string;
    titulo: string;
    texto: string;
    nota: string;
    form: { titulo: string; campo: string; opcoes: string[]; botao: string };
  };
};

/* ============================================================
   Phyrius 100
   ============================================================ */

export const l100: Base & {
  equipa: { label: string; titulo: string; texto: string; itens: { papel: string; texto: string }[]; mais: string; coordenacao: string };
  comparacao: { label: string; titulo: string; texto: string; colunas: [string, string, string]; linhas: [string, string, string][] };
  cem: { label: string; titulo: string; texto: string; pilares: { letra: string; titulo: string; texto: string }[] };
} = {
  slug: '100',
  numero: '100',
  seo: {
    titulo: 'Phyrius 100 — O seu departamento de marketing, pronto a usar',
    descricao:
      'Estratégia, conteúdo, design, redes sociais, vídeo e campanhas. Uma equipa multidisciplinar que planeia e executa o marketing da sua empresa de forma contínua, sem contratar ninguém.',
  },
  nav: [
    { label: 'A equipa', href: '#equipa' },
    { label: 'Como funciona', href: '#como-funciona' },
    { label: 'Perguntas', href: '#perguntas' },
    { label: 'Phyrius 48', href: '/48' },
  ],
  navCta: { label: 'Marcar uma reunião', href: '#falar' },

  hero: {
    etiqueta: 'Phyrius 100 · Departamento de marketing externo',
    titulo: 'O seu departamento\nde {marketing,}\npronto a usar{.}',
    texto:
      'Estratégia, conteúdo, design, redes sociais, vídeo e campanhas. Uma equipa multidisciplinar que planeia e executa o marketing da sua empresa de forma contínua, sem contratar ninguém.',
    ctas: [
      { label: 'Marcar uma reunião', href: '#falar', variante: 'red' },
      { label: 'Como funciona', href: '#como-funciona', variante: 'ghost' },
    ],
    notas: ['Desde 2019', 'Leiria, a trabalhar para todo o país', 'Sem compromisso na primeira conversa'],
    foto: '[Foto campanha] Empresário de PME, retrato em estúdio escuro, sem texto',
  },

  dores: {
    label: 'Identifica-se?',
    titulo: 'O {marketing}\nda sua empresa está\ndemasiado disperso?',
    texto: 'Quando cada área trabalha separadamente, o marketing perde direção, consistência e impacto.',
    itens: [
      'Marketing sem direção?',
      'Falta de tempo?',
      'Não sabe por onde começar?',
      'Vários fornecedores e pouca coordenação?',
      'Projetos que não avançam?',
      'Comunicação inconsistente?',
      'Marketing não é prioridade?',
      'A marca cresceu, mas a comunicação não acompanhou?',
    ],
    foto: '[Foto campanha] Sócios de PME em reunião, estúdio escuro',
  },

  solucao: {
    label: 'A solução',
    titulo: 'Não precisa de contratar\num departamento.\nPrecisa de trabalhar\ncomo se {tivesse um.}',
    paragrafos: [
      'Criar internamente todas as competências de marketing exige tempo, contratação, coordenação e investimento.',
      'A Phyrius 100 reúne estratégia, planeamento e execução numa equipa multidisciplinar que trabalha como extensão da sua empresa. Conhecemos o negócio, definimos prioridades e colocamos todas as nossas áreas de especialidade a trabalhar na mesma direção.',
    ],
    cta: { label: 'Marcar uma reunião', href: '#falar', variante: 'red' },
    frase: 'Uma equipa completa.\nUma estratégia integrada.\nMarketing a {100%.}',
    foto: '',
  },

  equipa: {
    label: 'A equipa que passa a ter',
    titulo: 'Não é um pacote de serviços.\nÉ um {departamento inteiro.}',
    texto:
      'Se a sua empresa decidisse criar um departamento de marketing amanhã, precisava destas pessoas. Com a Phyrius 100, já as tem.',
    itens: [
      {
        papel: 'Estratega',
        texto:
          'Define prioridades, objetivos, posicionamento e planos de ação alinhados com a realidade da sua empresa. Acompanha os resultados e ajusta a estratégia.',
      },
      {
        papel: 'Designer',
        texto:
          'Desenvolve peças gráficas, campanhas, apresentações, materiais comerciais e todos os suportes necessários para comunicar a sua marca com consistência.',
      },
      {
        papel: 'Copywriter',
        texto:
          'Escreve textos estratégicos para website, redes sociais, anúncios, newsletters, campanhas e materiais institucionais, com a voz da sua marca.',
      },
      {
        papel: 'Gestor de redes sociais',
        texto:
          'Planeia, cria e gere conteúdos consistentes, relevantes e adaptados a cada canal. Publica, responde e mede.',
      },
      {
        papel: 'Videógrafo e fotógrafo',
        texto:
          'Produz vídeo e fotografia para redes sociais, website, campanhas e apresentação da empresa, da captação à edição final.',
      },
      {
        papel: 'Gestor de tráfego',
        texto:
          'Planeia, implementa e acompanha campanhas no Google, Meta, LinkedIn e outros canais. Otimiza o investimento com base em resultados.',
      },
    ],
    mais: 'E ainda: landing pages, e-commerce, email marketing, análise e otimização.',
    coordenacao: 'Tudo coordenado por um contacto responsável, que conhece a sua empresa e a equipa.',
  },

  comparacao: {
    label: 'Equipa completa, custo zero de RH',
    titulo: 'Contratar internamente ou\nligar a {Phyrius 100?}',
    texto:
      'Um departamento interno com todas estas competências significa vários salários, encargos, ferramentas, formação e tempo de coordenação. A Phyrius 100 dá-lhe a equipa inteira, com um custo mensal previsível.',
    colunas: ['O que precisa', 'Departamento interno', 'Phyrius 100'],
    linhas: [
      ['Competências', 'Uma pessoa não cobre 6 funções', '6 especialistas, uma equipa'],
      ['Tempo até arrancar', 'Recrutar, contratar, formar: meses', 'Diagnóstico e plano em semanas'],
      ['Custo', 'Salários, encargos, ferramentas, formação', 'Valor mensal previsível, sem encargos de RH'],
      ['Continuidade', 'Férias, baixas, saídas param o trabalho', 'A equipa não para'],
      ['Coordenação', 'Vários fornecedores, várias direções', 'Um contacto responsável, uma estratégia'],
      ['Escala', 'Contratar mais quando cresce', 'Ajusta-se às prioridades de cada fase'],
    ],
  },

  cem: {
    label: 'Porquê 100?',
    titulo: 'Ideias boas são fáceis.\nExecutá-las com consistência, {não.}',
    texto:
      '100 é amplitude: o marketing da sua empresa a 100%, sem partes em falta. E lê-se CEM, as três frentes que fazem uma marca crescer.',
    pilares: [
      { letra: 'C', titulo: 'Conteúdo', texto: 'Fotografia, vídeo, design e texto que comunicam todos os dias e mantêm a marca presente.' },
      { letra: 'E', titulo: 'Estratégia', texto: 'Objetivos, prioridades, planeamento e análise, para que cada ação tenha uma razão e um resultado.' },
      { letra: 'M', titulo: 'Marca', texto: 'Identidade, posicionamento e consistência em todos os pontos de contacto com os seus clientes.' },
    ],
  },

  passos: {
    label: 'Como funciona',
    titulo: 'Do primeiro café ao\n{acompanhamento mensal.}',
    itens: [
      { num: '01', titulo: 'Diagnóstico', texto: 'Uma primeira conversa, sem compromisso, para conhecer o negócio, os objetivos e o que está a travar o marketing.' },
      { num: '02', titulo: 'Plano', texto: 'Definimos prioridades, canais, calendário e indicadores. Fica claro o que vai ser feito, quando e porquê.' },
      { num: '03', titulo: 'Execução', texto: 'A equipa produz: conteúdos, design, campanhas, vídeo, redes sociais. Pedidos e prioridades geridos por um contacto responsável.' },
      { num: '04', titulo: 'Acompanhamento', texto: 'Reuniões regulares, relatório de resultados e ajuste contínuo da estratégia. O marketing não pára, e evolui com a empresa.' },
    ],
  },

  paraQuem: {
    label: 'Para quem é',
    titulo: 'A Phyrius 100 é para\n{empresas que...}',
    texto:
      'PME com ambição de crescer e sem um departamento de marketing estruturado. Empresários, diretores gerais e comerciais que precisam de resultados, não de mais tarefas.',
    itens: [
      'Têm mais ideias do que capacidade para executar',
      'Dependem de vários fornecedores sem coordenação',
      'Não querem contratar, formar e gerir uma equipa interna',
      'Precisam de consistência, todos os meses',
      'Querem um parceiro que conheça o negócio e pense com elas',
      'Valorizam resultados medidos, não relatórios de atividade',
    ],
  },

  faq: {
    label: 'Perguntas frequentes',
    titulo: 'Sem complicações.\n{Phyrius 100.}',
    itens: [
      {
        p: 'A Phyrius 100 substitui um departamento de marketing interno?',
        r: 'Pode substituir totalmente um departamento interno ou complementar uma equipa já existente, acrescentando competências, capacidade de execução e acompanhamento estratégico.',
      },
      {
        p: 'A solução é adaptada a cada empresa?',
        r: 'Sim. A estratégia, os serviços e o acompanhamento são definidos de acordo com os objetivos, necessidades, dimensão e realidade de cada negócio.',
      },
      {
        p: 'Qual é o compromisso mínimo?',
        r: 'A Phyrius 100 é um acompanhamento contínuo, com escalões ajustados às necessidades de cada empresa. As condições são apresentadas na proposta, depois da primeira conversa.',
      },
      {
        p: 'Compensa face a contratar alguém?',
        r: 'Uma pessoa não cobre estratégia, design, texto, vídeo, redes sociais e campanhas. Com a Phyrius 100 tem acesso a todas essas competências, sem encargos de contratação, formação ou ferramentas.',
      },
      {
        p: 'Existe acompanhamento regular?',
        r: 'Sim. A Phyrius 100 foi concebida para acompanhar as empresas de forma contínua, através de planeamento, reuniões, execução e análise de resultados.',
      },
      {
        p: 'Tenho de contratar todos os serviços?',
        r: 'A Phyrius 100 é uma solução integrada. No entanto, a estrutura de serviços é ajustada às áreas prioritárias de cada empresa.',
      },
      {
        p: 'Quem será o nosso contacto?',
        r: 'A empresa terá um contacto responsável pela coordenação do projeto, garantindo proximidade, organização e ligação entre o cliente e a equipa multidisciplinar.',
      },
      {
        p: 'Como são acompanhados os resultados?',
        r: 'São definidos indicadores de acordo com os objetivos do projeto. Os resultados são analisados regularmente para apoiar decisões e otimizar as ações.',
      },
    ],
  },

  cruzada: {
    label: 'Dois momentos. Duas soluções. Uma só Phyrius.',
    pergunta: 'Precisa só de algo pontual? Um logótipo, um vídeo, uma campanha?',
    texto:
      'A Phyrius 48 é marketing on demand: 48 serviços com preço fechado e prazo definido, sem avenças nem contratos.',
    cta: { label: 'Conhecer a Phyrius 48', href: '/48', variante: 'ghost' },
  },

  final: {
    label: 'Vamos falar',
    titulo: 'Vamos colocar o seu marketing\na trabalhar a {100%?}',
    texto:
      '30 minutos para perceber se este modelo faz sentido para a sua empresa. Sem compromisso: a primeira conversa serve para conhecermos o negócio e as prioridades.',
    nota: 'Respondemos em 1 dia útil.',
    form: {
      titulo: 'Marcar uma reunião',
      campo: 'Principal necessidade',
      opcoes: [
        'Estruturar o marketing do zero',
        'Consistência nas redes sociais e conteúdos',
        'Campanhas e geração de contactos',
        'Marca e comunicação',
        'Ainda não sei, quero conversar',
      ],
      botao: 'Marcar uma reunião',
    },
  },
};

/* ============================================================
   Phyrius 48
   ============================================================ */

export const l48: Base & {
  marquee: string[];
  garantias: { titulo: string; texto: string }[];
  catalogo: { label: string; titulo: string; texto: string; areas: { nome: string; servicos: string[] }[]; nota: string };
  beneficios: { label: string; titulo: string; itens: string[] };
} = {
  slug: '48',
  numero: '48',
  seo: {
    titulo: 'Phyrius 48 — O marketing que precisa, quando precisa',
    descricao:
      'Marketing on demand: 48 serviços com preço fechado, prazo definido e 3 revisões incluídas. Sem avenças nem contratos.',
  },
  nav: [
    { label: 'Os 48 serviços', href: '#catalogo' },
    { label: 'Como funciona', href: '#como-funciona' },
    { label: 'Perguntas', href: '#perguntas' },
    { label: 'Phyrius 100', href: '/100' },
  ],
  navCta: { label: 'Pedir orçamento', href: '#falar' },

  hero: {
    etiqueta: 'Marketing on demand · 48 serviços · preço fechado',
    titulo: 'O {marketing}\nque precisa.\nQuando {precisa.}',
    texto:
      'Nem todas as empresas precisam de um departamento de marketing completo. Às vezes basta um logótipo, um vídeo ou uma campanha. Com a Phyrius 48, escolhe um dos 48 serviços, com preço fechado e prazo definido. Sem avenças, sem contratos.',
    ctas: [
      { label: 'Ver os 48 serviços', href: '#catalogo', variante: 'red' },
      { label: 'Pedir orçamento', href: '#falar', variante: 'ghost' },
    ],
    notas: ['Preço fechado', 'Prazo em dias úteis', '3 revisões incluídas'],
    foto: '[Foto campanha] Empresária de PME, retrato em estúdio escuro, sem texto',
  },

  marquee: [
    'Logótipo', 'Reel / TikTok', 'Flyer', 'Campanha Meta Ads', 'Newsletter', 'Landing page',
    'Fotografia de produto', 'Cartão de visita', 'Post + Story', 'Roll-up', 'Artigo SEO',
    'Google Ads', 'Menu', 'Headshot', 'Calendário editorial', 'Rótulo',
  ],

  dores: {
    label: 'Identifica-se?',
    titulo: 'Ainda está a pagar\npor marketing de que\n{não precisa?}',
    texto:
      'Cada empresa está num momento diferente. Nem todas precisam da mesma solução, e quase nenhuma precisa de um pacote fechado para resolver um problema pontual.',
    itens: [
      'Avenças para uma necessidade que aparece duas vezes por ano.',
      'Orçamentos que demoram uma semana para um flyer.',
      'Freelancers diferentes para cada peça, sem coerência de marca.',
      'Surpresas no preço final e no prazo de entrega.',
    ],
  },

  solucao: {
    label: 'A solução',
    titulo: 'Escolha. Encomende.\n{Está feito.}',
    paragrafos: [
      'A Phyrius 48 nasceu para responder às necessidades reais das empresas. Em vez de vender um pacote, apresentamos um catálogo de 48 serviços standard: cada um com âmbito definido, preço fechado e prazo estimado. Escolhe o que precisa, quando precisa.',
    ],
    cta: { label: 'Ver os 48 serviços', href: '#catalogo', variante: 'red' },
    frase: 'Nem mais. Nem {menos.}',
    foto: '[Foto campanha] Peças de marketing sobre fundo escuro',
  },

  garantias: [
    { titulo: 'Preço fechado', texto: 'Sabe o valor antes de decidir. Sem extras escondidos.' },
    { titulo: 'Prazo definido', texto: 'Prazo estimado em dias úteis, confirmado na contratação.' },
    { titulo: '3 revisões incluídas', texto: 'Em design, redação e edição. Sem discussões.' },
    { titulo: 'Sem contratos', texto: 'Nem avenças, nem mensalidades. Pede quando precisar.' },
  ],

  catalogo: {
    label: 'O que pode pedir',
    titulo: '48 serviços.\n{Individualmente.}',
    texto:
      'Quatro áreas, quarenta e oito serviços standard. Escolha os que precisa e peça orçamento: respondemos com preço e prazo.',
    areas: [
      {
        nome: 'Marca e Design Gráfico',
        servicos: [
          'Identidade Visual Base', 'Normas e Variações do Logótipo', 'Vetorização de Logótipo',
          'Logótipo Secundário', 'Auditoria Visual de Marca', 'Cartão de Visita',
          'Pasta de Documentos', 'Assinatura de Email', 'Bloco de Notas', 'T-shirt',
          'Folheto Digital', 'Flyer Promocional', 'Cartaz / Póster', 'Roll-up',
          'Lona / Outdoor', 'Menu', 'Rótulo / Etiqueta', 'Maquetização de E-book',
        ],
      },
      {
        nome: 'Digital e Redes Sociais',
        servicos: [
          'Post Estático + Story', 'Post Carrossel', 'Story', 'Pack 3 Posts + Story',
          'Banner LinkedIn', 'Capa de Facebook', 'Banner para Site', 'Calendário Editorial Mensal',
          'Landing Page', 'Newsletter', 'Cartão Digital Interativo', 'Perfil de Empresa Google',
        ],
      },
      {
        nome: 'Publicidade e Campanhas',
        servicos: [
          'Consultoria Flash (45 min)', 'Campanha Meta Ads', 'Campanha Google Ads',
          'Campanha LinkedIn Ads', 'Campanha TikTok Ads', 'Gestão de Campanha (30 dias)',
          'Setup de Plataformas', 'SMS Marketing', 'Relatório de Resultados',
        ],
      },
      {
        nome: 'Produção de Conteúdo',
        servicos: [
          'Email Comercial', 'Artigo de Blog SEO / GEO', 'Edição de Reel / TikTok',
          'Headshot / Retrato Corporativo', 'Fotografia de Equipa / Instalações',
          'Fotografia Imobiliária', 'Book de Moda / Lookbook', 'Fotografia de Produto',
          'Fotografia de Restaurante',
        ],
      },
    ],
    nota: 'Não está na lista? Se precisa de mais do que um serviço pontual, a Phyrius 100 é o seu departamento de marketing completo.',
  },

  passos: {
    label: 'Como funciona',
    titulo: 'Três passos.\n{Zero burocracia.}',
    itens: [
      { num: '01', titulo: 'Escolha', texto: 'Selecione o serviço no catálogo e envie o pedido. Respondemos com preço fechado e prazo estimado.' },
      { num: '02', titulo: 'Encomende', texto: 'Confirma o pedido, envia o briefing e os materiais. O pagamento é feito à cabeça: sem contratos nem letra pequena.' },
      { num: '03', titulo: 'Receba', texto: 'Entregamos no prazo combinado, com até 3 revisões incluídas. Precisa de outra coisa daqui a um mês? É só voltar a pedir.' },
    ],
  },

  paraQuem: {
    label: 'Para quem é',
    titulo: 'A Phyrius 48 é para\n{empresas que...}',
    itens: [
      'Precisam apenas de um serviço específico',
      'Não querem contratos longos',
      'Procuram rapidez e flexibilidade',
      'Querem trabalhar projeto a projeto',
      'Valorizam soluções práticas',
      'Querem decidir onde investir',
    ],
  },

  beneficios: {
    label: 'Benefícios',
    titulo: 'Menos complicações.\n{Mais resultados.}',
    itens: [
      'Escolhe apenas o serviço de que precisa',
      'Sem pacotes fechados',
      'Sem mensalidades obrigatórias',
      'Âmbito e preço definidos à partida',
      'Processo rápido',
      'A mesma equipa, a mesma qualidade',
    ],
  },

  faq: {
    label: 'Perguntas frequentes',
    titulo: 'Tudo o que precisa de saber\nsobre a {Phyrius 48.}',
    itens: [
      {
        p: 'Posso pedir apenas um logótipo?',
        r: 'Sim. Cada um dos 48 serviços pode ser pedido individualmente, sem qualquer obrigação de contratar outros.',
      },
      {
        p: 'Tenho de assinar um contrato ou uma avença?',
        r: 'Não. A Phyrius 48 funciona pedido a pedido: confirma o serviço, paga e recebe. Sem mensalidades, sem períodos mínimos.',
      },
      {
        p: 'Como sei o preço?',
        r: 'Cada serviço tem um preço fechado. Ao enviar o pedido, respondemos em 1 dia útil com o valor e o prazo estimado, e só avança se fizer sentido para si.',
      },
      {
        p: 'O prazo é garantido?',
        r: 'O prazo indicado é uma estimativa em dias úteis, contada a partir da receção do briefing e dos materiais, e é confirmado na contratação. Serviços urgentes têm o valor duplicado.',
      },
      {
        p: 'Quantas revisões estão incluídas?',
        r: 'Os trabalhos de design, redação e edição incluem até 3 revisões. Alterações adicionais contam como um novo trabalho, com direito a mais 3 revisões.',
      },
      {
        p: 'E se precisar de mais do que um serviço?',
        r: 'Pode pedir vários serviços ao mesmo tempo. Se precisa de acompanhamento contínuo, com estratégia e uma equipa a trabalhar todos os meses, a Phyrius 100 é a solução indicada.',
      },
      {
        p: 'A impressão está incluída?',
        r: 'Os valores não incluem impressão, investimento publicitário nem imagens de banco. A impressão pode ser tratada connosco através da Kriativos, com orçamento à parte.',
      },
    ],
  },

  cruzada: {
    label: 'Dois momentos. Duas soluções. Uma só Phyrius.',
    pergunta: 'Precisa de marketing todos os meses, não só de vez em quando?',
    texto:
      'A Phyrius 100 é o seu departamento de marketing pronto a usar: estratégia, equipa completa e acompanhamento contínuo.',
    cta: { label: 'Conhecer a Phyrius 100', href: '/100', variante: 'ghost' },
  },

  final: {
    label: 'Pedir orçamento',
    titulo: 'O seu negócio não precisa de tudo.\nPrecisa da {solução certa.}',
    texto: 'Diga-nos que serviço precisa. Respondemos em 1 dia útil com preço fechado e prazo estimado.',
    nota: 'Valores sem IVA. Prazos em dias úteis, confirmados na contratação.',
    form: {
      titulo: 'Peça o seu serviço',
      campo: 'De que serviço precisa?',
      opcoes: [
        'Marca e Design Gráfico',
        'Digital e Redes Sociais',
        'Publicidade e Campanhas',
        'Produção de Conteúdo',
        'Vários serviços',
        'Ainda não sei',
      ],
      botao: 'Pedir orçamento',
    },
  },
};
