<div align="center" markdown="1">

<p align="center"><b>Tabela de Contribuição</b></p>

| Membro | Contribuição |
| :--- | :--- |
| Leonardo da Silva Lopes Júnior | [Avaliação Heurística individual e aplicação do framework DECIDE no Portal CODHAB (Morar Bem)](#5-portal-codhab-morar-bem) |
| Daniel da Silva Batista | [Avaliação Heurística individual e aplicação do framework DECIDE no aplicativo Sinesp Cidadão, estruturação e consolidação do documento](#2-sinesp-cidadao-aplicativo) |
| Pedro Rocha Ferreira Lima | [Avaliação Heurística individual e aplicação do framework DECIDE no portal do Tribunal de Contas do DF (TCDF)](#3-tribunal-de-contas-do-distrito-federal-tcdf) |
| Arthur Sismene Carvalho | [Avaliação Heurística individual e aplicação do framework DECIDE no aplicativo CNH do Brasil](#4-cnh-do-brasil-aplicativo) |
| Gemini | Apoio na formatação Markdown, estruturação das tabelas e revisão de texto (conforme Política de IA). |

<p align="center" style="font-size: 0.85em; margin-top: -0.6em;"><b>Fonte:</b> Daniel da Silva Batista (2026).</p>

</div>

# Sites Avaliados

## 1. Introdução

Como etapa inicial para a escolha do objeto de estudo da disciplina de Interação Humano-Computador (IHC), foi requisitado que os integrantes da equipe realizassem inspeções individuais em diferentes sistemas interativos públicos ou de utilidade comunitária. O objetivo dessa etapa foi mapear plataformas com falhas de usabilidade e analisar a viabilidade de condução de um ciclo de vida completo de design e avaliação.

Para assegurar o rigor metodológico na condução dessas avaliações individuais, as atividades foram planejadas e estruturadas segundo o **framework DECIDE** (PREECE et al., 2002; BARBOSA e SILVA, 2010), combinando o método de inspeção por **Avaliação Heurística** (NIELSEN, 1994). A Tabela 1 resume os sistemas avaliados individualmente pelos membros da equipe.

<div align="center" markdown="1">

<p style="margin-bottom: 0;"><b>Tabela 1:</b> Relação de sites avaliados individualmente pela equipe.</p>

| Site Avaliado | Tipo de Plataforma | Avaliador Responsável | Relatório Completo |
| :---: | :---: | :---: | :---: |
| [Sinesp Cidadão](#2-sinesp-cidadao-aplicativo) | Aplicativo Móvel (Android/iOS) | Daniel da Silva Batista | [daniel_avaliacao.pdf](daniel_avaliacao.pdf) |
| [Tribunal de Contas do DF (TCDF)](#3-tribunal-de-contas-do-distrito-federal-tcdf) | Portal Web Governamental | Pedro Rocha Ferreira Lima | [pedro_avaliacao.pdf](pedro_avaliacao.pdf) |
| [CNH do Brasil](#4-cnh-do-brasil-aplicativo) | Aplicativo Móvel (Android/iOS) | Arthur Sismene Carvalho | [sismene_avaliacao.pdf](sismene_avaliacao.pdf) |
| [Portal CODHAB (Morar Bem)](#5-portal-codhab-morar-bem) | Portal Web Governamental | Leonardo da Silva Lopes Júnior | [leonardo_avaliacao.pdf](leonardo_avaliacao.pdf) |

<p style="margin-top: 0;"><b>Fonte:</b> Daniel da Silva Batista (2026).</p>

</div>

---

## 2. Sinesp Cidadão (Aplicativo)

* **Sistema:** [Sinesp Cidadão](https://www.gov.br/pt-br/apps/sinesp-cidadao) (Ministério da Justiça e Segurança Pública)
* **Avaliador Responsável:** Daniel da Silva Batista

### 2.1 Visão Geral e Escopo
O aplicativo móvel Sinesp Cidadão visa disponibilizar ao cidadão serviços de utilidade pública e segurança, como consulta a veículos furtados/clonados, mandados de prisão em aberto e canais de participação cidadã/denúncia. A inspeção delimitou o escopo a cinco telas e fluxos essenciais:
1. Tela de Login e integração com a conta Gov.br;
2. Tela Inicial e menu de navegação lateral;
3. Funcionalidade de Consulta de Veículos;
4. Funcionalidade de Consulta de Mandados de Prisão;
5. Formulário de envio de Participação Cidadã.

### 2.2 Planejamento e Condução com o Framework DECIDE
* **D — Determinar os objetivos:** Identificar barreiras de usabilidade, falhas críticas de interação e violações de diretrizes de acessibilidade na interface móvel do Sinesp Cidadão.
* **E — Explorar perguntas:**
  - A interface oferece rótulos acessíveis para tecnologias assistivas (leitores de tela)?
  - O sistema informa com clareza o estado atual dos serviços ou induz o usuário a erros de navegação?
  - A terminologia utilizada corresponde aos modelos mentais de cidadãos leigos?
  - As ações principais são prontamente reconhecíveis sem exigir esforço excessivo de memorização?
* **C — Considerar os métodos:** Avaliação Heurística (NIELSEN, 1994; BARBOSA e SILVA, 2010), método analítico de inspeção conduzido por formulários estruturados.
* **I — Identificar questões práticas:** Inspeção individual conduzida por 1 avaliador em dispositivo smartphone com sistema Android, com registro fotográfico e tabular dos problemas encontrados em um período de 5 dias úteis.
* **D — Decidir sobre questões éticas:** Por se tratar de um método de inspeção baseado exclusivamente na interação do próprio avaliador com a interface pública, não houve recrutamento de usuários nem coleta de dados pessoais sensíveis de terceiros.
* **E — Avaliar, interpretar e apresentar os dados:** Os dados coletados foram consolidados e os problemas classificados segundo a severidade de Nielsen (0 a 4), conforme sintetizado na Tabela 2.

### 2.3 Problemas Heurísticos Identificados

<div align="center" markdown="1">

<p style="margin-bottom: 0;"><b>Tabela 2:</b> Principais problemas de usabilidade identificados no Sinesp Cidadão.</p>

| Heurística Violada | Descrição do Problema | Severidade | Recomendação de Reprojeto |
| :--- | :--- | :---: | :--- |
| **Conformidade com Acessibilidade (e-MAG / WCAG)** | Botões e elementos gráficos não possuem atributos de acessibilidade (*contentDescription*), inviabilizando o uso por leitores de tela. | 4 (Catastrófico) | Inserir rótulos textuais descritivos em todos os componentes interativos do aplicativo. |
| **Visibilidade do Estado do Sistema (H1)** | A funcionalidade "Mandados" exibe indisponibilidade silenciosa orientando buscar o "BNMP", mas o botão segue clicável sem link funcional. | 4 (Catastrófico) | Sinalizar o status prévio do serviço ou fornecer atalho navegável direto para o sistema alternativo. |
| **Compatibilidade com o Mundo Real (H2)** | Uso de siglas técnicas obscuras ("BNMP") e termos abstratos ("Meus Vínculos") sem texto de apoio contextual. | 3 (Grave) | Substituir jargões por termos em linguagem natural ou adicionar tooltips explicativos. |
| **Reconhecimento em vez de Memorização (H6)** | O botão de login Gov.br na tela principal utiliza apenas um ícone genérico de perfil sem identificação textual. | 2 (Simples) | Acrescentar o rótulo textual legível "Entrar com Gov.br" ao lado da identidade visual oficial. |

<p style="margin-top: 0;"><b>Fonte:</b> Daniel da Silva Batista (2026).</p>

</div>

### 2.4 Documento Completo
> 📄 O relatório individual detalhado com todas as 8 heurísticas inspecionadas está disponível em: [Relatório de Avaliação Heurística: Sinesp Cidadão (Daniel Batista) - PDF](daniel_avaliacao.pdf).

---

## 3. Tribunal de Contas do Distrito Federal (TCDF)

* **Sistema:** [Portal do TCDF](https://www2.tc.df.gov.br/) (Tribunal de Contas do DF)
* **Avaliador Responsável:** Pedro Rocha Ferreira Lima

### 3.1 Visão Geral e Escopo
O portal institucional do TCDF funciona como instrumento central de controle externo, prestação de contas, transparência e acesso a serviços públicos para cidadãos, servidores e jurisdicionados. A avaliação focou nos seguintes componentes:
1. Página inicial (layout, cabeçalho e banners centrais);
2. Menu principal de navegação institucional;
3. Seção de Consultas Processuais e Portal da Transparência.

### 3.2 Planejamento e Condução com o Framework DECIDE
* **D — Determinar os objetivos:** Mapear problemas de usabilidade e arquitetura de informação que gerem sobrecarga cognitiva e dificultem a localização de processos e contas públicas pelo cidadão comum.
* **E — Explorar perguntas:**
  - A interface adota uma estética minimalista que previna a poluição visual?
  - Os formulários de pesquisa de processos previnem erros de digitação e formatação?
  - A linguagem empregada no portal é acessível para usuários leigos em direito administrativo?
  - A transição visual entre o portal principal e os subsistemas de transparência preserva a consistência?
* **C — Considerar os métodos:** Avaliação Heurística (NIELSEN, 1994) adaptada para ambientes web governamentais.
* **I — Identificar questões práticas:** Avaliação individual conduzida em computador desktop com navegadores modernos (Google Chrome e Mozilla Firefox), com duração de 4 dias.
* **D — Decidir sobre questões éticas:** Avaliação analítica restrita a dados abertos e páginas de domínio público institucional do TCDF, sem intervenção em dados restritos ou envolvimento de participantes externos.
* **E — Avaliar, interpretar e apresentar os dados:** Classificação dos problemas levantados com base na escala de gravidade de Nielsen (1994), apresentados na Tabela 3.

### 3.3 Problemas Heurísticos Identificados

<div align="center" markdown="1">

<p style="margin-bottom: 0;"><b>Tabela 3:</b> Principais problemas de usabilidade identificados no Portal do TCDF.</p>

| Heurística Violada | Descrição do Problema | Severidade | Recomendação de Reprojeto |
| :--- | :--- | :---: | :--- |
| **Estética e Design Minimalista (H8)** | Excesso de banners rotativos simultâneos e acúmulo de links laterais em fontes reduzidas, gerando sobrecarga cognitiva. | 3 (Grave) | Enxugar o conteúdo da página inicial, priorizando os serviços de busca mais demandados pela sociedade. |
| **Prevenção de Erros (H5)** | A busca de processos não possui máscara de formatação nem textos de orientação (placeholders), gerando falhas frequentes. | 3 (Grave) | Adicionar máscaras de formatação automática para numerações de processo e mensagens de validação prévia. |
| **Compatibilidade com o Mundo Real (H2)** | Uso intensivo de terminologias estritamente jurídicas e regimentais ("Espaço Jurisdicionado", "Tomada de Contas"). | 2 (Simples) | Incluir resumos em linguagem cidadã e glossário de termos acessível aos usuários não especialistas. |
| **Consistência e Padrões (H4)** | Quebra brusca de tipografia, cores e cabeçalho ao navegar para módulos externos como o Portal da Transparência. | 2 (Simples) | Padronizar a identidade visual e os componentes de navegação em todos os subsistemas integrados. |

<p style="margin-top: 0;"><b>Fonte:</b> Pedro Rocha Ferreira Lima (2026).</p>

</div>

### 3.4 Documento Completo
> 📄 O relatório individual detalhado com o planejamento metodológico completo está disponível em: [Relatório e Planejamento de Avaliação de IHC: TCDF (Pedro Rocha) - PDF](pedro_avaliacao.pdf).

---

## 4. CNH do Brasil (Aplicativo)

* **Sistema:** [CNH do Brasil / Carteira Digital de Trânsito](https://play.google.com/store/apps/details?id=br.gov.serpro.cnhdigital) (Serpro / Ministério dos Transportes)
* **Avaliador Responsável:** Arthur Sismene Carvalho

### 4.1 Visão Geral e Escopo
O aplicativo CNH do Brasil reúne a Carteira Nacional de Habilitação digital e o Certificado de Registro e Licenciamento de Veículo (CRLV-e). Devido à sua utilização primária em abordagens de trânsito e fiscalização, sua interface exige alta previsibilidade, rapidez e facilidade de leitura. O escopo compreendeu:
1. Autenticação e entrada via credenciais Gov.br;
2. Tela inicial e menu lateral de serviços;
3. Área do Condutor e visualização da CNH digital;
4. Tela de Preferências e configuração de biometria/chave de acesso.

### 4.2 Planejamento e Condução com o Framework DECIDE
* **D — Determinar os objetivos:** Investigar deficiências de usabilidade, eficiência e flexibilidade na interação do condutor em momentos de uso ágil e sob pressão.
* **E — Explorar perguntas:**
  - O aplicativo permite flexibilidade na visualização de documentos oficiais na orientação adequada?
  - A interface previne ações acidentais irreversíveis em configurações de segurança?
  - As mensagens do sistema refletem com fidelidade e agilidade a troca de estados do aplicativo?
  - As siglas e nomes de serviços são compreensíveis para motoristas de variados perfis educacionais?
* **C — Considerar os métodos:** Avaliação Heurística de usabilidade (NIELSEN, 1994).
* **I — Identificar questões práticas:** Avaliação individual conduzida por 1 inspetor em smartphone pessoal, testando fluxos dinâmicos de rotação de tela, biometria e alternância de temas (claro/escuro).
* **D — Decidir sobre questões éticas:** Preservação integral do sigilo e anonimato de dados cadastrais de habilitação e veículos utilizados na inspeção, sem compartilhamento de registros pessoais.
* **E — Avaliar, interpretar e apresentar os dados:** Registro das falhas heurísticas encontradas com atribuição de severidade e proposição de soluções de reprojeto (Tabela 4).

### 4.3 Problemas Heurísticos Identificados

<div align="center" markdown="1">

<p style="margin-bottom: 0;"><b>Tabela 4:</b> Principais problemas de usabilidade identificados no aplicativo CNH do Brasil.</p>

| Heurística Violada | Descrição do Problema | Severidade | Recomendação de Reprojeto |
| :--- | :--- | :---: | :--- |
| **Flexibilidade e Eficiência de Uso (H7)** | A CNH é diagramada na orientação paisagem, mas o app fica travado em modo retrato, exigindo o giro físico do aparelho. | 3 (Grave) | Permitir a rotação automática do display e oferecer atalho de visualização em tela cheia orientada. |
| **Prevenção de Erros (H5)** | Modal de biometria sobrepõe a tela de criação de chave com opção "Não perguntar novamente" irreversível sem aviso prévio. | 3 (Grave) | Inserir confirmação de segurança e permitir a reativação da opção posteriormente na tela de configurações. |
| **Compatibilidade com o Mundo Real (H2)** | Emprego de siglas sem explicação ("CRLV-e") e rótulos ambíguos como "Cadastro Positivo", gerando confusão com crédito. | 2 (Simples) | Explicitar os nomes por extenso e adicionar subtítulos de esclarecimento sobre a finalidade de cada registro. |
| **Visibilidade do Estado do Sistema (H1)** | Ao alternar o tema do sistema, a notificação flutuante atrasa e passa a acusar o estado invertido em relação à tela real. | 2 (Simples) | Corrigir a sincronização do gatilho de feedback do tema com a renderização visual da interface. |

<p style="margin-top: 0;"><b>Fonte:</b> Arthur Sismene Carvalho (2026).</p>

</div>

### 4.4 Documento Completo
> 📄 O relatório individual detalhado contendo a análise completa está disponível em: [Relatório de Avaliação Heurística: CNH Digital (Arthur Sismene) - PDF](sismene_avaliacao.pdf).

---

## 5. Portal CODHAB (Morar Bem)

* **Sistema:** [Portal CODHAB](https://www.codhab.df.gov.br/) (Companhia de Desenvolvimento Habitacional do DF)
* **Avaliador Responsável:** Leonardo da Silva Lopes Júnior

### 5.1 Visão Geral e Escopo
A avaliação teve como foco a funcionalidade de inscrição e pré-cadastro no programa habitacional "Morar Bem", destinada a famílias de baixa renda do Distrito Federal. Por se tratar de um serviço de alto impacto social, falhas na submissão do formulário podem resultar na exclusão indevida de candidatos de programas de moradia popular. O escopo concentrou-se no formulário de inscrição online.

### 5.2 Planejamento e Condução com o Framework DECIDE
* **D — Determinar os objetivos:** Avaliar a qualidade de uso, robustez e prevenção de erros no preenchimento de cadastros de programas sociais por cidadãos com diferentes níveis de letramento digital.
* **E — Explorar perguntas:**
  - O sistema valida dados vitais de contato antes de permitir a submissão definitiva?
  - A interface adota mecanismos que auxiliem o usuário a identificar e corrigir erros ortográficos em tempo real?
  - Existem barreiras cadastrais que possam provocar prejuízos irreparáveis ao candidato por falhas de digitação?
  - O usuário recebe feedback adequado sobre as etapas e conclusão do cadastro?
* **C — Considerar os métodos:** Avaliação Heurística (NIELSEN, 1994) pautada no framework DECIDE (PREECE et al., 2002; BARBOSA et al., 2021).
* **I — Identificar questões práticas:** Avaliação individual conduzida em navegador desktop e mobile, analisando os campos do formulário com testes de dados simulados (sem envio de dados falsos à base da autarquia).
* **D — Decidir sobre questões éticas:** Estrito respeito à integridade da plataforma governamental, operando em conformidade com as diretrizes acadêmicas sem envio de formulários fantasmas.
* **E — Avaliar, interpretar e apresentar os dados:** Sistematização das barreiras com categorização de gravidade conforme os critérios de Nielsen (Tabela 5).

### 5.3 Problemas Heurísticos Identificados

<div align="center" markdown="1">

<p style="margin-bottom: 0;"><b>Tabela 5:</b> Principais problemas de usabilidade identificados no Portal CODHAB.</p>

| Heurística Violada | Descrição do Problema | Severidade | Recomendação de Reprojeto |
| :--- | :--- | :---: | :--- |
| **Prevenção de Erros (H5)** | Falta de validação sintática do domínio de e-mail, permitindo erros comuns imperceptíveis como `@gamil.com` ou `@hotmal.com`. | 3 (Grave) | Adicionar validação de formato e conferência sintática de domínios populares antes de permitir o envio. |
| **Ajuda para Reconhecer e Recuperar-se de Erros (H9)** | Ausência de sugestões automáticas de correção ou avisos contextuais quando o e-mail parece conter erro de digitação. | 3 (Grave) | Exibir mensagem de confirmação: *"Você quis dizer @gmail.com?"* em caso de semelhança ortográfica com domínios conhecidos. |
| **Prevenção de Erros (H5)** | Inexistência do campo obrigatório de verificação ("Confirmar E-mail"), aumentando drasticamente o risco de erros de contato. | 3 (Grave) | Implementar obrigatoriedade de digitação e confirmação coincidente do e-mail em campo duplo. |
| **Visibilidade do Estado do Sistema (H1)** | Ausência de um indicador visual de progresso (barra de etapas) ao longo dos múltiplos blocos do formulário. | 2 (Simples) | Inserir componente visual de etapas (stepper) informando a seção atual e a quantidade restante de passos. |

<p style="margin-top: 0;"><b>Fonte:</b> Leonardo da Silva Lopes Júnior (2026).</p>

</div>

### 5.4 Documento Completo
> 📄 O relatório individual detalhado contendo a fundamentação metodológica está disponível em: [Relatório de Avaliação Heurística: CODHAB (Leonardo Lopes) - PDF](leonardo_avaliacao.pdf).

---

## 6. Referências Bibliográficas

> [1] BARBOSA, Simone D. J.; SILVA, Bruno S. da. *Interação Humano-Computador*. Rio de Janeiro: Elsevier / Campus, 2010.  
> [2] BARBOSA, Simone D. J.; SILVA, Bruno S. da; SILVEIRA, Milene S.; GASPARINI, Isabela; DARIN, Ticianne; BARBOSA, Gabriel D. J. *Interação Humano-Computador e Experiência do Usuário*. Rio de Janeiro: Autopublicação, 2021.  
> [3] NIELSEN, Jakob. *10 Usability Heuristics for User Interface Design*. Nielsen Norman Group, 1994. Disponível em: <https://www.nngroup.com/articles/ten-usability-heuristics/>. Acesso em: 04 de setembro de 2026.  
> [4] PREECE, Jennifer; ROGERS, Yvonne; SHARP, Helen. *Interaction Design: Beyond Human-Computer Interaction*. New York: John Wiley & Sons, 2002.  
> [5] SALES, André Barros de. *Plano de ensino FIHC 022026 – Turma 01*. Brasília: Faculdade de Ciências e Tecnologias em Engenharia (FCTE), Universidade de Brasília (UnB), 2026.  

---

## 7. Histórico de Versões

<div align="center" markdown="1">

| Versão | Data | Descrição | Autor(es) | Revisor(es) |
| :---: | :---: | :--- | :---: | :---: |
| `1.0` | 04/09/2026 | Criação da estrutura do documento e compilação das avaliações individuais. | Arthur Sismene Carvalho, Daniel da Silva Batista, Leonardo da Silva Lopes Júnior, Pedro Rocha Ferreira Lima | Arthur Sismene Carvalho, Daniel da Silva Batista, Leonardo da Silva Lopes Júnior, Pedro Rocha Ferreira Lima |
| `1.1` | 17/09/2026 | Adição da Tabela de Contribuição detalhando as avaliações individuais e padronização da IA Gemini. | Leonardo da Silva Lopes Júnior | Daniel da Silva Batista |
| `1.2` | 09/10/2026 | Atendimento às observações do monitor (OBS 5, 6, 10 e 11): padronização integral da estrutura de todos os 4 sistemas avaliados com desenvolvimento do framework DECIDE etapa por etapa, inclusão de tabelas de problemas e severidade, hiperligações na contribuição e adequação de Referências Bibliográficas. | Daniel da Silva Batista | Arthur Sismene Carvalho |

</div>
