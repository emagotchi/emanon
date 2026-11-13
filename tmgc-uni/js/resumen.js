// Precio del ticket. La tienda cobra en yenes con el impuesto japonés incluido (10 %); al pagar, convierte el precio
// sin ese impuesto a tu moneda y le suma el IVA de tu país. Ej.: Baby's Dream en Chile, sept. 2026: 900 × 5,79 × 1,19 = $6.201.
// Cuánto vale 1 yen (noviembre 2026, aprox.): cámbialo aquí si el yen se mueve mucho.
const YEN = { CLP: 6.22, EUR: 0.00565, MXN: 0.1178, USD: 0.00633 };
const IVA = { CLP: 0.19, EUR: 0.21, MXN: 0.16 };
// se redondea hacia arriba (a $100, 0,10 € y $5) para no mostrar menos de lo que se paga
const local = (yen, cur, step) => Math.ceil(yen / 1.1 * YEN[cur] * (1 + IVA[cur]) / step - 1e-9) * step;
function ticketPrice(yen, L) {
    const jp = '¥' + yen.toLocaleString(L === 'es' ? 'es-CL' : 'en-US');
    if (L !== 'es') return `${jp} (about US$${Math.round(yen / 1.1 * YEN.USD)})`;
    const clp = local(yen, 'CLP', 100).toLocaleString('es-CL');
    const eur = local(yen, 'EUR', 0.1).toFixed(2).replace('.', ',');
    return `${jp} (unos $${clp} CLP · ${eur} € · $${local(yen, 'MXN', 5)} MXN)`;
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
        const meta = [d.year, `${d.chars.length} ${t('tamas')}`];
        if (d.free) meta.push(t('freeVal'));
        else if (d.yen) meta.push(ticketPrice(d.yen, L));
        if (d.soon) meta.push(`${t('release')} ${dateOf(d.release)}`);
        const rows = d.chars.map(c => {
            const it = c.it && d.items[c.it];
            const give = it
                ? `${it.type === 'item' ? t('play') : t('feed')} ${itemName(it.name)} <span class="kind">${t(it.type)}</span>`
                : `<span class="kind">${t('unknown')}</span>`;
            return `<tr><td>${c.n}</td><td>${sym[c.g] || ''}</td><td>${give}</td><td>${it && it.price ? it.price : ''}</td></tr>`;
        }).join('');
        return `<details class="help-box sum-box" id="recetas-${d.id}"><summary><h3>${d.name}</h3><span class="sum-meta">${meta.join(' · ')}</span></summary>
<div class="help-body"><div class="table-wrap"><table class="recipes"><thead><tr><th>${t('thChar')}</th><th>${t('thGender')}</th><th>${t('thGive')}</th><th>${t('price')}</th></tr></thead><tbody>${rows}</tbody></table></div></div></details>`;
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
<p>${t('special')}:</p><ul>${specials}</ul></div></details>`;

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
