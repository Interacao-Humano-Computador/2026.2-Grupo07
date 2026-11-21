<div align="center" markdown="1">

<p align="center"><b>Tabela de Contribuição</b></p>

| Membro | Contribuição |
| :--- | :--- |
| **Daniel da Silva Batista** | Elaboração dos itens CTT-01 a CTT-05, revisão dos itens da v1 e recortes do livro. |
| **Arthur Sismene Carvalho** | Elaboração dos itens CTT-06 a CTT-10 *(pendente)*. |
| **Leonardo da Silva Lopes Júnior** | Elaboração dos itens CTT-11 a CTT-15 *(pendente)*. |
| **Pedro Rocha Ferreira Lima** | Elaboração dos itens CTT-16 a CTT-20 *(pendente)*. |
| **Claude (Anthropic)** | Apoio na organização da página e na extração dos recortes do livro (conforme Política de IA). |

<p align="center" style="font-size: 0.85em; margin-top: -0.6em;"><b>Fonte:</b> Daniel da Silva Batista (2026).</p>

</div>

# Lista de Verificação de CTT — v2

## 1. Introdução

A **Árvore de Tarefas Concorrentes (CTT)** é o diagrama em árvore que mostra quem executa cada tarefa (a pessoa, o sistema ou os dois) e a relação de tempo entre elas, por meio de operadores como `>>` ou `[>` (BARBOSA et al., 2021).

Esta lista é a **versão 2 (v2)** da [Lista de Verificação para CTT (v1, Etapa 4)](../../design-avaliacao-desenvolvimento/listas-verificacao-etapa-4.md#3-lista-de-verificacao-para-ctt-10-itens-em-3-blocos) e faz parte da [Verificação da Etapa 8](../index.md), conduzida pelo método de inspeção de Fagan (FAGAN, 1976). Ela será aplicada, no passo de inspeção, aos seguintes artefatos do projeto:

* [Análise de Tarefas — CTT](../../analise-de-requisitos/analise-de-tarefas/ctt.md)

A lista tem **20 itens**, e cada integrante do grupo elabora 5 deles. Cada item é uma pergunta objetiva, com as explicações necessárias entre parênteses, para que possa ser respondida por quem não conhece o artefato. Cada item indica o autor e a fonte. A [Seção 3](#3-itens-de-verificacao) consolida todos os itens em uma tabela, e a [Seção 4](#4-detalhamento-dos-itens) detalha cada um, com a pergunta e, logo abaixo, o recorte do livro que a fundamenta.

## 2. Critérios de Julgamento

Cada item admite uma única resposta:

* **Sim** — o artefato atende integralmente ao que a pergunta descreve;
* **Não** — o artefato não atende ao que a pergunta descreve ou não apresenta a informação;
* **Incompleto** — o artefato atende apenas em parte (por exemplo, em alguns quadros, tarefas ou participantes, mas não em todos).

## 3. Itens de Verificação

A Tabela 1 consolida os 20 itens de verificação da Lista de Verificação de CTT — v2:

<div align="center" markdown="1">

<p align="center"><b>Tabela 1: Itens da Lista de Verificação de CTT — v2</b></p>

| ID | Pergunta de verificação | Autor | Fonte |
| :---: | :--- | :--- | :--- |
| **CTT-01** | Cada tarefa do diagrama usa o ícone do seu tipo: usuário (feita fora do sistema, como ler um edital impresso), sistema (o sistema processa sozinho), interativa (diálogo entre a pessoa e a tela) ou abstrata (apenas agrupa outras tarefas)? | Daniel da Silva Batista | BARBOSA et al. (2021, p. 199) |
| **CTT-02** | Toda tarefa que tem outras tarefas abaixo dela é do tipo abstrata (ícone de nuvem), e nenhuma tarefa abstrata ficou no último nível, sem tarefas abaixo? | Daniel da Silva Batista | BARBOSA et al. (2021, p. 199) |
| **CTT-03** | As tarefas vizinhas (lado a lado, no mesmo nível da árvore) estão ligadas por um operador que indica a relação de tempo entre elas (por exemplo, ">>": a segunda só começa quando a primeira termina)? | Daniel da Silva Batista | BARBOSA et al. (2021, p. 200) |
| **CTT-04** | Quando uma tarefa entrega dados para a seguinte (por exemplo, os filtros escolhidos são usados na busca), o diagrama usa "[]>>" (ativação com passagem de informação) em vez de apenas ">>"? | Daniel da Silva Batista | BARBOSA et al. (2021, p. 200) |
| **CTT-05** | O cancelamento definitivo de uma tarefa usa "[>" (desativação: a tarefa interrompida não volta) e a pausa com retorno usa "|>" (suspensão/retomada: a tarefa continua de onde parou)? | Daniel da Silva Batista | BARBOSA et al. (2021, p. 200) |
| **CTT-06** | *(a elaborar)* | Arthur Sismene Carvalho | — |
| **CTT-07** | *(a elaborar)* | Arthur Sismene Carvalho | — |
| **CTT-08** | *(a elaborar)* | Arthur Sismene Carvalho | — |
| **CTT-09** | *(a elaborar)* | Arthur Sismene Carvalho | — |
| **CTT-10** | *(a elaborar)* | Arthur Sismene Carvalho | — |
| **CTT-11** | *(a elaborar)* | Leonardo da Silva Lopes Júnior | — |
| **CTT-12** | *(a elaborar)* | Leonardo da Silva Lopes Júnior | — |
| **CTT-13** | *(a elaborar)* | Leonardo da Silva Lopes Júnior | — |
| **CTT-14** | *(a elaborar)* | Leonardo da Silva Lopes Júnior | — |
| **CTT-15** | *(a elaborar)* | Leonardo da Silva Lopes Júnior | — |
| **CTT-16** | *(a elaborar)* | Pedro Rocha Ferreira Lima | — |
| **CTT-17** | *(a elaborar)* | Pedro Rocha Ferreira Lima | — |
| **CTT-18** | *(a elaborar)* | Pedro Rocha Ferreira Lima | — |
| **CTT-19** | *(a elaborar)* | Pedro Rocha Ferreira Lima | — |
| **CTT-20** | *(a elaborar)* | Pedro Rocha Ferreira Lima | — |

<p align="center" style="font-size: 0.85em; margin-top: -0.6em;"><b>Fonte:</b> Daniel da Silva Batista, Arthur Sismene Carvalho, Leonardo da Silva Lopes Júnior e Pedro Rocha Ferreira Lima (2026), conforme o autor de cada item.</p>

</div>

## 4. Detalhamento dos Itens

### 4.1 CTT-01 — Os quatro tipos de tarefa do CTT

A Tabela 2 apresenta o item CTT-01:

<div align="center" markdown="1">

<p align="center"><b>Tabela 2: Item CTT-01 — Os quatro tipos de tarefa do CTT</b></p>

| Campo | Registro |
| :--- | :--- |
| **Pergunta** | Cada tarefa do diagrama usa o ícone do seu tipo: usuário (feita fora do sistema, como ler um edital impresso), sistema (o sistema processa sozinho), interativa (diálogo entre a pessoa e a tela) ou abstrata (apenas agrupa outras tarefas)? |
| **Autor** | Daniel da Silva Batista |
| **Fonte** | BARBOSA et al. (2021, p. 199) |
| **Origem na v1** | CTT-01 |

<p align="center" style="font-size: 0.85em; margin-top: -0.6em;"><b>Fonte:</b> Daniel da Silva Batista (2026).</p>

</div>

A Figura 1 reproduz o trecho do livro que fundamenta o item CTT-01:

<div align="center">

<p align="center"><b>Figura 1: Referência Bibliográfica — Item CTT-01 (Os quatro tipos de tarefa do CTT)</b></p>

<img src="../../../assets/images/verificacao-etapa-8/ctt-01.png" alt="Trecho do livro que fundamenta o item CTT-01" style="max-width: 90%; width: auto; border: 1px solid #d0d7de; border-radius: 6px; box-shadow: 0 4px 12px rgba(0,0,0,0.08); margin: 12px auto; display: block;">

<p align="center" style="font-size: 0.85em; margin-top: 0.4em;"><b>Fonte:</b> BARBOSA et al. (2021, p. 199).</p>

</div>

### 4.2 CTT-02 — A tarefa abstrata como composição de outras tarefas

A Tabela 3 apresenta o item CTT-02:

<div align="center" markdown="1">

<p align="center"><b>Tabela 3: Item CTT-02 — A tarefa abstrata como composição de outras tarefas</b></p>

| Campo | Registro |
| :--- | :--- |
| **Pergunta** | Toda tarefa que tem outras tarefas abaixo dela é do tipo abstrata (ícone de nuvem), e nenhuma tarefa abstrata ficou no último nível, sem tarefas abaixo? |
| **Autor** | Daniel da Silva Batista |
| **Fonte** | BARBOSA et al. (2021, p. 199) |
| **Origem na v1** | CTT-02 |

<p align="center" style="font-size: 0.85em; margin-top: -0.6em;"><b>Fonte:</b> Daniel da Silva Batista (2026).</p>

</div>

A Figura 2 reproduz o trecho do livro que fundamenta o item CTT-02:

<div align="center">

<p align="center"><b>Figura 2: Referência Bibliográfica — Item CTT-02 (A tarefa abstrata como composição de outras tarefas)</b></p>

<img src="../../../assets/images/verificacao-etapa-8/ctt-02.png" alt="Trecho do livro que fundamenta o item CTT-02" style="max-width: 90%; width: auto; border: 1px solid #d0d7de; border-radius: 6px; box-shadow: 0 4px 12px rgba(0,0,0,0.08); margin: 12px auto; display: block;">

<p align="center" style="font-size: 0.85em; margin-top: 0.4em;"><b>Fonte:</b> BARBOSA et al. (2021, p. 199).</p>

</div>

### 4.3 CTT-03 — Relações de tempo entre tarefas no CTT

A Tabela 4 apresenta o item CTT-03:

<div align="center" markdown="1">

<p align="center"><b>Tabela 4: Item CTT-03 — Relações de tempo entre tarefas no CTT</b></p>

| Campo | Registro |
| :--- | :--- |
| **Pergunta** | As tarefas vizinhas (lado a lado, no mesmo nível da árvore) estão ligadas por um operador que indica a relação de tempo entre elas (por exemplo, ">>": a segunda só começa quando a primeira termina)? |
| **Autor** | Daniel da Silva Batista |
| **Fonte** | BARBOSA et al. (2021, p. 200) |
| **Origem na v1** | CTT-09 |

<p align="center" style="font-size: 0.85em; margin-top: -0.6em;"><b>Fonte:</b> Daniel da Silva Batista (2026).</p>

</div>

A Figura 3 reproduz o trecho do livro que fundamenta o item CTT-03:

<div align="center">

<p align="center"><b>Figura 3: Referência Bibliográfica — Item CTT-03 (Relações de tempo entre tarefas no CTT)</b></p>

<img src="../../../assets/images/verificacao-etapa-8/ctt-03.png" alt="Trecho do livro que fundamenta o item CTT-03" style="max-width: 90%; width: auto; border: 1px solid #d0d7de; border-radius: 6px; box-shadow: 0 4px 12px rgba(0,0,0,0.08); margin: 12px auto; display: block;">

<p align="center" style="font-size: 0.85em; margin-top: 0.4em;"><b>Fonte:</b> BARBOSA et al. (2021, p. 200).</p>

</div>

### 4.4 CTT-04 — Ativação com passagem de informação

A Tabela 5 apresenta o item CTT-04:

<div align="center" markdown="1">

<p align="center"><b>Tabela 5: Item CTT-04 — Ativação com passagem de informação</b></p>

| Campo | Registro |
| :--- | :--- |
| **Pergunta** | Quando uma tarefa entrega dados para a seguinte (por exemplo, os filtros escolhidos são usados na busca), o diagrama usa "[]>>" (ativação com passagem de informação) em vez de apenas ">>"? |
| **Autor** | Daniel da Silva Batista |
| **Fonte** | BARBOSA et al. (2021, p. 200) |
| **Origem na v1** | CTT-03 |

<p align="center" style="font-size: 0.85em; margin-top: -0.6em;"><b>Fonte:</b> Daniel da Silva Batista (2026).</p>

</div>

A Figura 4 reproduz o trecho do livro que fundamenta o item CTT-04:

<div align="center">

<p align="center"><b>Figura 4: Referência Bibliográfica — Item CTT-04 (Ativação com passagem de informação)</b></p>

<img src="../../../assets/images/verificacao-etapa-8/ctt-04.png" alt="Trecho do livro que fundamenta o item CTT-04" style="max-width: 90%; width: auto; border: 1px solid #d0d7de; border-radius: 6px; box-shadow: 0 4px 12px rgba(0,0,0,0.08); margin: 12px auto; display: block;">

<p align="center" style="font-size: 0.85em; margin-top: 0.4em;"><b>Fonte:</b> BARBOSA et al. (2021, p. 200).</p>

</div>

### 4.5 CTT-05 — Desativação e suspensão/retomada

A Tabela 6 apresenta o item CTT-05:

<div align="center" markdown="1">

<p align="center"><b>Tabela 6: Item CTT-05 — Desativação e suspensão/retomada</b></p>

| Campo | Registro |
| :--- | :--- |
| **Pergunta** | O cancelamento definitivo de uma tarefa usa "[>" (desativação: a tarefa interrompida não volta) e a pausa com retorno usa "|>" (suspensão/retomada: a tarefa continua de onde parou)? |
| **Autor** | Daniel da Silva Batista |
| **Fonte** | BARBOSA et al. (2021, p. 200) |
| **Origem na v1** | CTT-08 |

<p align="center" style="font-size: 0.85em; margin-top: -0.6em;"><b>Fonte:</b> Daniel da Silva Batista (2026).</p>

</div>

A Figura 5 reproduz o trecho do livro que fundamenta o item CTT-05:

<div align="center">

<p align="center"><b>Figura 5: Referência Bibliográfica — Item CTT-05 (Desativação e suspensão/retomada)</b></p>

<img src="../../../assets/images/verificacao-etapa-8/ctt-05.png" alt="Trecho do livro que fundamenta o item CTT-05" style="max-width: 90%; width: auto; border: 1px solid #d0d7de; border-radius: 6px; box-shadow: 0 4px 12px rgba(0,0,0,0.08); margin: 12px auto; display: block;">

<p align="center" style="font-size: 0.85em; margin-top: 0.4em;"><b>Fonte:</b> BARBOSA et al. (2021, p. 200).</p>

</div>

> *Os itens CTT-06 a CTT-20 serão detalhados pelos respectivos autores neste mesmo formato: pergunta, autor, fonte e recorte do livro.*

## 5. Correspondência com a v1

A Tabela 7 apresenta, para cada item da v2 já elaborado, o item de origem na v1 e o que mudou na redação:

<div align="center" markdown="1">

<p align="center"><b>Tabela 7: Correspondência entre os Itens da v1 e da v2</b></p>

| Item v2 | Origem na v1 | O que mudou |
| :---: | :---: | :--- |
| **CTT-01** | [CTT-01](../../design-avaliacao-desenvolvimento/listas-verificacao-etapa-4.md#3-lista-de-verificacao-para-ctt-10-itens-em-3-blocos) | Cada tipo vem com um exemplo; a figura citada foi corrigida (é a Figura 8.4 do livro, não a 8.3). |
| **CTT-02** | [CTT-02](../../design-avaliacao-desenvolvimento/listas-verificacao-etapa-4.md#3-lista-de-verificacao-para-ctt-10-itens-em-3-blocos) | Frase dividida em duas condições objetivas. |
| **CTT-03** | [CTT-09](../../design-avaliacao-desenvolvimento/listas-verificacao-etapa-4.md#3-lista-de-verificacao-para-ctt-10-itens-em-3-blocos) | Mantida só a exigência do operador entre tarefas vizinhas; a parte de opcionalidade e iteração saiu por não estar no livro. |
| **CTT-04** | [CTT-03](../../design-avaliacao-desenvolvimento/listas-verificacao-etapa-4.md#3-lista-de-verificacao-para-ctt-10-itens-em-3-blocos) | Foco em um único operador, com exemplo do projeto. |
| **CTT-05** | [CTT-08](../../design-avaliacao-desenvolvimento/listas-verificacao-etapa-4.md#3-lista-de-verificacao-para-ctt-10-itens-em-3-blocos) | Significado de cada operador entre parênteses. |

<p align="center" style="font-size: 0.85em; margin-top: -0.6em;"><b>Fonte:</b> Daniel da Silva Batista (2026).</p>

</div>

Na v1, os tipos de tarefa eram atribuídos à "Figura 8.3" e as relações à "Figura 8.4"; no livro, a Figura 8.3 é do CPM-GOMS, os tipos estão na Figura 8.4 e as relações na Figura 8.5 (pp. 199-200).

## 6. Referências Bibliográficas

> [1] BARBOSA, Simone D. J.; SILVA, Bruno S. da; SILVEIRA, Milene S.; GASPARINI, Isabela; DARIN, Ticianne; BARBOSA, Gabriel D. J. *Interação Humano-Computador e Experiência do Usuário*. 1. ed. Autopublicação, 2021. ISBN: 978-65-00-19677-1.  
> [2] FAGAN, Michael E. Design and code inspections to reduce errors in program development. *IBM Systems Journal*, v. 15, n. 3, p. 182-211, 1976.  
> [3] SALES, André Barros de. *Plano de ensino FIHC 022026 – Turma 01*. Brasília: FCTE/UnB, 2026.

## 7. Histórico de Versões

<div align="center" markdown="1">

| Versão | Data | Descrição | Autor(es) | Revisor(es) |
| :---: | :---: | :--- | :---: | :---: |
| `1.0` | 21/11/2026 | Criação da v2 da lista: itens CTT-01 a CTT-05 reescritos a partir da v1, com fonte por página e recorte do livro; itens CTT-06 a CTT-20 reservados aos demais integrantes. | Daniel da Silva Batista | — |

</div>
