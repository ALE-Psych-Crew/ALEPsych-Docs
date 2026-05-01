const { defineConfig } = require('@docmd/core');

module.exports = defineConfig({
  title: 'ALEPsych Docs',
  url: 'https://ale-psych-crew.github.io/ALEPsych-Docs',
  src: 'book/src',
  out: 'site',
  logo: {
    light: 'assets/ale-psych-logo-dark.png',
    dark: 'assets/ale-psych-logo-light.png',
    alt: 'ALEPsych',
  },
  theme: {
    name: 'default',
    appearance: 'system',
    customCss: ['assets/docmd-custom.css'],
  },
  layout: {
    spa: false,
    menubar: {
      enabled: true,
      position: 'header',
      left: [
        {
          text: 'Back to main site',
          url: 'https://alepsych.gamer.gd/',
          className: 'back-to-main-site',
        },
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
  i18n: {
    default: 'en',
    stringMode: false,
    locales: [{
      id: 'en',
      label: 'English',
      translations: {
        skipToContent: 'Skip to content',
        mainNavigation: 'Main navigation',
        toggleSidebar: 'Toggle sidebar',
        search: 'Search',
        toggleTheme: 'Toggle theme',
        onThisPage: 'On this page',
        builtWith: 'Built with',
        pageNotFound: 'Page not found',
      },
    }],
  },
});
