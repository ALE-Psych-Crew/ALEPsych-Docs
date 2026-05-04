module.exports = {
  plugin: {
    name: 'ale-markdown',
    version: '1.1.1',
    capabilities: ['markdown', 'build', 'body']
  },

  markdownSetup(md) {
    const emojis = [
      'alejito', 'aySi', 'calvinEnojao', 'calvinPlan', 'jonk', 'meVoid',
      'ommmHD', 'semmi', 'thx', 'trollface', 'blobCookie', 'gentleBlob',
      'qdijiste', 'queHasDicho'
    ];

    const defaultRender = md.renderer.rules.text || function (tokens, idx) {
      return tokens[idx].content;
    };

    const assetBase = 'https://ale-psych-crew.github.io/ALEPsych-Docs/assets/emojis/';

    md.renderer.rules.text = function (tokens, idx, options, env, self) {
      let content = defaultRender(tokens, idx, options, env, self);

      content = content.replace(/:([a-zA-Z0-9_]+):/g, (match, name) => {
        if (emojis.includes(name)) {
          return `<img src="${assetBase}${name}.png" class="emoji" alt="${name}">`;
        }
        return match;
      });

      content = content.replace(/(^|\n)-#\s*([^\n]+)/g, '$1<sub>$2</sub>');
      return content;
    };
  },

  onAfterParse(html, frontmatter = {}) {
    const author = frontmatter.author;
    const authorUrl = frontmatter.author_url || (author ? `https://github.com/${author}` : null);
    const authorAvatar = frontmatter.author_avatar || (author ? `https://github.com/${author}.png?size=64` : null);
    const lang = frontmatter.lang || 'en';

    if (!author || !authorUrl) {
      return html;
    }

    const translator = frontmatter.translator;
    const translatorUrl = frontmatter.translator_url || (translator ? `https://github.com/${translator}` : null);
    const translatorAvatar = frontmatter.translator_avatar || (translator ? `https://github.com/${translator}.png?size=64` : null);

    const byLabel = lang === 'es' ? 'Escrito por' : 'Written by';
    const trLabel = lang === 'es' ? 'Traducido por' : 'Translated by';

    const avatarHtml = authorAvatar
      ? `<a href="${authorUrl}" target="_blank" rel="noopener noreferrer"><img src="${authorAvatar}" alt="${author}" class="ale-credit-avatar"></a>`
      : '';

    const translatorAvatarHtml = translatorAvatar
      ? `<a href="${translatorUrl}" target="_blank" rel="noopener noreferrer"><img src="${translatorAvatar}" alt="${translator}" class="ale-credit-avatar ale-credit-avatar-inline"></a>`
      : '';

    const translatorHtml = translator && translatorUrl
      ? `<span class="ale-credit-sep">•</span><span class="ale-credit-inline">${translatorAvatarHtml}<span>${trLabel} <a href="${translatorUrl}" target="_blank" rel="noopener noreferrer">${translator}</a></span></span>`
      : '';

    const creditHtml = `
<section class="ale-page-credit" aria-label="page credits">
  ${avatarHtml}
  <div class="ale-page-credit-text">
    <span>${byLabel} <a href="${authorUrl}" target="_blank" rel="noopener noreferrer">${author}</a></span>
    ${translatorHtml}
  </div>
</section>`;

    return `${html}${creditHtml}`;
  },

  generateScripts() {
    return {
      bodyScriptsHtml: `
<style>
.ale-page-credit {
  margin-top: 2rem;
  padding-top: 0.85rem;
  border-top: 1px solid color-mix(in srgb, currentColor 20%, transparent);
  display: flex;
  align-items: center;
  gap: 0.6rem;
  opacity: 0.9;
  font-size: 0.9rem;
}
.ale-credit-avatar {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  display: block;
}
.ale-page-credit-text {
  display: flex;
  gap: 0.45rem;
  flex-wrap: wrap;
  align-items: center;
  line-height: 1.25;
}
.ale-page-credit-text > span { display: inline-flex; align-items: center; }
.ale-credit-inline { display: inline-flex; align-items: center; gap: 0.4rem; }
.ale-credit-avatar-inline { width: 22px; height: 22px; }
.ale-credit-sep { opacity: 0.6; }

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
.ale-bottom-nav button .ale-sub { opacity: 0.92; font-size: 0.76rem; display: block; margin-top: 0.15rem; }
@media (max-width: 720px) {
  .ale-bottom-nav { flex-direction: column; }
}
</style>
<script>
(function () {
  function mkButton(label, href, subLabel, disabled) {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.innerHTML = subLabel ? (label + '<span class="ale-sub">' + subLabel + '</span>') : label;
    if (disabled || !href) {
      btn.disabled = true;
      return btn;
    }
    btn.addEventListener('click', function () { window.location.href = href; });
    return btn;
  }

  function buildBottomNav() {
    const old = document.querySelector('.ale-bottom-nav');
    if (old) old.remove();

    const prev = document.querySelector('a[rel="prev"]') || document.querySelector('link[rel="prev"]');
    const next = document.querySelector('a[rel="next"]') || document.querySelector('link[rel="next"]');

    const prevHref = prev ? (prev.getAttribute('href') || prev.href) : null;
    const nextHref = next ? (next.getAttribute('href') || next.href) : null;

    const lang = document.documentElement.lang || '';
    const isEs = lang.toLowerCase().startsWith('es');

    const prevLabel = isEs ? 'Página anterior' : 'Previous page';
    const nextLabel = isEs ? 'Página siguiente' : 'Next page';

    const wrap = document.createElement('div');
    wrap.className = 'ale-bottom-nav';
    wrap.setAttribute('aria-label', 'Page navigation');

    wrap.appendChild(mkButton('← ' + prevLabel, prevHref, null, !prevHref));
    wrap.appendChild(mkButton(nextLabel + ' →', nextHref, null, !nextHref));

    const anchor = document.querySelector('.ale-page-credit');
    if (anchor && anchor.parentNode) {
      anchor.parentNode.insertBefore(wrap, anchor);
      return;
    }
    const content = document.querySelector('main') || document.body;
    content.appendChild(wrap);
  }

  window.addEventListener('load', buildBottomNav);
  document.addEventListener('DOMContentLoaded', buildBottomNav);
})();
</script>`
    };
  }
};
