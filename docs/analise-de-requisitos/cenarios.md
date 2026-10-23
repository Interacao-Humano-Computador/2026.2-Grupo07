<div align="center" markdown="1">

<p align="center"><b>Tabela de Contribuição</b></p>

| Membro | Contribuição |
| :--- | :--- |
| Daniel da Silva Batista | Fundamentação teórica de cenários (Carroll, 2000; Rosson & Carroll, 2002; Barbosa e Silva, 2010), explicitação da relação formal entre Personas e Cenários, estruturação dos elementos formais, redação e validação empírica dos Cenários 01 e 02 via [Entrevista Gravada USR-01](https://youtu.be/YkYvCZDidaY) e consolidação da matriz de cenários. |
| Arthur Sismene Carvalho | Revisão conceitual dos elementos de cenário e redação integral dos Cenários 05 e 06, incluindo a modelagem do cenário de tarefa não suportada (CEN-06). |
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
* **Renata Cristina Freitas (PER-04 — Cenários CEN-07 e CEN-08):** Concurseira ativa que concilia trabalho CLT e estudos (31 anos). No `CEN-07`, o consumo de videoaulas em intervalos curtos é prejudicado pela ausência de indexação e materiais em PDF. No `CEN-08`, a gestão concorrente de múltiplos certames abertos (inscrições, vencimento de boletos bancários e datas de provas) gera alta ansiedade e risco de perda de prazos críticos devido à ausência de um painel de calendário integrado com lembretes digitais.

A Tabela 1 a seguir consolida a matriz formal de rastreabilidade entre Personas, Cenários e Tarefas:

<div align="center" markdown="1">

<p align="center"><b>Tabela 1: Matriz de Rastreabilidade entre Personas, Cenários e Tarefas</b></p>

| ID do Cenário | Título do Cenário | Persona Associada (Ator) | Tarefa de IHC Relacionada | Responsável |
| :---: | :--- | :---: | :--- | :--- |
| **CEN-01** | Parametrização de Busca Avançada e Comparação de Editais Concorrentes no DF | **Maria Helena dos Santos (PER-01)** | `TAR-01`: Parametrizar busca avançada multicritério e comparar editais concorrentes lado a lado | Daniel da Silva Batista |
| **CEN-02** | Montagem e Exportação de Caderno Personalizado de Estudos com Gabarito Integrado | **Maria Helena dos Santos (PER-01)** | `TAR-02`: Montar e exportar caderno personalizado de provas anteriores com gabarito comentado | Daniel da Silva Batista |
| **CEN-03** | Exploração Cartográfica Interativa e Simulação de Mobilidade de Vagas no DF e RIDE | **Lucas Ferreira Rocha (PER-02)** | `TAR-03`: Explorar mapa interativo georreferenciado com cálculo de mobilidade | Pedro Rocha Ferreira Lima |
| **CEN-04** | Acompanhamento de Timeline de Fases com Simulador de Prazos Recursais e Sincronização | **Lucas Ferreira Rocha (PER-02)** | `TAR-04`: Acompanhar timeline interativa com simulador de prazos recursais e calendário | Pedro Rocha Ferreira Lima |
| **CEN-05** | Resolução de Simulado Online Interativo com Feedback de Gabarito no Smartphone | **Thiago Moraes Albuquerque (PER-03)** | `TAR-05`: Simulado online interativo com feedback automático de gabarito | Arthur Sismene Carvalho |
| **CEN-06** | Prospecção de Vagas de Estágio de Nível Superior no DF | **Thiago Moraes Albuquerque (PER-03)** | `TAR-06`: Busca de oportunidades de estágio | Arthur Sismene Carvalho |
| **CEN-07** | Acesso Rápido a Videoaulas de Disciplinas Básicas no Intervalo de Almoço | **Renata Cristina Freitas (PER-04)** | `TAR-07`: Consulta a videoaulas e dicas didáticas | Leonardo da Silva Lopes Júnior |
| **CEN-08** | Organização e Acompanhamento de Prazos no Calendário Pessoal de Concursos | **Renata Cristina Freitas (PER-04)** | `TAR-08`: Organizar e acompanhar múltiplos certames no Calendário Pessoal de Concursos com prazos de inscrição, pagamento de boleto e exportação para agenda digital | Leonardo da Silva Lopes Júnior |

<p align="center" style="font-size: 0.85em; margin-top: -0.6em;"><b>Fonte:</b> Daniel da Silva Batista e Pedro Rocha Ferreira Lima (2026), com base nas Personas modeladas e nas tarefas do PCI Concursos.</p>

</div>

---

## 4. Detalhamento dos Cenários

### 4.1 Cenário 01: Parametrização de Busca Avançada e Comparação de Editais Concorrentes no DF (CEN-01)
* **Responsável:** Daniel da Silva Batista  
* **Persona Associada:** Maria Helena dos Santos (PER-01 — Concurseira Ativa / Adulta e Madura)  
* **Validação Empírica:** Vinculado à Tarefa 01 (`TAR-01`: Parametrizar busca avançada multicritério e comparar editais concorrentes lado a lado) e apoiado nos dados do IPEA (2024).

O detalhamento narrativo do Cenário 01, estruturado segundo os sete elementos formais de Carroll (2000) e Barbosa e Silva (2010), é apresentado na Tabela 2:

<div align="center" markdown="1">

<p align="center"><b>Tabela 2: Detalhamento Narrativo do Cenário 01</b></p>

| Elemento | Descrição Narrativa |
| :--- | :--- |
| **Ambiente / Contexto** | Quarta-feira, por volta das 19h30, na mesa da sala em Taguatinga-DF. Maria Helena terminou suas atividades do dia e ligou seu notebook pessoal. Ela está em dúvida entre dois grandes certames administrativos no Distrito Federal com inscrições abertas e deseja saber se haverá choque de datas de prova, qual oferece melhor plano de carreira e qual possui maior convergência de matérias de estudo. Ela dispõe de cerca de 30 minutos antes do jantar. |
| **Atores** | **Maria Helena dos Santos** (53 anos, concurseira madura, prudente e focada em otimização do tempo escasso de estudo). |
| **Objetivos** | Parametrizar critérios combinados de busca (escolaridade superior, piso de R$ 5.000 e abrangência DF), selecionar os certames concorrentes e confrontar uma matriz comparativa lado a lado com prazos, taxas e conteúdos programáticos. |
| **Planejamento** | Acessar o portal PCI Concursos, acionar a busca avançada por facetas, marcar dois certames da área administrativa e gerar uma grade comparativa para decidir qual edital priorizar. |
| **Ações** | 1. Acessa o portal PCI Concursos no navegador do notebook.<br>2. Aciona o módulo de busca avançada facetada no menu superior.<br>3. Define os parâmetros: Escolaridade (Superior), Região (DF), Carreira (Administrativa) e Status (Inscrições Abertas).<br>4. Requisita a consulta e avalia a listagem filtrada de certames.<br>5. Marca dois concursos concorrentes para inclusão no comparador direto.<br>6. Abre a matriz comparativa lado a lado e examina as datas de prova, divisão de vagas e disciplinas de conhecimentos básicos.<br>7. Salva a síntese comparativa para balizar seu plano de estudos semanal. |
| **Eventos** | No portal atual, inexiste busca facetada: Maria Helena é forçada a realizar buscas textuais repetidas, abrir 10 abas paralelas e ler dezenas de páginas de PDF para comparar manualmente os dois editais, enfrentando sobrecarga cognitiva e poluição visual de propagandas. |
| **Avaliação** | Maria Helena atinge a decisão sobre qual certame focar, mas ressalta o imenso cansaço mental causado pela ausência de uma ferramenta nativa de comparação entre editais no PCI Concursos. |

<p align="center" style="font-size: 0.85em; margin-top: -0.6em;"><b>Fonte:</b> Daniel da Silva Batista (2026), com base na Análise Documental DOC-01 e na Persona PER-01.</p>

</div>

---

### 4.2 Cenário 02: Montagem e Exportação de Caderno Personalizado de Estudos com Gabarito Integrado (CEN-02)
* **Responsável:** Daniel da Silva Batista  
* **Persona Associada:** Maria Helena dos Santos (PER-01 — Concurseira Ativa / Adulta e Madura)  
* **Validação Empírica:** Vinculado à Tarefa 02 (`TAR-02`: Montar e exportar caderno personalizado de provas anteriores com gabarito comentado integrado) e apoiado no hábito de treino documentado em DOC-01.

O detalhamento narrativo do Cenário 02 é apresentado na Tabela 3 a seguir:

<div align="center" markdown="1">

<p align="center"><b>Tabela 3: Detalhamento Narrativo do Cenário 02</b></p>

| Elemento | Descrição Narrativa |
| :--- | :--- |
| **Ambiente / Contexto** | Sábado pela manhã, no ambiente de estudo em casa. Maria Helena reservou a manhã para treinar resolução intensiva de questões reais de provas anteriores da banca organizadora do certame escolhido. Seu objetivo é imprimir um compilado limpo e encadernado de provas dos últimos 3 anos com gabaritos homologados (anulações indicadas) e folhas de rascunho de respostas. |
| **Atores** | **Maria Helena dos Santos** (53 anos, concurseira que prefere praticar simulados em papel impresso em layout econômico para evitar ardência e cansaço visual em telas digitais). |
| **Objetivos** | Filtrar o repositório histórico de provas por banca e cargo, selecionar 4 cadernos de questões, parametrizar inclusão de gabarito definitivo unificado ao final de cada bloco e exportar um único arquivo PDF indexado em modo econômico de impressão. |
| **Planejamento** | Acessar o montador de provas do portal, selecionar o acervo da banca pretendida, compor a cesta de cadernos, escolher opções gráficas de impressão econômica e realizar o download seguro do material consolidado. |
| **Ações** | 1. Acessa a seção de provas anteriores no PCI Concursos.<br>2. Aplica filtros de banca examinadora, anos de aplicação (2023 a 2025) e cargo administrativo.<br>3. Inspeciona os cadernos retornados e seleciona 4 provas para adicionar à cesta de compilação.<br>4. Configura as preferências do caderno: anexo de gabaritos oficiais definitivos, modo impressão econômica em duas colunas e inclusão de folha de respostas.<br>5. Dispara a compilação no sistema e descarrega o arquivo PDF unificado e indexado sem passar por anúncios invasivos. |
| **Eventos** | No portal real, os arquivos estão totalmente fragmentados: para obter 4 provas e gabaritos, a usuária precisa realizar 8 downloads separados, enfrentando banners com falsos botões de download e organizando manualmente os arquivos avulsos em pastas locais. |
| **Avaliação** | Maria Helena expressa alto alívio e produtividade ao conceber um caderno unificado e pronto para impressão, destacando a proteção contra armadilhas publicitárias e a economia de papel proporcionada pelo layout estruturado. |

<p align="center" style="font-size: 0.85em; margin-top: -0.6em;"><b>Fonte:</b> Daniel da Silva Batista (2026), com base na Análise Documental DOC-01 e na Persona PER-01.</p>

</div>

---

### 4.3 Cenário 03: Exploração Cartográfica Interativa e Simulação de Mobilidade de Vagas no DF e RIDE (CEN-03)
* **Responsável:** Pedro Rocha Ferreira Lima  
* **Persona Associada:** Lucas Ferreira Rocha (PER-02 — Concurseiro Iniciante / Jovem e Recém-formado)  
* **Validação Empírica:** Fundamentado na Análise Documental DOC-02 (concentração de mais de 65% de vagas no DF/RIDE) e vinculado à Tarefa 03 (`TAR-03`: Explorar mapa interativo georreferenciado de oportunidades com cálculo de mobilidade).

O detalhamento narrativo do Cenário 03 é apresentado na Tabela 4 a seguir:

<div align="center" markdown="1">

<p align="center"><b>Tabela 4: Detalhamento Narrativo do Cenário 03</b></p>

| Elemento | Descrição Narrativa |
| :--- | :--- |
| **Ambiente / Contexto** | Terça-feira, às 12h40, durante o intervalo de almoço no trabalho em Águas Claras-DF. Lucas utiliza seu smartphone conectado à rede 4G para verificar oportunidades públicas na sua região. Como depende de metrô e ônibus, ele precisa checar a proximidade geográfica dos órgãos e se há compatibilidade de transporte público para sua rotina funcional. Ele dispõe de apenas 15 minutos. |
| **Atores** | **Lucas Ferreira Rocha** (24 anos, recém-formado em Administração, usuário dinâmico e focado em vagas do DF e RIDE com deslocamento viável). |
| **Objetivos** | Acessar um mapa interativo georreferenciado de vagas, delimitar seu ponto de partida em Águas Claras, definir raio de alcance de até 25 km e simular tempo de deslocamento em transporte coletivo até as sedes dos certames abertos. |
| **Planejamento** | Abrir o mapa territorial do portal no celular, aplicar filtro por Região Administrativa e raio geográfico, inspecionar agrupamentos de vagas e estimar tempo de trajeto até a prova/lotação. |
| **Ações** | 1. Abre a ferramenta de mapa de oportunidades do portal no smartphone.<br>2. Define seu ponto de partida (Águas Claras) e ajusta o raio de alcance para 20 km.<br>3. Observa os clusters de vagas por Região Administrativa (Taguatinga, Guará, Plano Piloto).<br>4. Seleciona o polo de um órgão público distrital para examinar cargos e vencimentos.<br>5. Aciona o simulador de mobilidade urbana para verificar linhas de metrô e tempo de percurso estimado.<br>6. Confirma que o trajeto é de cerca de 35 minutos e salva a oportunidade no seu painel pessoal. |
| **Eventos** | Na plataforma atual do PCI Concursos, inexiste mapa: os certames do Centro-Oeste são exibidos em lista plana interminável misturando cidades do interior de Mato Grosso e Goiás, sem qualquer indicação de endereço de lotação ou ferramenta de mobilidade urbana. |
| **Avaliação** | Lucas constata que uma ferramenta cartográfica com cálculo de itinerário elimina dezenas de minutos de procura improdutiva e previne inscrições em certames com lotações logisticamente inviáveis. |

<p align="center" style="font-size: 0.85em; margin-top: -0.6em;"><b>Fonte:</b> Pedro Rocha Ferreira Lima (2026), com base na Análise Documental DOC-02 e na Persona PER-02.</p>

</div>

---

### 4.4 Cenário 04: Acompanhamento de Timeline de Fases com Simulador de Prazos Recursais e Sincronização (CEN-04)
* **Responsável:** Pedro Rocha Ferreira Lima  
* **Persona Associada:** Lucas Ferreira Rocha (PER-02 — Concurseiro Iniciante / Jovem e Recém-formado)  
* **Validação Empírica:** Fundamentado na Análise Documental DOC-02 (dinâmica de retificações em 80% dos certames) e vinculado à Tarefa 04 (`TAR-04`: Acompanhar timeline interativa de fases do certame com simulador de prazos recursais e sincronização de calendário).

O detalhamento narrativo do Cenário 04 é apresentado na Tabela 5 a seguir:

<div align="center" markdown="1">

<p align="center"><b>Tabela 5: Detalhamento Narrativo do Cenário 04</b></p>

| Elemento | Descrição Narrativa |
| :--- | :--- |
| **Ambiente / Contexto** | Quinta-feira, às 21h15, em seu quarto em Águas Claras-DF. Lucas está estudando e foi informado por colegas que a banca organizadora do concurso no qual está inscrito publicou uma retificação de cronograma e abriu prazo extraordinário para interposição de recursos contra o gabarito preliminar. Ele precisa checar com precisão a data fatal considerando o horário limite bancário e sincronizar o alerta no Google Agenda. |
| **Atores** | **Lucas Ferreira Rocha** (24 anos, candidato meticuloso com prazos que organiza toda a sua rotina acadêmica e de concursos no calendário digital do celular). |
| **Objetivos** | Acessar a timeline interativa do concurso, checar a nota de retificação com visualizador de alterações (*diff* antes x depois), calcular o prazo final de recurso considerando dias úteis e expedir lembretes automáticos para sua agenda pessoal (.ics). |
| **Planejamento** | Localizar a ficha do concurso, abrir a timeline de etapas, examinar o badge de retificação, acionar a calculadora de prazos recursais e disparar a sincronização com o calendário. |
| **Ações** | 1. Acessa a timeline de fases do certame no portal.<br>2. Identifica o badge âmbar destacando retificação no cronograma de recursos.<br>3. Abre a ferramenta de comparação textual para checar exatamente quais cláusulas de datas foram modificadas.<br>4. Utiliza o simulador de prazos informando a data da publicação da errata para calcular a data fatal com corte no horário bancário distrital.<br>5. Clica no botão de exportação e autoriza o envio de alertas programados (24h e 2h antes) para o Google Agenda no smartphone. |
| **Eventos** | No portal real, retificações são divulgadas como textos miúdos no rodapé sem destaque gráfico, inexiste timeline visual ou contadores regressivos, obrigando à leitura de PDFs extensos com risco de perda fatal de prazos de recurso. |
| **Avaliação** | Lucas elogia a solução ao garantir precisão cronológica absoluta e integração com o ecossistema móvel pessoal, mitigando a insegurança jurídica recorrente em concursos com editais retificados. |

<p align="center" style="font-size: 0.85em; margin-top: -0.6em;"><b>Fonte:</b> Pedro Rocha Ferreira Lima (2026), com base na Análise Documental DOC-02 e na Persona PER-02.</p>

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

### 4.8 Cenário 08: Organização e Acompanhamento de Prazos no Calendário Pessoal de Concursos (CEN-08)
* **Responsável:** Leonardo da Silva Lopes Júnior  
* **Persona Associada:** Renata Cristina Freitas (PER-04 — Concurseira Ativa / 31 anos / CLT)  
* **Fundamentação:** Ancorado na [Análise Documental DOC-04](perfil-de-usuario.md#54-analise-documental-04-responsavel-leonardo-da-silva-lopes-junior), que diagnostica a severa sobrecarga de tempo e a necessidade crítica de gestão integrada de cronogramas para concurseiros em dupla jornada de trabalho (44h semanais), vinculado à Tarefa 08 (Organizar e acompanhar múltiplos certames no Calendário Pessoal de Concursos com prazos de inscrição, pagamento de boleto e exportação para agenda digital).

O detalhamento narrativo do Cenário 08, estruturado segundo os sete elementos formais de Carroll (2000) e Barbosa e Silva (2010), é apresentado na Tabela 9:

<div align="center" markdown="1">

<p align="center"><b>Tabela 9: Detalhamento Narrativo do Cenário 08</b></p>

| Elemento | Descrição Narrativa |
| :--- | :--- |
| **Ambiente / Contexto** | Segunda-feira à noite, às 20h45, na sala de seu apartamento no Guará-DF. Renata acabou de chegar do expediente de 44 horas semanais no setor privado e precisa organizar com urgência os prazos de dois concursos públicos em que pretende concorrer: o certame de Técnico Judiciário do TJDFT e o concurso nacional dos Correios. Por ter uma rotina intensa de trabalho e cuidados domésticos, ela vive sob constante tensão e medo de perder o prazo de vencimento do boleto bancário da taxa de inscrição ou de descobrir tarde demais que as provas ocorrem na mesma data e turno. |
| **Atores** | **Renata Cristina Freitas** (31 anos, assistente administrativa CLT, foco em cargos administrativos/judiciários no DF e entorno, que necessita de controle rigoroso de datas para conciliar trabalho e preparação). |
| **Objetivos** | Reunir os certames de interesse em um **Calendário Pessoal de Concursos** interativo no PCI Concursos, inspecionar a linha do tempo unificada de prazos críticos (período de inscrição, vencimento de boleto bancário, divulgação de locais e aplicação de provas), verificar a inexistência de choque de datas entre os certames, registrar o status de pagamento da taxa e exportar os eventos com lembretes programados para o seu Google Agenda. |
| **Planejamento** | Acessar o portal PCI Concursos, abrir a ferramenta "Meu Calendário de Concursos", pesquisar e adicionar os certames do TJDFT e dos Correios, verificar alertas visuais de vencimento de boleto e choques de horários, alternar entre as visualizações de Linha do Tempo e Grade Mensal, marcar o status de pagamento e acionar a exportação dinâmica de marcos com alertas automáticos para o smartphone. |
| **Ações** | 1. Acessa o portal `pciconcursos.com.br` no notebook e entra na seção do concurso do TJDFT.<br>2. Clica no comando *"Adicionar ao Meu Calendário"*.<br>3. Repete a ação para o certame dos Correios, consolidando ambos em sua área personalizada.<br>4. Abre a visualização da Linha do Tempo Interativa para checar a sequência de eventos de cada certame.<br>5. Observa a sinalização de alerta em destaque amarelo informando: *"Boleto de inscrição do TJDFT vence em 2 dias"*.<br>6. Alterna para a visualização em Grade Mensal para verificar visualmente se as datas das provas colidem no mesmo domingo.<br>7. Aciona o botão *"Sincronizar com Google Agenda / Exportar .ics"*, definindo lembretes push no celular com 24 horas e 2 horas de antecedência aos prazos fatais. |
| **Eventos** | No portal atual, o usuário precisa rastrear datas em PDFs extensos e desorganizados de cada edital separadamente, sem qualquer visão consolidada. Com o novo **Calendário Pessoal de Concursos**, o sistema compila automaticamente os marcos cronológicos, identifica que não há choque de datas de provas entre os órgãos e envia lembretes sincronizados diretamente para o celular da candidata. |
| **Avaliação** | Renata experimenta um alívio imediato da sobrecarga mental: tem a garantia de que não perderá a data de pagamento do boleto bancário, confirma que conseguirá prestar ambos os concursos sem sobreposição de horário de prova e passa a acompanhar sua preparação com segurança, autonomia e controle temporal absoluto. |

<p align="center" style="font-size: 0.85em; margin-top: -0.6em;"><b>Fonte:</b> Leonardo da Silva Lopes Júnior (2026), com base na Análise Documental DOC-04 e na Persona PER-04.</p>

</div>

---

## 5. Referências Bibliográficas

> BARBOSA, Simone D. J.; SILVA, Bruno S. da. *Interação Humano-Computador*. Rio de Janeiro: Elsevier / Campus, 2010.  
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
| `1.7` | 09/10/2026 | Atendimento à OBS 5 da avaliação docente: consolidação da matriz em 8 cenários completos e fechados (exatamente 2 por integrante ativo da equipe), remoção dos cenários 09 e 10 incompletos e adequação de Referências Bibliográficas. | Daniel da Silva Batista | Leonardo da Silva Lopes Júnior |
| `1.8` | 22/10/2026 | Remodelagem do Cenário 08 (CEN-08): substituição da central de alertas por e-mail pelo Calendário Pessoal de Concursos (gestão de múltiplos certames, linha do tempo, detecção de choque de datas, alertas de boleto e sincronização com Google Agenda), em atendimento ao feedback docente. | Leonardo da Silva Lopes Júnior | Daniel da Silva Batista |

<p align="center" style="font-size: 0.85em; margin-top: -0.6em;"><b>Fonte:</b> Daniel da Silva Batista (2026).</p>

</div>

