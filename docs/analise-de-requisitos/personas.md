<div align="center" markdown="1">

<p align="center"><b>Tabela de Contribuição</b></p>

| Membro | Contribuição |
| :--- | :--- |
| Daniel da Silva Batista | Fundamentação teórica (Cooper, 1999; Barbosa e Silva, 2010), definição do elenco de personas, modelagem detalhada da Persona Primária 1 (Mateus Oliveira) e estruturação dos templates para a equipe. |
| Arthur Sismene Carvalho | Revisão do elenco de personas e estruturação da Persona 3. |
| Leonardo da Silva Lopes Júnior | Revisão conceitual sobre antipersonas e estruturação da Persona 4. |
| Pedro Rocha Ferreira Lima | Definição dos critérios de priorização das personas e estruturação da Persona 2. |

<p align="center">Fonte: Daniel da Silva Batista (2026).</p>

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
   * **Antipersona:** Representação explícita de quem **não** é o público-alvo do produto, delimitando o que o sistema não deve priorizar.

## 3. Elenco de Personas

A tabela abaixo resume o elenco de personas definido pelo grupo, relacionando cada personagem ao seu perfil correspondente e ao integrante responsável por sua validação em campo:

<div align="center" markdown="1">

<p align="center"><b>Tabela 1: Elenco de Personas do PCI Concursos</b></p>

| Tipo | Nome | Perfil Vinculado | Papel / Ocupação | Membro Responsável |
| :---: | :--- | :---: | :--- | :--- |
| **Primária** | **Mateus Oliveira** | Perfil 1 | Estudante de Engenharia na UnB, busca editais de tribunais e provas anteriores | Daniel da Silva Batista |
| **Primária** | **Renata Silveira** | Perfil 2 | Analista financeira em empresa privada, estuda à noite para carreiras fiscais | Pedro Rocha Ferreira Lima |
| **Secundária** | **Lucas Mendes** | Perfil 1 | Aluno de curso técnico, busca editais de estágios e vagas de nível médio | Arthur Sismene Carvalho |
| **Secundária** | **Carlos Eduardo** | Perfil 2 | Servidor público municipal em transição de carreira, usa videoaulas e alertas | Leonardo da Silva Lopes Júnior |
| **Primária** | **Seu Antônio Pereira** | Perfil 3 | Aposentado de 56 anos com baixo letramento, busca concursos de nível fundamental/apoio | João Vitor |
| **Antipersona** | **Dr. Gustavo Meirelles** | - | Diretor de Recursos Humanos de órgão público que contrata bancas examinadoras | Grupo 07 |

<p align="center">Fonte: Daniel da Silva Batista (2026).</p>

</div>

---

## 4. Detalhamento das Personas

### 4.1 Persona 1: Mateus Oliveira (Primária) — *Responsável: Daniel da Silva Batista*

<div align="center" markdown="1">

| Atributo | Detalhes |
| :--- | :--- |
| **Nome Completo** | Mateus Oliveira Santos |
| **Idade / Estado Civil** | 22 anos, Solteiro |
| **Escolaridade / Ocupação** | Cursando o 7º semestre de Engenharia de Software na UnB; estagiário de desenvolvimento |
| **Localização** | Gama, Distrito Federal |
| **Perfil Vinculado** | Perfil 1: Estudante Universitário / Iniciante em Concursos |
| **Dispositivos de Acesso** | Notebook pessoal (estudos noturnos) e Smartphone Android (deslocamentos no transporte público) |

</div>

* **Biografia e Contexto:**  
  Mateus concilia uma rotina puxada de aulas na UnB e estágio de 6 horas diárias. Com a proximidade da formatura, decidiu estudar para concursos públicos da área de TI e tribunais (como TJDFT e TSE Unificado) para garantir estabilidade e independência financeira. Como seu tempo livre é escasso, precisa de agilidade para encontrar editais consolidados e baixar cadernos de provas anteriores de bancas como Cebraspe e FGV.
* **Objetivos:**
  * Localizar com rapidez novos editais da área de Tecnologia e Tribunais no Distrito Federal e esfera federal.
  * Fazer o download seguro dos cadernos de provas anteriores e gabaritos oficiais em PDF para resolver aos finais de semana.
* **Habilidades e Experiência:**  
  Alta proficiência técnica em ambientes digitais, manipulação de arquivos compactados e PDFs, uso de atalhos de teclado e navegação em múltiplas abas.
* **Tarefas Primárias:**  
  Pesquisar editais recentes por palavra-chave ou órgão e fazer download de provas anteriores e gabaritos em PDF.
* **Relacionamentos:**  
  Compartilha dicas de editais e provas em grupos de WhatsApp com colegas da faculdade da UnB e fóruns de concurseiros de TI.
* **Requisitos do Sistema:**  
  Mecanismo de busca textual veloz com tolerância a siglas (ex.: TJDFT); links diretos e destacados para arquivos PDF legítimos; layout responsivo e livre de falsos botões de download.
* **Expectativas:**  
  Acessar o portal, digitar o órgão pretendido e salvar a última prova e o gabarito no disco rígido em menos de dois minutos.
* **Dores e Frustrações com o PCI Concursos:**
  * Fica muito irritado com a quantidade excessiva de anúncios patrocinados que simulam botões de download verdes ("Baixar Aqui"), induzindo cliques em páginas suspeitas.
  * Dificuldade de navegar no site pelo celular devido à ausência de responsividade limpa, obrigando-o a dar zoom na tela constantemente.
  * Falta de um mecanismo de busca direto por cargo ("Analista de TI") que traga resultados precisos sem listas poluídas.
* **Citação:**  
  > *"Eu só quero abrir o site, digitar o órgão que estou estudando e baixar a última prova em PDF em menos de 2 minutos, sem correr o risco de clicar num vírus achando que era o gabarito."*

---

### 4.2 Persona 2: Renata Silveira (Primária) — *Responsável: Pedro Rocha Ferreira Lima*

<div align="center" markdown="1">

| Atributo | Detalhes |
| :--- | :--- |
| **Nome Completo** | Renata Silveira Alencar |
| **Idade / Estado Civil** | 31 anos, Casada |
| **Escolaridade / Ocupação** | Pós-graduada em Controladoria; Analista Financeira CLT |
| **Localização** | Brasília, Distrito Federal |
| **Perfil Vinculado** | Perfil 2: Concurseira Ativa / Adulta Focada |
| **Dispositivos de Acesso** | Computador Desktop no escritório e Tablet nos momentos de estudo |

</div>

* **Biografia e Contexto:**  
  Trabalha há 7 anos no setor privado, mas sofre com a instabilidade do mercado e a sobrecarga de trabalho. Há 1 ano e meio estuda diariamente para a área fiscal e de controle (Sefaz e Tribunais de Contas). Já possui modelo mental refinado sobre bancas, disciplinas e leis.
* **Objetivos:**
  * Filtrar editais abertos estritamente na região Centro-Oeste / DF sem precisar rolar páginas e páginas com concursos de outros estados.
  * Identificar com precisão retificações de edital (mudança de cronograma, datas de prova e conteúdos programáticos).
* **Dores e Frustrações com o PCI Concursos:**
  * As listagens regionais misturam concursos de prefeituras distantes do interior com os grandes concursos do DF.
  * Falta de destaque visual claro para retificações críticas em editais em andamento.
* **Citação:**  
  > *"Perder o prazo de um concurso ou não saber que a data da prova mudou é o pesadelo de todo concurseiro sério. O site deveria organizar as retificações com muito mais clareza."*

---

### 4.3 Persona 3: Lucas Mendes (Secundária) — *Responsável: Arthur Sismene Carvalho*

<div align="center" markdown="1">

| Atributo | Detalhes |
| :--- | :--- |
| **Nome Completo** | Lucas Mendes de Faria |
| **Idade / Estado Civil** | 19 anos, Solteiro |
| **Escolaridade / Ocupação** | Cursando Técnico em Administração; Primeiro emprego |
| **Localização** | Ceilândia, Distrito Federal |
| **Perfil Vinculado** | Perfil 1: Estudante Universitário / Iniciante em Concursos |
| **Dispositivos de Acesso** | Smartphone Android intermediário |

</div>

* **Biografia e Contexto:**  
  Lucas busca sua primeira oportunidade no mercado de trabalho e quer conseguir uma vaga de estágio remunerado em órgãos públicos no DF ou ser aprovado em concursos de nível médio (como Correios ou Caixa). Não tem experiência com bancas e tem dificuldade em entender o jargão jurídico de editais.
* **Objetivos:**
  * Encontrar seleções públicas de estágio e vagas de nível médio sem exigência de experiência prévia.
  * Praticar com questões online e simulados diretamente no navegador do celular.
* **Dores e Frustrações:**
  * A área de simulados do portal possui tipografia muito pequena no smartphone.
  * Linguagem excessivamente burocrática e poluição visual tornam a navegação desestimulante.
* **Citação:**  
  > *"Como estou começando agora, tudo parece confuso. Se o site facilitasse a busca por vagas de estágio e tivesse simulados fáceis de fazer no celular, me ajudaria demais."*

---

### 4.4 Persona 4: Carlos Eduardo (Secundária) — *Responsável: Leonardo da Silva Lopes Júnior*

<div align="center" markdown="1">

| Atributo | Detalhes |
| :--- | :--- |
| **Nome Completo** | Carlos Eduardo Moreira |
| **Idade / Estado Civil** | 38 anos, Casado, 1 filho |
| **Escolaridade / Ocupação** | Superior completo; Técnico Judiciário |
| **Localização** | Taguatinga, Distrito Federal |
| **Perfil Vinculado** | Perfil 2: Concurseiro Ativo / Adulto Focado |
| **Dispositivos de Acesso** | Desktop em casa e Smartphone no trânsito |

</div>

* **Biografia e Contexto:**  
  Servidor concursado há 8 anos, Carlos quer prestar concursos para Analista Judiciário visando progressão funcional e melhor remuneração para sua família. Estuda em horários fragmentados (almoço, pausas e à noite).
* **Objetivos:**
  * Assistir videoaulas curtas e ler dicas essenciais de matérias básicas de Direito Administrativo e Constitucional.
  * Cadastrar alertas de novos editais por e-mail para não precisar vigiar o site todos os dias.
* **Dores e Frustrações:**
  * O cadastro de avisos e alertas por e-mail é confuso e escondido na interface.
  * A seção de videoaulas possui links quebrados e vídeos de terceiros mal organizados.
* **Citação:**  
  > *"Com filho e trabalho, meu tempo vale ouro. Preciso receber notificações automáticas dos editais que me interessam para não perder tempo com pesquisas manuais."*

---

### 4.5 Persona 5: Seu Antônio Pereira (Primária / Acessibilidade) — *Responsável: João Vitor*

<div align="center" markdown="1">

| Atributo | Detalhes |
| :--- | :--- |
| **Nome Completo** | Antônio Pereira da Costa |
| **Idade / Estado Civil** | 56 anos, Casado |
| **Escolaridade / Ocupação** | Ensino Médio completo; Motorista autônomo |
| **Localização** | Planaltina, Distrito Federal |
| **Perfil Vinculado** | Perfil 3: Baixo Letramento / Idoso / Vagas Especiais |
| **Dispositivos de Acesso** | Smartphone simples e computador compartilhado dos filhos |

</div>

* **Biografia e Contexto:**  
  Seu Antônio tem mais de 30 anos de trabalho e sofre com as incertezas da renda informal. Possui visão cansada (presbiopia) e dificuldades ergonômicas ao manusear interfaces complexas. Almeja uma vaga de concurso público de apoio operacional ou motorista em órgãos locais para ter previdência digna, além de pesquisar vagas reservadas para pessoas mais velhas ou com necessidades especiais.
* **Objetivos:**
  * Consultar concursos com vagas para seu nível de escolaridade e verificar se há benefícios para cotas ou isenção de taxa de inscrição.
  * Acompanhar chamadas e convocações oficiais para saber quando os aprovados são chamados.
* **Dores e Frustrações:**
  * Fontes com corpo minúsculo e baixo contraste que causam forte fadiga visual.
  * Banners de propaganda enganosos que o fazem pensar que o concurso custa dinheiro ou que está clicando na inscrição verdadeira.
* **Citação:**  
  > *"Eu tenho dificuldade para enxergar essas letrinhas miúdas na tela. Muitas vezes clico onde acho que é a notícia e abre uma propaganda me vendendo curso que eu não quero."*

---

### 4.6 Antipersona: Dr. Gustavo Meirelles

<div align="center" markdown="1">

| Atributo | Detalhes |
| :--- | :--- |
| **Nome Completo** | Gustavo Meirelles |
| **Idade** | 52 anos |
| **Papel** | Diretor de Recursos Humanos de Ministério Federal |
| **Por que é Antipersona?** | Não é candidato a vagas, não estuda para provas e não utiliza o portal para consumir editais. Seu foco é a contratação institucional de bancas avaliadoras e planejamento governamental de vagas. O portal não deve ter suas interfaces, fluxos de busca ou recursos desenhados para atender às demandas de gestores corporativos ou contratantes públicos. |

</div>

---

## 5. Bibliografia

> BARBOSA, S. D. J.; SILVA, B. S. *Interação Humano-Computador*. Rio de Janeiro: Elsevier, 2010.  
> COOPER, Alan. *The Inmates Are Running the Asylum: Why High Tech Products Drive Us Crazy and How to Restore the Sanity*. Indianapolis: Sams Publishing, 1999.  
> COURAGE, Catherine; BAXTER, Kathy. *Understanding Your Users: A Practical Guide to User Requirements Methods, Tools, and Techniques*. San Francisco: Morgan Kaufmann, 2005.

## 6. Histórico de Versões

<div align="center" markdown="1">

| Versão | Data | Descrição | Autor(es) | Revisor(es) |
| :---: | :---: | :--- | :---: | :---: |
| `1.0` | 21/09/2026 | Fundamentação teórica de personas (Cooper; Barbosa & Silva), definição do elenco com 5 personas e 1 antipersona, detalhamento das personas primárias, secundárias e templates por membro. | Daniel da Silva Batista | Pedro Rocha Ferreira Lima |

</div>
