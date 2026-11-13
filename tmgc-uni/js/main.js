document.addEventListener('DOMContentLoaded', () => {

    const $ = s => document.querySelector(s);
    const CH = 'assets/characters/';
    const IT = 'assets/items/';

    const T = {
        es: {
            title: 'Guía Tamagotchi Uni',
            intro: 'Aquí junté a todos los personajes de los DLC del Tama Portal con lo que necesita cada uno, y la rama base por si tu tama no visita ninguna zona ✧',
            baseTitle: 'rama base', baseDesc: 'Así crece tu tama cuando no le das nada de los DLC. Ojo: los errores de cuidado de niño y de adolescente se suman.',
            portalTitle: 'tama portal', portalDesc: 'Elige un ticket y entra a su zona: ahí están sus personajes, lo que le gusta a cada uno y todo lo que venden ✧',
            male: '♂ masculino', female: '♀ femenino', either: '♂♀ ambos', maleShort: '♂ masculino', femaleShort: '♀ femenino',
            baby: 'bebé', child: 'niño', teen: 'adolescente', adult: 'adulto', special: 'especiales',
            babyTime: '1 hora', childTime: '24 horas', teenTime: '24 horas', adultTime: 'toda la vida',
            babyCond: '50% al nacer',
            mistakes: 'errores de cuidado',
            baseNote: 'Si tu tama es de una generación múltiplo de 5 y nació de un matrimonio en el Tamaverse, el huevo sale con rayas de arcoíris: es la señal de que puede llegar a Hypertchi o Bubbletchi (le faltan los 3 viajes o los 3 outfits). El Tama Farm no cuenta para los paseos (Tama Walk).',
            all: 'todos', free: 'gratis', search: '¿a quién buscas? ej: shycootchi', soon: 'pronto',
            chars: 'Personajes', items: 'Comidas e ítems', area: 'Área',
            rule: 'Basta con darle su comida o snack, o jugar con su ítem, <b>una vez</b> antes de que sea adulto. Si cumples con varios, gana el que más usaste :3 Eso sí, tiene que ser del mismo género que tu tama (los ♂♀ sirven para ambos).',
            ruleSoon: 'Esta zona todavía no abre, así que aún no sabemos qué le gusta a cada uno. Vuelvo con la info apenas salga ♡',
            feed: 'Dale', play: 'Juega con', toGet: 'para obtener a', unknown: 'todavía no se sabe qué darle ♡',
            meal: 'comida', snack: 'snack', item: 'ítem', meals: 'Comidas', snacks: 'Snacks', toys: 'Ítems para jugar',
            whatGive: 'QUÉ DARLE', awayTitle: '   vuelve pronto. . . el tama portal sigue abierto ⌯⌲   ', pickHint: 'toca una tarjeta y aparece en la pantalla', toTop: 'Volver arriba',
            lA: '◀ A anterior', lB: 'B voltear', lC: 'C siguiente ▶',
            shell: 'carcasa', dlcColors: 'colores del DLC', official: 'anuncio oficial ↗', buy: 'comprar ticket ↗', shopUrl: 'https://ticketshop.tamagotchi-official.com/es-ES', close: 'cerrar ✕',
            year: 'año', tamas: 'personajes', price: 'precio', firmware: 'versión', release: 'lanzamiento',
            plusTax: '+ impuesto', country: { cl: 'Chile', es: 'España', mx: 'México', us: 'EE. UU.' },
            priceNote: 'Aproximado, con el IVA de cada país incluido. Cambia con el valor del yen.',
            freeVal: 'gratis', pet: 'Mascota del patio', rooms: 'Cuartos', game: 'Minijuego',
            furniture: 'Muebles', toysArea: 'Ítems', acc: 'Accesorios',
            ticket: 'ticket', spots: 'Lugares del área', shop: 'Tienda del área',
            sumTitle: 'todas las recetas', sumDesc: 'Lo mismo de los tickets, pero en lista: qué darle a cada personaje de las zonas del Tama Portal (los Tamaverse Ticket, que en el Uni aparecen en «ZONA DLC»), con la rama base al final ✧',
            thChar: 'Personaje', thGender: 'Género', thGive: 'Qué darle', thHow: 'Errores de cuidado',
            baseSumTitle: 'Rama base (sin DLC)', baseSumMeta: 'si tu tama no usa nada de las zonas', baseSumKids: 'Niño:', and: 'y',
            updated: 'actualizado el 13 de noviembre de 2026',
            faqTitle: 'preguntas frecuentes',
            faq: [
                ['¿Cómo compro y descargo un DLC?', '<p>Cada área se vende como <a href="https://ticketshop.tamagotchi-official.com/es-ES" target="_blank" rel="noopener"><b>Tamaverse Ticket</b> ↗</a> en la tienda oficial de Bandai. Al comprarlo te llega por correo un código de descarga de 16 dígitos. Very Berry Land es gratis.</p><p>Para canjearlo, conecta el Uni a Wi-Fi, ten el firmware al día y sigue estos pasos:</p><ol><li>Desde el menú de cuidados, selecciona el ícono de red.</li><li>Selecciona la opción de descarga.</li><li>Selecciona «DAR CÓDIGO».</li><li>Introduce el código de 16 dígitos que te llegó por correo.</li><li>Cuando aparezca «¡LISTO!», selecciona «SÍ» en la pantalla «¿DESCARGAR?».</li><li>Ya puedes visitar la nueva zona desde el portal Tama.</li></ol><p>El portal Tama te lleva a una sola zona. Para ir a otra, cámbiala en la opción «ZONA DLC».</p>'],
                ['¿Cuánto cuesta un Tamaverse Ticket?', '<p>La tienda cobra en yenes: la mayoría cuesta {p990} y las zonas de colaboración (Sanrio, PokoPea, KAWAISOUNI! y Esther Bunny), {p1210}. Very Berry Land es gratis.</p><p>Al pagar, la tienda pasa el precio a tu moneda y le suma el IVA de tu país (19 % en Chile, 21 % en España y 16 % en México), así que los montos son aproximados y cambian con el valor del yen. Tu banco también puede cobrar una comisión por compras en moneda extranjera. Se compran en la <a href="https://ticketshop.tamagotchi-official.com/es-ES" target="_blank" rel="noopener">tienda oficial de Bandai ↗</a> y el código te llega por correo.</p>'],
                ['¿Qué zonas hay?', '<p>Hay {n}: {zonas}.</p><p>En inglés también les dicen <i>Tamaverse lands</i> o <i>DL areas</i>, y en el Uni aparecen en «ZONA DLC».</p>'],
                ['¿Qué DLC me conviene comprar?', '<ul><li><b>Si nunca has descargado uno:</b> parte por Very Berry Land, que es gratis.</li><li><b>Si te salen muchos tamas ♂:</b> PokoPea Land, donde 5 de sus 7 personajes son ♂.</li><li><b>Si no quieres depender del género:</b> Esther Bunny World (sus 5 personajes sirven para ♂ y ♀) o KAWAISOUNI! Land (la mitad).</li><li><b>Para tener más personajes por ticket:</b> Sanrio Characters, con 10. Como 10 cosas de su tienda llevan a algún personaje, fíjate bien en qué le das.</li><li><b>Para cambiar el juego y no solo los personajes:</b> Angel Festival o Monster Carnival, las únicas que cambian la animación al evolucionar y al morir.</li><li><b>Si te gustan los clásicos:</b> Tamazon Jungle Tour, con personajes de los primeros Tamagotchi como Ginjirotchi y Hashizotchi.</li></ul><p>Para qué es ideal cada zona también sale en la pestaña <b>Área</b> de su ticket.</p>'],
                ['¿Puedo tener varias zonas descargadas a la vez?', '<p>No, solo <b>una a la vez</b>.</p><ul><li>Al cambiar de área se borran los ítems de esa área que tengas puestos o guardados.</li><li>No puedes cambiar de área mientras crías a un personaje exclusivo de ella.</li><li>El código queda ligado a tu Uni; se puede volver a vincular hasta 3 veces y los códigos perdidos no se reponen.</li></ul>'],
                ['¿Cómo consigo un personaje de DLC en el Tamagotchi Uni?', '<p>Descarga su zona con un Tamaverse Ticket. Mientras tu tama es niño o adolescente, dale la comida o el snack del personaje, o juega con su ítem (todo se compra en la tienda de la zona). Al crecer se convierte en ese personaje, siempre que sea del mismo género que tu tama; los ♂♀ sirven para ambos.</p><p>Lo que necesita cada uno está en los tickets de arriba y en <a href="#recetas">todas las recetas</a>.</p>'],
                ['¿Cuántas veces tengo que darle la comida o el ítem?', '<p>Según la Tamagotchi Wiki basta con <b>una vez</b> antes de que sea adulto. Si usaste cosas de varios personajes, gana el que más veces usaste.</p><p>Algunas guías dicen que son 3 veces, así que si quieres ir a la segura, dáselo varias veces y no le des cosas de otros personajes de la zona.</p>'],
                ['¿Qué pasa si no le doy nada de la zona?', '<p>Crece por la <a href="#base">rama base</a>, igual que un Uni sin DLC: el adolescente depende de su felicidad y el adulto, de los errores de cuidado.</p>'],
                ['¿Cómo consigo a Mametchi, Kuchipatchi o Mimitchi?', '<ul><li><b>Mametchi ♂</b>: de adolescente tiene que ser Kuriritchi (felicidad entre 15 y 20, o 10 manualidades DIY) y llegar a adulto con 0 errores de cuidado, o con 1–3 errores y 3 paseos (Tama Walk).</li><li><b>Kuchipatchi ♂</b>: Gunchitchi (felicidad entre 6 y 14, o 40 snacks) con 0–1 errores, o con 2–5 errores y 10 pedidos a Tama Delivery.</li><li><b>Mimitchi ♀</b>: Tustustchi (felicidad entre 0 y 5, o 15 puntajes perfectos en juegos) con 0–1 errores, o con 2–5 errores y 20 puntajes perfectos en Tama Arcade.</li></ul>'],
                ['¿Qué cuenta como error de cuidado?', '<p>Cuando el hambre o la felicidad de tu tama llegan a 0, te llama. Si no lo atiendes a tiempo, cuenta como un error de cuidado.</p><p>El Uni no muestra cuántos llevas, así que conviene anotarlos. Los de niño y de adolescente se suman, y de eso depende en qué adulto se convierte.</p>'],
                ['¿Cuánto dura cada etapa?', '<p>Bebé, más o menos 1 hora. Niño, unas 24 horas. Adolescente, otras 24 horas. Después es adulto por el resto de su vida.</p>'],
            ],
        },
        en: {
            title: 'Tamagotchi Uni Guide',
            intro: 'Every Tama Portal DLC character with what each one needs, and the base branch in case your tama never visits an area ✧',
            baseTitle: 'base branch', baseDesc: 'How your tama grows when you give it nothing from the DLCs. Heads up: child and teen care mistakes add up.',
            portalTitle: 'tama portal', portalDesc: 'Pick a ticket and step into its area: its characters, what each one likes and everything they sell ✧',
            male: '♂ male', female: '♀ female', either: '♂♀ either', maleShort: '♂ male', femaleShort: '♀ female',
            baby: 'baby', child: 'child', teen: 'teen', adult: 'adult', special: 'special',
            babyTime: '1 hour', childTime: '24 hours', teenTime: '24 hours', adultTime: 'for life',
            babyCond: '50% when hatching',
            mistakes: 'care mistakes',
            baseNote: 'If your tama is from a generation that\'s a multiple of 5 and was born from a Tamaverse marriage, its egg has rainbow stripes: that\'s the sign it can become Hypertchi or Bubbletchi (it still needs the 3 trips or the 3 outfits). Tama Farm does not count towards Tama Walks.',
            all: 'all', free: 'free', search: 'who are you looking for? e.g. shycootchi', soon: 'soon',
            chars: 'Characters', items: 'Food & items', area: 'Area',
            rule: 'Give its meal or snack, or play with its item, <b>at least once</b> before it becomes an adult. If several apply, the one used the most wins. It must match your Tamagotchi\'s gender (♂♀ ones work with both).',
            ruleSoon: 'This area isn\'t open yet, so we don\'t know what each one likes. I\'ll be back with the info as soon as it\'s out ♡',
            feed: 'Give', play: 'Play with', toGet: 'to get', unknown: 'requirement not known yet ♡',
            meal: 'meal', snack: 'snack', item: 'item', meals: 'Meals', snacks: 'Snacks', toys: 'Items to play with',
            whatGive: 'WHAT TO GIVE', awayTitle: '   come back soon. . . the tama portal is still open ⌯⌲   ', pickHint: 'tap a card and it shows up on the screen', toTop: 'Back to top',
            lA: '◀ A  prev', lB: 'B flip', lC: 'C next ▶',
            shell: 'shell', dlcColors: 'DLC colors', official: 'official post ↗', buy: 'buy ticket ↗', shopUrl: 'https://ticketshop.tamagotchi-official.com/', close: 'close ✕',
            year: 'year', tamas: 'characters', price: 'price', firmware: 'firmware', release: 'release',
            plusTax: '+ tax', country: { cl: 'Chile', es: 'Spain', mx: 'Mexico', us: 'USA' },
            priceNote: 'Approximate, with each country\'s sales tax included. It changes with the yen.',
            freeVal: 'free', pet: 'Backyard pet', rooms: 'Rooms', game: 'Mini game',
            furniture: 'Furniture', toysArea: 'Items', acc: 'Accessories',
            ticket: 'ticket', spots: 'Area spots', shop: 'Area shop',
            sumTitle: 'every recipe', sumDesc: 'Same as the tickets, but as a list: what to give each character in every Tama Portal area (the Tamaverse Tickets, shown as DL AREA on the Uni), with the base branch at the end ✧',
            thChar: 'Character', thGender: 'Gender', thGive: 'What to give', thHow: 'Care mistakes',
            baseSumTitle: 'Base branch (no DLC)', baseSumMeta: 'if your tama uses nothing from the areas', baseSumKids: 'Child:', and: 'and',
            updated: 'updated November 13, 2026',
            faqTitle: 'faq',
            faq: [
                ['How do I buy and download a DLC?', '<p>Each area is sold as a <a href="https://ticketshop.tamagotchi-official.com/" target="_blank" rel="noopener"><b>Tamaverse Ticket</b> ↗</a> on Bandai\'s official shop. After buying it you get a 16-digit download code by email. Very Berry Land is free.</p><p>To redeem it, connect the Uni to Wi-Fi, keep the firmware up to date and follow these steps:</p><ol><li>From the Care menu screen, select the Network icon.</li><li>Select <b>DOWNLOAD</b>.</li><li>Select <b>INPUT CODE</b>.</li><li>Input the 16-digit DL Code you received by email.</li><li>After the “DONE!” screen, select YES on the “DOWNLOAD?” screen.</li><li>You can now go to the new area from the Tama Portal.</li></ol><p>The Tama Portal only takes you to one area. To go to another, change it from <b>DL AREA</b>.</p>'],
                ['How much is a Tamaverse Ticket?', '<p>The shop charges in yen: most cost {p990} and collab areas (Sanrio, PokoPea, KAWAISOUNI! and Esther Bunny) {p1210}. Very Berry Land is free.</p><p>At checkout the shop converts the price to your currency and adds your local sales tax, so the final amount depends on the exchange rate. Your bank may also charge a foreign currency fee. They\'re sold on <a href="https://ticketshop.tamagotchi-official.com/" target="_blank" rel="noopener">Bandai\'s official shop ↗</a> and the code arrives by email.</p>'],
                ['Which areas are there?', '<p>There are {n}: {zonas}.</p><p>They\'re also called <i>Tamaverse lands</i> or <i>DL areas</i>, and on the Uni they show up under DL AREA.</p>'],
                ['Which DLC should I buy?', '<ul><li><b>If you\'ve never downloaded one:</b> start with Very Berry Land, it\'s free.</li><li><b>If you get lots of ♂ tamas:</b> PokoPea Land, where 5 of its 7 characters are ♂.</li><li><b>If you don\'t want to depend on gender:</b> Esther Bunny World (all 5 characters work for ♂ and ♀) or KAWAISOUNI! Land (half of them).</li><li><b>For the most characters per ticket:</b> Sanrio Characters, with 10. Since 10 things in its shop lead to a character, watch what you give it.</li><li><b>To change the game, not just the cast:</b> Angel Festival or Monster Carnival, the only ones that change the evolution and death animations.</li><li><b>If you like the classics:</b> Tamazon Jungle Tour, with characters from the first Tamagotchi like Ginjirotchi and Hashizotchi.</li></ul><p>What each area is best for is also in the <b>Area</b> tab of its ticket.</p>'],
                ['Can I have several areas downloaded at once?', '<p>No, only <b>one at a time</b>.</p><ul><li>Changing areas deletes that area\'s items you have placed or stored.</li><li>You can\'t change areas while raising one of its exclusive characters.</li><li>The code is tied to your Uni; it can be re-linked up to 3 times and lost codes are not reissued.</li></ul>'],
                ['How do I get a DLC character on the Tamagotchi Uni?', '<p>Download its area with a Tamaverse Ticket. While your tama is a child or teen, give it the character\'s meal or snack, or play with its item (everything is sold in the area shop). When it grows up it becomes that character, as long as it matches your tama\'s gender; ♂♀ ones work with both.</p><p>What each one needs is in the tickets above and in <a href="#recetas">every recipe</a>.</p>'],
                ['How many times do I have to give the food or item?', '<p>According to the Tamagotchi Wiki, <b>once</b> before it becomes an adult is enough. If you used things from several characters, the one you used the most wins.</p><p>Some guides say 3 times, so to be safe, give it several times and avoid other characters\' things from the same area.</p>'],
                ['What if I give it nothing from the area?', '<p>It grows through the <a href="#base">base branch</a>, like a Uni without DLC: the teen depends on happiness and the adult on care mistakes.</p>'],
                ['How do I get Mametchi, Kuchipatchi or Mimitchi?', '<ul><li><b>Mametchi ♂</b>: the teen has to be Kuriritchi (happiness 15–20, or 10 DIY crafts) and reach adulthood with 0 care mistakes, or 1–3 mistakes plus 3 Tama Walks.</li><li><b>Kuchipatchi ♂</b>: Gunchitchi (happiness 6–14, or 40 snacks) with 0–1 mistakes, or 2–5 mistakes plus 10 Tama Delivery orders.</li><li><b>Mimitchi ♀</b>: Tustustchi (happiness 0–5, or 15 perfect game scores) with 0–1 mistakes, or 2–5 mistakes plus 20 perfect Tama Arcade scores.</li></ul>'],
                ['What counts as a care mistake?', '<p>When your tama\'s hunger or happiness hits 0, it calls you. If you don\'t take care of it in time, that counts as a care mistake.</p><p>The Uni doesn\'t show how many you have, so it\'s worth writing them down. Child and teen mistakes add up, and they decide which adult it becomes.</p>'],
                ['How long does each stage last?', '<p>Baby, about 1 hour. Child, about 24 hours. Teen, another 24 hours. After that it\'s an adult for the rest of its life.</p>'],
            ],
        }
    };

    let L = 'es', baseG = 'male', filter = 'all', cur = null, tab = 'chars', ci = 0, flipped = false;
    const t = k => T[L][k];
    const tx = o => (o && (o[L] || o.en)) || '';
    const NOMBRES = (typeof NOMBRES_ES !== 'undefined') ? NOMBRES_ES : {};
    const nameOf = n => (n && L === 'es' && NOMBRES[n.en]) || tx(n);
    const dlcById = id => DLCS.find(d => d.id === id);
    const pal = d => SHELLS[d.pal];

    const pageTitle = () => L === 'es' ? 'Guía Tamagotchi Uni en español ✦ DLC, Personajes y Evoluciones | emanon' : 'Tamagotchi Uni Guide ✦ DLC, Characters & Evolutions | emanon';

    /* ── textos fijos ── */
    function staticText() {
        document.documentElement.lang = L;
        document.querySelectorAll('[data-i]').forEach(e => { e.innerHTML = t(e.dataset.i); });
        document.querySelectorAll('[data-iph]').forEach(e => { e.placeholder = t(e.dataset.iph); });
        document.title = pageTitle();
        $('#to-top').setAttribute('aria-label', t('toTop'));
    }

    /* ── rama base ── */
    const tama = (img, name, sub) => `<div class="tama"><img class="px" src="${CH + img}" alt="" loading="lazy"><div><b>${name}</b>${sub ? `<span>${sub}</span>` : ''}</div></div>`;
    function renderBase() {
        const g = baseG, B = BASE;
        const baby = B.babies.find(b => b.g === g);
        const stage = (label, time, body) => `<div class="stage"><div class="stage-label">${label}<small>${time}</small></div><div>${body}</div></div>`;
        const kids = B.children[g].map(c => tama(c.img, c.n, tx(c.cond))).join('');
        const teens = B.teens[g].map(tn => `<div class="teen-col">${tama(tn.img, tn.n, tx(tn.cond))}
            <div class="adults">${tn.adults.map(a => tama(a.img, a.n, `<span class="cm">${a.cm} ${t('mistakes')}</span>${a.alt ? `<span class="cm">${tx(a.alt)}</span>` : ''}`)).join('')}</div></div>`).join('');
        const specials = B.specials[g].map(s => tama(s.img, s.n, tx(s.cond))).join('');
        $('#base-tree').innerHTML =
            stage(t('baby'), t('babyTime'), `<div class="stage-row">${tama(baby.img, baby.n, t('babyCond'))}</div>`) +
            stage(t('child'), t('childTime'), `<div class="stage-row">${kids}</div>`) +
            stage(`${t('teen')} → ${t('adult')}`, `${t('teenTime')} → ${t('adultTime')}`, `<div class="teen-cols">${teens}</div>`) +
            stage(t('special'), '', `<div class="stage-row">${specials}</div><p class="note">${t('baseNote')}</p>`);
        document.querySelectorAll('[data-g]').forEach(b => b.setAttribute('aria-pressed', b.dataset.g === g));
        $('[data-g="male"]').textContent = t('maleShort');
        $('[data-g="female"]').textContent = t('femaleShort');
    }

    /* ── tickets ── */
    function renderTickets() {
        const q = $('#search').value.trim().toLowerCase();
        $('#tickets').innerHTML = DLCS.map(d => {
            const show = filter === 'all' || (filter === 'free' && d.free) || String(d.year) === filter;
            const hit = q.length > 1 && d.chars.some(c => c.n.toLowerCase().includes(q));
            const chip = d.soon ? `<span class="chip soon">${t('soon')} · ${d.release.slice(8, 10)}.${d.release.slice(5, 7)}</span>` : d.free ? `<span class="chip free">${t('free')}</span>` : '';
            return `<button class="ticket${show && (!q || hit) ? '' : ' dim'}${hit ? ' hit' : ''}" style="--c:${pal(d).c}" data-k="${d.id}" aria-current="${cur === d.id}">
                <div class="t-main"><div class="t-kind">TAMAVERSE TICKET</div><div class="t-name">${d.name}</div>
                <div class="t-meta"><span class="chip">${d.year}</span>${chip}</div></div>
                <div class="t-stub"><b>${d.chars.length}</b>tama</div></button>`;
        }).join('');
    }

    /* ── el Uni ── */
    const PLATE = `<svg class="plate" viewBox="0 0 244 270" aria-hidden="true"><path class="f1" d="M42 30C72 6 108 26 140 18c40-10 86 2 89 42 4 40-18 60-8 100 12 45 5 90-40 98-40 8-70-8-110 0C26 266 10 230 16 190c6-40-8-70-2-110 4-30 8-40 28-50Z"/><path class="f2" transform="translate(122 140) scale(.86) translate(-122 -140)" d="M42 30C72 6 108 26 140 18c40-10 86 2 89 42 4 40-18 60-8 100 12 45 5 90-40 98-40 8-70-8-110 0C26 266 10 230 16 190c6-40-8-70-2-110 4-30 8-40 28-50Z"/></svg><span class="brand" aria-hidden="true">emanon</span>`;
    const charImg = (d, c) => `${CH}dlc/${d.id}/${c.img}`;
    const itemImg = (d, k) => `${IT}${d.id}/${d.icons}${k}.webp`;
    const isPx = c => !/artwork/i.test(c.img);

    /* ── ventana ── */
    function renderWin() {
        const w = $('#win'), d = dlcById(cur), sh = pal(d);
        ['c', 'c2', 'p', 'b'].forEach(k => w.style.setProperty('--' + k, sh[k]));
        w.style.setProperty('--t', sh.t || '#fff');
        w.classList.add('open');
        const tabs = ['chars', 'items', 'area'].map(x => `<button role="tab" aria-selected="${x === tab}" data-tab="${x}">${t(x)}</button>`).join('');
        const body = tab === 'chars' ? charsTab(d) : tab === 'items' ? itemsTab(d) : areaTab(d);
        w.innerHTML = `<div class="win-bar"><span class="dots"><i></i><i></i><i></i></span>tama_portal.exe — ${d.name}<button id="wx">${t('close')}</button></div>
            <div class="win-body"><div class="win-head"><h3>${d.name}</h3><span class="chip">${d.year}</span>
            <span class="chip">${sh.name ? t('shell') + ': ' + sh.name : t('dlcColors')}</span>
            ${d.free ? `<span class="chip free">${t('free')}</span>` : ''}${d.soon ? `<span class="chip soon">${t('soon')}</span>` : ''}
            <span class="win-links">${d.free || d.soon ? '' : `<a href="${t('shopUrl')}" target="_blank" rel="noopener">${t('buy')}</a>`}
            <a href="https://tamagotchi-official.com/gb/series/uni/news/${d.post}/" target="_blank" rel="noopener">${t('official')}</a></span></div>
            <div class="tabs" role="tablist">${tabs}</div>${body}</div>`;
        $('#wx').onclick = closeWin;
        w.querySelectorAll('[data-tab]').forEach(b => b.onclick = () => { tab = b.dataset.tab; renderWin(); });
        if (tab === 'chars') wireUni(d);
    }
    function closeWin() {
        const w = $('#win'); w.classList.remove('open'); w.innerHTML = ''; cur = null; renderTickets();
        history.replaceState(null, '', location.pathname);
    }
    function openDlc(id, scroll) {
        if (cur !== id) { cur = id; tab = 'chars'; ci = 0; flipped = false; }
        renderTickets(); renderWin();
        history.replaceState(null, '', '#' + id);
        if (scroll) $('#win').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    /* pestaña personajes: el Uni + tarjetas sin nombre (el nombre sale en la pantalla) */
    function charsTab(d) {
        return `<p class="rule">${d.soon ? t('ruleSoon') : t('rule')}</p>
        <div class="cast">
            <div class="uni-col">
                <div class="uni">${PLATE}
                    <div class="screen${flipped ? ' flipped' : ''}" id="screen" tabindex="0" role="button" aria-label="${t('lB')}">
                        <div class="face front" id="front"></div><div class="face back" id="back"></div>
                    </div>
                    <div class="btns"><button id="bA" aria-label="${t('lA')}"></button><button id="bB" aria-label="${t('lB')}"></button><button id="bC" aria-label="${t('lC')}"></button></div>
                </div>
                <div class="btn-legend"><span>${t('lA')}</span><span>${t('lB')}</span><span>${t('lC')}</span></div>
            </div>
            <div class="roster"><p class="roster-hint">${t('pickHint')}</p>${d.chars.map((c, i) => `
                <button class="pick" data-idx="${i}" aria-pressed="${i === ci}" aria-label="${c.n}"><div class="spr"><img class="${isPx(c) ? 'px' : ''}" src="${charImg(d, c)}" alt="" loading="lazy"></div>
                <div class="fd">${c.it ? `<img class="px" src="${itemImg(d, c.it)}" alt="" loading="lazy">` : '?'}</div></button>`).join('')}
            </div>
        </div>`;
    }
    function fillScreen(d, anim) {
        const c = d.chars[ci], it = c.it && d.items[c.it];
        const pips = d.chars.map((_, i) => `<i class="${i === ci ? 'on' : ''}"></i>`).join('');
        const short = d.name.replace(/\s*[★♪].*$/, '').toUpperCase();
        $('#front').innerHTML = `<div class="l-top"><span>${ci + 1}/${d.chars.length}</span><span>${t(c.g)}</span></div>
            <div class="l-spr"><img class="${isPx(c) ? 'px' : ''} ${anim ? 'hop' : ''}" src="${charImg(d, c)}" alt="${c.n}"></div>
            <div class="l-name">${c.n}</div><div class="l-sub">${short}</div><div class="pips">${pips}</div>`;
        $('#back').innerHTML = it
            ? `<div class="l-top"><span>${t('whatGive')}</span><span>${t(it.type)}</span></div>
               <div class="l-spr"><img class="${isPx(c) ? 'px' : ''}" src="${charImg(d, c)}" alt="" style="max-height:56px"><img class="px food ${anim ? 'hop' : ''}" src="${itemImg(d, c.it)}" alt="${nameOf(it.name)}"></div>
               <div class="l-recipe">${it.type === 'item' ? t('play') : t('feed')} <b>${nameOf(it.name)}</b><br>${t('toGet')} <strong>${c.n}</strong></div><div class="pips">${pips}</div>`
            : `<div class="l-top"><span>${t('whatGive')}</span><span></span></div><div class="l-msg"><span>${c.n}</span><span>${t('unknown')}</span></div><div class="pips">${pips}</div>`;
        document.querySelectorAll('.pick').forEach(p => p.setAttribute('aria-pressed', +p.dataset.idx === ci));
    }
    function press(id) { const b = $(id); if (!b) return; b.classList.add('pressed'); setTimeout(() => b.classList.remove('pressed'), 120); }
    function wireUni(d) {
        const scr = $('#screen');
        const go = dir => { ci = (ci + dir + d.chars.length) % d.chars.length; fillScreen(d, true); press(dir < 0 ? '#bA' : '#bC'); };
        const flip = () => {
            flipped = !flipped; scr.classList.toggle('flipped', flipped); press('#bB');
            scr.classList.remove('glitch'); void scr.offsetWidth; scr.classList.add('glitch');
            clearTimeout(flip.t); flip.t = setTimeout(() => scr.classList.remove('glitch'), 400);
        };
        fillScreen(d, false);
        $('#bA').onclick = () => go(-1);
        $('#bC').onclick = () => go(1);
        $('#bB').onclick = flip;
        scr.onclick = flip;
        scr.onkeydown = e => {
            if (e.key === 'ArrowLeft') go(-1);
            else if (e.key === 'ArrowRight') go(1);
            else if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); flip(); }
        };
        let x0 = null;
        scr.addEventListener('touchstart', e => { x0 = e.touches[0].clientX; }, { passive: true });
        scr.addEventListener('touchend', e => {
            if (x0 === null) return;
            const dx = e.changedTouches[0].clientX - x0;
            if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
            x0 = null;
        });
        document.querySelectorAll('.pick').forEach(p => p.onclick = () => {
            ci = +p.dataset.idx; fillScreen(d, true);
            const r = $('.uni').getBoundingClientRect();
            if (r.top < 0 || r.bottom > innerHeight) $('.uni').scrollIntoView({ behavior: 'smooth', block: 'center' });
        });
        // precarga para que el cambio de pantalla no espere a la red
        d.chars.forEach(c => { new Image().src = charImg(d, c); if (c.it) new Image().src = itemImg(d, c.it); });
    }

    function itemsTab(d) {
        const who = k => d.chars.find(c => c.it === k);
        const group = (type, title) => {
            const ks = Object.keys(d.items).filter(k => d.items[k].type === type);
            if (!ks.length) return '';
            return `<div class="items-group"><h4>${title}</h4><div class="items">${ks.map(k => {
                const it = d.items[k], c = who(k);
                return `<div class="item"><img class="px" src="${itemImg(d, k)}" alt="" loading="lazy">${nameOf(it.name)}${it.price ? `<div class="price">${it.price}</div>` : ''}${c ? `<div class="for">→ ${c.n}</div>` : ''}</div>`;
            }).join('')}</div></div>`;
        };
        return group('meal', t('meals')) + group('snack', t('snacks')) + group('item', t('toys'));
    }

    function areaTab(d) {
        const src = f => `${IT}${d.id}/${f}`;
        const A = d.area;
        const facts = [[t('year'), d.year], [t('tamas'), d.chars.length]];
        facts.push([t('release'), d.release.split('-').reverse().join('.')]);
        if (d.fw) facts.push([t('firmware'), 'v' + d.fw + '+']);
        // el precio va al final: al abrirlo crece hacia abajo sin mover los otros datos
        if (d.free) facts.push([t('price'), t('freeVal')]);
        if (d.yen) facts.push([t('price'), priceFact(d.yen, L, t), 'price-li']);
        const photos = fs => fs.map(f => `<figure class="photo"><img class="px" src="${src(f)}" alt="" loading="lazy"></figure>`).join('');
        const sheet = (fs, cap) => !fs.length ? '' : fs.length > 2
            ? `<figure class="sheet"><div class="minis">${fs.map(f => `<img class="px" src="${src(f)}" alt="" loading="lazy">`).join('')}</div><figcaption>${cap}</figcaption></figure>`
            : fs.map(f => `<figure class="sheet"><img class="px" src="${src(f)}" alt="${cap}" loading="lazy"><figcaption>${cap}</figcaption></figure>`).join('');
        const S = d.shop;
        const nameList = lst => `<ul class="names">${lst.map(x => `<li>${nameOf({ en: x.en })}<span>${x.price}</span></li>`).join('')}</ul>`;
        const shopCat = (lst, files, cap) => {
            if (!lst || !lst.length) return sheet(files, cap);
            if (lst.every(x => x.icon)) return `<div class="shop-cat"><h5>${cap}</h5><div class="items">${lst.map(x => `<div class="item"><img class="px" src="${src(x.icon)}" alt="" loading="lazy">${nameOf({ en: x.en })}<div class="price">${x.price}</div></div>`).join('')}</div></div>`;
            return `<div class="shop-cat"><h5>${cap}</h5>${sheet(files, cap)}${nameList(lst)}</div>`;
        };
        return `<div class="area">
            <ul class="facts">${facts.map(([k, v, c]) => `<li${c ? ` class="${c}"` : ''}><span>${k}</span>${v}</li>`).join('')}</ul>
            ${d.best ? `<p class="best-note">* ${tx(d.best)}</p>` : ''}
            ${d.spots && d.spots.length ? `<h4>${t('spots')}</h4><ul class="spots">${d.spots.map(p => `<li><b>${tx(p.name)}</b> ${tx(p.text)}</li>`).join('')}</ul>` : ''}
            ${d.pet ? `<h4>${t('pet')}</h4><p class="pet">${tx(d.pet)}</p>` : ''}
            ${A.rooms.length ? `<h4>${t('rooms')}</h4><div class="shots rooms">${photos(A.rooms)}</div>${S && S.rooms.length ? nameList(S.rooms) : ''}` : ''}
            ${A.minigame.length || d.minigame ? `<h4>${t('game')}${d.minigame ? ': ' + d.minigame.name : ''}</h4><div class="shots">${photos(A.minigame)}${d.minigame ? `<div class="shot-text">${tx(d.minigame)}</div>` : ''}</div>` : ''}
            ${S ? `<h4>${t('shop')}</h4>${shopCat(S.accessories, A.accessories, t('acc'))}${shopCat(S.furniture, A.furniture, t('furniture'))}`
                : `<h4>${t('furniture')} · ${t('toysArea')} · ${t('acc')}</h4><div class="sheets">${sheet(A.furniture, t('furniture'))}${sheet(A.toys, t('toysArea'))}${sheet(A.accessories, t('acc'))}</div>`}
        </div>`;
    }

    /* ── acordeón ── */
    function renderHow() {
        $('#faq-list').innerHTML = faqHTML(L, t);
        $('#sum-list').innerHTML = resumenHTML(L, t, nameOf);
    }

    function renderAll() {
        staticText(); renderBase(); renderTickets(); renderHow();
        if (cur) renderWin();
    }

    /* ── eventos ── */
    document.querySelectorAll('.lang-btn').forEach(btn => btn.addEventListener('click', () => {
        document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b === btn));
        L = btn.dataset.lang;
        renderAll();
    }));
    document.querySelectorAll('[data-g]').forEach(b => b.onclick = () => { baseG = b.dataset.g; renderBase(); });
    document.querySelectorAll('[data-f]').forEach(b => b.onclick = () => {
        filter = b.dataset.f;
        document.querySelectorAll('[data-f]').forEach(x => x.setAttribute('aria-pressed', x === b));
        renderTickets();
    });
    $('#search').addEventListener('input', renderTickets);
    $('#tickets').addEventListener('click', e => { const b = e.target.closest('.ticket'); if (b) openDlc(b.dataset.k, true); });

    // título de la pestaña: mensaje en marquesina cuando te vas (como en Paradise)
    let awayInterval = null;
    document.addEventListener('visibilitychange', () => {
        clearInterval(awayInterval);
        if (document.hidden) {
            let msg = t('awayTitle');
            document.title = msg;
            awayInterval = setInterval(() => { msg = msg.substring(1) + msg[0]; document.title = msg; }, 50);
        } else {
            document.title = pageTitle();
        }
    });

    const toTop = $('#to-top');
    const updateTop = () => toTop.classList.toggle('show', window.scrollY > 400);
    window.addEventListener('scroll', updateTop, { passive: true });
    toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' }));
    updateTop();

    renderAll();
    // enlace directo a un DLC: emanon.vip/tmgc-uni/#babys-dream
    const fromHash = location.hash.slice(1);
    if (fromHash && dlcById(fromHash)) openDlc(fromHash, true);
});
