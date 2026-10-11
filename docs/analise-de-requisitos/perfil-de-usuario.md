<div align="center" markdown="1">

<p align="center"><b>Tabela de Contribuição</b></p>

| Membro | Contribuição |
| :--- | :--- |
| Daniel da Silva Batista | Estruturação dos dois métodos de coleta (análise documental e entrevistas), elaboração da matriz individual (DOC-01 a DOC-05 e USR-01 a USR-05), detalhamento de DOC-01, condução e registro da [Entrevista Gravada USR-01](https://youtu.be/YkYvCZDidaY), tabela síntese dos perfis e roteiro unificado. |
| Arthur Sismene Carvalho | Estruturação dos dados demográficos, revisão do roteiro de validação de tarefas e elaboração integral da Análise Documental `DOC-03` (INEP, ABRES e IBGE), com inspeção da arquitetura de informação do portal e levantamento da lacuna funcional de estágios. |
| João Vitor Sales Ibiapina | Definição dos critérios de acessibilidade e caracterização do perfil com foco em vagas especiais e idosos. |
| Leonardo da Silva Lopes Júnior | Elaboração integral da Análise Documental DOC-04 (Cetic.br/TIC Domicílios, Censo EAD.BR e Comscore), identificação de requisitos para videoaulas e alertas de vagas, estruturação da Seção 6 de delimitação e enriquecimento do escopo funcional de IHC (Issue #14) e revisão metodológica. |
| Pedro Rocha Ferreira Lima | Definição dos critérios de agrupamento dos perfis, elaboração da Análise Documental DOC-02 (Painel Estatístico de Pessoal e DODF) e revisão técnica geral. |
| Gemini | Auxílio na estruturação textual e formatação do artefato em Markdown (conforme Política de Uso de IA). |

<p align="center" style="font-size: 0.85em; margin-top: -0.6em;"><b>Fonte:</b> Daniel da Silva Batista (2026).</p>

</div>

# Perfil do Usuário

## 1. Introdução

O desenvolvimento de um sistema interativo centrado no usuário exige a compreensão profunda de quem são as pessoas que interagem com o produto, quais são seus objetivos, suas habilidades técnicas, suas limitações e o contexto em que desempenham suas atividades. Conforme preconizam Barbosa e Silva (2010), o **Perfil do Usuário** é uma caracterização detalhada do público-alvo que sintetiza atributos relevantes para a concepção e avaliação da interface.

No contexto do portal **PCI Concursos**, identificar com precisão o perfil dos usuários é fundamental, uma vez que o público que busca concursos públicos no Brasil é marcadamente heterogêneo, variando desde jovens universitários hiperconectados até cidadãos mais velhos ou com restrições de letramento digital que almejam a estabilidade no serviço público.

## 2. Metodologia

Para assegurar o rigor acadêmico preconizado na literatura de IHC e a viabilidade prática do projeto, a equipe adotou uma abordagem multimétodo composta por **dois métodos complementares** de coleta e consolidação de dados (Barbosa e Silva, 2010, Cap. 8):

1. **Método 1 — Análise Documental e Estudos de Domínio (Secundário):** Levantamento de dados secundários e estatísticas do ecossistema de concursos públicos e educação para concursos no Brasil (dados do IBGE, IPEA, relatórios de bancas examinadoras e perfis demográficos de candidatos), permitindo o delineamento das faixas etárias preponderantes, níveis de escolaridade e padrões gerais de acesso à internet.
2. **Método 2 — Entrevistas Semiestruturadas Individuais Gravadas (Primário):** Condução de entrevistas em profundidade com usuários reais do domínio. Cada um dos 5 integrantes da equipe é responsável por entrevistar e gravar uma sessão individual com um usuário real representativo (com duração média de 10 a 15 minutos), aplicando o TCLE, coletando dados qualitativos e acompanhando a realização prática de duas tarefas no portal PCI Concursos.

## 3. Atributos e Grupos de Atributos do Perfil do Usuário

A caracterização do perfil apoia-se nas diretrizes teóricas de Hackos e Redish (1998) e Courage e Baxter (2005), articuladas com os quatro grupos essenciais de atributos preconizados por Barbosa e Silva (2010, Cap. 8):

1. **Dados Demográficos e Faixa Etária:** Jovens/estudantes (18 a 25 anos), adultos e candidatos maduros (26 a 55 anos) e candidatos seniores (56+ anos), considerando escolaridade, ocupação profissional e demandas visuais e cognitivas.
2. **Nível de Experiência e Competências:** Varia de candidatos *leigos/iniciantes* a concurseiros *experientes/especialistas*, avaliando a familiaridade com termos burocráticos de editais, bancas e normas jurídicas.
3. **Atitudes Frente à Tecnologia:** Comportamento entre *tecnófilos* (alta agilidade, atalhos de teclado e exploração autônoma) e *tecnófobos* (insegurança com downloads de arquivos, navegação cautelosa e aversão a propagandas enganosas).
4. **Tarefas Primárias no Sistema:** Atividades centrais de busca de editais por órgãos/regiões, consulta de cronogramas, realização de simulados e download de provas e gabaritos oficiais em PDF.

Esses atributos subsidiam a consolidação dos perfis sintetizados a seguir.

## 4. Tabela Síntese dos Perfis de Usuário do Sistema

A partir da análise holística do domínio do portal **PCI Concursos**, foram consolidados **três perfis de usuário do sistema**, abrangendo tanto os usuários finais quanto os atores responsáveis pela operação e sustentação do portal, conforme estruturado na Tabela 1 segundo o modelo de Barbosa e Silva (2010, p. 178, Exemplo 8.1):

<div align="center" markdown="1">

<p align="center"><b>Tabela 1: Síntese dos Três Perfis de Usuário do Sistema PCI Concursos</b></p>

| Atributo | Perfil 1: Candidato / Concurseiro *(Perfil Trabalhado no Projeto)* | Perfil 2: Publicador / Alimentador de Editais | Perfil 3: Administrador / Gestor do Portal |
| :--- | :--- | :--- | :--- |
| **Papel no Sistema** | Usuário final externo (consumidor de oportunidades e materiais) | Usuário operacional interno (alimentador e curador de conteúdo) | Usuário técnico/administrativo (gestão de infraestrutura e receita) |
| **Prioridade de Design** | **Primário** (foco principal do reprojeto em IHC) | Secundário (foco em produtividade e agilidade de cadastro) | Secundário (foco em estabilidade, moderação e métricas) |
| **Faixa Etária** | 18 a 55+ anos (ampla diversidade: jovens a seniores) | 22 a 45 anos | 28 a 55 anos |
| **Nível de Instrução** | Ensino Fundamental a Superior completo / Pós-graduação | Ensino Superior em Comunicação, Jornalismo, Letras ou TI | Ensino Superior ou Pós-graduação em TI / Gestão |
| **Ocupação Típica** | Estudantes, recém-formados, empregados CLT, servidores e autônomos | Redator web, analista de conteúdo, estagiário de curadoria de certames | Administrador de sistemas (SysAdmin), desenvolvedor ou gestor de tráfego |
| **Atividades Principais** | Pesquisar editais por palavra-chave/órgão, filtrar vagas regionais, baixar cadernos de provas e gabaritos em PDF e resolver simulados | Realizar triagem diária em diários oficiais (DOU, DODF, DOE), cadastrar novos concursos, anexar retificações e atualizar prazos de inscrição | Gerenciar servidores e banco de dados, monitorar métricas de audiência, moderar fóruns/comentários e configurar inventário de publicidade |
| **Experiência Tecnológica** | Moderada a alta (uso rotineiro de navegadores móveis e desktop) | Alta (habilidade com painéis administrativos, CMS, digitação ágil e web) | Avançada (experiência profunda em infraestrutura, redes e segurança) |
| **Conhecimento do Domínio** | Variável (desde iniciantes até concurseiros experientes) | Avançado (amplo conhecimento da legislação de certames e diários oficiais) | Técnico (focado na arquitetura do portal, CDN e disponibilidade de links) |
| **Frequência de Acesso** | Diária a semanal (guiada pelo calendário de certames e rotina de estudos) | Contínua durante a jornada de trabalho (alimentação em tempo real) | Diária (monitoramento contínuo de disponibilidade e picos de acessos) |
| **Dispositivo Principal** | Smartphones pessoais, notebooks e computadores de trabalho | Computadores desktop com múltiplos monitores na estação de trabalho | Computadores de mesa (estações de trabalho técnicas) e servidores |
| **Principais Dores na Interface** | Sobrecarga de anúncios enganosos, botões falsos de download de PDF, ausência de filtros refinados por UF e perda de prazos de retificações | Dificuldade de captura de dados em diários oficiais, lentidão na publicação manual de anexos e risco de duplicidade de editais | Sobrecarga de tráfego em dias de grandes certames (ex.: CNU), vulnerabilidade a scripts de raspagem abusiva e poluição do layout por anúncios |

<p align="center" style="font-size: 0.85em; margin-top: -0.6em;"><b>Fonte:</b> Daniel da Silva Batista e Pedro Rocha Ferreira Lima (2026), com base no domínio do PCI Concursos e no modelo de Barbosa e Silva (2010).</p>

</div>

> **Nota de Delimitação do Escopo:** Em consonância com as diretrizes da disciplina de Interação Humano-Computador e as instruções do docente, embora o sistema envolva os três perfis de usuários mapeados acima, o presente projeto concentrará seus esforços de **análise empírica, elicitação de requisitos, modelagem de personas, cenários e reprojeto de interface estritamente no Perfil 1 (Candidato / Concurseiro)**. Essa escolha justifica-se pelo fato de os candidatos constituírem a imensa maioria dos usuários ativos e os maiores impactados pelas barreiras de usabilidade e acessibilidade do portal.

---

## 5. Método Sem Usuário: Análise Documental Individual

A **Análise Documental** constitui uma técnica clássica de investigação em Interação Humano-Computador que prescinde do contato direto com usuários finais, consistindo na coleta, triagem e exame sistemático de fontes documentais secundárias, relatórios estatísticos, legislações e acervos oficiais do domínio (Barbosa e Silva, 2010, Cap. 7 e 8). 

No projeto do **PCI Concursos**, a análise documental atua como base empírica preliminar para a formulação das hipóteses de perfil e mapeamento do ecossistema de concursos no Brasil. Assim como nas entrevistas, **cada integrante da equipe é individualmente responsável pela investigação aprofundada de uma fonte documental oficial**, extraindo subsídios para embasar o projeto:

<div align="center" markdown="1">

<p align="center"><b>Tabela 2: Matriz de Registro da Análise Documental Individual</b></p>

| Integrante | Código | Fonte Documental Investigada | Foco Temático da Investigação | Data | Principais Dados e Evidências Extraídas |
| :--- | :---: | :--- | :--- | :---: | :--- |
| **Daniel da Silva Batista** | `DOC-01` | • [*Atlas do Estado Brasileiro* (IPEA, 2024)](https://www.ipea.gov.br/atlasestado/)<br>• [*PNAD Contínua - Setor Público* (IBGE, 2024)](https://www.ibge.gov.br/estatisticas/sociais/trabalho/9173-pesquisa-nacional-por-amostra-de-domicilios-continua-trimestral.html) | Perfil sociodemográfico dos concurseiros; demanda por busca de editais e cadernos de provas (TAR-01 e TAR-02) | 22/09/2026 | • 60% de presença feminina no serviço público.<br>• Concentração de candidatos nas faixas de 35 a 55 anos.<br>• Mediana salarial de R$ 3,2 mil em cargos de apoio.<br>• Dependência de cadernos de prova e gabaritos em PDF. |
| **Pedro Rocha Ferreira Lima** | `DOC-02` | • [*Painel Estatístico de Pessoal* (PEP/MGI, 2024)](https://www.gov.br/servidor/pt-br/acesso-a-informacao/faq/painel-estatistico-de-pessoal-pep)<br>• [*Diário Oficial do DF* (DODF, 2024)](https://dodf.df.gov.br/) | Concentração regional no Centro-Oeste/DF e dinâmica de retificações de editais (TAR-03 e TAR-04) | 27/09/2026 | • Mais de 65% das vagas do Centro-Oeste concentram-se no DF e RIDE.<br>• ~80% dos editais sofrem retificação nas 3 primeiras semanas.<br>• Necessidade de filtro dedicado por UF e selo visual de retificação. |
| **Arthur Sismene Carvalho** | `DOC-03` | • [*Censo da Educação Superior* (INEP/MEC, 2024)](https://www.gov.br/inep/pt-br/areas-de-atuacao/pesquisas-estatisticas-e-indicadores/censo-da-educacao-superior)<br>• [*Estatísticas de Estágio* (ABRES, 2025)](https://abres.org.br/estatisticas/)<br>• [*PNAD Contínua Trimestral* (IBGE, 1º tri. 2026)](https://www.ibge.gov.br/estatisticas/sociais/trabalho/17270-pnad-continua.html) | Perfil do estudante-concurseiro de 18 a 25 anos: estudo mediado por tela, escassez estrutural de estágio e precariedade de entrada no mercado (TAR-05 e TAR-06) | 27/09/2026 | • EAD ultrapassa o presencial: 50,7% das matrículas de graduação.<br>• Apenas 6% dos 20,1 milhões de estudantes aptos conseguem estagiar.<br>• Desocupação de ~14% na faixa de 18 a 24 anos, contra 6,1% nacional.<br>• Informalidade acima de 45% nessa mesma faixa etária. |
| **Leonardo da Silva Lopes Júnior** | `DOC-04` | • [*TIC Domicílios 2024* (Cetic.br/NIC.br)](https://cetic.br/pt/pesquisa/domicilios/)<br>• [*Censo EAD.BR 2023/2024* (ABED)](https://www.abed.org.br/site/pt/midiateca/censo_ead/)<br>• [*Relatório de Comunicação Digital* (Comscore, 2024)](https://www.comscore.com/) | Hábitos de consumo de videoaulas em dispositivos móveis e canais de alertas/newsletter de concursos (TAR-07 e TAR-08) | 28/09/2026 | • 82% dos internautas assistem a vídeos/tutoriais educativos online.<br>• 62% acessam predominantemente por smartphone.<br>• Microlearning (10 a 20 min) eleva retenção em 35% com material de apoio.<br>• E-mail é canal prioritário de alerta formal para 68% dos concurseiros. |
| **João Vitor Sales Ibiapina** | `DOC-05` | *A definir pelo responsável* | Foco a definir (TAR-09 e TAR-10) | A definir | *A preencher pelo integrante após condução da análise documental.* |

<p align="center" style="font-size: 0.85em; margin-top: -0.6em;"><b>Fonte:</b> Daniel da Silva Batista e Pedro Rocha Ferreira Lima (2026), a partir de dados públicos do IPEA, IBGE, MGI e GDF.</p>

</div>

### 5.1 Análise Documental 01 — *Responsável: Daniel da Silva Batista*

* **Código da Análise:** `DOC-01`
* **Integrante Responsável:** Daniel da Silva Batista
* **Data da Investigação:** 22/09/2026
* **Fontes Documentais Analisadas:** 
  1. *Atlas do Estado Brasileiro* — Instituto de Pesquisa Econômica Aplicada (IPEA, 2024);
  2. *Pesquisa Nacional por Amostra de Domicílios Contínua (PNAD Contínua) - Ocupações no Setor Público* — Instituto Brasileiro de Geografia e Estatística (IBGE, 2024).
* **Links de Acesso Oficial (Dados Abertos e sem Barreira de Login):** 
  * [Plataforma IPEA — Atlas do Estado Brasileiro](https://www.ipea.gov.br/atlasestado/)
  * [Portal IBGE — PNAD Contínua (Mercado de Trabalho e Ocupações)](https://www.ibge.gov.br/estatisticas/sociais/trabalho/9173-pesquisa-nacional-por-amostra-de-domicilios-continua-trimestral.html)
* **Tarefas de IHC Vinculadas:** 
  * `TAR-01`: Busca de edital por palavra-chave e localização de vagas;
  * `TAR-02`: Download de cadernos de provas e gabaritos preliminares/definitivos em PDF.
* **Foco da Investigação:** Perfil sociodemográfico (gênero, faixa etária e remuneração) dos candidatos a vagas públicas e seu impacto direto no modelo mental de estudo e manuseio de arquivos em PDF.
* **Pergunta de Pesquisa:** *Qual é o perfil sociodemográfico real dos postulantes a carreiras públicas no Brasil e de que maneira suas características etárias e ocupacionais condicionam a demanda por editais e provas anteriores em PDF no portal?*

#### 5.1.1 Identificação e Caracterização da Fonte
Para viabilizar uma investigação empírica auditável, pública e sem barreiras de autenticação, foram examinadas duas bases estatísticas oficiais de referência nacional:
1. O **Atlas do Estado Brasileiro (IPEA)**, plataforma pública mantida pelo Instituto de Pesquisa Econômica Aplicada que consolida microdados da RAIS, SIAPE e censos nacionais, oferecendo séries históricas sobre a força de trabalho pública, distribuição por faixas etárias, gênero e remunerações;
2. A **PNAD Contínua (IBGE)**, principal levantamento estatístico sobre o mercado de trabalho brasileiro, que detalha a busca da população por estabilidade em empregos formais e ocupações públicas.

#### 5.1.2 Objetivos da Análise Documental em IHC
Conforme preceituam Barbosa e Silva (2010, Cap. 7 e 8), a Análise Documental permite extrair dados sociodemográficos fidedignos e compreender as regras do domínio antes da interação direta com usuários. Os objetivos específicos foram:
1. Mapear o perfil demográfico real dos cidadãos que buscam concursos no Brasil a partir de estatísticas de acesso público;
2. Desconstruir estereótipos que assumem que concurseiros são exclusivamente jovens universitários;
3. Fornecer embasamento quantitativo para a definição do **Perfil de Usuário Trabalhado** e modelagem da Persona Primária **PER-01 (Maria Helena dos Santos)**;
4. Identificar necessidades de usabilidade para as tarefas de busca de editais (**TAR-01**) e download de cadernos de provas e gabaritos em PDF (**TAR-02**).

#### 5.1.3 Metodologia de Exame do Documento
Seguindo o roteiro de exame sistemático de documentos prescrito por Barbosa e Silva (2010):
* **Fase 1 (Triagem Exploratória):** Consulta às dimensões de "Gênero", "Faixa Etária" e "Remuneração" na plataforma do IPEA e nos relatórios de emprego do IBGE;
* **Fase 2 (Extração Quantitativa):** Coleta das proporções de gênero, das faixas etárias ativas no serviço público e das médias remuneratórias das carreiras de nível intermediário/técnico;
* **Fase 3 (Mapeamento de Necessidades de IHC):** Análise de como o perfil dos candidatos impacta a usabilidade, a sobrecarga cognitiva e a necessidade de documentos em PDF na interface do PCI Concursos.

#### 5.1.4 Achados e Evidências Estatísticas Extraídas
* **Maioria Feminina no Serviço Público:** Os microdados consolidados pelo IPEA revelam que cerca de **60% do funcionalismo público civil é composto por mulheres**, dado que se reflete diretamente no contingente de concurseiras que almejam a estabilidade no setor público.
* **Concentração em Faixas Adultas e Maduras:** O cruzamento das bases do IPEA e do IBGE comprova que a maior fatia de profissionais ativos e postulantes a cargos públicos concentra-se entre **35 e 55 anos**, desmontando a premissa de um público estritamente jovem e comprovando a relevância crítica do perfil de concurseiros adultos.
* **Realidade Remuneratória e Cargos de Apoio:** A mediana salarial do funcionalismo público situa-se em torno de R$ 3,2 mil, indicando que a maciça maioria dos concurseiros busca vagas de nível médio, técnico ou assistencial em órgãos distritais e municipais em busca de previsibilidade financeira.
* **Hábito de Estudo por Resolução de Provas Anteriores em PDF:** Por conciliarem trabalho e estudo, candidatos adultos priorizam métodos pragmáticos de treino baseados na impressão ou download de cadernos de provas anteriores e gabaritos em formato PDF.

#### 5.1.5 Embasamento para o Perfil de Usuário, Personas e IHC
* **Sustentação Empírica da Persona PER-01:** Os dados do IPEA e do IBGE sustentam diretamente as características sociodemográficas de **Maria Helena dos Santos (PER-01)** (53 anos, mulher, técnica administrativa em busca de estabilidade funcional no DF).
* **Fundamentação dos Cenários CEN-01 e CEN-02:** Os achados justificam cenários centrados na busca rápida de editais de apoio no DF (`CEN-01`) e no download imediato de cadernos de provas e gabaritos oficiais em PDF (`CEN-02`).
* **Diretrizes de Usabilidade:** As evidências apontam a necessidade de links diretos e legíveis para arquivos em PDF (evitando sobrecarga visual e confusão com anúncios publicitários) e de tipografia com contraste adequado, respeitando as capacidades do usuário adulto conforme preconizado por Barbosa e Silva (2010).

---

### 5.2 Análise Documental 02 — *Responsável: Pedro Rocha Ferreira Lima*

* **Código da Análise:** `DOC-02`
* **Integrante Responsável:** Pedro Rocha Ferreira Lima
* **Data da Investigação:** 27/09/2026
* **Fontes Documentais Analisadas:** 
  1. *Painel Estatístico de Pessoal (PEP)* — Ministério da Gestão e da Inovação em Serviços Públicos (MGI, 2024);
  2. *Diário Oficial do Distrito Federal (DODF) - Seção III (Editais e Avisos de Concursos)* — Governo do Distrito Federal (GDF, 2024).
* **Links de Acesso Oficial (Dados Abertos e sem Barreira de Login):** 
  * [Painel Estatístico de Pessoal - MGI](https://www.gov.br/servidor/pt-br/acesso-a-informacao/faq/painel-estatistico-de-pessoal-pep)
  * [Diário Oficial do Distrito Federal - DODF](https://dodf.df.gov.br/)
* **Tarefas de IHC Vinculadas:** 
  * `TAR-03`: Filtragem por região geográfica (Centro-Oeste / DF);
  * `TAR-04`: Consulta a retificações, cronogramas e prazos de editais.
* **Foco da Investigação:** Concentração geográfica de oportunidades públicas na macrorregião Centro-Oeste e dinâmica de publicação de retificações e alterações de prazos em diários oficiais.
* **Pergunta de Pesquisa:** *Qual o grau de concentração de vagas públicas no Distrito Federal frente aos demais estados do Centro-Oeste e qual a frequência de retificações de cronograma enfrentadas pelos candidatos nas primeiras semanas após o edital?*

#### 5.2.1 Identificação e Caracterização da Fonte
Para fundamentar a investigação regional e a dinâmica de prazos no portal PCI Concursos de forma empírica e pública, foram examinadas duas fontes documentais oficiais:
1. O **Painel Estatístico de Pessoal (PEP/MGI)**, plataforma pública mantida pelo Ministério da Gestão e da Inovação que agrega dados sobre a alocação geográfica dos servidores e a distribuição de cargos públicos em nível federal, evidenciando a expressiva concentração funcional no Distrito Federal;
2. O **Diário Oficial do Distrito Federal (DODF)**, veículo oficial do GDF responsável por publicar integralmente todos os editais de abertura, comunicados de prorrogação e erratas/retificações de seleções públicas distritais.

#### 5.2.2 Objetivos da Análise Documental em IHC
Com amparo nas diretrizes de Barbosa e Silva (2010, Cap. 7 e 8), a investigação documental teve como objetivos:
1. Mapear a concentração de oportunidades de concursos na região Centro-Oeste com ênfase no Distrito Federal;
2. Quantificar a frequência com que editais sofrem alterações em seus cronogramas oficiais (retificações de datas de prova, prazos de inscrição e conteúdo);
3. Subsidiar a modelagem empírica da Persona Secundária **PER-02 (Lucas Ferreira Rocha)** e dos **Cenários 03 e 04**;
4. Identificar necessidades de usabilidade dos filtros regionais (`TAR-03`) e de monitoramento transparente de retificações (`TAR-04`).

#### 5.2.3 Metodologia de Exame do Documento
A análise seguiu o método sistemático de Barbosa e Silva (2010):
* **Fase 1 (Triagem Regional):** Consulta aos microdados do PEP/MGI por unidade da federação e análise das publicações da Seção III do DODF para mensurar o volume de editais do DF em comparação com outros estados da região Centro-Oeste;
* **Fase 2 (Levantamento de Retificações):** Exame de uma amostra de 10 certames abertos no DF em 2024, verificando a quantidade de publicações complementares e erratas geradas entre a publicação do edital e o encerramento do prazo recursal;
* **Fase 3 (Mapeamento de Necessidades de IHC):** Identificação de barreiras de usabilidade enfrentadas pelo candidato jovem e universitário ao tentar isolar concursos de Brasília no portal PCI Concursos.

#### 5.2.4 Achados e Evidências Estatísticas Extraídas
* **Concentração Crítica no DF:** Os microdados do PEP/MGI indicam que mais de **65% das oportunidades abertas no Centro-Oeste destinam-se ao Distrito Federal**, revelando que concurseiros de Brasília buscam quase que exclusivamente vagas distritais ou federais com lotação local, sem interesse em certames municipais de cidades distantes de Goiás ou Mato Grosso.
* **Alta Volatilidade de Cronogramas (80% com Retificação):** O exame documental no DODF comprovou que cerca de **80% dos editais sofrem ao menos uma retificação formal nas primeiras 3 semanas**, majoritariamente prorrogando prazos de inscrição, alterando critérios de isenção ou adiando a data de aplicação das provas objetivas.
* **Sobrecarga de Verificação no PCI Concursos:** No formato atual do portal, o candidato é forçado a reler notícias inteiras para descobrir se a data da prova mudou, gerando insegurança e risco de perda de prazos.

#### 5.2.5 Embasamento para o Perfil de Usuário, Personas e IHC
* **Sustentação da Persona PER-02:** Os dados comprovam a rotina de concurseiros recém-formados em Brasília, embasando **Lucas Ferreira Rocha (PER-02)** (24 anos, administrador, focado em vagas locais).
* **Fundamentação dos Cenários CEN-03 e CEN-04:** Justifica a formulação de cenários voltados à filtragem sem ruído no DF (`CEN-03`) e ao acompanhamento ágil de erratas (`CEN-04`).
* **Diretrizes de Usabilidade:** Demonstra a relevância de permitir a seleção direta por Unidade Federativa (DF) sem misturar cidades do interior da macrorregião, bem como a necessidade de sinalização visual clara e imediata de editais retificados (evitando que o usuário precise abrir e ler todo o corpo da notícia para identificar alterações em prazos cruciais).

---

### 5.3 Análise Documental 03 — *Responsável: Arthur Sismene Carvalho*

* **Código da Análise:** `DOC-03`
* **Integrante Responsável:** Arthur Sismene Carvalho
* **Data da Investigação:** 27/09/2026
* **Fontes Documentais Analisadas:**
  1. *Censo da Educação Superior 2024* — Instituto Nacional de Estudos e Pesquisas Educacionais Anísio Teixeira (INEP/MEC, 2025);
  2. *Estatísticas do Mercado de Estágio no Brasil* — Associação Brasileira de Estágios (ABRES, 2025);
  3. *Pesquisa Nacional por Amostra de Domicílios Contínua Trimestral — 1º trimestre de 2026* — Instituto Brasileiro de Geografia e Estatística (IBGE, 2026).
* **Links de Acesso Oficial (Dados Abertos e sem Barreira de Login):**
  * [INEP — Censo da Educação Superior](https://www.gov.br/inep/pt-br/areas-de-atuacao/pesquisas-estatisticas-e-indicadores/censo-da-educacao-superior)
  * [ABRES — Estatísticas do Mercado de Estágio](https://abres.org.br/estatisticas/)
  * [IBGE — PNAD Contínua Trimestral](https://www.ibge.gov.br/estatisticas/sociais/trabalho/17270-pnad-continua.html)
* **Tarefas de IHC Vinculadas:**
  * `TAR-05`: Realização de simulado de questões online com feedback de gabarito;
  * `TAR-06`: Busca de oportunidades de estágio de nível superior no Distrito Federal.
* **Foco da Investigação:** Comportamento do estudante de graduação (predomínio de EAD e estudo mediado por tela) e dimensão da demanda reprimida por oportunidades de estágio no setor público.
* **Pergunta de Pesquisa:** *Qual é o perfil do estudante-concurseiro de 18 a 25 anos no Brasil e de que maneira o predomínio do estudo digital e a escassez de vagas de estágio justificam a necessidade de simulados online e de uma categoria dedicada a estágios no portal?*

#### 5.3.1 Identificação e Caracterização da Fonte

Enquanto a análise documental `DOC-01` caracterizou o concurseiro adulto e maduro já inserido no mercado, a presente investigação dedica-se ao extremo oposto da pirâmide etária do domínio: o **estudante em formação que utiliza o portal como porta de entrada no serviço público**, correspondente ao **Perfil 1 (Candidato / Concurseiro)** da Tabela 1. Para tanto, foram trianguladas três bases públicas e auditáveis, sem exigência de autenticação:

1. O **Censo da Educação Superior (INEP/MEC)**, levantamento censitário anual obrigatório que cobre a totalidade das instituições de ensino superior brasileiras, fornecendo matrículas, modalidade de oferta (presencial ou a distância), rede administrativa, ingressantes e concluintes;
2. As **Estatísticas do Mercado de Estágio (ABRES)**, compiladas pela Associação Brasileira de Estágios a partir dos registros de agentes de integração e das bases do Ministério do Trabalho e Emprego sob a égide da Lei nº 11.788/2008 (Lei do Estágio), que quantificam a população estudantil apta ao estágio e a efetivamente contratada;
3. A **PNAD Contínua Trimestral (IBGE)**, que desagrega a taxa de desocupação e a informalidade por faixa etária, permitindo dimensionar a pressão econômica específica sobre a coorte de 18 a 24 anos.

A escolha por fontes de naturezas distintas — educacional, laboral-setorial e macroeconômica — visa mitigar o viés de fonte única e sustentar empiricamente as duas tarefas designadas a este integrante, cujas naturezas também são distintas: uma tarefa de **estudo** (`TAR-05`) e uma tarefa de **inserção profissional** (`TAR-06`).

#### 5.3.2 Objetivos da Análise Documental em IHC

Em conformidade com o roteiro de análise documental preconizado por Barbosa e Silva (2010, Cap. 7 e 8), a investigação perseguiu quatro objetivos:

1. Dimensionar quantitativamente a população estudantil que busca oportunidades no portal;
2. Caracterizar o **contexto de estudo** predominante dessa coorte — em especial a modalidade de ensino e o dispositivo de acesso —, de modo a fundamentar a responsividade da tarefa de simulado (`TAR-05`);
3. Quantificar a **demanda latente por oportunidades de estágio** no Brasil, a fim de avaliar se a ausência dessa funcionalidade no PCI Concursos configura uma lacuna funcional relevante (`TAR-06`);
4. Fornecer a base empírica para a modelagem da Persona **PER-03** e dos Cenários **CEN-05** e **CEN-06**.

#### 5.3.3 Metodologia de Exame do Documento

O exame seguiu as três fases prescritas por Barbosa e Silva (2010), replicando o protocolo adotado em `DOC-01` para garantir comparabilidade entre as análises da equipe:

* **Fase 1 (Triagem Exploratória):** Consulta às sinopses estatísticas e às apresentações oficiais de divulgação do Censo da Educação Superior, ao painel de estatísticas da ABRES e aos *releases* trimestrais da PNAD Contínua, com recorte nas dimensões "modalidade de ensino", "estudantes aptos ao estágio" e "desocupação por faixa etária";
* **Fase 2 (Extração Quantitativa):** Coleta dos valores absolutos e relativos de matrículas por modalidade, da razão entre estudantes aptos e estudantes efetivamente estagiando, e das taxas de desocupação e informalidade da faixa de 18 a 24 anos;
* **Fase 3 (Mapeamento de Necessidades de IHC):** Análise de como o perfil estudantil impacta as necessidades de interface, responsividade móvel e busca no portal PCI Concursos.

#### 5.3.4 Achados e Evidências Estatísticas Extraídas

* **O Ensino a Distância tornou-se majoritário, consolidando o estudo mediado por tela:** O Censo da Educação Superior 2024 registra, **pela primeira vez na série histórica**, a superação do ensino presencial pela modalidade a distância, que passou a concentrar **50,7% das matrículas de graduação** (5.189.391 em EAD contra 5.037.482 presenciais), com crescimento de **286,7% na década de 2014 a 2024**. O estudante contemporâneo, portanto, já está habituado a consumir conteúdo educacional integralmente por interfaces digitais — o que eleva sua expectativa quanto à qualidade de ferramentas de estudo online como o simulado do portal.
* **Volume populacional expressivo:** Somadas as matrículas de graduação (aproximadamente 10,2 milhões) às do ensino médio e técnico (10.090.568 alunos, conforme a ABRES), o contingente de estudantes brasileiros em formação supera **20,1 milhões de pessoas**, demonstrando a relevância do público jovem no ecossistema de concursos.
* **Escassez estrutural de estágio (apenas 6% de aproveitamento):** Os dados da ABRES revelam que, dos cerca de **20,1 milhões de estudantes aptos ao estágio**, apenas **6% conseguem efetivamente uma oportunidade**. A desagregação é ainda mais severa no ensino médio e técnico, onde apenas **264 mil dos 10.090.568 alunos estagiam (2,61%)**, enquanto no ensino superior **836 mil dos 9.976.782 graduandos estagiam (8,38%)**. Trata-se de uma demanda reprimida de mais de 18 milhões de estudantes buscando ativamente vagas que não encontram.
* **O estágio como principal porta de entrada formal:** Ainda segundo a ABRES, as taxas de efetivação de estagiários situam-se entre **40% e 60%**, caracterizando o estágio como o canal mais eficaz de transição para o mercado formal de trabalho.
* **Pressão econômica desproporcional sobre a coorte de 18 a 24 anos:** A PNAD Contínua do 1º trimestre de 2026 aponta taxa de desocupação nacional de **6,1%**, enquanto na faixa de **18 a 24 anos o índice alcança aproximadamente 14%**, acompanhado de **informalidade superior a 45%**. Esse quadro explica a urgência com que o estudante recorre a portais de oportunidades e a baixa tolerância a fluxos de navegação improdutivos.

#### 5.3.5 Embasamento para o Perfil de Usuário, Personas e IHC

* **Fundamentação Empírica da Persona PER-03:** Os dados sustentam diretamente o perfil de **Thiago Moraes Albuquerque (PER-03)** (21 anos, graduando noturno em instituição privada, residente na Ceilândia-DF, com acesso predominantemente móvel e sob pressão para conseguir estágio curricular).
* **Fundamentação dos Cenários CEN-05 e CEN-06:** Justifica a formulação de cenários voltados à resolução ágil de simulados no celular (`CEN-05`) e à busca ativa por oportunidades de estágio (`CEN-06`).
* **Identificação de Lacuna Funcional de IHC:** A inspeção da arquitetura de informação do PCI Concursos confirmou que o portal **não dispõe de seção, filtro ou categoria dedicada a vagas de estágio**, gerando frustração nos milhões de estudantes que acessam o site em busca de oportunidades formativas.
* **Diretrizes de Usabilidade:** As evidências apontam a relevância de projetar os simulados sob a premissa *mobile-first* (com alvos de toque adequados conforme WCAG 2.1) e de permitir desambiguação clara entre o termo "estágio curricular" e "estágio probatório" nas consultas.

---

### 5.4 Análise Documental 04 — *Responsável: Leonardo da Silva Lopes Júnior*

* **Código da Análise:** `DOC-04`
* **Integrante Responsável:** Leonardo da Silva Lopes Júnior
* **Data da Investigação:** 28/09/2026
* **Fontes Documentais Analisadas:**
  1. *Pesquisa sobre o Uso das Tecnologias de Informação e Comunicação nos Domicílios Brasileiros (TIC Domicílios 2024)* — Centro Regional de Estudos para o Desenvolvimento da Sociedade da Informação (Cetic.br / NIC.br, 2024);
  2. *Censo da Educação a Distância no Brasil (Censo EAD.BR 2023/2024)* — Associação Brasileira de Educação a Distância (ABED, 2024);
  3. *Panorama de Hábitos de Notificação e Consumo Digital no Brasil* — Comscore / Instituto Verificador de Comunicação (2024).
* **Links de Acesso Oficial (Dados Abertos e sem Barreira de Login):**
  * [Cetic.br — Pesquisa TIC Domicílios 2024](https://cetic.br/pt/pesquisa/domicilios/)
  * [ABED — Relatórios do Censo EAD.BR](https://www.abed.org.br/site/pt/midiateca/censo_ead/)
  * [Comscore — Relatório Brasil Digital](https://www.comscore.com/por/Insights)
* **Tarefas de IHC Vinculadas:**
  * `TAR-07`: Acessar videoaulas e dicas didáticas de disciplinas;
  * `TAR-08`: Cadastro e configuração de recebimento de alertas de vagas por e-mail.
* **Foco da Investigação:** Hábitos de consumo multimídia educacional (videoaulas e *microlearning*) em dispositivos móveis e critérios de confiabilidade e segmentação em alertas e notificações por e-mail.
* **Pergunta de Pesquisa:** *De que maneira o concurseiro utiliza videoaulas em pequenos blocos de tempo no celular e quais filtros por área e UF são indispensáveis para que alertas de editais por e-mail não sejam descartados como spam?*

#### 5.4.1 Identificação e Caracterização da Fonte

A presente investigação documental foca os hábitos de consumo multimídia educacional e os fluxos assíncronos de notificação que estruturam as tarefas `TAR-07` e `TAR-08`. Para garantir rigor e comparabilidade com as demais análises da equipe, foram articuladas três fontes secundárias de abrangência nacional:

1. A **TIC Domicílios (Cetic.br/NIC.br)**, levantamento oficial que afere os padrões de uso da internet no país segundo padrões internacionais (UNESCO/UIT), fornecendo dados estratificados sobre atividades culturais, educacionais e dispositivos de acesso;
2. O **Censo EAD.BR (ABED)**, principal mapeamento das práticas de ensino e aprendizagem a distância no Brasil, que documenta a eficácia de videoaulas objetivas (*microlearning*) e a importância de materiais complementares de estudo;
3. O **Panorama de Comunicação Digital da Comscore/IVC**, que analisa o comportamento do usuário frente a newsletters, alertas automáticos e taxas de rejeição a informativos sem filtragem.

#### 5.4.2 Objetivos da Análise Documental em IHC

Alinhando-se aos princípios metodológicos de Barbosa e Silva (2010), a investigação teve como metas:

1. Mapear o comportamento do concurseiro quanto ao **consumo de videoaulas em telas móveis e desktop**, identificando requisitos pedagógicos e de usabilidade para o player da Tarefa 07 (`TAR-07`);
2. Compreender a relação dos usuários com **mecanismos de notificação e alertas por e-mail**, subsidiando o redesenho do fluxo da Tarefa 08 (`TAR-08`);
3. Detectar atritos de interface, ruído publicitário e barreiras de privacidade nos formulários do portal PCI Concursos;
4. Fundamentar a modelagem da Persona **PER-04** (Renata Cristina Freitas) e dos Cenários **CEN-07** e **CEN-08**.

#### 5.4.3 Metodologia de Exame do Documento

A investigação estruturou-se em três etapas:

* **Fase 1 (Triagem Exploratória):** Seleção de tabelas estatísticas da TIC Domicílios 2024 referentes a atividades online ("assistir a vídeos, aulas ou tutoriais") e relatórios da ABED sobre fragmentação de estudo;
* **Fase 2 (Extração Quantitativa):** Coleta de índices de acesso por smartphone (62%), preferência por e-mail para avisos formais (68%) e rejeição a mala direta sem segmentação (71%);
* **Fase 3 (Tradução em Requisitos de IHC):** Conversão dos achados em diretrizes e requisitos de usabilidade para o portal PCI Concursos.

#### 5.4.4 Achados e Evidências Estatísticas Extraídas

* **Consolidação do vídeo como ferramenta prioritária de aprendizado autônomo:** Conforme a TIC Domicílios 2024, **82% dos internautas brasileiros assistem a vídeos, tutoriais ou videoaulas na web**, sendo a segunda atividade online mais realizada no país. O concurseiro contemporâneo recorre sistematicamente a videoaulas para destravar tópicos teóricos de difícil compreensão.
* **Estudo em pequenos blocos de tempo (*Microlearning*):** O Censo EAD.BR indica que **mais de 70% dos estudantes que conciliam trabalho e preparação para concursos realizam estudos em sessões curtas (10 a 20 minutos)** durante intervalos de almoço ou deslocamentos. Esse padrão demanda interfaces objetivas, com **indexação por tópicos da matéria** e **acesso imediato a resumos em PDF**.
* **E-mail como canal institucional de alta confiabilidade:** Relatórios da Comscore (2024) apontam que o e-mail segue sendo o canal predileto para alertas formais de concursos (**68% de preferência** em relação a redes sociais). No entanto, **71% dos respondentes descartam mensagens que não permitem filtrar por área profissional ou localização**, gerando sensação de *spam*.
* **Vulnerabilidades Críticas no PCI Concursos (Inspeção Empírica):**
  - A seção de videoaulas (`TAR-07`) funciona meramente como agregador desestruturado de vídeos de terceiros do YouTube, sem categorização por banca organizadora ou tópicos do edital, sem materiais em anexo e com intensa poluição de anúncios ao redor do player;
  - O cadastro de alertas por e-mail (`TAR-08`) não disponibiliza filtros por região ou área de atuação (enviando editais de todo o Brasil sem segmentação) e **não possui campo de confirmação de e-mail**, permitindo que o usuário digite seu endereço com erro sem qualquer aviso preventivo do sistema.

#### 5.4.5 Embasamento para o Perfil de Usuário, Personas e IHC

* **Fundamentação Empírica da Persona PER-04:** Suporta diretamente **Renata Cristina Freitas (PER-04)** (31 anos, assistente administrativa, concurseira ativa que estuda no horário de almoço e necessita de alertas filtrados por e-mail).
* **Fundamentação dos Cenários CEN-07 e CEN-08:** Modela a consulta rápida a videoaulas no smartphone (`CEN-07`) e a configuração de alertas sem ruído publicitário ou dispersão temática (`CEN-08`).
* **Diretrizes de Usabilidade e Interface:**
  * O player educacional deve fornecer indexação por tópicos da disciplina e suporte a material de apoio em PDF para estudo complementar.
  * O formulário de alertas deve oferecer segmentação por área de interesse e UF, validação sintática em tempo real e dupla confirmação (*double opt-in*) para prevenir cadastros errôneos e classificação do serviço como *spam*.
  * Isolamento estrito de anúncios dinâmicos na área de reprodução de vídeo para evitar cliques acidentais e sobreposição visual.

---

### 5.5 Análise Documental 05 — *Responsável: João Vitor Sales Ibiapina*

* **Código da Análise:** `DOC-05`
* **Integrante Responsável:** João Vitor Sales Ibiapina
* **Tarefas de IHC Vinculadas:** `TAR-09` (Consulta a vagas reservadas / PcD) e `TAR-10` (Acompanhamento de convocações)
* **Status da Investigação:** *Aguardando realização pelo integrante (seguir a estrutura em 5 tópicos e a metodologia demonstrada em DOC-01 acima).*

---

## 6. Método Com Usuário: Roteiro Guia Unificado para as Entrevistas Gravadas

Para padronizar a coleta empírica entre os 5 integrantes do grupo, foi estabelecido o roteiro semiestruturado de 10 a 15 minutos apresentado na Tabela 3, a ser aplicado na sessão remota ou presencial gravada com o usuário:

<div align="center" markdown="1">

<p align="center"><b>Tabela 3: Roteiro Estruturado de Entrevista e Validação</b></p>

| Bloco | Duração Estimada | Objetivo e Ações do Entrevistador |
| :---: | :---: | :--- |
| **Bloco 1: Acolhimento e TCLE** | 2 min | Iniciar a gravação, dar as boas-vindas, explicar que **o sistema é o objeto de avaliação, nunca a pessoa**, ler verbalmente o TCLE e colher o consentimento oral gravado do participante. |
| **Bloco 2: Perfil Sociodemográfico** | 3 min | Coletar idade, formação, ocupação atual, frequência de acesso à internet, dispositivos mais utilizados e nível de experiência em prestar concursos públicos. |
| **Bloco 3: Experiência e Modelo Mental** | 2 min | Perguntar se o participante já conhecia o PCI Concursos, qual sua primeira impressão visual sobre o site e que canais costuma utilizar para pesquisar editais. |
| **Bloco 4: Validação da Persona e Cenário** | 2 min | Apresentar brevemente ao participante a descrição da Persona e da situação hipotética (Cenário) elaborada pelo integrante, colhendo o feedback se a situação reflete a realidade de concurseiros. |
| **Bloco 5: Execução Prática das Tarefas** | 4 min | Pedir ao participante que compartilhe a tela e execute as **duas tarefas específicas** designadas ao integrante no portal PCI Concursos, utilizando o método *Think-Aloud* (pensar em voz alta enquanto clica e busca). Anotar dúvidas, hesitações e tropeços em anúncios. |
| **Bloco 6: Fechamento e Avaliação Subjetiva** | 2 min | Solicitar uma nota de 1 a 5 para a facilidade do site, ouvir as principais críticas e sugestões de melhoria do voluntário e finalizar a gravação agradecendo sua contribuição. |

<p align="center" style="font-size: 0.85em; margin-top: -0.6em;"><b>Fonte:</b> Daniel da Silva Batista (2026), adaptado de Barbosa e Silva (2010).</p>

</div>

---

## 6. Delimitação e Enriquecimento do Escopo Funcional de IHC

Em consonância com as orientações do docente da disciplina (SALES, 2026) e seguindo as boas práticas consolidadas na literatura de Engenharia de Usabilidade (BARBOSA; SILVA, 2010; DIAPER, 2003; MAYHEW, 1999) — a exemplo da metodologia de delimitação adotada pelo Grupo 06 —, a análise de IHC não deve limitar-se à inspeção de fluxos meramente operacionais ou superficiais (como a simples visualização de textos, download passivo de arquivos em PDF ou seleções triviais de menus). 

Para que a avaliação e o subsequente reprojeto ofereçam valor ergonômico substancial, o Grupo 07 estabeleceu a **delimitação e o enriquecimento do escopo funcional** em **três camadas de complexidade ergonômica**:

1. **Camada 1 — Acesso e Consulta Básica:** Engloba tarefas operacionais de recuperação da informação, como a busca textual por palavras-chave (`TAR-01`), o download de cadernos de provas e gabaritos em PDF (`TAR-02`) e a filtragem macro por macrorregiões geográficas (`TAR-03`). Embora essenciais, essas tarefas representam a camada transacional de entrada do portal;
2. **Camada 2 — Interação e Engajamento Cognitivo Rico:** Constitui o núcleo propositivo deste projeto de IHC, demandando processamento de regras de negócio, persistência de dados, ciclos iterativos e feedback bidirecional contínuo em tempo real entre o usuário e o sistema:
   * **`TAR-04` — Cronograma Visual e Timeline Interativa de Fases do Certame:** Supera a leitura linear e estática de notícias ao estruturar uma linha do tempo gráfica e dinâmica com todas as fases do concurso (Inscrição $\rightarrow$ Isenção de Taxa $\rightarrow$ Homologação $\rightarrow$ Prova Objetiva $\rightarrow$ Gabaritos $\rightarrow$ Recursos $\rightarrow$ Resultados), incorporando contagem regressiva em tempo real (*countdown timer*), destaque semântico obrigatório para retificações de edital (`[⚠️ Retificação Publicada em DD/MM]`) e exportação direta de datas para calendários pessoais (Google Agenda, Apple Calendar, formato `.ics`);
   * **`TAR-05` — Sistema de Simulados Online Interativo com Feedback Automático de Gabarito:** Transforma o mero repositório textual de perguntas em um motor interativo de avaliação cognitiva. Permite parametrização de simulados (disciplina, banca, volume de questões, modo cronometrado com contagem regressiva), resolução ergonômica adaptada para smartphones (alvos de toque $\ge 48\text{px}$), feedback formativo imediato por alternativa, gabarito oficial comentado e geração de relatório estatístico final de desempenho (taxa de acertos, tempo médio por questão e histórico persistente com resiliência a oscilações de conexão — *Zero Data Loss*);
   * **`TAR-08` — Central de Alertas Inteligentes e Parametrizados por E-mail:** Rompe com a prática invasiva de newsletters generalistas e ruidosas (*spam*) ao fornecer um configurador avançado de notificações com filtros multicritério (região geográfica com foco prioritário no DF, área profissional/carreira, nível de escolaridade e faixa salarial), periodicidade ajustável (instantânea, diária ou semanal), validação sintática em tempo real no cliente, dupla confirmação de consentimento (*Double Opt-In*) e painel autônomo de gestão e cancelamento granular com 1 clique, em estrita conformidade com a Lei Geral de Proteção de Dados (LGPD).
3. **Camada 3 — Proposição de Novas Capacidades e Inclusão:** Focada na superação de lacunas funcionais críticas diagnosticadas na arquitetura de informação do portal:
   * **`TAR-06` — Central de Oportunidades de Estágio de Nível Superior:** Reprojeto com desambiguação semântica no motor de busca (*"estágio curricular"* versus *"estágio probatório"*) e catálogo dedicado a universitários (`PER-03`);
   * **`TAR-07` — Plataforma Pedagógica com Modo Foco e Trilhas Didáticas em Videoaulas:** Player educacional responsivo com eliminação de sobreposição de anúncios (*Modo Foco*), trilhas sequenciais de estudo e download integrado de material esquemático em PDF;
   * **`TAR-09` — Módulo de Reserva de Vagas e Acessibilidade:** Filtragem dedicada e transparente para cotas e pessoas com deficiência (PcD).

A Tabela 4 a seguir sintetiza a evolução do escopo da equipe, evidenciando como a abordagem do Grupo 07 transcende tarefas operacionais rasas em favor de um ecossistema interativo robusto:

<div align="center" markdown="1">

<p align="center"><b>Tabela 4: Comparativo de Escopo: Tarefas Operacionais Básicas vs. Funcionalidades Enriquecidas de IHC</b></p>

| Tarefa / Funcionalidade | Escopo Básico / Operacional Raso | Escopo Enriquecido e Propositivo de IHC (Grupo 07) | Impacto Ergonômico e Cognitivo |
| :--- | :--- | :--- | :--- |
| **Acompanhamento de Prazos (`TAR-04`)** | Leitura estática de texto corrido em notícias do edital; retificações ocultas no rodapé sem destaque. | **Cronograma Visual e Timeline Interativa de Fases:** Linha do tempo gráfica, alertas visuais de retificação, contadores regressivos e exportação para agenda (.ics). | Elimina a perda de prazos de inscrição e datas de prova por falta de visibilidade temporal. |
| **Simulados de Questões (`TAR-05`)** | Leitura corrida de páginas longas de questões, sem filtro de quantidade, sem temporizador e sem pontuação ao final. | **Sistema de Simulados Online Interativo:** Parametrização por banca/matéria, cronômetro regressivo, feedback imediato de gabarito comentado, áreas de toque de 48px e relatório de desempenho. | Proporciona diagnóstico formativo do aprendizado com suporte a estudo móvel resiliente (*Zero Data Loss*). |
| **Alertas de Oportunidades (`TAR-08`)** | Formulário genérico com campo único de e-mail; envio massivo de prefeituras de todo o país sem segmentação (*spam*). | **Central de Alertas Inteligentes e Parametrizados:** Filtros multicritério por UF/DF, carreira e escolaridade, validação em tempo real, *Double Opt-In* e conformidade com a LGPD. | Reduz drasticamente a sobrecarga cognitiva e garante entrega cirúrgica de certames do interesse do candidato. |

<p align="center" style="font-size: 0.85em; margin-top: -0.6em;"><b>Fonte:</b> Leonardo da Silva Lopes Júnior (2026).</p>

</div>

---

## 7. Registro e Comprovação das Entrevistas Gravadas

A tabela a seguir consolida o registro das sessões gravadas por cada um dos integrantes da equipe. Cada entrevistador é responsável por recrutar o usuário e escolher o perfil (Perfil 1, 2 ou 3) a ser investigado em sua sessão individual, documentando os dados empíricos após a condução da entrevista:

<div align="center" markdown="1">

<p align="center"><b>Tabela 5: Registro de Gravações de Entrevistas com Usuários Reais</b></p>

| Entrevistador | Código do Entrevistado | Perfil Escolhido pelo Entrevistador | Tarefas Avaliadas | Data da Sessão | Duração | Link da Gravação |
| :--- | :---: | :---: | :--- | :---: | :---: | :--- |
| **Daniel da Silva Batista** | `USR-01` | Perfil 2: Concurseiro Ativo / Adulto e Maduro | **Tarefa 01:** Busca por palavra-chave / órgão<br>**Tarefa 02:** Download de prova e gabarito em PDF | 25/09/2026 | 06 min 19 s | [Vídeo da Entrevista (USR-01)](https://youtu.be/YkYvCZDidaY) |
| **Pedro Rocha Ferreira Lima** | `USR-02` | Perfil 1: Estudante Universitário / Iniciante e Recém-formado | **Tarefa 03:** Filtragem por região Centro-Oeste / DF<br>**Tarefa 04:** Cronograma visual e timeline interativa de fases do certame | 27/09/2026 | N/A (Método Sem Usuário) | [Análise Documental DOC-02](#52-analise-documental-02-responsavel-pedro-rocha-ferreira-lima) |
| **Arthur Sismene Carvalho** | `USR-03` | Perfil 1: Estudante Universitário / Iniciante | **Tarefa 05:** Simulado online interativo com feedback automático de gabarito<br>**Tarefa 06:** Busca de vagas de estágio no DF | 27/09/2026 | N/A (Método Sem Usuário) | *Vídeo não disponível* — ver [Análise Documental DOC-03](#53-analise-documental-03-responsavel-arthur-sismene-carvalho) |
| **Leonardo da Silva Lopes Júnior** | `USR-04` | Perfil 2: Concurseiro Ativo / Adulto e Maduro | **Tarefa 07:** Videoaulas e dicas didáticas de disciplinas<br>**Tarefa 08:** Alertas inteligentes de editais por e-mail com filtros avançados | 28/09/2026 | N/A (Método Sem Usuário) | [Análise Documental DOC-04](#54-analise-documental-04-responsavel-leonardo-da-silva-lopes-junior) |
| **João Vitor Sales Ibiapina** | `USR-05` | *A definir pelo entrevistador* (Perfil 1, 2 ou 3) | **Tarefa 09:** Consulta a vagas reservadas / PcD<br>**Tarefa 10:** Acompanhamento de convocações | A definir | ~12 min | [A definir - Vídeo YouTube](https://youtube.com) |

<p align="center" style="font-size: 0.85em; margin-top: -0.6em;"><b>Fonte:</b> Daniel da Silva Batista e Pedro Rocha Ferreira Lima (2026).</p>

</div>

> **Nota Metodológica sobre USR-02:** Conforme preceitua Barbosa e Silva (2010), na ausência de sessão síncrona gravada para o perfil `USR-02`, a modelagem de Pedro Rocha Ferreira Lima fundamentou-se integralmente no método sem usuário através da **Análise Documental DOC-02** (dados abertos do PEP/MGI e do DODF), conferindo embasamento empírico secundário para a Persona PER-02 e os Cenários CEN-03 e CEN-04.

> **Nota Metodológica sobre USR-03:** Pela mesma razão, a sessão síncrona gravada correspondente ao perfil `USR-03` não foi realizada e o respectivo vídeo não está disponível. A modelagem de Arthur Sismene Carvalho apoia-se integralmente no método sem usuário através da **Análise Documental DOC-03** (Censo da Educação Superior do INEP, Estatísticas de Estágio da ABRES e PNAD Contínua do IBGE), complementada pela inspeção direta da arquitetura de informação do portal, o que fundamenta a Persona PER-03 e os Cenários CEN-05 e CEN-06 em evidência documental secundária.

> **Nota Metodológica sobre USR-04:** Conforme preceitua Barbosa e Silva (2010), na ausência de sessão síncrona gravada para o perfil `USR-04`, a modelagem de Leonardo da Silva Lopes Júnior fundamentou-se integralmente no método sem usuário através da **Análise Documental DOC-04** (dados empíricos da pesquisa TIC Domicílios do Cetic.br/NIC.br, do Censo EAD.BR da ABED e de relatórios da Comscore), conferindo embasamento empírico secundário para a Persona PER-04, os Cenários CEN-07 e CEN-08 e os modelos HTA e CTT das Tarefas 07 e 08.

---

## 8. Bibliografia

> ABED. *Censo EAD.BR: Relatório Analítico da Aprendizagem a Distância no Brasil 2023/2024*. São Paulo: Associação Brasileira de Educação a Distância, 2024. Disponível em: <https://www.abed.org.br/site/pt/midiateca/censo_ead/>.  
> ABRES. *Estatísticas do Mercado de Estágio no Brasil*. São Paulo: Associação Brasileira de Estágios, 2025. Disponível em: <https://abres.org.br/estatisticas/>.  
> BARBOSA, S. D. J.; SILVA, B. S. *Interação Humano-Computador*. Rio de Janeiro: Elsevier, 2010.  
> BRASIL. *Lei nº 11.788, de 25 de setembro de 2008*. Dispõe sobre o estágio de estudantes. Brasília: Presidência da República, 2008.  
> CETIC.BR. *Pesquisa sobre o Uso das Tecnologias de Informação e Comunicação nos Domicílios Brasileiros — TIC Domicílios 2024*. São Paulo: Comitê Gestor da Internet no Brasil, 2024. Disponível em: <https://cetic.br/pt/pesquisa/domicilios/>.  
> COMSCORE. *Panorama da Comunicação e Hábitos Digitais no Brasil*. São Paulo: Comscore Brasil, 2024. Disponível em: <https://www.comscore.com/>.  
> COURAGE, Catherine; BAXTER, Kathy. *Understanding Your Users: A Practical Guide to User Requirements Methods, Tools, and Techniques*. San Francisco: Morgan Kaufmann, 2005.  
> HACKOS, JoAnn T.; REDISH, Janice C. *User and Task Analysis for Interface Design*. New York: John Wiley & Sons, 1998.  
> IBGE. *Pesquisa Nacional por Amostra de Domicílios Contínua (PNAD Contínua) — Mercado de Trabalho e Ocupações*. Rio de Janeiro: Instituto Brasileiro de Geografia e Estatística, 2024.  
> IBGE. *PNAD Contínua Trimestral — 1º trimestre de 2026*. Rio de Janeiro: Instituto Brasileiro de Geografia e Estatística, 2026. Disponível em: <https://www.ibge.gov.br/estatisticas/sociais/trabalho/17270-pnad-continua.html>.  
> INEP. *Censo da Educação Superior 2024: notas estatísticas*. Brasília: Instituto Nacional de Estudos e Pesquisas Educacionais Anísio Teixeira, 2025. Disponível em: <https://www.gov.br/inep/pt-br/areas-de-atuacao/pesquisas-estatisticas-e-indicadores/censo-da-educacao-superior>.  
> IPEA. *Atlas do Estado Brasileiro*. Brasília: Instituto de Pesquisa Econômica Aplicada, 2024. Disponível em: <https://www.ipea.gov.br/atlasestado/>.  
> NIELSEN, Jakob. *Usability Engineering*. San Francisco: Morgan Kaufmann, 1993.  
> SOMMERVILLE, Ian. *Engenharia de Software*. 9. ed. São Paulo: Pearson, 2011.

## 9. Histórico de Versões

<div align="center" markdown="1">

| Versão | Data | Descrição | Autor(es) | Revisor(es) |
| :---: | :---: | :--- | :---: | :---: |
| `1.0` | 21/09/2026 | Estruturação metodológica do perfil de usuário, definição dos 3 perfis segundo Exemplo 8.1 de Barbosa & Silva, roteiro unificado de entrevista e tabela de gravações. | Daniel da Silva Batista | Pedro Rocha Ferreira Lima |
| `1.1` | 21/09/2026 | Refinamento dos atributos de perfil segundo Hackos & Redish (1998) e Courage & Baxter (2005) e detalhamento dos 4 grupos de atributos do Cap. 8 de Barbosa & Silva. | Daniel da Silva Batista | Pedro Rocha Ferreira Lima |
| `1.2` | 22/09/2026 | Inclusão do Método Sem Usuário (Análise Documental Individual - DOC-01 a DOC-05), detalhamento de DOC-01 com dados abertos do IPEA (Atlas do Estado Brasileiro) e IBGE (PNAD Contínua) e ajuste de numeração. | Daniel da Silva Batista | Pedro Rocha Ferreira Lima |
| `1.3` | 25/09/2026 | Inclusão do registro e hiperligação da entrevista individual gravada USR-01 (06:19), síntese dos atributos teóricos e otimização das seções reservadas da análise documental. | Daniel da Silva Batista | Pedro Rocha Ferreira Lima |
| `1.4` | 27/09/2026 | Inclusão da Análise Documental DOC-02 elaborada por Pedro Rocha Ferreira Lima e atualização da matriz e registro de validação. | Pedro Rocha Ferreira Lima | Daniel da Silva Batista |
| `1.5` | 27/09/2026 | Desenvolvimento integral da Análise Documental DOC-03 com dados do Censo da Educação Superior (INEP), das Estatísticas de Estágio (ABRES) e da PNAD Contínua (IBGE); registro da lacuna funcional de estágios no portal e derivação dos requisitos RF-DOC-03, RF-DOC-04, RNF-DOC-02 e RNF-DOC-03. | Arthur Sismene Carvalho | Daniel da Silva Batista |
| `1.6` | 28/09/2026 | Elaboração e integração da Análise Documental DOC-04 com dados da TIC Domicílios (Cetic.br), Censo EAD.BR (ABED) e Comscore, derivação dos requisitos RF-DOC-05 a RF-DOC-07 e RNF-DOC-04/05 e atualização da Tabela 4. | Leonardo da Silva Lopes Júnior | Daniel da Silva Batista |
| `1.7` | 04/10/2026 | Reestruturação dos 3 Perfis de Usuário do Sistema (Candidato, Publicador e Administrador) na Tabela 1 e inclusão da delimitação formal de escopo (Issue #10). | Daniel da Silva Batista | Pedro Rocha Ferreira Lima |
| `1.8` | 04/10/2026 | Inclusão de Foco da Investigação e Perguntas de Pesquisa em DOC-01 a DOC-04, substituição de listas de requisitos por embasamento empírico de IHC e atualização da matriz documental (Issue #13). | Daniel da Silva Batista | Pedro Rocha Ferreira Lima |
| `1.9` | 06/10/2026 | Inclusão da Seção 6 formal de Delimitação e Enriquecimento do Escopo Funcional de IHC em 3 camadas ergonômicas, superando tarefas rasas com simulados online interativos, timeline visual e alertas inteligentes (Issue #14). | Leonardo da Silva Lopes Júnior | Daniel da Silva Batista |

<p align="center" style="font-size: 0.85em; margin-top: -0.6em;"><b>Fonte:</b> Daniel da Silva Batista (2026).</p>

</div>
