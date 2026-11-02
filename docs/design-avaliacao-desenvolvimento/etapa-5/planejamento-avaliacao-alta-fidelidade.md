<div align="center" markdown="1">

<p align="center"><b>Tabela de Contribuição</b></p>

| Membro | Contribuição |
| :--- | :--- |
| Daniel da Silva Batista | Redação do planejamento, fundamentação teórica (DECIDE), definição do escopo e dos objetivos, elaboração das perguntas de pesquisa, metodologia e planejamento do teste-piloto. |
| Arthur Sismene Carvalho | Verificação das tarefas operacionais e alinhamento com os cenários de uso da plataforma. |
| Leonardo da Silva Lopes Júnior | Revisão das diretrizes éticas (TCLE) e do cronograma logístico das sessões de teste. |
| Pedro Rocha Ferreira Lima | Revisão técnica geral, definição do perfil dos participantes (Krug, 2010) e refinamento dos critérios de avaliação. |
| Gemini | Auxílio na estruturação textual, organização das tabelas e formatação em Markdown (conforme Política de Uso de IA). |

<p align="center" style="font-size: 0.85em; margin-top: -0.6em;"><b>Fonte:</b> Autores (2026).</p>

</div>

# Planejamento da Avaliação do Protótipo de Alta Fidelidade

## 1. Introdução

A prototipação de alta fidelidade (*high-fidelity prototyping*) representa a etapa do ciclo de vida de Interação Humano-Computador (Mayhew, 1999; Barbosa et al., 2021) na qual as propostas de interface adquirem características visuais, tipográficas, cromáticas e comportamentais muito próximas às do sistema interativo final. Diferentemente do protótipo em papel (baixa fidelidade), o protótipo de alta fidelidade permite avaliar o comportamento dinâmico dos elementos em meio digital, validando a navegação em telas interativas, o tempo de resposta percebido e a aderência estética e ergonômica ao [Guia de Estilo](../guia-de-estilo.md).

Este documento estabelece o **Planejamento da Avaliação do Protótipo de Alta Fidelidade** para o portal PCI Concursos no âmbito do **Nível 3** do ciclo de design e avaliação. A avaliação visa testar empiricamente as tarefas prioritárias do sistema a partir de um protótipo digital navegável, verificando a eficácia, a eficiência e a satisfação subjetiva dos usuários antes da etapa de implementação definitiva em código (Barbosa et al., 2021, p. 261-280).

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

Conforme Barbosa e Silva (2021, p. 263-264), a avaliação em nível de protótipo de alta fidelidade tem caráter **formativo**, orientando o refinamento detalhado do design de interação. Os objetivos específicos desta avaliação são:

1. **Avaliar a navegabilidade e a fluidez do fluxo digital:** verificar se os caminhos percorridos pelo usuário no protótipo interativo são intuitivos, rápidos e livres de gargalos;
2. **Validar a conformidade com o Guia de Estilo:** constatar se os componentes visuais, padrões cromáticos, contrastes, botões e campos de busca comunicam claramente sua função interativa e facilitam a leitura;
3. **Avaliar a conformidade com o modelo mental do candidato:** verificar se os filtros de busca multicritério, a apresentação dos editais e a matriz comparativa atendem às necessidades reais dos concurseiros;
4. **Identificar problemas de usabilidade residuais:** mapear hesitações, cliques equivocados, desvios de rota ou dúvidas de interpretação para subsidiar os ajustes finais da interface;
5. **Avaliar a satisfação subjetiva do usuário:** coletar percepções ergonômicas e impressões gerais do participante através de entrevista pós-teste.

---

## 4. E – Explorar Perguntas a Serem Respondidas

A Tabela 1 elenca as perguntas norteadoras elaboradas a partir dos objetivos da avaliação, fundamentadas nos princípios de usabilidade e ergonomia de interfaces (Nielsen, 1993; Barbosa et al., 2021):

<div align="center" markdown="1">

<p align="center"><b>Tabela 1: Perguntas de Pesquisa da Avaliação do Protótipo de Alta Fidelidade</b></p>

| Nº | Pergunta Norteadora | Meta de Usabilidade / Critério Associado | Referência |
| :---: | :--- | :--- | :--- |
| **P01** | O participante consegue localizar e acionar os filtros avançados de busca sem hesitação? | Facilidade de Aprendizado (*Learnability*) | Barbosa et al. (2021, p. 119) |
| **P02** | O participante conclui as tarefas propostas de forma autônoma e sem necessidade de intervenção do moderador? | Eficácia (*Effectiveness*) | ISO/IEC 9241-11; Barbosa et al. (2021) |
| **P03** | O tempo despendido para selecionar certames e visualizar a comparação lado a lado é adequado? | Eficiência (*Efficiency*) | Nielsen (1993); Barbosa et al. (2021) |
| **P04** | A matriz comparativa apresenta dados de prazos, vagas e remunerações de forma clara e legível? | Visibilidade do Estado do Sistema | Nielsen (1993); Guia de Estilo (2026) |
| **P05** | O usuário comete erros operacionais durante o fluxo digital? Consegue se recuperar com facilidade? | Prevenção e Tratamento de Erros | Nielsen (1993) |
| **P06** | A hierarquia tipográfica, contraste de cores e espaçamentos facilitam a leitura contínua? | Legibilidade e Acessibilidade Visual | Barbosa et al. (2021) |
| **P07** | O participante considera o sistema agradável, intuitivo e útil para a sua rotina de estudos? | Satisfação Subjetiva | Barbosa et al. (2021, p. 278); Nielsen (1993) |

<p align="center" style="font-size: 0.85em; margin-top: -0.6em;"><b>Fonte:</b> Autores (2026), adaptado de Barbosa e Silva (2021).</p>

</div>

---

## 5. C – Escolher os Métodos de Avaliação

O método selecionado é o **Teste de Usabilidade com Protótipo de Alta Fidelidade** (*Usability Testing*), complementado pela técnica de verbalização concorrente (*Think-Aloud Protocol*) e por **entrevista pós-teste** (Ericsson e Simon, 1993; Dumas e Redish, 1999; Barbosa e Silva, 2021, p. 273):

* **Ensaio Interativo em Ambiente Digital:** o participante interage diretamente com o protótipo digital navegável em computador, operando mouse, teclado e comandos de tela, experimentando as transições visuais reais e o fluxo de telas do portal;
* **Técnica do Pensar em Voz Alta (*Think-Aloud*):** o participante é orientado a verbalizar continuamente seus objetivos, expectativas e impressões durante a execução de cada ação na tela;
* **Entrevista Pós-Teste:** imediatamente após a conclusão das tarefas, o participante responde a perguntas abertas sobre sua percepção geral de facilidade de uso, clareza das telas e sugestões de melhoria (Barbosa e Silva, 2021, p. 278).

---

## 6. I – Identificar e Administrar Questões Práticas

### 6.1 Recrutamento e Perfil dos Participantes
O recrutamento dos participantes segue estritamente o [Perfil de Usuário](../../analise-de-requisitos/perfil-de-usuario.md) estabelecido na Etapa 2 do projeto, priorizando o **Perfil 1 – Candidato/Concurseiro** (estudantes ou concurseiros ativos, com rotina de consulta a certames e exames públicos).

* **Quantidade de Participantes:** Serão recrutados **3 participantes** por rodada de teste. Conforme preconizado por Steve Krug (2010), o teste com 3 usuários é suficiente para identificar a maioria dos problemas críticos de usabilidade em avaliações formativas, favorecendo a rápida identificação e correção de falhas sem onerar a equipe, em consonância com a faixa de 3 a 5 participantes recomendada por Nielsen (1993) e Barbosa e Silva (2021).

### 6.2 Papéis da Equipe de Avaliação
Cada sessão de teste de usabilidade em alta fidelidade será conduzida com uma divisão clara de papéis entre os avaliadores (Rubin e Chisnell, 2008; Barbosa e Silva, 2021):

1. **Moderador / Facilitador:** apresenta as instruções iniciais, colhe o consentimento do participante, lê os cenários de tarefas de forma padronizada, estimula o *think-aloud* de maneira neutra e aplica a entrevista pós-teste;
2. **Observador / Anotador:** registra em planilha os tempos de execução, os erros e hesitações, as falas mais significativas e opera o software de gravação de tela e áudio.

### 6.3 Recursos, Ferramentas e Materiais
* **Protótipo Interativo:** protótipo digital de alta fidelidade contendo as telas e componentes interativos das tarefas prioritárias;
* **Equipamento:** computador (desktop ou notebook) com mouse, teclado e tela de alta resolução para uso pelo participante;
* **Software de Registro:** ferramenta de comunicação remota ou gravação local de tela e áudio (como Google Meet ou OBS Studio) para registro integral da sessão;
* **Custos:** R$ 0,00 (uso de equipamentos próprios dos integrantes e ferramentas de acesso gratuito).

### 6.4 Tarefas a Serem Executadas no Teste
Os participantes serão convidados a executar tarefas baseadas nos cenários modelados nas etapas anteriores:

* **Tarefa 1 (`TAR-01`):** Parametrizar a busca avançada por estado, área de atuação e escolaridade, filtrar a listagem de editais e selecionar certames de interesse para comparação;
* **Tarefa 2 (`TAR-02`):** Acessar a matriz comparativa lado a lado e realizar a exportação/download do relatório consolidado em PDF;
* **Tarefa 3 (`TAR-03` / `TAR-04`):** Consultar informações detalhadas de vagas e remunerações e ativar alertas de acompanhamento do certame.

### 6.5 Roteiro Estruturado de Condução da Avaliação do Protótipo de Alta Fidelidade

Em conformidade com Barbosa e Silva (2021, p. 274-276), o teste é conduzido a partir de um roteiro padronizado composto por quatro blocos operacionais:

#### Bloco 1: Abertura, Boas-Vindas e Protocolo Ético (~2 min)
* **Fala do Moderador:** *"Olá, agradecemos imensamente pela sua participação. Nós somos estudantes de Engenharia de Software da Universidade de Brasília (UnB) e estamos conduzindo uma avaliação de usabilidade para o portal PCI Concursos. O objetivo desta sessão é avaliar um protótipo digital interativo de alta fidelidade para identificar possíveis falhas de navegação e oportunidades de melhoria antes da implementação final. Queremos reforçar que **estamos avaliando o sistema e não você**. Não existem respostas certas ou erradas. Enquanto você interage com a tela, pedimos que você expresse seus pensamentos em voz alta (o que está procurando, onde pretende clicar e o que espera que aconteça). Você autoriza a gravação em áudio e tela desta sessão exclusivamente para fins acadêmicos?"*

#### Bloco 2: Entrevista Pré-Teste (~2 min)
Breve questionário para validação do perfil do participante frente ao Perfil 1 (Candidato):
1. *"Qual a sua idade e ocupação atual?"*
2. *"Você costuma prestar concursos públicos ou acompanhar a publicação de editais com qual frequência?"*
3. *"Quais sites ou ferramentas você utiliza habitualmente para pesquisar editais e vagas?"*

#### Bloco 3: Roteiro de Execução das Tarefas com o Protótipo Digital (~8 a 10 min)
O moderador disponibiliza o protótipo digital e lê os cenários de tarefas de forma padronizada, sem fornecer pistas de navegação:

<div align="center" markdown="1">

<p align="center"><b>Tabela 2: Roteiro de Tarefas Executadas no Protótipo de Alta Fidelidade</b></p>

| Tarefa | Cenário Lido pelo Moderador | Ação Esperada do Usuário | Critério de Êxito |
| :---: | :--- | :--- | :--- |
| **Tarefa 1: Busca Avançada e Seleção** | *"Imagine que você busca concursos abertos na área de Tecnologia no Distrito Federal. Utilize a tela inicial para encontrar esses certames e marque dois editais para comparação."* | O participante acessa os filtros avançados, seleciona os critérios desejados, clica em buscar e marca as caixas de seleção de dois editais na listagem. | As caixas de seleção dos editais são marcadas e o botão de comparação torna-se disponível. |
| **Tarefa 2: Comparação Lado a Lado** | *"Com os dois editais selecionados, você deseja confrontar os prazos de inscrição, salários e vagas para decidir qual é mais vantajoso. Acesse a comparação e baixe o relatório em PDF."* | O participante clica no botão de comparação, analisa a matriz comparativa e aciona a opção de exportar o comparativo em PDF. | A tela de matriz comparativa é exibida e o fluxo de exportação em PDF é concluído com sucesso. |
| **Tarefa 3: Detalhes e Alertas** | *"Você deseja acompanhar as atualizações desse certame. Mostre como você faria para consultar as vagas e ativar notificações sobre novas retificações."* | O participante acessa a página detalhada do concurso e aciona o botão de alerta/notificações. | A tela detalhada é acessada e o modal/feedback de alerta ativado é confirmado. |

<p align="center" style="font-size: 0.85em; margin-top: -0.6em;"><b>Fonte:</b> Autores (2026).</p>

</div>

#### Bloco 4: Entrevista Pós-Teste e Avaliação Subjetiva (~3 min)
Perguntas abertas aplicadas imediatamente após a conclusão das tarefas para coletar percepções ergonômicas (Barbosa e Silva, 2021, p. 278):
1. *"O que você achou da organização visual das telas, das cores e da tipografia da interface?"*
2. *"A comparação lado a lado facilitou a identificação das diferenças entre os editais?"*
3. *"Houve algum momento em que você sentiu dúvida, ficou confuso sobre onde clicar ou esperava uma resposta diferente da interface?"*
4. *"Se você pudesse modificar, acrescentar ou remover alguma funcionalidade desse fluxo digital, o que seria?"*

---

### 6.6 Cronograma Previsto das Sessões de Avaliação

A Tabela 3 apresenta o planejamento logístico das sessões de teste de usabilidade em alta fidelidade:

<div align="center" markdown="1">

<p align="center"><b>Tabela 3: Cronograma Previsto da Avaliação do Protótipo de Alta Fidelidade</b></p>

| Sessão | Participante | Perfil do Usuário | Moderador | Observador | Data Prevista | Local / Formato |
| :---: | :---: | :---: | :--- | :--- | :---: | :--- |
| **Piloto** | Participante Piloto | Perfil 1 – Concurseiro | Daniel Batista | Pedro Rocha | 04/11/2026 | Remoto / Google Meet |
| **S01** | Participante 1 | Perfil 1 – Concurseiro | Daniel Batista | Arthur Carvalho | 06/11/2026 | Remoto / Google Meet |
| **S02** | Participante 2 | Perfil 1 – Concurseiro | Pedro Rocha | Leonardo Lopes | 07/11/2026 | Remoto / Google Meet |
| **S03** | Participante 3 | Perfil 1 – Concurseiro | Arthur Carvalho | Daniel Batista | 08/11/2026 | Remoto / Google Meet |

<p align="center" style="font-size: 0.85em; margin-top: -0.6em;"><b>Fonte:</b> Autores (2026).</p>

</div>

---

## 7. D – Decidir sobre Questões Éticas

A avaliação respeita integralmente as diretrizes éticas para pesquisas com seres humanos preconizadas pela Resolução CNS nº 466/2012 e pelo Capítulo 7 de Barbosa e Silva (2021, p. 140-153):

* **Termo de Consentimento Livre e Esclarecido (TCLE):** todo participante é informado previamente sobre os objetivos da pesquisa acadêmica, a gravação de áudio e tela e a confidencialidade dos dados, manifestando sua concordância formal antes do início da sessão;
* **Foco no Sistema e Não no Indivíduo:** é explicitado ao usuário que o objeto de avaliação é o protótipo digital e o design proposto, e jamais a sua capacidade ou inteligência pessoal;
* **Direito de Interrupção:** o participante tem total liberdade para pausar ou encerrar a participação a qualquer momento, sem qualquer constrangimento ou penalidade;
* **Preservação do Anonimato:** nenhum dado pessoal identificador (como CPF, telefone ou sobrenome completo) será publicado nos relatórios finais, sendo utilizado identificador codificado (ex.: Participante 1, 2, 3).

---

## 8. E – Avaliar, Interpretar e Apresentar os Dados

Os dados coletados durante o ensaio do protótipo de alta fidelidade serão analisados sob duas perspectivas (Barbosa e Silva, 2021, p. 278-279):

1. **Dados Qualitativos:**
   * Transcrição dos comentários expressados em voz alta (*think-aloud*);
   * Registro das expressões de dúvida, hesitação ou satisfação com o design relatadas na entrevista pós-teste;
   * Mapeamento detalhado dos problemas encontrados, categorizados por localidade da interface, severidade (Nielsen, 1993) e heurística violada (Barbosa e Silva, 2021, p. 309).
2. **Dados Quantitativos:**
   * Taxa de conclusão de tarefas (*concluiu com êxito*, *concluiu com ajuda* ou *não concluiu*);
   * Número de erros operacionais cometidos em cada tarefa;
   * Tempo decorrido para a conclusão de cada cenário.

---

## 9. Planejamento do Teste-Piloto do Protótipo de Alta Fidelidade

Antes da aplicação do teste com os participantes oficiais, a equipe executará uma sessão de **teste-piloto**, em conformidade com Barbosa e Silva (2021, p. 276):

* **Objetivo do Piloto:** verificar a navegabilidade e a consistência das transições entre as telas do protótipo digital, avaliar a clareza dos cenários de teste lidos pelo moderador e calibrar a qualidade de gravação de tela e captação de áudio;
* **Participante do Piloto:** um integrante da equipe ou estudante com perfil representativo de concurseiro, cujos dados não integrarão o cômputo final da avaliação;
* **Ajustes Pós-Piloto:** caso sejam identificadas falhas de fluxo, links quebrados ou instruções ambíguas, os ajustes serão efetuados imediatamente no protótipo antes das sessões definitivas.

---

## 10. Referências Bibliográficas

> [1] BARBOSA, Simone Diniz Junqueira et al. *Interação Humano-Computador e Experiência do Usuário*. Rio de Janeiro: Autopublicação, 2021. ISBN: 978-65-00-19677-1.  
> [2] BRASIL. Ministério da Saúde. *Resolução nº 466, de 12 de dezembro de 2012*. Conselho Nacional de Saúde. Brasília: Diário Oficial da União, 2013.  
> [3] DUMAS, Joseph S.; REDISH, Janice C. *A Practical Guide to Usability Testing*. Revised ed. Exeter: Intellect Books, 1999.  
> [4] ERICSSON, K. Anders; SIMON, Herbert A. *Protocol Analysis: Verbal Reports as Data*. Cambridge: MIT Press, 1993.  
> [5] KRUG, Steve. *Rocket Surgery Made Easy: The Do-It-Yourself Guide to Finding and Fixing Usability Problems*. Berkeley: New Riders, 2010.  
> [6] MAYHEW, Deborah J. *The Usability Engineering Lifecycle: A Practitioner's Handbook for User Interface Design*. San Francisco: Morgan Kaufmann, 1999.  
> [7] NIELSEN, Jakob. *Usability Engineering*. San Francisco: Morgan Kaufmann, 1993.  
> [8] PREECE, Jennifer; ROGERS, Yvonne; SHARP, Helen. *Design de Interação: além da interação homem-computador*. Porto Alegre: Bookman, 2005.  
> [9] RUBIN, Jeffrey; CHISNELL, Dana. *Handbook of Usability Testing: How to Plan, Design, and Conduct Effective Tests*. 2. ed. Indianapolis: Wiley, 2008.  

---

## 11. Histórico de Versões

<div align="center" markdown="1">

| Versão | Data | Descrição | Autor(es) |
| :---: | :---: | :--- | :---: |
| `1.0` | 02/11/2026 | Elaboração inicial do Planejamento da Avaliação do Protótipo de Alta Fidelidade (Nível 3) estruturado no framework DECIDE conforme Barbosa e Silva (2021), padronizado com o artefato de Nível 2. | Daniel da Silva Batista |

<p align="center" style="font-size: 0.85em; margin-top: -0.6em;"><b>Fonte:</b> Daniel da Silva Batista (2026).</p>

</div>
