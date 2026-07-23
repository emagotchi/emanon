document.addEventListener('DOMContentLoaded', () => {

    // UI Elements
    const kidsGrid = document.getElementById('kids-grid');
    const baseImg = document.getElementById('base-img');
    const selectionScreen = document.getElementById('selection-screen');
    const guideScreen = document.getElementById('guide-screen');
    const backBtn = document.getElementById('back-btn');
    const langBtns = document.querySelectorAll('.lang-btn');

    // Guide Variables
    const guideKidImg = document.getElementById('guide-kid-img');
    const guideKidName = document.getElementById('guide-kid-name');
    const evolutionsContainer = document.getElementById('evolutions-container');

    // State
    let currentLang = 'es';
    let currentKid = null;

    // Translations Dictionary
    const texts = {
        es: {
            title: "Guía Tamagotchi Paradise",
            selectKidTitle: "Selecciona tu etapa de niño inicial",
            selectKidDesc: "Aprende sobre todas las ramas evolutivas dependiendo de la comida y cuidados.",
            guideDesc: "Las ramas de evolución se separan por comidas. La forma adulta final depende del cuidado.",
            backBtn: "Volver a Kids",
            location: "Ubicación",
            cellInfo: "Para obtener esta célula consigue 5 puntos de esta comida:",
            helpTitle: "¿Cómo funcionan los cuidados y las evoluciones?",
            careHeading: "Cuidados y errores",
            careBody: "Cada Tamagotchi lleva la cuenta de tus <strong>cuidados excelentes</strong> y tus <strong>errores de cuidado</strong> durante su etapa Young. Un error de cuidado ocurre cuando dejas al Tama con un pedido de atención sin atender por mucho tiempo o al menos 15 minutos (hambre, ánimo bajo, enfermedad sin curar). El adulto en el que evoluciona depende de cuántos errores acumules: mientras mejor lo cuides (0-1 errores), más raro el personaje.",
            branchHeading: "¿Cómo se elige la rama de comida?",
            branchBody: "No necesitas exactamente 5 iconos de una misma comida para evolucionar por esa rama. El Tama evoluciona hacia la comida de la que tenga <strong>más células acumuladas</strong>, ignorando las Pellets (comida por defecto) si es que tiene otros tipos de comida adicional. Por ejemplo: con 2 Pellets, 2 de Carne, 1 Zanahoria y 1 Manzana evolucionaría por <strong>Carne</strong>; con 5 Pellets y 1 Zanahoria evolucionaría por <strong>Zanahoria</strong>, porque las Pellets no cuentan para definir la rama a no ser que sólo sean Pellets para la rama Default.",
            lifeHeading: "Duración de cada etapa",
            lifeBody: "Los tiempos aproximados de cada etapa son:",
            stages: [
                ["Bebé (Baby)", "1-4 horas, según cuánto tarde Babymarutchi en juntar 4 células del mismo campo y cuándo interactúes con la Tama Cell para evolucionar."],
                ["Niño (Kid)", "24-28 horas."],
                ["Joven (Young)", "24 horas. Aquí es donde decides la rama y los cuidados que definen al adulto."],
                ["Adulto (Adult)", "Indefinido, hasta morir por descuido, criar con el Tamagotchi Lab / conexión, o elegir un nuevo huevo."]
            ],
            secretTitle: "Personaje secreto",
            secretHint: "Se obtiene por conexión",
            revealBtn: "✦ revelar diseño",
            hideBtn: "ocultar",
            toolsHeading: "Herramienta útil",
            toolsBody: "Para planear tus cruces, el <strong>Genes Generator</strong> te deja ver los genes y colores de cada Tamagotchi y hacerte una idea de qué combinar:",
            toolsLink: "Abrir Tamagotchi Paradise Genes Generator ↗"
        },
        en: {
            title: "Tamagotchi Paradise Guide",
            selectKidTitle: "Select your starting Kid",
            selectKidDesc: "Learn about all possible evolutionary branches depending on meals and care.",
            guideDesc: "Evolution branches are separated by meals. The final adult form depends on the care provided.",
            backBtn: "Back to Kids",
            location: "Location",
            cellInfo: "Get 5 points of a type to get this cell:",
            helpTitle: "How do care and evolutions work?",
            careHeading: "Care & mistakes",
            careBody: "Every Tamagotchi tracks your <strong>excellent cares</strong> and <strong>care mistakes</strong> during its Young stage. A care mistake happens when you leave a care call unanswered for too long or at least 15 minutes (hunger, low mood, untreated sickness). The adult it evolves into depends on how many mistakes you rack up: the better you care for it (0-1 mistakes), the rarer the character.",
            branchHeading: "How is the meal branch chosen?",
            branchBody: "You don't need exactly 5 icons of the same meal to evolve down that branch. The Tama evolves toward whichever meal it has the <strong>most cells</strong> of, ignoring Pellets (the default food) if it has other types of food. For example: with 2 Pellets, 2 Meat, 1 Carrot and 1 Apple it would evolve via <strong>Meat</strong>; with 5 Pellets and 1 Carrot it would evolve via <strong>Carrot</strong>, because Pellets do not count toward determining the branch unless they are the only food items for the Default branch.",
            lifeHeading: "How long each stage lasts",
            lifeBody: "The approximate lifespan of each stage:",
            stages: [
                ["Baby", "1-4 hours, depending on how long it takes Babymarutchi to collect 4 of the same Field Cell and when you interact with the Tama Cell to evolve."],
                ["Kid", "24-28 hours."],
                ["Young", "24 hours. This is where you pick the branch and the care that defines the adult."],
                ["Adult", "Indefinite, until death by neglect, breeding via the Tamagotchi Lab / connection, or selecting a new egg."]
            ],
            secretTitle: "Secret character",
            secretHint: "Obtained by connection",
            revealBtn: "✦ reveal design",
            hideBtn: "hide",
            toolsHeading: "Handy tool",
            toolsBody: "To plan your breeding, the <strong>Genes Generator</strong> lets you preview the genes and colors of each Tamagotchi so you can decide what to mix:",
            toolsLink: "Open Tamagotchi Paradise Genes Generator ↗"
        }
    };

    function renderHelpAccordion() {
        const host = document.getElementById('help-accordion');
        if (!host) return;
        const t = texts[currentLang];
        const stagesHtml = t.stages.map(s => `<li><strong>${s[0]}:</strong> ${s[1]}</li>`).join('');
        host.innerHTML = `
            <details class="help-box">
                <summary>${t.helpTitle}</summary>
                <div class="help-body">
                    <h4>${t.careHeading}</h4>
                    <p>${t.careBody}</p>
                    <h4>${t.branchHeading}</h4>
                    <p>${t.branchBody}</p>
                    <h4>${t.lifeHeading}</h4>
                    <p>${t.lifeBody}</p>
                    <ul class="lifespans">${stagesHtml}</ul>
                    <h4>${t.toolsHeading}</h4>
                    <p>${t.toolsBody}</p>
                    <a class="tool-link" href="https://tamaparagenerator.streamlit.app/" target="_blank" rel="noopener noreferrer">${t.toolsLink}</a>
                </div>
            </details>
        `;
    }
    
    function updateStaticText() {
        if (!currentKid) {
            document.getElementById('app-title').textContent = texts[currentLang].title;
        }
        document.querySelector('.selection-intro h2').textContent = texts[currentLang].selectKidTitle;
        document.querySelector('.selection-intro p').textContent = texts[currentLang].selectKidDesc;
        document.querySelector('.guide-desc').textContent = texts[currentLang].guideDesc;
        document.getElementById('back-text').textContent = texts[currentLang].backBtn;
        document.querySelector('.base-label').textContent = tamagotchiData.base.label[currentLang];
    }

    // Initialize UI
    function init() {
        // Language Toggle Setup
        langBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                langBtns.forEach(b => b.classList.remove('active'));
                const target = e.currentTarget;
                target.classList.add('active');
                currentLang = target.getAttribute('data-lang');

                updateStaticText();
                renderHelpAccordion();
                renderSelectionScreen();
                if (currentKid) {
                    showGuide(currentKid);
                }
            });
        });

        baseImg.src = tamagotchiData.base.image;

        // Base Babymarutchi card → shows its secret adult form
        const baseCard = document.querySelector('.base-kid');
        if (baseCard && tamagotchiData.base.secret) {
            baseCard.style.cursor = 'pointer';
            baseCard.addEventListener('click', () => {
                currentKid = null;
                showBaseSecret();
            });
        }

        updateStaticText();
        renderHelpAccordion();
        renderSelectionScreen();

        // Back Button
        backBtn.addEventListener('click', goBackToKids);
    }

    function goBackToKids() {
        guideScreen.classList.add('hidden');
        selectionScreen.classList.remove('hidden');
        backBtn.classList.add('hidden');
        currentKid = null;
        document.getElementById('app-title').textContent = texts[currentLang].title;
        window.scrollTo({ top: 0, behavior: 'auto' });
        updateFab();
    }

    // Contextual floating button: "back" inside a guide, "scroll up" in the list
    function updateFab() {
        const fab = document.getElementById('fab-nav');
        if (!fab) return;
        const inGuide = !guideScreen.classList.contains('hidden');
        if (inGuide) {
            fab.classList.remove('mode-top');
            fab.querySelector('.fab-arrow').textContent = '‹';
            fab.querySelector('.fab-label').textContent = texts[currentLang].backBtn;
            fab.classList.add('show');
        } else if (window.scrollY > 400) {
            fab.classList.add('mode-top');
            fab.querySelector('.fab-arrow').textContent = '↑';
            fab.classList.add('show');
        } else {
            fab.classList.remove('show');
        }
    }

    function renderSelectionScreen() {
        kidsGrid.innerHTML = '';
        tamagotchiData.fields.forEach(kid => {
            const card = document.createElement('div');
            card.className = 'kid-card';
            const kidName = kid.name[currentLang] || kid.name.en;
            card.innerHTML = `
                <img loading="lazy" decoding="async" src="${kid.image}" alt="${kidName}" class="kid-img">
                <h3 class="kid-name">${kidName}</h3>
            `;

            card.addEventListener('click', () => {
                currentKid = kid;
                showGuide(kid);
            });

            kidsGrid.appendChild(card);
        });
    }

    // Show Evolutions Guide for a selected kid
    function showGuide(kidData) {
        selectionScreen.classList.add('hidden');
        guideScreen.classList.remove('hidden');
        backBtn.classList.remove('hidden');
        window.scrollTo({ top: 0, behavior: 'auto' });
        updateFab();

        const kidName = kidData.name[currentLang] || kidData.name.en;
        document.getElementById('app-title').textContent = kidName;
        guideKidImg.src = kidData.image;
        guideKidName.textContent = kidName;

        let guideDescEl = document.querySelector('.guide-desc');
        guideDescEl.innerHTML = texts[currentLang].guideDesc + "<br><br>" + kidData.evolutionText[currentLang];

        evolutionsContainer.innerHTML = '';

        kidData.evolutions.forEach(branch => {
            const branchEl = document.createElement('div');
            branchEl.className = 'evo-branch';

            const adultsHtml = branch.adults.map(adult => `
                <div class="adult-card">
                    <img loading="lazy" decoding="async" src="${adult.image}" alt="${adult.name}">
                    <h4>${adult.name}</h4>
                    <div class="reqs">
                        ${adult.excellentCares && adult.excellentCares !== "undefined" ? `
                        <div class="req-badge req-ideal" title="Excellent Cares">
                            <img src="assets/stats/sun.png" class="stat-icon"> ${adult.excellentCares}
                        </div>` : ''}
                        ${adult.careMistakes && adult.careMistakes !== "undefined" ? `
                        <div class="req-badge req-mistakes" title="Care Mistakes">
                            <img src="assets/stats/whirl.png" class="stat-icon"> ${adult.careMistakes}
                        </div>` : ''}
                    </div>
                </div>
            `).join('');

            // Generate meals 
            const mealsHtml = branch.meals.map(meal => {
                const mealName = meal.name[currentLang] || meal.name.en;
                const locName = meal.location[currentLang] || meal.location.en;
                return `
                <div class="meal-indicator">
                    <div class="meal-images-wrapper">
                        <img loading="lazy" decoding="async" src="${meal.image}" alt="${mealName}" title="${mealName}" class="main-meal-img">
                    </div>
                    <span style="font-size: 0.9rem;">${mealName}</span>
                    <span style="font-size: 0.75rem; color: var(--text-muted);"><i class="fa-solid fa-location-dot"></i> ${locName}</span>
                </div>
                `;
            }).join('');

            branchEl.innerHTML = `
                <div class="course">
                    <!-- Young Stage -->
                    <div class="evo-step young-step">
                        <img loading="lazy" decoding="async" src="${branch.young.image}" alt="${branch.young.name}">
                        ${(branch.young.cellImage || (branch.meals[0] && branch.meals[0].cellImage)) ? `<img loading="lazy" decoding="async" src="${branch.young.cellImage || branch.meals[0].cellImage}" class="young-cell-img" title="Cell Icon">` : ''}
                        <h3>${branch.young.name}</h3>
                    </div>
                    
                    <i class="fa-solid fa-arrow-right arrow"></i>
                    
                    <!-- Meal Requirement(s) -->
                    <div class="evo-step meal-step">
                        <span class="cell-info-text">${texts[currentLang].cellInfo}</span>
                        <div style="display: flex; flex-direction: row; flex-wrap: wrap; gap: 15px; justify-content: center; width: 100%;">
                            ${mealsHtml}
                        </div>
                    </div>
                    
                    <i class="fa-solid fa-arrow-right arrow"></i>
                    
                    <!-- Adults Grid -->
                    <div class="adults-grid">
                        ${adultsHtml}
                    </div>
                </div>
            `;
            evolutionsContainer.appendChild(branchEl);
        });

        
        // Secret / connection character (one per shell)
        if (kidData.secret) {
            evolutionsContainer.appendChild(buildSecretCard(kidData.secret));
        }
    }

    // Build a reusable "secret character" card (silhouette + reveal button)
    function buildSecretCard(s) {
        const t = texts[currentLang];
        const secretEl = document.createElement('div');
        secretEl.className = 'secret-card';
        secretEl.innerHTML = `
            <span class="secret-badge">🔒 ${t.secretTitle}</span>
            <img class="secret-img" src="${s.silhouette}" data-sil="${s.silhouette}" data-color="${s.image}" data-revealed="0" alt="${t.secretTitle}">
            <h3 class="secret-name">???</h3>
            <p class="secret-cond">${s.condition[currentLang] || s.condition.en}</p>
            <button class="secret-reveal-btn">${t.revealBtn}</button>
        `;
        const img = secretEl.querySelector('.secret-img');
        const nameEl = secretEl.querySelector('.secret-name');
        const btn = secretEl.querySelector('.secret-reveal-btn');
        btn.addEventListener('click', () => {
            const revealed = img.dataset.revealed === '1';
            img.src = revealed ? img.dataset.sil : img.dataset.color;
            img.dataset.revealed = revealed ? '0' : '1';
            img.classList.toggle('is-revealed', !revealed);
            nameEl.textContent = revealed ? '???' : s.name;
            btn.textContent = revealed ? t.revealBtn : t.hideBtn;
            btn.classList.toggle('revealed', !revealed);
        });
        return secretEl;
    }

    // Show the base Babymarutchi secret (adult form) in the guide screen
    function showBaseSecret() {
        selectionScreen.classList.add('hidden');
        guideScreen.classList.remove('hidden');
        backBtn.classList.remove('hidden');
        window.scrollTo({ top: 0, behavior: 'auto' });
        updateFab();

        const base = tamagotchiData.base;
        document.getElementById('app-title').textContent = base.name;
        guideKidImg.src = base.image;
        guideKidName.textContent = base.name;
        document.querySelector('.guide-desc').innerHTML = base.label[currentLang];

        evolutionsContainer.innerHTML = '';
        evolutionsContainer.appendChild(buildSecretCard(base.secret));
    }

    // Contextual floating button (back / scroll-up)
    const fab = document.getElementById('fab-nav');
    if (fab) {
        window.addEventListener('scroll', updateFab);
        fab.addEventListener('click', () => {
            if (fab.classList.contains('mode-top')) {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                goBackToKids();
            }
        });
    }
    init();
});
