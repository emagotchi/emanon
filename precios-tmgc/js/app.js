document.addEventListener('DOMContentLoaded', () => {
    let currentVersion = 'all';
    let currentRegion = 'all';
    let query = '';

    const t = {
        all: 'Todas', count: n => `${n} shells`,
        search: 'Buscar shell...', notes: 'Notas', region: 'Región', version: 'Versión', type: 'Tipo',
        none: 'No se encontraron shells con esos filtros.'
    };

    const REGIONS = [
        { key: 'Japan',         chip: 'Japón',        card: 'Japón',        color: '#ff8fc7' },
        { key: 'USA',           chip: 'EE.UU.',       card: 'EE.UU.',       color: '#7fb5ff' },
        { key: 'Europe',        chip: 'Europa',       card: 'Europa',       color: '#9be0a0' },
        { key: 'Asia/Oceania',  chip: 'Asia/Oceanía', card: 'Asia/Oceanía', color: '#ffcf6b' },
        { key: 'South America', chip: 'Sudamérica',   card: 'Sudamérica',   color: '#8fd8c8' },
        { key: 'Unreleased',    chip: 'No lanzadas',  card: 'no lanzada',   color: '#d9d3e3', extra: true }
    ];
    const regionInfo = r => REGIONS.find(x => x.key === r) || { key: r, chip: r, card: r, color: '#c9bfe0' };

    const TYPES = [
        { key: 'replica', chip: 'Réplicas',         badge: 'réplica' },
        { key: 'new',     chip: 'Nuevas',           badge: 'nueva' },
        { key: 'special', chip: 'Edición especial', badge: 'edición especial' }
    ];
    const typeInfo = k => TYPES.find(x => x.key === k);
    let currentType = 'all';

    const grid = document.getElementById('grid');
    const countLine = document.getElementById('count-line');
    const searchInput = document.getElementById('search-input');
    const versionFilter = document.getElementById('version-filter');
    const regionFilter = document.getElementById('region-filter');
    const typeRow = document.getElementById('type-row');
    const typeFilter = document.getElementById('type-filter');
    const modal = document.getElementById('modal');
    const PLACEHOLDER = 'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300"><rect width="300" height="300" fill="#f2ecfa"/><text x="150" y="175" font-size="120" text-anchor="middle" fill="#b8a8d8">✦</text></svg>');

    function versions() { return [...new Set(shellData.map(s => s.version))]; }
    function regions() {
        const inVersion = new Set(shellData.filter(s => currentVersion === 'all' || s.version === currentVersion).map(s => s.region));
        return REGIONS.filter(r => inVersion.has(r.key));
    }

    function buildFilters() {
        const vHtml = [`<button class="chip ${currentVersion==='all'?'active':''}" data-version="all">${t.version}: ${t.all}</button>`]
            .concat(versions().map(v => `<button class="chip ${currentVersion===v?'active':''}" data-version="${v}">${v}</button>`));
        versionFilter.innerHTML = vHtml.join('');

        const list = regions();
        if (currentRegion !== 'all' && !list.some(r => r.key === currentRegion)) currentRegion = 'all';
        const chip = r => `<button class="chip ${currentRegion===r.key?'active':''}" data-region="${r.key}">${r.chip}</button>`;
        const main = list.filter(r => !r.extra).map(chip);
        const extra = list.filter(r => r.extra).map(chip);
        const rHtml = [`<button class="chip ${currentRegion==='all'?'active':''}" data-region="all">${t.region}: ${t.all}</button>`]
            .concat(main)
            .concat(extra.length ? [`<span class="chip-sep" aria-hidden="true">//</span>`] : [], extra);
        regionFilter.innerHTML = rHtml.join('');

        const show2024 = currentVersion === '2024';
        typeRow.hidden = !show2024;
        if (!show2024) currentType = 'all';
        typeFilter.innerHTML = [`<button class="chip ${currentType==='all'?'active':''}" data-type="all">${t.type}: ${t.all}</button>`]
            .concat(TYPES.map(x => `<button class="chip ${currentType===x.key?'active':''}" data-type="${x.key}">${x.chip}</button>`)).join('');

        versionFilter.querySelectorAll('.chip').forEach(c => c.addEventListener('click', () => { currentVersion = c.dataset.version; buildFilters(); render(); }));
        regionFilter.querySelectorAll('.chip').forEach(c => c.addEventListener('click', () => { currentRegion = c.dataset.region; buildFilters(); render(); }));
        typeFilter.querySelectorAll('.chip').forEach(c => c.addEventListener('click', () => { currentType = c.dataset.type; buildFilters(); render(); }));
    }

    function filtered() {
        return shellData.filter(s =>
            (currentVersion === 'all' || s.version === currentVersion) &&
            (currentRegion === 'all' || s.region === currentRegion) &&
            (currentType === 'all' || s.type === currentType) &&
            (query === '' || (s.name + ' ' + s.description + ' ' + s.notes + ' ' + regionInfo(s.region).chip + ' ' + (s.type ? typeInfo(s.type).chip : '')).toLowerCase().includes(query))
        );
    }

    function render() {
        const list = filtered();
        countLine.innerHTML = t.count(`<b>${list.length}</b>`);
        if (!list.length) { grid.innerHTML = `<p class="empty">${t.none}</p>`; return; }
        grid.innerHTML = list.map(s => {
            const r = regionInfo(s.region);
            return `
            <div class="card" data-idx="${shellData.indexOf(s)}">
                <div class="thumb">
                    <img loading="lazy" decoding="async" src="${s.img || PLACEHOLDER}" alt="${s.name} (${s.version})"
                         onerror="this.onerror=null;this.src='${PLACEHOLDER}';">
                </div>
                <div class="cbody">
                    <div class="cname">${s.name}</div>
                    <div class="cregion"><span class="dot" style="background:${r.color}"></span>${s.version} · ${r.card}</div>
                </div>
            </div>`;
        }).join('');
        grid.querySelectorAll('.card').forEach(c => c.addEventListener('click', () => openModal(shellData[+c.dataset.idx])));
    }

    const fileName = txt => txt.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')
        .replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '') + '.dat';
    const windowBar = title => `
                <div class="win-bar">
                    <span class="win-title">${title}</span>
                    <div class="win-ctrls">
                        <span class="win-ctrl win-ctrl--min" aria-hidden="true"></span>
                        <span class="win-ctrl win-ctrl--max" aria-hidden="true"></span>
                        <button class="win-ctrl win-ctrl--close" data-close aria-label="Cerrar">&times;</button>
                    </div>
                </div>`;

    function openModal(s) {
        const r = regionInfo(s.region);
        modal.innerHTML = `
            <div class="modal-overlay" data-close></div>
            <div class="modal-card" role="dialog" aria-modal="true" aria-label="${s.name}">
                ${windowBar(fileName(s.version + ' ' + s.name))}
                <img class="modal-img" src="${s.img || PLACEHOLDER}" alt="${s.name}" onerror="this.onerror=null;this.src='${PLACEHOLDER}';">
                <div class="modal-info">
                    <div class="m-badges">
                        <span class="m-badge" style="background:${r.color}">${r.chip}</span>
                        <span class="m-badge" style="background:var(--accent-text);color:#fff">${s.version}</span>
                        ${s.type ? `<span class="m-badge" style="background:var(--chip)">${typeInfo(s.type).badge}</span>` : ''}
                    </div>
                    <h2>${s.name}</h2>
                    <p class="m-desc">${s.description || ''}</p>
                    ${s.notes ? `<div class="m-notes"><b>${t.notes}:</b> ${s.notes}</div>` : ''}
                </div>
            </div>`;
        modal.classList.add('open');
        modal.querySelectorAll('[data-close]').forEach(el => el.addEventListener('click', closeModal));
    }
    function closeModal() { modal.classList.remove('open'); modal.innerHTML = ''; }

    // ── Ejemplos de "carreteado" (mal estado) ──
    const carreteadoExamples = [
        { img: 'img/carreteados/rayado.webp', caption: 'Plástico muy rayado, quebrado o amarillento por el tiempo.' },
        { img: 'img/carreteados/pintura.webp', caption: 'Pintura/diseños borrados y maltratados.' },
        { img: 'img/carreteados/botones.webp', caption: 'Botones hundidos, rotos o no funcionales.' },
        { img: 'img/carreteados/sin-tapa.webp', caption: 'Sin tapa de batería ni tornillos.' },
        { img: 'img/carreteados/pantalla.webp', caption: 'Pantalla con líneas o píxeles muertos.' },
        { img: 'img/carreteados/corrosion.webp', caption: 'Corrosión en el compartimento de pilas (manchas verdes o blancas).' }
    ];
    const carrPlaceholder = txt => 'data:image/svg+xml;utf8,' + encodeURIComponent(
        '<svg xmlns="http://www.w3.org/2000/svg" width="400" height="260"><rect width="400" height="260" fill="#f2ecfa"/><text x="200" y="120" font-size="40" text-anchor="middle" fill="#c9bfe0">📷</text><text x="200" y="165" font-size="14" text-anchor="middle" fill="#9a8fb0">foto de ejemplo</text></svg>');

    function openCarreteado() {
        const items = carreteadoExamples.map(e => `
            <div class="carr-item">
                <img loading="lazy" src="${e.img}" alt="${e.caption}" onerror="this.onerror=null;this.src='${carrPlaceholder()}';">
                <p>${e.caption}</p>
            </div>`).join('');
        modal.innerHTML = `
            <div class="modal-overlay" data-close></div>
            <div class="modal-card" role="dialog" aria-modal="true" aria-label="Tama carreteado">
                ${windowBar('carreteado.dat')}
                <div class="carr-head">
                    <h2>¿Qué es un Tama "carreteado"?</h2>
                    <p>Un Tamagotchi carreteado tiene desgaste o fallas que bajan su valor. Estos son ejemplos de lo que hay que revisar antes de pagar de más:</p>
                </div>
                <div class="carr-list">${items}</div>
            </div>`;
        modal.classList.add('open');
        modal.querySelectorAll('[data-close]').forEach(el => el.addEventListener('click', closeModal));
    }
    const carrLink = document.getElementById('carreteado-link');
    if (carrLink) carrLink.addEventListener('click', openCarreteado);

    searchInput.addEventListener('input', e => { query = e.target.value.toLowerCase(); render(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

    // back to top
    const fab = document.getElementById('fab-top');
    window.addEventListener('scroll', () => fab.classList.toggle('show', window.scrollY > 500));
    fab.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

    searchInput.placeholder = t.search;
    buildFilters();
    render();
});
