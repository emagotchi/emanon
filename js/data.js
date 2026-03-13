// --- Internationalization Database ---
const i18n = {
    es: {
        title: "Guía Tamagotchi Pix",
        searchPlaceholder: "Buscar personaje...",
        allGroups: "Todos los Grupos",
        meals: "Comidas Favoritas",
        snacks: "Snacks Favoritos",
        items: "Objetos Favoritos",
        accessories: "Accesorios Favoritos",
        both: "AMBOS",
        pixOnly: "SOLO PIX",
        partyOnly: "SOLO PARTY"
    },
    en: {
        title: "Tamagotchi Pix Guide",
        searchPlaceholder: "Search character...",
        allGroups: "All Groups",
        meals: "Favorite Meals",
        snacks: "Favorite Snacks",
        items: "Favorite Items",
        accessories: "Favorite Accessories",
        both: "BOTH",
        pixOnly: "PIX ONLY",
        partyOnly: "PARTY ONLY"
    }
};

// --- Item Translations & Download URLs ---
const itemTranslations = {
    meals: {
        "ham sandwich": { es: "Set de Sándwiches", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-00-03" },
        "french fries": { es: "Patatas Fritas", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-00-04" },
        "pizza": { es: "Pizza", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-00-05"},
        "cereal": { es: "Cereales", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-00-06" },
        "pancakes": { es: "Tortitas", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-00-07" },
        "hamburger": { es: "Hamburguesa", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-00-08" },
        "fruit salad": { es: "Ensalada de Frutas", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-00-09" },
        "fried chicken": { es: "Pollo Frito", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-00-10" },
        "gratin": { es: "Gratinado", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-00-11" },
        "jumbo steak": { es: "Chuletón", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-00-12" },
        "party platter": { es: "Plato de Picoteo", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-00-13" },
        "pottage": { es: "Potaje", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-00-14" },
        "rice omelette": { es: "Tortilla de Arroz", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-00-15" },
        "pasta with sauce": { es: "Pasta con Salsa", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-00-16" },
        "udon noodles": { es: "Fideos Udon", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-00-17" },
        "shish kebab": { downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-00-18" },
        "cabbage roll": { es: "Rollito de Col", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-00-19" },
        "vegetable curry": { es: "Curry Vegetal", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-00-20" },
        "prosciutto melon": { es: "Melón con Jamón", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-00-21" },
        "black burger": { es: "Hamburguesa Negra", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-00-22" },
        "flower bread": { es: "Flor de Bollito", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-00-23" },
        "squid ink risotto": { es: "Risotto Negro", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-00-24" },
        "gyoza dumplings": { es: "Gyoza", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-00-25" },
        "ramen noodles": { es: "Ramen", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-00-26" },
        "california rolls": { es: "Rollitos California", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-00-27" },
        "sushi": { downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-00-28" },
        "garlic shrimp": { es: "Al Ajillo", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-00-29" },
        "pizza toast": { es: "Tostada de Pizza", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-00-30" },
        "green thai curry": { es: "Curry Verde Tailandés", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-00-31" },
        "pad thai": { downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-00-32" },
        "borscht": { downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-00-33" },
        "galbi sushi": { es: "Sushi de Carne", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-00-34" },
        "rice casserole": { es: "Cazuela de Arroz", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-00-35" },
        "tom yum": { downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-00-36" },
        "cheese fondue": { es: "Fondue de Queso", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-00-37" },
        "astronaut food": { es: "Comida de Astronautas", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-00-38" },
        "shrimp cocktail": { es: "Cóctel de Gambas", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-00-39" },
        "hot dog": { es: "Perrito", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-00-40" },
        "taco": { downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-00-41" },
        "cabbage salad": { es: "Ensalada de Col", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-00-42" },
        "burrito": { downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-00-43" },
        "tempura": { downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-00-44" },
        "spaghetti": { es: "Espagueti y Albóndigas", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-00-45" },
        "chicago style pizza": { es: "Pizza Estilo Chicago", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-00-46" },
        "tower burger": { es: "Hamburguesón", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-00-47" },
        "chicken wings": { es: "Alitas de Pollo", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-00-48" },
        "tamapot pie": { es: "Cazuela Tama", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-00-49" },
        "memetchi omelet": { es: "Tortilla de Memetchi", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-00-50" },
        "roast turkey": { es: "Pavo Asado", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-00-51" },
        "pink curry": { es: "Curry Rosa", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-00-52" },
        "heart pizza": { es: "Pizza Feliz", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-00-53" },
        "tama rice omelet": { es: "Tortilla de Arroz Tama", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-00-54" },
        "tama burger": { es: "Hamburguesa Tama", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-00-55" },
        "tama curry": { es: "Curry Tama", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-00-56" },
        "pumpkin gratin": { es: "Calabaza Gratinada", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-00-57" },
        "3-course-meal": { es: "Almuerzo de Tres Platos", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-00-58" },
        "hors doeuvres": { es: "Aperitivo", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-00-59" }
    },
    snacks: {
        "cupcake": { downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-16-03" },
        "popcorn": { es: "Palomitas", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-16-04" },
        "soda pop": { es: "Gaseosa", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-16-05" },
        "smoothie": { es: "Batido", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-16-06" },
        "honey toast": { es: "Tostada de Miel", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-16-07" },
        "donuts": { downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-16-08" },
        "strawberry crepe": { es: "Tortita de Fresa", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-16-09" },
        "dessert platter": { es: "Plato de Postres", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-16-10" },
        "afternoon tea": { es: "Merienda", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-16-11" },
        "celebration cake": { es: "Pastel de Celebración", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-16-12" },
        "twin cherries": { es: "Dos Cerezas", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-16-13" },
        "apple": { es: "Manzana", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-16-14" },
        "peach": { es: "Melocotón", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-16-15" },
        "bananas": { es: "Plátanos", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-16-16" },
        "mixed juice": { es: "Zumo Mixto", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-16-17" },
        "grape juice": { es: "Zumo Uva", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-16-18"},
        "lemon pie": { es: "Pastel Limón", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-16-19" },
        "mango pudding": { es: "Flan Mango", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-16-20" },
        "matcha parfait": { es: "Parfait de Matcha", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-16-21" },
        "ice cream tub": { es: "Tarrina de Helado", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-16-22" },
        "fruit bowl": { es: "Ponche de Frutas", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-16-23" },
        "soft serve": { es: "Helado Suave", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-16-24" },
        "rainbow sponge cake": { es: "Bizcocho Arcoíris", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-16-25" },
        "sea shake": { es: "Batido Marino", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-16-26" },
        "gummies": { es: "Gominolas", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-16-27" },
        "sponge cake": { es: "Bizcocho de Mermelada", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-16-28" },
        "floral cake": { es: "Pastel de Flores", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-16-29" },
        "ice cream cone": { es: "Cono de Helado", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-16-30" },
        "blancmange": { es: "Manjar Blanco", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-16-31" },
        "candy apple": { es: "Manzana Caramelizada", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-16-32" },
        "spiral lollipop": { es: "Espiral de Piruleta", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-16-33" },
        "ice cream float": { es: "Refresco de Helado", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-16-34" },
        "honey & rose tea": { es: "Té de Miel y Rosas", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-16-35" },
        "nata de coco": { downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-16-36" },
        "dreamy cotton candy": { es: "Nube de Ensueño", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-16-37" },
        "acai bowl": { es: "Bol de Acaí", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-16-38" },
        "coconut milk": { es: "Leche de Coco", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-16-39" },
        "pineapple jello": { es: "Gelatina de Piña", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-16-40" },
        "chocolate cake": { es: "Pastel de Chocolate", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-16-41" },
        "shaved ice": { es: "Granizado", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-16-42" },
        "lemonade": { es: "Limonada", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-16-43" },
        "homemade cookies": { es: "Galletas Caseras", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-16-44" },
        "canele": { es: "Canelé", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-16-45" },
        "berry smoothie": { es: "Smoothie de Bayas", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-16-46" },
        "fruit tart": { es: "Tarta de Frutas", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-16-47" },
        "cream cake": { es: "Pastel de Nata", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-16-48" },
        "friend shakes": { es: "Batidos de la Amistad", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-16-49" },
        "friend cakes": { es: "Pasteles de la Amistad", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-16-50" },
        "friend fish pastries": { es: "Taiyaki de la Amistad", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-16-51" },
        "friend cookies": { es: "Galletas de la Amistad", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-16-52" },
        "berry sundae": { es: "Sundae de Bayas", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-16-54 "},
        "flan": { downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-16-55" },
        "pearl ice cream": { es: "Helado Perlado", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-16-56" },
        "mametchi lollipop": { es: "Piruleta de Mametchi", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-16-57" },
        "kuchipatchi crepe": { es: "Tortita de Kuchipatchi", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-16-58" },
        "tama cotton candy": { es: "Nube de Algodón Tama", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-16-59" },
        "halloween candy": { es: "Caramelo de Halloween", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-16-60" },
        "gingerbread man": { es: "Galleta de Jengibre", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-16-61" },
        "santa cake": { es: "Tarta de Santa", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-16-62" },
        "festive cake": { es: "Tarta Festiva", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-16-63" },
        "festive soda": { es: "Soda", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-16-64" },
        "gingerbread house": { es: "Casita de Jengibre", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-16-65" },
        "heart lollipops": { es: "Piruletas de Corazón", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-16-66" },
        "bunny cake": { es: "Helado de Conejito", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-16-67" },
        "plum cookies": { es: "Galletas de Ciruela", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-16-68" },
        "pancakes & syrup": { es: "Tortitas y Sirope", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-16-69" },
        "hot tea": { es: "Té Caliente", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-16-70" },
        "floral parfait": { es: "Parfait de Flores", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-16-71" },
        "green smoothie": { es: "Granizado Verde", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-16-72" },
        "exotic sundae": { es: "Sundae Exótico", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-16-73" },
        "piano pie": { es: "Pastel de Piano", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-16-74" },
        "planet cake": { es: "Pastel Planeta", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-16-75" }
    },
    items: {
        "building blocks": { es: "Bloques de Construcción" },
        "science project": { es: "Proyecto de Ciencias", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-32-03" },
        "sketchbook": { es: "Libreta de Bocetos", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-32-04" },
        "skateboard": { es: "Patinete", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-32-05" },
        "badminton set": { es: "Set de Badminton", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-32-06" },
        "fluffy cloud": { es: "Nube Esponjosa", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-32-07" },
        "violin": { es: "Violín", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-32-08" },
        "flower seeds": { es: "Semillas de Flores", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-32-09" },
        "snorkel set": { es: "Equipo de Buceo", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-32-10" },
        "stationary set": { es: "Set de Papelería", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-32-11" },
        "snowman": { es: "Muñeco de Nieve", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-32-12" },
        "ball": { es: "Bola", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-32-13" },
        "frilly parasol": { es: "Sombrilla", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-32-14" },
        "big slide": { es: "Tobogán", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-32-15" },
        "paraglider": { es: "Parapente", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-32-16" },
        "swing": { es: "Columpio", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-32-18" },
        "snow globe": { es: "Bola de Nieve", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-32-19" },
        "easter egg": { es: "Huevo de Pascua", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-32-20" },
        "notebook": { es: "Libreta", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-32-21" },
        "bike": { es: "Bici", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-32-22" },
        "crayons": { es: "Ceras", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-32-23" },
        "party popper": { es: "" },
        "jack-in-the-box": { es: "" }
    },
    accessories: {
        "butterfly pin": { es: "Pin de Mariposa", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-48-01" },
        "ribbon headband": { es: "Diadema con Lazo", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-48-02" },
        "handbasket": { es: "Cesta de Mano", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-48-03" },
        "emblem": { es: "Emblema", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-48-04" },
        "fruit balloons": { es: "Globos de Frutas", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-48-05" },
        "small drum": { es: "Tambor", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-48-06" },
        "flower crown": { es: "Corona de Flores", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-48-07" },
        "clamshell hat": { es: "Sombrero de Concha", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-48-08" },
        "witchs hat": { es: "Sombrero de Bruja", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-48-09" },
        "fluffy earmuffs": { es: "Orejeras Esponjosas", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-48-10" },
        "big bow": { es: "Lazo Brillante", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-48-11" },
        "heart sunglasses": { es: "Gafas de Sol de Corazón", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-48-12" },
        "tama hat": { es: "Gorro Tama", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-48-13" },
        "badge": { es: "Placa", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-48-14" },
        "berry balloons": { es: "Globos de Bayas", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-48-15" },
        "crown": { es: "Corona", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-48-16" },
        "magic hat": { es: "Gorro Mágico", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-48-17" },
        "tiara": { es: "Diadema", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-48-18" },
        "mametchi hat": { es: "Gorro de Mametchi", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-48-19" },
        "kuchipatchi bag": { es: "Bolsa de Kuchipatchi", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-48-20" },
        "memetchi balloons": { es: "Globos de Memetchi", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-48-21" },
        "eggshell hat": { es: "Sombrero de Cáscara", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-48-22" },
        "tama crown": { es: "Corona de Cáscara", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-48-23" },
        "candy cane": { es: "Bastón de Caramelo", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-48-24" },
        "party hat": { es: "Gorro Fiesta", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-48-25" },
        "santa hat": { es: "Gorro Santa", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-48-26" },
        "reindeer antlers": { es: "Cuernos de Reno", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-48-27" },
        "santas helper hat": { es: "Gorro de Elfo", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-48-28" },
        "bouquet": { es: "Ramo", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-48-29" },
        "bunny ears": { es: "Orejas de Conejo", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-48-30" },
        "apple hat": { es: "Gorro de Manzana", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-48-31" },
        "crepe hat": { es: "Gorro de Tortita", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-48-32" },
        "fluffy scarf": { es: "Bufanda Esponjosa", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-48-33" },
        "flower sunglasses": { es: "Gafas de Sol con Flores", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-48-34" },
        "camo hat": { es: "Gorro de Camuflaje", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-48-35" },
        "head towel": { es: "Toalla de Cabeza", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-48-36" },
        "sunny sunglasses": { es: "Gafas de Sol Soleadas", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-48-37" },
        "school books": { es: "Libros Escolares", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-48-38" },
        "electric guitar": { es: "Guitarra Eléctrica", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-48-39" },
        "strawberry earrings": { es: "Pendientes de Fresa", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-48-40" },
        "cone hat": { es: "Sombrero de Cono", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-48-41" },
        "space helmet": { es: "Casco Espacial", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-48-42" },
        "artist beret": { es: "Boina de Artista", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-48-43" },
        "shell hat": { es: "Sombrero de Cáscara", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-48-44" },
        "rainbow watering can": { es: "Regadera Arcoíris", downloadUrl: "http://mrblinky.net/tama/pix/download/qrcode/#tc-48-45" },
        "playing cards": { es: "" },
        "fake nose glasses": { es: "" },
        "party crown": { es: "" },
        "pompom headband": { es: "" },
        "rainbow afro": { es: "" },
        "star wand": { es: "" }
    }
};

// --- Egg Group Definitions ---
const eggData = {
    pix: {
        smart: {
            name: { es: "Grupo Inteligente", en: "Smart Group" },
            img: "assets/eggs/pix_blue.webp"
        },
        creative: {
            name: { es: "Grupo Creativo", en: "Creative Group" },
            img: "assets/eggs/pix_green.webp"
        },
        charming: {
            name: { es: "Grupo Encantador", en: "Charming Group" },
            img: "assets/eggs/pix_pink.webp"
        }
    },
    party: {
        smart: {
            name: { es: "Grupo Inteligente", en: "Smart Group" },
            img: "assets/eggs/party_blue_yellow.webp"
        },
        creative: {
            name: { es: "Grupo Creativo", en: "Creative Group" },
            img: "assets/eggs/party_red_green.webp"
        },
        charming: {
            name: { es: "Grupo Encantador", en: "Charming Group" },
            img: "assets/eggs/party_pink_purple.webp"
        }
    }
};

// --- Characters Data ---
const charData = [
    {
        id: "mametchi", name: "Mametchi",
        group: { pix: "smart", party: "smart" },
        versions: ["pix", "party"],
        f: {
            meals: ["Hamburger", "Hot Dog", "Udon Noodles"],
            snacks: ["Apple", "Mametchi Lollipop", "Chocolate Cake", "Bunny Cake", "Gingerbread Man"],
            items: ["Science Project", "Stationary Set", "Party Popper"],
            accessories: ["Big Bow", "Mametchi Hat", "Magic Hat"]
        }
    },
    {
        id: "himetchi", name: "Himetchi",
        group: { pix: "smart", party: "smart" },
        versions: ["pix", "party"],
        f: {
            meals: ["Flower Bread", "Pink Curry", "Cereal", "Cheese Fondue"],
            snacks: ["Gummies", "Dreamy Cotton Candy", "Gingerbread House", "Honey Toast"],
            items: ["Flower Seeds", "Snowman"],
            accessories: ["Flower Crown", "Tiara", "Ribbon Headband", "Big Bow"]
        }
    },
    {
        id: "kuromametchi", name: "KuroMametchi",
        group: { pix: "smart", party: "smart" },
        versions: ["pix", "party"],
        f: {
            meals: ["Pizza", "Black Burger", "Chicago Style Pizza"],
            snacks: ["Lemonade", "Afternoon Tea", "Acai Bowl"],
            items: ["Skateboard", "Ball", "Violin", "Jack-in-the-box"],
            accessories: ["Emblem", "Electric Guitar", "Playing Cards", "Santa Hat"]
        }
    },
    {
        id: "mimitchi", name: "Mimitchi",
        group: { pix: "smart", party: "smart" },
        versions: ["pix", "party"],
        f: {
            meals: ["Cabbage Roll", "California Rolls", "Burrito", "Cereal"],
            snacks: ["Pineapple Jello", "Cream Cake", "Cupcake"],
            items: ["Stationary Set", "Science Project"],
            accessories: ["Big Bow", "Butterfly Pin", "Fluffy Scarf", "Magic Hat"]
        }
    },
    {
        id: "kikitchi", name: "Kikitchi",
        group: { pix: "smart", party: "smart" },
        versions: ["pix", "party"],
        f: {
            meals: ["Spaghetti", "Gratin"],
            snacks: ["Bananas", "Honey & Rose Tea", "Pineapple Jello"],
            items: ["Skateboard", "Paraglider"],
            accessories: ["Badge", "Camo Hat"]
        }
    },
    {
        id: "awamokotchi", name: "Awamokotchi",
        group: { pix: "smart" },
        versions: ["pix"],
        f: {
            meals: ["Cheese Fondue", "Pottage"],
            snacks: ["Blancmange", "Dessert Platter", "Pearl Ice Cream"],
            items: ["Violin", "Fluffy Cloud"],
            accessories: ["Small Drum", "Tama Crown", "Head Towel", "School Books"]
        }
    },
    {
        id: "chamametchi", name: "Chamametchi",
        group: { pix: "charming", party: "smart" },
        versions: ["pix", "party"],
        f: {
            meals: ["Rice Omelette", "Pizza Toast", "Pink Curry", "Tamapot Pie", "Vegetable Curry", "Pizza Toast"],
            snacks: ["Cupcake", "Soft Serve", "Strawberry Crepe"],
            items: ["Violin", "Sketchbook", "Party Popper"],
            accessories: ["Butterfly Pin", "Artist Beret", "Small Drum"]
        }
    },
    {
        id: "gozarutchi", name: "Gozarutchi",
        group: { pix: "smart", party: "smart" },
        versions: ["pix", "party"],
        f: {
            meals: ["Tempura", "Udon Noodles", "Vegetable Curry", "Sushi"],
            snacks: ["Candy Apple", "Blancmange"],
            items: ["Paraglider", "Fluffy Cloud"],
            accessories: ["Flower Crown", "Big Bow", "School Books"]
        }
    },
    {
        id: "ninjanyatchi", name: "Ninjanyatchi",
        group: { pix: "smart", party: "smart" },
        versions: ["pix", "party"],
        f: {
            meals: ["Tempura", "Fruit Salad"],
            snacks: ["Matcha Parfait", "Berry Smoothie"],
            items: ["Paraglider", "Badminton Set"],
            accessories: ["Handbasket", "Butterfly Pin", "School Books", "Star Wand"]
        }
    },
    // END OF SMART GROUP
    {
        id: "weeptchi", name: "Weeptchi",
        group: { pix: "creative" },
        versions: ["pix"],
        f: {
            meals: ["Hamburger", "Tamapot Pie", "Burrito", "Flower Bread", "Rice Omelette"],
            snacks: ["Halloween Candy", "Canele", "Candy Apple", "Ice cream Tub", "Cupcake"],
            items: ["Big Slide", "Sketchbook"],
            accessories: ["Witchs Hat", "Artist Beret", "Tiara"]
        }
    },
    {
        id: "neliatchi", name: "Neliatchi",
        group: { pix: "creative", party: "creative" },
        versions: ["pix", "party"],
        f: {
            meals: ["Vegetable Curry", "Pink Curry", "Cereal", "Taco", "Pizza Toast"],
            snacks: ["Floral Cake", "Smoothie", "Acai Bowl", "Piano Pie", "Plum Cookies"],
            items: ["Badminton Set", "Snorkel Set", "Violin", "Party Popper"],
            accessories: ["Butterfly Pin", "Strawberry Earrings", "Artist Beret", "Flower Crown"]
        }
    },
    {
        id: "shimagurutchi", name: "Shimagurutchi",
        group: { pix: "creative", party: "creative" },
        versions: ["pix", "party"],
        f: {
            meals: ["Shrimp Cocktail", "California Rolls", "Pad Thai"],
            snacks: ["Spiral Lollipop", "Ice Cream Cone", "Smoothie", "Mango Pudding"],
            items: ["Paraglider", "Fluffy Cloud"],
            accessories: ["Eggshell Hat", "Small Drum", "School Books", "Butterfly Pin"]
        }
    },
    {
        id: "memetchi", name: "Memetchi",
        group: { pix: "creative", party: "creative" },
        versions: ["pix", "party"],
        f: {
            meals: ["Fruit Salad"],
            snacks: ["Spiral Lollipop"],
            items: ["Badminton Set", "Violin"],
            accessories: ["Rainbow Afro", "Memetchi Balloons"]
        }
    },
    {
        id: "paintotchi", name: "Paintotchi",
        group: { pix: "creative", party: "creative" },
        versions: ["pix", "party"],
        f: {
            meals: ["Cabbage Salad", "Garlic Shrimp", "Borscht", "Black Burger"],
            snacks: ["Cupcake", "Gummies"],
            items: ["Sketchbook", "Snowman"],
            accessories: ["Artist Beret", "Small Drum"]
        }
    },
    {
        id: "wawatchi", name: "Wawatchi",
        group: { party: "creative" },
        versions: ["party"],
        f: {
            meals: ["Astronaut Food", "Hamburger", "California Rolls", "Ramen Noodles", "Squid Ink Risotto"],
            snacks: ["Donuts", "Twin Cherries", "Shaved Ice", "Matcha Parfait", "Planet Cake"],
            items: ["Jack-in-the-Box", "Stationary Set", "Sketchbook"],
            accessories: ["Fake Nose Glasses", "Electric Guitar", "Handbasket", "Space Helmet", "Emblem"]
        }
    },
    {
        id: "coffretchi", name: "Coffretchi",
        group: { pix: "creative", party: "creative" },
        versions: ["pix", "party"],
        f: {
            meals: ["Fruit Salad", "Rice Casserole"],
            snacks: ["Sponge Cake", "Dreamy Cotton Candy", "Dessert Platter", "Honey Toast"],
            items: ["Frilly Parasol", "Sketchbook"],
            accessories: ["Handbasket", "Bouquet", "Clamshell Hat"]
        }
    },
    {
        id: "murachakitchi", name: "Murachakitchi",
        group: { pix: "creative", party: "creative" },
        versions: ["pix", "party"],
        f: {
            meals: ["Cabbage Salad", "Pancakes", "Prosciutto Melon", "Fruit Salad", "Vegetable Curry"],
            snacks: ["Soda Pop", "Sea Shake", "Exotic Sundae"],
            items: ["Ball", "Building Blocks"],
            accessories: ["Badge"]
        }
    },
    {
        id: "violetchi", name: "Violetchi",
        group: { pix: "creative", party: "creative" },
        versions: ["pix", "party"],
        f: {
            meals: ["Pink Curry", "Cabbage Salad", "Ham Sandwich"],
            snacks: ["Floral Cake", "Floral Parfait", "Honey & Rose Tea", "Plum Cookies", "Berry Smoothie"],
            items: ["Flower Seeds", "Snowman"],
            accessories: ["Flower Crown", "Bouquet"]
        }
    },
    // END OF CREATIVE GROUP
    {
        id: "ginjirotchi", name: "Ginjirotchi",
        group: { pix: "charming", party: "charming" },
        versions: ["pix", "party"],
        f: {
            meals: ["Pad Thai", "Sushi", "Ramen Noodles", "Udon Noodles"],
            snacks: ["Mixed Juice", "Matcha Parfait", "Donuts"],
            items: ["Sketchbook", "Snowman"],
            accessories: ["Fruit Balloons", "Tama Hat"]
        }
    },
    {
        id: "lovelitchi", name: "Lovelitchi",
        group: { pix: "charming", party: "charming" },
        versions: ["pix", "party"],
        f: {
            meals: ["Cereal", "Pottage", "Tamapot Pie", "Flower Bread"],
            snacks: ["Floral Cake", "Dessert Platter", "Coconut Milk"],
            items: ["Frilly Parasol", "Fluffy Cloud", "Party Popper"],
            accessories: ["Big Bow", "Fluffy Scarf", "Bouquet", "Pix Party Crown", "Witchs Hat"]
        }
    },
    {
        id: "charatchi", name: "Charatchi",
        group: { pix: "charming", party: "charming" },
        versions: ["pix", "party"],
        f: {
            meals: ["Cereal"],
            snacks: ["Shaved Ice"],
            items: ["Skateboard", "Badminton Set"],
            accessories: ["Eggshell Hat", "Emblem", "Star Wand", "Electric Guitar"]
        }
    },
    {
        id: "milktchi", name: "Milktchi",
        group: { party: "charming" },
        versions: ["party"],
        f: {
            meals: ["Heart Pizza", "Pottage", "Pancakes", "Flower Bread"],
            snacks: ["Dreamy Cotton Candy", "Soft Serve", "Afternoon Tea", "Heart Lollipops", "Hot Tea", "Rainbow Sponge Cake"],
            items: ["Building Blocks", "Frilly Parasol", "Party Popper", "Notebook", "Violin"],
            accessories: ["Tiara", "Fluffy Scarf", "Ribbon Headband", "Clamshell Hat", "Pompom Headband"]
        }
    },
    {
        id: "kuchipatchi", name: "Kuchipatchi",
        group: { pix: "charming", party: "charming" },
        versions: ["pix", "party"],
        f: {
            meals: ["Tower Burger", "Jumbo Steak", "Gyoza Dumplings"],
            snacks: ["Homemade Cookies", "Ice Cream Tub", "Kuchipatchi Crepe", "Mango Pudding", "Popcorn"],
            items: ["Sketchbook", "Snorkel Set", "Party Popper"],
            accessories: ["Fluffy Earmuffs", "Kuchipatchi Bag", "Heart Sunglasses", "Apple Hat", "Pompom Headband"]
        }
    },
    {
        id: "momotchi", name: "Momotchi",
        group: { pix: "charming", party: "charming" },
        versions: ["pix", "party"],
        f: {
            meals: ["Pink Curry", "Fruit Salad", "Ham Sandwich", "Garlic Shrimp"],
            snacks: ["Peach", "Rainbow Sponge Cake", "Sea Shake", "Fruit Tart"],
            items: ["Violin", "Snorkel Set"],
            accessories: ["Heart Sunglasses", "Artist Beret", "Fruit Balloons", "Strawberry Earrings"]
        }
    },
    {
        id: "orenetchi", name: "Orenetchi",
        group: { pix: "charming", party: "charming" },
        versions: ["pix", "party"],
        f: {
            meals: ["Cereal", "French Fries"],
            snacks: ["Soda Pop", "Ice Cream Float"],
            items: ["Ball", "Big Slide"],
            accessories: ["Tama Hat", "Badge", "Party Hat"]
        }
    },
    {
        id: "sebiretchi", name: "Sebiretchi",
        group: { pix: "charming", party: "charming" },
        versions: ["pix", "party"],
        f: {
            meals: ["Pancakes", "Green Thai Curry", "Borscht"],
            snacks: ["Honey Toast", "Canele"],
            items: ["Big Slide", "Skateboard", "Jack-in-the-box"],
            accessories: ["Flower Crown", "Ribbon Headband", "Bunny Ears", "Crepe Hat"]
        }
    }
];

const db = charData.map(c => {
    const sanitize = (name) => name.toLowerCase().replace(/[^a-z0-9]+/g, '_');

    const toItems = (arr, category) => arr.map(itemName => {

        const itemTrans = itemTranslations[category]?.[itemName.toLowerCase()] || { es: itemName };
        const downloadUrl = itemTrans.downloadUrl || null;

        return {
            name: {
                es: itemTrans.es || itemName,
                en: itemName
            },
            img: `assets/${category}/${sanitize(itemName)}.png`,
            downloadUrl: downloadUrl  
        };
    });

    return {
        id: c.id,
        name: { es: c.name, en: c.name },
        group: c.group,
        versions: c.versions,
        image: `assets/characters/${c.id}.webp`,
        favorites: {
            meals: toItems(c.f.meals, 'meals'),
            snacks: toItems(c.f.snacks, 'snacks'),
            items: toItems(c.f.items, 'items'),
            accessories: toItems(c.f.accessories, 'accessories')
        }
    };
});
