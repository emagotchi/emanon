// State
let currentLang = 'es';
let currentVersion = 'pix'; // 'pix' or 'party'
let currentGroup = 'all';
let searchQuery = '';
let currentChar = null;

// DOM Elements
const txtAppTitle = document.getElementById('app-title');
const btnPix = document.getElementById('btn-pix');
const btnParty = document.getElementById('btn-party');
const btnLangEs = document.querySelector('[data-lang="es"]');
const btnLangEn = document.querySelector('[data-lang="en"]');
const selectGroup = document.getElementById('group-select');
const optAllGroups = document.getElementById('opt-all-groups');
const inputSearch = document.getElementById('search-input');
const gridCharacters = document.getElementById('character-grid');
const modal = document.getElementById('character-modal');
const btnCloseModal = document.getElementById('close-modal');
const modalBody = document.getElementById('modal-body-content');

// Placeholder SVG used when an image is missing
const IMG_PLACEHOLDER = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PHJlY3QgZmlsbD0iI2VlZSIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiLz48dGV4dCBmaWxsPSIjOTk5IiB4PSI1MCIgeT0iNTAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIj5ObyBJbWFnZTwvdGV4dD48L3N2Zz4=';

window.imgFail = function(img, altSrc) {
    if (img.src !== altSrc) {
        img.src = altSrc;
    } else {
        img.onerror = null;
        img.src = IMG_PLACEHOLDER;
    }
};

// Helper: generate an <img> tag with a two-step fallback (.webp and .png)
function imgWithFallback(primary, fallbackExt, alt, cssClass = '') {
    const fallback = primary.replace(/\.\w+$/, '.' + fallbackExt);
    const cls = cssClass ? ` class="${cssClass}"` : '';
    return `<img src="${primary}" onerror="imgFail(this,'${fallback}')" alt="${alt}"${cls}>`;
}

// Helper: get the egg object for the current character and version
function getEgg(char) {
    const groupId = char.group[currentVersion];
    if (!groupId) return null;
    return eggData[currentVersion][groupId] || null;
}

function init() {
    setupEventListeners();
    updateUI();
}

function setupEventListeners() {
    // Version Toggle
    btnPix.addEventListener('click', () => { currentVersion = 'pix'; currentGroup = 'all'; selectGroup.value = 'all'; updateToggleState(); populateGroups(); renderGrid(); });
    btnParty.addEventListener('click', () => { currentVersion = 'party'; currentGroup = 'all'; selectGroup.value = 'all'; updateToggleState(); populateGroups(); renderGrid(); });

    // Language Toggle
    btnLangEs.addEventListener('click', () => { currentLang = 'es'; updateUIWithModalRefresh(); });
    btnLangEn.addEventListener('click', () => { currentLang = 'en'; updateUIWithModalRefresh(); });

    // Filters
    selectGroup.addEventListener('change', (e) => { currentGroup = e.target.value; renderGrid(); });
    inputSearch.addEventListener('input', (e) => { searchQuery = e.target.value.toLowerCase(); renderGrid(); });

    // Modal
    btnCloseModal.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.classList.contains('modal-overlay')) closeModal();
    });
}

function populateGroups() {
    // Collect unique group IDs that exist for the current version
    const groupIds = [...new Set(
        db
            .filter(c => c.versions.includes(currentVersion) && c.group[currentVersion])
            .map(c => c.group[currentVersion])
    )];

    // Stable order
    const order = ['smart', 'creative', 'charming'];
    groupIds.sort((a, b) => order.indexOf(a) - order.indexOf(b));

    // Rebuild options (keep 'all' first)
    while (selectGroup.options.length > 1) selectGroup.remove(1);

    groupIds.forEach(gid => {
        const opt = document.createElement('option');
        opt.value = gid;
        opt.textContent = eggData[currentVersion][gid]?.name[currentLang] || gid;
        selectGroup.appendChild(opt);
    });
}

// Update UI based on language and state
function updateUI() {
    const t = i18n[currentLang];

    // Static Texts
    txtAppTitle.textContent = t.title;
    inputSearch.placeholder = t.searchPlaceholder;
    optAllGroups.textContent = t.allGroups;

    // Re-label group options in current language
    Array.from(selectGroup.options).forEach(opt => {
        if (opt.value !== 'all' && eggData[currentVersion][opt.value]) {
            opt.textContent = eggData[currentVersion][opt.value].name[currentLang];
        }
    });

    updateToggleState();
    updateLangState();
    populateGroups();
    renderGrid();
}

// Update UI and refresh modal if open
function updateUIWithModalRefresh() {
    updateUI();
    
    // If a modal is open, reopen it with new language
    if (currentChar && !modal.classList.contains('hidden')) {
        openModal(currentChar);
    }
}

// Update Active Toggle Buttons
function updateToggleState() {
    btnPix.classList.toggle('active', currentVersion === 'pix');
    btnParty.classList.toggle('active', currentVersion === 'party');
}

function updateLangState() {
    btnLangEs.classList.toggle('active', currentLang === 'es');
    btnLangEn.classList.toggle('active', currentLang === 'en');
}

// Render Characters Grid
function renderGrid() {
    gridCharacters.innerHTML = '';

    const filtered = db.filter(c => {
        const matchVersion = c.versions.includes(currentVersion) && c.group[currentVersion];
        const matchGroup = currentGroup === 'all' || c.group[currentVersion] === currentGroup;
        const nameText = c.name[currentLang].toLowerCase();
        const matchSearch = nameText.includes(searchQuery);
        return matchVersion && matchGroup && matchSearch;
    });

    if (filtered.length === 0) {
        gridCharacters.innerHTML = `<p style="text-align:center; grid-column: 1/-1; color: var(--clr-text-muted);">No se encontraron personajes.</p>`;
        return;
    }

    filtered.forEach(c => {
        const card = document.createElement('div');
        card.className = 'character-card glass';
        card.onclick = () => openModal(c);

        const egg = getEgg(c);
        const eggName = egg ? egg.name[currentLang] : '';
        const eggImgHtml = egg ? imgWithFallback(egg.img, 'png', eggName, 'egg-icon') : '';

        let badgeHtml = '';
        if (c.versions.includes('pix') && c.versions.includes('party')) badgeHtml = `<span class="version-badge both">${i18n[currentLang].both}</span>`;
        else if (c.versions.includes('pix')) badgeHtml = `<span class="version-badge">${i18n[currentLang].pixOnly}</span>`;
        else if (c.versions.includes('party')) badgeHtml = `<span class="version-badge party">${i18n[currentLang].partyOnly}</span>`;

        card.innerHTML = `
            ${badgeHtml}
            <div class="char-img-container">
                ${imgWithFallback(c.image, 'png', c.name[currentLang])}
            </div>
            <h3 class="char-name">${c.name[currentLang]}</h3>
            <p class="char-group">${eggImgHtml} ${eggName}</p>
        `;
        gridCharacters.appendChild(card);
    });
}

// Modal Logic
function openModal(char) {
    currentChar = char; // Save current character for language updates
    const t = i18n[currentLang];
    const egg = getEgg(char);
    const eggName = egg ? egg.name[currentLang] : '';
    const eggImgHtml = egg ? imgWithFallback(egg.img, 'png', eggName, 'egg-icon egg-icon--modal') : '';

    const buildSection = (title, iconClass, itemsList) => {
        if (!itemsList || itemsList.length === 0) return '';
        const listHtml = itemsList.map(item => {
            // If item has downloadUrl, render as clickable link
            const itemNameHtml = item.downloadUrl 
                ? `<a href="${item.downloadUrl}" target="_blank" rel="noopener" class="fav-item-name fav-item-link">⬇ ${item.name[currentLang]}</a>`
                : `<span class="fav-item-name">${item.name[currentLang]}</span>`;
            
            return `
                <li class="fav-item">
                    <div class="fav-item-img">
                        ${imgWithFallback(item.img, 'webp', item.name[currentLang])}
                    </div>
                    ${itemNameHtml}
                </li>
            `;
        }).join('');
        return `
            <div class="fav-section">
                <h3 class="${iconClass}">${title}</h3>
                <ul class="fav-list">${listHtml}</ul>
            </div>
        `;
    };

    const mealSection  = buildSection(t.meals,       'icon-meals',       char.favorites.meals);
    const snackSection = buildSection(t.snacks,      'icon-snacks',      char.favorites.snacks);
    const itemSection  = buildSection(t.items,        'icon-items',       char.favorites.items);
    const accSection   = buildSection(t.accessories, 'icon-accessories', char.favorites.accessories);

    const hasFavorites = char.favorites.meals.length > 0 || char.favorites.snacks.length > 0
                      || char.favorites.items.length > 0 || char.favorites.accessories.length > 0;

    modalBody.innerHTML = `
        <div class="modal-header">
            <div class="char-img-container" style="margin: 0 auto 20px;">
                ${imgWithFallback(char.image, 'png', char.name[currentLang])}
            </div>
            <h2>${char.name[currentLang]}</h2>
            <p class="modal-group-label">${eggImgHtml} ${eggName}</p>
        </div>
        ${hasFavorites ? `
            <div class="favorites-grid">
                ${mealSection}${snackSection}${itemSection}${accSection}
            </div>
        ` : `
            <p style="text-align:center; padding: 30px; color: var(--clr-text-muted);">Sin datos cargados aún.</p>
        `}
    `;

    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
}

document.addEventListener('DOMContentLoaded', init);
