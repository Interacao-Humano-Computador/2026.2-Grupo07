<div align="center" markdown="1">

<p align="center"><b>Tabela de Contribuição</b></p>

| Membro | Contribuição |
| :--- | :--- |
| **Daniel da Silva Batista** | Inspetor: aplicação das listas de verificação aos artefatos de Pedro Rocha Ferreira Lima, registro das respostas, das evidências e dos defeitos. |
| **Pedro Rocha Ferreira Lima** | Autor dos artefatos inspecionados; responsável pela correção dos defeitos (passo 5). |
| **Claude (Anthropic)** | Apoio na leitura dos artefatos e na organização da ficha (conforme Política de IA). |

<p align="center" style="font-size: 0.85em; margin-top: -0.6em;"><b>Fonte:</b> Daniel da Silva Batista (2026).</p>

</div>

# Inspeção — Daniel da Silva Batista

Esta ficha registra a inspeção feita por Daniel da Silva Batista sobre os **artefatos de autoria de Pedro Rocha Ferreira Lima**, conduzida segundo os seis passos do método de inspeção de Fagan (FAGAN, 1976) descritos na [página da Etapa 8](../index.md). Os itens 06 a 20 de cada lista serão aplicados assim que forem elaborados pelos demais integrantes.

## 1. Planejamento

A Tabela 1 apresenta os dados da inspeção:

<div align="center" markdown="1">

<p align="center"><b>Tabela 1: Dados da Inspeção</b></p>

| Campo | Registro |
| :--- | :--- |
| **Autor dos artefatos** | Pedro Rocha Ferreira Lima |
| **Inspetor** | Daniel da Silva Batista |
| **Data da inspeção** | 22/11/2026 |
| **Versão inspecionada** | GitHub Pages publicado a partir do commit `12913da` da branch `main` |
| **Critério de entrada** | Artefato publicado no GitHub Pages e lista de verificação correspondente disponível |

<p align="center" style="font-size: 0.85em; margin-top: -0.6em;"><b>Fonte:</b> Daniel da Silva Batista (2026).</p>

</div>

A Tabela 2 apresenta os artefatos inspecionados e a lista de verificação aplicada a cada um. Nos documentos coletivos, a inspeção recai sobre a parte de autoria do Pedro. As listas de Teste-Piloto e de Teste de Usabilidade foram aplicadas ao relato de alta fidelidade, onde o piloto e as sessões foram executados e registrados.

<div align="center" markdown="1">

<p align="center"><b>Tabela 2: Artefatos Inspecionados e Listas Aplicadas</b></p>

| Nº | Artefato (parte de autoria do Pedro) | Lista de verificação |
| :---: | :--- | :--- |
| 1 | [Perfil do Usuário](../../analise-de-requisitos/perfil-de-usuario.md) — síntese dos três perfis e entrevista USR-02 | [Perfil de Usuário](../listas/perfil-usuario.md) |
| 2 | [Personas](../../analise-de-requisitos/personas.md) — PER-02 (Lucas Ferreira Rocha) | [Personas](../listas/personas.md) |
| 3 | [Cenários](../../analise-de-requisitos/cenarios.md#44-cenario-04-acompanhamento-de-timeline-de-fases-com-simulador-de-prazos-recursais-e-sincronizacao-cen-04) — CEN-04 | [Cenários](../listas/cenarios.md) |
| 4 | [HTA](../../analise-de-requisitos/analise-de-tarefas/hta.md) — TAR-04 | [HTA v2](../listas/hta-v2.md) |
| 5 | [CTT](../../analise-de-requisitos/analise-de-tarefas/ctt.md) — TAR-04 | [CTT v2](../listas/ctt-v2.md) |
| 6 | [Planejamento do Relato da Análise de Tarefas](../../design-avaliacao-desenvolvimento/resultado-analise-de-tarefas.md) | [Planejamento do Relato](../listas/planejamento-relato.md) |
| 7 | [Storyboard SB-02](../../design-avaliacao-desenvolvimento/etapa-5/pedro-rocha.md#2-storyboard-individual-sb-02) | [Storyboard v2](../listas/storyboard-v2.md) |
| 8 | [Relato do Protótipo de Papel](../../design-avaliacao-desenvolvimento/etapa-5/pedro-rocha-prototipo-papel.md) | [Protótipo de Papel v2](../listas/prototipo-papel-v2.md) |
| 9 | [Relato do Protótipo de Alta Fidelidade](../../design-avaliacao-desenvolvimento/etapa-5/pedro-rocha-alta-fidelidade.md) | [Protótipo de Alta Fidelidade v2](../listas/prototipo-alta-fidelidade-v2.md) |
| 10 | [Relato do Protótipo de Alta Fidelidade — Teste-Piloto](../../design-avaliacao-desenvolvimento/etapa-5/pedro-rocha-alta-fidelidade.md#4-teste-piloto-do-prototipo-de-alta-fidelidade-presencial) | [Teste-Piloto](../listas/teste-piloto.md) |
| 11 | [Relato do Protótipo de Alta Fidelidade — Sessões com usuários](../../design-avaliacao-desenvolvimento/etapa-5/pedro-rocha-alta-fidelidade.md#5-avaliacao-empirica-com-usuarios-reais-sessoes-presenciais) | [Teste de Usabilidade](../listas/teste-usabilidade.md) |

<p align="center" style="font-size: 0.85em; margin-top: -0.6em;"><b>Fonte:</b> Daniel da Silva Batista (2026).</p>

</div>

## 2. Visão Geral

A inspeção de cada artefato é gravada em um vídeo próprio. No início de cada vídeo, o inspetor apresenta a visão geral do artefato: o que ele é, qual tarefa cobre e onde está publicado. Um resumo dessa visão geral e o link do vídeo aparecem no início de cada subseção da [Seção 4](#4-inspecao).

## 3. Preparação

Antes de cada gravação, o inspetor leu o artefato com a lista de verificação correspondente e anotou as evidências e os possíveis defeitos. O resultado da preparação é o preenchimento das tabelas da Seção 4, conferido durante a gravação.

## 4. Inspeção

Cada item recebe uma das respostas definidas nas listas: **Sim**, **Não** ou **Incompleto**. Quando a situação descrita pelo item não ocorre no artefato, registra-se **Não se aplica**, com a justificativa. Toda resposta "Não" ou "Incompleto" é um defeito, descrito na própria observação do item com a sua severidade. A [Seção 4.12](#412-sintese-da-inspecao) consolida as respostas.

### 4.1 Perfil do Usuário

**Visão geral:** Descreve os três perfis de usuário do PCI Concursos (candidato, publicador e administrador). A parte do Pedro é a síntese dos perfis e a entrevista USR-02.

**Vídeo da inspeção:** *(a gravar)*

A Tabela 3 apresenta a inspeção do Perfil do Usuário com a [Lista de Verificação de Perfil de Usuário](../listas/perfil-usuario.md):

<div align="center" markdown="1">

<p align="center"><b>Tabela 3: Inspeção do Perfil do Usuário</b></p>

| Item | Verificação | Resposta | Evidência / Observação |
| :---: | :--- | :---: | :--- |
| **PU-01** | Características objetivas dos usuários | **Sim** | A Tabela 1 descreve faixa etária, nível de instrução, ocupação, experiência e frequência de acesso de cada perfil. |
| **PU-02** | Coleta com usuários reais | **Não** | A entrevista USR-02, de responsabilidade do Pedro, não foi realizada: a Tabela 5 registra "N/A (Método Sem Usuário)" e a modelagem se apoia só na análise documental DOC-02. Severidade: **Alta**. |
| **PU-03** | Agrupamento e proporção dos perfis | **Incompleto** | Os usuários estão agrupados em três perfis, mas não há a proporção (porcentagem) de usuários em cada um. Severidade: **Baixa**. |
| **PU-04** | Relação dos usuários com a tecnologia | **Sim** | A Tabela 1 traz experiência tecnológica, atitude frente à tecnologia (tecnófobos a tecnófilos) e frequência de acesso. |
| **PU-05** | Perfil como base do recrutamento | **Sim** | Os relatos de papel e de alta fidelidade recrutam participantes do Perfil 1 (Tabelas 4 de ambos os relatos). |

<p align="center" style="font-size: 0.85em; margin-top: -0.6em;"><b>Fonte:</b> Daniel da Silva Batista (2026).</p>

</div>

### 4.2 Persona PER-02

**Visão geral:** Lucas Ferreira Rocha, concurseiro de 24 anos do DF que busca vagas locais e acompanha retificações de edital.

**Vídeo da inspeção:** *(a gravar)*

A Tabela 4 apresenta a inspeção da persona PER-02 com a [Lista de Verificação de Personas](../listas/personas.md):

<div align="center" markdown="1">

<p align="center"><b>Tabela 4: Inspeção da Persona PER-02</b></p>

| Item | Verificação | Resposta | Evidência / Observação |
| :---: | :--- | :---: | :--- |
| **PE-01** | Identidade da persona | **Incompleto** | Nome, sobrenome, idade, escolaridade, ocupação e cidade estão presentes, mas a persona não tem foto. Severidade: **Baixa**. |
| **PE-02** | Status da persona | **Sim** | Classificada como "Persona Secundária" (Seção 4.2 e Tabela 1). |
| **PE-03** | Objetivos diferentes de tarefas | **Sim** | A Seção 4.2.1 lista objetivos (aprovação no DF, filtrar vagas locais, acompanhar retificações), sem confundi-los com os passos de uso. |
| **PE-04** | Tamanho do elenco de personas | **Sim** | O elenco tem 4 personas, duas delas primárias (Tabela 1 de `personas.md`). |
| **PE-05** | Personas baseadas em dados reais | **Sim** | "Modelada a partir da Análise Documental DOC-02" (dados do PEP/MGI e do DODF). |

<p align="center" style="font-size: 0.85em; margin-top: -0.6em;"><b>Fonte:</b> Daniel da Silva Batista (2026).</p>

</div>

### 4.3 Cenário CEN-04

**Visão geral:** Narra Lucas verificando uma retificação de edital e calculando o prazo de recurso no portal.

**Vídeo da inspeção:** *(a gravar)*

A Tabela 5 apresenta a inspeção do cenário CEN-04 com a [Lista de Verificação de Cenários](../listas/cenarios.md):

<div align="center" markdown="1">

<p align="center"><b>Tabela 5: Inspeção do Cenário CEN-04</b></p>

| Item | Verificação | Resposta | Evidência / Observação |
| :---: | :--- | :---: | :--- |
| **CE-01** | Cenário como narrativa | **Sim** | Narra Lucas, numa quinta-feira às 21h15, verificando uma retificação e o prazo de recurso (Tabela 5 de `cenarios.md`). |
| **CE-02** | Título, atores e situação inicial | **Sim** | Título, ator (Lucas Ferreira Rocha) e ambiente/contexto inicial descritos. |
| **CE-03** | Personas como atores | **Sim** | O ator é a persona PER-02. |
| **CE-04** | Elementos do cenário | **Sim** | Objetivos, ações (1 a 5) e eventos estão descritos separadamente. |
| **CE-05** | Cenários para as tarefas principais | **Incompleto** | O CEN-04 está vinculado à TAR-04 como "Acompanhar timeline de fases com simulador de prazos recursais", mas na HTA, no CTT, no SB-02 e nos protótipos a TAR-04 é "Criar cronograma personalizado de estudo". A tarefa efetivamente prototipada não tem cenário. Severidade: **Alta**. |

<p align="center" style="font-size: 0.85em; margin-top: -0.6em;"><b>Fonte:</b> Daniel da Silva Batista (2026).</p>

</div>

### 4.4 HTA da TAR-04

**Visão geral:** Decompõe a TAR-04, "Criar cronograma personalizado de estudo", em subobjetivos e operações.

**Vídeo da inspeção:** *(a gravar)*

A Tabela 6 apresenta a inspeção da HTA da TAR-04 com a [Lista de Verificação de HTA — v2](../listas/hta-v2.md):

<div align="center" markdown="1">

<p align="center"><b>Tabela 6: Inspeção da HTA da TAR-04</b></p>

| Item | Verificação | Resposta | Evidência / Observação |
| :---: | :--- | :---: | :--- |
| **HTA-01** | Objetivo do usuário como ponto de partida | **Sim** | A decomposição começa por "0. Criar cronograma personalizado de estudo" (Figura 4 e Tabela 5 de `hta.md`). |
| **HTA-02** | Plano em cada objetivo decomposto | **Sim** | Os objetivos 0, 2, 2.2 e 3 têm plano (`1>2>3`, `1+2`, `1/2` e `1>2`). |
| **HTA-03** | Relações entre subobjetivos | **Incompleto** | O plano 2 usa `1+2` (paralelo: ao mesmo tempo) com o significado "em qualquer ordem", que não é uma das relações da HTA. Severidade: **Média**. |
| **HTA-04** | Entrada, ação e feedback das operações | **Não** | A Tabela 5 traz problemas e recomendações, mas não informa entrada (o que dispara o passo) nem feedback (como o usuário sabe que concluiu) das operações. Severidade: **Média**. |
| **HTA-05** | Critério de parada da decomposição | **Não** | O artefato não explica até onde a tarefa foi dividida nem por que parou ali. Severidade: **Baixa**. |

<p align="center" style="font-size: 0.85em; margin-top: -0.6em;"><b>Fonte:</b> Daniel da Silva Batista (2026).</p>

</div>

### 4.5 CTT da TAR-04

**Visão geral:** Modela a TAR-04 em árvore CTT, com o tipo de cada tarefa e os operadores de tempo entre elas.

**Vídeo da inspeção:** *(a gravar)*

A Tabela 7 apresenta a inspeção do CTT da TAR-04 com a [Lista de Verificação de CTT — v2](../listas/ctt-v2.md):

<div align="center" markdown="1">

<p align="center"><b>Tabela 7: Inspeção do CTT da TAR-04</b></p>

| Item | Verificação | Resposta | Evidência / Observação |
| :---: | :--- | :---: | :--- |
| **CTT-01** | Os quatro tipos de tarefa | **Sim** | Cada nó tem tipo definido (abstrata, interação, sistema ou usuário) na Tabela 6 e na Figura 4 de `ctt.md`. |
| **CTT-02** | Tarefa abstrata como composição | **Sim** | A raiz e os nós com subtarefas ("Distribuir e verificar conflitos" e "Configurar lembretes e sincronizar") são abstratos. |
| **CTT-03** | Operador entre tarefas vizinhas | **Sim** | A coluna "Operador Subsequente" registra o operador entre cada tarefa e a seguinte. |
| **CTT-04** | Ativação com passagem de informação | **Sim** | `[]>>` usado quando há dados passados: blocos sugeridos → distribuição e horário definido → cálculo dos blocos. |
| **CTT-05** | Desativação e suspensão/retomada | **Não se aplica** | A TAR-04 não prevê cancelamento definitivo nem pausa com retorno. |

<p align="center" style="font-size: 0.85em; margin-top: -0.6em;"><b>Fonte:</b> Daniel da Silva Batista (2026).</p>

</div>

### 4.6 Planejamento do Relato da Análise de Tarefas

**Visão geral:** Define, antes da avaliação, como os resultados da avaliação da HTA e do CTT serão consolidados e relatados.

**Vídeo da inspeção:** *(a gravar)*

A Tabela 8 apresenta a inspeção do planejamento do relato com a [Lista de Verificação de Planejamento do Relato](../listas/planejamento-relato.md):

<div align="center" markdown="1">

<p align="center"><b>Tabela 8: Inspeção do Planejamento do Relato da Análise de Tarefas</b></p>

| Item | Verificação | Resposta | Evidência / Observação |
| :---: | :--- | :---: | :--- |
| **RL-01** | Objetivos e escopo no relato | **Sim** | Seção 3.1: objetivos, perguntas PA-01 a PA-07 e escopo executado. |
| **RL-02** | Método e participantes no relato | **Sim** | Seções 3.2 e 3.3: método em duas etapas, perfil dos participantes (Tabela 1) e número de avaliadores. |
| **RL-03** | Resumo dos dados coletados | **Sim** | Tabelas 2, 3 e 7 e um gráfico de barras com a conformidade por tarefa. |
| **RL-04** | Lista de problemas e reprojeto | **Sim** | Tabela 4 (registro de problemas PAT-nn) e Seção 6 (cronograma do reprojeto). |
| **RL-05** | Consolidação e recorrências | **Sim** | Análise interparticipante (Seção 2), coluna "Recorrência" na Tabela 4 e padrões entre tarefas (Seção 3.7). |

<p align="center" style="font-size: 0.85em; margin-top: -0.6em;"><b>Fonte:</b> Daniel da Silva Batista (2026).</p>

</div>

### 4.7 Storyboard SB-02

**Visão geral:** Seis quadros desenhados à mão mostrando Lucas criando um cronograma de estudo.

**Vídeo da inspeção:** *(a gravar)*

A Tabela 9 apresenta a inspeção do storyboard SB-02 com a [Lista de Verificação de Storyboard — v2](../listas/storyboard-v2.md):

<div align="center" markdown="1">

<p align="center"><b>Tabela 9: Inspeção do Storyboard SB-02</b></p>

| Item | Verificação | Resposta | Evidência / Observação |
| :---: | :--- | :---: | :--- |
| **SB-01** | Definição de storyboard | **Sim** | Seis quadros mostram Lucas recebendo a notificação, criando o cronograma e organizando o estudo (Figura 1 e Tabela 2 de `pedro-rocha.md`). |
| **SB-02** | Storyboard usado com o cenário | **Não** | O SB-02 declara ilustrar o CEN-04, mas o CEN-04 narra a verificação de uma retificação e do prazo de recurso, enquanto os quadros mostram a criação de um cronograma de estudo. Severidade: **Alta**. |
| **SB-03** | Detalhes que o storyboard acrescenta | **Sim** | Os quadros mostram onde Lucas está (quarto, sala, carro), o aparelho (celular e computador) e as reações. |
| **SB-04** | Baixa fidelidade e esboços | **Sim** | Desenhado à mão livre, com traços simples. |
| **SB-05** | Simulação da interação com usuários | **Sim** | Duas entrevistas com participantes do Perfil 1 avaliaram o SB-02 (Tabela 11 e Vídeos 3 e 4). |

<p align="center" style="font-size: 0.85em; margin-top: -0.6em;"><b>Fonte:</b> Daniel da Silva Batista (2026).</p>

</div>

### 4.8 Relato do Protótipo de Papel

**Visão geral:** Protótipo de papel do cronograma de estudo (escolha de edital, dia e horário) e a sua avaliação com participantes.

**Vídeo da inspeção:** *(a gravar)*

A Tabela 10 apresenta a inspeção do relato do protótipo de papel com a [Lista de Verificação de Protótipo de Papel — v2](../listas/prototipo-papel-v2.md):

<div align="center" markdown="1">

<p align="center"><b>Tabela 10: Inspeção do Relato do Protótipo de Papel</b></p>

| Item | Verificação | Resposta | Evidência / Observação |
| :---: | :--- | :---: | :--- |
| **PP-01** | Telas desenhadas em papel | **Sim** | Tela base em folha A4 desenhada à mão, só com seletores, botões e grade (Figuras 1 a 5). |
| **PP-02** | Peças móveis do protótipo | **Sim** | Listas suspensas de edital, dia e horário e etiquetas do concurso em tiras de papel destacáveis. |
| **PP-03** | Papéis dos avaliadores na simulação | **Incompleto** | Pedro fez o papel de "computador" sem dar dicas (Seção 6.3), mas a Seção 6.5 registra um único avaliador; não houve um segundo avaliador observando e anotando. Severidade: **Média**. |
| **PP-04** | Problemas e correções entre sessões | **Não** | A coluna "Comportamento Observado nos Testes" da Tabela 10 está vazia: os problemas vêm só da autoinspeção, sem registro do que ocorreu em cada sessão nem de correções entre elas. Severidade: **Alta**. |
| **PP-05** | Priorização dos problemas não resolvidos | **Incompleto** | Os problemas OPO-PP01 a PP05 têm severidade e ação de reprojeto, mas não há frequência (quantos participantes tiveram o problema). Severidade: **Alta**. |

<p align="center" style="font-size: 0.85em; margin-top: -0.6em;"><b>Fonte:</b> Daniel da Silva Batista (2026).</p>

</div>

### 4.9 Relato do Protótipo de Alta Fidelidade

**Visão geral:** Protótipo navegável do cronograma de estudo feito no Lovable e a sua avaliação com três participantes.

**Vídeo da inspeção:** *(a gravar)*

A Tabela 11 apresenta a inspeção do relato do protótipo de alta fidelidade com a [Lista de Verificação de Protótipo de Alta Fidelidade — v2](../listas/prototipo-alta-fidelidade-v2.md):

<div align="center" markdown="1">

<p align="center"><b>Tabela 11: Inspeção do Relato do Protótipo de Alta Fidelidade</b></p>

| Item | Verificação | Resposta | Evidência / Observação |
| :---: | :--- | :---: | :--- |
| **AF-01** | Definição de protótipo de alta fidelidade | **Sim** | Telas completas no Lovable, com cores, tipografia e componentes definidos (Figuras 1 a 3). |
| **AF-02** | Grau de funcionalidade do protótipo | **Sim** | Protótipo navegável publicado no Lovable (link na Tabela 1), com botões e seletores funcionando. |
| **AF-03** | Testes empíricos com o protótipo | **Sim** | Três sessões presenciais com participantes do Perfil 1 (Tabela 5 e Vídeos 2 a 4). |
| **AF-04** | Design iterativo entre os níveis | **Incompleto** | A Seção 2 cita ajustes vindos do papel (grade com uma linha por hora, sem linha duplicada), mas não mostra, problema a problema, o que foi feito com OPO-PP01 a OPO-PP05. Severidade: **Média**. |
| **AF-05** | Registro das decisões de design | **Incompleto** | Algumas decisões são explicadas no texto da Seção 2, mas não há registro sistemático de cada decisão e do seu motivo. Severidade: **Baixa**. |

<p align="center" style="font-size: 0.85em; margin-top: -0.6em;"><b>Fonte:</b> Daniel da Silva Batista (2026).</p>

</div>

### 4.10 Teste-Piloto (Relato do Protótipo de Alta Fidelidade)

**Visão geral:** Ensaio da avaliação do protótipo de alta fidelidade, feito em 11/11/2026, antes das sessões com participantes.

**Vídeo da inspeção:** *(a gravar)*

A Tabela 12 apresenta a inspeção do teste-piloto com a [Lista de Verificação de Teste-Piloto](../listas/teste-piloto.md):

<div align="center" markdown="1">

<p align="center"><b>Tabela 12: Inspeção do Teste-Piloto</b></p>

| Item | Verificação | Resposta | Evidência / Observação |
| :---: | :--- | :---: | :--- |
| **TP-01** | Realização do teste-piloto | **Incompleto** | O piloto (11/11/2026) aconteceu antes das sessões (12 e 13/11/2026), mas durou 46 s, o que não corresponde a uma sessão completa do consentimento até a última pergunta. Severidade: **Média**. |
| **TP-02** | O que o teste-piloto verifica | **Sim** | O relato informa que o piloto calibrou o roteiro, mediu o tempo e conferiu a captação de áudio e tela (Seção 4). |
| **TP-03** | Correções após o teste-piloto | **Não** | Não há registro dos problemas encontrados no piloto nem dos ajustes feitos depois dele. Severidade: **Média**. |
| **TP-04** | Descarte dos dados do piloto | **Sim** | Declaração de descarte dos dados na Seção 4.2. |
| **TP-05** | Participante do teste-piloto | **Não** | O participante do piloto não é identificado, então não é possível saber se ele é de fora da equipe que planejou a avaliação. Severidade: **Baixa**. |

<p align="center" style="font-size: 0.85em; margin-top: -0.6em;"><b>Fonte:</b> Daniel da Silva Batista (2026).</p>

</div>

### 4.11 Teste de Usabilidade (Relato do Protótipo de Alta Fidelidade)

**Visão geral:** Três sessões presenciais em que participantes do Perfil 1 montaram blocos de estudo no protótipo.

**Vídeo da inspeção:** *(a gravar)*

A Tabela 13 apresenta a inspeção das sessões com usuários com a [Lista de Verificação de Teste de Usabilidade](../listas/teste-usabilidade.md):

<div align="center" markdown="1">

<p align="center"><b>Tabela 13: Inspeção das Sessões com Usuários</b></p>

| Item | Verificação | Resposta | Evidência / Observação |
| :---: | :--- | :---: | :--- |
| **TU-01** | Mesmo material para todos | **Incompleto** | Todos receberam a mesma orientação de exploração livre (Seção 5.3), mas não há questionário inicial nem descrição escrita das tarefas, e o consentimento variou (em vídeo para os Participantes 1 e 2, assinado previamente para o 3). Severidade: **Baixa**. |
| **TU-02** | Duração das tarefas e da sessão | **Sim** | Sessões de 1 min 51 s a 2 min 53 s (Tabela 5). |
| **TU-03** | Não interferir durante as tarefas | **Sim** | O avaliador apenas observou; na Sessão 3 só respondeu a uma pergunta do participante sobre o menu, sem conduzir a tarefa. |
| **TU-04** | Registro do acompanhamento das sessões | **Sim** | Tabelas 6 a 8 registram, por etapa, a ação, o resultado (sucesso, ajuda ou não observada) e as falas dos participantes. |
| **TU-05** | Entrevista pós-teste | **Sim** | Síntese pós-teste de cada participante na Seção 5.3. |

<p align="center" style="font-size: 0.85em; margin-top: -0.6em;"><b>Fonte:</b> Daniel da Silva Batista (2026).</p>

</div>

### 4.12 Síntese da Inspeção

A Tabela 14 consolida o resultado da inspeção:

<div align="center" markdown="1">

<p align="center"><b>Tabela 14: Síntese das Respostas</b></p>

| Artefato | Sim | Incompleto | Não | Não se aplica |
| :--- | :---: | :---: | :---: | :---: |
| Perfil do Usuário | 3 | 1 | 1 | 0 |
| Persona PER-02 | 4 | 1 | 0 | 0 |
| Cenário CEN-04 | 4 | 1 | 0 | 0 |
| HTA da TAR-04 | 2 | 1 | 2 | 0 |
| CTT da TAR-04 | 4 | 0 | 0 | 1 |
| Planejamento do Relato da Análise de Tarefas | 5 | 0 | 0 | 0 |
| Storyboard SB-02 | 4 | 0 | 1 | 0 |
| Relato do Protótipo de Papel | 2 | 2 | 1 | 0 |
| Relato do Protótipo de Alta Fidelidade | 3 | 2 | 0 | 0 |
| Teste-Piloto | 2 | 1 | 2 | 0 |
| Teste de Usabilidade | 4 | 1 | 0 | 0 |
| **Total (55 itens)** | **37** | **10** | **7** | **1** |

<p align="center" style="font-size: 0.85em; margin-top: -0.6em;"><b>Fonte:</b> Daniel da Silva Batista (2026).</p>

</div>

A severidade de cada defeito segue a escala de três níveis usada nos planejamentos de relato do grupo: **Alta** (compromete a validade do artefato), **Média** (o artefato continua válido, mas a falha se propaga para outros artefatos) e **Baixa** (ajuste de forma). Ela é indicada na observação de cada item com resposta "Não" ou "Incompleto".

## 5. Correção

> **Nota:** a correção e o acompanhamento serão feitos após a entrega da Etapa 8. Até lá, os defeitos ficam registrados na [Seção 4](#4-inspecao), na observação de cada item com resposta "Não" ou "Incompleto", junto com a sua severidade.

O autor corrige os itens com resposta "Não" ou "Incompleto" e registra, para cada um, o link da correção (commit ou pull request) na Tabela 15.

<div align="center" markdown="1">

<p align="center"><b>Tabela 15: Correção dos Defeitos</b></p>

| Defeito | Responsável | Correção (link) | Situação |
| :---: | :--- | :--- | :---: |
| Itens com resposta Não ou Incompleto | Pedro Rocha Ferreira Lima | — | Pendente |

<p align="center" style="font-size: 0.85em; margin-top: -0.6em;"><b>Fonte:</b> Daniel da Silva Batista (2026).</p>

</div>

## 6. Acompanhamento

> **Nota:** a correção e o acompanhamento serão feitos após a entrega da Etapa 8. Até lá, os defeitos ficam registrados na [Seção 4](#4-inspecao), na observação de cada item com resposta "Não" ou "Incompleto", junto com a sua severidade.

O inspetor confere se cada correção resolveu o defeito correspondente. Defeitos de severidade Alta exigem nova inspeção do item; os demais podem ser aceitos pela conferência do inspetor. A decisão final é registrada na Tabela 16.

<div align="center" markdown="1">

<p align="center"><b>Tabela 16: Acompanhamento</b></p>

| Defeito | Conferido por | Data | Resultado |
| :---: | :--- | :---: | :---: |
| Itens com resposta Não ou Incompleto | Daniel da Silva Batista | — | Pendente |

<p align="center" style="font-size: 0.85em; margin-top: -0.6em;"><b>Fonte:</b> Daniel da Silva Batista (2026).</p>

</div>

## 7. Referências Bibliográficas

> [1] BARBOSA, Simone D. J.; SILVA, Bruno S. da; SILVEIRA, Milene S.; GASPARINI, Isabela; DARIN, Ticianne; BARBOSA, Gabriel D. J. *Interação Humano-Computador e Experiência do Usuário*. 1. ed. Autopublicação, 2021. ISBN: 978-65-00-19677-1.  
> [2] FAGAN, Michael E. Design and code inspections to reduce errors in program development. *IBM Systems Journal*, v. 15, n. 3, p. 182-211, 1976.  
> [3] SALES, André Barros de. *Plano de ensino FIHC 022026 – Turma 01*. Brasília: FCTE/UnB, 2026.

## 8. Histórico de Versões

<div align="center" markdown="1">

| Versão | Data | Descrição | Autor(es) | Revisor(es) |
| :---: | :---: | :--- | :---: | :---: |
| `1.0` | 22/11/2026 | Planejamento, preparação e inspeção dos artefatos de Pedro Rocha Ferreira Lima com os itens 01 a 05 de 11 listas de verificação (55 itens) e registro de 17 defeitos (respostas Não ou Incompleto). | Daniel da Silva Batista | — |

</div>
