<div align="center" markdown="1">

<p align="center"><b>Tabela de Contribuição</b></p>

| Membro | Contribuição |
| :--- | :--- |
| Pedro Rocha | Concepção e desenho manual do Protótipo de Papel da TAR-04 (Cronograma de Estudo), elaboração das peças dinâmicas e post-its (listas suspensas de editais, dias e horários e etiquetas de concurso aplicadas na grade), autoinspeção analítica com lista de verificação, condução e gravação do teste-piloto e das sessões com usuários, consolidação do relato individual e propostas de reprojeto para o protótipo digital de alta fidelidade (Nível 3). |
| Claude (Anthropic) | Auxílio na estruturação textual, organização das tabelas, modais de zoom e formatação em Markdown (conforme Política de Uso de IA). |

<p align="center" style="font-size: 0.85em; margin-top: -0.6em;"><b>Fonte:</b> Pedro Rocha (2026).</p>

</div>

# Avaliação e Relato Individual — Protótipo de Papel (Pedro Rocha)

## 1. Identificação do Integrante e Escopo de Atuação

Este artefato reúne o ciclo de **avaliação formativa de Nível 2 (Protótipo de Papel)** conduzido individualmente por **Pedro Rocha** no âmbito do projeto **PCI Concursos**, em conformidade com o framework DECIDE (*Barbosa et al.*, 2021), a técnica do Computador Humano (*Snyder*, 2003) e as diretrizes do plano de ensino da disciplina de Interação Humano-Computador (*Sales*, 2026).

Dentre as tarefas analisadas pelo integrante (`TAR-03` e `TAR-04`), a **TAR-04** foi escolhida como objeto deste protótipo, dando continuidade ao **Storyboard SB-02**.

<div align="center" markdown="1">

<p align="center"><b>Tabela 1: Resumo do Escopo Individual de Pedro Rocha (Nível 2)</b></p>

| Atributo | Detalhamento |
| :--- | :--- |
| **Integrante Responsável** | Pedro Rocha |
| **Perfil de Usuário Focado** | [Perfil 1 — Candidato / Concurseiro](../../analise-de-requisitos/perfil-de-usuario.md) |
| **Cenário de Uso** | [CEN-XX — *(inserir cenário vinculado à TAR-04)*](../../analise-de-requisitos/cenarios.md) |
| **Tarefas Analisadas pelo Integrante** | [TAR-03 — *(inserir título)*](../../analise-de-requisitos/analise-de-tarefas/hta.md) e [TAR-04 — *(inserir título)*](../../analise-de-requisitos/analise-de-tarefas/hta.md) |
| **Tarefa Escolhida para o Protótipo** | [TAR-04 — Montar cronograma semanal de estudo vinculando editais a dias e horários](../../analise-de-requisitos/analise-de-tarefas/hta.md) |
| **Storyboard de Origem** | [SB-02](../storyboard/) |
| **Tipo de Artefato** | Protótipo de baixa fidelidade desenhado em papel com peças móveis e sobreposições mecânicas (*Paper Prototyping*) |
| **Técnica de Avaliação** | Simulação mecânica com o "Computador Humano" (*Wizard of Oz*) e Protocolo de Pensar em Voz Alta (*Think-Aloud*) |
| **Escopo da Inspeção** | Autoinspeção analítica com lista de verificação ergonômica de Nielsen (1993) e Snyder (2003) |
| **Participantes das Sessões** | Participantes representativos do Perfil 1 (Candidato/Concurseiro) |

<p align="center" style="font-size: 0.85em; margin-top: -0.6em;"><b>Fonte:</b> Pedro Rocha (2026).</p>

</div>

---

## 2. Apresentação das Peças do Protótipo de Papel

O protótipo de baixa fidelidade foi confeccionado manualmente em uma folha de papel sulfite A4 (tela base) e tiras de papel/post-its destacáveis que representam as listas suspensas e as etiquetas aplicadas na grade, materializando os conceitos funcionais concebidos na Análise de Tarefas (`TAR-04`) e no Storyboard (`SB-02`).

A tela base apresenta o cabeçalho **PCI Concursos**, o título **Cronograma de Estudo**, um painel lateral com três seletores (`▽ Selecione o edital...`, `▽ Selecione o dia`, `▽ Selecione horário...`), os botões `[ APLICAR ]` e `[ LIMPAR ]`, o botão `[ LIMPAR CRONOGRAMA ]` acima da grade e uma **grade horária semanal** com colunas `SEG`, `TER`, `QUA`, `QUI`, `SEX`, `SAB` e `DOM` e linhas de horário de `00:00` a `00:00`, em intervalos de 2 horas.

O fluxo é composto por **três etapas de seleção**, seguidas da **aplicação da seleção no cronograma**, e por duas ações de reversão: **limpar pesquisa** e **limpar cronograma**. O participante interage apontando com o dedo, enquanto o avaliador atua como *Computador Humano*, sobrepondo as peças em resposta estrita a cada ação (Snyder, 2003).

### 2.1 Tela Base: Cronograma de Estudo em Estado Inicial

Estado inicial da interface, com os três seletores fechados e a grade horária vazia.

<div align="center">

<div style="position: relative; display: inline-block; max-width: 95%;">
  <a href="javascript:void(0)" onclick="openModalPP('pp01-modal')" style="display: block; cursor: zoom-in;" title="Clique na imagem para expandir em Tela Cheia">
    <img src="../../../assets/images/prototipo-papel/pedro-rocha/prototipo-papel-tela-01.jpg" alt="Protótipo de Papel - Tela Base do Cronograma de Estudo" style="max-width: 100%; height: auto; border: 1px solid #d0d7de; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.08); margin: 12px auto; display: block;">
  </a>
</div>

<div style="margin: 10px 0 16px 0; display: flex; gap: 10px; justify-content: center; flex-wrap: wrap;">
  <button onclick="openModalPP('pp01-modal')" class="md-button md-button--primary" style="font-size: 0.82em; padding: 5px 16px; border-radius: 20px; cursor: pointer; display: inline-flex; align-items: center; gap: 6px;">
    <span>🔍</span> <b>Zoom / Tela Cheia</b>
  </button>
</div>

<p align="center"><b>Figura 1:</b> Protótipo de Papel — Tela Base do Cronograma de Estudo (estado inicial)</p>
<p align="center" style="font-size: 0.85em; margin-top: -0.6em;"><b>Fonte:</b> Elaborado por Pedro Rocha à mão livre em papel sulfite (2026).</p>

</div>

<div id="pp01-modal" class="pp-modal" style="display: none; position: fixed; z-index: 999999; left: 0; top: 0; width: 100vw; height: 100vh; background-color: rgba(15, 23, 42, 0.95); backdrop-filter: blur(5px); align-items: center; justify-content: center; flex-direction: column;" onclick="closeModalPP('pp01-modal')">
  <div style="position: absolute; top: 16px; right: 24px; display: flex; gap: 12px; z-index: 1000000;" onclick="event.stopPropagation()">
    <a href="../../../assets/images/prototipo-papel/pedro-rocha/prototipo-papel-tela-01.jpg" download="Prototipo_Papel_Tela01_PedroRocha.jpg" class="md-button md-button--primary" style="font-size: 0.85em; padding: 6px 16px; border-radius: 6px; text-decoration: none; color: white;">📥 Baixar</a>
    <button onclick="closeModalPP('pp01-modal')" class="md-button" style="font-size: 0.85em; padding: 6px 16px; border-radius: 6px; background: #e11d48; color: white; border: none; cursor: pointer;">✕ Fechar (ESC)</button>
  </div>
  <div style="max-width: 95vw; max-height: 88vh; display: flex; align-items: center; justify-content: center; overflow: auto; padding: 10px;" onclick="event.stopPropagation()">
    <img src="../../../assets/images/prototipo-papel/pedro-rocha/prototipo-papel-tela-01.jpg" alt="Tela Base em Tela Cheia" style="max-width: 100%; max-height: 86vh; object-fit: contain; border-radius: 8px; box-shadow: 0 12px 40px rgba(0,0,0,0.6);">
  </div>
  <p style="color: #94a3b8; font-size: 0.85em; margin-top: 8px;">Pressione <b>ESC</b> ou clique fora da imagem para fechar.</p>
</div>

---

### 2.2 Etapa 1 de Seleção: Escolha do Edital

Ao tocar em `▽ Selecione o edital...`, o Computador Humano sobrepõe o post-it com a lista suspensa de editais disponíveis: `Polícia Civil`, `Banco Central`, `TCU`, `Prefeitura`, `STJ` e `SEMOB`.

<div align="center">

<div style="position: relative; display: inline-block; max-width: 95%;">
  <a href="javascript:void(0)" onclick="openModalPP('pp02-modal')" style="display: block; cursor: zoom-in;" title="Clique na imagem para expandir em Tela Cheia">
    <img src="../../../assets/images/prototipo-papel/pedro-rocha/prototipo-papel-tela-02.jpg" alt="Protótipo de Papel - Lista suspensa de editais" style="max-width: 100%; height: auto; border: 1px solid #d0d7de; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.08); margin: 12px auto; display: block;">
  </a>
</div>

<div style="margin: 10px 0 16px 0; display: flex; gap: 10px; justify-content: center; flex-wrap: wrap;">
  <button onclick="openModalPP('pp02-modal')" class="md-button md-button--primary" style="font-size: 0.82em; padding: 5px 16px; border-radius: 20px; cursor: pointer; display: inline-flex; align-items: center; gap: 6px;">
    <span>🔍</span> <b>Zoom / Tela Cheia</b>
  </button>
</div>

<p align="center"><b>Figura 2:</b> Protótipo de Papel — Etapa 1: Lista Suspensa de Editais Sobreposta</p>
<p align="center" style="font-size: 0.85em; margin-top: -0.6em;"><b>Fonte:</b> Elaborado por Pedro Rocha à mão livre em papel sulfite (2026).</p>

</div>

<div id="pp02-modal" class="pp-modal" style="display: none; position: fixed; z-index: 999999; left: 0; top: 0; width: 100vw; height: 100vh; background-color: rgba(15, 23, 42, 0.95); backdrop-filter: blur(5px); align-items: center; justify-content: center; flex-direction: column;" onclick="closeModalPP('pp02-modal')">
  <div style="position: absolute; top: 16px; right: 24px; display: flex; gap: 12px; z-index: 1000000;" onclick="event.stopPropagation()">
    <a href="../../../assets/images/prototipo-papel/pedro-rocha/prototipo-papel-tela-02.jpg" download="Prototipo_Papel_Tela02_PedroRocha.jpg" class="md-button md-button--primary" style="font-size: 0.85em; padding: 6px 16px; border-radius: 6px; text-decoration: none; color: white;">📥 Baixar</a>
    <button onclick="closeModalPP('pp02-modal')" class="md-button" style="font-size: 0.85em; padding: 6px 16px; border-radius: 6px; background: #e11d48; color: white; border: none; cursor: pointer;">✕ Fechar (ESC)</button>
  </div>
  <div style="max-width: 95vw; max-height: 88vh; display: flex; align-items: center; justify-content: center; overflow: auto; padding: 10px;" onclick="event.stopPropagation()">
    <img src="../../../assets/images/prototipo-papel/pedro-rocha/prototipo-papel-tela-02.jpg" alt="Etapa 1 em Tela Cheia" style="max-width: 100%; max-height: 86vh; object-fit: contain; border-radius: 8px; box-shadow: 0 12px 40px rgba(0,0,0,0.6);">
  </div>
  <p style="color: #94a3b8; font-size: 0.85em; margin-top: 8px;">Pressione <b>ESC</b> ou clique fora da imagem para fechar.</p>
</div>

---

### 2.3 Etapa 2 de Seleção: Escolha do Dia

Ao tocar em `▽ Selecione o dia`, é sobreposta a lista de dias da semana: `Segunda`, `Terça`, `Quarta`, `Quinta`, `Sexta` e `Sábado`.

<div align="center">

<div style="position: relative; display: inline-block; max-width: 95%;">
  <a href="javascript:void(0)" onclick="openModalPP('pp03-modal')" style="display: block; cursor: zoom-in;" title="Clique na imagem para expandir em Tela Cheia">
    <img src="../../../assets/images/prototipo-papel/pedro-rocha/prototipo-papel-tela-03.jpg" alt="Protótipo de Papel - Lista suspensa de dias" style="max-width: 100%; height: auto; border: 1px solid #d0d7de; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.08); margin: 12px auto; display: block;">
  </a>
</div>

<div style="margin: 10px 0 16px 0; display: flex; gap: 10px; justify-content: center; flex-wrap: wrap;">
  <button onclick="openModalPP('pp03-modal')" class="md-button md-button--primary" style="font-size: 0.82em; padding: 5px 16px; border-radius: 20px; cursor: pointer; display: inline-flex; align-items: center; gap: 6px;">
    <span>🔍</span> <b>Zoom / Tela Cheia</b>
  </button>
</div>

<p align="center"><b>Figura 3:</b> Protótipo de Papel — Etapa 2: Lista Suspensa de Dias da Semana Sobreposta</p>
<p align="center" style="font-size: 0.85em; margin-top: -0.6em;"><b>Fonte:</b> Elaborado por Pedro Rocha à mão livre em papel sulfite (2026).</p>

</div>

<div id="pp03-modal" class="pp-modal" style="display: none; position: fixed; z-index: 999999; left: 0; top: 0; width: 100vw; height: 100vh; background-color: rgba(15, 23, 42, 0.95); backdrop-filter: blur(5px); align-items: center; justify-content: center; flex-direction: column;" onclick="closeModalPP('pp03-modal')">
  <div style="position: absolute; top: 16px; right: 24px; display: flex; gap: 12px; z-index: 1000000;" onclick="event.stopPropagation()">
    <a href="../../../assets/images/prototipo-papel/pedro-rocha/prototipo-papel-tela-03.jpg" download="Prototipo_Papel_Tela03_PedroRocha.jpg" class="md-button md-button--primary" style="font-size: 0.85em; padding: 6px 16px; border-radius: 6px; text-decoration: none; color: white;">📥 Baixar</a>
    <button onclick="closeModalPP('pp03-modal')" class="md-button" style="font-size: 0.85em; padding: 6px 16px; border-radius: 6px; background: #e11d48; color: white; border: none; cursor: pointer;">✕ Fechar (ESC)</button>
  </div>
  <div style="max-width: 95vw; max-height: 88vh; display: flex; align-items: center; justify-content: center; overflow: auto; padding: 10px;" onclick="event.stopPropagation()">
    <img src="../../../assets/images/prototipo-papel/pedro-rocha/prototipo-papel-tela-03.jpg" alt="Etapa 2 em Tela Cheia" style="max-width: 100%; max-height: 86vh; object-fit: contain; border-radius: 8px; box-shadow: 0 12px 40px rgba(0,0,0,0.6);">
  </div>
  <p style="color: #94a3b8; font-size: 0.85em; margin-top: 8px;">Pressione <b>ESC</b> ou clique fora da imagem para fechar.</p>
</div>

---

### 2.4 Etapa 3 de Seleção: Escolha do Horário

Ao tocar em `▽ Selecione horário...`, é sobreposta a lista de faixas horárias de 1 hora: `18:00 às 19:00`, `19:00 às 20:00`, `20:00 às 21:00`, `21:00 às 22:00`, `22:00 às 23:00` e `23:00 às 00:00`.

<div align="center">

<div style="position: relative; display: inline-block; max-width: 95%;">
  <a href="javascript:void(0)" onclick="openModalPP('pp04-modal')" style="display: block; cursor: zoom-in;" title="Clique na imagem para expandir em Tela Cheia">
    <img src="../../../assets/images/prototipo-papel/pedro-rocha/prototipo-papel-tela-04.jpg" alt="Protótipo de Papel - Lista suspensa de horários" style="max-width: 100%; height: auto; border: 1px solid #d0d7de; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.08); margin: 12px auto; display: block;">
  </a>
</div>

<div style="margin: 10px 0 16px 0; display: flex; gap: 10px; justify-content: center; flex-wrap: wrap;">
  <button onclick="openModalPP('pp04-modal')" class="md-button md-button--primary" style="font-size: 0.82em; padding: 5px 16px; border-radius: 20px; cursor: pointer; display: inline-flex; align-items: center; gap: 6px;">
    <span>🔍</span> <b>Zoom / Tela Cheia</b>
  </button>
</div>

<p align="center"><b>Figura 4:</b> Protótipo de Papel — Etapa 3: Lista Suspensa de Faixas Horárias Sobreposta</p>
<p align="center" style="font-size: 0.85em; margin-top: -0.6em;"><b>Fonte:</b> Elaborado por Pedro Rocha à mão livre em papel sulfite (2026).</p>

</div>

<div id="pp04-modal" class="pp-modal" style="display: none; position: fixed; z-index: 999999; left: 0; top: 0; width: 100vw; height: 100vh; background-color: rgba(15, 23, 42, 0.95); backdrop-filter: blur(5px); align-items: center; justify-content: center; flex-direction: column;" onclick="closeModalPP('pp04-modal')">
  <div style="position: absolute; top: 16px; right: 24px; display: flex; gap: 12px; z-index: 1000000;" onclick="event.stopPropagation()">
    <a href="../../../assets/images/prototipo-papel/pedro-rocha/prototipo-papel-tela-04.jpg" download="Prototipo_Papel_Tela04_PedroRocha.jpg" class="md-button md-button--primary" style="font-size: 0.85em; padding: 6px 16px; border-radius: 6px; text-decoration: none; color: white;">📥 Baixar</a>
    <button onclick="closeModalPP('pp04-modal')" class="md-button" style="font-size: 0.85em; padding: 6px 16px; border-radius: 6px; background: #e11d48; color: white; border: none; cursor: pointer;">✕ Fechar (ESC)</button>
  </div>
  <div style="max-width: 95vw; max-height: 88vh; display: flex; align-items: center; justify-content: center; overflow: auto; padding: 10px;" onclick="event.stopPropagation()">
    <img src="../../../assets/images/prototipo-papel/pedro-rocha/prototipo-papel-tela-04.jpg" alt="Etapa 3 em Tela Cheia" style="max-width: 100%; max-height: 86vh; object-fit: contain; border-radius: 8px; box-shadow: 0 12px 40px rgba(0,0,0,0.6);">
  </div>
  <p style="color: #94a3b8; font-size: 0.85em; margin-top: 8px;">Pressione <b>ESC</b> ou clique fora da imagem para fechar.</p>
</div>

---

### 2.5 Aplicação da Seleção no Cronograma

Com edital, dia e horário escolhidos, o participante toca em `[ APLICAR ]`. O Computador Humano posiciona então a etiqueta de papel com o **nome do concurso selecionado** na célula correspondente da grade horária. No exemplo registrado, a seleção `TCU` + `Sexta` + `20:00` resulta na etiqueta **TCU** posicionada na coluna `SEX`, na linha das `20:00`.

<div align="center">

<div style="position: relative; display: inline-block; max-width: 95%;">
  <a href="javascript:void(0)" onclick="openModalPP('pp05-modal')" style="display: block; cursor: zoom-in;" title="Clique na imagem para expandir em Tela Cheia">
    <img src="../../../assets/images/prototipo-papel//prototipopedro1.jpg" alt="Protótipo de Papel - Concurso TCU aplicado na grade horária" style="max-width: 100%; height: auto; border: 1px solid #d0d7de; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.08); margin: 12px auto; display: block;">
  </a>
</div>

<div style="margin: 10px 0 16px 0; display: flex; gap: 10px; justify-content: center; flex-wrap: wrap;">
  <button onclick="openModalPP('pp05-modal')" class="md-button md-button--primary" style="font-size: 0.82em; padding: 5px 16px; border-radius: 20px; cursor: pointer; display: inline-flex; align-items: center; gap: 6px;">
    <span>🔍</span> <b>Zoom / Tela Cheia</b>
  </button>
</div>

<p align="center"><b>Figura 5:</b> Protótipo de Papel — Aplicação da Seleção: Concurso "TCU" Inserido na Grade Horária (Sexta, 20:00)</p>
<p align="center" style="font-size: 0.85em; margin-top: -0.6em;"><b>Fonte:</b> Elaborado por Pedro Rocha à mão livre em papel sulfite (2026).</p>

</div>

<div id="pp05-modal" class="pp-modal" style="display: none; position: fixed; z-index: 999999; left: 0; top: 0; width: 100vw; height: 100vh; background-color: rgba(15, 23, 42, 0.95); backdrop-filter: blur(5px); align-items: center; justify-content: center; flex-direction: column;" onclick="closeModalPP('pp05-modal')">
  <div style="position: absolute; top: 16px; right: 24px; display: flex; gap: 12px; z-index: 1000000;" onclick="event.stopPropagation()">
    <a href="../../../assets/images/prototipo-papel/pedro-rocha/prototipo-papel-tela-05.jpg" download="Prototipo_Papel_Tela05_PedroRocha.jpg" class="md-button md-button--primary" style="font-size: 0.85em; padding: 6px 16px; border-radius: 6px; text-decoration: none; color: white;">📥 Baixar</a>
    <button onclick="closeModalPP('pp05-modal')" class="md-button" style="font-size: 0.85em; padding: 6px 16px; border-radius: 6px; background: #e11d48; color: white; border: none; cursor: pointer;">✕ Fechar (ESC)</button>
  </div>
  <div style="max-width: 95vw; max-height: 88vh; display: flex; align-items: center; justify-content: center; overflow: auto; padding: 10px;" onclick="event.stopPropagation()">
    <img src="../../../assets/images/prototipo-papel/pedro-rocha/prototipo-papel-tela-05.jpg" alt="Aplicação em Tela Cheia" style="max-width: 100%; max-height: 86vh; object-fit: contain; border-radius: 8px; box-shadow: 0 12px 40px rgba(0,0,0,0.6);">
  </div>
  <p style="color: #94a3b8; font-size: 0.85em; margin-top: 8px;">Pressione <b>ESC</b> ou clique fora da imagem para fechar.</p>
</div>

---

### 2.6 Limpar Pesquisa e Limpar Cronograma

O protótipo oferece duas ações de reversão, simuladas pelo Computador Humano com a remoção das peças sobrepostas:

* **Limpar pesquisa — `[ LIMPAR ]`:** localizado ao lado de `[ APLICAR ]` no painel lateral, retorna os três seletores ao estado inicial (`▽ Selecione o edital...`, `▽ Selecione o dia`, `▽ Selecione horário...`), **sem alterar** as etiquetas já aplicadas na grade.
* **Limpar cronograma — `[ LIMPAR CRONOGRAMA ]`:** localizado acima da grade, remove **todas** as etiquetas de concurso aplicadas, devolvendo a grade horária ao estado vazio da Figura 1.


---

## 3. Autoinspeção Analítica do Protótipo de Papel

Antes da aplicação com os participantes, o autor realizou uma autoinspeção analítica das peças apresentadas nas Figuras 1 a 5, com base nas heurísticas de Nielsen (1993) e nos critérios de prototipação em papel de Snyder (2003):

<div align="center" markdown="1">

<p align="center"><b>Tabela 2: Lista de Verificação da Autoinspeção do Protótipo de Papel (Autor: Pedro Rocha)</b></p>

| Item | Critério Avaliado | Resposta | Justificativa / Observação |
| :---: | :--- | :---: | :--- |
| **1** | O protótipo caracteriza-se como baixa fidelidade autêntica em papel, sem componentes finais codificados? | **Sim** | Desenhado inteiramente à mão em folha A4, com listas suspensas e etiquetas em tiras de papel destacáveis (Snyder, 2003). |
| **2** | Os elementos interativos comunicam com clareza suas *affordances*? | **Sim** | Os seletores usam formato arredondado com o símbolo `▽` e texto-guia ("Selecione..."); os botões `[APLICAR]`, `[LIMPAR]` e `[LIMPAR CRONOGRAMA]` estão em retângulos destacados. |
| **3** | A sequência de peças cobre o fluxo completo planejado na TAR-04? | **Sim** | Cobre seleção de edital ➔ dia ➔ horário ➔ aplicação na grade ➔ limpeza da pesquisa ➔ limpeza do cronograma. |
| **4** | As peças móveis permitem ao simulador mecânico representar respostas e *feedbacks* rápidos? | **Sim** | As três listas suspensas e a etiqueta do concurso (ex.: "TCU") foram recortadas como peças independentes de troca rápida. |
| **5** | Os termos refletem a linguagem habitual dos concurseiros (correspondência com o mundo real)? | **Sim** | Usa nomes reais de órgãos/certames (Polícia Civil, Banco Central, TCU, STJ, SEMOB) e abreviações usuais de dias (SEG, TER, QUA...). |
| **6** | Há visibilidade do estado do sistema após a aplicação? | **Sim** | O nome do concurso aparece imediatamente na célula correspondente da grade (Figura 5). |
| **7** | As opções da lista de dias são consistentes com as colunas da grade? | **Não** | A lista suspensa vai de Segunda a Sábado, mas a grade possui a coluna `DOM`; não há como agendar estudo no domingo. |
| **8** | A granularidade e o intervalo da lista de horários são consistentes com as linhas da grade? | **Parcial** | A lista oferece faixas de 1 h (18:00–00:00), enquanto a grade é dividida em linhas de 2 h cobrindo as 24 h do dia; não fica claro em qual linha cai "19:00 às 20:00", e os horários de 00:00 a 18:00 não podem ser selecionados. Além disso, `00:00` aparece duas vezes na grade (primeira e última linha). |
| **9** | O sistema previne erros e permite desfazer ações (controle e liberdade do usuário)? | **Parcial** | `[LIMPAR]` e `[LIMPAR CRONOGRAMA]` têm rótulos semelhantes; o segundo apaga toda a grade sem pedir confirmação. Não há como remover ou editar uma única etiqueta aplicada. |
| **10** | O layout comporta o conteúdo aplicado e escala para múltiplos agendamentos? | **Parcial** | Nomes curtos (TCU, STJ) cabem na célula, mas nomes longos (Polícia Civil, Banco Central) tendem a não caber. Cada aplicação aceita apenas um dia e uma faixa horária, exigindo repetir as três seleções para cada bloco de estudo. |

<p align="center" style="font-size: 0.85em; margin-top: -0.6em;"><b>Fonte:</b> Pedro Rocha (2026).</p>

</div>

---

## 4. Teste-Piloto da Avaliação do Protótipo de Papel

Conforme Barbosa et al. (2021, p. 276 e 300), o teste-piloto é realizado previamente pelo avaliador com o propósito de verificar o tempo de condução da sessão, calibrar o sincronismo na troca mecânica das peças de papel e testar a legibilidade dos textos gravados pela câmera.

### 4.1 Dados Logísticos do Teste-Piloto

<div align="center" markdown="1">

<p align="center"><b>Tabela 3: Dados Logísticos do Teste-Piloto do Protótipo de Papel</b></p>

| Parâmetro | Detalhamento |
| :--- | :--- |
| **Data e Horário:** | |
| **Duração da Gravação:** | |
| **Avaliador Responsável:** | |
| **Ambiente de Gravação:** | |
| **Artefatos Exercitados:** | |
| **Custos Envolvidos:** | |

<p align="center" style="font-size: 0.85em; margin-top: -0.6em;"><b>Fonte:</b> Pedro Rocha (2026).</p>

</div>

### 4.2 Registro Audiovisual do Teste-Piloto

A gravação do teste-piloto com o protótipo de papel está disponível na íntegra a seguir, hospedada no YouTube com privacidade configurada como **Não Listado**:


> **Declaração de Descarte de Dados do Piloto:** Em conformidade com a literatura de IHC (Barbosa et al., 2021, p. 300), declara-se que os dados obtidos durante a sessão de teste-piloto foram utilizados exclusivamente para a calibração do roteiro de tarefas, verificação da iluminação da mesa e treino de agilidade na troca das peças, sendo formalmente descartados do cômputo final dos resultados com participantes reais.

---

## 5. Avaliação com Usuários (Sessões Empíricas)

### 5.1 Protocolo Ético e Caracterização dos Participantes

O recrutamento deve respeitar o [Perfil 1 — Candidato/Concurseiro](../../analise-de-requisitos/perfil-de-usuario.md). O Termo de Consentimento Livre e Esclarecido (TCLE) é formalizado verbalmente no início de cada gravação, assegurando que o foco do teste é o protótipo em papel e jamais a capacidade individual do participante.

<div align="center" markdown="1">

<p align="center"><b>Tabela 4: Perfil dos Participantes da Avaliação Empírica</b></p>

| Participante | Perfil Concurseiro | Idade / Ocupação | Rotina com Concursos | Dispositivo Habitual | Status do TCLE |
| :---: | :--- | :--- | :--- | :--- | :---: |
| **Participante 1** | Perfil 1 – Candidato | 22 Estudante e concurseiro | Diaria | Computador | Aprovado |
| **Participante 2** | Perfil 1 – Candidato | 22 Estudante e concurseiro | Diaria | Computador | Aprovado |
| **Participante 3** | Perfil 1 – Candidato | 22 Estudante e concurseiro | Diaria | Computador | |

<p align="center" style="font-size: 0.85em; margin-top: -0.6em;"><b>Fonte:</b> Pedro Rocha (2026).</p>

</div>

### 5.2 Registro Audiovisual das Entrevistas

<div align="center" markdown="1">

<p align="center"><b>Tabela 5: Registro Audiovisual das Entrevistas do Protótipo de Papel</b></p>

| Sessão | Entrevistador | Participante | Data e Horário | Duração | Link da Gravação |
| :---: | :--- | :---: | :---: | :---: | :--- |
| **Entrevista 1** | Pedro Rocha | Participante 1 | | | [Vídeo da Entrevista 1](https://youtu.be/vkxE8JK84CM) |
| **Entrevista 2** | Pedro Rocha | Participante 2 | | | [Vídeo da Entrevista 2](https://youtu.be/qrxfHdDRekc) |
| **Entrevista 3** | Pedro Rocha | Participante 3 | | | [Vídeo da Entrevista 3](https://youtu.be/ZLIZi7D4Nek) |


## 6. Relato dos Resultados da Avaliação do Protótipo de Papel (Barbosa e Silva, 2021, p. 309)

Conforme a estrutura normativa de **Barbosa et al. (2021, Subseção 11.7.5, p. 279 e Subseção 12.1, p. 309)**, esta seção consolida o **Relato dos Resultados** da avaliação do Protótipo de Papel da TAR-04, integrando a autoinspeção analítica, o teste-piloto e as sessões de teste com usuários representativos do Perfil 1 (Candidato/Concurseiro).

### 6.1 Objetivos da Avaliação
* Avaliar a navegabilidade, as *affordances* e o fluxo de seleção e aplicação da `TAR-04` em baixa fidelidade, antes de avançar para o protótipo digital.
* Verificar se a sequência edital ➔ dia ➔ horário ➔ aplicar reflete o modo como o concurseiro organiza sua rotina de estudos.
* Verificar se o usuário distingue as ações de limpar a pesquisa e limpar o cronograma.
* Identificar precocemente problemas de interface e oportunidades de melhoria para o protótipo digital de alta fidelidade (Nível 3).

### 6.2 Escopo da Avaliação
* **Artefatos Analisados:** Protótipo de Papel de autoria de Pedro Rocha, composto por 1 tela base em papel sulfite A4 com peças móveis (3 listas suspensas e etiquetas de concurso aplicadas na grade).
* **Tarefa Contemplada:** [TAR-04 — Montar cronograma semanal de estudo vinculando editais a dias e horários](../../analise-de-requisitos/analise-de-tarefas/hta.md), derivada do Storyboard `SB-02`.
* **Nível de Fidelidade:** Baixa fidelidade em papel (*Paper Prototyping*).

### 6.3 Breve Descrição do Método Utilizado
* **Teste de Usabilidade com Prototipação em Papel (*Paper Prototyping*, Snyder, 2003):** ensaios com participantes reais operando as peças físicas desenhadas.
* **Técnica do Computador Humano (*Wizard of Oz*):** o avaliador (Pedro Rocha) movimenta fisicamente as listas suspensas e etiquetas em resposta estrita ao toque dos participantes, sem antecipar caminhos nem fornecer dicas de navegação.
* **Protocolo de Pensar em Voz Alta (*Think-Aloud Protocol*, Ericsson e Simon, 1993):** coleta das verbalizações contínuas dos usuários durante a interação.
* **Calibração Prévia por Teste-Piloto:** sessão-piloto registrada para calibração do sincronismo mecânico e das falas do moderador (Seção 4).

### 6.4 Conjunto de Diretrizes e Critérios Avaliados
* **10 Heurísticas de Usabilidade de Nielsen (1993):** especialmente Visibilidade do Estado do Sistema, Consistência e Padrões, Prevenção de Erros e Controle e Liberdade do Usuário.
* **Metas de Usabilidade (Barbosa et al., 2021):** eficácia de conclusão da tarefa, eficiência temporal e satisfação subjetiva dos concurseiros *(resultados a preencher após as sessões)*.
* **Checklist Ergonômico de Baixa Fidelidade (Snyder, 2003):** 10 critérios aplicados na autoinspeção analítica (Tabela 2).

### 6.5 Número e Perfil dos Avaliadores e Participantes
* **Avaliador/Moderador e Computador Humano (1 integrante):** Pedro Rocha (Grupo 07 IHC).
* **Participantes:** *(preencher após as sessões, conforme a Tabela 4)*.

### 6.6 Lista de Problemas Encontrados e Oportunidades de Reprojeto para o Protótipo de Alta Fidelidade

A Tabela 10 consolida os problemas identificados até o momento na autoinspeção analítica (Tabela 2). As colunas de comportamento observado devem ser complementadas com os resultados das sessões com usuários.

<div align="center" markdown="1">

<p align="center"><b>Tabela 10: Síntese de Problemas e Oportunidades de Reprojeto</b></p>

| ID | Contexto da Interação | Comportamento Observado nos Testes | Resultado Esperado pelo Projeto | Alteração Proposta / Encaminhamento para Alta Fidelidade | Origem da Proposta |
| :---: | :--- | :--- | :--- | :--- | :---: |
| `OPO-PP01` | **Etapa 2:** Seleção do dia | | Todos os dias exibidos na grade devem ser selecionáveis. | Incluir `Domingo` na lista suspensa de dias. | Autoinspeção (Item 7) |
| `OPO-PP02` | **Etapa 3 e Grade:** Seleção do horário | | Faixas horárias da lista devem corresponder exatamente às linhas da grade. | Unificar a granularidade (lista e grade em intervalos de 1 h), cobrir as 24 h e remover a linha `00:00` duplicada. | Autoinspeção (Item 8) |
| `OPO-PP03` | **Limpar Cronograma** | | O usuário não deve apagar todo o cronograma por engano. | Adicionar modal de confirmação ("Deseja apagar todo o cronograma?") e diferenciar visualmente `[Limpar seleção]` de `[Limpar cronograma]`. | Autoinspeção (Item 9) |
| `OPO-PP04` | **Grade:** Etiquetas aplicadas | | O usuário deve conseguir corrigir um único agendamento. | Permitir remover/editar uma etiqueta individual (ícone `✕` ou clique na célula). | Autoinspeção (Item 9) |
| `OPO-PP05` | **Grade:** Exibição do concurso | | O nome do concurso deve ser legível em qualquer célula. | Usar siglas/abreviações com *tooltip* do nome completo e cor por concurso. | Autoinspeção (Item 10) |
| `VAL-PP01` | **Aplicação na grade** | | O nome do concurso aparece imediatamente na célula escolhida. | Manter o *feedback* imediato na célula correspondente. | Autoinspeção (Item 6) |

<p align="center" style="font-size: 0.85em; margin-top: -0.6em;"><b>Fonte:</b> Pedro Rocha (2026), padronizado com Barbosa et al. (2021).</p>

</div>

Seguindo a estrutura de **Barbosa e Silva (2021, p. 309)** e a escala de severidade de **Nielsen (1993)**, cada oportunidade é detalhada a seguir:

#### • OPO-PP01: Ausência do Domingo na Lista de Dias
* **Local onde ocorre:** Etapa 2 — Seletor de dia.
* **Descrição do problema:** A grade exibe a coluna `DOM`, mas a lista suspensa termina em `Sábado`, impedindo o agendamento de estudo no domingo, dia comum de estudo para concurseiros.
* **Diretriz violada:** Consistência e Padrões (Nielsen, 1993).
* **Severidade:** **3 – Grave (Alto)**.
* **Ação de Reprojeto (Alta Fidelidade):** Incluir `Domingo` na lista de dias.

#### • OPO-PP02: Inconsistência entre Faixas Horárias e Linhas da Grade
* **Local onde ocorre:** Etapa 3 — Seletor de horário e grade horária.
* **Descrição do problema:** A lista oferece faixas de 1 h apenas entre 18:00 e 00:00, enquanto a grade tem linhas de 2 h cobrindo o dia inteiro, com `00:00` repetido. Não é claro onde uma faixa como "19:00 às 20:00" será posicionada.
* **Diretriz violada:** Consistência e Padrões; Correspondência com o Mundo Real (Nielsen, 1993).
* **Severidade:** **3 – Grave (Alto)**.
* **Ação de Reprojeto (Alta Fidelidade):** Padronizar lista e grade no mesmo intervalo, oferecer todos os horários do dia e eliminar a linha duplicada.

#### • OPO-PP03: Limpeza do Cronograma sem Confirmação
* **Local onde ocorre:** Botões `[LIMPAR]` e `[LIMPAR CRONOGRAMA]`.
* **Descrição do problema:** Os rótulos são semelhantes e a ação de limpar o cronograma apaga todos os agendamentos sem confirmação.
* **Diretriz violada:** Prevenção de Erros (Nielsen, 1993).
* **Severidade:** **2 – Simples (Médio)**.
* **Ação de Reprojeto (Alta Fidelidade):** Renomear `[LIMPAR]` para `[Limpar seleção]`, aplicar estilo de ação destrutiva a `[Limpar cronograma]` e exigir confirmação.

#### • OPO-PP04: Impossibilidade de Remover um Agendamento Individual
* **Local onde ocorre:** Grade horária.
* **Descrição do problema:** Para corrigir um único agendamento, o usuário precisa apagar todo o cronograma.
* **Diretriz violada:** Controle e Liberdade do Usuário (Nielsen, 1993).
* **Severidade:** **2 – Simples (Médio)**.
* **Ação de Reprojeto (Alta Fidelidade):** Exibir `✕` em cada etiqueta aplicada para removê-la individualmente.

#### • OPO-PP05: Nomes Longos de Concurso nas Células
* **Local onde ocorre:** Grade horária.
* **Descrição do problema:** Nomes como "Polícia Civil" e "Banco Central" não cabem nas células estreitas da grade.
* **Diretriz violada:** Estética e Design Minimalista (Nielsen, 1993).
* **Severidade:** **1 – Cosmético (Baixo)**.
* **Ação de Reprojeto (Alta Fidelidade):** Usar siglas com *tooltip* do nome completo e cor distinta por concurso.

<div align="center" markdown="1">

<p align="center"><b>Tabela 11: Cronograma de Implementação das Ações de Reprojeto na Alta Fidelidade (Nível 3)</b></p>

| ID | Ação de Reprojeto na Alta Fidelidade | Origem da Oportunidade | Responsável | Data Prevista | Status |
| :---: | :--- | :--- | :---: | :---: | :---: |
| `REP-01` | Inclusão do Domingo na lista de dias | `OPO-PP01` | Pedro Rocha | | Planejado |
| `REP-02` | Padronização de faixas horárias entre lista e grade | `OPO-PP02` | Pedro Rocha | | Planejado |
| `REP-03` | Confirmação e diferenciação visual das ações de limpeza | `OPO-PP03` | Pedro Rocha | | Planejado |
| `REP-04` | Remoção individual de agendamentos na grade | `OPO-PP04` | Pedro Rocha | | Planejado |
| `REP-05` | Siglas com *tooltip* e cor por concurso nas células | `OPO-PP05` | Pedro Rocha | | Planejado |

<p align="center" style="font-size: 0.85em; margin-top: -0.6em;"><b>Fonte:</b> Pedro Rocha (2026).</p>

</div>

---

## 7. Referências Bibliográficas

> [1] BARBOSA, Simone Diniz Junqueira et al. *Interação Humano-Computador e Experiência do Usuário*. Rio de Janeiro: Autopublicação, 2021. ISBN: 978-65-00-19677-1.  
> [2] ERICSSON, K. Anders; SIMON, Herbert A. *Protocol Analysis: Verbal Reports as Data*. Cambridge: MIT Press, 1993.  
> [3] NIELSEN, Jakob. *Usability Engineering*. San Francisco: Morgan Kaufmann, 1993.  
> [4] SNYDER, Carolyn. *Paper Prototyping: The Fast and Easy Way to Design and Refine User Interfaces*. San Francisco: Morgan Kaufmann, 2003.  

---

## 8. Histórico de Versões

<div align="center" markdown="1">

| Versão | Data | Descrição | Autor(es) |
| :---: | :---: | :--- | :---: |
| `1.0` | 03/11/2026 | Elaboração inicial do artefato individual de Nível 2 (Protótipo de Papel da TAR-04), com apresentação das peças, autoinspeção analítica, estrutura do teste-piloto e das sessões com usuários e propostas de reprojeto. | Pedro Rocha |

<p align="center" style="font-size: 0.85em; margin-top: -0.6em;"><b>Fonte:</b> Pedro Rocha (2026).</p>

</div>
