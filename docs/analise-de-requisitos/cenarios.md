<div align="center" markdown="1">

<p align="center"><b>Tabela de Contribuição</b></p>

| Membro | Contribuição |
| :--- | :--- |
| Daniel da Silva Batista | Fundamentação teórica de cenários (Carroll, 2000; Barbosa e Silva, 2010), estruturação dos elementos formais, redação detalhada dos Cenários 01 e 02 e organização dos templates para a equipe. |
| Arthur Sismene Carvalho | Revisão conceitual dos elementos de cenário e estruturação dos Cenários 05 e 06. |
| João Vitor Sales Ibiapina | Revisão da matriz de cenários e estruturação dos Cenários 09 e 10. |
| Leonardo da Silva Lopes Júnior | Revisão da coerência entre personas e contextos dos Cenários 07 e 08. |
| Pedro Rocha Ferreira Lima | Definição dos objetivos de busca regional e estruturação dos Cenários 03 e 04. |
| Gemini | Auxílio na estruturação textual e formatação do artefato em Markdown (conforme Política de Uso de IA). |

<p align="center"><b>Fonte:</b> Daniel da Silva Batista (2026).</p>

</div>

# Cenários

## 1. Introdução

Na Engenharia de Requisitos e no Design de Interação, os **Cenários** constituem narrativas contextuais concretas que descrevem o comportamento de um usuário durante a realização de uma ou mais atividades com o apoio de um sistema interativo (Barbosa e Silva, 2010). Fundamentada nos trabalhos seminais de John Carroll (2000), a técnica de design baseado em cenários permite que a equipe compreenda as motivações, as estratégias de planejamento, as ações físicas e a interpretação de resultados dos usuários em situações reais de uso.

Enquanto a [Persona](personas.md) define *quem* utiliza o sistema, o Cenário estabelece o *quando*, o *onde*, o *porquê* e o *como* essa interação ocorre, tornando explícitos os obstáculos ergonômicos e as barreiras de usabilidade que surgem ao longo do caminho.

## 2. Elementos Constitutivos de um Cenário

Para manter a consistência metodológica exigida na literatura de IHC, cada cenário documentado neste projeto é estruturado a partir dos sete elementos formais preconizados por Barbosa e Silva (2010, p. 182-183):

1. **Ambiente ou Contexto:** Detalhes da situação física, temporal, psicológica e social em que a interação ocorre, incluindo restrições de tempo, ruídos externos e dispositivos empregados.
2. **Atores:** As pessoas envolvidas na narrativa, diretamente vinculadas às [Personas](personas.md) previamente modeladas.
3. **Objetivos:** O que o ator deseja alcançar ao final do processo (o estado final pretendido).
4. **Planejamento:** As estratégias cognitivas traçadas mentalmente pelo ator para atingir o objetivo com base em seu modelo mental prévio.
5. **Ações:** O encadeamento de ações físicas e operacionais executadas pelo ator na interface do sistema.
6. **Eventos:** As respostas apresentadas pelo sistema, bem como intercorrências externas (como anúncios publicitários concorrentes ou falhas de conexão).
7. **Avaliação:** A interpretação do ator sobre o estado atingido, julgando se seu objetivo foi alcançado com sucesso, se cometeu erros ou se necessitou de caminhos alternativos.

---

## 3. Matriz de Cenários do PCI Concursos

A Tabela 1 a seguir apresenta a relação dos 10 cenários elaborados pelo grupo, mapeando a persona envolvida, a tarefa associada e o integrante responsável:

<div align="center" markdown="1">

<p align="center"><b>Tabela 1: Matriz de Cenários de Interação</b></p>

| ID | Título do Cenário | Persona Associada | Tarefa Relacionada | Responsável |
| :---: | :--- | :---: | :--- | :--- |
| **CEN-01** | Localização Ágil de Edital de Tribunal no DF | *A definir pelo responsável* | Busca de edital por palavra-chave / órgão | Daniel da Silva Batista |
| **CEN-02** | Download Seguro de Provas Anteriores e Gabaritos em PDF | *A definir pelo responsável* | Download de caderno de provas e gabarito | Daniel da Silva Batista |
| **CEN-03** | Filtragem de Concursos Abertos na Região Centro-Oeste | *A definir pelo responsável* | Filtragem de editais por região geográfica | Pedro Rocha Ferreira Lima |
| **CEN-04** | Acompanhamento de Retificações e Prazos de Edital | *A definir pelo responsável* | Consulta a retificações e cronogramas | Pedro Rocha Ferreira Lima |
| **CEN-05** | Resolução de Questões em Simulado Online no Smartphone | *A definir pelo responsável* | Simulado de questões online | Arthur Sismene Carvalho |
| **CEN-06** | Prospecção de Vagas de Estágio de Nível Superior no DF | *A definir pelo responsável* | Busca de oportunidades de estágio | Arthur Sismene Carvalho |
| **CEN-07** | Acesso Rápido a Videoaulas de Direito Administrativo | *A definir pelo responsável* | Consulta a videoaulas e dicas didáticas | Leonardo da Silva Lopes Júnior |
| **CEN-08** | Configuração de Alertas Automáticos de Vagas por E-mail | *A definir pelo responsável* | Cadastro de avisos de concursos por e-mail | Leonardo da Silva Lopes Júnior |
| **CEN-09** | Consulta a Vagas Reservadas e Isenção de Taxa para PcD | *A definir pelo responsável* | Verificação de vagas para cotas / PcD | João Vitor Sales Ibiapina |
| **CEN-10** | Acompanhamento de Convocação de Concurso Homologado | *A definir pelo responsável* | Consulta a notícias de chamadas públicas | João Vitor Sales Ibiapina |

<p align="center"><b>Fonte:</b> Daniel da Silva Batista (2026).</p>

</div>

---

## 4. Detalhamento dos Cenários

### 4.1 Cenário 01: Localização Ágil de Edital de Tribunal no DF (CEN-01)
* **Responsável:** Daniel da Silva Batista  
* **Persona Associada:** *A definir após a entrevista empírica com o usuário*

O detalhamento narrativo do Cenário 01, estruturado segundo os sete elementos formais de Carroll (2000) e Barbosa e Silva (2010), é apresentado na Tabela 2:

<div align="center" markdown="1">

<p align="center"><b>Tabela 2: Detalhamento Narrativo do Cenário 01</b></p>

| Elemento | Descrição Narrativa |
| :--- | :--- |
| **Ambiente / Contexto** | Terça-feira à noite, por volta das 22h. O usuário acabou de chegar da faculdade no Gama-DF, está cansado, mas ligou seu notebook pessoal no quarto para pesquisar se o edital do concurso do Tribunal de Justiça do DF (TJDFT) teve inscrições reabertas. Dispõe de apenas 15 minutos antes de dormir. |
| **Atores** | Estudante de graduação / participante da pesquisa (persona a ser formalizada após a entrevista). |
| **Objetivos** | Encontrar a página específica do concurso do TJDFT no PCI Concursos e verificar a situação das inscrições e prazos. |
| **Planejamento** | O usuário decide acessar o portal PCI Concursos (`pciconcursos.com.br`), utilizar o campo de pesquisa textual no cabeçalho ou menu e digitar "TJDFT" para ser conduzido diretamente ao concurso pretendido. |
| **Ações** | 1. O participante digita a URL do portal no navegador Google Chrome e pressiona Enter.<br>2. Ao carregar a página inicial repleta de tabelas e banners publicitários, localiza a barra de pesquisa no topo.<br>3. Digita o termo "TJDFT" e clica no ícone de busca.<br>4. Rola os resultados retornados procurando a notícia mais recente com o status do concurso.<br>5. Clica no link com o título correspondente ao tribunal. |
| **Eventos** | A página inicial demora alguns segundos para renderizar completamente devido ao carregamento de scripts de anúncios do Google Ads. Ao submeter a busca, o sistema abre uma página de resultados com múltiplos anúncios patrocinados intercalados, exigindo que o participante ignore blocos comerciais para identificar o link institucional real do concurso. |
| **Avaliação** | O participante consegue encontrar a página do concurso do TJDFT e confirma as datas, mas sente-se desgastado mentalmente com o excesso de poluição visual e a dificuldade em isolar os links editoriais legítimos. |

<p align="center"><b>Fonte:</b> Daniel da Silva Batista (2026).</p>

</div>

---

### 4.2 Cenário 02: Download Seguro de Provas Anteriores e Gabaritos em PDF (CEN-02)
* **Responsável:** Daniel da Silva Batista  
* **Persona Associada:** *A definir após a entrevista empírica com o usuário*

O detalhamento narrativo do Cenário 02 é apresentado na Tabela 3 a seguir:

<div align="center" markdown="1">

<p align="center"><b>Tabela 3: Detalhamento Narrativo do Cenário 02</b></p>

| Elemento | Descrição Narrativa |
| :--- | :--- |
| **Ambiente / Contexto** | Sábado pela manhã, no quarto de estudos. O participante planejou dedicar a manhã para resolver questões reais da banca Cebraspe para o cargo de Analista de Tecnologia da Informação. Seu objetivo é salvar os arquivos no computador para poder imprimi-los e resolvê-los sem conexão. |
| **Atores** | Estudante de graduação / participante da pesquisa (persona a ser formalizada após a entrevista). |
| **Objetivos** | Localizar a seção de provas anteriores no PCI Concursos, selecionar o cargo de Analista de TI do último concurso de tribunal realizado e fazer o download do caderno de questões e da folha de respostas oficiais (gabarito) em formato PDF. |
| **Planejamento** | O usuário planeja acessar o menu lateral "Provas", utilizar filtros de cargo ou banca organizadora, localizar a prova desejada e clicar nos links diretos de download. |
| **Ações** | 1. Acessa a aba "Provas" no menu do PCI Concursos.<br>2. Seleciona o filtro ou pesquisa pelo nome da instituição examinadora e cargo "Tecnologia da Informação".<br>3. Identifica a linha correspondente à prova do concurso pretendido.<br>4. Clica no link rotulado como "Prova" para abrir o PDF em nova guia e salva o arquivo no disco rígido.<br>5. Retorna à listagem e clica no link rotulado como "Gabarito" para baixar o arquivo comparativo. |
| **Eventos** | Na página de download, banners de anunciantes exibem botões verdes chamativos com a palavra "DOWNLOAD" em destaque. O participante quase clica em um anúncio de adware antes de perceber que o link legítimo do PDF é, na verdade, um texto sublinhado simples com tipografia menor situado logo abaixo. |
| **Avaliação** | O participante atinge o objetivo de baixar os PDFs, mas avalia criticamente a experiência, ressaltando o risco permanente que usuários menos experientes correm de baixar softwares maliciosos ao confundir botões falsos com o download da prova. |

<p align="center"><b>Fonte:</b> Daniel da Silva Batista (2026).</p>

</div>

---

### 4.3 Cenários 03 a 10: Estrutura Padronizada para Validação em Campo

Os cenários a seguir foram concebidos a partir do perfil dos usuários entrevistados e seguem a mesma taxonomia formal de Carroll (2000), sendo validados e refinados individualmente por cada integrante durante suas respectivas sessões gravadas:

* **Cenário 03 (Responsável: Pedro Rocha Ferreira Lima — Persona a definir):** O(A) participante / persona definida pelo integrante acessa a categoria "Centro-Oeste" para filtrar concursos no Distrito Federal com remunerações superiores a R$ 10.000,00, enfrentando dificuldades com a ordenação cronológica das notícias.
* **Cenário 04 (Responsável: Pedro Rocha Ferreira Lima — Persona a definir):** O(A) participante / persona definida pelo integrante monitora um concurso já inscrito para verificar se a publicação da retificação nº 02 alterou o dia da prova objetiva.
* **Cenário 05 (Responsável: Arthur Sismene Carvalho — Persona a definir):** O(A) participante / persona definida pelo integrante utiliza o smartphone no trajeto de transporte para resolver 10 questões no simulado online de Língua Portuguesa do portal.
* **Cenário 06 (Responsável: Arthur Sismene Carvalho — Persona a definir):** O(A) participante / persona definida pelo integrante procura oportunidades de estágio remunerado em órgãos de Brasília na seção de processos seletivos para estudantes de nível superior e técnico.
* **Cenário 07 (Responsável: Leonardo da Silva Lopes Júnior — Persona a definir):** O(A) participante / persona definida pelo integrante assiste a uma videoaula explicativa de Direito Constitucional em seu intervalo de descanso/almoço.
* **Cenário 08 (Responsável: Leonardo da Silva Lopes Júnior — Persona a definir):** O(A) participante / persona definida pelo integrante cadastra seu endereço de e-mail no formulário de notícias para receber boletins automáticos sobre concursos da carreira judiciária.
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

</div>
