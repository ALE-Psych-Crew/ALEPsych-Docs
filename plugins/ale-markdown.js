module.exports = {
  plugin: {
    name: 'ale-markdown',
    version: '1.0.0',
    capabilities: ['markdown']
  },
  markdownSetup(md, pluginOptions = {}) {
    const emojis = [
      'alejito',
      'aySi',
      'calvinEnojao',
      'calvinPlan',
      'jonk',
      'meVoid',
      'ommmHD',
      'semmi',
      'thx',
      'trollface',
      'blobCookie',
      'gentleBlob',
      'qdijiste',
      'queHasDicho'
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
  }
};
