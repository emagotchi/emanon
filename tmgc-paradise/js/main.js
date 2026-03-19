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
            cellInfo: "Para obtener esta célula consigue 5 puntos de esta comida:"
        },
        en: {
            title: "Tamagotchi Paradise Guide",
            selectKidTitle: "Select your starting Kid",
            selectKidDesc: "Learn about all possible evolutionary branches depending on meals and care.",
            guideDesc: "Evolution branches are separated by meals. The final adult form depends on the care provided.",
            backBtn: "Back to Kids",
            location: "Location",
            cellInfo: "Get 5 points of a type to get this cell:"
        }
    };

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
                renderSelectionScreen();
                if (currentKid) {
                    showGuide(currentKid);
                }
            });
        });

        baseImg.src = tamagotchiData.base.image;

        updateStaticText();
        renderSelectionScreen();

        // Back Button
        backBtn.addEventListener('click', () => {
            guideScreen.classList.add('hidden');
            selectionScreen.classList.remove('hidden');
            backBtn.classList.add('hidden');
            currentKid = null;
            document.getElementById('app-title').textContent = texts[currentLang].title;
        });
    }

    function renderSelectionScreen() {
        kidsGrid.innerHTML = '';
        tamagotchiData.fields.forEach(kid => {
            const card = document.createElement('div');
            card.className = 'kid-card';
            const kidName = kid.name[currentLang] || kid.name.en;
            card.innerHTML = `
                <img src="${kid.image}" alt="${kidName}" class="kid-img">
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
                    <img src="${adult.image}" alt="${adult.name}">
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
                        <img src="${meal.image}" alt="${mealName}" title="${mealName}" class="main-meal-img">
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
                        <img src="${branch.young.image}" alt="${branch.young.name}">
                        ${(branch.young.cellImage || (branch.meals[0] && branch.meals[0].cellImage)) ? `<img src="${branch.young.cellImage || branch.meals[0].cellImage}" class="young-cell-img" title="Cell Icon">` : ''}
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
    }

    init();
});
