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
    const guideWindowTitle = document.getElementById('guide-window-title');

    // Campo de cada kid: etiqueta "// land field", su palabra en japonés y su color
    const fieldInfo = {
        'land-kid':     { field: 'land field',     jp: 'りく',     color: '#f2a7cf' },
        'water-kid':    { field: 'water field',    jp: 'みず',     color: '#7fbfee' },
        'sky-kid':      { field: 'sky field',      jp: 'そら',     color: '#a99cf0' },
        'forest-kid':   { field: 'forest field',   jp: 'もり',     color: '#6dd3ad' },
        'frozen-kid':   { field: 'glacier field',  jp: 'こおり',   color: '#9fb6cc' },
        'tropical-kid': { field: 'tropical field', jp: 'なんごく', color: '#ff9a8a' },
        'galaxy-kid':   { field: 'cosmic field',   jp: 'コズミック星', color: '#8f86e0' }
    };

    // "Land Kid" -> "landkid.dat"
    const windowFileName = name => `${name.toLowerCase().replace(/[^a-z0-9]+/g, '')}.dat`;

    // State
    let currentLang = 'es';
    let currentKid = null;

    // Translations Dictionary
    const texts = {
        es: {
            title: "Guía Tamagotchi Paradise",
            selectKidTitle: "¿Con qué niño empieza tu tama?",
            careGuideLink: "¿primera vez? la guía de cuidados está más abajo ↓",
            careGuideTitle: "// guía de cuidados",
            selectKidDesc: "Cada campo abre su propio camino… elige uno y sigue sus ramas según la comida y los cuidados ✧",
            awayTitle: "   vuelve pronto. . . tu planeta te espera ✦   ",
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
            revealNameBtn: "✦ revelar nombre",
            newTag: "nuevo ✧",
            unknownYet: "por confirmar",
            toolsHeading: "Herramienta útil",
            toolsBody: "Para planear tus cruces, el <strong>Genes Generator</strong> te deja ver los genes y colores de cada Tamagotchi y hacerte una idea de qué combinar:",
            toolsLink: "Abrir Tamagotchi Paradise Genes Generator ↗"
        },
        en: {
            title: "Tamagotchi Paradise Guide",
            selectKidTitle: "Which kid does your tama start as?",
            careGuideLink: "first time? the care guide is further down ↓",
            careGuideTitle: "// care guide",
            selectKidDesc: "Each field opens its own path… pick one and follow its branches by meals and care ✧",
            awayTitle: "   come back soon. . . your planet is waiting ✦   ",
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
            revealNameBtn: "✦ reveal name",
            newTag: "new ✧",
            unknownYet: "to be confirmed",
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
            sleepNote: "mientras esté despierto, que no le falte compañía ✧ (｡•ᴗ•｡)",
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
            sleepNote: "while they're awake, don't let them go without company ✧ (｡•ᴗ•｡)",
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

    const nombres = {
        snacks: {
            vividJuice:     { en: "Be Vivid Juice", es: "" },
            pastelJuice:    { en: "Be Pastel Juice", es: "" },
            loveIceCream:   { en: "Love-Love Ice Cream", es: "" },
            randomJelly:    { en: "Random Jelly / Random Boba", es: "" },
            popcorn:        { en: "Cheerful Popcorn", es: "" },
            pancakes:       { en: "Happy Pancakes", es: "" },
            goldenPeach:    { en: "Golden Peach", es: "" },
            orangeSlushy:   { en: "Sunsun Orange / White Slushy", es: "" },
            rgbJuice:       { en: "Be Red / Blue / Green Juice", es: "" },
            pastelColors:   { en: "Be Pink / Sky Blue / Purple Juice", es: "" },
            softServe:      { en: "Large Soft Serve", es: "" },
            herbalTea:      { en: "Sleepy Herbal Tea", es: "" },
            cottonCandy:    { en: "Dancing Cotton Candy", es: "" },
            sparkling:      { en: "Sparkling Drink", es: "" }
        },
        planets: {
            sweet:  { en: "Sweet · Candy World", es: "" },
            relax:  { en: "Relax · Hot Springs", es: "" },
            foodie: { en: "Foodie · Food Town", es: "" },
            art:    { en: "Art · Color Studio", es: "" },
            ninja:  { en: "Ninja · Hidden Village", es: "" },
            eco:    { en: "Eco · Nature Reserve", es: "" },
            music:  { en: "Music · Concert Hall", es: "" }
        },
        souvenirs: {
            sweet:  { en: "Crepe Hat, Fruit Balloon", es: "" },
            relax:  { en: "Head Towel, Onsen Set", es: "" },
            foodie: { en: "Bento Beret, Big Rice Scoop", es: "" },
            art:    { en: "Artist Beret, Palette", es: "" },
            ninja:  { en: "Scroll, Shuriken", es: "" },
            eco:    { en: "Electric Band, Watering Can", es: "" },
            music:  { en: "Keyboard Bow, Accordion", es: "" }
        },
        games: {
            milk:     { en: "Feeding Baby Milk", es: "" },
            vitamin:  { en: "Delivering Vitamin", es: "" },
            meals:    { en: "Matching Meals", es: "" },
            poo:      { en: "Catching Poo", es: "" },
            dust:     { en: "Cleaning Dust", es: "" },
            meteor:   { en: "Punching Meteorite", es: "" }
        }
    };

    // "@snacks.goldenPeach" -> nombre en el idioma actual
    const conNombres = text => String(text).replace(/@(\w+)\.(\w+)/g, (_, grupo, clave) => {
        const n = nombres[grupo] && nombres[grupo][clave];
        if (!n) return clave;
        return (currentLang === 'es' && n.es) ? n.es : n.en;
    });

    // Tabla de la Caza de Huevos armada desde data.js (mismos nombres de comida que en la guía)
    const campoNombre = {
        'land-kid':     { es: "Tierra",   en: "Land" },
        'water-kid':    { es: "Agua",     en: "Water" },
        'sky-kid':      { es: "Cielo",    en: "Sky" },
        'forest-kid':   { es: "Bosque",   en: "Forest" },
        'tropical-kid': { es: "Tropical", en: "Tropical" },
        'frozen-kid':   { es: "Hielo",    en: "Ice" }
    };
    function eggRowsFromData() {
        return tamagotchiData.fields
            .filter(f => campoNombre[f.id])
            .map(f => {
                const cols = { volcano: [], spring: [], either: [] };
                f.evolutions.forEach(e => e.meals.forEach(m => {
                    if (m.unknown || !m.location) return;
                    const loc = (m.location.en || '').toLowerCase();
                    const key = loc.includes('&') ? 'either' : loc.includes('volcano') ? 'volcano' : loc.includes('spring') ? 'spring' : null;
                    if (!key) return;
                    const name = (m.name[currentLang] || m.name.en).replace(/\s*\+\d+\s*$/, '');
                    cols[key].push(name);
                }));
                return [campoNombre[f.id][currentLang], cols.volcano.join(', '), cols.spring.join(', '), cols.either.join(', ')];
            });
    }

    const moreGuides = {
        es: {
            shellsTitle: "Shells y campos (dónde empieza cada una)",
            shellsIntro: "Cada ~15 minutos Babymarutchi gana una célula del campo donde está. Con 4 células iguales evoluciona al Kid de ese campo. Más campos se desbloquean a medida que sube el nivel de planeta.",
            shellsHead: ["Shell", "Campos"],
            shellsRows: [
                ["Pink Land", "Solo Tierra (inicio)"],
                ["Blue Water", "Solo Agua (inicio)"],
                ["Purple Sky", "Solo Cielo (inicio)"],
                ["Jade Forest", "Bosque, Tierra y Agua"],
                ["Orange Tropics", "Empieza en Tropical · desbloquea Bosque y luego Hielo"],
                ["White Glacier", "Empieza en Hielo · desbloquea Bosque y luego Tropical"],
                ["Neon Planets ✧", "Campo cósmico (コズミック星) · resto por confirmar"]
            ],
            foodTitle: "Cuánto cuenta cada comida (y los platos cocinados)",
            foodIntro: "Cada 5 puntos de una misma categoría suman 1 ícono de célula (máximo 4 por categoría). La categoría con más puntos define el Young. Para llegar a 1 ícono necesitas más o menos: <strong>5× comida chica</strong> (+1), <strong>3× comida grande</strong> (+2) o <strong>2× plato cocinado</strong> por el Chef Shirotama. Los platos se desbloquean con el nivel de planeta.",
            foodHead: ["Campo", "Young", "Plato cocinado (2×)"],
            foodRows: [
                ["Tierra", "Roar · Toddle · Lick", "Filete · Pie de Manzana / Zanahoria Rallada · Galleta de Insectos"],
                ["Agua", "Glide · Leap · Paddle", "Pescado Frito / Pescado a la Parrilla · Ensalada de Algas · Dumpling de Plancton"],
                ["Cielo", "Flap · Chirp · Bumble", "Filete de Pollo · Pie de Cerezas / Copos de Maíz · Gotitas de Flor"],
                ["Bosque", "Roar · Toddle · Chirp", "Bollo al Vapor · Arroz con Bambú · Mermelada de Bayas"],
                ["Tropical", "Roar · Toddle · Lick", "Hamburguesa Hawaiana · Gelatina de Frutas / Palitos de Plátano · Ensalada de Mariposa"],
                ["Hielo", "Roar · Toddle · Glide", "Stroganoff de Res · Borscht / Té con Mermelada · Blinis"]
            ],
            foodNote: "Las ramas Sprout, Float y Rocky salen cuando solo come Pellets o cuando ninguna categoría domina.",
            eggTitle: "Caza de Huevos: cómo conseguir los 9",
            eggSteps: [
                ["1", "Antes de las 19:00 entra a <strong>Tama Field → Egg Hunt</strong> (Caza de Huevos) y elige Volcán o Fuente."],
                ["2", "Elige 3 cazadores. Incluye al Tama que estás criando con la felicidad llena; los Shirotama pueden ocupar los puestos vacíos."],
                ["3", "<strong>9 de 9 huevos</strong> es una caza perfecta. Cada cazador puede salir una vez al día: mientras más residentes, más cazas."]
            ],
            eggOdds: "La comunidad estima (no es oficial) que, con tu Tama en el grupo y la felicidad llena, la caza perfecta sale más o menos <strong>1 de cada 10 veces</strong> en las shells de Tierra, Agua, Cielo y Bosque Jade, y <strong>1 de cada 2</strong> en las de Tropical y Glaciar, donde además te regalan un <strong>@snacks.goldenPeach</strong>.",
            eggHead: ["Campo", "Volcán", "Fuente", "Cualquiera de los dos"],
            eggNote: "El lugar cambia qué comidas aparecen, no las probabilidades de los 9 huevos: elige según la célula que quieras juntar.",
            snacksTitle: "Snacks especiales (efectos)",
            snacksIntro: "Se compran en la tienda del Lab según el nivel de planeta: el primer nivel es para las shells de Tierra, Agua, Cielo y Bosque Jade, y el segundo para Tropical y Glaciar. El @snacks.goldenPeach solo sale de una Caza de Huevos perfecta.",
            snacksHead: ["Snack", "Nivel", "Efecto"],
            snacksRows: [
                ["@snacks.vividJuice", "Lv.6 / Lv.3", "+1 felicidad · color vivo al azar"],
                ["@snacks.pastelJuice", "Lv.6 / Lv.3", "+1 felicidad · color pastel al azar"],
                ["@snacks.loveIceCream", "Lv.6 / Lv.3", "+5 felicidad · asegura el Breed (salvo parejas depredador/presa)"],
                ["@snacks.randomJelly", "Lv.6 / Lv.3", "Efecto al azar de uno de estos: @snacks.pancakes, @snacks.loveIceCream o @snacks.popcorn"],
                ["@snacks.popcorn", "Lv.7 / Lv.4", "+5 felicidad · da una vitamina que evita la próxima enfermedad"],
                ["@snacks.pancakes", "Lv.7 / Lv.4", "+20 felicidad · la felicidad baja más lento por un rato"],
                ["@snacks.goldenPeach", "Tropical y Glaciar", "+20 felicidad · borra 1 error de cuidado"],
                ["@snacks.orangeSlushy", "Tropical y Glaciar Lv.5", "+1 felicidad · cuerpo naranja / blanco"],
                ["@snacks.rgbJuice", "Lv.8 / Lv.5", "+1 felicidad · tiñe al Tama de ese color"],
                ["@snacks.pastelColors", "Lv.9 / Lv.6", "+1 felicidad · tiñe al Tama de ese color"],
                ["@snacks.softServe", "Lv.8 / Lv.5", "+5 felicidad · popó grande con más biocombustible"],
                ["@snacks.herbalTea", "Lv.8 / Lv.5", "+20 felicidad · el Tama toma una siesta"],
                ["@snacks.cottonCandy", "Lv.9 / Lv.6", "+5 felicidad · el Tama baila"],
                ["@snacks.sparkling", "Lv.9 / Lv.6", "+5 felicidad · brillitos alrededor del Tama"]
            ],
            travelTitle: "Viajes espaciales (planetas)",
            travelIntro: "Cada planeta te da recuerdos para decorar tu planeta. Si equipas los dos recuerdos del mismo planeta, sus residentes pueden venir de visita.",
            travelHead: ["Planeta", "Residentes", "Recuerdos"],
            travelRows: [
                ["@planets.sweet", "Donutchi, Hotcaketchi", "@souvenirs.sweet"],
                ["@planets.relax", "Beartchi, Onsenmoguratchi", "@souvenirs.relax"],
                ["@planets.foodie", "Happyburgertchi, Pizalinatchi", "@souvenirs.foodie"],
                ["@planets.art", "Crayontchi, Paintotchi", "@souvenirs.art"],
                ["@planets.ninja", "Gozarutchi, Businosuketchi", "@souvenirs.ninja"],
                ["@planets.eco", "Hatsudentchi, Zero-usatchi", "@souvenirs.eco"],
                ["@planets.music", "Smartotchi, Pianitchi", "@souvenirs.music"]
            ],
            gamesTitle: "Minijuegos y misiones",
            gamesIntro: "Todos los minijuegos pagan lo mismo: ★★★ = 250 / 500 / 800G y ★★☆ = 100 / 300 / 450G (fácil / normal / difícil).",
            gamesHead: ["Minijuego", "★★★", "★★☆"],
            gamesRows: [
                ["@games.milk", "10 veces", "8–9 veces"],
                ["@games.vitamin", "Llegar a la meta", "61–99%"],
                ["@games.meals", "7 pares", "6 pares"],
                ["@games.poo", "30 popós", "16–29"],
                ["@games.dust", "10 rescates", "8–9"],
                ["@games.meteor", "25+ golpes", "20–24"]
            ],
            missionsIntro: "Las misiones dan Gotchi Points; cada acción que cumple suma +1.",
            missionsHead: ["#", "Meta", "Misión"],
            missionsRows: [
                ["01", "500", "Dar comida"],
                ["02", "500", "Dar snacks"],
                ["03", "100", "Bañar Tamas"],
                ["04", "100", "Jugar sin errores (Play)"],
                ["05", "100", "Usar Clean Poop (cuenta el botón, no las popós)"],
                ["06", "1000", "Juntar popós como biocombustible (la café oscura no cuenta)"],
                ["07", "10", "Que Shirotama atrape la popó apenas aparece"],
                ["08", "7", "Visitar los 7 planetas"],
                ["09", "50", "Mandarlo a dormir entre 19:00 y 21:59"],
                ["10", "50", "Despertarlo entre 6:00 y 9:59"],
                ["11", "100", "Usar la conexión (Playdate)"],
                ["12", "50", "Enviar regalos"],
                ["13", "100", "Minijuegos perfectos"],
                ["14", "99999", "Gotchi Points en total"],
                ["15", "50", "Breed exitosos"],
                ["16", "50", "Cazas de Huevos perfectas (9 huevos)"],
                ["17", "18", "Comidas distintas conseguidas en la Caza de Huevos"],
                ["18", "12", "Recetas nuevas del Chef Shirotama"],
                ["19", "16", "Tipos de Tama criados en Tierra"],
                ["20", "16", "Tipos de Tama criados en Agua"],
                ["21", "16", "Tipos de Tama criados en Cielo"],
                ["22", "16", "Colores de Tama criados (cuentan Baby, Kid y Young)"]
            ]
        },
        en: {
            shellsTitle: "Shells & fields (where each one starts)",
            shellsIntro: "About every 15 minutes Babymarutchi gains a cell of the field it's in. With 4 matching cells it evolves into that field's Kid. More fields unlock as your planet level goes up.",
            shellsHead: ["Shell", "Fields"],
            shellsRows: [
                ["Pink Land", "Land only (start)"],
                ["Blue Water", "Water only (start)"],
                ["Purple Sky", "Sky only (start)"],
                ["Jade Forest", "Forest, Land and Water"],
                ["Orange Tropics", "Starts in Tropical · unlocks Forest, then Ice"],
                ["White Glacier", "Starts in Ice · unlocks Forest, then Tropical"],
                ["Neon Planets ✧", "Cosmic field (コズミック星) · rest to be confirmed"]
            ],
            foodTitle: "How much each food counts (and cooked meals)",
            foodIntro: "Every 5 points of the same category add 1 cell icon (max 4 per category). The category with the most points decides the Young. For 1 icon you need roughly: <strong>5× small food</strong> (+1), <strong>3× big food</strong> (+2) or <strong>2× cooked meal</strong> by Chef Shirotama. Cooked meals unlock with planet level.",
            foodHead: ["Field", "Young", "Cooked meal (2×)"],
            foodRows: [
                ["Land", "Roar · Toddle · Lick", "Steak · Apple Pie / Shredded Carrot · Bug Biscuit"],
                ["Water", "Glide · Leap · Paddle", "Fried Fish / Grilled Fish · Seaweed Salad · Plankton Dumpling"],
                ["Sky", "Flap · Chirp · Bumble", "Chicken Steak · Cherry Pie / Corn Flakes · Flower Drops"],
                ["Forest", "Roar · Toddle · Chirp", "Steamed Bun · Bamboo Rice · Berry Jam"],
                ["Tropical", "Roar · Toddle · Lick", "Hawaiian Burger · Fruit Jelly / Banana Sticks · Butterfly Salad"],
                ["Ice", "Roar · Toddle · Glide", "Beef Stroganoff · Borscht / Hot Tea with Jam · Blinis"]
            ],
            foodNote: "Sprout, Float and Rocky branches come from eating only Pellets or when no category is dominant.",
            eggTitle: "Egg Hunt: how to get all 9",
            eggSteps: [
                ["1", "Before 7 PM open <strong>Tama Field → Egg Hunt</strong> and pick Volcano or Spring."],
                ["2", "Choose 3 hunters. Include the Tama you're raising with full Happiness; Shirotamas can fill empty spots."],
                ["3", "<strong>9 out of 9 eggs</strong> is a perfect hunt. Each hunter can go once per day: more residents, more hunts."]
            ],
            eggOdds: "The community estimates (not official) that, with your Tama in the party at full Happiness, a perfect hunt happens about <strong>1 in 10 times</strong> on the Land, Water, Sky and Jade Forest shells, and <strong>1 in 2</strong> on Tropical and Glacier, where it also gives you a <strong>@snacks.goldenPeach</strong>.",
            eggHead: ["Field", "Volcano", "Spring", "Either"],
            eggNote: "The location changes which foods appear, not the nine-egg odds: pick it based on the cell you want to build.",
            snacksTitle: "Special snacks (effects)",
            snacksIntro: "Sold in the Lab Shop by planet level: the first level is for the Land, Water, Sky and Jade Forest shells, the second for Tropical and Glacier. The @snacks.goldenPeach only comes from a perfect Egg Hunt.",
            snacksHead: ["Snack", "Level", "Effect"],
            snacksRows: [
                ["@snacks.vividJuice", "Lv.6 / Lv.3", "+1 Happy · random vivid color"],
                ["@snacks.pastelJuice", "Lv.6 / Lv.3", "+1 Happy · random pastel color"],
                ["@snacks.loveIceCream", "Lv.6 / Lv.3", "+5 Happy · guarantees Breed (except predator/prey pairs)"],
                ["@snacks.randomJelly", "Lv.6 / Lv.3", "Random effect of: @snacks.pancakes, @snacks.loveIceCream or @snacks.popcorn"],
                ["@snacks.popcorn", "Lv.7 / Lv.4", "+5 Happy · adds a vitamin that prevents the next sickness"],
                ["@snacks.pancakes", "Lv.7 / Lv.4", "+20 Happy · slows happiness loss for a while"],
                ["@snacks.goldenPeach", "Tropical & Glacier", "+20 Happy · removes 1 care mistake"],
                ["@snacks.orangeSlushy", "Tropical & Glacier Lv.5", "+1 Happy · orange / white body"],
                ["@snacks.rgbJuice", "Lv.8 / Lv.5", "+1 Happy · dyes the Tama that color"],
                ["@snacks.pastelColors", "Lv.9 / Lv.6", "+1 Happy · dyes the Tama that color"],
                ["@snacks.softServe", "Lv.8 / Lv.5", "+5 Happy · big poop with extra biofuel"],
                ["@snacks.herbalTea", "Lv.8 / Lv.5", "+20 Happy · the Tama takes a nap"],
                ["@snacks.cottonCandy", "Lv.9 / Lv.6", "+5 Happy · the Tama dances"],
                ["@snacks.sparkling", "Lv.9 / Lv.6", "+5 Happy · sparkles around the Tama"]
            ],
            travelTitle: "Space travel (planets)",
            travelIntro: "Each planet gives you souvenirs to decorate your planet. Equip both souvenirs from the same planet and its residents may come visit.",
            travelHead: ["Planet", "Residents", "Souvenirs"],
            travelRows: [
                ["@planets.sweet", "Donutchi, Hotcaketchi", "@souvenirs.sweet"],
                ["@planets.relax", "Beartchi, Onsenmoguratchi", "@souvenirs.relax"],
                ["@planets.foodie", "Happyburgertchi, Pizalinatchi", "@souvenirs.foodie"],
                ["@planets.art", "Crayontchi, Paintotchi", "@souvenirs.art"],
                ["@planets.ninja", "Gozarutchi, Businosuketchi", "@souvenirs.ninja"],
                ["@planets.eco", "Hatsudentchi, Zero-usatchi", "@souvenirs.eco"],
                ["@planets.music", "Smartotchi, Pianitchi", "@souvenirs.music"]
            ],
            gamesTitle: "Mini games & missions",
            gamesIntro: "Every mini game pays the same: ★★★ = 250 / 500 / 800G and ★★☆ = 100 / 300 / 450G (easy / normal / hard).",
            gamesHead: ["Mini game", "★★★", "★★☆"],
            gamesRows: [
                ["@games.milk", "10 times", "8–9 times"],
                ["@games.vitamin", "Reach goal", "61–99%"],
                ["@games.meals", "7 pairs", "6 pairs"],
                ["@games.poo", "30 pieces", "16–29"],
                ["@games.dust", "10 rescues", "8–9"],
                ["@games.meteor", "25+ hits", "20–24"]
            ],
            missionsIntro: "Missions give Gotchi Points; each qualifying action adds +1.",
            missionsHead: ["#", "Goal", "Mission"],
            missionsRows: [
                ["01", "500", "Feed food"],
                ["02", "500", "Feed snacks"],
                ["03", "100", "Clean Tamas"],
                ["04", "100", "Perfect Play games"],
                ["05", "100", "Use Clean Poop (counts the tap, not the poops)"],
                ["06", "1000", "Collect poops as biofuel (dark brown doesn't count)"],
                ["07", "10", "Shirotama catches poop right after it appears"],
                ["08", "7", "Visit all 7 planets"],
                ["09", "50", "Put it to sleep between 7:00 and 9:59 PM"],
                ["10", "50", "Wake it up between 6:00 and 9:59 AM"],
                ["11", "100", "Use connection (Playdate)"],
                ["12", "50", "Send gifts"],
                ["13", "100", "Perfect mini games"],
                ["14", "99999", "Total Gotchi Points"],
                ["15", "50", "Successful Breeds"],
                ["16", "50", "Perfect Egg Hunts (9 eggs)"],
                ["17", "18", "New foods obtained in Egg Hunt"],
                ["18", "12", "New Chef Shirotama recipes"],
                ["19", "16", "Tama types raised in Land"],
                ["20", "16", "Tama types raised in Water"],
                ["21", "16", "Tama types raised in Sky"],
                ["22", "16", "Tama colors raised (Baby, Kid and Young count)"]
            ]
        }
    };
    
    function renderHelpAccordion() {
        const host = document.getElementById('help-accordion');
        if (!host) return;
        const t = texts[currentLang];
        const g = guideExtras[currentLang];
        const m = moreGuides[currentLang];
        const eggStepsHtml = m.eggSteps.map(r => `<li><strong>${r[0]}.</strong> ${r[1]}</li>`).join('');
        const stagesHtml = t.stages.map(s => `<li><strong>${s[0]}:</strong> ${s[1]}</li>`).join('');
        const tiersHtml = g.tiers.map(r => `<li><strong>${r[0]}:</strong> ${r[1]}</li>`).join('');
        const cellHtml = g.cellRows.map(r => `<li><strong>${r[0]}:</strong> ${r[1]}</li>`).join('');
        const table = (head, rows) =>
            `<div class="table-scroll"><table class="info-table"><thead><tr>${head.map(h => `<th>${h}</th>`).join('')}</tr></thead>`
            + `<tbody>${rows.map(r => `<tr>${r.map(c => `<td>${c}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;

        host.innerHTML = conNombres(`
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
                <summary>${m.shellsTitle}</summary>
                <div class="help-body">
                    <p>${m.shellsIntro}</p>
                    ${table(m.shellsHead, m.shellsRows)}
                </div>
            </details>
    
            <details class="help-box">
                <summary>${m.foodTitle}</summary>
                <div class="help-body">
                    <p>${m.foodIntro}</p>
                    ${table(m.foodHead, m.foodRows)}
                    <p>${m.foodNote}</p>
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
                <summary>${m.eggTitle}</summary>
                <div class="help-body">
                    <ul class="lifespans">${eggStepsHtml}</ul>
                    <p>${m.eggOdds}</p>
                    ${table(m.eggHead, eggRowsFromData())}
                    <p>${m.eggNote}</p>
                </div>
            </details>

            <details class="help-box">
                <summary>${m.snacksTitle}</summary>
                <div class="help-body">
                    <p>${m.snacksIntro}</p>
                    ${table(m.snacksHead, m.snacksRows)}
                </div>
            </details>

            <details class="help-box">
                <summary>${m.travelTitle}</summary>
                <div class="help-body">
                    <p>${m.travelIntro}</p>
                    ${table(m.travelHead, m.travelRows)}
                </div>
            </details>

            <details class="help-box">
                <summary>${m.gamesTitle}</summary>
                <div class="help-body">
                    <p>${m.gamesIntro}</p>
                    ${table(m.gamesHead, m.gamesRows)}
                    <p>${m.missionsIntro}</p>
                    ${table(m.missionsHead, m.missionsRows)}
                </div>
            </details>

            <details class="help-box">
                <summary>${t.toolsHeading}</summary>
                <div class="help-body">
                    <p>${t.toolsBody}</p>
                    <a class="tool-link" href="https://tamaparagenerator.streamlit.app/" target="_blank" rel="noopener noreferrer">${t.toolsLink}</a>
                </div>
            </details>
        `);
    }
    
    function updateStaticText() {
        if (!currentKid) {
            document.getElementById('app-title').textContent = texts[currentLang].title;
        }
        document.querySelector('.selection-intro h2').textContent = texts[currentLang].selectKidTitle;
        document.querySelector('.selection-intro p').textContent = texts[currentLang].selectKidDesc;
        document.getElementById('care-guide-link').textContent = texts[currentLang].careGuideLink;
        document.getElementById('care-guide-title').textContent = texts[currentLang].careGuideTitle;
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
            card.className = kid.isNew ? 'kid-card kid-card--new' : 'kid-card';
            const kidName = kid.name[currentLang] || kid.name.en;
            const info = fieldInfo[kid.id];
            const fieldHtml = info ? `
                <span class="kid-field" style="--field-color: ${info.color};">
                    <span class="kid-field-name">// ${info.field}</span>
                    <span class="kid-field-jp" lang="ja">${info.jp}</span>
                </span>` : '';
            card.innerHTML = `
                ${kid.isNew ? `<span class="kid-new-tag">${texts[currentLang].newTag}</span>` : ''}
                <img loading="lazy" decoding="async" src="${kid.image}" alt="${kidName}" class="kid-img">
                <h3 class="kid-name">${kidName}</h3>
                ${fieldHtml}
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
        guideWindowTitle.textContent = windowFileName(kidData.name.en || kidName);

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
                if (meal.unknown) return `
                <div class="meal-indicator meal-indicator--unknown">
                    <div class="meal-images-wrapper"><div class="meal-unknown" aria-hidden="true">?</div></div>
                    <span style="font-size: 0.9rem;">???</span>
                    <span style="font-size: 0.75rem; color: var(--text-muted);"><span class="loc-mark" aria-hidden="true">⌖</span> ${texts[currentLang].unknownYet}</span>
                </div>`;
                const mealName = meal.name[currentLang] || meal.name.en;
                const locName = meal.location[currentLang] || meal.location.en;
                return `
                <div class="meal-indicator">
                    <div class="meal-images-wrapper">
                        <img loading="lazy" decoding="async" src="${meal.image}" alt="${mealName}" title="${mealName}" class="main-meal-img">
                    </div>
                    <span style="font-size: 0.9rem;">${mealName}</span>
                    <span style="font-size: 0.75rem; color: var(--text-muted);"><span class="loc-mark" aria-hidden="true">⌖</span> ${locName}</span>
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
                    
                    <span class="arrow" aria-hidden="true">→</span>
                    
                    <!-- Meal Requirement(s) -->
                    <div class="evo-step meal-step">
                        <span class="cell-info-text">${texts[currentLang].cellInfo}</span>
                        <div style="display: flex; flex-direction: row; flex-wrap: wrap; gap: 15px; justify-content: center; width: 100%;">
                            ${mealsHtml}
                        </div>
                    </div>
                    
                    <span class="arrow" aria-hidden="true">→</span>
                    
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
            <span class="secret-badge">✧ ${t.secretTitle}</span>
            ${s.image
                ? `<img class="secret-img" src="${s.silhouette}" data-sil="${s.silhouette}" data-color="${s.image}" data-revealed="0" alt="${t.secretTitle}">`
                : `<div class="secret-img secret-img--unknown" data-revealed="0" role="img" aria-label="${t.secretTitle}">?</div>`}
            <h3 class="secret-name">???</h3>
            <p class="secret-cond">${s.condition[currentLang] || s.condition.en}</p>
            <button class="secret-reveal-btn">${s.image ? t.revealBtn : t.revealNameBtn}</button>
        `;
        const img = secretEl.querySelector('.secret-img');
        const nameEl = secretEl.querySelector('.secret-name');
        const btn = secretEl.querySelector('.secret-reveal-btn');
        // la silueta hace "glitch" como una señal que se sintoniza y a mitad cambia de imagen
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        btn.addEventListener('click', () => {
            const revealed = img.dataset.revealed === '1';
            const swap = () => {
                // sin diseño conocido: solo se revela el nombre
                if (s.image) img.src = revealed ? img.dataset.sil : img.dataset.color;
                img.dataset.revealed = revealed ? '0' : '1';
                img.classList.toggle('is-revealed', !revealed);
                nameEl.textContent = revealed ? '???' : s.name;
                btn.textContent = revealed ? (s.image ? t.revealBtn : t.revealNameBtn) : t.hideBtn;
                btn.classList.toggle('revealed', !revealed);
            };
            if (reduceMotion) { swap(); return; }
            btn.disabled = true;
            img.classList.remove('is-glitching');
            void img.offsetWidth; // reinicia la animación
            img.classList.add('is-glitching');
            setTimeout(swap, 260);
            setTimeout(() => { img.classList.remove('is-glitching'); btn.disabled = false; }, 560);
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
        guideWindowTitle.textContent = windowFileName(base.name);
        document.querySelector('.guide-desc').innerHTML = base.label[currentLang];

        evolutionsContainer.innerHTML = '';
        evolutionsContainer.appendChild(buildSecretCard(base.secret));
    }

    const guideWindowClose = document.getElementById('guide-window-close');
    if (guideWindowClose) guideWindowClose.addEventListener('click', goBackToKids);

    // Title in the tab
    const originalTitle = document.title;
    let awayInterval = null;
    document.addEventListener('visibilitychange', () => {
        clearInterval(awayInterval);
        if (document.hidden) {
            let s = texts[currentLang].awayTitle;
            document.title = s;
            awayInterval = setInterval(() => {
                s = s.substring(1) + s[0];
                document.title = s;
            }, 50);
        } else {
            document.title = originalTitle;
        }
    });

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
