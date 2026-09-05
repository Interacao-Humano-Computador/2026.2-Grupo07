# Sites Avaliados

## 1. Introdução

Como etapa inicial para a escolha do objeto de estudo da disciplina, foi requisitado que os integrantes da equipe realizassem inspeções individuais em diferentes sistemas. O objetivo dessa etapa foi mapear sistemas que apresentassem falhas de usabilidade e que fossem viáveis para o escopo do projeto.

Para padronizar a avaliação inicial, adotou-se o método de **Avaliação Heurística**, proposto por Jakob Nielsen (1994). Cada integrante selecionou um site e aplicou as 10 Heurísticas de Usabilidade de Nielsen para identificar os principais problemas de interface. A Tabela 1 apresenta a relação dos sites avaliados e seus respectivos avaliadores.

<div align="center" markdown="1">

<p style="margin-bottom: 0;"><b>Tabela 1:</b> Relação de sites avaliados individualmente pela equipe.</p>

| Site Avaliado | Avaliador Responsável |
| :---: | :---: |
| [Sinesp Cidadão (Aplicativo)](#2-sinesp-cidadao-aplicativo) | Daniel da Silva Batista |
| [Tribunal de Contas do DF (TCDF)](#3-tribunal-de-contas-do-distrito-federal-tcdf) | Pedro Rocha Ferreira Lima |
| [CNH do Brasil (Aplicativo)](#4-cnh-do-brasil-aplicativo) | Arthur Sismene Carvalho |
| [Portal CODHAB (Morar Bem)](#5-portal-codhab-morar-bem) | Leonardo da Silva Lopes Júnior |

<p style="margin-top: 0;"><b>Fonte:</b> Os Autores (2026).</p>

</div>

---

## 2. Sinesp Cidadão (Aplicativo)

Avaliação realizada por **Daniel da Silva Batista**. O aplicativo móvel [Sinesp Cidadão](https://www.gov.br/pt-br/apps/sinesp-cidadao), do Ministério da Justiça e Segurança Pública, tem como objetivo principal permitir que o cidadão consulte veículos, mandados de prisão e realize denúncias. Durante a inspeção heurística preliminar (onde 8 problemas foram catalogados), os principais entraves constatados foram:

* **Conformidade com Padrões de Acessibilidade (Catastrófico)**: A interface possui botões e imagens interativas desprovidas de rótulos textuais (tags *contentDescription*), inviabilizando completamente a navegação para usuários com deficiência visual que dependem de leitores de tela.
* **Visibilidade do Estado do Sistema (Catastrófico)**: A funcionalidade de "Mandados" apresenta uma mensagem de indisponibilidade silenciosa recomendando acesso ao "BNMP", mas o botão permanece clicável na tela inicial e não há link direto para a alternativa, gerando total quebra de tarefa.
* **Compatibilidade do sistema com o mundo real (Grave)**: O aplicativo utiliza termos genéricos ou abstratos como "Participação Cidadã", "Meus Vínculos" e siglas técnicas como "BNMP", sem qualquer subtítulo explicativo, o que desorienta o cidadão comum.
* **Reconhecimento em vez de memorização (Simples)**: O botão de login via conta Gov.br na página inicial é representado apenas por um ícone genérico de usuário, forçando o cidadão a deduzir a funcionalidade.

> 📄 **Documento Completo:** [Relatório de Avaliação Heurística: Sinesp Cidadão (Daniel Batista) - PDF](daniel_avaliacao.pdf).

---

## 3. Tribunal de Contas do Distrito Federal (TCDF)

Avaliação realizada por **Pedro Rocha Ferreira Lima**. O portal institucional do [TCDF](https://www2.tc.df.gov.br/) tem como objetivo principal ser a ponte de controle externo, transparência e serviços para a sociedade, jurisdicionados e servidores. Durante a inspeção heurística preliminar baseada no framework DECIDE, os seguintes problemas de usabilidade foram constatados:

* **Estética e Design Minimalista (Grave)**: A página principal possui múltiplos banners rotativos e links redundantes para "Consultas e Destaques" espremidos na lateral, gerando poluição visual e sobrecarga cognitiva ao cidadão que busca serviços.
* **Prevenção de Erros (Grave)**: A tela de busca de processos específicos não possui máscara de formatação automática (como barras ou traços) e não apresenta textos de ajuda (placeholders), fazendo com que o sistema retorne erro constantemente caso o cidadão erre a pontuação.
* **Compatibilidade do sistema com o mundo real (Simples)**: O sistema utiliza nomenclaturas estritamente técnicas e jargões governamentais/jurídicos nos menus (como "Espaço Jurisdicionado" ou "Controle Externo") sem descrição acessível para o cidadão leigo, gerando insegurança.
* **Consistência e Padrões (Simples)**: Ao acessar sistemas satélites, como o Portal da Transparência, a identidade visual muda drasticamente (tipografia e cabeçalho alterados), quebrando a expectativa do usuário de que ainda está no domínio do Tribunal.

> 📄 **Documento Completo:** [Relatório e Planejamento de Avaliação de IHC: TCDF (Pedro Rocha) - PDF](pedro_avaliacao.pdf).

---

## 4. CNH do Brasil (Aplicativo)

Avaliação realizada por **Arthur Sismene Carvalho**. O aplicativo [CNH do Brasil](https://play.google.com/store/apps/details?id=br.gov.serpro.cnhdigital), desenvolvido pelo Serpro, reúne a versão digital da Carteira Nacional de Habilitação e serviços de condutor. Durante a inspeção heurística preliminar, os seguintes problemas de usabilidade foram constatados:

* **Flexibilidade e eficiência de uso (Grave)**: A área de visualização da habilitação é diagramada em paisagem, mas o aplicativo permanece travado em modo retrato, exigindo que o condutor gire fisicamente o aparelho em 90 graus para leitura em fiscalizações.
* **Prevenção de erros (Grave)**: O diálogo de acesso por biometria se sobrepõe à criação da chave e oferece a opção irreversível "Não perguntar novamente" sem alertar que isso não pode ser desfeito facilmente, levando o usuário a perder um atalho importante por toque acidental.
* **Compatibilidade do sistema com o mundo real (Simples)**: O aplicativo emprega nomenclaturas não intuitivas, como apresentar a sigla "CRLV-e" sem expansão de significado e usar o rótulo "Cadastro Positivo" de forma dúbia (sendo confundido com o serviço de proteção ao crédito).
* **Visibilidade do estado do sistema (Simples)**: Na tela de preferências, ao trocar rapidamente entre tema claro e escuro, o alerta temporário sofre dessincronização e passa a informar o estado anterior ao invés do atual.

> 📄 **Documento Completo:** [Relatório de Avaliação Heurística: CNH Digital (Arthur Sismene) - PDF](sismene_avaliacao.pdf).

---

## 5. Portal CODHAB (Morar Bem)

Avaliação realizada por **Leonardo da Silva Lopes Júnior**. A avaliação foi focada na funcionalidade de inscrição no programa "Morar Bem" oferecida pelo portal da [CODHAB-DF](https://www.codhab.df.gov.br/). Durante a inspeção heurística preliminar baseada no framework DECIDE, os seguintes pontos críticos de usabilidade foram constatados:

* **Prevenção de Erros (Falta de Validação - Grave)**: Na etapa de pré-cadastro, o sistema não realiza validação sintática do domínio do e-mail digitado. Isso permite que usuários cometam e submetam erros comuns de digitação de forma invisível (como `@gamil.com` ou `@hotmal.com`).
* **Ajuda aos Usuários (Ausência de Feedback Ativo - Grave)**: A interface carece de sugestões automáticas de correção. Diante de um domínio de e-mail sabidamente incorreto, o sistema não emite nenhum alerta sugerindo a correção antes da finalização do cadastro.
* **Prevenção de Erros (Confirmação Omitida - Grave)**: O formulário de inscrição não adota o padrão de exigir a digitação do e-mail em um segundo campo de verificação ("Confirmar E-mail"). Esse erro de arquitetura somado à falta de validação gera um efeito dominó onde o cidadão é desligado do programa por nunca receber os e-mails de convocação oficiais da companhia habitacional.

> 📄 **Documento Completo:** [Relatório de Avaliação Heurística: CODHAB (Leonardo Lopes) - PDF](leonardo_avaliacao.pdf).

---



## 6. Bibliografia

> NIELSEN, Jakob. *10 Usability Heuristics for User Interface Design*. Nielsen Norman Group, 1994. Disponível em: <https://www.nngroup.com/articles/ten-usability-heuristics/>. Acesso em: 04 de setembro de 2026.

## 7. Histórico de Versões

| Versão | Data | Descrição | Autor(es) | Revisor(es) |
| :---: | :---: | :--- | :---: | :---: |
| `1.0` | 04/09/2026 | Criação da estrutura do documento e compilação das avaliações individuais. | Todos os integrantes | Todos os integrantes |
