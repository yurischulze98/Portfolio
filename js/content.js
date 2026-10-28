/**
 * EDITE AQUI: conteúdo do portfólio, sem precisar mexer no layout.
 * Seja transparente sobre o estágio dos projetos e publique somente informações autorizadas.
 */
window.PORTFOLIO = {
  nome: 'Yuri Edward Schulze',
  nomeCurto: 'Yuri Schulze',
  local: 'Joinville, Santa Catarina · Brasil',
  email: 'yesyuri98@gmail.com',
  foto: 'https://portfolio-yuri-murex.vercel.app/assets/eu.jpeg', // Para independência do site antigo: salve sua foto em assets/foto.jpg e mude para 'assets/foto.jpg'.
  redes: {
    github: 'https://github.com/yurischulze',
    linkedin: 'https://www.linkedin.com/in/yuri-edward-schulze-615aa6182/',
    instagram: 'https://www.instagram.com/yurischulze/'
  },
  experiencias: [
    {
      empresa: 'By Seven', cargo: 'Analista de Suporte Júnior · Requisições',
      periodo: 'Mar 2025 — atual', local: 'Joinville · SC',
      resumo: 'Atuação na central de serviços, conectando clientes, processos e equipes técnicas para dar continuidade às demandas de TI.',
      pontos: ['Triagem, priorização e acompanhamento de requisições, incidentes e atividades agendadas.', 'Gestão de prazos e SLAs, documentação e comunicação com clientes e especialistas.', 'Criação de ferramentas pessoais para reduzir tarefas repetitivas e organizar fluxos de trabalho.'],
      ferramentas: ['ITSM', 'SevenSuite', 'Microsoft Teams', 'Automação']
    },
    {
      empresa: 'Linx', cargo: 'Assistente de TI', periodo: 'Fev 2022 — abr 2024', local: 'Joinville · SC',
      resumo: 'Suporte interno e melhoria de ferramentas de colaboração utilizadas por equipes.',
      pontos: ['Suporte a colaboradores nos ambientes Jira e Confluence.', 'Atualização de um plug-in integrado ao Jira para consulta de registros de horas, utilizando React.'],
      ferramentas: ['Jira', 'Confluence', 'React']
    },
    {
      empresa: 'TOTVS', cargo: 'Assistente Administrativo', periodo: 'Jul 2016 — out 2021', local: 'Joinville · SC',
      resumo: 'Operação de processos de aprendizagem corporativa e atendimento em plataformas educacionais.',
      pontos: ['Administração de plataforma LMS e conteúdos SCORM.', 'Suporte a usuários e gestão de agendas de treinamentos e instrutores.'],
      ferramentas: ['LMS', 'SCORM', 'Processos']
    },
    {
      empresa: 'TOTVS', cargo: 'Assistente de Saúde Ocupacional', periodo: 'Fev 2015 — jun 2016', local: 'Joinville · SC',
      resumo: 'Condução de atividades de ginástica laboral e apoio ao bem-estar dos colaboradores.',
      pontos: ['Orientação de alongamentos e atividades coletivas no ambiente de trabalho.'],
      ferramentas: ['Comunicação', 'Colaboração']
    }
  ],
  projetos: [
    {
      id: 'templates', numero: '01', titulo: 'SevenSuite Templates',
      subtitulo: 'Menos cliques. Mais consistência.',
      categoria: 'Automação', ano: '2026', status: 'Em evolução', destaque: true,
      icon: 'layers', visual: 'templates',
      resumo: 'Extensão para Chrome que transforma preenchimentos repetitivos de chamados em modelos reutilizáveis, com atenção à compatibilidade entre campos.',
      problema: 'Cadastros operacionais repetitivos consomem tempo e aumentam a chance de inconsistências.',
      abordagem: 'Criação de modelos configuráveis para campos como categoria, serviço, fila, prioridade, datas e justificativa, com controles para diferentes contextos.',
      aprendizados: ['Extensões de navegador', 'Automação de formulários', 'Validação de campos', 'Experiência de uso'],
      tags: ['JavaScript', 'HTML/CSS', 'Chrome Extensions'],
      nota: 'Ferramenta pessoal de produtividade. Sem distribuição de código, dados ou acessos internos.'
    },
    {
      id: 'agente', numero: '02', titulo: 'Analisador de Chamados com IA',
      subtitulo: 'Transformar histórico em contexto.',
      categoria: 'Inteligência artificial', ano: '2026', status: 'Protótipo', destaque: true,
      icon: 'sparkles', visual: 'ai',
      resumo: 'Aplicação experimental para estruturar análises de chamados e propor resumos, classificações e textos de acompanhamento a partir de históricos fornecidos.',
      problema: 'O histórico extenso de uma solicitação exige leitura cuidadosa antes de gerar uma atualização objetiva.',
      abordagem: 'Desenho de instruções e interface para classificar tipos de demanda, organizar continuidade e redigir comunicações revisáveis por uma pessoa.',
      aprendizados: ['LLMs', 'Prompt engineering', 'Interfaces web', 'Revisão humana'],
      tags: ['IA generativa', 'JavaScript', 'APIs'],
      nota: 'Exemplos públicos devem usar dados fictícios; o resultado da IA exige validação humana.'
    },
    {
      id: 'financas', numero: '03', titulo: 'Gestor Financeiro Inteligente',
      subtitulo: 'Despesas claras, sem planilhas complexas.',
      categoria: 'Inteligência artificial', ano: '2026', status: 'Em desenvolvimento', destaque: true,
      icon: 'chart', visual: 'finance',
      resumo: 'Projeto de gestão de despesas com entrada em linguagem natural, categorização assistida e relatórios por mês ou período.',
      problema: 'Registrar gastos manualmente pode ser trabalhoso, especialmente em pequenas compras do dia a dia.',
      abordagem: 'Experimentação com interface web, integração planejada com WhatsApp e leitura de notas fiscais por imagem, com armazenamento individual.',
      aprendizados: ['APIs de IA', 'Modelagem de dados', 'Relatórios', 'OCR como recurso planejado'],
      tags: ['JavaScript', 'IA', 'Vercel', 'GitHub'],
      nota: 'A integração com WhatsApp e a leitura automática de notas são recursos em planejamento/testes.'
    },
    {
      id: 'mouse', numero: '04', titulo: 'Controle Acessível para Jogos',
      subtitulo: 'Tecnologia pensada para incluir.',
      categoria: 'Pesquisa & produto', ano: '2026', status: 'Pesquisa e desenvolvimento', destaque: true,
      icon: 'accessibility', visual: 'access',
      resumo: 'Iniciativa em colaboração com uma universidade para estudar um mouse/controlador adaptado a pessoas que jogam com uma mão.',
      problema: 'Muitos periféricos não são concebidos para necessidades motoras diversas.',
      abordagem: 'Exploração de ergonomia, personalização de botões e possibilidades de software para configuração e mapeamento de comandos.',
      aprendizados: ['Acessibilidade', 'UX', 'Hardware e software', 'Configuração de controles'],
      tags: ['Acessibilidade', 'UX', 'P&D'],
      nota: 'Projeto em estudo, inspirado em soluções de periféricos adaptados; sem produto comercial concluído.'
    },
    {
      id: 'entregas', numero: '05', titulo: 'Assistente de Entregas',
      subtitulo: 'Uma leitura, mais direção.',
      categoria: 'Pesquisa & produto', ano: '2026', status: 'Conceito', destaque: false,
      icon: 'route', visual: 'route',
      resumo: 'Conceito de app que lê códigos de barras, identifica a transportadora e auxilia na localização de endereços de entrega.',
      problema: 'Um entregador que trabalha com várias empresas pode depender de diversos aplicativos e processos diferentes.',
      abordagem: 'Pesquisa de identificação de etiquetas, geocodificação e integração com sistemas de terceiros quando houver APIs e autorização.',
      aprendizados: ['Leitura de códigos', 'Mapas', 'Integrações', 'Privacidade'],
      tags: ['Mobile', 'Barcode', 'Mapas'],
      nota: 'Não existe integração universal pronta; cada transportadora exige viabilidade e autorização específicas.'
    },
    {
      id: 'sap', numero: '06', titulo: 'Portal Logístico Integrado ao SAP',
      subtitulo: 'Visibilidade do estoque à entrega.',
      categoria: 'Pesquisa & produto', ano: '2025—2026', status: 'Projeto acadêmico', destaque: false,
      icon: 'database', visual: 'sap',
      resumo: 'Planejamento acadêmico de um portal centralizado para acompanhar produtos, estoque, movimentações e entregas integrado a um ERP.',
      problema: 'Sistemas pouco integrados podem dificultar rastreabilidade e informações logísticas.',
      abordagem: 'Definição de perfis de clientes, empresas e entregadores, com visão de status, indicadores e rotas como requisitos da solução.',
      aprendizados: ['Análise de requisitos', 'Processos de TI', 'Integração ERP', 'Logística'],
      tags: ['SAP (conceito)', 'Requisitos', 'UX'],
      nota: 'Trabalho de concepção e planejamento; não representa integração SAP implementada.'
    },
    {
      id: 'pendencias', numero: '07', titulo: 'Painel de Pendências de Chamados',
      subtitulo: 'Anotações que acompanham o contexto.',
      categoria: 'Automação', ano: '2026', status: 'Conceito', destaque: false,
      icon: 'notes', visual: 'notes',
      resumo: 'Ideia de extensão pessoal para organizar notas, prazos e lembretes vinculados a protocolos, sem substituir o registro oficial.',
      problema: 'Anotações pontuais em diferentes lugares tornam difícil recuperar pendências.',
      abordagem: 'Planejamento de notas locais por protocolo, tags, alertas de prazo e exportação em Markdown.',
      aprendizados: ['Arquitetura de extensões', 'Armazenamento local', 'Produtividade'],
      tags: ['Extensão', 'UX', 'Local storage'],
      nota: 'Ideia em especificação, não deve ser apresentada como ferramenta já entregue.'
    },
    {
      id: 'portfolio', numero: '08', titulo: 'Meu Primeiro Portfólio',
      subtitulo: 'Onde minha jornada web ganhou forma.',
      categoria: 'Web', ano: '2024', status: 'Publicado', destaque: false,
      icon: 'code', visual: 'web',
      resumo: 'Primeira versão do meu espaço pessoal na web, criada para contar minha história e apresentar minhas experiências e habilidades.',
      problema: 'Encontrar uma maneira simples de reunir meu perfil, estudos e trajetória profissional em um só lugar.',
      abordagem: 'Construção de páginas de apresentação, história pessoal e currículo online.',
      aprendizados: ['HTML', 'CSS', 'JavaScript', 'Publicação web'],
      tags: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://portfolio-yuri-murex.vercel.app/index.html',
      nota: 'Versão histórica mantida como referência de evolução.'
    }
  ],
  conhecimentos: [
    {
      titulo: 'Na prática', texto: 'Tecnologias e atividades que já utilizo em estudos ou projetos.',
      tags: ['HTML', 'CSS', 'JavaScript', 'React', 'Extensões Chrome', 'Git / GitHub', 'Vercel', 'Automação de processos']
    },
    {
      titulo: 'Aprofundando', texto: 'Minha trilha atual para evoluir em desenvolvimento.',
      tags: ['C#', 'POO', '.NET / ASP.NET Core', 'SQL / Bancos de dados', 'APIs REST', 'Arquitetura de software', 'IA e LLMs', 'Integrações mobile']
    },
    {
      titulo: 'Experiência em ferramentas', texto: 'Ferramentas de trabalho e ambientes corporativos.',
      tags: ['SevenSuite', 'Jira', 'Confluence', 'Microsoft Teams', 'Whaticket', 'LMS / SCORM', 'TOTVS Protheus', 'TOTVS RM', 'Salesforce']
    }
  ]
};
