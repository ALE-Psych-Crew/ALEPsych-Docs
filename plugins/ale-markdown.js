module.exports = {
  plugin: {
    name: 'ale-markdown',
    version: '1.1.0',
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
    const authorUrl = frontmatter.author_url;
    const authorAvatar = frontmatter.author_avatar || (author ? `https://github.com/${author}.png?size=64` : null);
    const lang = frontmatter.lang || 'en';

    if (!author || !authorUrl) {
      return html;
    }

    const translator = frontmatter.translator;
    const translatorUrl = frontmatter.translator_url;
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

.ale-sticky-pager {
  position: fixed;
  right: 16px;
  bottom: 16px;
  display: flex;
  gap: 8px;
  z-index: 999;
}
.ale-sticky-pager a,
.ale-sticky-pager span {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 94px;
  padding: 8px 10px;
  border-radius: 10px;
  border: 1px solid color-mix(in srgb, currentColor 22%, transparent);
  background: color-mix(in srgb, var(--docmd-bg, #fff) 88%, transparent);
  backdrop-filter: blur(6px);
  text-decoration: none;
  font-size: 0.82rem;
}
.ale-sticky-pager span { opacity: 0.45; cursor: not-allowed; }
@media (max-width: 720px) {
  .ale-sticky-pager { left: 12px; right: 12px; bottom: 12px; }
  .ale-sticky-pager a, .ale-sticky-pager span { flex: 1; min-width: 0; }
}
</style>
<script>
(function () {
  function mk(label, href) {
    if (!href) {
      const s = document.createElement('span');
      s.textContent = label;
      return s;
    }
    const a = document.createElement('a');
    a.href = href;
    a.textContent = label;
    return a;
  }

  function buildPager() {
    const old = document.querySelector('.ale-sticky-pager');
    if (old) old.remove();

    const prev = document.querySelector('a[rel="prev"]');
    const next = document.querySelector('a[rel="next"]');

    const wrap = document.createElement('nav');
    wrap.className = 'ale-sticky-pager';
    wrap.setAttribute('aria-label', 'Page navigation');

    wrap.appendChild(mk('← Previous', prev ? prev.getAttribute('href') : null));
    wrap.appendChild(mk('Next →', next ? next.getAttribute('href') : null));

    document.body.appendChild(wrap);
  }

  window.addEventListener('load', buildPager);
  document.addEventListener('DOMContentLoaded', buildPager);
})();
</script>`
    };
  }
};
