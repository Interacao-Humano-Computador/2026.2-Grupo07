<div align="center" markdown="1">

<p align="center"><b>Tabela de Contribuição</b></p>

| Membro | Contribuição |
| :--- | :--- |
| Daniel da Silva Batista | Fundamentação teórica de cenários (Carroll, 2000; Barbosa e Silva, 2010), estruturação dos elementos formais, redação e validação empírica dos Cenários 01 e 02 via [Entrevista Gravada USR-01](https://youtu.be/YkYvCZDidaY) e organização dos templates para a equipe. |
| Arthur Sismene Carvalho | Revisão conceitual dos elementos de cenário e estruturação dos Cenários 05 e 06. |
| João Vitor Sales Ibiapina | Revisão da matriz de cenários e estruturação dos Cenários 09 e 10. |
| Leonardo da Silva Lopes Júnior | Revisão da coerência entre personas e contextos dos Cenários 07 e 08. |
| Pedro Rocha Ferreira Lima | Definição dos objetivos de busca regional, redação e fundamentação detalhada dos Cenários 03 e 04 com base em DOC-02 e revisão técnica geral. |
| Gemini | Auxílio na estruturação textual e formatação do artefato em Markdown (conforme Política de Uso de IA). |

<p align="center"><b>Fonte:</b> Daniel da Silva Batista (2026).</p>

</div>

# Cenários

## 1. Introdução

Na Engenharia de Requisitos e no Design de Interação, os **Cenários** constituem narrativas contextuais concretas que descrevem o comportamento de um usuário durante a realização de uma ou mais atividades com o apoio de um sistema interativo (Barbosa e Silva, 2010). Fundamentada nos trabalhos seminais de John Carroll (2000), a técnica de design baseado em cenários permite que a equipe compreenda as motivações, as estratégias de planejamento, as ações físicas e a interpretação de resultados dos usuários em situações reais de uso.

Enquanto a [Persona](personas.md) define *quem* utiliza o sistema, o Cenário estabelece o *quando*, o *onde*, o *porquê* e o *como* essa interação ocorre, tornando explícitos os obstáculos ergonômicos e as barreiras de usabilidade que surgem ao longo do caminho.

## 2. Elementos Constitutivos de um Cenário

Para manter a consistência metodológica exigida na literatura de IHC, cada cenário documentado neste projeto é estruturado a partir dos sete elementos formais preconizados por Barbosa e Silva (2010, p. 182-183):

1. **Ambiente ou Contexto:** Detalhes da situação física, temporal, psicológica e social em que a interação ocorre, incluindo restrições de tempo, ruídos externos e dispositivos empregados.
2. **Atores:** As pessoas envolvidas na narrativa, diretamente vinculadas às [Personas](personas.md) previamente modeladas.
3. **Objetivos:** O que o ator deseja alcançar ao final do processo (o estado final pretendido).
4. **Planejamento:** As estratégias cognitivas traçadas mentalmente pelo ator para atingir o objetivo com base em seu modelo mental prévio.
5. **Ações:** O encadeamento de ações físicas e operacionais executadas pelo ator na interface do sistema.
6. **Eventos:** As respostas apresentadas pelo sistema, bem como intercorrências externas (como anúncios publicitários concorrentes ou falhas de conexão).
7. **Avaliação:** A interpretação do ator sobre o estado atingido, julgando se seu objetivo foi alcançado com sucesso, se cometeu erros ou se necessitou de caminhos alternativos.

---

## 3. Matriz de Cenários do PCI Concursos

A Tabela 1 a seguir apresenta a relação dos 10 cenários elaborados pelo grupo, mapeando a persona envolvida, a tarefa associada e o integrante responsável:

<div align="center" markdown="1">

<p align="center"><b>Tabela 1: Matriz de Cenários de Interação</b></p>

| ID | Título do Cenário | Persona Associada | Tarefa Relacionada | Responsável |
| :---: | :--- | :---: | :--- | :--- |
| **CEN-01** | Localização Ágil de Edital de Concurso no DF | **Maria Helena dos Santos (PER-01)** | Busca de edital por palavra-chave / órgão | Daniel da Silva Batista |
| **CEN-02** | Download Seguro de Provas Anteriores e Gabaritos em PDF | **Maria Helena dos Santos (PER-01)** | Download de caderno de provas e gabarito | Daniel da Silva Batista |
| **CEN-03** | Filtragem de Concursos Abertos na Região Centro-Oeste / DF | **Lucas Ferreira Rocha (PER-02)** | Filtragem de editais por região geográfica | Pedro Rocha Ferreira Lima |
| **CEN-04** | Acompanhamento de Retificações e Prazos de Edital | **Lucas Ferreira Rocha (PER-02)** | Consulta a retificações e cronogramas | Pedro Rocha Ferreira Lima |
| **CEN-05** | Resolução de Questões em Simulado Online no Smartphone | *A definir pelo responsável* | Simulado de questões online | Arthur Sismene Carvalho |
| **CEN-06** | Prospecção de Vagas de Estágio de Nível Superior no DF | *A definir pelo responsável* | Busca de oportunidades de estágio | Arthur Sismene Carvalho |
| **CEN-07** | Acesso Rápido a Videoaulas de Direito Administrativo | *A definir pelo responsável* | Consulta a videoaulas e dicas didáticas | Leonardo da Silva Lopes Júnior |
| **CEN-08** | Configuração de Alertas Automáticos de Vagas por E-mail | *A definir pelo responsável* | Cadastro de avisos de concursos por e-mail | Leonardo da Silva Lopes Júnior |
| **CEN-09** | Consulta a Vagas Reservadas e Isenção de Taxa para PcD | *A definir pelo responsável* | Verificação de vagas para cotas / PcD | João Vitor Sales Ibiapina |
| **CEN-10** | Acompanhamento de Convocação de Concurso Homologado | *A definir pelo responsável* | Consulta a notícias de chamadas públicas | João Vitor Sales Ibiapina |

<p align="center"><b>Fonte:</b> Daniel da Silva Batista (2026).</p>

</div>

---

## 4. Detalhamento dos Cenários

### 4.1 Cenário 01: Localização Ágil de Edital de Concurso no DF (CEN-01)
* **Responsável:** Daniel da Silva Batista  
* **Persona Associada:** Maria Helena dos Santos (PER-01 — Concurseira Ativa / Adulta e Madura)  
* **Validação Empírica:** Validado na prática através da [Entrevista Gravada USR-01](https://youtu.be/YkYvCZDidaY) (Tarefa 01: Busca por palavra-chave / órgão).

O detalhamento narrativo do Cenário 01, estruturado segundo os sete elementos formais de Carroll (2000) e Barbosa e Silva (2010), é apresentado na Tabela 2:

<div align="center" markdown="1">

<p align="center"><b>Tabela 2: Detalhamento Narrativo do Cenário 01</b></p>

| Elemento | Descrição Narrativa |
| :--- | :--- |
| **Ambiente / Contexto** | Quarta-feira, por volta das 19h30, na mesa da sala em Taguatinga-DF. Maria Helena terminou suas atividades do dia e ligou seu notebook pessoal para verificar se o edital de concurso com vagas administrativas no Distrito Federal teve suas inscrições abertas e qual o valor da taxa de inscrição. Ela dispõe de cerca de 20 minutos antes de preparar o jantar. |
| **Atores** | **Maria Helena dos Santos** (53 anos, concurseira ativa com rotina regular de estudos, usuária atenta e cautelosa com navegação na web). |
| **Objetivos** | Encontrar a página específica do concurso de interesse no PCI Concursos e checar a situação das inscrições, prazos e requisitos de escolaridade. |
| **Planejamento** | Maria Helena decide acessar o portal PCI Concursos (`pciconcursos.com.br`), utilizar o campo de busca no cabeçalho digitando o órgão pretendido e clicar no resultado oficial para checar as datas. |
| **Ações** | 1. Abre o navegador Google Chrome no notebook e digita a URL do portal.<br>2. Ao carregar a página repleta de blocos de notícias e propagandas, desvia o olhar dos anúncios e localiza a barra de pesquisa no topo.<br>3. Digita o nome do órgão (ex.: "Correios" ou "Tribunal") e clica no ícone da lupa.<br>4. Percorre os resultados retornados procurando a notícia oficial mais recente.<br>5. Clica no título do concurso para abrir a página detalhada da seleção. |
| **Eventos** | A página demora alguns segundos para carregar completamente devido à grande quantidade de scripts publicitários. Na tela de resultados da busca, anúncios gráficos patrocinados aparecem intercalados no mesmo formato visual dos links de notícias, forçando Maria Helena a aproximar o rosto da tela e reler com cuidado para não clicar em anúncios promocionais enganosos. |
| **Avaliação** | Maria Helena atinge o objetivo de localizar o edital e anotar os prazos, mas relata desconforto com a poluição visual e cansaço nos olhos ao tentar diferenciar os links editoriais legítimos das propagandas comerciais. |

<p align="center"><b>Fonte:</b> Daniel da Silva Batista (2026).</p>

</div>

---

### 4.2 Cenário 02: Download Seguro de Provas Anteriores e Gabaritos em PDF (CEN-02)
* **Responsável:** Daniel da Silva Batista  
* **Persona Associada:** Maria Helena dos Santos (PER-01 — Concurseira Ativa / Adulta e Madura)  
* **Validação Empírica:** Validado na prática através da [Entrevista Gravada USR-01](https://youtu.be/YkYvCZDidaY) (Tarefa 02: Download de prova e gabarito em PDF).

O detalhamento narrativo do Cenário 02 é apresentado na Tabela 3 a seguir:

<div align="center" markdown="1">

<p align="center"><b>Tabela 3: Detalhamento Narrativo do Cenário 02</b></p>

| Elemento | Descrição Narrativa |
| :--- | :--- |
| **Ambiente / Contexto** | Sábado pela manhã, no ambiente de estudo em casa. Maria Helena reservou a manhã para treinar resolução de questões reais de concursos anteriores para o cargo de Assistente / Técnico Administrativo. Seu objetivo é salvar os arquivos em PDF no computador para imprimir e resolver no papel com caneta e marca-texto, pois a leitura demorada na tela causa ardência visual. |
| **Atores** | **Maria Helena dos Santos** (53 anos, concurseira que prefere praticar simulados em folhas impressas para evitar fadiga na tela). |
| **Objetivos** | Acessar o repositório de provas anteriores do PCI Concursos, selecionar o cargo administrativo pretendido e baixar o caderno de questões e a folha de respostas oficiais (gabarito definitivo) em formato PDF. |
| **Planejamento** | Acessar a seção "Provas" no menu principal do portal, utilizar o filtro de cargo ou banca, localizar a prova desejada e efetuar o download direto dos arquivos para a pasta local do computador. |
| **Ações** | 1. Clica na aba "Provas" no menu lateral do PCI Concursos.<br>2. Digita "Assistente Administrativo" no campo de filtro de provas.<br>3. Identifica na tabela a linha correspondente ao concurso desejado.<br>4. Clica no link rotulado como "Prova" para abrir o caderno de questões em PDF e salva o arquivo.<br>5. Retorna à listagem e clica no link rotulado como "Gabarito" para baixar a chave de respostas oficiais. |
| **Eventos** | Na página de download, banners publicitários exibem botões verdes chamativos com a palavra *"DOWNLOAD"* em caixa alta. Maria Helena quase clica no anúncio comercial antes de perceber que o link de download autêntico é apenas um texto sublinhado simples com tipografia menor situado logo abaixo. |
| **Avaliação** | Maria Helena conclui o download dos PDFs com sucesso, mas avalia com ressalvas a experiência, destacando a insegurança gerada pelos botões falsos e o risco de usuários maduros baixarem programas maliciosos por desatenção visual. |

<p align="center"><b>Fonte:</b> Daniel da Silva Batista (2026).</p>

</div>

---

### 4.3 Cenário 03: Filtragem de Concursos Abertos na Região Centro-Oeste / DF (CEN-03)
* **Responsável:** Pedro Rocha Ferreira Lima  
* **Persona Associada:** Lucas Ferreira Rocha (PER-02 — Concurseiro Iniciante / Jovem e Recém-formado)  
* **Validação Empírica:** Fundamentado na Análise Documental DOC-02 (concentração de mais de 65% de vagas no DF) e vinculado à Tarefa 03 (Filtragem por região Centro-Oeste / DF).

O detalhamento narrativo do Cenário 03 é apresentado na Tabela 4 a seguir:

<div align="center" markdown="1">

<p align="center"><b>Tabela 4: Detalhamento Narrativo do Cenário 03</b></p>

| Elemento | Descrição Narrativa |
| :--- | :--- |
| **Ambiente / Contexto** | Terça-feira, às 12h40, durante o intervalo de almoço no trabalho em Águas Claras-DF. Lucas utiliza seu smartphone conectado à rede 4G para verificar quais novos concursos foram abertos no Distrito Federal nesta semana. Ele dispõe de apenas 15 minutos antes de retornar ao expediente. |
| **Atores** | **Lucas Ferreira Rocha** (24 anos, recém-formado em Administração, usuário dinâmico e focado em vagas públicas do DF com boa remuneração inicial). |
| **Objetivos** | Acessar rapidamente a listagem de concursos com inscrições abertas no Distrito Federal, sem ter que rolar dezenas de páginas com prefeituras do interior de outros estados. |
| **Planejamento** | Abrir o navegador no celular, acessar a seção "Centro-Oeste" do menu de regiões do PCI Concursos e filtrar apenas os editais com lotação em Brasília/DF. |
| **Ações** | 1. Abre o portal PCI Concursos no smartphone e toca no menu lateral de navegação.<br>2. Clica na opção regional "Centro-Oeste".<br>3. Tenta localizar um filtro ou seletor de Unidade Federativa específico para o DF.<br>4. Como não há filtro por UF, rola manualmente a longa página procurando a sigla "DF" entre as notícias de cidades de Goiás, Mato Grosso e MS.<br>5. Identifica o concurso de um órgão distrital e clica no link para visualizar a remuneração e cargos. |
| **Eventos** | A página do Centro-Oeste lista todos os concursos em ordem cronológica de publicação misturando todos os estados. O layout responsivo em tela pequena quebra as linhas de tabela e banners de propaganda intercalados empurram o conteúdo para baixo a cada toque, provocando rolagem acidental. |
| **Avaliação** | Lucas consegue encontrar as informações do concurso distrital, mas reclama da perda de tempo provocada pela ausência de um botão direto para filtrar apenas o Distrito Federal e da lentidão de carregamento dos banners na rede móvel. |

<p align="center"><b>Fonte:</b> Pedro Rocha Ferreira Lima (2026).</p>

</div>

---

### 4.4 Cenário 04: Acompanhamento de Retificações e Prazos de Edital (CEN-04)
* **Responsável:** Pedro Rocha Ferreira Lima  
* **Persona Associada:** Lucas Ferreira Rocha (PER-02 — Concurseiro Iniciante / Jovem e Recém-formado)  
* **Validação Empírica:** Fundamentado na Análise Documental DOC-02 (80% de editais com retificação nas primeiras semanas) e vinculado à Tarefa 04 (Consulta a retificações e prazos).

O detalhamento narrativo do Cenário 04 é apresentado na Tabela 5 a seguir:

<div align="center" markdown="1">

<p align="center"><b>Tabela 5: Detalhamento Narrativo do Cenário 04</b></p>

| Elemento | Descrição Narrativa |
| :--- | :--- |
| **Ambiente / Contexto** | Quinta-feira, às 21h15, em seu quarto em Águas Claras-DF. Lucas está estudando pelo notebook e ouviu em um fórum de concurseiros que a banca organizadora do certame distrital para o qual está inscrito adiou a data da prova objetiva devido a problemas de logística. Ele precisa confirmar urgentemente se a notícia é verídica para replanejar seu cronograma de estudos. |
| **Atores** | **Lucas Ferreira Rocha** (24 anos, candidato atento a prazos e cronogramas, que estuda com metas diárias rigorosas). |
| **Objetivos** | Acessar a página oficial do concurso no PCI Concursos, verificar se houve publicação de retificação do cronograma e checar a nova data oficial de realização das provas. |
| **Planejamento** | Localizar a página do concurso pelo campo de busca ou histórico recente, procurar a seção de notícias atualizadas ou documentos anexos e conferir a data da prova. |
| **Ações** | 1. Acessa o PCI Concursos no notebook e digita o nome do órgão no campo de pesquisa.<br>2. Clica no resultado correspondente ao certame inscrito.<br>3. Varre o texto editorial da notícia à procura de avisos sobre alterações recentes.<br>4. Procura por links rotulados como "Retificação", "Edital de Errata" ou "Prorrogação".<br>5. Abre o documento retificador em PDF para conferir a cláusula que altera o dia da prova objetiva. |
| **Eventos** | Na página do certame, o título principal permanece inalterado com a data antiga, e a retificação nº 02 foi apenas adicionada no final do texto como uma pequena linha de atualização sem destaque cromático. Lucas quase fecha a página achando que a notícia era boato antes de rolar até o rodapé da notícia. |
| **Avaliação** | Lucas confirma a nova data da prova e consegue atualizar seu plano de estudos, mas avalia negativamente a usabilidade do portal, criticando a falta de um selo ou aviso destacado no topo informando imediatamente que o cronograma foi retificado. |

<p align="center"><b>Fonte:</b> Pedro Rocha Ferreira Lima (2026).</p>

</div>

---

### 4.5 Cenários 05 a 10: Estrutura Padronizada para Validação em Campo

Os cenários a seguir foram concebidos a partir do perfil dos usuários e seguem a mesma taxonomia formal de Carroll (2000), sendo validados e detalhados individualmente pelos respectivos integrantes responsáveis:

* **Cenário 05 (Responsável: Arthur Sismene Carvalho — Persona a definir):** O(A) participante / persona definida pelo integrante utiliza o smartphone no trajeto de transporte para resolver 10 questões no simulado online de Língua Portuguesa do portal.
* **Cenário 06 (Responsável: Arthur Sismene Carvalho — Persona a definir):** O(A) participante / persona definida pelo integrante procura oportunidades de estágio remunerado em órgãos de Brasília na seção de processos seletivos para estudantes de nível superior e técnico.
* **Cenário 07 (Responsável: Leonardo da Silva Lopes Júnior — Persona a definir):** O(A) participante / persona definida pelo integrante assiste a uma videoaula explicativa de Direito Constitucional em seu intervalo de descanso/almoço.
* **Cenário 08 (Responsável: Leonardo da Silva Lopes Júnior — Persona a definir):** O(A) participante / persona definida pelo integrante cadastra seu endereço de e-mail no formulário de notícias para receber boletins automáticos sobre concursos da carreira judiciária.
* **Cenário 09 (Responsável: João Vitor Sales Ibiapina — Persona a definir):** O(A) participante / persona definida pelo integrante busca auxílio para localizar no edital as regras de isenção de taxa de inscrição para candidatos de baixa renda e as vagas reservadas para pessoas com deficiência.
* **Cenário 10 (Responsável: João Vitor Sales Ibiapina — Persona a definir):** O(A) participante / persona definida pelo integrante consulta a listagem de notícias de homologação do concurso de motorista municipal para conferir se seu número de inscrição consta na lista de convocados.

---

## 5. Bibliografia

> BARBOSA, S. D. J.; SILVA, B. S. *Interação Humano-Computador*. Rio de Janeiro: Elsevier, 2010.  
> CARROLL, John M. *Making Use: Scenario-Based Design of Human-Computer Interactions*. Cambridge: MIT Press, 2000.  
> ROSSON, Mary Beth; CARROLL, John M. *Usability Engineering: Scenario-Based Development of Human-Computer Interaction*. San Francisco: Morgan Kaufmann, 2002.

## 6. Histórico de Versões

<div align="center" markdown="1">

| Versão | Data | Descrição | Autor(es) | Revisor(es) |
| :---: | :---: | :--- | :---: | :---: |
| `1.0` | 21/09/2026 | Fundamentação teórica de cenários (Carroll; Barbosa & Silva), definição da matriz dos 10 cenários, detalhamento narrativo dos Cenários 01 e 02 e padronização para a equipe. | Daniel da Silva Batista | Pedro Rocha Ferreira Lima |
| `1.1` | 25/09/2026 | Vinculação empírica dos Cenários 01 e 02 à execução real gravada na entrevista USR-01. | Daniel da Silva Batista | Pedro Rocha Ferreira Lima |
| `1.2` | 27/09/2026 | Detalhamento formal dos Cenários 03 e 04 por Pedro Rocha Ferreira Lima fundamentados na Análise Documental DOC-02. | Pedro Rocha Ferreira Lima | Daniel da Silva Batista |

</div>
