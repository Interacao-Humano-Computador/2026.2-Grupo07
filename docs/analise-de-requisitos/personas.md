<div align="center" markdown="1">

<p align="center"><b>Tabela de Contribuição</b></p>

| Membro | Contribuição |
| :--- | :--- |
| Daniel da Silva Batista | Fundamentação teórica (Cooper, 1999; Pruitt & Adlin, 2006; Barbosa e Silva, 2010), estruturação da metodologia de personas e anatomia arquetípica, modelagem narrativa e validação empírica da Persona 1 (Maria Helena dos Santos) via [Entrevista Gravada USR-01](https://youtu.be/YkYvCZDidaY) e organização do elenco para a equipe. |
| Arthur Sismene Carvalho | Revisão do elenco de personas e modelagem narrativa integral da Persona 3 (Thiago Moraes Albuquerque), fundamentada nos dados documentais consolidados em `DOC-03`. |
| João Vitor Sales Ibiapina | Revisão das diretrizes do elenco e preparação para a modelagem da persona individual. |
| Leonardo da Silva Lopes Júnior | Modelagem narrativa integral da Persona 4 (Renata Cristina Freitas), fundamentada na Análise Documental DOC-04 e nos hábitos do Perfil 2 (Concurseiro Ativo). |
| Pedro Rocha Ferreira Lima | Definição dos critérios de priorização das personas, modelagem narrativa da Persona 2 (Lucas Ferreira Rocha) fundamentada em DOC-02 e revisão técnica geral. |
| Gemini | Auxílio na estruturação textual e formatação do artefato em Markdown (conforme Política de Uso de IA). |

<p align="center" style="font-size: 0.85em; margin-top: -0.6em;"><b>Fonte:</b> Daniel da Silva Batista (2026).</p>

</div>

# Personas

## 1. Introdução

No design de interação e na engenharia de requisitos de IHC, o uso de **Personas** constitui uma técnica fundamental para humanizar e materializar os dados abstratos coletados no [Perfil do Usuário](perfil-de-usuario.md). Introduzido seminalmente por Alan Cooper (1999) e amplamente consolidado por Pruitt e Adlin (2006) e Barbosa e Silva (2010), o conceito de persona consiste na concepção de arquétipos ou personagens fictícios ricos em detalhes comportamentais, motivacionais e contextuais, construídos a partir de dados empíricos rigorosamente levantados com usuários reais.

Ao personalizar o público-alvo por meio de nomes, dados de vida, objetivos, modelos mentais e frustrações, a equipe de desenvolvimento consegue tomar decisões de design empáticas e consistentes, evitando o erro clássico do *"usuário elástico"* (aquele cujas preferências e habilidades mudam convenientemente de acordo com as vontades ou intuições do projetista).

## 2. Metodologia de Construção

A elaboração das personas do portal **PCI Concursos** seguiu as diretrizes preconizadas por Barbosa e Silva (2010, Cap. 8.2), Pruitt e Adlin (2006) e Courage e Baxter (2005):

1. **Fundamentação em Dados Empíricos:** As personas não decorrem de suposições abstratas da equipe; originam-se das características demográficas, hábitos tecnológicos e comportamentos de domínio levantados nas investigações documentais (IPEA, IBGE, INEP, ABRES, Cetic.br) e nas entrevistas em campo gravadas com usuários reais.
2. **Definição de Papéis e Foco de Uso:** Cada persona possui objetivos claros, tarefas preponderantes e posturas operacionais frente ao portal.
3. **Classificação Estratégica:**
    * **Persona Primária:** É o foco central das decisões de design; suas necessidades e metas não são plenamente atendidas caso o sistema seja projetado visando apenas outro perfil.
    * **Persona Secundária:** Possui necessidades amplamente contempladas pelo escopo da persona primária, mas introduz restrições ergonômicas ou requisitos específicos que merecem atenção refinada.

### 2.1 Anatomia Formal da Persona no Padrão de IHC

Conforme enfatizam Pruitt e Adlin (2006) e Barbosa e Silva (2010), **uma persona não é uma ficha cadastral ou uma tabela burocrática de atributos**, mas sim um **retrato arquetípico e narrativo vivo**. Para conferir verossimilhança psicológica e guiar eficazmente o design, cada persona deve ser declarada a partir dos seguintes blocos constitutivos:

* **Identidade e Lema (*Quote*):** Nome fictício, dados arquetípicos representativos e uma citação textual marcante em primeira pessoa que sintetiza a mentalidade, urgência e atitude da persona frente ao domínio.
* **Contexto Sociodemográfico:** Idade, gênero, escolaridade, ocupação profissional, localização geográfica e circunstâncias de vida que condicionam sua disponibilidade de estudo e investimento financeiro.
* **Relação Tecnológica e Dispositivos:** Equipamentos de uso diário (desktop, notebook, smartphone), sistema operacional, qualidade do acesso à internet e nível de letramento digital.
* **Objetivos e Motivações (*Goals*):** O que a persona visa alcançar a médio e longo prazo (estabilidade, ascensão de carreira, primeiro emprego) e o que pretende realizar concretamente no portal (localizar editais, treinar com cadernos de prova, resolver simulados, assistir a aulas).
* **Comportamentos e Atitudes:** Estratégias de navegação, modelos mentais de busca e tolerância a atritos de interface.
* **Dores, Frustrações e Barreiras de Usabilidade (*Pain Points*):** Dificuldades ergonômicas reais que enfrenta ao usar o PCI Concursos atual (excesso de banners comerciais, links dúbios, ausência de filtros regionais, formulários desprovidos de validação).
* **Rastreabilidade e Base Empírica:** Identificação explícita da fonte empírica (entrevista gravada e/ou análise documental secundária) da qual os dados da persona foram extraídos e validados.

## 3. Elenco de Personas

### 3.1 Justificativa da Quantidade de Personas

O elenco do projeto é composto por **cinco personas individuais**, sendo exatamente **uma persona modelada por cada integrante da equipe** a partir dos dados empíricos coletados em sua respectiva sessão de campo ou investigação documental. Essa quantidade cumpre o critério de participação individual da disciplina e situa-se dentro da faixa recomendada por Barbosa e Silva (2010, p. 180), que estabelece a definição de 3 a 12 personas para manter o foco do design sem sobrecarregar a tomada de decisão da equipe.

A Tabela 1 a seguir consolida a matriz de rastreabilidade do elenco de personas:

<div align="center" markdown="1">

<p align="center"><b>Tabela 1: Elenco e Matriz de Rastreabilidade das Personas</b></p>

| ID | Tipo | Nome da Persona | Perfil Vinculado | Membro Responsável | Base Empírica Principal |
| :---: | :---: | :--- | :---: | :--- | :--- |
| **PER-01** | Primária | Maria Helena dos Santos | Perfil 2: Concurseiro Ativo / Adulto e Maduro | Daniel da Silva Batista | [Entrevista Gravada USR-01](https://youtu.be/YkYvCZDidaY) e DOC-01 (IPEA/IBGE) |
| **PER-02** | Secundária | Lucas Ferreira Rocha | Perfil 1: Estudante Universitário / Recém-formado | Pedro Rocha Ferreira Lima | Análise Documental DOC-02 (PEP/MGI e DODF) |
| **PER-03** | Primária | Thiago Moraes Albuquerque | Perfil 1: Estudante Universitário / Iniciante | Arthur Sismene Carvalho | Análise Documental DOC-03 (INEP, ABRES e IBGE) |
| **PER-04** | Primária | Renata Cristina Freitas | Perfil 2: Concurseiro Ativo / Adulto e Maduro | Leonardo da Silva Lopes Júnior | Análise Documental DOC-04 (Cetic.br, ABED e Comscore) |
| **PER-05** | *A definir* | *A definir pelo responsável* | *A definir (Perfil 1, 2 ou 3)* | João Vitor Sales Ibiapina | *A definir após condução empírica individual* |

<p align="center" style="font-size: 0.85em; margin-top: -0.6em;"><b>Fonte:</b> Daniel da Silva Batista e Pedro Rocha Ferreira Lima (2026), com base no Perfil do Usuário e nas fontes empíricas do projeto.</p>

</div>

---

## 4. Detalhamento das Personas

### 4.1 Persona 1 — Maria Helena dos Santos (*Responsável: Daniel da Silva Batista*)

> *"Eu preciso de um site direto, onde eu encontre o edital e a prova certa para imprimir sem ter que adivinhar qual botão verde é o download real e qual é propaganda com vírus."*

* **Classificação no Design:** **Persona Primária** (Representante do Perfil 2: Concurseiro Ativo / Adulto e Maduro).
* **Perfil Demográfico:** 53 anos, feminino, Ensino Superior Completo (Pedagogia), residente em Taguatinga, Distrito Federal (DF).
* **Ocupação Atual:** Profissional autônoma / prestadora de serviços, em processo de transição de carreira para o serviço público.
* **Ambiente e Equipamentos Tecnológicos:** Utiliza prioritariamente notebook pessoal (Windows) em sua mesa de estudos e smartphone intermediário para acompanhar notícias durante o dia; conexão banda larga residencial estável.
* **Frequência e Rotina de Acesso:** Quase diária (visita o portal de 4 a 5 vezes por semana, com maior intensidade no período noturno e aos fins de semana).
* **Rastreabilidade e Base Empírica:** Modelada e validada empiricamente a partir da [Entrevista Gravada USR-01](https://youtu.be/YkYvCZDidaY) (06 min 19 s), realizada em 25/09/2026, e respaldada pelos microdados do IPEA e IBGE documentados em `DOC-01`.

#### 4.1.1 Objetivos e Motivações no Sistema
* **Conquistar Estabilidade Profissional:** Busca aprovação em concurso público de nível superior ou médio (foco em carreiras administrativas de órgãos do DF, tribunais ou agências reguladoras), visando segurança financeira e previdenciária sólida para o futuro.
* **Localização Rápida de Editais e Prazos:** Acessa o PCI Concursos com o objetivo prioritário de monitorar abertura de inscrições, valores de taxas, requisitos de cargos e eventuais retificações de datas.
* **Treino Prático com Material Autêntico:** Utiliza o portal para baixar cadernos de provas anteriores da banca organizadora e folhas de respostas (gabaritos oficiais em PDF) para resolver no papel com caneta e marca-texto.

#### 4.1.2 Habilidades e Atitudes Frente à Tecnologia
* **Perfil Tecnológico:** Usuária prática e cautelosa. Sabe operar o sistema operacional, abrir navegadores, utilizar abas e manipular arquivos em PDF. Contudo, não possui intimidade com ferramentas de inspeção e evita atalhos avançados.
* **Comportamento Cauteloso:** Possui receio permanente de clicar em anúncios fraudulentos que simulam mensagens do sistema ou botões chamativos de *"DOWNLOAD GRÁTIS"*, com medo de danificar o notebook ou instalar programas indesejados (*malware*).
* **Demanda de Acessibilidade Visual:** Apresenta início de presbiopia (vista cansada), necessitando de fontes com boa legibilidade e bom contraste para leitura prolongada, sentindo incômodo e fadiga visual com interfaces saturadas de tabelas compactas e propagandas piscando.

#### 4.1.3 Principais Dores e Frustrações com o PCI Concursos
* **Poluição Publicitária Excessiva:** Desorientação causada pela profusão de banners comerciais do Google Ads espalhados no topo, nas laterais e intercalados no conteúdo editorial.
* **Armadilhas de Clique (*Dark Patterns* acidentais):** Dificuldade em distinguir os links de texto legítimos do arquivo PDF dos grandes botões gráficos promocionais de anunciantes que induzem ao erro.
* **Falta de Filtros Refinados:** Dificuldade para filtrar com rapidez editais ativos específicos da região Centro-Oeste / DF sem ter que rolar extensas páginas repletas de textos condensados.

---

### 4.2 Persona 2 — Lucas Ferreira Rocha (*Responsável: Pedro Rocha Ferreira Lima*)

> *"Eu moro em Brasília e quero passar em um concurso daqui; não adianta o site me mostrar dezenas de prefeituras do interior de Goiás ou Mato Grosso misturadas com os editais do DF."*

* **Classificação no Design:** **Persona Secundária** (Representante do Perfil 1: Concurseiro Iniciante / Estudante Jovem e Recém-formado).
* **Perfil Demográfico:** 24 anos, masculino, Ensino Superior Completo (Administração - UnB), residente em Águas Claras, Distrito Federal (DF).
* **Ocupação Atual:** Assistente administrativo em escritório privado, em busca do primeiro cargo público de nível superior.
* **Ambiente e Equipamentos Tecnológicos:** Smartphone (Android) de uso constante para consultas rápidas ao longo do dia e notebook (Windows) para resolver questões e ler editais à noite.
* **Frequência e Rotina de Acesso:** Diária e frequente (acessa o portal de 3 a 5 vezes ao dia, aproveitando pausas de trabalho e períodos de estudo noturno).
* **Rastreabilidade e Base Empírica:** Modelada a partir da Análise Documental `DOC-02` (dados abertos do PEP/MGI e do DODF sobre a concentração e dinâmica de certames no DF).

#### 4.2.1 Objetivos e Motivações no Sistema
* **Conquistar a Primeira Aprovação no DF:** Almeja ingressar no serviço público em cargos administrativos de nível superior ou intermediário em órgãos distritais ou federais sediados em Brasília (ex.: PPGG-DF, SLU, ministérios ou agências reguladoras), garantindo estabilidade e remuneração inicial competitiva sem necessidade de mudança de estado.
* **Filtragem Exclusiva de Vagas Locais:** Acessa o PCI Concursos para encontrar certames com lotação estrita no Distrito Federal, necessitando de filtros que eliminem o ruído de municípios distantes da região Centro-Oeste.
* **Monitoramento Ativo de Cronogramas e Retificações:** Precisa acompanhar com agilidade se as bancas publicaram alterações de datas de prova, prorrogações do período de inscrição ou mudanças no conteúdo programático de certames já em andamento.

#### 4.2.2 Habilidades e Atitudes Frente à Tecnologia
* **Perfil Tecnológico:** Usuário tecnófilo, nativo digital e hiperconectado. Opera com facilidade smartphones e notebooks, utiliza múltiplos navegadores, atalhos de teclado e ferramentas de nuvem.
* **Comportamento Imediatista:** Busca informações resumidas e instantâneas; possui baixa tolerância a navegações lentas, páginas com excesso de texto condensado ou falta de filtros reativos.
* **Atenção aos Detalhes Jurídicos:** Por ter estudado Direito Administrativo na faculdade, lê com rigor as publicações oficiais e preocupa-se com o cumprimento estrito dos prazos recursais e de inscrição.

#### 4.2.3 Principais Dores e Frustrações com o PCI Concursos
* **Mistura Regional Indesejada:** Na aba "Centro-Oeste", os concursos do DF ficam intercalados com pequenos municípios de MT, MS e GO, forçando uma varredura visual exaustiva para encontrar vagas de Brasília.
* **Ausência de Alertas Visuais de Retificação:** O portal não sinaliza com clareza quando uma notícia de concurso foi alterada por uma retificação de edital, exigindo que o usuário abra manualmente os documentos para checar se prazos foram modificados.
* **Interface Desatualizada para Dispositivos Móveis:** Dificuldade de navegar nas tabelas de concursos pelo smartphone durante o deslocamento de metrô ou intervalos de trabalho.

---

### 4.3 Persona 3 — Thiago Moraes Albuquerque (*Responsável: Arthur Sismene Carvalho*)

> *"Eu tenho quarenta minutos de ônibus todo dia, dava pra matar umas dez questões nesse tempo. Mas no celular eu erro de clicar, perco o que respondi e no final nem sei quantas acertei."*

* **Classificação no Design:** **Persona Primária** (Representante do Perfil 1: Estudante Universitário / Iniciante).
* **Perfil Demográfico:** 21 anos, masculino, Ensino Superior Incompleto (5º semestre de Administração, curso noturno em instituição privada), residente na Ceilândia, Distrito Federal (DF).
* **Ocupação Atual:** Estudante; complementa a renda com trabalho intermitente de meio período no comércio.
* **Ambiente e Equipamentos Tecnológicos:** Smartphone Android intermediário com plano de dados 4G limitado (uso em pé ou sentado no transporte público); notebook compartilhado com a família nos fins de semana.
* **Frequência e Rotina de Acesso:** Irregular e em rajadas curtas (2 a 3 vezes por semana), concentrada no trajeto de ônibus e nos intervalos entre as aulas noturnas.
* **Rastreabilidade e Base Empírica:** Modelada a partir dos dados consolidados na Análise Documental `DOC-03` (INEP, ABRES e IBGE), vinculada à carência estrutural de estágios e simulados responsivos.

#### 4.3.1 Objetivos e Motivações no Sistema
* **Conquistar o Primeiro Vínculo Formal:** Thiago precisa cumprir o estágio obrigatório previsto na matriz curricular do curso e enxerga o setor público como destino desejável pela previsibilidade de horário, o que lhe permitiria conciliar trabalho e aulas noturnas.
* **Aproveitar Janelas Curtas de Tempo Morto para Estudar:** Diferentemente do concurseiro com rotina estruturada de estudos, Thiago não dispõe de blocos longos e contínuos. Sua estratégia é fragmentar o estudo em sessões de 10 a 40 minutos durante os deslocamentos, resolvendo questões objetivas pelo celular (*microlearning*).
* **Calibrar o Próprio Nível de Preparo:** Como iniciante no domínio, Thiago ainda não sabe dimensionar a distância entre seu conhecimento atual e a exigência real das bancas. Recorre aos simulados para obter um diagnóstico quantitativo de desempenho que oriente sua preparação.

#### 4.3.2 Habilidades e Atitudes Frente à Tecnologia
* **Perfil Tecnológico:** Nativo digital e tecnófilo. Opera múltiplas abas com desenvoltura, digita rapidamente em teclado virtual, reconhece padrões de interface consolidados em aplicativos e espera respostas imediatas do sistema. Domina plenamente o meio digital, mas desconhece os termos específicos de concursos.
* **Baixa Tolerância a Atrito:** Sua fluência tecnológica se traduz em impaciência. Abandona fluxos que exijam mais de três ou quatro toques sem retorno visível de progresso.
* **Restrição Material de Acesso:** A barreira de Thiago é material: plano de dados limitado, bateria disputada ao longo do dia, conexão instável em trajeto e uso predominante do aparelho com uma única mão em transporte coletivo em movimento.
* **Desconhecimento do Vocabulário do Domínio:** Não distingue banca organizadora de órgão contratante e desconhece que "estágio probatório" não se refere a estágio estudantil — ambiguidade terminológica que o conduz a resultados de busca irrelevantes.

#### 4.3.3 Principais Dores e Frustrações com o PCI Concursos
* **Ausência de Oferta para o seu Estágio de Carreira:** O portal não indexa vagas de estágio. A seção "Vagas" lista exclusivamente cargos efetivos e nenhum menu contempla estágio ou programas de ingresso.
* **Simulado Desenhado para Desktop:** A seção de simulados apresenta uma árvore extensa de disciplinas sem oferecer configuração de sessão por quantidade de questões nem cronômetro. No celular, os alvos de toque reduzidos e o deslocamento de layout por anúncios causam cliques involuntários em alternativas erradas.
* **Ausência de Retorno Consolidado de Desempenho:** Ao encerrar a sessão de questões, Thiago não recebe placar agregado de acertos, histórico de evolução ou comentários explicativos dos itens errados.
* **Perda de Progresso por Queda de Conexão:** Como estuda em trânsito, oscilações de sinal interrompem a sessão. Sem preservação automática do estado da tarefa, o progresso é perdido.

---

### 4.4 Persona 4 — Renata Cristina Freitas (*Responsável: Leonardo da Silva Lopes Júnior*)

> *"Como eu trabalho o dia todo, meu estudo precisa ser objetivo. Eu uso as pausas para assistir a videoaulas pontuais e dependo de alertas no meu e-mail para não perder prazos de inscrição."*

* **Classificação no Design:** **Persona Primária** (Representante do Perfil 2: Concurseiro Ativo / Adulto e Maduro).
* **Perfil Demográfico:** 31 anos, feminino, Ensino Superior Completo (Administração de Empresas), residente em Águas Claras, Distrito Federal (DF).
* **Ocupação Atual:** Assistente Administrativa em empresa de logística (CLT, 44 horas semanais).
* **Ambiente e Equipamentos Tecnológicos:** Smartphone Android intermediário (uso intensivo com fones de ouvido durante intervalos de trabalho); computador desktop no escritório e notebook pessoal em casa.
* **Frequência e Rotina de Acesso:** Diária (acessa nos intervalos de almoço e consulta o e-mail várias vezes ao dia em busca de editais).
* **Rastreabilidade e Base Empírica:** Modelada e fundamentada empiricamente a partir da Análise Documental `DOC-04` (TIC Domicílios, Censo EAD.BR e Comscore) e vinculada às tarefas `TAR-07` e `TAR-08`.

#### 4.4.1 Objetivos e Motivações no PCI Concursos
* **Conquistar Aprovação em Cargo Público de Nível Superior:** Almeja ingressar na carreira pública em cargos administrativos (como Analista Administrativo de Ministérios, Agências Reguladoras ou Tribunais do DF), visando plano de carreira estruturado e estabilidade funcional.
* **Estudo Ágil e Focado por Meio de Videoaulas:** Utiliza a aba de aulas do PCI Concursos para sanar dúvidas teóricas pontuais de disciplinas básicas (Direito Administrativo, Constitucional e Língua Portuguesa) durante intervalos de 15 a 30 minutos em sua rotina de trabalho (*microlearning*).
* **Automação no Acompanhamento de Editais:** Depende de alertas recebidos por e-mail para ser notificada sobre a publicação de editais, retificações e aberturas de inscrições no DF sem precisar gastar horas navegando manualmente por dezenas de páginas.

#### 4.4.2 Relação com a Tecnologia e Hábitos de Estudo
* **Usuária Digitalmente Fluente:** Lida rotineiramente com navegadores web, e-mails corporativos, editores de texto e planilhas eletrônicas. Espera interfaces diretas, sem fluxos desnecessários de navegação.
* **Estudo Fragmentado no Celular:** Devido à jornada integral de trabalho, aproveita intervalos curtos (20 a 30 minutos no almoço ou transporte público) para estudar pelo smartphone.
* **Relação com Alertas:** Considera o e-mail seu canal prioritário para comunicações formais. Detesta receber malas diretas desorganizadas ou *spam* sobre concursos de regiões distantes sem relação com seu interesse.

#### 4.4.3 Principais Dores e Frustrações com o PCI Concursos
* **Desorganização Pedagógica na Seção de Videoaulas (`TAR-07`):** As aulas no portal são vídeos embutidos do YouTube agrupados sem taxonomia refinada por disciplina ou tópico do edital. Não há duração dos blocos, cronômetro ou links diretos para download de resumos e slides dos professores em PDF.
* **Poluição Visual e Ruído Publicitário Intrusivo:** A página de reprodução das videoaulas é cercada por anúncios expansíveis que distraem a atenção e, no celular, deslocam o player de vídeo, gerando toques involuntários em banners comerciais.
* **Formulário de Alertas Obsoleto e Sem Filtros (`TAR-08`):** O cadastro para recebimento de notícias não permite selecionar preferências de carreira (ex.: Área Administrativa) ou UF (apenas DF/Centro-Oeste), sobrecarregando a caixa de entrada com certames irrelevantes.
* **Ausência de Confirmação Dupla no Cadastro:** O formulário de e-mail possui apenas um campo para digitação, sem verificação de confirmação e sem mensagem de ativação (*double opt-in*), gerando insegurança quanto ao correto registro do contato.

---

### 4.5 Persona 5 — *Responsável: João Vitor Sales Ibiapina*

> *Seção reservada para a modelagem individual da persona pelo integrante João Vitor Sales Ibiapina, a ser elaborada no padrão narrativo arquetípico com base nos dados empíricos de sua respectiva entrevista gravada.*

---

## 5. Bibliografia

> BARBOSA, S. D. J.; SILVA, B. S. *Interação Humano-Computador*. Rio de Janeiro: Elsevier, 2010.  
> COOPER, Alan. *The Inmates Are Running the Asylum: Why High Tech Products Drive Us Crazy and How to Restore the Sanity*. Indianapolis: Sams Publishing, 1999.  
> COURAGE, Catherine; BAXTER, Kathy. *Understanding Your Users: A Practical Guide to User Requirements Methods, Tools, and Techniques*. San Francisco: Morgan Kaufmann, 2005.  
> PRUITT, John; ADLIN, Tamara. *The Persona Lifecycle: Keeping People in Mind Throughout Product Design*. San Francisco: Morgan Kaufmann, 2006.

## 6. Histórico de Versões

<div align="center" markdown="1">

| Versão | Data | Descrição | Autor(es) | Revisor(es) |
| :---: | :---: | :--- | :---: | :--- :--- |
| `1.0` | 21/09/2026 | Fundamentação teórica de personas (Cooper; Barbosa & Silva), definição do elenco com 5 personas e estruturação da Persona 1. | Daniel da Silva Batista | Pedro Rocha Ferreira Lima |
| `1.1` | 21/09/2026 | Remoção da antipersona e ajuste do elenco para designação por membro, reservando seções para modelagem individual. | Daniel da Silva Batista | Pedro Rocha Ferreira Lima |
| `1.2` | 25/09/2026 | Vinculação empírica da Persona 1 (Maria Helena) com a entrevista individual gravada USR-01. | Daniel da Silva Batista | Pedro Rocha Ferreira Lima |
| `1.3` | 27/09/2026 | Modelagem da Persona 2 (Lucas Ferreira Rocha) por Pedro Rocha Ferreira Lima fundamentada na Análise Documental DOC-02. | Pedro Rocha Ferreira Lima | Daniel da Silva Batista |
| `1.4` | 27/09/2026 | Modelagem integral da Persona 3 (Thiago Moraes Albuquerque), representante do Perfil 1, fundamentada na análise documental DOC-03. | Arthur Sismene Carvalho | Daniel da Silva Batista |
| `1.5` | 28/09/2026 | Modelagem integral da Persona 4 (Renata Cristina Freitas), representante do Perfil 2, fundamentada na Análise Documental DOC-04 e vinculada às tarefas TAR-07 e TAR-08. | Leonardo da Silva Lopes Júnior | Daniel da Silva Batista |
| `1.6` | 04/10/2026 | Adequação metodológica das personas ao formato narrativo de Barbosa & Silva (2010) e Pruitt & Adlin (2006), eliminação das tabelas de atributos individuais, inclusão da anatomia formal da persona e padronização tipográfica das legendas (Issue #11). | Daniel da Silva Batista | Pedro Rocha Ferreira Lima |

<p align="center" style="font-size: 0.85em; margin-top: -0.6em;"><b>Fonte:</b> Daniel da Silva Batista (2026).</p>

</div>
