<div align="center" markdown="1">

<p align="center"><b>Tabela de Contribuição</b></p>

| Membro | Contribuição |
| :--- | :--- |
| Daniel da Silva Batista | Fundamentação teórica (Cooper, 1999; Barbosa e Silva, 2010), estruturação da metodologia de personas, modelagem empírica e validação da Persona 1 (Maria Helena dos Santos) via [Entrevista Gravada USR-01](https://youtu.be/YkYvCZDidaY) e organização do elenco para a equipe. |
| Arthur Sismene Carvalho | Revisão do elenco de personas e modelagem integral da Persona 3 (Thiago Moraes Albuquerque), fundamentada nos dados documentais consolidados em `DOC-03`. |
| João Vitor Sales Ibiapina | Revisão das diretrizes do elenco e preparação para a modelagem da persona individual. |
| Leonardo da Silva Lopes Júnior | Modelagem integral da Persona 4 (Renata Cristina Freitas), fundamentada na Análise Documental DOC-04 e nos hábitos do Perfil 2 (Concurseiro Ativo). |
| Pedro Rocha Ferreira Lima | Definição dos critérios de priorização das personas, modelagem empírica da Persona 2 (Lucas Ferreira Rocha) fundamentada em DOC-02 e revisão técnica geral. |
| Gemini | Auxílio na estruturação textual e formatação do artefato em Markdown (conforme Política de Uso de IA). |

<p align="center"><b>Fonte:</b> Daniel da Silva Batista (2026).</p>

</div>

# Personas

## 1. Introdução

No design de interação e na engenharia de requisitos de IHC, o uso de **Personas** constitui uma técnica fundamental para humanizar e materializar os dados abstratos coletados no [Perfil do Usuário](perfil-de-usuario.md). Introduzido por Alan Cooper (1999) e amplamente referenciado por Barbosa e Silva (2010), o conceito de persona consiste na criação de arquétipos ou personagens fictícios ricos em detalhes comportamentais, motivacionais e contextuais, concebidos a partir de dados empíricos de usuários reais.

Ao personalizar o público-alvo por meio de nomes, fotos, objetivos, hábitos e frustrações, a equipe de desenvolvimento consegue tomar decisões de design empáticas, evitando o erro clássico do *"usuário elástico"* (aquele cujas preferências e habilidades mudam convenientemente de acordo com as vontades do projetista).

## 2. Metodologia de Construção

A elaboração das personas do portal **PCI Concursos** seguiu as diretrizes preconizadas por Barbosa e Silva (2010, Cap. 8.2) e Courage e Baxter (2005):

1. **Fundamentação em Dados Empíricos:** As personas não decorrem de meras suposições abstratas; originam-se das características demográficas, tecnológicas e de domínio mapeadas nas pesquisas secundárias e nas entrevistas de campo gravadas com usuários reais.
2. **Definição de Papéis:** Cada persona possui objetivos claros, tarefas preponderantes e atitudes frente aos sistemas digitais.
3. **Classificação Estratégica:**
    * **Persona Primária:** É o foco central do design; suas necessidades não podem ser plenamente atendidas se o sistema for projetado apenas para outra persona.
    * **Persona Secundária:** Possui necessidades que são atendidas pelo escopo da persona primária, mas com requisitos ou preferências adicionais específicas.

## 3. Elenco de Personas

### 3.1 Justificativa da Quantidade de Personas

O elenco do projeto é composto por **cinco personas individuais**, sendo exatamente **uma persona modelada por cada integrante da equipe** a partir dos dados empíricos coletados em sua respectiva entrevista em campo. Essa quantidade cumpre rigorosamente a meta individual estabelecida pelo docente e situa-se dentro do intervalo metodológico recomendado por Barbosa e Silva (2010, p. 180), que preconica a definição de 3 a 12 personas para manter o foco do design sem sobrecarregar a tomada de decisão.

A Tabela 1 a seguir consolida a designação do elenco de personas por integrante da equipe:

<div align="center" markdown="1">

<p align="center"><b>Tabela 1: Elenco de Personas do PCI Concursos</b></p>

| ID | Tipo | Nome da Persona | Perfil Vinculado | Membro Responsável |
| :---: | :---: | :--- | :---: | :--- |
| **PER-01** | Primária | Maria Helena dos Santos | Perfil 2: Concurseiro Ativo / Adulto e Maduro | Daniel da Silva Batista |
| **PER-02** | Secundária | Lucas Ferreira Rocha | Perfil 1: Estudante Universitário / Iniciante e Recém-formado | Pedro Rocha Ferreira Lima |
| **PER-03** | Primária | Thiago Moraes Albuquerque | Perfil 1: Estudante Universitário / Iniciante | Arthur Sismene Carvalho |
| **PER-04** | Primária | Renata Cristina Freitas | Perfil 2: Concurseiro Ativo / Adulto e Maduro | Leonardo da Silva Lopes Júnior |
| **PER-05** | *A definir* | *A definir pelo responsável* | *A definir (Perfil 1, 2 ou 3)* | João Vitor Sales Ibiapina |

<p align="center"><b>Fonte:</b> Daniel da Silva Batista e Leonardo da Silva Lopes Júnior (2026).</p>

</div>

---

## 4. Detalhamento das Personas

### 4.1 Persona 1 — Maria Helena dos Santos (*Responsável: Daniel da Silva Batista*)

<div align="center" markdown="1">

<p align="center"><b>Tabela 2: Ficha de Caracterização da Persona 1 (Maria Helena dos Santos)</b></p>

| Atributo | Detalhamento da Persona |
| :--- | :--- |
| **Nome Completo** | Maria Helena dos Santos |
| **Idade / Gênero** | 53 anos | Feminino |
| **Escolaridade** | Ensino Superior Completo (Pedagogia) |
| **Ocupação Atual** | Profissional autônoma / prestadora de serviços, em transição de carreira |
| **Localização** | Taguatinga, Distrito Federal (DF) |
| **Classificação** | **Persona Primária** (Representante do Perfil 2: Concurseiro Ativo / Adulto e Maduro) |
| **Dispositivos Utilizados** | Notebook pessoal (Windows) para estudo diário e smartphone para acompanhar notícias de editais |
| **Frequência de Acesso** | Quase diária (visita o portal de 4 a 5 vezes por semana, especialmente à noite e fins de semana) |
| **Citação Típica** | *"Eu preciso de um site direto, onde eu encontre o edital e a prova certa para imprimir sem ter que adivinhar qual botão verde é o download real e qual é propaganda com vírus."* |
| **Base Empírica de Validação** | Modelada e validada empiricamente a partir da [Entrevista Gravada USR-01](https://youtu.be/YkYvCZDidaY) (06 min 19 s), realizada em 25/09/2026. |

<p align="center"><b>Fonte:</b> Daniel da Silva Batista (2026).</p>

</div>

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

<div align="center" markdown="1">

<p align="center"><b>Tabela 3: Ficha de Caracterização da Persona 2 (Lucas Ferreira Rocha)</b></p>

| Atributo | Detalhamento da Persona |
| :--- | :--- |
| **Nome Completo** | Lucas Ferreira Rocha |
| **Idade / Gênero** | 24 anos | Masculino |
| **Escolaridade** | Ensino Superior Completo (Administração - UnB) |
| **Ocupação Atual** | Assistente administrativo em escritório privado, em busca do primeiro cargo público |
| **Localização** | Águas Claras, Distrito Federal (DF) |
| **Classificação** | **Persona Secundária** (Representante do Perfil 1: Concurseiro Iniciante / Estudante Jovem e Recém-formado) |
| **Dispositivos Utilizados** | Smartphone (Android) para consultas diárias e notebook (Windows) para resolver questões e ler editais |
| **Frequência de Acesso** | Diária (acessa o portal de 3 a 5 vezes ao dia no intervalo do trabalho e à noite) |
| **Citação Típica** | *"Eu moro em Brasília e quero passar em um concurso daqui; não adianta o site me mostrar dezenas de prefeituras do interior de Goiás ou Mato Grosso misturadas com os editais do DF."* |
| **Base Empírica de Validação** | Modelada a partir da Análise Documental DOC-02 (dados abertos do PEP/MGI e do DODF sobre a concentração de certames no DF). |

<p align="center"><b>Fonte:</b> Pedro Rocha Ferreira Lima (2026).</p>

</div>

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

<div align="center" markdown="1">

<p align="center"><b>Tabela 4: Ficha de Caracterização da Persona 3 (Thiago Moraes Albuquerque)</b></p>

| Atributo | Detalhamento da Persona |
| :--- | :--- |
| **Nome Completo** | Thiago Moraes Albuquerque |
| **Idade / Gênero** | 21 anos | Masculino |
| **Escolaridade** | Ensino Superior Incompleto (5º semestre de Administração, curso noturno em instituição privada) |
| **Ocupação Atual** | Estudante; complementa a renda com trabalho intermitente de meio período no comércio |
| **Localização** | Ceilândia, Distrito Federal (DF) — desloca-se diariamente cerca de 1h30 até o campus |
| **Classificação** | **Persona Primária** (Representante do Perfil 1: Estudante Universitário / Iniciante) |
| **Dispositivos Utilizados** | Smartphone Android intermediário como dispositivo principal, com plano de dados limitado; notebook compartilhado com a família, disponível apenas nos fins de semana |
| **Frequência de Acesso** | Irregular e em rajadas (2 a 3 vezes por semana), concentrada nos deslocamentos de ônibus e nos intervalos entre aulas |
| **Citação Típica** | *"Eu tenho quarenta minutos de ônibus todo dia, dava pra matar umas dez questões nesse tempo. Mas no celular eu erro de clicar, perco o que respondi e no final nem sei quantas acertei."* |
| **Base Empírica de Validação** | Modelada a partir dos dados secundários consolidados na [Análise Documental DOC-03](perfil-de-usuario.md#53-analise-documental-03-responsavel-arthur-sismene-carvalho) (INEP, ABRES e IBGE). *A sessão `USR-03` não foi realizada e o respectivo vídeo não está disponível; a modelagem apoia-se exclusivamente em dados documentais secundários.* |

<p align="center"><b>Fonte:</b> Arthur Sismene Carvalho (2026).</p>

</div>

#### 4.3.1 Objetivos e Motivações no Sistema

* **Conquistar o Primeiro Vínculo Formal:** Thiago precisa cumprir o estágio obrigatório previsto na matriz curricular do curso e enxerga o setor público como destino desejável pela previsibilidade de horário, o que lhe permitiria conciliar trabalho e aulas noturnas. Sua motivação é reforçada pelo contexto documentado em `DOC-03`: a desocupação de aproximadamente 14% na faixa de 18 a 24 anos e a informalidade superior a 45% tornam o estágio a via mais concreta de entrada qualificada no mercado.
* **Aproveitar Janelas Curtas de Tempo Morto para Estudar:** Diferentemente do concurseiro com rotina estruturada de estudos, Thiago não dispõe de blocos longos e contínuos. Sua estratégia é fragmentar o estudo em sessões de 10 a 40 minutos durante os deslocamentos, resolvendo questões objetivas pelo celular — comportamento coerente com a consolidação do estudo mediado por tela apontada pelo Censo da Educação Superior, em que a modalidade a distância já responde por 50,7% das matrículas.
* **Calibrar o Próprio Nível de Preparo:** Como iniciante no domínio, Thiago ainda não sabe dimensionar a distância entre seu conhecimento atual e a exigência real das bancas. Recorre aos simulados menos para revisar conteúdo e mais para obter um **diagnóstico quantitativo** de desempenho que orientaria sua rotina de estudos.

#### 4.3.2 Habilidades e Atitudes Frente à Tecnologia

* **Perfil Tecnológico:** Nativo digital e tecnófilo. Opera múltiplas abas com desenvoltura, digita rapidamente em teclado virtual, reconhece padrões de interface consolidados em aplicativos e espera respostas imediatas do sistema. Domina plenamente o meio digital, mas desconhece o domínio de concursos.
* **Baixa Tolerância a Atrito:** Sua fluência tecnológica se traduz em **impaciência**. Abandona fluxos que exijam mais de três ou quatro toques sem retorno visível de progresso e interpreta lentidão de carregamento como defeito do serviço, não como limitação da própria conexão.
* **Restrição de Recurso, não de Habilidade:** A barreira de Thiago é material, e não cognitiva: plano de dados limitado, bateria disputada ao longo do dia, conexão 4G instável em trajeto e uso predominante do aparelho com uma única mão, em pé, em transporte coletivo em movimento.
* **Desconhecimento do Vocabulário do Domínio:** Não distingue banca organizadora de órgão contratante, ignora o significado de retificação, homologação ou cadastro de reserva e, sobretudo, **desconhece que "estágio probatório" não se refere a estágio estudantil** — ambiguidade terminológica que o conduz a resultados de busca inteiramente irrelevantes.

#### 4.3.3 Principais Dores e Frustrações com o PCI Concursos

* **Ausência de Oferta para o seu Estágio de Carreira:** A dor mais severa de Thiago é de natureza funcional, e não estética: o portal simplesmente **não indexa vagas de estágio**. A seção "Vagas" lista exclusivamente cargos efetivos e nenhum dos itens do menu contempla estágio ou programas de ingresso, o que faz com que a principal necessidade do maior segmento estudantil do país — mais de 18 milhões de estudantes aptos e não colocados, segundo a ABRES — permaneça inteiramente desatendida.
* **Simulado Desenhado para Desktop:** A seção de simulados apresenta uma árvore extensa de disciplinas e assuntos com milhares de questões cada (por exemplo, Direito Administrativo com mais de 7 mil questões), sem oferecer configuração de sessão por quantidade de questões nem cronômetro. No smartphone, as áreas de toque reduzidas e o deslocamento de layout provocado pelo carregamento tardio de anúncios resultam em marcação acidental de alternativas.
* **Ausência de Retorno Consolidado de Desempenho:** Ao encerrar a sessão de questões, Thiago não recebe placar agregado de acertos, histórico de evolução ou comentário explicativo das questões erradas, o que frustra justamente o objetivo diagnóstico que o trouxe à ferramenta.
* **Perda de Progresso por Instabilidade de Conexão:** Como estuda em trânsito, oscilações de sinal interrompem a sessão. Sem preservação automática do progresso, o trabalho já realizado é perdido — o que o desestimula a retomar a atividade em ocasiões subsequentes.

---

### 4.4 Persona 4 — Renata Cristina Freitas (*Responsável: Leonardo da Silva Lopes Júnior*)

<div align="center" markdown="1">

<p align="center"><b>Tabela 5: Ficha de Caracterização da Persona 4 (Renata Cristina Freitas)</b></p>

| Atributo | Detalhamento da Persona |
| :--- | :--- |
| **Nome Completo** | Renata Cristina Freitas |
| **Idade / Gênero** | 31 anos | Feminino |
| **Escolaridade** | Ensino Superior Completo (Administração de Empresas) |
| **Ocupação Atual** | Assistente Administrativa em empresa de logística (CLT, 44 horas semanais) |
| **Localização** | Águas Claras, Distrito Federal (DF) |
| **Classificação** | **Persona Primária** (Representante do Perfil 2: Concurseiro Ativo / Adulto e Maduro) |
| **Dispositivos Utilizados** | Smartphone Android intermediário (uso intensivo durante deslocamentos e intervalos de trabalho); computador desktop no escritório e notebook pessoal em casa |
| **Frequência de Acesso** | Diária (acessa nos intervalos de almoço e consulta o e-mail várias vezes ao dia em busca de editais) |
| **Citação Típica** | *"Como eu trabalho o dia todo, meu estudo precisa ser objetivo. Eu uso as pausas para assistir a videoaulas pontuais e dependo de alertas no meu e-mail para não perder prazos de inscrição."* |
| **Base Empírica de Validação** | Modelada e fundamentada empiricamente a partir da [Análise Documental DOC-04](perfil-de-usuario.md#54-analise-documental-04-responsavel-leonardo-da-silva-lopes-junior) (dados de consumo de vídeo e hábitos digitais da TIC Domicílios e Censo EAD.BR) e vinculada à sessão individual `USR-04`. |

<p align="center"><b>Fonte:</b> Leonardo da Silva Lopes Júnior (2026).</p>

</div>

#### 4.4.1 Objetivos e Motivações no PCI Concursos

* **Conquistar Aprovação em Cargo Público de Nível Superior:** Almeja ingressar na carreira pública em cargos administrativos (como Analista Administrativo de Ministérios, Agências Reguladoras ou Tribunais do DF), visando plano de carreira estruturado e estabilidade funcional.
* **Estudo Ágil e Focado por Meio de Videoaulas:** Utiliza a aba de aulas do PCI Concursos para sanar dúvidas teóricas pontuais de disciplinas básicas (Direito Administrativo, Direito Constitucional e Língua Portuguesa) durante intervalos de 15 a 30 minutos em sua rotina laboral (*microlearning*).
* **Automação no Acompanhamento de Editais:** Depende de alertas recebidos por e-mail para ser notificada sobre a publicação de editais, retificações e aberturas de inscrições na região do DF sem despender horas diárias navegando ativamente por dezenas de páginas.

#### 4.4.2 Relação com a Tecnologia e Hábitos de Estudo

* **Usuária Digitalmente Fluente no Trabalho:** Lida rotineiramente com navegadores web, e-mails corporativos, editores de texto e planilhas eletrônicas. Espera interfaces diretas, sem burocracia ou fluxos desnecessários de navegação.
* **Estudo Fragmentado no Celular:** Devido à jornada integral de trabalho, aproveita pequenos intervalos de tempo (como 20 a 30 minutos no almoço ou no transporte público) para estudar pelo smartphone com fones de ouvido.
* **Relação com Alertas e Comunicação:** Considera o e-mail seu canal prioritário para comunicações formais e avisos de trabalho. Detesta receber malas diretas desorganizadas ou *spam* sobre concursos de outros estados para os quais não tem interesse em se inscrever.

#### 4.4.3 Principais Dores e Frustrações com o PCI Concursos

* **Desorganização Pedagógica na Seção de Videoaulas (`TAR-07`):** As aulas disponíveis no portal são meros vídeos embutidos do YouTube agrupados sem taxonomia refinada por disciplina ou tópico do edital. Não há indicação da duração dos blocos, cronômetro, índice de assuntos abordados ou links diretos para download de resumos e slides dos professores em PDF.
* **Poluição Visual e Ruído Publicitário Intrusivo:** A página de reprodução das videoaulas é rodeada por anúncios dinâmicos expansíveis que distraem a atenção e, no celular, deslocam o player de vídeo, provocando cliques involuntários em banners comerciais.
* **Formulário de Alertas Obsoleto e Sem Filtros (`TAR-08`):** O cadastro para recebimento de notícias de concursos não permite que Renata selecione suas preferências de carreira (ex.: Área Administrativa) ou localização geográfica (apenas DF/Centro-Oeste), fazendo com que sua caixa de entrada seja inundada por editais de prefeituras distantes.
* **Ausência de Confirmação Dupla no Cadastro:** O formulário de e-mail possui apenas um campo para digitação, sem verificação de confirmação e sem mensagem de ativação por e-mail (*double opt-in*), gerando insegurança quanto ao correto registro do contato.

---

### 4.5 Persona 5 — *Responsável: João Vitor Sales Ibiapina*

> *Seção reservada para a modelagem individual da persona pelo integrante João Vitor Sales Ibiapina, a ser elaborada com base nos dados empíricos de sua respectiva entrevista gravada.*

---

## 5. Bibliografia

> BARBOSA, S. D. J.; SILVA, B. S. *Interação Humano-Computador*. Rio de Janeiro: Elsevier, 2010.  
> COOPER, Alan. *The Inmates Are Running the Asylum: Why High Tech Products Drive Us Crazy and How to Restore the Sanity*. Indianapolis: Sams Publishing, 1999.  
> COURAGE, Catherine; BAXTER, Kathy. *Understanding Your Users: A Practical Guide to User Requirements Methods, Tools, and Techniques*. San Francisco: Morgan Kaufmann, 2005.

## 6. Histórico de Versões

<div align="center" markdown="1">

| Versão | Data | Descrição | Autor(es) | Revisor(es) |
| :---: | :---: | :--- | :---: | :---: |
| `1.0` | 21/09/2026 | Fundamentação teórica de personas (Cooper; Barbosa & Silva), definição do elenco com 5 personas e estruturação da Persona 1 (Mateus Oliveira). | Daniel da Silva Batista | Pedro Rocha Ferreira Lima |
| `1.1` | 21/09/2026 | Remoção da antipersona e ajuste do elenco para designação por membro, reservando as seções 4.2 a 4.5 para modelagem individual após entrevistas de campo. | Daniel da Silva Batista | Pedro Rocha Ferreira Lima |
| `1.2` | 25/09/2026 | Vinculação empírica da Persona 1 (Maria Helena) com a entrevista individual gravada USR-01. | Daniel da Silva Batista | Pedro Rocha Ferreira Lima |
| `1.3` | 27/09/2026 | Modelagem da Persona 2 (Lucas Ferreira Rocha) por Pedro Rocha Ferreira Lima fundamentada na Análise Documental DOC-02. | Pedro Rocha Ferreira Lima | Daniel da Silva Batista |
| `1.4` | 27/09/2026 | Modelagem integral da Persona 3 (Thiago Moraes Albuquerque), representante do Perfil 1, com ficha de caracterização, objetivos, atitudes tecnológicas e dores fundamentadas na análise documental DOC-03. | Arthur Sismene Carvalho | Daniel da Silva Batista |
| `1.5` | 28/09/2026 | Modelagem integral da Persona 4 (Renata Cristina Freitas), representante do Perfil 2, fundamentada na Análise Documental DOC-04 e vinculada às tarefas TAR-07 e TAR-08. | Leonardo da Silva Lopes Júnior | Daniel da Silva Batista |

</div>
