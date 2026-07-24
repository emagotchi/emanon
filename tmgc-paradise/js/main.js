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

    // Structured extra guide data (bilingual) for the info accordions
    const guideExtras = {
        es: {
            tiersTitle: "Calidad del adulto (Perfecto / Bueno / Regular / Descuidado)",
            tiersIntro: "Para el mejor adulto (Perfecto ★) necesitas cumplir 3 condiciones durante la etapa Young: llenar el hambre 5 veces (×5 o más iconos de comida), llenar la felicidad 5 veces (×5 o más iconos de sol) y 0 errores de cuidado. El hambre se puede llenar en cualquier momento; la felicidad sube con minijuegos y snacks.",
            tiers: [
                ["Perfecto ★", "0 errores • las 3 condiciones cumplidas"],
                ["Bueno", "0-1 errores • buena calidad"],
                ["Regular", "2-5 errores • calidad media"],
                ["Descuidado", "6+ errores • calidad baja"]
            ],
            timerTitle: "Temporizador de cuidado y horario de sueño",
            timerIntro: "Cada cuánto tu Tama pide atención y cuánto dura cada etapa (datos del juego). Un error de cuidado ocurre si no respondes dentro de 15 minutos después de que un medidor llega a 0.",
            timerHead: ["Etapa", "Hambre", "Felicidad", "Evoluciona"],
            timerRows: [
                ["Bebé", "~15 min", "~25 min", "~1 h"],
                ["Niño (Kid)", "45 min", "20 min", "24 h"],
                ["Joven (Young)", "60 min", "30 min", "24 h"],
                ["Adulto", "40-90 min", "30-90 min", "—"]
            ],
            sleepHead: ["Momento", "Horario", "Qué pasa"],
            sleepRows: [
                ["Mañana", "6:00 – 9:59", "Puedes elegir despertar a tu Tama"],
                ["Tarde", "10:00 – 18:59", "El Tama despierta solo"],
                ["Noche", "19:00 – 21:59", "Puedes elegir mandarlo a dormir"],
                ["Madrugada", "22:00 – 5:59", "El Tama se duerme solo"]
            ],
            cellTitle: "Cómo leer las células de tu tamagotchi",
            cellRows: [
                ["Hambre", "Bola de arroz. +1 icono cada vez que llenas el hambre • necesitas ×5 para Perfecto."],
                ["Felicidad", "Sol. +1 icono cada vez que llenas la felicidad • necesitas ×5 para Perfecto."],
                ["Error de cuidado", "Remolino. Medidor vacío por más de 15 min = +1 • se acumula desde la etapa Kid."],
                ["Enfermedad", "Personaje con pinchos. Toca el botón para curar • si lo ignoras = +1 error de cuidado."],
                ["Vitamina", "Punto amarillo. Se obtiene del Cheerful Popcorn • previene la próxima enfermedad por descuido."]
            ],
            planetTitle: "Niveles de planeta (qué se desbloquea)",
            planetIntro: "El nivel de planeta sube cada vez que tu Tama llega a una nueva forma adulta y es liberado al bioma. Cada nivel desbloquea nuevas funciones.",
            planetHead: ["Nivel", "Cuándo", "Desbloquea"],
            planetRows: [
                ["Lv.0", "Por defecto", "—"],
                ["Lv.1", "etapa Kid", "Tienda de comida y snacks • 2 cazadores • 3 minijuegos (fácil)"],
                ["Lv.2", "etapa Young", "Juguetes de exterior"],
                ["Lv.3", "1er adulto", "Criar (Breed) • nuevo huevo"],
                ["Lv.4", "Nueva generación", "Campo 2 • +3 minijuegos fáciles (Vitaminas, Comidas, Atrapa Popó)"],
                ["Lv.5", "Cambiar de campo", "Cocinar comidas (chef Shirotama)"],
                ["Lv.6", "2do adulto", "Campo 3 • dificultad normal • viaje espacial (Sweet + Relax) • items de decoración • vender • snacks especiales (Vivid Juice, Pastel Juice, Love-Love Ice Cream, Random Jelly)"],
                ["Lv.7", "3er adulto", "Viaje a Foodie Planet • Happy Pancakes • Cheerful Popcorn"],
                ["Lv.8", "4to adulto", "Viaje a Art Planet • jugos rojo/azul/verde • Large Soft Serve • Sleepy Herbal Tea"],
                ["Lv.9", "5to adulto", "Viaje a Ninja Planet • jugos rosa/celeste/morado • Dancing Cotton Candy • Sparkling Drink • dificultad difícil"],
                ["Lv.10", "6to adulto", "Viaje a Eco + Music Planet • 4to cazador • créditos del staff del Lab"]
            ],
            jadeTitle: "Jade Forest — desbloqueos con otro timing",
            jadeRows: [
                ["Lv.1", "Kid", "Minijuego Cloudy Coin Catch (reemplaza Limpiar Polvo)"],
                ["Lv.3", "1er adulto", "Items de decoración • viaje Sweet + Relax (antes de lo normal)"],
                ["Lv.4", "Nueva gen", "Campo de Tierra 2 • viaje a Foodie Planet"],
                ["Lv.5", "Cambiar", "Viaje a Art Planet"],
                ["Lv.6", "2do adulto", "Campo de Agua 3 • viaje a Ice Planet • Random Boba (reemplaza Random Jelly)"],
                ["Lv.7", "3er adulto", "Viaje a Eco + Music Planet"],
                ["Lv.8", "4to adulto", "Be Dark Green Juice (reemplaza Be Green Juice)"]
            ],
            sourceNote: "Datos de niveles y temporizadores recopilados por la comunidad (Neomametchi · TamaParaResearch)."
        },
        en: {
            tiersTitle: "Adult quality (Best / Good / Mid / Poor)",
            tiersIntro: "For the best adult (Best ★) you must meet 3 conditions during the Young stage: fill Hunger 5 times (×5 or more rice ball icons), fill Happiness 5 times (×5 or more sun icons), and 0 care mistakes. Hunger can be filled anytime; Happiness fills via minigames and snacks.",
            tiers: [
                ["Best ★", "0 mistakes • all 3 conditions met"],
                ["Good", "0-1 mistakes • good quality"],
                ["Mid", "2-5 mistakes • mid tier"],
                ["Poor", "6+ mistakes • low quality"]
            ],
            timerTitle: "Care timer & sleep schedule",
            timerIntro: "How often your Tama asks for attention and how long each stage lasts (game data). A care mistake happens if you don't respond within 15 minutes after a meter hits 0.",
            timerHead: ["Stage", "Hunger", "Happiness", "Evolves"],
            timerRows: [
                ["Baby", "~15 min", "~25 min", "~1 h"],
                ["Kid", "45 min", "20 min", "24 h"],
                ["Young", "60 min", "30 min", "24 h"],
                ["Adult", "40-90 min", "30-90 min", "—"]
            ],
            sleepHead: ["Time", "Hours", "What happens"],
            sleepRows: [
                ["Morning", "6:00 – 9:59", "You can choose to wake your Tama"],
                ["Afternoon", "10:00 – 18:59", "The Tama wakes up on its own"],
                ["Evening", "19:00 – 21:59", "You can choose to put it to sleep"],
                ["Night", "22:00 – 5:59", "The Tama goes to sleep on its own"]
            ],
            sleepNote: "Play with them as much as possible while they're awake!",
            cellTitle: "How to read the Tama Cell",
            cellRows: [
                ["Hunger", "Rice ball. +1 icon each time you fill Hunger • need ×5 for Best."],
                ["Happiness", "Sun. +1 icon each time you fill Happiness • need ×5 for Best."],
                ["Care mistake", "Whirlwind. Meter empty for over 15 min = +1 • accumulates from the Kid stage."],
                ["Sick", "Spiky character. Tap the button to cure it • if ignored = +1 care mistake."],
                ["Vitamin", "Yellow dot. Obtained from Cheerful Popcorn • prevents the next sickness from neglect."]
            ],
            planetTitle: "Planet levels (what unlocks)",
            planetIntro: "Planet Level increases each time your Tama reaches a new adult form and is released into the field. Each level unlocks new features.",
            planetHead: ["Level", "Reach when", "Unlocks"],
            planetRows: [
                ["Lv.0", "Default", "—"],
                ["Lv.1", "Kid", "Food & Snack shop • 2 Hunters • 3 Mini Games (Easy)"],
                ["Lv.2", "Young", "Outside Toys"],
                ["Lv.3", "1st Adult", "Breed • New Egg"],
                ["Lv.4", "New Gen", "Field 2 • +3 Easy Mini Games (Vitamins, Meals, Poo Catch)"],
                ["Lv.5", "Switch Fields", "Cook Meals (Shirotama chef)"],
                ["Lv.6", "2nd Adult", "Field 3 • Normal difficulty • Space Travel (Sweet + Relax) • Deco Items • Selling • Special Snacks (Vivid Juice, Pastel Juice, Love-Love Ice Cream, Random Jelly)"],
                ["Lv.7", "3rd Adult", "Foodie Planet travel • Happy Pancakes • Cheerful Popcorn"],
                ["Lv.8", "4th Adult", "Art Planet travel • Red/Blue/Green Juice • Large Soft Serve • Sleepy Herbal Tea"],
                ["Lv.9", "5th Adult", "Ninja Planet travel • Pink/Sky Blue/Purple Juice • Dancing Cotton Candy • Sparkling Drink • Hard difficulty"],
                ["Lv.10", "6th Adult", "Eco + Music Planet travel • 4th Hunter • Lab Staff Credits"]
            ],
            jadeTitle: "Jade Forest — different unlock timing",
            jadeRows: [
                ["Lv.1", "Kid", "Cloudy Coin Catch mini game (replaces Cleaning Dust)"],
                ["Lv.3", "1st Adult", "Deco Items • Sweet + Relax travel (earlier than normal)"],
                ["Lv.4", "New Gen", "Land Field 2 • Foodie Planet travel"],
                ["Lv.5", "Switch Fields", "Art Planet travel"],
                ["Lv.6", "2nd Adult", "Water Field 3 • Ice Planet travel • Random Boba (replaces Random Jelly)"],
                ["Lv.7", "3rd Adult", "Eco + Music Planet travel"],
                ["Lv.8", "4th Adult", "Be Dark Green Juice (replaces Be Green Juice)"]
            ],
            sourceNote: "Level and timer data compiled by the community (Neomametchi · TamaParaResearch)."
        }
    };

    function renderHelpAccordion() {
        const host = document.getElementById('help-accordion');
        if (!host) return;
        const t = texts[currentLang];
        const g = guideExtras[currentLang];
        const stagesHtml = t.stages.map(s => `<li><strong>${s[0]}:</strong> ${s[1]}</li>`).join('');
        const tiersHtml = g.tiers.map(r => `<li><strong>${r[0]}:</strong> ${r[1]}</li>`).join('');
        const cellHtml = g.cellRows.map(r => `<li><strong>${r[0]}:</strong> ${r[1]}</li>`).join('');
        const table = (head, rows) =>
            `<table class="info-table"><thead><tr>${head.map(h => `<th>${h}</th>`).join('')}</tr></thead>`
            + `<tbody>${rows.map(r => `<tr>${r.map(c => `<td>${c}</td>`).join('')}</tr>`).join('')}</tbody></table>`;

        host.innerHTML = `
            <details class="help-box">
                <summary>${t.helpTitle}</summary>
                <div class="help-body">
                    <h4>${t.careHeading}</h4>
                    <p>${t.careBody}</p>
                    <h4>${g.tiersTitle}</h4>
                    <p>${g.tiersIntro}</p>
                    <ul class="lifespans">${tiersHtml}</ul>
                    <h4>${t.branchHeading}</h4>
                    <p>${t.branchBody}</p>
                    <h4>${t.lifeHeading}</h4>
                    <p>${t.lifeBody}</p>
                    <ul class="lifespans">${stagesHtml}</ul>
                </div>
            </details>

            <details class="help-box">
                <summary>${g.timerTitle}</summary>
                <div class="help-body">
                    <p>${g.timerIntro}</p>
                    ${table(g.timerHead, g.timerRows)}
                    ${table(g.sleepHead, g.sleepRows)}
                    <p>${g.sleepNote}</p>
                </div>
            </details>

            <details class="help-box">
                <summary>${g.cellTitle}</summary>
                <div class="help-body">
                    <ul class="lifespans">${cellHtml}</ul>
                </div>
            </details>

            <details class="help-box">
                <summary>${g.planetTitle}</summary>
                <div class="help-body">
                    <p>${g.planetIntro}</p>
                    ${table(g.planetHead, g.planetRows)}
                    <h4>${g.jadeTitle}</h4>
                    ${table(g.planetHead, g.jadeRows)}
                    <p class="source-note">${g.sourceNote}</p>
                </div>
            </details>

            <details class="help-box">
                <summary>${t.toolsHeading}</summary>
                <div class="help-body">
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
