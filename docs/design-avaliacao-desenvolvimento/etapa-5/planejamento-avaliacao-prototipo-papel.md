<div align="center" markdown="1">

<p align="center"><b>Tabela de Contribuição</b></p>

| Membro | Contribuição |
| :--- | :--- |
| Daniel da Silva Batista | Redação do planejamento, fundamentação teórica (DECIDE), definição do escopo e dos objetivos, elaboração das perguntas de pesquisa, metodologia e planejamento do teste-piloto. |
| Arthur Sismene Carvalho | Verificação das tarefas operacionais e alinhamento com os cenários de uso da plataforma. |
| Leonardo da Silva Lopes Júnior | Revisão das diretrizes éticas (TCLE) e do cronograma logístico das sessões de teste. |
| Pedro Rocha Ferreira Lima | Revisão técnica geral, definição do perfil dos participantes e refinamento da técnica do computador humano. |
| Gemini | Auxílio na estruturação textual, organização das tabelas e formatação em Markdown (conforme Política de Uso de IA). |

<p align="center" style="font-size: 0.85em; margin-top: -0.6em;"><b>Fonte:</b> Daniel da Silva Batista (2026).</p>

</div>

# Planejamento da Avaliação do Protótipo de Papel

## 1. Introdução

A prototipação em papel é um método consagrado de design e avaliação formativa de baixa fidelidade (*low-fidelity prototyping*), cujo propósito é materializar os conceitos de interface e os fluxos de tarefas em suportes físicos simples antes da implementação de código ou protótipos de alta fidelidade (Snyder, 2003; Rettig, 1994; Barbosa et al., 2021). 

Este documento estabelece o **Planejamento da Avaliação do Protótipo de Papel** para o portal PCI Concursos no âmbito da **Etapa 5** do ciclo de vida de Interação Humano-Computador. A avaliação visa testar empiricamente as tarefas prioritárias do sistema modeladas nas etapas anteriores, identificando precocemente barreiras de usabilidade, ambiguidades de navegação e incompatibilidades com o modelo mental dos usuários (Barbosa et al., 2021, p. 261-280).

---

## 2. Metodologia: O Framework DECIDE

Para assegurar o rigor metodológico na condução e garantir a completude do planejamento, esta avaliação é estruturada de acordo com o **framework DECIDE** (Preece, Rogers e Sharp, 2005; Barbosa e Silva, 2021, p. 279-280), cujas etapas guiam o desenho experimental:

* **D – Determinar** os objetivos gerais da avaliação de IHC;
* **E – Explorar** as perguntas a serem respondidas pela avaliação;
* **C – Escolher** os métodos de avaliação adequados ao artefato;
* **I – Identificar** e administrar as questões práticas da avaliação;
* **D – Decidir** como lidar com as questões éticas envolvidas;
* **E – Avaliar**, interpretar e apresentar os dados coletados.

---

## 3. D – Determinar os Objetivos da Avaliação

Conforme Barbosa e Silva (2021, p. 263-264), a avaliação em nível de protótipo de papel tem caráter **formativo**, orientando o refinamento do design interativo. Os objetivos específicos desta avaliação são:

1. **Avaliar a navegabilidade e o fluxo de telas:** verificar se os caminhos percorridos pelo usuário para cumprir cada tarefa são lógicos, sequenciais e compreensíveis;
2. **Avaliar a clareza e as affordances dos elementos de interface:** verificar se botões, caixas de seleção, campos de busca e menus desenhados em papel comunicam claramente sua função interativa;
3. **Avaliar a conformidade com o modelo mental do candidato:** constatar se os termos, filtros e agrupamentos de certames refletem a linguagem habitual dos concurseiros;
4. **Identificar problemas de usabilidade precocemente:** detectar hesitações, desvios de rota, erros conceituais e lacunas de feedback antes de iniciar o protótipo digital de alta fidelidade.

---

## 4. E – Explorar Perguntas a Serem Respondidas

A Tabela 1 elenca as perguntas norteadoras elaboradas a partir dos objetivos da avaliação, fundamentadas nos princípios de usabilidade e ergonomia de interfaces (Nielsen, 1993; Barbosa et al., 2021):

<div align="center" markdown="1">

<p align="center"><b>Tabela 1: Perguntas de Pesquisa da Avaliação do Protótipo de Papel</b></p>

| Nº | Pergunta Norteadora | Meta de Usabilidade / Critério Associado | Referência |
| :---: | :--- | :--- | :--- |
| **P01** | O usuário compreende a finalidade inicial de cada tela apresentada em papel? | Clareza Conceitual e Correspondência com o Mundo Real | Nielsen (1993); Barbosa et al. (2021) |
| **P02** | O participante consegue localizar facilmente onde acionar as funções principais (ex.: filtros avançados, comparação)? | Facilidade de Aprendizado (*Learnability*) | Barbosa et al. (2021, p. 119) |
| **P03** | A sequência de passos seguida pelo usuário corresponde ao plano do modelo de tarefas (HTA/CTT)? | Eficiência e Sequenciamento Lógico | Paternò (1999); Barbosa et al. (2021) |
| **P04** | O usuário comete erros durante a execução da tarefa? Consegue se recuperar autonomamente? | Prevenção e Tratamento de Erros | Nielsen (1993) |
| **P05** | As respostas simuladas pelo protótipo de papel fornecem feedback claro sobre o estado do sistema? | Visibilidade do Estado do Sistema | Nielsen (1993) |
| **P06** | O participante expressa dúvidas ou hesitações em relação aos rótulos, filtros ou botões? | Consistência e Padrões de Interface | Barbosa et al. (2021) |
| **P07** | O tempo de execução da tarefa é considerado aceitável pelo participante para a rotina diária? | Eficiência e Satisfação Subjetiva | Barbosa et al. (2021, p. 264) |

<p align="center" style="font-size: 0.85em; margin-top: -0.6em;"><b>Fonte:</b> Autores (2026), adaptado de Barbosa e Silva (2021).</p>

</div>

---

## 5. C – Escolher os Métodos de Avaliação

O método selecionado é o **Teste de Usabilidade com Prototipação em Papel** (*Usability Testing with Paper Prototyping*), complementado pela técnica de verbalização concorrente (*Think-Aloud Protocol*) (Ericsson e Simon, 1993; Snyder, 2003; Barbosa e Silva, 2021, p. 273):

* **Ensaio com a técnica do "Computador Humano" (*Human Computer / Wizard of Oz*):** um dos avaliadores atua como simulador mecânico do sistema. Ele manipula as folhas, abas, menus suspensos e caixas de diálogo em resposta estrita aos toques do participante no papel, mantendo silêncio e sem fornecer dicas sobre como operar a interface (Snyder, 2003);
* **Técnica do Pensar em Voz Alta (*Think-Aloud*):** o participante é encorajado a verbalizar o que está buscando, o que espera encontrar ao tocar em determinado componente e o que está sentindo durante a interação;
* **Justificativa da Escolha:** o teste em papel permite prototipar e validar rapidamente fluxos de navegação sem custo de desenvolvimento de software, favorecendo a criatividade e estimulando o usuário a apontar defeitos sem receio de criticar um sistema finalizado (Barbosa e Silva, 2021, p. 248).

---

## 6. I – Identificar e Administrar Questões Práticas

### 6.1 Recrutamento e Perfil dos Participantes
O recrutamento dos participantes segue estritamente o [Perfil de Usuário](../../analise-de-requisitos/perfil-de-usuario.md) estabelecido na Etapa 2 do projeto, priorizando o **Perfil 1 – Candidato/Concurseiro** (estudantes ou concurseiros ativos, de 18 a 45 anos, com hábitos de consulta frequente a certames).

* **Quantidade de Participantes:** Serão recrutados de **3 a 5 participantes**. Conforme Nielsen (1993) e Virzi (1992), ensaios com 3 a 5 usuários representativos são suficientes para revelar de 75% a 85% dos principais problemas de usabilidade de uma interface, atingindo uma relação ótima de custo-benefício.

### 6.2 Papéis da Equipe de Avaliação
Cada sessão de teste de usabilidade em papel será conduzida com uma divisão clara de responsabilidades entre os avaliadores (Snyder, 2003; Barbosa e Silva, 2021):

1. **Moderador / Facilitador:** apresenta as instruções iniciais, colhe o consentimento livre e esclarecido, lê os cenários de tarefas para o usuário e estimula o pensar em voz alta de forma neutra, sem indicar o caminho correto;
2. **Simulador do Sistema ("Computador Humano"):** senta-se próximo ao protótipo e organiza as peças de papel. Responde aos toques do usuário trocando as folhas, sobrepondo janelas pop-up ou inserindo mensagens de confirmação;
3. **Observador / Anotador:** registra em planilha padronizada os tempos de execução, os erros cometidos, as hesitações, as verbalizações mais expressivas e a linguagem corporal do participante.

### 6.3 Recursos, Ferramentas e Materiais
* **Material Físico do Protótipo:** folhas de papel sulfite A4 (desenhadas à mão ou impressas em baixa fidelidade), folhas coloridas/post-its para simulação de caixas de diálogo e menus flutuantes, cartões para listas de resultados e canetas para anotações do usuário;
* **Equipamento Audiovisual:** câmera ou smartphone montado sobre suporte/tripé focalizando diretamente o protótipo de papel e as mãos do participante, além de captação clara de áudio para registro integral da sessão;
* **Cronômetro:** para medição do tempo gasto em cada tarefa;
* **Custos:** R$ 0,00 (uso de infraestrutura acadêmica própria e material de escritório básico).

### 6.4 Tarefas a Serem Executadas no Teste
Os participantes serão convidados a executar tarefas baseadas nos cenários modelados na Análise de Tarefas de Nível 1:

* **Tarefa 1 (`TAR-01`):** Parametrizar a busca avançada por estado, área de atuação e escolaridade, selecionar dois editais na listagem e acionar a visualização da matriz comparativa lado a lado;
* **Tarefa 2 (`TAR-02`):** Salvar ou exportar o relatório comparativo de editais gerado em formato PDF para planejamento de estudos;
* **Tarefa 3 (`TAR-03` / `TAR-04`):** Realizar a consulta detalhada de vagas e configurar notificações/alertas de abertura de inscrições.

### 6.5 Roteiro Estruturado de Condução da Avaliação do Protótipo de Papel

Em conformidade com Barbosa e Silva (2021, p. 274-276), o teste de usabilidade em papel é conduzido a partir de um roteiro padronizado composto por quatro blocos operacionais:

#### Bloco 1: Abertura, Boas-Vindas e Protocolo Ético (~2 min)
* **Fala do Moderador:** *"Olá, agradecemos imensamente pela sua participação. Nós somos estudantes de Engenharia de Software da Universidade de Brasília (UnB) e estamos conduzindo uma avaliação de usabilidade para o portal PCI Concursos. O objetivo desta sessão é avaliar um protótipo inicial desenhado em papel para identificar possíveis falhas de design e dificuldades de navegação antes de desenvolvermos as telas digitais. Queremos reforçar que **estamos avaliando o protótipo e não você**. Não existem respostas certas ou erradas. Enquanto você interage com o papel, pedimos que você expresse seus pensamentos em voz alta (o que está procurando, onde pretende clicar e o que espera que aconteça). Um membro da nossa equipe atuará como 'computador humano', trocando as folhas e menus em resposta às suas ações com o dedo. Você autoriza a gravação em áudio e vídeo desta sessão exclusivamente para fins acadêmicos?"*

#### Bloco 2: Entrevista Pré-Teste (~2 min)
Breve questionário para validação do perfil do participante frente ao Perfil 1 (Candidato):
1. *"Qual a sua idade e ocupação atual?"*
2. *"Você costuma prestar concursos públicos ou acompanhar a publicação de editais com qual frequência?"*
3. *"Quais sites ou ferramentas você utiliza habitualmente para pesquisar editais e vagas?"*

#### Bloco 3: Roteiro de Execução das Tarefas com o Protótipo de Papel (~8 a 10 min)
O moderador entrega o protótipo inicial em papel e lê os cenários de tarefas de forma padronizada, sem fornecer pistas de navegação:

<div align="center" markdown="1">

<p align="center"><b>Tabela 2: Roteiro de Tarefas Executadas no Protótipo de Papel</b></p>

| Tarefa | Cenário Lido pelo Moderador | Ação Esperada do Usuário | Resposta do "Computador Humano" |
| :---: | :--- | :--- | :--- |
| **Tarefa 1: Busca Avançada e Filtros** | *"Imagine que você é um candidato graduado em Tecnologia e busca concursos abertos em Brasília. Utilize a tela inicial em papel para encontrar concursos que atendam a esses critérios."* | O participante aponta para o campo/botão de 'Busca Avançada', indica os filtros desejados e toca em 'Buscar'. | O simulador sobrepõe a folha com as opções de filtros marcadas e, em seguida, posiciona a folha com a lista de editais filtrados. |
| **Tarefa 2: Comparação Lado a Lado** | *"Na listagem de editais encontrados, você deseja confrontar dois concursos para decidir qual tem melhor remuneração e datas de prova compatíveis. Mostre como você faria essa comparação."* | O participante toca nas caixas de seleção de dois editais específicos e pressiona o botão 'Comparar Editais Selecionados'. | O simulador exibe a folha da 'Matriz Comparativa', posicionando as duas colunas de certames lado a lado com datas, salários e vagas. |
| **Tarefa 3: Exportação do Relatório** | *"Você gostou da tabela comparativa e deseja salvar essas informações para montar seu cronograma de estudos. Como você salvaria esse comparativo?"* | O participante localiza o botão de exportação e aponta para a opção 'Exportar Comparativo em PDF'. | O simulador sobrepõe uma mensagem de confirmação de download do arquivo PDF concluído com sucesso. |

<p align="center" style="font-size: 0.85em; margin-top: -0.6em;"><b>Fonte:</b> Autores (2026).</p>

</div>

#### Bloco 4: Entrevista Pós-Teste e Avaliação Subjetiva (~3 min)
Perguntas abertas aplicadas imediatamente após a conclusão das tarefas para coletar percepções ergonômicas (Barbosa e Silva, 2021, p. 278):
1. *"O que você achou da organização visual das telas e da sequência para encontrar e comparar os editais?"*
2. *"Houve algum momento em que você sentiu dúvida, ficou confuso sobre onde clicar ou esperava uma resposta diferente da interface?"*
3. *"Os termos utilizados nos botões, filtros e cabeçalhos foram claros e familiares para você?"*
4. *"Se você pudesse modificar, acrescentar ou remover alguma funcionalidade desse fluxo em papel, o que seria?"*

---

### 6.6 Cronograma Previsto das Sessões de Avaliação

A Tabela 2 apresenta o planejamento logístico das sessões de teste de usabilidade em papel:

<div align="center" markdown="1">

<p align="center"><b>Tabela 3: Cronograma Previsto da Avaliação do Protótipo de Papel</b></p>

| Sessão | Participante | Perfil do Usuário | Moderador | Computador Humano | Observador | Data Prevista | Local / Formato |
| :---: | :---: | :---: | :--- | :--- | :--- | :---: | :--- |
| **Piloto** | Participante Piloto | Perfil 1 – Concurseiro | Daniel Batista | Pedro Rocha | Arthur Carvalho | 27/10/2026 | Presencial / Laboratório FGA |
| **S01** | Participante 1 | Perfil 1 – Concurseiro | Daniel Batista | Pedro Rocha | Arthur Carvalho | 28/10/2026 | Presencial / FGA |
| **S02** | Participante 2 | Perfil 1 – Concurseiro | Pedro Rocha | Daniel Batista | Leonardo Lopes | 28/10/2026 | Presencial / FGA |
| **S03** | Participante 3 | Perfil 1 – Concurseiro | Arthur Carvalho | Leonardo Lopes | Daniel Batista | 29/10/2026 | Presencial / FGA |
| **S04** | Participante 4 | Perfil 1 – Concurseiro | Leonardo Lopes | Arthur Carvalho | Pedro Rocha | 29/10/2026 | Presencial / FGA |

<p align="center" style="font-size: 0.85em; margin-top: -0.6em;"><b>Fonte:</b> Autores (2026).</p>

</div>

---

## 7. D – Decidir sobre Questões Éticas

A avaliação respeita integralmente as diretrizes éticas para pesquisas com seres humanos preconizadas pela Resolução CNS nº 466/2012 e pelo Capítulo 7 de Barbosa e Silva (2021, p. 140-153):

* **Termo de Consentimento Livre e Esclarecido (TCLE):** todo participante é informado previamente sobre os objetivos da pesquisa acadêmica, a gravação de áudio e vídeo e a confidencialidade dos dados, assinando ou concordando formalmente com o termo antes do início do ensaio;
* **Foco no Sistema e Não no Indivíduo:** é explicitado ao usuário que o objeto de avaliação é o protótipo de papel e o design proposto, e jamais a sua capacidade ou inteligência;
* **Direito de Interrupção:** o participante tem total liberdade para pausar ou encerrar a participação a qualquer momento, sem qualquer constrangimento ou penalidade;
* **Preservação do Anonimato:** nenhum dado pessoal identificador (como CPF, telefone ou sobrenome completo) será publicado nos relatórios finais, sendo utilizado identificador codificado (ex.: Participante 1, 2).

---

## 8. E – Avaliar, Interpretar e Apresentar os Dados

Os dados coletados durante o ensaio do protótipo de papel serão analisados sob duas perspectivas (Barbosa e Silva, 2021, p. 278-279):

1. **Dados Qualitativos:**
   * Transcrição dos comentários expressados em voz alta (*think-aloud*);
   * Registro das expressões de dúvida, frustração ou satisfação;
   * Mapeamento detalhado dos problemas encontrados, categorizados por localidade da interface, severidade e heurística violada (Barbosa e Silva, 2021, p. 309).
2. **Dados Quantitativos:**
   * Taxa de conclusão de tarefas (*concluiu com êxito*, *concluiu com ajuda* ou *não concluiu*);
   * Número de erros operacionais cometidos em cada tarefa;
   * Tempo decorrido para a conclusão de cada cenário.

---

## 9. Planejamento do Teste-Piloto do Protótipo de Papel

Antes da aplicação do teste com os participantes oficiais, a equipe executará uma sessão de **teste-piloto**, em conformidade com Barbosa e Silva (2021, p. 276):

* **Objetivo do Piloto:** calibrar o sincronismo do "Computador Humano" na troca rápida das peças de papel, verificar a legibilidade dos textos e botões desenhados, testar o enquadramento e a captação de áudio da câmera e verificar a clareza dos cenários de teste lidos pelo moderador;
* **Participante do Piloto:** um estudante da FGA com perfil representativo de concurseiro, cujos dados não integrarão o cômputo final da avaliação;
* **Ajustes Pós-Piloto:** caso sejam identificadas falhas de peças faltantes, ambiguidades nas instruções ou problemas de iluminação/áudio, as correções serão efetuadas imediatamente antes da primeira sessão oficial.

---

## 10. Referências Bibliográficas

> [1] BARBOSA, Simone Diniz Junqueira et al. *Interação Humano-Computador e Experiência do Usuário*. Rio de Janeiro: Autopublicação, 2021. ISBN: 978-65-00-19677-1.  
> [2] BRASIL. Ministério da Saúde. *Resolução nº 466, de 12 de dezembro de 2012*. Conselho Nacional de Saúde. Brasília: Diário Oficial da União, 2013.  
> [3] ERICSSON, K. Anders; SIMON, Herbert A. *Protocol Analysis: Verbal Reports as Data*. Cambridge: MIT Press, 1993.  
> [4] NIELSEN, Jakob. *Usability Engineering*. San Francisco: Morgan Kaufmann, 1993.  
> [5] PATERNÒ, Fabio. *Model-Based Design and Evaluation of Interactive Applications*. London: Springer-Verlag, 1999.  
> [6] PREECE, Jennifer; ROGERS, Yvonne; SHARP, Helen. *Design de Interação: além da interação homem-computador*. Porto Alegre: Bookman, 2005.  
> [7] RETTIG, Marc. *Prototyping for Tiny Fingers*. Communications of the ACM, v. 37, n. 4, p. 21-27, 1994.  
> [8] SNYDER, Carolyn. *Paper Prototyping: The Fast and Easy Way to Design and Refine User Interfaces*. San Francisco: Morgan Kaufmann, 2003.  
> [9] VIRZI, Robert A. *Refining the Test Phase of Usability Evaluation: How Many Subjects Is Enough?* Human Factors, v. 34, n. 4, p. 457-468, 1992.  

---

## 11. Histórico de Versões

<div align="center" markdown="1">

| Versão | Data | Descrição | Autor(es) |
| :---: | :---: | :--- | :---: |
| `1.0` | 23/10/2026 | Elaboração inicial do Planejamento da Avaliação do Protótipo de Papel da Etapa 5 estruturado no framework DECIDE conforme Barbosa e Silva (2021). | Daniel da Silva Batista |

<p align="center" style="font-size: 0.85em; margin-top: -0.6em;"><b>Fonte:</b> Daniel da Silva Batista (2026).</p>

</div>
