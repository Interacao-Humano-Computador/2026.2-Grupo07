/**
 * Mermaid & SVG/PNG Diagram pan/zoom modal for MkDocs Material
 */
(function () {
  // 1. Intercept attachShadow to keep shadowRoot open and accessible
  const origAttachShadow = Element.prototype.attachShadow;
  Element.prototype.attachShadow = function (init) {
    if (init && init.mode === 'closed') {
      init.mode = 'open';
    }
    const shadow = origAttachShadow.call(this, init);
    enhanceShadowRoot(this, shadow);
    return shadow;
  };

  function enhanceShadowRoot(hostEl, shadow) {
    const observer = new MutationObserver(() => {
      const svg = shadow.querySelector('svg');
      if (svg) {
        observer.disconnect();
        setupSvgInteractions(hostEl, shadow, svg);
      }
    });
    observer.observe(shadow, { childList: true, subtree: true });
  }

  function setupSvgInteractions(hostEl, shadow, svg) {
    const style = document.createElement('style');
    style.textContent = `
      .node rect, .node polygon, .node circle, .node ellipse, .node path {
        fill: #2c303b !important;
        stroke: #000000 !important;
        stroke-width: 2.2px !important;
        rx: 5px !important;
        ry: 5px !important;
      }
      .node text, .node text *, .node .label, .node span, .node p, .node div,
      [class*="node"] text, [class*="node"] foreignObject * {
        fill: #000000 !important;
        color: #000000 !important;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif !important;
        font-size: 16px !important;
        font-weight: 700 !important;
        line-height: 1.35 !important;
        box-sizing: border-box !important;
        padding: 4px 8px !important;
        word-break: normal !important;
        overflow-wrap: break-word !important;
        white-space: normal !important;
      }
      .node foreignObject {
        overflow: visible !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
      }
      svg {
        max-width: 100% !important;
        width: 100% !important;
        height: auto !important;
        display: block !important;
        margin: 0 auto !important;
      }
      .node i, .node em, [class*="node"] foreignObject i, [class*="node"] foreignObject em {
        color: #e2e8f0 !important;
        fill: #e2e8f0 !important;
        font-style: italic !important;
        font-weight: 500 !important;
      }
      .cluster rect {
        fill: #f8fafc !important;
        stroke: #000000 !important;
        stroke-width: 2px !important;
        stroke-dasharray: 4, 4 !important;
        rx: 6px !important;
        ry: 6px !important;
      }
      .cluster text, .cluster .label {
        fill: #000000 !important;
        color: #000000 !important;
        font-weight: 800 !important;
        font-size: 16px !important;
      }
      .edgePath .path, .flowchart-link, path.path, g.edgePath path {
        stroke: #000000 !important;
        stroke-width: 2.5px !important;
        stroke-opacity: 1 !important;
      }
      marker path, .arrowMarkerPath, marker, #arrowhead, g.edgePath marker path {
        fill: #000000 !important;
        stroke: #000000 !important;
      }
      .edgeLabel, .edgeLabel rect {
        background-color: transparent !important;
        fill: transparent !important;
        color: #000000 !important;
        font-weight: 800 !important;
      }
    `;
    shadow.appendChild(style);

    hostEl.style.overflow = 'hidden';
    hostEl.style.width = '100%';
    hostEl.style.display = 'flex';
    hostEl.style.justifyContent = 'center';
    hostEl.style.alignItems = 'center';
    hostEl.style.position = 'relative';
    hostEl.style.cursor = 'zoom-in';

    if (!hostEl.nextElementSibling || !hostEl.nextElementSibling.classList.contains('diagram-btn-wrapper')) {
      const wrapper = document.createElement('div');
      wrapper.className = 'diagram-btn-wrapper';
      const btn = document.createElement('button');
      btn.className = 'diagram-expand-pill';
      btn.innerHTML = '🔍 Zoom / Tela Cheia';
      btn.type = 'button';
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        e.preventDefault();
        openModal(svg.cloneNode(true));
      });
      wrapper.appendChild(btn);
      hostEl.parentNode.insertBefore(wrapper, hostEl.nextSibling);
    }

    hostEl.addEventListener('click', (e) => {
      e.stopPropagation();
      openModal(svg.cloneNode(true));
    });
  }

  // Attach interactive zoom/pan modal & button to SVG/PNG diagram images (HTA, CTT, etc.)
  function setupDiagramImgInteractions(imgEl) {
    if (imgEl.dataset.zoomBound === 'true') return;
    imgEl.dataset.zoomBound = 'true';
    imgEl.style.cursor = 'zoom-in';
    imgEl.title = 'Clique no diagrama para dar Zoom / Tela Cheia';

    const parentBlock = imgEl.closest('p') || imgEl;
    if (!parentBlock.nextElementSibling || !parentBlock.nextElementSibling.classList.contains('diagram-btn-wrapper')) {
      const wrapper = document.createElement('div');
      wrapper.className = 'diagram-btn-wrapper';
      const btn = document.createElement('button');
      btn.className = 'diagram-expand-pill';
      btn.innerHTML = '🔍 Zoom / Tela Cheia';
      btn.type = 'button';
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        e.preventDefault();
        openImageModal(imgEl.src, imgEl.alt || 'Diagrama');
      });
      wrapper.appendChild(btn);
      parentBlock.parentNode.insertBefore(wrapper, parentBlock.nextSibling);
    }

    imgEl.addEventListener('click', (e) => {
      e.stopPropagation();
      e.preventDefault();
      openImageModal(imgEl.src, imgEl.alt || 'Diagrama');
    });
  }

  function scanExistingDiagrams() {
    document.querySelectorAll('.mermaid').forEach((el) => {
      if (el.shadowRoot) {
        const svg = el.shadowRoot.querySelector('svg');
        if (svg) {
          setupSvgInteractions(el, el.shadowRoot, svg);
        }
      }
    });

    document
      .querySelectorAll(
        'img[src*="assets/images/hta/hta-tar"], img[src*="assets/images/ctt/ctt-tar"]'
      )
      .forEach((imgEl) => {
        setupDiagramImgInteractions(imgEl);
      });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', scanExistingDiagrams);
  } else {
    scanExistingDiagrams();
  }
  let scanCount = 0;
  const scanInterval = setInterval(() => {
    scanExistingDiagrams();
    if (++scanCount > 15) clearInterval(scanInterval);
  }, 200);

  // Fullscreen Modal Logic
  let modal = null;
  let modalContent = null;
  let zoomLevel = 1;

  function initModal() {
    if (modal) return;
    modal = document.createElement('div');
    modal.className = 'diagram-modal-overlay';
    modal.innerHTML = `
      <div class="diagram-modal-container">
        <div class="diagram-modal-header">
          <span class="diagram-modal-title">🔍 Visualizador de Diagrama (Arraste para mover • Roda do mouse para Zoom)</span>
          <div class="diagram-modal-controls">
            <button class="diagram-btn zoom-out" title="Diminuir Zoom">➖</button>
            <button class="diagram-btn zoom-reset" title="Restaurar Tamanho">100%</button>
            <button class="diagram-btn zoom-in" title="Aumentar Zoom">➕</button>
            <button class="diagram-btn close-btn" title="Fechar (Esc)">✖</button>
          </div>
        </div>
        <div class="diagram-modal-body">
          <div class="diagram-modal-viewport"></div>
        </div>
      </div>
    `;

    document.body.appendChild(modal);
    modalContent = modal.querySelector('.diagram-modal-viewport');

    let isDragging = false;
    let startX = 0;
    let startY = 0;
    let scrollLeft = 0;
    let scrollTop = 0;
    const modalBody = modal.querySelector('.diagram-modal-body');

    modalBody.addEventListener('mousedown', (e) => {
      if (e.target.closest('.diagram-btn')) return;
      isDragging = true;
      modalBody.style.cursor = 'grabbing';
      modalBody.style.userSelect = 'none';
      startX = e.pageX - modalBody.offsetLeft;
      startY = e.pageY - modalBody.offsetTop;
      scrollLeft = modalBody.scrollLeft;
      scrollTop = modalBody.scrollTop;
    });

    window.addEventListener('mouseup', () => {
      if (isDragging) {
        isDragging = false;
        if (modalBody) {
          modalBody.style.cursor = 'grab';
          modalBody.style.removeProperty('user-select');
        }
      }
    });

    modalBody.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - modalBody.offsetLeft;
      const y = e.pageY - modalBody.offsetTop;
      const walkX = (x - startX) * 1.5;
      const walkY = (y - startY) * 1.5;
      modalBody.scrollLeft = scrollLeft - walkX;
      modalBody.scrollTop = scrollTop - walkY;
    });

    // Suporte a zoom com a roda do mouse dentro do modal
    modalBody.addEventListener(
      'wheel',
      (e) => {
        e.preventDefault();
        const delta = e.deltaY < 0 ? 0.15 : -0.15;
        zoomLevel = Math.min(Math.max(zoomLevel + delta, 0.4), 4.0);
        applyZoom();
      },
      { passive: false }
    );

    modal.querySelector('.close-btn').addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });

    modal.querySelector('.zoom-in').addEventListener('click', () => {
      zoomLevel = Math.min(zoomLevel + 0.25, 4.0);
      applyZoom();
    });

    modal.querySelector('.zoom-out').addEventListener('click', () => {
      zoomLevel = Math.max(zoomLevel - 0.25, 0.4);
      applyZoom();
    });

    modal.querySelector('.zoom-reset').addEventListener('click', () => {
      zoomLevel = 1.0;
      applyZoom();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
      }
    });
  }

  function applyZoom() {
    if (!modalContent) return;
    const target = modalContent.querySelector('svg, img');
    if (target) {
      target.style.transform = `scale(${zoomLevel})`;
      target.style.transformOrigin = 'top left';
      const resetBtn = modal.querySelector('.zoom-reset');
      if (resetBtn) resetBtn.textContent = `${Math.round(zoomLevel * 100)}%`;
    }
  }

  function openImageModal(src, altText) {
    initModal();
    zoomLevel = 1.25;
    modalContent.innerHTML = '';

    const img = document.createElement('img');
    img.src = src;
    img.alt = altText;
    img.draggable = false;
    img.style.maxWidth = 'none';
    img.style.width = '100%';
    img.style.minWidth = '1150px';
    img.style.height = 'auto';
    img.style.background = '#ffffff';
    img.style.padding = '12px';
    img.style.borderRadius = '6px';
    img.style.transition = 'transform 0.12s ease-out';
    modalContent.appendChild(img);

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    applyZoom();
  }

  function openModal(svgClone) {
    initModal();
    zoomLevel = 1.35;
    modalContent.innerHTML = '';

    const modalStyle = document.createElement('style');
    modalStyle.textContent = `
      .node rect, .node polygon, .node circle, .node ellipse, .node path {
        fill: #2c303b !important;
        stroke: #000000 !important;
        stroke-width: 2.2px !important;
        rx: 5px !important;
        ry: 5px !important;
      }
      .node text, .node text *, .node .label, .node span, .node p, .node div,
      [class*="node"] text, [class*="node"] foreignObject * {
        fill: #000000 !important;
        color: #000000 !important;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important;
        font-size: 16px !important;
        font-weight: 700 !important;
        line-height: 1.45 !important;
      }
      .node i, .node em, [class*="node"] foreignObject i, [class*="node"] foreignObject em {
        color: #1f2937 !important;
        fill: #1f2937 !important;
        font-style: italic !important;
        font-weight: 600 !important;
      }
      .cluster rect {
        fill: #f8fafc !important;
        stroke: #000000 !important;
        stroke-width: 2px !important;
        stroke-dasharray: 4, 4 !important;
        rx: 6px !important;
        ry: 6px !important;
      }
      .cluster text, .cluster .label {
        fill: #000000 !important;
        color: #000000 !important;
        font-weight: 800 !important;
        font-size: 16px !important;
      }
      .edgePath .path, .flowchart-link, path.path, g.edgePath path {
        stroke: #000000 !important;
        stroke-width: 2.5px !important;
        stroke-opacity: 1 !important;
      }
      marker path, .arrowMarkerPath, marker, #arrowhead, g.edgePath marker path {
        fill: #000000 !important;
        stroke: #000000 !important;
      }
      .edgeLabel, .edgeLabel rect {
        background-color: #ffffff !important;
        fill: #ffffff !important;
        color: #000000 !important;
        font-weight: 700 !important;
      }
    `;
    svgClone.insertBefore(modalStyle, svgClone.firstChild);

    svgClone.style.maxWidth = 'none';
    svgClone.style.width = '100%';
    svgClone.style.minWidth = '1100px';
    svgClone.style.height = 'auto';
    svgClone.style.transition = 'transform 0.15s ease-out';
    modalContent.appendChild(svgClone);

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    applyZoom();
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
})();
