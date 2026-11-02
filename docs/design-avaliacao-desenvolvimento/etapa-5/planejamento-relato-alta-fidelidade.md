<div align="center" markdown="1">

<p align="center"><b>Tabela de Contribuição</b></p>

| Membro | Contribuição |
| :--- | :--- |
| Daniel da Silva Batista | Redação do planejamento do relato, definição dos tópicos canônicos segundo Barbosa e Silva (2021, p. 309), modelo da lista de problemas e cronograma de reprojeto. |
| Arthur Sismene Carvalho | Revisão dos critérios de avaliação, metas de usabilidade e detalhamento das métricas de tarefas. |
| Leonardo da Silva Lopes Júnior | Revisão da estrutura de documentação, do perfil dos participantes e adequação às normas da ABNT. |
| Pedro Rocha Ferreira Lima | Revisão técnica geral, definição da escala de severidade de problemas de usabilidade (Nielsen, 1993) e consolidação metodológica. |
| Gemini | Auxílio na estruturação textual, organização das tabelas e formatação em Markdown (conforme Política de Uso de IA). |

<p align="center" style="font-size: 0.85em; margin-top: -0.6em;"><b>Fonte:</b> Autores (2026).</p>

</div>

# Planejamento do Relato dos Resultados da Avaliação do Protótipo de Alta Fidelidade

## 1. Introdução

O planejamento do relato dos resultados estabelece antecipadamente o protocolo de consolidação, tratamento e apresentação dos dados que serão obtidos durante a avaliação empírica do protótipo de alta fidelidade (Barbosa et al., 2021, p. 279-280). A definição prévia desta estrutura assegura a consistência e a rastreabilidade das evidências de usabilidade colhidas com os usuários, permitindo que as oportunidades de melhoria fundamentem com rigor as decisões finais de interface antes da etapa de implementação de software.

Este artefato define a estrutura normativa do futuro **Relato dos Resultados da Avaliação do Protótipo de Alta Fidelidade**, estruturado em estrita conformidade com os tópicos canônicos prescritos por **Barbosa e Silva (2021, Subseção 11.7.5, p. 279 e Subseção 12.1, p. 309)**.

---

## 2. Estrutura Padrão do Relato dos Resultados (Barbosa e Silva, 2021, p. 309)

Conforme preconizado na literatura de IHC, o relatório final da avaliação do protótipo de alta fidelidade deverá conter obrigatoriamente as seguintes seções estruturadas:

### 2.1 Objetivos da Avaliação
O documento deverá registrar a finalidade com que a avaliação empírica do protótipo de alta fidelidade foi conduzida, destacando:
* A verificação da navegabilidade, eficiência e satisfação subjetiva dos usuários no protótipo digital interativo;
* A avaliação da clareza e affordance dos componentes visuais de acordo com o [Guia de Estilo](../guia-de-estilo.md);
* A validação das novas funcionalidades (busca avançada, comparação lado a lado de editais e exportação de relatórios em PDF);
* A verificação da superação dos problemas de usabilidade identificados nas avaliações de baixa fidelidade (papel).

### 2.2 Escopo da Avaliação
Deverão ser explicitados os limites do sistema e os módulos avaliados:
* **Módulos do Sistema Testados:** Módulo de busca avançada multicritério, visualização da matriz comparativa de editais concorrentes (`TAR-01`), exportação de relatórios em PDF (`TAR-02`) e consulta de vagas e alertas (`TAR-03`);
* **Nível de Fidelidade:** Alta fidelidade em protótipo digital interativo, com navegação em tela cheia e respostas visuais a cliques e seleções.

### 2.3 Breve Descrição do Método Utilizado
O relato deverá descrever a condução experimental:
* O método de **Teste de Usabilidade** com protótipo digital interativo (Dumas e Redish, 1999; Rubin e Chisnell, 2008);
* O protocolo de **Pensar em Voz Alta** (*Think-Aloud Protocol*, Ericsson e Simon, 1993);
* A realização de **entrevista pós-teste** com perguntas abertas de avaliação subjetiva (Barbosa e Silva, 2021, p. 278);
* A execução prévia do **teste-piloto** para calibração do roteiro e dos instrumentos de coleta.

### 2.4 Conjunto de Diretrizes e Critérios Avaliados
O relato apresentará a base teórica de critérios de usabilidade contra a qual os comportamentos observados foram confrontados:
* As **10 Heurísticas de Usabilidade de Nielsen (1993)** (visibilidade do estado do sistema, correspondência com o mundo real, controle e liberdade do usuário, consistência e padrões, prevenção de erros, reconhecimento em vez de memorização, etc.);
* As **Metas de Usabilidade** do projeto (eficácia na conclusão da tarefa, eficiência temporal, facilidade de aprendizado e satisfação do candidato).

### 2.5 Número e Perfil dos Avaliadores e Participantes
O relato deverá caracterizar os sujeitos envolvidos nas sessões de teste:
* **Tabela de Perfil dos Participantes:** código identificador do usuário, faixa etária, ocupação, experiência com certames públicos e confirmação da concordância com o Termo de Consentimento Livre e Esclarecido (TCLE);
* **Justificativa Amostral:** fundamentação da amostra de 3 participantes por rodada de teste com base em Steve Krug (2010), Nielsen (1993) e Barbosa e Silva (2021);
* **Divisão de Papéis da Equipe:** moderador/facilitador e observador/anotador de cada sessão.

### 2.6 Registro Audiovisual e Logística das Sessões
O documento conterá a comprovação formal da execução dos testes em conformidade com as diretrizes acadêmicas:
* Tabela cronológica com número da sessão, participante, data, horário de início e término, duração total e link de acesso à gravação em vídeo no YouTube (com privacidade não listada);
* Reprodutor de vídeo (*iframe*) das sessões principais incorporado diretamente no corpo da página.

### 2.7 Tarefas Executadas no Teste
Deverão ser detalhados os cenários e as tarefas operacionais que foram solicitadas aos participantes:
* Descrição clara da instrução fornecida ao usuário em cada tarefa;
* Os critérios de êxito esperados (*concluiu sozinho*, *concluiu com ajuda*, *desistiu/errou*);
* Dados métricos observados: tempo médio decorrido e número de erros cometidos por tarefa.

---

## 3. Modelo Padronizado para a Lista de Problemas de Usabilidade

A consolidação dos problemas identificados deve seguir expressamente a estrutura analítica de **Barbosa e Silva (2021, p. 309)**, no qual cada problema encontrado é documentado de forma individualizada com seus cinco atributos fundamentais:

> **Exemplo de Estrutura de Documentação do Problema:**
>
> * **Identificador do Problema:** `[ID-PROBLEMA]`: `[Título Sucinto do Problema de Usabilidade]`
> * **Local onde ocorre:** Indicação precisa da tela, menu, modal ou componente interativo onde a dificuldade foi observada pelo avaliador.
> * **Descrição do problema:** Detalhamento do comportamento inadequado do sistema, do desvio de rota ou da hesitação e dúvida manifestada pelo usuário.
> * **Diretriz(es) violada(s):** Heurística de usabilidade de Nielsen (1993) ou meta de usabilidade de Barbosa et al. (2021) infringida.
> * **Severidade do problema:** Classificação conforme Nielsen (1993) (*0 – Falso problema*, *1 – Cosmético*, *2 – Simples/Médio*, *3 – Grave* ou *4 – Catastrófico*).
> * **Sugestões de solução (Ação de Reprojeto):** Direcionamento técnico concreto para o refinamento da interface antes da implementação em código.

---

## 4. Classificação de Severidade dos Problemas (Nielsen, 1993)

Para padronizar a priorização dos ajustes finais, a severidade dos problemas relatados seguirá a escala clássica de Jakob Nielsen (1993), adotada por Barbosa e Silva (2021, p. 305):

<div align="center" markdown="1">

<p align="center"><b>Tabela 1: Escala de Severidade de Problemas de Usabilidade (Nielsen, 1993)</b></p>

| Severidade | Definição Operacional | Impacto no Reprojeto |
| :---: | :--- | :--- |
| **0 – Falso Problema** | Não afeta a realização da tarefa nem a percepção do usuário. | Nenhuma ação imediata necessária. |
| **1 – Cosmético (Pequeno)** | Problema leve que não prejudica a realização da tarefa, mas causa ligeiro desconforto estético. | Correção recomendada se houver tempo disponível. |
| **2 – Simples (Médio)** | Causa pequenas hesitações ou atrasos, mas o usuário consegue contornar e concluir a tarefa sozinho. | Baixa prioridade de correção; deve ser ajustado na versão final. |
| **3 – Grave (Grande)** | Dificulta substancialmente o fluxo da tarefa, induz a erros repetidos e gera frustração evidente. | Alta prioridade; correção obrigatória antes da implementação. |
| **4 – Catastrófico** | Impede totalmente a conclusão da tarefa pelo usuário (bloqueio do fluxo ou abandono). | Correção crítica e mandatória imediata. |

<p align="center" style="font-size: 0.85em; margin-top: -0.6em;"><b>Fonte:</b> Autores (2026), adaptado de Nielsen (1993) e Barbosa e Silva (2021).</p>

</div>

---

## 5. Cronograma de Reprojeto para a Implementação Final

O relato dos resultados deverá culminar em uma agenda clara de implementação das correções de design. A Tabela 2 apresenta o modelo de planejamento de reprojeto a ser preenchido:

<div align="center" markdown="1">

<p align="center"><b>Tabela 2: Modelo de Cronograma de Reprojeto da Interface Final</b></p>

| ID | Ação de Reprojeto | Origem (Problema Identificado) | Responsável | Data Prevista de Ajuste |
| :---: | :--- | :--- | :---: | :---: |
| `REP-01` | *(Ex.: Ajustar contraste do botão de exportação)* | Problema OPO-01 | Daniel Batista | 10/11/2026 |
| `REP-02` | *(Ex.: Incluir feedback visual de loading no filtro)* | Problema OPO-02 | Pedro Rocha | 11/11/2026 |
| `REP-03` | *(Ex.: Adicionar paginação na lista de resultados)* | Problema OPO-03 | Arthur Carvalho | 11/11/2026 |
| `REP-04` | *(Ex.: Reorganizar colunas da matriz comparativa)* | Problema OPO-04 | Leonardo Lopes | 12/11/2026 |

<p align="center" style="font-size: 0.85em; margin-top: -0.6em;"><b>Fonte:</b> Autores (2026).</p>

</div>

---

## 6. Referências Bibliográficas

> [1] BARBOSA, Simone Diniz Junqueira et al. *Interação Humano-Computador e Experiência do Usuário*. Rio de Janeiro: Autopublicação, 2021. ISBN: 978-65-00-19677-1.  
> [2] DUMAS, Joseph S.; REDISH, Janice C. *A Practical Guide to Usability Testing*. Revised ed. Exeter: Intellect Books, 1999.  
> [3] ERICSSON, K. Anders; SIMON, Herbert A. *Protocol Analysis: Verbal Reports as Data*. Cambridge: MIT Press, 1993.  
> [4] KRUG, Steve. *Rocket Surgery Made Easy: The Do-It-Yourself Guide to Finding and Fixing Usability Problems*. Berkeley: New Riders, 2010.  
> [5] MAYHEW, Deborah J. *The Usability Engineering Lifecycle: A Practitioner's Handbook for User Interface Design*. San Francisco: Morgan Kaufmann, 1999.  
> [6] NIELSEN, Jakob. *Usability Engineering*. San Francisco: Morgan Kaufmann, 1993.  
> [7] PREECE, Jennifer; ROGERS, Yvonne; SHARP, Helen. *Design de Interação: além da interação homem-computador*. Porto Alegre: Bookman, 2005.  
> [8] RUBIN, Jeffrey; CHISNELL, Dana. *Handbook of Usability Testing: How to Plan, Design, and Conduct Effective Tests*. 2. ed. Indianapolis: Wiley, 2008.  

---

## 7. Histórico de Versões

<div align="center" markdown="1">

| Versão | Data | Descrição | Autor(es) |
| :---: | :---: | :--- | :---: |
| `1.0` | 02/11/2026 | Elaboração inicial do Planejamento do Relato dos Resultados do Protótipo de Alta Fidelidade (Nível 3) segundo Barbosa e Silva (2021, p. 309), padronizado com o artefato de Nível 2. | Daniel da Silva Batista |

<p align="center" style="font-size: 0.85em; margin-top: -0.6em;"><b>Fonte:</b> Daniel da Silva Batista (2026).</p>

</div>
