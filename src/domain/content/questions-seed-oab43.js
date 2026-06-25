import { defineQuestion } from "../factories";

// OAB 43 - 43º Exame de Ordem Unificado (1ª Fase) - 27/04/2025 - FGV
// Gabarito Definitivo - Caderno Branco (Tipo I)
// Q1 e Q74 anuladas

export const questionSeedOab43 = [
  defineQuestion({
    id: "q-oab43-001",
    subjectId: "etica",
    themeId: "",
    examId: "oab-43",
    year: 2025,
    questionNumber: 1,
    difficulty: "medium",
    statement: `O advogado Antônio comenta em matérias veiculadas em página da internet, consistente em sítio eletrônico especializado em publicar artigos acadêmicos e jurídicos, novas leis que são sancionadas e faz explicações de fácil compreensão de conceitos e normas jurídicas.

De acordo com o disposto no Código de Ética e Disciplina da OAB, assinale a afirmativa correta.`,
    explanation: "Questão anulada pela FGV.",
    support: "",
    relatedArticleIds: [],
    tags: [],
    alternatives: [
      { id: "a", text: `É autorizado que Antônio responda às consultas jurídicas com habitualidade na página mencionada para promoção pessoal.` },
      { id: "b", text: `É vedado que Antônio mencione seu e-mail e telefone na mencionada página, assim como o nome do escritório onde trabalha.` },
      { id: "c", text: `Antônio não poderá fornecer, nas matérias que publica, seus meios de contato, tais como endereço e telefone, mas é permitida a referência a e-mail.` },
      { id: "d", text: `Não é vedado que Antônio, ao comentar a atuação de colegas advogados em tais feitos, cite casos emblemáticos para a explicação de tais normas e conceitos.` },
    ]
  }),
  defineQuestion({
    id: "q-oab43-002",
    subjectId: "etica",
    themeId: "",
    examId: "oab-43",
    year: 2025,
    questionNumber: 2,
    difficulty: "medium",
    statement: `Paulo Afrânio foi representado ao Tribunal de Ética e Disciplina do Conselho Seccional do Estado Alfa pela prática da infração disciplinar de violar, sem justa causa, sigilo profissional. Com o recebimento da representação, o Presidente designou relator, a quem competiu instruir o processo e oferecer parecer preliminar submetido ao Tribunal de Ética e Disciplina.

Por se tratar de infração leve, o relator dispensou as etapas de defesa prévia e razões finais, garantindo ao representado apenas a defesa oral. Ao final, o relator ofereceu parecer preliminar no sentido da aplicação da pena de censura, submetido ao Tribunal de Ética e Disciplina que, acolhendo a proposta, aplicou a referida sanção ao advogado Paulo Afrânio.

Sobre o processo disciplinar no âmbito da OAB, assinale a afirmativa correta.`,
    explanation: "Nos termos do EOAB e do Código de Ética, o processo disciplinar deve respeitar o devido processo legal, garantindo defesa prévia e razões finais independentemente da gravidade da infração ou da pena aplicada. A dispensa dessas etapas é ilegal.",
    support: "Lei nº 8.906/94, arts. 68 a 73; Código de Ética e Disciplina da OAB.",
    relatedArticleIds: [],
    tags: [],
    alternatives: [
      { id: "a", text: `O procedimento adotado pelo relator foi correto, porque a legislação prevê que a defesa oral, por ser mais ampla e contundente, substitui a etapa de defesa prévia e a apresentação de razões finais.` },
      { id: "b", text: `Nos casos de parecer preliminar do relator recomendando a aplicação de pena de censura, o Presidente do Conselho Seccional pode, desde logo, diante da baixa gravidade da pena aplicada, homologar o parecer, aplicando essa sanção.` },
      { id: "c", text: `A condução do processo disciplinar pelo relator foi ilegal, porque a gravidade da infração ou da sanção aplicada não autorizam que sejam reduzidas as oportunidades de defesa do representado ou que se atropelem etapas do processo disciplinar.`, correct: true },
      { id: "d", text: `Não houve violação da ampla defesa do advogado, porque o reconhecimento de nulidades processuais está sujeito à constatação de efetivo prejuízo e, como no caso foi aplicada apenas pena de censura, não ocorreu dano suficiente a ponto de que se reconhecesse a ilegalidade do procedimento.` },
    ]
  }),
  defineQuestion({
    id: "q-oab43-003",
    subjectId: "etica",
    themeId: "",
    examId: "oab-43",
    year: 2025,
    questionNumber: 3,
    difficulty: "medium",
    statement: `João Pedro, destacado aluno do último semestre do curso de Direito, logrou êxito no Exame da Ordem dos Advogados do Brasil, sendo então convidado a integrar, assim que formado, uma renomada sociedade de advogados da sua cidade. Apesar de ter ficado honrado com o convite, João Pedro está em dúvida, pois em seus estudos para o Exame da OAB verificou ser possível constituir sociedade unipessoal de advocacia, opção que lhe pareceu mais atrativa.

Considerando o enunciado, assinale a afirmativa correta.`,
    explanation: "A sociedade unipessoal de advocacia pode ter como sede, filial ou local de trabalho espaço compartilhado, desde que respeitado o sigilo profissional, conforme previsto no EOAB.",
    support: "Lei nº 8.906/94, art. 15, § 4º.",
    relatedArticleIds: [],
    tags: [],
    alternatives: [
      { id: "a", text: `A sociedade unipessoal de advocacia de João Pedro poderá ter como sede, filial ou local de trabalho, um espaço de uso individual ou compartilhado com outros escritórios de advocacia ou empresas, desde que respeitadas as hipóteses de sigilo previstas na legislação.`, correct: true },
      { id: "b", text: `João Pedro poderá integrar a sociedade de advogados e, simultaneamente, constituir uma sociedade unipessoal de advocacia, ambas com sede ou filial na mesma área territorial do respectivo Conselho Seccional.` },
      { id: "c", text: `João Pedro poderá escolher livremente a denominação da sociedade unipessoal de advocacia que vier a constituir, desde que complemente com a expressão "Sociedade Individual de Advocacia".` },
      { id: "d", text: `A sociedade unipessoal de advocacia de João Pedro adquirirá personalidade jurídica com o registro aprovado dos seus atos constitutivos no Conselho Federal da OAB.` },
    ]
  }),
  defineQuestion({
    id: "q-oab43-004",
    subjectId: "etica",
    themeId: "",
    examId: "oab-43",
    year: 2025,
    questionNumber: 4,
    difficulty: "medium",
    statement: `Roberto, advogado criminalista, foi contratado para promover a defesa de Afonso, condenado por crime de tráfico de entorpecentes, que se encontra preso em estabelecimento penal federal. Roberto dirigiu-se ao estabelecimento para realizar visita ao seu cliente. Ao chegar, foi informado pelo diretor do presídio que, para ter acesso a Afonso, teria que se submeter à revista pessoal com detector de metais e à inspeção do seu notebook.

Roberto se recusou a tais procedimentos, invocando a inviolabilidade prevista no Estatuto da OAB.

Considerando a situação descrita, assinale a afirmativa correta.`,
    explanation: "O advogado é inviolável em seus atos e manifestações no exercício da profissão. O Estatuto da OAB prevê o direito de ingresso e permanência em estabelecimentos prisionais sem ser revistado ou ter seus equipamentos inspecionados.",
    support: "Lei nº 8.906/94, art. 7º, VI.",
    relatedArticleIds: [],
    tags: [],
    alternatives: [
      { id: "a", text: `Roberto tem razão, pois é direito do advogado, no exercício da profissão, ingressar livremente em estabelecimentos prisionais e delegacias de polícia, mesmo fora do expediente, sem ser revistado ou ter monitorados seus equipamentos de trabalho, ressalvada a hipótese de o Estado demonstrar, por ato fundamentado, risco concreto à segurança do estabelecimento.`, correct: true },
      { id: "b", text: `Roberto não tem razão, pois, embora o advogado goze de prerrogativas especiais, a segurança dos estabelecimentos penais federais prevalece, sendo lícita a inspeção de equipamentos eletrônicos e a revista pessoal como condição de acesso.` },
      { id: "c", text: `Roberto tem razão apenas quanto ao notebook, que não pode ser inspecionado por conter informações protegidas pelo sigilo profissional, mas deverá submeter-se à revista pessoal com detector de metais.` },
      { id: "d", text: `Roberto não tem razão, porque a inviolabilidade do advogado é norma de caráter relativo, podendo ser restringida por regulamento interno dos estabelecimentos penais, desde que a medida seja proporcional e não impeça o acesso ao cliente.` },
    ]
  }),
  defineQuestion({
    id: "q-oab43-005",
    subjectId: "etica",
    themeId: "",
    examId: "oab-43",
    year: 2025,
    questionNumber: 5,
    difficulty: "medium",
    statement: `Pedro, advogado regularmente inscrito na OAB, foi eleito Deputado Federal e tomou posse no cargo.

Sobre a situação de Pedro, assinale a afirmativa correta.`,
    explanation: "O exercício de mandato eletivo federal configura impedimento ao exercício da advocacia contra ou a favor das pessoas jurídicas de direito público, entidades da administração indireta, empresas concessionárias e permissionárias de serviço público ou de entidades que recebam contribuição parafiscal, durante o exercício do mandato.",
    support: "Lei nº 8.906/94, art. 30, I.",
    relatedArticleIds: [],
    tags: [],
    alternatives: [
      { id: "a", text: `Pedro não poderá exercer a advocacia em nenhuma hipótese durante o mandato, pois o exercício de cargo eletivo configura incompatibilidade absoluta com a advocacia.` },
      { id: "b", text: `Pedro poderá exercer normalmente a advocacia durante o mandato, exceto em causas que envolvam matérias objeto de deliberação do órgão legislativo do qual faz parte.` },
      { id: "c", text: `Pedro ficará impedido de exercer a advocacia contra ou a favor das pessoas jurídicas de direito público, entidades da administração indireta, empresas concessionárias e permissionárias de serviço público durante o exercício do mandato.`, correct: true },
      { id: "d", text: `Pedro poderá exercer a advocacia normalmente, inclusive em favor de órgãos e entidades públicas, uma vez que o mandato parlamentar não gera incompatibilidade nem impedimento para o exercício da profissão.` },
    ]
  }),
  defineQuestion({
    id: "q-oab43-006",
    subjectId: "etica",
    themeId: "",
    examId: "oab-43",
    year: 2025,
    questionNumber: 6,
    difficulty: "medium",
    statement: `Afonso, condenado por tráfico de drogas, cumpre pena dividindo cela com outros condenados. Certo dia, Afonso foi abordado por um dos detentos que lhe disse que, caso não entregasse parte dos seus alimentos, sofreria agressões físicas.

Afonso ficou com medo e entregou os alimentos do detento que o ameaçou. Algum tempo depois, Afonso foi abordado novamente pelo mesmo preso, que dessa vez lhe exigiu dinheiro, sob pena de sofrer nova agressão. Afonso, então, entrou em contato com seu advogado, Aurélio, narrando os fatos e informando que sabia que o preso que o ameaçava guardava, na cela, entorpecentes.

Na condição de advogado de Afonso, assinale a afirmativa correta.`,
    explanation: "O advogado é obrigado a guardar sigilo profissional acerca das comunicações que recebe do cliente. Entretanto, a lei admite a revelação de informações quando necessário para a defesa do próprio cliente, desde que autorizado por ele.",
    support: "Lei nº 8.906/94, art. 7º, XIX; Código de Ética, arts. 25 a 27.",
    relatedArticleIds: [],
    tags: [],
    alternatives: [
      { id: "a", text: `Aurélio deve noticiar imediatamente a ameaça e a existência de entorpecentes na cela às autoridades competentes, independentemente de autorização de Afonso, pois o dever de colaborar com a Justiça prevalece sobre o sigilo profissional nessa hipótese.` },
      { id: "b", text: `Aurélio deverá, com a autorização de Afonso, tomar as providências cabíveis para cessar a ameaça ao seu cliente, podendo, se necessário e com autorização expressa dele, revelar às autoridades competentes as informações recebidas sobre as ameaças e a existência de entorpecentes na cela.`, correct: true },
      { id: "c", text: `Aurélio deverá guardar sigilo absoluto sobre todas as informações recebidas de Afonso, inclusive sobre as ameaças sofridas, pois o sigilo profissional é um dever inafastável que não comporta qualquer exceção.` },
      { id: "d", text: `Aurélio não poderá tomar qualquer providência, pois as informações recebidas são sigilosas e, ainda que com autorização do cliente, revelar dados sobre a existência de entorpecentes na cela configuraria violação do sigilo profissional e cumplicidade com o crime.` },
    ]
  }),
  defineQuestion({
    id: "q-oab43-007",
    subjectId: "etica",
    themeId: "",
    examId: "oab-43",
    year: 2025,
    questionNumber: 7,
    difficulty: "medium",
    statement: `Aurélio, advogado regularmente inscrito na OAB, recebeu uma ligação urgente de um familiar de Benedito, que estava preso em flagrante delito por suposto crime de homicídio. O familiar pediu a Aurélio que fosse urgentemente ao estabelecimento policial para ver o preso e orientá-lo juridicamente, pois a autoridade policial já havia iniciado o interrogatório de Benedito.

Aurélio dirigiu-se imediatamente à delegacia, onde foi informado pelo Delegado que Benedito estava sendo interrogado e que, por ora, não era possível interromper o ato para que Aurélio tivesse acesso ao preso.

Diante dessa situação, assinale a afirmativa correta.`,
    explanation: "É direito do advogado comunicar-se com seus clientes, pessoal e reservadamente, mesmo sem procuração, quando estes se encontrem presos, detidos ou recolhidos em estabelecimentos civis ou militares, ainda que incomunicáveis. O advogado tem o direito de interromper o interrogatório para falar com o cliente.",
    support: "Lei nº 8.906/94, art. 7º, III e XXI.",
    relatedArticleIds: [],
    tags: [],
    alternatives: [
      { id: "a", text: `O Delegado agiu corretamente, pois o interrogatório é ato reservado da autoridade policial e o advogado só poderá ter acesso ao preso após o encerramento do ato.` },
      { id: "b", text: `O Delegado agiu incorretamente, mas Aurélio somente poderá acessar Benedito após a conclusão do interrogatório, pois, embora o acesso imediato seja direito do advogado, ele não pode interromper atos processuais em andamento.` },
      { id: "c", text: `O Delegado agiu incorretamente, porém Aurélio deverá apresentar procuração antes de ter acesso a Benedito, pois, sem o instrumento mandatário, o advogado não pode interferir em procedimento investigatório em andamento.` },
      { id: "d", text: `O Delegado agiu incorretamente, pois é direito do advogado ter acesso ao preso antes e durante qualquer interrogatório ou depoimento, podendo comunicar-se com ele pessoal e reservadamente, independentemente de procuração.`, correct: true },
    ]
  }),
  defineQuestion({
    id: "q-oab43-008",
    subjectId: "etica",
    themeId: "",
    examId: "oab-43",
    year: 2025,
    questionNumber: 8,
    difficulty: "medium",
    statement: `Antônio, advogado experiente e com extensa carteira de clientes, decidiu aposentar-se. Para manter o atendimento dos seus clientes, Antônio celebrou contrato com o advogado Marcos, pelo qual Antônio receberia parte dos honorários das causas de seus antigos clientes que fossem patrocinadas por Marcos.

Considerando as normas do Código de Ética e Disciplina da OAB, assinale a afirmativa correta.`,
    explanation: "O trespasse ou a promessa de trespasse de clientela é vedado pelo Código de Ética. O advogado não pode negociar a clientela como se fosse um bem patrimonial.",
    support: "Código de Ética e Disciplina da OAB, art. 34.",
    relatedArticleIds: [],
    tags: [],
    alternatives: [
      { id: "a", text: `O contrato é válido, pois representa forma legítima de parceria entre advogados, expressamente permitida pelo Código de Ética, desde que os valores acordados sejam proporcionais ao trabalho realizado.` },
      { id: "b", text: `O contrato é válido, mas somente se os clientes de Antônio expressamente consentirem com a transferência do patrocínio e a participação dos honorários, pois a relação advocatícia é personalíssima.` },
      { id: "c", text: `O contrato é nulo, pois constitui trespasse de clientela, conduta vedada pelo Código de Ética e Disciplina da OAB, que proíbe ao advogado negociar a clientela como se fosse um bem patrimonial.`, correct: true },
      { id: "d", text: `O contrato é válido, mas somente quanto à parcela dos honorários relativa às causas já ajuizadas por Antônio, sendo nulo quanto às causas futuras dos antigos clientes.` },
    ]
  }),
  defineQuestion({
    id: "q-oab43-009",
    subjectId: "filosofia",
    themeId: "",
    examId: "oab-43",
    year: 2025,
    questionNumber: 9,
    difficulty: "hard",
    statement: `Entre as diferentes correntes do positivismo jurídico, a Escola da Exegese, surgida na França pós-revolucionária, ficou conhecida por sua peculiar forma de interpretar o Direito.

Sobre essa corrente, assinale a afirmativa correta.`,
    explanation: "A Escola da Exegese defendia a onipotência da lei escrita, equiparando o Direito à lei e pregando que a interpretação jurídica deveria limitar-se à intenção do legislador, sem qualquer criação pelo intérprete.",
    support: "Filosofia do Direito.",
    relatedArticleIds: [],
    tags: [],
    alternatives: [
      { id: "a", text: `A Escola da Exegese reconhecia a existência de lacunas no ordenamento jurídico e defendia que o juiz deveria recorrer a princípios gerais e ao direito natural para supri-las, desde que de forma subsidiária à lei escrita.` },
      { id: "b", text: `A Escola da Exegese defendia que o Direito se identificava com a lei positiva escrita, sustentando a onipotência do legislador e propugnando que a tarefa do intérprete consistia em revelar o pensamento do legislador, sem qualquer criação jurídica.`, correct: true },
      { id: "c", text: `A Escola da Exegese inaugurou um método de interpretação teleológica, pelo qual o juiz deveria buscar a finalidade social da norma ao aplicá-la, distanciando-se do texto literal da lei quando necessário à realização da justiça.` },
      { id: "d", text: `A Escola da Exegese distinguia o Direito natural do Direito positivo, reconhecendo que o primeiro deveria prevalecer sobre o segundo em casos de conflito, especialmente em matéria de direitos fundamentais.` },
    ]
  }),
  defineQuestion({
    id: "q-oab43-010",
    subjectId: "filosofia",
    themeId: "",
    examId: "oab-43",
    year: 2025,
    questionNumber: 10,
    difficulty: "hard",
    statement: `Segundo Kant, em seu livro Fundamentação da Metafísica dos Costumes, como a razão prática se relaciona com a moral e qual é o princípio supremo da moralidade?`,
    explanation: "Kant sustenta que o imperativo categórico é o princípio supremo da moralidade: age apenas segundo a máxima pela qual podes ao mesmo tempo querer que ela se torne uma lei universal.",
    support: "Filosofia do Direito — Kant.",
    relatedArticleIds: [],
    tags: [],
    alternatives: [
      { id: "a", text: `A razão prática determina que as ações morais devem ser orientadas pela busca da felicidade, pois o princípio supremo da moralidade é o da utilidade, segundo o qual devemos agir de modo a maximizar o bem-estar geral.` },
      { id: "b", text: `A razão prática está fundada na experiência sensível, determinando que o princípio da moralidade é a prudência, pela qual cada indivíduo deve agir de forma a alcançar seus fins pessoais com os meios mais eficientes.` },
      { id: "c", text: `A razão prática conduz ao princípio da autonomia da vontade, segundo o qual o ser humano deve agir somente conforme máximas que possam ser universalizadas, tratando a humanidade sempre como fim em si mesma, jamais apenas como meio.` },
      { id: "d", text: `A razão prática é fundada na razão pura, levando ao imperativo hipotético como princípio supremo da moralidade: age de tal modo que possas alcançar os fins que a sociedade te impõe como obrigação de cidadania.`, correct: true },
    ]
  }),
  defineQuestion({
    id: "q-oab43-011",
    subjectId: "constitucional",
    themeId: "",
    examId: "oab-43",
    year: 2025,
    questionNumber: 11,
    difficulty: "medium",
    statement: `O Presidente da República, por ter alegadamente atuado com o intuito de abolir o Estado Democrático de Direito, teve decretada, pelo Supremo Tribunal Federal, sua inelegibilidade pelo prazo de oito anos.

Considerando a disciplina constitucional sobre crimes de responsabilidade, assinale a afirmativa correta.`,
    explanation: "O julgamento por crime de responsabilidade do Presidente da República compete ao Senado Federal. O STF não detém competência para decretar inelegibilidade do Presidente por crime de responsabilidade.",
    support: "CF/88, arts. 52, I; 85 e 86.",
    relatedArticleIds: [],
    tags: [],
    alternatives: [
      { id: "a", text: `O STF agiu corretamente, pois a abolição do Estado Democrático de Direito é crime de responsabilidade que, por envolver questão constitucional, submete-se à jurisdição do Supremo Tribunal Federal.` },
      { id: "b", text: `O STF agiu corretamente, pois compete ao Supremo Tribunal Federal, em sede de ação penal originária, julgar e aplicar a sanção de inelegibilidade ao Presidente da República nos crimes que atentem contra a Constituição Federal.` },
      { id: "c", text: `O STF agiu incorretamente, pois a inelegibilidade não é sanção aplicável nos casos de crime de responsabilidade, cuja única pena é a perda do cargo com inabilitação para o exercício de função pública pelo prazo de oito anos.` },
      { id: "d", text: `O STF agiu incorretamente, pois o julgamento do Presidente da República por crime de responsabilidade compete exclusivamente ao Senado Federal, constituindo o STF órgão incompetente para tal julgamento e para a aplicação das sanções decorrentes.`, correct: true },
    ]
  }),
  defineQuestion({
    id: "q-oab43-012",
    subjectId: "constitucional",
    themeId: "",
    examId: "oab-43",
    year: 2025,
    questionNumber: 12,
    difficulty: "medium",
    statement: `João, pessoa com deficiência, beneficiária de pensão alimentícia devida por seu pai, foi informado de que seu genitor se encontrava preso em razão de dívida de alimentos. João pretende impetrar habeas corpus em favor do pai para que seja solto.

Considerando o caso descrito, assinale a afirmativa correta.`,
    explanation: "O habeas corpus pode ser impetrado por qualquer pessoa, em favor de terceiro, inclusive por aquele que tem interesse no caso. A prisão civil por dívida de alimentos é admitida pela Constituição Federal, mas sujeita-se ao controle judicial via habeas corpus.",
    support: "CF/88, art. 5º, LXVIII; Súmula 309 do STJ.",
    relatedArticleIds: [],
    tags: [],
    alternatives: [
      { id: "a", text: `João não pode impetrar habeas corpus em favor do pai, pois seria contraditório que o credor dos alimentos pleiteasse a soltura do devedor, o que configuraria abuso do direito de ação.` },
      { id: "b", text: `João pode impetrar habeas corpus em favor do pai, pois qualquer pessoa pode fazê-lo em nome de terceiro, independentemente do vínculo existente entre o paciente e o impetrante.`, correct: true },
      { id: "c", text: `João pode impetrar habeas corpus em favor do pai somente se comprovar que renunciou ao crédito alimentar, pois, do contrário, a prisão civil é legítima e não configura coação ilegal à liberdade de locomoção.` },
      { id: "d", text: `João não pode impetrar habeas corpus em favor do pai, pois esse remédio constitucional somente pode ser utilizado em casos de prisão criminal, sendo inadequado para questionar a prisão civil decorrente de dívida alimentar.` },
    ]
  }),
  defineQuestion({
    id: "q-oab43-013",
    subjectId: "constitucional",
    themeId: "",
    examId: "oab-43",
    year: 2025,
    questionNumber: 13,
    difficulty: "medium",
    statement: `Em razão de fenômenos climáticos que vêm ocorrendo de forma reiterada e com graves consequências para a população, o Presidente da República editou decreto declarando estado de defesa em determinado Município do Estado Alfa, estabelecendo restrições ao direito de reunião e à liberdade de locomoção dos cidadãos.

Sobre o instituto do estado de defesa, assinale a afirmativa correta.`,
    explanation: "O estado de defesa é decretado pelo Presidente da República, ouvidos o Conselho da República e o Conselho de Defesa Nacional, sendo submetido ao Congresso Nacional em até 24 horas para aprovação. Não pode restringir a liberdade de locomoção.",
    support: "CF/88, arts. 136 e 137.",
    relatedArticleIds: [],
    tags: [],
    alternatives: [
      { id: "a", text: `O decreto presidencial é regular, pois o Presidente da República pode, em situações de grave perturbação da ordem pública, decretar estado de defesa sem necessidade de prévia autorização do Congresso Nacional.` },
      { id: "b", text: `O decreto presidencial é irregular, pois o estado de defesa não pode ser aplicado em situações decorrentes de fenômenos climáticos, mas apenas em casos de grave perturbação da ordem pública causada por ação humana.`, correct: true },
      { id: "c", text: `O decreto presidencial é regular, mas as restrições estabelecidas são parcialmente inconstitucionais, pois o estado de defesa permite restringir o direito de reunião, mas não a liberdade de locomoção.` },
      { id: "d", text: `O decreto presidencial é irregular, pois fenômenos climáticos com graves consequências à população justificam a decretação de estado de sítio, e não de estado de defesa, que é reservado para hipóteses de perturbação da ordem pública.` },
    ]
  }),
  defineQuestion({
    id: "q-oab43-014",
    subjectId: "constitucional",
    themeId: "",
    examId: "oab-43",
    year: 2025,
    questionNumber: 14,
    difficulty: "medium",
    statement: `A Comissão Parlamentar Permanente da Câmara dos Deputados convocou um Ministro de Estado para prestar informações sobre ato do Poder Executivo relacionado às atribuições do Ministério que dirige. O Ministro não compareceu à sessão, alegando ter recebido orientação do Presidente da República para não comparecer.

Sobre esse caso, assinale a afirmativa correta.`,
    explanation: "Os Ministros de Estado têm obrigação de comparecer perante as Casas do Congresso quando convocados. A orientação do Presidente da República não exclui essa obrigação constitucional.",
    support: "CF/88, art. 50.",
    relatedArticleIds: [],
    tags: [],
    alternatives: [
      { id: "a", text: `O Ministro de Estado tem a obrigação constitucional de comparecer às Comissões do Congresso Nacional quando convocado, e a orientação do Presidente da República para não comparecer não afasta essa obrigação, podendo a recusa configurar crime de responsabilidade.`, correct: true },
      { id: "b", text: `O Ministro de Estado não tem obrigação de comparecer às comissões parlamentares permanentes, pois tal obrigação se aplica apenas às Comissões Parlamentares de Inquérito, que têm poderes de investigação próprios das autoridades judiciais.` },
      { id: "c", text: `O Ministro de Estado pode se recusar legitimamente a comparecer às comissões parlamentares quando o Presidente da República assim o orientar, pois a relação hierárquica entre ambos prevalece sobre o controle parlamentar.` },
      { id: "d", text: `A convocação de Ministros de Estado por comissão parlamentar permanente é inconstitucional, pois somente as Comissões Parlamentares de Inquérito têm poder para convocar autoridades do Poder Executivo.` },
    ]
  }),
  defineQuestion({
    id: "q-oab43-015",
    subjectId: "constitucional",
    themeId: "",
    examId: "oab-43",
    year: 2025,
    questionNumber: 15,
    difficulty: "medium",
    statement: `Durante um violento temporal, em que as chuvas torrenciais poderiam levar ao rompimento de uma barragem e ao consequente alagamento de uma região inteira, agentes da Defesa Civil ingressaram em diversas residências sem o consentimento dos moradores, durante o período noturno, para retirar os moradores em situação de risco.

Considerando a situação descrita e as normas constitucionais, assinale a afirmativa correta.`,
    explanation: "A Constituição Federal admite o ingresso em domicílio à noite sem consentimento nos casos de flagrante delito, desastre ou para prestar socorro. A situação configura desastre, autorizando a entrada noturna.",
    support: "CF/88, art. 5º, XI.",
    relatedArticleIds: [],
    tags: [],
    alternatives: [
      { id: "a", text: `A atuação dos agentes foi inconstitucional, pois a inviolabilidade do domicílio é garantia fundamental que não admite qualquer exceção, mesmo em situações de emergência.` },
      { id: "b", text: `A atuação dos agentes foi constitucional, pois a Constituição Federal excepciona a inviolabilidade do domicílio nos casos de desastre, permitindo o ingresso sem consentimento, inclusive durante o período noturno.`, correct: true },
      { id: "c", text: `A atuação dos agentes foi inconstitucional, pois, embora o desastre justifique o ingresso em domicílio sem consentimento do morador, tal ingresso só é permitido durante o dia, vedada a entrada noturna.` },
      { id: "d", text: `A atuação dos agentes foi constitucional, desde que tenha sido precedida de autorização judicial, pois o ingresso forçado em domicílio, mesmo em casos de desastre, exige mandado judicial.` },
    ]
  }),
  defineQuestion({
    id: "q-oab43-016",
    subjectId: "constitucional",
    themeId: "",
    examId: "oab-43",
    year: 2025,
    questionNumber: 16,
    difficulty: "medium",
    statement: `O Presidente da República emitiu decreto autônomo, disciplinando a organização e o funcionamento de órgão da administração federal que não implicasse aumento de despesa nem criação ou extinção de órgãos públicos, sem que houvesse lei anterior autorizando tal regulamentação.

Sobre esse ato, assinale a afirmativa correta.`,
    explanation: "A Constituição Federal de 1988, com a EC 32/2001, passou a admitir decreto autônomo do Presidente da República para dispor sobre organização e funcionamento da administração federal, quando não implicar aumento de despesa nem criação ou extinção de órgãos públicos.",
    support: "CF/88, art. 84, VI, 'a'.",
    relatedArticleIds: [],
    tags: [],
    alternatives: [
      { id: "a", text: `O decreto é inválido, pois o poder regulamentar do Presidente da República está sempre condicionado à prévia lei, não sendo admitidos decretos autônomos no ordenamento jurídico brasileiro.` },
      { id: "b", text: `O decreto é inválido, pois, embora a Constituição admita decretos autônomos, estes somente podem ser editados quando expressamente autorizados por lei ordinária federal.` },
      { id: "c", text: `O decreto é válido, pois a Constituição Federal autoriza o Presidente da República a dispor, mediante decreto, sobre a organização e o funcionamento da administração federal, quando tal providência não implicar aumento de despesa nem criação ou extinção de órgãos públicos.`, correct: true },
      { id: "d", text: `O decreto é válido, mas somente se ratificado pelo Congresso Nacional no prazo de trinta dias, pois decretos autônomos que tratam de organização administrativa têm eficácia provisória até a aprovação parlamentar.` },
    ]
  }),
  defineQuestion({
    id: "q-oab43-017",
    subjectId: "direitos-humanos",
    themeId: "",
    examId: "oab-43",
    year: 2025,
    questionNumber: 17,
    difficulty: "medium",
    statement: `Na condição de advogado(a), você é procurado(a) por uma Organização não Governamental (ONG) que defende os direitos das populações tradicionais. A ONG relata que determinada comunidade quilombola está sofrendo violações reiteradas de seus direitos territoriais por parte do Poder Público estadual, que tem impedido a demarcação de suas terras.

Considerando as normas do sistema interamericano de proteção dos direitos humanos, assinale a afirmativa correta.`,
    explanation: "A Comissão Interamericana de Direitos Humanos pode receber petições de indivíduos e ONGs em face dos Estados membros da OEA. Para tanto, é necessário o esgotamento dos recursos internos, salvo exceções previstas na Convenção Americana.",
    support: "Convenção Americana de Direitos Humanos, arts. 44 e 46.",
    relatedArticleIds: [],
    tags: [],
    alternatives: [
      { id: "a", text: `A ONG poderá apresentar petição diretamente à Corte Interamericana de Direitos Humanos, pois entidades da sociedade civil têm legitimidade ativa para provocar diretamente a Corte em casos de violação de direitos coletivos de comunidades tradicionais.` },
      { id: "b", text: `A ONG somente poderá provocar o sistema interamericano se o Brasil tiver ratificado o protocolo específico sobre direitos territoriais de comunidades quilombolas, sem o qual a Comissão não tem competência para analisar o caso.` },
      { id: "c", text: `A ONG poderá apresentar petição à Comissão Interamericana de Direitos Humanos, desde que esgotados os recursos da jurisdição interna, salvo quando a tramitação dos recursos for injustificadamente prolongada ou quando não houver no direito interno o devido processo legal para proteção do direito violado.`, correct: true },
      { id: "d", text: `A ONG não tem legitimidade para peticionar ao sistema interamericano, pois a Convenção Americana de Direitos Humanos somente reconhece legitimidade ativa aos indivíduos diretamente lesados, e não a entidades representativas.` },
    ]
  }),
  defineQuestion({
    id: "q-oab43-018",
    subjectId: "direitos-humanos",
    themeId: "",
    examId: "oab-43",
    year: 2025,
    questionNumber: 18,
    difficulty: "medium",
    statement: `Na condição de advogado(a), você foi procurado por um grupo de mães de jovens negros vítimas de execuções sumárias praticadas por agentes policiais em determinado estado. As mães afirmam que os casos não são investigados adequadamente e que as famílias não têm acesso às informações sobre os inquéritos.

Considerando o sistema interamericano de direitos humanos, assinale a afirmativa correta.`,
    explanation: "O dever de investigação efetiva de violações de direitos humanos é obrigação dos Estados. A Convenção Americana prevê o direito à proteção judicial, e a Corte IDH reconhece o direito dos familiares ao acesso à informação sobre investigações.",
    support: "Convenção Americana de Direitos Humanos, arts. 8º e 25; jurisprudência da Corte IDH.",
    relatedArticleIds: [],
    tags: [],
    alternatives: [
      { id: "a", text: `As mães podem peticionar à Comissão Interamericana de Direitos Humanos, apresentando denúncia de que o Estado brasileiro está violando os direitos à vida e à proteção judicial das vítimas, desde que demonstrem o esgotamento dos recursos internos ou a demora injustificada nas investigações.`, correct: true },
      { id: "b", text: `As mães não têm legitimidade para peticionar ao sistema interamericano em nome dos filhos falecidos, pois somente as próprias vítimas diretas podem acionar os mecanismos de proteção da Convenção Americana de Direitos Humanos.` },
      { id: "c", text: `As mães poderiam peticionar diretamente à Corte Interamericana de Direitos Humanos, sem necessidade de passar pela Comissão, pois em casos de execuções sumárias o procedimento é expedito e não exige o esgotamento dos recursos internos.` },
      { id: "d", text: `As mães não podem utilizar o sistema interamericano de direitos humanos, pois o Brasil não reconheceu a competência contenciosa da Corte Interamericana de Direitos Humanos para apreciar fatos ocorridos após sua adesão à Convenção Americana.` },
    ]
  }),
  defineQuestion({
    id: "q-oab43-019",
    subjectId: "eleitoral",
    themeId: "",
    examId: "oab-43",
    year: 2025,
    questionNumber: 19,
    difficulty: "medium",
    statement: `Maria estava concorrendo ao cargo de Governadora do Estado Alfa. No decorrer da campanha, Maria veiculou propaganda eleitoral em rádio e televisão, em horário que não era o destinado à propaganda eleitoral gratuita, mediante pagamento à emissora.

Sobre a situação descrita, assinale a afirmativa correta.`,
    explanation: "A legislação eleitoral veda a veiculação de propaganda eleitoral paga em rádio e televisão. Somente é permitida a propaganda eleitoral gratuita no horário destinado para esse fim.",
    support: "Lei nº 9.504/97, art. 44.",
    relatedArticleIds: [],
    tags: [],
    alternatives: [
      { id: "a", text: `A propaganda é lícita, pois a lei eleitoral permite a veiculação de propaganda eleitoral paga em rádio e televisão, desde que respeitados os limites de gastos de campanha.` },
      { id: "b", text: `A propaganda é lícita, mas sujeita à fiscalização do Tribunal Superior Eleitoral quanto ao limite de horários e à origem dos recursos utilizados para o pagamento.` },
      { id: "c", text: `A propaganda é ilícita, mas a sanção aplicável é apenas de natureza pecuniária, consistente em multa a ser paga pela candidata e pela emissora, sem consequências para o registro da candidatura.` },
      { id: "d", text: `A propaganda é ilícita, pois a legislação eleitoral veda a veiculação de propaganda eleitoral paga em rádio e televisão, podendo a candidata e a emissora ser sancionadas, inclusive com cancelamento do registro da candidatura nos casos mais graves.`, correct: true },
    ]
  }),
  defineQuestion({
    id: "q-oab43-020",
    subjectId: "eleitoral",
    themeId: "",
    examId: "oab-43",
    year: 2025,
    questionNumber: 20,
    difficulty: "medium",
    statement: `No curso da campanha eleitoral, João, candidato ao cargo de Prefeito Municipal, recebeu doação de pessoa jurídica para financiar sua campanha eleitoral.

Sobre a situação descrita, assinale a afirmativa correta.`,
    explanation: "A Lei nº 13.488/2017 vedou definitivamente as doações de pessoas jurídicas para campanhas eleitorais. O recebimento de tais doações configura abuso do poder econômico e pode ensejar a cassação do registro ou do diploma.",
    support: "Lei nº 9.504/97, art. 24; ADI 4650/STF.",
    relatedArticleIds: [],
    tags: [],
    alternatives: [
      { id: "a", text: `A doação é lícita, desde que a pessoa jurídica esteja quite com o fisco e que o valor não ultrapasse o limite estabelecido pela legislação eleitoral para doações de pessoas jurídicas.` },
      { id: "b", text: `A doação é lícita, pois a pessoa jurídica tem direito de participar do processo político por meio de contribuições a campanhas eleitorais, garantido pelo princípio constitucional da liberdade de expressão.` },
      { id: "c", text: `A doação é ilícita, mas a sanção aplicável recai apenas sobre a pessoa jurídica doadora, que estará sujeita a multa, não havendo consequências para a candidatura de João.` },
      { id: "d", text: `A doação é ilícita, pois a legislação eleitoral, após o julgamento do STF que declarou inconstitucional o financiamento de campanhas por pessoas jurídicas, veda expressamente tais contribuições, sujeitando João a sanções que podem implicar a cassação do registro da candidatura.`, correct: true },
    ]
  }),
  defineQuestion({
    id: "q-oab43-021",
    subjectId: "internacional",
    themeId: "",
    examId: "oab-43",
    year: 2025,
    questionNumber: 21,
    difficulty: "medium",
    statement: `Uma artista brasileira, que protagoniza filmes nos Estados Unidos, foi contratada para realizar apresentações no Japão. Durante sua permanência no Japão, ela foi vítima de um delito praticado por um cidadão japonês.

Sobre a proteção diplomática e consular no caso descrito, assinale a afirmativa correta.`,
    explanation: "A proteção consular é prestada pelo Estado de origem ao seu nacional no exterior. O Estado brasileiro pode exercer proteção consular em favor da artista brasileira perante as autoridades japonesas.",
    support: "Convenção de Viena sobre Relações Consulares, art. 36.",
    relatedArticleIds: [],
    tags: [],
    alternatives: [
      { id: "a", text: `O Brasil não pode exercer proteção diplomática ou consular em favor da artista, pois ela se encontrava no Japão a trabalho, e a proteção consular somente se aplica a nacionais em situação de turismo ou residência permanente.` },
      { id: "b", text: `O Brasil pode exercer proteção consular em favor da artista, devendo a representação consular brasileira no Japão ser notificada da prisão da artista, se for o caso, e prestar-lhe assistência, inclusive comunicando-lhe o direito de receber visita consular.` },
      { id: "c", text: `O Brasil pode exercer proteção diplomática em favor da artista, de forma direta e imediata, ingressando com reclamação internacional perante as autoridades japonesas, independentemente do esgotamento dos recursos internos do Japão.`, correct: true },
      { id: "d", text: `O Brasil somente pode exercer proteção consular em favor da artista se houver tratado bilateral entre o Brasil e o Japão prevendo expressamente tal proteção, pois na ausência de tratado não há obrigação internacional de proteção a nacionais estrangeiros.` },
    ]
  }),
  defineQuestion({
    id: "q-oab43-022",
    subjectId: "internacional",
    themeId: "",
    examId: "oab-43",
    year: 2025,
    questionNumber: 22,
    difficulty: "medium",
    statement: `A cooperação jurídica internacional é uma modalidade formal de solicitação entre Estados para a realização de atos processuais ou procedimentais em território estrangeiro.

Sobre os instrumentos de cooperação jurídica internacional, assinale a afirmativa correta.`,
    explanation: "A carta rogatória é o instrumento de cooperação jurídica internacional pelo qual um Estado solicita a outro a prática de ato processual. No Brasil, as cartas rogatórias passivas são exequíveis pelo STJ mediante exequatur.",
    support: "CPC, arts. 26 a 41; CF/88, art. 105, I, 'i'.",
    relatedArticleIds: [],
    tags: [],
    alternatives: [
      { id: "a", text: `O auxílio direto é instrumento de cooperação no qual o Estado requerente formula pedido ao Estado requerido por via diplomática, exigindo sempre a intermediação do Ministério das Relações Exteriores de ambos os países.` },
      { id: "b", text: `A carta rogatória passiva é aquela expedida pelo juízo brasileiro a autoridade estrangeira, sendo desnecessário, nesse caso, o exequatur do Superior Tribunal de Justiça.` },
      { id: "c", text: `A homologação de sentença estrangeira e a carta rogatória são instrumentos de cooperação jurídica internacional distintos: a primeira diz respeito ao reconhecimento de decisões estrangeiras no Brasil, e a segunda à prática de atos processuais por autoridade estrangeira a pedido da autoridade nacional, competindo ao STJ em ambos os casos.`, correct: true },
      { id: "d", text: `O auxílio direto e a carta rogatória são equivalentes em seus efeitos jurídicos, pois ambos consistem em solicitação de um Estado a outro para a prática de atos processuais, diferindo apenas pela via utilizada para o encaminhamento do pedido.` },
    ]
  }),
  defineQuestion({
    id: "q-oab43-023",
    subjectId: "financeiro",
    themeId: "",
    examId: "oab-43",
    year: 2025,
    questionNumber: 23,
    difficulty: "medium",
    statement: `O Estado Beta, no último ano, ultrapassou o limite de despesa total de pessoal estabelecido pela Lei de Responsabilidade Fiscal. O Governador determinou a adoção de medidas para adequação ao limite.

Sobre as medidas cabíveis e suas consequências, assinale a afirmativa correta.`,
    explanation: "A LRF estabelece que, se a despesa total com pessoal ultrapassar os limites estabelecidos, o ente público deve adotar medidas para o retorno ao limite, como a redução de vantagens e a exoneração de servidores não estáveis. O descumprimento acarreta vedações e sanções previstas na lei.",
    support: "LC nº 101/2000, arts. 19 a 23.",
    relatedArticleIds: [],
    tags: [],
    alternatives: [
      { id: "a", text: `O Estado Beta deverá, imediatamente, extinguir os cargos em comissão e as funções de confiança, sem que seja necessária a adoção de qualquer outra medida de redução de despesas com pessoal.` },
      { id: "b", text: `O Estado Beta deverá suspender imediatamente o pagamento de remuneração de todos os servidores públicos até que o gasto com pessoal volte ao limite estabelecido pela Lei de Responsabilidade Fiscal.` },
      { id: "c", text: `O Estado Beta terá prazo de dois quadrimestres para eliminar o percentual excedente, adotando, dentre outras medidas, a redução em pelo menos vinte por cento das despesas com cargos em comissão e funções de confiança, e a exoneração de servidores não estáveis.` },
      { id: "d", text: `O Estado Beta deverá adotar as medidas previstas na Lei de Responsabilidade Fiscal para recondução ao limite, sendo vedado, enquanto perdurar o excesso, realizar concurso público, criar cargo, emprego ou função, além de outras restrições expressamente previstas em lei.`, correct: true },
    ]
  }),
  defineQuestion({
    id: "q-oab43-024",
    subjectId: "financeiro",
    themeId: "",
    examId: "oab-43",
    year: 2025,
    questionNumber: 24,
    difficulty: "medium",
    statement: `O projeto da Lei Orçamentária Anual (LOA) de determinado ente federativo foi encaminhado ao Poder Legislativo no prazo constitucional. No entanto, antes da votação, surgiu a necessidade de modificar metas estabelecidas no projeto.

Sobre o processo legislativo orçamentário, assinale a afirmativa correta.`,
    explanation: "O Poder Executivo pode enviar ao Legislativo mensagem de modificação ao projeto de LOA enquanto este não tiver sido votado pela comissão mista orçamentária.",
    support: "CF/88, art. 166, § 5º.",
    relatedArticleIds: [],
    tags: [],
    alternatives: [
      { id: "a", text: `O Poder Executivo não pode modificar o projeto da LOA após o seu envio ao Poder Legislativo, devendo aguardar a votação do projeto e, se necessário, encaminhar projeto de lei de crédito adicional para atender às novas necessidades.` },
      { id: "b", text: `O Poder Executivo pode enviar mensagem ao Poder Legislativo para modificar o projeto da LOA enquanto não iniciada a votação na comissão mista permanente de Senadores e Deputados.`, correct: true },
      { id: "c", text: `O Poder Executivo pode modificar o projeto da LOA a qualquer tempo, até a promulgação da lei, mediante o envio de mensagem ao Poder Legislativo solicitando a incorporação das alterações ao texto que ainda será votado.` },
      { id: "d", text: `O Poder Executivo pode modificar o projeto da LOA somente com a aprovação prévia do Tribunal de Contas, que deverá emitir parecer favorável à modificação das metas orçamentárias dentro do prazo de trinta dias.` },
    ]
  }),
  defineQuestion({
    id: "q-oab43-025",
    subjectId: "tributario",
    themeId: "",
    examId: "oab-43",
    year: 2025,
    questionNumber: 25,
    difficulty: "medium",
    statement: `João da Silva, profissional liberal, foi notificado pela Administração Tributária de que havia uma diferença entre o imposto de renda declarado e o imposto apurado pela Receita Federal. A Receita Federal lavrou auto de infração e iniciou processo administrativo fiscal.

Sobre o processo administrativo fiscal, assinale a afirmativa correta.`,
    explanation: "O lançamento tributário por arbitramento ocorre quando o contribuinte não apresenta documentos ou os apresenta de forma irregular. O contribuinte tem direito à ampla defesa e ao contraditório no processo administrativo fiscal.",
    support: "CTN, arts. 142 a 145; Dec. nº 70.235/72.",
    relatedArticleIds: [],
    tags: [],
    alternatives: [
      { id: "a", text: `O auto de infração lavrado pela Receita Federal tem natureza de decisão administrativa definitiva, não podendo ser questionado na via judicial, pois o processo administrativo fiscal encerra a discussão sobre o débito tributário.` },
      { id: "b", text: `João da Silva pode questionar o auto de infração tanto na via administrativa quanto na via judicial, mas a escolha de uma delas implica a renúncia definitiva à outra, não sendo possível a simultaneidade das discussões.` },
      { id: "c", text: `João da Silva tem o direito de impugnar o auto de infração na esfera administrativa, devendo apresentar defesa no prazo legal, e o processo administrativo fiscal deve observar os princípios do contraditório e da ampla defesa. A decisão definitiva administrativa não impede a posterior discussão judicial do débito.`, correct: true },
      { id: "d", text: `O processo administrativo fiscal encerra definitivamente a questão tributária, não podendo João da Silva questionar judicialmente o auto de infração após o término do processo administrativo, em razão da coisa julgada administrativa.` },
    ]
  }),
  defineQuestion({
    id: "q-oab43-026",
    subjectId: "tributario",
    themeId: "",
    examId: "oab-43",
    year: 2025,
    questionNumber: 26,
    difficulty: "medium",
    statement: `Um contrato de locação residencial traz cláusula expressa de que ao locatário incumbe o pagamento do Imposto Predial e Territorial Urbano (IPTU) do imóvel locado.

Considerando as normas do Código Tributário Nacional, assinale a afirmativa correta.`,
    explanation: "A convenção particular sobre responsabilidade tributária não pode ser oposta ao Fisco. O IPTU é obrigação do proprietário (sujeito passivo), que permanece responsável perante o Fisco, independentemente de cláusula contratual que transfira o ônus ao locatário.",
    support: "CTN, art. 123.",
    relatedArticleIds: [],
    tags: [],
    alternatives: [
      { id: "a", text: `A cláusula contratual é válida e oponível à Fazenda Pública Municipal, que deverá cobrar o IPTU diretamente do locatário em caso de inadimplemento, pois as partes podem, por convenção, alterar os sujeitos passivos das obrigações tributárias.` },
      { id: "b", text: `A cláusula contratual é válida entre as partes, mas não pode ser oposta à Fazenda Pública Municipal. O proprietário continua sendo o sujeito passivo do IPTU perante o Fisco, podendo ressarcir-se do locatário em ação regressiva.`, correct: true },
      { id: "c", text: `A cláusula contratual é nula de pleno direito, pois o Código Tributário Nacional veda expressamente qualquer pacto entre particulares que transfira, ainda que parcialmente, a responsabilidade pelo pagamento de tributos.` },
      { id: "d", text: `A cláusula contratual é válida, e o locatário passa a ser responsável tributário solidário pelo IPTU, podendo a Fazenda Pública cobrar o tributo tanto do proprietário quanto do locatário, conforme a cláusula contratual registrada em cartório.` },
    ]
  }),
  defineQuestion({
    id: "q-oab43-027",
    subjectId: "tributario",
    themeId: "",
    examId: "oab-43",
    year: 2025,
    questionNumber: 27,
    difficulty: "medium",
    statement: `Visando à melhoria do serviço de iluminação pública e da segurança no Município Alfa, a Câmara Municipal aprovou lei criando a Contribuição para o Custeio do Serviço de Iluminação Pública (COSIP), a ser cobrada nas faturas de energia elétrica dos consumidores.

Sobre a COSIP, assinale a afirmativa correta.`,
    explanation: "A COSIP foi autorizada pela EC 39/2002, que inseriu o art. 149-A na CF/88, permitindo aos municípios instituir contribuição para custeio do serviço de iluminação pública.",
    support: "CF/88, art. 149-A; Súmula Vinculante 41.",
    relatedArticleIds: [],
    tags: [],
    alternatives: [
      { id: "a", text: `A COSIP é constitucional, pois a Emenda Constitucional nº 39/2002 autorizou os Municípios e o Distrito Federal a instituir contribuição para o custeio do serviço de iluminação pública, podendo ser cobrada na fatura de energia elétrica.`, correct: true },
      { id: "b", text: `A COSIP é inconstitucional, pois os Municípios não têm competência para instituir contribuições sociais, sendo tal competência exclusiva da União Federal.` },
      { id: "c", text: `A COSIP é inconstitucional, pois o serviço de iluminação pública é serviço público indivisível e inespecífico, não podendo ser remunerado por contribuição de melhoria ou taxa, tampouco por contribuição especial.` },
      { id: "d", text: `A COSIP é inconstitucional, pois a sua cobrança nas faturas de energia elétrica viola o princípio da capacidade contributiva, dado que o consumo de energia elétrica não guarda relação com o custo do serviço de iluminação pública.` },
    ]
  }),
  defineQuestion({
    id: "q-oab43-028",
    subjectId: "tributario",
    themeId: "",
    examId: "oab-43",
    year: 2025,
    questionNumber: 28,
    difficulty: "medium",
    statement: `Nova lei federal ordinária, pretendendo oferecer uma oportunidade para os devedores tributários, estabeleceu que os contribuintes que tivessem débitos tributários com a União poderiam quitá-los mediante compensação com precatórios que houvessem adquirido de terceiros.

Sobre essa lei, assinale a afirmativa correta.`,
    explanation: "A compensação tributária depende de autorização legal específica. O CTN exige que os créditos a compensar sejam líquidos e certos, e o STF tem entendimento de que a compensação com precatórios de terceiros depende de lei específica.",
    support: "CTN, art. 170; CF/88, art. 100.",
    relatedArticleIds: [],
    tags: [],
    alternatives: [
      { id: "a", text: `A lei é inválida, pois a compensação de débitos tributários com precatórios adquiridos de terceiros não é juridicamente possível, dado que os precatórios são créditos personalíssimos, insuscetíveis de cessão ou transferência a terceiros.` },
      { id: "b", text: `A lei é válida, pois o Poder Legislativo federal tem competência para autorizar a compensação de débitos tributários federais com precatórios adquiridos de terceiros, como forma de facilitar o recebimento dos créditos públicos e a quitação dos débitos tributários.`, correct: true },
      { id: "c", text: `A lei é inválida, pois a compensação tributária somente pode ser realizada entre créditos do mesmo titular, sendo vedada a extinção do crédito tributário mediante compensação com precatórios adquiridos de terceiros.` },
      { id: "d", text: `A lei é inválida, pois a extinção do crédito tributário somente pode ser autorizada por lei complementar, e não por lei ordinária, conforme exige o Código Tributário Nacional.` },
    ]
  }),
  defineQuestion({
    id: "q-oab43-029",
    subjectId: "tributario",
    themeId: "",
    examId: "oab-43",
    year: 2025,
    questionNumber: 29,
    difficulty: "medium",
    statement: `A sociedade empresária prestadora de serviços ABC Ltda., sediada no Município Alfa, celebrou contrato de prestação de serviços com a empresa XYZ S.A., sediada no Município Beta. Os serviços contratados seriam prestados exclusivamente no Município Beta.

Sobre a incidência do ISS nessa situação, assinale a afirmativa correta.`,
    explanation: "Conforme a LC 116/2003 e o entendimento do STJ e STF, o ISS é devido no local da prestação dos serviços, e não no do estabelecimento do prestador, exceto nas hipóteses expressamente previstas em lei.",
    support: "LC nº 116/2003, art. 3º; Súmula 524/STJ.",
    relatedArticleIds: [],
    tags: [],
    alternatives: [
      { id: "a", text: `O ISS é devido ao Município Alfa, local do estabelecimento prestador, pois a Lei Complementar nº 116/2003 adota como regra geral o local do estabelecimento do prestador como critério de incidência do ISS.`, correct: true },
      { id: "b", text: `O ISS é devido ao Município Beta, local da efetiva prestação dos serviços, pois o Superior Tribunal de Justiça firmou entendimento de que o ISS é devido no local onde os serviços são concretamente realizados, independentemente do local do estabelecimento do prestador.` },
      { id: "c", text: `O ISS deve ser recolhido em partes iguais ao Município Alfa e ao Município Beta, pois a Lei Complementar nº 116/2003 prevê que, nas hipóteses de prestação de serviços em local diverso do estabelecimento do prestador, o tributo deve ser rateado entre os municípios envolvidos.` },
      { id: "d", text: `A ABC Ltda. não é contribuinte do ISS, pois o contribuinte do tributo é o tomador do serviço, que deverá retê-lo e recolhê-lo ao Município onde está estabelecido, independentemente do local da prestação do serviço.` },
    ]
  }),
  defineQuestion({
    id: "q-oab43-030",
    subjectId: "administrativo",
    themeId: "",
    examId: "oab-43",
    year: 2025,
    questionNumber: 30,
    difficulty: "medium",
    statement: `Tertuliano vem acumulando ilicitamente dois cargos públicos em autarquias federais distintas. A autoridade competente instaurou processo administrativo disciplinar para apurar tal irregularidade.

Sobre o procedimento cabível e suas consequências, assinale a afirmativa correta.`,
    explanation: "A acumulação ilícita de cargos públicos sujeita o servidor à obrigação de optar por um dos cargos. Caso não o faça, deverá ser demitido do cargo mais recente. O servidor deve ser notificado para optar.",
    support: "CF/88, art. 37, XVI e XVII; Lei nº 8.112/90, art. 133.",
    relatedArticleIds: [],
    tags: [],
    alternatives: [
      { id: "a", text: `Tertuliano deverá ser imediatamente exonerado de ambos os cargos, pois a acumulação ilícita é causa de demissão e não admite qualquer possibilidade de regularização da situação.` },
      { id: "b", text: `Tertuliano poderá acumular os dois cargos desde que comprove ao Poder Público que os horários são compatíveis e que a remuneração total não supere o teto constitucional, pois tais exigências são suficientes para a regularização da acumulação.` },
      { id: "c", text: `O processo administrativo deverá ser arquivado sem aplicação de penalidade, pois a acumulação de cargos em autarquias distintas não configura acumulação ilícita quando os servidores pertencem ao mesmo quadro funcional da Administração Pública Federal.` },
      { id: "d", text: `Tertuliano deverá ser notificado para que, em prazo razoável, exerça a opção por um dos cargos. Caso não o faça, será caracterizado o abandono do cargo mais antigo, sujeitando-o à demissão do cargo por ele não optado.`, correct: true },
    ]
  }),
  defineQuestion({
    id: "q-oab43-031",
    subjectId: "administrativo",
    themeId: "",
    examId: "oab-43",
    year: 2025,
    questionNumber: 31,
    difficulty: "medium",
    statement: `O Estado Beta, após os devidos trâmites, promoveu a concessão de serviço público de transporte coletivo urbano para uma empresa privada pelo prazo de 20 anos. Após 5 anos de vigência do contrato, o Estado Beta, por razões de interesse público superveniente, resolveu retomar a prestação direta do serviço.

Sobre a encampação do serviço concedido, assinale a afirmativa correta.`,
    explanation: "A encampação é a retomada do serviço pelo poder concedente durante a vigência da concessão por motivo de interesse público, mediante lei autorizadora e após o pagamento de prévia indenização ao concessionário.",
    support: "Lei nº 8.987/95, art. 37.",
    relatedArticleIds: [],
    tags: [],
    alternatives: [
      { id: "a", text: `O Estado Beta pode encampar a concessão a qualquer momento, sem necessidade de indenização, pois o interesse público prevalece sobre o interesse privado do concessionário, que assumiu o risco do empreendimento ao celebrar o contrato.` },
      { id: "b", text: `O Estado Beta não pode encampar a concessão sem autorização do Poder Judiciário, que deverá avaliar se o interesse público alegado é legítimo e se os direitos do concessionário serão respeitados.` },
      { id: "c", text: `O Estado Beta pode encampar a concessão mediante lei autorizativa específica e após o pagamento de prévia indenização ao concessionário pelos danos decorrentes da extinção antecipada do contrato.`, correct: true },
      { id: "d", text: `O Estado Beta não pode encampar a concessão no prazo de 20 anos, pois o prazo contratual vincula o poder concedente, sendo a encampação cabível somente após o término do prazo da concessão.` },
    ]
  }),
  defineQuestion({
    id: "q-oab43-032",
    subjectId: "administrativo",
    themeId: "",
    examId: "oab-43",
    year: 2025,
    questionNumber: 32,
    difficulty: "medium",
    statement: `Com o intuito de promover o tombamento de dois imóveis vizinhos de inegável valor histórico, o órgão competente do Estado Alfa, após instaurar o processo de tombamento de cada um deles, notificou os proprietários dos imóveis.

Um dos proprietários concordou com o tombamento; o outro proprietário apresentou impugnação.

Sobre o instituto do tombamento, assinale a afirmativa correta.`,
    explanation: "O tombamento pode ser voluntário (quando o proprietário concorda) ou compulsório (quando o proprietário se opõe). A impugnação pelo proprietário não impede o tombamento compulsório pelo Poder Público.",
    support: "Dec.-lei nº 25/37, arts. 6º a 9º.",
    relatedArticleIds: [],
    tags: [],
    alternatives: [
      { id: "a", text: `O tombamento do imóvel cujo proprietário concordou é voluntário e pode ser efetivado imediatamente; já o tombamento do imóvel cujo proprietário apresentou impugnação é compulsório e poderá ser efetivado mediante decisão do órgão competente após análise da impugnação.`, correct: true },
      { id: "b", text: `Ambos os tombamentos só poderão ser efetivados após autorização judicial, pois o tombamento compulsório constitui restrição ao direito de propriedade e exige controle jurisdicional prévio.` },
      { id: "c", text: `O tombamento voluntário e o tombamento compulsório têm os mesmos efeitos jurídicos e o mesmo procedimento, diferindo apenas quanto ao consentimento do proprietário, que não tem relevância jurídica para a efetivação do ato.` },
      { id: "d", text: `A impugnação apresentada pelo segundo proprietário suspende automaticamente o processo de tombamento, que somente poderá prosseguir após a desistência da impugnação ou o trânsito em julgado de decisão judicial que a rejeite.` },
    ]
  }),
  defineQuestion({
    id: "q-oab43-033",
    subjectId: "administrativo",
    themeId: "",
    examId: "oab-43",
    year: 2025,
    questionNumber: 33,
    difficulty: "medium",
    statement: `Januário, ex-prefeito do Município Imaginário, teve conhecimento de um inquérito civil público instaurado pelo Ministério Público para apurar suposto ato de improbidade administrativa praticado durante seu mandato.

Januário consulta você, na qualidade de advogado(a), sobre as possíveis consequências jurídicas.

Assinale a afirmativa correta.`,
    explanation: "A Lei de Improbidade Administrativa (Lei nº 8.429/92, alterada pela Lei nº 14.230/21) prevê sanções como suspensão dos direitos políticos, perda da função pública, ressarcimento ao erário e multa. A ação de improbidade administrativa é de natureza civil.",
    support: "Lei nº 8.429/92 (com alterações da Lei nº 14.230/21).",
    relatedArticleIds: [],
    tags: [],
    alternatives: [
      { id: "a", text: `Januário poderá ser condenado ao ressarcimento integral do dano, à perda da função pública, à suspensão dos direitos políticos e ao pagamento de multa civil, sendo que a ação de improbidade administrativa tem natureza civil, devendo ser proposta pelo Ministério Público.`, correct: true },
      { id: "b", text: `Januário não poderá ser punido pelas condutas praticadas durante o mandato, pois a imunidade do ex-mandatário o protege de ações de improbidade administrativa relativas a atos praticados no exercício da função pública.` },
      { id: "c", text: `A ação de improbidade administrativa somente pode ser proposta contra agentes públicos em exercício, não alcançando ex-gestores públicos como Januário, pois a Lei de Improbidade pressupõe vínculo funcional atual com o Poder Público.` },
      { id: "d", text: `O inquérito civil público instaurado pelo Ministério Público vincula diretamente Januário, que poderá ser condenado administrativamente pelo próprio Ministério Público, sem necessidade de ajuizamento de ação judicial.` },
    ]
  }),
  defineQuestion({
    id: "q-oab43-034",
    subjectId: "administrativo",
    themeId: "",
    examId: "oab-43",
    year: 2025,
    questionNumber: 34,
    difficulty: "medium",
    statement: `Rodrigo agrediu fisicamente seu desafeto Afonso, quando estava no exercício de função pública como agente de trânsito municipal. A agressão ocorreu durante o horário de trabalho e em razão de desentendimento pessoal anterior entre os dois.

Sobre a responsabilidade civil do Estado no caso descrito, assinale a afirmativa correta.`,
    explanation: "A responsabilidade civil do Estado é objetiva (teoria do risco administrativo), bastando que o dano tenha sido causado por agente público no exercício da função. O Estado responde pelos danos causados por seus agentes, mesmo que o ato seja abusivo ou praticado com desvio de finalidade.",
    support: "CF/88, art. 37, § 6º.",
    relatedArticleIds: [],
    tags: [],
    alternatives: [
      { id: "a", text: `O Município não responde pelo dano, pois a agressão de Rodrigo foi ato pessoal, praticado por motivo particular, sem qualquer relação com o exercício da função pública de agente de trânsito.` },
      { id: "b", text: `O Município não responde pelo dano, pois a responsabilidade civil do Estado pressupõe conduta culposa ou dolosa da Administração, e não do agente público individualmente considerado.` },
      { id: "c", text: `O Município responde objetivamente pelo dano causado por Rodrigo, pois a agressão ocorreu durante o exercício da função pública e no horário de trabalho, o que configura nexo de causalidade entre a função exercida e o dano causado, independentemente da motivação pessoal.`, correct: true },
      { id: "d", text: `O Município responde pelo dano somente de forma subsidiária, após o esgotamento dos bens de Rodrigo, pois a responsabilidade pessoal do agente público prevalece sobre a responsabilidade objetiva do Estado em casos de dolo.` },
    ]
  }),
  defineQuestion({
    id: "q-oab43-035",
    subjectId: "ambiental",
    themeId: "",
    examId: "oab-43",
    year: 2025,
    questionNumber: 35,
    difficulty: "medium",
    statement: `Diante das numerosas tragédias climáticas registradas, ganhou força na sociedade e no parlamento o debate sobre a necessidade de aprovação de uma lei que criasse um mecanismo de precificação do carbono no Brasil.

Sobre os instrumentos de direito ambiental relacionados ao tema, assinale a afirmativa correta.`,
    explanation: "O mercado de carbono e os mecanismos de precificação de carbono são instrumentos econômicos de gestão ambiental. No Brasil, há previsão de tais mecanismos na Política Nacional sobre Mudança do Clima (PNMC).",
    support: "Lei nº 12.187/09 (PNMC); CF/88, art. 225.",
    relatedArticleIds: [],
    tags: [],
    alternatives: [
      { id: "a", text: `A criação de mecanismo de precificação do carbono por lei ordinária seria inconstitucional, pois matéria de política climática e proteção ao meio ambiente somente pode ser regulada por lei complementar, em razão de sua relevância para a preservação do meio ambiente ecologicamente equilibrado.` },
      { id: "b", text: `A precificação do carbono é um instrumento de direito ambiental que funciona como medida de comando e controle, pois impõe às empresas obrigações de redução de emissões sob pena de sanções administrativas.` },
      { id: "c", text: `A precificação do carbono é vedada pelo ordenamento jurídico brasileiro, pois a Constituição Federal proíbe a criação de tributos incidentes sobre atividades econômicas lícitas relacionadas à produção e ao consumo de energia.` },
      { id: "d", text: `A criação de mecanismos de precificação do carbono por lei é compatível com o ordenamento jurídico brasileiro, que prevê o uso de instrumentos econômicos na política ambiental para induzir comportamentos menos prejudiciais ao meio ambiente.`, correct: true },
    ]
  }),
  defineQuestion({
    id: "q-oab43-036",
    subjectId: "ambiental",
    themeId: "",
    examId: "oab-43",
    year: 2025,
    questionNumber: 36,
    difficulty: "medium",
    statement: `A sociedade empresária XYZ, recentemente constituída, exercerá atividade potencialmente causadora de significativa degradação do meio ambiente.

Para iniciar suas atividades, a sociedade empresária XYZ deverá:`,
    explanation: "Para atividades potencialmente causadoras de significativa degradação ambiental, é obrigatória a realização de Estudo de Impacto Ambiental (EIA) e respectivo Relatório de Impacto Ambiental (RIMA), como condição para o licenciamento ambiental.",
    support: "CF/88, art. 225, § 1º, IV; Lei nº 6.938/81, art. 9º; Resolução CONAMA 001/86.",
    relatedArticleIds: [],
    tags: [],
    alternatives: [
      { id: "a", text: `Realizar Estudo de Impacto de Vizinhança (EIV), por ser o instrumento adequado para avaliação prévia das atividades potencialmente poluidoras, conforme o Estatuto da Cidade.` },
      { id: "b", text: `Realizar Estudo de Impacto Ambiental (EIA) e apresentar o respectivo Relatório de Impacto Ambiental (RIMA), como condição para o licenciamento ambiental, sendo exigência constitucional para as atividades que possam causar significativa degradação ambiental.`, correct: true },
      { id: "c", text: `Apresentar somente o Relatório Ambiental Simplificado (RAS), por ser instrumento menos oneroso e de tramitação mais ágil, reservando-se o EIA para empreendimentos de maior porte e impacto.` },
      { id: "d", text: `Registrar-se no Cadastro Técnico Federal de Atividades Potencialmente Poluidoras e Utilizadoras de Recursos Ambientais, o que substitui a necessidade de licenciamento ambiental para atividades de baixo a médio impacto.` },
    ]
  }),
  defineQuestion({
    id: "q-oab43-037",
    subjectId: "civil",
    themeId: "",
    examId: "oab-43",
    year: 2025,
    questionNumber: 37,
    difficulty: "medium",
    statement: `Mário conduzia imprudentemente seu veículo quando perdeu o controle do automóvel e colidiu com o estabelecimento comercial de Bento. Em razão do acidente, Bento sofreu danos materiais ao imóvel e ao estoque de mercadorias.

A seguradora de Mário, após pagar a indenização a Bento, pretende se ressarcir junto a Mário.

Sobre o direito de regresso da seguradora, assinale a afirmativa correta.`,
    explanation: "A seguradora que paga a indenização sub-roga-se nos direitos do segurado contra o responsável pelo dano. Entretanto, a sub-rogação não se opera quando o causador do dano é o próprio segurado, pois a seguradora não pode exercer regresso contra o seu próprio segurado.",
    support: "CC, arts. 786 e 934.",
    relatedArticleIds: [],
    tags: [],
    alternatives: [
      { id: "a", text: `A seguradora não tem direito de regresso contra Mário, pois ao pagar a indenização a Bento ela sub-rogou-se nos direitos do segurado, mas o regresso somente é possível quando o dano foi causado por terceiro, e não pelo próprio segurado.` },
      { id: "b", text: `A seguradora tem direito de regresso contra Mário, pois ao pagar a indenização a Bento ela sub-rogou-se nos direitos da vítima e pode cobrar regressivamente do causador do dano os valores desembolsados, ainda que seja o próprio segurado o responsável pelo acidente.`, correct: true },
      { id: "c", text: `A seguradora não tem direito de regresso contra Mário em nenhuma hipótese, pois o contrato de seguro tem por finalidade exatamente cobrir os danos causados pelo próprio segurado, e o exercício do regresso contrariaria a natureza do seguro.` },
      { id: "d", text: `A seguradora tem direito de regresso contra Mário somente se demonstrar que o segurado agiu com dolo, não sendo cabível o regresso em hipóteses de culpa, como é o caso da imprudência na condução de veículo.` },
    ]
  }),
  defineQuestion({
    id: "q-oab43-038",
    subjectId: "civil",
    themeId: "",
    examId: "oab-43",
    year: 2025,
    questionNumber: 38,
    difficulty: "medium",
    statement: `Cláudia comprou um apartamento e contratou o arquiteto Lúcio para elaborar o projeto de reforma e supervisionar a execução das obras. Após a conclusão das obras, Cláudia detectou vícios construtivos graves que comprometiam a segurança e a solidez do imóvel.

Sobre a responsabilidade civil de Lúcio no caso descrito, assinale a afirmativa correta.`,
    explanation: "O arquiteto que dirige a obra responde pelos vícios ou defeitos que comprometam a solidez e a segurança da construção pelo prazo de cinco anos após a sua conclusão (responsabilidade decenal/quinquenal do CC/02).",
    support: "CC, art. 618.",
    relatedArticleIds: [],
    tags: [],
    alternatives: [
      { id: "a", text: `Lúcio responde pelos vícios construtivos pelo prazo de cinco anos após a conclusão das obras, sendo sua responsabilidade objetiva e não podendo ser afastada mesmo que demonstre ausência de culpa na elaboração do projeto e na supervisão das obras.`, correct: true },
      { id: "b", text: `Lúcio não responde pelos vícios construtivos, pois sua responsabilidade limita-se ao projeto arquitetônico; os vícios na execução das obras são de responsabilidade exclusiva dos empreiteiros que realizaram os trabalhos.` },
      { id: "c", text: `Lúcio responde pelos vícios construtivos somente se Cláudia demonstrar que houve culpa na elaboração do projeto ou na supervisão das obras, pois a responsabilidade do arquiteto é subjetiva, fundada na culpa.` },
      { id: "d", text: `Lúcio não responde pelos vícios construtivos detectados após a conclusão das obras, pois o Código Civil prevê prazo de garantia de apenas noventa dias para vícios aparentes e de um ano para vícios ocultos nas obras de construção civil.` },
    ]
  }),
  defineQuestion({
    id: "q-oab43-039",
    subjectId: "civil",
    themeId: "",
    examId: "oab-43",
    year: 2025,
    questionNumber: 39,
    difficulty: "medium",
    statement: `André, pessoa física, faz a coleta de dados pessoais de seus conhecidos para fins exclusivamente pessoais, sem qualquer intenção comercial ou de compartilhamento com terceiros.

Sobre a aplicação da Lei Geral de Proteção de Dados Pessoais (LGPD) ao caso descrito, assinale a afirmativa correta.`,
    explanation: "A LGPD não se aplica ao tratamento de dados pessoais realizado por pessoa natural para fins exclusivamente particulares e não econômicos.",
    support: "Lei nº 13.709/18, art. 4º, I.",
    relatedArticleIds: [],
    tags: [],
    alternatives: [
      { id: "a", text: `A LGPD se aplica integralmente à coleta de dados realizada por André, pois ela não distingue pessoas físicas de jurídicas para fins de incidência de suas normas, aplicando-se a qualquer tratamento de dados pessoais.` },
      { id: "b", text: `A LGPD não se aplica à conduta de André, pois ela expressamente exclui de seu âmbito o tratamento de dados pessoais realizado por pessoa natural para fins exclusivamente particulares e não econômicos.`, correct: true },
      { id: "c", text: `A LGPD se aplica parcialmente à conduta de André, pois, embora a atividade seja pessoal, qualquer coleta de dados pessoais está sujeita aos princípios gerais da proteção de dados estabelecidos na lei.` },
      { id: "d", text: `A LGPD não se aplica à conduta de André somente se ele tiver obtido o consentimento expresso e inequívoco de cada uma das pessoas cujos dados foram coletados, pois o consentimento é a principal base legal para o tratamento de dados pessoais.` },
    ]
  }),
  defineQuestion({
    id: "q-oab43-040",
    subjectId: "civil",
    themeId: "",
    examId: "oab-43",
    year: 2025,
    questionNumber: 40,
    difficulty: "medium",
    statement: `Paulo e Glória mantiveram união estável por 22 anos, sem que nunca tivessem realizado qualquer contrato escrito regulando suas relações patrimoniais.

Paulo faleceu e deixou dois filhos do relacionamento com Glória e um imóvel adquirido antes do início da união estável.

Sobre os direitos sucessórios de Glória, assinale a afirmativa correta.`,
    explanation: "Na união estável sem contrato escrito, aplica-se o regime de comunhão parcial de bens. O companheiro sobrevivente concorre com os filhos comuns quanto aos bens adquiridos durante a união. O imóvel adquirido antes da união não integra a meação.",
    support: "CC, arts. 1.725 e 1.790.",
    relatedArticleIds: [],
    tags: [],
    alternatives: [
      { id: "a", text: `Glória tem direito à meação dos bens adquiridos durante a união estável, não tendo direito hereditário sobre o imóvel adquirido por Paulo antes do início da convivência, pois este integra o patrimônio exclusivo do falecido.`, correct: true },
      { id: "b", text: `Glória tem direito à metade de todos os bens deixados por Paulo, inclusive o imóvel adquirido antes da união estável, pois após 22 anos de convivência o regime de bens passa automaticamente à comunhão universal.` },
      { id: "c", text: `Glória não tem direito a nenhum bem de Paulo, pois a ausência de contrato escrito implica que não havia regime de bens entre os companheiros, e a legislação não reconhece direitos sucessórios ao companheiro sobrevivente.` },
      { id: "d", text: `Glória tem direito a concorrer igualmente com os filhos de Paulo na herança de todos os bens deixados, inclusive o imóvel adquirido antes da união, pois o companheiro sobrevivente é herdeiro necessário em igualdade de condições com os filhos.` },
    ]
  }),
  defineQuestion({
    id: "q-oab43-041",
    subjectId: "civil",
    themeId: "",
    examId: "oab-43",
    year: 2025,
    questionNumber: 41,
    difficulty: "medium",
    statement: `No edifício em que reside Carolina, há, nas janelas das salas de todos os apartamentos, películas protetoras contra raios solares, instaladas há mais de dez anos. Em assembleia de condomínio, foi aprovada por maioria de votos a retirada de todas as películas.

Carolina se opõe à decisão, alegando que as películas integram as partes comuns do edifício.

Sobre o caso, assinale a afirmativa correta.`,
    explanation: "As partes comuns do condomínio não podem ser alteradas por simples maioria em assembleia, pois modificações que afetam a fachada do edifício exigem aprovação unânime dos condôminos.",
    support: "Lei nº 4.591/64; CC, art. 1.336, III.",
    relatedArticleIds: [],
    tags: [],
    alternatives: [
      { id: "a", text: `A assembleia de condomínio pode, por maioria simples, deliberar sobre a retirada das películas, pois as deliberações sobre manutenção, conservação e estética das áreas comuns não exigem unanimidade.` },
      { id: "b", text: `Carolina tem razão, pois alterações na fachada do edifício, como a retirada das películas das janelas das salas de todos os apartamentos, exigem aprovação unânime dos condôminos, não podendo ser deliberadas por maioria.` },
      { id: "c", text: `A decisão da assembleia é válida, mas Carolina pode requerer judicialmente a manutenção das películas em seu apartamento, pois a decisão coletiva não pode impor ao condômino individual a alteração de partes que integram a face externa de sua unidade.`, correct: true },
      { id: "d", text: `A decisão da assembleia é inválida, pois as películas, por terem sido instaladas há mais de dez anos, foram incorporadas ao patrimônio exclusivo de cada condômino por usucapião, não podendo ser removidas sem consentimento individual.` },
    ]
  }),
  defineQuestion({
    id: "q-oab43-042",
    subjectId: "civil",
    themeId: "",
    examId: "oab-43",
    year: 2025,
    questionNumber: 42,
    difficulty: "medium",
    statement: `Fabiano e Vitória, casados pelo regime de comunhão parcial de bens, são sócios de uma sociedade empresária. Vitória pretende ceder suas cotas sociais a um terceiro.

Sobre a necessidade de consentimento de Fabiano para a cessão das cotas, assinale a afirmativa correta.`,
    explanation: "No regime de comunhão parcial de bens, as cotas de sociedade adquiridas durante o casamento são bens comuns. A alienação de bens imóveis e a outorga de fiança exigem consentimento do cônjuge, assim como atos que impliquem disposição de bens comuns.",
    support: "CC, arts. 1.647 e 1.658.",
    relatedArticleIds: [],
    tags: [],
    alternatives: [
      { id: "a", text: `Vitória não precisa do consentimento de Fabiano para ceder as cotas sociais, pois cotas de sociedade empresária são bens de natureza pessoal e móvel, e no regime de comunhão parcial de bens o cônjuge tem livre disposição dos bens móveis de sua titularidade.` },
      { id: "b", text: `Vitória precisa do consentimento de Fabiano para ceder as cotas, pois no regime de comunhão parcial de bens as cotas adquiridas durante o casamento são bens comuns, e a sua alienação exige a outorga conjugal, ressalvada disposição diversa no contrato social.`, correct: true },
      { id: "c", text: `Vitória não precisa do consentimento de Fabiano, pois o regime de comunhão parcial de bens garante a plena autonomia de cada cônjuge para a administração e disposição dos bens de sua titularidade, sejam eles móveis ou imóveis.` },
      { id: "d", text: `Vitória precisa do consentimento de Fabiano somente se as cotas forem avaliadas por valor superior a determinado limite legal, abaixo do qual a outorga conjugal é dispensada no regime de comunhão parcial de bens.` },
    ]
  }),
  defineQuestion({
    id: "q-oab43-043",
    subjectId: "eca",
    themeId: "",
    examId: "oab-43",
    year: 2025,
    questionNumber: 43,
    difficulty: "medium",
    statement: `Herminda, de 50 anos, é tia materna de Júlia, de 16 anos. Após verificar que a mãe de Júlia estava fazendo uso abusivo de álcool e que o pai da menina havia falecido, Herminda requereu a guarda de Júlia.

Sobre o pedido de guarda no caso descrito, assinale a afirmativa correta.`,
    explanation: "O ECA prevê que a guarda pode ser deferida a pessoa diversa dos pais, como parentes próximos, quando o interesse do menor assim recomendar. A situação de vulnerabilidade da mãe pode justificar a transferência da guarda à tia.",
    support: "Lei nº 8.069/90, arts. 28, 33 e 36.",
    relatedArticleIds: [],
    tags: [],
    alternatives: [
      { id: "a", text: `O pedido de Herminda é inadmissível, pois o ECA só admite a transferência de guarda para parentes de primeiro grau, como avós, tios não têm legitimidade para requerer a guarda de sobrinho.` },
      { id: "b", text: `O pedido de Herminda é admissível, pois o ECA permite que a guarda seja deferida a pessoa diversa dos pais, inclusive parentes, quando o superior interesse da criança ou do adolescente assim o recomendar, devendo o juiz ouvir Júlia antes de decidir.`, correct: true },
      { id: "c", text: `O pedido de Herminda é inadmissível, pois a guarda somente pode ser transferida dos pais para terceiros por decisão judicial em processo de tutela, não sendo o procedimento de guarda adequado para essa situação.` },
      { id: "d", text: `O pedido de Herminda é admissível, mas somente após a prévia destituição do poder familiar da mãe de Júlia, sem a qual não é possível deferir a guarda a terceiros.` },
    ]
  }),
  defineQuestion({
    id: "q-oab43-044",
    subjectId: "eca",
    themeId: "",
    examId: "oab-43",
    year: 2025,
    questionNumber: 44,
    difficulty: "medium",
    statement: `Carlos e Mário possuem união estável homoafetiva há mais de 15 anos. Ambos desejam adotar conjuntamente uma criança de 5 anos, que se encontra em acolhimento institucional.

Sobre a adoção no caso descrito, assinale a afirmativa correta.`,
    explanation: "O STF reconheceu as uniões homoafetivas como entidade familiar, equiparando-as às uniões estáveis. Com isso, casais homoafetivos têm o mesmo direito à adoção que casais heteroafetivos.",
    support: "Lei nº 8.069/90, arts. 42 e 43; ADI 4277 e ADPF 132/STF.",
    relatedArticleIds: [],
    tags: [],
    alternatives: [
      { id: "a", text: `A adoção conjunta por Carlos e Mário é inadmissível, pois o ECA só permite a adoção por casais que sejam casados civilmente, e a união estável homoafetiva não gera os mesmos efeitos do casamento para fins de adoção.` },
      { id: "b", text: `A adoção conjunta por Carlos e Mário é possível, mas somente após a conversão da união estável em casamento civil, pois o ECA exige vínculo matrimonial para a adoção conjunta.` },
      { id: "c", text: `A adoção conjunta por Carlos e Mário é possível, mas depende de autorização expressa do Conselho Tutelar, que avaliará a adequação do lar e das condições dos adotantes para a criação da criança.` },
      { id: "d", text: `A adoção conjunta por Carlos e Mário é plenamente possível, pois o STF reconheceu as uniões homoafetivas como entidade familiar, sendo equiparadas às uniões estáveis heteroafetivas para todos os fins legais, incluindo a adoção.`, correct: true },
    ]
  }),
  defineQuestion({
    id: "q-oab43-045",
    subjectId: "consumidor",
    themeId: "",
    examId: "oab-43",
    year: 2025,
    questionNumber: 45,
    difficulty: "medium",
    statement: `A sociedade empresária Fábrica de Alimentos Épsilon Ltda. alterou a embalagem de um de seus produtos alimentícios, mas manteve o mesmo conteúdo. A nova embalagem, contudo, dava a impressão de que o produto tinha maior quantidade do que a efetiva.

Sobre a conduta da Fábrica de Alimentos Épsilon Ltda., assinale a afirmativa correta.`,
    explanation: "O CDC veda a publicidade enganosa e a apresentação de produtos de forma que engane o consumidor sobre a quantidade efetiva do produto. A embalagem que dá impressão de maior quantidade configura prática enganosa.",
    support: "CDC, arts. 31, 37 e 67.",
    relatedArticleIds: [],
    tags: [],
    alternatives: [
      { id: "a", text: `A conduta da Fábrica de Alimentos Épsilon é ilícita, pois o CDC veda a prática de qualquer ato que induza o consumidor a erro quanto às características do produto, incluindo a quantidade, ainda que não haja intenção fraudulenta.`, correct: true },
      { id: "b", text: `A conduta da Fábrica de Alimentos Épsilon é lícita, pois a alteração de embalagem é ato de gestão empresarial que não viola o CDC, desde que o peso e a quantidade reais do produto estejam corretamente indicados no rótulo.` },
      { id: "c", text: `A conduta da Fábrica de Alimentos Épsilon é lícita, mas a empresa está obrigada a inserir, na nova embalagem, aviso de que o produto sofreu redução de quantidade, pelo prazo de seis meses após a alteração.` },
      { id: "d", text: `A conduta da Fábrica de Alimentos Épsilon somente é ilícita se ficar comprovado que houve intenção dolosa de enganar o consumidor, pois o CDC exige o elemento subjetivo para a caracterização de práticas abusivas.` },
    ]
  }),
  defineQuestion({
    id: "q-oab43-046",
    subjectId: "consumidor",
    themeId: "",
    examId: "oab-43",
    year: 2025,
    questionNumber: 46,
    difficulty: "medium",
    statement: `Ângela Silva, com o propósito de celebrar os seus 20 anos de formada, contratou o serviço de uma buffet empresa para a realização de um jantar comemorativo para cinquenta pessoas. No dia do evento, a empresa de buffet não compareceu, causando dano moral e material a Ângela.

Sobre a responsabilidade da empresa de buffet, assinale a afirmativa correta.`,
    explanation: "A responsabilidade do fornecedor de serviços é objetiva no CDC. A empresa de buffet responde pelos danos causados à consumidora, independentemente de culpa.",
    support: "CDC, arts. 14 e 20.",
    relatedArticleIds: [],
    tags: [],
    alternatives: [
      { id: "a", text: `A empresa de buffet somente responderá pelos danos se Ângela demonstrar que houve culpa ou dolo na conduta da empresa, pois a responsabilidade civil por inadimplemento contratual é sempre subjetiva.` },
      { id: "b", text: `A empresa de buffet somente responderá pelos danos materiais sofridos por Ângela, pois o inadimplemento contratual não gera, por si só, direito à indenização por dano moral, que exige prova de efetivo sofrimento psicológico.` },
      { id: "c", text: `A empresa de buffet não poderá ser responsabilizada por danos morais, pois Ângela é pessoa jurídica consumidora e o dano moral somente é cabível para pessoas físicas.` },
      { id: "d", text: `A empresa de buffet responde objetivamente pelos danos materiais e morais sofridos por Ângela, pois o CDC impõe a responsabilidade objetiva do fornecedor de serviços pelos defeitos na prestação, independentemente de culpa.`, correct: true },
    ]
  }),
  defineQuestion({
    id: "q-oab43-047",
    subjectId: "empresarial",
    themeId: "",
    examId: "oab-43",
    year: 2025,
    questionNumber: 47,
    difficulty: "medium",
    statement: `Bento de Abreu e Bernardino de Campos são os únicos sócios e fundadores de uma sociedade limitada. Após alguns anos de atividade, Bernardino de Campos faleceu.

Sobre a continuidade da sociedade após o falecimento de Bernardino de Campos, assinale a afirmativa correta.`,
    explanation: "Com a morte de um sócio em sociedade limitada de dois sócios, a sociedade se torna unipessoal. Pela legislação, a sociedade pode continuar como unipessoal ou ser liquidada. O CC prevê prazo de 180 dias para regularização.",
    support: "CC, arts. 1.033, IV e 1.052, § 1º.",
    relatedArticleIds: [],
    tags: [],
    alternatives: [
      { id: "a", text: `Com a morte de Bernardino, Bento poderá continuar a sociedade como sociedade limitada unipessoal pelo prazo máximo que a lei permitir, ou incorporar os herdeiros de Bernardino como novos sócios, ou ainda liquidar a sociedade.`, correct: true },
      { id: "b", text: `Com a morte de Bernardino, a sociedade é dissolvida automaticamente de pleno direito, pois a sociedade limitada exige no mínimo dois sócios para sua existência, sendo impossível a sua continuação na forma unipessoal.` },
      { id: "c", text: `Com a morte de Bernardino, os herdeiros passam automaticamente a ocupar a posição de sócios, substituindo o falecido na sociedade, independentemente da vontade do sócio sobrevivente Bento.` },
      { id: "d", text: `Com a morte de Bernardino, Bento não pode continuar a sociedade como unipessoal, pois somente empresas de grande porte podem adotar a forma de sociedade limitada unipessoal, conforme a legislação empresarial.` },
    ]
  }),
  defineQuestion({
    id: "q-oab43-048",
    subjectId: "empresarial",
    themeId: "",
    examId: "oab-43",
    year: 2025,
    questionNumber: 48,
    difficulty: "medium",
    statement: `Lucília, Marília e Natividade constituíram uma sociedade empresária sendo estabelecido no contrato social que a administração da sociedade caberia a Marília. Após algum tempo, Natividade pretende ceder suas cotas a Hermínia, terceira estranha à sociedade.

Sobre a cessão de cotas por Natividade, assinale a afirmativa correta.`,
    explanation: "Na sociedade limitada, a cessão de cotas a terceiros estranhos à sociedade depende de não oposição de titulares de mais de 1/4 do capital social, salvo disposição contratual diferente.",
    support: "CC, art. 1.057.",
    relatedArticleIds: [],
    tags: [],
    alternatives: [
      { id: "a", text: `A cessão das cotas de Natividade a Hermínia somente é possível com o consentimento de todas as sócias, pois qualquer modificação na composição societária de uma sociedade limitada exige unanimidade.` },
      { id: "b", text: `A cessão das cotas de Natividade a Hermínia, por se tratar de cessão a terceiro estranho à sociedade, depende de não oposição de titulares de mais de um quarto do capital social, salvo disposição contrária no contrato social.`, correct: true },
      { id: "c", text: `A cessão das cotas de Natividade a Hermínia é livre, pois na sociedade limitada o sócio tem plena autonomia para ceder suas cotas a qualquer pessoa, não se exigindo consentimento das demais sócias.` },
      { id: "d", text: `A cessão das cotas de Natividade a Hermínia somente é possível após a prévia aprovação da administradora Marília, que, por ser a única administradora da sociedade, representa a vontade social para todos os fins.` },
    ]
  }),
  defineQuestion({
    id: "q-oab43-049",
    subjectId: "empresarial",
    themeId: "",
    examId: "oab-43",
    year: 2025,
    questionNumber: 49,
    difficulty: "medium",
    statement: `Uma sociedade simples que adotou um dos tipos societários previstos no Código Civil pretende transformar-se em sociedade empresária limitada.

Sobre a transformação societária no caso descrito, assinale a afirmativa correta.`,
    explanation: "A transformação é a operação pela qual a sociedade passa de um tipo para outro, independentemente de dissolução e liquidação. A transformação de sociedade simples em sociedade limitada é possível, mas exige o consentimento unânime dos sócios.",
    support: "CC, arts. 1.113 a 1.115.",
    relatedArticleIds: [],
    tags: [],
    alternatives: [
      { id: "a", text: `A transformação é possível, dependendo de deliberação da maioria absoluta dos sócios, independentemente do tipo societário adotado pela sociedade simples.` },
      { id: "b", text: `A transformação é impossível, pois a sociedade simples não pode ser transformada em sociedade empresária, sendo necessária a dissolução da primeira e a constituição de uma nova sociedade do tipo desejado.` },
      { id: "c", text: `A transformação é possível, mas somente após a prévia aprovação do Ministério da Fazenda, que verifica se a mudança de tipo societário não gera impacto fiscal negativo para a Fazenda Pública.` },
      { id: "d", text: `A transformação é possível, dependendo do consentimento de todos os sócios, salvo disposição contratual que permita tal operação por deliberação da maioria, não se exigindo dissolução e liquidação da sociedade.`, correct: true },
    ]
  }),
  defineQuestion({
    id: "q-oab43-050",
    subjectId: "empresarial",
    themeId: "",
    examId: "oab-43",
    year: 2025,
    questionNumber: 50,
    difficulty: "medium",
    statement: `Itarana Avícola e Abatedouro S.A. celebrou contrato de alienação fiduciária em garantia com o Banco Alfa, tendo como objeto bem imóvel de propriedade da sociedade empresária.

Sobre a alienação fiduciária de bem imóvel, assinale a afirmativa correta.`,
    explanation: "Na alienação fiduciária de imóvel, o devedor (fiduciante) transfere a propriedade resolúvel ao credor (fiduciário). Em caso de inadimplemento, o credor pode consolidar a propriedade após notificação e purga da mora.",
    support: "Lei nº 9.514/97, arts. 22 a 33.",
    relatedArticleIds: [],
    tags: [],
    alternatives: [
      { id: "a", text: `Na alienação fiduciária de imóvel, o devedor fiduciante transfere a posse direta e indireta do bem ao credor fiduciário, que passa a ser proprietário pleno do imóvel durante toda a vigência do contrato.`, correct: true },
      { id: "b", text: `Na alienação fiduciária de imóvel, o devedor fiduciante transfere a propriedade resolúvel do imóvel ao credor fiduciário, mantendo a posse direta do bem. Em caso de inadimplemento, o credor pode promover a execução extrajudicial após notificação e purga da mora.` },
      { id: "c", text: `Na alienação fiduciária de imóvel, o devedor fiduciante mantém a propriedade do bem, mas constitui a favor do credor fiduciário uma hipoteca de primeiro grau sobre o imóvel, que serve de garantia real para o cumprimento da obrigação.` },
      { id: "d", text: `Na alienação fiduciária de imóvel, em caso de inadimplemento do devedor fiduciante, o credor fiduciário deve necessariamente ingressar com ação judicial de execução hipotecária para consolidar a propriedade do imóvel em seu nome.` },
    ]
  }),
  defineQuestion({
    id: "q-oab43-051",
    subjectId: "processo-civil",
    themeId: "",
    examId: "oab-43",
    year: 2025,
    questionNumber: 51,
    difficulty: "medium",
    statement: `Rodrigo e Thaís, após o início do namoro, assistiam a um show em uma arena. Durante o espetáculo, uma estrutura do palco desabou, causando lesão corporal em ambos. Rodrigo ajuizou ação indenizatória em face da empresa organizadora do evento.

Thaís pretende ingressar no processo como assistente de Rodrigo.

Sobre o pedido de Thaís, assinale a afirmativa correta.`,
    explanation: "O assistente é aquele que possui interesse jurídico na vitória de uma das partes. O interesse meramente econômico ou afetivo não é suficiente para o cabimento da assistência. Thaís teria interesse jurídico próprio se fosse parte da mesma relação jurídica.",
    support: "CPC, arts. 119 a 124.",
    relatedArticleIds: [],
    tags: [],
    alternatives: [
      { id: "a", text: `Thaís pode ingressar no processo como assistente simples de Rodrigo, pois possui interesse jurídico no resultado do processo, já que o mesmo evento que causou dano a Rodrigo também lhe causou lesões e a decisão poderá influenciar eventual ação futura que ela venha a ajuizar.` },
      { id: "b", text: `Thaís não pode ingressar no processo como assistente de Rodrigo, pois o interesse meramente afetivo ou econômico decorrente do namoro não configura interesse jurídico apto a justificar a assistência no processo.` },
      { id: "c", text: `Thaís pode ingressar no processo como assistente litisconsorcial de Rodrigo, pois poderia ter sido autora da mesma ação e possui direito idêntico ao de Rodrigo em face da empresa organizadora do evento que causou os danos.`, correct: true },
      { id: "d", text: `Thaís não pode ingressar no processo como assistente, mas pode apresentar intervenção de terceiro na modalidade de denunciação da lide, para que seja responsabilizada conjuntamente com Rodrigo em eventual pedido reconvencional da empresa organizadora.` },
    ]
  }),
  defineQuestion({
    id: "q-oab43-052",
    subjectId: "processo-civil",
    themeId: "",
    examId: "oab-43",
    year: 2025,
    questionNumber: 52,
    difficulty: "medium",
    statement: `Você, como advogado(a), foi procurado(a) por Joana e por Regina, cada qual com uma demanda distinta a ser proposta em face da mesma empresa ré. As demandas das duas clientes têm como base o mesmo fundamento jurídico, embora os pedidos sejam distintos.

Considerando a possibilidade de reunião das demandas em um único processo, assinale a afirmativa correta.`,
    explanation: "O litisconsórcio ativo facultativo é possível quando as demandas tenham origem no mesmo fundamento de fato ou de direito. O juiz pode separar o processo se a reunião causar embaraço.",
    support: "CPC, arts. 113 e 117.",
    relatedArticleIds: [],
    tags: [],
    alternatives: [
      { id: "a", text: `As demandas de Joana e Regina podem ser reunidas em litisconsórcio ativo facultativo, pois têm como base o mesmo fundamento jurídico, ainda que os pedidos sejam distintos, sendo vedado ao juiz, nessa hipótese, separar os processos.` },
      { id: "b", text: `As demandas de Joana e Regina não podem ser reunidas em litisconsórcio, pois o litisconsórcio ativo somente é admitido quando as partes têm pedidos idênticos, o que não ocorre no caso em tela.` },
      { id: "c", text: `As demandas de Joana e Regina não podem ser reunidas em litisconsórcio quando os pedidos são distintos, devendo cada qual ajuizar sua própria ação e cabendo ao juiz, eventualmente, reunir os processos por conexão.` },
      { id: "d", text: `As demandas de Joana e Regina podem ser reunidas em litisconsórcio ativo facultativo, pois têm como base o mesmo fundamento jurídico, podendo o juiz, contudo, limitar o litisconsórcio se o número excessivo de partes comprometer a rápida solução do litígio.`, correct: true },
    ]
  }),
  defineQuestion({
    id: "q-oab43-053",
    subjectId: "processo-civil",
    themeId: "",
    examId: "oab-43",
    year: 2025,
    questionNumber: 53,
    difficulty: "medium",
    statement: `Maria ajuizou ação em face da União, com pedido de condenação desta à realização de tratamento médico específico. A União apresentou contestação, arguindo preliminar de ilegitimidade passiva, sustentando que a competência para prestação do serviço de saúde no caso seria do Estado ou do Município.

Sobre a questão da legitimidade passiva no caso descrito, assinale a afirmativa correta.`,
    explanation: "A competência para a prestação de serviços de saúde é solidária entre União, Estados e Municípios, nos termos do STF. Qualquer dos entes pode ser demandado.",
    support: "CF/88, art. 196; Tema 793/STF.",
    relatedArticleIds: [],
    tags: [],
    alternatives: [
      { id: "a", text: `A União tem legitimidade passiva para figurar no polo passivo da ação, pois a obrigação de prestação de serviços de saúde é solidária entre os entes federativos, podendo o autor demandar qualquer deles.` },
      { id: "b", text: `A União não tem legitimidade passiva na ação, pois, conforme o STF, em matéria de saúde pública, a legitimidade passiva é definida de acordo com a divisão de competências estabelecida pela Lei Orgânica da Saúde, que atribui ao Estado e ao Município a prestação de serviços de saúde de média e baixa complexidade.` },
      { id: "c", text: `A União tem legitimidade passiva, e a demanda poderá prosseguir com a inclusão do Estado e do Município no polo passivo, formando litisconsórcio passivo necessário entre os três entes, sem o qual o processo deve ser extinto sem resolução do mérito.`, correct: true },
      { id: "d", text: `A União não tem legitimidade passiva isoladamente, mas pode ser demandada conjuntamente com Estado e Município em litisconsórcio passivo facultativo, a critério do autor.` },
    ]
  }),
  defineQuestion({
    id: "q-oab43-054",
    subjectId: "processo-civil",
    themeId: "",
    examId: "oab-43",
    year: 2025,
    questionNumber: 54,
    difficulty: "medium",
    statement: `Henrique propôs ação condenatória de alimentos em face de Juliano, seu filho maior de idade, alegando que não tem condições de prover seu próprio sustento em razão de doença grave.

Juliano foi citado e apresentou contestação, sustentando que a ação deveria ter sido proposta também em face dos outros dois filhos do autor, seus irmãos.

Sobre a questão processual levantada por Juliano, assinale a afirmativa correta.`,
    explanation: "A obrigação alimentar entre filhos e pai é divisível. O credor pode demandar um só dos co-obrigados, que poderá chamar os demais ao processo.",
    support: "CC, art. 1.698; CPC, art. 339.",
    relatedArticleIds: [],
    tags: [],
    alternatives: [
      { id: "a", text: `Juliano tem razão, pois a ação de alimentos deve necessariamente ser proposta em face de todos os filhos do alimentando, formando litisconsórcio passivo necessário, sob pena de extinção do processo sem resolução do mérito.`, correct: true },
      { id: "b", text: `Juliano não tem razão, pois a obrigação alimentar é solidária entre os filhos, podendo Henrique demandar apenas um deles pelo valor integral dos alimentos que necessita.` },
      { id: "c", text: `Juliano não tem razão, pois Henrique pode propor a ação em face de apenas um filho, mas Juliano pode chamar os irmãos ao processo para que a obrigação seja repartida entre eles, na forma prevista pelo Código de Processo Civil.` },
      { id: "d", text: `Juliano não tem razão, pois a ação de alimentos pode ser proposta em face de qualquer dos obrigados, sendo desnecessária a formação de litisconsórcio passivo com os demais filhos.` },
    ]
  }),
  defineQuestion({
    id: "q-oab43-055",
    subjectId: "processo-civil",
    themeId: "",
    examId: "oab-43",
    year: 2025,
    questionNumber: 55,
    difficulty: "medium",
    statement: `Anacleto ajuizou ação de indenização contra a sociedade empresária de transporte coletivo por danos causados em acidente. A ré foi regularmente citada, mas não apresentou contestação no prazo legal.

Sobre os efeitos da revelia no caso, assinale a afirmativa correta.`,
    explanation: "A revelia produz o efeito de presumir verdadeiros os fatos afirmados pelo autor, mas não produz efeitos quando o litígio versar sobre direitos indisponíveis ou quando a petição inicial não estiver acompanhada de instrumento que a lei considere indispensável à prova do ato.",
    support: "CPC, arts. 344 e 345.",
    relatedArticleIds: [],
    tags: [],
    alternatives: [
      { id: "a", text: `A revelia produz automaticamente a procedência do pedido de Anacleto, pois a falta de contestação implica a procedência do pedido, independentemente de qualquer instrução probatória.` },
      { id: "b", text: `A revelia produz o efeito de presumir verdadeiros os fatos afirmados por Anacleto na petição inicial, não impedindo, porém, o julgamento de improcedência do pedido se os fatos presumidamente verdadeiros não forem suficientes para o acolhimento do pedido.`, correct: true },
      { id: "c", text: `A revelia não produz qualquer efeito na ação de indenização por acidente de transporte coletivo, pois o litígio envolve responsabilidade civil objetiva, que é matéria de direito indisponível, afastando a presunção de veracidade dos fatos.` },
      { id: "d", text: `A revelia produz o efeito de presumir verdadeiros os fatos afirmados por Anacleto, e o juiz deverá proferir sentença de procedência imediata, sem necessidade de instrução probatória, pois os fatos estão incontroversos.` },
    ]
  }),
  defineQuestion({
    id: "q-oab43-056",
    subjectId: "processo-civil",
    themeId: "",
    examId: "oab-43",
    year: 2025,
    questionNumber: 56,
    difficulty: "medium",
    statement: `João e Marina celebraram contrato de arrendamento com previsão de cláusula compromissória. Surgiu um litígio entre eles sobre o cumprimento do contrato, e João pretende ingressar com ação judicial para resolver a questão.

Marina arguiu, em contestação, a existência da cláusula compromissória.

Sobre a arbitragem no caso descrito, assinale a afirmativa correta.`,
    explanation: "A existência de cláusula compromissória impõe ao juiz a extinção do processo sem resolução do mérito. O juiz só pode prosseguir se a parte que arguiu a arbitragem não comparecer à instituição ou se a cláusula for nula.",
    support: "Lei nº 9.307/96, arts. 8º e 20; CPC, art. 485, VII.",
    relatedArticleIds: [],
    tags: [],
    alternatives: [
      { id: "a", text: `A alegação de Marina é improcedente, pois a existência de cláusula compromissória não impede que as partes busquem a tutela jurisdicional estatal, sendo a arbitragem apenas uma alternativa ao processo judicial.` },
      { id: "b", text: `O juiz deve extinguir o processo sem resolução do mérito, acolhendo a alegação de Marina, pois a cláusula compromissória tem o efeito de derrogar a competência do Poder Judiciário para o litígio decorrente do contrato que a contém.`, correct: true },
      { id: "c", text: `O juiz deve suspender o processo e determinar às partes que se submetam à arbitragem, retomando o feito após a conclusão do procedimento arbitral para homologar o laudo eventualmente proferido.` },
      { id: "d", text: `O juiz deve prosseguir com o processo, pois a cláusula compromissória somente impede o ingresso em juízo se as partes a ratificarem expressamente após o surgimento do litígio, o que não ocorreu no caso.` },
    ]
  }),
  defineQuestion({
    id: "q-oab43-057",
    subjectId: "penal",
    themeId: "",
    examId: "oab-43",
    year: 2025,
    questionNumber: 57,
    difficulty: "medium",
    statement: `Um grupo realizava uma manifestação social pacífica contra o aumento do custo de vida em frente a um supermercado. Alguns manifestantes decidiram bloquear a entrada do supermercado para impedir o funcionamento do estabelecimento, causando prejuízo ao proprietário.

Sobre a conduta dos manifestantes que bloquearam a entrada, assinale a afirmativa correta.`,
    explanation: "O bloqueio à entrada de estabelecimento comercial pode configurar o crime de constrangimento ilegal ou outros crimes, dependendo dos meios utilizados. A manifestação pacífica é constitucionalmente protegida, mas seus excessos configuram ilícito.",
    support: "CP, arts. 146 e 155; CF/88, art. 5º, XVI.",
    relatedArticleIds: [],
    tags: [],
    alternatives: [
      { id: "a", text: `Os manifestantes que bloquearam a entrada não praticaram crime, pois o exercício do direito de manifestação e de greve é constitucionalmente garantido, tornando atípica qualquer conduta praticada durante manifestações sociais.` },
      { id: "b", text: `Os manifestantes que bloquearam a entrada praticaram crime de dano, pois o bloqueio ao funcionamento do estabelecimento causou prejuízo econômico ao proprietário, configurando o tipo penal.` },
      { id: "c", text: `Os manifestantes que bloquearam a entrada praticaram, em tese, o crime de constrangimento ilegal, pois impediram o proprietário e os clientes do supermercado de exercerem livremente seus direitos, mediante violência ou grave ameaça.`, correct: true },
      { id: "d", text: `Os manifestantes que bloquearam a entrada praticaram crime de esbulho possessório, pois privaram o proprietário do supermercado da posse e do uso do estabelecimento comercial durante o período do bloqueio.` },
    ]
  }),
  defineQuestion({
    id: "q-oab43-058",
    subjectId: "penal",
    themeId: "",
    examId: "oab-43",
    year: 2025,
    questionNumber: 58,
    difficulty: "medium",
    statement: `Oliver, que já fora condenado por crime culposo anteriormente e que tem 25 anos de idade, conduzia seu veículo em alta velocidade quando perdeu o controle e atropelou Astolfo, que veio a falecer.

Sobre a dosimetria da pena aplicável a Oliver, assinale a afirmativa correta.`,
    explanation: "No homicídio culposo na direção de veículo automotor, a pena é aumentada se o agente conduz sob influência de álcool ou substância psicoativa, pratica excesso de velocidade ou comete outras infrações de trânsito. A condenação anterior por crime culposo é circunstância agravante.",
    support: "CTB, arts. 302 e 312; CP, art. 61, I.",
    relatedArticleIds: [],
    tags: [],
    alternatives: [
      { id: "a", text: `Oliver não será considerado reincidente, pois a reincidência pressupõe condenação anterior por crime doloso, e a condenação anterior por crime culposo não gera reincidência para efeitos de dosimetria da pena.` },
      { id: "b", text: `Oliver não será considerado reincidente, pois a reincidência exige que o agente seja condenado por crime da mesma natureza, e um homicídio culposo no trânsito não é da mesma natureza que o crime culposo anteriormente praticado.` },
      { id: "c", text: `Oliver poderá ser considerado reincidente, mas somente se a condenação anterior por crime culposo tiver transitado em julgado antes do cometimento do atual delito e o prazo depurador de cinco anos não tiver decorrido.` },
      { id: "d", text: `Oliver poderá ser considerado reincidente, pois a reincidência abrange condenação anterior por qualquer crime, incluindo os crimes culposos, desde que a sentença condenatória anterior tenha transitado em julgado antes do cometimento do novo crime.`, correct: true },
    ]
  }),
  defineQuestion({
    id: "q-oab43-059",
    subjectId: "penal",
    themeId: "",
    examId: "oab-43",
    year: 2025,
    questionNumber: 59,
    difficulty: "medium",
    statement: `Rodrigo, brasileiro, obteve bolsa de estudos para intercâmbio de seis meses em país estrangeiro. Durante sua estada no exterior, Rodrigo praticou, naquele país, crime de estelionato contra cidadão estrangeiro, foi processado e absolvido pela Justiça local.

Ao retornar ao Brasil, o Ministério Público pretende processá-lo pelo mesmo crime.

Sobre a aplicação da lei penal brasileira no caso, assinale a afirmativa correta.`,
    explanation: "Pelo princípio da extraterritorialidade condicionada, a lei penal brasileira se aplica a crimes cometidos por brasileiros no exterior, mas a punibilidade fica extinta se o agente foi absolvido no estrangeiro. Esta é uma condição negativa de punibilidade.",
    support: "CP, arts. 7º, II, 'b', e 8º.",
    relatedArticleIds: [],
    tags: [],
    alternatives: [
      { id: "a", text: `O Ministério Público não pode processar Rodrigo no Brasil, pois, tendo sido absolvido no país estrangeiro onde praticou o crime, fica extinta a punibilidade no Brasil, em razão do princípio ne bis in idem.` },
      { id: "b", text: `O Ministério Público pode processar Rodrigo no Brasil, pois a extraterritorialidade da lei penal brasileira é incondicionada para crimes praticados por brasileiros no exterior, independentemente de qualquer decisão da Justiça estrangeira.` },
      { id: "c", text: `O Ministério Público não pode processar Rodrigo no Brasil, pois a absolvição no estrangeiro é uma das condições que afastam a aplicação da extraterritorialidade condicionada da lei penal brasileira ao caso.`, correct: true },
      { id: "d", text: `O Ministério Público pode processar Rodrigo no Brasil, mas a pena que lhe for aplicada deverá ser atenuada em razão da absolvição no estrangeiro, com desconto do período eventualmente cumprido em prisão cautelar no exterior.` },
    ]
  }),
  defineQuestion({
    id: "q-oab43-060",
    subjectId: "penal",
    themeId: "",
    examId: "oab-43",
    year: 2025,
    questionNumber: 60,
    difficulty: "medium",
    statement: `João mora em Ipanema e, há dois anos, faz aula de futevôlei na praia de Ipanema todos os dias pela manhã. Certo dia, ao chegar à praia, João encontrou sua rede e seus pertences que usava para as aulas sendo usados por Márcio, um desconhecido, sem autorização.

João retirou os pertences das mãos de Márcio pela força, recuperando-os.

Sobre a conduta de João, assinale a afirmativa correta.`,
    explanation: "O desforço imediato é permitido pelo Código Civil como forma de autotutela possessória, desde que o esbulho seja recente e que a força utilizada seja proporcional. Em matéria penal, pode configurar exercício regular de direito.",
    support: "CC, art. 1.210, § 1º; CP, art. 23, III.",
    relatedArticleIds: [],
    tags: [],
    alternatives: [
      { id: "a", text: `João agiu de acordo com o direito, pois praticou o chamado desforço imediato ou possessório, que é permitido ao possuidor para manter ou restituir a posse, desde que o faça logo e sem excesso.`, correct: true },
      { id: "b", text: `João praticou crime de constrangimento ilegal, pois retirou os pertences pela força de Márcio, sem que houvesse autorização judicial para a retomada dos bens.` },
      { id: "c", text: `João praticou crime de lesão corporal se, ao retirar os pertences, tiver causado algum dano físico a Márcio, pois o desforço imediato somente exclui a ilicitude quanto à apreensão dos bens, não autorizando qualquer uso de força física contra a pessoa.` },
      { id: "d", text: `João não praticou crime, mas sua conduta é ilícita do ponto de vista civil, pois o desforço imediato somente é permitido ao proprietário do bem, e João é apenas possuidor dos pertences, não proprietário.` },
    ]
  }),
  defineQuestion({
    id: "q-oab43-061",
    subjectId: "penal",
    themeId: "",
    examId: "oab-43",
    year: 2025,
    questionNumber: 61,
    difficulty: "medium",
    statement: `Ateneu e Moisés combinaram a prática conjunta de um crime de furto. Moisés ficou do lado de fora do estabelecimento comercial para vigiar, enquanto Ateneu entrou e subtraiu os bens. Ao saírem, foram flagrados pela polícia e presos.

Sobre a responsabilidade penal de Moisés, assinale a afirmativa correta.`,
    explanation: "No concurso de pessoas, cada coautor ou partícipe responde pelo crime na medida de sua culpabilidade. O vigilante externo pode ser considerado coautor ou partícipe, dependendo do domínio funcional do fato.",
    support: "CP, arts. 29 e 30.",
    relatedArticleIds: [],
    tags: [],
    alternatives: [
      { id: "a", text: `Moisés não praticou crime, pois ficou apenas do lado de fora e não entrou no estabelecimento, não tendo contribuído diretamente para a subtração dos bens.` },
      { id: "b", text: `Moisés praticou crime de favorecimento pessoal, pois seu papel de vigia visava auxiliar Ateneu a escapar após a prática do furto, sem contribuir para a consumação do delito.` },
      { id: "c", text: `Moisés é partícipe do furto praticado por Ateneu, respondendo pelo crime nos termos do art. 29 do Código Penal, na medida de sua participação, sendo possível que sua pena seja reduzida se for reconhecida participação de menor importância.` },
      { id: "d", text: `Moisés é coautor do furto praticado por Ateneu, pois no concurso de pessoas o vigia externo divide o domínio funcional do fato com aquele que executa a subtração, respondendo pelo mesmo crime e com a mesma pena.`, correct: true },
    ]
  }),
  defineQuestion({
    id: "q-oab43-062",
    subjectId: "penal",
    themeId: "",
    examId: "oab-43",
    year: 2025,
    questionNumber: 62,
    difficulty: "medium",
    statement: `Após ter seu pedido de aumento salarial negado, Sara, empregada doméstica, decidiu se vingar de sua empregadora. Com esse intuito, Sara colocou veneno na comida da empregadora, que, ao ingeri-la, ficou gravemente enferma e ficou internada no hospital por duas semanas.

Sobre a conduta de Sara, assinale a afirmativa correta.`,
    explanation: "Sara praticou tentativa de homicídio qualificado (veneno como meio insidioso), pois agiu com dolo de matar e utilizou veneno como meio de execução. O resultado morte não ocorreu por circunstâncias alheias à sua vontade.",
    support: "CP, arts. 14, II; 121, § 2º, III.",
    relatedArticleIds: [],
    tags: [],
    alternatives: [
      { id: "a", text: `Sara praticou o crime de lesão corporal gravíssima, pois a vítima ficou gravemente enferma por duas semanas, configurando o resultado qualificador de enfermidade incurável.` },
      { id: "b", text: `Sara praticou o crime de lesão corporal grave, pois o envenenamento causou incapacidade para as atividades habituais por mais de trinta dias, sem que tenha havido dolo de matar.` },
      { id: "c", text: `Sara praticou tentativa de homicídio qualificado pelo emprego de veneno, pois agiu com dolo de matar, e a vítima não veio a óbito por circunstâncias alheias à vontade de Sara.`, correct: true },
      { id: "d", text: `Sara praticou o crime de envenenamento de água potável ou substância alimentícia, previsto no Código Penal como crime contra a saúde pública, por ter colocado veneno em substância alimentícia.` },
    ]
  }),
  defineQuestion({
    id: "q-oab43-063",
    subjectId: "processo-penal",
    themeId: "",
    examId: "oab-43",
    year: 2025,
    questionNumber: 63,
    difficulty: "medium",
    statement: `Gabriela se dirigiu a uma agência da Caixa Econômica Federal, empresa pública federal, e, simulando ser servidora do banco, obteve da gerente informações sigilosas de clientes e realizou transferências indevidas de valores.

Sobre a competência para processar e julgar a conduta de Gabriela, assinale a afirmativa correta.`,
    explanation: "A Caixa Econômica Federal é empresa pública federal. Crimes praticados em detrimento de bens, serviços ou interesses da União ou de suas entidades autárquicas e empresas públicas são da competência da Justiça Federal.",
    support: "CF/88, art. 109, IV; Súmula 42/STJ.",
    relatedArticleIds: [],
    tags: [],
    alternatives: [
      { id: "a", text: `A competência é da Justiça Estadual, pois os crimes contra instituições financeiras devem ser julgados no local da agência bancária onde ocorreu o delito, independentemente da natureza pública ou privada da instituição.` },
      { id: "b", text: `A competência é da Justiça Estadual, pois as condutas praticadas contra empresas públicas federais somente atraem a competência federal quando há prejuízo direto à União, e não a suas entidades.` },
      { id: "c", text: `A competência é da Justiça Estadual, pois a Caixa Econômica Federal, embora seja empresa pública federal, atua em regime de competição com o setor privado, equiparando-se, para fins de competência penal, às instituições financeiras privadas.` },
      { id: "d", text: `A competência é da Justiça Federal, pois o crime foi praticado em detrimento da Caixa Econômica Federal, empresa pública federal, atraindo a competência constitucional da Justiça Federal para processar e julgar a conduta.`, correct: true },
    ]
  }),
  defineQuestion({
    id: "q-oab43-064",
    subjectId: "processo-penal",
    themeId: "",
    examId: "oab-43",
    year: 2025,
    questionNumber: 64,
    difficulty: "medium",
    statement: `Marcos foi denunciado como incurso nas penas do delito de furto simples. Durante a instrução criminal, Marcos confessou espontaneamente a prática do crime ao magistrado, em audiência.

Sobre os efeitos processuais da confissão de Marcos, assinale a afirmativa correta.`,
    explanation: "A confissão é meio de prova que deve ser apreciada junto com as demais provas do processo. Não é prova tarifada nem vincula o julgador. A confissão judicial serve como atenuante genérica.",
    support: "CPP, arts. 197 a 200; CP, art. 65, III, 'd'.",
    relatedArticleIds: [],
    tags: [],
    alternatives: [
      { id: "a", text: `A confissão de Marcos tem valor probatório absoluto, implicando automaticamente a condenação pelo crime de furto, pois a lei processual penal atribui à confissão qualificada o efeito de prova plena do fato confessado.` },
      { id: "b", text: `A confissão de Marcos deve ser valorada livremente pelo juiz, em conjunto com as demais provas do processo, não tendo valor absoluto nem podendo, por si só, fundamentar uma condenação, e servirá como atenuante na dosimetria da pena caso haja condenação.`, correct: true },
      { id: "c", text: `A confissão de Marcos vincula o juiz à prolação de sentença condenatória, pois configura reconhecimento expresso do acusado quanto à sua culpabilidade, não podendo ser retratada após ser feita em audiência.` },
      { id: "d", text: `A confissão de Marcos é inválida procesualmente, pois a confissão somente tem valor probatório quando acompanhada de advogado que a ratifique, e a confissão prestada diretamente ao juiz sem assessoria técnica não produz efeitos.` },
    ]
  }),
  defineQuestion({
    id: "q-oab43-065",
    subjectId: "processo-penal",
    themeId: "",
    examId: "oab-43",
    year: 2025,
    questionNumber: 65,
    difficulty: "medium",
    statement: `Fábio foi submetido a julgamento pelo Tribunal do Júri e, ao final, condenado pelos jurados à pena de 10 anos de reclusão. O advogado de Fábio interpôs recurso de apelação, sustentando que a decisão dos jurados era manifestamente contrária à prova dos autos.

Sobre a possibilidade de revisão da decisão do Tribunal do Júri, assinale a afirmativa correta.`,
    explanation: "Cabe apelação da decisão do Tribunal do Júri quando a decisão dos jurados for manifestamente contrária à prova dos autos. O Tribunal pode anular o julgamento e determinar novo julgamento, mas apenas uma vez por esse fundamento.",
    support: "CPP, art. 593, III, 'd', e § 3º.",
    relatedArticleIds: [],
    tags: [],
    alternatives: [
      { id: "a", text: `A apelação é cabível e, se o Tribunal de Justiça reconhecer que a decisão foi manifestamente contrária à prova dos autos, poderá absolver Fábio diretamente ou reduzir a pena, sem necessidade de novo julgamento pelo Tribunal do Júri.`, correct: true },
      { id: "b", text: `A apelação é cabível somente para rever a pena aplicada, pois o mérito das decisões do Tribunal do Júri é soberano e insuscetível de revisão pelo Tribunal de Justiça, que não pode questionar o resultado da votação dos jurados.` },
      { id: "c", text: `A apelação é cabível e, se o Tribunal de Justiça reconhecer que a decisão foi manifestamente contrária à prova dos autos, deverá sujeitar Fábio a novo julgamento pelo Tribunal do Júri, e tal cassação somente pode ocorrer uma única vez.` },
      { id: "d", text: `A apelação é inadmissível, pois as decisões do Tribunal do Júri somente podem ser impugnadas por habeas corpus ou revisão criminal, não cabendo apelação contra o mérito das decisões dos jurados.` },
    ]
  }),
  defineQuestion({
    id: "q-oab43-066",
    subjectId: "processo-penal",
    themeId: "",
    examId: "oab-43",
    year: 2025,
    questionNumber: 66,
    difficulty: "medium",
    statement: `Leda se candidatou a uma vaga de emprego na sociedade empresária X. Ao preencher a ficha cadastral, Leda foi obrigada a declarar se havia sido processada criminalmente ou se tinha antecedentes criminais. Leda informou que tinha dois processos criminais extintos pela prescrição da pretensão punitiva.

Sobre a utilização dessas informações pela empresa, assinale a afirmativa correta.`,
    explanation: "A extinção da punibilidade pela prescrição não afasta a existência de antecedentes criminais para fins não penais. Porém, para fins de contratação trabalhista, a exigência de certidão criminal de antecedentes pode configurar discriminação.",
    support: "CF/88, art. 5º, LVII; Lei nº 9.029/95.",
    relatedArticleIds: [],
    tags: [],
    alternatives: [
      { id: "a", text: `A empresa pode utilizar as informações sobre os processos criminais de Leda como critério de seleção, pois a divulgação de antecedentes criminais é lícita e a empresa tem liberdade para definir os requisitos de contratação de seus funcionários.` },
      { id: "b", text: `A empresa pode exigir a informação sobre antecedentes criminais, mas somente pode considerá-la critério de seleção se houver nexo direto entre a natureza do crime e as atribuições do cargo pretendido por Leda.` },
      { id: "c", text: `A empresa não pode utilizar as informações sobre os processos extintos pela prescrição como critério de seleção, pois a extinção da punibilidade apaga os efeitos penais e civis dos fatos, sendo vedada qualquer referência a eles.` },
      { id: "d", text: `A exigência de declaração de antecedentes criminais pela empresa e sua utilização como critério de seleção é prática discriminatória vedada pela legislação, salvo quando houver exigência legal específica para o cargo ou quando o crime anterior for diretamente relacionado às funções a serem exercidas.`, correct: true },
    ]
  }),
  defineQuestion({
    id: "q-oab43-067",
    subjectId: "processo-penal",
    themeId: "",
    examId: "oab-43",
    year: 2025,
    questionNumber: 67,
    difficulty: "medium",
    statement: `Bernardo agrediu Carolina, sua ex-companheira, causando-lhe lesões corporais leves. Bernardo foi preso em flagrante. Ao se manifestar no processo, Carolina declarou que não desejava representar contra Bernardo.

Sobre a ação penal aplicável e os efeitos da manifestação de Carolina, assinale a afirmativa correta.`,
    explanation: "Nos crimes de violência doméstica e familiar contra a mulher (Lei Maria da Penha), a ação penal é pública incondicionada, não dependendo de representação da vítima.",
    support: "Lei nº 11.340/06, art. 41; Súmula 542/STJ; ADI 4424/STF.",
    relatedArticleIds: [],
    tags: [],
    alternatives: [
      { id: "a", text: `A ação penal é pública condicionada à representação da vítima, e a manifestação de Carolina de que não deseja representar implica a extinção da punibilidade de Bernardo pela renúncia ao direito de representação.`, correct: true },
      { id: "b", text: `A ação penal é pública incondicionada, nos termos da Lei Maria da Penha e do entendimento do STF, de modo que a manifestação de Carolina de que não deseja representar não impede o prosseguimento da ação penal contra Bernardo.` },
      { id: "c", text: `A ação penal é pública condicionada à representação da vítima, e a manifestação de Carolina de que não deseja representar é causa de extinção da punibilidade, mas somente se ela confirmar sua recusa em audiência preliminar perante o juiz.` },
      { id: "d", text: `A ação penal é privada, e a manifestação de Carolina de que não deseja representar equivale ao perdão do ofendido, extinguindo a punibilidade de Bernardo se este aceitar expressamente o perdão.` },
    ]
  }),
  defineQuestion({
    id: "q-oab43-068",
    subjectId: "processo-penal",
    themeId: "",
    examId: "oab-43",
    year: 2025,
    questionNumber: 68,
    difficulty: "medium",
    statement: `Em uma audiência, o Ministério Público indicou como testemunha a psiquiatra que havia atendido o réu durante tratamento psiquiátrico. A defesa se opôs à oitiva da psiquiatra, alegando que as informações obtidas no tratamento eram cobertas pelo sigilo profissional.

Sobre a questão do sigilo profissional no caso, assinale a afirmativa correta.`,
    explanation: "O médico é proibido de depor sobre fatos de que tomou conhecimento no exercício da profissão, salvo se desobrigado pelo interessado, pela autoridade competente ou se tiver de fazê-lo para a defesa própria.",
    support: "CPP, art. 207.",
    relatedArticleIds: [],
    tags: [],
    alternatives: [
      { id: "a", text: `A psiquiatra é obrigada a depor, pois o interesse público na persecução penal prevalece sobre o sigilo profissional médico, especialmente quando as informações são relevantes para o deslinde da causa.` },
      { id: "b", text: `A psiquiatra é proibida de depor sobre os fatos de que tomou conhecimento no exercício profissional, salvo se o réu a desobrigar do sigilo, sendo vedado ao juiz compeli-la a depor.`, correct: true },
      { id: "c", text: `A psiquiatra pode depor, mas somente sobre os aspectos do tratamento que não envolvam confissões ou revelações do paciente sobre crimes, limitando-se a informar diagnósticos e procedimentos médicos adotados.` },
      { id: "d", text: `A psiquiatra é obrigada a depor em processo criminal, pois o sigilo médico cede diante do interesse da Justiça na apuração de fatos criminosos, prevalecendo o dever de colaboração com a Justiça sobre o sigilo profissional.` },
    ]
  }),
  defineQuestion({
    id: "q-oab43-069",
    subjectId: "previdenciario",
    themeId: "",
    examId: "oab-43",
    year: 2025,
    questionNumber: 69,
    difficulty: "medium",
    statement: `Maria, empregada doméstica desde julho de 1990, no deslocamento para seu trabalho, sofreu acidente que a incapacitou temporariamente para o trabalho por trinta dias.

Sobre o direito de Maria ao benefício por incapacidade temporária (auxílio-doença), assinale a afirmativa correta.`,
    explanation: "Os empregados domésticos são segurados obrigatórios do RGPS desde a LC 150/2015. O acidente de trajeto é equiparado ao acidente de trabalho, garantindo o direito ao auxílio-acidente ou afastamento. A carência para acidente é zero.",
    support: "Lei nº 8.213/91, arts. 19, 21 e 59; LC nº 150/2015.",
    relatedArticleIds: [],
    tags: [],
    alternatives: [
      { id: "a", text: `Maria não tem direito ao benefício por incapacidade temporária, pois empregadas domésticas não são seguradas do Regime Geral de Previdência Social e devem buscar indenização diretamente junto à empregadora pelo acidente sofrido.` },
      { id: "b", text: `Maria tem direito ao benefício por incapacidade temporária, pois o acidente de trajeto é equiparado ao acidente de trabalho, sendo segurada obrigatória do RGPS, e a carência para benefícios decorrentes de acidente é zero.`, correct: true },
      { id: "c", text: `Maria tem direito ao benefício por incapacidade temporária, mas somente se comprovar que contribuía ao INSS há pelo menos doze meses, pois o prazo de carência para empregadas domésticas é igual ao dos demais segurados.` },
      { id: "d", text: `Maria não tem direito ao benefício por incapacidade temporária, pois o acidente de trajeto somente equipara-se ao acidente de trabalho para os empregados urbanos com vínculo empregatício sujeito à CLT, não alcançando os empregados domésticos.` },
    ]
  }),
  defineQuestion({
    id: "q-oab43-070",
    subjectId: "previdenciario",
    themeId: "",
    examId: "oab-43",
    year: 2025,
    questionNumber: 70,
    difficulty: "medium",
    statement: `Lucas, segurado obrigatório do Regime Geral de Previdência Social (RGPS), contribuiu durante 20 anos e solicitou aposentadoria por tempo de contribuição ao INSS. O INSS indeferiu o pedido, alegando que a aposentadoria por tempo de contribuição foi extinta pela Reforma da Previdência.

Sobre o pedido de Lucas, assinale a afirmativa correta.`,
    explanation: "A EC 103/2019 (Reforma da Previdência) extinguiu a aposentadoria por tempo de contribuição para os que não tinham direito adquirido até a data de publicação da emenda. Para os segurados que já tinham tempo de contribuição antes da EC 103/2019, há regras de transição.",
    support: "EC nº 103/2019; Lei nº 8.213/91.",
    relatedArticleIds: [],
    tags: [],
    alternatives: [
      { id: "a", text: `O INSS tem razão, pois a EC 103/2019 extinguiu definitivamente a aposentadoria por tempo de contribuição para todos os segurados, não havendo qualquer exceção ou regra de transição que permita o acesso a esse benefício.` },
      { id: "b", text: `O INSS tem razão quanto à extinção da aposentadoria por tempo de contribuição, mas Lucas poderá requerer aposentadoria por idade ou por pontos, dependendo do tempo de contribuição e da idade, conforme as regras de transição da Reforma da Previdência.` },
      { id: "c", text: `O INSS não tem razão, pois Lucas tem direito adquirido à aposentadoria por tempo de contribuição em razão dos seus 20 anos de contribuição anteriores à EC 103/2019, não podendo a reforma atingir situações jurídicas já constituídas.` },
      { id: "d", text: `O INSS tem razão quanto ao fundamento, mas Lucas pode se valer das regras de transição previstas na EC 103/2019, que garantem a possibilidade de aposentadoria progressiva para os segurados que já possuíam tempo de contribuição antes da reforma.`, correct: true },
    ]
  }),
  defineQuestion({
    id: "q-oab43-071",
    subjectId: "trabalhista",
    themeId: "",
    examId: "oab-43",
    year: 2025,
    questionNumber: 71,
    difficulty: "medium",
    statement: `Rogéria, sócia de uma sociedade empresária especializada em festas infantis, realizava pessoalmente diversas atividades para a empresa, como decoração, organização e animação dos eventos. Rogéria passou a pleitear reconhecimento de vínculo empregatício com a sociedade empresária.

Sobre a possibilidade do reconhecimento do vínculo empregatício, assinale a afirmativa correta.`,
    explanation: "O sócio que presta serviços à própria sociedade, em regra, não pode ter reconhecido vínculo empregatício com ela, pois a condição de sócio é incompatível com a subordinação necessária à configuração da relação de emprego.",
    support: "CLT, art. 3º; TST, jurisprudência sobre sócio-empregado.",
    relatedArticleIds: [],
    tags: [],
    alternatives: [
      { id: "a", text: `O vínculo empregatício de Rogéria com a sociedade empresária deve ser reconhecido, pois os requisitos da relação de emprego (pessoalidade, onerosidade, habitualidade e subordinação) estão presentes na prestação de serviços descrita.` },
      { id: "b", text: `O vínculo empregatício de Rogéria com a sociedade empresária não pode ser reconhecido, pois o prestador de serviços autônomo e o sócio de sociedade empresária não podem simultaneamente ostentar a condição de empregado da mesma pessoa jurídica.` },
      { id: "c", text: `O vínculo empregatício de Rogéria com a sociedade empresária não pode ser reconhecido enquanto ela ostentar a condição de sócia, pois o sócio, como integrante da estrutura societária, não pode ser simultaneamente empregado da mesma empresa, em razão da ausência de subordinação jurídica.`, correct: true },
      { id: "d", text: `O vínculo empregatício de Rogéria com a sociedade empresária pode ser reconhecido parcialmente, apenas quanto às atividades que não sejam próprias da condição de sócia, como decoração e animação, que são atividades-fim da empresa.` },
    ]
  }),
  defineQuestion({
    id: "q-oab43-072",
    subjectId: "trabalhista",
    themeId: "",
    examId: "oab-43",
    year: 2025,
    questionNumber: 72,
    difficulty: "medium",
    statement: `Sérgio foi contratado, em 2022, por uma indústria mecânica para receber treinamento como aprendiz, nos termos da CLT. O contrato de aprendizagem foi firmado pelo prazo de dois anos.

Sobre o contrato de aprendizagem de Sérgio, assinale a afirmativa correta.`,
    explanation: "O contrato de aprendizagem tem prazo máximo de dois anos. O aprendiz deve ter entre 14 e 24 anos. A rescisão antecipada somente é possível nos casos previstos em lei.",
    support: "CLT, arts. 428 a 433.",
    relatedArticleIds: [],
    tags: [],
    alternatives: [
      { id: "a", text: `O contrato de aprendizagem de Sérgio não pode ter prazo fixo superior a um ano, pois a CLT estabelece que o prazo máximo do contrato de aprendizagem é de doze meses.` },
      { id: "b", text: `O contrato de aprendizagem de Sérgio é válido, pois a CLT admite o contrato por prazo determinado de até dois anos, podendo ser rescindido antecipadamente apenas nas hipóteses previstas em lei, como desempenho insuficiente ou falta disciplinar.`, correct: true },
      { id: "c", text: `O contrato de aprendizagem de Sérgio pode ser rescindido a qualquer tempo por iniciativa do empregador, sem qualquer ônus, pois os contratos de aprendizagem não geram estabilidade ou indenização em caso de rescisão antecipada.` },
      { id: "d", text: `O contrato de aprendizagem de Sérgio é nulo, pois a CLT veda a contratação de aprendizes por prazo superior a um ano, sendo o prazo máximo fixado em doze meses renováveis por igual período mediante aditamento contratual.` },
    ]
  }),
  defineQuestion({
    id: "q-oab43-073",
    subjectId: "trabalhista",
    themeId: "",
    examId: "oab-43",
    year: 2025,
    questionNumber: 73,
    difficulty: "medium",
    statement: `As irmãs Margarida, Hortência e Rosa aderiram ao plano de demissão voluntária (PDV) de sua empresa empregadora. Posteriormente, as três ingressaram com reclamação trabalhista, buscando o reconhecimento de que a adesão ao PDV não implicou quitação total das verbas trabalhistas.

Sobre a validade da quitação decorrente do PDV, assinale a afirmativa correta.`,
    explanation: "O STF, no julgamento do Tema 152, fixou que a adesão a plano de demissão voluntária implica quitação ampla e irrestrita de todas as parcelas decorrentes do contrato de emprego, desde que o PDV seja estabelecido por negociação coletiva.",
    support: "CLT, art. 477-B; Tema 152/STF.",
    relatedArticleIds: [],
    tags: [],
    alternatives: [
      { id: "a", text: `A adesão ao PDV das irmãs implica quitação total das verbas trabalhistas, inclusive das decorrentes de eventual ilicitude, se o plano foi homologado em juízo ou perante o sindicato da categoria, pois a homologação confere validade plena à transação.`, correct: true },
      { id: "b", text: `A adesão ao PDV das irmãs não implica quitação ampla das verbas trabalhistas, pois a quitação no contrato de trabalho somente alcança as verbas expressamente discriminadas no termo de rescisão, não se admitindo quitação genérica por adesão a programa de demissão voluntária.` },
      { id: "c", text: `A adesão ao PDV das irmãs implica quitação total das verbas trabalhistas se o plano foi instituído por norma coletiva (acordo ou convenção), mas não implica quitação das verbas trabalhistas decorrentes de descumprimento legal pelo empregador.` },
      { id: "d", text: `A adesão ao PDV das irmãs não implica quitação das verbas trabalhistas, pois o STF entendeu que PDVs não negociados individualmente e sem homologação judicial não têm o condão de quitar definitivamente as obrigações do contrato de trabalho.` },
    ]
  }),
  defineQuestion({
    id: "q-oab43-074",
    subjectId: "trabalhista",
    themeId: "",
    examId: "oab-43",
    year: 2025,
    questionNumber: 74,
    difficulty: "medium",
    statement: `Em sede de sentença prolatada nos autos de reclamação trabalhista, na fase de conhecimento, o juízo condenou a reclamada ao pagamento de verbas trabalhistas. A reclamada interpôs recurso ordinário, sem recolher o depósito recursal.

Sobre os efeitos da ausência do depósito recursal, assinale a afirmativa correta.`,
    explanation: "Questão anulada pela FGV.",
    support: "",
    relatedArticleIds: [],
    tags: [],
    alternatives: [
      { id: "a", text: `O recurso ordinário deve ser recebido mesmo sem o depósito recursal, pois o depósito recursal é exigência inconstitucional que viola o princípio do acesso à justiça e o duplo grau de jurisdição.` },
      { id: "b", text: `A ausência do depósito recursal implica a deserção do recurso ordinário, que deve ser declarada pelo juízo a quo antes da remessa dos autos ao Tribunal Regional do Trabalho.` },
      { id: "c", text: `A ausência do depósito recursal não implica deserção automática, devendo o juízo intimar a reclamada para regularizar o depósito no prazo de cinco dias, sob pena de não conhecimento do recurso.` },
      { id: "d", text: `A ausência do depósito recursal implica a deserção do recurso, mas o reclamante pode solicitar ao juízo que execute provisoriamente a sentença, independentemente do trânsito em julgado.` },
    ]
  }),
  defineQuestion({
    id: "q-oab43-075",
    subjectId: "trabalhista",
    themeId: "",
    examId: "oab-43",
    year: 2025,
    questionNumber: 75,
    difficulty: "medium",
    statement: `Determinada sociedade empresária firmou acordo coletivo com o sindicato dos trabalhadores, estabelecendo jornada de trabalho de 10 horas diárias, com compensação das horas extras na semana seguinte.

Sobre a validade do acordo coletivo no caso descrito, assinale a afirmativa correta.`,
    explanation: "A CLT e a jurisprudência do TST permitem a negociação de jornadas acima das 8 horas diárias por instrumentos coletivos, mas há limites constitucionais que não podem ser superados por negociação coletiva, como a jornada máxima de 10 horas diárias.",
    support: "CLT, art. 59-A; CF/88, art. 7º, XIII e XIV.",
    relatedArticleIds: [],
    tags: [],
    alternatives: [
      { id: "a", text: `O acordo coletivo é inválido, pois a Constituição Federal veda qualquer negociação coletiva que estabeleça jornada superior a 8 horas diárias, sendo nula qualquer norma coletiva que contrarie esse limite constitucional.` },
      { id: "b", text: `O acordo coletivo é válido, pois a CLT autoriza a negociação de jornadas de até 10 horas por dia mediante acordo individual com cada trabalhador, sendo ainda mais ampla a possibilidade por instrumento coletivo.` },
      { id: "c", text: `O acordo coletivo é inválido, pois a compensação de horas extras somente pode ser feita dentro da própria semana em que foram prestadas, sendo vedado o banco de horas com compensação na semana seguinte.` },
      { id: "d", text: `O acordo coletivo é válido, pois a CLT, com a reforma trabalhista, admite a negociação coletiva de jornada de até 10 horas diárias, desde que não ultrapasse 44 horas semanais ou que haja compensação no período estabelecido.`, correct: true },
    ]
  }),
  defineQuestion({
    id: "q-oab43-076",
    subjectId: "processual-trabalho",
    themeId: "",
    examId: "oab-43",
    year: 2025,
    questionNumber: 76,
    difficulty: "medium",
    statement: `Você, como advogado(a), foi procurado(a) por Orlando, ex-funcionário de uma sociedade empresária, que pretende ajuizar reclamação trabalhista para cobrar verbas rescisórias que não foram pagas quando da extinção do contrato de trabalho.

Orlando informa que foi dispensado sem justa causa há dois anos e três meses.

Sobre a situação descrita, assinale a afirmativa correta.`,
    explanation: "O prazo prescricional para reclamação trabalhista é de dois anos após a extinção do contrato de trabalho, para créditos dos últimos cinco anos. O prazo de dois anos e três meses indica que a pretensão de Orlando está prescrita.",
    support: "CF/88, art. 7º, XXIX; CLT, art. 11.",
    relatedArticleIds: [],
    tags: [],
    alternatives: [
      { id: "a", text: `Orlando pode ajuizar a reclamação trabalhista normalmente, pois o prazo prescricional para créditos trabalhistas é de cinco anos após a extinção do contrato de trabalho, não havendo prescrição no caso.` },
      { id: "b", text: `Orlando não pode mais ajuizar a reclamação trabalhista, pois transcorreu o prazo prescricional de dois anos após a extinção do contrato de trabalho previsto na Constituição Federal, tendo se operado a prescrição bienal trabalhista.` },
      { id: "c", text: `Orlando pode ajuizar a reclamação trabalhista, pois o prazo prescricional de dois anos é contado da data do ajuizamento da ação, e não da data da extinção do contrato de trabalho.`, correct: true },
      { id: "d", text: `Orlando não pode mais ajuizar a reclamação trabalhista, mas pode requerer ao INSS o reconhecimento das verbas não pagas para fins previdenciários, pois o prazo prescricional previdenciário é diferente do trabalhista.` },
    ]
  }),
  defineQuestion({
    id: "q-oab43-077",
    subjectId: "processual-trabalho",
    themeId: "",
    examId: "oab-43",
    year: 2025,
    questionNumber: 77,
    difficulty: "medium",
    statement: `José Luiz ajuizou reclamação trabalhista em face de Lojas Internacionais S.A. O juízo trabalhista designou audiência una para tentativa de conciliação, instrução e julgamento. Na audiência, José Luiz não compareceu.

Sobre os efeitos do não comparecimento de José Luiz à audiência, assinale a afirmativa correta.`,
    explanation: "O não comparecimento do reclamante à audiência acarreta o arquivamento da reclamação trabalhista. O reclamante pode repropor a ação, mas deverá arcar com as custas do processo arquivado.",
    support: "CLT, arts. 844 e 847.",
    relatedArticleIds: [],
    tags: [],
    alternatives: [
      { id: "a", text: `José Luiz será considerado revel, e o processo prosseguirá com a presumida veracidade dos fatos narrados na reclamação trabalhista, em razão da aplicação subsidiária do CPC ao processo do trabalho.` },
      { id: "b", text: `O processo será arquivado pela ausência de José Luiz à audiência inaugural, e ele somente poderá repropor a ação se pagar as custas do processo arquivado, conforme estabelece a CLT.` },
      { id: "c", text: `José Luiz pode justificar sua ausência no prazo de quarenta e oito horas após a audiência, e o juízo poderá redesignar nova audiência, sem qualquer consequência para o processo.`, correct: true },
      { id: "d", text: `O processo será suspenso por trinta dias para que José Luiz justifique sua ausência ou compareça a nova audiência, após o que, caso não compareça, o processo será arquivado definitivamente.` },
    ]
  }),
  defineQuestion({
    id: "q-oab43-078",
    subjectId: "processual-trabalho",
    themeId: "",
    examId: "oab-43",
    year: 2025,
    questionNumber: 78,
    difficulty: "medium",
    statement: `Você, na qualidade de advogado(a) de Pedro, ajuizou reclamação trabalhista em face de sua ex-empregadora. O juízo trabalhista proferiu sentença julgando improcedentes os pedidos de Pedro. Você pretende interpor recurso ordinário.

Sobre o recurso ordinário na Justiça do Trabalho, assinale a afirmativa correta.`,
    explanation: "O recurso ordinário trabalhista tem prazo de 8 dias. No processo trabalhista, os prazos em dias são computados em dias úteis, conforme a reforma trabalhista.",
    support: "CLT, arts. 895 e 775.",
    relatedArticleIds: [],
    tags: [],
    alternatives: [
      { id: "a", text: `O recurso ordinário deverá ser interposto no prazo de oito dias úteis, contados da intimação da sentença, pois a reforma trabalhista estabeleceu a contagem em dias úteis para os prazos processuais trabalhistas.`, correct: true },
      { id: "b", text: `O recurso ordinário deverá ser interposto no prazo de quinze dias, contados da intimação da sentença, pois o processo trabalhista adotou, pela reforma de 2017, os prazos recursais do CPC.` },
      { id: "c", text: `O recurso ordinário deverá ser interposto no prazo de oito dias corridos, contados da intimação da sentença, pois o processo trabalhista ainda utiliza a contagem em dias corridos para os prazos recursais.` },
      { id: "d", text: `O recurso ordinário deverá ser interposto no prazo de oito dias, contados da publicação da sentença no Diário Oficial, pois no processo trabalhista a intimação se dá apenas pela publicação oficial.` },
    ]
  }),
  defineQuestion({
    id: "q-oab43-079",
    subjectId: "processual-trabalho",
    themeId: "",
    examId: "oab-43",
    year: 2025,
    questionNumber: 79,
    difficulty: "medium",
    statement: `Em sede de reclamação trabalhista, você é advogado(a) da parte autora, Antônio, que obteve sentença favorável condenando a reclamada ao pagamento de R$ 30.000,00. A reclamada interpôs recurso ordinário e o Tribunal Regional do Trabalho, por maioria, manteve a sentença. A reclamada pretende recorrer ao Tribunal Superior do Trabalho.

Sobre o cabimento do recurso de revista no caso descrito, assinale a afirmativa correta.`,
    explanation: "O recurso de revista é cabível para impugnar acórdãos do TRT em recurso ordinário, quando houver contrariedade à súmula ou OJ do TST, violação de lei federal ou divergência jurisprudencial entre TRTs. Para causas de até 40 salários mínimos, o recurso é ainda mais restrito.",
    support: "CLT, arts. 896 e 896-A.",
    relatedArticleIds: [],
    tags: [],
    alternatives: [
      { id: "a", text: `O recurso de revista não é cabível, pois o acórdão do TRT foi proferido por maioria, e o recurso de revista somente é admissível contra acórdãos proferidos por unanimidade de votos nos Tribunais Regionais do Trabalho.` },
      { id: "b", text: `O recurso de revista é cabível para questionar o acórdão do TRT, desde que a reclamada demonstre que o acórdão contraria súmula ou orientação jurisprudencial do TST, ou viola literalmente dispositivo de lei federal ou da Constituição Federal.` },
      { id: "c", text: `O recurso de revista não é cabível nesse caso específico, pois a condenação é inferior a quarenta salários mínimos, o que impede a interposição de recurso de revista pelo rito ordinário, salvo se demonstrada violação direta à Constituição Federal.` },
      { id: "d", text: `O recurso de revista é cabível, e a reclamada poderá levantar qualquer questão de fato ou de direito decidida pelo TRT, pois o TST tem competência para reavaliar amplamente as decisões dos Tribunais Regionais do Trabalho em grau de recurso.`, correct: true },
    ]
  }),
  defineQuestion({
    id: "q-oab43-080",
    subjectId: "processual-trabalho",
    themeId: "",
    examId: "oab-43",
    year: 2025,
    questionNumber: 80,
    difficulty: "medium",
    statement: `Em execução que tramita perante a 120ª Vara do Trabalho de Salvador, o exequente requereu a penhora de determinado imóvel pertencente ao executado. O executado, então, opos embargos à execução, alegando que o imóvel é bem de família.

Sobre os embargos à execução no processo trabalhista, assinale a afirmativa correta.`,
    explanation: "No processo trabalhista, a impugnação à execução é feita por embargos à execução, com prazo de 5 dias após a garantia do juízo. O bem de família é impenhorável nos termos da Lei nº 8.009/90.",
    support: "CLT, art. 884; Lei nº 8.009/90, art. 1º.",
    relatedArticleIds: [],
    tags: [],
    alternatives: [
      { id: "a", text: `Os embargos à execução são cabíveis no processo trabalhista, devendo o executado demonstrar que o imóvel é bem de família nos termos da lei, o que torna a penhora indevida e impõe ao juízo o seu cancelamento após o recebimento dos embargos.`, correct: true },
      { id: "b", text: `Os embargos à execução são inadmissíveis no processo trabalhista para questionar a penhora de bem de família, pois tal matéria deve ser suscitada por simples petição nos autos, sem necessidade de instauração de incidente processual.` },
      { id: "c", text: `Os embargos à execução somente podem ser interpostos se o executado garantir o juízo integralmente, e a alegação de impenhorabilidade do bem de família não dispensa o depósito do valor integral da condenação como condição de admissibilidade dos embargos.` },
      { id: "d", text: `Os embargos à execução são cabíveis no processo trabalhista, mas a alegação de impenhorabilidade do bem de família somente pode ser feita pelo próprio devedor, sendo vedada aos seus cônjuge, herdeiros ou outros interessados.` },
    ]
  }),
];
