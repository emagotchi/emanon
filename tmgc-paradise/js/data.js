// Tamagotchi Paradise Data Structure
// Supports multiple meals per branch, locations for meals, and ES/EN languages.

const tamagotchiData = {
    base: {
        id: "babymarutchi",
        name: "Babymarutchi",
        image: "assets/characters/babymarutchi.webp",
        label: { es: "Forma Base", en: "Base Form" },
        secret: {
            name: "Babymarutchi (adulto)",
            image: "assets/characters/babymarutchi.webp",
            silhouette: "assets/secrets/babymarutchi_sil.png",
            condition: {
                es: "Si Babymarutchi no evoluciona a ningún Kid dentro de sus primeras 4 horas (porque no llega a juntar 4 células del mismo campo), evoluciona directo a la etapa adulta… quedándose como Babymarutchi para siempre. Es el único adulto que no cambia de aspecto.",
                en: "If Babymarutchi doesn't evolve into any Kid within its first 4 hours (because it never collects 4 of the same Field Cell), it evolves straight to the adult stage… staying as Babymarutchi forever. It's the only adult that never changes appearance."
            }
        }
    },
    fields: [
        {
            id: "land-kid",
            name: { es: "", en: "Land Kid" },
            image: "assets/characters/land field/land-kid.webp",
            evolutionText: {
                es: "Se obtiene una <img src='assets/stats/land.png' class='inline-icon'> Célula de Tierra por cada 15 minutos que Babymarutchi pase en el Campo de Tierra. <br> Cuando tengas 4 Células de Tierra, evolucionará en Land Kid.",
                en: "A <img src='assets/stats/land.png' class='inline-icon'> Land Cell is obtained for every 15 minutes Babymarutchi spends in the Land Field. <br> When it has 4 Land Cells it will evolve into Land Kid."
            },
            secret: { name: "Chodracotchi", image: "assets/characters/land field/chodracotchi.webp", silhouette: "assets/secrets/chodracotchi_sil.png", condition: { es: "Se obtiene <strong>conectando</strong> una shell Pink Land con dos shells de distinto color durante la etapa Young. No evoluciona desde una rama normal.", en: "Obtained by <strong>connecting</strong> a Pink Land shell with two different color shells during the Young stage. Does not evolve from a normal branch." } },
            evolutions: [
                {
                    young: { name: "Sprout Young", image: "assets/characters/land field/sprout-young.webp" },
                    meals: [
                        { name: { es: "Pellets +1", en: "Pellets +1" }, image: "assets/meals/pellets.webp", location: { es: "General", en: "General" }, cellImage: "assets/stats/onigiri.png" },
                    ],
                    adults: [
                        { name: "Violetchi", image: "assets/characters/land field/sprout species/furawatchi.webp", careMistakes: "0", excellentCares: "5+" },
                        { name: "Potsunentchi", image: "assets/characters/land field/sprout species/potsunentchi.webp", careMistakes: "0-1" },
                        { name: "Tustustchi", image: "assets/characters/land field/sprout species/tustustchi.webp", careMistakes: "2-5" },
                        { name: "Shigemi-san", image: "assets/characters/land field/sprout species/shigemi-san.webp", careMistakes: "6+" }
                    ]
                },
                {
                    young: { name: "Roar Young", image: "assets/characters/land field/roar-young.webp" },
                    meals: [
                        { name: { es: "Carne Pequeña +1", en: "Small Meat +1" }, image: "assets/meals/volcano/small-meat.webp", location: { es: "Volcán", en: "Volcano" }, cellImage: "assets/stats/meat-cell.png" },
                        { name: { es: "Carne Grande +2", en: "Big Meat +2" }, image: "assets/meals/volcano/big-meat.webp", location: { es: "Volcán", en: "Volcano" }, cellImage: "assets/stats/meat-cell.png" }
                    ],
                    adults: [
                        { name: "Meowtchi", image: "assets/characters/land field/roar species/meowtchi.webp", careMistakes: "0", excellentCares: "5+" },
                        { name: "Pochitchi", image: "assets/characters/land field/roar species/pochitchi.webp", careMistakes: "0-1" },
                        { name: "Gumax", image: "assets/characters/land field/roar species/gumax.webp", careMistakes: "2-5" },
                        { name: "Ratchi", image: "assets/characters/land field/roar species/ratchi.webp", careMistakes: "6+" }
                    ]
                },
                {
                    young: { name: "Toddle Young", image: "assets/characters/land field/toddle-young.webp" },
                    meals: [
                        { name: { es: "Zanahoria +1", en: "Carrot +1" }, image: "assets/meals/spring/carrot.webp", location: { es: "Fuente", en: "Spring" }, cellImage: "assets/stats/carrot-cell.png" },
                        { name: { es: "Manzana +2", en: "Apple +2" }, image: "assets/meals/spring/apple.webp", location: { es: "Fuente", en: "Spring" }, cellImage: "assets/stats/carrot-cell.png" }
                    ],
                    adults: [
                        { name: "Mametchi", image: "assets/characters/land field/toddle species/mametchi.webp", careMistakes: "0", excellentCares: "5+" },
                        { name: "Mimitchi", image: "assets/characters/land field/toddle species/mimitchi.webp", careMistakes: "0-1" },
                        { name: "Molmotchi", image: "assets/characters/land field/toddle species/molmotchi.webp", careMistakes: "2-5" },
                        { name: "Sheeptchi", image: "assets/characters/land field/toddle species/sheeptchi.webp", careMistakes: "6+" }
                    ]
                },
                {
                    young: { name: "Lick Young", image: "assets/characters/land field/lick-young.webp" },
                    meals: [
                        { name: { es: "Gusanos +1", en: "Meal Worms +1" }, image: "assets/meals/meal-worms.webp", location: { es: "Volcán y Fuente", en: "Volcano & Spring" }, cellImage: "assets/stats/worm-cell.png" },
                        { name: { es: "Insectos +2", en: "Meal Bugs +2" }, image: "assets/meals/meal-bugs.webp", location: { es: "Volcán y Fuente", en: "Volcano & Spring" }, cellImage: "assets/stats/worm-cell.png" }
                    ],
                    adults: [
                        { name: "Leopatchi", image: "assets/characters/land field/lick species/leopatchi.webp", careMistakes: "0", excellentCares: "5+" },
                        { name: "Sebiretchi", image: "assets/characters/land field/lick species/sebiretchi.webp", careMistakes: "0-1" },
                        { name: "Elizardotchi", image: "assets/characters/land field/lick species/elizardotchi.webp", careMistakes: "2-5" },
                        { name: "Heavytchi", image: "assets/characters/land field/lick species/heavytchi.webp", careMistakes: "6+" }
                    ]
                }
            ]
        },
        {
            id: "water-kid",
            name: { es: "", en: "Water Kid" },
            image: "assets/characters/water field/water-kid.webp",
            evolutionText: {
                es: "Se obtiene una <img src='assets/stats/water.png' class='inline-icon'> Célula de Agua por cada 15 minutos que Babymarutchi pase en el Campo de Agua. <br> Cuando tengas 4 Células de Agua, evolucionará en Water Kid.",
                en: "A <img src='assets/stats/water.png' class='inline-icon'> Water Cell is obtained for every 15 minutes Babymarutchi spends in the Water Field. <br> When it has 4 Water Cells it will evolve into Water Kid."
            },
            secret: { name: "Mermarintchi", image: "assets/characters/water field/mermarintchi.webp", silhouette: "assets/secrets/mermarintchi_sil.png", condition: { es: "Se obtiene <strong>conectando</strong> una shell Blue Water con dos shells de distinto color durante la etapa Young. No evoluciona desde una rama normal.", en: "Obtained by <strong>connecting</strong> a Blue Water shell with two different color shells during the Young stage. Does not evolve from a normal branch." } },
            evolutions: [
                {
                    young: { name: "Float Young", image: "assets/characters/water field/float-young.webp" },
                    meals: [
                        { name: { es: "Pellets +1", en: "Pellets +1" }, image: "assets/meals/pellets.webp", location: { es: "General", en: "General" }, cellImage: "assets/stats/onigiri.png" },
                    ],
                    adults: [
                        { name: "Kuraratchi", image: "assets/characters/water field/float species/kuraratchi.webp", careMistakes: "0", excellentCares: "5+" },
                        { name: "Mendakotchi", image: "assets/characters/water field/float species/mendakotchi.webp", careMistakes: "0-1" },
                        { name: "Amefuratchi", image: "assets/characters/water field/float species/amefuratchi.webp", careMistakes: "2-5" },
                        { name: "Gusokutchi", image: "assets/characters/water field/float species/gusokutchi.webp", careMistakes: "6+" }
                    ]
                },
                {
                    young: { name: "Glide Young", image: "assets/characters/water field/glide-young.webp" },
                    meals: [
                        { name: { es: "Moluscos +1", en: "Shellfish +1" }, image: "assets/meals/meal-shrimp.webp", location: { es: "Volcán", en: "Volcano" }, cellImage: "assets/stats/seafood-cell.png" },
                        { name: { es: "Marisco +2", en: "Seafood +2" }, image: "assets/meals/meal-plankton.webp", location: { es: "Volcán", en: "Volcano" }, cellImage: "assets/stats/seafood-cell.png" }
                    ],
                    adults: [
                        { name: "Irukatchi", image: "assets/characters/water field/glide species/irukatchi.webp", careMistakes: "0", excellentCares: "5+" },
                        { name: "Kametchi", image: "assets/characters/water field/glide species/kametchi.webp", careMistakes: "0-1" },
                        { name: "Kujiratchi", image: "assets/characters/water field/glide species/kujiratchi.webp", careMistakes: "2-5" },
                        { name: "Uruotchi", image: "assets/characters/water field/glide species/uruotchi.webp", careMistakes: "6+" }
                    ]
                },
                {
                    young: { name: "Leap Young", image: "assets/characters/water field/leap-young.webp" },
                    meals: [
                        { name: { es: "Alga Roja +1", en: "Red Seaweed +1" }, image: "./assets/meals/spring/red-seaweed.webp", location: { es: "Fuente", en: "Spring" }, cellImage: "assets/stats/seaweed-cell.png" },
                        { name: { es: "Alga Verde +2", en: "Green Seaweed +2" }, image: "./assets/meals/spring/green-seaweed.webp", location: { es: "Fuente", en: "Spring" }, cellImage: "assets/stats/seaweed-cell.png" }
                    ],
                    adults: [
                        { name: "Axolopatchi", image: "assets/characters/water field/leap species/axolopatchi.webp", careMistakes: "0", excellentCares: "5+" },
                        { name: "Imoritchi", image: "assets/characters/water field/leap species/imoritchi.webp", careMistakes: "0-1" },
                        { name: "Kawazutchi", image: "assets/characters/water field/leap species/kawazutchi.webp", careMistakes: "2-5" },
                        { name: "Beavertchi", image: "assets/characters/water field/leap species/beavertchi.webp", careMistakes: "6+" }
                    ]
                },
                {
                    young: { name: "Paddle Young", image: "assets/characters/water field/paddle-young.webp" },
                    meals: [
                        { name: { es: "Plancton +1", en: "Meal Plankton +1" }, image: "./assets/meals/meal-plankton.webp", location: { es: "Volcán y Fuente", en: "Volcano & Spring" }, cellImage: "assets/stats/shrimp-cell.png" },
                        { name: { es: "Gambas +2", en: "Meal Shrimp +2" }, image: "./assets/meals/meal-shrimp.webp", location: { es: "Volcán y Fuente", en: "Volcano & Spring" }, cellImage: "assets/stats/shrimp-cell.png" }
                    ],
                    adults: [
                        { name: "Tachutchi", image: "assets/characters/water field/paddle species/tachutchi.webp", careMistakes: "0", excellentCares: "5+" },
                        { name: "Sharktchi", image: "assets/characters/water field/paddle species/sharktchi.webp", careMistakes: "0-1" },
                        { name: "Ankotchi", image: "assets/characters/water field/paddle species/ankotchi.webp", careMistakes: "2-5" },
                        { name: "Otototchi", image: "assets/characters/water field/paddle species/otototchi.webp", careMistakes: "6+" }
                    ]
                }
            ]
        },
        {
            id: "sky-kid",
            name: { es: "", en: "Sky Kid" },
            image: "assets/characters/sky field/sky-kid.webp",
            evolutionText: {
                es: "Se obtiene una <img src='assets/stats/sky.png' class='inline-icon'> Célula de Cielo por cada 15 minutos que Babymarutchi pase en el Campo de Cielo. <br> Cuando tengas 4 Células de Cielo, evolucionará en Sky Kid.",
                en: "A <img src='assets/stats/sky.png' class='inline-icon'> Sky Cell is obtained for every 15 minutes Babymarutchi spends in the Sky Field. <br> When it has 4 Sky Cells it will evolve into Sky Kid."
            },
            secret: { name: "Yayacorntchi", image: "assets/characters/sky field/yayacorntchi.webp", silhouette: "assets/secrets/yayacorntchi_sil.png", condition: { es: "Se obtiene <strong>conectando</strong> una shell Purple Sky con dos shells de distinto color durante la etapa Young. No evoluciona desde una rama normal.", en: "Obtained by <strong>connecting</strong> a Purple Sky shell with two different color shells during the Young stage. Does not evolve from a normal branch." } },
            evolutions: [
                {
                    young: { name: "Rocky Young", image: "assets/characters/sky field/rocky-young.webp" },
                    meals: [
                        { name: { es: "Pellets +1", en: "Pellets +1" }, image: "assets/meals/pellets.webp", location: { es: "General", en: "General" }, cellImage: "assets/stats/onigiri.png" },
                    ],
                    adults: [
                        { name: "Gemtchi", image: "assets/characters/sky field/mineral species/gemtchi.webp", careMistakes: "0", excellentCares: "5+" },
                        { name: "Oretatchi", image: "assets/characters/sky field/mineral species/oretatchi.webp", careMistakes: "0-1" },
                        { name: "Ishikorotchi", image: "assets/characters/sky field/mineral species/ishikorotchi.webp", careMistakes: "2-5" },
                        { name: "Magmatchi", image: "assets/characters/sky field/mineral species/magmatchi.webp", careMistakes: "6+" }
                    ]
                },
                {
                    young: { name: "Flap Young", image: "assets/characters/sky field/flap-young.webp" },
                    meals: [
                        { name: { es: "Trozo de Pollo +1", en: "Piece of Chicken +1" }, image: "assets/meals/volcano/piece-of-chicken.webp", location: { es: "Volcán", en: "Volcano" }, cellImage: "assets/stats/chicken-cell.png" },
                        { name: { es: "Pollo Entero +2", en: "Whole Chicken +2" }, image: "assets/meals/volcano/whole-chicken.webp", location: { es: "Volcán", en: "Volcano" }, cellImage: "assets/stats/chicken-cell.png" }
                    ],
                    adults: [
                        { name: "Horhotchi", image: "assets/characters/sky field/flap species/horhotchi.webp", careMistakes: "0", excellentCares: "5+" },
                        { name: "Mongatchi", image: "assets/characters/sky field/flap species/mongatchi.webp", careMistakes: "0-1" },
                        { name: "Eagletchi", image: "assets/characters/sky field/flap species/eagletchi.webp", careMistakes: "2-5" },
                        { name: "Batchi", image: "assets/characters/sky field/flap species/batchi.webp", careMistakes: "6+" }
                    ]
                },
                {
                    young: { name: "Chirp Young", image: "assets/characters/sky field/chirp-young.webp" },
                    meals: [
                        { name: { es: "Maíz +1", en: "Corn +1" }, image: "assets/meals/spring/corn.webp", location: { es: "Fuente", en: "Spring" }, cellImage: "assets/stats/corn-sell.png" },
                        { name: { es: "Cerezas +2", en: "Cherries +2" }, image: "assets/meals/spring/cherries.webp", location: { es: "Fuente", en: "Spring" }, cellImage: "assets/stats/corn-sell.png" }
                    ],
                    adults: [
                        { name: "Peacotchi", image: "assets/characters/sky field/chirp species/peacotchi.webp", careMistakes: "0", excellentCares: "5+" },
                        { name: "Batatchi", image: "assets/characters/sky field/chirp species/batatchi.webp", careMistakes: "0-1" },
                        { name: "Kuchipatchi", image: "assets/characters/sky field/chirp species/kuchipatchi.webp", careMistakes: "2-5" },
                        { name: "Kiwitchi", image: "assets/characters/sky field/chirp species/kiwitchi.webp", careMistakes: "6+" },
                    ]
                },
                {
                    young: { name: "Bumble Young", image: "assets/characters/sky field/bumble-young.webp" },
                    meals: [
                        { name: { es: "Jarabe de Miel +1", en: "Honey Syrup +1" }, image: "assets/meals/honey-syrup.webp", location: { es: "Volcán y Fuente", en: "Volcano & Spring" }, cellImage: "assets/stats/syrup.png" },
                        { name: { es: "Jarabe de Flor +2", en: "Flower Syrup +2" }, image: "assets/meals/flower-syrup.webp", location: { es: "Volcán y Fuente", en: "Volcano & Spring" }, cellImage: "assets/stats/syrup.png" }
                    ],
                    adults: [
                        { name: "Papillotchi", image: "assets/characters/sky field/flutter species/papillotchi.webp", careMistakes: "0", excellentCares: "5+" },
                        { name: "Kabutotchi", image: "assets/characters/sky field/flutter species/kabutotchi.webp", careMistakes: "0-1" },
                        { name: "Tentotchi", image: "assets/characters/sky field/flutter species/tentotchi.webp", careMistakes: "2-5" },
                        { name: "Hatchitchi", image: "assets/characters/sky field/flutter species/hatchitchi.webp", careMistakes: "6+" }
                    ]
                }
            ]
        },
        {
            id: "forest-kid",
            name: { es: "", en: "Forest Kid" },
            image: "assets/characters/forest field/forest-kid.webp",
            evolutionText: {
                es: "Se obtiene una <img src='assets/stats/forest.png' class='inline-icon'> Célula de Bosque por cada 15 minutos que Babymarutchi pase en el Campo de Bosque. <br> Cuando tengas 4 Células de Bosque, evolucionará en Forest Kid.",
                en: "A <img src='assets/stats/forest.png' class='inline-icon'> Forest Cell is obtained for every 15 minutes Babymarutchi spends in the Forest Field. <br> When it has 4 Forest Cells it will evolve into Forest Kid."
            },
            secret: { name: "Tatsutchi", image: "assets/characters/forest field/tatsutchi.webp", silhouette: "assets/secrets/tatsutchi_sil.png", condition: { es: "Se obtiene <strong>conectando</strong> una shell Jade Forest con dos shells de distinto color durante la etapa Young. No evoluciona desde Sprout Young.", en: "Obtained by <strong>connecting</strong> a Jade Forest shell with two different color shells during the Young stage. Cannot evolve from Sprout Young." } },
            evolutions: [
                {
                    young: { name: "Sprout Young", image: "assets/characters/forest field/sprout-young.webp" },
                    meals: [
                        { name: { es: "Pellets +1", en: "Pellets +1" }, image: "assets/meals/pellets.webp", location: { es: "General", en: "General" }, cellImage: "assets/stats/onigiri.png" },
                    ],
                    adults: [
                        { name: "Shiitaketchi", image: "assets/characters/forest field/sprout species/shiitaketchi.webp", careMistakes: "0", excellentCares: "5+" },
                        { name: "Peatchi", image: "assets/characters/forest field/sprout species/peatchi.webp", careMistakes: "0-1" },
                        { name: "Nappatchi", image: "assets/characters/forest field/sprout species/nappatchi.webp", careMistakes: "2-5" },
                        { name: "Rushraditchi", image: "assets/characters/forest field/sprout species/rushraditchi.webp", careMistakes: "6+" }
                    ]
                },
                {
                    young: { name: "Roar Young", image: "assets/characters/forest field/roar-young.webp" },
                    meals: [
                        { name: { es: "Peking Meat +1", en: "Peking Meat +1" }, image: "assets/meals/jade forest/volcano/peking-meat.webp", location: { es: "Volcán", en: "Volcano" }, cellImage: "assets/stats/peking-meat-cell.png" },
                        { name: { es: "Chashu Pork +2", en: "Chashu Pork +2" }, image: "assets/meals/jade forest/volcano/chashu-pork.webp", location: { es: "Volcán", en: "Volcano" }, cellImage: "assets/stats/peking-meat-cell.png" }
                    ],
                    adults: [
                        { name: "Forest-Horhotchi", image: "assets/characters/forest field/roar species/forest-horhotchi.webp", careMistakes: "0", excellentCares: "5+" },
                        { name: "Konkotchi", image: "assets/characters/forest field/roar species/konkotchi.webp", careMistakes: "0-1" },
                        { name: "Tigaotchi", image: "assets/characters/forest field/roar species/tigaotchi.webp", careMistakes: "2-5" },
                        { name: "Tanoontchi", image: "assets/characters/forest field/roar species/tanoontchi.webp", careMistakes: "6+" }
                    ]
                },
                {
                    young: { name: "Toddle Young", image: "assets/characters/forest field/toddle-young.webp" },
                    meals: [
                        { name: { es: "Sesame Leaves +1", en: "Sesame Leaves +1" }, image: "assets/meals/jade forest/spring/sesame-leaves.webp", location: { es: "Fuente", en: "Spring" }, cellImage: "assets/stats/bamboo-grass-cell.png" },
                        { name: { es: "Bamboo Grass +2", en: "Bamboo Grass +2" }, image: "assets/meals/jade forest/spring/bamboo-grass.webp", location: { es: "Fuente", en: "Spring" }, cellImage: "assets/stats/bamboo-grass-cell.png" }
                    ],
                    adults: [
                        { name: "Lessapantchi", image: "assets/characters/forest field/toddle species/lessapantchi.webp", careMistakes: "0", excellentCares: "5+" },
                        { name: "Kanokotchi", image: "assets/characters/forest field/toddle species/kanokotchi.webp", careMistakes: "0-1" },
                        { name: "Suigyutchi", image: "assets/characters/forest field/toddle species/suigyutchi.webp", careMistakes: "2-5" },
                        { name: "Panbootchi", image: "assets/characters/forest field/toddle species/panbootchi.webp", careMistakes: "6+" }
                    ]
                },
                {
                    young: {
                        name: "Chirp Young", image: "assets/characters/forest field/chirp-young.webp", cellImage: "assets/stats/pomegranate-cell.png"
                    },
                    meals: [
                        { name: { es: "Persimmon +1", en: "Persimmon +1" }, image: "assets/meals/jade forest/persimmon.webp", location: { es: "Volcán y Fuente", en: "Volcano & Spring" }, cellImage: "assets/stats/pomegranate-cell.png" },
                        { name: { es: "Pomegranate +2", en: "Pomegranate +2" }, image: "assets/meals/jade forest/pomegranate.webp", location: { es: "Volcán y Fuente", en: "Volcano & Spring" }, cellImage: "assets/stats/pomegranate-cell.png" }
                    ],
                    adults: [
                        { name: "Kachitchi", image: "assets/characters/forest field/chirp species/kachitchi.webp", careMistakes: "0", excellentCares: "5+" },
                        { name: "Tokipatchi", image: "assets/characters/forest field/chirp species/tokipatchi.webp", careMistakes: "0-1" },
                        { name: "Kuchipatchi", image: "assets/characters/forest field/chirp species/kuchipatchi.webp", careMistakes: "2-5" },
                        { name: "Sparrotchi", image: "assets/characters/forest field/chirp species/sparrotchi.webp", careMistakes: "6+" }
                    ]
                }
            ]
        },
        {
            id: "frozen-kid",
            name: { es: "", en: "Frozen Kid" },
            image: "assets/characters/glacier field/frozen-kid.webp",
            evolutionText: {
                es: "Se obtiene una <img src='assets/stats/ice-cell.png' class='inline-icon'> Célula de Hielo por cada 15 minutos que Babymarutchi pase en el Campo de Hielo. <br> Cuando tengas 4 Células de Hielo, evolucionará en Frozen Kid. <br> Disponible en las shells Orange Tropics y White Paradise.",
                en: "An <img src='assets/stats/ice-cell.png' class='inline-icon'> Ice Cell is obtained for every 15 minutes Babymarutchi spends in the Glacier Field. <br> When it has 4 Ice Cells it will evolve into Frozen Kid. <br> Available on Orange Tropics and White Paradise."
            },
            secret: { name: "Hobohorntchi", image: "assets/characters/glacier field/hobohorntchi.webp", silhouette: "assets/secrets/hobohorntchi_sil.png", condition: { es: "Se obtiene <strong>conectando</strong> una shell White Glacier con dos shells de distinto color durante la etapa Young. No evoluciona desde Float Young.", en: "Obtained by <strong>connecting</strong> a White Glacier shell with two different color shells during the Young stage. Cannot evolve from Float Young." } },
            evolutions: [
                {
                    young: { name: "Float Young", image: "assets/characters/glacier field/float-young.webp" },
                    meals: [
                        { name: { es: "Pellets +1", en: "Pellets +1" }, image: "assets/meals/pellets.webp", location: { es: "General", en: "General" }, cellImage: "assets/stats/onigiri.png" },
                    ],
                    adults: [
                        { name: "Nerinetchi", image: "assets/characters/glacier field/float species/nerinetchi.webp", careMistakes: "0", excellentCares: "5+" },
                        { name: "Dangouotchi", image: "assets/characters/glacier field/float species/dangouotchi.webp", careMistakes: "0-1" },
                        { name: "Yaytytchi", image: "assets/characters/glacier field/float species/yaytytchi.webp", careMistakes: "2-5" },
                        { name: "Yukiraratchi", image: "assets/characters/glacier field/float species/yukiraratchi.webp", careMistakes: "6+" }
                    ]
                },
                {
                    young: { name: "Roar Young", image: "assets/characters/glacier field/roar-young.webp" },
                    meals: [
                        { name: { es: "Carne Enlatada +1", en: "Canned Meat +1" }, image: "assets/meals/white glacier/volcano/canned-meat.webp", location: { es: "Volcán", en: "Volcano" }, cellImage: "assets/stats/frozen-meat-cell.png" },
                        { name: { es: "Carne Congelada +2", en: "Frozen Meat +2" }, image: "assets/meals/white glacier/volcano/frozen-meat.webp", location: { es: "Volcán", en: "Volcano" }, cellImage: "assets/stats/frozen-meat-cell.png" }
                    ],
                    adults: [
                        { name: "Okojotchi", image: "assets/characters/glacier field/roar species/okojotchi.webp", careMistakes: "0", excellentCares: "5+" },
                        { name: "Wolftchi", image: "assets/characters/glacier field/roar species/wolftchi.webp", careMistakes: "0-1" },
                        { name: "Polakumatchi", image: "assets/characters/glacier field/roar species/polakumatchi.webp", careMistakes: "2-5" },
                        { name: "Azaratchi", image: "assets/characters/glacier field/roar species/azaratchi.webp", careMistakes: "6+" }
                    ]
                },
                {
                    young: { name: "Glide Young", image: "assets/characters/glacier field/glide-young.webp" },
                    meals: [
                        { name: { es: "Huevas de Salmón +1", en: "Salmon Roe +1" }, image: "assets/meals/white glacier/spring/salmon-roe.webp", location: { es: "Fuente", en: "Spring" }, cellImage: "assets/stats/northern-seafood-cell.png" },
                        { name: { es: "Marisco del Norte +2", en: "Northern Seafood +2" }, image: "assets/meals/white glacier/spring/northen-seafood.webp", location: { es: "Fuente", en: "Spring" }, cellImage: "assets/stats/northern-seafood-cell.png" }
                    ],
                    adults: [
                        { name: "Icy Irukatchi", image: "assets/characters/glacier field/glide species/icy-irukatchi.webp", careMistakes: "0", excellentCares: "5+" },
                        { name: "Ginjirotchi", image: "assets/characters/glacier field/glide species/ginjirotchi.webp", careMistakes: "0-1" },
                        { name: "Rakkotchi", image: "assets/characters/glacier field/glide species/rakkotchi.webp", careMistakes: "2-5" },
                        { name: "Hoppentchi", image: "assets/characters/glacier field/glide species/hoppentchi.webp", careMistakes: "6+" }
                    ]
                },
                {
                    young: { name: "Toddle Young", image: "assets/characters/glacier field/toddle-young.webp" },
                    meals: [
                        { name: { es: "Bayas Rojas +1", en: "Red Berries +1" }, image: "assets/meals/white glacier/red-berries.webp", location: { es: "Volcán y Fuente", en: "Volcano & Spring" }, cellImage: "assets/stats/red-berries-cell.png" },
                        { name: { es: "Remolacha +1", en: "Beet +1" }, image: "assets/meals/white glacier/beet.webp", location: { es: "Volcán y Fuente", en: "Volcano & Spring" }, cellImage: "assets/stats/red-berries-cell.png" }
                    ],
                    adults: [
                        { name: "Lemmingtchi", image: "assets/characters/glacier field/toddle species/lemmingtchi.webp", careMistakes: "0", excellentCares: "5+" },
                        { name: "Moosetchi", image: "assets/characters/glacier field/toddle species/moosetchi.webp", careMistakes: "0-1" },
                        { name: "Raichotchi", image: "assets/characters/glacier field/toddle species/raichotchi.webp", careMistakes: "2-5" },
                        { name: "Yukiusatchi", image: "assets/characters/glacier field/toddle species/yukiusatchi.webp", careMistakes: "6+" }
                    ]
                }
            ]
        },
        {
            id: "tropical-kid",
            name: { es: "", en: "Tropical Kid" },
            image: "assets/characters/tropical field/tropical-kid.webp",
            evolutionText: {
                es: "Se obtiene una <img src='assets/stats/tropical-cell.png' class='inline-icon'> Célula Tropical por cada 15 minutos que Babymarutchi pase en el Campo Tropical. <br> Cuando tengas 4 Células Tropicales, evolucionará en Tropical Kid. <br> Disponible en las shells Orange Tropics y White Paradise.",
                en: "A <img src='assets/stats/tropical-cell.png' class='inline-icon'> Tropical Cell is obtained for every 15 minutes Babymarutchi spends in the Tropical Field. <br> When it has 4 Tropical Cells it will evolve into Tropical Kid. <br> Available on Orange Tropics and White Paradise."
            },
            secret: { name: "Manapatchi", image: "assets/characters/tropical field/manapatchi.webp", silhouette: "assets/secrets/manapatchi_sil.png", condition: { es: "Se obtiene <strong>conectando</strong> una shell Orange Tropics con dos shells de distinto color durante la etapa Young. No evoluciona desde Sprout Young.", en: "Obtained by <strong>connecting</strong> an Orange Tropics shell with two different color shells during the Young stage. Cannot evolve from Sprout Young." } },
            evolutions: [
                {
                    young: { name: "Sprout Young", image: "assets/characters/tropical field/sprout-young.webp" },
                    meals: [
                        { name: { es: "Pellets +1", en: "Pellets +1" }, image: "assets/meals/pellets.webp", location: { es: "General", en: "General" }, cellImage: "assets/stats/onigiri.png" },
                    ],
                    adults: [
                        { name: "Yashikitchi", image: "assets/characters/tropical field/sprout species/yashikitchi.webp", careMistakes: "0", excellentCares: "5+" },
                        { name: "Tropical Potsunentchi", image: "assets/characters/tropical field/sprout species/tropical-potsunentchi.webp", careMistakes: "0-1" },
                        { name: "Ananatchi", image: "assets/characters/tropical field/sprout species/ananatchi.webp", careMistakes: "2-5" },
                        { name: "Avovotchi", image: "assets/characters/tropical field/sprout species/avovotchi_Paradise_sprite.webp", careMistakes: "6+" }
                    ]
                },
                {
                    young: { name: "Roar Young", image: "assets/characters/tropical field/roar-young.webp" },
                    meals: [
                        { name: { es: "Medallón Tropical +1", en: "Tropical Patty +1" }, image: "assets/meals/orange tropics/volcano/tropical-patty.webp", location: { es: "Volcán", en: "Volcano" }, cellImage: "assets/stats/tropical-meat-cell.png" },
                        { name: { es: "Filete Tropical +2", en: "Tropical Steak +2" }, image: "assets/meals/orange tropics/volcano/tropical-steak.webp", location: { es: "Volcán", en: "Volcano" }, cellImage: "assets/stats/tropical-meat-cell.png" }
                    ],
                    adults: [
                        { name: "Tropical Meowtchi", image: "assets/characters/tropical field/roar species/tropical-meowtchi.webp", careMistakes: "0", excellentCares: "5+" },
                        { name: "Madillotchi", image: "assets/characters/tropical field/roar species/madillotchi.webp", careMistakes: "0-1" },
                        { name: "Tarantytchi", image: "assets/characters/tropical field/roar species/tarantytchi.webp", careMistakes: "2-5" },
                        { name: "Crocotchi", image: "assets/characters/tropical field/roar species/crocotchi.webp", careMistakes: "6+" }
                    ]
                },
                {
                    young: { name: "Toddle Young", image: "assets/characters/tropical field/toddle-young.webp" },
                    meals: [
                        { name: { es: "Plátano +1", en: "Banana +1" }, image: "assets/meals/orange tropics/spring/banana.webp", location: { es: "Fuente", en: "Spring" }, cellImage: "assets/stats/banana-cell.png" },
                        { name: { es: "Frutas Tropicales +2", en: "Tropical Fruits +2" }, image: "assets/meals/orange tropics/spring/tropical-fruits.webp", location: { es: "Fuente", en: "Spring" }, cellImage: "assets/stats/banana-cell.png" }
                    ],
                    adults: [
                        { name: "Tropical Mametchi", image: "assets/characters/tropical field/toddle species/tropical-mametchi.webp", careMistakes: "0", excellentCares: "5+" },
                        { name: "Parorotchi", image: "assets/characters/tropical field/toddle species/parorotchi.webp", careMistakes: "0-1" },
                        { name: "Tenatchi", image: "assets/characters/tropical field/toddle species/tenatchi.webp", careMistakes: "2-5" },
                        { name: "Namakemotchi", image: "assets/characters/tropical field/toddle species/namakemotchi.webp", careMistakes: "6+" }
                    ]
                },
                {
                    young: { name: "Lick Young", image: "assets/characters/tropical field/lick-young.webp" },
                    meals: [
                        { name: { es: "Bichitos +1", en: "Meal Critters +1" }, image: "assets/meals/orange tropics/meal-critters.webp", location: { es: "Volcán y Fuente", en: "Volcano & Spring" }, cellImage: "assets/stats/butterflies-cell.png" },
                        { name: { es: "Snacks de Mariposa +2", en: "Butterfly Snacks +2" }, image: "assets/meals/orange tropics/butterfly-snacks.webp", location: { es: "Volcán y Fuente", en: "Volcano & Spring" }, cellImage: "assets/stats/butterflies-cell.png" }
                    ],
                    adults: [
                        { name: "Kuikuitchi", image: "assets/characters/tropical field/lick species/kuikuitchi.webp", careMistakes: "0", excellentCares: "5+" },
                        { name: "Poizutchi", image: "assets/characters/tropical field/lick species/poizutchi.webp", careMistakes: "0-1" },
                        { name: "Chameleotchi", image: "assets/characters/tropical field/lick species/chameleotchi.webp", careMistakes: "2-5" },
                        { name: "Iguanatchi", image: "assets/characters/tropical field/lick species/iguanatchi.webp", careMistakes: "6+" }
                    ]
                }
            ]
        }
    ]
};
