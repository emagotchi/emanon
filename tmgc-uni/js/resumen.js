// Precio del ticket. La tienda cobra en yenes con el impuesto japonés incluido (10 %); al pagar, convierte el precio
// sin ese impuesto a tu moneda y le suma el IVA de tu país. Ej.: Baby's Dream en Chile, sept. 2026: 900 × 5,79 × 1,19 = $6.201.
// Cuánto vale 1 yen (noviembre 2026, aprox.): cámbialo aquí si el yen se mueve mucho.
const YEN = { CLP: 6.22, EUR: 0.00565, MXN: 0.1178, USD: 0.00633 };
// en EE. UU. el impuesto depende del estado, así que el dólar va sin impuesto
const IVA = { CLP: 0.19, EUR: 0.21, MXN: 0.16, USD: 0 };
// se redondea hacia arriba (a $100, 0,10 €, $5 y US$0,10) para no mostrar menos de lo que se paga
const STEP = { CLP: 100, EUR: 0.1, MXN: 5, USD: 0.1 };
const local = (yen, cur) => Math.ceil(yen / 1.1 * YEN[cur] * (1 + IVA[cur]) / STEP[cur] - 1e-9) * STEP[cur];
const money = (yen, cur, L) => {
    const v = local(yen, cur), dec = L === 'es' ? ',' : '.';
    if (cur === 'CLP') return '$' + v.toLocaleString('es-CL');
    if (cur === 'MXN') return '$' + v;
    if (cur === 'EUR') return L === 'es' ? v.toFixed(2).replace('.', ',') + '\u00a0€' : '€' + v.toFixed(2);
    return 'US$' + v.toFixed(2).replace('.', dec);
};
const yenText = (yen, L) => '¥' + yen.toLocaleString(L === 'es' ? 'es-CL' : 'en-US');
function ticketPrice(yen, L) {
    if (L !== 'es') return `${yenText(yen, L)} (about ${money(yen, 'USD', L)} · ${money(yen, 'EUR', L)})`;
    return `${yenText(yen, L)} (unos ${money(yen, 'CLP', L)}\u00a0CLP · ${money(yen, 'EUR', L)} · ${money(yen, 'MXN', L)}\u00a0MXN · ${money(yen, 'USD', L)})`;
}
// La moneda de quien visita, según su zona horaria: Chile, México, España y, si no, dólares.
const MY_CUR = (() => {
    try {
        const z = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
        if (/^(America\/(Santiago|Punta_Arenas)|Pacific\/Easter)$/.test(z)) return 'CLP';
        if (/^America\/(Mexico_City|Cancun|Merida|Monterrey|Matamoros|Chihuahua|Ciudad_Juarez|Ojinaga|Mazatlan|Bahia_Banderas|Hermosillo|Tijuana)$/.test(z)) return 'MXN';
        if (/^(Europe\/Madrid|Africa\/Ceuta|Atlantic\/Canary)$/.test(z)) return 'EUR';
    } catch (e) { /* sin Intl: dólares */ }
    return 'USD';
})();
const approx = (yen, cur, L) => cur === 'USD' ? `~${Math.round(local(yen, 'USD'))} USD`
    : cur === 'EUR' ? '~' + money(yen, 'EUR', L) : `~${money(yen, cur, L)} ${cur}`;
// Dato «precio» de la pestaña Área: ¥990 (~$6.700 CLP); al tocarlo se abren los otros países.
function priceFact(yen, L, t) {
    const rows = [['cl', 'CLP'], ['es', 'EUR'], ['mx', 'MXN'], ['us', 'USD']]
        .map(([c, cur]) => `<li><em>${t('country')[c]}</em> ${money(yen, cur, L)}${cur === 'MXN' ? ' MXN' : ''}${cur === 'USD' ? ` <small>${t('plusTax')}</small>` : ''}</li>`).join('');
    return `<details class="price-fact"><summary>${yenText(yen, L)} (${approx(yen, MY_CUR, L)})</summary><ul>${rows}</ul><p>${t('priceNote')}</p></details>`;
}

function resumenHTML(L, t, nameOf) {
    const tx = o => (o && (o[L] || o.en)) || '';
    const sym = { male: '♂', female: '♀', either: '♂♀' };
    const itemName = n => {
        const shown = nameOf(n);
        return shown !== n.en ? `<b>${shown}</b> <span class="en">(${n.en})</span>` : `<b>${shown}</b>`;
    };
    const dateOf = iso => iso.split('-').reverse().join('.');

    const zone = d => {
        const meta = [`${t('release')} ${dateOf(d.release)}`, `${d.chars.length} ${t('tamas')}`];
        if (d.free) meta.push(t('freeVal'));
        else if (d.yen) meta.push(ticketPrice(d.yen, L));
        const rows = d.chars.map(c => {
            const it = c.it && d.items[c.it];
            const give = it
                ? `${it.type === 'item' ? t('play') : t('feed')} ${itemName(it.name)} <span class="kind">${t(it.type)}</span>`
                : `<span class="kind">${t('unknown')}</span>`;
            return `<tr><td>${c.n}</td><td>${sym[c.g] || ''}</td><td>${give}</td><td>${it && it.price ? it.price : ''}</td></tr>`;
        }).join('');
        return `<details class="help-box sum-box" id="recetas-${d.id}"><summary><h3>${d.name}</h3><span class="sum-meta">${meta.join(' · ')}</span></summary>
<div class="help-body"><p class="sum-best">${tx(d.best)}</p><div class="table-wrap"><table class="recipes"><thead><tr><th>${t('thChar')}</th><th>${t('thGender')}</th><th>${t('thGive')}</th><th>${t('price')}</th></tr></thead><tbody>${rows}</tbody></table></div></div></details>`;
    };

    const B = BASE;
    const g2 = g => g === 'male' ? '♂' : '♀';
    const kids = ['male', 'female'].map(g => B.children[g].map(c => `${c.n} ${g2(g)} (${tx(c.cond).toLowerCase()})`).join(', ')).join('; ');
    const baseRows = ['male', 'female'].map(g => B.teens[g].map(tn => tn.adults.map((a, i) => `<tr>${i === 0
        ? `<td rowspan="${tn.adults.length}"><b>${tn.n}</b> ${g2(g)}<br><span class="kind">${tx(tn.cond)}</span></td>` : ''}<td>${a.n}</td><td>${a.cm}${a.alt ? ` <span class="kind">${tx(a.alt)}</span>` : ''}</td></tr>`).join('')).join('')).join('');
    const specials = ['male', 'female'].map(g => B.specials[g].map(s => `<li><b>${s.n}</b> ${g2(g)}: ${tx(s.cond)}</li>`).join('')).join('');
    const base = `<details class="help-box sum-box" id="recetas-rama-base"><summary><h3>${t('baseSumTitle')}</h3><span class="sum-meta">${t('baseSumMeta')}</span></summary>
<div class="help-body"><p>${t('baseSumKids')} ${kids}.</p>
<div class="table-wrap"><table class="recipes base"><thead><tr><th>${t('teen')}</th><th>${t('adult')}</th><th>${t('thHow')}</th></tr></thead><tbody>${baseRows}</tbody></table></div>
<p>${t('special')}:</p><ul>${specials}</ul><p>${t('baseNote')}</p></div></details>`;

    return DLCS.map(zone).join('') + base;
}

function accordionHTML(list) {
    return list.map(([q, a]) => `<details class="help-box"><summary>${q}</summary><div class="help-body">${a}</div></details>`).join('');
}

// preguntas frecuentes: {n} y {zonas} salen de los datos
function faqHTML(L, t) {
    const names = DLCS.map(d => d.soon ? `${d.name} (${t('release')} ${d.release.split('-').reverse().join('.')})` : d.name);
    const zonas = names.slice(0, -1).join(', ') + ` ${t('and')} ` + names[names.length - 1];
    return accordionHTML(t('faq').map(([q, a]) => [q, a.replace('{n}', DLCS.length).replace('{zonas}', zonas)
        .replace('{p990}', ticketPrice(990, L)).replace('{p1210}', ticketPrice(1210, L))]));
}
