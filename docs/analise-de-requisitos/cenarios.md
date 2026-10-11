<div align="center" markdown="1">

<p align="center"><b>Tabela de Contribuição</b></p>

| Membro | Contribuição |
| :--- | :--- |
| Daniel da Silva Batista | Fundamentação teórica de cenários (Carroll, 2000; Rosson & Carroll, 2002; Barbosa e Silva, 2010), explicitação da relação formal entre Personas e Cenários, estruturação dos elementos formais, redação e validação empírica dos Cenários 01 e 02 via [Entrevista Gravada USR-01](https://youtu.be/YkYvCZDidaY) e organização dos templates para a equipe. |
| Arthur Sismene Carvalho | Revisão conceitual dos elementos de cenário e redação integral dos Cenários 05 e 06, incluindo a modelagem do cenário de tarefa não suportada (CEN-06). |
| João Vitor Sales Ibiapina | Revisão da matriz de cenários e estruturação dos Cenários 09 e 10. |
| Leonardo da Silva Lopes Júnior | Redação, contextualização e detalhamento narrativo integral dos Cenários 07 (videoaulas) e 08 (alertas de vagas por e-mail), fundamentados na persona Renata Cristina Freitas (PER-04) e na análise documental DOC-04; refinamento e enriquecimento do escopo funcional dos cenários com simulados interativos, alertas inteligentes e timeline visual (Issue #14). |
| Pedro Rocha Ferreira Lima | Definição dos objetivos de busca regional, redação e fundamentação detalhada dos Cenários 03 e 04 com base em DOC-02 e revisão técnica geral. |
| Gemini | Auxílio na estruturação textual e formatação do artefato em Markdown (conforme Política de Uso de IA). |

<p align="center" style="font-size: 0.85em; margin-top: -0.6em;"><b>Fonte:</b> Daniel da Silva Batista (2026).</p>

</div>

# Cenários

## 1. Introdução

Na Engenharia de Requisitos e no Design de Interação, os **Cenários** constituem narrativas contextuais concretas que descrevem o comportamento de um usuário durante a realização de uma ou mais atividades com o apoio de um sistema interativo (Barbosa e Silva, 2010). Fundamentada nos trabalhos seminais de John Carroll (2000) e Rosson e Carroll (2002), a técnica de *Scenario-Based Design* permite que a equipe compreenda as motivações, as estratégias de planejamento, as ações físicas e a interpretação de resultados dos usuários em situações reais e cotidianas de uso.

Enquanto a [Persona](personas.md) define *quem* utiliza o sistema, o Cenário estabelece o *quando*, o *onde*, o *porquê* e o *como* essa interação ocorre, tornando explícitos os obstáculos ergonômicos e as barreiras de usabilidade que surgem ao longo do percurso de interação.

## 2. Elementos Constitutivos de um Cenário

Para manter a consistência metodológica exigida na literatura de IHC, cada cenário documentado neste projeto é estruturado a partir dos sete elementos formais preconizados por Barbosa e Silva (2010, p. 182-183) e Carroll (2000):

1. **Ambiente ou Contexto:** Detalhes da situação física, temporal, psicológica e social em que a interação ocorre, incluindo restrições de tempo, ruídos externos e dispositivos empregados.
2. **Atores:** As pessoas envolvidas na narrativa, diretamente vinculadas às [Personas](personas.md) previamente modeladas.
3. **Objetivos:** O que o ator deseja alcançar ao final do processo (o estado final pretendido).
4. **Planejamento:** As estratégias cognitivas traçadas mentalmente pelo ator para atingir o objetivo com base em seu modelo mental prévio.
5. **Ações:** O encadeamento de ações físicas e operacionais executadas pelo ator na interface do sistema.
6. **Eventos:** As respostas apresentadas pelo sistema, bem como intercorrências externas (como anúncios publicitários concorrentes ou falhas de conexão).
7. **Avaliação:** A interpretação do ator sobre o estado atingido, julgando se seu objetivo foi alcançado com sucesso, se cometeu erros ou se necessitou de caminhos alternativos.

---

## 3. Relação Formal entre Personas e Cenários

Conforme apontam Carroll (2000) e Barbosa e Silva (2010, Cap. 8.3), **Personas e Cenários são técnicas complementares e interdependentes**:

* A **Persona** confere ancoragem empírica e coerência psicológica à narrativa, impedindo que os cenários descrevam interações de um "usuário genérico ideal", desprovido de falhas ou limitações.
* O **Cenário**, por sua vez, operacionaliza os objetivos e motivações abstratas da persona, inserindo-a em um fluxo temporal concreto repleto de restrições de tempo, atritos ambientais e respostas reais da interface.

No projeto do **PCI Concursos**, cada persona do elenco primário/secundário protagoniza diretamente um par dedicado de cenários que cobrem tarefas fundamentais e revelam vulnerabilidades críticas da interface:

* **Maria Helena dos Santos (PER-01 — Cenários CEN-01 e CEN-02):** Concurseira madura (53 anos) que busca estabilidade. No `CEN-01`, sua cautela operacional é posta à prova na busca textual de editais em meio a banners agressivos. No `CEN-02`, seu hábito de baixar provas e gabaritos em PDF para estudo impresso expõe os riscos de botões falsos de download (*dark patterns* acidentais).
* **Lucas Ferreira Rocha (PER-02 — Cenários CEN-03 e CEN-04):** Concurseiro recém-formado (24 anos) focado exclusivamente no DF. No `CEN-03`, sua busca por agilidade colide com a mistura desorganizada de cidades do Centro-Oeste no portal. No `CEN-04`, seu rigor com prazos evidencia a carência de um cronograma visual de fases e a ausência de sinalizações destacadas de retificação.
* **Thiago Moraes Albuquerque (PER-03 — Cenários CEN-05 e CEN-06):** Estudante universitário de baixa renda (21 anos). No `CEN-05`, sua necessidade de *microlearning* em transporte público enfrenta a falta de responsividade e a ausência de feedback imediato de gabarito nos simulados online. No `CEN-06`, sua busca urgente por estágio curricular revela uma **tarefa não suportada**, comprovando que o portal sequer cataloga vagas de estágio.
* **Renata Cristina Freitas (PER-04 — Cenários CEN-07 e CEN-08):** Concurseira ativa que concilia trabalho CLT e estudos (31 anos). No `CEN-07`, o consumo de videoaulas em intervalos curtos é prejudicado pela ausência de indexação e materiais em PDF. No `CEN-08`, sua tentativa de automatizar alertas por e-mail resulta em sobrecarga de mensagens irrelevantes (*spam*) pela ausência de filtros avançados por área e UF.

A Tabela 1 a seguir consolida a matriz formal de rastreabilidade entre Personas, Cenários e Tarefas:

<div align="center" markdown="1">

<p align="center"><b>Tabela 1: Matriz de Rastreabilidade entre Personas, Cenários e Tarefas</b></p>

| ID do Cenário | Título do Cenário | Persona Associada (Ator) | Tarefa de IHC Relacionada | Responsável |
| :---: | :--- | :---: | :--- | :--- |
| **CEN-01** | Localização Ágil de Edital de Concurso no DF | **Maria Helena dos Santos (PER-01)** | `TAR-01`: Busca de edital por palavra-chave / órgão | Daniel da Silva Batista |
| **CEN-02** | Download Seguro de Provas Anteriores e Gabaritos em PDF | **Maria Helena dos Santos (PER-01)** | `TAR-02`: Download de caderno de provas e gabarito | Daniel da Silva Batista |
| **CEN-03** | Filtragem de Concursos Abertos na Região Centro-Oeste / DF | **Lucas Ferreira Rocha (PER-02)** | `TAR-03`: Filtragem de editais por região geográfica | Pedro Rocha Ferreira Lima |
| **CEN-04** | Acompanhamento de Retificações e Cronograma de Fases do Certame | **Lucas Ferreira Rocha (PER-02)** | `TAR-04`: Cronograma visual e timeline interativa de fases do certame | Pedro Rocha Ferreira Lima |
| **CEN-05** | Resolução de Simulado Online Interativo com Feedback de Gabarito no Smartphone | **Thiago Moraes Albuquerque (PER-03)** | `TAR-05`: Simulado online interativo com feedback automático de gabarito | Arthur Sismene Carvalho |
| **CEN-06** | Prospecção de Vagas de Estágio de Nível Superior no DF | **Thiago Moraes Albuquerque (PER-03)** | `TAR-06`: Busca de oportunidades de estágio | Arthur Sismene Carvalho |
| **CEN-07** | Acesso Rápido a Videoaulas de Disciplinas Básicas no Intervalo de Almoço | **Renata Cristina Freitas (PER-04)** | `TAR-07`: Consulta a videoaulas e dicas didáticas | Leonardo da Silva Lopes Júnior |
| **CEN-08** | Assinatura e Parametrização de Alertas Inteligentes de Editais por E-mail | **Renata Cristina Freitas (PER-04)** | `TAR-08`: Alertas inteligentes de editais por e-mail com filtros avançados | Leonardo da Silva Lopes Júnior |
| **CEN-09** | Consulta a Vagas Reservadas e Isenção de Taxa para PcD | *A definir pelo responsável* | `TAR-09`: Verificação de cotas e isenção de taxa | João Vitor Sales Ibiapina |
| **CEN-10** | Acompanhamento de Convocação de Concurso Homologado | *A definir pelo responsável* | `TAR-10`: Consulta a notícias de convocações | João Vitor Sales Ibiapina |

<p align="center" style="font-size: 0.85em; margin-top: -0.6em;"><b>Fonte:</b> Daniel da Silva Batista e Pedro Rocha Ferreira Lima (2026), com base nas Personas modeladas e nas tarefas do PCI Concursos.</p>

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

<p align="center" style="font-size: 0.85em; margin-top: -0.6em;"><b>Fonte:</b> Daniel da Silva Batista (2026), com base na Entrevista Gravada USR-01 e nos dados do IPEA (2024).</p>

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

<p align="center" style="font-size: 0.85em; margin-top: -0.6em;"><b>Fonte:</b> Daniel da Silva Batista (2026), com base na Entrevista Gravada USR-01 e na Persona PER-01.</p>

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

<p align="center" style="font-size: 0.85em; margin-top: -0.6em;"><b>Fonte:</b> Pedro Rocha Ferreira Lima (2026), com base na Análise Documental DOC-02 e na Persona PER-02.</p>

</div>

---

### 4.4 Cenário 04: Acompanhamento de Retificações e Cronograma de Fases do Certame (CEN-04)
* **Responsável:** Pedro Rocha Ferreira Lima (com refinamento de escopo por Leonardo da Silva Lopes Júnior)  
* **Persona Associada:** Lucas Ferreira Rocha (PER-02 — Concurseiro Iniciante / Jovem e Recém-formado)  
* **Validação Empírica:** Fundamentado na Análise Documental DOC-02 (80% de editais com retificação nas primeiras semanas) e vinculado à Tarefa 04 (Cronograma visual e timeline interativa de fases do certame).

O detalhamento narrativo do Cenário 04 é apresentado na Tabela 5 a seguir:

<div align="center" markdown="1">

<p align="center"><b>Tabela 5: Detalhamento Narrativo do Cenário 04</b></p>

| Elemento | Descrição Narrativa |
| :--- | :--- |
| **Ambiente / Contexto** | Quinta-feira, às 21h15, em seu quarto em Águas Claras-DF. Lucas está estudando pelo notebook e ouviu em um fórum de concurseiros que a banca organizadora do certame distrital para o qual está inscrito adiou a data da prova objetiva devido a problemas de logística. Ele precisa confirmar com urgência e exatidão a nova data e reconfigurar seu cronograma de estudos e calendário pessoal. |
| **Atores** | **Lucas Ferreira Rocha** (24 anos, candidato atento a prazos e cronogramas, que estuda com metas diárias rigorosas e planeja compromissos na agenda digital). |
| **Objetivos** | Acessar a página oficial do concurso no PCI Concursos, visualizar a linha do tempo (*timeline*) interativa de fases do certame, verificar alertas visuais de retificação e sincronizar os novos marcos (encerramento de inscrições e data da prova) diretamente com sua agenda eletrônica (Google Agenda / Apple Calendar). |
| **Planejamento** | Localizar a página do concurso pelo campo de busca ou histórico recente, esperar encontrar uma timeline gráfica interativa de fases com destaque para comunicados de retificação, verificar os contadores de tempo restantes (*countdown*) e exportar as datas atualizadas. |
| **Ações** | 1. Acessa o PCI Concursos no notebook e digita o nome do órgão no campo de pesquisa.<br>2. Clica no resultado correspondente ao certame inscrito.<br>3. Procura no topo da página por um componente visual de linha do tempo ou painel de fases do certame.<br>4. Não encontrando a timeline, varre manualmente o texto corrido da notícia à procura de menções a retificações.<br>5. Localiza um link em texto puro no rodapé rotulado como "Retificação 02" e abre o arquivo PDF.<br>6. Localiza a cláusula que alterou a data da prova objetiva e copia manualmente o dia para seu aplicativo pessoal de calendário. |
| **Eventos** | Na página do certame, o título e os destaques principais permanecem inalterados com a data antiga, induzindo ao erro. Não há representação gráfica de fases do certame (Inscrições $\rightarrow$ Isenção $\rightarrow$ Homologação $\rightarrow$ Provas $\rightarrow$ Gabaritos $\rightarrow$ Recursos $\rightarrow$ Resultados), inexiste contador regressivo para o encerramento dos prazos e a retificação nº 02 foi apenas adicionada no final do texto como uma pequena linha de atualização sem destaque cromático. O sistema também não disponibiliza botão de exportação de datas (.ics) para calendários digitais. |
| **Avaliação** | Lucas confirma a nova data da prova após abrir e ler o PDF, mas avalia negativamente a usabilidade do portal. Ele destaca que a ausência de uma timeline visual interativa de fases e a falta de alertas destacados de retificação no topo colocam os candidatos sob constante estresse e risco severo de perda de prazos críticos. |

<p align="center" style="font-size: 0.85em; margin-top: -0.6em;"><b>Fonte:</b> Pedro Rocha Ferreira Lima e Leonardo da Silva Lopes Júnior (2026), com base na Análise Documental DOC-02 e na Persona PER-02.</p>

</div>

---

### 4.5 Cenário 05: Resolução de Simulado Online Interativo com Feedback de Gabarito no Smartphone (CEN-05)
* **Responsável:** Arthur Sismene Carvalho (com refinamento de escopo por Leonardo da Silva Lopes Júnior)  
* **Persona Associada:** Thiago Moraes Albuquerque (PER-03 — Estudante Universitário / Iniciante)  
* **Fundamentação:** Ancorado na [Análise Documental DOC-03](perfil-de-usuario.md#53-analise-documental-03-responsavel-arthur-sismene-carvalho), que evidencia a consolidação do estudo mediado por tela (50,7% das matrículas já em EAD, segundo o Censo da Educação Superior), vinculado à Tarefa 05 (Simulado online interativo com feedback automático de gabarito). *A modelagem apoia-se em dados documentais secundários.*

O detalhamento narrativo do Cenário 05, estruturado segundo os sete elementos formais de Carroll (2000) e Barbosa e Silva (2010), é apresentado na Tabela 6:

<div align="center" markdown="1">

<p align="center"><b>Tabela 6: Detalhamento Narrativo do Cenário 05</b></p>

| Elemento | Descrição Narrativa |
| :--- | :--- |
| **Ambiente / Contexto** | Terça-feira, 18h40, dentro de um ônibus lotado no trajeto da Ceilândia até o campus, na Asa Norte. Thiago está em pé, segurando a barra de apoio com a mão esquerda e o celular com a direita, com fones de ouvido. O trajeto dura cerca de 40 minutos e a conexão 4G oscila ao longo do percurso. Ele quer aproveitar o tempo de deslocamento para treinar uma bateria rápida e focada de questões de Língua Portuguesa antes da aula. |
| **Atores** | **Thiago Moraes Albuquerque** (21 anos, graduando em Administração no turno noturno, nativo digital, tecnicamente fluente mas iniciante no domínio de concursos, com plano de dados limitado). |
| **Objetivos** | Configurar e resolver uma bateria interativa de 10 questões objetivas de Língua Portuguesa com temporizador regressivo de 20 minutos, feedback formativo instantâneo por alternativa, gabarito oficial comentado e diagnóstico final com percentual de acertos e tempo médio por questão. |
| **Planejamento** | Abrir a seção de Simulados no navegador móvel, parametrizar o número de questões (10 itens), acionar o cronômetro, responder tocando confortavelmente nas alternativas com áreas de toque adequadas e obter o gabarito comentado a cada questão e um relatório consolidado no final sem perda de dados caso a rede caia. |
| **Ações** | 1. Abre o navegador do smartphone e acessa o portal PCI Concursos.<br>2. Procura pelo componente interativo de montagem de simulados personalizados.<br>3. Depara-se apenas com uma árvore estática e desordenada com milhares de questões empilhadas.<br>4. Tenta selecionar uma matéria e procurar onde configurar uma sessão curta com temporizador, sem sucesso.<br>5. Tenta responder a uma questão isolada dando zoom na tela para acertar a letra da alternativa.<br>6. Procura o botão para conferir o gabarito comentado da questão marcada antes de prosseguir.<br>7. Ao cruzar uma área de sombra de rede 4G, a página tenta recarregar e zera a visualização. |
| **Eventos** | O sistema não disponibiliza motor interativo de montagem de simulados: exibe apenas páginas estáticas sem temporizador e sem opção de limitar a quantidade de questões. As alternativas possuem alvos de toque minúsculos (muito inferiores aos 48px recomendados pela WCAG 2.1), provocando cliques errados no balanço do transporte coletivo. Inexiste feedback imediato de acerto/erro com comentários pedagógicos da banca. Além disso, a ausência de persistência local de dados (*Zero Data Loss*) faz com que qualquer oscilação de sinal recarregue a página e apague as respostas já submetidas, sem gerar placar final de desempenho. |
| **Avaliação** | Thiago encerra a viagem frustrado, sem conseguir avaliar seu nível real de preparo. Ele conclui que o portal oferece apenas um banco estático de questões e carece de um **sistema de simulados interativo com feedback automático**, o que o estimula a procurar aplicativos pagos de estudo para celular. |

<p align="center" style="font-size: 0.85em; margin-top: -0.6em;"><b>Fonte:</b> Arthur Sismene Carvalho e Leonardo da Silva Lopes Júnior (2026), com base na Análise Documental DOC-03 e na Persona PER-03.</p>

</div>

---

### 4.6 Cenário 06: Prospecção de Vagas de Estágio de Nível Superior no DF (CEN-06)
* **Responsável:** Arthur Sismene Carvalho  
* **Persona Associada:** Thiago Moraes Albuquerque (PER-03 — Estudante Universitário / Iniciante)  
* **Fundamentação:** Ancorado na [Análise Documental DOC-03](perfil-de-usuario.md#53-analise-documental-03-responsavel-arthur-sismene-carvalho), que documenta demanda reprimida de mais de 18 milhões de estudantes aptos e não colocados em estágio (ABRES) diante da ausência da funcionalidade no portal. *A sessão `USR-03` não foi realizada e o respectivo vídeo não está disponível; a modelagem apoia-se exclusivamente em dados documentais secundários.*

!!! note "Observação metodológica"
    Este é um **cenário de tarefa não suportada**: a funcionalidade buscada pelo usuário não existe no sistema avaliado. Conforme Barbosa e Silva (2010), cenários que documentam o fracasso da interação são especialmente produtivos em IHC, pois revelam lacunas funcionais que a análise de fluxos bem-sucedidos não expõe. A narrativa a seguir, portanto, encerra-se em **abandono da tarefa**, e não em conclusão.

O detalhamento narrativo do Cenário 06 é apresentado na Tabela 7 a seguir:

<div align="center" markdown="1">

<p align="center"><b>Tabela 7: Detalhamento Narrativo do Cenário 06</b></p>

| Elemento | Descrição Narrativa |
| :--- | :--- |
| **Ambiente / Contexto** | Sábado pela manhã, na sala de casa, na Ceilândia-DF. É a única janela da semana em que o notebook compartilhado da família está disponível. A coordenação do curso estipulou prazo de duas semanas para que Thiago comprove a celebração do termo de compromisso de estágio obrigatório, o que lhe impõe urgência concreta. |
| **Atores** | **Thiago Moraes Albuquerque** (21 anos, 5º semestre de Administração, precisa cumprir carga obrigatória de estágio curricular para não atrasar a formação). |
| **Objetivos** | Localizar vagas de estágio de nível superior em órgãos públicos do Distrito Federal, verificar os requisitos de semestre mínimo e o valor da bolsa-auxílio e identificar o prazo de inscrição. |
| **Planejamento** | Como o PCI Concursos é o portal de referência que ele já utiliza para estudar e do qual ouviu falar entre colegas, Thiago parte do **modelo mental de que o maior portal de oportunidades públicas do país necessariamente cobre estágio**. Planeja localizar uma seção equivalente a "Vagas" ou "Oportunidades", aplicar um filtro por Distrito Federal e por nível de escolaridade em curso, e listar as opções disponíveis. |
| **Ações** | 1. Acessa o portal no notebook e inspeciona os itens do menu principal em busca de uma categoria de estágio.<br>2. Não encontrando rótulo explícito, deduz que a seção "Vagas" seja o local provável e a acessa.<br>3. Constata que a seção lista apenas cargos efetivos de concursos e processos seletivos (Assistente Social, Enfermeiro, Professor, Engenheiro Civil) e percorre a listagem procurando algo compatível com estudante.<br>4. Recorre ao campo de busca e digita o termo "estágio".<br>5. Triagem dos resultados retornados, procurando distinguir oportunidades reais de menções incidentais ao termo.<br>6. Muda de estratégia e navega pela categoria regional Centro-Oeste / Distrito Federal, supondo que a oferta esteja agrupada geograficamente.<br>7. Percorre a seção "Cargos", com mais de trezentas profissões catalogadas, procurando a entrada "Estagiário".<br>8. Após cerca de doze minutos sem resultado, abandona o portal. |
| **Eventos** | A seção "Vagas" não oferece qualquer filtro por nível de escolaridade em curso ou por modalidade de contratação, pois sua indexação pressupõe candidatos já qualificados para cargos efetivos. A busca textual por "estágio" retorna ocorrências do termo **estágio probatório** — período de avaliação do servidor recém-nomeado, presente em praticamente todos os editais do domínio —, resultado tecnicamente correto mas semanticamente inútil para a intenção de Thiago, que não conhece a distinção entre as duas acepções e inicialmente acredita ter encontrado o que procurava. A navegação regional devolve apenas concursos para cargos permanentes, e a listagem de cargos não contempla a entrada "Estagiário". Em nenhum momento o sistema comunica explicitamente que **não cobre esse tipo de oportunidade**, de modo que Thiago permanece supondo que a falha é sua, e não do escopo do portal. |
| **Avaliação** | **Tarefa não concluída por ausência de suporte funcional do sistema.** Thiago encerra a interação frustrado e com a percepção equivocada de que "não soube procurar", quando de fato buscava uma funcionalidade inexistente. O custo mais relevante não é o tempo perdido, mas a **ausência de resposta honesta do sistema**: um estado vazio informativo teria resolvido a questão em segundos. Ele migra para portais de agentes de integração e passa a associar o PCI Concursos exclusivamente ao público de concursos efetivos, reduzindo a frequência com que retorna ao site. |

<p align="center" style="font-size: 0.85em; margin-top: -0.6em;"><b>Fonte:</b> Arthur Sismene Carvalho (2026), com base nas estatísticas da ABRES e na Persona PER-03.</p>

</div>

---
### 4.7 Cenário 07: Acesso Rápido a Videoaulas de Disciplinas Básicas no Intervalo de Almoço (CEN-07)
* **Responsável:** Leonardo da Silva Lopes Júnior  
* **Persona Associada:** Renata Cristina Freitas (PER-04 — Concurseira Ativa / 31 anos / CLT)  
* **Fundamentação:** Ancorado na [Análise Documental DOC-04](perfil-de-usuario.md#54-analise-documental-04-responsavel-leonardo-da-silva-lopes-junior), que documenta o hábito de microaprendizagem mobile e estudo sob janelas de tempo reduzidas (Censo EAD.BR ABED e TIC Domicílios 2024) e vinculado à Tarefa 07 (Consulta a videoaulas e dicas didáticas). *A modelagem apoia-se em dados documentais secundários (conforme preceito metodológico de Barbosa e Silva, 2010), mantendo-se o registro empírico aberto para futura incorporação de teste filmado se aplicável.*

O detalhamento narrativo do Cenário 07, estruturado segundo os sete elementos formais de Carroll (2000) e Barbosa e Silva (2010), é apresentado na Tabela 8:

<div align="center" markdown="1">

<p align="center"><b>Tabela 8: Detalhamento Narrativo do Cenário 07</b></p>

| Elemento | Descrição Narrativa |
| :--- | :--- |
| **Ambiente / Contexto** | Quarta-feira, 12h35, na copa da empresa de logística onde trabalha no Setor de Indústria e Abastecimento (SIA), em Brasília-DF. Renata dispõe de 45 minutos de intervalo de almoço e utiliza seu smartphone pessoal (tela de 6.4", conectado à rede 4G) com fones de ouvido Bluetooth. O ambiente apresenta ruído residual de conversas e micro-ondas, exigindo foco visual e clareza acústica. Ela quer revisar rapidamente tópicos centrais de Direito Constitucional (Direitos e Garantias Fundamentais) para fixar conceitos antes do retorno ao expediente corporativo. |
| **Atores** | **Renata Cristina Freitas** (31 anos, analista administrativa e concurseira em dupla jornada de 44h semanais, usuária ágil, autônoma e com foco pragmático na otimização de pequenas janelas diárias de estudo). |
| **Objetivos** | Acessar a seção de videoaulas do PCI Concursos, selecionar a disciplina de Direito Constitucional, reproduzir uma aula didática curta com qualidade de áudio e vídeo legível e assimilar a explicação conceitual sem interrupções técnicas ou bloqueios visuais. |
| **Planejamento** | Abrir o navegador Google Chrome no smartphone, acessar o portal `pciconcursos.com.br`, localizar o menu de "Aulas", filtrar pela matéria pretendida, escolher um módulo introdutório e assistir ao vídeo diretamente no player integrado sem precisar de login ou cadastros burocráticos. |
| **Ações** | 1. Abre o navegador no celular e digita o endereço do portal.<br>2. Toca no menu superior de navegação procurando a opção correspondente a "Aulas".<br>3. Na página de Aulas, visualiza as categorias de disciplinas e toca em "Direito Constitucional".<br>4. Tenta localizar um campo de pesquisa interno para buscar aulas sobre o "Artigo 5º", constatando que a página oferece apenas uma listagem vertical corrida.<br>5. Rola a página para baixo até encontrar um vídeo com título pertinente e clica no card da aula.<br>6. Toca no botão de reprodução do player incorporado (YouTube) e gira o smartphone para o modo paisagem para ampliar a área útil de visualização.<br>7. Ajusta a velocidade de reprodução para 1.25x e tenta ligar legendas automáticas para mitigar o barulho da copa. |
| **Eventos** | Ao abrir a tela da aula, blocos de anúncios publicitários em formato de banner ocupam grande parte da porção superior e inferior da viewport móvel. Ao rotacionar o aparelho para o modo horizontal, o layout responsivo apresenta falha de redimensionamento: anúncios laterais continuam flutuando e encobrindo parte dos controles do player, exigindo toque com precisão milimétrica para não abrir uma aba promocional. Não há botão para avançar para a "Próxima Aula" nem lista de reprodução sequencial organizada pedagogicamente; ao término do vídeo, o player exibe recomendações genéricas de terceiros do YouTube. Adicionalmente, inexiste opção para download de resumo esquemático em PDF do assunto abordado. |
| **Avaliação** | Renata consegue absorver o conteúdo teórico ministrado pelo professor, mas avalia a experiência com forte insatisfação quanto à ergonomia móvel: a ausência de uma trilha estruturada de estudos, a poluição visual dos anúncios invasivos e a falta de materiais de apoio para leitura rápida pós-vídeo reduzem o valor didático do portal. Renata conclui que, no contexto de estudo móvel rápido, é mais vantajoso buscar vídeos diretamente no YouTube do que depender da seção desorganizada do portal. |

<p align="center" style="font-size: 0.85em; margin-top: -0.6em;"><b>Fonte:</b> Leonardo da Silva Lopes Júnior (2026), com base na Análise Documental DOC-04 e na Persona PER-04.</p>

</div>

---

### 4.8 Cenário 08: Assinatura e Parametrização de Alertas Inteligentes de Editais por E-mail (CEN-08)
* **Responsável:** Leonardo da Silva Lopes Júnior  
* **Persona Associada:** Renata Cristina Freitas (PER-04 — Concurseira Ativa / 31 anos / CLT)  
* **Fundamentação:** Ancorado na [Análise Documental DOC-04](perfil-de-usuario.md#54-analise-documental-04-responsavel-leonardo-da-silva-lopes-junior), que identifica a sobrecarga informativa e a necessidade de alertas assíncronos segmentados para concurseiros em dupla jornada de trabalho (Comscore e TIC Domicílios 2024), vinculado à Tarefa 08 (Alertas inteligentes de editais por e-mail com filtros avançados).

O detalhamento narrativo do Cenário 08, estruturado segundo os sete elementos formais de Carroll (2000) e Barbosa e Silva (2010), é apresentado na Tabela 9:

<div align="center" markdown="1">

<p align="center"><b>Tabela 9: Detalhamento Narrativo do Cenário 08</b></p>

| Elemento | Descrição Narrativa |
| :--- | :--- |
| **Ambiente / Contexto** | Domingo à noite, às 21h20, no quarto de seu apartamento no Guará-DF. Renata está conectada ao seu notebook pessoal revisando o planejamento da semana seguinte. Pela intensa rotina de 44 horas semanais no trabalho corporativo, ela vive sob constante receio de perder a publicação de editais de tribunais ou conselhos federais com lotação no Distrito Federal e entorno imediato. Ela resolve cadastrar seu e-mail no PCI Concursos para receber avisos automáticos e precisos de novas seleções em sua caixa de entrada, evitando ter que inspecionar o site manualmente todos os dias. |
| **Atores** | **Renata Cristina Freitas** (31 anos, concurseira com foco restrito em cargos de nível superior da área administrativa/judiciária no DF e GO, avessa a spams e desorganização digital). |
| **Objetivos** | Configurar o recebimento de alertas assíncronos e inteligentes de editais por e-mail com filtros avançados multicritério (região geográfica com foco prioritário no DF, nível de escolaridade Superior, carreira Administrativa/Judiciária e periodicidade matinal), validar a assinatura por meio de confirmação dupla (*Double Opt-In*) e gerenciar preferências de privacidade com base na LGPD. |
| **Planejamento** | Localizar na página do PCI Concursos a Central de Alertas Inteligentes, selecionar as preferências temáticas e regionais nos filtros multicritério, preencher seu e-mail com validação em tempo real, consentir com os termos da LGPD e confirmar o vínculo por e-mail para receber apenas notificações customizadas. |
| **Ações** | 1. Acessa o portal `pciconcursos.com.br` no navegador do notebook.<br>2. Procura pelo módulo ou componente de alertas avançados de concursos.<br>3. Depara-se apenas com um formulário minimalista genérico contendo um campo único de texto rotulado com "E-mail" e o botão "Cadastrar".<br>4. Tenta localizar caixas de seleção (checkboxes) ou seletores para restringir as notificações ao Distrito Federal ou a cargos específicos de nível superior.<br>5. Constatando que o sistema não oferece filtros, digita seu endereço de e-mail e clica no botão.<br>6. Abre sua caixa postal aguardando um e-mail com opções de parametrização ou link de ativação segura (*Double Opt-In*). |
| **Eventos** | O formulário atual é puramente rudimentar: não dispõe de inteligência nem parametrização, realizando captura universal e indiscriminada. Não há validação sintática em tempo real no cliente, inexiste caixa de consentimento explícito para conformidade com a LGPD e o sistema não envia e-mail de dupla confirmação. No dia seguinte, Renata recebe na caixa postal um boletim massivo e exaustivo com centenas de concursos de prefeituras de todo o país (incluindo cargos operacionais do interior de outros estados), sem qualquer destaque para o DF. O e-mail também não oferece painel de gestão de preferências ou pausa de notificações, disponibilizando apenas um link miúdo de cancelamento total no rodapé. |
| **Avaliação** | Renata conclui a inscrição técnica, mas a experiência é contraproducente: o volume de spams e mensagens irrelevantes sobrecarrega sua caixa postal corporativa e pessoal, criando ruído cognitivo. Ela avalia que o portal necessita com urgência de uma **Central de Alertas Inteligentes com Filtros Avançados**, optando por cancelar o recebimento três dias depois diante da ineficiência do modelo genérico. |

<p align="center" style="font-size: 0.85em; margin-top: -0.6em;"><b>Fonte:</b> Leonardo da Silva Lopes Júnior (2026), com base na Análise Documental DOC-04 e na Persona PER-04.</p>

</div>

---

### 4.9 Cenários 09 e 10: Estrutura Padronizada para Validação em Campo

Os cenários a seguir foram concebidos a partir do perfil dos usuários e seguem a mesma taxonomia formal de Carroll (2000), sendo validados e detalhados individualmente pelo integrante responsável:

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
| `1.3` | 27/09/2026 | Detalhamento narrativo integral dos Cenários 05 (simulado no smartphone) e 06 (prospecção de estágio), este último modelado como cenário de tarefa não suportada, com vinculação à Persona PER-03. | Arthur Sismene Carvalho | Daniel da Silva Batista |
| `1.4` | 28/09/2026 | Redação e detalhamento narrativo integral dos Cenários 07 (videoaulas) e 08 (alertas por e-mail) fundamentados na Persona PER-04 e DOC-04. | Leonardo da Silva Lopes Júnior | Daniel da Silva Batista |
| `1.5` | 04/10/2026 | Inclusão da fundamentação formal da relação entre Personas e Cenários (Carroll; Barbosa & Silva), explicitação dos papéis na matriz e padronização tipográfica das legendas com base empírica (Issue #11). | Daniel da Silva Batista | Pedro Rocha Ferreira Lima |
| `1.6` | 06/10/2026 | Enriquecimento dos cenários com funcionalidades interativas ricas: CEN-04 (timeline de fases e alertas de retificação), CEN-05 (simulado interativo com feedback e gabarito) e CEN-08 (central de alertas inteligentes e LGPD) (Issue #14). | Leonardo da Silva Lopes Júnior | Daniel da Silva Batista |

<p align="center" style="font-size: 0.85em; margin-top: -0.6em;"><b>Fonte:</b> Daniel da Silva Batista (2026).</p>

</div>
