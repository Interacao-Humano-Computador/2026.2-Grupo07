<div align="center" markdown="1">

<p align="center"><b>Tabela de Contribuição</b></p>

| Membro | Contribuição |
| :--- | :--- |
| Daniel da Silva Batista | Concepção e desenho manual do Protótipo de Papel da TAR-01 e TAR-02, elaboração das peças dinâmicas e post-its, autoinspeção analítica com lista de verificação, condução e gravação do teste-piloto, consolidação do relato individual e propostas de reprojeto para o protótipo digital de alta fidelidade (Nível 3). |
| Gemini | Auxílio na estruturação textual, organização das tabelas, implementação dos modais de zoom e formatação em Markdown (conforme Política de Uso de IA). |

<p align="center" style="font-size: 0.85em; margin-top: -0.6em;"><b>Fonte:</b> Daniel da Silva Batista (2026).</p>

</div>

# Avaliação e Relato Individual — Protótipo de Papel (Daniel da Silva Batista)

## 1. Identificação do Integrante e Escopo de Atuação

Este artefato reúne todo o ciclo de **avaliação formativa de Nível 2 (Protótipo de Papel)** conduzido individualmente por **Daniel da Silva Batista** no âmbito do projeto **PCI Concursos**, em conformidade com o framework DECIDE (*Barbosa et al.*, 2021), a técnica do Computador Humano (*Snyder*, 2003) e as diretrizes do plano de ensino da disciplina de Interação Humano-Computador (*Sales*, 2026).

<div align="center" markdown="1">

<p align="center"><b>Tabela 1: Resumo do Escopo Individual de Daniel da Silva Batista (Nível 2)</b></p>

| Atributo | Detalhamento |
| :--- | :--- |
| **Integrante Responsável** | Daniel da Silva Batista |
| **Perfil de Usuário Focado** | [Perfil 1 — Candidato / Concurseiro](../../analise-de-requisitos/perfil-de-usuario.md) |
| **Cenário de Uso** | [CEN-01 — Parametrização de Busca Avançada e Comparação de Editais Concorrentes no DF](../../analise-de-requisitos/cenarios.md) |
| **Tarefa Prioritária de Autoria** | [TAR-01 — Parametrizar busca avançada multicritério e comparar editais concorrentes lado a lado](../../analise-de-requisitos/analise-de-tarefas/hta.md#31-tarefa-01-parametrizar-busca-avancada-multicriterio-e-comparar-editais-concorrentes-lado-a-lado-tar-01) |
| **Tarefa Complementar de Autoria** | [TAR-02 — Montar e exportar caderno personalizado de provas anteriores](../../analise-de-requisitos/analise-de-tarefas/hta.md#32-tarefa-02-montar-e-exportar-caderno-personalizado-de-provas-anteriores-com-gabarito-comentado-integrado-tar-02) |
| **Tipo de Artefato** | Protótipo de baixa fidelidade desenhado em papel com peças móveis e sobreposições mecânicas (*Paper Prototyping*) |
| **Técnica de Avaliação** | Simulação mecânica com o "Computador Humano" (*Wizard of Oz*) e Protocolo de Pensar em Voz Alta (*Think-Aloud*) |
| **Escopo da Inspeção** | Autoinspeção analítica com lista de verificação ergonômica de Nielsen (1993) e Snyder (2003) |
| **Participantes das Sessões** | Participantes representativos do Perfil 1 (Candidato/Concurseiro) |

<p align="center" style="font-size: 0.85em; margin-top: -0.6em;"><b>Fonte:</b> Daniel da Silva Batista (2026).</p>

</div>

---

## 2. Apresentação das Peças do Protótipo de Papel

O protótipo de baixa fidelidade foi confeccionado manualmente em papel sulfite A4 e tiras de cartolina/post-its destacáveis, materializando os conceitos funcionais concebidos na Análise de Tarefas (`TAR-01` e `TAR-02`) e no Storyboard (`SB-01`). 

As peças foram projetadas para permitir ao participante interagir apontando com o dedo nos campos, enquanto o avaliador atua como simulador mecânico (*Computador Humano*), trocando as folhas e sobrepondo estados visuais em resposta estrita a cada ação (Snyder, 2003).

### 2.1 Tela 1: Formulário de Busca Avançada com Filtros

A primeira folha apresenta o cabeçalho do portal PCI Concursos com o campo de busca genérica e a área expandida de **Filtros da Busca Avançada**, contendo seletores de Região/UF (`Distrito Federal (DF)`), Área/Carreira (`Administrativa`), Escolaridade (`Nível Superior`), Situação do Concurso (`[X] Inscrições Abertas`) e o botão de ação primária `[ FILTRAR CONCURSOS ]`.

<div align="center">

<div style="position: relative; display: inline-block; max-width: 95%;">
  <a href="javascript:void(0)" onclick="openModalPP01()" style="display: block; cursor: zoom-in;" title="Clique na imagem para expandir em Tela Cheia">
    <img id="pp01-thumb" src="../../../assets/images/prototipo-papel/prototipo-papel-tela-01.jpg" alt="Protótipo de Papel - Tela 1: Formulário de Busca Avançada com Filtros" style="max-width: 100%; height: auto; border: 1px solid #d0d7de; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.08); margin: 12px auto; display: block; transition: transform 0.2s ease-in-out;">
  </a>
</div>

<div style="margin: 10px 0 16px 0; display: flex; gap: 10px; justify-content: center; flex-wrap: wrap;">
  <button onclick="openModalPP01()" class="md-button md-button--primary" style="font-size: 0.82em; padding: 5px 16px; border-radius: 20px; cursor: pointer; display: inline-flex; align-items: center; gap: 6px;">
    <span>🔍</span> <b>Zoom / Tela Cheia</b>
  </button>
</div>

<p align="center"><b>Figura 1:</b> Protótipo de Papel — Tela 1: Formulário de Busca Avançada e Seleção de Filtros Multicritério</p>
<p align="center" style="font-size: 0.85em; margin-top: -0.6em;"><b>Fonte:</b> Elaborado por Daniel da Silva Batista à mão livre em papel sulfite (2026).</p>

</div>

<!-- Modal Tela 1 -->
<div id="pp01-modal" style="display: none; position: fixed; z-index: 999999; left: 0; top: 0; width: 100vw; height: 100vh; background-color: rgba(15, 23, 42, 0.95); backdrop-filter: blur(5px); align-items: center; justify-content: center; flex-direction: column;" onclick="closeModalPP01()">
  <div style="position: absolute; top: 16px; right: 24px; display: flex; gap: 12px; z-index: 1000000;" onclick="event.stopPropagation()">
    <a href="../../../assets/images/prototipo-papel/prototipo-papel-tela-01.jpg" download="Prototipo_Papel_Tela01_DanielBatista.jpg" class="md-button md-button--primary" style="font-size: 0.85em; padding: 6px 16px; border-radius: 6px; text-decoration: none; color: white;">📥 Baixar</a>
    <button onclick="closeModalPP01()" class="md-button" style="font-size: 0.85em; padding: 6px 16px; border-radius: 6px; background: #e11d48; color: white; border: none; cursor: pointer;">✕ Fechar (ESC)</button>
  </div>
  <div style="max-width: 95vw; max-height: 88vh; display: flex; align-items: center; justify-content: center; overflow: auto; padding: 10px;" onclick="event.stopPropagation()">
    <img src="../../../assets/images/prototipo-papel/prototipo-papel-tela-01.jpg" alt="Tela 1 em Tela Cheia" style="max-width: 100%; max-height: 86vh; object-fit: contain; border-radius: 8px; box-shadow: 0 12px 40px rgba(0,0,0,0.6);">
  </div>
  <p style="color: #94a3b8; font-size: 0.85em; margin-top: 8px;">Pressione <b>ESC</b> ou clique fora da imagem para fechar.</p>
</div>

---

### 2.2 Tela 2: Listagem de Resultados Filtrados e Seleção para Confronto

A segunda folha simula o retorno da busca: `Resultados: DF • Nível Superior • Administrativa (2 editais)`. Cada certame é exibido em um card estruturado com caixas de seleção `[ ] Selecionar para comparar`:
* **Edital 1:** `TRF 1ª Região - Analista Judiciário (Área Administrativa)` — Salário: R$ 13.900,00 | Vagas: 20 imediatas | Prova: 28/06/2026 (Manhã) | Status: Inscrições Abertas.
* **Edital 2:** `MGI - Especialista em Políticas Públicas e Gestão` — Salário: R$ 14.200,00 | Vagas: 35 imediatas | Prova: 28/06/2026 (Tarde) | Status: Inscrições Abertas.

Ao marcar as duas opções com o dedo, o "computador humano" sobrepõe dinamicamente a tira de papel: `[ 2 editais selecionados ] [ COMPARAR AGORA —> ]`.

<div align="center">

<div style="position: relative; display: inline-block; max-width: 95%;">
  <a href="javascript:void(0)" onclick="openModalPP02()" style="display: block; cursor: zoom-in;" title="Clique na imagem para expandir em Tela Cheia">
    <img id="pp02-thumb" src="../../../assets/images/prototipo-papel/prototipo-papel-tela-02.jpg" alt="Protótipo de Papel - Tela 2: Listagem de Editais Filtrados e Seleção para Comparar" style="max-width: 100%; height: auto; border: 1px solid #d0d7de; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.08); margin: 12px auto; display: block; transition: transform 0.2s ease-in-out;">
  </a>
</div>

<div style="margin: 10px 0 16px 0; display: flex; gap: 10px; justify-content: center; flex-wrap: wrap;">
  <button onclick="openModalPP02()" class="md-button md-button--primary" style="font-size: 0.82em; padding: 5px 16px; border-radius: 20px; cursor: pointer; display: inline-flex; align-items: center; gap: 6px;">
    <span>🔍</span> <b>Zoom / Tela Cheia</b>
  </button>
</div>

<p align="center"><b>Figura 2:</b> Protótipo de Papel — Tela 2: Listagem de Resultados Filtrados com Barra Flutuante Sobreposta</p>
<p align="center" style="font-size: 0.85em; margin-top: -0.6em;"><b>Fonte:</b> Elaborado por Daniel da Silva Batista à mão livre em papel sulfite (2026).</p>

</div>

<!-- Modal Tela 2 -->
<div id="pp02-modal" style="display: none; position: fixed; z-index: 999999; left: 0; top: 0; width: 100vw; height: 100vh; background-color: rgba(15, 23, 42, 0.95); backdrop-filter: blur(5px); align-items: center; justify-content: center; flex-direction: column;" onclick="closeModalPP02()">
  <div style="position: absolute; top: 16px; right: 24px; display: flex; gap: 12px; z-index: 1000000;" onclick="event.stopPropagation()">
    <a href="../../../assets/images/prototipo-papel/prototipo-papel-tela-02.jpg" download="Prototipo_Papel_Tela02_DanielBatista.jpg" class="md-button md-button--primary" style="font-size: 0.85em; padding: 6px 16px; border-radius: 6px; text-decoration: none; color: white;">📥 Baixar</a>
    <button onclick="closeModalPP02()" class="md-button" style="font-size: 0.85em; padding: 6px 16px; border-radius: 6px; background: #e11d48; color: white; border: none; cursor: pointer;">✕ Fechar (ESC)</button>
  </div>
  <div style="max-width: 95vw; max-height: 88vh; display: flex; align-items: center; justify-content: center; overflow: auto; padding: 10px;" onclick="event.stopPropagation()">
    <img src="../../../assets/images/prototipo-papel/prototipo-papel-tela-02.jpg" alt="Tela 2 em Tela Cheia" style="max-width: 100%; max-height: 86vh; object-fit: contain; border-radius: 8px; box-shadow: 0 12px 40px rgba(0,0,0,0.6);">
  </div>
  <p style="color: #94a3b8; font-size: 0.85em; margin-top: 8px;">Pressione <b>ESC</b> ou clique fora da imagem para fechar.</p>
</div>

---

### 2.3 Tela 3: Matriz Comparativa Lado a Lado e Confirmação de Exportação

A terceira folha exibe a tela de **Comparador de Editais Lado a Lado**, confrontando em colunas paralelas os atributos essenciais: Critério, TRF 1ª Região e MGI (Gestão), com linhas de Cargo, Remuneração, Data da Prova, Vagas e Matérias Comuns (com percentual de compatibilidade de 75%). 

No rodapé, encontram-se os botões `[ SALVAR ]` e `[ EXPORTAR PDF ]`. Ao tocar em exportar, o simulador sobrepõe a caixa de confirmação: `✓ COMPARATIVO GERADO COM SUCESSO [ OK / FECHAR ]`.

<div align="center">

<div style="position: relative; display: inline-block; max-width: 95%;">
  <a href="javascript:void(0)" onclick="openModalPP03()" style="display: block; cursor: zoom-in;" title="Clique na imagem para expandir em Tela Cheia">
    <img id="pp03-thumb" src="../../../assets/images/prototipo-papel/prototipo-papel-tela-03.jpg" alt="Protótipo de Papel - Tela 3: Matriz Comparativa Lado a Lado e Exportação em PDF" style="max-width: 100%; height: auto; border: 1px solid #d0d7de; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.08); margin: 12px auto; display: block; transition: transform 0.2s ease-in-out;">
  </a>
</div>

<div style="margin: 10px 0 16px 0; display: flex; gap: 10px; justify-content: center; flex-wrap: wrap;">
  <button onclick="openModalPP03()" class="md-button md-button--primary" style="font-size: 0.82em; padding: 5px 16px; border-radius: 20px; cursor: pointer; display: inline-flex; align-items: center; gap: 6px;">
    <span>🔍</span> <b>Zoom / Tela Cheia</b>
  </button>
</div>

<p align="center"><b>Figura 3:</b> Protótipo de Papel — Tela 3: Matriz Comparativa Lado a Lado com Modal de Confirmação Sobreposto</p>
<p align="center" style="font-size: 0.85em; margin-top: -0.6em;"><b>Fonte:</b> Elaborado por Daniel da Silva Batista à mão livre em papel sulfite (2026).</p>

</div>

<!-- Modal Tela 3 -->
<div id="pp03-modal" style="display: none; position: fixed; z-index: 999999; left: 0; top: 0; width: 100vw; height: 100vh; background-color: rgba(15, 23, 42, 0.95); backdrop-filter: blur(5px); align-items: center; justify-content: center; flex-direction: column;" onclick="closeModalPP03()">
  <div style="position: absolute; top: 16px; right: 24px; display: flex; gap: 12px; z-index: 1000000;" onclick="event.stopPropagation()">
    <a href="../../../assets/images/prototipo-papel/prototipo-papel-tela-03.jpg" download="Prototipo_Papel_Tela03_DanielBatista.jpg" class="md-button md-button--primary" style="font-size: 0.85em; padding: 6px 16px; border-radius: 6px; text-decoration: none; color: white;">📥 Baixar</a>
    <button onclick="closeModalPP03()" class="md-button" style="font-size: 0.85em; padding: 6px 16px; border-radius: 6px; background: #e11d48; color: white; border: none; cursor: pointer;">✕ Fechar (ESC)</button>
  </div>
  <div style="max-width: 95vw; max-height: 88vh; display: flex; align-items: center; justify-content: center; overflow: auto; padding: 10px;" onclick="event.stopPropagation()">
    <img src="../../../assets/images/prototipo-papel/prototipo-papel-tela-03.jpg" alt="Tela 3 em Tela Cheia" style="max-width: 100%; max-height: 86vh; object-fit: contain; border-radius: 8px; box-shadow: 0 12px 40px rgba(0,0,0,0.6);">
  </div>
  <p style="color: #94a3b8; font-size: 0.85em; margin-top: 8px;">Pressione <b>ESC</b> ou clique fora da imagem para fechar.</p>
</div>

<script>
function openModalPP01() { var m = document.getElementById('pp01-modal'); if(m){ m.style.display='flex'; document.body.style.overflow='hidden'; } }
function closeModalPP01() { var m = document.getElementById('pp01-modal'); if(m){ m.style.display='none'; document.body.style.overflow=''; } }
function openModalPP02() { var m = document.getElementById('pp02-modal'); if(m){ m.style.display='flex'; document.body.style.overflow='hidden'; } }
function closeModalPP02() { var m = document.getElementById('pp02-modal'); if(m){ m.style.display='none'; document.body.style.overflow=''; } }
function openModalPP03() { var m = document.getElementById('pp03-modal'); if(m){ m.style.display='flex'; document.body.style.overflow='hidden'; } }
function closeModalPP03() { var m = document.getElementById('pp03-modal'); if(m){ m.style.display='none'; document.body.style.overflow=''; } }
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') { closeModalPP01(); closeModalPP02(); closeModalPP03(); }
});
</script>

---

## 3. Autoinspeção Analítica do Protótipo de Papel

Antes da aplicação com os participantes, o autor realizou uma autoinspeção analítica com base nas heurísticas de Nielsen (1993) e nos critérios de prototipação em papel de Snyder (2003):

<div align="center" markdown="1">

<p align="center"><b>Tabela 2: Lista de Verificação da Autoinspeção do Protótipo de Papel (Autor: Daniel Batista)</b></p>

| Item | Critério Avaliado | Resposta | Justificativa / Observação |
| :---: | :--- | :---: | :--- |
| **1** | O protótipo caracteriza-se como baixa fidelidade autêntica em papel, sem componentes finais codificados? | **Sim** | Desenhado inteiramente à mão em folhas A4 e post-its destacáveis (Snyder, 2003). |
| **2** | Os elementos interativos (campos, botões, caixas de seleção) comunicam com clareza suas affordances? | **Sim** | Rótulos claros com checkboxes (`[ ]`) e botões destacados em retângulos reforçados. |
| **3** | A sequência de telas cobre o fluxo completo planejado nas tarefas TAR-01 e TAR-02? | **Sim** | Cobertura integral: busca avançada ➔ listagem de resultados ➔ matriz comparativa ➔ exportação em PDF. |
| **4** | As peças móveis permitem ao simulador mecânico representar respostas e feedbacks rápidos? | **Sim** | O botão de comparação e o modal de confirmação de PDF foram recortados como peças independentes de troca rápida. |
| **5** | Os termos e categorias refletem a linguagem habitual dos concurseiros (correspondência com o mundo real)? | **Sim** | Emprega termos canônicos: "Inscrições Abertas", "Nível Superior", "Vagas Imediatas" e "Matérias Comuns". |

<p align="center" style="font-size: 0.85em; margin-top: -0.6em;"><b>Fonte:</b> Daniel da Silva Batista (2026).</p>

</div>

---

## 4. Teste-Piloto da Avaliação do Protótipo de Papel (Executado e Gravado)

Conforme Barbosa et al. (2021, p. 276 e 300), o teste-piloto foi realizado previamente pelo avaliador Daniel da Silva Batista com o propósito de verificar o tempo de condução da sessão, calibrar o sincronismo na troca mecânica das folhas de papel e testar a legibilidade dos textos gravados pela câmera.

### 4.1 Dados Logísticos do Teste-Piloto

<div align="center" markdown="1">

<p align="center"><b>Tabela 3: Dados Logísticos do Teste-Piloto do Protótipo de Papel</b></p>

| Parâmetro | Detalhamento |
| :--- | :--- |
| **Data e Horário:** | 01/11/2026 às 12:33 |
| **Duração da Gravação:** | 03 minutos e 41 segundos |
| **Avaliador Responsável:** | Daniel da Silva Batista |
| **Ambiente de Gravação:** | Presencial / Laboratório FGA com câmera focalizando a mesa de testes |
| **Artefatos Exercitados:** | Protótipo de Papel da `TAR-01` e `TAR-02` (3 telas em papel e post-its móveis) |
| **Custos Envolvidos:** | R$ 0,00 (material de escritório próprio) |

<p align="center" style="font-size: 0.85em; margin-top: -0.6em;"><b>Fonte:</b> Daniel da Silva Batista (2026).</p>

</div>

### 4.2 Registro Audiovisual do Teste-Piloto

A gravação do teste-piloto com o protótipo de papel está disponível na íntegra a seguir, hospedada no YouTube com privacidade configurada como **Não Listado**:

<div align="center">

<iframe width="720" height="405" src="https://www.youtube.com/embed/dmLr099zT0Y" title="Gravação do Teste-Piloto - Protótipo de Papel - Daniel Batista (Grupo 07 IHC)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="border: 1px solid #d0d7de; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.08); margin: 16px auto; display: block;"></iframe>

<p align="center"><b>Vídeo 1:</b> Gravação do Teste-Piloto — Avaliação do Protótipo de Papel (TAR-01 e TAR-02)</p>
<p align="center" style="font-size: 0.85em; margin-top: -0.6em;"><b>Link direto no YouTube:</b> <a href="https://youtu.be/dmLr099zT0Y" target="_blank">https://youtu.be/dmLr099zT0Y</a></p>

</div>

> **Declaração de Descarte de Dados do Piloto:** Em estrita conformidade com a literatura de IHC (Barbosa et al., 2021, p. 300), declara-se que os dados obtidos durante a sessão de teste-piloto foram utilizados exclusivamente para a calibração do roteiro de tarefas, verificação da iluminação da mesa e treino de agilidade na troca de folhas, sendo formalmente descartados do cômputo final dos resultados com participantes reais.

---

## 5. Avaliação com Usuários (Sessões Empíricas)

### 5.1 Protocolo Ético e Caracterização dos Participantes
O recrutamento respeitou integralmente o [Perfil 1 — Candidato/Concurseiro](../../analise-de-requisitos/perfil-de-usuario.md). O Termo de Consentimento Livre e Esclarecido (TCLE) foi formalizado verbalmente no início de cada gravação, assegurando que o foco do teste é o protótipo em papel e jamais a capacidade individual do participante.

<div align="center" markdown="1">

<p align="center"><b>Tabela 4: Perfil dos Participantes da Avaliação Empírica</b></p>

| Participante | Perfil Concurseiro | Idade / Ocupação | Rotina com Concursos | Dispositivo Habitual | Status do TCLE |
| :---: | :--- | :--- | :--- | :--- | :---: |
| **Participante 1** | Perfil 1 – Candidato | 52 anos / Pedagoga e Psicopedagoga | Concurseira ativa (em busca de recolocação e prestando concursos regularmente) | Computador Pessoal | Aceito formalmente em vídeo |
| **Participante 2** | Perfil 1 – Candidato | 21 anos / Universitária e Estudante | Concurseira ativa (pesquisa certames regularmente) | Computador Pessoal | Aceito formalmente em vídeo |
| **Participante 3** | Perfil 1 – Candidato | Jovem adulto / Estudante | Concurseiro iniciante (iniciando a rotina de busca de certames) | Computador Pessoal | Aceito formalmente em vídeo |

<p align="center" style="font-size: 0.85em; margin-top: -0.6em;"><b>Fonte:</b> Daniel da Silva Batista (2026).</p>

</div>

### 5.2 Registro Audiovisual das Entrevistas

A Tabela 5 documenta a logística e os registros das sessões empíricas executadas. O player da primeira entrevista está incorporado a seguir:

<div align="center" markdown="1">

<p align="center"><b>Tabela 5: Registro Audiovisual das Entrevistas do Protótipo de Papel</b></p>

| Sessão | Entrevistador | Participante | Data e Horário | Duração | Link da Gravação |
| :---: | :--- | :---: | :---: | :---: | :--- |
| **Entrevista 1** | Daniel da Silva Batista | Participante 1 (52 anos, Pedagoga) | 02/11/2026 às 10:45 | 05 min 05 s | [Vídeo da Entrevista 1 (YouTube - 05m 05s)](https://youtu.be/C8vyfMWISsY) |
| **Entrevista 2** | Daniel da Silva Batista | Participante 2 (21 anos, Universitária) | 02/11/2026 às 14:03 | 02 min 16 s | [Vídeo da Entrevista 2 (YouTube - 02m 16s)](https://youtu.be/AErfSvTkVGA) |
| **Entrevista 3** | Daniel da Silva Batista | Participante 3 (Jovem adulto, Estudante) | 02/11/2026 às 14:12 | 02 min 06 s | [Vídeo da Entrevista 3 (YouTube - 02m 06s)](https://youtu.be/QzVX9Hed4OU) |

<p align="center" style="font-size: 0.85em; margin-top: -0.6em;"><b>Fonte:</b> Daniel da Silva Batista (2026).</p>

</div>

<div align="center">

<iframe width="720" height="405" src="https://www.youtube.com/embed/C8vyfMWISsY" title="Entrevista 01 - Protótipo de Papel - Daniel Batista (Grupo 07 IHC)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="border: 1px solid #d0d7de; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.08); margin: 16px auto; display: block;"></iframe>

<p align="center"><b>Vídeo 2:</b> Gravação da Entrevista 1 — Avaliação do Protótipo de Papel (TAR-01 e TAR-02)</p>
<p align="center" style="font-size: 0.85em; margin-top: -0.6em;"><b>Link direto no YouTube:</b> <a href="https://youtu.be/C8vyfMWISsY" target="_blank">https://youtu.be/C8vyfMWISsY</a></p>

</div>

<div align="center">

<iframe width="720" height="405" src="https://www.youtube.com/embed/AErfSvTkVGA" title="Entrevista 02 - Protótipo de Papel - Daniel Batista (Grupo 07 IHC)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="border: 1px solid #d0d7de; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.08); margin: 16px auto; display: block;"></iframe>

<p align="center"><b>Vídeo 3:</b> Gravação da Entrevista 2 — Avaliação do Protótipo de Papel (TAR-01 e TAR-02)</p>
<p align="center" style="font-size: 0.85em; margin-top: -0.6em;"><b>Link direto no YouTube:</b> <a href="https://youtu.be/AErfSvTkVGA" target="_blank">https://youtu.be/AErfSvTkVGA</a></p>

</div>

<div align="center">

<iframe width="720" height="405" src="https://www.youtube.com/embed/QzVX9Hed4OU" title="Entrevista 03 - Protótipo de Papel - Daniel Batista (Grupo 07 IHC)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="border: 1px solid #d0d7de; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.08); margin: 16px auto; display: block;"></iframe>

<p align="center"><b>Vídeo 4:</b> Gravação da Entrevista 3 — Avaliação do Protótipo de Papel (TAR-01 e TAR-02)</p>
<p align="center" style="font-size: 0.85em; margin-top: -0.6em;"><b>Link direto no YouTube:</b> <a href="https://youtu.be/QzVX9Hed4OU" target="_blank">https://youtu.be/QzVX9Hed4OU</a></p>

</div>

### 5.3 Desempenho nas Tarefas e Feedbacks Coletados

Nas sessões individuais, o protocolo de *Think-Aloud* (pensar em voz alta) foi empregado conjuntamente à simulação mecânica do Computador Humano:

#### 5.3.1 Sessão 1 — Participante 1 (52 anos, Pedagoga)

Durante a primeira sessão com a **Participante 1**, a técnica do *Think-Aloud* (pensar em voz alta) foi aplicada conjuntamente à simulação mecânica do Computador Humano:

<div align="center" markdown="1">

<p align="center"><b>Tabela 6: Desempenho e Eficácia da Participante 1 no Protótipo de Papel</b></p>

| Tarefa Avaliada | Instrução Fornecida | Ação Executada pela Usuária (*Think-Aloud*) | Resultado | Tempo de Execução |
| :--- | :--- | :--- | :---: | :---: |
| **Tarefa 1: Busca Avançada** | *"Encontre concursos abertos de nível superior na área administrativa em Brasília."* | Verbalizou a digitação do cargo e tocou nos filtros de DF, Nível Superior, Área Administrativa e Inscrições Abertas, acionando o botão `[Filtrar Concursos]`. | **Sucesso Autônomo** | ~55 s |
| **Tarefa 2: Seleção para Confronto** | *"Selecione dois editais para confrontar salários e datas de prova."* | Identificou os cards do TRF e MGI, analisou vagas e salários, notou provas em turnos opostos (manhã e tarde), marcou as duas caixas de seleção e tocou em `[Comparar]`. | **Sucesso Autônomo** | ~1 min 15 s |
| **Tarefa 3: Matriz Comparativa e Exportação** | *"Analise a comparação lado a lado e salve o comparativo em PDF."* | Ponderou a viabilidade dos turnos de prova em relação aos locais físicos no DF, tocou no botão de rodapé `[Exportar PDF]` e visualizou o modal dinâmico de sucesso. | **Sucesso Autônomo** | ~50 s |

<p align="center" style="font-size: 0.85em; margin-top: -0.6em;"><b>Fonte:</b> Daniel da Silva Batista (2026).</p>

</div>

#### Síntese das Respostas Pós-Teste (Participante 1):
- **Organização Visual:** Considerou o protótipo muito intuitivo, destacando que a apresentação lado a lado dos concursos na terceira tela oferece clareza imediata para a decisão.
- **Dúvidas ou Hesitações:** Afirmou que não teve nenhuma dúvida no fluxo e achou a interface fácil de operar.
- **Insight para Reprojeto:** Destacou espontaneamente que a informação de turno de prova é crucial para concurseiros, pois prestar dois concursos no mesmo dia só é factível se o deslocamento entre os locais de prova for viável. Esse feedback valida a oportunidade `OPO-PP02` (alerta de choque/compatibilidade de turnos).

#### 5.3.2 Sessão 2 — Participante 2 (21 anos, Universitária)

<div align="center" markdown="1">

<p align="center"><b>Tabela 7: Desempenho e Eficácia da Participante 2 no Protótipo de Papel</b></p>

| Tarefa Avaliada | Instrução Fornecida | Ação Executada pela Usuária (*Think-Aloud*) | Resultado | Tempo de Execução |
| :--- | :--- | :--- | :---: | :---: |
| **Tarefa 1: Busca Avançada** | *"Encontre concursos abertos utilizando os filtros de busca avançada."* | Verbalizou a parametrização dos filtros (escolaridade de nível médio e área administrativa) e tocou em `[Filtrar Concursos]`. | **Sucesso Autônomo** | ~25 s |
| **Tarefa 2: Seleção para Confronto** | *"Selecione dois certames da lista para comparar."* | Apontou para as caixas de seleção dos dois concursos retornados e visualizou a resposta mecânica imediata da tira `[2 concursos selecionados]`. | **Sucesso Autônomo** | ~35 s |
| **Tarefa 3: Matriz Comparativa e Exportação** | *"Confronte os dados na matriz lado a lado e gere o PDF."* | Analisou a tabela comparativa (salários, datas de prova, vagas e matérias comuns), acionou o botão `[Exportar PDF]` e conferiu a confirmação do modal dinâmico. | **Sucesso Autônomo** | ~30 s |

<p align="center" style="font-size: 0.85em; margin-top: -0.6em;"><b>Fonte:</b> Daniel da Silva Batista (2026).</p>

</div>

- **Clareza e Usabilidade:** Avaliou o protótipo como *"bem didático, bem acessível e fácil de entender"*.
- **Dificuldades ou Inconsistências:** Declarou que em nenhum momento sentiu confusão quanto à ordem dos passos ou significado dos botões.
- **Sugestões de Reprojeto:** Afirmou que não alteraria nem retiraria elementos das peças desenhadas, considerando a solução completa e direta para a necessidade do concurseiro.

#### 5.3.3 Sessão 3 — Participante 3 (Jovem adulto, Estudante)

<div align="center" markdown="1">

<p align="center"><b>Tabela 8: Desempenho e Eficácia do Participante 3 no Protótipo de Papel</b></p>

| Tarefa Avaliada | Instrução Fornecida | Ação Executada pelo Usuário (*Think-Aloud*) | Resultado | Tempo de Execução |
| :--- | :--- | :--- | :---: | :---: |
| **Tarefa 1: Busca Avançada** | *"Encontre concursos abertos utilizando os filtros de busca avançada."* | Verbalizou os critérios de pesquisa (Região DF e área da saúde) e tocou em `[Filtrar Concursos]`. | **Sucesso Autônomo** | ~20 s |
| **Tarefa 2: Seleção para Confronto** | *"Selecione dois certames da lista para comparar."* | Apontou para as caixas de seleção dos dois primeiros editais e visualizou a resposta dinâmica da tira `[2 editais selecionados - Comparar Agora]`. | **Sucesso Autônomo** | ~30 s |
| **Tarefa 3: Matriz Comparativa e Exportação** | *"Confronte os dados na matriz lado a lado e gere o PDF."* | Analisou as colunas comparativas dos editais selecionados, tocou no botão de rodapé `[Exportar PDF]` e confirmou o fechamento da notação dinâmica de sucesso. | **Sucesso Autônomo** | ~25 s |

<p align="center" style="font-size: 0.85em; margin-top: -0.6em;"><b>Fonte:</b> Daniel da Silva Batista (2026).</p>

</div>

- **Clareza e Usabilidade:** Afirmou que não sentiu nenhuma confusão e que o fluxo de pensamento não foi interrompido em nenhuma das telas.
- **Dificuldades ou Hesitações:** Declarou que os passos são fáceis de assimilar e que as peças móveis comunicam bem as respostas da interface.
- **Sugestões de Reprojeto:** Informou que achou a estrutura bem resolvida e que não faria acréscimos ou alterações no modelo de baixa fidelidade.

---

## 6. Relato dos Resultados da Avaliação do Protótipo de Papel (Barbosa e Silva, 2021, p. 309)

Conforme a estrutura normativa preconizada por **Barbosa et al. (2021, Subseção 11.7.5, p. 279 e Subseção 12.1, p. 309)**, esta seção consolida o **Relato dos Resultados** da avaliação empírica do Protótipo de Papel (TAR-01 e TAR-02), integrando a autoinspeção analítica preliminar, o teste-piloto e as três sessões de teste de usabilidade conduzidas com usuários reais representativos do Perfil 1 (Candidato/Concurseiro).

### 6.1 Objetivos da Avaliação
* Avaliar empiricamente a navegabilidade, as affordances e o fluxo de telas das tarefas prioritárias (`TAR-01` e `TAR-02`) em baixa fidelidade, antes de avançar para a modelagem interativa digital ou implementação de software.
* Constatar se os filtros da Busca Avançada e a disposição das colunas da Matriz Comparativa refletem o modelo mental e o vocabulário real dos concurseiros.
* Identificar precocemente dúvidas de interface, desvios de rota e oportunidades de melhoria ergonômica para subsidiar o design no protótipo digital de alta fidelidade (Nível 3).

### 6.2 Escopo da Avaliação
* **Artefatos Analisados:** Protótipo de Papel manual de autoria de Daniel da Silva Batista, composto por 3 telas em papel sulfite A4 com peças móveis e sobreposições dinâmicas (barras flutuantes e modais de confirmação).
* **Tarefas Contempladas:** [TAR-01 — Parametrizar busca avançada multicritério e comparar editais concorrentes lado a lado](../../analise-de-requisitos/analise-de-tarefas/hta.md#31-tarefa-01-parametrizar-busca-avancada-multicriterio-e-comparar-editais-concorrentes-lado-a-lado-tar-01) e [TAR-02 — Montar e exportar caderno/relatório](../../analise-de-requisitos/analise-de-tarefas/hta.md#32-tarefa-02-montar-e-exportar-caderno-personalizado-de-provas-anteriores-com-gabarito-comentado-integrado-tar-02).
* **Nível de Fidelidade:** Baixa fidelidade em papel (*Paper Prototyping*).

### 6.3 Breve Descrição do Método Utilizado
* **Teste de Usabilidade com Prototipação em Papel (*Paper Prototyping*, Snyder, 2003):** Condução de ensaios com participantes reais operando as peças físicas desenhadas.
* **Técnica do Computador Humano (*Wizard of Oz*):** Simulação mecânica em tempo real na qual o avaliador (Daniel Batista) movimentou fisicamente as folhas, menus e tiras sobrepostas em resposta estrita ao toque dos dedos dos usuários, sem antecipar caminhos nem fornecer dicas de navegação.
* **Protocolo de Pensar em Voz Alta (*Think-Aloud Protocol*, Ericsson e Simon, 1993):** Coleta das verbalizações contínuas dos usuários durante a interação, captando dúvidas imediatas e reflexões ergonômicas.
* **Calibração Prévia por Teste-Piloto:** Realização e registro de sessão-piloto com usuário simulado (duração de 03m 41s) para calibração do sincronismo mecânico e das falas do moderador.

### 6.4 Conjunto de Diretrizes e Critérios Avaliados
* **10 Heurísticas de Usabilidade de Nielsen (1993):** Especialmente Visibilidade do Estado do Sistema, Correspondência com o Mundo Real, Prevenção de Erros e Reconhecimento em vez de Memorização.
* **Metas de Usabilidade (Barbosa et al., 2021):** Eficácia de conclusão da tarefa (100% de sucesso autônomo), eficiência temporal média (~33s na busca, ~47s na comparação e ~35s na exportação) e satisfação subjetiva dos concurseiros.
* **Checklist Ergonômico de Baixa Fidelidade (Snyder, 2003):** 10 critérios normativos aplicados na autoinspeção analítica (Tabela 2).

### 6.5 Número e Perfil dos Avaliadores e Participantes
* **Avaliador/Moderador e Computador Humano (1 integrante):** Daniel da Silva Batista (Estudante de Engenharia de Software da UnB / Grupo 07 IHC).
* **Participantes Convocados (3 participantes representativos do Perfil 1 – Candidato/Concurseiro):**
  * **Participante 1 (Sessão 1):** Mulher, 52 anos, graduada em Pedagogia com especialização em Psicopedagogia, concurseira ativa em busca de recolocação profissional, usuária habitual de computador pessoal. Termo de Consentimento (TCLE) aceito formalmente em vídeo.
  * **Participante 2 (Sessão 2):** Mulher, 21 anos, estudante universitária, concurseira ativa, usuária habitual de desktop/notebook. Termo de Consentimento (TCLE) aceito formalmente em vídeo.
  * **Participante 3 (Sessão 3):** Homem, jovem adulto, estudante e concurseiro iniciante, usuário habitual de computador pessoal. Termo de Consentimento (TCLE) aceito formalmente em vídeo.

### 6.6 Lista de Problemas Encontrados e Oportunidades de Reprojeto para o Protótipo de Alta Fidelidade

Em conformidade com **Barbosa e Silva (2021, p. 309)** e a padronização do Storyboard, a Tabela 9 consolida o confronto entre os **resultados esperados** e o **comportamento observado** nas três sessões de teste, orientando as ações de reprojeto para o protótipo digital de alta fidelidade (Nível 3):

<div align="center" markdown="1">

<p align="center"><b>Tabela 9: Síntese de Confronto entre Comportamento Observado e Resultados Esperados</b></p>

| ID | Contexto da Interação | Comportamento Observado nos Testes | Resultado Esperado pelo Projeto | Alteração Proposta / Encaminhamento para Alta Fidelidade | Origem da Proposta |
| :---: | :--- | :--- | :--- | :--- | :---: |
| `OPO-PP01` | **Tela 2:** Listagem de Editais Filtrados e Acionamento da Comparação | Participantes marcaram os checkboxes com facilidade; notaram a tira dinâmica `[2 selecionados]`, mas apontaram que em listagens extensas o botão de rodapé pode exigir rolagem excessiva. | Identificação imediata da affordance de seleção e percepção rápida do botão de ação primária sem rolagem forçada. | Projetar no protótipo de alta fidelidade uma **barra flutuante inferior (*sticky bar*)** fixa na base da janela, surgindo com contagem dinâmica `(2/3)` assim que o primeiro edital for selecionado. | Participante 1 e Avaliador |
| `OPO-PP02` | **Tela 3:** Matriz Comparativa Lado a Lado de Editais | Todos os usuários elogiaram a visualização paralela; a Participante 1 atentou que turnos de prova compatíveis (manhã vs tarde) demandam tempo de deslocamento físico em Brasília, sugerindo alertas expressos de choque de horários. | Leitura imediata dos critérios comparativos (vagas, salários, matérias comuns e datas), facilitando a tomada de decisão em menos de 1 minuto. | Adicionar no protótipo de alta fidelidade **tags cromáticas de status**: verde (*"Turnos Compatíveis"*) ou vermelha com ícone de alerta (*"Conflito: Provas no mesmo turno"*), auxiliando a deliberação rápida do candidato. | Participante 1 e Planejamento |
| `VAL-PP01` | **Tela 1:** Parametrização da Busca Avançada Multicritério | Os 3 participantes compreenderam a combinação simultânea dos filtros (UF, carreira e nível de escolaridade) e tocaram no botão primário sem qualquer hesitação. Tempo médio: 33 s. | Aderência imediata ao modelo mental, parametrização autônoma em até 60 s e ausência de dúvidas sobre os seletores. | Manter a arquitetura da informação validada; incluir componentes visuais de *chips/tags* removíveis para filtros ativos no topo da listagem (`OPO-E01`). | Validado (P1, P2 e P3) |
| `VAL-PP02` | **Tela 3:** Exportação do Relatório Comparativo em PDF | Todos os usuários localizaram prontamente o botão `[Exportar PDF]` no rodapé da matriz e assimilaram imediatamente o modal sobreposto de confirmação de sucesso. | Conclusão autônoma da exportação em até 45 s, com feedback inequívoco de sucesso pelo Computador Humano. | Manter a hierarquia cromática de destaque do botão no protótipo digital e desenhar modal com atalhos de download direto e fechamento acessível. | Validado (P1, P2 e P3) |

<p align="center" style="font-size: 0.85em; margin-top: -0.6em;"><b>Fonte:</b> Daniel da Silva Batista (2026), padronizado com Barbosa et al. (2021).</p>

</div>

Seguindo a estrutura analítica clássica de **Barbosa e Silva (2021, p. 309)** e a escala de severidade de **Nielsen (1993)**, cada oportunidade de reprojeto é detalhada a seguir nos seus cinco atributos fundamentais:

#### • OPO-PP01: Posicionamento Fixo da Barra de Comparação (*Sticky Bottom Bar*)
* **Local onde ocorre:** Tela 2 — Listagem de Resultados Filtrados.
* **Descrição do problema:** Na folha em papel, o botão de comparação surge abaixo dos editais. Caso a lista seja longa, o usuário pode ter que rolar até o fim para encontrar o botão.
* **Diretriz violada:** Visibilidade do Estado do Sistema e Affordance (Nielsen, 1993).
* **Severidade:** **2 – Simples (Médio)**.
* **Ação de Reprojeto (Alta Fidelidade):** No protótipo digital de alta fidelidade, criar uma **barra flutuante inferior (*sticky bar*)** que desliza suavemente na tela no momento em que o primeiro edital for selecionado, exibindo a contagem `(2/3)` e o botão de ação rápida.

#### • OPO-PP02: Destaque de Alerta para Choque de Horários de Prova
* **Local onde ocorre:** Tela 3 — Matriz Comparativa Lado a Lado.
* **Descrição do problema:** As datas de prova do TRF (Manhã) e MGI (Tarde) são compatíveis porque ocorrem em turnos distintos, mas os participantes sugeriram que a interface avise expressamente caso haja choque de turnos.
* **Diretriz violada:** Prevenção de Erros (Nielsen, 1993).
* **Severidade:** **2 – Simples (Médio)**.
* **Ação de Reprojeto (Alta Fidelidade):** Desenhar no protótipo digital de alta fidelidade uma *tag* de status: verde (*"Turnos Compatíveis"*) ou vermelha com ícone de alerta (*"Conflito de Horário: Provas no mesmo turno"*).

Para assegurar o fechamento do ciclo de design formativo entre a Etapa 5 e a Etapa 6, a Tabela 10 estabelece o cronograma de implementação das oportunidades no protótipo digital de alta fidelidade:

<div align="center" markdown="1">

<p align="center"><b>Tabela 10: Cronograma de Implementação das Ações de Reprojeto na Alta Fidelidade (Nível 3)</b></p>

| ID | Ação de Reprojeto na Alta Fidelidade | Origem da Oportunidade | Responsável | Data Prevista | Status |
| :---: | :--- | :--- | :---: | :---: | :---: |
| `REP-01` | Modelagem do componente de barra flutuante inferior (*sticky bar*) com contagem dinâmica `(2/3)` e botão `[Comparar Agora]` | `OPO-PP01` (Entrevistas 1 e 2) | Daniel da Silva Batista | 03/11/2026 | Em andamento |
| `REP-02` | Implementação das tags de status de compatibilidade de turnos de prova na matriz comparativa (verde/vermelho) | `OPO-PP02` (Entrevista 1 / Sugestão P1) | Daniel da Silva Batista | 03/11/2026 | Em andamento |
| `REP-03` | Inclusão de chips visuais removíveis para filtros aplicados no cabeçalho dos resultados | `OPO-E01` (Avaliação do Storyboard) | Daniel da Silva Batista | 04/11/2026 | Planejado |
| `REP-04` | Criação de tela informativa de estado vazio com sugestões de afrouxamento de critérios | `OPO-D01` (Autoinspeção da HTA) | Daniel da Silva Batista | 04/11/2026 | Planejado |

<p align="center" style="font-size: 0.85em; margin-top: -0.6em;"><b>Fonte:</b> Daniel da Silva Batista (2026).</p>

</div>

---

## 7. Referências Bibliográficas

> [1] BARBOSA, Simone Diniz Junqueira et al. *Interação Humano-Computador e Experiência do Usuário*. Rio de Janeiro: Autopublicação, 2021. ISBN: 978-65-00-19677-1.  
> [2] ERICSSON, K. Anders; SIMON, Herbert A. *Protocol Analysis: Verbal Reports as Data*. Cambridge: MIT Press, 1993.  
> [3] MAYHEW, Deborah J. *The Usability Engineering Lifecycle: A Practitioner's Handbook for User Interface Design*. San Francisco: Morgan Kaufmann, 1999.  
> [4] NIELSEN, Jakob. *Usability Engineering*. San Francisco: Morgan Kaufmann, 1993.  
> [5] SNYDER, Carolyn. *Paper Prototyping: The Fast and Easy Way to Design and Refine User Interfaces*. San Francisco: Morgan Kaufmann, 2003.  

---

## 8. Histórico de Versões

<div align="center" markdown="1">

| Versão | Data | Descrição | Autor(es) |
| :---: | :---: | :--- | :---: |
| `1.0` | 02/11/2026 | Elaboração inicial do artefato individual de Nível 2 (Protótipo de Papel) com as 3 telas manuais, autoinspeção analítica, teste-piloto e propostas de reprojeto. | Daniel da Silva Batista |
| `1.1` | 02/11/2026 | Inclusão do registro audiovisual, player incorporado e dados da Entrevista 1 de validação empírica com usuária real. | Daniel da Silva Batista |
| `1.2` | 02/11/2026 | Inclusão do registro audiovisual, player incorporado e dados da Entrevista 2 com participante universitária. | Daniel da Silva Batista |
| `1.3` | 02/11/2026 | Inclusão do registro audiovisual, player incorporado da Entrevista 3 e consolidação integral dos testes empíricos com os 3 participantes reais. | Daniel da Silva Batista |
| `1.4` | 03/11/2026 | Correção do link, player incorporado e duração do vídeo do Teste-Piloto do Protótipo de Papel (youtu.be/dmLr099zT0Y - 03m 41s). | Daniel da Silva Batista |
| `1.5` | 03/11/2026 | Reestruturação integral da Seção 6 de 6.1 a 6.6 segundo Barbosa e Silva (2021, p. 309), incorporando a Tabela 9 (Confronto entre Comportamento Observado e Resultados Esperados) padronizada com o Storyboard e cronograma de reprojeto para alta fidelidade (Tabela 10). | Daniel da Silva Batista |

<p align="center" style="font-size: 0.85em; margin-top: -0.6em;"><b>Fonte:</b> Daniel da Silva Batista (2026).</p>

</div>
