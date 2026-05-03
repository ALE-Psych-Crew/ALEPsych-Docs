export default {
	markdownSetup(md) {
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
			'trollface'
		];

		const basePath = '/assets/emojis/';

		const defaultRender = md.renderer.rules.text || function (tokens, idx) {
			return tokens[idx].content;
		};

		md.renderer.rules.text = function (tokens, idx, options, env, self) {
			let content = defaultRender(tokens, idx, options, env, self);

			content = content.replace(/:([a-zA-Z0-9_]+):/g, (match, name) => {
				if (emojis.includes(name))
					return `<img src="${basePath}${name}.png" class="emoji" alt="${name}">`;

				return match;
			});

			return content;
		};
	}
};