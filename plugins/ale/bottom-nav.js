module.exports = {
  plugin: {
    name: 'ale-bottom-nav',
    version: '1.0.0',
    capabilities: ['body']
  },

  generateScripts() {
    return {
      bodyScriptsHtml: `
<style>
.ale-bottom-nav {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 1.25rem 0 0.75rem;
}
.ale-bottom-nav button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 50px;
  padding: 0.65rem 0.9rem;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  background: var(--docmd-accent, #3b82f6);
  color: #fff;
  font-size: 0.86rem;
  line-height: 1.2;
  text-align: center;
  flex: 1 1 0;
}
.ale-bottom-nav button:hover { filter: brightness(1.06); }
.ale-bottom-nav button:active { transform: translateY(1px); }
.ale-bottom-nav button:disabled {
  opacity: 0.45;
  cursor: not-allowed;
  filter: grayscale(0.2);
}
@media (max-width: 720px) {
  .ale-bottom-nav { flex-direction: column; }
}
</style>
<script>
(function () {
  function stripTrailingSlash(path) {
    if (!path) return path;
    while (path.length > 1 && path.endsWith('/')) path = path.slice(0, -1);
    return path;
  }

  function normalizePath(input) {
    try {
      var u = new URL(input, window.location.origin);
      return stripTrailingSlash(u.pathname) || '/';
    } catch (_) {
      return null;
    }
  }

  function withBase(href) {
    if (!href) return href;
    var base = stripTrailingSlash(window.DOCMD_BASE || '/');
    if (!base) base = '/';
    if (!href.startsWith('/')) return href;
    if (href === '/') return base + '/';
    if (base !== '/' && !href.startsWith(base + '/')) return base + href;
    return href;
  }

  function mkButton(label, href, disabled) {
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.textContent = label;
    if (disabled || !href) {
      btn.disabled = true;
      return btn;
    }
    btn.addEventListener('click', function () { window.location.href = href; });
    return btn;
  }

  function collectSidebarPages() {
    var selectors = ['[aria-label="Main navigation"] a[href]', 'aside a[href]', '.sidebar a[href]'];
    var links = [];
    var seen = new Set();

    for (var i = 0; i < selectors.length; i++) {
      var nodes = document.querySelectorAll(selectors[i]);
      for (var j = 0; j < nodes.length; j++) {
        var a = nodes[j];
        var href = a.getAttribute('href');
        if (!href || href.charAt(0) === '#') continue;

        var path = normalizePath(href);
        if (!path || seen.has(path)) continue;

        seen.add(path);
        var rawPath = new URL(href, window.location.origin).pathname;
        links.push({ path: path, href: withBase(rawPath) });
      }
      if (links.length) break;
    }

    return links;
  }

  function fallbackPages(isEn) {
    var base = '/ALEPsych-Docs';
    if (isEn) {
      return [
        base + '/en',
        base + '/en/docs',
        base + '/en/docs/beginner/mod-folder',
        base + '/en/docs/beginner/mod-structure',
        base + '/en/docs/beginner/data-json'
      ].map(function (p) { return { path: p, href: withBase(p + '/') }; });
    }

    return [
      base,
      base + '/docs',
      base + '/docs/beginner/mod-folder',
      base + '/docs/beginner/mod-structure',
      base + '/docs/beginner/data-json'
    ].map(function (p) { return { path: p, href: withBase(p + '/') }; });
  }

  function findIndex(pages, currentPath) {
    var idx = pages.findIndex(function (p) { return p.path === currentPath; });
    if (idx >= 0) return idx;

    var noBase = currentPath.replace('/ALEPsych-Docs', '');
    return pages.findIndex(function (p) {
      return p.path.replace('/ALEPsych-Docs', '') === noBase;
    });
  }

  function buildBottomNav() {
    var old = document.querySelector('.ale-bottom-nav');
    if (old) old.remove();

    var currentPath = normalizePath(window.location.pathname) || '/';
    var isEn = currentPath.indexOf('/en') >= 0 || ((document.documentElement.lang || '').toLowerCase().indexOf('en') === 0);

    var pages = collectSidebarPages();
    if (!pages.length) pages = fallbackPages(isEn);

    var idx = findIndex(pages, currentPath);
    if (idx < 0) {
      pages = fallbackPages(isEn);
      idx = findIndex(pages, currentPath);
    }

    var prevHref = idx > 0 ? pages[idx - 1].href : null;
    var nextHref = idx >= 0 && idx < pages.length - 1 ? pages[idx + 1].href : null;

    var prevLabel = isEn ? '<- Previous page' : '<- Pagina anterior';
    var nextLabel = isEn ? 'Next page ->' : 'Pagina siguiente ->';

    var wrap = document.createElement('div');
    wrap.className = 'ale-bottom-nav';
    wrap.setAttribute('aria-label', 'Page navigation');

    wrap.appendChild(mkButton(prevLabel, prevHref, !prevHref));
    wrap.appendChild(mkButton(nextLabel, nextHref, !nextHref));

    var anchor = document.querySelector('.ale-page-credit');
    if (anchor && anchor.parentNode) {
      anchor.parentNode.insertBefore(wrap, anchor);
      return;
    }

    var content = document.querySelector('main') || document.body;
    content.appendChild(wrap);
  }

  function scheduleBuilds() {
    buildBottomNav();
    setTimeout(buildBottomNav, 50);
    setTimeout(buildBottomNav, 250);
    setTimeout(buildBottomNav, 800);
  }

  window.addEventListener('load', scheduleBuilds);
  document.addEventListener('DOMContentLoaded', scheduleBuilds);
  scheduleBuilds();
})();
</script>`
    };
  }
};
