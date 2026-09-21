# Site Escolhido

## 1. Introdução

Como parte das atividades iniciais da disciplina de Interação Humano-Computador, a equipe realizou a prospecção e a avaliação de diversos sistemas interativos (documentados no artefato de [Sites Avaliados](sites-avaliados.md)). 

Após a conclusão da Etapa 1 e o aprofundamento nos requisitos metodológicos da disciplina — em especial a exigência de condução de pesquisas, entrevistas e avaliações com usuários reais gravadas —, a equipe reuniu-se para reavaliar a viabilidade dos sistemas candidatos frente ao rigor técnico do livro de Barbosa e Silva (2010) e às diretrizes do corpo docente.

<div align="center" markdown="1">

<p align="center"><b>Tabela de Contribuição</b></p>

| Membro | Contribuição |
| :--- | :--- |
| Daniel da Silva Batista | Redação do documento, consolidação dos critérios de escolha e motivações da seleção do portal do TCDF. |
| Arthur Sismene Carvalho | Participação na definição dos critérios de escolha, seleção em consenso e revisão do documento. |
| Leonardo da Silva Lopes Júnior | Participação na definição dos critérios de escolha, seleção em consenso e revisão do documento. |
| Pedro Rocha Ferreira Lima | Participação na definição dos critérios de escolha, seleção em consenso e revisão do documento. |
| Gemini | Auxílio na formatação de listas em Markdown e revisão gramatical (conforme Política de IA). |

<p align="center"><b>Fonte:</b> Daniel da Silva Batista (2026).</p>

</div>

## 2. Critérios para Escolha

Para assegurar um escopo de pesquisa sustentável, robusto e com aplicabilidade prática ao longo de todo o semestre, foram estabelecidos os seguintes critérios de seleção:

* **Viabilidade de Acesso ao Público-Alvo:** Garantia de acesso direto e irrestrito a usuários reais representativos dos perfis mapeados, viabilizando a condução presencial e remota de entrevistas gravadas, testes de usabilidade e validações participativas sem barreiras institucionais de sigilo.
* **Falhas Reais de Usabilidade e Acessibilidade:** A interface deve apresentar oportunidades nítidas de melhoria, com violações comprovadas de heurísticas de usabilidade (Nielsen, 1994), critérios ergonômicos (Bastien & Scapin, 1993) e diretrizes de acessibilidade (e-MAG / WCAG), justificando a elaboração de propostas de intervenção e reprojeto.
* **Volume e Diversidade de Tarefas Interativas:** O sistema deve oferecer um conjunto expressivo de funcionalidades interativas que sustentem a modelagem formal de pelo menos 2 tarefas individuais para cada membro da equipe (mínimo de 10 tarefas no total).
* **Ineditismo Histórico:** Garantia de que a plataforma não foi objeto de estudo nos repositórios de semestres anteriores da organização da disciplina nem pelos demais grupos do semestre vigente.
* **Relevância Social e Alcance:** Plataforma de utilidade pública de amplo acesso pela sociedade civil, impactando múltiplos segmentos demográficos.

## 3. O Site Selecionado: PCI Concursos

Avaliando as alternativas sob a ótica dos critérios supracitados, a equipe deliberou unanimemente pela seleção do portal **PCI Concursos** ([pciconcursos.com.br](https://www.pciconcursos.com.br/)). As principais motivações para a escolha compreendem:

* **Garantia de Acesso e Diversidade do Público-Alvo:** O PCI Concursos é uma das ferramentas mais populares do país para a busca de empregos públicos, estágios e provas. Seu público engloba desde estudantes universitários em início de carreira até adultos no mercado de trabalho e candidatos da terceira idade. Isso garante total viabilidade para a realização das entrevistas estruturadas e testes empíricos com participantes reais de diferentes perfis demográficos e níveis de letramento digital.
* **Manancial de Oportunidades de Reprojeto de IHC:** Criado há mais de uma década, o portal preserva uma interface visual e estrutural legada, repleta de problemas críticos de usabilidade, sobrecarga cognitiva e barreiras severas de acessibilidade. Esse ecossistema oferece um laboratório perfeito para a aplicação prática dos métodos ensinados no livro-texto da disciplina.
* **Complexidade e Riqueza de Fluxos:** O portal não se restringe à mera consulta passiva; ele engloba busca avançada com filtros combinados, download de cadernos de prova e gabaritos, áreas de simulados interativos de questões, seções de videoaulas, feeds de notícias e serviços de alertas de novas vagas.
* **Ineditismo Comprovado:** Conforme levantamento realizado na organização `Interacao-Humano-Computador`, o PCI Concursos nunca foi selecionado como projeto principal em nenhum semestre letivo anterior, garantindo total originalidade ao trabalho.

## 4. Preâmbulo da Avaliação Heurística Preliminar

Uma inspeção técnica preliminar orientada pelas 10 Heurísticas de Usabilidade de Nielsen (1994) e pelos princípios de Acessibilidade da WCAG / e-MAG evidenciou problemas graves na interface atual do PCI Concursos:

* **Estética e Design Minimalista (Heurística 8):** A interface apresenta densidade informacional excessiva, fontes minúsculas, ausência de espaços em branco e profusão de anúncios publicitários que competem visualmente com o conteúdo editorial do portal, induzindo o usuário a cliques errôneos.
* **Prevenção de Erros (Heurística 5):** Banners de terceiros utilizam deliberadamente botões rotulados como "Download", mimetizando os botões legítimos de download de editais e cadernos de prova, levando usuários — sobretudo com menor letramento digital — a baixar softwares indesejados.
* **Barreiras de Acessibilidade (WCAG 1.3 e 1.4):**
  - O portal faz uso extensivo de tabelas HTML aninhadas para fins de diagramação visual (semântica incorreta), prejudicando a interpretação sequencial por tecnologias assistivas (leitores de tela como NVDA e TalkBack).
  - Índices de contraste insuficientes entre tipografia azul/cinza e fundos claros, dificultando a leitura por usuários com baixa visão ou idosos.
* **Consistência e Padrões (Heurística 4):** Falta de padronização na hierarquia de links e cabeçalhos entre as páginas regionais de concursos e a página inicial, quebrando o modelo mental do usuário ao navegar pelos editais.

## 5. Bibliografia

> BARBOSA, S. D. J.; SILVA, B. S. *Interação Humano-Computador*. Rio de Janeiro: Elsevier, 2010.  
> NIELSEN, Jakob. *10 Usability Heuristics for User Interface Design*. Nielsen Norman Group, 1994. Disponível em: <https://www.nngroup.com/articles/ten-usability-heuristics/>. Acesso em: 21 de setembro de 2026.  
> W3C. *Web Content Accessibility Guidelines (WCAG) 2.1*. World Wide Web Consortium, 2018. Disponível em: <https://www.w3.org/TR/WCAG21/>. Acesso em: 21 de setembro de 2026.

## 6. Histórico de Versões

<div align="center" markdown="1">

| Versão | Data | Descrição | Autor(es) | Revisor(es) |
| `1.0` | 04/09/2026 | Documentação das motivações, critérios e definição do site selecionado preliminar (TCDF). | Arthur Sismene Carvalho, Daniel da Silva Batista, Leonardo da Silva Lopes Júnior, Pedro Rocha Ferreira Lima | Arthur Sismene Carvalho, Daniel da Silva Batista, Leonardo da Silva Lopes Júnior, Pedro Rocha Ferreira Lima |
| `1.1` | 17/09/2026 | Adição da Tabela de Contribuição e padronização da IA Gemini. | Leonardo da Silva Lopes Júnior | Daniel da Silva Batista |
| `2.0` | 21/09/2026 | Redefinição estratégica do objeto de estudo para o **PCI Concursos** visando assegurar a viabilidade de usuários reais e acessibilidade. | Daniel da Silva Batista | Pedro Rocha Ferreira Lima |

</div>
