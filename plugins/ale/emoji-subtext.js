const EMOJIS = new Set([
  'alejito', 'aySi', 'calvinEnojao', 'calvinPlan', 'jonk', 'meVoid',
  'ommmHD', 'semmi', 'thx', 'trollface', 'blobCookie', 'gentleBlob',
  'qdijiste', 'queHasDicho'
]);

const EMOJI_BASE = 'https://ale-psych-crew.github.io/ALEPsych-Docs/assets/emojis/';

module.exports = {
  plugin: {
    name: 'ale-emoji-subtext',
    version: '1.0.0',
    capabilities: ['markdown']
  },

  markdownSetup(md) {
    const defaultRender = md.renderer.rules.text || function (tokens, idx) {
      return tokens[idx].content;
    };

    md.renderer.rules.text = function (tokens, idx, options, env, self) {
      let content = defaultRender(tokens, idx, options, env, self);

      content = content.replace(/:([a-zA-Z0-9_]+):/g, (match, name) => {
        if (!EMOJIS.has(name)) return match;
        return `<img src="${EMOJI_BASE}${name}.png" class="emoji" alt="${name}">`;
      });

      // Keep legacy -# side-note shorthand from old docs.
      content = content.replace(/(^|\n)-#\s*([^\n]+)/g, '$1<sub>$2</sub>');
      return content;
    };
  }
};
