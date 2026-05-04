const emojiSubtext = require('./ale/emoji-subtext');
const credits = require('./ale/credits');
const bottomNav = require('./ale/bottom-nav');

function concatHtml(parts) {
  return parts.filter(Boolean).join('\n');
}

module.exports = {
  plugin: {
    name: 'ale-markdown-suite',
    version: '2.0.0',
    capabilities: ['markdown', 'build', 'body']
  },

  markdownSetup(md, options) {
    if (typeof emojiSubtext.markdownSetup === 'function') {
      emojiSubtext.markdownSetup(md, options);
    }
  },

  onAfterParse(html, frontmatter) {
    if (typeof credits.onAfterParse === 'function') {
      return credits.onAfterParse(html, frontmatter);
    }
    return html;
  },

  generateScripts(config, options) {
    const scripts = [];

    if (typeof credits.generateScripts === 'function') {
      const out = credits.generateScripts(config, options);
      scripts.push(out && out.bodyScriptsHtml ? out.bodyScriptsHtml : '');
    }

    if (typeof bottomNav.generateScripts === 'function') {
      const out = bottomNav.generateScripts(config, options);
      scripts.push(out && out.bodyScriptsHtml ? out.bodyScriptsHtml : '');
    }

    return {
      bodyScriptsHtml: concatHtml(scripts)
    };
  }
};
