# Planejamento do Relato dos Resultados da Avaliação da Análise de Tarefas

## Tabela de Contribuição

| Membro | Contribuição |
| --- | --- |
| **Pedro Rocha Ferreira Lima** | Redação do planejamento do relato, definição da estrutura de tópicos, escala de severidade e modelos de tabela |
| **Daniel da Silva Batista** | Revisão da fundamentação teórica, modelo de sumário por tarefa e critérios de priorização dos problemas |
| **Leonardo da Silva Lopes Júnior** | Definição do público, formato e prazos de divulgação |
| **Arthur Sismene Carvalho** | Revisão técnica, planejamento do reprojeto dos modelos, publicação desta página no GitHub Pages |
| **Claude (Anthropic)** | Estruturação textual, extração dos recortes bibliográficos e diagramação Markdown |

**Fonte:** Arthur Sismene Carvalho (2026)

---

## 1. Introdução

Este documento define **como** os resultados da avaliação dos modelos de tarefa em HTA e em CTT serão consolidados, classificados e comunicados. Ele é escrito **antes** da avaliação: fixar previamente a estrutura do relato impede que ela seja acomodada aos achados depois que eles aparecem.

O documento não contém resultados. Os resultados serão publicados em página própria, seguindo a estrutura aqui definida. O planejamento da avaliação que os origina está em [Planejamento da Avaliação da Análise de Tarefas](planejamento-avaliacao-analise-de-tarefas.md).

---

## 2. Metodologia

A estrutura do relato segue a atividade de **consolidação e relato dos resultados** descrita por Barbosa et al. (2021) na Seção 11.7.5. Concluída a interpretação individual de cada sessão, os resultados são consolidados em análise **interparticipante**, na qual se buscam recorrências que permitam distinguir a característica do grupo da idiossincrasia de um participante isolado.

**Figura 1: Referência Bibliográfica — Consolidação e relato dos resultados**

![Seção 11.7.5 de Barbosa et al. (2021, p. 303), sobre a consolidação interparticipante, os cuidados com a generalização e a lista do que o relato dos resultados costuma incluir](../assets/images/barbosa-consolidacao-relato-p303.png)

**Fonte:** BARBOSA et al. (2021, p. 303)

Os sete tópicos listados ao final dessa seção formam o sumário obrigatório do relato. O grupo acrescenta um oitavo, a síntese da inspeção por lista de verificação, porque a avaliação planejada tem duas etapas e a inspeção produz resultados de natureza distinta dos obtidos em sessão com usuário.

---

## 3. Estrutura do Relato

### 3.1 Objetivos e escopo da avaliação

Retomada dos objetivos geral e específicos e das perguntas PA-01 a PA-07, com a indicação de quais modelos foram efetivamente inspecionados e quais tarefas foram efetivamente validadas em entrevista. Divergências entre o escopo planejado e o executado são declaradas aqui.

### 3.2 Método de avaliação empregado

Descrição das duas etapas conduzidas: a inspeção cruzada com as listas de verificação de HTA e de CTT e as entrevistas semiestruturadas. Inclui o cronograma realizado, com datas e durações reais, e o registro de qualquer alteração em relação ao planejado, com justificativa — em especial se a ordem "descrever primeiro, ver o diagrama depois" tiver sido quebrada em alguma sessão, o que compromete a validade daquele dado.

### 3.3 Número e perfil dos participantes

**Tabela 1: Modelo de caracterização dos participantes**

| Código | Faixa etária | Escolaridade | Experiência com concursos | Dispositivo habitual | Persona de referência | Tarefas validadas |
| --- | --- | --- | --- | --- | --- | --- |
| USR-06 | | | | | PER-01 — Maria Helena | TAR-01, TAR-02 |
| USR-07 | | | | | PER-02 — Lucas | TAR-03, TAR-04 |
| USR-08 | | | | | PER-03 — Thiago | TAR-05, TAR-06 |
| USR-09 | | | | | PER-04 — Renata | TAR-07, TAR-08 |

**Fonte:** Arthur Sismene Carvalho (2026)

Registra-se também o número de avaliadores: quatro integrantes na inspeção, dois por modelo.

### 3.4 Síntese da inspeção por lista de verificação

**Tabela 2: Modelo de síntese da inspeção — HTA**

| Tarefa | Itens conformes | Não conformes | Não se aplica | Itens não conformes (IDs) |
| --- | --- | --- | --- | --- |
| TAR-01 | | | | |
| … | | | | |
| **Total (10 itens × 8 tarefas)** | | | | |

**Tabela 3: Modelo de síntese da inspeção — CTT**

| Bloco da lista | Itens | Conforme | Não conforme | Não se aplica |
| --- | --- | --- | --- | --- |
| I — Estrutura do modelo | 1 a 2 | | | |
| II — Relações entre tarefas | 3 a 8 | | | |
| III — Alcance e limitações da notação | 9 a 10 | | | |
| **Total** | **10** | | | |

**Fonte:** Arthur Sismene Carvalho (2026)

Acompanha as tabelas um **gráfico de barras horizontais** com a contagem de itens conformes por tarefa, em HTA e em CTT lado a lado, que mostra de relance quais tarefas concentram defeitos de notação. Cada item "Não conforme" vira obrigatoriamente um problema na seção 3.5.

### 3.5 Problemas e dificuldades encontrados

Lista de todos os problemas identificados, um por linha, com identificador no formato **PAT-nn**.

**Tabela 4: Modelo de registro de problemas**

| ID | Tarefa | Notação | Descrição do problema | Tipo | Origem | Severidade | Recorrência |
| --- | --- | --- | --- | --- | --- | --- | --- |
| PAT-01 | | HTA / CTT / Ambas | | | Inspeção / Entrevista | | n de 4 |

**Fonte:** Arthur Sismene Carvalho (2026)

A coluna **Tipo** classifica o problema em uma das quatro categorias abaixo, que correspondem aos objetivos específicos da avaliação:

| Tipo | Significado |
| --- | --- |
| **Notação** | O modelo viola uma regra de HTA ou de CTT |
| **Passo ausente** | O usuário executa um passo que não está no modelo |
| **Passo excedente** | O modelo prevê um passo que o usuário não executa |
| **Caminho não previsto** | Existe uma rota alternativa para o objetivo que não foi modelada |
| **Incoerência com cenário ou persona** | A decomposição não cabe nas condições da persona ou contradiz o objetivo declarado no cenário — por exemplo, uma tarefa longa atribuída a quem estuda em blocos curtos pelo celular |

**Fonte:** Arthur Sismene Carvalho (2026)

A distinção importa para o encaminhamento: problemas de **notação** são corrigidos pela equipe sem consultar ninguém; os outros três exigem decidir se o modelo estava errado ou se o participante descreveu um uso atípico — e é aí que a coluna **Recorrência** pesa.

### 3.6 Sugestões de melhoria

**Tabela 5: Modelo de registro de sugestão**

| ID do problema | Contexto | O que o participante descreveu | O que o modelo previa | Alteração proposta no modelo | Origem da proposta |
| --- | --- | --- | --- | --- | --- |
| PAT-01 | | | | | Participante / Equipe |

**Fonte:** Arthur Sismene Carvalho (2026)

Para problemas que afetem a estrutura temporal — passos que o usuário disse poder fazer em qualquer ordem, mas que o modelo encadeou com o operador de ativação, por exemplo —, a alteração proposta indica explicitamente o operador CTT substituto.

### 3.7 Feedback dos usuários e análise dos resultados

Reúne as observações espontâneas dos participantes que não se enquadram como problema, e em seguida a interpretação do conjunto: que divergências se repetem entre participantes, quais aparecem uma única vez, e o que o conjunto indica sobre a qualidade da análise de tarefas como insumo das etapas seguintes.

Duas análises específicas ficam reservadas a esta seção:

- **Os padrões que atravessam tarefas diferentes.** Como cada tarefa foi descrita por um único participante, a recorrência não é medida sobre a mesma tarefa, mas entre tarefas: o mesmo tipo de divergência aparecendo em modelos de autores diferentes indica um problema de modelagem do grupo, e não um desacordo pontual com um participante.
- **A demanda real por cada tarefa proposta.** Como as tarefas descrevem recursos que o portal ainda não oferece, a resposta à pergunta 1 do roteiro — o que o participante faz hoje para alcançar aquele objetivo — indica se existe demanda. Uma tarefa para a qual nenhum participante relata necessidade nem contorno atual é um candidato a sair do escopo do reprojeto, e não apenas um modelo a corrigir. O caso mais sensível é a **TAR-06**: registra-se se os participantes chegam a procurar estágio no portal e desistem, se nunca cogitaram usá-lo para isso, ou se recorrem a outro site — e, nesse caso, qual.

As perguntas PA-01 a PA-07 são retomadas uma a uma e respondidas; quando não houver resposta, registra-se por que ela não foi encontrada.

### 3.8 Sumário dos resultados por tarefa

**Tabela 6: Modelo de sumário por tarefa**

| Tarefa | Modelo HTA conforme? | Modelo CTT conforme? | Descrição do usuário confere? | Problemas de severidade alta | Decisão |
| --- | --- | --- | --- | --- | --- |
| TAR-01 | Sim / Não | Sim / Não | Sim / Não / Em parte | | Aprovado / Aprovado com ajustes / Remodelar |

**Fonte:** Arthur Sismene Carvalho (2026)

---

## 4. Classificação e Priorização dos Problemas

**Tabela 7: Escala de severidade**

| Nível | Designação | Critério |
| --- | --- | --- |
| **3** | Alta | Compromete a validade do modelo: a decomposição não corresponde à tarefa real, falta um passo essencial ou o objetivo modelado não é o objetivo do usuário |
| **2** | Média | O modelo permanece válido, mas contém imprecisão que se propagaria para os artefatos derivados — ordem de passos incorreta, operador temporal inadequado, plano mal descrito |
| **1** | Baixa | Ajuste de forma: numeração, rótulo de subtarefa, legenda, inconsistência entre o diagrama e a tabela de análise |

**Fonte:** Arthur Sismene Carvalho (2026)

A ordem de correção é dada por **severidade primeiro e recorrência em seguida**. Problemas de severidade 3 são bloqueantes: nenhuma tarefa com um deles em aberto serve de base para o storyboard ou para o protótipo em papel. Problemas de severidade 2 em modelos CTT recebem prioridade sobre os de HTA de mesma severidade, porque um operador temporal errado produz um fluxo de interação errado no artefato seguinte.

---

## 5. Público, Formato e Prazo do Relato

**Tabela 8: Divulgação dos resultados**

| Destinatário | Formato | Prazo |
| --- | --- | --- |
| Equipe do projeto | Reunião de consolidação, com a tabela de problemas aberta | 19/10/2026 |
| Professor e turma | Página *Relato dos Resultados da Avaliação da Análise de Tarefas* no GitHub Pages do grupo | 20/10/2026 |
| Turma | Apresentação da Etapa 4, com o sumário da Tabela 6 e os problemas de severidade alta | Conforme o cronograma da disciplina |

**Fonte:** Arthur Sismene Carvalho (2026)

As gravações não são publicadas. O que vai para o site são os dados anonimizados e consolidados, conforme o compromisso assumido em [Aspectos Éticos](../analise-de-requisitos/aspectos-eticos.md).

---

## 6. Planejamento do Reprojeto

**Tabela 9: Modelo de cronograma de reprojeto dos modelos**

| Tarefa | Alterações a executar | Notação afetada | Executor | Data |
| --- | --- | --- | --- | --- |
| TAR-01 | | | Daniel da Silva Batista | 20/10/2026 |
| TAR-02 | | | Daniel da Silva Batista | 20/10/2026 |
| TAR-03 | | | Pedro Rocha Ferreira Lima | 21/10/2026 |
| TAR-04 | | | Pedro Rocha Ferreira Lima | 21/10/2026 |
| TAR-05 | | | Arthur Sismene Carvalho | 21/10/2026 |
| TAR-06 | | | Arthur Sismene Carvalho | 22/10/2026 |
| TAR-07 | | | Leonardo da Silva Lopes Júnior | 22/10/2026 |
| TAR-08 | | | Leonardo da Silva Lopes Júnior | 22/10/2026 |

**Fonte:** Arthur Sismene Carvalho (2026)

O reprojeto preserva a modelagem já validada e altera apenas o que os resultados indicarem. Toda tarefa alterada é submetida de novo às listas de verificação de HTA e de CTT antes de ser considerada concluída, e as páginas de [HTA](../analise-de-requisitos/analise-de-tarefas/hta.md) e [CTT](../analise-de-requisitos/analise-de-tarefas/ctt.md) recebem nova versão no histórico, com referência a esta avaliação.

Há uma dependência que o cronograma precisa respeitar: os storyboards são construídos sobre as tarefas TAR-01, TAR-04, TAR-05 e TAR-08. Se alguma delas sofrer alteração de severidade alta, o storyboard correspondente é refeito a partir do modelo corrigido, e não do original.

---

## 7. Ressalvas sobre a Interpretação

1. **Os resultados indicam tendências de problemas, não certezas.** Uma divergência entre modelo e descrição é um indício de que o modelo está errado, não prova de que esteja.
2. **A ausência de problemas não prova que o modelo está correto.** Significa apenas que um estudo, num escopo e planejamento determinados, não os revelou.
3. **A generalização exige cuidado.** Com quatro participantes e cada tarefa validada por uma única pessoa, os resultados são fortemente influenciados pelas características individuais de cada participante. Nenhuma divergência isolada autoriza, sozinha, a conclusão de que o modelo está errado.
4. **O participante descreveu a tarefa de memória, sem executá-la.** A descrição é o que ele acredita fazer, que nem sempre é o que de fato faz. A confirmação em uso real fica para a avaliação do protótipo.

---

## Bibliografia

BARBOSA, S. D. J.; SILVA, B. S. da; SILVEIRA, M. S.; GASPARINI, I.; DARIN, T.; BARBOSA, G. D. J. **Interação Humano-Computador e Experiência do Usuário**. 1. ed. Autopublicação, 2021. ISBN 978-65-00-19677-1.

PATERNÒ, F. **Model-Based Design and Evaluation of Interactive Applications**. London: Springer-Verlag, 1999.

---

## Histórico de Versões

| Versão | Data | Descrição | Autor(es) | Revisor(es) |
| --- | --- | --- | --- | --- |
| `1.0` | 13/10/2026 | Criação do planejamento do relato dos resultados da avaliação da análise de tarefas: estrutura de tópicos, tipos de problema, escala de severidade, modelos de tabela, divulgação e planejamento de reprojeto | Arthur Sismene Carvalho | Pedro Rocha Ferreira Lima |
| `1.1` | 13/10/2026 | Alinhamento com a versão vigente da matriz de tarefas: persona de referência por participante, novo tipo de problema para incoerência com cenário ou persona, e registro da demanda real por cada tarefa proposta | Arthur Sismene Carvalho | Pedro Rocha Ferreira Lima |

**Fonte:** Pedro Rocha Ferreira Lima (2026)
