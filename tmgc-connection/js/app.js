document.addEventListener('DOMContentLoaded', () => {
    let currentLang = 'es';
    let currentVersion = 'all';
    let currentRegion = 'all';
    let query = '';

    const t = {
        es: {
            regionAll: 'Todas', count: n => `${n} shells`,
            search: 'Buscar shell...', notes: 'Notas', region: 'Región', version: 'Versión',
            none: 'No se encontraron shells con esos filtros.'
        },
        en: {
            regionAll: 'All', count: n => `${n} shells`,
            search: 'Search shell...', notes: 'Notes', region: 'Region', version: 'Version',
            none: 'No shells match those filters.'
        }
    };

    const grid = document.getElementById('grid');
    const countLine = document.getElementById('count-line');
    const searchInput = document.getElementById('search-input');
    const versionFilter = document.getElementById('version-filter');
    const regionFilter = document.getElementById('region-filter');
    const modal = document.getElementById('modal');
    const PLACEHOLDER = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80"><rect width="80" height="80" fill="%23f2ecfa"/><text x="40" y="48" font-size="34" text-anchor="middle" fill="%23b8a8d8">✦</text></svg>';

    const regionColor = r => ({ 'Japan': '#ff8fc7', 'USA': '#7fb5ff', 'Europe': '#9be0a0', 'Asia/Oceania': '#ffcf6b' }[r] || '#c9bfe0');

    function versions() { return [...new Set(shellData.map(s => s.version))]; }
    function regions() { return [...new Set(shellData.map(s => s.region))]; }

    function buildFilters() {
        // versions
        const vHtml = [`<button class="chip ${currentVersion==='all'?'active':''}" data-version="all">${t[currentLang].version}: ${t[currentLang].regionAll}</button>`]
            .concat(versions().map(v => `<button class="chip ${currentVersion===v?'active':''}" data-version="${v}">${v}</button>`));
        versionFilter.innerHTML = vHtml.join('');
        // regions
        const rHtml = [`<button class="chip ${currentRegion==='all'?'active':''}" data-region="all">${t[currentLang].region}: ${t[currentLang].regionAll}</button>`]
            .concat(regions().map(r => `<button class="chip ${currentRegion===r?'active':''}" data-region="${r}">${r}</button>`));
        regionFilter.innerHTML = rHtml.join('');

        versionFilter.querySelectorAll('.chip').forEach(c => c.addEventListener('click', () => { currentVersion = c.dataset.version; buildFilters(); render(); }));
        regionFilter.querySelectorAll('.chip').forEach(c => c.addEventListener('click', () => { currentRegion = c.dataset.region; buildFilters(); render(); }));
    }

    function filtered() {
        return shellData.filter(s =>
            (currentVersion === 'all' || s.version === currentVersion) &&
            (currentRegion === 'all' || s.region === currentRegion) &&
            (query === '' || (s.name + ' ' + s.description + ' ' + s.notes).toLowerCase().includes(query))
        );
    }

    function render() {
        const list = filtered();
        countLine.innerHTML = t[currentLang].count(`<b>${list.length}</b>`);
        if (!list.length) { grid.innerHTML = `<p class="empty">${t[currentLang].none}</p>`; return; }
        grid.innerHTML = list.map((s, i) => `
            <div class="card" data-idx="${shellData.indexOf(s)}">
                <div class="thumb">
                    <img loading="lazy" decoding="async" src="${s.img}" alt="${s.name} (${s.version})"
                         onerror="this.onerror=null;this.src='${PLACEHOLDER}';">
                </div>
                <div class="cbody">
                    <div class="cname">${s.name}</div>
                    <div class="cregion"><span class="dot" style="background:${regionColor(s.region)}"></span>${s.version} · ${s.region}</div>
                </div>
            </div>`).join('');
        grid.querySelectorAll('.card').forEach(c => c.addEventListener('click', () => openModal(shellData[+c.dataset.idx])));
    }

    function openModal(s) {
        modal.innerHTML = `
            <div class="modal-overlay" data-close></div>
            <div class="modal-card">
                <button class="modal-close" data-close aria-label="Cerrar">&times;</button>
                <img class="modal-img" src="${s.img}" alt="${s.name}" onerror="this.onerror=null;this.src='${PLACEHOLDER}';">
                <div class="modal-info">
                    <div class="m-badges">
                        <span class="m-badge" style="background:${regionColor(s.region)}">${s.region}</span>
                        <span class="m-badge" style="background:var(--accent)">${s.version}</span>
                    </div>
                    <h2>${s.name}</h2>
                    <p class="m-desc">${s.description || ''}</p>
                    ${s.notes ? `<div class="m-notes"><b>${t[currentLang].notes}:</b> ${s.notes}</div>` : ''}
                </div>
            </div>`;
        modal.classList.add('open');
        modal.querySelectorAll('[data-close]').forEach(el => el.addEventListener('click', closeModal));
    }
    function closeModal() { modal.classList.remove('open'); modal.innerHTML = ''; }

    // language
    document.querySelectorAll('.lang-btn').forEach(b => b.addEventListener('click', () => {
        document.querySelectorAll('.lang-btn').forEach(x => x.classList.remove('active'));
        b.classList.add('active');
        currentLang = b.dataset.lang;
        searchInput.placeholder = t[currentLang].search;
        buildFilters(); render();
    }));

    searchInput.addEventListener('input', e => { query = e.target.value.toLowerCase(); render(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

    // back to top
    const fab = document.getElementById('fab-top');
    window.addEventListener('scroll', () => fab.classList.toggle('show', window.scrollY > 500));
    fab.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

    searchInput.placeholder = t[currentLang].search;
    buildFilters();
    render();
});
