import { defineQuestion } from "../factories";
import { questionSeedOab46 } from "./questions-seed-oab46";
import { questionSeedOab45 } from "./questions-seed-oab45";
import { questionSeedOab44 } from "./questions-seed-oab44";

export const questionSeed = [
  // ==================== OAB 46 - QUESTÕES REAIS (80/80) ====================
  ...questionSeedOab46,

  // ==================== OAB 45 - QUESTÕES REAIS (80/80) ====================
  ...questionSeedOab45,

  // ==================== OAB 44 - QUESTÕES REAIS (80/80) ====================
  ...questionSeedOab44,


  // ==================== CONSTITUCIONAL (20) ====================
  defineQuestion({
    id: "q-const-001",
    subjectId: "constitucional",
    themeId: "domicilio",
    examId: "oab-40",
    year: 2024,
    questionNumber: 2,
    difficulty: "easy",
    statement: "A inviolabilidade do domicilio, prevista na Constituicao Federal, admite ingresso sem consentimento do morador durante o dia em qual hipotese?",
    explanation: "A determinacao judicial autoriza o ingresso apenas durante o dia. Nas demais hipoteses constitucionais, como flagrante, desastre ou prestacao de socorro, o limite temporal nao se aplica.",
    support: "CF/88, art. 5o, XI.",
    relatedArticleIds: [],
    tags: ["domicilio", "inviolabilidade"],
    alternatives: [
      { id: "a", text: "Quando houver denuncia anonima de crime em andamento." },
      { id: "b", text: "Por determinacao judicial, durante o dia.", correct: true },
      { id: "c", text: "Por determinacao judicial, a qualquer hora." },
      { id: "d", text: "Sempre que a autoridade policial entender necessario." }
    ]
  }),
  defineQuestion({
    id: "q-const-002",
    subjectId: "constitucional",
    themeId: "controle-constitucionalidade",
    examId: "oab-39",
    year: 2024,
    questionNumber: 3,
    difficulty: "medium",
    statement: "No sistema brasileiro, o controle concentrado de constitucionalidade perante o STF tem como instrumento a:",
    explanation: "A acao direta de inconstitucionalidade integra o controle concentrado, abstrato e principal de constitucionalidade perante o STF.",
    support: "CF/88, art. 102, I, a.",
    relatedArticleIds: [],
    tags: ["controle concentrado", "ADI"],
    alternatives: [
      { id: "a", text: "Excecao de inconstitucionalidade incidental em qualquer juizo." },
      { id: "b", text: "Acao direta de inconstitucionalidade.", correct: true },
      { id: "c", text: "Recurso extraordinario com repercussao geral." },
      { id: "d", text: "Habeas data coletivo." }
    ]
  }),
  defineQuestion({
    id: "q-const-003",
    subjectId: "constitucional",
    themeId: "direitos-fundamentais",
    examId: "oab-41",
    year: 2025,
    questionNumber: 1,
    difficulty: "hard",
    statement: "A lei penal mais benigna, quando posterior ao fato, deve ser aplicada aos fatos anteriores por forca de qual garantia constitucional?",
    explanation: "O art. 5o, XL, da CF/88 consagra a retroatividade da lei penal benefica.",
    support: "CF/88, art. 5o, XL.",
    relatedArticleIds: [],
    tags: ["retroatividade", "lei penal"],
    alternatives: [
      { id: "a", text: "Protecao ao ato juridico perfeito." },
      { id: "b", text: "Retroatividade da lei penal benefica.", correct: true },
      { id: "c", text: "Reserva de jurisdicao." },
      { id: "d", text: "Devido processo substancial." }
    ]
  }),
  defineQuestion({
    id: "q-const-004",
    subjectId: "constitucional",
    themeId: "mandado-seguranca",
    examId: "oab-38",
    year: 2023,
    questionNumber: 4,
    difficulty: "medium",
    statement: "O mandado de seguranca coletivo impetrado por partido politico com representacao no Congresso Nacional protege:",
    explanation: "O mandado de seguranca coletivo por partido politico tutela direitos liquidos e certos de seus filiados.",
    support: "CF/88, art. 5o, LXX, a.",
    relatedArticleIds: [],
    tags: ["mandado seguranca coletivo"],
    alternatives: [
      { id: "a", text: "Direitos difusos de toda a sociedade." },
      { id: "b", text: "Direitos liquidos e certos de seus filiados.", correct: true },
      { id: "c", text: "Direitos individuais homogeneos de qualquer cidadao." },
      { id: "d", text: "Interesses transindividuais sem vinculacao a filiacao." }
    ]
  }),
  defineQuestion({
    id: "q-const-005",
    subjectId: "constitucional",
    themeId: "principios-constitucionais",
    examId: "oab-37",
    year: 2023,
    questionNumber: 5,
    difficulty: "easy",
    statement: "A dignidade da pessoa humana esta prevista como fundamento da Republica Federativa do Brasil no:",
    explanation: "Os fundamentos da Republica estao no art. 1o da CF/88, que inclui a dignidade da pessoa humana no inciso III.",
    support: "CF/88, art. 1o, III.",
    relatedArticleIds: [],
    tags: ["fundamentos", "dignidade"],
    alternatives: [
      { id: "a", text: "Art. 3o, objetivos fundamentais." },
      { id: "b", text: "Art. 5o, direitos individuais." },
      { id: "c", text: "Art. 1o, III, fundamentos da Republica.", correct: true },
      { id: "d", text: "Art. 170, ordem economica." }
    ]
  }),
  defineQuestion({
    id: "q-const-006",
    subjectId: "constitucional",
    themeId: "poder-judiciario",
    examId: "oab-42",
    year: 2025,
    questionNumber: 6,
    difficulty: "hard",
    statement: "No controle difuso, a declaracao incidental de inconstitucionalidade pelo STF produz efeitos:",
    explanation: "No controle difuso, a declaracao produz efeitos inter partes e ex tunc, sem efeito erga omnes automatico.",
    support: "CF/88, art. 52, X; art. 97.",
    relatedArticleIds: [],
    tags: ["controle difuso", "inter partes"],
    alternatives: [
      { id: "a", text: "Erga omnes e ex nunc, vinculando todos os tribunais." },
      { id: "b", text: "Inter partes e ex tunc, sem efeito vinculante automatico.", correct: true },
      { id: "c", text: "Erga omnes e ex tunc, por forca constitucional direta." },
      { id: "d", text: "Inter partes e ex nunc, com efeito prospectivo." }
    ]
  }),
  defineQuestion({
    id: "q-const-007",
    subjectId: "constitucional",
    themeId: "habeas-corpus-constitucional",
    examId: "oab-43",
    year: 2025,
    questionNumber: 7,
    difficulty: "medium",
    statement: "O habeas corpus pode ser:",
    explanation: "O habeas corpus pode ser preventivo (salvo-conduto) ou liberatorio (quando ja houver prisao ilegal).",
    support: "CF/88, art. 5o, LXVIII.",
    relatedArticleIds: [],
    tags: ["habeas corpus", "liberdade"],
    alternatives: [
      { id: "a", text: "Exclusivo para tutelar liberdades distintas da locomocao." },
      { id: "b", text: "Somente cabivel apos a efetivacao da prisao." },
      { id: "c", text: "Preventivo ou liberatorio, conforme o estagio da coacao.", correct: true },
      { id: "d", text: "Dependente sempre de advogado constituido." }
    ]
  }),
  defineQuestion({
    id: "q-const-008",
    subjectId: "constitucional",
    themeId: "poder-legislativo",
    examId: "oab-30",
    year: 2019,
    questionNumber: 1,
    difficulty: "medium",
    statement: "A lei complementar distingue-se da lei ordinaria porque:",
    explanation: "A lei complementar exige maioria absoluta para aprovacao e trata de materias constitucionalmente reservadas.",
    support: "CF/88, art. 69.",
    relatedArticleIds: [],
    tags: ["lei complementar", "maioria absoluta"],
    alternatives: [
      { id: "a", text: "E aprovada por maioria simples." },
      { id: "b", text: "Nao pode ser objeto de controle de constitucionalidade." },
      { id: "c", text: "Exige maioria absoluta e trata de materias constitucionalmente reservadas.", correct: true },
      { id: "d", text: "Possui hierarquia superior a Constituicao Federal." }
    ]
  }),
  defineQuestion({
    id: "q-const-009",
    subjectId: "constitucional",
    themeId: "poder-executivo",
    examId: "oab-31",
    year: 2020,
    questionNumber: 2,
    difficulty: "hard",
    statement: "As medidas provisorias pressupoe os requisitos de:",
    explanation: "O art. 62 da CF/88 exige relevancia e urgencia, com prazo de 60 dias prorrogaveis por igual periodo.",
    support: "CF/88, art. 62.",
    relatedArticleIds: [],
    tags: ["medida provisoria", "urgencia"],
    alternatives: [
      { id: "a", text: "Necessidade publica e interesse social, prazo de 90 dias." },
      { id: "b", text: "Relevancia e urgencia, prazo de 60 dias prorrogaveis por igual periodo.", correct: true },
      { id: "c", text: "Relevancia e urgencia, prazo improrrogavel de 30 dias." },
      { id: "d", text: "Interesse coletivo e urgencia, aprovados previamente pelo Congresso." }
    ]
  }),
  defineQuestion({
    id: "q-const-010",
    subjectId: "constitucional",
    themeId: "organizacao-estado",
    examId: "oab-32",
    year: 2020,
    questionNumber: 3,
    difficulty: "medium",
    statement: "A competencia privativa da Uniao para legislar sobre direito civil pode ser delegada:",
    explanation: "O art. 22, paragrafo unico, permite delegacao aos Estados por lei complementar federal.",
    support: "CF/88, art. 22, paragrafo unico.",
    relatedArticleIds: [],
    tags: ["competencia privativa", "delegacao"],
    alternatives: [
      { id: "a", text: "Aos Municipios por lei ordinaria federal." },
      { id: "b", text: "Aos Estados por lei complementar federal.", correct: true },
      { id: "c", text: "Aos Estados por lei ordinaria estadual." },
      { id: "d", text: "E indelegavel em qualquer hipotese." }
    ]
  }),
  defineQuestion({
    id: "q-const-011",
    subjectId: "constitucional",
    themeId: "direitos-fundamentais",
    examId: "oab-33",
    year: 2021,
    questionNumber: 4,
    difficulty: "easy",
    statement: "Sao direitos sociais previstos no art. 6o da Constituicao Federal:",
    explanation: "O art. 6o lista: educacao, saude, alimentacao, trabalho, moradia, transporte, lazer, seguranca, previdencia, protecao a maternidade e a infancia e assistencia aos desamparados.",
    support: "CF/88, art. 6o.",
    relatedArticleIds: [],
    tags: ["direitos sociais"],
    alternatives: [
      { id: "a", text: "Educacao, saude, trabalho, moradia e previdencia social, entre outros.", correct: true },
      { id: "b", text: "Apenas educacao, saude e seguranca publica." },
      { id: "c", text: "Direitos civis e politicos somente." },
      { id: "d", text: "Apenas direitos previstos em tratados internacionais." }
    ]
  }),
  defineQuestion({
    id: "q-const-012",
    subjectId: "constitucional",
    themeId: "poder-executivo",
    examId: "oab-34",
    year: 2021,
    questionNumber: 5,
    difficulty: "hard",
    statement: "Os crimes de responsabilidade do Presidente da Republica sao julgados pelo:",
    explanation: "O art. 52, I, atribui ao Senado Federal o julgamento do Presidente em crimes de responsabilidade.",
    support: "CF/88, art. 52, I.",
    relatedArticleIds: [],
    tags: ["impeachment", "Senado"],
    alternatives: [
      { id: "a", text: "STF, apos autorizacao da Camara dos Deputados." },
      { id: "b", text: "STJ, por maioria absoluta." },
      { id: "c", text: "Senado Federal, apos autorizacao da Camara dos Deputados.", correct: true },
      { id: "d", text: "TJDF, com recurso ao STJ." }
    ]
  }),
  defineQuestion({
    id: "q-const-013",
    subjectId: "constitucional",
    themeId: "adi-ação-direta",
    examId: "oab-35",
    year: 2022,
    questionNumber: 6,
    difficulty: "hard",
    statement: "A ADPF e cabivel para:",
    explanation: "A ADPF serve para evitar ou reparar lesao a preceito fundamental decorrente de ato do Poder Publico, sendo subsidiaria.",
    support: "CF/88, art. 102, par. 1o; Lei 9.882/1999.",
    relatedArticleIds: [],
    tags: ["ADPF", "subsidiariedade"],
    alternatives: [
      { id: "a", text: "Impugnar exclusivamente leis federais pos-constitucionais." },
      { id: "b", text: "Evitar ou reparar lesao a preceito fundamental de ato do Poder Publico, quando nao houver outro meio eficaz.", correct: true },
      { id: "c", text: "Declarar inconstitucionalidade de tratados internacionais." },
      { id: "d", text: "Substituir a ADI em todos os casos." }
    ]
  }),
  defineQuestion({
    id: "q-const-014",
    subjectId: "constitucional",
    themeId: "direitos-fundamentais",
    examId: "oab-36",
    year: 2022,
    questionNumber: 7,
    difficulty: "medium",
    statement: "O mandado de injuncao e cabivel quando:",
    explanation: "O mandado de injuncao tutela direitos constitucionais frustrado pela falta de norma regulamentadora.",
    support: "CF/88, art. 5o, LXXI.",
    relatedArticleIds: [],
    tags: ["mandado de injuncao", "omissao legislativa"],
    alternatives: [
      { id: "a", text: "Houver ato ilegal de autoridade contra direito liquido e certo." },
      { id: "b", text: "A falta de norma regulamentadora tornar inviavel o exercicio de direitos constitucionais.", correct: true },
      { id: "c", text: "For necessario proteger a liberdade de locomocao." },
      { id: "d", text: "O Executivo praticar ato inconstitucional." }
    ]
  }),
  defineQuestion({
    id: "q-const-015",
    subjectId: "constitucional",
    themeId: "poder-legislativo",
    examId: "oab-30",
    year: 2019,
    questionNumber: 8,
    difficulty: "medium",
    statement: "As CPIs nao podem:",
    explanation: "CPIs nao podem decretar prisao preventiva — isso e reserva de jurisdicao.",
    support: "CF/88, art. 58, par. 3o.",
    relatedArticleIds: [],
    tags: ["CPI", "reserva de jurisdicao"],
    alternatives: [
      { id: "a", text: "Convocar servidores publicos para depor." },
      { id: "b", text: "Requisitar documentos de orgaos publicos." },
      { id: "c", text: "Decretar prisao preventiva de investigados.", correct: true },
      { id: "d", text: "Determinar quebra de sigilo bancario e fiscal." }
    ]
  }),
  defineQuestion({
    id: "q-const-016",
    subjectId: "constitucional",
    themeId: "organizacao-estado",
    examId: "oab-31",
    year: 2020,
    questionNumber: 9,
    difficulty: "hard",
    statement: "Uma das hipoteses que autoriza a intervencao federal nos Estados e:",
    explanation: "O art. 34 CF/88 admite intervencao quando o Estado descumpre ordem judicial.",
    support: "CF/88, art. 34.",
    relatedArticleIds: [],
    tags: ["intervencao federal"],
    alternatives: [
      { id: "a", text: "Interesse politico do governo federal em substituir o governador." },
      { id: "b", text: "Descumprimento de ordem ou decisao judicial pelo Estado.", correct: true },
      { id: "c", text: "Discordancia do Executivo federal com a politica fiscal estadual." },
      { id: "d", text: "Solicitacao do Judiciario estadual sem autorizacao do STF." }
    ]
  }),
  defineQuestion({
    id: "q-const-017",
    subjectId: "constitucional",
    themeId: "direitos-fundamentais",
    examId: "oab-32",
    year: 2020,
    questionNumber: 10,
    difficulty: "medium",
    statement: "O sigilo das comunicacoes telefonicas admite excecao:",
    explanation: "O art. 5o, XII, admite interceptacao por ordem judicial para fins de investigacao criminal.",
    support: "CF/88, art. 5o, XII; Lei 9.296/1996.",
    relatedArticleIds: [],
    tags: ["sigilo telefonico", "interceptacao"],
    alternatives: [
      { id: "a", text: "Por decisao administrativa da autoridade policial." },
      { id: "b", text: "Por decisao judicial para fins de investigacao criminal ou instrucao processual penal.", correct: true },
      { id: "c", text: "A qualquer momento, se autorizada pelo Ministerio Publico." },
      { id: "d", text: "Exclusivamente em estado de sitio ou estado de defesa." }
    ]
  }),
  defineQuestion({
    id: "q-const-018",
    subjectId: "constitucional",
    themeId: "controle-constitucionalidade",
    examId: "oab-33",
    year: 2021,
    questionNumber: 11,
    difficulty: "hard",
    statement: "A ADC tem por objetivo:",
    explanation: "A ADC confirma a constitucionalidade de lei federal, gerando efeito erga omnes e vinculante.",
    support: "CF/88, art. 102, I, a; Lei 9.868/1999.",
    relatedArticleIds: [],
    tags: ["ADC", "efeito vinculante"],
    alternatives: [
      { id: "a", text: "Declarar a inconstitucionalidade de lei estadual." },
      { id: "b", text: "Confirmar a constitucionalidade de lei ou ato normativo federal perante controversia judicial relevante.", correct: true },
      { id: "c", text: "Suprir omissao do legislador." },
      { id: "d", text: "Proteger direito liquido e certo contra ato de autoridade." }
    ]
  }),
  defineQuestion({
    id: "q-const-019",
    subjectId: "constitucional",
    themeId: "poder-legislativo",
    examId: "oab-34",
    year: 2021,
    questionNumber: 12,
    difficulty: "medium",
    statement: "A imunidade parlamentar material protege o parlamentar:",
    explanation: "O art. 53, caput, CF protege o parlamentar por opinioes, palavras e votos no exercicio do mandato.",
    support: "CF/88, art. 53, caput.",
    relatedArticleIds: [],
    tags: ["imunidade parlamentar", "inviolabilidade"],
    alternatives: [
      { id: "a", text: "Apenas durante sessoes plenarias." },
      { id: "b", text: "Por suas opinioes, palavras e votos no exercicio do mandato, de forma absoluta.", correct: true },
      { id: "c", text: "Por qualquer crime praticado durante o mandato." },
      { id: "d", text: "Somente nos crimes funcionais." }
    ]
  }),
  defineQuestion({
    id: "q-const-020",
    subjectId: "constitucional",
    themeId: "principios-constitucionais",
    examId: "oab-35",
    year: 2022,
    questionNumber: 13,
    difficulty: "easy",
    statement: "Sao objetivos fundamentais da Republica Federativa do Brasil, nos termos do art. 3o da CF/88:",
    explanation: "O art. 3o lista: construir sociedade livre, justa e solidaria; garantir desenvolvimento; erradicar pobreza; promover o bem de todos.",
    support: "CF/88, art. 3o.",
    relatedArticleIds: [],
    tags: ["objetivos fundamentais", "art. 3o"],
    alternatives: [
      { id: "a", text: "Soberania, cidadania, dignidade da pessoa humana e pluralismo politico." },
      { id: "b", text: "Construir sociedade livre, justa e solidaria; garantir desenvolvimento; erradicar a pobreza; promover o bem de todos.", correct: true },
      { id: "c", text: "Manter a paz internacional e cooperacao entre povos." },
      { id: "d", text: "Defender a ordem economica e a livre concorrencia." }
    ]
  }),

  // ==================== CIVIL (20) ====================
  defineQuestion({
    id: "q-civil-001",
    subjectId: "civil",
    themeId: "contratos",
    examId: "oab-36",
    year: 2022,
    questionNumber: 1,
    difficulty: "medium",
    statement: "O contrato de compra e venda de bem imovel entre presentes e considerado perfeito e acabado:",
    explanation: "O art. 482 do CC dispoe que a promessa de compra e venda tem efeitos proprios. Ja a compra e venda de imovel acima de 30 salarios minimos exige escritura publica (art. 108 CC), mas o contrato entre presentes se aperfeiçoa com o consenso.",
    support: "CC/2002, art. 482; art. 108.",
    relatedArticleIds: [],
    tags: ["contratos", "compra e venda", "consenso"],
    alternatives: [
      { id: "a", text: "Apenas apos o registro no Cartorio de Imoveis." },
      { id: "b", text: "Com o consenso sobre o objeto e o preco, independente da escritura para imoveis de pequeno valor.", correct: true },
      { id: "c", text: "Somente com a entrega das chaves ao comprador." },
      { id: "d", text: "Apenas se lavrado por escritura publica, independentemente do valor." }
    ]
  }),
  defineQuestion({
    id: "q-civil-002",
    subjectId: "civil",
    themeId: "responsabilidade-civil",
    examId: "oab-37",
    year: 2023,
    questionNumber: 2,
    difficulty: "hard",
    statement: "A responsabilidade civil do empregador por danos causados por empregado no exercicio do trabalho e:",
    explanation: "O art. 932, III, CC estabelece responsabilidade objetiva do empregador pelos atos do empregado. O art. 933 afasta a necessidade de culpa do empregador.",
    support: "CC/2002, art. 932, III; art. 933.",
    relatedArticleIds: [],
    tags: ["responsabilidade objetiva", "empregador"],
    alternatives: [
      { id: "a", text: "Subjetiva, exigindo comprovacao de culpa do empregador." },
      { id: "b", text: "Objetiva, independente de culpa do empregador.", correct: true },
      { id: "c", text: "Solidaria apenas se o empregador concorreu diretamente para o dano." },
      { id: "d", text: "Afastada quando o empregado agiu em excesso de mandato." }
    ]
  }),
  defineQuestion({
    id: "q-civil-003",
    subjectId: "civil",
    themeId: "familia",
    examId: "oab-38",
    year: 2023,
    questionNumber: 3,
    difficulty: "medium",
    statement: "O regime de bens do casamento que presume a comunhao dos bens adquiridos onerosamente durante o matrimonio e o:",
    explanation: "O regime de comunhao parcial de bens (art. 1658 CC) e o mais comum e presume que bens adquiridos onerosamente na constancia do casamento sao comuns.",
    support: "CC/2002, art. 1658.",
    relatedArticleIds: [],
    tags: ["regime de bens", "comunhao parcial"],
    alternatives: [
      { id: "a", text: "Separacao absoluta de bens." },
      { id: "b", text: "Comunhao parcial de bens.", correct: true },
      { id: "c", text: "Comunhao universal de bens." },
      { id: "d", text: "Participacao final nos aquestos." }
    ]
  }),
  defineQuestion({
    id: "q-civil-004",
    subjectId: "civil",
    themeId: "sucessoes",
    examId: "oab-39",
    year: 2024,
    questionNumber: 4,
    difficulty: "hard",
    statement: "Na sucessao legitima, a ordem de vocacao hereditaria estabelecida pelo CC/2002 e:",
    explanation: "O art. 1829 do CC estabelece: descendentes com conjuge; ascendentes com conjuge; conjuge sobrevivente; colaterais ate 4o grau.",
    support: "CC/2002, art. 1829.",
    relatedArticleIds: [],
    tags: ["vocacao hereditaria", "sucessao legitima"],
    alternatives: [
      { id: "a", text: "Conjuge, descendentes, ascendentes, colaterais." },
      { id: "b", text: "Descendentes com conjuge; ascendentes com conjuge; conjuge sobrevivente; colaterais.", correct: true },
      { id: "c", text: "Descendentes, ascendentes, colaterais, conjuge." },
      { id: "d", text: "Conjuge, ascendentes, descendentes, colaterais." }
    ]
  }),
  defineQuestion({
    id: "q-civil-005",
    subjectId: "civil",
    themeId: "obrigacoes",
    examId: "oab-40",
    year: 2024,
    questionNumber: 5,
    difficulty: "medium",
    statement: "O devedor em mora responde pelos prejuizos que ela determinar, mais juros, atualizacao e honorarios. O devedor mora configura-se:",
    explanation: "Conforme art. 394 CC, o devedor mora quando nao realiza o pagamento no tempo, lugar e forma devidos. Para obrigacoes com prazo certo, a mora e ex re (independe de notificacao).",
    support: "CC/2002, art. 394; art. 397.",
    relatedArticleIds: [],
    tags: ["mora", "obrigacoes", "prazo certo"],
    alternatives: [
      { id: "a", text: "Somente apos notificacao extrajudicial em qualquer caso." },
      { id: "b", text: "Automaticamente nas obrigacoes com prazo certo, independente de notificacao.", correct: true },
      { id: "c", text: "Apenas apos ajuizamento de acao de cobranca." },
      { id: "d", text: "A partir do transito em julgado da sentenca condenatoria." }
    ]
  }),
  defineQuestion({
    id: "q-civil-006",
    subjectId: "civil",
    themeId: "capacidade-civil",
    examId: "oab-41",
    year: 2025,
    questionNumber: 6,
    difficulty: "easy",
    statement: "Sao absolutamente incapazes de exercer pessoalmente os atos da vida civil:",
    explanation: "Apos a Lei 13.146/2015 (Estatuto da Pessoa com Deficiencia), apenas os menores de 16 anos sao absolutamente incapazes (art. 3o CC).",
    support: "CC/2002, art. 3o; Lei 13.146/2015.",
    relatedArticleIds: [],
    tags: ["capacidade civil", "incapacidade absoluta"],
    alternatives: [
      { id: "a", text: "Menores de 18 anos e os que por enfermidade nao puderem exprimir vontade." },
      { id: "b", text: "Apenas os menores de 16 anos.", correct: true },
      { id: "c", text: "Os ebrios habituais, os viciciados em toxicos e os que nao puderem exprimir vontade." },
      { id: "d", text: "Os menores de 18 anos em qualquer caso." }
    ]
  }),
  defineQuestion({
    id: "q-civil-007",
    subjectId: "civil",
    themeId: "negocio-juridico",
    examId: "oab-42",
    year: 2025,
    questionNumber: 7,
    difficulty: "medium",
    statement: "O negocio juridico praticado por quem nao tem poderes para tanto e sujeito a:",
    explanation: "O negocio praticado sem poderes por representante e ineficaz em relacao ao representado, salvo ratificacao (art. 662 CC).",
    support: "CC/2002, art. 662; art. 118.",
    relatedArticleIds: [],
    tags: ["representacao", "ineficacia", "ratificacao"],
    alternatives: [
      { id: "a", text: "Nulidade absoluta, por vicio de agente incapaz." },
      { id: "b", text: "Anulabilidade, a pedido do incapaz ou de seus representantes." },
      { id: "c", text: "Ineficacia em relacao ao representado, salvo ratificacao.", correct: true },
      { id: "d", text: "Rescisao de pleno direito, sem necessidade de manifestacao judicial." }
    ]
  }),
  defineQuestion({
    id: "q-civil-008",
    subjectId: "civil",
    themeId: "responsabilidade-civil",
    examId: "oab-43",
    year: 2025,
    questionNumber: 8,
    difficulty: "hard",
    statement: "O dano moral pode ser cumulado com dano material decorrente do mesmo fato? Conforme entendimento do STJ:",
    explanation: "A Sumula 37 do STJ admite a cumulacao de danos morais e materiais decorrentes do mesmo fato.",
    support: "STJ, Sumula 37.",
    relatedArticleIds: [],
    tags: ["dano moral", "cumulacao", "Sumula 37 STJ"],
    alternatives: [
      { id: "a", text: "Nao, pois configuraria bis in idem." },
      { id: "b", text: "Sim, conforme Sumula 37 do STJ.", correct: true },
      { id: "c", text: "Somente se o dano material for superior ao moral." },
      { id: "d", text: "Apenas em relacoes de consumo." }
    ]
  }),
  defineQuestion({
    id: "q-civil-009",
    subjectId: "civil",
    themeId: "prescricao-decadencia-civil",
    examId: "oab-30",
    year: 2019,
    questionNumber: 9,
    difficulty: "medium",
    statement: "A prescricao extintiva, diferentemente da decadencia:",
    explanation: "A prescricao extingue a pretensao (acao), nao o direito em si. A decadencia extingue o proprio direito potestativo.",
    support: "CC/2002, art. 189; art. 207.",
    relatedArticleIds: [],
    tags: ["prescricao", "decadencia"],
    alternatives: [
      { id: "a", text: "Pode ser renunciada antes de consumada." },
      { id: "b", text: "Extingue a pretensao, podendo ser renunciada apos consumada, reconhecida de oficio pelo juiz.", correct: true },
      { id: "c", text: "Nao pode ser reconhecida de oficio pelo juiz." },
      { id: "d", text: "Nao admite causas de impedimento ou suspensao." }
    ]
  }),
  defineQuestion({
    id: "q-civil-010",
    subjectId: "civil",
    themeId: "posse-propriedade",
    examId: "oab-31",
    year: 2020,
    questionNumber: 10,
    difficulty: "hard",
    statement: "A usucapiao extraordinaria exige posse mansa e pacifica por:",
    explanation: "O art. 1238 CC exige 15 anos para usucapiao extraordinaria, reduzidos a 10 se o possuidor houver estabelecido moradia habitual ou realizado obras de carater produtivo.",
    support: "CC/2002, art. 1238.",
    relatedArticleIds: [],
    tags: ["usucapiao", "posse", "prescricao aquisitiva"],
    alternatives: [
      { id: "a", text: "10 anos, sem necessidade de justo titulo ou boa-fe." },
      { id: "b", text: "15 anos, sem necessidade de justo titulo ou boa-fe, reduzidos a 10 em casos especiais.", correct: true },
      { id: "c", text: "20 anos, com justo titulo e boa-fe." },
      { id: "d", text: "5 anos, com registro cancelado." }
    ]
  }),
  defineQuestion({
    id: "q-civil-011",
    subjectId: "civil",
    themeId: "contratos",
    examId: "oab-32",
    year: 2020,
    questionNumber: 11,
    difficulty: "medium",
    statement: "Nos contratos de adesao, as clausulas ambiguas ou contraditoria devem ser interpretadas:",
    explanation: "O art. 423 CC determina que nos contratos de adesao as clausulas ambiguas ou contraditoria sejam interpretadas em favor do aderente.",
    support: "CC/2002, art. 423.",
    relatedArticleIds: [],
    tags: ["contratos de adesao", "interpretacao"],
    alternatives: [
      { id: "a", text: "Em favor do predisponente, que elaborou o contrato." },
      { id: "b", text: "Em favor do aderente.", correct: true },
      { id: "c", text: "Da forma mais onerosa para ambas as partes." },
      { id: "d", text: "Conforme os usos e costumes do setor." }
    ]
  }),
  defineQuestion({
    id: "q-civil-012",
    subjectId: "civil",
    themeId: "familia",
    examId: "oab-33",
    year: 2021,
    questionNumber: 12,
    difficulty: "hard",
    statement: "O reconhecimento voluntario de filho pode ser feito:",
    explanation: "O art. 1609 CC permite reconhecimento de filho por: registro civil, escritura publica, testamento, manifestacao perante juiz.",
    support: "CC/2002, art. 1609.",
    relatedArticleIds: [],
    tags: ["filiacao", "reconhecimento voluntario"],
    alternatives: [
      { id: "a", text: "Apenas por registro de nascimento no cartorio." },
      { id: "b", text: "Por registro, escritura publica, testamento ou manifestacao perante juiz.", correct: true },
      { id: "c", text: "Somente por sentenca judicial transitada em julgado." },
      { id: "d", text: "Por contrato particular com duas testemunhas." }
    ]
  }),
  defineQuestion({
    id: "q-civil-013",
    subjectId: "civil",
    themeId: "obrigacoes",
    examId: "oab-34",
    year: 2021,
    questionNumber: 13,
    difficulty: "medium",
    statement: "Nas obrigacoes alternativas, a escolha cabe:",
    explanation: "O art. 252 CC estabelece que a escolha nas obrigacoes alternativas cabe ao devedor, salvo convencao em contrario.",
    support: "CC/2002, art. 252.",
    relatedArticleIds: [],
    tags: ["obrigacoes alternativas", "escolha"],
    alternatives: [
      { id: "a", text: "Sempre ao credor." },
      { id: "b", text: "Ao devedor, salvo convencao em contrario.", correct: true },
      { id: "c", text: "Ao juiz, em caso de inadimplemento." },
      { id: "d", text: "Solidariamente a ambos os contratantes." }
    ]
  }),
  defineQuestion({
    id: "q-civil-014",
    subjectId: "civil",
    themeId: "responsabilidade-civil",
    examId: "oab-35",
    year: 2022,
    questionNumber: 14,
    difficulty: "medium",
    statement: "A responsabilidade civil por ato ilicito pressupoe, em regra:",
    explanation: "O art. 186 CC exige: acao ou omissao voluntaria, negligencia ou imprudencia, resultado danoso e nexo causal. E a responsabilidade subjetiva.",
    support: "CC/2002, art. 186; art. 927.",
    relatedArticleIds: [],
    tags: ["responsabilidade civil", "culpa", "nexo causal"],
    alternatives: [
      { id: "a", text: "Apenas o dano e o nexo causal, prescindindo de culpa." },
      { id: "b", text: "Acao ou omissao culposa ou dolosa, dano e nexo causal.", correct: true },
      { id: "c", text: "Somente dolo, sendo a culpa insuficiente para gerar responsabilidade." },
      { id: "d", text: "Autorizacao judicial previa para a atividade danosa." }
    ]
  }),
  defineQuestion({
    id: "q-civil-015",
    subjectId: "civil",
    themeId: "pessoa-juridica",
    examId: "oab-36",
    year: 2022,
    questionNumber: 15,
    difficulty: "hard",
    statement: "A desconsideracao da personalidade juridica no CC/2002 e cabivel quando:",
    explanation: "O art. 50 CC permite desconsideracao quando houver abuso da personalidade juridica caracterizado por desvio de finalidade ou confusao patrimonial.",
    support: "CC/2002, art. 50.",
    relatedArticleIds: [],
    tags: ["desconsideracao", "personalidade juridica"],
    alternatives: [
      { id: "a", text: "A empresa nao tiver patrimonio suficiente para cobrir suas dividas." },
      { id: "b", text: "Houver abuso da personalidade juridica por desvio de finalidade ou confusao patrimonial.", correct: true },
      { id: "c", text: "O socio tiver praticado qualquer ato em nome da empresa." },
      { id: "d", text: "A empresa estiver em processo de falencia ou recuperacao judicial." }
    ]
  }),
  defineQuestion({
    id: "q-civil-016",
    subjectId: "civil",
    themeId: "contratos",
    examId: "oab-37",
    year: 2023,
    questionNumber: 16,
    difficulty: "medium",
    statement: "A excecao de contrato nao cumprido (exceptio non adimpleti contractus) permite que a parte:",
    explanation: "O art. 476 CC permite que nos contratos bilaterais a parte recuse-se a cumprir sua obrigacao antes que a outra tenha cumprido a sua.",
    support: "CC/2002, art. 476.",
    relatedArticleIds: [],
    tags: ["exceptio non adimpleti", "contratos bilaterais"],
    alternatives: [
      { id: "a", text: "Resolva o contrato sem necessidade de notificacao." },
      { id: "b", text: "Recuse-se a cumprir sua obrigacao se a outra parte nao tiver cumprido a sua.", correct: true },
      { id: "c", text: "Exija indenizacao automatica pelo descumprimento." },
      { id: "d", text: "Suspenda o contrato indefinidamente sem consequencias." }
    ]
  }),
  defineQuestion({
    id: "q-civil-017",
    subjectId: "civil",
    themeId: "sucessoes",
    examId: "oab-38",
    year: 2023,
    questionNumber: 17,
    difficulty: "hard",
    statement: "A legítima dos herdeiros necessarios corresponde a:",
    explanation: "O art. 1846 CC estabelece que a legítima corresponde a metade dos bens da heranca, da qual o testador nao pode dispor livremente.",
    support: "CC/2002, art. 1846.",
    relatedArticleIds: [],
    tags: ["legítima", "herdeiros necessarios"],
    alternatives: [
      { id: "a", text: "Um terco dos bens da heranca." },
      { id: "b", text: "Dois tercos dos bens da heranca." },
      { id: "c", text: "A metade dos bens da heranca.", correct: true },
      { id: "d", text: "Toda a heranca, nao cabendo ao testador dispor de nada." }
    ]
  }),
  defineQuestion({
    id: "q-civil-018",
    subjectId: "civil",
    themeId: "capacidade-civil",
    examId: "oab-39",
    year: 2024,
    questionNumber: 18,
    difficulty: "easy",
    statement: "A emancipacao voluntaria conferida pelos pais ao menor de 16 anos completos:",
    explanation: "O art. 5o, paragrafo unico, I, CC permite emancipacao voluntaria pelos pais ao menor com 16 anos completos, mediante instrumento publico.",
    support: "CC/2002, art. 5o, paragrafo unico, I.",
    relatedArticleIds: [],
    tags: ["emancipacao", "capacidade", "menor"],
    alternatives: [
      { id: "a", text: "Cessa apenas com a maioridade civil." },
      { id: "b", text: "Pode ser revogada a qualquer tempo pelos pais." },
      { id: "c", text: "E irrevogavel e concedida por instrumento publico.", correct: true },
      { id: "d", text: "Requer homologacao judicial obrigatoria." }
    ]
  }),
  defineQuestion({
    id: "q-civil-019",
    subjectId: "civil",
    themeId: "posse-propriedade",
    examId: "oab-40",
    year: 2024,
    questionNumber: 19,
    difficulty: "medium",
    statement: "A propriedade e considerada plena quando:",
    explanation: "A propriedade plena reune todos os atributos: usar, gozar, dispor e reaver (art. 1228 CC), sem desmembramento.",
    support: "CC/2002, art. 1228.",
    relatedArticleIds: [],
    tags: ["propriedade plena", "atributos"],
    alternatives: [
      { id: "a", text: "O proprietario detiver posse direta sobre o bem." },
      { id: "b", text: "Reunir todos os atributos: usar, gozar, dispor e reaver, sem desmembramento.", correct: true },
      { id: "c", text: "For registrada no cartorio competente." },
      { id: "d", text: "Nao estiver gravada com qualquer onus real." }
    ]
  }),
  defineQuestion({
    id: "q-civil-020",
    subjectId: "civil",
    themeId: "negocio-juridico",
    examId: "oab-41",
    year: 2025,
    questionNumber: 20,
    difficulty: "hard",
    statement: "O negocio juridico simulado e:",
    explanation: "O art. 167 CC declara nulo o negocio simulado, mas subsiste o que se dissimulou, se valido na substancia e na forma.",
    support: "CC/2002, art. 167.",
    relatedArticleIds: [],
    tags: ["simulacao", "nulidade", "negocio juridico"],
    alternatives: [
      { id: "a", text: "Anulavel a pedido das partes." },
      { id: "b", text: "Valido se celebrado com boa-fe de ambas as partes." },
      { id: "c", text: "Nulo, subsistindo o negocio dissimulado se valido na substancia e forma.", correct: true },
      { id: "d", text: "Ineficaz apenas em relacao a terceiros." }
    ]
  }),

  // ==================== PENAL (20) ====================
  defineQuestion({
    id: "q-penal-001",
    subjectId: "penal",
    themeId: "lei-penal-tempo",
    examId: "oab-36",
    year: 2022,
    questionNumber: 1,
    difficulty: "medium",
    statement: "A lei penal que de qualquer modo favorecer o agente aplica-se aos fatos anteriores, ainda que decididos por sentenca condenatoria transitada em julgado. Esse fenomeno denomina-se:",
    explanation: "A retroatividade da lei penal benefica (art. 2o, paragrafo unico, CP) permite aplicacao retroativa mesmo apos o transito em julgado.",
    support: "CP, art. 2o, paragrafo unico.",
    relatedArticleIds: [],
    tags: ["retroatividade", "lei penal benefica"],
    alternatives: [
      { id: "a", text: "Ultratividade da lei penal benigna." },
      { id: "b", text: "Retroatividade da lei penal benefica.", correct: true },
      { id: "c", text: "Abolitio criminis." },
      { id: "d", text: "Vacatio legis." }
    ]
  }),
  defineQuestion({
    id: "q-penal-002",
    subjectId: "penal",
    themeId: "iter-criminis",
    examId: "oab-37",
    year: 2023,
    questionNumber: 2,
    difficulty: "hard",
    statement: "A tentativa e punida com a pena do crime consumado reduzida de:",
    explanation: "O art. 14, paragrafo unico, CP estabelece reducao de 1 a 2/3 para a tentativa.",
    support: "CP, art. 14, paragrafo unico.",
    relatedArticleIds: [],
    tags: ["tentativa", "reducao de pena"],
    alternatives: [
      { id: "a", text: "1/4 a 1/3." },
      { id: "b", text: "1/2 a 2/3." },
      { id: "c", text: "1 a 2 tercos.", correct: true },
      { id: "d", text: "1/3 a 1/2." }
    ]
  }),
  defineQuestion({
    id: "q-penal-003",
    subjectId: "penal",
    themeId: "culpabilidade",
    examId: "oab-38",
    year: 2023,
    questionNumber: 3,
    difficulty: "medium",
    statement: "E isento de pena o agente que, por erro plenamente justificado pelas circunstancias, supoe situacao de fato que, se existisse, tornaria a acao legitima. Trata-se de:",
    explanation: "O art. 20, par. 1o, CP trata da descriminante putativa por erro de tipo permissivo, que exclui o dolo e, em regra, a propria tipicidade.",
    support: "CP, art. 20, par. 1o.",
    relatedArticleIds: [],
    tags: ["descriminante putativa", "erro de tipo"],
    alternatives: [
      { id: "a", text: "Erro de proibicao." },
      { id: "b", text: "Descriminante putativa por erro de tipo permissivo.", correct: true },
      { id: "c", text: "Excesso culposo em legítima defesa." },
      { id: "d", text: "Coacao moral irresistivel." }
    ]
  }),
  defineQuestion({
    id: "q-penal-004",
    subjectId: "penal",
    themeId: "concurso-crimes",
    examId: "oab-39",
    year: 2024,
    questionNumber: 4,
    difficulty: "hard",
    statement: "No concurso formal proprio, aplica-se:",
    explanation: "No concurso formal proprio (art. 70, caput, 1a parte, CP), o agente pratica varios crimes com uma so acao ou omissao, aplicando-se a pena mais grave com aumento de 1/6 a 1/2.",
    support: "CP, art. 70, caput.",
    relatedArticleIds: [],
    tags: ["concurso formal", "pena"],
    alternatives: [
      { id: "a", text: "A pena de cada crime somada cumulativamente." },
      { id: "b", text: "A pena mais grave aumentada de 1/6 a 1/2.", correct: true },
      { id: "c", text: "A pena mais grave sem qualquer aumento." },
      { id: "d", text: "A pena mais leve com aumento de metade." }
    ]
  }),
  defineQuestion({
    id: "q-penal-005",
    subjectId: "penal",
    themeId: "crimes-pessoa",
    examId: "oab-40",
    year: 2024,
    questionNumber: 5,
    difficulty: "medium",
    statement: "O homicidio simples e qualificado ao mesmo tempo e considerado pelo STJ e STF:",
    explanation: "O STF e STJ reconhecem o homicidio privilegiado-qualificado como possivel quando as qualificadoras forem de natureza objetiva e o privilegio for de natureza subjetiva.",
    support: "CP, art. 121; STJ, HC 153.728.",
    relatedArticleIds: [],
    tags: ["homicidio", "privilegio", "qualificadora"],
    alternatives: [
      { id: "a", text: "Impossivel, pois ha incompatibilidade logica absoluta." },
      { id: "b", text: "Possivel, quando o privilegio for subjetivo e a qualificadora objetiva.", correct: true },
      { id: "c", text: "Qualificado, prevalecendo sempre a qualificadora." },
      { id: "d", text: "Simples, prevalecendo sempre o privilegio." }
    ]
  }),
  defineQuestion({
    id: "q-penal-006",
    subjectId: "penal",
    themeId: "crimes-patrimonio",
    examId: "oab-41",
    year: 2025,
    questionNumber: 6,
    difficulty: "hard",
    statement: "Configura furto qualificado a acao praticada:",
    explanation: "O art. 155, par. 4o, CP lista as qualificadoras do furto, entre elas destruicao ou rompimento de obstáculo, abuso de confianca, fraude, escalada e destreza.",
    support: "CP, art. 155, par. 4o.",
    relatedArticleIds: [],
    tags: ["furto qualificado", "rompimento de obstáculo"],
    alternatives: [
      { id: "a", text: "Durante o repouso noturno em residencia habitada." },
      { id: "b", text: "Com destruicao ou rompimento de obstáculo a subtracca da coisa.", correct: true },
      { id: "c", text: "Apenas quando praticado em concurso de tres ou mais pessoas." },
      { id: "d", text: "Quando o valor da coisa for superior a um salario minimo." }
    ]
  }),
  defineQuestion({
    id: "q-penal-007",
    subjectId: "penal",
    themeId: "penas",
    examId: "oab-42",
    year: 2025,
    questionNumber: 7,
    difficulty: "medium",
    statement: "As penas restritivas de direitos substituem as privativas de liberdade quando a condenacao for igual ou inferior a 4 anos e:",
    explanation: "O art. 44, I, CP exige pena nao superior a 4 anos para crimes dolosos (ou qualquer pena para culposos), crime sem violencia ou grave ameaca, e que o reu nao seja reincidente.",
    support: "CP, art. 44.",
    relatedArticleIds: [],
    tags: ["penas restritivas", "substituicao"],
    alternatives: [
      { id: "a", text: "O crime tiver sido praticado sem violencia ou grave ameaca a pessoa e o agente nao for reincidente.", correct: true },
      { id: "b", text: "O reu for primario, independentemente do tipo de crime." },
      { id: "c", text: "O crime for culposo e a pena for inferior a 2 anos." },
      { id: "d", text: "O agente tiver confessado o crime na fase policial." }
    ]
  }),
  defineQuestion({
    id: "q-penal-008",
    subjectId: "penal",
    themeId: "extincao-punibilidade",
    examId: "oab-43",
    year: 2025,
    questionNumber: 8,
    difficulty: "medium",
    statement: "A prescricao da pretensao punitiva, calculada com base na pena maxima cominada, e denominada:",
    explanation: "A prescricao calculada com base na pena maxima em abstrato, antes do transito em julgado, e a prescricao da pretensao punitiva em abstrato.",
    support: "CP, art. 109.",
    relatedArticleIds: [],
    tags: ["prescricao", "pretensao punitiva"],
    alternatives: [
      { id: "a", text: "Prescricao da pretensao executoria." },
      { id: "b", text: "Prescricao da pretensao punitiva em abstrato.", correct: true },
      { id: "c", text: "Prescricao retroativa." },
      { id: "d", text: "Prescricao intercorrente." }
    ]
  }),
  defineQuestion({
    id: "q-penal-009",
    subjectId: "penal",
    themeId: "imputabilidade",
    examId: "oab-30",
    year: 2019,
    questionNumber: 9,
    difficulty: "easy",
    statement: "Os menores de 18 anos sao penalmente inimputaveis e ficam sujeitos a:",
    explanation: "O art. 27 CP e o ECA (Lei 8.069/1990) estabelecem que menores de 18 anos sao inimputaveis e ficam sujeitos as normas da legislacao especial.",
    support: "CP, art. 27; ECA, Lei 8.069/1990.",
    relatedArticleIds: [],
    tags: ["inimputabilidade", "menor", "ECA"],
    alternatives: [
      { id: "a", text: "As penas previstas no Codigo Penal reduzidas pela metade." },
      { id: "b", text: "Medidas de seguranca exclusivamente." },
      { id: "c", text: "As normas da legislacao especial (ECA).", correct: true },
      { id: "d", text: "Internacao compulsoria ate 21 anos." }
    ]
  }),
  defineQuestion({
    id: "q-penal-010",
    subjectId: "penal",
    themeId: "erro-de-tipo",
    examId: "oab-31",
    year: 2020,
    questionNumber: 10,
    difficulty: "hard",
    statement: "O erro de tipo essencial inevitavel exclui:",
    explanation: "O erro de tipo essencial e inevitavel exclui o dolo e a culpa, afastando a tipicidade. Se evitavel, exclui apenas o dolo.",
    support: "CP, art. 20, caput.",
    relatedArticleIds: [],
    tags: ["erro de tipo", "dolo", "culpa"],
    alternatives: [
      { id: "a", text: "Apenas a culpabilidade." },
      { id: "b", text: "O dolo e a culpa, tornando o fato atipico.", correct: true },
      { id: "c", text: "Somente o dolo, permanecendo a responsabilidade culposa." },
      { id: "d", text: "A antijuridicidade do fato." }
    ]
  }),
  defineQuestion({
    id: "q-penal-011",
    subjectId: "penal",
    themeId: "culpabilidade",
    examId: "oab-32",
    year: 2020,
    questionNumber: 11,
    difficulty: "medium",
    statement: "A coacao moral irresistivel, como excludente de culpabilidade:",
    explanation: "A coacao moral irresistivel exclui a culpabilidade (inexigibilidade de conduta diversa). Ja a coacao fisica irresistivel exclui a propria conduta (tipicidade).",
    support: "CP, art. 22.",
    relatedArticleIds: [],
    tags: ["coacao moral", "culpabilidade", "inexigibilidade"],
    alternatives: [
      { id: "a", text: "Exclui a tipicidade do fato." },
      { id: "b", text: "Exclui a antijuridicidade do fato." },
      { id: "c", text: "Exclui a culpabilidade por inexigibilidade de conduta diversa.", correct: true },
      { id: "d", text: "Isenta o coator de qualquer responsabilidade." }
    ]
  }),
  defineQuestion({
    id: "q-penal-012",
    subjectId: "penal",
    themeId: "crimes-pessoa",
    examId: "oab-33",
    year: 2021,
    questionNumber: 12,
    difficulty: "medium",
    statement: "O lesionado na integridade corporal ou na saude constitui crime de:",
    explanation: "O art. 129 CP tipifica as lesoes corporais, podendo ser leves, graves ou gravissimas conforme o resultado.",
    support: "CP, art. 129.",
    relatedArticleIds: [],
    tags: ["lesao corporal", "integridade fisica"],
    alternatives: [
      { id: "a", text: "Periclitacao da vida ou saude de outrem." },
      { id: "b", text: "Lesao corporal.", correct: true },
      { id: "c", text: "Exposicao a perigo de vida." },
      { id: "d", text: "Maus-tratos." }
    ]
  }),
  defineQuestion({
    id: "q-penal-013",
    subjectId: "penal",
    themeId: "iter-criminis",
    examId: "oab-34",
    year: 2021,
    questionNumber: 13,
    difficulty: "hard",
    statement: "O crime impossivel, em que o meio empregado e absolutamente ineficaz ou o objeto e absolutamente impróprio, resulta em:",
    explanation: "O art. 17 CP determina que nao se pune a tentativa quando por ineficacia absoluta do meio ou por absoluta impropriedade do objeto e impossivel consumar-se o crime.",
    support: "CP, art. 17.",
    relatedArticleIds: [],
    tags: ["crime impossivel", "tentativa", "atipicidade"],
    alternatives: [
      { id: "a", text: "Punicao pela tentativa com reducao de pena." },
      { id: "b", text: "Exclusao da tipicidade, nao se pune a tentativa.", correct: true },
      { id: "c", text: "Punicao pelo dolo sem reducao de pena." },
      { id: "d", text: "Suspensao condicional da pena." }
    ]
  }),
  defineQuestion({
    id: "q-penal-014",
    subjectId: "penal",
    themeId: "penas",
    examId: "oab-35",
    year: 2022,
    questionNumber: 14,
    difficulty: "medium",
    statement: "O regime inicial de cumprimento de pena para condenado reincidente a pena superior a 4 anos e igual ou inferior a 8 anos e o:",
    explanation: "O art. 33, par. 2o, b, CP: condenado reincidente ou nao com pena superior a 4 anos e ate 8 anos inicia em regime semiaberto (se nao reincidente); se reincidente, inicia em fechado.",
    support: "CP, art. 33, par. 2o.",
    relatedArticleIds: [],
    tags: ["regime de pena", "reincidente", "fechado"],
    alternatives: [
      { id: "a", text: "Aberto, se nao houver circunstancias desfavoraveis." },
      { id: "b", text: "Semiaberto, se for primario." },
      { id: "c", text: "Fechado, se for reincidente.", correct: true },
      { id: "d", text: "Aberto, independentemente de reincidencia." }
    ]
  }),
  defineQuestion({
    id: "q-penal-015",
    subjectId: "penal",
    themeId: "crimes-patrimonio",
    examId: "oab-36",
    year: 2022,
    questionNumber: 15,
    difficulty: "hard",
    statement: "O estelionato e caracterizado pelo:",
    explanation: "O estelionato (art. 171 CP) exige: obtencao de vantagem ilicita, em prejuizo alheio, induzindo ou mantendo alguem em erro por artificio, ardil ou qualquer outro meio fraudulento.",
    support: "CP, art. 171.",
    relatedArticleIds: [],
    tags: ["estelionato", "fraude", "erro"],
    alternatives: [
      { id: "a", text: "Uso de violencia ou grave ameaca para obtencao de vantagem ilicita." },
      { id: "b", text: "Obtencao de vantagem ilicita mediante fraude, induzindo ou mantendo alguem em erro.", correct: true },
      { id: "c", text: "Subtracca de coisa movel alheia com emprego de destreza." },
      { id: "d", text: "Apropriacao de bem alheio de que tem posse ou detencao." }
    ]
  }),
  defineQuestion({
    id: "q-penal-016",
    subjectId: "penal",
    themeId: "concurso-crimes",
    examId: "oab-37",
    year: 2023,
    questionNumber: 16,
    difficulty: "hard",
    statement: "No crime continuado, o juiz aplica:",
    explanation: "O art. 71 CP: crime continuado — aplica-se a pena de um so dos crimes, se identica, ou a mais grave, aumentada de 1/6 a 2/3.",
    support: "CP, art. 71.",
    relatedArticleIds: [],
    tags: ["crime continuado", "aumento"],
    alternatives: [
      { id: "a", text: "Pena de cada crime somada integralmente." },
      { id: "b", text: "A pena mais grave aumentada de 1/6 a 2/3.", correct: true },
      { id: "c", text: "A pena mais leve com aumento de metade." },
      { id: "d", text: "A pena mais grave sem qualquer aumento." }
    ]
  }),
  defineQuestion({
    id: "q-penal-017",
    subjectId: "penal",
    themeId: "extincao-punibilidade",
    examId: "oab-38",
    year: 2023,
    questionNumber: 17,
    difficulty: "medium",
    statement: "A anistia distingue-se do indulto porque:",
    explanation: "A anistia (ato do Congresso) extingue o crime e a pena, podendo ser concedida antes do transito em julgado. O indulto (ato do Executivo) extingue apenas a pena.",
    support: "CP, art. 107, II; CF/88, art. 48, VIII; art. 84, XII.",
    relatedArticleIds: [],
    tags: ["anistia", "indulto", "extincao punibilidade"],
    alternatives: [
      { id: "a", text: "O indulto e concedido pelo Congresso Nacional e a anistia pelo Presidente." },
      { id: "b", text: "A anistia, concedida pelo Congresso, pode extinguir o crime e a pena; o indulto, pelo Executivo, extingue apenas a pena.", correct: true },
      { id: "c", text: "Ambos sao concedidos pelo Presidente da Republica com efeitos identicos." },
      { id: "d", text: "O indulto extingue o crime; a anistia extingue apenas a pena." }
    ]
  }),
  defineQuestion({
    id: "q-penal-018",
    subjectId: "penal",
    themeId: "crimes-patrimonio",
    examId: "oab-39",
    year: 2024,
    questionNumber: 18,
    difficulty: "medium",
    statement: "O peculato-apropriacac (art. 312, caput, 1a parte, CP) exige que o funcionario publico:",
    explanation: "O peculato-apropriacac exige que o funcionario se aproprie de dinheiro, valor ou qualquer outro bem movel, publico ou particular, de que tem a posse em razao do cargo.",
    support: "CP, art. 312.",
    relatedArticleIds: [],
    tags: ["peculato", "funcionario publico", "posse"],
    alternatives: [
      { id: "a", text: "Subtraia bem publico usando de violencia." },
      { id: "b", text: "Se aproprie de bem movel de que tem a posse em razao do cargo.", correct: true },
      { id: "c", text: "Obtenha vantagem indevida em razao do cargo." },
      { id: "d", text: "Facilite a subtracao de bem por terceiro." }
    ]
  }),
  defineQuestion({
    id: "q-penal-019",
    subjectId: "penal",
    themeId: "imputabilidade",
    examId: "oab-40",
    year: 2024,
    questionNumber: 19,
    difficulty: "hard",
    statement: "O semi-imputavel, em caso de condenacao, pode ter a pena:",
    explanation: "O art. 26, paragrafo unico, CP: o semi-imputavel pode ter a pena reduzida de 1/3 a 2/3 ou substituida por medida de segurança, conforme o caso.",
    support: "CP, art. 26, paragrafo unico; art. 98.",
    relatedArticleIds: [],
    tags: ["semi-imputavel", "pena", "medida de segurança"],
    alternatives: [
      { id: "a", text: "Aumentada em razao da periculosidade." },
      { id: "b", text: "Reduzida de 1/3 a 2/3 ou substituida por medida de segurança.", correct: true },
      { id: "c", text: "Extinta pela inimputabilidade parcial." },
      { id: "d", text: "Mantida integralmente, sem qualquer reducao." }
    ]
  }),
  defineQuestion({
    id: "q-penal-020",
    subjectId: "penal",
    themeId: "lei-penal-tempo",
    examId: "oab-41",
    year: 2025,
    questionNumber: 20,
    difficulty: "medium",
    statement: "A lei excepcional ou temporaria, ainda que decorrido o periodo de sua duracao ou cessadas as circunstancias que a determinaram:",
    explanation: "O art. 3o CP consagra a ultratividade das leis excepcionais e temporarias: aplicam-se aos fatos praticados durante sua vigencia, mesmo apos cessada sua eficacia.",
    support: "CP, art. 3o.",
    relatedArticleIds: [],
    tags: ["lei excepcional", "ultratividade"],
    alternatives: [
      { id: "a", text: "Nao pode mais ser aplicada apos o seu termo." },
      { id: "b", text: "Aplica-se aos fatos praticados durante sua vigencia (ultratividade).", correct: true },
      { id: "c", text: "E substituida imediatamente pela lei ordinaria vigente." },
      { id: "d", text: "Depende de decreto presidencial para continuar produzindo efeitos." }
    ]
  }),

  // ==================== PROCESSO CIVIL (20) ====================
  defineQuestion({
    id: "q-cpc-001",
    subjectId: "processo-civil",
    themeId: "tutela-provisoria",
    examId: "oab-36",
    year: 2022,
    questionNumber: 1,
    difficulty: "medium",
    statement: "A tutela de urgencia de natureza antecipada pode ser concedida em carater antecedente ou incidental e exige:",
    explanation: "O art. 300 CPC exige: elementos que evidenciem a probabilidade do direito (fumus boni iuris) e o perigo de dano ou risco ao resultado util do processo (periculum in mora).",
    support: "CPC/2015, art. 300.",
    relatedArticleIds: [],
    tags: ["tutela de urgencia", "fumus boni iuris", "periculum in mora"],
    alternatives: [
      { id: "a", text: "Prova inequivoca e verossimilhanca da alegacao apenas." },
      { id: "b", text: "Probabilidade do direito e perigo de dano ou risco ao resultado util do processo.", correct: true },
      { id: "c", text: "Certeza do direito e urgencia comprovada por laudo pericial." },
      { id: "d", text: "Apenas o perigo de dano, sem necessidade de demonstrar o direito." }
    ]
  }),
  defineQuestion({
    id: "q-cpc-002",
    subjectId: "processo-civil",
    themeId: "competencia",
    examId: "oab-37",
    year: 2023,
    questionNumber: 2,
    difficulty: "hard",
    statement: "A competencia funcional do juizo do domicilio do reu nas acoes pessoais:",
    explanation: "O art. 46 CPC estabelece que, salvo disposicao diversa, a acao pessoal deve ser proposta no foro do domicilio do reu.",
    support: "CPC/2015, art. 46.",
    relatedArticleIds: [],
    tags: ["competencia territorial", "domicilio", "derrogacao"],
    alternatives: [
      { id: "a", text: "E absoluta e nao pode ser modificada pelas partes." },
      { id: "b", text: "E relativa e pode ser derrogada por escolha das partes ou foro de eleicao.", correct: true },
      { id: "c", text: "Apenas se aplica quando o autor nao tiver domicilio certo." },
      { id: "d", text: "E inderrogavel por se tratar de materia de ordem publica." }
    ]
  }),
  defineQuestion({
    id: "q-cpc-003",
    subjectId: "processo-civil",
    themeId: "recursos",
    examId: "oab-38",
    year: 2023,
    questionNumber: 3,
    difficulty: "medium",
    statement: "O recurso de apelacao deve ser interposto no prazo de:",
    explanation: "O art. 1003, par. 5o, c/c art. 1009 CPC: o prazo para apelar e de 15 dias uteis.",
    support: "CPC/2015, art. 1003, par. 5o; art. 1009.",
    relatedArticleIds: [],
    tags: ["apelacao", "prazo", "recurso"],
    alternatives: [
      { id: "a", text: "10 dias contados da publicacao da sentenca." },
      { id: "b", text: "15 dias uteis contados da intimacao da sentenca.", correct: true },
      { id: "c", text: "30 dias corridos contados da publicacao." },
      { id: "d", text: "5 dias uteis quando a parte for a Fazenda Publica." }
    ]
  }),
  defineQuestion({
    id: "q-cpc-004",
    subjectId: "processo-civil",
    themeId: "execucao",
    examId: "oab-39",
    year: 2024,
    questionNumber: 4,
    difficulty: "hard",
    statement: "Na execucao por quantia certa contra devedor solvente, apos a citacao, o executado pode, no prazo de 15 dias, oferecer:",
    explanation: "O art. 525 CPC: o executado pode, no prazo de 15 dias, oferecer impugnacao ao cumprimento de sentenca.",
    support: "CPC/2015, art. 525.",
    relatedArticleIds: [],
    tags: ["impugnacao", "execucao", "cumprimento de sentenca"],
    alternatives: [
      { id: "a", text: "Embargos do devedor com efeito suspensivo automatico." },
      { id: "b", text: "Impugnacao ao cumprimento de sentenca.", correct: true },
      { id: "c", text: "Contestacao com todas as materias de defesa." },
      { id: "d", text: "Reconvencao para compensacao do debito." }
    ]
  }),
  defineQuestion({
    id: "q-cpc-005",
    subjectId: "processo-civil",
    themeId: "litisconsorcios",
    examId: "oab-40",
    year: 2024,
    questionNumber: 5,
    difficulty: "medium",
    statement: "O litisconsorcio e necessario quando:",
    explanation: "O art. 114 CPC: o litisconsorcio e necessario por disposicao de lei ou quando a eficacia da sentenca depender da citacao de todos os que devam ser litisconsortes.",
    support: "CPC/2015, art. 114.",
    relatedArticleIds: [],
    tags: ["litisconsorcio necessario", "eficacia da sentenca"],
    alternatives: [
      { id: "a", text: "As partes preferirem litigar conjuntamente por economia processual." },
      { id: "b", text: "Houver disposicao legal ou quando a eficacia da sentenca depender da citacao de todos.", correct: true },
      { id: "c", text: "O autor tiver dois ou mais devedores solidarios." },
      { id: "d", text: "O juiz entender conveniente a presenca de terceiros no processo." }
    ]
  }),
  defineQuestion({
    id: "q-cpc-006",
    subjectId: "processo-civil",
    themeId: "petição-inicial",
    examId: "oab-41",
    year: 2025,
    questionNumber: 6,
    difficulty: "easy",
    statement: "Distribuida a peticao inicial, o reu sera citado para apresentar contestacao no prazo de:",
    explanation: "O art. 335 CPC estabelece prazo de 15 dias para contestar, contado da audiencia de conciliacao ou de mediacao, ou da intimacao do despacho que a dispensa.",
    support: "CPC/2015, art. 335.",
    relatedArticleIds: [],
    tags: ["contestacao", "prazo", "citacao"],
    alternatives: [
      { id: "a", text: "10 dias uteis." },
      { id: "b", text: "15 dias uteis.", correct: true },
      { id: "c", text: "30 dias corridos." },
      { id: "d", text: "5 dias corridos." }
    ]
  }),
  defineQuestion({
    id: "q-cpc-007",
    subjectId: "processo-civil",
    themeId: "sentenca-coisa-julgada",
    examId: "oab-42",
    year: 2025,
    questionNumber: 7,
    difficulty: "hard",
    statement: "A coisa julgada material forma-se sobre:",
    explanation: "A coisa julgada material recai sobre o dispositivo da sentenca que resolve o merito da causa (art. 502 e 503 CPC).",
    support: "CPC/2015, art. 502; art. 503.",
    relatedArticleIds: [],
    tags: ["coisa julgada", "dispositivo", "merito"],
    alternatives: [
      { id: "a", text: "Toda a fundamentacao da sentenca, incluindo os motivos determinantes." },
      { id: "b", text: "O dispositivo da sentenca que resolve o merito da causa.", correct: true },
      { id: "c", text: "A sentenca que extingue o processo sem resolucao do merito." },
      { id: "d", text: "As decisoes interlocutorias de carater definitivo." }
    ]
  }),
  defineQuestion({
    id: "q-cpc-008",
    subjectId: "processo-civil",
    themeId: "provas-cpc",
    examId: "oab-43",
    year: 2025,
    questionNumber: 8,
    difficulty: "medium",
    statement: "O onus da prova incumbe ao autor quanto ao fato constitutivo do direito e ao reu quanto ao fato:",
    explanation: "O art. 373 CPC distribui o onus da prova: ao autor o fato constitutivo e ao reu os fatos impeditivos, modificativos ou extintivos do direito do autor.",
    support: "CPC/2015, art. 373.",
    relatedArticleIds: [],
    tags: ["onus da prova", "fato impeditivo", "fato extintivo"],
    alternatives: [
      { id: "a", text: "Constitutivo do direito do autor." },
      { id: "b", text: "Impeditivo, modificativo ou extintivo do direito do autor.", correct: true },
      { id: "c", text: "Apenas o fato extintivo do direito do autor." },
      { id: "d", text: "Nenhum onus, pois o juiz deve investigar de oficio." }
    ]
  }),
  defineQuestion({
    id: "q-cpc-009",
    subjectId: "processo-civil",
    themeId: "acao-rescisoria",
    examId: "oab-30",
    year: 2019,
    questionNumber: 9,
    difficulty: "hard",
    statement: "A acao rescisoria pode ser proposta no prazo de:",
    explanation: "O art. 975 CPC: a acao rescisoria deve ser proposta no prazo de 2 anos contados do transito em julgado da ultima decisao proferida no processo.",
    support: "CPC/2015, art. 975.",
    relatedArticleIds: [],
    tags: ["acao rescisoria", "prazo", "transito em julgado"],
    alternatives: [
      { id: "a", text: "1 ano do transito em julgado." },
      { id: "b", text: "2 anos do transito em julgado da ultima decisao proferida no processo.", correct: true },
      { id: "c", text: "5 anos do transito em julgado." },
      { id: "d", text: "6 meses do transito em julgado." }
    ]
  }),
  defineQuestion({
    id: "q-cpc-010",
    subjectId: "processo-civil",
    themeId: "recursos",
    examId: "oab-31",
    year: 2020,
    questionNumber: 10,
    difficulty: "medium",
    statement: "Os embargos de declaracao sao admissíveis quando a decisao:",
    explanation: "O art. 1022 CPC: embargos de declaracao cabem quando a decisao contiver obscuridade, contradicao, omissao ou erro material.",
    support: "CPC/2015, art. 1022.",
    relatedArticleIds: [],
    tags: ["embargos de declaracao", "obscuridade", "omissao"],
    alternatives: [
      { id: "a", text: "Nao acolher os pedidos do recorrente por questoes de merito." },
      { id: "b", text: "Contiver obscuridade, contradicao, omissao ou erro material.", correct: true },
      { id: "c", text: "For prolatada por juiz sem competencia para o feito." },
      { id: "d", text: "Violar precedente vinculante do STJ ou STF." }
    ]
  }),
  defineQuestion({
    id: "q-cpc-011",
    subjectId: "processo-civil",
    themeId: "tutela-provisoria",
    examId: "oab-32",
    year: 2020,
    questionNumber: 11,
    difficulty: "hard",
    statement: "A tutela de evidencia independe de demonstracao de perigo de dano e pode ser concedida quando:",
    explanation: "O art. 311 CPC lista as hipoteses de tutela de evidencia: abuso do direito de defesa, pedido reipersecutorio fundado em prova documental, tese firmada em julgamento de casos repetitivos, ou pedido documentalmente comprovado contra parte que nao possa contraditá-la.",
    support: "CPC/2015, art. 311.",
    relatedArticleIds: [],
    tags: ["tutela de evidencia", "abuso de defesa"],
    alternatives: [
      { id: "a", text: "Houver probabilidade do direito e perigo de dano." },
      { id: "b", text: "O abuso do direito de defesa ou o manifesto proposito protelatório do reu ficar evidenciado.", correct: true },
      { id: "c", text: "O juiz entender que a demora prejudicará o resultado do processo." },
      { id: "d", text: "O autor comprovar o perigo de dano irreparavel." }
    ]
  }),
  defineQuestion({
    id: "q-cpc-012",
    subjectId: "processo-civil",
    themeId: "competencia",
    examId: "oab-33",
    year: 2021,
    questionNumber: 12,
    difficulty: "medium",
    statement: "A incompetencia absoluta pode ser arguida:",
    explanation: "A incompetencia absoluta pode ser arguida por qualquer das partes em qualquer tempo e grau de jurisdicao e deve ser declarada de oficio pelo juiz.",
    support: "CPC/2015, art. 64; art. 337, II.",
    relatedArticleIds: [],
    tags: ["incompetencia absoluta", "arguicao", "preclusao"],
    alternatives: [
      { id: "a", text: "Apenas na contestacao, sob pena de preclusao." },
      { id: "b", text: "A qualquer tempo e grau de jurisdicao, inclusive de oficio pelo juiz.", correct: true },
      { id: "c", text: "Somente pelo reu, nunca pelo autor." },
      { id: "d", text: "Apenas antes da citacao do reu." }
    ]
  }),
  defineQuestion({
    id: "q-cpc-013",
    subjectId: "processo-civil",
    themeId: "execucao",
    examId: "oab-34",
    year: 2021,
    questionNumber: 13,
    difficulty: "hard",
    statement: "Na penhora, e vedada a constrição de:",
    explanation: "O art. 833 CPC lista os bens absolutamente impenhoraveis, entre eles salario, proventos de aposentadoria, caderneta de poupança ate 40 salários minimos e bem de familia.",
    support: "CPC/2015, art. 833.",
    relatedArticleIds: [],
    tags: ["penhora", "impenhorabilidade", "salario"],
    alternatives: [
      { id: "a", text: "Bens de valor superior a 50 salarios minimos." },
      { id: "b", text: "Vencimentos, salarios e proventos de aposentadoria, salvo para pagamento de prestacao alimenticia.", correct: true },
      { id: "c", text: "Qualquer bem imovel registrado em cartorio." },
      { id: "d", text: "Bens moveis de uso pessoal do devedor, sem limite de valor." }
    ]
  }),
  defineQuestion({
    id: "q-cpc-014",
    subjectId: "processo-civil",
    themeId: "sentenca-coisa-julgada",
    examId: "oab-35",
    year: 2022,
    questionNumber: 14,
    difficulty: "medium",
    statement: "A sentenca que acolhe ou rejeita o pedido com base no merito extingue o processo:",
    explanation: "O art. 487 CPC: haverá resolucao de merito quando o juiz acolher ou rejeitar o pedido formulado na acao ou reconvencao, ou quando homologar o reconhecimento da procedencia do pedido.",
    support: "CPC/2015, art. 487.",
    relatedArticleIds: [],
    tags: ["merito", "coisa julgada material", "sentenca"],
    alternatives: [
      { id: "a", text: "Sem resolucao de merito, produzindo apenas coisa julgada formal." },
      { id: "b", text: "Com resolucao de merito, produzindo coisa julgada material.", correct: true },
      { id: "c", text: "Por abandono, quando as partes nao manifestarem interesse na causa." },
      { id: "d", text: "Por ilegitimidade superveniente das partes." }
    ]
  }),
  defineQuestion({
    id: "q-cpc-015",
    subjectId: "processo-civil",
    themeId: "litisconsorcios",
    examId: "oab-36",
    year: 2022,
    questionNumber: 15,
    difficulty: "hard",
    statement: "A intervencao de terceiros denominada assistencia simples:",
    explanation: "O art. 119 CPC: a assistencia simples e cabivel quando terceiro tiver interesse juridico em que a sentenca seja favoravel a uma das partes. O assistente simples nao e parte, mas auxilia.",
    support: "CPC/2015, art. 119.",
    relatedArticleIds: [],
    tags: ["assistencia simples", "terceiro", "intervencao"],
    alternatives: [
      { id: "a", text: "Transforma o terceiro em litisconsorte com poderes amplos de atuacao." },
      { id: "b", text: "Permite que terceiro com interesse juridico auxilie uma das partes, sem tornar-se litisconsorte.", correct: true },
      { id: "c", text: "E cabivel apenas quando o terceiro for co-devedor solidario." },
      { id: "d", text: "Cria litisconsorcio necessario automaticamente." }
    ]
  }),
  defineQuestion({
    id: "q-cpc-016",
    subjectId: "processo-civil",
    themeId: "provas-cpc",
    examId: "oab-37",
    year: 2023,
    questionNumber: 16,
    difficulty: "medium",
    statement: "A producao de prova pericial e admitida quando:",
    explanation: "O art. 156 e 369 CPC: a prova pericial e cabivel quando a prova do fato depender de conhecimento tecnico ou cientifico.",
    support: "CPC/2015, art. 156; art. 369.",
    relatedArticleIds: [],
    tags: ["prova pericial", "conhecimento tecnico", "admissibilidade"],
    alternatives: [
      { id: "a", text: "Qualquer das partes requerer, independentemente da natureza do fato." },
      { id: "b", text: "A prova do fato depender de conhecimento tecnico ou cientifico.", correct: true },
      { id: "c", text: "O juiz quiser confirmar sua convicção sobre fatos de seu conhecimento." },
      { id: "d", text: "Houver contradicao entre provas documentais produzidas pelas partes." }
    ]
  }),
  defineQuestion({
    id: "q-cpc-017",
    subjectId: "processo-civil",
    themeId: "prescricao-cpc",
    examId: "oab-38",
    year: 2023,
    questionNumber: 17,
    difficulty: "medium",
    statement: "A prescricao no processo civil pode ser reconhecida de oficio pelo juiz:",
    explanation: "O art. 487, II, CPC permite ao juiz reconhecer de oficio a prescricao. Apos o reconhecimento, a parte contraria deve ser intimada para manifestacao previa.",
    support: "CPC/2015, art. 487, II; art. 332, par. 1o.",
    relatedArticleIds: [],
    tags: ["prescricao", "de oficio", "intimacao"],
    alternatives: [
      { id: "a", text: "Nunca, dependendo sempre de arguicao da parte interessada." },
      { id: "b", text: "Sim, mas deve intimar a parte contraria antes de decide-la.", correct: true },
      { id: "c", text: "Apenas se a parte interessada tiver sido revel." },
      { id: "d", text: "Somente em sede de execucao, nao na fase de conhecimento." }
    ]
  }),
  defineQuestion({
    id: "q-cpc-018",
    subjectId: "processo-civil",
    themeId: "recursos",
    examId: "oab-39",
    year: 2024,
    questionNumber: 18,
    difficulty: "hard",
    statement: "O recurso especial para o STJ e cabivel quando a decisao recorrida:",
    explanation: "O art. 105, III, CF: cabe recurso especial ao STJ quando a decisao contrariar tratado ou lei federal, declarar inconstitucionalidade de lei federal, divergir de julgado de outro tribunal, ou negar vigencia a lei federal.",
    support: "CF/88, art. 105, III.",
    relatedArticleIds: [],
    tags: ["recurso especial", "STJ", "lei federal"],
    alternatives: [
      { id: "a", text: "Declarar inconstitucionalidade de lei estadual." },
      { id: "b", text: "Contrariar tratado ou lei federal, ou divergir de julgado de outro tribunal em questao de direito.", correct: true },
      { id: "c", text: "Contiver error in judicando em questao de fato." },
      { id: "d", text: "Violar precedente do Tribunal local." }
    ]
  }),
  defineQuestion({
    id: "q-cpc-019",
    subjectId: "processo-civil",
    themeId: "acao-rescisoria",
    examId: "oab-40",
    year: 2024,
    questionNumber: 19,
    difficulty: "hard",
    statement: "A acao rescisoria e competente para rescindir sentenca que:",
    explanation: "O art. 966 CPC lista as hipoteses de rescindibilidade, entre elas: sentenca proferida por juiz impedido ou absolutamente incompetente, obtida por corrupcao, dolo ou coacao, violando norma juridica.",
    support: "CPC/2015, art. 966.",
    relatedArticleIds: [],
    tags: ["acao rescisoria", "rescindibilidade", "juiz impedido"],
    alternatives: [
      { id: "a", text: "Seja desfavoravel ao recorrente por questoes de merito." },
      { id: "b", text: "Tenha sido proferida por juiz impedido, obtida por dolo ou violando norma juridica.", correct: true },
      { id: "c", text: "Nao contenha fundamentacao suficiente." },
      { id: "d", text: "Tenha sido proferida alem do prazo regimental." }
    ]
  }),
  defineQuestion({
    id: "q-cpc-020",
    subjectId: "processo-civil",
    themeId: "petição-inicial",
    examId: "oab-41",
    year: 2025,
    questionNumber: 20,
    difficulty: "medium",
    statement: "A inépcia da peticao inicial ocorre quando:",
    explanation: "O art. 330, par. 1o, CPC: a peticao inicial e inepta quando faltar pedido ou causa de pedir, o pedido for indeterminado (salvo excecoes), a narração dos fatos nao decorrer logicamente a conclusao ou contiver pedidos incompativeis entre si.",
    support: "CPC/2015, art. 330, par. 1o.",
    relatedArticleIds: [],
    tags: ["ineptidao", "peticao inicial", "causa de pedir", "pedido"],
    alternatives: [
      { id: "a", text: "Houver falta de documentos essenciais, sem possibilidade de emenda." },
      { id: "b", text: "Faltar o pedido ou a causa de pedir, ou contiver pedidos logicamente incompativeis.", correct: true },
      { id: "c", text: "O autor nao pagou as custas processuais no prazo." },
      { id: "d", text: "A parte nao estiver representada por advogado inscrito na OAB." }
    ]
  }),

  // ==================== PROCESSO PENAL (20) ====================
  defineQuestion({
    id: "q-cpp-001",
    subjectId: "processo-penal",
    themeId: "inquerito-policial",
    examId: "oab-36",
    year: 2022,
    questionNumber: 1,
    difficulty: "easy",
    statement: "O inquerito policial e:",
    explanation: "O inquerito policial e procedimento administrativo, de natureza inquisitorial, presidido pela autoridade policial, sem contraditorio e ampla defesa obrigatorios.",
    support: "CPP, art. 4o e ss.",
    relatedArticleIds: [],
    tags: ["inquerito policial", "natureza juridica"],
    alternatives: [
      { id: "a", text: "Processo judicial de natureza acusatoria." },
      { id: "b", text: "Procedimento administrativo inquisitorial, sem contraditorio obrigatorio.", correct: true },
      { id: "c", text: "Ato jurisdicional com pleno contraditorio." },
      { id: "d", text: "Processo administrativo com ampla defesa garantida." }
    ]
  }),
  defineQuestion({
    id: "q-cpp-002",
    subjectId: "processo-penal",
    themeId: "acao-penal",
    examId: "oab-37",
    year: 2023,
    questionNumber: 2,
    difficulty: "medium",
    statement: "A acao penal publica incondicionada e promovida:",
    explanation: "A acao penal publica incondicionada e promovida privativamente pelo Ministerio Publico, independentemente de manifestacao da vitima.",
    support: "CF/88, art. 129, I; CPP, art. 24.",
    relatedArticleIds: [],
    tags: ["acao penal publica", "Ministerio Publico"],
    alternatives: [
      { id: "a", text: "Pela vitima ou seus representantes legais." },
      { id: "b", text: "Privativamente pelo Ministerio Publico, independentemente de manifestacao da vitima.", correct: true },
      { id: "c", text: "Pelo Ministerio Publico, condicionada a representacao do ofendido." },
      { id: "d", text: "Pelo juiz de oficio, nos casos de crime flagrante." }
    ]
  }),
  defineQuestion({
    id: "q-cpp-003",
    subjectId: "processo-penal",
    themeId: "provas-cpp",
    examId: "oab-38",
    year: 2023,
    questionNumber: 3,
    difficulty: "hard",
    statement: "As provas obtidas por meios ilicitos sao:",
    explanation: "O art. 5o, LVI, CF e art. 157 CPP declaram inadmissiveis as provas ilicitas, bem como as derivadas (teoria dos frutos da arvore envenenada).",
    support: "CF/88, art. 5o, LVI; CPP, art. 157.",
    relatedArticleIds: [],
    tags: ["provas ilicitas", "inadmissibilidade", "frutos da arvore envenenada"],
    alternatives: [
      { id: "a", text: "Admissiveis se obtidas em beneficio do reu." },
      { id: "b", text: "Inadmissiveis, sendo nulas tambem as derivadas das provas ilicitas.", correct: true },
      { id: "c", text: "Admissiveis se confirmadas por outras provas independentes." },
      { id: "d", text: "Anuladas apenas se o reu as arguir expressamente." }
    ]
  }),
  defineQuestion({
    id: "q-cpp-004",
    subjectId: "processo-penal",
    themeId: "prisoes",
    examId: "oab-39",
    year: 2024,
    questionNumber: 4,
    difficulty: "medium",
    statement: "A prisao preventiva pode ser decretada pelo juiz:",
    explanation: "O art. 311 CPP: a prisao preventiva pode ser decretada pelo juiz, de oficio em fase de instrucao processual, ou a requerimento do MP, querelante, assistente ou autoridade policial.",
    support: "CPP, art. 311; art. 312.",
    relatedArticleIds: [],
    tags: ["prisao preventiva", "de oficio", "instrucao"],
    alternatives: [
      { id: "a", text: "A qualquer momento, inclusive na fase de inquerito, de oficio." },
      { id: "b", text: "De oficio apenas na fase de instrucao, ou a requerimento em qualquer fase.", correct: true },
      { id: "c", text: "Apenas a requerimento do Ministerio Publico." },
      { id: "d", text: "Somente com consentimento do reu." }
    ]
  }),
  defineQuestion({
    id: "q-cpp-005",
    subjectId: "processo-penal",
    themeId: "habeas-corpus-cpp",
    examId: "oab-40",
    year: 2024,
    questionNumber: 5,
    difficulty: "medium",
    statement: "O habeas corpus pode ser impetrado:",
    explanation: "O art. 654 CPP: o habeas corpus pode ser impetrado por qualquer pessoa, em seu favor ou de outrem, bem como pelo Ministerio Publico.",
    support: "CPP, art. 654.",
    relatedArticleIds: [],
    tags: ["habeas corpus", "legitimidade", "impetrar"],
    alternatives: [
      { id: "a", text: "Apenas pelo proprio preso ou por advogado constituido." },
      { id: "b", text: "Por qualquer pessoa, em favor proprio ou de terceiro, bem como pelo Ministerio Publico.", correct: true },
      { id: "c", text: "Somente por advogado regularmente inscrito na OAB." },
      { id: "d", text: "Apenas pelo Ministerio Publico ou defensor publico." }
    ]
  }),
  defineQuestion({
    id: "q-cpp-006",
    subjectId: "processo-penal",
    themeId: "competencia-cpp",
    examId: "oab-41",
    year: 2025,
    questionNumber: 6,
    difficulty: "hard",
    statement: "A competencia pela natureza da infracao e determinada pelo:",
    explanation: "A competencia pela natureza da infracao e absoluta: crimes dolosos contra a vida vao ao Tribunal do Juri; crimes militares vao a Justica Militar; etc.",
    support: "CF/88, art. 5o, XXXVIII; CPP, art. 69, II.",
    relatedArticleIds: [],
    tags: ["competencia", "natureza da infracao", "tribunal do juri"],
    alternatives: [
      { id: "a", text: "Domicilio do acusado." },
      { id: "b", text: "Local da consumacao do delito." },
      { id: "c", text: "Tipo de delito praticado, sendo competencia absoluta determinada por lei.", correct: true },
      { id: "d", text: "Escolha do acusado entre foros alternativos." }
    ]
  }),
  defineQuestion({
    id: "q-cpp-007",
    subjectId: "processo-penal",
    themeId: "inquerito-policial",
    examId: "oab-42",
    year: 2025,
    questionNumber: 7,
    difficulty: "medium",
    statement: "O arquivamento do inquerito policial pelo juiz sem requerimento do Ministerio Publico e:",
    explanation: "A Sumula 524 do STF e o entendimento consolidado determinam que o juiz nao pode arquivar o inquerito de oficio; o arquivamento depende de requerimento do MP.",
    support: "CPP, art. 28; STF, Sumula 524.",
    relatedArticleIds: [],
    tags: ["arquivamento", "inquerito", "MP"],
    alternatives: [
      { id: "a", text: "Permitido quando o juiz entender que nao ha justa causa para a acao penal." },
      { id: "b", text: "Vedado, pois o arquivamento depende de requerimento do Ministerio Publico.", correct: true },
      { id: "c", text: "Facultativo, a criterio exclusivo do magistrado." },
      { id: "d", text: "Obrigatorio quando o prazo de inquerito for ultrapassado." }
    ]
  }),
  defineQuestion({
    id: "q-cpp-008",
    subjectId: "processo-penal",
    themeId: "acao-penal",
    examId: "oab-43",
    year: 2025,
    questionNumber: 8,
    difficulty: "hard",
    statement: "Na acao penal privada, a perda do direito de queixa por inacao no prazo de 6 meses denomina-se:",
    explanation: "A decadencia e a perda do direito de queixa ou de representacao pelo decurso do prazo de 6 meses (art. 38 CPP).",
    support: "CPP, art. 38.",
    relatedArticleIds: [],
    tags: ["decadencia", "queixa", "acao penal privada"],
    alternatives: [
      { id: "a", text: "Prescricao da pretensao punitiva." },
      { id: "b", text: "Decadencia do direito de queixa.", correct: true },
      { id: "c", text: "Perencao da acao penal." },
      { id: "d", text: "Renuncial ao direito de queixa." }
    ]
  }),
  defineQuestion({
    id: "q-cpp-009",
    subjectId: "processo-penal",
    themeId: "provas-cpp",
    examId: "oab-30",
    year: 2019,
    questionNumber: 9,
    difficulty: "medium",
    statement: "O reconhecimento de pessoas, como meio de prova no processo penal, deve ser realizado:",
    explanation: "O art. 226 CPP exige: descricao da pessoa a reconhecer; apresentacao ao lado de outras de semelhanca (ao menos 3); pedido de reconhecimento formal.",
    support: "CPP, art. 226.",
    relatedArticleIds: [],
    tags: ["reconhecimento de pessoas", "formalidades"],
    alternatives: [
      { id: "a", text: "Diretamente pelo ofendido, sem formalidades legais." },
      { id: "b", text: "Com a apresentacao do suspeito ao lado de outras pessoas de semelhancas, com descricao previa.", correct: true },
      { id: "c", text: "Apenas por fotografia, para evitar constrangimento." },
      { id: "d", text: "Por videoconferencia, dispensando a presenca fisica." }
    ]
  }),
  defineQuestion({
    id: "q-cpp-010",
    subjectId: "processo-penal",
    themeId: "prisoes",
    examId: "oab-31",
    year: 2020,
    questionNumber: 10,
    difficulty: "hard",
    statement: "A prisao em flagrante delito pode ser efetuada:",
    explanation: "O art. 301 CPP: qualquer do povo pode prender em flagrante; as autoridades policiais e seus agentes tem a obrigacao de prender.",
    support: "CPP, art. 301.",
    relatedArticleIds: [],
    tags: ["flagrante", "prisao", "qualquer do povo"],
    alternatives: [
      { id: "a", text: "Apenas pela autoridade policial ou seus agentes." },
      { id: "b", text: "Por qualquer pessoa, sendo obrigatorio para autoridades policiais e seus agentes.", correct: true },
      { id: "c", text: "Somente pelo Ministerio Publico e Policia Judiciaria." },
      { id: "d", text: "Apenas se houver mandado judicial previo." }
    ]
  }),
  defineQuestion({
    id: "q-cpp-011",
    subjectId: "processo-penal",
    themeId: "habeas-corpus-cpp",
    examId: "oab-32",
    year: 2020,
    questionNumber: 11,
    difficulty: "medium",
    statement: "O habeas corpus nao e admissivel quando:",
    explanation: "A Sumula 693 do STF: nao cabe habeas corpus contra decisao condenatoria a pena de multa, ou relativo a processo em curso por infracao penal a que a pena pecuniaria seja a unica cominada.",
    support: "STF, Sumula 693.",
    relatedArticleIds: [],
    tags: ["habeas corpus", "multa", "inadmissibilidade"],
    alternatives: [
      { id: "a", text: "A privacao de liberdade for decretada por autoridade incompetente." },
      { id: "b", text: "A pena cominada for exclusivamente de multa, sem privacao de liberdade.", correct: true },
      { id: "c", text: "O paciente ja tiver sido absolvido em primeiro grau." },
      { id: "d", text: "A impetracao for preventiva." }
    ]
  }),
  defineQuestion({
    id: "q-cpp-012",
    subjectId: "processo-penal",
    themeId: "acao-penal",
    examId: "oab-33",
    year: 2021,
    questionNumber: 12,
    difficulty: "medium",
    statement: "A representacao do ofendido na acao penal publica condicionada:",
    explanation: "A representacao e condicao de procedibilidade da acao penal publica condicionada, podendo ser retratada ate o oferecimento da denuncia.",
    support: "CPP, art. 25; art. 102.",
    relatedArticleIds: [],
    tags: ["representacao", "retratacao", "acao penal condicionada"],
    alternatives: [
      { id: "a", text: "Pode ser retratada a qualquer tempo, mesmo apos a sentenca condenatoria." },
      { id: "b", text: "E retratavel ate o oferecimento da denuncia pelo Ministerio Publico.", correct: true },
      { id: "c", text: "Vincula o Ministerio Publico ao oferecimento da denuncia." },
      { id: "d", text: "Nao pode ser feita por representante legal do menor." }
    ]
  }),
  defineQuestion({
    id: "q-cpp-013",
    subjectId: "processo-penal",
    themeId: "inquerito-policial",
    examId: "oab-34",
    year: 2021,
    questionNumber: 13,
    difficulty: "easy",
    statement: "O inquerito policial possui as seguintes caracteristicas, EXCETO:",
    explanation: "O inquerito policial e inquisitorial (sem contraditorio obrigatorio), escrito, sigiloso e dispensavel (a denuncia pode ser oferecida com base em outras pecas de informacao).",
    support: "CPP, art. 9o; art. 12.",
    relatedArticleIds: [],
    tags: ["inquerito", "caracteristicas", "dispensavel"],
    alternatives: [
      { id: "a", text: "E procedimento escrito e sigiloso." },
      { id: "b", text: "E dispensavel para o oferecimento da denuncia." },
      { id: "c", text: "E inquisitorial, sem contraditorio obrigatorio." },
      { id: "d", text: "E indispensavel para o ajuizamento da acao penal.", correct: true }
    ]
  }),
  defineQuestion({
    id: "q-cpp-014",
    subjectId: "processo-penal",
    themeId: "provas-cpp",
    examId: "oab-35",
    year: 2022,
    questionNumber: 14,
    difficulty: "hard",
    statement: "O principio do nemo tenetur se detegere (nao autoincriminacao) garante ao acusado o direito de:",
    explanation: "O principio do nemo tenetur se detegere, de origem constitucional (art. 5o, LXIII, CF), garante o direito ao silencio sem que isso seja interpretado em prejuizo do reu.",
    support: "CF/88, art. 5o, LXIII; CPP, art. 186.",
    relatedArticleIds: [],
    tags: ["nemo tenetur", "silencio", "autoincriminacao"],
    alternatives: [
      { id: "a", text: "Negar qualquer prova pericial solicitada pelo juiz." },
      { id: "b", text: "Permanecer em silencio sem que isso seja interpretado em seu prejuizo.", correct: true },
      { id: "c", text: "Escolher quais perguntas do MP responder." },
      { id: "d", text: "Apresentar provas em qualquer fase do processo, sem preclusao." }
    ]
  }),
  defineQuestion({
    id: "q-cpp-015",
    subjectId: "processo-penal",
    themeId: "competencia-cpp",
    examId: "oab-36",
    year: 2022,
    questionNumber: 15,
    difficulty: "medium",
    statement: "No processo penal, a competencia territorial e fixada, em regra, pelo:",
    explanation: "O art. 70 CPP: a competencia e, de regra, determinada pelo lugar em que se consumar a infracao.",
    support: "CPP, art. 70.",
    relatedArticleIds: [],
    tags: ["competencia territorial", "consumacao", "locus delicti"],
    alternatives: [
      { id: "a", text: "Domicilio do acusado." },
      { id: "b", text: "Local em que se consumar a infracao (locus delicti commissi).", correct: true },
      { id: "c", text: "Domicilio da vitima." },
      { id: "d", text: "Escolha do Ministerio Publico." }
    ]
  }),
  defineQuestion({
    id: "q-cpp-016",
    subjectId: "processo-penal",
    themeId: "prisoes",
    examId: "oab-37",
    year: 2023,
    questionNumber: 16,
    difficulty: "hard",
    statement: "A prisao temporaria, prevista na Lei 7.960/1989, tem prazo:",
    explanation: "A Lei 7.960/1989 estabelece prazo de 5 dias, prorrogavel por igual periodo em caso de extrema e comprovada necessidade. Para crimes hediondos (Lei 8.072/1990), o prazo e de 30 dias, prorrogavel por mais 30.",
    support: "Lei 7.960/1989, art. 2o; Lei 8.072/1990, art. 2o, par. 4o.",
    relatedArticleIds: [],
    tags: ["prisao temporaria", "prazo", "crimes hediondos"],
    alternatives: [
      { id: "a", text: "De 10 dias, prorrogavel por mais 10, para todos os crimes." },
      { id: "b", text: "De 5 dias prorrogavel por igual periodo; 30 dias prorrogaveis por mais 30 para crimes hediondos.", correct: true },
      { id: "c", text: "De 30 dias improrrogaveis, independentemente do tipo de crime." },
      { id: "d", text: "Indefinido, a criterio do juiz competente." }
    ]
  }),
  defineQuestion({
    id: "q-cpp-017",
    subjectId: "processo-penal",
    themeId: "acao-penal",
    examId: "oab-38",
    year: 2023,
    questionNumber: 17,
    difficulty: "medium",
    statement: "A denuncia ou queixa sera rejeitada quando o fato narrado evidentemente:",
    explanation: "O art. 395 CPP: a denuncia ou queixa sera rejeitada quando for manifestamente inepta, faltar pressuposto processual ou condicao para o exercicio da acao penal, ou faltar justa causa.",
    support: "CPP, art. 395.",
    relatedArticleIds: [],
    tags: ["rejeicao", "denuncia", "justa causa"],
    alternatives: [
      { id: "a", text: "Depender de investigacao policial complementar." },
      { id: "b", text: "For manifestamente inepto, faltar pressuposto processual ou condicao da acao, ou faltar justa causa.", correct: true },
      { id: "c", text: "O acusado nao tiver advogado constituido no momento da denuncia." },
      { id: "d", text: "A vitima nao ratificar a queixa no prazo de 24 horas." }
    ]
  }),
  defineQuestion({
    id: "q-cpp-018",
    subjectId: "processo-penal",
    themeId: "provas-cpp",
    examId: "oab-39",
    year: 2024,
    questionNumber: 18,
    difficulty: "hard",
    statement: "A interceptacao de comunicacoes telefonicas, para fins de investigacao ou instrucao processual penal, exige:",
    explanation: "A Lei 9.296/1996 e o art. 5o, XII, CF exigem ordem judicial, crime punido com reclusao e que a prova nao possa ser obtida por outros meios.",
    support: "CF/88, art. 5o, XII; Lei 9.296/1996, art. 2o.",
    relatedArticleIds: [],
    tags: ["interceptacao telefonica", "ordem judicial", "Lei 9.296"],
    alternatives: [
      { id: "a", text: "Autorizacao do Ministerio Publico e ciencia da autoridade policial." },
      { id: "b", text: "Ordem judicial, crime punido com reclusao e impossibilidade de obtencao da prova por outros meios.", correct: true },
      { id: "c", text: "Apenas autorizacao administrativa da Agencia Brasileira de Inteligencia." },
      { id: "d", text: "Consentimento do investigado ou da vitima." }
    ]
  }),
  defineQuestion({
    id: "q-cpp-019",
    subjectId: "processo-penal",
    themeId: "habeas-corpus-cpp",
    examId: "oab-40",
    year: 2024,
    questionNumber: 19,
    difficulty: "medium",
    statement: "O juiz pode conceder habeas corpus de oficio?",
    explanation: "O art. 654, par. 2o, CPP: os juizes e tribunais tem competencia para expedir de oficio ordem de habeas corpus quando no curso do processo verificarem que alguem sofre ou esta na iminencia de sofrer coacao ilegal.",
    support: "CPP, art. 654, par. 2o.",
    relatedArticleIds: [],
    tags: ["habeas corpus", "de oficio", "coacao ilegal"],
    alternatives: [
      { id: "a", text: "Nao, pois e ato privativo do impetrante ou do MP." },
      { id: "b", text: "Sim, de oficio, quando verificar coacao ilegal no curso do processo.", correct: true },
      { id: "c", text: "Apenas se provocado pela defesa ou pelo Ministerio Publico." },
      { id: "d", text: "Somente em grau de recurso." }
    ]
  }),
  defineQuestion({
    id: "q-cpp-020",
    subjectId: "processo-penal",
    themeId: "competencia-cpp",
    examId: "oab-41",
    year: 2025,
    questionNumber: 20,
    difficulty: "hard",
    statement: "Os crimes dolosos contra a vida sao julgados pelo:",
    explanation: "O art. 5o, XXXVIII, d, CF consagra o Tribunal do Juri como competente para julgar os crimes dolosos contra a vida.",
    support: "CF/88, art. 5o, XXXVIII, d; CPP, art. 74, par. 1o.",
    relatedArticleIds: [],
    tags: ["tribunal do juri", "crimes dolosos contra a vida"],
    alternatives: [
      { id: "a", text: "Juizado Especial Criminal." },
      { id: "b", text: "Tribunal do Juri.", correct: true },
      { id: "c", text: "Vara Criminal Comum." },
      { id: "d", text: "Tribunal de Justica em caso de co-autoria." }
    ]
  }),

  // ==================== ADMINISTRATIVO (20) ====================
  defineQuestion({
    id: "q-adm-001",
    subjectId: "administrativo",
    themeId: "atos-administrativos",
    examId: "oab-36",
    year: 2022,
    questionNumber: 1,
    difficulty: "medium",
    statement: "Os atos administrativos vinculados diferenciam-se dos discricionarios porque nos atos vinculados:",
    explanation: "Nos atos vinculados, a Administracao nao tem margem de escolha: todos os elementos sao determinados em lei. Nos discricionarios, ha margem de conveniencia e oportunidade.",
    support: "Doutrina; Lei 9.784/1999.",
    relatedArticleIds: [],
    tags: ["atos vinculados", "atos discricionarios"],
    alternatives: [
      { id: "a", text: "A Administracao tem ampla liberdade para escolher o conteudo do ato." },
      { id: "b", text: "A lei determina todos os elementos do ato, sem margem de escolha.", correct: true },
      { id: "c", text: "O Judiciario nao pode controla-los." },
      { id: "d", text: "Apenas o Chefe do Executivo pode praticar." }
    ]
  }),
  defineQuestion({
    id: "q-adm-002",
    subjectId: "administrativo",
    themeId: "licitacao",
    examId: "oab-37",
    year: 2023,
    questionNumber: 2,
    difficulty: "hard",
    statement: "A modalidade de licitacao exigida para contratos de obras e servicos de engenharia acima de R$ 3,3 milhoes, conforme a Lei 14.133/2021, e:",
    explanation: "A Lei 14.133/2021 (Nova Lei de Licitacoes) unifica as modalidades. Para obras e servicos de engenharia acima do limite, e cabível a concorrencia ou o dialogo competitivo.",
    support: "Lei 14.133/2021, art. 6o, XXXVIII; art. 28.",
    relatedArticleIds: [],
    tags: ["licitacao", "concorrencia", "Lei 14.133"],
    alternatives: [
      { id: "a", text: "Tomada de preco." },
      { id: "b", text: "Concorrencia.", correct: true },
      { id: "c", text: "Convite." },
      { id: "d", text: "Leilao." }
    ]
  }),
  defineQuestion({
    id: "q-adm-003",
    subjectId: "administrativo",
    themeId: "improbidade",
    examId: "oab-38",
    year: 2023,
    questionNumber: 3,
    difficulty: "hard",
    statement: "Conforme a Lei 8.429/1992, com as alteracoes da Lei 14.230/2021, os atos de improbidade administrativa que causam prejuizo ao erario exigem:",
    explanation: "Apos a Lei 14.230/2021, a improbidade administrativa exige demonstracao de dolo especifico em todos os atos. A modalidade culposa foi extinta.",
    support: "Lei 8.429/1992, art. 1o, par. 1o; art. 10, caput (redacao Lei 14.230/2021).",
    relatedArticleIds: [],
    tags: ["improbidade", "dolo especifico", "Lei 14.230"],
    alternatives: [
      { id: "a", text: "Apenas culpa grave ou dolo eventual." },
      { id: "b", text: "Dolo especifico, tendo sido eliminada a modalidade culposa.", correct: true },
      { id: "c", text: "Culpa simples, pois basta a negligencia do agente." },
      { id: "d", text: "Presuncao de dolo quando o prejuizo for superior a 100 salarios minimos." }
    ]
  }),
  defineQuestion({
    id: "q-adm-004",
    subjectId: "administrativo",
    themeId: "poder-policia",
    examId: "oab-39",
    year: 2024,
    questionNumber: 4,
    difficulty: "medium",
    statement: "O poder de policia administrativo caracteriza-se por:",
    explanation: "O poder de policia limita ou condiciona o exercicio de direitos individuais em beneficio do interesse publico, com atributos de autoexecutoriedade, coercibilidade e discricionariedade.",
    support: "CTN, art. 78; doutrina.",
    relatedArticleIds: [],
    tags: ["poder de policia", "autoexecutoriedade", "interesse publico"],
    alternatives: [
      { id: "a", text: "Criar obrigacoes de dar, fazer e nao fazer com base em lei e sem contrapartida." },
      { id: "b", text: "Restringir ou condicionar direitos individuais em favor do interesse publico, com autoexecutoriedade e coercibilidade.", correct: true },
      { id: "c", text: "Aplicar sancoes penais aos infratores da ordem publica." },
      { id: "d", text: "Privatizar servicos publicos de interesse coletivo." }
    ]
  }),
  defineQuestion({
    id: "q-adm-005",
    subjectId: "administrativo",
    themeId: "responsabilidade-estado",
    examId: "oab-40",
    year: 2024,
    questionNumber: 5,
    difficulty: "hard",
    statement: "A responsabilidade civil objetiva do Estado por atos de seus agentes esta prevista na Constituicao Federal e exige:",
    explanation: "O art. 37, par. 6o, CF: pessoas juridicas de direito publico e as de direito privado prestadoras de servico publico respondem objetivamente por danos causados por seus agentes.",
    support: "CF/88, art. 37, par. 6o.",
    relatedArticleIds: [],
    tags: ["responsabilidade objetiva", "Estado", "dano", "nexo causal"],
    alternatives: [
      { id: "a", text: "Culpa ou dolo do agente publico causador do dano." },
      { id: "b", text: "Acao ou omissao do agente, dano e nexo causal, independentemente de culpa.", correct: true },
      { id: "c", text: "Apenas dano material, pois o moral nao e indenizavel pelo Estado." },
      { id: "d", text: "Autorizacao legislativa previa para o pagamento da indenizacao." }
    ]
  }),
  defineQuestion({
    id: "q-adm-006",
    subjectId: "administrativo",
    themeId: "concessoes",
    examId: "oab-41",
    year: 2025,
    questionNumber: 6,
    difficulty: "medium",
    statement: "Na concessao de servico publico, a responsabilidade perante os usuarios pela prestacao do servico e:",
    explanation: "Na concessao, a concessionaria responde pelos danos aos usuarios com base na responsabilidade objetiva (art. 25 da Lei 8.987/1995 e art. 37, par. 6o, CF).",
    support: "Lei 8.987/1995, art. 25; CF/88, art. 37, par. 6o.",
    relatedArticleIds: [],
    tags: ["concessao", "responsabilidade", "concessionaria"],
    alternatives: [
      { id: "a", text: "Do Poder Publico concedente, pois a concessao nao transfere responsabilidade." },
      { id: "b", text: "Da concessionaria, objetivamente.", correct: true },
      { id: "c", text: "Solidaria entre a concessionaria e o Poder Publico." },
      { id: "d", text: "Inexistente, pois o usuario assume os riscos ao utilizar o servico." }
    ]
  }),
  defineQuestion({
    id: "q-adm-007",
    subjectId: "administrativo",
    themeId: "atos-administrativos",
    examId: "oab-42",
    year: 2025,
    questionNumber: 7,
    difficulty: "hard",
    statement: "A autotutel administrativa permite que a Administracao Publica:",
    explanation: "A autotutel (Sumulas 346 e 473 do STF) permite que a Administracao anule seus atos ilegais e revogue os inconvenientes ou inoportunos.",
    support: "STF, Sumulas 346 e 473.",
    relatedArticleIds: [],
    tags: ["autotutela", "anulacao", "revogacao", "Sumula 473 STF"],
    alternatives: [
      { id: "a", text: "Apenas revogar atos legais que se tornaram inconvenientes." },
      { id: "b", text: "Anular atos ilegais e revogar atos legais por conveniencia e oportunidade.", correct: true },
      { id: "c", text: "Anular atos ilegais com producao de efeitos ex nunc apenas." },
      { id: "d", text: "Revogar qualquer ato, inclusive os que geraram direitos adquiridos." }
    ]
  }),
  defineQuestion({
    id: "q-adm-008",
    subjectId: "administrativo",
    themeId: "licitacao",
    examId: "oab-43",
    year: 2025,
    questionNumber: 8,
    difficulty: "medium",
    statement: "A dispensa de licitacao difere da inexigibilidade porque:",
    explanation: "Na dispensa (art. 75 Lei 14.133), a licitacao seria possivel mas a lei autoriza a contratacao direta em situacoes taxativas. Na inexigibilidade (art. 74), a competicao e inviavel.",
    support: "Lei 14.133/2021, art. 74; art. 75.",
    relatedArticleIds: [],
    tags: ["dispensa", "inexigibilidade", "licitacao"],
    alternatives: [
      { id: "a", text: "Na dispensa ha inviabilidade de competicao; na inexigibilidade a licitacao e possivel." },
      { id: "b", text: "Na dispensa a licitacao seria possivel mas e legalmente prescindivel; na inexigibilidade ha inviabilidade de competicao.", correct: true },
      { id: "c", text: "Sao sinonimos com o mesmo rol de hipoteses." },
      { id: "d", text: "A dispensa exige decreto presidencial; a inexigibilidade, simples despacho." }
    ]
  }),
  defineQuestion({
    id: "q-adm-009",
    subjectId: "administrativo",
    themeId: "improbidade",
    examId: "oab-30",
    year: 2019,
    questionNumber: 9,
    difficulty: "hard",
    statement: "Conforme a lei de improbidade, e ato de improbidade por violacao de principios da administracao:",
    explanation: "O art. 11 da Lei 8.429/1992 tipifica como improbidade a violacao de principios da administracao: legalidade, impessoalidade, moralidade, publicidade e eficiencia. Apos a Lei 14.230/2021, exige dolo especifico.",
    support: "Lei 8.429/1992, art. 11.",
    relatedArticleIds: [],
    tags: ["improbidade", "violacao de principios", "dolo"],
    alternatives: [
      { id: "a", text: "Deixar de praticar ato obrigatorio por culpa grave do agente." },
      { id: "b", text: "Praticar ato administrativo que viole dolosamente os principios da administracao publica.", correct: true },
      { id: "c", text: "Qualquer ato irregular do servidor, mesmo sem dolo." },
      { id: "d", text: "Ato praticado com culpa, mesmo nao causando dano ao erario." }
    ]
  }),
  defineQuestion({
    id: "q-adm-010",
    subjectId: "administrativo",
    themeId: "poder-policia",
    examId: "oab-31",
    year: 2020,
    questionNumber: 10,
    difficulty: "medium",
    statement: "A autoexecutoriedade do poder de policia significa que:",
    explanation: "A autoexecutoriedade permite que a Administracao execute suas decisoes sem recorrer previamente ao Judiciario.",
    support: "Doutrina; CTN, art. 78.",
    relatedArticleIds: [],
    tags: ["autoexecutoriedade", "poder de policia"],
    alternatives: [
      { id: "a", text: "O Poder Judiciario nao pode controlar os atos de policia." },
      { id: "b", text: "A Administracao pode executar suas decisoes sem necessidade de autorizacao judicial previa.", correct: true },
      { id: "c", text: "O particular nao pode questionar o ato de policia." },
      { id: "d", text: "A sancao de policia prescinde de processo administrativo." }
    ]
  }),
  defineQuestion({
    id: "q-adm-011",
    subjectId: "administrativo",
    themeId: "atos-administrativos",
    examId: "oab-32",
    year: 2020,
    questionNumber: 11,
    difficulty: "medium",
    statement: "A motivacao dos atos administrativos:",
    explanation: "A motivacao e elemento formal obrigatorio para os atos que restringem direitos. A teoria dos motivos determinantes vincula a validade do ato aos motivos declarados.",
    support: "Lei 9.784/1999, art. 50.",
    relatedArticleIds: [],
    tags: ["motivacao", "teoria dos motivos determinantes"],
    alternatives: [
      { id: "a", text: "E dispensavel para qualquer ato administrativo." },
      { id: "b", text: "E obrigatoria para atos que imponham restricao de direitos, podendo a falsidade do motivo invalida-los.", correct: true },
      { id: "c", text: "So e exigida para atos do Poder Executivo federal." },
      { id: "d", text: "Nao vincula o ato ao motivo declarado." }
    ]
  }),
  defineQuestion({
    id: "q-adm-012",
    subjectId: "administrativo",
    themeId: "responsabilidade-estado",
    examId: "oab-33",
    year: 2021,
    questionNumber: 12,
    difficulty: "hard",
    statement: "O Estado responde objetivamente por omissao quando:",
    explanation: "A responsabilidade por omissao segue, para a doutrina majoritaria e STF, a teoria subjetiva (exige culpa do servico — faute du service). O STF, contudo, em algumas situacoes adota a responsabilidade objetiva por omissao especifica.",
    support: "CF/88, art. 37, par. 6o; STF, RE 109.615.",
    relatedArticleIds: [],
    tags: ["responsabilidade", "omissao especifica", "Estado"],
    alternatives: [
      { id: "a", text: "Qualquer dano ocorrer em area onde o Estado presta servico." },
      { id: "b", text: "Houver omissao especifica, em que o Estado tinha o dever juridico de agir e nao agiu.", correct: true },
      { id: "c", text: "O dano for decorrente de ato de particular sem relacao com o servico publico." },
      { id: "d", text: "O servidor tiver agido fora de suas funcoes, mas em razao delas." }
    ]
  }),
  defineQuestion({
    id: "q-adm-013",
    subjectId: "administrativo",
    themeId: "licitacao",
    examId: "oab-34",
    year: 2021,
    questionNumber: 13,
    difficulty: "medium",
    statement: "A modalidade pregao, na forma eletronica, e obrigatoria para a contratacao de:",
    explanation: "O art. 176 da Lei 14.133/2021 e o Decreto 10.024/2019: o pregao eletronico e obrigatorio para bens e servicos comuns.",
    support: "Lei 14.133/2021, art. 176; Decreto 10.024/2019.",
    relatedArticleIds: [],
    tags: ["pregao eletronico", "bens comuns"],
    alternatives: [
      { id: "a", text: "Obras e servicos de engenharia de qualquer valor." },
      { id: "b", text: "Bens e servicos comuns, independentemente do valor.", correct: true },
      { id: "c", text: "Apenas servicos continuos acima de R$ 300 mil." },
      { id: "d", text: "Apenas aquisicoes internacionais de bens." }
    ]
  }),
  defineQuestion({
    id: "q-adm-014",
    subjectId: "administrativo",
    themeId: "concessoes",
    examId: "oab-35",
    year: 2022,
    questionNumber: 14,
    difficulty: "hard",
    statement: "A permissao de servico publico distingue-se da concessao porque:",
    explanation: "A permissao e ato administrativo unilateral, precario e revogavel a qualquer tempo, sem indenizacao previa. A concessao e contrato bilateral, nao precario.",
    support: "Lei 8.987/1995, art. 2o; CF/88, art. 175.",
    relatedArticleIds: [],
    tags: ["permissao", "concessao", "precariedade"],
    alternatives: [
      { id: "a", text: "A permissao e contrato bilateral; a concessao e ato unilateral." },
      { id: "b", text: "A permissao e ato precario e revogavel; a concessao e contrato com maior estabilidade.", correct: true },
      { id: "c", text: "A permissao e sempre gratuita; a concessao onerosa." },
      { id: "d", text: "Na concessao, o risco e do Estado; na permissao, do particular." }
    ]
  }),
  defineQuestion({
    id: "q-adm-015",
    subjectId: "administrativo",
    themeId: "atos-administrativos",
    examId: "oab-36",
    year: 2022,
    questionNumber: 15,
    difficulty: "medium",
    statement: "O silencio administrativo, quando a lei nao atribui efeito ao silencio do Poder Publico:",
    explanation: "Em regra, o silencio administrativo nao produz efeitos (nem deferimento nem indeferimento tacito), salvo quando a lei expressamente prever efeito ao silencio.",
    support: "Lei 9.784/1999, art. 48 e 49; doutrina.",
    relatedArticleIds: [],
    tags: ["silencio administrativo", "efeito juridico"],
    alternatives: [
      { id: "a", text: "Equivale sempre a deferimento tacito do pedido." },
      { id: "b", text: "Nao produz efeito juridico, salvo quando a lei expressamente prever.", correct: true },
      { id: "c", text: "Equivale a indeferimento tacito, autorizando recurso." },
      { id: "d", text: "Gera responsabilidade objetiva do Estado independentemente de dano." }
    ]
  }),
  defineQuestion({
    id: "q-adm-016",
    subjectId: "administrativo",
    themeId: "improbidade",
    examId: "oab-37",
    year: 2023,
    questionNumber: 16,
    difficulty: "hard",
    statement: "As sancoes previstas na lei de improbidade para atos que causam enriquecimento ilicito incluem:",
    explanation: "O art. 12, I, Lei 8.429/1992: para enriquecimento ilicito — perda dos bens acrescidos ilicitamente, ressarcimento, perda da funcao publica, suspenscao dos direitos politicos de 14 a 16 anos, multa, proibicao de contratar.",
    support: "Lei 8.429/1992, art. 12, I.",
    relatedArticleIds: [],
    tags: ["enriquecimento ilicito", "sancoes", "improbidade"],
    alternatives: [
      { id: "a", text: "Apenas multa e suspensao dos direitos politicos por 3 anos." },
      { id: "b", text: "Perda dos bens ilicitos, ressarcimento, perda da funcao publica, suspensao dos direitos politicos de 14 a 16 anos e multa.", correct: true },
      { id: "c", text: "Reclusao de 2 a 12 anos e multa, alem das sancoes civis." },
      { id: "d", text: "Apenas ressarcimento do dano e multa de ate 100 salarios minimos." }
    ]
  }),
  defineQuestion({
    id: "q-adm-017",
    subjectId: "administrativo",
    themeId: "poder-policia",
    examId: "oab-38",
    year: 2023,
    questionNumber: 17,
    difficulty: "medium",
    statement: "A coercibilidade do poder de policia significa que:",
    explanation: "A coercibilidade permite que a Administracao imponha medidas de policia de forma compulsoria, mediante uso de forca se necessario.",
    support: "Doutrina.",
    relatedArticleIds: [],
    tags: ["coercibilidade", "poder de policia", "compulsorio"],
    alternatives: [
      { id: "a", text: "Os atos de policia so produzem efeitos com o consentimento do administrado." },
      { id: "b", text: "A imposicao das medidas de policia e compulsoria, podendo usar de forca se necessario.", correct: true },
      { id: "c", text: "O Judiciario e competente exclusivo para impor as sancoes de policia." },
      { id: "d", text: "Os atos de policia sao sempre motivados com fundamentacao em lei especifica." }
    ]
  }),
  defineQuestion({
    id: "q-adm-018",
    subjectId: "administrativo",
    themeId: "responsabilidade-estado",
    examId: "oab-39",
    year: 2024,
    questionNumber: 18,
    difficulty: "hard",
    statement: "A acao regressiva do Estado em face do servidor que causou o dano:",
    explanation: "O art. 37, par. 6o, CF: o Estado tem acao regressiva contra o agente causador do dano quando tiver agido com dolo ou culpa.",
    support: "CF/88, art. 37, par. 6o.",
    relatedArticleIds: [],
    tags: ["acao regressiva", "dolo", "culpa", "servidor"],
    alternatives: [
      { id: "a", text: "Independe de dolo ou culpa do servidor." },
      { id: "b", text: "Exige que o servidor tenha agido com dolo ou culpa.", correct: true },
      { id: "c", text: "E vedada pela vedacao do bis in idem constitucional." },
      { id: "d", text: "Somente cabe apos transito em julgado da acao indenizatoria." }
    ]
  }),
  defineQuestion({
    id: "q-adm-019",
    subjectId: "administrativo",
    themeId: "licitacao",
    examId: "oab-40",
    year: 2024,
    questionNumber: 19,
    difficulty: "medium",
    statement: "E vedado participar de licitacoes o licitante que:",
    explanation: "O art. 14 da Lei 14.133/2021 e art. 38 veda a participacao de licitante suspenso, impedido, com falencia decretada, ou em outras situacoes de inidoneidade.",
    support: "Lei 14.133/2021, art. 14.",
    relatedArticleIds: [],
    tags: ["vedacao", "licitante", "suspensao", "inidoneidade"],
    alternatives: [
      { id: "a", text: "Tiver obtido certidoes negativas de um dos orgaos publicos." },
      { id: "b", text: "Estiver suspenso ou declarado inidoneo para licitar ou contratar com o Poder Publico.", correct: true },
      { id: "c", text: "Participar de dois ou mais procedimentos licitatorios simultaneamente." },
      { id: "d", text: "Tiver proposto preco inferior ao de mercado." }
    ]
  }),
  defineQuestion({
    id: "q-adm-020",
    subjectId: "administrativo",
    themeId: "atos-administrativos",
    examId: "oab-41",
    year: 2025,
    questionNumber: 20,
    difficulty: "hard",
    statement: "A decai o poder de anular atos administrativos de que decorram efeitos favoraveis para os destinatarios, no prazo de:",
    explanation: "O art. 54 da Lei 9.784/1999: a Administracao decai do direito de anular atos de que decorram efeitos favoraveis em 5 anos, salvo ma-fe.",
    support: "Lei 9.784/1999, art. 54.",
    relatedArticleIds: [],
    tags: ["decadencia administrativa", "anulacao", "Lei 9.784", "5 anos"],
    alternatives: [
      { id: "a", text: "1 ano, contado da producao do ato." },
      { id: "b", text: "5 anos, contados da data em que foram praticados, salvo comprovada ma-fe.", correct: true },
      { id: "c", text: "10 anos, contados da publicacao oficial." },
      { id: "d", text: "2 anos, contados da data do conhecimento pela Administracao." }
    ]
  }),

  // ==================== TRIBUTÁRIO (20) ====================
  defineQuestion({
    id: "q-trib-001",
    subjectId: "tributario",
    themeId: "principios-tributarios",
    examId: "oab-36",
    year: 2022,
    questionNumber: 1,
    difficulty: "medium",
    statement: "O principio da anterioridade tributaria veda a cobranca de tributo no mesmo exercicio financeiro em que tenha sido publicada a lei que o instituiu ou majorou. Esse principio:",
    explanation: "O art. 150, III, b, CF consagra a anterioridade do exercicio financeiro. A anterioridade nonagesimal (art. 150, III, c) exige tambem 90 dias de carencia.",
    support: "CF/88, art. 150, III, b e c.",
    relatedArticleIds: [],
    tags: ["anterioridade", "tributo", "exercicio financeiro"],
    alternatives: [
      { id: "a", text: "Aplica-se a todos os tributos, sem excecao." },
      { id: "b", text: "Admite excecoes, como o IPI, ICMS sobre combustiveis e contribuicoes de seguridade.", correct: true },
      { id: "c", text: "Nao se aplica as taxas e contribuicoes de melhoria." },
      { id: "d", text: "Equivale ao principio da irretroatividade tributaria." }
    ]
  }),
  defineQuestion({
    id: "q-trib-002",
    subjectId: "tributario",
    themeId: "obrigacao-tributaria",
    examId: "oab-37",
    year: 2023,
    questionNumber: 2,
    difficulty: "hard",
    statement: "O fato gerador da obrigacao tributaria principal e:",
    explanation: "O art. 114 CTN: o fato gerador da obrigacao principal e a situacao definida em lei como necessaria e suficiente a sua ocorrencia.",
    support: "CTN, art. 114.",
    relatedArticleIds: [],
    tags: ["fato gerador", "obrigacao principal", "CTN"],
    alternatives: [
      { id: "a", text: "O descumprimento de obrigacao acessoria." },
      { id: "b", text: "A situacao definida em lei como necessaria e suficiente para a sua ocorrencia.", correct: true },
      { id: "c", text: "O lancamento efetuado pela autoridade fiscal." },
      { id: "d", text: "A inscricao em divida ativa do sujeito passivo." }
    ]
  }),
  defineQuestion({
    id: "q-trib-003",
    subjectId: "tributario",
    themeId: "lancamento",
    examId: "oab-38",
    year: 2023,
    questionNumber: 3,
    difficulty: "medium",
    statement: "O lancamento por homologacao ocorre quando:",
    explanation: "No lancamento por homologacao (art. 150 CTN), o sujeito passivo antecipa o pagamento sem exame previo da autoridade, que posteriormente homologa.",
    support: "CTN, art. 150.",
    relatedArticleIds: [],
    tags: ["lancamento por homologacao", "antecipacao", "homologacao"],
    alternatives: [
      { id: "a", text: "A autoridade fiscal examina previamente a declaracao e exige o tributo." },
      { id: "b", text: "O contribuinte antecipa o pagamento sem exame previo, aguardando homologacao da autoridade.", correct: true },
      { id: "c", text: "O fisco procede ao lancamento de oficio com base em documentos proprios." },
      { id: "d", text: "O contribuinte presta declaracao e o fisco efetua o lancamento com base nela." }
    ]
  }),
  defineQuestion({
    id: "q-trib-004",
    subjectId: "tributario",
    themeId: "imunidades-tributarias",
    examId: "oab-39",
    year: 2024,
    questionNumber: 4,
    difficulty: "hard",
    statement: "A imunidade tributaria reciproca veda a instituicao de impostos sobre:",
    explanation: "O art. 150, VI, a, CF veda a instituicao de impostos sobre o patrimonio, a renda e os servicos uns dos outros entre Uniao, Estados, DF e Municipios.",
    support: "CF/88, art. 150, VI, a.",
    relatedArticleIds: [],
    tags: ["imunidade reciproca", "impostos", "entes federativos"],
    alternatives: [
      { id: "a", text: "Toda e qualquer tributacao entre entes federativos." },
      { id: "b", text: "Impostos sobre patrimonio, renda e servicos entre Uniao, Estados, DF e Municipios.", correct: true },
      { id: "c", text: "Apenas o IPTU e o ITR sobre bens publicos." },
      { id: "d", text: "Taxas e contribuicoes de melhoria entre os entes." }
    ]
  }),
  defineQuestion({
    id: "q-trib-005",
    subjectId: "tributario",
    themeId: "prescricao-tributaria",
    examId: "oab-40",
    year: 2024,
    questionNumber: 5,
    difficulty: "medium",
    statement: "O prazo de prescricao para a Fazenda Publica cobrar o credito tributario ja constituido pelo lancamento e de:",
    explanation: "O art. 174 CTN: a acao para a cobranca do credito tributario prescreve em 5 anos, contados da data da sua constituicao definitiva.",
    support: "CTN, art. 174.",
    relatedArticleIds: [],
    tags: ["prescricao", "credito tributario", "5 anos"],
    alternatives: [
      { id: "a", text: "2 anos contados do lancamento." },
      { id: "b", text: "5 anos contados da constituicao definitiva do credito.", correct: true },
      { id: "c", text: "10 anos contados do fato gerador." },
      { id: "d", text: "3 anos contados da inscricao em divida ativa." }
    ]
  }),
  defineQuestion({
    id: "q-trib-006",
    subjectId: "tributario",
    themeId: "espécies-tributarias",
    examId: "oab-41",
    year: 2025,
    questionNumber: 6,
    difficulty: "easy",
    statement: "Sao especies tributarias previstas na Constituicao Federal e no CTN:",
    explanation: "O CTN e a CF reconhecem: impostos, taxas, contribuicoes de melhoria. O STF acrescentou contribuicoes especiais e emprestimos compulsorios (teoria pentapartite).",
    support: "CTN, art. 5o; CF/88, art. 145; 148; 149.",
    relatedArticleIds: [],
    tags: ["especies tributarias", "pentapartite"],
    alternatives: [
      { id: "a", text: "Apenas impostos, taxas e contribuicoes de melhoria." },
      { id: "b", text: "Impostos, taxas, contribuicoes de melhoria, contribuicoes especiais e emprestimos compulsorios.", correct: true },
      { id: "c", text: "Apenas impostos e taxas, sendo as demais formas de arrecadacao atipicas." },
      { id: "d", text: "Impostos federais, estaduais e municipais apenas." }
    ]
  }),
  defineQuestion({
    id: "q-trib-007",
    subjectId: "tributario",
    themeId: "principios-tributarios",
    examId: "oab-42",
    year: 2025,
    questionNumber: 7,
    difficulty: "hard",
    statement: "O principio da legalidade tributaria exige que:",
    explanation: "O art. 150, I, CF veda exigir ou aumentar tributo sem lei que o estabeleca. O art. 97 CTN detalha as materias sujeitas a reserva legal.",
    support: "CF/88, art. 150, I; CTN, art. 97.",
    relatedArticleIds: [],
    tags: ["legalidade tributaria", "reserva legal", "tributo"],
    alternatives: [
      { id: "a", text: "A aliquota e a base de calculo de qualquer tributo sejam fixadas por decreto do Executivo." },
      { id: "b", text: "A instituicao ou majoracao de tributo ocorra por lei, sendo vedada por medida provisoria.", correct: true },
      { id: "c", text: "A instituicao de tributo ocorra por lei, admitindo-se que a majoracao seja por decreto." },
      { id: "d", text: "A lei que institui o tributo indique apenas o fato gerador, ficando os demais elementos a criterio do fisco." }
    ]
  }),
  defineQuestion({
    id: "q-trib-008",
    subjectId: "tributario",
    themeId: "obrigacao-tributaria",
    examId: "oab-43",
    year: 2025,
    questionNumber: 8,
    difficulty: "medium",
    statement: "O sujeito passivo da obrigacao tributaria que tem relacao pessoal e direta com o fato gerador denomina-se:",
    explanation: "O art. 121, paragrafo unico, I, CTN: contribuinte e quem tem relacao pessoal e direta com o fato gerador. Responsavel e quem, sem ter relacao direta, tem obrigacao por lei.",
    support: "CTN, art. 121, paragrafo unico, I.",
    relatedArticleIds: [],
    tags: ["contribuinte", "sujeito passivo", "fato gerador"],
    alternatives: [
      { id: "a", text: "Responsavel tributario." },
      { id: "b", text: "Contribuinte.", correct: true },
      { id: "c", text: "Substituto tributario." },
      { id: "d", text: "Solidario tributario." }
    ]
  }),
  defineQuestion({
    id: "q-trib-009",
    subjectId: "tributario",
    themeId: "imunidades-tributarias",
    examId: "oab-30",
    year: 2019,
    questionNumber: 9,
    difficulty: "hard",
    statement: "A imunidade tributaria das instituicoes de educacao sem fins lucrativos abrange:",
    explanation: "O art. 150, VI, c, CF imuniza impostos sobre patrimonio, renda e servicos das instituicoes de educacao sem fins lucrativos, desde que atendidos os requisitos do art. 14 CTN.",
    support: "CF/88, art. 150, VI, c; CTN, art. 14.",
    relatedArticleIds: [],
    tags: ["imunidade", "educacao", "impostos"],
    alternatives: [
      { id: "a", text: "Todos os tributos, incluindo taxas e contribuicoes." },
      { id: "b", text: "Impostos sobre patrimonio, renda e servicos, atendidos os requisitos legais.", correct: true },
      { id: "c", text: "Apenas o IPTU dos imoveis utilizados para ensino." },
      { id: "d", text: "Toda e qualquer exacao fiscal cobrada pelo Poder Publico." }
    ]
  }),
  defineQuestion({
    id: "q-trib-010",
    subjectId: "tributario",
    themeId: "lancamento",
    examId: "oab-31",
    year: 2020,
    questionNumber: 10,
    difficulty: "hard",
    statement: "A decadencia do direito de a Fazenda Publica constituir o credito tributario ocorre em:",
    explanation: "O art. 173 CTN: o direito de a Fazenda constituir o credito tributario extingue-se em 5 anos, contados do primeiro dia do exercicio seguinte ao que o lancamento poderia ter sido efetuado.",
    support: "CTN, art. 173.",
    relatedArticleIds: [],
    tags: ["decadencia", "credito tributario", "lancamento", "5 anos"],
    alternatives: [
      { id: "a", text: "2 anos da ocorrencia do fato gerador." },
      { id: "b", text: "5 anos do primeiro dia do exercicio seguinte ao que o lancamento poderia ter sido efetuado.", correct: true },
      { id: "c", text: "5 anos contados da data do fato gerador." },
      { id: "d", text: "10 anos da inscricao em divida ativa." }
    ]
  }),
  defineQuestion({
    id: "q-trib-011",
    subjectId: "tributario",
    themeId: "principios-tributarios",
    examId: "oab-32",
    year: 2020,
    questionNumber: 11,
    difficulty: "medium",
    statement: "O principio da isonomia tributaria veda tratamento desigual entre contribuintes que:",
    explanation: "O art. 150, II, CF veda tratamento desigual entre contribuintes em situacao equivalente, vedando qualquer distincao em razao de ocupacao profissional ou funcao.",
    support: "CF/88, art. 150, II.",
    relatedArticleIds: [],
    tags: ["isonomia tributaria", "situacao equivalente"],
    alternatives: [
      { id: "a", text: "Tenham patrimonio ou renda diferentes." },
      { id: "b", text: "Se encontrem em situacao equivalente, vedada distincao por ocupacao profissional ou funcao.", correct: true },
      { id: "c", text: "Sejam pessoas fisicas e juridicas simultaneamente." },
      { id: "d", text: "Residam em diferentes municipios ou estados." }
    ]
  }),
  defineQuestion({
    id: "q-trib-012",
    subjectId: "tributario",
    themeId: "espécies-tributarias",
    examId: "oab-33",
    year: 2021,
    questionNumber: 12,
    difficulty: "hard",
    statement: "A taxa pode ser cobrada em razao de:",
    explanation: "O art. 77 CTN e art. 145, II, CF: as taxas podem ser cobradas pelo exercicio do poder de policia ou pela utilizacao de servico publico especifico e divisivel.",
    support: "CF/88, art. 145, II; CTN, art. 77.",
    relatedArticleIds: [],
    tags: ["taxa", "poder de policia", "servico publico"],
    alternatives: [
      { id: "a", text: "Valorizacao imobiliaria decorrente de obra publica." },
      { id: "b", text: "Exercicio do poder de policia ou utilizacao de servico publico especifico e divisivel.", correct: true },
      { id: "c", text: "Qualquer despesa de custeio do Estado." },
      { id: "d", text: "Apenas da utilizacao de servicos essenciais como agua e esgoto." }
    ]
  }),
  defineQuestion({
    id: "q-trib-013",
    subjectId: "tributario",
    themeId: "prescricao-tributaria",
    examId: "oab-34",
    year: 2021,
    questionNumber: 13,
    difficulty: "medium",
    statement: "A prescricao tributaria se interrompe com:",
    explanation: "O art. 174, paragrafo unico, CTN: o despacho do juiz que ordenar a citacao em execucao fiscal interrompe a prescricao, assim como o protesto judicial ou qualquer ato judicial que constitua em mora o devedor.",
    support: "CTN, art. 174, paragrafo unico.",
    relatedArticleIds: [],
    tags: ["prescricao tributaria", "interrupcao", "execucao fiscal"],
    alternatives: [
      { id: "a", text: "O simples ajuizamento da execucao fiscal, antes da citacao." },
      { id: "b", text: "O despacho do juiz que ordenar a citacao em execucao fiscal.", correct: true },
      { id: "c", text: "A inscricao do credito em divida ativa." },
      { id: "d", text: "A notificacao administrativa do devedor." }
    ]
  }),
  defineQuestion({
    id: "q-trib-014",
    subjectId: "tributario",
    themeId: "obrigacao-tributaria",
    examId: "oab-35",
    year: 2022,
    questionNumber: 14,
    difficulty: "hard",
    statement: "A responsabilidade tributaria por transferencia dos socios em dissolucao de sociedade ocorre:",
    explanation: "O art. 134, VII, CTN: os socios respondem nos atos em que intervierem ou pelas omissoes de que forem responsaveis nos casos de liquidacao de sociedade de pessoas.",
    support: "CTN, art. 134, VII; art. 135.",
    relatedArticleIds: [],
    tags: ["responsabilidade tributaria", "socios", "dissolucao"],
    alternatives: [
      { id: "a", text: "Em qualquer caso de encerramento de atividade da pessoa juridica." },
      { id: "b", text: "Nos atos em que intervierem ou pelas omissoes de que forem responsaveis em dissolucao de sociedade de pessoas.", correct: true },
      { id: "c", text: "Apenas quando houver fraude comprovada na dissolucao." },
      { id: "d", text: "Somente para os socios administradores que praticaram atos com excesso de poderes." }
    ]
  }),
  defineQuestion({
    id: "q-trib-015",
    subjectId: "tributario",
    themeId: "principios-tributarios",
    examId: "oab-36",
    year: 2022,
    questionNumber: 15,
    difficulty: "medium",
    statement: "O principio da nao-cumulatividade do ICMS determina que:",
    explanation: "O art. 155, par. 2o, I, CF: o ICMS sera nao-cumulativo, compensando-se o que for devido em cada operacao com o montante cobrado nas anteriores.",
    support: "CF/88, art. 155, par. 2o, I.",
    relatedArticleIds: [],
    tags: ["nao-cumulatividade", "ICMS", "compensacao"],
    alternatives: [
      { id: "a", text: "O ICMS incide apenas uma vez na cadeia de producao e circulacao." },
      { id: "b", text: "O ICMS devido em cada operacao pode ser compensado com o montante cobrado nas operacoes anteriores.", correct: true },
      { id: "c", text: "O ICMS e calculado apenas sobre o valor agregado em cada etapa." },
      { id: "d", text: "O ICMS nao incide sobre operacoes interestaduais." }
    ]
  }),
  defineQuestion({
    id: "q-trib-016",
    subjectId: "tributario",
    themeId: "lancamento",
    examId: "oab-37",
    year: 2023,
    questionNumber: 16,
    difficulty: "medium",
    statement: "O lancamento de oficio e efetuado pela autoridade administrativa quando:",
    explanation: "O art. 149 CTN lista as hipoteses de lancamento de oficio, entre elas: quando o contribuinte nao cumprir a obrigacao de declarar, ou quando a declaracao for inexata.",
    support: "CTN, art. 149.",
    relatedArticleIds: [],
    tags: ["lancamento de oficio", "declaracao inexata"],
    alternatives: [
      { id: "a", text: "O contribuinte solicitar a revisao do lancamento anterior." },
      { id: "b", text: "O contribuinte nao cumprir a obrigacao de declarar ou a declaracao for inexata.", correct: true },
      { id: "c", text: "For o primeiro lancamento de um novo tributo criado por lei." },
      { id: "d", text: "Houver acordo entre o fisco e o contribuinte." }
    ]
  }),
  defineQuestion({
    id: "q-trib-017",
    subjectId: "tributario",
    themeId: "espécies-tributarias",
    examId: "oab-38",
    year: 2023,
    questionNumber: 17,
    difficulty: "hard",
    statement: "Os emprestimos compulsorios somente podem ser instituidos por:",
    explanation: "O art. 148 CF: os emprestimos compulsorios so podem ser instituidos por lei complementar, para despesas extraordinarias decorrentes de calamidade publica, guerra externa ou iminencia, ou investimento publico urgente e de relevante interesse nacional.",
    support: "CF/88, art. 148.",
    relatedArticleIds: [],
    tags: ["emprestimo compulsorio", "lei complementar", "calamidade"],
    alternatives: [
      { id: "a", text: "Lei ordinaria federal, em caso de urgencia e emergencia." },
      { id: "b", text: "Lei complementar federal, para despesas extraordinarias ou investimento urgente de relevante interesse nacional.", correct: true },
      { id: "c", text: "Decreto presidencial, em caso de guerra ou calamidade." },
      { id: "d", text: "Medida provisoria, quando houver relevancia e urgencia." }
    ]
  }),
  defineQuestion({
    id: "q-trib-018",
    subjectId: "tributario",
    themeId: "imunidades-tributarias",
    examId: "oab-39",
    year: 2024,
    questionNumber: 18,
    difficulty: "hard",
    statement: "A imunidade sobre livros, jornais, periodicos e o papel destinado a sua impressao:",
    explanation: "O art. 150, VI, d, CF imuniza impostos sobre livros, jornais, periodicos e o papel destinado a sua impressao. Nao abrange outros insumos.",
    support: "CF/88, art. 150, VI, d.",
    relatedArticleIds: [],
    tags: ["imunidade", "livros", "papel", "impressao"],
    alternatives: [
      { id: "a", text: "Abrange todos os insumos de producao editorial, incluindo equipamentos graficos." },
      { id: "b", text: "Restringe-se a impostos sobre livros, jornais, periodicos e o papel destinado a sua impressao.", correct: true },
      { id: "c", text: "Inclui o servico de distribuicao de publicacoes." },
      { id: "d", text: "Alcanca qualquer bem ou servico relacionado a atividade editorial." }
    ]
  }),
  defineQuestion({
    id: "q-trib-019",
    subjectId: "tributario",
    themeId: "obrigacao-tributaria",
    examId: "oab-40",
    year: 2024,
    questionNumber: 19,
    difficulty: "medium",
    statement: "A solidariedade passiva tributaria ocorre quando:",
    explanation: "O art. 124 CTN: sao solidariamente obrigados as pessoas que tenham interesse comum na situacao que constitua o fato gerador e as designadas por lei.",
    support: "CTN, art. 124.",
    relatedArticleIds: [],
    tags: ["solidariedade", "fato gerador", "CTN"],
    alternatives: [
      { id: "a", text: "Dois contribuintes requerem o parcelamento do mesmo debito." },
      { id: "b", text: "As pessoas tenham interesse comum na situacao que constitua o fato gerador, ou quando a lei expressamente o determinar.", correct: true },
      { id: "c", text: "Um dos devedores realizar o pagamento parcial do tributo." },
      { id: "d", text: "Houver pluralidade de credores na relacao tributaria." }
    ]
  }),
  defineQuestion({
    id: "q-trib-020",
    subjectId: "tributario",
    themeId: "principios-tributarios",
    examId: "oab-41",
    year: 2025,
    questionNumber: 20,
    difficulty: "hard",
    statement: "O principio da capacidade contributiva determina que:",
    explanation: "O art. 145, par. 1o, CF: os impostos terao, sempre que possivel, carater pessoal e serao graduados segundo a capacidade economica do contribuinte.",
    support: "CF/88, art. 145, par. 1o.",
    relatedArticleIds: [],
    tags: ["capacidade contributiva", "impostos", "graduacao"],
    alternatives: [
      { id: "a", text: "Todos os contribuintes paguem a mesma aliquota, independentemente da renda." },
      { id: "b", text: "Os impostos sejam graduados, sempre que possivel, segundo a capacidade economica do contribuinte.", correct: true },
      { id: "c", text: "As taxas sejam calculadas proporcionalmente ao patrimonio do contribuinte." },
      { id: "d", text: "O Estado nao possa exigir tributo de quem nao tiver renda." }
    ]
  }),

  // ==================== TRABALHISTA (20) ====================
  defineQuestion({
    id: "q-trab-001",
    subjectId: "trabalhista",
    themeId: "contrato-trabalho",
    examId: "oab-36",
    year: 2022,
    questionNumber: 1,
    difficulty: "medium",
    statement: "O contrato de trabalho por prazo determinado pode ser celebrado por ate:",
    explanation: "O art. 445 CLT: o contrato por prazo determinado nao podera ser estipulado por mais de 2 anos, observada a regra de que so pode ser prorrogado uma vez.",
    support: "CLT, art. 445.",
    relatedArticleIds: [],
    tags: ["contrato por prazo determinado", "2 anos"],
    alternatives: [
      { id: "a", text: "6 meses, sem possibilidade de prorrogacao." },
      { id: "b", text: "2 anos, podendo ser prorrogado uma vez.", correct: true },
      { id: "c", text: "1 ano, prorrogavel por igual periodo." },
      { id: "d", text: "3 anos, desde que haja justificativa formal." }
    ]
  }),
  defineQuestion({
    id: "q-trab-002",
    subjectId: "trabalhista",
    themeId: "rescisao-contrato",
    examId: "oab-37",
    year: 2023,
    questionNumber: 2,
    difficulty: "hard",
    statement: "Na demissao sem justa causa, o empregado tem direito a:",
    explanation: "Na rescisao sem justa causa pelo empregador: aviso previo, FGTS com multa de 40%, ferias proporcionais + 1/3, 13o proporcional e saldo de salario.",
    support: "CLT, art. 477; CF/88, art. 7o, I e III.",
    relatedArticleIds: [],
    tags: ["rescisao sem justa causa", "FGTS", "aviso previo"],
    alternatives: [
      { id: "a", text: "Apenas saldo de salario e aviso previo." },
      { id: "b", text: "Aviso previo, multa de 40% do FGTS, ferias proporcionais com 1/3, 13o proporcional e saldo de salario.", correct: true },
      { id: "c", text: "Apenas FGTS e indenizacao compensatoria." },
      { id: "d", text: "Todos os direitos acima, acrescidos de indenizacao por dano moral automatica." }
    ]
  }),
  defineQuestion({
    id: "q-trab-003",
    subjectId: "trabalhista",
    themeId: "jornada-trabalho",
    examId: "oab-38",
    year: 2023,
    questionNumber: 3,
    difficulty: "medium",
    statement: "A jornada maxima de trabalho prevista na Constituicao Federal e de:",
    explanation: "O art. 7o, XIII, CF: duracao do trabalho normal nao superior a 8 horas diarias e 44 horas semanais.",
    support: "CF/88, art. 7o, XIII.",
    relatedArticleIds: [],
    tags: ["jornada de trabalho", "horas diarias", "horas semanais"],
    alternatives: [
      { id: "a", text: "6 horas diarias e 36 horas semanais." },
      { id: "b", text: "8 horas diarias e 44 horas semanais.", correct: true },
      { id: "c", text: "10 horas diarias e 50 horas semanais." },
      { id: "d", text: "8 horas diarias e 40 horas semanais." }
    ]
  }),
  defineQuestion({
    id: "q-trab-004",
    subjectId: "trabalhista",
    themeId: "ferias-licencas",
    examId: "oab-39",
    year: 2024,
    questionNumber: 4,
    difficulty: "easy",
    statement: "As ferias anuais remuneradas do empregado devem ser concedidas com acrescimo de:",
    explanation: "O art. 7o, XVII, CF e art. 142, par. 1o, CLT: as ferias serao acrescidas de pelo menos 1/3 do salario normal.",
    support: "CF/88, art. 7o, XVII; CLT, art. 142.",
    relatedArticleIds: [],
    tags: ["ferias", "1/3", "salario"],
    alternatives: [
      { id: "a", text: "10% do salario normal." },
      { id: "b", text: "1/3 do salario normal.", correct: true },
      { id: "c", text: "50% do salario normal." },
      { id: "d", text: "1/4 do salario normal." }
    ]
  }),
  defineQuestion({
    id: "q-trab-005",
    subjectId: "trabalhista",
    themeId: "estabilidade",
    examId: "oab-40",
    year: 2024,
    questionNumber: 5,
    difficulty: "medium",
    statement: "A gestante tem estabilidade no emprego desde:",
    explanation: "O art. 10, II, b, ADCT e Sumula 244 TST: a gestante tem estabilidade desde a confirmacao da gravidez ate 5 meses apos o parto, mesmo que o empregador nao soubesse da gravidez.",
    support: "ADCT, art. 10, II, b; Sumula 244 TST.",
    relatedArticleIds: [],
    tags: ["estabilidade gestante", "gravidez", "ADCT"],
    alternatives: [
      { id: "a", text: "O momento em que comunicar ao empregador a gravidez." },
      { id: "b", text: "A confirmacao da gravidez ate 5 meses apos o parto, independentemente de comunicacao ao empregador.", correct: true },
      { id: "c", text: "O inicio da licenca-maternidade." },
      { id: "d", text: "O quinto mes de gestacao." }
    ]
  }),
  defineQuestion({
    id: "q-trab-006",
    subjectId: "trabalhista",
    themeId: "processo-trabalho",
    examId: "oab-41",
    year: 2025,
    questionNumber: 6,
    difficulty: "hard",
    statement: "Na reclamacao trabalhista, o prazo prescricional para ajuizar acao trabalhista durante o vinculo empregaticio e:",
    explanation: "O art. 7o, XXIX, CF: o prazo prescricional e de 5 anos durante o vinculo e de 2 anos apos a extincao do contrato.",
    support: "CF/88, art. 7o, XXIX.",
    relatedArticleIds: [],
    tags: ["prescricao trabalhista", "5 anos", "2 anos"],
    alternatives: [
      { id: "a", text: "2 anos durante o vinculo e 5 anos apos o seu termino." },
      { id: "b", text: "5 anos durante o vinculo e 2 anos apos a sua extincao.", correct: true },
      { id: "c", text: "3 anos durante e apos o vinculo." },
      { id: "d", text: "10 anos durante o vinculo, imprescritivel apos." }
    ]
  }),
  defineQuestion({
    id: "q-trab-007",
    subjectId: "trabalhista",
    themeId: "sindicatos",
    examId: "oab-42",
    year: 2025,
    questionNumber: 7,
    difficulty: "medium",
    statement: "A contribuicao sindical compulsoria, apos a Reforma Trabalhista (Lei 13.467/2017):",
    explanation: "A Lei 13.467/2017 tornou a contribuicao sindical facultativa, dependendo de autorizacao expressa e individual do trabalhador.",
    support: "CLT, art. 578; Lei 13.467/2017.",
    relatedArticleIds: [],
    tags: ["contribuicao sindical", "facultativa", "Reforma Trabalhista"],
    alternatives: [
      { id: "a", text: "Continua sendo descontada automaticamente de todos os trabalhadores." },
      { id: "b", text: "Passou a ser facultativa, dependendo de autorizacao previa e expressa do trabalhador.", correct: true },
      { id: "c", text: "Foi extinta completamente, nao podendo mais ser cobrada." },
      { id: "d", text: "Aplica-se apenas a trabalhadores sindicalizados." }
    ]
  }),
  defineQuestion({
    id: "q-trab-008",
    subjectId: "trabalhista",
    themeId: "contrato-trabalho",
    examId: "oab-43",
    year: 2025,
    questionNumber: 8,
    difficulty: "hard",
    statement: "O trabalho da mulher pode ser proibido ou restringido por razoes de:",
    explanation: "Apos a Lei 13.467/2017 (Reforma Trabalhista), as restricoes ao trabalho da mulher em locais insalubres foram flexibilizadas. A CF proibe distincao por motivo de sexo (art. 7o, XXX).",
    support: "CF/88, art. 7o, XXX; CLT, art. 394-A.",
    relatedArticleIds: [],
    tags: ["trabalho da mulher", "protecao", "saude e segurança"],
    alternatives: [
      { id: "a", text: "Discriminacao de sexo, o que e constitucionalmente vedado." },
      { id: "b", text: "Protecao a saude e seguranca em casos especificos como gravidez e amamentacao.", correct: true },
      { id: "c", text: "Preferencia do empregador por trabalhadores masculinos em certas funcoes." },
      { id: "d", text: "Exigencia de maiores custos com a contratacao feminina." }
    ]
  }),
  defineQuestion({
    id: "q-trab-009",
    subjectId: "trabalhista",
    themeId: "rescisao-contrato",
    examId: "oab-30",
    year: 2019,
    questionNumber: 9,
    difficulty: "medium",
    statement: "O empregado que pede demissao voluntariamente:",
    explanation: "Quando o empregado pede demissao, ele nao tem direito a multa de 40% do FGTS nem ao seguro-desemprego, mas tem direito ao saldo de salario, ferias vencidas e proporcionais, 13o proporcional e aviso previo cumprido.",
    support: "CLT, art. 480; art. 477.",
    relatedArticleIds: [],
    tags: ["pedido de demissao", "FGTS", "seguro-desemprego"],
    alternatives: [
      { id: "a", text: "Recebe todos os direitos rescisórios, inclusive a multa de 40% do FGTS." },
      { id: "b", text: "Nao tem direito a multa de 40% do FGTS nem ao seguro-desemprego.", correct: true },
      { id: "c", text: "Tem direito ao seguro-desemprego se trabalhou mais de 12 meses." },
      { id: "d", text: "Perde todos os direitos, incluindo saldo de salario." }
    ]
  }),
  defineQuestion({
    id: "q-trab-010",
    subjectId: "trabalhista",
    themeId: "jornada-trabalho",
    examId: "oab-31",
    year: 2020,
    questionNumber: 10,
    difficulty: "hard",
    statement: "A hora extra habitual, nos termos da Sumula 291 do TST:",
    explanation: "A Sumula 291 TST: a supressao total ou parcial, pelo empregador, do servico suplementar prestado com habitualidade, durante pelo menos 1 ano, assegura ao empregado o direito a indenizacao.",
    support: "TST, Sumula 291.",
    relatedArticleIds: [],
    tags: ["hora extra", "habitualidade", "Sumula 291 TST"],
    alternatives: [
      { id: "a", text: "Nunca gera direito adquirido, podendo ser suprimida a qualquer momento." },
      { id: "b", text: "Se suprimida apos habitualidade de pelo menos 1 ano, assegura indenizacao ao empregado.", correct: true },
      { id: "c", text: "Integra o salario para todos os fins legais automaticamente." },
      { id: "d", text: "Nao pode ser suprimida, mesmo em acordo coletivo." }
    ]
  }),
  defineQuestion({
    id: "q-trab-011",
    subjectId: "trabalhista",
    themeId: "contrato-trabalho",
    examId: "oab-32",
    year: 2020,
    questionNumber: 11,
    difficulty: "medium",
    statement: "O periodo de experiencia:",
    explanation: "O art. 445, paragrafo unico, CLT: o contrato de experiencia nao pode exceder 90 dias e pode ser prorrogado uma vez.",
    support: "CLT, art. 445, paragrafo unico.",
    relatedArticleIds: [],
    tags: ["periodo de experiencia", "90 dias", "prorrogacao"],
    alternatives: [
      { id: "a", text: "Pode durar ate 120 dias, sem possibilidade de prorrogacao." },
      { id: "b", text: "Nao pode exceder 90 dias, podendo ser prorrogado uma unica vez dentro desse prazo.", correct: true },
      { id: "c", text: "E de 60 dias, prorrogavel por mais 60 dias." },
      { id: "d", text: "Varia de acordo com convencao coletiva, sem limite legal." }
    ]
  }),
  defineQuestion({
    id: "q-trab-012",
    subjectId: "trabalhista",
    themeId: "ferias-licencas",
    examId: "oab-33",
    year: 2021,
    questionNumber: 12,
    difficulty: "medium",
    statement: "O empregado que faltar ao servico mais de 32 dias no periodo aquisitivo tem direito a ferias de:",
    explanation: "O art. 130, IV, CLT: mais de 32 faltas no periodo aquisitivo = direito a 12 dias de ferias.",
    support: "CLT, art. 130.",
    relatedArticleIds: [],
    tags: ["ferias", "faltas", "periodo aquisitivo"],
    alternatives: [
      { id: "a", text: "30 dias." },
      { id: "b", text: "24 dias." },
      { id: "c", text: "18 dias." },
      { id: "d", text: "12 dias.", correct: true }
    ]
  }),
  defineQuestion({
    id: "q-trab-013",
    subjectId: "trabalhista",
    themeId: "estabilidade",
    examId: "oab-34",
    year: 2021,
    questionNumber: 13,
    difficulty: "hard",
    statement: "O dirigente sindical tem garantia de emprego:",
    explanation: "O art. 8o, VIII, CF e art. 543, par. 3o, CLT: o dirigente sindical tem estabilidade desde o registro da candidatura ate 1 ano apos o final do mandato.",
    support: "CF/88, art. 8o, VIII; CLT, art. 543.",
    relatedArticleIds: [],
    tags: ["dirigente sindical", "estabilidade", "mandato"],
    alternatives: [
      { id: "a", text: "Apenas durante o exercicio efetivo do mandato sindical." },
      { id: "b", text: "Desde o registro da candidatura ate 1 ano apos o termino do mandato.", correct: true },
      { id: "c", text: "Por tempo indeterminado, enquanto for membro do sindicato." },
      { id: "d", text: "Apenas nos 90 dias anteriores as eleicoes sindicais." }
    ]
  }),
  defineQuestion({
    id: "q-trab-014",
    subjectId: "trabalhista",
    themeId: "processo-trabalho",
    examId: "oab-35",
    year: 2022,
    questionNumber: 14,
    difficulty: "medium",
    statement: "A competencia da Justica do Trabalho abrange:",
    explanation: "O art. 114 CF, com a redacao da EC 45/2004: a Justica do Trabalho e competente para processar e julgar as acoes oriundas da relacao de trabalho, incluindo entes de direito publico externo.",
    support: "CF/88, art. 114.",
    relatedArticleIds: [],
    tags: ["competencia Justica do Trabalho", "relacao de trabalho"],
    alternatives: [
      { id: "a", text: "Apenas litigios entre empregados e empregadores regidos pela CLT." },
      { id: "b", text: "As acoes oriundas da relacao de trabalho, incluindo contratos de trabalho avulso e de emprego publico estatutario." },
      { id: "c", text: "Acoes oriundas da relacao de trabalho e da relacao de emprego, excluindo os servidores publicos.", correct: true },
      { id: "d", text: "Apenas conflitos coletivos entre sindicatos e empregadores." }
    ]
  }),
  defineQuestion({
    id: "q-trab-015",
    subjectId: "trabalhista",
    themeId: "sindicatos",
    examId: "oab-36",
    year: 2022,
    questionNumber: 15,
    difficulty: "hard",
    statement: "A negociacao coletiva, conforme o art. 611-A da CLT (Reforma Trabalhista), pode prevalecer sobre a lei quando:",
    explanation: "O art. 611-A CLT (inserido pela Lei 13.467/2017): a convencao coletiva e o acordo coletivo de trabalho prevalecem sobre a lei quando, entre outros, tratarem de jornada, banco de horas, intervalo intrajornada, etc.",
    support: "CLT, art. 611-A; Lei 13.467/2017.",
    relatedArticleIds: [],
    tags: ["negociacao coletiva", "Reforma Trabalhista", "prevalencia"],
    alternatives: [
      { id: "a", text: "O sindicato e o empregador acordarem sobre qualquer materia." },
      { id: "b", text: "Tratar das materias previstas no art. 611-A CLT, como jornada e banco de horas.", correct: true },
      { id: "c", text: "Houver autorizacao judicial previa para a negociacao." },
      { id: "d", text: "O sindicato representar mais de 50% da categoria." }
    ]
  }),
  defineQuestion({
    id: "q-trab-016",
    subjectId: "trabalhista",
    themeId: "rescisao-contrato",
    examId: "oab-37",
    year: 2023,
    questionNumber: 16,
    difficulty: "hard",
    statement: "O aviso previo proporcional ao tempo de servico, conforme a Lei 12.506/2011, e de:",
    explanation: "A Lei 12.506/2011: o aviso previo e de 30 dias para empregados com ate 1 ano de servico, acrescido de 3 dias por ano adicional, ate o maximo de 60 dias, totalizando 90 dias.",
    support: "Lei 12.506/2011.",
    relatedArticleIds: [],
    tags: ["aviso previo", "proporcional", "Lei 12.506"],
    alternatives: [
      { id: "a", text: "30 dias para qualquer tempo de servico." },
      { id: "b", text: "30 dias para ate 1 ano, acrescido de 3 dias por ano adicional, ate o maximo de 90 dias.", correct: true },
      { id: "c", text: "60 dias fixos para empregados com mais de 5 anos." },
      { id: "d", text: "15 dias para contratos de ate 6 meses." }
    ]
  }),
  defineQuestion({
    id: "q-trab-017",
    subjectId: "trabalhista",
    themeId: "jornada-trabalho",
    examId: "oab-38",
    year: 2023,
    questionNumber: 17,
    difficulty: "medium",
    statement: "O trabalho em horas extras deve ser remunerado com adicional de, no minimo:",
    explanation: "O art. 7o, XVI, CF: remuneracao do servico extraordinario superior, no minimo, em cinquenta por cento a do normal.",
    support: "CF/88, art. 7o, XVI.",
    relatedArticleIds: [],
    tags: ["hora extra", "adicional", "50%"],
    alternatives: [
      { id: "a", text: "20% sobre o valor da hora normal." },
      { id: "b", text: "50% sobre o valor da hora normal.", correct: true },
      { id: "c", text: "100% sobre o valor da hora normal." },
      { id: "d", text: "25% sobre o valor da hora normal." }
    ]
  }),
  defineQuestion({
    id: "q-trab-018",
    subjectId: "trabalhista",
    themeId: "contrato-trabalho",
    examId: "oab-39",
    year: 2024,
    questionNumber: 18,
    difficulty: "hard",
    statement: "O teletrabalho, apos a Reforma Trabalhista, caracteriza-se pela:",
    explanation: "O art. 75-B CLT: teletrabalho e a prestacao de servicos preponderantemente fora das dependencias do empregador, com utilizacao de tecnologias de informacao e comunicacao.",
    support: "CLT, art. 75-B; Lei 13.467/2017.",
    relatedArticleIds: [],
    tags: ["teletrabalho", "fora das dependencias", "TIC"],
    alternatives: [
      { id: "a", text: "Prestacao de servicos apenas de forma intermitente." },
      { id: "b", text: "Prestacao de servicos preponderantemente fora das dependencias do empregador, com uso de TIC.", correct: true },
      { id: "c", text: "Trabalho realizado exclusivamente em casa do empregado." },
      { id: "d", text: "Contrato de servicos autonomos sem vinculo empregaticio." }
    ]
  }),
  defineQuestion({
    id: "q-trab-019",
    subjectId: "trabalhista",
    themeId: "ferias-licencas",
    examId: "oab-40",
    year: 2024,
    questionNumber: 19,
    difficulty: "medium",
    statement: "A licenca-maternidade tem duracao de:",
    explanation: "O art. 7o, XVIII, CF e art. 392 CLT: a licenca-maternidade e de 120 dias. Para empresas participantes do Programa Empresa Cidada, pode ser ampliada para 180 dias.",
    support: "CF/88, art. 7o, XVIII; CLT, art. 392.",
    relatedArticleIds: [],
    tags: ["licenca-maternidade", "120 dias", "Empresa Cidada"],
    alternatives: [
      { id: "a", text: "60 dias." },
      { id: "b", text: "90 dias." },
      { id: "c", text: "120 dias, podendo ser ampliada para 180 dias.", correct: true },
      { id: "d", text: "180 dias em qualquer hipotese." }
    ]
  }),
  defineQuestion({
    id: "q-trab-020",
    subjectId: "trabalhista",
    themeId: "rescisao-contrato",
    examId: "oab-41",
    year: 2025,
    questionNumber: 20,
    difficulty: "hard",
    statement: "O FGTS foi instituido pela Lei 8.036/1990 e o empregador deve depositar mensalmente:",
    explanation: "O art. 15 da Lei 8.036/1990: o empregador deposita mensalmente 8% da remuneracao paga ao empregado (2% para aprendiz).",
    support: "Lei 8.036/1990, art. 15.",
    relatedArticleIds: [],
    tags: ["FGTS", "deposito", "8%"],
    alternatives: [
      { id: "a", text: "5% da remuneracao." },
      { id: "b", text: "8% da remuneracao.", correct: true },
      { id: "c", text: "10% da remuneracao." },
      { id: "d", text: "11% da remuneracao." }
    ]
  }),

  // ==================== EMPRESARIAL (20) ====================
  defineQuestion({
    id: "q-emp-001",
    subjectId: "empresarial",
    themeId: "sociedades",
    examId: "oab-36",
    year: 2022,
    questionNumber: 1,
    difficulty: "medium",
    statement: "A sociedade limitada caracteriza-se, quanto a responsabilidade dos socios, pela:",
    explanation: "No art. 1052 CC/2002: na sociedade limitada, a responsabilidade de cada socio e restrita ao valor de suas quotas, mas todos respondem solidariamente pela integralizacao do capital.",
    support: "CC/2002, art. 1052.",
    relatedArticleIds: [],
    tags: ["sociedade limitada", "responsabilidade dos socios", "quotas"],
    alternatives: [
      { id: "a", text: "Responsabilidade ilimitada de todos os socios pelas dividas sociais." },
      { id: "b", text: "Responsabilidade restrita ao valor das quotas, com solidariedade pela integralizacao do capital.", correct: true },
      { id: "c", text: "Responsabilidade ilimitada apenas do socio administrador." },
      { id: "d", text: "Ausencia de qualquer responsabilidade pessoal dos socios." }
    ]
  }),
  defineQuestion({
    id: "q-emp-002",
    subjectId: "empresarial",
    themeId: "titulos-credito",
    examId: "oab-37",
    year: 2023,
    questionNumber: 2,
    difficulty: "hard",
    statement: "O endosso em branco em titulos de credito:",
    explanation: "O endosso em branco nao identifica o endossatario, transformando o titulo ao portador. O portador pode preenche-lo com seu nome ou de terceiro.",
    support: "CC/2002, art. 914; Lei 7.357/85 (cheque), art. 17.",
    relatedArticleIds: [],
    tags: ["endosso em branco", "titulo ao portador"],
    alternatives: [
      { id: "a", text: "Invalida o titulo de credito." },
      { id: "b", text: "Transforma o titulo, que passa a circular como ao portador.", correct: true },
      { id: "c", text: "Vincula o endossante como devedor principal." },
      { id: "d", text: "Exige homologacao judicial para produzir efeitos." }
    ]
  }),
  defineQuestion({
    id: "q-emp-003",
    subjectId: "empresarial",
    themeId: "falencia-recuperacao",
    examId: "oab-38",
    year: 2023,
    questionNumber: 3,
    difficulty: "hard",
    statement: "O pedido de recuperacao judicial pode ser formulado pelo devedor que comprove o exercicio regular de atividades por mais de:",
    explanation: "O art. 48 da Lei 11.101/2005 exige que o devedor exerça regularmente suas atividades ha mais de 2 anos.",
    support: "Lei 11.101/2005, art. 48.",
    relatedArticleIds: [],
    tags: ["recuperacao judicial", "2 anos", "devedor"],
    alternatives: [
      { id: "a", text: "6 meses." },
      { id: "b", text: "1 ano." },
      { id: "c", text: "2 anos.", correct: true },
      { id: "d", text: "5 anos." }
    ]
  }),
  defineQuestion({
    id: "q-emp-004",
    subjectId: "empresarial",
    themeId: "estabelecimento",
    examId: "oab-39",
    year: 2024,
    questionNumber: 4,
    difficulty: "medium",
    statement: "O estabelecimento comercial, como universalidade de fato, pode ser objeto de:",
    explanation: "O art. 1143 CC/2002: o estabelecimento pode ser objeto unitario de direitos e de negocios juridicos, translativos ou constitutivos, que sejam compativeis com sua natureza.",
    support: "CC/2002, art. 1143.",
    relatedArticleIds: [],
    tags: ["estabelecimento comercial", "trespasse", "universalidade"],
    alternatives: [
      { id: "a", text: "Apenas locacao, sendo vedada a alienacao." },
      { id: "b", text: "Negocios juridicos translativos ou constitutivos, como trespasse ou arrendamento.", correct: true },
      { id: "c", text: "Apenas penhora em execucao fiscal." },
      { id: "d", text: "Transferencia exclusivamente por cessao de quotas da sociedade." }
    ]
  }),
  defineQuestion({
    id: "q-emp-005",
    subjectId: "empresarial",
    themeId: "sociedades",
    examId: "oab-40",
    year: 2024,
    questionNumber: 5,
    difficulty: "hard",
    statement: "Na sociedade anonima, a responsabilidade do acionista e limitada ao:",
    explanation: "Na S.A. (Lei 6.404/1976, art. 1o): a responsabilidade dos acionistas e limitada ao preco de emissao das acoes subscritas ou adquiridas.",
    support: "Lei 6.404/1976, art. 1o.",
    relatedArticleIds: [],
    tags: ["sociedade anonima", "responsabilidade", "acionista"],
    alternatives: [
      { id: "a", text: "Valor nominal das acoes emitidas." },
      { id: "b", text: "Preco de emissao das acoes subscritas ou adquiridas.", correct: true },
      { id: "c", text: "Patrimonio total da companhia." },
      { id: "d", text: "Valor de mercado das acoes no momento da liquidacao." }
    ]
  }),
  defineQuestion({
    id: "q-emp-006",
    subjectId: "empresarial",
    themeId: "titulos-credito",
    examId: "oab-41",
    year: 2025,
    questionNumber: 6,
    difficulty: "medium",
    statement: "O protesto cambiario serve para:",
    explanation: "O protesto faz prova do descumprimento da obrigacao cambial e e requisito para o exercicio de direito de regresso contra endossantes e avalistas.",
    support: "Lei 9.492/1997; Lei 7.357/85.",
    relatedArticleIds: [],
    tags: ["protesto", "direito de regresso", "endossante"],
    alternatives: [
      { id: "a", text: "Corrigir defeitos formais do titulo." },
      { id: "b", text: "Provar o descumprimento e conservar o direito de regresso contra endossantes e avalistas.", correct: true },
      { id: "c", text: "Substituir o titulo perdido ou destruido." },
      { id: "d", text: "Interromper a prescricao da pretensao executiva." }
    ]
  }),
  defineQuestion({
    id: "q-emp-007",
    subjectId: "empresarial",
    themeId: "falencia-recuperacao",
    examId: "oab-42",
    year: 2025,
    questionNumber: 7,
    difficulty: "hard",
    statement: "Na falencia, os credores com garantia real:",
    explanation: "O art. 83 da Lei 11.101/2005: na classificacao dos creditos na falencia, os credores com garantia real ficam em terceiro lugar, apos creditos trabalhistas (ate 150 salarios minimos) e creditos com privilégio especial.",
    support: "Lei 11.101/2005, art. 83.",
    relatedArticleIds: [],
    tags: ["falencia", "credores com garantia real", "classificacao creditos"],
    alternatives: [
      { id: "a", text: "Sao pagos antes de qualquer outro credor." },
      { id: "b", text: "Sao pagos apos os creditos trabalhistas ate 150 s.m. e os creditos com privilegio especial.", correct: true },
      { id: "c", text: "Sao equiparados aos credores quirografarios." },
      { id: "d", text: "Nao participam do rateio da massa falida." }
    ]
  }),
  defineQuestion({
    id: "q-emp-008",
    subjectId: "empresarial",
    themeId: "sociedades",
    examId: "oab-43",
    year: 2025,
    questionNumber: 8,
    difficulty: "medium",
    statement: "O contrato social da sociedade limitada deve ser registrado:",
    explanation: "O art. 1150 CC/2002: o empresario e a sociedade empresaria vinculam-se ao Registro Publico de Empresas Mercantis a cargo das Juntas Comerciais.",
    support: "CC/2002, art. 1150; art. 1054.",
    relatedArticleIds: [],
    tags: ["registro", "Junta Comercial", "sociedade limitada"],
    alternatives: [
      { id: "a", text: "No Cartorio de Registro Civil das Pessoas Juridicas." },
      { id: "b", text: "Na Junta Comercial do Estado.", correct: true },
      { id: "c", text: "No Cartorio de Notas com escritura publica." },
      { id: "d", text: "No Ministerio da Fazenda." }
    ]
  }),
  defineQuestion({
    id: "q-emp-009",
    subjectId: "empresarial",
    themeId: "titulos-credito",
    examId: "oab-30",
    year: 2019,
    questionNumber: 9,
    difficulty: "hard",
    statement: "O aval difere da fianca porque:",
    explanation: "O aval e obrigacao cambial autonoma, solidaria e nao subsidiaria. A fianca e obrigacao civil acessoria, podendo ser beneficio de ordem.",
    support: "CC/2002, art. 827; art. 897.",
    relatedArticleIds: [],
    tags: ["aval", "fianca", "autonomia", "beneficio de ordem"],
    alternatives: [
      { id: "a", text: "O aval e subsidiario e a fianca e solidaria." },
      { id: "b", text: "O aval e obrigacao autonoma solidaria; a fianca e acessoria e pode ter beneficio de ordem.", correct: true },
      { id: "c", text: "O aval se aplica a contratos civis; a fianca apenas a titulos cambiarios." },
      { id: "d", text: "O aval so pode ser prestado por pessoa fisica." }
    ]
  }),
  defineQuestion({
    id: "q-emp-010",
    subjectId: "empresarial",
    themeId: "falencia-recuperacao",
    examId: "oab-31",
    year: 2020,
    questionNumber: 10,
    difficulty: "medium",
    statement: "A recuperacao extrajudicial pode ser homologada pelo juiz quando:",
    explanation: "O art. 163 e 162 da Lei 11.101/2005: a recuperacao extrajudicial e homologada pelo juiz quando o devedor apresentar plano assinado por credores que representem mais de 3/5 do total dos creditos sujeitos.",
    support: "Lei 11.101/2005, art. 162; art. 163.",
    relatedArticleIds: [],
    tags: ["recuperacao extrajudicial", "homologacao", "3/5"],
    alternatives: [
      { id: "a", text: "Qualquer credor requerer." },
      { id: "b", text: "O devedor apresentar plano assinado por credores representando mais de 3/5 do total dos creditos sujeitos.", correct: true },
      { id: "c", text: "Todos os credores concordarem com o plano." },
      { id: "d", text: "O Ministerio Publico opinar favoravelmente." }
    ]
  }),
  defineQuestion({
    id: "q-emp-011",
    subjectId: "empresarial",
    themeId: "estabelecimento",
    examId: "oab-32",
    year: 2020,
    questionNumber: 11,
    difficulty: "medium",
    statement: "No trespasse de estabelecimento, o adquirente:",
    explanation: "O art. 1146 CC/2002: o adquirente do estabelecimento responde pelo pagamento dos debitos anteriores regularmente contabilizados, ficando o alienante solidariamente responsavel pelo prazo de 1 ano.",
    support: "CC/2002, art. 1146.",
    relatedArticleIds: [],
    tags: ["trespasse", "debitos", "responsabilidade"],
    alternatives: [
      { id: "a", text: "Nao responde por nenhum debito anterior ao trespasse." },
      { id: "b", text: "Responde pelos debitos anteriores regularmente contabilizados, com solidariedade do alienante por 1 ano.", correct: true },
      { id: "c", text: "Responde apenas pelos debitos trabalhistas anteriores." },
      { id: "d", text: "Responde solidariamente com o alienante por todos os debitos, sem limite temporal." }
    ]
  }),
  defineQuestion({
    id: "q-emp-012",
    subjectId: "empresarial",
    themeId: "sociedades",
    examId: "oab-33",
    year: 2021,
    questionNumber: 12,
    difficulty: "hard",
    statement: "Na sociedade em nome coletivo:",
    explanation: "O art. 1039 CC/2002: somente pessoas fisicas podem tomar parte na sociedade em nome coletivo, e os socios respondem solidaria e ilimitadamente pelas obrigacoes sociais.",
    support: "CC/2002, art. 1039.",
    relatedArticleIds: [],
    tags: ["sociedade em nome coletivo", "responsabilidade ilimitada"],
    alternatives: [
      { id: "a", text: "A responsabilidade dos socios e limitada ao capital social." },
      { id: "b", text: "Somente pessoas fisicas podem ser socias, com responsabilidade solidaria e ilimitada.", correct: true },
      { id: "c", text: "Podem participar pessoas fisicas e juridicas." },
      { id: "d", text: "Apenas o socio administrador responde ilimitadamente." }
    ]
  }),
  defineQuestion({
    id: "q-emp-013",
    subjectId: "empresarial",
    themeId: "titulos-credito",
    examId: "oab-34",
    year: 2021,
    questionNumber: 13,
    difficulty: "medium",
    statement: "A duplicata mercantil pode ser sacada:",
    explanation: "A Lei 5.474/1968 (Lei das Duplicatas): a duplicata e titulo causal, sacado pelo vendedor com base em fatura ou nota fiscal, representando credito decorrente de compra e venda mercantil ou prestacao de servicos.",
    support: "Lei 5.474/1968.",
    relatedArticleIds: [],
    tags: ["duplicata", "causa", "compra e venda mercantil"],
    alternatives: [
      { id: "a", text: "Por qualquer pessoa, para documentar qualquer negocio juridico." },
      { id: "b", text: "Pelo vendedor para representar credito de compra e venda mercantil ou prestacao de servicos.", correct: true },
      { id: "c", text: "Apenas por instituicoes financeiras." },
      { id: "d", text: "Sem necessidade de causa para sua emissao." }
    ]
  }),
  defineQuestion({
    id: "q-emp-014",
    subjectId: "empresarial",
    themeId: "falencia-recuperacao",
    examId: "oab-35",
    year: 2022,
    questionNumber: 14,
    difficulty: "hard",
    statement: "O pedido de falencia pelo credor exige que o devedor seja empresario e que o credito nao pago seja de valor superior a:",
    explanation: "O art. 94 da Lei 11.101/2005: o credor pode requerer a falencia do devedor que nao paga obrigacao liquida no vencimento, superior a 40 salarios minimos.",
    support: "Lei 11.101/2005, art. 94, I.",
    relatedArticleIds: [],
    tags: ["falencia", "40 salarios minimos", "credor"],
    alternatives: [
      { id: "a", text: "10 salarios minimos." },
      { id: "b", text: "40 salarios minimos.", correct: true },
      { id: "c", text: "100 salarios minimos." },
      { id: "d", text: "1000 salarios minimos." }
    ]
  }),
  defineQuestion({
    id: "q-emp-015",
    subjectId: "empresarial",
    themeId: "sociedades",
    examId: "oab-36",
    year: 2022,
    questionNumber: 15,
    difficulty: "medium",
    statement: "A transformacao de sociedade e a operacao pela qual:",
    explanation: "O art. 1113 CC/2002: a transformacao e a operacao pela qual a sociedade passa, independentemente de dissolucao e liquidacao, de um tipo para outro.",
    support: "CC/2002, art. 1113.",
    relatedArticleIds: [],
    tags: ["transformacao", "tipo societario"],
    alternatives: [
      { id: "a", text: "Uma sociedade absorve outra, extinguindo-se a absorvida." },
      { id: "b", text: "A sociedade muda de tipo societario, sem dissolucao nem liquidacao.", correct: true },
      { id: "c", text: "Duas ou mais sociedades se unem para formar uma nova." },
      { id: "d", text: "A sociedade transfere parte do patrimonio para uma nova sociedade." }
    ]
  }),
  defineQuestion({
    id: "q-emp-016",
    subjectId: "empresarial",
    themeId: "titulos-credito",
    examId: "oab-37",
    year: 2023,
    questionNumber: 16,
    difficulty: "hard",
    statement: "A prescricao da pretensao executiva do cheque se conta a partir de:",
    explanation: "A Lei 7.357/1985 (Lei do Cheque), art. 59: o cheque prescreve em 6 meses contados do termino do prazo de apresentacao (30 dias para praça da emissao; 60 dias para praças diferentes).",
    support: "Lei 7.357/1985, art. 59.",
    relatedArticleIds: [],
    tags: ["cheque", "prescricao", "prazo de apresentacao"],
    alternatives: [
      { id: "a", text: "Da emissao do cheque." },
      { id: "b", text: "Do termino do prazo de apresentacao para pagamento.", correct: true },
      { id: "c", text: "Da data de recusa do pagamento pelo banco." },
      { id: "d", text: "Do protesto do titulo." }
    ]
  }),
  defineQuestion({
    id: "q-emp-017",
    subjectId: "empresarial",
    themeId: "estabelecimento",
    examId: "oab-38",
    year: 2023,
    questionNumber: 17,
    difficulty: "medium",
    statement: "O ponto comercial, como intangivel do estabelecimento, tem protecao:",
    explanation: "O art. 51 da Lei 8.245/1991 (Lei do Inquilinato): o locatario tem direito a renovacao compulsoria do contrato, desde que atendidos os requisitos, protegendo o fundo de comercio.",
    support: "Lei 8.245/1991, art. 51.",
    relatedArticleIds: [],
    tags: ["ponto comercial", "acao renovatoria", "fundo de comercio"],
    alternatives: [
      { id: "a", text: "Apenas se registrado no INPI como marca." },
      { id: "b", text: "Por acao renovatoria, desde que o contrato seja escrito com prazo de 5 anos minimos e o locatario explore o mesmo ramo por 3 anos.", correct: true },
      { id: "c", text: "Somente para estabelecimentos com mais de 10 empregados." },
      { id: "d", text: "Nao tem protecao juridica especifica." }
    ]
  }),
  defineQuestion({
    id: "q-emp-018",
    subjectId: "empresarial",
    themeId: "falencia-recuperacao",
    examId: "oab-39",
    year: 2024,
    questionNumber: 18,
    difficulty: "hard",
    statement: "O plano de recuperacao judicial deve ser apresentado pelo devedor no prazo de:",
    explanation: "O art. 53 da Lei 11.101/2005: o devedor deve apresentar o plano no prazo improrrogavel de 60 dias contados da publicacao da decisao que deferir o processamento da recuperacao.",
    support: "Lei 11.101/2005, art. 53.",
    relatedArticleIds: [],
    tags: ["plano de recuperacao", "60 dias", "prazo"],
    alternatives: [
      { id: "a", text: "30 dias da decisao de deferimento." },
      { id: "b", text: "60 dias da publicacao da decisao que deferir o processamento.", correct: true },
      { id: "c", text: "90 dias da distribuicao do pedido." },
      { id: "d", text: "120 dias da data do pedido." }
    ]
  }),
  defineQuestion({
    id: "q-emp-019",
    subjectId: "empresarial",
    themeId: "sociedades",
    examId: "oab-40",
    year: 2024,
    questionNumber: 19,
    difficulty: "medium",
    statement: "O quorum para deliberacoes ordinarias na sociedade limitada, conforme o CC/2002:",
    explanation: "O art. 1076 CC/2002 estabelece quoruns diferenciados: maioria do capital para algumas deliberacoes e 3/4 para outras, como alteracao do contrato social.",
    support: "CC/2002, art. 1076.",
    relatedArticleIds: [],
    tags: ["quorum", "sociedade limitada", "deliberacoes"],
    alternatives: [
      { id: "a", text: "Sempre unanimidade dos socios." },
      { id: "b", text: "Varia conforme a materia: maioria do capital para deliberacoes gerais e 3/4 para alterar contrato social.", correct: true },
      { id: "c", text: "Apenas a maioria dos socios presentes, independentemente da participacao." },
      { id: "d", text: "Sempre 2/3 do capital social para qualquer deliberacao." }
    ]
  }),
  defineQuestion({
    id: "q-emp-020",
    subjectId: "empresarial",
    themeId: "titulos-credito",
    examId: "oab-41",
    year: 2025,
    questionNumber: 20,
    difficulty: "hard",
    statement: "A nota promissoria e titulo de credito:",
    explanation: "A nota promissoria e promessa de pagamento, emitida pelo proprio devedor (sacador = emitente), com cartularidade, literalidade e autonomia.",
    support: "Dec. 57.663/1966 (Lei Uniforme de Genebra), art. 75.",
    relatedArticleIds: [],
    tags: ["nota promissoria", "promessa de pagamento", "titulo de credito"],
    alternatives: [
      { id: "a", text: "De ordem, que gera obrigacao de terceiro sacado." },
      { id: "b", text: "Promissoria de pagamento, emitida pelo proprio devedor, com promessa direta de pagar.", correct: true },
      { id: "c", text: "Causal, dependente de relacao de compra e venda." },
      { id: "d", text: "Passivel de aceite, como a letra de cambio." }
    ]
  }),

  // ==================== CONSUMIDOR (15) ====================
  defineQuestion({
    id: "q-cdc-001",
    subjectId: "consumidor",
    themeId: "responsabilidade-fornecedor",
    examId: "oab-36",
    year: 2022,
    questionNumber: 1,
    difficulty: "medium",
    statement: "A responsabilidade pelo fato do produto, no CDC, e:",
    explanation: "O art. 12 do CDC: o fabricante, produtor, construtor e importador respondem objetivamente pelos danos causados aos consumidores por defeitos de seus produtos.",
    support: "CDC, art. 12.",
    relatedArticleIds: [],
    tags: ["responsabilidade objetiva", "fato do produto", "CDC"],
    alternatives: [
      { id: "a", text: "Subjetiva, exigindo culpa do fabricante." },
      { id: "b", text: "Objetiva, independentemente de culpa, pelos defeitos do produto.", correct: true },
      { id: "c", text: "Solidaria apenas entre fabricante e revendedor." },
      { id: "d", text: "Afastada quando o produto contiver aviso de segurança." }
    ]
  }),
  defineQuestion({
    id: "q-cdc-002",
    subjectId: "consumidor",
    themeId: "praticas-abusivas",
    examId: "oab-37",
    year: 2023,
    questionNumber: 2,
    difficulty: "hard",
    statement: "E considerada pratica abusiva pelo CDC:",
    explanation: "O art. 39 CDC lista as praticas abusivas, entre elas: recusa de atendimento a demanda dos consumidores, condicionar o fornecimento a outra compra (venda casada), enviar produto sem solicitacao previa.",
    support: "CDC, art. 39.",
    relatedArticleIds: [],
    tags: ["venda casada", "pratica abusiva", "CDC"],
    alternatives: [
      { id: "a", text: "A publicidade que destaque as qualidades do produto." },
      { id: "b", text: "A venda casada, condicionando o fornecimento de produto a aquisicao de outro.", correct: true },
      { id: "c", text: "O aumento de preco em razao de aumento de insumos." },
      { id: "d", text: "A diferenciacao de preco por forma de pagamento." }
    ]
  }),
  defineQuestion({
    id: "q-cdc-003",
    subjectId: "consumidor",
    themeId: "protecao-contratual",
    examId: "oab-38",
    year: 2023,
    questionNumber: 3,
    difficulty: "medium",
    statement: "Nos contratos de consumo, as clausulas abusivas sao:",
    explanation: "O art. 51 CDC: sao nulas de pleno direito as clausulas abusivas, como as que estabelecem obrigacoes iníquas, colocam o consumidor em desvantagem exagerada ou sao incompativeis com a boa-fe.",
    support: "CDC, art. 51.",
    relatedArticleIds: [],
    tags: ["clausulas abusivas", "nulidade", "CDC"],
    alternatives: [
      { id: "a", text: "Anulaveis a pedido do consumidor em juizo." },
      { id: "b", text: "Nulas de pleno direito.", correct: true },
      { id: "c", text: "Validas se o consumidor assinar o contrato." },
      { id: "d", text: "Eficazes se o fornecedor informar previamente o consumidor." }
    ]
  }),
  defineQuestion({
    id: "q-cdc-004",
    subjectId: "consumidor",
    themeId: "tutela-consumidor",
    examId: "oab-39",
    year: 2024,
    questionNumber: 4,
    difficulty: "hard",
    statement: "O prazo para reclamar por vicio oculto de produto duravel e:",
    explanation: "O art. 26, II, CDC: o prazo para reclamar por vicio oculto de produto duravel e de 90 dias, contados do momento em que ficar evidenciado o defeito.",
    support: "CDC, art. 26, II.",
    relatedArticleIds: [],
    tags: ["vicio oculto", "90 dias", "produto duravel"],
    alternatives: [
      { id: "a", text: "30 dias contados da aquisicao do produto." },
      { id: "b", text: "90 dias contados do momento em que o vicio ficar evidenciado.", correct: true },
      { id: "c", text: "1 ano contados da aquisicao." },
      { id: "d", text: "5 anos contados do fato gerador do dano." }
    ]
  }),
  defineQuestion({
    id: "q-cdc-005",
    subjectId: "consumidor",
    themeId: "responsabilidade-fornecedor",
    examId: "oab-40",
    year: 2024,
    questionNumber: 5,
    difficulty: "hard",
    statement: "A inversao do onus da prova em favor do consumidor e cabivel quando:",
    explanation: "O art. 6o, VIII, CDC: a inversao e cabivel quando, a criterio do juiz, for verossimil a alegacao do consumidor ou quando for ele hipossuficiente.",
    support: "CDC, art. 6o, VIII.",
    relatedArticleIds: [],
    tags: ["inversao do onus da prova", "hipossuficiente", "verossimilhanca"],
    alternatives: [
      { id: "a", text: "O consumidor requerer em qualquer hipotese." },
      { id: "b", text: "For verossimil a alegacao do consumidor ou for ele hipossuficiente.", correct: true },
      { id: "c", text: "O fornecedor nao apresentar contestacao." },
      { id: "d", text: "O dano material superar determinado valor." }
    ]
  }),
  defineQuestion({
    id: "q-cdc-006",
    subjectId: "consumidor",
    themeId: "praticas-abusivas",
    examId: "oab-41",
    year: 2025,
    questionNumber: 6,
    difficulty: "medium",
    statement: "A publicidade enganosa, vedada pelo CDC, caracteriza-se por:",
    explanation: "O art. 37, par. 1o, CDC: publicidade enganosa e qualquer modalidade de informacao ou comunicacao com carater publicitario, inteira ou parcialmente falsa, ou por qualquer outro modo, capaz de induzir em erro o consumidor.",
    support: "CDC, art. 37, par. 1o.",
    relatedArticleIds: [],
    tags: ["publicidade enganosa", "induzir em erro", "CDC"],
    alternatives: [
      { id: "a", text: "Ser destinada ao publico em geral, mesmo que verdadeira." },
      { id: "b", text: "Conter informacao falsa ou capaz de induzir o consumidor em erro.", correct: true },
      { id: "c", text: "Apenas a publicidade que contenha promessas de beneficios nao comprovados." },
      { id: "d", text: "Qualquer publicidade que omita o preco do produto." }
    ]
  }),
  defineQuestion({
    id: "q-cdc-007",
    subjectId: "consumidor",
    themeId: "protecao-contratual",
    examId: "oab-42",
    year: 2025,
    questionNumber: 7,
    difficulty: "hard",
    statement: "O direito de arrependimento no CDC pode ser exercido no prazo de:",
    explanation: "O art. 49 CDC: o consumidor pode desistir do contrato, no prazo de 7 dias a contar da assinatura ou do ato de recebimento do produto ou servico, sempre que a contratacao ocorrer fora do estabelecimento comercial.",
    support: "CDC, art. 49.",
    relatedArticleIds: [],
    tags: ["direito de arrependimento", "7 dias", "fora do estabelecimento"],
    alternatives: [
      { id: "a", text: "3 dias contados da assinatura do contrato." },
      { id: "b", text: "7 dias contados da assinatura ou do recebimento do produto, em contratacoes fora do estabelecimento.", correct: true },
      { id: "c", text: "15 dias contados de qualquer contratacao." },
      { id: "d", text: "30 dias para produtos e 15 dias para servicos." }
    ]
  }),
  defineQuestion({
    id: "q-cdc-008",
    subjectId: "consumidor",
    themeId: "responsabilidade-fornecedor",
    examId: "oab-43",
    year: 2025,
    questionNumber: 8,
    difficulty: "medium",
    statement: "O fornecedor que sabe do defeito pos-colocacao no mercado deve:",
    explanation: "O art. 10 CDC: o fornecedor que tiver conhecimento de periculosidade do produto ou servico deve comunicar imediatamente as autoridades competentes e aos consumidores mediante anuncios publicitarios (recall).",
    support: "CDC, art. 10.",
    relatedArticleIds: [],
    tags: ["recall", "defeito pos-mercado", "comunicacao"],
    alternatives: [
      { id: "a", text: "Aguardar determinacao judicial antes de agir." },
      { id: "b", text: "Comunicar imediatamente as autoridades e consumidores, promovendo o recall.", correct: true },
      { id: "c", text: "Apenas retirar o produto de circulacao sem comunicacao publica." },
      { id: "d", text: "Indenizar os consumidores afetados sem necessidade de recolher o produto." }
    ]
  }),
  defineQuestion({
    id: "q-cdc-009",
    subjectId: "consumidor",
    themeId: "tutela-consumidor",
    examId: "oab-30",
    year: 2019,
    questionNumber: 9,
    difficulty: "hard",
    statement: "A acao coletiva para defesa dos interesses difusos dos consumidores pode ser proposta por:",
    explanation: "O art. 82 CDC: o Ministerio Publico, a Uniao, estados, municipios, DF, entidades e orgaos com legitimidade conforme o CDC, e associacoes com pelo menos 1 ano de existencia e finalidade compativel.",
    support: "CDC, art. 82.",
    relatedArticleIds: [],
    tags: ["acao coletiva", "interesses difusos", "legitimidade"],
    alternatives: [
      { id: "a", text: "Apenas pelo Ministerio Publico." },
      { id: "b", text: "Pelo Ministerio Publico, entidades da administracao publica e associacoes com legitimidade no CDC.", correct: true },
      { id: "c", text: "Apenas pelo consumidor individualmente lesado." },
      { id: "d", text: "Apenas por associacoes com mais de 10 anos de existencia." }
    ]
  }),
  defineQuestion({
    id: "q-cdc-010",
    subjectId: "consumidor",
    themeId: "protecao-contratual",
    examId: "oab-31",
    year: 2020,
    questionNumber: 10,
    difficulty: "medium",
    statement: "A decadencia para reclamar por vicio do produto nao duravel e de:",
    explanation: "O art. 26, I, CDC: o prazo para reclamar por vicio do produto nao duravel e de 30 dias.",
    support: "CDC, art. 26, I.",
    relatedArticleIds: [],
    tags: ["decadencia", "vicio", "produto nao duravel", "30 dias"],
    alternatives: [
      { id: "a", text: "7 dias." },
      { id: "b", text: "15 dias." },
      { id: "c", text: "30 dias.", correct: true },
      { id: "d", text: "90 dias." }
    ]
  }),
  defineQuestion({
    id: "q-cdc-011",
    subjectId: "consumidor",
    themeId: "praticas-abusivas",
    examId: "oab-32",
    year: 2020,
    questionNumber: 11,
    difficulty: "hard",
    statement: "O servico nao solicitado enviado ao consumidor, nos termos do CDC:",
    explanation: "O art. 39, III e paragrafo unico do CDC: o envio de produto ou servico nao solicitado ao consumidor equivale a amostra gratis, nao gerando obrigacao de pago.",
    support: "CDC, art. 39, paragrafo unico.",
    relatedArticleIds: [],
    tags: ["servico nao solicitado", "amostra gratis", "CDC"],
    alternatives: [
      { id: "a", text: "Gera obrigacao de pagamento se o consumidor utiliza-lo." },
      { id: "b", text: "Equivale a amostra gratis, nao gerando obrigacao de pagamento.", correct: true },
      { id: "c", text: "Obriga o consumidor a devolver o produto imediatamente." },
      { id: "d", text: "Gera indenizacao ao fornecedor em caso de uso pelo consumidor." }
    ]
  }),
  defineQuestion({
    id: "q-cdc-012",
    subjectId: "consumidor",
    themeId: "responsabilidade-fornecedor",
    examId: "oab-33",
    year: 2021,
    questionNumber: 12,
    difficulty: "medium",
    statement: "O comerciante responde solidariamente com o fabricante pelos danos causados por produto defeituoso quando:",
    explanation: "O art. 13 CDC: o comerciante responde solidariamente quando o fabricante nao for identificado, o produto for fornecido sem identificacao ou quando nao conservar os produtos adequadamente.",
    support: "CDC, art. 13.",
    relatedArticleIds: [],
    tags: ["comerciante", "responsabilidade solidaria", "fabricante nao identificado"],
    alternatives: [
      { id: "a", text: "Em qualquer caso, sendo sempre solidaria a responsabilidade na cadeia de consumo." },
      { id: "b", text: "O fabricante nao for identificado, o produto carecer de identificacao ou o comerciante nao conservar o produto adequadamente.", correct: true },
      { id: "c", text: "Apenas quando contribuir culposamente para o defeito." },
      { id: "d", text: "Somente se for o fabricante do produto." }
    ]
  }),
  defineQuestion({
    id: "q-cdc-013",
    subjectId: "consumidor",
    themeId: "tutela-consumidor",
    examId: "oab-34",
    year: 2021,
    questionNumber: 13,
    difficulty: "hard",
    statement: "A prescricao da pretensao indenizatoria do consumidor por fato do produto ou servico e de:",
    explanation: "O art. 27 CDC: prescreve em 5 anos a pretensao a reparacao pelos danos causados por fato do produto ou do servico, iniciando-se o prazo do conhecimento do dano e de sua autoria.",
    support: "CDC, art. 27.",
    relatedArticleIds: [],
    tags: ["prescricao", "fato do produto", "5 anos"],
    alternatives: [
      { id: "a", text: "1 ano contado do dano." },
      { id: "b", text: "3 anos contados do fato." },
      { id: "c", text: "5 anos contados do conhecimento do dano e de sua autoria.", correct: true },
      { id: "d", text: "10 anos contados do fato gerador." }
    ]
  }),
  defineQuestion({
    id: "q-cdc-014",
    subjectId: "consumidor",
    themeId: "praticas-abusivas",
    examId: "oab-35",
    year: 2022,
    questionNumber: 14,
    difficulty: "medium",
    statement: "O banco de dados de consumidores deve conter apenas informacoes negativas pelo prazo maximo de:",
    explanation: "O art. 43, par. 1o, CDC: os cadastros e dados dos consumidores devem ser objetivos, claros e verdadeiros, e nao podem ser armazenados por periodo superior a 5 anos.",
    support: "CDC, art. 43, par. 1o.",
    relatedArticleIds: [],
    tags: ["banco de dados", "5 anos", "informacoes negativas"],
    alternatives: [
      { id: "a", text: "1 ano." },
      { id: "b", text: "3 anos." },
      { id: "c", text: "5 anos.", correct: true },
      { id: "d", text: "10 anos." }
    ]
  }),
  defineQuestion({
    id: "q-cdc-015",
    subjectId: "consumidor",
    themeId: "protecao-contratual",
    examId: "oab-36",
    year: 2022,
    questionNumber: 15,
    difficulty: "hard",
    statement: "A teoria do dialogo das fontes permite que o CDC:",
    explanation: "A teoria do dialogo das fontes (Erik Jayme / Claudia Lima Marques) permite que o CDC se aplique concomitantemente com outros diplomas legais, como o CC, sempre que for mais favoravel ao consumidor.",
    support: "STJ, REsp 1.195.642/RJ; doutrina.",
    relatedArticleIds: [],
    tags: ["dialogo das fontes", "CDC", "Codigo Civil", "consumidor"],
    alternatives: [
      { id: "a", text: "Afaste a aplicacao do Codigo Civil em qualquer relacao de consumo." },
      { id: "b", text: "Coexista e dialogue com outras leis, como o CC, sempre que isso beneficiar o consumidor.", correct: true },
      { id: "c", text: "Somente se aplique em relacoes bancarias e financeiras." },
      { id: "d", text: "Perde eficacia quando o CC for mais recente que o CDC." }
    ]
  }),

  // ==================== ÉTICA (20) ====================
  defineQuestion({
    id: "q-etica-001",
    subjectId: "etica",
    themeId: "deveres",
    examId: "oab-36",
    year: 2022,
    questionNumber: 1,
    difficulty: "easy",
    statement: "E dever do advogado, conforme o EOAB:",
    explanation: "O art. 2o, paragrafo 2o, e art. 31 do EAOAB: o advogado deve agir com lealdade, dignidade, com respeito ao cliente, ao adversario, ao juiz e a Ordem.",
    support: "Lei 8.906/1994, art. 31 e ss.",
    relatedArticleIds: [],
    tags: ["deveres do advogado", "lealdade", "dignidade"],
    alternatives: [
      { id: "a", text: "Recusar qualquer causa que possa ser considerada controversa." },
      { id: "b", text: "Agir com lealdade, dignidade, com respeito ao cliente, ao adversario e ao juiz.", correct: true },
      { id: "c", text: "Aceitar obrigatoriamente toda causa que lhe for confiada." },
      { id: "d", text: "Representar o cliente mesmo contra sua propria vontade." }
    ]
  }),
  defineQuestion({
    id: "q-etica-002",
    subjectId: "etica",
    themeId: "sigilo-profissional",
    examId: "oab-37",
    year: 2023,
    questionNumber: 2,
    difficulty: "hard",
    statement: "O sigilo profissional do advogado:",
    explanation: "O art. 7o, II, EAOAB e art. 25 CED: o sigilo profissional e irrenunciavel e permanente, abrangendo inclusive quando o advogado for testemunha, salvo excecoes legais.",
    support: "Lei 8.906/1994, art. 7o, II; Res. 02/2015 (CED), art. 25.",
    relatedArticleIds: [],
    tags: ["sigilo profissional", "irrenunciavel", "permanente"],
    alternatives: [
      { id: "a", text: "Pode ser quebrado por determinacao judicial a qualquer tempo." },
      { id: "b", text: "E irrenunciavel e permanente, mesmo apos o termino do mandato, abrangendo o advogado como testemunha.", correct: true },
      { id: "c", text: "Cessa com o termino da relacao cliente-advogado." },
      { id: "d", text: "Nao abrange informacoes obtidas antes da constituicao do mandato." }
    ]
  }),
  defineQuestion({
    id: "q-etica-003",
    subjectId: "etica",
    themeId: "honorarios",
    examId: "oab-38",
    year: 2023,
    questionNumber: 3,
    difficulty: "medium",
    statement: "Os honorarios de sucumbencia pertencem:",
    explanation: "O art. 85, par. 14, CPC e art. 24, par. 4o, EAOAB: os honorarios de sucumbencia pertencem ao advogado e nao podem ser compensados com os honorarios contratuais.",
    support: "CPC/2015, art. 85, par. 14; Lei 8.906/1994, art. 24.",
    relatedArticleIds: [],
    tags: ["honorarios de sucumbencia", "advogado", "EAOAB"],
    alternatives: [
      { id: "a", text: "A parte vencedora do processo." },
      { id: "b", text: "Ao advogado da parte vencedora, nao podendo ser objeto de compensacao com honorarios contratuais.", correct: true },
      { id: "c", text: "Ao cliente, podendo o advogado requerer parte por acordo." },
      { id: "d", text: "Ao Estado, como contribuicao ao Fundo de Acesso a Justica." }
    ]
  }),
  defineQuestion({
    id: "q-etica-004",
    subjectId: "etica",
    themeId: "prerrogativas",
    examId: "oab-39",
    year: 2024,
    questionNumber: 4,
    difficulty: "medium",
    statement: "E prerrogativa do advogado:",
    explanation: "O art. 7o, I, EAOAB: o advogado tem o direito de exercer com liberdade a profissao em todo o territorio nacional, sem precisar de qualquer autorizacao ou licenca alem da inscricao na OAB.",
    support: "Lei 8.906/1994, art. 7o.",
    relatedArticleIds: [],
    tags: ["prerrogativas", "liberdade profissional", "inscricao OAB"],
    alternatives: [
      { id: "a", text: "Obter certidoes de qualquer repartição publica mediante pagamento de taxa." },
      { id: "b", text: "Exercer a profissao com liberdade em todo o territorio nacional, independentemente de qualquer licenca alem da inscricao na OAB.", correct: true },
      { id: "c", text: "Recusar qualquer causa patrocinada por outro advogado sem justificativa." },
      { id: "d", text: "Ingressar em qualquer reparticao publica portando arma de fogo." }
    ]
  }),
  defineQuestion({
    id: "q-etica-005",
    subjectId: "etica",
    themeId: "incompatibilidades",
    examId: "oab-40",
    year: 2024,
    questionNumber: 5,
    difficulty: "hard",
    statement: "Sao incompatibilidades para o exercicio da advocacia:",
    explanation: "O art. 28 EAOAB lista as incompatibilidades: chefes do Executivo, membros do Judiciario e do Tribunal de Contas, delegados, membros do MP, militares em servico ativo, entre outros.",
    support: "Lei 8.906/1994, art. 28.",
    relatedArticleIds: [],
    tags: ["incompatibilidades", "Ministerio Publico", "Magistratura"],
    alternatives: [
      { id: "a", text: "Ser servidor publico de qualquer nivel." },
      { id: "b", text: "Ser membro do Ministerio Publico, da Magistratura ou delegado de policia.", correct: true },
      { id: "c", text: "Exercer cargo em empresa privada." },
      { id: "d", text: "Ser professor universitario em curso de Direito." }
    ]
  }),
  defineQuestion({
    id: "q-etica-006",
    subjectId: "etica",
    themeId: "publicidade",
    examId: "oab-41",
    year: 2025,
    questionNumber: 6,
    difficulty: "medium",
    statement: "A publicidade advocaticia e permitida desde que:",
    explanation: "O art. 39 CED: a publicidade profissional do advogado tem carater meramente informativo, vedando-se o sensacionalismo, a mercantilizacao e a captacao de clientela.",
    support: "Res. 02/2015 (CED), art. 39.",
    relatedArticleIds: [],
    tags: ["publicidade", "carater informativo", "sensacionalismo"],
    alternatives: [
      { id: "a", text: "Contenha apenas o numero de vitórias do advogado." },
      { id: "b", text: "Tenha carater meramente informativo, vedado o sensacionalismo e a captacao de clientela.", correct: true },
      { id: "c", text: "Utilize comparativos de qualidade com outros escritorios." },
      { id: "d", text: "Destaque o preco dos servicos para atrair clientes." }
    ]
  }),
  defineQuestion({
    id: "q-etica-007",
    subjectId: "etica",
    themeId: "inscricao-oab",
    examId: "oab-42",
    year: 2025,
    questionNumber: 7,
    difficulty: "easy",
    statement: "A inscricao na OAB e obrigatoria para o exercicio da advocacia. Pode ser inscrito:",
    explanation: "O art. 8o EAOAB: para inscricao na OAB, exige-se diploma de bacharel em Direito (obtido em curso reconhecido pelo MEC), aprovacao no Exame de Ordem e capacidade civil.",
    support: "Lei 8.906/1994, art. 8o.",
    relatedArticleIds: [],
    tags: ["inscricao OAB", "Exame de Ordem", "bacharel"],
    alternatives: [
      { id: "a", text: "Qualquer graduado em qualquer area do Direito." },
      { id: "b", text: "O bacharel em Direito por curso reconhecido, aprovado no Exame de Ordem e com capacidade civil.", correct: true },
      { id: "c", text: "O bacharel em Direito com qualquer especializacao juridica." },
      { id: "d", text: "Apenas os pos-graduados em Direito com titulo de mestre ou doutor." }
    ]
  }),
  defineQuestion({
    id: "q-etica-008",
    subjectId: "etica",
    themeId: "honorarios",
    examId: "oab-43",
    year: 2025,
    questionNumber: 8,
    difficulty: "hard",
    statement: "Os honorarios advocaticios, na hipotese de contrato verbal, podem ser arbitrados:",
    explanation: "O art. 49 CED: na falta de estipulacao ou quando o contrato for verbal, os honorarios sao fixados por arbitramento judicial conforme as normas do EAOAB e do CED.",
    support: "Lei 8.906/1994, art. 22; Res. 02/2015 (CED), art. 49.",
    relatedArticleIds: [],
    tags: ["honorarios", "arbitramento", "contrato verbal"],
    alternatives: [
      { id: "a", text: "Apenas por acordo posterior entre advogado e cliente." },
      { id: "b", text: "Por arbitramento judicial, conforme as normas do EAOAB e do CED.", correct: true },
      { id: "c", text: "Pelo Conselho Seccional da OAB de forma vinculante." },
      { id: "d", text: "Pela tabela de honorarios do sindicato de advogados." }
    ]
  }),
  defineQuestion({
    id: "q-etica-009",
    subjectId: "etica",
    themeId: "sigilo-profissional",
    examId: "oab-30",
    year: 2019,
    questionNumber: 9,
    difficulty: "medium",
    statement: "O advogado que descumprir o dever de sigilo profissional comete:",
    explanation: "O descumprimento do sigilo constitui infracao disciplinar e pode gerar penalidade administrativa, alem de responsabilidade civil e, em alguns casos, penal.",
    support: "Lei 8.906/1994, art. 34, VII; CED.",
    relatedArticleIds: [],
    tags: ["sigilo", "infracao disciplinar", "sancao"],
    alternatives: [
      { id: "a", text: "Apenas irregularidade administrativa sem consequencias praticas." },
      { id: "b", text: "Infracao disciplinar, podendo ser punido com censura, suspensao ou exclusao da OAB.", correct: true },
      { id: "c", text: "Crime de violacao de segredo, automaticamente, sem necessidade de processo disciplinar." },
      { id: "d", text: "Ilegalidade sujeita apenas a indenizacao civil, sem sancao disciplinar." }
    ]
  }),
  defineQuestion({
    id: "q-etica-010",
    subjectId: "etica",
    themeId: "deveres",
    examId: "oab-31",
    year: 2020,
    questionNumber: 10,
    difficulty: "hard",
    statement: "O advogado que patrocinar causa contraria ao interesse de ex-cliente, usando informacoes confidenciais obtidas no mandato anterior:",
    explanation: "O art. 19 CED: e vedado ao advogado patrocinar causa contraria ao ex-cliente, valendo-se de informacoes obtidas no mandato anterior.",
    support: "Res. 02/2015 (CED), art. 19.",
    relatedArticleIds: [],
    tags: ["conflito de interesses", "ex-cliente", "vedacao"],
    alternatives: [
      { id: "a", text: "Age de acordo com a etica se obteve consentimento do cliente atual." },
      { id: "b", text: "Comete infracao disciplinar grave, vedada pelo CED.", correct: true },
      { id: "c", text: "Nao viola nenhuma norma etica, pois o mandato anterior ja se encerrou." },
      { id: "d", text: "Age corretamente se as informacoes ja forem de conhecimento publico." }
    ]
  }),
  defineQuestion({
    id: "q-etica-011",
    subjectId: "etica",
    themeId: "prerrogativas",
    examId: "oab-32",
    year: 2020,
    questionNumber: 11,
    difficulty: "medium",
    statement: "A prisao do advogado por motivo decorrente do exercicio da profissao deve ser:",
    explanation: "O art. 7o, IV, EAOAB: o advogado nao pode ser preso, antes de sentenca transitada em julgado, em sala de Estado Maior; na falta, ser recolhido em estabelecimento de forma isolada de presos comuns.",
    support: "Lei 8.906/1994, art. 7o, IV e V.",
    relatedArticleIds: [],
    tags: ["prisao do advogado", "sala de Estado Maior", "prerrogativas"],
    alternatives: [
      { id: "a", text: "Decretada por qualquer autoridade competente, sem restricoes especificas." },
      { id: "b", text: "Realizada em sala de Estado Maior, ou em cela especial, recolhido separado dos presos comuns.", correct: true },
      { id: "c", text: "Aplicada apenas em estabelecimento federal, independentemente do estado." },
      { id: "d", text: "Notificada a OAB para manifestacao antes da prisao." }
    ]
  }),
  defineQuestion({
    id: "q-etica-012",
    subjectId: "etica",
    themeId: "incompatibilidades",
    examId: "oab-33",
    year: 2021,
    questionNumber: 12,
    difficulty: "hard",
    statement: "O impedimento para o exercicio da advocacia difere da incompatibilidade porque:",
    explanation: "Os impedimentos (art. 30 EAOAB) nao vedam o exercicio da advocacia em geral, apenas em certas causas ou situacoes especificas. As incompatibilidades (art. 28) vedam totalmente o exercicio.",
    support: "Lei 8.906/1994, art. 28 e 30.",
    relatedArticleIds: [],
    tags: ["impedimento", "incompatibilidade", "EAOAB"],
    alternatives: [
      { id: "a", text: "Ambos vedam totalmente o exercicio da advocacia." },
      { id: "b", text: "O impedimento veda apenas em certas causas ou situacoes; a incompatibilidade veda totalmente o exercicio.", correct: true },
      { id: "c", text: "O impedimento e mais grave que a incompatibilidade." },
      { id: "d", text: "Sao sinonimos no EAOAB, sem distincao pratica." }
    ]
  }),
  defineQuestion({
    id: "q-etica-013",
    subjectId: "etica",
    themeId: "publicidade",
    examId: "oab-34",
    year: 2021,
    questionNumber: 13,
    difficulty: "medium",
    statement: "E vedado ao advogado, quanto a publicidade:",
    explanation: "O art. 40 e 41 CED: veda-se mencionar o nome de clientes patrocinados sem autorizacao, usar fotos parcialmente vestido, fazer divulgacao por meio de agencias de publicidade, e anunciar valores de honorarios.",
    support: "Res. 02/2015 (CED), art. 40; art. 41.",
    relatedArticleIds: [],
    tags: ["publicidade", "nome do cliente", "vedacao"],
    alternatives: [
      { id: "a", text: "Divulgar especializacoes e areas de atuacao." },
      { id: "b", text: "Mencionar o nome de clientes patrocinados sem sua autorizacao expressa.", correct: true },
      { id: "c", text: "Informar o numero de inscricao na OAB." },
      { id: "d", text: "Utilizar o site do escritorio para publicar artigos juridicos." }
    ]
  }),
  defineQuestion({
    id: "q-etica-014",
    subjectId: "etica",
    themeId: "honorarios",
    examId: "oab-35",
    year: 2022,
    questionNumber: 14,
    difficulty: "hard",
    statement: "A quota litis (participacao nos resultados) nos contratos de honorarios:",
    explanation: "O art. 50 CED: e vedada a participacao do advogado em resultado de causa, que ultrapasse vinte por cento do valor da condenacao.",
    support: "Res. 02/2015 (CED), art. 50.",
    relatedArticleIds: [],
    tags: ["quota litis", "20%", "honorarios", "CED"],
    alternatives: [
      { id: "a", text: "E absolutamente vedada pelo Codigo de Etica e Disciplina." },
      { id: "b", text: "E permitida, desde que nao ultrapasse 50% do valor auferido." },
      { id: "c", text: "E permitida, sendo vedada quando ultrapassar 20% do valor da condenacao.", correct: true },
      { id: "d", text: "E obrigatoria em acoes de alto valor economico." }
    ]
  }),
  defineQuestion({
    id: "q-etica-015",
    subjectId: "etica",
    themeId: "deveres",
    examId: "oab-36",
    year: 2022,
    questionNumber: 15,
    difficulty: "medium",
    statement: "O advogado pode recusar a prestacao de servicos advocaticios quando:",
    explanation: "O art. 34, XII, EAOAB e art. 5o CED: o advogado nao e obrigado a aceitar toda causa; pode recusar quando o caso conflitar com suas convicções morais ou religiosas, ou quando houver conflito de interesses.",
    support: "Lei 8.906/1994, art. 34; Res. 02/2015 (CED), art. 5o.",
    relatedArticleIds: [],
    tags: ["recusa de causa", "convicções", "conflito de interesses"],
    alternatives: [
      { id: "a", text: "Nunca, pois o exercicio da advocacia e servico publico obrigatorio." },
      { id: "b", text: "Houver conflito com suas convicções pessoais, quando o caso conflitar com seus principios morais ou religiosos.", correct: true },
      { id: "c", text: "A causa nao tiver perspectiva de exito." },
      { id: "d", text: "O cliente nao puder pagar honorarios no ato da contratacao." }
    ]
  }),
  defineQuestion({
    id: "q-etica-016",
    subjectId: "etica",
    themeId: "sigilo-profissional",
    examId: "oab-37",
    year: 2023,
    questionNumber: 16,
    difficulty: "hard",
    statement: "O sigilo profissional abrange as comunicacoes entre advogado e cliente realizadas:",
    explanation: "O sigilo e amplo e abrange todas as comunicacoes, independentemente do meio (oral, escrita, eletronica), pois o objetivo e garantir a liberdade de comunicacao entre advogado e cliente.",
    support: "Lei 8.906/1994, art. 7o, II; CED, art. 25.",
    relatedArticleIds: [],
    tags: ["sigilo", "comunicacoes", "qualquer meio"],
    alternatives: [
      { id: "a", text: "Apenas em escritório do advogado, presencialmente." },
      { id: "b", text: "Por qualquer meio — oral, escrito ou eletronico —, incluindo consultas e correspondencias.", correct: true },
      { id: "c", text: "Somente apos a constituicao formal do mandato." },
      { id: "d", text: "Exclusivamente em relacao ao processo judicial em andamento." }
    ]
  }),
  defineQuestion({
    id: "q-etica-017",
    subjectId: "etica",
    themeId: "inscricao-oab",
    examId: "oab-38",
    year: 2023,
    questionNumber: 17,
    difficulty: "medium",
    statement: "A suspensao do exercicio profissional e aplicada quando o advogado:",
    explanation: "O art. 36 EAOAB: a suspensao aplica-se em casos de infrações que nao alcancem a exclusao, como reincidencia em falta disciplinar, descumprimento reiterado de deveres, entre outras.",
    support: "Lei 8.906/1994, art. 36.",
    relatedArticleIds: [],
    tags: ["suspensao", "sancao disciplinar", "EAOAB"],
    alternatives: [
      { id: "a", text: "Cometer qualquer infracao disciplinar, independentemente de sua gravidade." },
      { id: "b", text: "Cometer infrações de media gravidade, como reincidencia em faltas ou conduta incompativel.", correct: true },
      { id: "c", text: "Negar-se a pagar as anuidades da OAB por mais de 3 anos." },
      { id: "d", text: "Tiver sido condenado por crime de menor potencial ofensivo." }
    ]
  }),
  defineQuestion({
    id: "q-etica-018",
    subjectId: "etica",
    themeId: "deveres",
    examId: "oab-39",
    year: 2024,
    questionNumber: 18,
    difficulty: "hard",
    statement: "O advogado constituido deve guardar sigilo e lealdade ao cliente. Em caso de conflito entre o interesse do cliente e a lei, o advogado deve:",
    explanation: "O art. 2o, par. 2o, e art. 20 CED: o advogado, ainda que no interesse do cliente, nao pode violar a lei ou a etica. Deve renunciar ao mandato caso nao possa cumpri-lo eticamente.",
    support: "Res. 02/2015 (CED), art. 20.",
    relatedArticleIds: [],
    tags: ["conflito interesse", "etica", "renunciar mandato"],
    alternatives: [
      { id: "a", text: "Sempre seguir a instrucao do cliente, por ser seu representante legal." },
      { id: "b", text: "Preservar a legalidade e etica, podendo renunciar ao mandato se nao puder seguir ambas.", correct: true },
      { id: "c", text: "Reportar o cliente ao Ministerio Publico sem comunicar o cliente." },
      { id: "d", text: "Continuar no processo e omitir ao juiz os fatos contrarios ao cliente." }
    ]
  }),
  defineQuestion({
    id: "q-etica-019",
    subjectId: "etica",
    themeId: "honorarios",
    examId: "oab-40",
    year: 2024,
    questionNumber: 19,
    difficulty: "medium",
    statement: "Os honorarios contratuais do advogado, em caso de revogacao do mandato sem justa causa pelo cliente:",
    explanation: "O art. 36, par. 2o, CED e art. 24, par. 1o, EAOAB: o advogado tem direito aos honorarios proporcionais ao servico prestado, sendo devidos em sua integralidade se a revogacao for sem justa causa.",
    support: "Lei 8.906/1994, art. 24; Res. 02/2015 (CED).",
    relatedArticleIds: [],
    tags: ["honorarios", "revogacao do mandato", "proporcionalidade"],
    alternatives: [
      { id: "a", text: "Sao automaticamente devolvidos ao cliente." },
      { id: "b", text: "Sao devidos proporcionalmente ao servico prestado, podendo ser integrais se a revogacao for sem justa causa.", correct: true },
      { id: "c", text: "Nao sao devidos, pois o mandato foi extinto antes do termino." },
      { id: "d", text: "Ficam sujeitos a arbitramento pelo Tribunal de Etica da OAB." }
    ]
  }),
  defineQuestion({
    id: "q-etica-020",
    subjectId: "etica",
    themeId: "infrações-disciplinares",
    examId: "oab-41",
    year: 2025,
    questionNumber: 20,
    difficulty: "hard",
    statement: "A exclusao da OAB aplica-se ao advogado que:",
    explanation: "O art. 38 EAOAB: a exclusao e a sancao maxima, aplicada em casos de conduta incompativel com a advocacia, crimes infamantes, reincidencia em infrações graves.",
    support: "Lei 8.906/1994, art. 38.",
    relatedArticleIds: [],
    tags: ["exclusao", "sancao", "conduta incompativel", "infrações graves"],
    alternatives: [
      { id: "a", text: "Cometer qualquer infracao disciplinar." },
      { id: "b", text: "Praticar conduta incompativel com a advocacia, crime infamante ou reincidir em infracoes graves.", correct: true },
      { id: "c", text: "Deixar de pagar as anuidades por 2 anos consecutivos." },
      { id: "d", text: "Recusar causa que conflite com suas convicções morais." }
    ]
  })
,
  defineQuestion({
    id: "q-oab40-001",
    subjectId: "etica",
    themeId: "deveres",
    examId: "oab-40",
    year: 2024,
    questionNumber: 1,
    difficulty: "easy",
    statement: "O advogado que sem justo motivo recusar prestar assistência jurídica quando nomeado ante impossibilidade da Defensoria comete:",
    explanation: "Art. 34, XII, EAOAB.",
    support: "Lei 8.906/1994, art. 34, XII.",
    relatedArticleIds: [],
    tags: ["etica"],
    alternatives: [
      { id: "a", text: "Conduta regular." },
      { id: "b", text: "Infração disciplinar.", correct: true },
      { id: "c", text: "Ato irregular." },
      { id: "d", text: "Crime de prevaricação." }
    ]
  }),
  defineQuestion({
    id: "q-oab40-002",
    subjectId: "etica",
    themeId: "sigilo-profissional",
    examId: "oab-40",
    year: 2024,
    questionNumber: 2,
    difficulty: "medium",
    statement: "O sigilo profissional do advogado é:",
    explanation: "Irrenunciável e permanente.",
    support: "CED, art. 25.",
    relatedArticleIds: [],
    tags: ["sigilo"],
    alternatives: [
      { id: "a", text: "Cessa com o mandato." },
      { id: "b", text: "Pode ser quebrado por ordem judicial." },
      { id: "c", text: "Irrenunciável e permanente, mesmo após o mandato.", correct: true },
      { id: "d", text: "Só abrange informações após assinatura do contrato." }
    ]
  }),
  defineQuestion({
    id: "q-oab40-003",
    subjectId: "etica",
    themeId: "honorarios",
    examId: "oab-40",
    year: 2024,
    questionNumber: 3,
    difficulty: "medium",
    statement: "Os honorários de sucumbência pertencem:",
    explanation: "Art. 85 §14 CPC: ao advogado.",
    support: "CPC/2015, art. 85, §14.",
    relatedArticleIds: [],
    tags: ["honorarios"],
    alternatives: [
      { id: "a", text: "Ao cliente." },
      { id: "b", text: "São divididos igualmente." },
      { id: "c", text: "Ao advogado, não podendo ser compensados com os contratuais.", correct: true },
      { id: "d", text: "Ao Estado." }
    ]
  }),
  defineQuestion({
    id: "q-oab40-004",
    subjectId: "etica",
    themeId: "prerrogativas",
    examId: "oab-40",
    year: 2024,
    questionNumber: 4,
    difficulty: "medium",
    statement: "É prerrogativa do advogado:",
    explanation: "Art. 7o, VI, EAOAB.",
    support: "Lei 8.906/1994, art. 7o, VI.",
    relatedArticleIds: [],
    tags: ["prerrogativas"],
    alternatives: [
      { id: "a", text: "Portar arma de fogo." },
      { id: "b", text: "Ingressar livremente em edifícios onde funcionem repartições judiciais.", correct: true },
      { id: "c", text: "Estacionar próximo a fóruns." },
      { id: "d", text: "Ter acesso a qualquer inquérito sem procuração." }
    ]
  }),
  defineQuestion({
    id: "q-oab40-005",
    subjectId: "etica",
    themeId: "incompatibilidades",
    examId: "oab-40",
    year: 2024,
    questionNumber: 5,
    difficulty: "hard",
    statement: "É hipótese de incompatibilidade com a advocacia:",
    explanation: "Art. 28 EAOAB.",
    support: "Lei 8.906/1994, art. 28.",
    relatedArticleIds: [],
    tags: ["incompatibilidades"],
    alternatives: [
      { id: "a", text: "Professor de Direito." },
      { id: "b", text: "Membro do Poder Judiciário.", correct: true },
      { id: "c", text: "Cargo em empresa privada." },
      { id: "d", text: "Servidor público de nível médio." }
    ]
  }),
  defineQuestion({
    id: "q-oab40-006",
    subjectId: "etica",
    themeId: "publicidade",
    examId: "oab-40",
    year: 2024,
    questionNumber: 6,
    difficulty: "medium",
    statement: "É vedado ao advogado na publicidade:",
    explanation: "CED: captação de clientela.",
    support: "CED, art. 39-41.",
    relatedArticleIds: [],
    tags: ["publicidade"],
    alternatives: [
      { id: "a", text: "Publicar artigos jurídicos." },
      { id: "b", text: "Manter site informativo." },
      { id: "c", text: "Divulgar referências elogiosas de clientes para captação.", correct: true },
      { id: "d", text: "Participar de eventos jurídicos." }
    ]
  }),
  defineQuestion({
    id: "q-oab40-007",
    subjectId: "etica",
    themeId: "infrações-disciplinares",
    examId: "oab-40",
    year: 2024,
    questionNumber: 7,
    difficulty: "hard",
    statement: "A exclusão da OAB aplica-se quando o advogado:",
    explanation: "Art. 38 EAOAB.",
    support: "Lei 8.906/1994, art. 38.",
    relatedArticleIds: [],
    tags: ["exclusao"],
    alternatives: [
      { id: "a", text: "Cometer qualquer infração." },
      { id: "b", text: "Tornar-se incompatível ou praticar crime que o desabone.", correct: true },
      { id: "c", text: "Atrasar anuidades." },
      { id: "d", text: "Recusar causa por convicções." }
    ]
  }),
  defineQuestion({
    id: "q-oab40-008",
    subjectId: "etica",
    themeId: "deveres",
    examId: "oab-40",
    year: 2024,
    questionNumber: 8,
    difficulty: "medium",
    statement: "O advogado que atuou como árbitro e depois patrocina causa do mesmo litígio:",
    explanation: "Art. 30, II, EAOAB.",
    support: "Lei 8.906/1994, art. 30, II.",
    relatedArticleIds: [],
    tags: ["impedimento"],
    alternatives: [
      { id: "a", text: "Age regularmente." },
      { id: "b", text: "Mera irregularidade." },
      { id: "c", text: "Infração disciplinar por violação de impedimento.", correct: true },
      { id: "d", text: "Crime de advocacia administrativa." }
    ]
  }),
  defineQuestion({
    id: "q-oab40-009",
    subjectId: "etica",
    themeId: "honorarios",
    examId: "oab-40",
    year: 2024,
    questionNumber: 9,
    difficulty: "hard",
    statement: "O contrato verbal de honorários é:",
    explanation: "Art. 22 EAOAB: válido.",
    support: "Lei 8.906/1994, art. 22.",
    relatedArticleIds: [],
    tags: ["honorarios"],
    alternatives: [
      { id: "a", text: "Nulo, exige forma escrita." },
      { id: "b", text: "Válido, com arbitramento judicial na falta de estipulação.", correct: true },
      { id: "c", text: "Anulável pelo cliente." },
      { id: "d", text: "Válido só para causas de baixo valor." }
    ]
  }),
  defineQuestion({
    id: "q-oab40-010",
    subjectId: "etica",
    themeId: "inscricao-oab",
    examId: "oab-40",
    year: 2024,
    questionNumber: 10,
    difficulty: "easy",
    statement: "Para inscrição na OAB como advogado, é requisito:",
    explanation: "Art. 8o EAOAB.",
    support: "Lei 8.906/1994, art. 8o.",
    relatedArticleIds: [],
    tags: ["inscricao OAB"],
    alternatives: [
      { id: "a", text: "Qualquer graduação." },
      { id: "b", text: "Diploma de Direito, Exame de Ordem e capacidade civil.", correct: true },
      { id: "c", text: "Título de mestre." },
      { id: "d", text: "Estudante do 5o período." }
    ]
  }),
  defineQuestion({
    id: "q-oab40-011",
    subjectId: "constitucional",
    themeId: "direitos-fundamentais",
    examId: "oab-40",
    year: 2024,
    questionNumber: 11,
    difficulty: "medium",
    statement: "O princípio da inafastabilidade garante que:",
    explanation: "Art. 5o, XXXV, CF.",
    support: "CF/88, art. 5o, XXXV.",
    relatedArticleIds: [],
    tags: ["inafastabilidade"],
    alternatives: [
      { id: "a", text: "Acesso após esgotar vias administrativas." },
      { id: "b", text: "A lei não pode excluir da apreciação do Judiciário lesão ou ameaça a direito.", correct: true },
      { id: "c", text: "O Judiciário revê todos os atos administrativos." },
      { id: "d", text: "Acesso condicionado ao pagamento de custas." }
    ]
  }),
  defineQuestion({
    id: "q-oab40-012",
    subjectId: "constitucional",
    themeId: "controle-constitucionalidade",
    examId: "oab-40",
    year: 2024,
    questionNumber: 12,
    difficulty: "hard",
    statement: "A ADO visa:",
    explanation: "Art. 103, §2o, CF.",
    support: "CF/88, art. 103, §2o.",
    relatedArticleIds: [],
    tags: ["ADO"],
    alternatives: [
      { id: "a", text: "Declarar lei inconstitucional." },
      { id: "b", text: "Tornar efetiva norma cuja implementação foi omitida.", correct: true },
      { id: "c", text: "Controlar tratados internacionais." },
      { id: "d", text: "Suspender MPs." }
    ]
  }),
  defineQuestion({
    id: "q-oab40-013",
    subjectId: "constitucional",
    themeId: "organizacao-estado",
    examId: "oab-40",
    year: 2024,
    questionNumber: 13,
    difficulty: "medium",
    statement: "A competência comum de todos os entes está no art.:",
    explanation: "Art. 23 CF.",
    support: "CF/88, art. 23.",
    relatedArticleIds: [],
    tags: ["competencia comum"],
    alternatives: [
      { id: "a", text: "21." },
      { id: "b", text: "22." },
      { id: "c", text: "23.", correct: true },
      { id: "d", text: "24." }
    ]
  }),
  defineQuestion({
    id: "q-oab40-014",
    subjectId: "constitucional",
    themeId: "poder-judiciario",
    examId: "oab-40",
    year: 2024,
    questionNumber: 14,
    difficulty: "hard",
    statement: "O STJ:",
    explanation: "Art. 105 CF: uniformiza a lei federal.",
    support: "CF/88, art. 105.",
    relatedArticleIds: [],
    tags: ["STJ"],
    alternatives: [
      { id: "a", text: "É o guardião da CF." },
      { id: "b", text: "Julga o Presidente nos crimes de responsabilidade." },
      { id: "c", text: "Uniformiza a lei federal via recurso especial.", correct: true },
      { id: "d", text: "Julga RE dos TJs." }
    ]
  }),
  defineQuestion({
    id: "q-oab40-015",
    subjectId: "constitucional",
    themeId: "direitos-fundamentais",
    examId: "oab-40",
    year: 2024,
    questionNumber: 15,
    difficulty: "medium",
    statement: "A proteção de dados pessoais foi inserida na CF pela:",
    explanation: "EC 115/2022.",
    support: "CF/88, art. 5o, LXXIX.",
    relatedArticleIds: [],
    tags: ["dados pessoais"],
    alternatives: [
      { id: "a", text: "CF originária." },
      { id: "b", text: "LGPD de 2018." },
      { id: "c", text: "EC 115/2022.", correct: true },
      { id: "d", text: "Decreto 9.203/2017." }
    ]
  }),
  defineQuestion({
    id: "q-oab40-016",
    subjectId: "constitucional",
    themeId: "poder-legislativo",
    examId: "oab-40",
    year: 2024,
    questionNumber: 16,
    difficulty: "hard",
    statement: "A iniciativa popular federal exige:",
    explanation: "Art. 61, §2o, CF.",
    support: "CF/88, art. 61, §2o.",
    relatedArticleIds: [],
    tags: ["iniciativa popular"],
    alternatives: [
      { id: "a", text: "5% em 10 estados." },
      { id: "b", text: "1% em 5 estados, com 3/10% por estado.", correct: true },
      { id: "c", text: "Qualquer número com referendo." },
      { id: "d", text: "10% sem restrição." }
    ]
  }),
  defineQuestion({
    id: "q-oab40-017",
    subjectId: "constitucional",
    themeId: "direitos-fundamentais",
    examId: "oab-40",
    year: 2024,
    questionNumber: 17,
    difficulty: "medium",
    statement: "O princípio que proíbe punir duas vezes pelo mesmo fato é o:",
    explanation: "Non bis in idem.",
    support: "CF/88, art. 5o, LIV.",
    relatedArticleIds: [],
    tags: ["non bis in idem"],
    alternatives: [
      { id: "a", text: "Legalidade." },
      { id: "b", text: "Individualização da pena." },
      { id: "c", text: "Non bis in idem.", correct: true },
      { id: "d", text: "Presunção de inocência." }
    ]
  }),
  defineQuestion({
    id: "q-oab40-018",
    subjectId: "constitucional",
    themeId: "poder-executivo",
    examId: "oab-40",
    year: 2024,
    questionNumber: 18,
    difficulty: "hard",
    statement: "MPs NÃO podem versar sobre:",
    explanation: "Art. 62, §1o, CF.",
    support: "CF/88, art. 62, §1o.",
    relatedArticleIds: [],
    tags: ["medida provisoria"],
    alternatives: [
      { id: "a", text: "Tributação sobre combustíveis." },
      { id: "b", text: "Criação de Ministérios." },
      { id: "c", text: "Direito penal e processual penal.", correct: true },
      { id: "d", text: "Organização administrativa." }
    ]
  }),
  defineQuestion({
    id: "q-oab40-019",
    subjectId: "constitucional",
    themeId: "habeas-corpus-constitucional",
    examId: "oab-40",
    year: 2024,
    questionNumber: 19,
    difficulty: "medium",
    statement: "O habeas data garante:",
    explanation: "Art. 5o, LXXII, CF.",
    support: "CF/88, art. 5o, LXXII.",
    relatedArticleIds: [],
    tags: ["habeas data"],
    alternatives: [
      { id: "a", text: "Proteger a locomoção." },
      { id: "b", text: "Garantir o conhecimento de informações sobre si em bancos de dados públicos.", correct: true },
      { id: "c", text: "Impugnar ato de autoridade." },
      { id: "d", text: "Suprir omissão legislativa." }
    ]
  }),
  defineQuestion({
    id: "q-oab40-020",
    subjectId: "constitucional",
    themeId: "principios-constitucionais",
    examId: "oab-40",
    year: 2024,
    questionNumber: 20,
    difficulty: "easy",
    statement: "Princípio das relações internacionais do Brasil:",
    explanation: "Art. 4o, III, CF.",
    support: "CF/88, art. 4o.",
    relatedArticleIds: [],
    tags: ["relacoes internacionais"],
    alternatives: [
      { id: "a", text: "Intervenção humanitária." },
      { id: "b", text: "Autodeterminação dos povos.", correct: true },
      { id: "c", text: "Prevalência dos interesses nacionais." },
      { id: "d", text: "Reciprocidade exclusiva." }
    ]
  }),
  defineQuestion({
    id: "q-oab40-021",
    subjectId: "administrativo",
    themeId: "atos-administrativos",
    examId: "oab-40",
    year: 2024,
    questionNumber: 21,
    difficulty: "medium",
    statement: "Atributos que permitem agir sem autorização judicial:",
    explanation: "Autoexecutoriedade e imperatividade.",
    support: "Doutrina.",
    relatedArticleIds: [],
    tags: ["atos administrativos"],
    alternatives: [
      { id: "a", text: "Legitimidade e legalidade." },
      { id: "b", text: "Autoexecutoriedade e imperatividade.", correct: true },
      { id: "c", text: "Tipicidade e finalidade." },
      { id: "d", text: "Motivação e proporcionalidade." }
    ]
  }),
  defineQuestion({
    id: "q-oab40-022",
    subjectId: "administrativo",
    themeId: "licitacao",
    examId: "oab-40",
    year: 2024,
    questionNumber: 22,
    difficulty: "hard",
    statement: "O critério menor preço considera:",
    explanation: "Art. 34 Lei 14.133: menor valor global ou unitário.",
    support: "Lei 14.133/2021, art. 34.",
    relatedArticleIds: [],
    tags: ["licitacao"],
    alternatives: [
      { id: "a", text: "Melhor custo-benefício." },
      { id: "b", text: "Menor valor global ou unitário.", correct: true },
      { id: "c", text: "Maior desconto." },
      { id: "d", text: "Menor custo de implantação." }
    ]
  }),
  defineQuestion({
    id: "q-oab40-023",
    subjectId: "administrativo",
    themeId: "responsabilidade-estado",
    examId: "oab-40",
    year: 2024,
    questionNumber: 23,
    difficulty: "medium",
    statement: "O risco administrativo admite:",
    explanation: "Excludentes: culpa exclusiva da vítima, caso fortuito e força maior.",
    support: "CF/88, art. 37, §6o.",
    relatedArticleIds: [],
    tags: ["risco administrativo"],
    alternatives: [
      { id: "a", text: "Exclusão provando ausência de culpa." },
      { id: "b", text: "Afastamento com culpa exclusiva da vítima ou força maior.", correct: true },
      { id: "c", text: "Negativa quando o agente não for identificado." },
      { id: "d", text: "Limitação ao dano material." }
    ]
  }),
  defineQuestion({
    id: "q-oab40-024",
    subjectId: "administrativo",
    themeId: "improbidade",
    examId: "oab-40",
    year: 2024,
    questionNumber: 24,
    difficulty: "hard",
    statement: "Após a Lei 14.230/2021, a improbidade:",
    explanation: "Exige dolo específico.",
    support: "Lei 8.429/1992, art. 1o, §1o.",
    relatedArticleIds: [],
    tags: ["improbidade"],
    alternatives: [
      { id: "a", text: "Pode ser culposa." },
      { id: "b", text: "Exige dolo específico — modalidade culposa extinta.", correct: true },
      { id: "c", text: "Independe de dolo quando há dano." },
      { id: "d", text: "É presumida com vantagem." }
    ]
  }),
  defineQuestion({
    id: "q-oab40-025",
    subjectId: "administrativo",
    themeId: "poder-policia",
    examId: "oab-40",
    year: 2024,
    questionNumber: 25,
    difficulty: "medium",
    statement: "Delegação do poder de polícia a particulares:",
    explanation: "STF: consentimento e fiscalização sim; sanção e coerção não.",
    support: "STF, RE 633.782.",
    relatedArticleIds: [],
    tags: ["poder de policia"],
    alternatives: [
      { id: "a", text: "Integral a qualquer entidade." },
      { id: "b", text: "Não pode em hipótese alguma." },
      { id: "c", text: "Consentimento e fiscalização podem; sanção e coerção não.", correct: true },
      { id: "d", text: "A paraestatais sem restrição." }
    ]
  }),
  defineQuestion({
    id: "q-oab40-026",
    subjectId: "administrativo",
    themeId: "atos-administrativos",
    examId: "oab-40",
    year: 2024,
    questionNumber: 26,
    difficulty: "hard",
    statement: "O ato com desvio de finalidade é:",
    explanation: "Nulo.",
    support: "Doutrina.",
    relatedArticleIds: [],
    tags: ["desvio de finalidade"],
    alternatives: [
      { id: "a", text: "Anulável." },
      { id: "b", text: "Nulo.", correct: true },
      { id: "c", text: "Inexistente." },
      { id: "d", text: "Apenas irregular." }
    ]
  }),
  defineQuestion({
    id: "q-oab40-027",
    subjectId: "administrativo",
    themeId: "licitacao",
    examId: "oab-40",
    year: 2024,
    questionNumber: 27,
    difficulty: "medium",
    statement: "A inexigibilidade cabe quando:",
    explanation: "Art. 74 Lei 14.133: inviabilidade de competição.",
    support: "Lei 14.133/2021, art. 74.",
    relatedArticleIds: [],
    tags: ["inexigibilidade"],
    alternatives: [
      { id: "a", text: "Valor inferior ao limite." },
      { id: "b", text: "Inviabilidade de competição.", correct: true },
      { id: "c", text: "Licitação deserta." },
      { id: "d", text: "Urgência por calamidade." }
    ]
  }),
  defineQuestion({
    id: "q-oab40-028",
    subjectId: "tributario",
    themeId: "principios-tributarios",
    examId: "oab-40",
    year: 2024,
    questionNumber: 28,
    difficulty: "medium",
    statement: "A anterioridade nonagesimal NÃO se aplica ao:",
    explanation: "Art. 150, §1o, CF: IR.",
    support: "CF/88, art. 150, §1o.",
    relatedArticleIds: [],
    tags: ["anterioridade nonagesimal"],
    alternatives: [
      { id: "a", text: "Contribuições à Seguridade." },
      { id: "b", text: "ICMS sobre combustíveis." },
      { id: "c", text: "Imposto de Renda.", correct: true },
      { id: "d", text: "Contribuição de melhoria." }
    ]
  }),
  defineQuestion({
    id: "q-oab40-029",
    subjectId: "tributario",
    themeId: "obrigacao-tributaria",
    examId: "oab-40",
    year: 2024,
    questionNumber: 29,
    difficulty: "hard",
    statement: "A responsabilidade pessoal dos administradores (art. 135 CTN) exige:",
    explanation: "Excesso de poderes ou infração de lei.",
    support: "CTN, art. 135.",
    relatedArticleIds: [],
    tags: ["responsabilidade tributaria"],
    alternatives: [
      { id: "a", text: "Simples inadimplência." },
      { id: "b", text: "Excesso de poderes ou infração de lei.", correct: true },
      { id: "c", text: "Qualquer dívida tributária." },
      { id: "d", text: "Dissolução irregular." }
    ]
  }),
  defineQuestion({
    id: "q-oab40-030",
    subjectId: "tributario",
    themeId: "espécies-tributarias",
    examId: "oab-40",
    year: 2024,
    questionNumber: 30,
    difficulty: "medium",
    statement: "O ISS é competência:",
    explanation: "Art. 156, III, CF: Municipal.",
    support: "CF/88, art. 156, III.",
    relatedArticleIds: [],
    tags: ["ISS"],
    alternatives: [
      { id: "a", text: "Federal." },
      { id: "b", text: "Estadual." },
      { id: "c", text: "Municipal.", correct: true },
      { id: "d", text: "Compartilhada." }
    ]
  }),
  defineQuestion({
    id: "q-oab40-031",
    subjectId: "tributario",
    themeId: "lancamento",
    examId: "oab-40",
    year: 2024,
    questionNumber: 31,
    difficulty: "hard",
    statement: "O lançamento por declaração ocorre quando:",
    explanation: "Art. 147 CTN: sujeito declara e autoridade lança.",
    support: "CTN, art. 147.",
    relatedArticleIds: [],
    tags: ["lancamento"],
    alternatives: [
      { id: "a", text: "Contribuinte antecipa o pagamento." },
      { id: "b", text: "Sujeito passivo declara e autoridade lança.", correct: true },
      { id: "c", text: "Autoridade lança de ofício." },
      { id: "d", text: "Contribuinte recolhe e aguarda homologação." }
    ]
  }),
  defineQuestion({
    id: "q-oab40-032",
    subjectId: "tributario",
    themeId: "prescricao-tributaria",
    examId: "oab-40",
    year: 2024,
    questionNumber: 32,
    difficulty: "medium",
    statement: "A prescrição interrompida pelo despacho de citação:",
    explanation: "Art. 174 CTN: recomeça por inteiro.",
    support: "CTN, art. 174.",
    relatedArticleIds: [],
    tags: ["prescricao"],
    alternatives: [
      { id: "a", text: "Volta pelo prazo restante." },
      { id: "b", text: "Recomeça por inteiro.", correct: true },
      { id: "c", text: "Converte-se em decadência." },
      { id: "d", text: "Suspende-se definitivamente." }
    ]
  }),
  defineQuestion({
    id: "q-oab40-033",
    subjectId: "tributario",
    themeId: "imunidades-tributarias",
    examId: "oab-40",
    year: 2024,
    questionNumber: 33,
    difficulty: "hard",
    statement: "A imunidade dos templos abrange:",
    explanation: "Art. 150, §4o, CF.",
    support: "CF/88, art. 150, §4o.",
    relatedArticleIds: [],
    tags: ["imunidade", "templos"],
    alternatives: [
      { id: "a", text: "Todos os tributos." },
      { id: "b", text: "Patrimônio, renda e serviços vinculados às finalidades essenciais.", correct: true },
      { id: "c", text: "Apenas imóveis das cerimônias." },
      { id: "d", text: "É absoluta." }
    ]
  }),
  defineQuestion({
    id: "q-oab40-034",
    subjectId: "civil",
    themeId: "contratos",
    examId: "oab-40",
    year: 2024,
    questionNumber: 34,
    difficulty: "medium",
    statement: "A revisão por onerosidade excessiva exige:",
    explanation: "Art. 478 CC.",
    support: "CC/2002, art. 478.",
    relatedArticleIds: [],
    tags: ["revisao contratual"],
    alternatives: [
      { id: "a", text: "Apenas onerosidade." },
      { id: "b", text: "Fato extraordinário e imprevisível com onerosidade excessiva e extrema vantagem à outra parte.", correct: true },
      { id: "c", text: "Qualquer alteração econômica." },
      { id: "d", text: "Dolo do credor." }
    ]
  }),
  defineQuestion({
    id: "q-oab40-035",
    subjectId: "civil",
    themeId: "responsabilidade-civil",
    examId: "oab-40",
    year: 2024,
    questionNumber: 35,
    difficulty: "hard",
    statement: "Pais respondem pelos filhos menores:",
    explanation: "Art. 932, I; 933, CC: objetivamente.",
    support: "CC/2002, art. 932, I.",
    relatedArticleIds: [],
    tags: ["responsabilidade"],
    alternatives: [
      { id: "a", text: "Subjetivamente." },
      { id: "b", text: "Objetivamente.", correct: true },
      { id: "c", text: "Apenas por filhos absolutamente incapazes." },
      { id: "d", text: "Apenas materialmente." }
    ]
  }),
  defineQuestion({
    id: "q-oab40-036",
    subjectId: "civil",
    themeId: "familia",
    examId: "oab-40",
    year: 2024,
    questionNumber: 36,
    difficulty: "medium",
    statement: "Após a EC 66/2010, o divórcio:",
    explanation: "Sem prévia separação.",
    support: "EC 66/2010.",
    relatedArticleIds: [],
    tags: ["divorcio"],
    alternatives: [
      { id: "a", text: "Exige separação de 1 ano." },
      { id: "b", text: "Pode ser requerido sem separação prévia.", correct: true },
      { id: "c", text: "Requer separação de fato de 2 anos." },
      { id: "d", text: "Depende da partilha." }
    ]
  }),
  defineQuestion({
    id: "q-oab40-037",
    subjectId: "civil",
    themeId: "sucessoes",
    examId: "oab-40",
    year: 2024,
    questionNumber: 37,
    difficulty: "hard",
    statement: "Testamento particular exige:",
    explanation: "Art. 1876 CC: escrito de próprio punho, 3 testemunhas.",
    support: "CC/2002, art. 1876.",
    relatedArticleIds: [],
    tags: ["testamento"],
    alternatives: [
      { id: "a", text: "Tabelião com 2 testemunhas." },
      { id: "b", text: "Escrito de próprio punho, lido perante 3 testemunhas.", correct: true },
      { id: "c", text: "Digitado com firma reconhecida." },
      { id: "d", text: "Depósito em cartório." }
    ]
  }),
  defineQuestion({
    id: "q-oab40-038",
    subjectId: "civil",
    themeId: "obrigacoes",
    examId: "oab-40",
    year: 2024,
    questionNumber: 38,
    difficulty: "medium",
    statement: "Indenização suplementar além da cláusula penal exige:",
    explanation: "Art. 416, §único, CC: convenção prévia.",
    support: "CC/2002, art. 416.",
    relatedArticleIds: [],
    tags: ["clausula penal"],
    alternatives: [
      { id: "a", text: "O credor pode sempre exigir." },
      { id: "b", text: "Apenas se convencionado.", correct: true },
      { id: "c", text: "A pena se eleva automaticamente." },
      { id: "d", text: "O devedor responde só pela cláusula." }
    ]
  }),
  defineQuestion({
    id: "q-oab40-039",
    subjectId: "civil",
    themeId: "capacidade-civil",
    examId: "oab-40",
    year: 2024,
    questionNumber: 39,
    difficulty: "easy",
    statement: "São relativamente incapazes:",
    explanation: "Art. 4o CC.",
    support: "CC/2002, art. 4o.",
    relatedArticleIds: [],
    tags: ["incapacidade relativa"],
    alternatives: [
      { id: "a", text: "Menores de 16 anos." },
      { id: "b", text: "Maiores de 16 e menores de 18, ébrios habituais e pródigos.", correct: true },
      { id: "c", text: "Apenas os que não exprimem vontade." },
      { id: "d", text: "Estrangeiros em expulsão." }
    ]
  }),
  defineQuestion({
    id: "q-oab40-040",
    subjectId: "civil",
    themeId: "posse-propriedade",
    examId: "oab-40",
    year: 2024,
    questionNumber: 40,
    difficulty: "hard",
    statement: "Usucapião urbana exige posse de imóvel de até 250m2 por:",
    explanation: "Art. 183 CF: 5 anos.",
    support: "CF/88, art. 183.",
    relatedArticleIds: [],
    tags: ["usucapiao urbana"],
    alternatives: [
      { id: "a", text: "10 anos." },
      { id: "b", text: "5 anos para moradia.", correct: true },
      { id: "c", text: "Qualquer prazo com necessidade." },
      { id: "d", text: "3 anos com justo título." }
    ]
  }),
  defineQuestion({
    id: "q-oab40-041",
    subjectId: "civil",
    themeId: "negocio-juridico",
    examId: "oab-40",
    year: 2024,
    questionNumber: 41,
    difficulty: "medium",
    statement: "Negócio em estado de perigo é:",
    explanation: "Art. 156 CC: anulável.",
    support: "CC/2002, art. 156.",
    relatedArticleIds: [],
    tags: ["estado de perigo"],
    alternatives: [
      { id: "a", text: "Nulo." },
      { id: "b", text: "Anulável.", correct: true },
      { id: "c", text: "Válido." },
      { id: "d", text: "Inexistente." }
    ]
  }),
  defineQuestion({
    id: "q-oab40-042",
    subjectId: "civil",
    themeId: "prescricao-decadencia-civil",
    examId: "oab-40",
    year: 2024,
    questionNumber: 42,
    difficulty: "hard",
    statement: "Prazo para cobrança de aluguéis:",
    explanation: "Art. 206, §3o, I, CC: 3 anos.",
    support: "CC/2002, art. 206, §3o, I.",
    relatedArticleIds: [],
    tags: ["prescricao"],
    alternatives: [
      { id: "a", text: "1 ano." },
      { id: "b", text: "2 anos." },
      { id: "c", text: "3 anos.", correct: true },
      { id: "d", text: "5 anos." }
    ]
  }),
  defineQuestion({
    id: "q-oab40-043",
    subjectId: "processo-civil",
    themeId: "tutela-provisoria",
    examId: "oab-40",
    year: 2024,
    questionNumber: 43,
    difficulty: "medium",
    statement: "Tutela antecipada antecedente estabiliza quando:",
    explanation: "Art. 304 CPC: sem recurso.",
    support: "CPC/2015, art. 304.",
    relatedArticleIds: [],
    tags: ["tutela antecipada"],
    alternatives: [
      { id: "a", text: "O réu contestar sem impugnar." },
      { id: "b", text: "Não houver recurso.", correct: true },
      { id: "c", text: "Transcorrer 30 dias." },
      { id: "d", text: "O juiz determinar." }
    ]
  }),
  defineQuestion({
    id: "q-oab40-044",
    subjectId: "processo-civil",
    themeId: "competencia",
    examId: "oab-40",
    year: 2024,
    questionNumber: 44,
    difficulty: "hard",
    statement: "Conexão ocorre quando:",
    explanation: "Art. 55 CPC: identidade de pedido ou causa de pedir.",
    support: "CPC/2015, art. 55.",
    relatedArticleIds: [],
    tags: ["conexao"],
    alternatives: [
      { id: "a", text: "Mesmas partes e objeto." },
      { id: "b", text: "Identidade de pedido ou causa de pedir.", correct: true },
      { id: "c", text: "Mesmo juízo." },
      { id: "d", text: "Pedidos opostos." }
    ]
  }),
  defineQuestion({
    id: "q-oab40-045",
    subjectId: "processo-civil",
    themeId: "recursos",
    examId: "oab-40",
    year: 2024,
    questionNumber: 45,
    difficulty: "medium",
    statement: "Agravo de instrumento no CPC/2015 cabe contra:",
    explanation: "Art. 1015: rol taxativo.",
    support: "CPC/2015, art. 1015.",
    relatedArticleIds: [],
    tags: ["agravo de instrumento"],
    alternatives: [
      { id: "a", text: "Qualquer decisão interlocutória." },
      { id: "b", text: "Decisões em rol taxativo.", correct: true },
      { id: "c", text: "Somente as que causem dano irreparável." },
      { id: "d", text: "Apenas sobre tutela de urgência." }
    ]
  }),
  defineQuestion({
    id: "q-oab40-046",
    subjectId: "processo-civil",
    themeId: "execucao",
    examId: "oab-40",
    year: 2024,
    questionNumber: 46,
    difficulty: "hard",
    statement: "Embargos do executado em título extrajudicial são:",
    explanation: "Art. 914 CPC: ação autônoma, 15 dias da citação.",
    support: "CPC/2015, art. 914.",
    relatedArticleIds: [],
    tags: ["embargos do executado"],
    alternatives: [
      { id: "a", text: "Com suspensão automática." },
      { id: "b", text: "Ação autônoma, 15 dias da citação.", correct: true },
      { id: "c", text: "Petição nos próprios autos." },
      { id: "d", text: "Dispensam advogado." }
    ]
  }),
  defineQuestion({
    id: "q-oab40-047",
    subjectId: "processo-civil",
    themeId: "sentenca-coisa-julgada",
    examId: "oab-40",
    year: 2024,
    questionNumber: 47,
    difficulty: "medium",
    statement: "Coisa julgada limita-se:",
    explanation: "Art. 506 CPC: às partes, não prejudicando terceiros.",
    support: "CPC/2015, art. 506.",
    relatedArticleIds: [],
    tags: ["coisa julgada"],
    alternatives: [
      { id: "a", text: "Estende-se a terceiros." },
      { id: "b", text: "Às partes; não prejudica terceiros, salvo exceções.", correct: true },
      { id: "c", text: "Terceiros podem executá-la." },
      { id: "d", text: "Abrange todos da relação jurídica." }
    ]
  }),
  defineQuestion({
    id: "q-oab40-048",
    subjectId: "processo-civil",
    themeId: "litisconsorcios",
    examId: "oab-40",
    year: 2024,
    questionNumber: 48,
    difficulty: "hard",
    statement: "Chamamento ao processo cabe quando:",
    explanation: "Art. 130 CPC: devedor solidário quer incluir codevedores.",
    support: "CPC/2015, art. 130.",
    relatedArticleIds: [],
    tags: ["chamamento ao processo"],
    alternatives: [
      { id: "a", text: "Terceiro tem interesse." },
      { id: "b", text: "Devedor solidário quer incluir codevedores.", correct: true },
      { id: "c", text: "Réu quer denunciar causador do dano." },
      { id: "d", text: "Terceiro é proprietário do bem." }
    ]
  }),
  defineQuestion({
    id: "q-oab40-049",
    subjectId: "processo-civil",
    themeId: "provas-cpc",
    examId: "oab-40",
    year: 2024,
    questionNumber: 49,
    difficulty: "medium",
    statement: "Prova emprestada é admissível:",
    explanation: "Art. 372 CPC: com contraditório.",
    support: "CPC/2015, art. 372.",
    relatedArticleIds: [],
    tags: ["prova emprestada"],
    alternatives: [
      { id: "a", text: "Apenas entre mesmas partes." },
      { id: "b", text: "Com observância do contraditório.", correct: true },
      { id: "c", text: "Só com homologação do juiz originário." },
      { id: "d", text: "Nunca." }
    ]
  }),
  defineQuestion({
    id: "q-oab40-050",
    subjectId: "processo-civil",
    themeId: "prescricao-cpc",
    examId: "oab-40",
    year: 2024,
    questionNumber: 50,
    difficulty: "hard",
    statement: "Distribuição dinâmica do ônus permite ao juiz:",
    explanation: "Art. 373, §1o CPC: atribuir à parte com melhores condições.",
    support: "CPC/2015, art. 373.",
    relatedArticleIds: [],
    tags: ["onus da prova"],
    alternatives: [
      { id: "a", text: "Dispensar provas." },
      { id: "b", text: "Atribuir o ônus à parte com melhores condições.", correct: true },
      { id: "c", text: "Reverter só em relações de consumo." },
      { id: "d", text: "Presumir fatos da parte vulnerável." }
    ]
  }),
  defineQuestion({
    id: "q-oab40-051",
    subjectId: "penal",
    themeId: "iter-criminis",
    examId: "oab-40",
    year: 2024,
    questionNumber: 51,
    difficulty: "medium",
    statement: "Crime permanente:",
    explanation: "Consumação que se prolonga no tempo.",
    support: "CP, doutrina.",
    relatedArticleIds: [],
    tags: ["crime permanente"],
    alternatives: [
      { id: "a", text: "Resultado instantâneo." },
      { id: "b", text: "Consumação que se prolonga enquanto o agente mantém a situação.", correct: true },
      { id: "c", text: "Exige mais de um ato." },
      { id: "d", text: "Apenas um sujeito ativo." }
    ]
  }),
  defineQuestion({
    id: "q-oab40-052",
    subjectId: "penal",
    themeId: "crimes-pessoa",
    examId: "oab-40",
    year: 2024,
    questionNumber: 52,
    difficulty: "hard",
    statement: "Na extorsão, diferentemente do roubo:",
    explanation: "A colaboração da vítima é essencial.",
    support: "CP, art. 158.",
    relatedArticleIds: [],
    tags: ["extorsao"],
    alternatives: [
      { id: "a", text: "Não há violência." },
      { id: "b", text: "A colaboração da vítima é essencial.", correct: true },
      { id: "c", text: "A vantagem é sexual." },
      { id: "d", text: "O agente apodera diretamente." }
    ]
  }),
  defineQuestion({
    id: "q-oab40-053",
    subjectId: "penal",
    themeId: "culpabilidade",
    examId: "oab-40",
    year: 2024,
    questionNumber: 53,
    difficulty: "medium",
    statement: "Erro de proibição inevitável:",
    explanation: "Art. 21 CP: isenta de pena.",
    support: "CP, art. 21.",
    relatedArticleIds: [],
    tags: ["erro de proibicao"],
    alternatives: [
      { id: "a", text: "Exclui o dolo." },
      { id: "b", text: "Isenta de pena.", correct: true },
      { id: "c", text: "Reduz a pena." },
      { id: "d", text: "Sem efeito." }
    ]
  }),
  defineQuestion({
    id: "q-oab40-054",
    subjectId: "penal",
    themeId: "concurso-crimes",
    examId: "oab-40",
    year: 2024,
    questionNumber: 54,
    difficulty: "hard",
    statement: "No concurso material, as penas são:",
    explanation: "Art. 69 CP: cumuladas.",
    support: "CP, art. 69.",
    relatedArticleIds: [],
    tags: ["concurso material"],
    alternatives: [
      { id: "a", text: "A mais grave aumentada." },
      { id: "b", text: "Aplicadas cumulativamente.", correct: true },
      { id: "c", text: "A mais grave sem acréscimo." },
      { id: "d", text: "Reduzidas." }
    ]
  }),
  defineQuestion({
    id: "q-oab40-055",
    subjectId: "penal",
    themeId: "penas",
    examId: "oab-40",
    year: 2024,
    questionNumber: 55,
    difficulty: "medium",
    statement: "Para primário sem violência, progressão exige:",
    explanation: "Art. 112, I, LEP: 16%.",
    support: "LEP, art. 112.",
    relatedArticleIds: [],
    tags: ["progressao de regime"],
    alternatives: [
      { id: "a", text: "1/3." },
      { id: "b", text: "16%.", correct: true },
      { id: "c", text: "Metade." },
      { id: "d", text: "2/3." }
    ]
  }),
  defineQuestion({
    id: "q-oab40-056",
    subjectId: "penal",
    themeId: "crimes-patrimonio",
    examId: "oab-40",
    year: 2024,
    questionNumber: 56,
    difficulty: "hard",
    statement: "Receptação qualificada (art. 180, §1o) ocorre quando:",
    explanation: "Atividade comercial ou industrial.",
    support: "CP, art. 180, §1o.",
    relatedArticleIds: [],
    tags: ["receptacao"],
    alternatives: [
      { id: "a", text: "Recebe com violência." },
      { id: "b", text: "Em atividade comercial ou industrial.", correct: true },
      { id: "c", text: "Em concurso com 3 pessoas." },
      { id: "d", text: "De organização criminosa." }
    ]
  }),
  defineQuestion({
    id: "q-oab40-057",
    subjectId: "penal",
    themeId: "lei-penal-tempo",
    examId: "oab-40",
    year: 2024,
    questionNumber: 57,
    difficulty: "medium",
    statement: "A lei mais grave aplicada mesmo após revogada chama-se:",
    explanation: "Ultratividade.",
    support: "CP, art. 2o.",
    relatedArticleIds: [],
    tags: ["ultratividade"],
    alternatives: [
      { id: "a", text: "Retroatividade benéfica." },
      { id: "b", text: "Abolitio criminis." },
      { id: "c", text: "Ultratividade.", correct: true },
      { id: "d", text: "Irretroatividade." }
    ]
  }),
  defineQuestion({
    id: "q-oab40-058",
    subjectId: "processo-penal",
    themeId: "acao-penal",
    examId: "oab-40",
    year: 2024,
    questionNumber: 58,
    difficulty: "medium",
    statement: "Ação privada subsidiária cabe quando:",
    explanation: "Art. 29 CPP: MP não oferece denúncia sem arquivamento.",
    support: "CPP, art. 29.",
    relatedArticleIds: [],
    tags: ["acao privada subsidiaria"],
    alternatives: [
      { id: "a", text: "Vítima discordar da denúncia." },
      { id: "b", text: "MP não oferece denúncia sem arquivamento.", correct: true },
      { id: "c", text: "Crime for condicionado." },
      { id: "d", text: "IP for arquivado." }
    ]
  }),
  defineQuestion({
    id: "q-oab40-059",
    subjectId: "processo-penal",
    themeId: "prisoes",
    examId: "oab-40",
    year: 2024,
    questionNumber: 59,
    difficulty: "hard",
    statement: "Prisão domiciliar pode ser concedida ao:",
    explanation: "Art. 318 CPP: maior de 80 anos ou gestante.",
    support: "CPP, art. 318.",
    relatedArticleIds: [],
    tags: ["prisao domiciliar"],
    alternatives: [
      { id: "a", text: "Réu primário." },
      { id: "b", text: "Maior de 80 anos ou gestante.", correct: true },
      { id: "c", text: "Acusado sem violência." },
      { id: "d", text: "Funcionário público estável." }
    ]
  }),
  defineQuestion({
    id: "q-oab40-060",
    subjectId: "processo-penal",
    themeId: "provas-cpp",
    examId: "oab-40",
    year: 2024,
    questionNumber: 60,
    difficulty: "medium",
    statement: "A confissão no processo penal:",
    explanation: "Art. 197 CPP: deve ser confrontada com os demais elementos.",
    support: "CPP, art. 197.",
    relatedArticleIds: [],
    tags: ["confissao"],
    alternatives: [
      { id: "a", text: "É prova plena." },
      { id: "b", text: "Deve ser confrontada com os demais elementos.", correct: true },
      { id: "c", text: "Inadmissível." },
      { id: "d", text: "Basta para pronúncia." }
    ]
  }),
  defineQuestion({
    id: "q-oab40-061",
    subjectId: "processo-penal",
    themeId: "habeas-corpus-cpp",
    examId: "oab-40",
    year: 2024,
    questionNumber: 61,
    difficulty: "hard",
    statement: "O MS criminal tutela:",
    explanation: "Direito líquido e certo não amparado por habeas corpus.",
    support: "CF/88, art. 5o, LXIX.",
    relatedArticleIds: [],
    tags: ["mandado de seguranca criminal"],
    alternatives: [
      { id: "a", text: "A locomoção." },
      { id: "b", text: "Direito líquido e certo não amparado por habeas corpus.", correct: true },
      { id: "c", text: "Sentença condenatória." },
      { id: "d", text: "Substitui recurso especial." }
    ]
  }),
  defineQuestion({
    id: "q-oab40-062",
    subjectId: "processo-penal",
    themeId: "competencia-cpp",
    examId: "oab-40",
    year: 2024,
    questionNumber: 62,
    difficulty: "medium",
    statement: "Crimes militares das Forças Armadas são julgados pela:",
    explanation: "Art. 124 CF.",
    support: "CF/88, art. 124.",
    relatedArticleIds: [],
    tags: ["justica militar"],
    alternatives: [
      { id: "a", text: "Justiça Federal." },
      { id: "b", text: "Justiça Estadual." },
      { id: "c", text: "Justiça Militar da União.", correct: true },
      { id: "d", text: "Tribunal do Júri." }
    ]
  }),
  defineQuestion({
    id: "q-oab40-063",
    subjectId: "processo-penal",
    themeId: "inquerito-policial",
    examId: "oab-40",
    year: 2024,
    questionNumber: 63,
    difficulty: "hard",
    statement: "O IP com indiciado preso deve ser concluído em:",
    explanation: "Art. 10 CPP: 10 dias para o preso.",
    support: "CPP, art. 10.",
    relatedArticleIds: [],
    tags: ["inquerito policial"],
    alternatives: [
      { id: "a", text: "5 dias." },
      { id: "b", text: "10 dias para o preso e 30 para o solto.", correct: true },
      { id: "c", text: "10 dias improrrogável." },
      { id: "d", text: "30 dias em qualquer caso." }
    ]
  }),
  defineQuestion({
    id: "q-oab40-064",
    subjectId: "trabalhista",
    themeId: "contrato-trabalho",
    examId: "oab-40",
    year: 2024,
    questionNumber: 64,
    difficulty: "medium",
    statement: "O contrato intermitente caracteriza-se pela:",
    explanation: "Art. 443, §3o, CLT.",
    support: "CLT, art. 443.",
    relatedArticleIds: [],
    tags: ["contrato intermitente"],
    alternatives: [
      { id: "a", text: "Prestação contínua." },
      { id: "b", text: "Alternância de períodos de prestação e inatividade.", correct: true },
      { id: "c", text: "Substituição do prazo determinado." },
      { id: "d", text: "Vedação de mais de um empregador." }
    ]
  }),
  defineQuestion({
    id: "q-oab40-065",
    subjectId: "trabalhista",
    themeId: "jornada-trabalho",
    examId: "oab-40",
    year: 2024,
    questionNumber: 65,
    difficulty: "hard",
    statement: "O banco de horas anual exige:",
    explanation: "Art. 59, §2o CLT.",
    support: "CLT, art. 59.",
    relatedArticleIds: [],
    tags: ["banco de horas"],
    alternatives: [
      { id: "a", text: "Autorização do empregado." },
      { id: "b", text: "Convenção ou acordo coletivo para prazo acima de 6 meses.", correct: true },
      { id: "c", text: "Homologação pela DRT." },
      { id: "d", text: "Autorização judicial." }
    ]
  }),
  defineQuestion({
    id: "q-oab40-066",
    subjectId: "trabalhista",
    themeId: "rescisao-contrato",
    examId: "oab-40",
    year: 2024,
    questionNumber: 66,
    difficulty: "medium",
    statement: "No distrato (art. 484-A CLT), o empregado recebe:",
    explanation: "Metade do aviso prévio e 20% de multa FGTS.",
    support: "CLT, art. 484-A.",
    relatedArticleIds: [],
    tags: ["distrato"],
    alternatives: [
      { id: "a", text: "Todos os direitos da demissão sem justa causa." },
      { id: "b", text: "Metade do aviso prévio, 20% FGTS; saque de 80%.", correct: true },
      { id: "c", text: "Apenas saldo e férias." },
      { id: "d", text: "Mesmos do pedido de demissão." }
    ]
  }),
  defineQuestion({
    id: "q-oab40-067",
    subjectId: "trabalhista",
    themeId: "estabilidade",
    examId: "oab-40",
    year: 2024,
    questionNumber: 67,
    difficulty: "hard",
    statement: "O empregado acidentado tem garantia de 12 meses pela:",
    explanation: "Lei 8.213/1991, art. 118.",
    support: "Lei 8.213/1991.",
    relatedArticleIds: [],
    tags: ["acidente de trabalho"],
    alternatives: [
      { id: "a", text: "CLT." },
      { id: "b", text: "Lei 8.213/1991.", correct: true },
      { id: "c", text: "Código Civil." },
      { id: "d", text: "Regulamento da Previdência." }
    ]
  }),
  defineQuestion({
    id: "q-oab40-068",
    subjectId: "trabalhista",
    themeId: "processo-trabalho",
    examId: "oab-40",
    year: 2024,
    questionNumber: 68,
    difficulty: "medium",
    statement: "Das decisões das Varas do Trabalho cabe:",
    explanation: "Art. 895, a, CLT.",
    support: "CLT, art. 895.",
    relatedArticleIds: [],
    tags: ["recurso ordinario"],
    alternatives: [
      { id: "a", text: "Recurso de Revista ao TST." },
      { id: "b", text: "Recurso Ordinário ao TRT.", correct: true },
      { id: "c", text: "Agravo de Instrumento." },
      { id: "d", text: "Embargos ao juízo." }
    ]
  }),
  defineQuestion({
    id: "q-oab40-069",
    subjectId: "trabalhista",
    themeId: "sindicatos",
    examId: "oab-40",
    year: 2024,
    questionNumber: 69,
    difficulty: "hard",
    statement: "Convenção coletiva é entre:",
    explanation: "Art. 611 CLT: sindicatos dos empregados e empregadores.",
    support: "CLT, art. 611.",
    relatedArticleIds: [],
    tags: ["convencao coletiva"],
    alternatives: [
      { id: "a", text: "Sindicato e empresa." },
      { id: "b", text: "Sindicatos de empregados e empregadores.", correct: true },
      { id: "c", text: "Ministério do Trabalho e sindicatos." },
      { id: "d", text: "Empregados e empregadores individualmente." }
    ]
  }),
  defineQuestion({
    id: "q-oab40-070",
    subjectId: "trabalhista",
    themeId: "ferias-licencas",
    examId: "oab-40",
    year: 2024,
    questionNumber: 70,
    difficulty: "medium",
    statement: "Férias após o prazo concessivo:",
    explanation: "Art. 137 CLT: em dobro mais o terço.",
    support: "CLT, art. 137.",
    relatedArticleIds: [],
    tags: ["ferias em dobro"],
    alternatives: [
      { id: "a", text: "Simples com 1/3." },
      { id: "b", text: "Em dobro mais o terço.", correct: true },
      { id: "c", text: "Apenas em dobro." },
      { id: "d", text: "Indenização de um salário." }
    ]
  }),
  defineQuestion({
    id: "q-oab40-071",
    subjectId: "empresarial",
    themeId: "titulos-credito",
    examId: "oab-40",
    year: 2024,
    questionNumber: 71,
    difficulty: "medium",
    statement: "O aceite na letra de câmbio:",
    explanation: "Torna o sacado devedor principal.",
    support: "LUG, art. 25.",
    relatedArticleIds: [],
    tags: ["letra de cambio"],
    alternatives: [
      { id: "a", text: "É obrigatório." },
      { id: "b", text: "Torna o sacado devedor principal.", correct: true },
      { id: "c", text: "Pode ser substituído por endosso." },
      { id: "d", text: "Sem obrigação antes do vencimento." }
    ]
  }),
  defineQuestion({
    id: "q-oab40-072",
    subjectId: "empresarial",
    themeId: "sociedades",
    examId: "oab-40",
    year: 2024,
    questionNumber: 72,
    difficulty: "hard",
    statement: "Comanditários na comandita simples:",
    explanation: "Art. 1045 CC.",
    support: "CC/2002, art. 1045.",
    relatedArticleIds: [],
    tags: ["comandita"],
    alternatives: [
      { id: "a", text: "Responsabilidade ilimitada." },
      { id: "b", text: "Responsabilidade limitada às quotas, sem gestão.", correct: true },
      { id: "c", text: "Administram livremente." },
      { id: "d", text: "Respondem só pelas obrigações tributárias." }
    ]
  }),
  defineQuestion({
    id: "q-oab40-073",
    subjectId: "empresarial",
    themeId: "falencia-recuperacao",
    examId: "oab-40",
    year: 2024,
    questionNumber: 73,
    difficulty: "medium",
    statement: "O administrador judicial na recuperação:",
    explanation: "Art. 22 Lei 11.101/2005.",
    support: "Lei 11.101/2005, art. 22.",
    relatedArticleIds: [],
    tags: ["administrador judicial"],
    alternatives: [
      { id: "a", text: "Assume a gestão." },
      { id: "b", text: "Fiscaliza o devedor e auxilia o Comitê.", correct: true },
      { id: "c", text: "Representa os credores." },
      { id: "d", text: "Avalia e liquida ativos." }
    ]
  }),
  defineQuestion({
    id: "q-oab40-074",
    subjectId: "empresarial",
    themeId: "estabelecimento",
    examId: "oab-40",
    year: 2024,
    questionNumber: 74,
    difficulty: "hard",
    statement: "O nome empresarial tem eficácia:",
    explanation: "Art. 1166 CC.",
    support: "CC/2002, art. 1166.",
    relatedArticleIds: [],
    tags: ["nome empresarial"],
    alternatives: [
      { id: "a", text: "No INPI." },
      { id: "b", text: "Na unidade federativa de registro.", correct: true },
      { id: "c", text: "Pelo simples uso." },
      { id: "d", text: "Em qualquer cartório." }
    ]
  }),
  defineQuestion({
    id: "q-oab40-075",
    subjectId: "empresarial",
    themeId: "titulos-credito",
    examId: "oab-40",
    year: 2024,
    questionNumber: 75,
    difficulty: "medium",
    statement: "A cédula de crédito bancário representa:",
    explanation: "Qualquer operação de crédito bancário.",
    support: "Lei 10.931/2004.",
    relatedArticleIds: [],
    tags: ["cedula de credito bancario"],
    alternatives: [
      { id: "a", text: "Apenas financiamento imobiliário." },
      { id: "b", text: "Qualquer operação de crédito bancário.", correct: true },
      { id: "c", text: "Contratos em moeda estrangeira." },
      { id: "d", text: "Crédito agrícola com hipoteca." }
    ]
  }),
  defineQuestion({
    id: "q-oab40-076",
    subjectId: "consumidor",
    themeId: "responsabilidade-fornecedor",
    examId: "oab-40",
    year: 2024,
    questionNumber: 76,
    difficulty: "medium",
    statement: "Vício e fato do produto diferem porque:",
    explanation: "Vício é inadequação; fato é defeito que causa dano além do produto.",
    support: "CDC, art. 12; 18.",
    relatedArticleIds: [],
    tags: ["vicio", "fato"],
    alternatives: [
      { id: "a", text: "O vício gera responsabilidade subjetiva." },
      { id: "b", text: "O vício é inadequação; o fato causa dano além do produto.", correct: true },
      { id: "c", text: "O vício se argui só em 30 dias." },
      { id: "d", text: "O fato abrange só dano material." }
    ]
  }),
  defineQuestion({
    id: "q-oab40-077",
    subjectId: "consumidor",
    themeId: "praticas-abusivas",
    examId: "oab-40",
    year: 2024,
    questionNumber: 77,
    difficulty: "hard",
    statement: "Cláusulas em desvantagem exagerada são:",
    explanation: "Art. 51 CDC: nulas de pleno direito.",
    support: "CDC, art. 51.",
    relatedArticleIds: [],
    tags: ["clausulas abusivas"],
    alternatives: [
      { id: "a", text: "Anuláveis." },
      { id: "b", text: "Nulas de pleno direito.", correct: true },
      { id: "c", text: "Apenas penalidade administrativa." },
      { id: "d", text: "Ineficazes para quem arguiu." }
    ]
  }),
  defineQuestion({
    id: "q-oab40-078",
    subjectId: "consumidor",
    themeId: "protecao-contratual",
    examId: "oab-40",
    year: 2024,
    questionNumber: 78,
    difficulty: "medium",
    statement: "O prazo para sanar vício é:",
    explanation: "Art. 18, §1o CDC: 30 dias.",
    support: "CDC, art. 18.",
    relatedArticleIds: [],
    tags: ["vicio", "30 dias"],
    alternatives: [
      { id: "a", text: "7 dias." },
      { id: "b", text: "30 dias.", correct: true },
      { id: "c", text: "60 dias." },
      { id: "d", text: "15 dias." }
    ]
  }),
  defineQuestion({
    id: "q-oab40-079",
    subjectId: "consumidor",
    themeId: "tutela-consumidor",
    examId: "oab-40",
    year: 2024,
    questionNumber: 79,
    difficulty: "hard",
    statement: "Desconsideração no CDC (art. 28) em hipóteses:",
    explanation: "Mais amplas que o CC.",
    support: "CDC, art. 28.",
    relatedArticleIds: [],
    tags: ["desconsideracao CDC"],
    alternatives: [
      { id: "a", text: "Idênticas ao CC." },
      { id: "b", text: "Patrimônio insuficiente." },
      { id: "c", text: "Mais amplas que o CC.", correct: true },
      { id: "d", text: "Apenas com confusão patrimonial." }
    ]
  }),
  defineQuestion({
    id: "q-oab40-080",
    subjectId: "consumidor",
    themeId: "praticas-abusivas",
    examId: "oab-40",
    year: 2024,
    questionNumber: 80,
    difficulty: "medium",
    statement: "Fornecedor que descumpre oferta deve:",
    explanation: "Art. 35 CDC.",
    support: "CDC, art. 35.",
    relatedArticleIds: [],
    tags: ["oferta"],
    alternatives: [
      { id: "a", text: "Pagar só multa." },
      { id: "b", text: "Cumprir forçosamente ou consumidor rescinde com perdas e danos.", correct: true },
      { id: "c", text: "Ressarcir só materialmente." },
      { id: "d", text: "Publicar retificação." }
    ]
  }),
  defineQuestion({
    id: "q-oab39-001",
    subjectId: "etica",
    themeId: "incompatibilidades",
    examId: "oab-39",
    year: 2024,
    questionNumber: 1,
    difficulty: "medium",
    statement: "Acerca das incompatibilidades e impedimentos ao exercício da advocacia, assinale a afirmativa correta:",
    explanation: "Art. 28, I, EAOAB: membros do MP são incompatíveis; professores de direito têm impedimento apenas em causas da própria instituição.",
    support: "Lei 8.906/1994, art. 28; 30.",
    relatedArticleIds: [],
    tags: ["incompatibilidades", "MP"],
    alternatives: [
      { id: "a", text: "O membro do Ministério Público ativo tem impedimento, mas não incompatibilidade." },
      { id: "b", text: "O membro do Ministério Público ativo tem incompatibilidade com o exercício da advocacia.", correct: true },
      { id: "c", text: "O professor universitário tem incompatibilidade total com a advocacia." },
      { id: "d", text: "Incompatibilidade e impedimento são institutos idênticos no EAOAB." }
    ]
  }),
  defineQuestion({
    id: "q-oab39-002",
    subjectId: "etica",
    themeId: "deveres",
    examId: "oab-39",
    year: 2024,
    questionNumber: 2,
    difficulty: "hard",
    statement: "O advogado que, no exercício da profissão, violar o dever de lealdade processual, praticando atos protelatórios, comete:",
    explanation: "Art. 34, VI, EAOAB: exercitar atividade que sujeite o advogado à sanção disciplinar é infração.",
    support: "Lei 8.906/1994, art. 34, VI; CED, art. 2o.",
    relatedArticleIds: [],
    tags: ["deveres", "lealdade processual"],
    alternatives: [
      { id: "a", text: "Mera irregularidade processual, sem repercussão ética." },
      { id: "b", text: "Infração disciplinar e responsabilidade perante o cliente.", correct: true },
      { id: "c", text: "Crime de desobediência." },
      { id: "d", text: "Nenhuma consequência ética, apenas processual." }
    ]
  }),
  defineQuestion({
    id: "q-oab39-003",
    subjectId: "etica",
    themeId: "honorarios",
    examId: "oab-39",
    year: 2024,
    questionNumber: 3,
    difficulty: "medium",
    statement: "O advogado que receber indevidamente valores do cliente, retendo-os sem justificativa, comete:",
    explanation: "Art. 34, XXIV, EAOAB: reter os autos de processo depois de encerrada a prestação de serviço ou receber indevidamente valores é infração disciplinar.",
    support: "Lei 8.906/1994, art. 34, XXIV.",
    relatedArticleIds: [],
    tags: ["honorarios", "retencao indevida"],
    alternatives: [
      { id: "a", text: "Enriquecimento ilícito, sem consequência disciplinar." },
      { id: "b", text: "Infração disciplinar, passível de sanção pela OAB.", correct: true },
      { id: "c", text: "Apenas responsabilidade civil perante o cliente." },
      { id: "d", text: "Crime de estelionato, sujeito à persecução penal exclusivamente." }
    ]
  }),
  defineQuestion({
    id: "q-oab39-004",
    subjectId: "etica",
    themeId: "prerrogativas",
    examId: "oab-39",
    year: 2024,
    questionNumber: 4,
    difficulty: "medium",
    statement: "A prerrogativa do advogado de ter acesso ao acusado preso, mesmo sem procuração, é:",
    explanation: "Art. 7o, III, EAOAB: o advogado pode comunicar-se com seus clientes pessoalmente e reservadamente, mesmo recolhidos em estabelecimentos civis ou militares.",
    support: "Lei 8.906/1994, art. 7o, III.",
    relatedArticleIds: [],
    tags: ["prerrogativas", "acusado preso"],
    alternatives: [
      { id: "a", text: "Inexistente sem procuração devidamente outorgada." },
      { id: "b", text: "Garantida pelo EAOAB, mesmo sem procuração.", correct: true },
      { id: "c", text: "Condicionada à autorização expressa da autoridade carcerária." },
      { id: "d", text: "Restrita às hipóteses de flagrante delito." }
    ]
  }),
  defineQuestion({
    id: "q-oab39-005",
    subjectId: "etica",
    themeId: "sigilo-profissional",
    examId: "oab-39",
    year: 2024,
    questionNumber: 5,
    difficulty: "hard",
    statement: "Em relação ao sigilo profissional, é correto afirmar que o advogado:",
    explanation: "Art. 25-27, CED: o sigilo é irrenunciável e pode ser invocado até como testemunha.",
    support: "CED/OAB, art. 25-27.",
    relatedArticleIds: [],
    tags: ["sigilo profissional"],
    alternatives: [
      { id: "a", text: "Pode revelar informações sigilosas quando intimado como testemunha pelo juízo." },
      { id: "b", text: "Deve revelar informações que lhe foram confidenciadas se determinado por autoridade administrativa." },
      { id: "c", text: "Pode ser compelido a depor sobre fatos que lhe foram confidenciados no exercício profissional." },
      { id: "d", text: "Pode invocar o sigilo como testemunha, não podendo ser compelido a revelar informações confidenciadas.", correct: true }
    ]
  }),
  defineQuestion({
    id: "q-oab39-006",
    subjectId: "etica",
    themeId: "publicidade",
    examId: "oab-39",
    year: 2024,
    questionNumber: 6,
    difficulty: "medium",
    statement: "A publicidade advocatícia é permitida pelo CED desde que tenha caráter meramente informativo. É vedada:",
    explanation: "CED art. 39-41: captação de clientela, mercantilização, captação com oferta de serviços.",
    support: "CED/OAB, art. 39-41.",
    relatedArticleIds: [],
    tags: ["publicidade", "captacao clientela"],
    alternatives: [
      { id: "a", text: "A divulgação do número de OAB e e-mail do escritório." },
      { id: "b", text: "A participação em programas de TV como comentarista jurídico." },
      { id: "c", text: "A captação de clientela com oferta gratuita de consultas via redes sociais.", correct: true },
      { id: "d", text: "A publicação de artigos jurídicos em blogs e sites profissionais." }
    ]
  }),
  defineQuestion({
    id: "q-oab39-007",
    subjectId: "etica",
    themeId: "inscricao-oab",
    examId: "oab-39",
    year: 2024,
    questionNumber: 7,
    difficulty: "easy",
    statement: "O estudante de Direito que ainda não obteve o diploma pode exercer a atividade de advocacia?",
    explanation: "Art. 3o e 8o, EAOAB: somente o bacharel inscrito na OAB pode exercer a advocacia.",
    support: "Lei 8.906/1994, art. 3o; 8o.",
    relatedArticleIds: [],
    tags: ["inscricao OAB", "diploma"],
    alternatives: [
      { id: "a", text: "Sim, a partir do 4o período, como estagiário com poderes plenos." },
      { id: "b", text: "Sim, mas apenas em causas de menor complexidade." },
      { id: "c", text: "Não, pois o exercício da advocacia exige inscrição na OAB, condicionada ao diploma.", correct: true },
      { id: "d", text: "Sim, mediante supervisão de advogado formado." }
    ]
  }),
  defineQuestion({
    id: "q-oab39-008",
    subjectId: "etica",
    themeId: "infrações-disciplinares",
    examId: "oab-39",
    year: 2024,
    questionNumber: 8,
    difficulty: "hard",
    statement: "O advogado que, em causa judicial, lançar expressões injuriosas nos autos, comete:",
    explanation: "Art. 34, XIV, EAOAB: lançar, em autos, expressão injuriosa ou atentatória à dignidade da Justiça é infração disciplinar.",
    support: "Lei 8.906/1994, art. 34, XIV.",
    relatedArticleIds: [],
    tags: ["infracoes disciplinares", "dignidade da justica"],
    alternatives: [
      { id: "a", text: "Apenas ato atentatório à dignidade da Justiça, sem infração disciplinar." },
      { id: "b", text: "Infração disciplinar, além da responsabilidade perante o Poder Judiciário.", correct: true },
      { id: "c", text: "Mera irregularidade processual sem consequência ética." },
      { id: "d", text: "Crime de desacato, sem infração disciplinar associada." }
    ]
  }),
  defineQuestion({
    id: "q-oab39-009",
    subjectId: "etica",
    themeId: "honorarios",
    examId: "oab-39",
    year: 2024,
    questionNumber: 9,
    difficulty: "medium",
    statement: "Acerca dos honorários advocatícios, é correto afirmar que o direito ao recebimento:",
    explanation: "Art. 22, EAOAB: o advogado tem direito aos honorários em qualquer hipótese, salvo contrato em contrário, mesmo que a causa seja perdida.",
    support: "Lei 8.906/1994, art. 22.",
    relatedArticleIds: [],
    tags: ["honorarios", "resultado da causa"],
    alternatives: [
      { id: "a", text: "Está condicionado ao êxito da demanda, salvo contrário acordo." },
      { id: "b", text: "Só surge após o trânsito em julgado da decisão favorável." },
      { id: "c", text: "Independe do resultado da causa, cabendo ao advogado os honorários pelos serviços prestados.", correct: true },
      { id: "d", text: "É renunciável apenas nas causas de assistência judiciária gratuita." }
    ]
  }),
  defineQuestion({
    id: "q-oab39-010",
    subjectId: "etica",
    themeId: "deveres",
    examId: "oab-39",
    year: 2024,
    questionNumber: 10,
    difficulty: "medium",
    statement: "O advogado que patrocinar, simultaneamente, partes com interesses opostos comete:",
    explanation: "Art. 34, XIII, EAOAB: representar partes com interesses opostos é infração disciplinar grave.",
    support: "Lei 8.906/1994, art. 34, XIII.",
    relatedArticleIds: [],
    tags: ["conflito de interesses", "partes opostas"],
    alternatives: [
      { id: "a", text: "Mera irregularidade processual sanável." },
      { id: "b", text: "Infração disciplinar grave.", correct: true },
      { id: "c", text: "Nenhuma infração se contar com a anuência de ambas as partes." },
      { id: "d", text: "Crime de prevaricação." }
    ]
  }),
  defineQuestion({
    id: "q-oab39-011",
    subjectId: "constitucional",
    themeId: "direitos-fundamentais",
    examId: "oab-39",
    year: 2024,
    questionNumber: 11,
    difficulty: "medium",
    statement: "O princípio da presunção de não culpabilidade (inocência), previsto no art. 5o, LVII, da CF/88, estabelece que:",
    explanation: "Ninguém será considerado culpado até o trânsito em julgado de sentença penal condenatória.",
    support: "CF/88, art. 5o, LVII.",
    relatedArticleIds: [],
    tags: ["presuncao de inocencia"],
    alternatives: [
      { id: "a", text: "O acusado só pode ser preso após o trânsito em julgado da condenação." },
      { id: "b", text: "Ninguém será considerado culpado até o trânsito em julgado de sentença penal condenatória.", correct: true },
      { id: "c", text: "O acusado tem o ônus de provar sua inocência." },
      { id: "d", text: "A prisão preventiva é vedada antes do trânsito em julgado." }
    ]
  }),
  defineQuestion({
    id: "q-oab39-012",
    subjectId: "constitucional",
    themeId: "controle-constitucionalidade",
    examId: "oab-39",
    year: 2024,
    questionNumber: 12,
    difficulty: "hard",
    statement: "Na arguição de descumprimento de preceito fundamental (ADPF), é correto afirmar que:",
    explanation: "A ADPF é instrumento subsidiário (art. 4o, §1o, Lei 9.882/1999), cabível quando não houver outro meio eficaz.",
    support: "CF/88, art. 102, §1o; Lei 9.882/1999.",
    relatedArticleIds: [],
    tags: ["ADPF", "subsidiariedade"],
    alternatives: [
      { id: "a", text: "Pode impugnar qualquer lei federal, prescindindo de subsidiariedade." },
      { id: "b", text: "É instrumento subsidiário, cabível quando não houver outro meio eficaz de sanar a lesão.", correct: true },
      { id: "c", text: "É admissível apenas para impugnar lei anterior à Constituição de 1988." },
      { id: "d", text: "Tem os mesmos legitimados da ADI, exceto o Conselho Federal da OAB." }
    ]
  }),
  defineQuestion({
    id: "q-oab39-013",
    subjectId: "constitucional",
    themeId: "poder-judiciario",
    examId: "oab-39",
    year: 2024,
    questionNumber: 13,
    difficulty: "medium",
    statement: "O Conselho Nacional de Justiça (CNJ), criado pela EC 45/2004, tem como função principal:",
    explanation: "O CNJ é órgão de controle administrativo e disciplinar do Poder Judiciário.",
    support: "CF/88, art. 103-B.",
    relatedArticleIds: [],
    tags: ["CNJ", "controle administrativo"],
    alternatives: [
      { id: "a", text: "Julgar recursos das decisões dos Tribunais de Justiça estaduais." },
      { id: "b", text: "Exercer o controle da atuação administrativa e financeira do Poder Judiciário.", correct: true },
      { id: "c", text: "Substituir o STJ nas causas de direito federal infraconstitucional." },
      { id: "d", text: "Eleger o Presidente do STF e do STJ." }
    ]
  }),
  defineQuestion({
    id: "q-oab39-014",
    subjectId: "constitucional",
    themeId: "organizacao-estado",
    examId: "oab-39",
    year: 2024,
    questionNumber: 14,
    difficulty: "hard",
    statement: "A intervenção federal nos Estados pode ser decretada pelo Presidente da República para:",
    explanation: "Art. 34, VII, CF: garantir o cumprimento dos princípios constitucionais sensíveis.",
    support: "CF/88, art. 34.",
    relatedArticleIds: [],
    tags: ["intervencao federal", "principios sensiveis"],
    alternatives: [
      { id: "a", text: "Resolver conflitos políticos entre governadores." },
      { id: "b", text: "Garantir o cumprimento dos princípios constitucionais sensíveis (art. 34, VII, CF).", correct: true },
      { id: "c", text: "Implementar políticas econômicas federais nos estados." },
      { id: "d", text: "Substituir o governador eleito que cometeu crime eleitoral." }
    ]
  }),
  defineQuestion({
    id: "q-oab39-015",
    subjectId: "constitucional",
    themeId: "direitos-fundamentais",
    examId: "oab-39",
    year: 2024,
    questionNumber: 15,
    difficulty: "medium",
    statement: "O direito à tutela coletiva, que protege interesses transindividuais, tem como instrumento constitucional:",
    explanation: "A ação popular (art. 5o, LXXIII, CF) e o mandado de segurança coletivo (art. 5o, LXX) são instrumentos de tutela coletiva.",
    support: "CF/88, art. 5o, LXXIII; LXX.",
    relatedArticleIds: [],
    tags: ["acao popular", "mandado de seguranca coletivo"],
    alternatives: [
      { id: "a", text: "Apenas o habeas corpus coletivo, previsto na CF." },
      { id: "b", text: "A ação popular e o mandado de segurança coletivo, previstos na CF/88.", correct: true },
      { id: "c", text: "A ação civil pública como único instrumento, sendo as demais infraconstitucionais." },
      { id: "d", text: "Apenas a ação direta de inconstitucionalidade por omissão." }
    ]
  }),
  defineQuestion({
    id: "q-oab39-016",
    subjectId: "constitucional",
    themeId: "poder-legislativo",
    examId: "oab-39",
    year: 2024,
    questionNumber: 16,
    difficulty: "hard",
    statement: "A medida provisória que não for convertida em lei dentro do prazo constitucional:",
    explanation: "Art. 62, §3o, CF: perde eficácia desde a edição, cabendo ao Congresso disciplinar as relações jurídicas dela decorrentes.",
    support: "CF/88, art. 62, §3o.",
    relatedArticleIds: [],
    tags: ["medida provisoria", "perda de eficacia"],
    alternatives: [
      { id: "a", text: "Pode ser reeditada pelo Presidente sem qualquer restrição." },
      { id: "b", text: "Perde eficácia desde a edição, cabendo ao Congresso disciplinar as relações dela decorrentes.", correct: true },
      { id: "c", text: "Converte-se automaticamente em projeto de lei ordinária." },
      { id: "d", text: "Mantém seus efeitos até que o Congresso delibere expressamente." }
    ]
  }),
  defineQuestion({
    id: "q-oab39-017",
    subjectId: "constitucional",
    themeId: "poder-executivo",
    examId: "oab-39",
    year: 2024,
    questionNumber: 17,
    difficulty: "medium",
    statement: "O controle externo da atividade policial, nos termos da Constituição Federal, compete ao:",
    explanation: "Art. 129, VII, CF: ao Ministério Público compete o controle externo da atividade policial.",
    support: "CF/88, art. 129, VII.",
    relatedArticleIds: [],
    tags: ["controle externo", "policia", "MP"],
    alternatives: [
      { id: "a", text: "Poder Judiciário, por meio do CNJ." },
      { id: "b", text: "Ministério Público.", correct: true },
      { id: "c", text: "Polícia Federal, em relação às polícias estaduais." },
      { id: "d", text: "Congresso Nacional, por meio de suas comissões." }
    ]
  }),
  defineQuestion({
    id: "q-oab39-018",
    subjectId: "constitucional",
    themeId: "mandado-seguranca",
    examId: "oab-39",
    year: 2024,
    questionNumber: 18,
    difficulty: "medium",
    statement: "O mandado de segurança individual pode ser impetrado no prazo decadencial de:",
    explanation: "Lei 12.016/2009, art. 23: 120 dias contados da ciência do ato impugnado.",
    support: "Lei 12.016/2009, art. 23.",
    relatedArticleIds: [],
    tags: ["mandado de seguranca", "prazo decadencial", "120 dias"],
    alternatives: [
      { id: "a", text: "30 dias da ciência do ato impugnado." },
      { id: "b", text: "60 dias do trânsito em julgado." },
      { id: "c", text: "120 dias da ciência do ato impugnado.", correct: true },
      { id: "d", text: "1 ano do ato impugnado." }
    ]
  }),
  defineQuestion({
    id: "q-oab39-019",
    subjectId: "constitucional",
    themeId: "adi-ação-direta",
    examId: "oab-39",
    year: 2024,
    questionNumber: 19,
    difficulty: "hard",
    statement: "A ADI interventiva (ação direta de inconstitucionalidade interventiva) é proposta pelo:",
    explanation: "Art. 36, III, CF c/c art. 103-A: o PGR propõe a ADI interventiva perante o STF para assegurar observância dos princípios sensíveis.",
    support: "CF/88, art. 36, III.",
    relatedArticleIds: [],
    tags: ["ADI interventiva", "PGR"],
    alternatives: [
      { id: "a", text: "Presidente da República diretamente perante o STF." },
      { id: "b", text: "Procurador-Geral da República perante o STF.", correct: true },
      { id: "c", text: "Governador do Estado prejudicado." },
      { id: "d", text: "Qualquer dos legitimados da ADI ordinária." }
    ]
  }),
  defineQuestion({
    id: "q-oab39-020",
    subjectId: "constitucional",
    themeId: "principios-constitucionais",
    examId: "oab-39",
    year: 2024,
    questionNumber: 20,
    difficulty: "easy",
    statement: "A forma federativa de Estado no Brasil é cláusula pétrea, não podendo ser abolida nem mesmo por emenda constitucional. Essa proteção está prevista no:",
    explanation: "Art. 60, §4o, I, CF: as cláusulas pétreas incluem a forma federativa de Estado.",
    support: "CF/88, art. 60, §4o, I.",
    relatedArticleIds: [],
    tags: ["clausula petrea", "forma federativa"],
    alternatives: [
      { id: "a", text: "Art. 18 da CF, que trata da organização político-administrativa." },
      { id: "b", text: "Art. 60, §4o, I, que lista as limitações materiais ao poder de reforma.", correct: true },
      { id: "c", text: "Art. 1o da CF, que define os fundamentos da República." },
      { id: "d", text: "Art. 34 da CF, que trata da intervenção federal." }
    ]
  }),
  defineQuestion({
    id: "q-oab39-021",
    subjectId: "administrativo",
    themeId: "licitacao",
    examId: "oab-39",
    year: 2024,
    questionNumber: 21,
    difficulty: "hard",
    statement: "Na Nova Lei de Licitações (Lei 14.133/2021), o diálogo competitivo:",
    explanation: "Art. 32, Lei 14.133/2021: o diálogo competitivo é modalidade para contratos de grande complexidade, em que a Administração dialoga com os licitantes para desenvolver a solução.",
    support: "Lei 14.133/2021, art. 32.",
    relatedArticleIds: [],
    tags: ["dialogo competitivo", "licitacao"],
    alternatives: [
      { id: "a", text: "Equivale ao pregão eletrônico com menor preço." },
      { id: "b", text: "É modalidade para contratos complexos em que a Administração dialoga com licitantes para desenvolver a solução.", correct: true },
      { id: "c", text: "Substitui a tomada de preços para valores até R$ 1,5 milhão." },
      { id: "d", text: "É exclusivo para contratação de serviços de tecnologia." }
    ]
  }),
  defineQuestion({
    id: "q-oab39-022",
    subjectId: "administrativo",
    themeId: "atos-administrativos",
    examId: "oab-39",
    year: 2024,
    questionNumber: 22,
    difficulty: "medium",
    statement: "A revogação de atos administrativos difere da anulação porque:",
    explanation: "A revogação extingue atos legais por conveniência e oportunidade (efeito ex nunc); a anulação extingue atos ilegais (efeito ex tunc).",
    support: "STF, Súmulas 346 e 473.",
    relatedArticleIds: [],
    tags: ["revogacao", "anulacao"],
    alternatives: [
      { id: "a", text: "A revogação opera efeitos ex tunc, enquanto a anulação opera ex nunc." },
      { id: "b", text: "A revogação alcança atos legais por conveniência; a anulação alcança atos ilegais.", correct: true },
      { id: "c", text: "A revogação pode ser feita apenas pelo Judiciário; a anulação, pela Administração." },
      { id: "d", text: "A revogação é ilimitada; a anulação fica sujeita ao prazo decadencial de 5 anos." }
    ]
  }),
  defineQuestion({
    id: "q-oab39-023",
    subjectId: "administrativo",
    themeId: "responsabilidade-estado",
    examId: "oab-39",
    year: 2024,
    questionNumber: 23,
    difficulty: "hard",
    statement: "A responsabilidade civil do Estado por danos decorrentes de atos omissivos segue, para parte da doutrina e STJ:",
    explanation: "Parte da doutrina e do STJ adota a teoria subjetiva (culpa do serviço) para omissões genéricas, distinguindo da omissão específica.",
    support: "CF/88, art. 37, §6o; STJ.",
    relatedArticleIds: [],
    tags: ["responsabilidade por omissao", "culpa do servico"],
    alternatives: [
      { id: "a", text: "A teoria do risco integral, sem qualquer excludente." },
      { id: "b", text: "A teoria subjetiva (culpa do serviço — faute du service) para omissões genéricas.", correct: true },
      { id: "c", text: "A teoria do risco administrativo integral." },
      { id: "d", text: "A teoria da responsabilidade concorrente obrigatória." }
    ]
  }),
  defineQuestion({
    id: "q-oab39-024",
    subjectId: "administrativo",
    themeId: "concessoes",
    examId: "oab-39",
    year: 2024,
    questionNumber: 24,
    difficulty: "medium",
    statement: "Na concessão de serviço público (Lei 8.987/1995), a encampação:",
    explanation: "Art. 37, Lei 8.987/1995: encampação é a retomada do serviço pela Administração por razões de interesse público, com indenização prévia.",
    support: "Lei 8.987/1995, art. 37.",
    relatedArticleIds: [],
    tags: ["encampacao", "concessao"],
    alternatives: [
      { id: "a", text: "É a extinção do contrato por inadimplemento da concessionária." },
      { id: "b", text: "É a retomada do serviço por razões de interesse público, mediante indenização prévia.", correct: true },
      { id: "c", text: "Ocorre automaticamente com o término do prazo contratual." },
      { id: "d", text: "É a rescisão por culpa da Administração concedente." }
    ]
  }),
  defineQuestion({
    id: "q-oab39-025",
    subjectId: "administrativo",
    themeId: "improbidade",
    examId: "oab-39",
    year: 2024,
    questionNumber: 25,
    difficulty: "hard",
    statement: "As ações de improbidade administrativa, após a Lei 14.230/2021, são de competência:",
    explanation: "Art. 17, Lei 8.429/1992 (redação Lei 14.230/2021): competência do juízo singular de 1a instância, sem julgamento por tribunais em 1a instância.",
    support: "Lei 8.429/1992, art. 17; Lei 14.230/2021.",
    relatedArticleIds: [],
    tags: ["improbidade", "competencia", "juizo singular"],
    alternatives: [
      { id: "a", text: "Dos Tribunais de Justiça, em razão do foro especial por prerrogativa de função." },
      { id: "b", text: "Do juízo singular de primeira instância, mesmo para agentes com foro privilegiado.", correct: true },
      { id: "c", text: "Do STF, quando envolverem agentes federais." },
      { id: "d", text: "Do juízo especializado em matéria eleitoral." }
    ]
  }),
  defineQuestion({
    id: "q-oab39-026",
    subjectId: "administrativo",
    themeId: "poder-policia",
    examId: "oab-39",
    year: 2024,
    questionNumber: 26,
    difficulty: "medium",
    statement: "O exercício do poder de polícia pela Administração Pública implica, entre outros, o atributo da:",
    explanation: "A discricionariedade permite à Administração escolher a medida mais adequada para proteger o interesse público.",
    support: "Doutrina.",
    relatedArticleIds: [],
    tags: ["poder de policia", "discricionariedade"],
    alternatives: [
      { id: "a", text: "Confidencialidade das medidas adotadas." },
      { id: "b", text: "Discricionariedade na escolha da medida mais adequada.", correct: true },
      { id: "c", text: "Irrecorribilidade das decisões administrativas." },
      { id: "d", text: "Exclusividade de atribuição ao Poder Executivo." }
    ]
  }),
  defineQuestion({
    id: "q-oab39-027",
    subjectId: "administrativo",
    themeId: "atos-administrativos",
    examId: "oab-39",
    year: 2024,
    questionNumber: 27,
    difficulty: "medium",
    statement: "O princípio da eficiência na Administração Pública, inserido expressamente na CF/88 pela EC 19/1998:",
    explanation: "O princípio da eficiência exige o melhor resultado com menor dispêndio de recursos.",
    support: "CF/88, art. 37, caput; EC 19/1998.",
    relatedArticleIds: [],
    tags: ["eficiencia", "principio"],
    alternatives: [
      { id: "a", text: "Autoriza a Administração a dispensar procedimentos legais quando mais eficiente." },
      { id: "b", text: "Impõe a obrigação de atingir o melhor resultado com menor dispêndio de recursos.", correct: true },
      { id: "c", text: "Subordina os demais princípios administrativos." },
      { id: "d", text: "Aplica-se apenas à Administração Direta federal." }
    ]
  }),
  defineQuestion({
    id: "q-oab39-028",
    subjectId: "tributario",
    themeId: "principios-tributarios",
    examId: "oab-39",
    year: 2024,
    questionNumber: 28,
    difficulty: "medium",
    statement: "O princípio da isonomia tributária veda o tratamento desigual entre contribuintes em situação equivalente. Esse princípio:",
    explanation: "Art. 150, II, CF: veda distinção em razão de ocupação profissional ou função exercida.",
    support: "CF/88, art. 150, II.",
    relatedArticleIds: [],
    tags: ["isonomia tributaria", "ocupacao profissional"],
    alternatives: [
      { id: "a", text: "Admite diferenciação tributária por atividade econômica quando justificada por interesse público." },
      { id: "b", text: "Veda qualquer distinção entre contribuintes, mesmo que justificada." },
      { id: "c", text: "Proíbe diferenciação em razão de ocupação profissional ou função exercida.", correct: true },
      { id: "d", text: "Aplica-se apenas às pessoas físicas, não às jurídicas." }
    ]
  }),
  defineQuestion({
    id: "q-oab39-029",
    subjectId: "tributario",
    themeId: "lancamento",
    examId: "oab-39",
    year: 2024,
    questionNumber: 29,
    difficulty: "hard",
    statement: "O lançamento de ofício é modalidade em que:",
    explanation: "Art. 149 CTN: a autoridade lança por iniciativa própria, sem participação do sujeito passivo.",
    support: "CTN, art. 149.",
    relatedArticleIds: [],
    tags: ["lancamento de oficio"],
    alternatives: [
      { id: "a", text: "O contribuinte antecipa o pagamento sem exame prévio." },
      { id: "b", text: "O sujeito passivo presta declaração e a autoridade lança com base nela." },
      { id: "c", text: "A autoridade lança por sua própria iniciativa, independentemente de participação do sujeito passivo.", correct: true },
      { id: "d", text: "O tributo é recolhido automaticamente por sistema eletrônico." }
    ]
  }),
  defineQuestion({
    id: "q-oab39-030",
    subjectId: "tributario",
    themeId: "espécies-tributarias",
    examId: "oab-39",
    year: 2024,
    questionNumber: 30,
    difficulty: "medium",
    statement: "O IPVA, imposto sobre propriedade de veículos automotores, é de competência:",
    explanation: "Art. 155, III, CF: o IPVA é de competência dos Estados e do DF.",
    support: "CF/88, art. 155, III.",
    relatedArticleIds: [],
    tags: ["IPVA", "competencia estadual"],
    alternatives: [
      { id: "a", text: "Municipal, regulamentado por lei complementar estadual." },
      { id: "b", text: "Federal, repartido entre estados e municípios." },
      { id: "c", text: "Estadual e do Distrito Federal.", correct: true },
      { id: "d", text: "Compartilhada entre União e Estados." }
    ]
  }),
  defineQuestion({
    id: "q-oab39-031",
    subjectId: "tributario",
    themeId: "obrigacao-tributaria",
    examId: "oab-39",
    year: 2024,
    questionNumber: 31,
    difficulty: "hard",
    statement: "A obrigação tributária acessória, diferentemente da principal:",
    explanation: "Art. 113 CTN: a obrigação acessória decorre da legislação tributária e tem por objeto prestações positivas ou negativas no interesse da arrecadação.",
    support: "CTN, art. 113.",
    relatedArticleIds: [],
    tags: ["obrigacao acessoria", "prestacoes"],
    alternatives: [
      { id: "a", text: "Tem por objeto sempre o pagamento de tributo ou penalidade." },
      { id: "b", text: "Tem por objeto prestações positivas ou negativas no interesse da arrecadação.", correct: true },
      { id: "c", text: "É extinta automaticamente quando a obrigação principal é cumprida." },
      { id: "d", text: "Só surge após o lançamento tributário." }
    ]
  }),
  defineQuestion({
    id: "q-oab39-032",
    subjectId: "tributario",
    themeId: "imunidades-tributarias",
    examId: "oab-39",
    year: 2024,
    questionNumber: 32,
    difficulty: "hard",
    statement: "A imunidade recíproca entre os entes federativos alcança:",
    explanation: "Art. 150, VI, a, §2o, CF: abrange os impostos e também as autarquias e fundações instituídas e mantidas pelo poder público, quando relacionadas às suas finalidades essenciais.",
    support: "CF/88, art. 150, VI, a; §2o.",
    relatedArticleIds: [],
    tags: ["imunidade reciproca", "impostos"],
    alternatives: [
      { id: "a", text: "Todos os tributos, incluindo taxas e contribuições." },
      { id: "b", text: "Apenas os impostos sobre patrimônio, renda e serviços dos entes.", correct: true },
      { id: "c", text: "Apenas a União, excluindo estados e municípios." },
      { id: "d", text: "Somente os bens imóveis dos entes federativos." }
    ]
  }),
  defineQuestion({
    id: "q-oab39-033",
    subjectId: "tributario",
    themeId: "prescricao-tributaria",
    examId: "oab-39",
    year: 2024,
    questionNumber: 33,
    difficulty: "medium",
    statement: "O prazo de decadência para a Fazenda constituir o crédito tributário, previsto no art. 173, I, do CTN, começa a correr:",
    explanation: "Art. 173, I, CTN: do primeiro dia do exercício seguinte àquele em que o lançamento poderia ter sido efetuado.",
    support: "CTN, art. 173, I.",
    relatedArticleIds: [],
    tags: ["decadencia", "credito tributario"],
    alternatives: [
      { id: "a", text: "Da data do fato gerador do tributo." },
      { id: "b", text: "Do primeiro dia do exercício seguinte àquele em que o lançamento poderia ter sido efetuado.", correct: true },
      { id: "c", text: "Da data da notificação do sujeito passivo." },
      { id: "d", text: "Do término do prazo para pagamento do tributo." }
    ]
  }),
  defineQuestion({
    id: "q-oab39-034",
    subjectId: "civil",
    themeId: "contratos",
    examId: "oab-39",
    year: 2024,
    questionNumber: 34,
    difficulty: "medium",
    statement: "Os contratos de adesão, no Código Civil, têm as cláusulas ambíguas ou contraditórias interpretadas:",
    explanation: "Art. 423 CC: em favor do aderente.",
    support: "CC/2002, art. 423.",
    relatedArticleIds: [],
    tags: ["contratos de adesao", "interpretacao"],
    alternatives: [
      { id: "a", text: "Em favor do predisponente, que os elaborou." },
      { id: "b", text: "Em favor do aderente.", correct: true },
      { id: "c", text: "Da forma mais onerosa para ambas as partes." },
      { id: "d", text: "Conforme os usos e costumes do setor." }
    ]
  }),
  defineQuestion({
    id: "q-oab39-035",
    subjectId: "civil",
    themeId: "responsabilidade-civil",
    examId: "oab-39",
    year: 2024,
    questionNumber: 35,
    difficulty: "hard",
    statement: "A responsabilidade civil por atividade de risco (art. 927, parágrafo único, CC) é:",
    explanation: "Art. 927, §único, CC: objetiva, independendo de culpa, quando a atividade normalmente desenvolvida pelo autor do dano implicar risco para os direitos de outrem.",
    support: "CC/2002, art. 927, §único.",
    relatedArticleIds: [],
    tags: ["responsabilidade civil", "atividade de risco", "objetiva"],
    alternatives: [
      { id: "a", text: "Subjetiva, exigindo prova de culpa ou dolo." },
      { id: "b", text: "Objetiva, independentemente de culpa, quando a atividade implicar risco para outrem.", correct: true },
      { id: "c", text: "Objetiva apenas nas relações de consumo." },
      { id: "d", text: "Limitada ao dano material decorrente da atividade." }
    ]
  }),
  defineQuestion({
    id: "q-oab39-036",
    subjectId: "civil",
    themeId: "familia",
    examId: "oab-39",
    year: 2024,
    questionNumber: 36,
    difficulty: "hard",
    statement: "A guarda compartilhada, no Código Civil e no ECA, é:",
    explanation: "Art. 1584, §2o, CC: a guarda compartilhada é regra quando ambos os pais são aptos, independentemente de acordo.",
    support: "CC/2002, art. 1584, §2o.",
    relatedArticleIds: [],
    tags: ["guarda compartilhada"],
    alternatives: [
      { id: "a", text: "Modalidade excepcional, cabível apenas quando os pais concordarem." },
      { id: "b", text: "A regra, devendo ser decretada pelo juiz mesmo sem acordo dos pais, quando ambos forem aptos.", correct: true },
      { id: "c", text: "Vedada quando os pais residirem em cidades diferentes." },
      { id: "d", text: "Aplicável somente quando o menor tiver mais de 12 anos e manifestar preferência." }
    ]
  }),
  defineQuestion({
    id: "q-oab39-037",
    subjectId: "civil",
    themeId: "obrigacoes",
    examId: "oab-39",
    year: 2024,
    questionNumber: 37,
    difficulty: "medium",
    statement: "Na cessão de crédito, o cedente não responde ao cessionário pela solvência do devedor, salvo:",
    explanation: "Art. 296 CC: o cedente só responde pela solvência do devedor quando estipulado e até o preço recebido.",
    support: "CC/2002, art. 296.",
    relatedArticleIds: [],
    tags: ["cessao de credito", "solvencia"],
    alternatives: [
      { id: "a", text: "Quando o crédito for de valor superior a 50 salários mínimos." },
      { id: "b", text: "Quando expressamente estipulada a responsabilidade pela solvência do devedor.", correct: true },
      { id: "c", text: "Sempre que a cessão envolver crédito mercantil." },
      { id: "d", text: "Quando o devedor for pessoa jurídica." }
    ]
  }),
  defineQuestion({
    id: "q-oab39-038",
    subjectId: "civil",
    themeId: "negocio-juridico",
    examId: "oab-39",
    year: 2024,
    questionNumber: 38,
    difficulty: "medium",
    statement: "O negócio jurídico nulo diferencia-se do anulável porque o nulo:",
    explanation: "O negócio nulo não é suscetível de confirmação, nem convalesce pelo decurso do tempo (art. 169 CC).",
    support: "CC/2002, art. 169.",
    relatedArticleIds: [],
    tags: ["negocio nulo", "convalescimento"],
    alternatives: [
      { id: "a", text: "Pode ser confirmado pelas partes e convalesce pelo decurso do tempo." },
      { id: "b", text: "Não é suscetível de confirmação nem convalesce pelo decurso do tempo.", correct: true },
      { id: "c", text: "Produz efeitos jurídicos até ser declarado nulo por sentença." },
      { id: "d", text: "Só pode ser declarado nulo por sentença transitada em julgado." }
    ]
  }),
  defineQuestion({
    id: "q-oab39-039",
    subjectId: "civil",
    themeId: "sucessoes",
    examId: "oab-39",
    year: 2024,
    questionNumber: 39,
    difficulty: "hard",
    statement: "O herdeiro que concorrer com o cônjuge sobrevivente na sucessão legítima, no regime de comunhão parcial, receberá:",
    explanation: "Art. 1832 CC: em concorrência com os filhos, o cônjuge tem parte igual à dos que a sucederem por cabeça, exceto se o casamento for em comunhão universal ou separação obrigatória.",
    support: "CC/2002, art. 1832.",
    relatedArticleIds: [],
    tags: ["concorrencia hereditaria", "conjuge"],
    alternatives: [
      { id: "a", text: "Metade do que couber a cada filho." },
      { id: "b", text: "Parte igual à dos filhos que sucederem por cabeça.", correct: true },
      { id: "c", text: "Um terço da herança, independentemente do número de filhos." },
      { id: "d", text: "Nada, pois os filhos excluem o cônjuge na comunhão parcial." }
    ]
  }),
  defineQuestion({
    id: "q-oab39-040",
    subjectId: "civil",
    themeId: "pessoa-juridica",
    examId: "oab-39",
    year: 2024,
    questionNumber: 40,
    difficulty: "medium",
    statement: "A associação, como espécie de pessoa jurídica de direito privado, diferencia-se da sociedade porque:",
    explanation: "Art. 53 CC: as associações constituem-se para fins não econômicos, enquanto as sociedades têm finalidade econômica.",
    support: "CC/2002, art. 53.",
    relatedArticleIds: [],
    tags: ["associacao", "fins nao economicos"],
    alternatives: [
      { id: "a", text: "As associações têm personalidade jurídica, mas as sociedades não." },
      { id: "b", text: "As associações têm fins não econômicos; as sociedades, fins econômicos.", correct: true },
      { id: "c", text: "As associações só podem ter membros pessoas físicas; as sociedades, qualquer pessoa." },
      { id: "d", text: "As associações são isentas de tributação; as sociedades, não." }
    ]
  }),
  defineQuestion({
    id: "q-oab39-041",
    subjectId: "civil",
    themeId: "contratos",
    examId: "oab-39",
    year: 2024,
    questionNumber: 41,
    difficulty: "hard",
    statement: "O contrato de seguro obriga o segurador a garantir interesse legítimo do segurado, relativo a pessoa ou coisa. A apólice:",
    explanation: "Art. 759 CC: a emissão da apólice deve ser precedida de proposta escrita com a declaração dos elementos essenciais do interesse a ser garantido.",
    support: "CC/2002, art. 759.",
    relatedArticleIds: [],
    tags: ["seguro", "apolice", "nominativa"],
    alternatives: [
      { id: "a", text: "É obrigatoriamente nominal e intransferível." },
      { id: "b", text: "Pode ser ao portador, permitindo sua transferência por simples tradição." },
      { id: "c", text: "Deve ser sempre nominativa, conforme a legislação atual.", correct: true },
      { id: "d", text: "Serve apenas como documento probatório, sem valor jurídico autônomo." }
    ]
  }),
  defineQuestion({
    id: "q-oab39-042",
    subjectId: "civil",
    themeId: "posse-propriedade",
    examId: "oab-39",
    year: 2024,
    questionNumber: 42,
    difficulty: "medium",
    statement: "A ação de reintegração de posse é o instrumento adequado para o possuidor:",
    explanation: "A reintegração é cabível quando o possuidor é esbulhado — perde completamente a posse.",
    support: "CPC/2015, art. 560.",
    relatedArticleIds: [],
    tags: ["reintegracao de posse", "esbulho"],
    alternatives: [
      { id: "a", text: "Que tem posse ameaçada por turbação." },
      { id: "b", text: "Que perdeu a posse em razão de esbulho.", correct: true },
      { id: "c", text: "Que nunca teve a posse e reivindica a propriedade." },
      { id: "d", text: "Que detém posse direta e quer excluir o possuidor indireto." }
    ]
  }),
  defineQuestion({
    id: "q-oab39-043",
    subjectId: "processo-civil",
    themeId: "petição-inicial",
    examId: "oab-39",
    year: 2024,
    questionNumber: 43,
    difficulty: "medium",
    statement: "A emenda da petição inicial pode ser determinada pelo juiz quando:",
    explanation: "Art. 321 CPC: o juiz deve determinar a emenda quando a petição inicial apresentar defeito ou irregularidade sanável.",
    support: "CPC/2015, art. 321.",
    relatedArticleIds: [],
    tags: ["emenda da inicial", "defeito sanavel"],
    alternatives: [
      { id: "a", text: "A petição for inepta, determinando seu indeferimento sem possibilidade de emenda." },
      { id: "b", text: "Apresentar defeito ou irregularidade sanável, com prazo de 15 dias para emendar.", correct: true },
      { id: "c", text: "O valor da causa estiver incorreto, sem possibilidade de emenda." },
      { id: "d", text: "Faltar um dos documentos essenciais que não podem ser obtidos." }
    ]
  }),
  defineQuestion({
    id: "q-oab39-044",
    subjectId: "processo-civil",
    themeId: "competencia",
    examId: "oab-39",
    year: 2024,
    questionNumber: 44,
    difficulty: "hard",
    statement: "A competência funcional do foro de domicílio do réu nas ações pessoais é:",
    explanation: "A competência territorial (foro do domicílio do réu) é relativa e pode ser derrogada por eleição de foro ou prorrogação.",
    support: "CPC/2015, art. 46.",
    relatedArticleIds: [],
    tags: ["competencia territorial", "relativa"],
    alternatives: [
      { id: "a", text: "Absoluta, não podendo ser modificada pelas partes." },
      { id: "b", text: "Relativa, podendo ser derrogada por eleição de foro ou prorrogação.", correct: true },
      { id: "c", text: "Absoluta apenas para causas de valor superior a 60 salários mínimos." },
      { id: "d", text: "Exclusiva, não admitindo foro de eleição em contratos." }
    ]
  }),
  defineQuestion({
    id: "q-oab39-045",
    subjectId: "processo-civil",
    themeId: "litisconsorcios",
    examId: "oab-39",
    year: 2024,
    questionNumber: 45,
    difficulty: "medium",
    statement: "A denunciação da lide é modalidade de intervenção de terceiros cabível para:",
    explanation: "Art. 125 CPC: na denunciação, a parte chama terceiro que tem obrigação legal ou contratual de indenizá-la, como o garante.",
    support: "CPC/2015, art. 125.",
    relatedArticleIds: [],
    tags: ["denunciacao da lide"],
    alternatives: [
      { id: "a", text: "Trazer co-devedor solidário para pagar a dívida conjuntamente." },
      { id: "b", text: "Chamar aquele que, por lei ou contrato, tem obrigação de indenizar em caso de sucumbência.", correct: true },
      { id: "c", text: "Pedir ao terceiro que substitua o réu principal." },
      { id: "d", text: "Notificar terceiro sobre a existência do processo para ciência." }
    ]
  }),
  defineQuestion({
    id: "q-oab39-046",
    subjectId: "processo-civil",
    themeId: "execucao",
    examId: "oab-39",
    year: 2024,
    questionNumber: 46,
    difficulty: "hard",
    statement: "O cumprimento de sentença que reconhece a exigibilidade de obrigação de pagar quantia certa inicia-se:",
    explanation: "Art. 523 CPC: o réu é intimado para pagar em 15 dias, sob pena de multa de 10% e honorários de 10%.",
    support: "CPC/2015, art. 523.",
    relatedArticleIds: [],
    tags: ["cumprimento de sentenca", "15 dias", "10%"],
    alternatives: [
      { id: "a", text: "Com a penhora automática de bens após o trânsito em julgado." },
      { id: "b", text: "Com a intimação do devedor para pagar em 15 dias, sob pena de acréscimo de 10%.", correct: true },
      { id: "c", text: "Com requerimento do credor ao juízo de execução autônoma." },
      { id: "d", text: "Automaticamente após 30 dias do trânsito em julgado." }
    ]
  }),
  defineQuestion({
    id: "q-oab39-047",
    subjectId: "processo-civil",
    themeId: "recursos",
    examId: "oab-39",
    year: 2024,
    questionNumber: 47,
    difficulty: "medium",
    statement: "O recurso especial ao STJ deve ser interposto em face de acórdão proferido por:",
    explanation: "Art. 105, III, CF: cabe REsp de acórdão de TJ, TRF ou TRT em única ou última instância.",
    support: "CF/88, art. 105, III.",
    relatedArticleIds: [],
    tags: ["recurso especial", "STJ", "acordao"],
    alternatives: [
      { id: "a", text: "Qualquer órgão colegiado do Poder Judiciário." },
      { id: "b", text: "Acórdão de TJ, TRF ou TRT, em única ou última instância.", correct: true },
      { id: "c", text: "Decisão monocrática de Desembargador ou Ministro." },
      { id: "d", text: "Sentença de juiz federal de 1a instância." }
    ]
  }),
  defineQuestion({
    id: "q-oab39-048",
    subjectId: "processo-civil",
    themeId: "sentenca-coisa-julgada",
    examId: "oab-39",
    year: 2024,
    questionNumber: 48,
    difficulty: "hard",
    statement: "A eficácia preclusiva da coisa julgada determina que:",
    explanation: "Art. 508 CPC: são cobertas pela coisa julgada as questões que poderiam ter sido deduzidas mas não o foram.",
    support: "CPC/2015, art. 508.",
    relatedArticleIds: [],
    tags: ["eficacia preclusiva", "coisa julgada"],
    alternatives: [
      { id: "a", text: "Somente o dispositivo da sentença faz coisa julgada, jamais os fundamentos." },
      { id: "b", text: "Todas as questões que poderiam ter sido suscitadas na ação ficam cobertas pela coisa julgada.", correct: true },
      { id: "c", text: "A coisa julgada impede nova ação apenas com as mesmas partes e pedido." },
      { id: "d", text: "A eficácia preclusiva se aplica apenas à parte autora." }
    ]
  }),
  defineQuestion({
    id: "q-oab39-049",
    subjectId: "processo-civil",
    themeId: "provas-cpc",
    examId: "oab-39",
    year: 2024,
    questionNumber: 49,
    difficulty: "medium",
    statement: "O depoimento pessoal da parte no processo civil:",
    explanation: "Art. 385 CPC: pode ser requerido pela parte contrária para obtenção de confissão.",
    support: "CPC/2015, art. 385.",
    relatedArticleIds: [],
    tags: ["depoimento pessoal", "confissao"],
    alternatives: [
      { id: "a", text: "É obrigatório sempre que requerido pela parte contrária." },
      { id: "b", text: "Pode ser requerido pela parte contrária com o objetivo de obter a confissão.", correct: true },
      { id: "c", text: "Tem o mesmo valor probatório da prova testemunhal." },
      { id: "d", text: "Substitui a perícia técnica quando o juiz assim determinar." }
    ]
  }),
  defineQuestion({
    id: "q-oab39-050",
    subjectId: "processo-civil",
    themeId: "acao-rescisoria",
    examId: "oab-39",
    year: 2024,
    questionNumber: 50,
    difficulty: "hard",
    statement: "A ação rescisória é cabível quando a sentença for proferida por juiz absolutamente incompetente. O prazo para propô-la é de:",
    explanation: "Art. 975 CPC: 2 anos do trânsito em julgado.",
    support: "CPC/2015, art. 975.",
    relatedArticleIds: [],
    tags: ["acao rescisoria", "2 anos"],
    alternatives: [
      { id: "a", text: "1 ano do trânsito em julgado." },
      { id: "b", text: "2 anos do trânsito em julgado.", correct: true },
      { id: "c", text: "5 anos do trânsito em julgado." },
      { id: "d", text: "6 meses do trânsito em julgado." }
    ]
  }),
  defineQuestion({
    id: "q-oab39-051",
    subjectId: "penal",
    themeId: "extincao-punibilidade",
    examId: "oab-39",
    year: 2024,
    questionNumber: 51,
    difficulty: "medium",
    statement: "A prescrição da pretensão punitiva em abstrato é regulada pela pena:",
    explanation: "Art. 109 CP: calculada com base na pena máxima em abstrato cominada.",
    support: "CP, art. 109.",
    relatedArticleIds: [],
    tags: ["prescricao abstrata", "pena maxima"],
    alternatives: [
      { id: "a", text: "Máxima em abstrato cominada.", correct: true },
      { id: "b", text: "Mínima em abstrato cominada." },
      { id: "c", text: "Concretamente aplicada na sentença." },
      { id: "d", text: "Média entre o mínimo e o máximo legais." }
    ]
  }),
  defineQuestion({
    id: "q-oab39-052",
    subjectId: "penal",
    themeId: "culpabilidade",
    examId: "oab-39",
    year: 2024,
    questionNumber: 52,
    difficulty: "medium",
    statement: "A embriaguez voluntária completa, por si só:",
    explanation: "Art. 28, II, CP: a embriaguez voluntária não exclui a imputabilidade (actio libera in causa).",
    support: "CP, art. 28, II.",
    relatedArticleIds: [],
    tags: ["embriaguez voluntaria", "imputabilidade"],
    alternatives: [
      { id: "a", text: "Exclui a imputabilidade penal do agente." },
      { id: "b", text: "Não exclui a imputabilidade penal.", correct: true },
      { id: "c", text: "Constitui causa de diminuição obrigatória de pena." },
      { id: "d", text: "É equiparada à inimputabilidade por doença mental." }
    ]
  }),
  defineQuestion({
    id: "q-oab39-053",
    subjectId: "penal",
    themeId: "crimes-pessoa",
    examId: "oab-39",
    year: 2024,
    questionNumber: 53,
    difficulty: "hard",
    statement: "O crime de calúnia (art. 138, CP) distingue-se da difamação (art. 139) porque na calúnia:",
    explanation: "Na calúnia, o agente atribui falsamente à vítima a prática de CRIME. Na difamação, atribui fato ofensivo à reputação (não necessariamente crime).",
    support: "CP, art. 138; 139.",
    relatedArticleIds: [],
    tags: ["calunia", "difamacao"],
    alternatives: [
      { id: "a", text: "O fato atribuído é verdadeiro e ofensivo." },
      { id: "b", text: "O agente atribui falsamente ao ofendido a prática de crime.", correct: true },
      { id: "c", text: "O fato imputado é de natureza meramente vexatória." },
      { id: "d", text: "A difusão do fato é elemento essencial do tipo." }
    ]
  }),
  defineQuestion({
    id: "q-oab39-054",
    subjectId: "penal",
    themeId: "penas",
    examId: "oab-39",
    year: 2024,
    questionNumber: 54,
    difficulty: "medium",
    statement: "A substituição da pena privativa de liberdade por restritiva de direitos é cabível quando a pena não superar 4 anos e:",
    explanation: "Art. 44 CP: crime doloso sem violência ou grave ameaça, réu não reincidente, culpabilidade favorável.",
    support: "CP, art. 44.",
    relatedArticleIds: [],
    tags: ["pena restritiva de direitos", "substituicao"],
    alternatives: [
      { id: "a", text: "O crime for praticado com violência desde que o réu seja primário." },
      { id: "b", text: "O crime for doloso sem violência ou grave ameaça, réu não reincidente.", correct: true },
      { id: "c", text: "O réu for primário, independentemente do tipo de crime." },
      { id: "d", text: "O réu tiver confessado o crime na fase policial." }
    ]
  }),
  defineQuestion({
    id: "q-oab39-055",
    subjectId: "penal",
    themeId: "iter-criminis",
    examId: "oab-39",
    year: 2024,
    questionNumber: 55,
    difficulty: "hard",
    statement: "Na tentativa perfeita (crime falho ou tentativa acabada):",
    explanation: "O agente esgota todos os meios executórios à sua disposição, mas o resultado não ocorre por circunstâncias alheias.",
    support: "CP, art. 14, II; doutrina.",
    relatedArticleIds: [],
    tags: ["tentativa acabada", "crime falho"],
    alternatives: [
      { id: "a", text: "O agente desiste voluntariamente antes de concluir os atos executórios." },
      { id: "b", text: "O agente esgota os meios executórios, mas o resultado não ocorre por circunstâncias alheias.", correct: true },
      { id: "c", text: "O crime é consumado, mas o dano é mínimo." },
      { id: "d", text: "O agente não consegue nem iniciar os atos executórios." }
    ]
  }),
  defineQuestion({
    id: "q-oab39-056",
    subjectId: "penal",
    themeId: "crimes-patrimonio",
    examId: "oab-39",
    year: 2024,
    questionNumber: 56,
    difficulty: "medium",
    statement: "O furto de coisa comum (art. 156, CP) é crime que se configura quando:",
    explanation: "Art. 156 CP: o co-proprietário subtrai coisa que lhe pertence em comum, enquanto administrada por outrem.",
    support: "CP, art. 156.",
    relatedArticleIds: [],
    tags: ["furto de coisa comum"],
    alternatives: [
      { id: "a", text: "O agente subtrai coisa alheia com emprego de violência." },
      { id: "b", text: "O co-proprietário subtrai a coisa comum que está em poder de outrem.", correct: true },
      { id: "c", text: "O agente subtrai coisa própria em poder de terceiro a título de garantia." },
      { id: "d", text: "O bem subtraído pertence ao Poder Público." }
    ]
  }),
  defineQuestion({
    id: "q-oab39-057",
    subjectId: "penal",
    themeId: "concurso-crimes",
    examId: "oab-39",
    year: 2024,
    questionNumber: 57,
    difficulty: "hard",
    statement: "A habitualidade criminosa (crime habitual) distingue-se do crime continuado porque:",
    explanation: "O crime habitual exige reiteração de atos que formam um único crime; o continuado são crimes autônomos praticados em condições similares.",
    support: "CP, art. 71; doutrina.",
    relatedArticleIds: [],
    tags: ["crime habitual", "crime continuado"],
    alternatives: [
      { id: "a", text: "No crime habitual, cada ato isolado já configura o crime; no continuado, os atos são autônomos." },
      { id: "b", text: "No crime habitual, os atos isolados não tipificam o crime; no continuado, cada ato é crime autônomo praticado em condições similares.", correct: true },
      { id: "c", text: "O crime habitual admite concurso formal com outro crime; o continuado, não." },
      { id: "d", text: "São sinônimos, diferenciando-se apenas pela nomenclatura doutrinária." }
    ]
  }),
  defineQuestion({
    id: "q-oab39-058",
    subjectId: "processo-penal",
    themeId: "prisoes",
    examId: "oab-39",
    year: 2024,
    questionNumber: 58,
    difficulty: "hard",
    statement: "O preso em flagrante deve ser apresentado ao juiz competente em até:",
    explanation: "Art. 310 CPP (com redação da Lei 13.964/2019): o juiz deve realizar a audiência de custódia em 24 horas do flagrante.",
    support: "CPP, art. 310; Lei 13.964/2019.",
    relatedArticleIds: [],
    tags: ["audiencia de custodia", "24 horas", "flagrante"],
    alternatives: [
      { id: "a", text: "12 horas." },
      { id: "b", text: "24 horas.", correct: true },
      { id: "c", text: "48 horas." },
      { id: "d", text: "72 horas." }
    ]
  }),
  defineQuestion({
    id: "q-oab39-059",
    subjectId: "processo-penal",
    themeId: "acao-penal",
    examId: "oab-39",
    year: 2024,
    questionNumber: 59,
    difficulty: "medium",
    statement: "O MP pode intentar ação penal pública incondicionada mesmo sem inquérito policial, bastando:",
    explanation: "Art. 46 CPP: o MP pode oferecer denúncia com base em quaisquer peças de informação.",
    support: "CPP, art. 46.",
    relatedArticleIds: [],
    tags: ["acao penal", "peças de informacao"],
    alternatives: [
      { id: "a", text: "Autorização judicial prévia para dispensar o inquérito." },
      { id: "b", text: "Quaisquer peças de informação que demonstrem a materialidade e autoria.", correct: true },
      { id: "c", text: "Representação expressa da vítima em qualquer hipótese." },
      { id: "d", text: "Prévia instauração de procedimento administrativo." }
    ]
  }),
  defineQuestion({
    id: "q-oab39-060",
    subjectId: "processo-penal",
    themeId: "provas-cpp",
    examId: "oab-39",
    year: 2024,
    questionNumber: 60,
    difficulty: "hard",
    statement: "A teoria dos frutos da árvore envenenada (fruits of the poisonous tree) no processo penal brasileiro:",
    explanation: "Art. 5o, LVI, CF e art. 157, §1o, CPP: as provas derivadas das ilícitas são inadmissíveis (salvo quando puderem ser obtidas por fonte independente).",
    support: "CF/88, art. 5o, LVI; CPP, art. 157, §1o.",
    relatedArticleIds: [],
    tags: ["provas ilicitas", "frutos da arvore envenenada", "fonte independente"],
    alternatives: [
      { id: "a", text: "Não é adotada no Brasil, sendo as provas derivadas admissíveis." },
      { id: "b", text: "Admite as provas derivadas quando obtidas de boa-fé." },
      { id: "c", text: "Determina a inadmissibilidade das provas derivadas das ilícitas, salvo fonte independente.", correct: true },
      { id: "d", text: "Aplica-se apenas na fase de inquérito policial." }
    ]
  }),
  defineQuestion({
    id: "q-oab39-061",
    subjectId: "processo-penal",
    themeId: "habeas-corpus-cpp",
    examId: "oab-39",
    year: 2024,
    questionNumber: 61,
    difficulty: "medium",
    statement: "O HC pode ser impetrado:",
    explanation: "Art. 654 CPP: por qualquer pessoa, em seu favor ou de outrem.",
    support: "CPP, art. 654.",
    relatedArticleIds: [],
    tags: ["habeas corpus", "legitimidade"],
    alternatives: [
      { id: "a", text: "Apenas pelo paciente ou seu advogado." },
      { id: "b", text: "Por qualquer pessoa, em seu favor ou de outrem.", correct: true },
      { id: "c", text: "Somente por advogado com procuração." },
      { id: "d", text: "Apenas pelo Ministério Público ou Defensoria Pública." }
    ]
  }),
  defineQuestion({
    id: "q-oab39-062",
    subjectId: "processo-penal",
    themeId: "competencia-cpp",
    examId: "oab-39",
    year: 2024,
    questionNumber: 62,
    difficulty: "hard",
    statement: "A competência pela prevenção, no processo penal, estabelece-se quando:",
    explanation: "Art. 83 CPP: é prevento o juízo que primeiro tiver tomado conhecimento do fato.",
    support: "CPP, art. 83.",
    relatedArticleIds: [],
    tags: ["prevencao", "competencia"],
    alternatives: [
      { id: "a", text: "O réu tiver domicílio no local do crime." },
      { id: "b", text: "O juízo tiver tomado primeiro conhecimento do fato.", correct: true },
      { id: "c", text: "A infração tiver sido praticada em dois ou mais locais simultaneamente." },
      { id: "d", text: "O processo tiver sido distribuído antes de qualquer outro." }
    ]
  }),
  defineQuestion({
    id: "q-oab39-063",
    subjectId: "processo-penal",
    themeId: "inquerito-policial",
    examId: "oab-39",
    year: 2024,
    questionNumber: 63,
    difficulty: "medium",
    statement: "O indiciamento no inquérito policial é ato privativo da:",
    explanation: "O indiciamento é ato privativo do Delegado de Polícia — o juiz não pode indiciar, nem o MP pode determinar o indiciamento diretamente.",
    support: "Lei 12.830/2013, art. 2o, §6o.",
    relatedArticleIds: [],
    tags: ["indiciamento", "delegado"],
    alternatives: [
      { id: "a", text: "Autoridade judiciária, mediante despacho fundamentado." },
      { id: "b", text: "Autoridade policial (Delegado de Polícia), por ato fundamentado.", correct: true },
      { id: "c", text: "Ministério Público, mediante representação ao delegado." },
      { id: "d", text: "Comissão parlamentar de inquérito, nos casos de investigação legislativa." }
    ]
  }),
  defineQuestion({
    id: "q-oab39-064",
    subjectId: "trabalhista",
    themeId: "rescisao-contrato",
    examId: "oab-39",
    year: 2024,
    questionNumber: 64,
    difficulty: "medium",
    statement: "A justa causa para rescisão do contrato de trabalho pelo empregador, com base na embriaguez habitual do empregado:",
    explanation: "Art. 482, f, CLT: embriaguez habitual ou em serviço é justa causa.",
    support: "CLT, art. 482, f.",
    relatedArticleIds: [],
    tags: ["justa causa", "embriaguez habitual"],
    alternatives: [
      { id: "a", text: "Não é admissível, pois a alcoolismo é doença que deve ser tratada." },
      { id: "b", text: "É prevista expressamente na CLT como hipótese de justa causa.", correct: true },
      { id: "c", text: "Exige laudo pericial comprovando a dependência química." },
      { id: "d", text: "Só é válida após três advertências escritas documentadas." }
    ]
  }),
  defineQuestion({
    id: "q-oab39-065",
    subjectId: "trabalhista",
    themeId: "jornada-trabalho",
    examId: "oab-39",
    year: 2024,
    questionNumber: 65,
    difficulty: "hard",
    statement: "O adicional de periculosidade é devido ao empregado que trabalha em:",
    explanation: "Art. 193 CLT e NRs: atividades perigosas — inflamáveis, explosivos, energia elétrica, roubos e outras violências físicas, atividades nucleares.",
    support: "CLT, art. 193.",
    relatedArticleIds: [],
    tags: ["adicional de periculosidade", "inflamaveis"],
    alternatives: [
      { id: "a", text: "Ambiente com ruídos superiores ao limite de tolerância." },
      { id: "b", text: "Contato habitual com agentes inflamáveis, explosivos ou energia elétrica.", correct: true },
      { id: "c", text: "Temperatura acima dos limites de conforto térmica." },
      { id: "d", text: "Qualquer atividade que exponha o trabalhador a risco de vida." }
    ]
  }),
  defineQuestion({
    id: "q-oab39-066",
    subjectId: "trabalhista",
    themeId: "contrato-trabalho",
    examId: "oab-39",
    year: 2024,
    questionNumber: 66,
    difficulty: "medium",
    statement: "O trabalho do menor aprendiz (entre 14 e 24 anos) tem como característica:",
    explanation: "Art. 428 CLT: o contrato de aprendizagem é por prazo máximo de 2 anos, com formação técnico-profissional metódica.",
    support: "CLT, art. 428.",
    relatedArticleIds: [],
    tags: ["menor aprendiz", "contrato de aprendizagem"],
    alternatives: [
      { id: "a", text: "Ser vedado abaixo de 16 anos em qualquer hipótese." },
      { id: "b", text: "Ser formalizado por prazo máximo de 2 anos, com formação técnico-profissional.", correct: true },
      { id: "c", text: "Não gerar qualquer vínculo empregatício." },
      { id: "d", text: "Ser remunerado exclusivamente por bolsa de estágio." }
    ]
  }),
  defineQuestion({
    id: "q-oab39-067",
    subjectId: "trabalhista",
    themeId: "ferias-licencas",
    examId: "oab-39",
    year: 2024,
    questionNumber: 67,
    difficulty: "hard",
    statement: "O empregado que solicitar as férias em período superior ao concessivo e o empregador concordar:",
    explanation: "Art. 143 CLT: o empregado pode converter 1/3 das férias em abono pecuniário.",
    support: "CLT, art. 143.",
    relatedArticleIds: [],
    tags: ["ferias", "abono pecuniario"],
    alternatives: [
      { id: "a", text: "Perde o direito às férias, pois o período concessivo é peremptório." },
      { id: "b", text: "Tem direito a receber o abono pecuniário de 1/3 das férias em dinheiro se assim requerer.", correct: true },
      { id: "c", text: "Pode acumular mais de dois períodos de férias com a concordância do empregador." },
      { id: "d", text: "Fica sujeito a desconto proporcional pelos dias além do concessivo." }
    ]
  }),
  defineQuestion({
    id: "q-oab39-068",
    subjectId: "trabalhista",
    themeId: "processo-trabalho",
    examId: "oab-39",
    year: 2024,
    questionNumber: 68,
    difficulty: "medium",
    statement: "O prazo para recorrer no processo do trabalho conta-se a partir de:",
    explanation: "Art. 895, b, CLT e Súmula 197 TST: o prazo recursal é de 8 dias úteis (exceto embargos de declaração: 5 dias).",
    support: "CLT, art. 895; Súmula 197 TST.",
    relatedArticleIds: [],
    tags: ["prazo recursal", "trabalhista", "8 dias"],
    alternatives: [
      { id: "a", text: "A data da prolação da sentença." },
      { id: "b", text: "A publicação da sentença, em 8 dias úteis para os recursos em geral.", correct: true },
      { id: "c", text: "A intimação pessoal das partes, em 15 dias." },
      { id: "d", text: "O trânsito em julgado, em 5 dias." }
    ]
  }),
  defineQuestion({
    id: "q-oab39-069",
    subjectId: "trabalhista",
    themeId: "estabilidade",
    examId: "oab-39",
    year: 2024,
    questionNumber: 69,
    difficulty: "hard",
    statement: "A estabilidade provisória da gestante:",
    explanation: "Súmula 244 TST: a estabilidade gestante é garantida desde a confirmação da gravidez até 5 meses após o parto, mesmo em contrato a termo.",
    support: "ADCT, art. 10, II, b; Súmula 244 TST.",
    relatedArticleIds: [],
    tags: ["estabilidade gestante", "contrato a termo"],
    alternatives: [
      { id: "a", text: "Não se aplica ao contrato por prazo determinado." },
      { id: "b", text: "Aplica-se desde a confirmação da gravidez até 5 meses após o parto, mesmo em contrato a termo.", correct: true },
      { id: "c", text: "Exige que o empregador seja informado da gravidez para surgir." },
      { id: "d", text: "Abrange apenas a gestante que já completou 3 meses de serviço." }
    ]
  }),
  defineQuestion({
    id: "q-oab39-070",
    subjectId: "trabalhista",
    themeId: "sindicatos",
    examId: "oab-39",
    year: 2024,
    questionNumber: 70,
    difficulty: "medium",
    statement: "O acordo coletivo de trabalho difere da convenção coletiva porque o acordo é celebrado entre:",
    explanation: "Art. 611-A CLT: o acordo coletivo é firmado entre sindicato dos empregados e uma ou mais empresas; a convenção, entre sindicatos.",
    support: "CLT, art. 611; 611-A.",
    relatedArticleIds: [],
    tags: ["acordo coletivo", "empresa", "sindicato"],
    alternatives: [
      { id: "a", text: "Os sindicatos de ambas as categorias, sem participação da empresa." },
      { id: "b", text: "O sindicato dos empregados e uma ou mais empresas diretamente.", correct: true },
      { id: "c", text: "O Ministério do Trabalho e as empresas." },
      { id: "d", text: "Os empregados individualmente e seus empregadores." }
    ]
  }),
  defineQuestion({
    id: "q-oab39-071",
    subjectId: "empresarial",
    themeId: "falencia-recuperacao",
    examId: "oab-39",
    year: 2024,
    questionNumber: 71,
    difficulty: "hard",
    statement: "Na recuperação judicial, o plano deve ser submetido à assembleia-geral de credores para aprovação. A assembleia delibera por:",
    explanation: "Art. 45 Lei 11.101/2005: maioria simples dos credores presentes e maioria absoluta do valor dos créditos de cada classe.",
    support: "Lei 11.101/2005, art. 45.",
    relatedArticleIds: [],
    tags: ["recuperacao judicial", "assembleia de credores", "aprovacao do plano"],
    alternatives: [
      { id: "a", text: "Unanimidade dos credores de cada classe." },
      { id: "b", text: "Maioria simples dos presentes e maioria absoluta do valor dos créditos por classe.", correct: true },
      { id: "c", text: "Maioria de 2/3 do total de credores, em votação única." },
      { id: "d", text: "Simples maioria de votos de todos os credores inscritos." }
    ]
  }),
  defineQuestion({
    id: "q-oab39-072",
    subjectId: "empresarial",
    themeId: "sociedades",
    examId: "oab-39",
    year: 2024,
    questionNumber: 72,
    difficulty: "medium",
    statement: "O sócio retirante de sociedade limitada responde pelas obrigações contraídas antes da retirada pelo prazo de:",
    explanation: "Art. 1003, §único, CC: o sócio retirante responde pelas obrigações sociais por 2 anos após a resolução da participação.",
    support: "CC/2002, art. 1003, §único.",
    relatedArticleIds: [],
    tags: ["socio retirante", "responsabilidade", "2 anos"],
    alternatives: [
      { id: "a", text: "6 meses da retirada." },
      { id: "b", text: "1 ano da retirada." },
      { id: "c", text: "2 anos após a resolução da participação.", correct: true },
      { id: "d", text: "5 anos da data do registro na Junta Comercial." }
    ]
  }),
  defineQuestion({
    id: "q-oab39-073",
    subjectId: "empresarial",
    themeId: "titulos-credito",
    examId: "oab-39",
    year: 2024,
    questionNumber: 73,
    difficulty: "hard",
    statement: "O endosso translativo em título de crédito transfere ao endossatário:",
    explanation: "O endosso translativo transfere a propriedade do título e todos os direitos dele decorrentes.",
    support: "CC/2002, art. 910.",
    relatedArticleIds: [],
    tags: ["endosso translativo", "propriedade"],
    alternatives: [
      { id: "a", text: "Apenas a posse do título, sem os direitos de crédito." },
      { id: "b", text: "A propriedade do título e todos os direitos dele decorrentes.", correct: true },
      { id: "c", text: "Apenas o direito de cobrar em nome do endossante." },
      { id: "d", text: "A posse e o direito de cobrar, mas não a propriedade." }
    ]
  }),
  defineQuestion({
    id: "q-oab39-074",
    subjectId: "empresarial",
    themeId: "estabelecimento",
    examId: "oab-39",
    year: 2024,
    questionNumber: 74,
    difficulty: "medium",
    statement: "Os pontos negativos do estabelecimento (dívidas) no trespasse:",
    explanation: "Art. 1146 CC: o adquirente responde pelos débitos anteriores regularmente contabilizados, salvo convenção em contrário.",
    support: "CC/2002, art. 1146.",
    relatedArticleIds: [],
    tags: ["trespasse", "debitos"],
    alternatives: [
      { id: "a", text: "São automaticamente extintos com o trespasse." },
      { id: "b", text: "Transferem-se ao adquirente se regularmente contabilizados, salvo convenção.", correct: true },
      { id: "c", text: "Permanecem exclusivamente com o alienante, independentemente de contabilização." },
      { id: "d", text: "São extintos se os credores não notificarem o adquirente em 30 dias." }
    ]
  }),
  defineQuestion({
    id: "q-oab39-075",
    subjectId: "empresarial",
    themeId: "sociedades",
    examId: "oab-39",
    year: 2024,
    questionNumber: 75,
    difficulty: "hard",
    statement: "Na sociedade anônima aberta, as ações podem ser livremente negociadas no mercado. A principal diferença para a S.A. fechada é:",
    explanation: "A S.A. aberta tem valores mobiliários admitidos à negociação no mercado de capitais (B3); a fechada, não.",
    support: "Lei 6.404/1976, art. 4o.",
    relatedArticleIds: [],
    tags: ["SA aberta", "mercado de capitais"],
    alternatives: [
      { id: "a", text: "A S.A. aberta tem capital fixo; a fechada, capital variável." },
      { id: "b", text: "A S.A. aberta tem valores mobiliários admitidos à negociação no mercado de capitais; a fechada, não.", correct: true },
      { id: "c", text: "A S.A. aberta pode ter menos de 2 acionistas; a fechada exige mínimo de 3." },
      { id: "d", text: "A S.A. aberta é regulamentada pelo Banco Central; a fechada, pela JUCEB." }
    ]
  }),
  defineQuestion({
    id: "q-oab39-076",
    subjectId: "consumidor",
    themeId: "responsabilidade-fornecedor",
    examId: "oab-39",
    year: 2024,
    questionNumber: 76,
    difficulty: "hard",
    statement: "A responsabilidade pelo fato do produto no CDC abrange danos causados por produtos:",
    explanation: "Art. 12 CDC: danos causados por defeitos de concepção, fabricação, construção, montagem, fórmulas, manipulação, apresentação ou acondicionamento.",
    support: "CDC, art. 12.",
    relatedArticleIds: [],
    tags: ["fato do produto", "defeito"],
    alternatives: [
      { id: "a", text: "Que apresentem vício de qualidade que os torne inadequados." },
      { id: "b", text: "Que causem danos em razão de defeito de concepção, fabricação ou informação inadequada.", correct: true },
      { id: "c", text: "Cujo preço seja superior ao praticado no mercado." },
      { id: "d", text: "Que não atendam às expectativas subjetivas do consumidor." }
    ]
  }),
  defineQuestion({
    id: "q-oab39-077",
    subjectId: "consumidor",
    themeId: "tutela-consumidor",
    examId: "oab-39",
    year: 2024,
    questionNumber: 77,
    difficulty: "medium",
    statement: "O Código de Defesa do Consumidor prevê que as ações coletivas de consumidores para a defesa de interesses individuais homogêneos geram sentença condenatória:",
    explanation: "Art. 95 CDC: em caso de procedência do pedido, a condenação é genérica, fixando a responsabilidade do réu pelos danos causados.",
    support: "CDC, art. 95.",
    relatedArticleIds: [],
    tags: ["interesses individuais homogeneos", "sentenca generica"],
    alternatives: [
      { id: "a", text: "Específica, com liquidação individual imediata." },
      { id: "b", text: "Genérica, fixando a responsabilidade do réu, com liquidação posterior.", correct: true },
      { id: "c", text: "Apenas declaratória do direito individual de cada consumidor." },
      { id: "d", text: "Limitada a 1000 salários mínimos por réu." }
    ]
  }),
  defineQuestion({
    id: "q-oab39-078",
    subjectId: "consumidor",
    themeId: "protecao-contratual",
    examId: "oab-39",
    year: 2024,
    questionNumber: 78,
    difficulty: "hard",
    statement: "O CDC considera nulas as cláusulas que autorizem o fornecedor a modificar unilateralmente o preço dos produtos ou serviços. Essa proteção está prevista no:",
    explanation: "Art. 51, X, CDC: são nulas as cláusulas que permitam ao fornecedor, direta ou indiretamente, variação do preço de maneira unilateral.",
    support: "CDC, art. 51, X.",
    relatedArticleIds: [],
    tags: ["clausulas abusivas", "variacao de preco"],
    alternatives: [
      { id: "a", text: "Art. 6o, que trata dos direitos básicos do consumidor." },
      { id: "b", text: "Art. 51, que lista as cláusulas abusivas nulas de pleno direito.", correct: true },
      { id: "c", text: "Art. 35, que trata do descumprimento de oferta." },
      { id: "d", text: "Art. 18, que regula os vícios do produto." }
    ]
  }),
  defineQuestion({
    id: "q-oab39-079",
    subjectId: "consumidor",
    themeId: "praticas-abusivas",
    examId: "oab-39",
    year: 2024,
    questionNumber: 79,
    difficulty: "medium",
    statement: "A publicidade abusiva, vedada pelo CDC, é aquela que:",
    explanation: "Art. 37, §2o CDC: é abusiva a publicidade discriminatória, que incite à violência, explore o medo ou superstição, explore crianças, etc.",
    support: "CDC, art. 37, §2o.",
    relatedArticleIds: [],
    tags: ["publicidade abusiva", "discriminatoria"],
    alternatives: [
      { id: "a", text: "Contiver qualquer afirmação exagerada sobre o produto." },
      { id: "b", text: "For discriminatória, explorar o medo, a superstição ou incitar à violência.", correct: true },
      { id: "c", text: "Deixar de informar os riscos do produto para a saúde." },
      { id: "d", text: "Utilizar imagens que induzam o consumidor a erro sobre as características do produto." }
    ]
  }),
  defineQuestion({
    id: "q-oab39-080",
    subjectId: "consumidor",
    themeId: "responsabilidade-fornecedor",
    examId: "oab-39",
    year: 2024,
    questionNumber: 80,
    difficulty: "hard",
    statement: "A excludente de responsabilidade do fornecedor pelo fato do produto ocorre quando:",
    explanation: "Art. 12, §3o, CDC: o fabricante, produtor ou importador não responde quando provar que não colocou o produto no mercado, que o defeito inexiste ou culpa exclusiva do consumidor ou terceiro.",
    support: "CDC, art. 12, §3o.",
    relatedArticleIds: [],
    tags: ["excludente de responsabilidade", "defeito inexistente"],
    alternatives: [
      { id: "a", text: "O produto tiver sido vendido com desconto." },
      { id: "b", text: "O defeito inexistia quando da colocação do produto no mercado, ou quando não colocou o produto no mercado.", correct: true },
      { id: "c", text: "O consumidor não seguiu as instruções de uso." },
      { id: "d", text: "O produto tiver sido alterado pelo comerciante, mesmo que o fabricante soubesse." }
    ]
  }),
  defineQuestion({
    id: "q-oab38-001",
    subjectId: "etica",
    themeId: "deveres",
    examId: "oab-38",
    year: 2023,
    questionNumber: 1,
    difficulty: "medium",
    statement: "O advogado deve tratar com urbanidade e respeito seus clientes, os colegas e os servidores da Justiça. O descumprimento desse dever implica:",
    explanation: "Art. 34, XIX, EAOAB: falta de urbanidade é infração disciplinar.",
    support: "Lei 8.906/1994, art. 34, XIX.",
    relatedArticleIds: [],
    tags: ["etica", "urbanidade"],
    alternatives: [
      { id: "a", text: "Mera irregularidade processual." },
      { id: "b", text: "Infração disciplinar.", correct: true },
      { id: "c", text: "Crime de desrespeito à Justiça." },
      { id: "d", text: "Nenhuma consequência ética." }
    ]
  }),
  defineQuestion({
    id: "q-oab38-002",
    subjectId: "etica",
    themeId: "sigilo-profissional",
    examId: "oab-38",
    year: 2023,
    questionNumber: 2,
    difficulty: "hard",
    statement: "O advogado que revelar informações confidenciais do cliente, sem sua autorização, para obter prova em causa própria:",
    explanation: "Art. 25, §único, CED: o sigilo pode ser invocado como defesa em causa própria, mas não autoriza a revelação das informações para esse fim.",
    support: "CED, art. 25.",
    relatedArticleIds: [],
    tags: ["sigilo", "causa propria"],
    alternatives: [
      { id: "a", text: "Age licitamente, pois a autodefesa prevalece sobre o sigilo." },
      { id: "b", text: "Comete infração disciplinar, pois o sigilo prevalece mesmo em causa própria.", correct: true },
      { id: "c", text: "Age corretamente se autorizado por decisão judicial." },
      { id: "d", text: "Pode revelar o mínimo indispensável para sua defesa." }
    ]
  }),
  defineQuestion({
    id: "q-oab38-003",
    subjectId: "etica",
    themeId: "honorarios",
    examId: "oab-38",
    year: 2023,
    questionNumber: 3,
    difficulty: "medium",
    statement: "O advogado que cobrar honorários manifestamente exorbitantes comete:",
    explanation: "Art. 34, XXII, EAOAB: é infração disciplinar cobrar honorários exorbitantes.",
    support: "Lei 8.906/1994, art. 34, XXII.",
    relatedArticleIds: [],
    tags: ["honorarios", "exorbitantes"],
    alternatives: [
      { id: "a", text: "Ilícito civil apenas." },
      { id: "b", text: "Infração disciplinar.", correct: true },
      { id: "c", text: "Crime de concussão." },
      { id: "d", text: "Nenhuma infração, pois a liberdade contratual prevalece." }
    ]
  }),
  defineQuestion({
    id: "q-oab38-004",
    subjectId: "etica",
    themeId: "prerrogativas",
    examId: "oab-38",
    year: 2023,
    questionNumber: 4,
    difficulty: "medium",
    statement: "A prerrogativa do advogado de examinar autos findos ou em andamento:",
    explanation: "Art. 7o, XIII, EAOAB: o advogado pode examinar em qualquer repartição policial ou judiciária os autos, mesmo sem procuração.",
    support: "Lei 8.906/1994, art. 7o, XIII.",
    relatedArticleIds: [],
    tags: ["prerrogativas", "exame de autos"],
    alternatives: [
      { id: "a", text: "Exige procuração outorgada em todos os casos." },
      { id: "b", text: "É irrestrita: pode examinar autos mesmo sem procuração.", correct: true },
      { id: "c", text: "É restrita a autos de processos em que atua." },
      { id: "d", text: "Depende de autorização da parte contrária." }
    ]
  }),
  defineQuestion({
    id: "q-oab38-005",
    subjectId: "etica",
    themeId: "incompatibilidades",
    examId: "oab-38",
    year: 2023,
    questionNumber: 5,
    difficulty: "hard",
    statement: "Os servidores da administração pública direta, indireta e fundacional:",
    explanation: "Art. 28, VI, EAOAB: são incompatíveis com a advocacia os servidores que exerçam atividade de fiscalização, arrecadação ou lançamento de tributos.",
    support: "Lei 8.906/1994, art. 28, VI; 30.",
    relatedArticleIds: [],
    tags: ["incompatibilidades", "servidores"],
    alternatives: [
      { id: "a", text: "São sempre incompatíveis com o exercício da advocacia." },
      { id: "b", text: "Têm impedimento apenas para causas contra a entidade a que servem." },
      { id: "c", text: "São incompatíveis se exercerem atividades de fiscalização, arrecadação ou lançamento tributário.", correct: true },
      { id: "d", text: "Podem exercer a advocacia livremente, pois não são membros do MP." }
    ]
  }),
  defineQuestion({
    id: "q-oab38-006",
    subjectId: "etica",
    themeId: "infrações-disciplinares",
    examId: "oab-38",
    year: 2023,
    questionNumber: 6,
    difficulty: "medium",
    statement: "A suspensão do exercício profissional como sanção disciplinar:",
    explanation: "Art. 36-37, EAOAB: aplica-se nos casos de infrações de média gravidade.",
    support: "Lei 8.906/1994, art. 36-37.",
    relatedArticleIds: [],
    tags: ["suspensao", "sancao disciplinar"],
    alternatives: [
      { id: "a", text: "É a sanção mais grave, equivalente à exclusão." },
      { id: "b", text: "É aplicada automaticamente por inadimplência das anuidades." },
      { id: "c", text: "É sanção de média gravidade, entre a censura e a exclusão.", correct: true },
      { id: "d", text: "Não impede o advogado de atuar em causas em andamento." }
    ]
  }),
  defineQuestion({
    id: "q-oab38-007",
    subjectId: "etica",
    themeId: "deveres",
    examId: "oab-38",
    year: 2023,
    questionNumber: 7,
    difficulty: "easy",
    statement: "O dever de o advogado apresentar-se em juízo de forma escorreita, com traje adequado:",
    explanation: "O CED determina que o advogado deve agir com respeito às instituições e às autoridades, o que inclui a apresentação pessoal.",
    support: "CED.",
    relatedArticleIds: [],
    tags: ["deveres", "traje"],
    alternatives: [
      { id: "a", text: "É mera recomendação, sem sanção." },
      { id: "b", text: "É obrigação ética prevista no CED.", correct: true },
      { id: "c", text: "É exigido apenas nos Tribunais Superiores." },
      { id: "d", text: "Não é matéria de ética profissional." }
    ]
  }),
  defineQuestion({
    id: "q-oab38-008",
    subjectId: "etica",
    themeId: "honorarios",
    examId: "oab-38",
    year: 2023,
    questionNumber: 8,
    difficulty: "hard",
    statement: "O tabelamento dos honorários pela OAB seccional tem caráter:",
    explanation: "O tabelamento da OAB é apenas referencial, não vinculante; a fixação é livre por contrato entre as partes, respeitado o CED.",
    support: "CED; EAOAB.",
    relatedArticleIds: [],
    tags: ["honorarios", "tabela OAB"],
    alternatives: [
      { id: "a", text: "Vinculante, não podendo os honorários contratar-se abaixo da tabela." },
      { id: "b", text: "Meramente referencial, servindo como parâmetro.", correct: true },
      { id: "c", text: "Proibitivo, vedando honorários acima da tabela." },
      { id: "d", text: "Obrigatório apenas para causas trabalhistas." }
    ]
  }),
  defineQuestion({
    id: "q-oab38-009",
    subjectId: "etica",
    themeId: "sigilo-profissional",
    examId: "oab-38",
    year: 2023,
    questionNumber: 9,
    difficulty: "medium",
    statement: "O sigilo profissional do advogado abrange:",
    explanation: "Art. 25, CED: todas as informações obtidas no exercício da profissão, independentemente do suporte.",
    support: "CED, art. 25.",
    relatedArticleIds: [],
    tags: ["sigilo", "informacoes"],
    alternatives: [
      { id: "a", text: "Apenas os documentos físicos entregues pelo cliente." },
      { id: "b", text: "Todas as informações obtidas no exercício profissional, independentemente do suporte.", correct: true },
      { id: "c", text: "Somente o conteúdo das petições e pareceres elaborados." },
      { id: "d", text: "Apenas informações obtidas após a constituição formal do mandato." }
    ]
  }),
  defineQuestion({
    id: "q-oab38-010",
    subjectId: "etica",
    themeId: "inscricao-oab",
    examId: "oab-38",
    year: 2023,
    questionNumber: 10,
    difficulty: "medium",
    statement: "A inscrição suplementar na OAB é aquela realizada:",
    explanation: "Art. 10, EAOAB: a inscrição suplementar é realizada pelo advogado que atua em outra seccional, além de sua seccional principal.",
    support: "Lei 8.906/1994, art. 10.",
    relatedArticleIds: [],
    tags: ["inscricao suplementar"],
    alternatives: [
      { id: "a", text: "Quando o advogado é aprovado no Exame de Ordem em outro estado." },
      { id: "b", text: "Quando o advogado atua habitualmente em seccional diferente da de inscrição principal.", correct: true },
      { id: "c", text: "Exclusivamente para advogados que exercem a docência." },
      { id: "d", text: "Quando o advogado passa a atuar apenas em tribunais superiores." }
    ]
  }),
  defineQuestion({
    id: "q-oab38-011",
    subjectId: "constitucional",
    themeId: "direitos-fundamentais",
    examId: "oab-38",
    year: 2023,
    questionNumber: 11,
    difficulty: "medium",
    statement: "O direito ao silêncio, previsto no art. 5o, LXIII, da CF/88, garante ao preso:",
    explanation: "O preso tem o direito de permanecer calado e de não produzir provas contra si mesmo.",
    support: "CF/88, art. 5o, LXIII.",
    relatedArticleIds: [],
    tags: ["direito ao silencio", "nemo tenetur"],
    alternatives: [
      { id: "a", text: "O direito de não ser preso cautelarmente." },
      { id: "b", text: "O direito de permanecer calado, sem que isso seja interpretado em seu prejuízo.", correct: true },
      { id: "c", text: "O direito à assistência de defensor público obrigatoriamente." },
      { id: "d", text: "O direito de se comunicar com familiares antes de ser interrogado." }
    ]
  }),
  defineQuestion({
    id: "q-oab38-012",
    subjectId: "constitucional",
    themeId: "controle-constitucionalidade",
    examId: "oab-38",
    year: 2023,
    questionNumber: 12,
    difficulty: "hard",
    statement: "No controle abstrato de constitucionalidade, a declaração de inconstitucionalidade produz efeitos:",
    explanation: "No controle abstrato (ADI), a decisão do STF tem efeito erga omnes, vinculante e, em regra, ex tunc (retroativo).",
    support: "CF/88, art. 102, §2o.",
    relatedArticleIds: [],
    tags: ["controle abstrato", "efeitos erga omnes"],
    alternatives: [
      { id: "a", text: "Inter partes e ex nunc." },
      { id: "b", text: "Erga omnes, vinculante e, em regra, ex tunc.", correct: true },
      { id: "c", text: "Inter partes e ex tunc." },
      { id: "d", text: "Erga omnes, sem efeito vinculante." }
    ]
  }),
  defineQuestion({
    id: "q-oab38-013",
    subjectId: "constitucional",
    themeId: "organizacao-estado",
    examId: "oab-38",
    year: 2023,
    questionNumber: 13,
    difficulty: "medium",
    statement: "Os Municípios, na forma da Constituição Federal de 1988:",
    explanation: "Art. 1o e 18 CF: os municípios são entes federativos autônomos.",
    support: "CF/88, art. 18.",
    relatedArticleIds: [],
    tags: ["municipios", "federalismo", "autonomia"],
    alternatives: [
      { id: "a", text: "São entes meramente administrativos, sem autonomia política." },
      { id: "b", text: "Integram a federação como entes autônomos, com autogoverno e autolegislação.", correct: true },
      { id: "c", text: "Subordinam-se política e administrativamente aos Estados." },
      { id: "d", text: "Têm autonomia apenas para assuntos de interesse exclusivamente local." }
    ]
  }),
  defineQuestion({
    id: "q-oab38-014",
    subjectId: "constitucional",
    themeId: "poder-legislativo",
    examId: "oab-38",
    year: 2023,
    questionNumber: 14,
    difficulty: "hard",
    statement: "O processo legislativo de emenda à Constituição exige proposta subscrita por:",
    explanation: "Art. 60, I a III, CF: pode propor emenda 1/3 dos membros da CD ou SF; mais da metade das AL dos estados; Presidente.",
    support: "CF/88, art. 60.",
    relatedArticleIds: [],
    tags: ["emenda constitucional", "proposta"],
    alternatives: [
      { id: "a", text: "Qualquer parlamentar, desde que aprovada em um turno." },
      { id: "b", text: "Um terço dos membros da Câmara ou do Senado; mais da metade das ALs; ou o Presidente.", correct: true },
      { id: "c", text: "Maioria absoluta da Câmara e do Senado simultaneamente." },
      { id: "d", text: "Dois terços do Congresso Nacional em sessão conjunta." }
    ]
  }),
  defineQuestion({
    id: "q-oab38-015",
    subjectId: "constitucional",
    themeId: "direitos-fundamentais",
    examId: "oab-38",
    year: 2023,
    questionNumber: 15,
    difficulty: "medium",
    statement: "A CF/88 garante o acesso à informação pública. Esse direito pode ser restringido quando:",
    explanation: "Art. 5o, XXXIII, CF: o sigilo de informações necessário à segurança da sociedade e do Estado pode ser imposto por lei.",
    support: "CF/88, art. 5o, XXXIII.",
    relatedArticleIds: [],
    tags: ["acesso a informacao", "sigilo"],
    alternatives: [
      { id: "a", text: "O pedido envolver documentos antigos, com mais de 30 anos." },
      { id: "b", text: "Informações cujo sigilo seja necessário à segurança da sociedade ou do Estado.", correct: true },
      { id: "c", text: "O solicitante não demonstrar interesse legítimo na informação." },
      { id: "d", text: "O órgão público entender que a informação pode causar constrangimento." }
    ]
  }),
  defineQuestion({
    id: "q-oab38-016",
    subjectId: "constitucional",
    themeId: "poder-judiciario",
    examId: "oab-38",
    year: 2023,
    questionNumber: 16,
    difficulty: "hard",
    statement: "O princípio da motivação das decisões judiciais, previsto no art. 93, IX, da CF/88:",
    explanation: "Todas as decisões do Poder Judiciário devem ser fundamentadas, sob pena de nulidade.",
    support: "CF/88, art. 93, IX.",
    relatedArticleIds: [],
    tags: ["motivacao das decisoes", "fundamentacao"],
    alternatives: [
      { id: "a", text: "Aplica-se apenas às decisões definitivas, não às interlocutórias." },
      { id: "b", text: "Exige que todas as decisões judiciais sejam fundamentadas, sob pena de nulidade.", correct: true },
      { id: "c", text: "É dispensável em julgamentos do Tribunal do Júri." },
      { id: "d", text: "Pode ser flexibilizado em situações de urgência." }
    ]
  }),
  defineQuestion({
    id: "q-oab38-017",
    subjectId: "constitucional",
    themeId: "habeas-corpus-constitucional",
    examId: "oab-38",
    year: 2023,
    questionNumber: 17,
    difficulty: "medium",
    statement: "A ação popular, prevista no art. 5o, LXXIII, da CF/88, é instrumento para:",
    explanation: "Qualquer cidadão pode propor ação popular para anular ato lesivo ao patrimônio público, à moralidade administrativa, ao meio ambiente etc.",
    support: "CF/88, art. 5o, LXXIII.",
    relatedArticleIds: [],
    tags: ["acao popular", "cidadao"],
    alternatives: [
      { id: "a", text: "Proteger direito líquido e certo do autor contra ato de autoridade." },
      { id: "b", text: "Anular ato lesivo ao patrimônio público, à moralidade administrativa ou ao meio ambiente.", correct: true },
      { id: "c", text: "Garantir o acesso a informações pessoais em bancos de dados públicos." },
      { id: "d", text: "Suprir omissão normativa que inviabilize direito constitucional." }
    ]
  }),
  defineQuestion({
    id: "q-oab38-018",
    subjectId: "constitucional",
    themeId: "poder-executivo",
    examId: "oab-38",
    year: 2023,
    questionNumber: 18,
    difficulty: "hard",
    statement: "A edição de decreto autônomo pelo Presidente da República, prevista no art. 84, VI, da CF/88, é restrita a:",
    explanation: "Art. 84, VI, CF: organização e funcionamento da administração federal, e extinção de funções ou cargos públicos vagos.",
    support: "CF/88, art. 84, VI.",
    relatedArticleIds: [],
    tags: ["decreto autonomo", "art 84 VI"],
    alternatives: [
      { id: "a", text: "Qualquer matéria de interesse da administração federal." },
      { id: "b", text: "Organização e funcionamento da administração federal, quando não exigir lei.", correct: true },
      { id: "c", text: "Criação de cargos públicos e fixação de vencimentos." },
      { id: "d", text: "Regulamentação de leis federais em toda sua extensão." }
    ]
  }),
  defineQuestion({
    id: "q-oab38-019",
    subjectId: "constitucional",
    themeId: "adi-ação-direta",
    examId: "oab-38",
    year: 2023,
    questionNumber: 19,
    difficulty: "medium",
    statement: "O efeito vinculante das decisões do STF em ADI:",
    explanation: "Art. 102, §2o, CF: o efeito vinculante abrange os demais órgãos do Poder Judiciário e a administração pública direta e indireta.",
    support: "CF/88, art. 102, §2o.",
    relatedArticleIds: [],
    tags: ["efeito vinculante", "ADI", "STF"],
    alternatives: [
      { id: "a", text: "Alcança apenas os juízes de primeira instância." },
      { id: "b", text: "Abrange todos os órgãos do Judiciário e a administração pública direta e indireta.", correct: true },
      { id: "c", text: "Vincula também o Poder Legislativo." },
      { id: "d", text: "É restrito ao caso concreto que originou a ADI." }
    ]
  }),
  defineQuestion({
    id: "q-oab38-020",
    subjectId: "constitucional",
    themeId: "principios-constitucionais",
    examId: "oab-38",
    year: 2023,
    questionNumber: 20,
    difficulty: "easy",
    statement: "A separação dos Poderes no Brasil:",
    explanation: "Art. 2o CF: são Poderes independentes e harmônicos entre si.",
    support: "CF/88, art. 2o.",
    relatedArticleIds: [],
    tags: ["separacao dos poderes", "independencia", "harmonia"],
    alternatives: [
      { id: "a", text: "É absoluta, sem qualquer forma de interpenetração entre os Poderes." },
      { id: "b", text: "Permite que cada Poder exerça funções típicas e atípicas, com independência e harmonia.", correct: true },
      { id: "c", text: "Proíbe qualquer delegação de funções entre os Poderes." },
      { id: "d", text: "É aplicável apenas ao Poder Executivo e Legislativo." }
    ]
  }),
  defineQuestion({
    id: "q-oab38-021",
    subjectId: "administrativo",
    themeId: "atos-administrativos",
    examId: "oab-38",
    year: 2023,
    questionNumber: 21,
    difficulty: "medium",
    statement: "O silêncio administrativo, quando a lei não lhe atribui efeito:",
    explanation: "Em regra, o silêncio não produz efeito jurídico (nem deferimento nem indeferimento), salvo previsão legal.",
    support: "Lei 9.784/1999.",
    relatedArticleIds: [],
    tags: ["silencio administrativo"],
    alternatives: [
      { id: "a", text: "Equivale sempre a deferimento tácito." },
      { id: "b", text: "Não produz efeito, salvo quando a lei expressamente dispuser.", correct: true },
      { id: "c", text: "Equivale a indeferimento tácito, autorizando recurso." },
      { id: "d", text: "Gera responsabilidade objetiva do Estado." }
    ]
  }),
  defineQuestion({
    id: "q-oab38-022",
    subjectId: "administrativo",
    themeId: "licitacao",
    examId: "oab-38",
    year: 2023,
    questionNumber: 22,
    difficulty: "hard",
    statement: "A habilitação na licitação pública consiste na verificação:",
    explanation: "A habilitação verifica se o licitante atende às condições pessoais exigidas para contratar com a Administração.",
    support: "Lei 14.133/2021, art. 62-70.",
    relatedArticleIds: [],
    tags: ["habilitacao", "licitacao"],
    alternatives: [
      { id: "a", text: "Da melhor proposta técnica e econômica do licitante." },
      { id: "b", text: "Das condições pessoais do licitante para contratar com a Administração (jurídicas, fiscais, trabalhistas, econômico-financeiras).", correct: true },
      { id: "c", text: "Do preço de mercado do objeto licitado." },
      { id: "d", text: "Da regularidade do edital perante o TCU." }
    ]
  }),
  defineQuestion({
    id: "q-oab38-023",
    subjectId: "administrativo",
    themeId: "improbidade",
    examId: "oab-38",
    year: 2023,
    questionNumber: 23,
    difficulty: "medium",
    statement: "A prescrição das ações de improbidade administrativa, após a Lei 14.230/2021:",
    explanation: "Art. 23, Lei 8.429/1992 (redação Lei 14.230/2021): 8 anos do fato ou término do exercício de mandato.",
    support: "Lei 8.429/1992, art. 23; Lei 14.230/2021.",
    relatedArticleIds: [],
    tags: ["prescricao", "improbidade", "8 anos"],
    alternatives: [
      { id: "a", text: "É de 5 anos do fato." },
      { id: "b", text: "É de 8 anos do fato ou do término do mandato.", correct: true },
      { id: "c", text: "Não existe; a improbidade é imprescritível." },
      { id: "d", text: "É de 3 anos do conhecimento do fato pelo MP." }
    ]
  }),
  defineQuestion({
    id: "q-oab38-024",
    subjectId: "administrativo",
    themeId: "responsabilidade-estado",
    examId: "oab-38",
    year: 2023,
    questionNumber: 24,
    difficulty: "hard",
    statement: "A denunciação à lide do servidor que causou o dano, na ação indenizatória movida contra o Estado:",
    explanation: "O STJ pacificou que o Estado não é obrigado a denunciar o servidor; a ação regressiva é exercida separadamente.",
    support: "STF, RE 327.904; STJ.",
    relatedArticleIds: [],
    tags: ["denunciacao a lide", "acao regressiva"],
    alternatives: [
      { id: "a", text: "É obrigatória para que o Estado possa exercer o direito de regresso." },
      { id: "b", text: "É facultativa, pois o Estado pode exercer o direito de regresso em ação autônoma.", correct: true },
      { id: "c", text: "É vedada, pois o servidor não pode ser chamado em garantia." },
      { id: "d", text: "É obrigatória apenas quando o servidor tiver agido com dolo." }
    ]
  }),
  defineQuestion({
    id: "q-oab38-025",
    subjectId: "administrativo",
    themeId: "atos-administrativos",
    examId: "oab-38",
    year: 2023,
    questionNumber: 25,
    difficulty: "medium",
    statement: "A teoria dos motivos determinantes vincula a validade do ato administrativo:",
    explanation: "Pelo princípio da teoria dos motivos determinantes, mesmo nos atos discricionários, a validade fica vinculada aos motivos declarados.",
    support: "Doutrina.",
    relatedArticleIds: [],
    tags: ["teoria dos motivos determinantes"],
    alternatives: [
      { id: "a", text: "Apenas aos atos vinculados." },
      { id: "b", text: "Aos motivos declarados pelo agente, mesmo nos atos discricionários.", correct: true },
      { id: "c", text: "Apenas quando a lei exige motivação expressa." },
      { id: "d", text: "Somente aos atos que gerem direitos subjetivos." }
    ]
  }),
  defineQuestion({
    id: "q-oab38-026",
    subjectId: "administrativo",
    themeId: "poder-policia",
    examId: "oab-38",
    year: 2023,
    questionNumber: 26,
    difficulty: "hard",
    statement: "O poder de polícia é exercido pela Administração com base no princípio da proporcionalidade, o que implica:",
    explanation: "A medida de polícia deve ser adequada, necessária e proporcional em sentido estrito ao objetivo visado.",
    support: "Doutrina.",
    relatedArticleIds: [],
    tags: ["proporcionalidade", "poder de policia"],
    alternatives: [
      { id: "a", text: "Usar todos os meios disponíveis, sem limitação, para atingir o interesse público." },
      { id: "b", text: "Adotar a medida mais adequada, necessária e proporcional ao objetivo visado.", correct: true },
      { id: "c", text: "Priorizar sempre a sanção mais grave para garantir eficácia dissuasória." },
      { id: "d", text: "Dispensar a motivação em situações de urgência." }
    ]
  }),
  defineQuestion({
    id: "q-oab38-027",
    subjectId: "administrativo",
    themeId: "concessoes",
    examId: "oab-38",
    year: 2023,
    questionNumber: 27,
    difficulty: "medium",
    statement: "A permissão de uso de bem público difere da autorização de uso porque:",
    explanation: "A permissão é ato discricionário precário, mas pressupõe interesse coletivo na utilização; a autorização é ato discricionário para interesse predominantemente privado.",
    support: "Doutrina.",
    relatedArticleIds: [],
    tags: ["permissao de uso", "autorizacao"],
    alternatives: [
      { id: "a", text: "A permissão é sempre onerosa; a autorização, gratuita." },
      { id: "b", text: "A permissão pressupõe interesse coletivo na utilização; a autorização, interesse predominantemente privado.", correct: true },
      { id: "c", text: "A permissão exige licitação; a autorização, não." },
      { id: "d", text: "A permissão é irrevogável; a autorização, revogável a qualquer tempo." }
    ]
  }),
  defineQuestion({
    id: "q-oab38-028",
    subjectId: "tributario",
    themeId: "principios-tributarios",
    examId: "oab-38",
    year: 2023,
    questionNumber: 28,
    difficulty: "hard",
    statement: "O princípio da capacidade contributiva aplica-se:",
    explanation: "Art. 145, §1o, CF: aplica-se sempre que possível aos impostos, facultado à Administração identificar o patrimônio e a renda dos contribuintes.",
    support: "CF/88, art. 145, §1o.",
    relatedArticleIds: [],
    tags: ["capacidade contributiva"],
    alternatives: [
      { id: "a", text: "A todos os tributos, incluindo taxas e contribuições." },
      { id: "b", text: "Sempre que possível aos impostos, sendo facultado identificar a capacidade econômica.", correct: true },
      { id: "c", text: "Exclusivamente ao imposto de renda." },
      { id: "d", text: "Apenas aos tributos federais de caráter pessoal." }
    ]
  }),
  defineQuestion({
    id: "q-oab38-029",
    subjectId: "tributario",
    themeId: "obrigacao-tributaria",
    examId: "oab-38",
    year: 2023,
    questionNumber: 29,
    difficulty: "medium",
    statement: "O domicílio tributário do contribuinte pessoa física, quando não houver eleição:",
    explanation: "Art. 127, I, CTN: é o local da residência habitual; se incerto, o centro das atividades.",
    support: "CTN, art. 127, I.",
    relatedArticleIds: [],
    tags: ["domicilio tributario", "pessoa fisica"],
    alternatives: [
      { id: "a", text: "É sempre o município do seu local de trabalho." },
      { id: "b", text: "É a residência habitual; se incerta, o centro de suas atividades.", correct: true },
      { id: "c", text: "É a sede da empresa para a qual trabalha." },
      { id: "d", text: "É o local de nascimento do contribuinte." }
    ]
  }),
  defineQuestion({
    id: "q-oab38-030",
    subjectId: "tributario",
    themeId: "lancamento",
    examId: "oab-38",
    year: 2023,
    questionNumber: 30,
    difficulty: "hard",
    statement: "A revisão do lançamento tributário pelo Fisco é possível nas hipóteses do art. 149 do CTN. Uma das hipóteses é:",
    explanation: "Art. 149, IX, CTN: quando a lei o determine.",
    support: "CTN, art. 149.",
    relatedArticleIds: [],
    tags: ["revisao do lancamento", "art 149"],
    alternatives: [
      { id: "a", text: "Quando o contribuinte solicitar a revisão do lançamento anterior." },
      { id: "b", text: "Quando se comprove omissão ou inexatidão da pessoa obrigada a praticar ato de que dependa o lançamento.", correct: true },
      { id: "c", text: "Sempre que o valor do tributo for superior ao declarado." },
      { id: "d", text: "Quando houver alteração de alíquotas por lei posterior." }
    ]
  }),
  defineQuestion({
    id: "q-oab38-031",
    subjectId: "tributario",
    themeId: "espécies-tributarias",
    examId: "oab-38",
    year: 2023,
    questionNumber: 31,
    difficulty: "medium",
    statement: "A contribuição de melhoria pode ser cobrada quando houver:",
    explanation: "Art. 145, III, CF e art. 81, CTN: valorização imobiliária decorrente de obra pública.",
    support: "CF/88, art. 145, III.",
    relatedArticleIds: [],
    tags: ["contribuicao de melhoria", "valorizacao imobiliaria"],
    alternatives: [
      { id: "a", text: "Qualquer obra pública, independentemente de valorização imobiliária." },
      { id: "b", text: "Valorização imobiliária decorrente de obras públicas.", correct: true },
      { id: "c", text: "Serviço público específico e divisível prestado ao contribuinte." },
      { id: "d", text: "Exercício do poder de polícia." }
    ]
  }),
  defineQuestion({
    id: "q-oab38-032",
    subjectId: "tributario",
    themeId: "imunidades-tributarias",
    examId: "oab-38",
    year: 2023,
    questionNumber: 32,
    difficulty: "hard",
    statement: "A imunidade dos livros, jornais, periódicos e o papel destinado a sua impressão:",
    explanation: "Art. 150, VI, d, CF: imunidade objetiva, alcança apenas esses bens específicos, não os insumos.",
    support: "CF/88, art. 150, VI, d.",
    relatedArticleIds: [],
    tags: ["imunidade", "livros", "papel"],
    alternatives: [
      { id: "a", text: "Abrange todos os insumos de produção editorial." },
      { id: "b", text: "Restringe-se a impostos sobre livros, jornais, periódicos e papel para impressão.", correct: true },
      { id: "c", text: "Inclui serviços de impressão e distribuição." },
      { id: "d", text: "Alcança qualquer bem ou serviço relacionado à atividade editorial." }
    ]
  }),
  defineQuestion({
    id: "q-oab38-033",
    subjectId: "tributario",
    themeId: "principios-tributarios",
    examId: "oab-38",
    year: 2023,
    questionNumber: 33,
    difficulty: "medium",
    statement: "O princípio da não-surpresa tributária engloba:",
    explanation: "A não-surpresa compreende a anterioridade do exercício financeiro e a anterioridade nonagesimal como garantias do contribuinte.",
    support: "CF/88, art. 150, III, b e c.",
    relatedArticleIds: [],
    tags: ["nao-surpresa", "anterioridade"],
    alternatives: [
      { id: "a", text: "Apenas a anterioridade do exercício financeiro." },
      { id: "b", text: "A anterioridade do exercício financeiro e a anterioridade nonagesimal.", correct: true },
      { id: "c", text: "Apenas a irretroatividade da lei tributária." },
      { id: "d", text: "A imunidade recíproca e a legalidade tributária." }
    ]
  }),
  defineQuestion({
    id: "q-oab38-034",
    subjectId: "civil",
    themeId: "obrigacoes",
    examId: "oab-38",
    year: 2023,
    questionNumber: 34,
    difficulty: "medium",
    statement: "A solidariedade entre devedores:",
    explanation: "Art. 264-265, CC: não se presume; resulta da lei ou da vontade das partes.",
    support: "CC/2002, art. 264-265.",
    relatedArticleIds: [],
    tags: ["solidariedade passiva", "nao se presume"],
    alternatives: [
      { id: "a", text: "Presume-se quando há pluralidade de devedores." },
      { id: "b", text: "Não se presume, resultando apenas da lei ou da vontade das partes.", correct: true },
      { id: "c", text: "É a regra geral nas relações de consumo." },
      { id: "d", text: "Pode ser presumida quando o contrato for de adesão." }
    ]
  }),
  defineQuestion({
    id: "q-oab38-035",
    subjectId: "civil",
    themeId: "contratos",
    examId: "oab-38",
    year: 2023,
    questionNumber: 35,
    difficulty: "hard",
    statement: "O contrato preliminar (pré-contrato):",
    explanation: "Art. 462-466, CC: deve conter todos os requisitos essenciais do contrato definitivo, exceto a forma.",
    support: "CC/2002, art. 462.",
    relatedArticleIds: [],
    tags: ["contrato preliminar", "pre-contrato"],
    alternatives: [
      { id: "a", text: "Não precisa conter os elementos essenciais do contrato definitivo." },
      { id: "b", text: "Deve conter todos os requisitos do contrato definitivo, exceto a forma.", correct: true },
      { id: "c", text: "Produz os mesmos efeitos do contrato definitivo desde a sua celebração." },
      { id: "d", text: "Só é válido se celebrado por instrumento público." }
    ]
  }),
  defineQuestion({
    id: "q-oab38-036",
    subjectId: "civil",
    themeId: "responsabilidade-civil",
    examId: "oab-38",
    year: 2023,
    questionNumber: 36,
    difficulty: "medium",
    statement: "O dano estético, espécie de dano extrapatrimonial, pode ser cumulado com o dano moral?",
    explanation: "STJ firmou que dano estético e dano moral são inconfundíveis e cumuláveis quando ambos decorrem do mesmo fato.",
    support: "STJ, Súmula 387.",
    relatedArticleIds: [],
    tags: ["dano estetico", "dano moral", "cumulacao", "Sumula 387 STJ"],
    alternatives: [
      { id: "a", text: "Não, pois ambos são espécies do mesmo gênero e cumulá-los configura bis in idem." },
      { id: "b", text: "Sim, pois são espécies distintas de dano extrapatrimonial, cumuláveis quando distintos os fundamentos.", correct: true },
      { id: "c", text: "Apenas se o dano estético for permanente." },
      { id: "d", text: "Apenas nas relações de consumo, por força do CDC." }
    ]
  }),
  defineQuestion({
    id: "q-oab38-037",
    subjectId: "civil",
    themeId: "familia",
    examId: "oab-38",
    year: 2023,
    questionNumber: 37,
    difficulty: "hard",
    statement: "No regime de separação obrigatória de bens, aplicável aos que se casam com mais de 70 anos:",
    explanation: "A Súmula 377 STF (ainda aplicada por muitos) e art. 1641, II, CC: a separação é obrigatória; STJ entende que os bens adquiridos onerosamente se comunicam (Súmula 377).",
    support: "CC/2002, art. 1641, II.",
    relatedArticleIds: [],
    tags: ["separacao obrigatoria", "Sumula 377"],
    alternatives: [
      { id: "a", text: "Não há qualquer comunicação patrimonial." },
      { id: "b", text: "Comunicam-se os bens adquiridos onerosamente na constância do casamento, segundo o STJ.", correct: true },
      { id: "c", text: "O regime equivale à comunhão universal de bens." },
      { id: "d", text: "Apenas os bens móveis se comunicam." }
    ]
  }),
  defineQuestion({
    id: "q-oab38-038",
    subjectId: "civil",
    themeId: "posse-propriedade",
    examId: "oab-38",
    year: 2023,
    questionNumber: 38,
    difficulty: "medium",
    statement: "O possuidor de boa-fé que realizar benfeitorias necessárias e úteis na coisa:",
    explanation: "Art. 1219, CC: o possuidor de boa-fé tem direito à indenização das benfeitorias necessárias e úteis, podendo reter a coisa até ser indenizado.",
    support: "CC/2002, art. 1219.",
    relatedArticleIds: [],
    tags: ["benfeitorias", "possuidor de boa-fe", "retencao"],
    alternatives: [
      { id: "a", text: "Não tem direito a indenização, pois a posse é precária." },
      { id: "b", text: "Tem direito à indenização e pode reter a coisa até ser indenizado.", correct: true },
      { id: "c", text: "Só tem direito a benfeitorias necessárias, não as úteis." },
      { id: "d", text: "Perde o direito de retenção se a posse for de curta duração." }
    ]
  }),
  defineQuestion({
    id: "q-oab38-039",
    subjectId: "civil",
    themeId: "contratos",
    examId: "oab-38",
    year: 2023,
    questionNumber: 39,
    difficulty: "hard",
    statement: "O contrato de doação com encargo (modal):",
    explanation: "Art. 553-555, CC: a doação com encargo impõe um ônus ao donatário, e o descumprimento pode ensejar revogação.",
    support: "CC/2002, art. 553.",
    relatedArticleIds: [],
    tags: ["doacao com encargo", "revogacao"],
    alternatives: [
      { id: "a", text: "É revogada automaticamente pelo descumprimento do encargo." },
      { id: "b", text: "Pode ser revogada pelo doador pelo descumprimento do encargo, mediante ação judicial.", correct: true },
      { id: "c", text: "É nula se o encargo beneficiar terceiro." },
      { id: "d", text: "Não pode ser revogada, pois a doação é irrevogável." }
    ]
  }),
  defineQuestion({
    id: "q-oab38-040",
    subjectId: "civil",
    themeId: "sucessoes",
    examId: "oab-38",
    year: 2023,
    questionNumber: 40,
    difficulty: "medium",
    statement: "A herança jacente ocorre quando:",
    explanation: "Art. 1819-1823, CC: a herança jacente ocorre quando não há herdeiros conhecidos; após 5 anos, é declarada vacante e reverte ao Município.",
    support: "CC/2002, art. 1819.",
    relatedArticleIds: [],
    tags: ["heranca jacente", "herdeiros"],
    alternatives: [
      { id: "a", text: "O testamento é declarado nulo por vício de forma." },
      { id: "b", text: "Não há herdeiros conhecidos ou todos os herdeiros renunciarem.", correct: true },
      { id: "c", text: "O de cujus morre sem deixar testamento." },
      { id: "d", text: "O espólio não tem bens suficientes para pagar as dívidas." }
    ]
  }),
  defineQuestion({
    id: "q-oab38-041",
    subjectId: "civil",
    themeId: "prescricao-decadencia-civil",
    examId: "oab-38",
    year: 2023,
    questionNumber: 41,
    difficulty: "hard",
    statement: "O prazo prescricional para a pretensão fundada em responsabilidade civil é de:",
    explanation: "Art. 206, §3o, V, CC: 3 anos para reparação civil.",
    support: "CC/2002, art. 206, §3o, V.",
    relatedArticleIds: [],
    tags: ["prescricao", "responsabilidade civil", "3 anos"],
    alternatives: [
      { id: "a", text: "1 ano." },
      { id: "b", text: "2 anos." },
      { id: "c", text: "3 anos.", correct: true },
      { id: "d", text: "5 anos." }
    ]
  }),
  defineQuestion({
    id: "q-oab38-042",
    subjectId: "civil",
    themeId: "capacidade-civil",
    examId: "oab-38",
    year: 2023,
    questionNumber: 42,
    difficulty: "medium",
    statement: "A interdição do pródigo limita sua capacidade para:",
    explanation: "Art. 1782, CC: ao pródigo é vedado, sem curador, emprestar, transigir, dar quitação, alienar, hipotecar, demandar ou ser demandado.",
    support: "CC/2002, art. 1782.",
    relatedArticleIds: [],
    tags: ["prodigo", "interdição", "curatela"],
    alternatives: [
      { id: "a", text: "Todos os atos da vida civil, incluindo os pessoais." },
      { id: "b", text: "Apenas os atos patrimoniais que possam dilapidar o patrimônio.", correct: true },
      { id: "c", text: "Assinar contratos de qualquer natureza." },
      { id: "d", text: "Apenas para alienar imóveis acima de 100 salários mínimos." }
    ]
  }),
  defineQuestion({
    id: "q-oab38-043",
    subjectId: "processo-civil",
    themeId: "tutela-provisoria",
    examId: "oab-38",
    year: 2023,
    questionNumber: 43,
    difficulty: "medium",
    statement: "A tutela cautelar, espécie de tutela de urgência, visa:",
    explanation: "Art. 294-310, CPC: a tutela cautelar assegura o resultado útil do processo futuro, sem adiantar o mérito.",
    support: "CPC/2015, art. 294.",
    relatedArticleIds: [],
    tags: ["tutela cautelar", "resultado util"],
    alternatives: [
      { id: "a", text: "Antecipar os efeitos da decisão de mérito." },
      { id: "b", text: "Assegurar o resultado útil do processo futuro, sem antecipar o mérito.", correct: true },
      { id: "c", text: "Substituir a sentença de mérito nas causas urgentes." },
      { id: "d", text: "Suspender o processo até que a parte cumpra determinação judicial." }
    ]
  }),
  defineQuestion({
    id: "q-oab38-044",
    subjectId: "processo-civil",
    themeId: "petição-inicial",
    examId: "oab-38",
    year: 2023,
    questionNumber: 44,
    difficulty: "hard",
    statement: "A reconvenção, no CPC/2015:",
    explanation: "Art. 343, CPC: a reconvenção é apresentada pelo réu contra o autor no próprio processo, como pedido contraposto autônomo.",
    support: "CPC/2015, art. 343.",
    relatedArticleIds: [],
    tags: ["reconvencao"],
    alternatives: [
      { id: "a", text: "Deve ser apresentada em ação autônoma, não nos mesmos autos." },
      { id: "b", text: "É formulada pelo réu no mesmo processo contra o autor.", correct: true },
      { id: "c", text: "É cabível apenas em processo de execução." },
      { id: "d", text: "Substitui a contestação quando o réu tiver pedido próprio contra o autor." }
    ]
  }),
  defineQuestion({
    id: "q-oab38-045",
    subjectId: "processo-civil",
    themeId: "recursos",
    examId: "oab-38",
    year: 2023,
    questionNumber: 45,
    difficulty: "medium",
    statement: "Os embargos de divergência, no STJ:",
    explanation: "Art. 1043, CPC: cabem contra decisão de turma que divergir de julgamento de outra turma, seção ou plenário do próprio STJ.",
    support: "CPC/2015, art. 1043.",
    relatedArticleIds: [],
    tags: ["embargos de divergencia", "STJ"],
    alternatives: [
      { id: "a", text: "Cabem contra acórdão de TJ que divergir de decisão de TRF." },
      { id: "b", text: "São cabíveis contra acórdão de turma do STJ que divergir de outra turma, seção ou plenário do STJ.", correct: true },
      { id: "c", text: "São recurso ordinário das turmas para o pleno." },
      { id: "d", text: "Cabem apenas em matéria penal, para uniformizar jurisprudência criminal." }
    ]
  }),
  defineQuestion({
    id: "q-oab38-046",
    subjectId: "processo-civil",
    themeId: "execucao",
    examId: "oab-38",
    year: 2023,
    questionNumber: 46,
    difficulty: "hard",
    statement: "A impenhorabilidade do bem de família, prevista na Lei 8.009/1990:",
    explanation: "Lei 8.009/1990 e Súmula 364 STJ: o bem de família é impenhorável, inclusive para o devedor solteiro, estendendo-se ao imóvel de valor modesto.",
    support: "Lei 8.009/1990.",
    relatedArticleIds: [],
    tags: ["bem de familia", "impenhorabilidade"],
    alternatives: [
      { id: "a", text: "Aplica-se apenas ao imóvel onde reside a família com filhos menores." },
      { id: "b", text: "Protege o imóvel residencial próprio da entidade familiar, inclusive do solteiro.", correct: true },
      { id: "c", text: "É restrita a dívidas de natureza tributária." },
      { id: "d", text: "Não se aplica quando o bem for dado em garantia real pelo próprio devedor." }
    ]
  }),
  defineQuestion({
    id: "q-oab38-047",
    subjectId: "processo-civil",
    themeId: "sentenca-coisa-julgada",
    examId: "oab-38",
    year: 2023,
    questionNumber: 47,
    difficulty: "medium",
    statement: "A sentença homologatória de acordo entre as partes faz coisa julgada:",
    explanation: "Art. 487, III, CPC: a homologação de acordo ou desistência faz coisa julgada material com resolução de mérito.",
    support: "CPC/2015, art. 487, III.",
    relatedArticleIds: [],
    tags: ["homologacao de acordo", "coisa julgada material"],
    alternatives: [
      { id: "a", text: "Apenas formal, podendo o mérito ser rediscutido." },
      { id: "b", text: "Material, pois há resolução do mérito.", correct: true },
      { id: "c", text: "Não faz coisa julgada, pois não houve análise do mérito." },
      { id: "d", text: "Formal e material, mas apenas em relação ao autor." }
    ]
  }),
  defineQuestion({
    id: "q-oab38-048",
    subjectId: "processo-civil",
    themeId: "competencia",
    examId: "oab-38",
    year: 2023,
    questionNumber: 48,
    difficulty: "hard",
    statement: "A competência do juízo deprecado em relação à carta precatória:",
    explanation: "O juízo deprecado executa o ato solicitado, sendo incompetente para questionar o mérito da causa.",
    support: "CPC/2015, art. 267.",
    relatedArticleIds: [],
    tags: ["carta precatoria", "juizo deprecado"],
    alternatives: [
      { id: "a", text: "É plena, podendo o juízo deprecado negar cumprimento da carta por discordância do mérito." },
      { id: "b", text: "É restrita ao ato solicitado, sem examinar o mérito da causa.", correct: true },
      { id: "c", text: "Inclui a análise da competência do juízo deprecante." },
      { id: "d", text: "É inexistente; a carta é cumprida por servidor." }
    ]
  }),
  defineQuestion({
    id: "q-oab38-049",
    subjectId: "processo-civil",
    themeId: "provas-cpc",
    examId: "oab-38",
    year: 2023,
    questionNumber: 49,
    difficulty: "medium",
    statement: "A confissão espontânea, no CPC/2015:",
    explanation: "Art. 389-395, CPC: a confissão espontânea é indivisível e irrevogável, salvo erro de fato.",
    support: "CPC/2015, art. 389.",
    relatedArticleIds: [],
    tags: ["confissao espontanea", "indivisivel"],
    alternatives: [
      { id: "a", text: "É divisível, podendo a parte aceitar apenas parte da confissão." },
      { id: "b", text: "É indivisível e irrevogável, salvo se decorreu de erro de fato.", correct: true },
      { id: "c", text: "Pode ser revogada a qualquer tempo por simples petição." },
      { id: "d", text: "Não tem valor probatório no processo civil." }
    ]
  }),
  defineQuestion({
    id: "q-oab38-050",
    subjectId: "processo-civil",
    themeId: "prescricao-cpc",
    examId: "oab-38",
    year: 2023,
    questionNumber: 50,
    difficulty: "hard",
    statement: "Os prazos processuais no CPC/2015 contam-se:",
    explanation: "Art. 219-224, CPC: os prazos processuais são contados em dias úteis, excluindo o dia do começo e incluindo o do vencimento.",
    support: "CPC/2015, art. 219; 224.",
    relatedArticleIds: [],
    tags: ["prazos processuais", "dias uteis"],
    alternatives: [
      { id: "a", text: "Em dias corridos, excluindo sábados e domingos." },
      { id: "b", text: "Em dias úteis, excluindo o dia do começo e incluindo o do vencimento.", correct: true },
      { id: "c", text: "Da mesma forma para todos os prazos, sejam eles processuais ou materiais." },
      { id: "d", text: "Em horas quando o prazo for inferior a 24 horas." }
    ]
  }),
  defineQuestion({
    id: "q-oab38-051",
    subjectId: "penal",
    themeId: "crimes-pessoa",
    examId: "oab-38",
    year: 2023,
    questionNumber: 51,
    difficulty: "medium",
    statement: "O crime de ameaça (art. 147, CP) tutela:",
    explanation: "O bem jurídico protegido pela ameaça é a liberdade psíquica da vítima.",
    support: "CP, art. 147.",
    relatedArticleIds: [],
    tags: ["ameaca", "liberdade psiquica"],
    alternatives: [
      { id: "a", text: "A integridade física do ofendido." },
      { id: "b", text: "A liberdade psíquica da vítima.", correct: true },
      { id: "c", text: "O patrimônio da vítima." },
      { id: "d", text: "A incolumidade pública." }
    ]
  }),
  defineQuestion({
    id: "q-oab38-052",
    subjectId: "penal",
    themeId: "lei-penal-tempo",
    examId: "oab-38",
    year: 2023,
    questionNumber: 52,
    difficulty: "hard",
    statement: "A lei penal temporária, durante o período de sua vigência, aplica-se ultratividade porque:",
    explanation: "Art. 3o CP: as leis temporárias e excepcionais são ultraativas, aplicando-se aos fatos praticados durante sua vigência, mesmo após cessada.",
    support: "CP, art. 3o.",
    relatedArticleIds: [],
    tags: ["lei temporaria", "ultratividade"],
    alternatives: [
      { id: "a", text: "Produz efeitos retroativos sempre que benéfica." },
      { id: "b", text: "Aplica-se aos fatos praticados durante sua vigência, mesmo após sua revogação.", correct: true },
      { id: "c", text: "Não produz efeitos após o término de sua vigência." },
      { id: "d", text: "Só produz efeitos enquanto vigente." }
    ]
  }),
  defineQuestion({
    id: "q-oab38-053",
    subjectId: "penal",
    themeId: "crimes-patrimonio",
    examId: "oab-38",
    year: 2023,
    questionNumber: 53,
    difficulty: "medium",
    statement: "No crime de furto, a consummação ocorre:",
    explanation: "Sumula 582 STJ: consuma-se com a posse de fato da res furtiva, ainda que por breve espaço de tempo e seguida de perseguição ao agente.",
    support: "STJ, Súmula 582.",
    relatedArticleIds: [],
    tags: ["furto", "consumacao", "Sumula 582 STJ"],
    alternatives: [
      { id: "a", text: "Apenas quando o agente sai do estabelecimento comercial com a coisa." },
      { id: "b", text: "Com a posse de fato da coisa, ainda que breve, mesmo com perseguição imediata.", correct: true },
      { id: "c", text: "Quando o agente deixa a zona de vigilância do ofendido." },
      { id: "d", text: "Com a ocultação da coisa subtraída." }
    ]
  }),
  defineQuestion({
    id: "q-oab38-054",
    subjectId: "penal",
    themeId: "culpabilidade",
    examId: "oab-38",
    year: 2023,
    questionNumber: 54,
    difficulty: "hard",
    statement: "O erro sobre elemento do tipo (erro de tipo) acidental:",
    explanation: "O erro acidental não exclui o dolo nem a culpa; incide sobre circunstâncias não essenciais ao tipo.",
    support: "CP, art. 20; doutrina.",
    relatedArticleIds: [],
    tags: ["erro de tipo", "acidental"],
    alternatives: [
      { id: "a", text: "Exclui o dolo, permitindo punição culposa." },
      { id: "b", text: "Não exclui o dolo nem a culpa, não interferindo na tipicidade.", correct: true },
      { id: "c", text: "Exclui a culpabilidade por inexigibilidade de conduta diversa." },
      { id: "d", text: "Reduz a pena de 1/3 a 2/3." }
    ]
  }),
  defineQuestion({
    id: "q-oab38-055",
    subjectId: "penal",
    themeId: "penas",
    examId: "oab-38",
    year: 2023,
    questionNumber: 55,
    difficulty: "medium",
    statement: "A extinção da punibilidade pelo cumprimento das condições do sursis (suspensão condicional da pena):",
    explanation: "Art. 82, CP: expirado o prazo do sursis sem revogação, extingue-se a pena.",
    support: "CP, art. 82.",
    relatedArticleIds: [],
    tags: ["sursis", "extincao punibilidade"],
    alternatives: [
      { id: "a", text: "Depende de declaração judicial expressa para produzir efeitos." },
      { id: "b", text: "Ocorre automaticamente ao expirar o período de prova sem revogação.", correct: true },
      { id: "c", text: "Exige o pagamento de todas as custas processuais." },
      { id: "d", text: "Não extingue a punibilidade; apenas suspende a pena." }
    ]
  }),
  defineQuestion({
    id: "q-oab38-056",
    subjectId: "penal",
    themeId: "iter-criminis",
    examId: "oab-38",
    year: 2023,
    questionNumber: 56,
    difficulty: "hard",
    statement: "O arrependimento eficaz, previsto no art. 15 do CP:",
    explanation: "Art. 15, 2a parte, CP: o agente que, após esgotar os meios executórios, impede a produção do resultado responde apenas pelos atos já praticados.",
    support: "CP, art. 15.",
    relatedArticleIds: [],
    tags: ["arrependimento eficaz", "atos praticados"],
    alternatives: [
      { id: "a", text: "Exclui completamente a responsabilidade penal do agente." },
      { id: "b", text: "Faz o agente responder apenas pelos atos já praticados, como se tentativa fosse.", correct: true },
      { id: "c", text: "É causa de redução de pena de metade." },
      { id: "d", text: "Só é admissível em crimes dolosos." }
    ]
  }),
  defineQuestion({
    id: "q-oab38-057",
    subjectId: "penal",
    themeId: "crimes-pessoa",
    examId: "oab-38",
    year: 2023,
    questionNumber: 57,
    difficulty: "medium",
    statement: "O crime de constrangimento ilegal (art. 146, CP) se configura quando:",
    explanation: "O constrangimento ilegal exige o uso de violência, grave ameaça ou qualquer outro meio para constranger alguém a não fazer o que a lei permite ou a fazer o que ela não manda.",
    support: "CP, art. 146.",
    relatedArticleIds: [],
    tags: ["constrangimento ilegal"],
    alternatives: [
      { id: "a", text: "O agente ameaça a vítima para obter vantagem econômica." },
      { id: "b", text: "O agente compele alguém a fazer o que a lei não manda ou não fazer o que ela permite, mediante violência ou grave ameaça.", correct: true },
      { id: "c", text: "O agente impede a vítima de exercer seus direitos políticos." },
      { id: "d", text: "O agente ameaça destruir patrimônio alheio." }
    ]
  }),
  defineQuestion({
    id: "q-oab38-058",
    subjectId: "processo-penal",
    themeId: "inquerito-policial",
    examId: "oab-38",
    year: 2023,
    questionNumber: 58,
    difficulty: "medium",
    statement: "A condução coercitiva de investigado para interrogatório:",
    explanation: "STF, ADPF 395 e 444: a condução coercitiva para interrogatório é inconstitucional, pois o investigado tem direito ao silêncio e de não comparecer.",
    support: "STF, ADPF 395; 444.",
    relatedArticleIds: [],
    tags: ["conducao coercitiva", "direito ao silencio", "STF"],
    alternatives: [
      { id: "a", text: "É plenamente válida, sendo medida investigatória regular." },
      { id: "b", text: "É inconstitucional, pois viola o direito ao silêncio e a não autoincriminação.", correct: true },
      { id: "c", text: "É admissível apenas com autorização judicial prévia." },
      { id: "d", text: "É válida apenas para suspeitos de crimes hediondos." }
    ]
  }),
  defineQuestion({
    id: "q-oab38-059",
    subjectId: "processo-penal",
    themeId: "prisoes",
    examId: "oab-38",
    year: 2023,
    questionNumber: 59,
    difficulty: "hard",
    statement: "O juiz das garantias, criado pela Lei 13.964/2019:",
    explanation: "Art. 3o-B, CPP: o juiz das garantias atua na fase de investigação e instrução preliminar, sendo vedado presidir a instrução do processo.",
    support: "CPP, art. 3o-B.",
    relatedArticleIds: [],
    tags: ["juiz das garantias", "Lei 13.964/2019"],
    alternatives: [
      { id: "a", text: "Preside toda a instrução processual, incluindo o julgamento." },
      { id: "b", text: "Atua na fase de investigação, sendo vedado ao mesmo juiz presidir a instrução.", correct: true },
      { id: "c", text: "Substitui integralmente o delegado de polícia na condução do IP." },
      { id: "d", text: "É competente apenas para os crimes de maior potencial ofensivo." }
    ]
  }),
  defineQuestion({
    id: "q-oab38-060",
    subjectId: "processo-penal",
    themeId: "provas-cpp",
    examId: "oab-38",
    year: 2023,
    questionNumber: 60,
    difficulty: "medium",
    statement: "A prova testemunhal no processo penal:",
    explanation: "Art. 202-225, CPP: qualquer pessoa pode ser testemunha; há vedação para parentes próximos; o depoimento é prestado sob compromisso de dizer a verdade.",
    support: "CPP, art. 202-225.",
    relatedArticleIds: [],
    tags: ["prova testemunhal", "compromisso"],
    alternatives: [
      { id: "a", text: "Exige que a testemunha tenha conhecimento direto e pessoal do fato." },
      { id: "b", text: "É prestada sob compromisso de dizer a verdade, com vedação para parentes próximos.", correct: true },
      { id: "c", text: "Não pode ser realizada na fase de inquérito policial." },
      { id: "d", text: "Tem valor superior à confissão do acusado." }
    ]
  }),
  defineQuestion({
    id: "q-oab38-061",
    subjectId: "processo-penal",
    themeId: "acao-penal",
    examId: "oab-38",
    year: 2023,
    questionNumber: 61,
    difficulty: "hard",
    statement: "O assistente de acusação pode:",
    explanation: "Art. 268-269, CPP: o assistente pode propor meios de prova, requerer perguntas, participar dos debates, arrazoar recursos.",
    support: "CPP, art. 268-269.",
    relatedArticleIds: [],
    tags: ["assistente de acusacao"],
    alternatives: [
      { id: "a", text: "Substituir o MP na titularidade da ação penal pública." },
      { id: "b", text: "Propor meios de prova, formular perguntas e recorrer de sentença que julgue insuficiente a pena.", correct: true },
      { id: "c", text: "Modificar os termos da acusação com o acordo do MP." },
      { id: "d", text: "Avocar o processo em caso de inércia do MP." }
    ]
  }),
  defineQuestion({
    id: "q-oab38-062",
    subjectId: "processo-penal",
    themeId: "habeas-corpus-cpp",
    examId: "oab-38",
    year: 2023,
    questionNumber: 62,
    difficulty: "medium",
    statement: "O HC pode ser impetrado contra ato de:",
    explanation: "Art. 642, CPP: o HC pode ser impetrado contra ato de autoridade pública ou quem a tanto se equipare.",
    support: "CPP, art. 642.",
    relatedArticleIds: [],
    tags: ["habeas corpus", "autoridade publica"],
    alternatives: [
      { id: "a", text: "Apenas de autoridade judicial." },
      { id: "b", text: "Qualquer autoridade pública ou equiparada que pratique ato coativo à liberdade.", correct: true },
      { id: "c", text: "Apenas da autoridade policial ou do MP." },
      { id: "d", text: "Qualquer pessoa, inclusive particulares." }
    ]
  }),
  defineQuestion({
    id: "q-oab38-063",
    subjectId: "processo-penal",
    themeId: "competencia-cpp",
    examId: "oab-38",
    year: 2023,
    questionNumber: 63,
    difficulty: "hard",
    statement: "Nos crimes de competência federal, o julgamento em primeira instância compete:",
    explanation: "Art. 109, CF: ao juiz federal de primeira instância, salvo o foro por prerrogativa de função nos tribunais.",
    support: "CF/88, art. 109.",
    relatedArticleIds: [],
    tags: ["competencia federal", "juiz federal"],
    alternatives: [
      { id: "a", text: "Ao TRF, em única instância." },
      { id: "b", text: "Ao juiz federal de primeira instância.", correct: true },
      { id: "c", text: "Ao STJ, em única instância." },
      { id: "d", text: "Ao juízo estadual com comunicação ao MPF." }
    ]
  }),
  defineQuestion({
    id: "q-oab38-064",
    subjectId: "trabalhista",
    themeId: "contrato-trabalho",
    examId: "oab-38",
    year: 2023,
    questionNumber: 64,
    difficulty: "medium",
    statement: "A empregada gestante dispensada sem justa causa tem direito a:",
    explanation: "A empregada gestante tem estabilidade e, se dispensada, faz jus à indenização substitutiva correspondente ao período de estabilidade.",
    support: "ADCT, art. 10, II, b; Súmula 244 TST.",
    relatedArticleIds: [],
    tags: ["gestante", "indenizacao substitutiva"],
    alternatives: [
      { id: "a", text: "Apenas ao aviso prévio, sem estabilidade." },
      { id: "b", text: "À indenização substitutiva correspondente ao período de estabilidade gestacional.", correct: true },
      { id: "c", text: "À reintegração obrigatória ao emprego." },
      { id: "d", text: "Ao FGTS sem multa, pela dispensa irregular." }
    ]
  }),
  defineQuestion({
    id: "q-oab38-065",
    subjectId: "trabalhista",
    themeId: "jornada-trabalho",
    examId: "oab-38",
    year: 2023,
    questionNumber: 65,
    difficulty: "hard",
    statement: "O adicional noturno é devido ao empregado urbano que trabalha entre:",
    explanation: "Art. 73, CLT: entre 22h de um dia e 5h do dia seguinte, com adicional de 20% sobre a hora diurna.",
    support: "CLT, art. 73.",
    relatedArticleIds: [],
    tags: ["adicional noturno", "22h", "5h"],
    alternatives: [
      { id: "a", text: "20h e 4h, com adicional de 30%." },
      { id: "b", text: "22h e 5h, com adicional de 20%.", correct: true },
      { id: "c", text: "21h e 6h, com adicional de 25%." },
      { id: "d", text: "22h e 6h, com adicional de 20%." }
    ]
  }),
  defineQuestion({
    id: "q-oab38-066",
    subjectId: "trabalhista",
    themeId: "rescisao-contrato",
    examId: "oab-38",
    year: 2023,
    questionNumber: 66,
    difficulty: "medium",
    statement: "A dispensa coletiva de trabalhadores (mass layoff):",
    explanation: "O STF, no ADPF 324, e o TST reconhecem que a dispensa coletiva não exige autorização prévia do sindicato, mas a negociação coletiva deve ser observada.",
    support: "TST; STF, ADPF 324.",
    relatedArticleIds: [],
    tags: ["dispensa coletiva", "negociacao coletiva"],
    alternatives: [
      { id: "a", text: "É vedada sem autorização prévia do Ministério do Trabalho." },
      { id: "b", text: "Dispensa negociação coletiva prévia." },
      { id: "c", text: "Não exige autorização prévia do sindicato, mas a negociação coletiva deve ser observada.", correct: true },
      { id: "d", text: "É proibida no Brasil em qualquer hipótese." }
    ]
  }),
  defineQuestion({
    id: "q-oab38-067",
    subjectId: "trabalhista",
    themeId: "estabilidade",
    examId: "oab-38",
    year: 2023,
    questionNumber: 67,
    difficulty: "hard",
    statement: "O cipeiro (membro da CIPA), titular ou suplente, tem:",
    explanation: "Art. 10, II, a, ADCT: o cipeiro tem estabilidade desde o registro da candidatura até 1 ano após o término do mandato.",
    support: "ADCT, art. 10, II, a.",
    relatedArticleIds: [],
    tags: ["cipeiro", "CIPA", "estabilidade"],
    alternatives: [
      { id: "a", text: "Estabilidade apenas se for titular da CIPA." },
      { id: "b", text: "Estabilidade desde o registro da candidatura até 1 ano após o término do mandato.", correct: true },
      { id: "c", text: "Estabilidade apenas durante o mandato." },
      { id: "d", text: "Nenhuma garantia especial de emprego." }
    ]
  }),
  defineQuestion({
    id: "q-oab38-068",
    subjectId: "trabalhista",
    themeId: "processo-trabalho",
    examId: "oab-38",
    year: 2023,
    questionNumber: 68,
    difficulty: "medium",
    statement: "O reclamante que não comparecer à audiência inaugural sem justificativa:",
    explanation: "Art. 844, CLT: o não comparecimento do reclamante importa arquivamento da reclamação.",
    support: "CLT, art. 844.",
    relatedArticleIds: [],
    tags: ["arquivamento", "audiencia inaugural"],
    alternatives: [
      { id: "a", text: "Terá o processo extinto sem resolução do mérito por abandono." },
      { id: "b", text: "Terá a reclamação arquivada.", correct: true },
      { id: "c", text: "Poderá ser requerida revelia do reclamante." },
      { id: "d", text: "Poderá ser representado pelo advogado sem prejuízo." }
    ]
  }),
  defineQuestion({
    id: "q-oab38-069",
    subjectId: "trabalhista",
    themeId: "ferias-licencas",
    examId: "oab-38",
    year: 2023,
    questionNumber: 69,
    difficulty: "hard",
    statement: "O empregado pode converter parte das férias em abono pecuniário. O limite máximo convertido é de:",
    explanation: "Art. 143, CLT: até 1/3 das férias.",
    support: "CLT, art. 143.",
    relatedArticleIds: [],
    tags: ["ferias", "abono pecuniario", "1/3"],
    alternatives: [
      { id: "a", text: "1/4 das férias." },
      { id: "b", text: "1/3 das férias.", correct: true },
      { id: "c", text: "Metade das férias." },
      { id: "d", text: "2/3 das férias." }
    ]
  }),
  defineQuestion({
    id: "q-oab38-070",
    subjectId: "trabalhista",
    themeId: "sindicatos",
    examId: "oab-38",
    year: 2023,
    questionNumber: 70,
    difficulty: "medium",
    statement: "A ultratividade das cláusulas normativas de convenções e acordos coletivos:",
    explanation: "O TST, após a Reforma Trabalhista (Lei 13.467/2017), não reconhece mais a ultratividade automática das normas coletivas.",
    support: "CLT, art. 614, §3o; Lei 13.467/2017.",
    relatedArticleIds: [],
    tags: ["ultratividade", "reforma trabalhista"],
    alternatives: [
      { id: "a", text: "Aplica-se automaticamente por todo o período de vigência do contrato de trabalho." },
      { id: "b", text: "Foi afastada pela Reforma Trabalhista: as cláusulas coletivas não integram definitivamente o contrato.", correct: true },
      { id: "c", text: "Aplica-se apenas às cláusulas de natureza salarial." },
      { id: "d", text: "É garantida pela Constituição Federal de 1988." }
    ]
  }),
  defineQuestion({
    id: "q-oab38-071",
    subjectId: "empresarial",
    themeId: "sociedades",
    examId: "oab-38",
    year: 2023,
    questionNumber: 71,
    difficulty: "medium",
    statement: "O contrato de sociedade simples, diferentemente da empresarial:",
    explanation: "Art. 966-982, CC: a sociedade simples tem objeto não empresarial (profissões intelectuais, científicas) e se registra no RCPJ, não na Junta.",
    support: "CC/2002, art. 982.",
    relatedArticleIds: [],
    tags: ["sociedade simples", "RCPJ"],
    alternatives: [
      { id: "a", text: "É registrado na Junta Comercial." },
      { id: "b", text: "Tem objeto não empresarial e se registra no Registro Civil de PJ.", correct: true },
      { id: "c", text: "Tem responsabilidade sempre ilimitada dos sócios." },
      { id: "d", text: "É modalidade restrita a prestadores de serviços de saúde." }
    ]
  }),
  defineQuestion({
    id: "q-oab38-072",
    subjectId: "empresarial",
    themeId: "titulos-credito",
    examId: "oab-38",
    year: 2023,
    questionNumber: 72,
    difficulty: "hard",
    statement: "O aval dado em cheque:",
    explanation: "O aval no cheque pode ser dado por terceiro ou pelo emitente. O avalista responde da mesma forma que o avalizado.",
    support: "Lei 7.357/1985, art. 29.",
    relatedArticleIds: [],
    tags: ["aval", "cheque"],
    alternatives: [
      { id: "a", text: "É proibido, pois o cheque é ordem de pagamento à vista." },
      { id: "b", text: "Pode ser dado por terceiro ou pelo emitente, respondendo o avalista como o avalizado.", correct: true },
      { id: "c", text: "Só produz efeitos se lançado no verso do cheque." },
      { id: "d", text: "Equivale ao endosso e transfere a propriedade do título." }
    ]
  }),
  defineQuestion({
    id: "q-oab38-073",
    subjectId: "empresarial",
    themeId: "falencia-recuperacao",
    examId: "oab-38",
    year: 2023,
    questionNumber: 73,
    difficulty: "medium",
    statement: "Após a decretação da falência, os contratos bilaterais:",
    explanation: "Art. 117, Lei 11.101/2005: os contratos bilaterais não se resolvem automaticamente com a falência; o administrador pode cumpri-los ou recusar, conforme o interesse da massa.",
    support: "Lei 11.101/2005, art. 117.",
    relatedArticleIds: [],
    tags: ["falencia", "contratos bilaterais"],
    alternatives: [
      { id: "a", text: "São automaticamente rescindidos com a decretação da falência." },
      { id: "b", text: "Não se resolvem automaticamente; o administrador decide sobre o cumprimento.", correct: true },
      { id: "c", text: "Ficam suspensos por 180 dias, após o que são extintos." },
      { id: "d", text: "Tornam-se ineficazes em relação à massa falida." }
    ]
  }),
  defineQuestion({
    id: "q-oab38-074",
    subjectId: "empresarial",
    themeId: "estabelecimento",
    examId: "oab-38",
    year: 2023,
    questionNumber: 74,
    difficulty: "hard",
    statement: "O empresário individual responde pelas dívidas da empresa com:",
    explanation: "O empresário individual não tem separação patrimonial — responde com todo o seu patrimônio pessoal pelas dívidas do negócio.",
    support: "CC/2002; doutrina.",
    relatedArticleIds: [],
    tags: ["empresario individual", "responsabilidade", "patrimonio"],
    alternatives: [
      { id: "a", text: "Apenas o patrimônio investido no negócio." },
      { id: "b", text: "Todo o seu patrimônio pessoal, sem separação entre pessoal e empresarial.", correct: true },
      { id: "c", text: "O patrimônio até o limite do capital social registrado." },
      { id: "d", text: "Nenhum patrimônio pessoal, pois a empresa tem autonomia." }
    ]
  }),
  defineQuestion({
    id: "q-oab38-075",
    subjectId: "empresarial",
    themeId: "sociedades",
    examId: "oab-38",
    year: 2023,
    questionNumber: 75,
    difficulty: "medium",
    statement: "A dissolução total da sociedade limitada pode ocorrer:",
    explanation: "Art. 1033-1034, CC: por vencimento do prazo, consenso, deliberação dos sócios, falta de pluralidade, extinção do capital, por decisão judicial.",
    support: "CC/2002, art. 1033.",
    relatedArticleIds: [],
    tags: ["dissolucao", "sociedade limitada"],
    alternatives: [
      { id: "a", text: "Apenas por decisão judicial." },
      { id: "b", text: "Por diversas causas legais, incluindo consenso dos sócios, vencimento do prazo e falta de pluralidade.", correct: true },
      { id: "c", text: "Somente quando houver insolvência." },
      { id: "d", text: "Exclusivamente por vontade da maioria do capital social." }
    ]
  }),
  defineQuestion({
    id: "q-oab38-076",
    subjectId: "consumidor",
    themeId: "praticas-abusivas",
    examId: "oab-38",
    year: 2023,
    questionNumber: 76,
    difficulty: "medium",
    statement: "O fornecedor que condicionar o atendimento do consumidor à apresentação de documento de identidade comete:",
    explanation: "O STJ pacificou que exigir CPF ou identidade como condição de atendimento pode configurar prática abusiva, dependendo das circunstâncias.",
    support: "CDC, art. 39; STJ.",
    relatedArticleIds: [],
    tags: ["praticas abusivas", "identificacao"],
    alternatives: [
      { id: "a", text: "Ato regular, por questão de segurança." },
      { id: "b", text: "Prática abusiva, vedada pelo CDC.", correct: true },
      { id: "c", text: "Mera irregularidade comercial." },
      { id: "d", text: "Infração apenas se houver recusa total de atendimento." }
    ]
  }),
  defineQuestion({
    id: "q-oab38-077",
    subjectId: "consumidor",
    themeId: "responsabilidade-fornecedor",
    examId: "oab-38",
    year: 2023,
    questionNumber: 77,
    difficulty: "hard",
    statement: "A responsabilidade do comerciante pelo fato do produto no CDC é:",
    explanation: "Art. 13, CDC: subsidiária, cabendo ao comerciante responder quando o fabricante não for identificado, o produto não tiver identificação ou o comerciante não conservar adequadamente.",
    support: "CDC, art. 13.",
    relatedArticleIds: [],
    tags: ["responsabilidade comerciante", "subsidiaria"],
    alternatives: [
      { id: "a", text: "Solidária com o fabricante em qualquer caso." },
      { id: "b", text: "Subsidiária, cabendo em hipóteses específicas (fabricante não identificado, produto sem identificação, conservação inadequada).", correct: true },
      { id: "c", text: "Inexistente, pois o comerciante não participa da produção." },
      { id: "d", text: "Objetiva e solidária apenas nas relações de consumo por meio eletrônico." }
    ]
  }),
  defineQuestion({
    id: "q-oab38-078",
    subjectId: "consumidor",
    themeId: "protecao-contratual",
    examId: "oab-38",
    year: 2023,
    questionNumber: 78,
    difficulty: "medium",
    statement: "A garantia legal prevista no CDC é:",
    explanation: "Art. 26 CDC: a garantia legal é de 30 dias para não duráveis e 90 dias para duráveis, distinta e independente da garantia contratual.",
    support: "CDC, art. 26; 50.",
    relatedArticleIds: [],
    tags: ["garantia legal", "garantia contratual"],
    alternatives: [
      { id: "a", text: "Opcional, cabendo apenas quando o fornecedor assim dispuser." },
      { id: "b", text: "Obrigatória e independente da garantia contratual.", correct: true },
      { id: "c", text: "Substituída pela garantia contratual quando esta for mais favorável." },
      { id: "d", text: "Exclusiva dos produtos adquiridos por via eletrônica." }
    ]
  }),
  defineQuestion({
    id: "q-oab38-079",
    subjectId: "consumidor",
    themeId: "tutela-consumidor",
    examId: "oab-38",
    year: 2023,
    questionNumber: 79,
    difficulty: "hard",
    statement: "O Procon é órgão:",
    explanation: "O Procon é órgão integrante do SNDC (Sistema Nacional de Defesa do Consumidor), de natureza administrativa.",
    support: "CDC, art. 105; Decreto 2.181/1997.",
    relatedArticleIds: [],
    tags: ["Procon", "SNDC"],
    alternatives: [
      { id: "a", text: "Judicial, com poder de impor multas de natureza criminal." },
      { id: "b", text: "Administrativo, integrante do Sistema Nacional de Defesa do Consumidor.", correct: true },
      { id: "c", text: "Legislativo, responsável por propor leis de defesa do consumidor." },
      { id: "d", text: "Internacional, vinculado à ONU para proteção dos consumidores." }
    ]
  }),
  defineQuestion({
    id: "q-oab38-080",
    subjectId: "consumidor",
    themeId: "responsabilidade-fornecedor",
    examId: "oab-38",
    year: 2023,
    questionNumber: 80,
    difficulty: "medium",
    statement: "O prazo para reclamar vício oculto em serviço não durável é de:",
    explanation: "Art. 26, I, CDC: 30 dias para serviço não durável.",
    support: "CDC, art. 26, I.",
    relatedArticleIds: [],
    tags: ["vicio oculto", "servico", "30 dias"],
    alternatives: [
      { id: "a", text: "7 dias." },
      { id: "b", text: "30 dias.", correct: true },
      { id: "c", text: "90 dias." },
      { id: "d", text: "1 ano." }
    ]
  })
];