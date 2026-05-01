const { defineConfig } = require('@docmd/core');

module.exports = defineConfig({
  title: 'ALEPsych Docs',
  src: 'book/src',
  out: 'site',
  theme: {
    name: 'default',
    appearance: 'dark',
    customCss: ['assets/docmd-custom.css'],
  },
  layout: {
    spa: false,
    menubar: {
      enabled: true,
      position: 'header',
      left: [
        { text: 'Home', url: '/' },
        { text: 'Plugin Showcase', url: '/plugin-showcase' },
        { text: '← Back to main site', url: 'https://alepsych.gamer.gd/' },
      ],
    },
    header: {
      enabled: true,
    },
    sidebar: {
      collapsible: true,
      defaultCollapsed: false,
    },
    footer: {
      style: 'minimal',
    },
  },
  navigation: [
    { title: 'Home', path: '/', icon: 'home' },
    { title: 'Plugin Showcase', path: '/plugin-showcase', icon: 'wand' },
  ],
});
