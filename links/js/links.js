/* ✦ emanon · video links ✦ */

(function () {
  const STORES = [
    { match: /aliexpress|alicdn|s\.click\.ali/i, label: 'AliExpress', cls: 'ali',    glyph: 'Ali' },
    { match: /amazon\.|amzn\./i,                 label: 'Amazon',     cls: 'amz',    glyph: 'a' },
    { match: /temu\./i,                          label: 'Temu',       cls: 'temu',   glyph: 'T' },
    { match: /shein\./i,                         label: 'Shein',      cls: 'shein',  glyph: 'S' },
    { match: /mercadoli[bv]re|meli\.la/i,        label: 'Mercado Libre', cls: 'meli', glyph: 'ML' },
    { match: /falabella/i,                       label: 'Falabella',  cls: 'gen',    glyph: 'F' },
    { match: /ebay\./i,                          label: 'eBay',       cls: 'gen',    glyph: 'e' },
    { match: /etsy\./i,                          label: 'Etsy',       cls: 'gen',    glyph: 'E' },
    { match: /tiktok\./i,                        label: 'TikTok',     cls: 'gen',    glyph: '♪' },
    { match: /youtube\.|youtu\.be/i,             label: 'YouTube',    cls: 'gen',    glyph: '▶' },
    { match: /emanon\.vip/i,                     label: 'emanon',     cls: 'gen',    glyph: '🎐' }
  ];

  const $ = sel => document.querySelector(sel);
  const esc = s => String(s ?? '').replace(/[&<>"']/g, c =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  function storeOf(url) {
    let host = '';
    try { host = new URL(url).hostname.replace(/^www\./, ''); } catch (e) {}
    const s = STORES.find(st => st.match.test(host));
    if (s) return s;
    const name = host.split('.').slice(-2, -1)[0] || 'link';
    return { label: host || 'link', cls: 'gen', glyph: name.charAt(0).toUpperCase() };
  }

  function fmtDate(iso) {
    if (!iso) return '';
    const [y, m, d] = iso.split('-').map(Number);
    const meses = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];
    return `${d} ${meses[m - 1]} ${y}`;
  }

  /* ── Templates ── */
  function linkCard(l) {
    const st = storeOf(l.url);
    const media = l.img
      ? `<img src="${esc(l.img)}" alt="" loading="lazy" referrerpolicy="no-referrer"
             onerror="this.parentNode.classList.add('noimg');this.remove()">`
      : '';
    return `
      <a class="item" href="${esc(l.url)}" target="_blank" rel="noopener sponsored">
        <span class="item-media ${l.img ? '' : 'noimg'} st-${st.cls}" data-glyph="${esc(st.glyph)}">${media}</span>
        <span class="item-body">
          <span class="item-name">${esc(l.name)}</span>
          ${l.note ? `<span class="item-note">${esc(l.note)}</span>` : ''}
          <span class="item-meta">
            <span class="chip st-${st.cls}">${esc(st.label)}</span>
            ${l.price ? `<span class="item-price">${esc(l.price)}</span>` : ''}
          </span>
        </span>
        <span class="item-arrow">→</span>
      </a>`;
  }

  function videoCard(v, i) {
    const n = (v.links || []).length;
    return `
      <section class="video" id="${esc(v.id)}" data-search="${esc(
        [v.title, v.note, ...(v.links || []).map(l => l.name + ' ' + (l.note || ''))].join(' ').toLowerCase()
      )}">
        <button class="video-head" type="button" aria-expanded="false" aria-controls="${esc(v.id)}-links">
          <span class="thumb" data-tiktok="${esc(v.tiktok || '')}">
            ${v.thumb ? `<img src="${esc(v.thumb)}" alt="" loading="lazy">` : ''}
            <span class="thumb-play">▶</span>
          </span>
          <span class="video-info">
            ${i === 0 ? '<span class="badge">nuevo</span>' : ''}
            <span class="video-title">${esc(v.title)}</span>
            ${v.note ? `<span class="video-note">${esc(v.note)}</span>` : ''}
            <span class="video-meta">${fmtDate(v.date)} · ${n} link${n === 1 ? '' : 's'}</span>
          </span>
          <span class="video-toggle" aria-hidden="true">+</span>
        </button>
        <div class="video-links" id="${esc(v.id)}-links">
          <div class="video-links-inner">
            <div class="items">${(v.links || []).map(linkCard).join('')}</div>
            <div class="video-actions">
              ${v.tiktok ? `<a class="mini-btn" href="${esc(v.tiktok)}" target="_blank" rel="noopener">ver el video ↗</a>` : ''}
              <button class="mini-btn copy-btn" type="button" data-id="${esc(v.id)}">copiar link de esta lista</button>
            </div>
          </div>
        </div>
      </section>`;
  }

  /* ── TikTok thumbnail (auto) ── */
  function loadTikTokThumb(el) {
    const url = el.dataset.tiktok;
    if (!url || !/\/video\//.test(url) || el.querySelector('img')) return;
    fetch('https://www.tiktok.com/oembed?url=' + encodeURIComponent(url))
      .then(r => r.ok ? r.json() : Promise.reject())
      .then(d => {
        if (!d.thumbnail_url) return;
        const img = new Image();
        img.alt = '';
        img.referrerPolicy = 'no-referrer';
        img.onload = () => el.prepend(img);
        img.src = d.thumbnail_url;
      })
      .catch(() => {});
  }

  /* ── Open / close ── */
  function setOpen(sec, open) {
    sec.classList.toggle('open', open);
    sec.querySelector('.video-head').setAttribute('aria-expanded', open);
    sec.querySelector('.video-toggle').textContent = open ? '−' : '+';
  }

  function toast(msg) {
    const t = $('#toast');
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(toast._t);
    toast._t = setTimeout(() => t.classList.remove('show'), 1800);
  }

  /* ── Init ── */
  function init() {
    const list = (typeof VIDEOS !== 'undefined' ? VIDEOS : [])
      .slice()
      .sort((a, b) => (b.date || '').localeCompare(a.date || ''));
    const box = $('#videos');
    box.innerHTML = list.map(videoCard).join('');
    $('#video-count').textContent = `${list.length} video${list.length === 1 ? '' : 's'}`;

    box.querySelectorAll('.thumb').forEach(loadTikTokThumb);

    box.addEventListener('click', e => {
      const head = e.target.closest('.video-head');
      if (head) {
        const sec = head.parentNode;
        const open = !sec.classList.contains('open');
        setOpen(sec, open);
        if (open) history.replaceState(null, '', '#' + sec.id);
        return;
      }
      const copy = e.target.closest('.copy-btn');
      if (copy) {
        const url = location.origin + location.pathname + '#' + copy.dataset.id;
        (navigator.clipboard ? navigator.clipboard.writeText(url) : Promise.reject())
          .then(() => toast('link copiado ✦'))
          .catch(() => prompt('copia este link:', url));
      }
    });

    // abrir el video del #hash, o el más nuevo
    function openFromHash() {
      const id = decodeURIComponent(location.hash.slice(1));
      const target = id && document.getElementById(id);
      if (target && target.classList.contains('video')) {
        setOpen(target, true);
        setTimeout(() => target.scrollIntoView({ behavior: 'smooth', block: 'start' }), 150);
        return true;
      }
      return false;
    }
    if (!openFromHash()) {
      const first = box.querySelector('.video');
      if (first) setOpen(first, true);
    }
    window.addEventListener('hashchange', openFromHash);

    // buscador
    $('#search').addEventListener('input', e => {
      const q = e.target.value.trim().toLowerCase();
      let shown = 0;
      box.querySelectorAll('.video').forEach(sec => {
        const hit = !q || sec.dataset.search.includes(q);
        sec.hidden = !hit;
        if (hit) shown++;
        if (q && hit) setOpen(sec, true);
      });
      $('#empty').hidden = shown > 0;
    });

    // reloj
    const clock = $('#clock');
    const p = n => String(n).padStart(2, '0');
    const tick = () => { const d = new Date(); clock.textContent = `${p(d.getHours())}:${p(d.getMinutes())}:${p(d.getSeconds())}`; };
    tick(); setInterval(tick, 1000);
  }

  document.addEventListener('DOMContentLoaded', init);
})();
