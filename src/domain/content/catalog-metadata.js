export const subjects = [
  {
    id: "constitucional",
    name: "Constitucional",
    label: "Direito Constitucional",
    description: "Direitos fundamentais, organizacao do Estado e controle de constitucionalidade.",
    accent: "from-sky-300/30 via-cyan-300/10 to-transparent",
    order: 1
  },
  {
    id: "civil",
    name: "Civil",
    label: "Direito Civil",
    description: "Parte geral, obrigacoes, contratos, familia, sucessoes e responsabilidade civil.",
    accent: "from-amber-300/30 via-orange-300/10 to-transparent",
    order: 2
  },
  {
    id: "penal",
    name: "Penal",
    label: "Direito Penal",
    description: "Teoria do crime, aplicacao da lei penal e consequencias juridicas.",
    accent: "from-emerald-300/30 via-teal-300/10 to-transparent",
    order: 3
  },
  {
    id: "processo-civil",
    name: "Proc. Civil",
    label: "Processo Civil",
    description: "Tutelas, competencia, recursos, execucao e organizacao do procedimento.",
    accent: "from-fuchsia-300/30 via-pink-300/10 to-transparent",
    order: 4
  },
  {
    id: "etica",
    name: "Etica",
    label: "Etica Profissional",
    description: "Estatuto da Advocacia, deveres do advogado e publicidade profissional.",
    accent: "from-violet-300/30 via-indigo-300/10 to-transparent",
    order: 5
  },
  {
    id: "trabalhista",
    name: "Trabalhista",
    label: "Direito do Trabalho",
    description: "CLT, contrato de trabalho, rescisao, FGTS, jornada e relacao de emprego.",
    accent: "from-rose-300/30 via-red-300/10 to-transparent",
    order: 6
  },
  {
    id: "tributario",
    name: "Tributario",
    label: "Direito Tributario",
    description: "CTN, obrigacao tributaria, lancamento, prescricao, decadencia e imunidades.",
    accent: "from-yellow-300/30 via-lime-300/10 to-transparent",
    order: 7
  },
  {
    id: "administrativo",
    name: "Administrativo",
    label: "Direito Administrativo",
    description: "Atos administrativos, licitacao, concessoes, improbidade e poder de policia.",
    accent: "from-cyan-300/30 via-blue-300/10 to-transparent",
    order: 8
  },
  {
    id: "empresarial",
    name: "Empresarial",
    label: "Direito Empresarial",
    description: "Sociedades, titulos de credito, falencia, recuperacao judicial e direito comercial.",
    accent: "from-orange-300/30 via-amber-300/10 to-transparent",
    order: 9
  },
  {
    id: "consumidor",
    name: "Consumidor",
    label: "Direito do Consumidor",
    description: "CDC, responsabilidade do fornecedor, praticas abusivas e tutela processual.",
    accent: "from-teal-300/30 via-emerald-300/10 to-transparent",
    order: 10
  },
  {
    id: "processo-penal",
    name: "Proc. Penal",
    label: "Processo Penal",
    description: "Inqueriito policial, acao penal, provas, prisoes, recursos e habeas corpus.",
    accent: "from-pink-300/30 via-rose-300/10 to-transparent",
    order: 11
  }
];

export const themes = [
  // Constitucional
  { id: "domicilio", subjectId: "constitucional", label: "Inviolabilidade do domicilio" },
  { id: "controle-constitucionalidade", subjectId: "constitucional", label: "Controle de constitucionalidade" },
  { id: "direitos-fundamentais", subjectId: "constitucional", label: "Direitos e garantias fundamentais" },
  { id: "mandado-seguranca", subjectId: "constitucional", label: "Mandado de seguranca" },
  { id: "habeas-corpus-constitucional", subjectId: "constitucional", label: "Habeas corpus" },
  { id: "organizacao-estado", subjectId: "constitucional", label: "Organizacao do Estado" },
  { id: "poder-executivo", subjectId: "constitucional", label: "Poder Executivo" },
  { id: "poder-legislativo", subjectId: "constitucional", label: "Poder Legislativo" },
  { id: "poder-judiciario", subjectId: "constitucional", label: "Poder Judiciario" },
  { id: "principios-constitucionais", subjectId: "constitucional", label: "Principios constitucionais" },
  { id: "adi-ação-direta", subjectId: "constitucional", label: "Acao direta de inconstitucionalidade" },

  // Civil
  { id: "capacidade-civil", subjectId: "civil", label: "Capacidade civil" },
  { id: "contratos", subjectId: "civil", label: "Contratos" },
  { id: "responsabilidade-civil", subjectId: "civil", label: "Responsabilidade civil" },
  { id: "familia", subjectId: "civil", label: "Direito de familia" },
  { id: "sucessoes", subjectId: "civil", label: "Direito das sucessoes" },
  { id: "obrigacoes", subjectId: "civil", label: "Obrigacoes" },
  { id: "pessoa-juridica", subjectId: "civil", label: "Pessoa juridica" },
  { id: "prescricao-decadencia-civil", subjectId: "civil", label: "Prescricao e decadencia" },
  { id: "posse-propriedade", subjectId: "civil", label: "Posse e propriedade" },
  { id: "negocio-juridico", subjectId: "civil", label: "Negocio juridico" },

  // Penal
  { id: "lei-penal-tempo", subjectId: "penal", label: "Aplicacao da lei penal no tempo" },
  { id: "erro-de-tipo", subjectId: "penal", label: "Erro de tipo" },
  { id: "iter-criminis", subjectId: "penal", label: "Tentativa e consumacao" },
  { id: "culpabilidade", subjectId: "penal", label: "Culpabilidade" },
  { id: "concurso-crimes", subjectId: "penal", label: "Concurso de crimes" },
  { id: "crimes-pessoa", subjectId: "penal", label: "Crimes contra a pessoa" },
  { id: "crimes-patrimonio", subjectId: "penal", label: "Crimes contra o patrimonio" },
  { id: "penas", subjectId: "penal", label: "Das penas" },
  { id: "extincao-punibilidade", subjectId: "penal", label: "Extincao da punibilidade" },
  { id: "imputabilidade", subjectId: "penal", label: "Imputabilidade penal" },

  // Processo Civil
  { id: "tutela-provisoria", subjectId: "processo-civil", label: "Tutela provisoria" },
  { id: "competencia", subjectId: "processo-civil", label: "Competencia" },
  { id: "recursos", subjectId: "processo-civil", label: "Recursos" },
  { id: "execucao", subjectId: "processo-civil", label: "Processo de execucao" },
  { id: "litisconsorcios", subjectId: "processo-civil", label: "Litisconsorcio e intervencao" },
  { id: "petição-inicial", subjectId: "processo-civil", label: "Peticao inicial e resposta" },
  { id: "provas-cpc", subjectId: "processo-civil", label: "Provas no processo civil" },
  { id: "prescricao-cpc", subjectId: "processo-civil", label: "Prescricao e prazos processuais" },
  { id: "sentenca-coisa-julgada", subjectId: "processo-civil", label: "Sentenca e coisa julgada" },
  { id: "acao-rescisoria", subjectId: "processo-civil", label: "Acao rescisoria" },

  // Etica
  { id: "incompatibilidades", subjectId: "etica", label: "Incompatibilidades e impedimentos" },
  { id: "publicidade", subjectId: "etica", label: "Publicidade profissional" },
  { id: "deveres", subjectId: "etica", label: "Deveres do advogado" },
  { id: "prerrogativas", subjectId: "etica", label: "Prerrogativas do advogado" },
  { id: "honorarios", subjectId: "etica", label: "Honorarios advocaticios" },
  { id: "sigilo-profissional", subjectId: "etica", label: "Sigilo profissional" },
  { id: "infrações-disciplinares", subjectId: "etica", label: "Infracoes disciplinares" },
  { id: "inscricao-oab", subjectId: "etica", label: "Inscricao e exercicio profissional" },

  // Trabalhista
  { id: "contrato-trabalho", subjectId: "trabalhista", label: "Contrato de trabalho" },
  { id: "rescisao-contrato", subjectId: "trabalhista", label: "Rescisao contratual e FGTS" },
  { id: "jornada-trabalho", subjectId: "trabalhista", label: "Jornada e remuneracao" },
  { id: "ferias-licencas", subjectId: "trabalhista", label: "Ferias e licencas" },
  { id: "estabilidade", subjectId: "trabalhista", label: "Estabilidade e garantias" },
  { id: "processo-trabalho", subjectId: "trabalhista", label: "Processo do trabalho" },
  { id: "sindicatos", subjectId: "trabalhista", label: "Sindicatos e convencoes" },

  // Tributario
  { id: "obrigacao-tributaria", subjectId: "tributario", label: "Obrigacao tributaria" },
  { id: "lancamento", subjectId: "tributario", label: "Lancamento tributario" },
  { id: "imunidades-tributarias", subjectId: "tributario", label: "Imunidades tributarias" },
  { id: "prescricao-tributaria", subjectId: "tributario", label: "Prescricao e decadencia tributaria" },
  { id: "principios-tributarios", subjectId: "tributario", label: "Principios tributarios" },
  { id: "espécies-tributarias", subjectId: "tributario", label: "Especies tributarias" },

  // Administrativo
  { id: "atos-administrativos", subjectId: "administrativo", label: "Atos administrativos" },
  { id: "licitacao", subjectId: "administrativo", label: "Licitacao e contratos administrativos" },
  { id: "improbidade", subjectId: "administrativo", label: "Improbidade administrativa" },
  { id: "poder-policia", subjectId: "administrativo", label: "Poder de policia" },
  { id: "responsabilidade-estado", subjectId: "administrativo", label: "Responsabilidade do Estado" },
  { id: "concessoes", subjectId: "administrativo", label: "Concessoes e permissoes" },

  // Empresarial
  { id: "sociedades", subjectId: "empresarial", label: "Sociedades empresariais" },
  { id: "titulos-credito", subjectId: "empresarial", label: "Titulos de credito" },
  { id: "falencia-recuperacao", subjectId: "empresarial", label: "Falencia e recuperacao judicial" },
  { id: "estabelecimento", subjectId: "empresarial", label: "Estabelecimento comercial" },

  // Consumidor
  { id: "responsabilidade-fornecedor", subjectId: "consumidor", label: "Responsabilidade do fornecedor" },
  { id: "praticas-abusivas", subjectId: "consumidor", label: "Praticas abusivas" },
  { id: "protecao-contratual", subjectId: "consumidor", label: "Protecao contratual" },
  { id: "tutela-consumidor", subjectId: "consumidor", label: "Tutela processual do consumidor" },

  // Processo Penal
  { id: "inquerito-policial", subjectId: "processo-penal", label: "Inquerito policial" },
  { id: "acao-penal", subjectId: "processo-penal", label: "Acao penal" },
  { id: "provas-cpp", subjectId: "processo-penal", label: "Provas no processo penal" },
  { id: "prisoes", subjectId: "processo-penal", label: "Prisoes e liberdade provisoria" },
  { id: "habeas-corpus-cpp", subjectId: "processo-penal", label: "Habeas corpus e mandado de seguranca" },
  { id: "competencia-cpp", subjectId: "processo-penal", label: "Competencia penal" }
];

export const exams = [
  { id: "oab-30", label: "30o Exame OAB", shortLabel: "OAB 30", year: 2019 },
  { id: "oab-31", label: "31o Exame OAB", shortLabel: "OAB 31", year: 2020 },
  { id: "oab-32", label: "32o Exame OAB", shortLabel: "OAB 32", year: 2020 },
  { id: "oab-33", label: "33o Exame OAB", shortLabel: "OAB 33", year: 2021 },
  { id: "oab-34", label: "34o Exame OAB", shortLabel: "OAB 34", year: 2021 },
  { id: "oab-35", label: "35o Exame OAB", shortLabel: "OAB 35", year: 2022 },
  { id: "oab-36", label: "36o Exame OAB", shortLabel: "OAB 36", year: 2022 },
  { id: "oab-37", label: "37o Exame OAB", shortLabel: "OAB 37", year: 2023 },
  { id: "oab-38", label: "38o Exame OAB", shortLabel: "OAB 38", year: 2023 },
  { id: "oab-39", label: "39o Exame OAB", shortLabel: "OAB 39", year: 2024 },
  { id: "oab-40", label: "40o Exame OAB", shortLabel: "OAB 40", year: 2024 },
  { id: "oab-41", label: "41o Exame OAB", shortLabel: "OAB 41", year: 2025 },
  { id: "oab-42", label: "42o Exame OAB", shortLabel: "OAB 42", year: 2025 },
  { id: "oab-43", label: "43o Exame OAB", shortLabel: "OAB 43", year: 2025 },
  { id: "oab-44", label: "44o Exame OAB", shortLabel: "OAB 44", year: 2025 },
  { id: "oab-45", label: "45o Exame OAB", shortLabel: "OAB 45", year: 2025 },
  { id: "oab-46", label: "46o Exame OAB", shortLabel: "OAB 46", year: 2026 }
];

export const difficultyScale = [
  { id: "easy", label: "Facil", weight: 1 },
  { id: "medium", label: "Media", weight: 2 },
  { id: "hard", label: "Alta", weight: 3 }
];

export const personalDifficultyScale = [
  { id: "light", label: "Leve" },
  { id: "steady", label: "Media" },
  { id: "heavy", label: "Pesada" }
];
