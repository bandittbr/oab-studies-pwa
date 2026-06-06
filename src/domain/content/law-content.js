import { defineLawArticle, defineLawChapter, defineLawCode } from "../factories";

export const lawCodes = [
  defineLawCode({
    id: "clt",
    title: "Consolidacao das Leis do Trabalho",
    shortTitle: "CLT",
    description: "Normas trabalhistas: contrato de trabalho, jornada, rescisao, FGTS e processo do trabalho."
  }),
  defineLawCode({
    id: "ctn",
    title: "Codigo Tributario Nacional",
    shortTitle: "CTN",
    description: "Obrigacao tributaria, lancamento, prescricao, decadencia e imunidades fiscais."
  }),
  defineLawCode({
    id: "cdc",
    title: "Codigo de Defesa do Consumidor",
    shortTitle: "CDC",
    description: "Relacao de consumo, responsabilidade do fornecedor, praticas abusivas e tutela processual."
  }),
  defineLawCode({
    id: "cpp",
    title: "Codigo de Processo Penal",
    shortTitle: "CPP",
    description: "Inquerito policial, acao penal, provas, prisoes, recursos e habeas corpus."
  }),
  defineLawCode({
    id: "cf-88",
    title: "Constituicao Federal",
    shortTitle: "CF/88",
    description: "Base constitucional usada nas questoes de direitos fundamentais e organizacao do Estado."
  }),
  defineLawCode({
    id: "cc-2002",
    title: "Codigo Civil",
    shortTitle: "CC",
    description: "Parte geral, obrigacoes, contratos e responsabilidade civil."
  }),
  defineLawCode({
    id: "cp",
    title: "Codigo Penal",
    shortTitle: "CP",
    description: "Normas penais materiais cobradas na OAB."
  }),
  defineLawCode({
    id: "cpc-2015",
    title: "Codigo de Processo Civil",
    shortTitle: "CPC",
    description: "Procedimento, tutela provisoria, recursos e competencia."
  }),
  defineLawCode({
    id: "eoab",
    title: "Estatuto da Advocacia e da OAB",
    shortTitle: "EOAB",
    description: "Regras basicas de etica, prerrogativas e exercicio profissional."
  }),
  defineLawCode({
    id: "ced",
    title: "Codigo de Etica e Disciplina",
    shortTitle: "CED",
    description: "Disciplina da publicidade profissional e de deveres deontologicos."
  })
];

export const lawChapters = [
  defineLawChapter({ id: "cf-direitos", codeId: "cf-88", title: "Direitos e garantias fundamentais", order: 1 }),
  defineLawChapter({ id: "cf-stf", codeId: "cf-88", title: "Supremo Tribunal Federal", order: 2 }),
  defineLawChapter({ id: "cf-tributacao", codeId: "cf-88", title: "Sistema tributario nacional", order: 3 }),
  defineLawChapter({ id: "cf-adm", codeId: "cf-88", title: "Administracao publica", order: 4 }),
  defineLawChapter({ id: "cc-parte-geral", codeId: "cc-2002", title: "Parte geral", order: 1 }),
  defineLawChapter({ id: "cc-contratos", codeId: "cc-2002", title: "Contratos", order: 2 }),
  defineLawChapter({ id: "cc-familia", codeId: "cc-2002", title: "Familia", order: 3 }),
  defineLawChapter({ id: "cc-obrigacoes", codeId: "cc-2002", title: "Obrigacoes", order: 4 }),
  defineLawChapter({ id: "cp-lei-tempo", codeId: "cp", title: "Aplicacao da lei penal", order: 1 }),
  defineLawChapter({ id: "cp-erro", codeId: "cp", title: "Erro e iter criminis", order: 2 }),
  defineLawChapter({ id: "cp-culpabilidade", codeId: "cp", title: "Culpabilidade", order: 3 }),
  defineLawChapter({ id: "cp-penas", codeId: "cp", title: "Das penas", order: 4 }),
  defineLawChapter({ id: "cpc-tutela", codeId: "cpc-2015", title: "Tutela provisoria", order: 1 }),
  defineLawChapter({ id: "cpc-recursos", codeId: "cpc-2015", title: "Recursos", order: 2 }),
  defineLawChapter({ id: "cpc-execucao", codeId: "cpc-2015", title: "Execucao", order: 3 }),
  defineLawChapter({ id: "eoab-exercicio", codeId: "eoab", title: "Exercicio da advocacia", order: 1 }),
  defineLawChapter({ id: "eoab-prerrogativas", codeId: "eoab", title: "Prerrogativas do advogado", order: 2 }),
  defineLawChapter({ id: "eoab-honorarios", codeId: "eoab", title: "Honorarios advocaticios", order: 3 }),
  defineLawChapter({ id: "ced-publicidade", codeId: "ced", title: "Publicidade profissional", order: 1 }),
  defineLawChapter({ id: "ced-deveres", codeId: "ced", title: "Deveres e sigilo", order: 2 }),
  defineLawChapter({ id: "clt-contrato", codeId: "clt", title: "Contrato individual de trabalho", order: 1 }),
  defineLawChapter({ id: "clt-jornada", codeId: "clt", title: "Jornada de trabalho", order: 2 }),
  defineLawChapter({ id: "ctn-obrigacao", codeId: "ctn", title: "Obrigacao tributaria", order: 1 }),
  defineLawChapter({ id: "ctn-prescricao", codeId: "ctn", title: "Prescricao e decadencia", order: 2 }),
  defineLawChapter({ id: "cdc-responsabilidade", codeId: "cdc", title: "Responsabilidade do fornecedor", order: 1 }),
  defineLawChapter({ id: "cdc-praticas", codeId: "cdc", title: "Praticas abusivas", order: 2 }),
  defineLawChapter({ id: "cpp-inquerito", codeId: "cpp", title: "Inquerito e acao penal", order: 1 }),
  defineLawChapter({ id: "cpp-prisoes", codeId: "cpp", title: "Prisoes e liberdade provisoria", order: 2 })
];

export const lawArticles = [
  defineLawArticle({
    id: "cf-art-5-xi",
    codeId: "cf-88",
    chapterId: "cf-direitos",
    articleNumber: "Art. 5o, XI",
    title: "Inviolabilidade do domicilio",
    text:
      "A casa e asilo inviolavel do individuo, ninguem nela podendo penetrar sem consentimento do morador, salvo em caso de flagrante delito ou desastre, ou para prestar socorro, ou, durante o dia, por determinacao judicial.",
    keywords: ["domicilio", "casa", "mandado", "inviolabilidade"]
  }),
  defineLawArticle({
    id: "cf-art-5-xl",
    codeId: "cf-88",
    chapterId: "cf-direitos",
    articleNumber: "Art. 5o, XL",
    title: "Retroatividade da lei penal benefica",
    text: "A lei penal nao retroagira, salvo para beneficiar o reu.",
    keywords: ["lei penal", "retroatividade", "beneficio", "reu"]
  }),
  defineLawArticle({
    id: "cf-art-102-i-a",
    codeId: "cf-88",
    chapterId: "cf-stf",
    articleNumber: "Art. 102, I, a",
    title: "Competencia originaria do STF para ADI",
    text:
      "Compete ao Supremo Tribunal Federal, precipuamente, a guarda da Constituicao, cabendo-lhe processar e julgar, originariamente, a acao direta de inconstitucionalidade de lei ou ato normativo federal ou estadual.",
    keywords: ["stf", "adi", "controle concentrado", "constituicao"]
  }),
  defineLawArticle({
    id: "cc-art-5",
    codeId: "cc-2002",
    chapterId: "cc-parte-geral",
    articleNumber: "Art. 5o",
    title: "Fim da menoridade",
    text:
      "A menoridade cessa aos dezoito anos completos, quando a pessoa fica habilitada a pratica de todos os atos da vida civil.",
    keywords: ["menoridade", "capacidade", "18 anos", "civil"]
  }),
  defineLawArticle({
    id: "cc-art-421",
    codeId: "cc-2002",
    chapterId: "cc-contratos",
    articleNumber: "Art. 421",
    title: "Liberdade contratual",
    text:
      "A liberdade contratual sera exercida nos limites da funcao social do contrato.",
    keywords: ["contrato", "funcao social", "liberdade"]
  }),
  defineLawArticle({
    id: "cc-art-422",
    codeId: "cc-2002",
    chapterId: "cc-contratos",
    articleNumber: "Art. 422",
    title: "Boa-fe objetiva",
    text:
      "Os contratantes sao obrigados a guardar, assim na conclusao do contrato como em sua execucao, os principios de probidade e boa-fe.",
    keywords: ["boa-fe", "probidade", "contratantes"]
  }),
  defineLawArticle({
    id: "cc-art-428-i",
    codeId: "cc-2002",
    chapterId: "cc-contratos",
    articleNumber: "Art. 428, I",
    title: "Perda da obrigatoriedade da proposta",
    text:
      "Deixa de ser obrigatoria a proposta: I - se, feita sem prazo a pessoa presente, nao foi imediatamente aceita.",
    keywords: ["proposta", "contrato", "aceitacao", "obrigatoria"]
  }),
  defineLawArticle({
    id: "cp-art-2-par-unico",
    codeId: "cp",
    chapterId: "cp-lei-tempo",
    articleNumber: "Art. 2o, paragrafo unico",
    title: "Lei posterior benefica",
    text:
      "A lei posterior, que de qualquer modo favorecer o agente, aplica-se aos fatos anteriores, ainda que decididos por sentenca condenatoria transitada em julgado.",
    keywords: ["lei posterior", "retroatividade", "beneficio", "agente"]
  }),
  defineLawArticle({
    id: "cp-art-20",
    codeId: "cp",
    chapterId: "cp-erro",
    articleNumber: "Art. 20",
    title: "Erro de tipo",
    text:
      "O erro sobre elemento constitutivo do tipo legal de crime exclui o dolo, mas permite a punicao por crime culposo, se previsto em lei.",
    keywords: ["erro de tipo", "dolo", "culpa"]
  }),
  defineLawArticle({
    id: "cp-art-14-ii",
    codeId: "cp",
    chapterId: "cp-erro",
    articleNumber: "Art. 14, II",
    title: "Crime tentado",
    text:
      "Diz-se o crime: II - tentado, quando, iniciada a execucao, nao se consuma por circunstancias alheias a vontade do agente.",
    keywords: ["tentativa", "crime", "execucao"]
  }),
  defineLawArticle({
    id: "cpc-art-300",
    codeId: "cpc-2015",
    chapterId: "cpc-tutela",
    articleNumber: "Art. 300",
    title: "Requisitos da tutela de urgencia",
    text:
      "A tutela de urgencia sera concedida quando houver elementos que evidenciem a probabilidade do direito e o perigo de dano ou o risco ao resultado util do processo.",
    keywords: ["tutela de urgencia", "probabilidade do direito", "perigo de dano"]
  }),
  defineLawArticle({
    id: "cpc-art-1015",
    codeId: "cpc-2015",
    chapterId: "cpc-recursos",
    articleNumber: "Art. 1.015",
    title: "Cabimento do agravo de instrumento",
    text:
      "Cabe agravo de instrumento contra as decisoes interlocutorias que versarem sobre as hipoteses previstas neste artigo.",
    keywords: ["agravo de instrumento", "recurso", "interlocutoria"]
  }),
  defineLawArticle({
    id: "eoab-art-28",
    codeId: "eoab",
    chapterId: "eoab-exercicio",
    articleNumber: "Art. 28",
    title: "Incompatibilidades",
    text:
      "A advocacia e incompativel, mesmo em causa propria, com as atividades enumeradas nos incisos deste artigo.",
    keywords: ["incompatibilidade", "advocacia", "causa propria"]
  }),
  defineLawArticle({
    id: "eoab-art-34-vii",
    codeId: "eoab",
    chapterId: "eoab-exercicio",
    articleNumber: "Art. 34, VII",
    title: "Locupletamento as custas do cliente",
    text:
      "Constitui infracao disciplinar locupletar-se, por qualquer forma, a custa do cliente ou da parte adversa, por si ou interposta pessoa.",
    keywords: ["infracao disciplinar", "cliente", "locupletar"]
  }),
  defineLawArticle({
    id: "ced-art-39",
    codeId: "ced",
    chapterId: "ced-publicidade",
    articleNumber: "Art. 39",
    title: "Publicidade profissional",
    text:
      "A publicidade profissional do advogado tem carater meramente informativo e deve primar pela discricao e sobriedade, nao podendo configurar captacao de clientela ou mercantilizacao da profissao.",
    keywords: ["publicidade", "captacao de clientela", "mercantilizacao"]
  }),

  // ==================== CLT ====================
  defineLawArticle({
    id: "clt-art-2",
    codeId: "clt",
    chapterId: "clt-contrato",
    articleNumber: "Art. 2o",
    title: "Definicao de empregador",
    text:
      "Considera-se empregador a empresa, individual ou coletiva, que, assumindo os riscos da atividade economica, admite, assalaria e dirige a prestacao pessoal de servico.",
    keywords: ["empregador", "empresa", "riscos", "contrato de trabalho"]
  }),
  defineLawArticle({
    id: "clt-art-3",
    codeId: "clt",
    chapterId: "clt-contrato",
    articleNumber: "Art. 3o",
    title: "Definicao de empregado",
    text:
      "Considera-se empregado toda pessoa fisica que prestar servicos de natureza nao eventual a empregador, sob a dependencia deste e mediante salario.",
    keywords: ["empregado", "pessoalidade", "subordinacao", "nao eventualidade", "salario"]
  }),
  defineLawArticle({
    id: "clt-art-487",
    codeId: "clt",
    chapterId: "clt-contrato",
    articleNumber: "Art. 487",
    title: "Aviso previo",
    text:
      "Nao havendo prazo estipulado, a parte que, sem justo motivo, quiser rescindir o contrato devera avisar a outra da sua resolucao com a antecedencia minima de trinta dias.",
    keywords: ["aviso previo", "rescisao", "30 dias", "justa causa"]
  }),

  // ==================== CTN ====================
  defineLawArticle({
    id: "ctn-art-114",
    codeId: "ctn",
    chapterId: "ctn-obrigacao",
    articleNumber: "Art. 114",
    title: "Fato gerador da obrigacao principal",
    text:
      "Fato gerador da obrigacao principal e a situacao definida em lei como necessaria e suficiente a sua ocorrencia.",
    keywords: ["fato gerador", "obrigacao tributaria", "situacao tributavel", "lei"]
  }),
  defineLawArticle({
    id: "ctn-art-150",
    codeId: "ctn",
    chapterId: "ctn-prescricao",
    articleNumber: "Art. 150",
    title: "Lancamento por homologacao",
    text:
      "O lancamento por homologacao, que ocorre quanto aos tributos cuja legislacao atribua ao sujeito passivo o dever de antecipar o pagamento sem previo exame da autoridade administrativa, opera-se pelo ato em que a referida autoridade, tomando conhecimento da atividade assim exercida pelo obrigado, expressamente a homologa.",
    keywords: ["lancamento por homologacao", "sujeito passivo", "antecipacao", "tributo"]
  }),

  // ==================== CDC ====================
  defineLawArticle({
    id: "cdc-art-12",
    codeId: "cdc",
    chapterId: "cdc-responsabilidade",
    articleNumber: "Art. 12",
    title: "Responsabilidade pelo fato do produto",
    text:
      "O fabricante, o produtor, o construtor, nacional ou estrangeiro, e o importador respondem, independentemente da existencia de culpa, pela reparacao dos danos causados aos consumidores por defeitos decorrentes de projeto, fabricacao, construcao, montagem, formulas, manipulacao, apresentacao ou acondicionamento de seus produtos.",
    keywords: ["responsabilidade objetiva", "fato do produto", "fabricante", "defeito", "consumidor"]
  }),
  defineLawArticle({
    id: "cdc-art-39-i",
    codeId: "cdc",
    chapterId: "cdc-praticas",
    articleNumber: "Art. 39, I",
    title: "Venda casada - pratica abusiva",
    text:
      "E vedado ao fornecedor de produtos ou servicos, dentre outras praticas abusivas: I - condicionar o fornecimento de produto ou de servico ao fornecimento de outro produto ou servico, bem como, sem justa causa, a limites quantitativos.",
    keywords: ["venda casada", "pratica abusiva", "fornecedor", "condicionar", "CDC"]
  }),

  // ==================== CPP ====================
  defineLawArticle({
    id: "cpp-art-311",
    codeId: "cpp",
    chapterId: "cpp-prisoes",
    articleNumber: "Art. 311",
    title: "Prisao preventiva - requisicao",
    text:
      "Em qualquer fase da investigacao policial ou do processo penal, cabera a prisao preventiva decretada pelo juiz, a requerimento do Ministerio Publico, do querelante ou do assistente, ou por representacao da autoridade policial.",
    keywords: ["prisao preventiva", "juiz", "Ministerio Publico", "delegado", "requerimento"]
  }),

  // ==================== CF - Imunidade e Adm ====================
  defineLawArticle({
    id: "cf-art-150-vi-a",
    codeId: "cf-88",
    chapterId: "cf-tributacao",
    articleNumber: "Art. 150, VI, a",
    title: "Imunidade tributaria reciproca",
    text:
      "Sem prejuizo de outras garantias asseguradas ao contribuinte, e vedado a Uniao, aos Estados, ao Distrito Federal e aos Municipios: VI - instituir impostos sobre: a) patrimonio, renda ou servicos, uns dos outros.",
    keywords: ["imunidade reciproca", "patrimonio", "renda", "servicos", "entes federativos"]
  }),
  defineLawArticle({
    id: "cf-art-150-iii-c",
    codeId: "cf-88",
    chapterId: "cf-tributacao",
    articleNumber: "Art. 150, III, c",
    title: "Anterioridade nonagesimal",
    text:
      "Sem prejuizo de outras garantias asseguradas ao contribuinte, e vedado a Uniao, aos Estados, ao Distrito Federal e aos Municipios: III - cobrar tributos: c) antes de decorridos noventa dias da data em que haja sido publicada a lei que os instituiu ou aumentou.",
    keywords: ["anterioridade", "nonagesimal", "90 dias", "publicacao da lei", "tributo"]
  }),
  defineLawArticle({
    id: "cf-art-37-par6",
    codeId: "cf-88",
    chapterId: "cf-adm",
    articleNumber: "Art. 37, §6o",
    title: "Responsabilidade civil do Estado",
    text:
      "As pessoas juridicas de direito publico e as de direito privado prestadoras de servicos publicos responderao pelos danos que seus agentes, nessa qualidade, causarem a terceiros, assegurado o direito de regresso contra o responsavel nos casos de dolo ou culpa.",
    keywords: ["responsabilidade objetiva", "Estado", "agente publico", "dano", "regresso"]
  }),

  // ==================== CC - adicionais ====================
  defineLawArticle({
    id: "cc-art-179",
    codeId: "cc-2002",
    chapterId: "cc-parte-geral",
    articleNumber: "Art. 179",
    title: "Prazo para anulatoria de ato do relativamente incapaz",
    text:
      "Quando a lei dispuser que determinado ato e anulavel, sem estabelecer prazo para pleitear-se a anulacao, sera este de quatro anos, a contar da data da conclusao do ato.",
    keywords: ["anulabilidade", "prazo", "quatro anos", "decadencia", "negocio juridico"]
  }),
  defineLawArticle({
    id: "cc-art-186",
    codeId: "cc-2002",
    chapterId: "cc-obrigacoes",
    articleNumber: "Art. 186",
    title: "Ato ilicito",
    text:
      "Aquele que, por acao ou omissao voluntaria, negligencia ou imprudencia, violar direito e causar dano a outrem, ainda que exclusivamente moral, comete ato ilicito.",
    keywords: ["ato ilicito", "culpa", "dano", "responsabilidade civil"]
  }),

  // ==================== CP - adicionais ====================
  defineLawArticle({
    id: "cp-art-22",
    codeId: "cp",
    chapterId: "cp-culpabilidade",
    articleNumber: "Art. 22",
    title: "Coacao moral irresistivel e obediencia hierarquica",
    text:
      "Se o fato e cometido sob coacao irresistivel ou em estrita obediencia a ordem, nao manifestamente ilegal, de superior hierarquico, so e punivel o autor da coacao ou da ordem.",
    keywords: ["coacao moral", "culpabilidade", "exigibilidade", "obediencia hierarquica"]
  }),
  defineLawArticle({
    id: "cp-art-109",
    codeId: "cp",
    chapterId: "cp-penas",
    articleNumber: "Art. 109",
    title: "Prescricao da pretensao punitiva",
    text:
      "A prescricao, antes de transitar em julgado a sentenca final, salvo o disposto no §1o do art. 110 deste Codigo, regula-se pelo maximo da pena privativa de liberdade cominada ao crime.",
    keywords: ["prescricao", "pretensao punitiva", "pena maxima", "transito em julgado"]
  }),

  // ==================== CPC - adicionais ====================
  defineLawArticle({
    id: "cpc-art-502",
    codeId: "cpc-2015",
    chapterId: "cpc-execucao",
    articleNumber: "Art. 502",
    title: "Coisa julgada material",
    text:
      "Denomina-se coisa julgada material a autoridade que torna imutavel e indiscutivel a decisao de merito nao mais sujeita a recurso.",
    keywords: ["coisa julgada", "imutabilidade", "decisao de merito", "recurso"]
  }),
  defineLawArticle({
    id: "cpc-art-835-i",
    codeId: "cpc-2015",
    chapterId: "cpc-execucao",
    articleNumber: "Art. 835, I",
    title: "Ordem de penhora - dinheiro",
    text:
      "A penhora observara, preferencialmente, a seguinte ordem: I - dinheiro, em especie ou em deposito ou aplicacao em instituicao financeira.",
    keywords: ["penhora", "ordem", "dinheiro", "execucao", "preferencia"]
  }),
  defineLawArticle({
    id: "cpc-art-975",
    codeId: "cpc-2015",
    chapterId: "cpc-recursos",
    articleNumber: "Art. 975",
    title: "Prazo da acao rescisoria",
    text:
      "O direito a rescisao se extingue em 2 (dois) anos contados do transito em julgado da ultima decisao proferida no processo.",
    keywords: ["acao rescisoria", "dois anos", "prazo", "decadencia", "coisa julgada"]
  }),

  // ==================== EOAB - adicionais ====================
  defineLawArticle({
    id: "eoab-art-7-iii",
    codeId: "eoab",
    chapterId: "eoab-prerrogativas",
    articleNumber: "Art. 7o, III",
    title: "Prerrogativa de comunicacao com cliente preso",
    text:
      "Sao direitos do advogado: III - comunicar-se com seus clientes, pessoal e reservadamente, mesmo sem procuracao, quando estes se acharem presos, detidos ou recolhidos em estabelecimentos civis ou militares, ainda que considerados incomunicaveis.",
    keywords: ["prerrogativa", "cliente preso", "comunicacao pessoal", "advogado", "incomunicavel"]
  }),
  defineLawArticle({
    id: "eoab-art-23",
    codeId: "eoab",
    chapterId: "eoab-honorarios",
    articleNumber: "Art. 23",
    title: "Honorarios sucumbenciais - direito do advogado",
    text:
      "Os honorarios incluidos na condenacao, por arbitramento ou sucumbencia, pertencem ao advogado, tendo este direito autonomo para executar a sentenca nesta parte, podendo requerer que o precatorio, quando necessario, seja expedido em seu favor.",
    keywords: ["honorarios sucumbenciais", "advogado", "autonomo", "execucao", "natureza alimentar"]
  })
];
