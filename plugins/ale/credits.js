module.exports = {
  plugin: {
    name: 'ale-page-credits',
    version: '1.0.0',
    capabilities: ['build', 'body']
  },

  onAfterParse(html, frontmatter = {}) {
    const author = frontmatter.author;
    if (!author) return html;

    const lang = frontmatter.lang === 'es' ? 'es' : 'en';

    const authorUrl = frontmatter.author_url || `https://github.com/${author}`;
    const authorAvatar = frontmatter.author_avatar || `https://github.com/${author}.png?size=64`;

    const translator = frontmatter.translator;
    const translatorUrl = translator ? (frontmatter.translator_url || `https://github.com/${translator}`) : null;
    const translatorAvatar = translator ? (frontmatter.translator_avatar || `https://github.com/${translator}.png?size=64`) : null;

    const byLabel = lang === 'es' ? 'Escrito por' : 'Written by';
    const trLabel = lang === 'es' ? 'Traducido por' : 'Translated by';

    const authorHtml = `
      <a href="${authorUrl}" target="_blank" rel="noopener noreferrer">
        <img src="${authorAvatar}" alt="${author}" class="ale-credit-avatar">
      </a>
      <span>${byLabel} <a href="${authorUrl}" target="_blank" rel="noopener noreferrer">${author}</a></span>
    `;

    const translatorHtml = translator && translatorUrl
      ? `
      <span class="ale-credit-sep">&bull;</span>
      <span class="ale-credit-inline">
        <a href="${translatorUrl}" target="_blank" rel="noopener noreferrer">
          <img src="${translatorAvatar}" alt="${translator}" class="ale-credit-avatar ale-credit-avatar-inline">
        </a>
        <span>${trLabel} <a href="${translatorUrl}" target="_blank" rel="noopener noreferrer">${translator}</a></span>
      </span>`
      : '';

    const creditHtml = `
<section class="ale-page-credit" aria-label="page credits">
  <div class="ale-page-credit-text">${authorHtml}${translatorHtml}</div>
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
  opacity: 0.9;
  font-size: 0.9rem;
}
.ale-page-credit-text {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.45rem;
  line-height: 1.25;
}
.ale-credit-avatar {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: block;
}
.ale-credit-avatar-inline { width: 20px; height: 20px; }
.ale-credit-inline {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
}
.ale-credit-sep { opacity: 0.6; }
</style>`
    };
  }
};
