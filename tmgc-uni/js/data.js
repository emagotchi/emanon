// Tamagotchi Uni: datos de la guía (rama base, colores de cada área y DLC del Tama Portal).

// Colores del Uni de cada área. Con "name" son carcasas reales del Uni; sin "name" salen de la portada oficial del DLC.
// c = carcasa, c2 = marco, p = panel, b = botones, t = texto "emanon"
const SHELLS = {
    pink:       { name: "Pink",             c: "#f76bb0", c2: "#7ed38f", p: "#64c7cf", b: "#3e6fd1" },
    purple:     { name: "Purple",           c: "#9b72e3", c2: "#5fc7b8", p: "#e66b80", b: "#e5566a" },
    blue:       { name: "Blue",             c: "#67a1f5", c2: "#e08bcc", p: "#8e86d5", b: "#6a55b9" },
    angel:      { name: "Angel Festival",   c: "#f8c4c6", c2: "#9bd9d4", p: "#d9f1ee", b: "#5bb3bf", t: "#3f8f97" },
    monster:    { name: "Monster Carnival", c: "#6f4f97", c2: "#8fd15b", p: "#4a3a66", b: "#4f9a3c" },
    sanrio:     { name: "Sanrio",           c: "#ef4d6f", c2: "#ffd6e2", p: "#f7a9bf", b: "#b8405e" },
    tamamori:   { c: "#aa7be8", c2: "#fbf6b8", p: "#2e5795", b: "#38c9d6" },
    fairy:      { c: "#7f86d6", c2: "#f9f3a3", p: "#e99474", b: "#37c54f" },
    pokopea:    { c: "#fff0a6", c2: "#a6e3a0", p: "#8fa6cf", b: "#5a75a8" },
    kawaisouni: { c: "#9dd1dc", c2: "#f4d0c9", p: "#d1f3d3", b: "#6e5d7e", t: "#6e5d7e" },
    esther:     { c: "#f7c7db", c2: "#fff6f0", p: "#d5c8d6", b: "#917791", t: "#917791" },
    tamazon:    { c: "#3fc79c", c2: "#f1f0a8", p: "#91d96e", b: "#0d8a6c", t: "#2f6b4a" },
    babys:      { c: "#f6cfc2", c2: "#9ae9ed", p: "#c9b6d6", b: "#79719c" },
    galgal:     { c: "#ee9cc6", c2: "#8be4ee", p: "#b681b8", b: "#a2428c" }
};

// Rama base (Tamagotchi Wiki). Los errores de cuidado se suman entre niño y adolescente.
const happy = (es, en) => ({ es, en });
const BASE = {
    babies: [
        { n: "Yooyutchi", img: "baby stage/yooyutchi.webp", g: "male" },
        { n: "Niinitchi", img: "baby stage/niinitchi.webp", g: "female" }
    ],
    children: {
        male: [
            { n: "Welcotchi", img: "child stage/welcotchi.webp", cond: happy("Felicidad 10 o más", "Happiness 10 or more") },
            { n: "Mitumarutchi", img: "child stage/mitumarutchi.webp", cond: happy("Felicidad 9 o menos", "Happiness 9 or less") }
        ],
        female: [
            { n: "Lionetchi", img: "child stage/lionetchi.webp", cond: happy("Felicidad 10 o más", "Happiness 10 or more") },
            { n: "Otamatchi", img: "child stage/otamatchi.webp", cond: happy("Felicidad 9 o menos", "Happiness 9 or less") }
        ]
    },
    teens: {
        male: [
            { n: "Kuriritchi", img: "teen stage/kuriritchi.webp", cond: happy("Felicidad entre 15 y 20, o hacer manualidades DIY 10 veces", "Happiness 15–20, or do DIY crafting 10 times"),
              adults: [
                { n: "Mametchi", img: "adult stage/male/mametchi.webp", cm: "0", alt: happy("o 1–3 + 3 paseos (Tama Walk)", "or 1–3 + 3 Tama Walks") },
                { n: "Weeptchi", img: "adult stage/male/weeptchi.webp", cm: "1–3" },
                { n: "Simagurutchi", img: "adult stage/male/simagurutchi.webp", cm: "4+" }
              ] },
            { n: "Gunchitchi", img: "teen stage/gunchitchi.webp", cond: happy("Felicidad entre 6 y 14, o darle 40 snacks", "Happiness 6–14, or feed 40 snacks"),
              adults: [
                { n: "Kuchipatchi", img: "adult stage/male/kuchipatchi.webp", cm: "0–1", alt: happy("o 2–5 + pedir 10 veces a Tama Delivery", "or 2–5 + order Tama Delivery 10 times") },
                { n: "Shykutchi", img: "adult stage/male/shykutchi.webp", cm: "2–5" },
                { n: "Bigsmile", img: "adult stage/male/bigsmile.webp", cm: "6+" }
              ] },
            { n: "Curltchi", img: "teen stage/curltchi.webp", cond: happy("Felicidad entre 0 y 5, o 15 puntajes perfectos en juegos (Tama Arcade o áreas DL)", "Happiness 0–5, or 15 perfect game scores (Tama Arcade or DL areas)"),
              adults: [
                { n: "Kikitchi", img: "adult stage/male/kikitchi.webp", cm: "0–1", alt: happy("o 2–5 + 20 puntajes perfectos en Tama Arcade", "or 2–5 + 20 perfect Tama Arcade scores") },
                { n: "Unimarutchi", img: "adult stage/male/unimarutchi.webp", cm: "2–5" },
                { n: "Gozarutchi", img: "adult stage/male/gozarutchi.webp", cm: "6+" }
              ] }
        ],
        female: [
            { n: "Labilatchi", img: "teen stage/labilatchi.webp", cond: happy("Felicidad entre 15 y 20, o hacer manualidades DIY 10 veces", "Happiness 15–20, or do DIY crafting 10 times"),
              adults: [
                { n: "Neliatchi", img: "adult stage/female/neliatchi.webp", cm: "0", alt: happy("o 1–3 + 3 paseos (Tama Walk)", "or 1–3 + 3 Tama Walks") },
                { n: "Milktchi", img: "adult stage/female/milktchi.webp", cm: "1–3" },
                { n: "Momotchi", img: "adult stage/female/momotchi.webp", cm: "4+" }
              ] },
            { n: "Teftetchi", img: "teen stage/teftetchi.webp", cond: happy("Felicidad entre 6 y 14, o darle 40 snacks", "Happiness 6–14, or feed 40 snacks"),
              adults: [
                { n: "Woopatchi", img: "adult stage/female/woopatchi.webp", cm: "0–1", alt: happy("o 2–5 + pedir 10 veces a Tama Delivery", "or 2–5 + order Tama Delivery 10 times") },
                { n: "Memetchi", img: "adult stage/female/memetchi.webp", cm: "2–5" },
                { n: "Picochutchi", img: "adult stage/female/picochutchi.webp", cm: "6+" }
              ] },
            { n: "Tustustchi", img: "teen stage/tustustchi.webp", cond: happy("Felicidad entre 0 y 5, o 15 puntajes perfectos en juegos (Tama Arcade o áreas DL)", "Happiness 0–5, or 15 perfect game scores (Tama Arcade or DL areas)"),
              adults: [
                { n: "Mimitchi", img: "adult stage/female/mimitchi.webp", cm: "0–1", alt: happy("o 2–5 + 20 puntajes perfectos en Tama Arcade", "or 2–5 + 20 perfect Tama Arcade scores") },
                { n: "Unimarutchi", img: "adult stage/female/unimarutchi.webp", cm: "2–5" },
                { n: "Sebiretchi", img: "adult stage/female/sebiretchi.webp", cm: "6+" }
              ] }
        ]
    },
    specials: {
        male: [
            { n: "Hypertchi", img: "adult stage/male/hypertchi.webp", cond: happy("Generación múltiplo de 5, nacido de un matrimonio en el Tamaverse y 3 viajes con Tama Travel", "Generation multiple of 5, born from a Tamaverse marriage and 3 Tama Travel trips") },
            { n: "Simasimatchi", img: "adult stage/male/simasimatchi.webp", cond: happy("Nacido de un matrimonio entre dos Uni y hacer 1 accesorio DIY como niño o adolescente", "Born from a marriage between two Unis and make 1 DIY accessory as a child or teen") }
        ],
        female: [
            { n: "Bubbletchi", img: "adult stage/female/bubbletchi.webp", cond: happy("Generación múltiplo de 5, nacida de un matrimonio en el Tamaverse y comprar 3 outfits en Tama Fashion", "Generation multiple of 5, born from a Tamaverse marriage and buy 3 Tama Fashion outfits") },
            { n: "Yattatchi", img: "adult stage/female/yattatchiUniSprite.webp", cond: happy("Nacida de un matrimonio entre dos Uni y hacer 1 accesorio DIY como niña o adolescente", "Born from a marriage between two Unis and make 1 DIY accessory as a child or teen") }
        ]
    }
};

// Datos de los DLC (Tama Portal) del Tamagotchi Uni.
// Personajes y condiciones: Tamagotchi Wiki. Imágenes de ítems, cuartos y minijuegos: anuncios oficiales de Bandai.
// it = ícono de la comida, snack o ítem que hay que usar al menos una vez antes de la etapa adulta.
const DLCS = [
 {
  "id": "very-berry-land",
  "name": "Very Berry Land",
  "year": 2024,
  "pal": "pink",
  "post": "01_142",
  "icons": "icons/",
  "chars": [
   {
    "n": "Hotcaketchi",
    "img": "hotcaketchi.webp",
    "g": "male",
    "it": "frying-pan"
   },
   {
    "n": "Ichigotchi",
    "img": "ichigotchi.webp",
    "g": "female",
    "it": "strawberry-rice-cake"
   },
   {
    "n": "Ringotchi",
    "img": "ringotchi.webp",
    "g": "female",
    "it": "apple-cake"
   },
   {
    "n": "Patitchi",
    "img": "patitchi.webp",
    "g": "female",
    "it": "patissier-cake"
   },
   {
    "n": "Cornetchi",
    "img": "cornetchi.webp",
    "g": "female",
    "it": "ice-cream-sandwich"
   },
   {
    "n": "Tanghulutchi",
    "img": "tanghulutchi.webp",
    "g": "female",
    "it": "fruit-candy"
   }
  ],
  "items": {
   "berry-salad": {
    "type": "meal",
    "name": {
     "en": "Berry Salad",
     "es": "Ensalada de berries"
    },
    "price": "100G"
   },
   "chicken-waffles": {
    "type": "meal",
    "name": {
     "en": "Chicken & Waffles",
     "es": "Pollo con waffles"
    },
    "price": "100G"
   },
   "berry-porridge": {
    "type": "meal",
    "name": {
     "en": "Berry Porridge",
     "es": "Avena de berries"
    },
    "price": "100G"
   },
   "ice-cream-sandwich": {
    "type": "meal",
    "name": {
     "en": "Ice Cream Sandwich",
     "es": "Sándwich de helado"
    },
    "price": "100G"
   },
   "apple-cake": {
    "type": "snack",
    "name": {
     "en": "Apple Cake",
     "es": "Pastel de manzana"
    },
    "price": "100G"
   },
   "strawberry-rice-cake": {
    "type": "snack",
    "name": {
     "en": "Strawberry Rice Cake",
     "es": "Mochi de frutilla"
    },
    "price": "100G"
   },
   "patissier-cake": {
    "type": "snack",
    "name": {
     "en": "Patissier Cake",
     "es": "Pastel pâtissier"
    },
    "price": "100G"
   },
   "fruit-candy": {
    "type": "snack",
    "name": {
     "en": "Fruit Candy",
     "es": "Fruta confitada"
    },
    "price": "100G"
   },
   "frying-pan": {
    "type": "item",
    "name": {
     "en": "Frying Pan",
     "es": "Sartén"
    },
    "price": "200G"
   },
   "candy-house-kit": {
    "type": "item",
    "name": {
     "en": "Candy House Kit",
     "es": "Kit de casita de dulces"
    },
    "price": "200G"
   },
   "pudding-trampoline": {
    "type": "item",
    "name": {
     "en": "Pudding Trampoline",
     "es": "Cama elástica de flan"
    },
    "price": "200G"
   },
   "candy-box": {
    "type": "item",
    "name": {
     "en": "Candy Box",
     "es": "Caja de dulces"
    },
    "price": "200G"
   }
  },
  "area": {
   "rooms": [
    "room-1.jpeg",
    "room-2.jpeg"
   ],
   "minigame": [
    "minigame.jpeg"
   ],
   "furniture": [],
   "toys": [],
   "accessories": []
  },
  "free": true,
  "pet": {
   "es": "Monatototchi: deja cualquier mueble de Very Berry Land en el patio.",
   "en": "Monatototchi: leave any Very Berry Land furniture in the backyard."
  },
  "shop": {
   "accessories": [
    {
     "en": "Strawberry Topping",
     "price": "200G",
     "icon": "shop/strawberry-topping.webp"
    },
    {
     "en": "Whipped Cream Cheeks",
     "price": "200G",
     "icon": "shop/whipped-cream-cheeks.webp"
    },
    {
     "en": "Cake Body",
     "price": "200G",
     "icon": "shop/cake-body.webp"
    },
    {
     "en": "Fruit Aura",
     "price": "200G",
     "icon": "shop/fruit-aura.webp"
    },
    {
     "en": "Chef Hat",
     "price": "200G",
     "icon": "shop/chef-hat.webp"
    },
    {
     "en": "Berry Earrings",
     "price": "200G",
     "icon": "shop/berry-earrings.webp"
    },
    {
     "en": "Whisk",
     "price": "200G",
     "icon": "shop/whisk.webp"
    },
    {
     "en": "Chef Scarf",
     "price": "200G",
     "icon": "shop/chef-scarf.webp"
    }
   ],
   "furniture": [
    {
     "en": "Chocolate Fountain",
     "price": "300G",
     "icon": "shop/chocolate-fountain.webp"
    },
    {
     "en": "Chocolate Cabinet",
     "price": "300G",
     "icon": "shop/chocolate-cabinet.webp"
    },
    {
     "en": "Berry Cushion",
     "price": "300G",
     "icon": "shop/berry-cushion.webp"
    },
    {
     "en": "Cake TV",
     "price": "300G",
     "icon": "shop/cake-tv.webp"
    }
   ],
   "rooms": [
    {
     "en": "Berry Room",
     "price": "500G",
     "icon": "shop/berry-room.webp"
    },
    {
     "en": "Creamy Room",
     "price": "500G",
     "icon": "shop/creamy-room.webp"
    }
   ]
  },
  "spots": [
   {
    "name": {
     "en": "Berry Kitchen",
     "es": "Cocina Berry"
    },
    "text": {
     "en": "An animation will play of the characters creating and baking various sweets will play.",
     "es": "Una animación de los personajes preparando y horneando dulces."
    }
   },
   {
    "name": {
     "en": "Cake Factory Game",
     "es": "Juego de la fábrica de pasteles"
    },
    "text": {
     "en": "The Tamagotchi will be decorating cake slices that are being moved on conveyor belts.",
     "es": "Tu Tamagotchi decora trozos de pastel que pasan por una cinta transportadora."
    }
   }
  ]
 },
 {
  "id": "lovemelo-concert",
  "name": "LoveMelo ♪ Concert",
  "year": 2024,
  "pal": "purple",
  "post": "01_141",
  "icons": "icons/",
  "chars": [
   {
    "n": "Chekeratchi",
    "img": "chekeratchi.webp",
    "g": "male",
    "it": "dj-booth"
   },
   {
    "n": "Drumcrubtchi",
    "img": "drumcrubitchi.webp",
    "g": "male",
    "it": "drum-popcorn"
   },
   {
    "n": "Lovelitchi",
    "img": "lovelitchi.webp",
    "g": "female",
    "it": "lovely-frappe"
   },
   {
    "n": "Melodytchi",
    "img": "melodytchi.webp",
    "g": "female",
    "it": "sachertorte"
   },
   {
    "n": "Pianitchi",
    "img": "pianitchi.webp",
    "g": "female",
    "it": "smart-piano-pad"
   },
   {
    "n": "Rhythristchi",
    "img": "rhythristchi.webp",
    "g": "female",
    "it": "rhythm-noodles"
   }
  ],
  "items": {
   "festival-nachos": {
    "type": "meal",
    "name": {
     "en": "Festival Nachos",
     "es": "Nachos de festival"
    },
    "price": "100G"
   },
   "macaroni-cheese": {
    "type": "meal",
    "name": {
     "en": "♪ Macaroni & Cheese",
     "es": "Macarrones con queso ♪"
    },
    "price": "100G"
   },
   "trumpet-hot-dog": {
    "type": "meal",
    "name": {
     "en": "Trumpet Hot Dog",
     "es": "Hot dog trompeta"
    },
    "price": "100G"
   },
   "rhythm-noodles": {
    "type": "meal",
    "name": {
     "en": "Rhythm Noodles",
     "es": "Fideos rítmicos"
    },
    "price": "100G"
   },
   "drum-popcorn": {
    "type": "snack",
    "name": {
     "en": "Drum Popcorn",
     "es": "Palomitas tambor"
    },
    "price": "100G"
   },
   "sachertorte": {
    "type": "snack",
    "name": {
     "en": "♪ Sachertorte",
     "es": "Sachertorte ♪"
    },
    "price": "100G"
   },
   "lovely-frappe": {
    "type": "snack",
    "name": {
     "en": "Lovely Frappe",
     "es": "Frappé Lovely"
    },
    "price": "100G"
   },
   "music-donut": {
    "type": "snack",
    "name": {
     "en": "Music Donut",
     "es": "Dona musical"
    },
    "price": "100G"
   },
   "melodic-violin": {
    "type": "item",
    "name": {
     "en": "Melodic Violin",
     "es": "Violín melódico"
    },
    "price": "200G"
   },
   "kalimba": {
    "type": "item",
    "name": {
     "en": "Kalimba",
     "es": "Kalimba"
    },
    "price": "200G"
   },
   "smart-piano-pad": {
    "type": "item",
    "name": {
     "en": "Smart Piano Pad",
     "es": "Piano táctil"
    },
    "price": "200G"
   },
   "dj-booth": {
    "type": "item",
    "name": {
     "en": "DJ Booth",
     "es": "Cabina de DJ"
    },
    "price": "200G"
   }
  },
  "area": {
   "rooms": [
    "room-1.jpeg",
    "room-2.jpeg"
   ],
   "minigame": [
    "minigame.jpeg"
   ],
   "furniture": [],
   "toys": [],
   "accessories": []
  },
  "pet": {
   "es": "Lovelin Tour Bus atrae a Monatototchi y Lovelin Panel a Rinsetchi (déjalos en el patio).",
   "en": "Lovelin Tour Bus lures Monatototchi and Lovelin Panel lures Rinsetchi (leave them in the backyard)."
  },
  "shop": {
   "accessories": [
    {
     "en": "♡ Bucket Hat",
     "price": "200G",
     "icon": "shop/bucket-hat.webp"
    },
    {
     "en": "♡ Light Stick",
     "price": "200G",
     "icon": "shop/light-stick.webp"
    },
    {
     "en": "♪ Pet Plushie",
     "price": "200G",
     "icon": "shop/pet-plushie.webp"
    },
    {
     "en": "Lovely Aura",
     "price": "200G",
     "icon": "shop/lovely-aura.webp"
    },
    {
     "en": "Disco Ball Helmet",
     "price": "200G",
     "icon": "shop/disco-ball-helmet.webp"
    },
    {
     "en": "Shutter Shades",
     "price": "200G",
     "icon": "shop/shutter-shades.webp"
    },
    {
     "en": "Shoulder Keyboard",
     "price": "200G",
     "icon": "shop/shoulder-keyboard.webp"
    },
    {
     "en": "Back-up Dancers",
     "price": "200G",
     "icon": "shop/back-up-dancers.webp"
    }
   ],
   "furniture": [
    {
     "en": "Lovelin Panel",
     "price": "300G",
     "icon": "shop/lovelin-panel.webp"
    },
    {
     "en": "Lovelin Tour Bus",
     "price": "300G",
     "icon": "shop/lovelin-tour-bus.webp"
    },
    {
     "en": "Colorful Combo",
     "price": "300G",
     "icon": "shop/colorful-combo.webp"
    },
    {
     "en": "Standing Mic",
     "price": "300G",
     "icon": "shop/standing-mic.webp"
    }
   ],
   "rooms": [
    {
     "en": "Dance Floor",
     "price": "500G",
     "icon": "shop/dance-floor.webp"
    },
    {
     "en": "Lovelin Room",
     "price": "500G",
     "icon": "shop/lovelin-room.webp"
    }
   ]
  },
  "spots": [
   {
    "name": {
     "en": "Main Stage",
     "es": "Escenario principal"
    },
    "text": {
     "en": "An animation of the characters performing a concert will play.",
     "es": "Una animación de los personajes dando un concierto."
    }
   },
   {
    "name": {
     "en": "Happy Happy Harmony Game",
     "es": "Juego Happy Happy Harmony"
    },
    "text": {
     "en": "As Lovelin and Melodytchi perform Happy Happy Harmony, the user must press the A, B, and C buttons as notes come down from the top of the screen in time to the music.",
     "es": "Mientras Lovelin y Melodytchi cantan, presiona A, B y C cuando las notas bajen al ritmo de la música."
    }
   }
  ],
  "yen": 990
 },
 {
  "id": "tamamori-fashion-show",
  "name": "Tamamori Fashion Show ★",
  "year": 2024,
  "pal": "tamamori",
  "post": "01_143",
  "icons": "icons/",
  "chars": [
   {
    "n": "Spacytchi",
    "img": "spacytchi.webp",
    "g": "male",
    "it": "spacy-curry"
   },
   {
    "n": "Mystartchi",
    "img": "mystartchi.webp",
    "g": "male",
    "it": "top-hat-eclair"
   },
   {
    "n": "Boots Brothers",
    "img": "bootsbrothers.webp",
    "g": "male",
    "it": "boots-glass-tea"
   },
   {
    "n": "Moriritchi",
    "img": "moriritchi.webp",
    "g": "female",
    "it": "tamamori-noodles"
   },
   {
    "n": "Coffretchi",
    "img": "coffretchi.webp",
    "g": "female",
    "it": "puff-macaron"
   },
   {
    "n": "Dresstchi",
    "img": "dresstchi.webp",
    "g": "female",
    "it": "dress-salad"
   }
  ],
  "items": {
   "tamamori-noodles": {
    "type": "meal",
    "name": {
     "en": "Tamamori Noodles",
     "es": "Fideos Tamamori"
    },
    "price": "100G"
   },
   "spacy-curry": {
    "type": "meal",
    "name": {
     "en": "Spacy Curry",
     "es": "Curry espacial"
    },
    "price": "100G"
   },
   "dress-salad": {
    "type": "meal",
    "name": {
     "en": "Dress Salad",
     "es": "Ensalada vestido"
    },
    "price": "100G"
   },
   "palette-sushi": {
    "type": "meal",
    "name": {
     "en": "Palette Sushi",
     "es": "Sushi paleta"
    },
    "price": "100G"
   },
   "boots-glass-tea": {
    "type": "snack",
    "name": {
     "en": "Boots-Glass Tea",
     "es": "Té en vaso bota"
    },
    "price": "100G"
   },
   "puff-macaron": {
    "type": "snack",
    "name": {
     "en": "Puff Macaron",
     "es": "Macaron puff"
    },
    "price": "100G"
   },
   "top-hat-eclair": {
    "type": "snack",
    "name": {
     "en": "Top Hat Eclair",
     "es": "Éclair sombrero de copa"
    },
    "price": "100G"
   },
   "sunglasses-chocolate": {
    "type": "snack",
    "name": {
     "en": "Sunglasses Chocolate",
     "es": "Chocolate lentes de sol"
    },
    "price": "100G"
   },
   "retro-sewing-machine": {
    "type": "item",
    "name": {
     "en": "Retro Sewing Machine",
     "es": "Máquina de coser retro"
    },
    "price": "200G"
   },
   "big-puff": {
    "type": "item",
    "name": {
     "en": "Big Puff",
     "es": "Mota gigante"
    },
    "price": "200G"
   },
   "beauty-salon-ticket": {
    "type": "item",
    "name": {
     "en": "Beauty Salon Ticket",
     "es": "Ticket de salón de belleza"
    },
    "price": "200G"
   },
   "closet": {
    "type": "item",
    "name": {
     "en": "Closet",
     "es": "Clóset"
    },
    "price": "200G"
   }
  },
  "area": {
   "rooms": [
    "room-1.webp",
    "room-2.webp"
   ],
   "minigame": [
    "minigame.png"
   ],
   "furniture": [],
   "toys": [],
   "accessories": []
  },
  "pet": {
   "es": "Rinsetchi: deja cualquier mueble de Tamamori Fashion Show en el patio.",
   "en": "Rinsetchi: leave any Tamamori Fashion Show furniture in the backyard."
  },
  "shop": {
   "accessories": [
    {
     "en": "Designer Wig",
     "price": "200G",
     "icon": "shop/designer-wig.webp"
    },
    {
     "en": "Fashionable Earrings",
     "price": "200G",
     "icon": "shop/fashionable-earrings.webp"
    },
    {
     "en": "Fashionable Cape",
     "price": "200G",
     "icon": "shop/fashionable-cape.webp"
    },
    {
     "en": "TMGC Logo Aura",
     "price": "200G",
     "icon": "shop/tmgc-logo-aura.webp"
    },
    {
     "en": "Beauty Headband",
     "price": "200G",
     "icon": "shop/beauty-headband.webp"
    },
    {
     "en": "Cucumber Pack",
     "price": "200G",
     "icon": "shop/cucumber-pack.webp"
    },
    {
     "en": "Beauty Roller",
     "price": "200G",
     "icon": "shop/beauty-roller.webp"
    },
    {
     "en": "Flower Cologne Aura",
     "price": "200G",
     "icon": "shop/flower-cologne-aura.webp"
    }
   ],
   "furniture": [
    {
     "en": "Sewing Stool",
     "price": "300G",
     "icon": "shop/sewing-stool.webp"
    },
    {
     "en": "Torso",
     "price": "300G",
     "icon": "shop/torso.webp"
    },
    {
     "en": "Heart Dresser",
     "price": "300G",
     "icon": "shop/heart-dresser.webp"
    },
    {
     "en": "Bubble Bath",
     "price": "300G",
     "icon": "shop/bubble-bath.webp"
    }
   ],
   "rooms": [
    {
     "en": "Designer Room",
     "price": "500G",
     "icon": "shop/designer-room.webp"
    },
    {
     "en": "Makeup Room",
     "price": "500G",
     "icon": "shop/makeup-room.webp"
    }
   ]
  },
  "spots": [
   {
    "name": {
     "en": "Fashion Show",
     "es": "Desfile de moda"
    },
    "text": {
     "en": "An animation of the characters putting on a fashion show can be watched.",
     "es": "Una animación de los personajes en un desfile."
    }
   },
   {
    "name": {
     "en": "Minigame",
     "es": "Minijuego"
    },
    "text": {
     "en": "The user controls Moriritchi as she throws Tamamori fashion at White Tamas while avoiding hitting Spacytchi and his brothers.",
     "es": "Controlas a Moriritchi lanzando moda Tamamori a los White Tamas, sin darle a Spacytchi ni a sus hermanos."
    }
   }
  ],
  "yen": 990
 },
 {
  "id": "sanrio-characters",
  "name": "Sanrio Characters",
  "year": 2024,
  "pal": "sanrio",
  "post": "01_303",
  "icons": "icons/",
  "chars": [
   {
    "n": "Mame Kitty",
    "img": "mame_kitty.webp",
    "g": "male",
    "it": "ribbon-box"
   },
   {
    "n": "Patchi Purin",
    "img": "patchipurin.webp",
    "g": "male",
    "it": "purin-bag"
   },
   {
    "n": "Usahana Memetchi",
    "img": "usahana.webp",
    "g": "female",
    "it": "flower-sherbet"
   },
   {
    "n": "Cinnamon Moriritchi",
    "img": "cinnamon.webp",
    "g": "female",
    "it": "cinnamon-cup"
   },
   {
    "n": "Kuromi Melodytchi",
    "img": "kuromi_melodytchi.webp",
    "g": "female",
    "it": "kuromi-diary"
   },
   {
    "n": "Hangyodon Sebiretchi",
    "img": "hangyodon_sebiretchi.webp",
    "g": "female",
    "it": "hangyodon-bun"
   },
   {
    "n": "MyMelo Lovelitchi",
    "img": "my_melo_lovelitchi.webp",
    "g": "female",
    "it": "melody-strawberry"
   },
   {
    "n": "Pochacco Mimitchi",
    "img": "pochacco_mimitchi.webp",
    "g": "female",
    "it": "pochacco-rice-ball"
   },
   {
    "n": "Cogimyun Woopatchi",
    "img": "cogimyun_woopatchi.webp",
    "g": "female",
    "it": "cotton-cogimyun"
   },
   {
    "n": "Little Unimarutchi",
    "img": "little_unimarutchi.webp",
    "g": "either",
    "it": "star-pancake"
   }
  ],
  "items": {
   "hangyodon-bun": {
    "type": "meal",
    "name": {
     "en": "Hangyodon Bun",
     "es": "Pan Hangyodon"
    },
    "price": "100G"
   },
   "wisdom-tree-salad": {
    "type": "meal",
    "name": {
     "en": "Wisdom Tree Salad",
     "es": "Ensalada árbol de la sabiduría"
    },
    "price": "100G"
   },
   "pochacco-rice-ball": {
    "type": "meal",
    "name": {
     "en": "Pochacco Rice Ball",
     "es": "Onigiri Pochacco"
    },
    "price": "100G"
   },
   "strawberry-burger": {
    "type": "meal",
    "name": {
     "en": "Strawberry Burger",
     "es": "Hamburguesa frutilla"
    },
    "price": "100G"
   },
   "flower-sherbet": {
    "type": "snack",
    "name": {
     "en": "Flower Sherbet",
     "es": "Sorbete de flor"
    },
    "price": "100G"
   },
   "melody-strawberry": {
    "type": "snack",
    "name": {
     "en": "Melody Strawberry",
     "es": "Frutilla Melody"
    },
    "price": "100G"
   },
   "cotton-cogimyun": {
    "type": "snack",
    "name": {
     "en": "Cotton Cogimyun",
     "es": "Algodón Cogimyun"
    },
    "price": "100G"
   },
   "star-pancake": {
    "type": "snack",
    "name": {
     "en": "Star Pancake",
     "es": "Panqueque estrella"
    },
    "price": "100G"
   },
   "purin-bag": {
    "type": "item",
    "name": {
     "en": "Purin Bag",
     "es": "Bolso Purin"
    },
    "price": "200G"
   },
   "ribbon-box": {
    "type": "item",
    "name": {
     "en": "Ribbon Box",
     "es": "Caja de moño"
    },
    "price": "200G"
   },
   "kuromi-diary": {
    "type": "item",
    "name": {
     "en": "Kuromi Diary",
     "es": "Diario Kuromi"
    },
    "price": "200G"
   },
   "cinnamon-cup": {
    "type": "item",
    "name": {
     "en": "Cinnamon Cup",
     "es": "Taza Cinnamon"
    },
    "price": "200G"
   }
  },
  "area": {
   "rooms": [
    "room-1.webp",
    "room-2.webp"
   ],
   "minigame": [
    "minigame-1.png",
    "minigame-2.png"
   ],
   "furniture": [],
   "toys": [],
   "accessories": []
  },
  "pet": {
   "es": "Hello Kitty Harapparatchi: deja cualquier mueble de Sanrio Characters en el patio.",
   "en": "Hello Kitty Harapparatchi: leave any Sanrio Characters furniture in the backyard."
  },
  "shop": {
   "accessories": [
    {
     "en": "Ribbon Arch",
     "price": "200G",
     "icon": "shop/ribbon-arch.webp"
    },
    {
     "en": "Tinychum Pochette",
     "price": "200G",
     "icon": "shop/tinychum-pochette.webp"
    },
    {
     "en": "Cornet Arch",
     "price": "200G",
     "icon": "shop/cornet-arch.webp"
    },
    {
     "en": "Milk Plush",
     "price": "200G",
     "icon": "shop/milk-plush.webp"
    },
    {
     "en": "V Helmet",
     "price": "200G",
     "icon": "shop/v-helmet.webp"
    },
    {
     "en": "Friend Cushion",
     "price": "200G",
     "icon": "shop/friend-cushion.webp"
    },
    {
     "en": "Friend Headband",
     "price": "200G",
     "icon": "shop/friend-headband.webp"
    },
    {
     "en": "Macaron Plush",
     "price": "200G",
     "icon": "shop/macaron-plush.webp"
    },
    {
     "en": "Head Dress",
     "price": "200G",
     "icon": "shop/head-dress.webp"
    },
    {
     "en": "Fancy Ribbon",
     "price": "200G",
     "icon": "shop/fancy-ribbon.webp"
    }
   ],
   "furniture": [
    {
     "en": "Kitty Wagon",
     "price": "300G",
     "icon": "shop/kitty-wagon.webp"
    },
    {
     "en": "Kitty Sofa",
     "price": "300G",
     "icon": "shop/kitty-sofa.webp"
    },
    {
     "en": "Everyone's Cushion",
     "price": "300G",
     "icon": "shop/everyones-cushion.webp"
    },
    {
     "en": "Everyone's Carousel",
     "price": "300G",
     "icon": "shop/everyones-carousel.webp"
    }
   ],
   "rooms": [
    {
     "en": "Kitty Party",
     "price": "500G",
     "icon": "shop/kitty-party.webp"
    },
    {
     "en": "Everyone's Room",
     "price": "500G",
     "icon": "shop/everyones-room.webp"
    }
   ]
  },
  "spots": [
   {
    "name": {
     "en": "Entrance Hall",
     "es": "Hall de entrada"
    },
    "text": {
     "en": "An animation of Sanrio characters performing and dancing will play.",
     "es": "Una animación de los personajes de Sanrio cantando y bailando."
    }
   },
   {
    "name": {
     "en": "Fluffy Ribbon House",
     "es": "Casa del moño esponjoso"
    },
    "text": {
     "en": "The player controls their Tamagotchi in a minigame by pressing buttons in the correct order so they can keep jumping on a bow shaped trampoline.",
     "es": "Presiona los botones en el orden correcto para que tu Tamagotchi siga saltando en una cama elástica con forma de moño."
    }
   }
  ],
  "yen": 1210
 },
 {
  "id": "angel-festival",
  "name": "Angel Festival",
  "year": 2024,
  "pal": "angel",
  "post": "01_294",
  "icons": "icons/",
  "chars": [
   {
    "n": "Mame-El",
    "img": "mametchiel.webp",
    "g": "male",
    "it": "bell-brioche"
   },
   {
    "n": "Pegasustchi",
    "img": "pegasupatchi.webp",
    "g": "male",
    "it": "pegasus-cotton-candy"
   },
   {
    "n": "Flowerdite",
    "img": "flowerdite.webp",
    "g": "female",
    "it": "rain-candy"
   },
   {
    "n": "Sebirecupid",
    "img": "sebirecupid.webp",
    "g": "female",
    "it": "heart-omelette"
   },
   {
    "n": "Yumemittie",
    "img": "yumemite.webp",
    "g": "female",
    "it": "ribbon-bread"
   },
   {
    "n": "Unimarucorn",
    "img": "unimarcorn.webp",
    "g": "either",
    "it": "unicorn-parfait"
   }
  ],
  "items": {
   "angel-pie": {
    "type": "meal",
    "name": {
     "en": "Angel Pie",
     "es": "Pastel de ángel"
    },
    "price": "100G"
   },
   "bell-brioche": {
    "type": "meal",
    "name": {
     "en": "Bell Brioche",
     "es": "Brioche campana"
    },
    "price": "100G"
   },
   "heart-omelette": {
    "type": "meal",
    "name": {
     "en": "Heart Omelette",
     "es": "Omelette corazón"
    },
    "price": "100G"
   },
   "ribbon-bread": {
    "type": "meal",
    "name": {
     "en": "Ribbon Bread",
     "es": "Pan moño"
    },
    "price": "100G"
   },
   "white-chocolate": {
    "type": "snack",
    "name": {
     "en": "White Chocolate",
     "es": "Chocolate blanco"
    },
    "price": "100G"
   },
   "unicorn-parfait": {
    "type": "snack",
    "name": {
     "en": "Unicorn Parfait",
     "es": "Parfait unicornio"
    },
    "price": "100G"
   },
   "rain-candy": {
    "type": "snack",
    "name": {
     "en": "Rain Candy",
     "es": "Dulces de lluvia"
    },
    "price": "100G"
   },
   "pegasus-cotton-candy": {
    "type": "snack",
    "name": {
     "en": "Pegasus Cotton Candy",
     "es": "Algodón Pegaso"
    },
    "price": "100G"
   },
   "angel-bell": {
    "type": "item",
    "name": {
     "en": "Angel Bell",
     "es": "Campana de ángel"
    },
    "price": "200G"
   },
   "fairy-stick": {
    "type": "item",
    "name": {
     "en": "Fairy Stick",
     "es": "Varita de hada"
    },
    "price": "200G"
   },
   "shooting-star": {
    "type": "item",
    "name": {
     "en": "Shooting Star",
     "es": "Estrella fugaz"
    },
    "price": "200G"
   },
   "angel-harp": {
    "type": "item",
    "name": {
     "en": "Angel Harp",
     "es": "Arpa de ángel"
    },
    "price": "200G"
   }
  },
  "area": {
   "rooms": [
    "room-1.webp",
    "room-2.webp"
   ],
   "minigame": [
    "minigame.png"
   ],
   "furniture": [],
   "toys": [],
   "accessories": []
  },
  "pet": {
   "es": "Angel Moaitchi: deja cualquier mueble de Angel Festival en el patio.",
   "en": "Angel Moaitchi: leave any Angel Festival furniture in the backyard."
  },
  "shop": {
   "accessories": [
    {
     "en": "Angel Headband",
     "price": "200G",
     "icon": "shop/angel-headband.webp"
    },
    {
     "en": "Chestnut Angel Plush",
     "price": "200G",
     "icon": "shop/chestnut-angel-plush.webp"
    },
    {
     "en": "Angel Wings",
     "price": "200G",
     "icon": "shop/angel-wings.webp"
    },
    {
     "en": "Angel's Trumpet",
     "price": "200G",
     "icon": "shop/angels-trumpet.webp"
    },
    {
     "en": "Ascension Hat",
     "price": "200G",
     "icon": "shop/ascension-hat.webp"
    },
    {
     "en": "Celestial Robe",
     "price": "200G",
     "icon": "shop/celestial-robe.webp"
    },
    {
     "en": "Unicorn Outfit",
     "price": "200G",
     "icon": "shop/unicorn-outfit.webp"
    },
    {
     "en": "Feather Aura",
     "price": "200G",
     "icon": "shop/feather-aura.webp"
    }
   ],
   "furniture": [
    {
     "en": "Shooting Star Organ",
     "price": "300G",
     "icon": "shop/shooting-star-organ.webp"
    },
    {
     "en": "Angel Object",
     "price": "300G",
     "icon": "shop/angel-object.webp"
    },
    {
     "en": "Heart Lamp",
     "price": "300G",
     "icon": "shop/heart-lamp.webp"
    },
    {
     "en": "Heart Arrows",
     "price": "300G",
     "icon": "shop/heart-arrows.webp"
    }
   ],
   "rooms": [
    {
     "en": "Angel Room",
     "price": "500G",
     "icon": "shop/angel-room.webp"
    },
    {
     "en": "Cupid Room",
     "price": "500G",
     "icon": "shop/cupid-room.webp"
    }
   ]
  },
  "spots": [
   {
    "name": {
     "en": "Square",
     "es": "Plaza"
    },
    "text": {
     "en": "An animation featuring Angeltchi characters will play.",
     "es": "Una animación con los personajes Angeltchi."
    }
   },
   {
    "name": {
     "en": "Minigame",
     "es": "Minijuego"
    },
    "text": {
     "en": "The player controls Chestnut Angel as they shoot hearts at Obaketchi.",
     "es": "Controlas a Chestnut Angel disparando corazones a los Obaketchi."
    }
   }
  ],
  "yen": 990
 },
 {
  "id": "monster-carnival",
  "name": "Monster Carnival",
  "year": 2024,
  "pal": "monster",
  "post": "01_295",
  "icons": "icons/",
  "chars": [
   {
    "n": "Mamegon",
    "img": "mamegon.webp",
    "g": "male",
    "it": "monster-sandwich"
   },
   {
    "n": "Slimy Patchi",
    "img": "slimy_patchi.webp",
    "g": "male",
    "it": "slimy-jelly"
   },
   {
    "n": "Meduupa",
    "img": "meduupa.webp",
    "g": "female",
    "it": "snake-churros"
   },
   {
    "n": "Gobpyon",
    "img": "gobupyon.webp",
    "g": "female",
    "it": "goblin-bun"
   },
   {
    "n": "Giveuptchi",
    "img": "giveuptchi.webp",
    "g": "female",
    "it": "eye-ball-jelly"
   },
   {
    "n": "Onimarutchi",
    "img": "onimarutchi.webp",
    "g": "either",
    "it": "ogre-rice-ball"
   }
  ],
  "items": {
   "squid-ink-pie": {
    "type": "meal",
    "name": {
     "en": "Squid Ink Pie",
     "es": "Pastel de tinta de calamar"
    },
    "price": "100G"
   },
   "monster-sandwich": {
    "type": "meal",
    "name": {
     "en": "Monster Sandwich",
     "es": "Sándwich monstruo"
    },
    "price": "100G"
   },
   "ogre-rice-ball": {
    "type": "meal",
    "name": {
     "en": "Ogre Rice Ball",
     "es": "Onigiri ogro"
    },
    "price": "100G"
   },
   "goblin-bun": {
    "type": "meal",
    "name": {
     "en": "Goblin Bun",
     "es": "Pan goblin"
    },
    "price": "100G"
   },
   "black-chocolate": {
    "type": "snack",
    "name": {
     "en": "Black Chocolate",
     "es": "Chocolate negro"
    },
    "price": "100G"
   },
   "slimy-jelly": {
    "type": "snack",
    "name": {
     "en": "Slimy Jelly",
     "es": "Gelatina viscosa"
    },
    "price": "100G"
   },
   "eye-ball-jelly": {
    "type": "snack",
    "name": {
     "en": "Eye Ball Jelly",
     "es": "Gelatina de ojos"
    },
    "price": "100G"
   },
   "snake-churros": {
    "type": "snack",
    "name": {
     "en": "Snake Churros",
     "es": "Churros serpiente"
    },
    "price": "100G"
   },
   "nightmare-pillow": {
    "type": "item",
    "name": {
     "en": "Nightmare Pillow",
     "es": "Almohada de pesadilla"
    },
    "price": "200G"
   },
   "clear-cape": {
    "type": "item",
    "name": {
     "en": "Clear Cape",
     "es": "Capa transparente"
    },
    "price": "200G"
   },
   "monster-mirror": {
    "type": "item",
    "name": {
     "en": "Monster Mirror",
     "es": "Espejo monstruo"
    },
    "price": "200G"
   },
   "witch-broom": {
    "type": "item",
    "name": {
     "en": "Witch Broom",
     "es": "Escoba de bruja"
    },
    "price": "200G"
   }
  },
  "area": {
   "rooms": [
    "room-1.webp",
    "room-2.webp"
   ],
   "minigame": [
    "minigame.png"
   ],
   "furniture": [],
   "toys": [],
   "accessories": []
  },
  "pet": {
   "es": "Devil Moaitchi: deja cualquier mueble de Monster Carnival en el patio.",
   "en": "Devil Moaitchi: leave any Monster Carnival furniture in the backyard."
  },
  "shop": {
   "accessories": [
    {
     "en": "Monster Cap",
     "price": "200G",
     "icon": "shop/monster-cap.webp"
    },
    {
     "en": "Monster Plush",
     "price": "200G",
     "icon": "shop/monster-plush.webp"
    },
    {
     "en": "Ball of Fire",
     "price": "200G",
     "icon": "shop/ball-of-fire.webp"
    },
    {
     "en": "Trident",
     "price": "200G",
     "icon": "shop/trident.webp"
    },
    {
     "en": "Monster Horns",
     "price": "200G",
     "icon": "shop/monster-horns.webp"
    },
    {
     "en": "Spider Web",
     "price": "200G",
     "icon": "shop/spider-web.webp"
    },
    {
     "en": "Bat Companion",
     "price": "200G",
     "icon": "shop/bat-companion.webp"
    },
    {
     "en": "Bat Wings",
     "price": "200G",
     "icon": "shop/bat-wings.webp"
    }
   ],
   "furniture": [
    {
     "en": "Bat Guitar",
     "price": "300G",
     "icon": "shop/bat-guitar.webp"
    },
    {
     "en": "Monster Object",
     "price": "300G",
     "icon": "shop/monster-object.webp"
    },
    {
     "en": "Coffin Fridge",
     "price": "300G",
     "icon": "shop/coffin-fridge.webp"
    },
    {
     "en": "Witch Cauldron",
     "price": "300G",
     "icon": "shop/witch-cauldron.webp"
    }
   ],
   "rooms": [
    {
     "en": "Mischief Living",
     "price": "500G",
     "icon": "shop/mischief-living.webp"
    },
    {
     "en": "Monster Living",
     "price": "500G",
     "icon": "shop/monster-living.webp"
    }
   ]
  },
  "spots": [
   {
    "name": {
     "en": "Haunted Puzzle",
     "es": "Rompecabezas embrujado"
    },
    "text": {
     "en": "The player moves pieces of a painting to complete a slide puzzle.",
     "es": "Mueve las piezas de un cuadro hasta completar el rompecabezas deslizante."
    }
   }
  ],
  "yen": 990
 },
 {
  "id": "fairy-tale-library",
  "name": "Fairy Tale Library",
  "year": 2024,
  "pal": "fairy",
  "post": "01_619",
  "icons": "icons/",
  "chars": [
   {
    "n": "Mamecchio",
    "img": "mamecchio.webp",
    "g": "male",
    "it": "whale-jelly"
   },
   {
    "n": "Piggypatchis",
    "img": "piggypatchis.webp",
    "g": "male",
    "it": "piggy-bank"
   },
   {
    "n": "Kikigoku",
    "img": "kikigoku.webp",
    "g": "male",
    "it": "flying-cloud"
   },
   {
    "n": "Pyonderella",
    "img": "pyonderella.webp",
    "g": "female",
    "it": "pumpkin-pudding"
   },
   {
    "n": "Milkyukihime",
    "img": "milkyukihime.webp",
    "g": "female",
    "it": "caramelized-apple"
   },
   {
    "n": "Neliakaguya",
    "img": "neliakaguya.webp",
    "g": "female",
    "it": "kaguya-sushi"
   }
  ],
  "items": {
   "kaguya-sushi": {
    "type": "meal",
    "name": {
     "en": "Kaguya Sushi",
     "es": "Sushi Kaguya"
    },
    "price": "100G"
   },
   "excali-burger": {
    "type": "meal",
    "name": {
     "en": "Excali Burger",
     "es": "Excali-hamburguesa"
    },
    "price": "100G"
   },
   "goose-dip": {
    "type": "meal",
    "name": {
     "en": "Goose Dip",
     "es": "Dip de ganso"
    },
    "price": "100G"
   },
   "rapunzel-pasta": {
    "type": "meal",
    "name": {
     "en": "Rapunzel Pasta",
     "es": "Pasta Rapunzel"
    },
    "price": "100G"
   },
   "caramelized-apple": {
    "type": "snack",
    "name": {
     "en": "Caramelized Apple",
     "es": "Manzana caramelizada"
    },
    "price": "100G"
   },
   "whale-jelly": {
    "type": "snack",
    "name": {
     "en": "Whale Jelly",
     "es": "Gelatina ballena"
    },
    "price": "100G"
   },
   "momotaro-compote": {
    "type": "snack",
    "name": {
     "en": "Momotaro Compote",
     "es": "Compota Momotaro"
    },
    "price": "100G"
   },
   "pumpkin-pudding": {
    "type": "snack",
    "name": {
     "en": "Pumpkin Pudding",
     "es": "Flan de calabaza"
    },
    "price": "100G"
   },
   "jacks-bean": {
    "type": "item",
    "name": {
     "en": "Jack's Bean",
     "es": "Frijol de Jack"
    },
    "price": "200G"
   },
   "flying-cloud": {
    "type": "item",
    "name": {
     "en": "Flying Cloud",
     "es": "Nube voladora"
    },
    "price": "200G"
   },
   "picture-book": {
    "type": "item",
    "name": {
     "en": "Picture Book",
     "es": "Libro ilustrado"
    },
    "price": "200G"
   },
   "piggy-bank": {
    "type": "item",
    "name": {
     "en": "Piggy Bank",
     "es": "Alcancía cerdito"
    },
    "price": "200G"
   }
  },
  "area": {
   "rooms": [
    "room-1.webp",
    "room-2.webp"
   ],
   "minigame": [
    "minigame.png"
   ],
   "furniture": [],
   "toys": [],
   "accessories": []
  },
  "pet": {
   "es": "Fairy Tale Doyakentchi: deja cualquier mueble de Fairy Tale Library en el patio.",
   "en": "Fairy Tale Doyakentchi: leave any Fairy Tale Library furniture in the backyard."
  },
  "shop": {
   "accessories": [
    {
     "en": "Wolf Back",
     "price": "200G",
     "icon": "shop/wolf-back.webp"
    },
    {
     "en": "Red Hood",
     "price": "200G",
     "icon": "shop/red-hood.webp"
    },
    {
     "en": "Gift Basket",
     "price": "200G",
     "icon": "shop/gift-basket.webp"
    },
    {
     "en": "Pumpkin Carriage",
     "price": "200G",
     "icon": "shop/pumpkin-carriage.webp"
    },
    {
     "en": "Donkey Crown",
     "price": "200G",
     "icon": "shop/donkey-crown.webp"
    },
    {
     "en": "Bremen Hat",
     "price": "200G",
     "icon": "shop/bremen-hat.webp"
    },
    {
     "en": "Magic Staff",
     "price": "200G",
     "icon": "shop/magic-staff.webp"
    },
    {
     "en": "Fairy Wings",
     "price": "200G",
     "icon": "shop/fairy-wings.webp"
    }
   ],
   "furniture": [
    {
     "en": "Forest Bed",
     "price": "300G",
     "icon": "shop/forest-bed.webp"
    },
    {
     "en": "Wall Clock",
     "price": "300G",
     "icon": "shop/wall-clock.webp"
    },
    {
     "en": "Happy Prince",
     "price": "300G",
     "icon": "shop/happy-prince.webp"
    },
    {
     "en": "Antique Bookshelf",
     "price": "300G",
     "icon": "shop/antique-bookshelf.webp"
    }
   ],
   "rooms": [
    {
     "en": "Flower Room",
     "price": "500G",
     "icon": "shop/flower-room.webp"
    },
    {
     "en": "Ball Room",
     "price": "500G",
     "icon": "shop/ball-room.webp"
    }
   ]
  },
  "spots": [
   {
    "name": {
     "en": "Turtletchi & Rabbitchi game",
     "es": "Juego de Turtletchi y Rabbitchi"
    },
    "text": {
     "en": "The Tamagotchi reenacts the race from the \"The Hare & The Tortoise\" aesop, racing against Mukimukimukitchi dressed as the tortoise. To make the Tamagotchi run, the user must alternate pressing the A and B buttons. Obstacles in the way must be jumped over by moving the Uni up.",
     "es": "Tu Tamagotchi corre la carrera de «La liebre y la tortuga» contra Mukimukimukitchi. Alterna A y B para correr e inclina el Uni hacia arriba para saltar los obstáculos."
    }
   }
  ],
  "yen": 990
 },
 {
  "id": "pokopea-land",
  "name": "PokoPea Land",
  "year": 2024,
  "pal": "pokopea",
  "post": "01_669",
  "icons": "icons/",
  "chars": [
   {
    "n": "Peanutskun",
    "img": "peanutskun.webp",
    "g": "male",
    "it": "peanuts-kun-jellies"
   },
   {
    "n": "Chancho",
    "img": "chancho.webp",
    "g": "male",
    "it": "soda-tasters"
   },
   {
    "n": "Peanutsoyaji",
    "img": "peanutsoyajitchi.webp",
    "g": "male",
    "it": "peanuts-kun-sauna"
   },
   {
    "n": "Bnn-hairtchi",
    "img": "bananahairtchi.webp",
    "g": "male",
    "it": "ramune"
   },
   {
    "n": "Tanukininja",
    "img": "tanukininja.webp",
    "g": "male",
    "it": "poko-latte"
   },
   {
    "n": "Ponpoko",
    "img": "ponpoko.webp",
    "g": "female",
    "it": "endless-takoyaki"
   },
   {
    "n": "Gachikoi-P",
    "img": "gachikoiPonpoko.webp",
    "g": "female",
    "it": "beetle-parfait"
   }
  ],
  "items": {
   "fried-chicken": {
    "type": "meal",
    "name": {
     "en": "Fried Chicken",
     "es": "Pollo frito"
    },
    "price": "100G"
   },
   "gyoza": {
    "type": "meal",
    "name": {
     "en": "Gyoza",
     "es": "Gyoza"
    },
    "price": "100G"
   },
   "mapo-curry": {
    "type": "meal",
    "name": {
     "en": "Mapo Curry",
     "es": "Curry mapo"
    },
    "price": "100G"
   },
   "endless-takoyaki": {
    "type": "meal",
    "name": {
     "en": "Endless Takoyaki",
     "es": "Takoyaki infinito"
    },
    "price": "100G"
   },
   "tofu": {
    "type": "meal",
    "name": {
     "en": "Tofu",
     "es": "Tofu"
    },
    "price": "100G"
   },
   "peanuts-kun-jellies": {
    "type": "snack",
    "name": {
     "en": "Peanuts-kun Jellies",
     "es": "Gomitas Peanuts-kun"
    },
    "price": "100G"
   },
   "tanuki-cake": {
    "type": "snack",
    "name": {
     "en": "Tanuki Cake",
     "es": "Pastel tanuki"
    },
    "price": "100G"
   },
   "poko-latte": {
    "type": "snack",
    "name": {
     "en": "Poko Latte",
     "es": "Poko latte"
    },
    "price": "100G"
   },
   "ramune": {
    "type": "snack",
    "name": {
     "en": "Ramune",
     "es": "Ramune"
    },
    "price": "100G"
   },
   "beetle-parfait": {
    "type": "snack",
    "name": {
     "en": "Beetle Parfait",
     "es": "Parfait escarabajo"
    },
    "price": "100G"
   },
   "soda-tasters": {
    "type": "snack",
    "name": {
     "en": "Soda Tasters",
     "es": "Sodas surtidas"
    },
    "price": "100G"
   },
   "peanuts-kun-sauna": {
    "type": "item",
    "name": {
     "en": "Peanuts-kun Sauna",
     "es": "Sauna Peanuts-kun"
    },
    "price": "100G"
   },
   "takoyaki-maker": {
    "type": "item",
    "name": {
     "en": "Takoyaki Maker",
     "es": "Máquina de takoyaki"
    },
    "price": "100G"
   }
  },
  "area": {
   "rooms": [
    "room-1.webp",
    "room-2.webp"
   ],
   "minigame": [
    "minigame.png"
   ],
   "furniture": [],
   "toys": [],
   "accessories": []
  },
  "pet": {
   "es": "Mr. Dog: deja cualquier mueble de PokoPea Land en el patio.",
   "en": "Mr. Dog: leave any PokoPea Land furniture in the backyard."
  },
  "shop": {
   "accessories": [
    {
     "en": "Peanuts-kun Glasses",
     "price": "100G",
     "icon": "shop/peanuts-kun-glasses.webp"
    },
    {
     "en": "Peanuts-kun Earrings",
     "price": "100G",
     "icon": "shop/peanuts-kun-earrings.webp"
    },
    {
     "en": "Peanuts-kun Plush",
     "price": "100G",
     "icon": "shop/peanuts-kun-plush.webp"
    },
    {
     "en": "Ponpoko Wig",
     "price": "100G",
     "icon": "shop/ponpoko-wig.webp"
    },
    {
     "en": "Tanuki Eyemask",
     "price": "100G",
     "icon": "shop/tanuki-eyemask.webp"
    },
    {
     "en": "Ponpoko Tail",
     "price": "100G",
     "icon": "shop/ponpoko-tail.webp"
    },
    {
     "en": "Tanuki Plush",
     "price": "100G",
     "icon": "shop/tanuki-plush.webp"
    },
    {
     "en": "Tanuki Ears",
     "price": "100G",
     "icon": "shop/tanuki-ears.webp"
    },
    {
     "en": "PokoPea Cookies",
     "price": "100G",
     "icon": "shop/pokopea-cookies.webp"
    },
    {
     "en": "Popcorn Holder",
     "price": "100G",
     "icon": "shop/popcorn-holder.webp"
    },
    {
     "en": "Beetle Plush",
     "price": "100G",
     "icon": "shop/beetle-plush.webp"
    },
    {
     "en": "Purple Beads",
     "price": "100G",
     "icon": "shop/purple-beads.webp"
    },
    {
     "en": "Power of Love",
     "price": "100G",
     "icon": "shop/power-of-love.webp"
    }
   ],
   "furniture": [
    {
     "en": "Treadmill",
     "price": "100G",
     "icon": "shop/treadmill.webp"
    },
    {
     "en": "Shigaraki Ware",
     "price": "100G",
     "icon": "shop/shigaraki-ware.webp"
    },
    {
     "en": "Cardboard Box Pile",
     "price": "100G",
     "icon": "shop/cardboard-box-pile.webp"
    },
    {
     "en": "Retro TV",
     "price": "100G",
     "icon": "shop/retro-tv.webp"
    }
   ],
   "rooms": [
    {
     "en": "Streaming Room",
     "price": "100G",
     "icon": "shop/streaming-room.webp"
    },
    {
     "en": "Sauna Room",
     "price": "100G",
     "icon": "shop/sauna-room.webp"
    }
   ]
  },
  "spots": [
   {
    "name": {
     "en": "PokoPea Monument",
     "es": "Monumento PokoPea"
    },
    "text": {
     "en": "An animation of PokoPea and friends putting on a parade will play.",
     "es": "Una animación de PokoPea y sus amigos en un desfile."
    }
   },
   {
    "name": {
     "en": "Orikaku Minigame",
     "es": "Minijuego Orikaku"
    },
    "text": {
     "en": "As PonPoko and Peanutskun dance to Okiraku King, the user must press the A, B, and C buttons as notes come down from the top of the screen in time to the music.",
     "es": "Mientras PonPoko y Peanutskun bailan Okiraku King, presiona A, B y C cuando las notas bajen al ritmo de la música."
    }
   }
  ],
  "yen": 1210
 },
 {
  "id": "doritama-school",
  "name": "DoriTama School",
  "year": 2025,
  "pal": "blue",
  "post": "01_813",
  "icons": "icons/",
  "chars": [
   {
    "n": "Kuromametchi",
    "img": "kuromametchi.webp",
    "g": "male",
    "it": "soccer-rice-ball"
   },
   {
    "n": "Octpasketchi",
    "img": "octpasketchi.webp",
    "g": "male",
    "it": "basketball-cookie"
   },
   {
    "n": "Tapepentchi",
    "img": "tapepentchi.webp",
    "g": "male",
    "it": "tape-cake"
   },
   {
    "n": "Yumemitchi",
    "img": "yumemitchi.webp",
    "g": "female",
    "it": "yumecantchi-bento"
   },
   {
    "n": "Kiraritchi",
    "img": "kiraritchi.webp",
    "g": "female",
    "it": "yume-kira-bag"
   },
   {
    "n": "Miraitchi",
    "img": "miraitchi.webp",
    "g": "female",
    "it": "knock-tap"
   },
   {
    "n": "Clulutchi",
    "img": "clulutchi.webp",
    "g": "female",
    "it": "pocket-designer"
   }
  ],
  "items": {
   "soccer-rice-ball": {
    "type": "meal",
    "name": {
     "en": "Soccer Rice Ball",
     "es": "Onigiri fútbol"
    },
    "price": "100G"
   },
   "doritama-lunch": {
    "type": "meal",
    "name": {
     "en": "DoriTama Lunch",
     "es": "Almuerzo DoriTama"
    },
    "price": "100G"
   },
   "yakisoba-bread": {
    "type": "meal",
    "name": {
     "en": "Yakisoba Bread",
     "es": "Pan de yakisoba"
    },
    "price": "100G"
   },
   "yumecantchi-bento": {
    "type": "meal",
    "name": {
     "en": "Yumecantchi Bento",
     "es": "Bento Yumecantchi"
    },
    "price": "100G"
   },
   "tape-cake": {
    "type": "snack",
    "name": {
     "en": "Tape Cake",
     "es": "Pastel cinta"
    },
    "price": "100G"
   },
   "basketball-cookie": {
    "type": "snack",
    "name": {
     "en": "Basketball Cookie",
     "es": "Galleta básquetbol"
    },
    "price": "100G"
   },
   "doritama-cake": {
    "type": "snack",
    "name": {
     "en": "DoriTama Cake",
     "es": "Pastel DoriTama"
    },
    "price": "100G"
   },
   "school-bus-cookie": {
    "type": "snack",
    "name": {
     "en": "School Bus Cookie",
     "es": "Galleta bus escolar"
    },
    "price": "100G"
   },
   "yume-kira-bag": {
    "type": "item",
    "name": {
     "en": "Yume Kira Bag",
     "es": "Bolso Yume Kira"
    },
    "price": "200G"
   },
   "pocket-designer": {
    "type": "item",
    "name": {
     "en": "Pocket Designer",
     "es": "Pocket Designer"
    },
    "price": "200G"
   },
   "knock-tap": {
    "type": "item",
    "name": {
     "en": "Knock Tap",
     "es": "Knock Tap"
    },
    "price": "200G"
   }
  },
  "area": {
   "rooms": [
    "room-1.webp",
    "room-2.webp"
   ],
   "minigame": [
    "minigame.png"
   ],
   "furniture": [],
   "toys": [],
   "accessories": []
  },
  "pet": {
   "es": "Una mascota libro (aún sin nombre): deja cualquier mueble de DoriTama School en el patio.",
   "en": "An unnamed textbook pet: leave any DoriTama School furniture in the backyard."
  },
  "shop": {
   "accessories": [
    {
     "en": "Prank Eraser",
     "price": "200G",
     "icon": "shop/prank-eraser.webp"
    },
    {
     "en": "Morning Toast",
     "price": "200G",
     "icon": "shop/morning-toast.webp"
    },
    {
     "en": "School Bag",
     "price": "200G",
     "icon": "shop/school-bag.webp"
    },
    {
     "en": "School Ribbon",
     "price": "200G",
     "icon": "shop/school-ribbon.webp"
    },
    {
     "en": "Marching Hat",
     "price": "200G",
     "icon": "shop/marching-hat.webp"
    },
    {
     "en": "Marching Baton",
     "price": "200G",
     "icon": "shop/marching-baton.webp"
    },
    {
     "en": "Playful Cap",
     "price": "200G",
     "icon": "shop/playful-cap.webp"
    },
    {
     "en": "Morning Glory",
     "price": "200G",
     "icon": "shop/morning-glory.webp"
    },
    {
     "en": "Graduation Cap",
     "price": "200G",
     "icon": "shop/graduation-cap.webp"
    },
    {
     "en": "Graduation Robe",
     "price": "200G",
     "icon": "shop/graduation-robe.webp"
    }
   ],
   "furniture": [
    {
     "en": "School Locker",
     "price": "300G",
     "icon": "shop/school-locker.webp"
    },
    {
     "en": "Anatomy Object",
     "price": "300G",
     "icon": "shop/anatomy-object.webp"
    },
    {
     "en": "Basketball Set",
     "price": "300G",
     "icon": "shop/basketball-set.webp"
    },
    {
     "en": "Cheer Lift Plush",
     "price": "300G",
     "icon": "shop/cheer-lift-plush.webp"
    }
   ],
   "rooms": [
    {
     "en": "School Room",
     "price": "500G",
     "icon": "shop/school-room.webp"
    },
    {
     "en": "Gym",
     "price": "500G",
     "icon": "shop/gym.webp"
    }
   ]
  },
  "spots": [
   {
    "name": {
     "en": "Dreambakutchi Catch",
     "es": "Atrapa a los Dreambakutchi"
    },
    "text": {
     "en": "The user controls their Tamagotchi as they ride the dream board to catch all the Dreambakutchi while avoiding the star obstacles. Pressing A will make the board rise and letting it go will make it fall.",
     "es": "Tu Tamagotchi va en una tabla de sueños atrapando Dreambakutchi y esquivando estrellas. Mantén A para subir y suéltalo para bajar."
    }
   }
  ],
  "yen": 990
 },
 {
  "id": "kawaisouni-land",
  "name": "KAWAISOUNI! Land",
  "year": 2025,
  "pal": "kawaisouni",
  "post": "01_1008",
  "icons": "icons/",
  "chars": [
   {
    "n": "Opanchu Usagi",
    "img": "opanchu_usagi.webp",
    "g": "either",
    "it": "personal-car"
   },
   {
    "n": "Npocham",
    "img": "npocham.webp",
    "g": "either",
    "it": "macaron"
   },
   {
    "n": "Kimimaro",
    "img": "kimimaro.webp",
    "g": "either",
    "it": "cookie"
   },
   {
    "n": "Kawaisouni Mametchi",
    "img": "kawaisouni_mametchi.webp",
    "g": "male",
    "it": "fried-rice"
   },
   {
    "n": "Kawaisouni Kuchipatchi",
    "img": "kawaisouni_kuchipatchi.webp",
    "g": "male",
    "it": "flan"
   },
   {
    "n": "Kawaisouni Mimitchi",
    "img": "kawaisouni_mimitchi.webp",
    "g": "female",
    "it": "yakisoba"
   }
  ],
  "items": {
   "fried-rice": {
    "type": "meal",
    "name": {
     "en": "Fried Rice",
     "es": "Arroz frito"
    },
    "price": "100G"
   },
   "omelette-rice": {
    "type": "meal",
    "name": {
     "en": "Omelette Rice",
     "es": "Omurice"
    },
    "price": "100G"
   },
   "yakisoba": {
    "type": "meal",
    "name": {
     "en": "Yakisoba",
     "es": "Yakisoba"
    },
    "price": "100G"
   },
   "steak": {
    "type": "meal",
    "name": {
     "en": "Steak",
     "es": "Bistec"
    },
    "price": "100G"
   },
   "waffle": {
    "type": "snack",
    "name": {
     "en": "Waffle",
     "es": "Waffle"
    },
    "price": "100G"
   },
   "flan": {
    "type": "snack",
    "name": {
     "en": "Flan",
     "es": "Flan"
    },
    "price": "100G"
   },
   "crepe": {
    "type": "snack",
    "name": {
     "en": "Crepe",
     "es": "Crepa"
    },
    "price": "100G"
   },
   "cookie": {
    "type": "snack",
    "name": {
     "en": "Cookie",
     "es": "Galleta"
    },
    "price": "100G"
   },
   "macaron": {
    "type": "item",
    "name": {
     "en": "Macaron",
     "es": "Macaron"
    },
    "price": "200G"
   },
   "personal-car": {
    "type": "item",
    "name": {
     "en": "Personal Car",
     "es": "Auto personal"
    },
    "price": "200G"
   },
   "sweater": {
    "type": "item",
    "name": {
     "en": "Sweater",
     "es": "Suéter"
    },
    "price": "200G"
   }
  },
  "area": {
   "rooms": [
    "room-1.webp",
    "room-2.webp"
   ],
   "minigame": [
    "minigame.png"
   ],
   "furniture": [],
   "toys": [],
   "accessories": []
  },
  "pet": {
   "es": "Un perrito de KAWAISOUNI! (aún sin nombre): deja cualquier mueble del área en el patio.",
   "en": "An unnamed KAWAISOUNI! dog: leave any of the area's furniture in the backyard."
  },
  "shop": {
   "accessories": [
    {
     "en": "Pleading Eyewear",
     "price": "200G",
     "icon": "shop/pleading-eyewear.webp"
    },
    {
     "en": "Npocham Hat",
     "price": "200G",
     "icon": "shop/npocham-hat.webp"
    },
    {
     "en": "Opanchu Headband",
     "price": "200G",
     "icon": "shop/opanchu-headband.webp"
    },
    {
     "en": "Opanchu Usagi Plush",
     "price": "200G",
     "icon": "shop/opanchu-usagi-plush.webp"
    },
    {
     "en": "Npocham Plush",
     "price": "200G",
     "icon": "shop/npocham-plush.webp"
    },
    {
     "en": "Kimimaro Plush",
     "price": "200G",
     "icon": "shop/kimimaro-plush.webp"
    },
    {
     "en": "Pochette",
     "price": "200G",
     "icon": "shop/pochette.webp"
    },
    {
     "en": "Grannies Plush",
     "price": "200G",
     "icon": "shop/grannies-plush.webp"
    }
   ],
   "furniture": [
    {
     "en": "Ribbon Sofa",
     "price": "300G",
     "icon": "shop/ribbon-sofa.webp"
    },
    {
     "en": "Ribbon TV",
     "price": "300G",
     "icon": "shop/ribbon-tv.webp"
    },
    {
     "en": "Flower Sofa",
     "price": "300G",
     "icon": "shop/flower-sofa.webp"
    },
    {
     "en": "Flower Dresser",
     "price": "300G",
     "icon": "shop/flower-dresser.webp"
    },
    {
     "en": "Trendy Girls Object",
     "price": "300G",
     "icon": "shop/trendy-girls-object.webp"
    }
   ],
   "rooms": [
    {
     "en": "Npocham Room",
     "price": "500G",
     "icon": "shop/npocham-room.webp"
    },
    {
     "en": "Opanchu Usagi Room",
     "price": "500G",
     "icon": "shop/opanchu-usagi-room.webp"
    }
   ]
  },
  "spots": [
   {
    "name": {
     "en": "Food Fight",
     "es": "Batalla de comida"
    },
    "text": {
     "en": "As Npocham and Kimimaro eat at a diner, the user must alternate between pressing the A and B button while they eat their food. When they drink water, the Uni must be shaken instead.",
     "es": "Mientras Npocham y Kimimaro comen en un diner, alterna A y B para que coman; cuando toman agua, agita el Uni."
    }
   }
  ],
  "yen": 1210
 },
 {
  "id": "esther-bunny-world",
  "name": "Esther Bunny World",
  "year": 2025,
  "pal": "esther",
  "post": "01_1195",
  "icons": "icons/",
  "chars": [
   {
    "n": "Ribbon Bunny",
    "img": "ribbon_bunny.webp",
    "g": "either",
    "it": "ribbon-burger"
   },
   {
    "n": "Cream Bunny",
    "img": "cream_bunny.webp",
    "g": "either",
    "it": "cream-cupcake"
   },
   {
    "n": "Lavender Bunny",
    "img": "lavender_bunny.webp",
    "g": "either",
    "it": "lavender-macaron"
   },
   {
    "n": "Happy Bunny",
    "img": "happy_bunny.webp",
    "g": "either",
    "it": "camera"
   },
   {
    "n": "Blue Bunny",
    "img": "blue_bunny.webp",
    "g": "either",
    "it": "blue-soda"
   }
  ],
  "items": {
   "lunch-basket": {
    "type": "meal",
    "name": {
     "en": "Lunch Basket",
     "es": "Canasta de almuerzo"
    },
    "price": "100G"
   },
   "bunny-granola": {
    "type": "meal",
    "name": {
     "en": "Bunny Granola",
     "es": "Granola conejito"
    },
    "price": "100G"
   },
   "breakfast-plate": {
    "type": "meal",
    "name": {
     "en": "Breakfast Plate",
     "es": "Plato de desayuno"
    },
    "price": "100G"
   },
   "ribbon-burger": {
    "type": "meal",
    "name": {
     "en": "Ribbon Burger",
     "es": "Hamburguesa moño"
    },
    "price": "100G"
   },
   "pink-smoothie": {
    "type": "meal",
    "name": {
     "en": "Pink Smoothie",
     "es": "Batido rosado"
    },
    "price": "100G"
   },
   "lavender-macaron": {
    "type": "snack",
    "name": {
     "en": "Lavender Macaron",
     "es": "Macaron lavanda"
    },
    "price": "100G"
   },
   "heart-latte": {
    "type": "snack",
    "name": {
     "en": "Heart Latte",
     "es": "Latte corazón"
    },
    "price": "100G"
   },
   "chips": {
    "type": "snack",
    "name": {
     "en": "Chips",
     "es": "Papas fritas"
    },
    "price": "100G"
   },
   "cream-cupcake": {
    "type": "snack",
    "name": {
     "en": "Cream Cupcake",
     "es": "Cupcake de crema"
    },
    "price": "100G"
   },
   "blue-soda": {
    "type": "snack",
    "name": {
     "en": "Blue Soda",
     "es": "Soda azul"
    },
    "price": "100G"
   },
   "camera": {
    "type": "item",
    "name": {
     "en": "Camera",
     "es": "Cámara"
    },
    "price": "200G"
   }
  },
  "area": {
   "rooms": [
    "room-1.webp",
    "room-2.webp",
    "room-3.webp",
    "room-4.webp"
   ],
   "minigame": [],
   "furniture": [],
   "toys": [],
   "accessories": []
  },
  "pet": {
   "es": "Una tortuga de Esther Bunny (aún sin nombre): deja cualquier mueble del área en el patio.",
   "en": "An unnamed Esther Bunny turtle: leave any of the area's furniture in the backyard."
  },
  "shop": {
   "accessories": [
    {
     "en": "Picnic Basket",
     "price": "200G",
     "icon": "shop/picnic-basket.webp"
    },
    {
     "en": "Heart Plush",
     "price": "200G",
     "icon": "shop/heart-plush.webp"
    },
    {
     "en": "Big Rose",
     "price": "200G",
     "icon": "shop/big-rose.webp"
    },
    {
     "en": "Ribbon Bunny Headband",
     "price": "200G",
     "icon": "shop/ribbon-bunny-headband.webp"
    },
    {
     "en": "Sunglasses",
     "price": "200G",
     "icon": "shop/sunglasses.webp"
    },
    {
     "en": "Iced Coffee",
     "price": "200G",
     "icon": "shop/iced-coffee.webp"
    },
    {
     "en": "Bunny Pochette",
     "price": "200G",
     "icon": "shop/bunny-pochette.webp"
    },
    {
     "en": "Bunny Balloons",
     "price": "200G",
     "icon": "shop/bunny-balloons.webp"
    },
    {
     "en": "Bunny Eyemask",
     "price": "200G",
     "icon": "shop/bunny-eyemask.webp"
    },
    {
     "en": "Cheery Rainbow",
     "price": "200G",
     "icon": "shop/cheery-rainbow.webp"
    },
    {
     "en": "Bearie Plush",
     "price": "200G",
     "icon": "shop/bearie-plush.webp"
    }
   ],
   "furniture": [
    {
     "en": "Heart Shaped Vanity",
     "price": "300G",
     "icon": "shop/heart-shaped-vanity.webp"
    },
    {
     "en": "Ribbon Mirror",
     "price": "300G",
     "icon": "shop/ribbon-mirror.webp"
    },
    {
     "en": "Decorative Sign",
     "price": "300G",
     "icon": "shop/decorative-sign.webp"
    },
    {
     "en": "Bunny Bed",
     "price": "300G",
     "icon": "shop/bunny-bed.webp"
    },
    {
     "en": "TV",
     "price": "300G",
     "icon": "shop/tv.webp"
    },
    {
     "en": "Lavender Sofa",
     "price": "300G",
     "icon": "shop/lavender-sofa.webp"
    },
    {
     "en": "Side Table",
     "price": "300G",
     "icon": "shop/side-table.webp"
    },
    {
     "en": "Canvas",
     "price": "300G",
     "icon": "shop/canvas.webp"
    },
    {
     "en": "Potted Plants",
     "price": "300G",
     "icon": "shop/potted-plants.webp"
    }
   ],
   "rooms": [
    {
     "en": "Rose Room",
     "price": "500G",
     "icon": "shop/rose-room.webp"
    },
    {
     "en": "Two-Toned Room",
     "price": "500G",
     "icon": "shop/two-toned-room.webp"
    },
    {
     "en": "Pink Room",
     "price": "500G",
     "icon": "shop/pink-room.webp"
    },
    {
     "en": "Heart Room",
     "price": "500G",
     "icon": "shop/heart-room.webp"
    }
   ]
  },
  "spots": [
   {
    "name": {
     "en": "Bunny Theater",
     "es": "Teatro conejito"
    },
    "text": {
     "en": "Several Tamagotchis will be watching an animation of bunnies on a movie screen. The bunnies will then jump from the screen to join the Tamagotchis in the theater.",
     "es": "Varios Tamagotchi ven una película de conejitos que después saltan de la pantalla al teatro."
    }
   },
   {
    "name": {
     "en": "Heartfelt Letters",
     "es": "Cartas de corazón"
    },
    "text": {
     "en": "The player must use the A and B buttons to move the teddy bear left and right in order to bounce the moving heart into the letters above.",
     "es": "Mueve al osito con A y B para hacer rebotar el corazón hacia las letras de arriba."
    }
   }
  ],
  "yen": 1210
 },
 {
  "id": "tamazon-jungle-tour",
  "name": "Tamazon Jungle Tour",
  "year": 2026,
  "pal": "tamazon",
  "post": "01_1336",
  "icons": "icons/",
  "chars": [
   {
    "n": "Ginjirotchi",
    "img": "ginjirotchi.webp",
    "g": "male",
    "it": "freshly-cooked-rice"
   },
   {
    "n": "Hashizotchi",
    "img": "hashizotchi.webp",
    "g": "male",
    "it": "kabuki-donuts"
   },
   {
    "n": "Smartchi",
    "img": "smartchi.webp",
    "g": "male",
    "it": "piano"
   },
   {
    "n": "Gorippatchi",
    "img": "gorippatchi.webp",
    "g": "female",
    "it": "banana-hoard"
   },
   {
    "n": "Makiko",
    "img": "makiko.webp",
    "g": "female",
    "it": "curling-iron"
   },
   {
    "n": "Himespetchi",
    "img": "himespetchi.webp",
    "g": "female",
    "it": "mametchi-omelette"
   }
  ],
  "items": {
   "stakeout-set": {
    "type": "meal",
    "name": {
     "en": "Stakeout Set",
     "es": "Set de vigilancia"
    },
    "price": "100G"
   },
   "freshly-cooked-rice": {
    "type": "meal",
    "name": {
     "en": "Freshly Cooked Rice",
     "es": "Arroz recién hecho"
    },
    "price": "100G"
   },
   "tamax-tv-pizza": {
    "type": "meal",
    "name": {
     "en": "TAMAX-TV Pizza",
     "es": "Pizza TAMAX-TV"
    },
    "price": "100G"
   },
   "mametchi-omelette": {
    "type": "meal",
    "name": {
     "en": "Mametchi Omelette",
     "es": "Omelette Mametchi"
    },
    "price": "100G"
   },
   "kabuki-donuts": {
    "type": "snack",
    "name": {
     "en": "Kabuki Donuts",
     "es": "Donas kabuki"
    },
    "price": "100G"
   },
   "oyajitchi-soda": {
    "type": "snack",
    "name": {
     "en": "Oyajitchi Soda",
     "es": "Soda Oyajitchi"
    },
    "price": "100G"
   },
   "earth-gummy": {
    "type": "snack",
    "name": {
     "en": "Earth Gummy",
     "es": "Gomita Tierra"
    },
    "price": "100G"
   },
   "banana-hoard": {
    "type": "snack",
    "name": {
     "en": "Banana Hoard",
     "es": "Montón de plátanos"
    },
    "price": "100G"
   },
   "curling-iron": {
    "type": "item",
    "name": {
     "en": "Curling Iron",
     "es": "Rizador"
    },
    "price": "200G"
   },
   "piano": {
    "type": "item",
    "name": {
     "en": "Piano",
     "es": "Piano"
    },
    "price": "200G"
   }
  },
  "area": {
   "rooms": [
    "room-1.webp",
    "room-2.webp"
   ],
   "minigame": [
    "minigame.png"
   ],
   "furniture": [],
   "toys": [],
   "accessories": []
  },
  "pet": {
   "es": "Bagubagutchi: deja cualquier mueble de Tamazon Jungle Tour en el patio.",
   "en": "Bagubagutchi: leave any Tamazon Jungle Tour furniture in the backyard."
  },
  "shop": {
   "accessories": [
    {
     "en": "Aka & Pipo Dolls",
     "price": "200G",
     "icon": "shop/aka-pipo-dolls.webp"
    },
    {
     "en": "Himeboytchi Hat",
     "price": "200G",
     "icon": "shop/himeboytchi-hat.webp"
    },
    {
     "en": "Himespe Phone",
     "price": "200G",
     "icon": "shop/himespe-phone.webp"
    },
    {
     "en": "Banana Wand",
     "price": "200G",
     "icon": "shop/banana-wand.webp"
    },
    {
     "en": "Butterfly Mask",
     "price": "200G",
     "icon": "shop/butterfly-mask.webp"
    },
    {
     "en": "Fedora",
     "price": "200G",
     "icon": "shop/fedora.webp"
    },
    {
     "en": "Briefcase",
     "price": "200G",
     "icon": "shop/briefcase.webp"
    },
    {
     "en": "Kabuki Makeup",
     "price": "200G",
     "icon": "shop/kabuki-makeup.webp"
    },
    {
     "en": "Kabuki Wig",
     "price": "200G",
     "icon": "shop/kabuki-wig.webp"
    },
    {
     "en": "Grippatchi's Approval",
     "price": "200G",
     "icon": "shop/grippatchis-approval.webp"
    },
    {
     "en": "Whirly Doll",
     "price": "200G",
     "icon": "shop/whirly-doll.webp"
    }
   ],
   "furniture": [
    {
     "en": "Studious Dresser",
     "price": "300G",
     "icon": "shop/studious-dresser.webp"
    },
    {
     "en": "Test Beaker Set",
     "price": "300G",
     "icon": "shop/test-beaker-set.webp"
    },
    {
     "en": "Retro Poop",
     "price": "300G",
     "icon": "shop/retro-poop.webp"
    },
    {
     "en": "Retro Bed",
     "price": "300G",
     "icon": "shop/retro-bed.webp"
    }
   ],
   "rooms": [
    {
     "en": "Study Room",
     "price": "500G",
     "icon": "shop/study-room.webp"
    },
    {
     "en": "Retro Room",
     "price": "500G",
     "icon": "shop/retro-room.webp"
    }
   ]
  },
  "spots": [
   {
    "name": {
     "en": "Discovery Cruise",
     "es": "Crucero de descubrimiento"
    },
    "text": {
     "en": "An animation plays where the user's Tamagotchi takes a boat ride through a variety of famous locations, such as Makkakka Town, Uratama Town and TAMAX-TV.",
     "es": "Tu Tamagotchi pasea en bote por lugares famosos como Makkakka Town, Uratama Town y TAMAX-TV."
    }
   },
   {
    "name": {
     "en": "Retro Arcade",
     "es": "Arcade retro"
    },
    "text": {
     "en": "Houses the Castle Climb minigame, where users take control of the DekaTama protagonist as they jump off platforms, clouds and springs held up by Royal Servants to climb to the top of Gotchi King's Castle before time runs out.",
     "es": "Aquí está el minijuego Castle Climb: controlas al protagonista de DekaTama saltando por plataformas, nubes y resortes hasta la cima del castillo de Gotchi King antes de que se acabe el tiempo."
    }
   }
  ],
  "yen": 990
 },
 {
  "id": "babys-dream",
  "name": "Baby's Dream",
  "year": 2026,
  "pal": "babys",
  "post": "01_1533",
  "icons": "icons/",
  "chars": [
   {
    "n": "Mameyotchi",
    "img": "mameyotchi.webp",
    "g": "male",
    "it": "mametchi-pottage"
   },
   {
    "n": "Cakeypatchi",
    "img": "cakeypatchi.webp",
    "g": "male",
    "it": "mille-crepe-cake"
   },
   {
    "n": "Shycootchi",
    "img": "shycootchiArtwork.webp",
    "g": "male",
    "it": "dumbbell-dango"
   },
   {
    "n": "Babumimitchi",
    "img": "babumimitchiArtwork.webp",
    "g": "female",
    "it": "stuffed-cabbage"
   },
   {
    "n": "Ms. Chama",
    "img": "MsChamaArtwork.webp",
    "g": "female",
    "it": "chamametchi-malatang"
   },
   {
    "n": "Unimobiltchi",
    "img": "unimobiltchi.webp",
    "g": "either",
    "it": "unimaru-cotton-candy"
   }
  ],
  "items": {
   "mametchi-pottage": {
    "type": "meal",
    "name": {
     "en": "Mametchi Pottage",
     "es": "Potaje Mametchi"
    },
    "price": "100G"
   },
   "chamametchi-malatang": {
    "type": "meal",
    "name": {
     "en": "Chamametchi Malatang",
     "es": "Malatang Chamametchi"
    },
    "price": "100G"
   },
   "stuffed-cabbage": {
    "type": "meal",
    "name": {
     "en": "Stuffed Cabbage",
     "es": "Repollo relleno"
    },
    "price": "100G"
   },
   "babys-lunch": {
    "type": "meal",
    "name": {
     "en": "Baby's Lunch",
     "es": "Almuerzo de bebé"
    },
    "price": "100G"
   },
   "mille-crepe-cake": {
    "type": "snack",
    "name": {
     "en": "Mille Crepe Cake",
     "es": "Torta mil crepes"
    },
    "price": "100G"
   },
   "unimaru-cotton-candy": {
    "type": "snack",
    "name": {
     "en": "Unimaru Cotton Candy",
     "es": "Algodón de azúcar Unimaru"
    },
    "price": "100G"
   },
   "dumbbell-dango": {
    "type": "snack",
    "name": {
     "en": "Dumbbell Dango",
     "es": "Dango pesa"
    },
    "price": "100G"
   },
   "flower-cookies": {
    "type": "snack",
    "name": {
     "en": "Flower Cookies",
     "es": "Galletas de flor"
    },
    "price": "100G"
   },
   "push-walker": {
    "type": "item",
    "name": {
     "en": "Push Walker",
     "es": "Andador"
    },
    "price": "200G"
   },
   "bubble-maker": {
    "type": "item",
    "name": {
     "en": "Bubble Maker",
     "es": "Máquina de burbujas"
    },
    "price": "200G"
   }
  },
  "area": {
   "rooms": [
    "room-1.webp",
    "room-2.webp"
   ],
   "minigame": [
    "minigame.webp"
   ],
   "furniture": [],
   "toys": [],
   "accessories": []
  },
  "fw": "2.9.0",
  "release": "2026-09-03",
  "minigame": {
   "name": "Naptime",
   "es": "Agita el sonajero para que los bebés se duerman.",
   "en": "Shake the rattle to put the babies to sleep."
  },
  "pet": {
   "es": "Baby Beartchi: deja cualquier mueble de Baby's Dream en el patio.",
   "en": "Baby Beartchi: leave any Baby's Dream furniture in the backyard."
  },
  "shop": {
   "accessories": [
    {
     "en": "Fluffy Hood",
     "price": "200G",
     "icon": "shop/fluffy-hood.webp"
    },
    {
     "en": "Flower Crown",
     "price": "200G",
     "icon": "shop/flower-crown.webp"
    },
    {
     "en": "Ribbon Turban",
     "price": "200G",
     "icon": "shop/ribbon-turban.webp"
    },
    {
     "en": "Drool Bib",
     "price": "200G",
     "icon": "shop/drool-bib.webp"
    },
    {
     "en": "Powder Puffs",
     "price": "200G",
     "icon": "shop/powder-puffs.webp"
    },
    {
     "en": "Hand Rattle",
     "price": "200G",
     "icon": "shop/hand-rattle.webp"
    },
    {
     "en": "Walking Deer Toy",
     "price": "200G",
     "icon": "shop/walking-deer-toy.webp"
    },
    {
     "en": "Mame Family",
     "price": "200G",
     "icon": "shop/mame-family.webp"
    },
    {
     "en": "Patchi Family",
     "price": "200G",
     "icon": "shop/patchi-family.webp"
    },
    {
     "en": "Blue Bonnet",
     "price": "200G",
     "icon": "shop/blue-bonnet.webp"
    },
    {
     "en": "Sunny Pacifier",
     "price": "200G",
     "icon": "shop/sunny-pacifier.webp"
    }
   ],
   "furniture": [
    {
     "en": "Crib",
     "price": "300G",
     "icon": "shop/crib.webp"
    },
    {
     "en": "Play Tent",
     "price": "300G",
     "icon": "shop/play-tent.webp"
    },
    {
     "en": "Duck Potty",
     "price": "300G",
     "icon": "shop/duck-potty.webp"
    },
    {
     "en": "Big Baby Bottle",
     "price": "300G",
     "icon": "shop/big-baby-bottle.webp"
    }
   ],
   "rooms": [
    {
     "en": "Baby's Room",
     "price": "500G",
     "icon": "shop/babys-room.webp"
    },
    {
     "en": "Kid's Room",
     "price": "500G",
     "icon": "shop/kids-room.webp"
    }
   ]
  },
  "spots": [
   {
    "name": {
     "en": "Baby Square",
     "es": "Plaza de los bebés"
    },
    "text": {
     "en": "Ms. Frill welcomes the user's Tamagotchi and invites them to watch the babies play, showing one of three animations of Ms. Frill and a group of several baby- and child-stage characters singing, dancing or stacking up.",
     "es": "Ms. Frill invita a tu Tamagotchi a ver a los bebés jugar: cantan, bailan o se apilan con ella."
    }
   },
   {
    "name": {
     "en": "Game Area",
     "es": "Zona de juegos"
    },
    "text": {
     "en": "Sitter Poketchi explains how to play the Naptime minigame, where users must keep a set of five babies asleep during nap time by tilting the device and using a rattle with the B button to put restless ones back to sleep. Putting a baby back to sleep fills a bar at the top of the screen, and the game is completed successfully when the bar is full. If time runs out before the bar is full, or if the user misses three times and loses all of their hearts, the game will end in either a failure or a partial success.",
     "es": "Sitter Poketchi explica Naptime: inclina el Uni y usa el sonajero con B para volver a dormir a los bebés inquietos. Cada bebé dormido llena la barra; si se acaba el tiempo o fallas tres veces, el juego termina."
    }
   }
  ],
  "yen": 990
 },
 {
  "id": "galgal-street",
  "name": "GalGal Street",
  "year": 2026,
  "pal": "galgal",
  "post": "01_1718",
  "icons": "icons/",
  "chars": [
   {
    "n": "Mamedecotchi",
    "img": "mamedecotchi_Artwork.webp",
    "g": "male"
   },
   {
    "n": "Gangurpatchi",
    "img": "gangurpatchi_Artwork.webp",
    "g": "male"
   },
   {
    "n": "Bangsinotchi",
    "img": "bangsinotchi_Artwork.webp",
    "g": "female"
   },
   {
    "n": "Galhimetchi",
    "img": "galhimetchi_Artwork.webp",
    "g": "female"
   },
   {
    "n": "Radmimitchi",
    "img": "radmimitchi_Artwork.webp",
    "g": "female"
   },
   {
    "n": "Luvlitchi",
    "img": "luvlitchi_Artwork.webp",
    "g": "female"
   },
   {
    "n": "Cool Melody",
    "img": "coolMelody_Artwork.webp",
    "g": "female"
   }
  ],
  "items": {
   "food-1": {
    "type": "meal"
   },
   "food-2": {
    "type": "meal"
   },
   "food-3": {
    "type": "meal"
   },
   "food-4": {
    "type": "meal"
   },
   "snacks-1": {
    "type": "snack"
   },
   "snacks-2": {
    "type": "snack"
   },
   "snacks-3": {
    "type": "snack"
   },
   "snacks-4": {
    "type": "snack"
   },
   "items-1": {
    "type": "item"
   },
   "items-2": {
    "type": "item"
   }
  },
  "area": {
   "rooms": [
    "room-1.webp",
    "room-2.webp"
   ],
   "minigame": [
    "minigame.jpeg"
   ],
   "furniture": [
    "furniture.jpeg"
   ],
   "toys": [
    "items.jpeg"
   ],
   "accessories": [
    "accessories-1.png",
    "accessories-2.png"
   ]
  },
  "soon": true,
  "fw": "3.0.0",
  "release": "2026-11-19",
  "minigame": {
   "name": "Totally Rad Dance",
   "es": "Memoriza los comandos A, B y C; si te va bien, ganas 3000 Gotchi Points.",
   "en": "Memorize the A, B and C commands; good results earn 3000 Gotchi Points."
  }
 }
];
