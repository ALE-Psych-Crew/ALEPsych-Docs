const { defineConfig } = require('@docmd/core');

module.exports = defineConfig({
  title: 'ALE Psych Docs',
  url: 'https://ale-psych-crew.github.io/ALEPsych-Docs',
  src: 'book/src',
  out: 'site',
  logo: {
    light: 'assets/ale-psych-logo-light.png',
    dark: 'assets/ale-psych-logo-dark.png',
    alt: 'ALE Psych',
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
    { title: 'English Home', path: '/en/', icon: 'home' },
    { title: 'English Plugin Showcase', path: '/en/plugin-showcase', icon: 'wand' },
    { title: 'Inicio (ES)', path: '/es/', icon: 'languages' },
    { title: 'Demostración de Plugins (ES)', path: '/es/plugin-showcase', icon: 'wand' },
  ],
  i18n: {
    default: 'en',
    inPlace: true,
    stringMode: false,
    locales: [
      {
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
      },
      {
        id: 'es',
        label: 'Español',
        translations: {
          skipToContent: 'Saltar al contenido',
          mainNavigation: 'Navegación principal',
          toggleSidebar: 'Alternar barra lateral',
          search: 'Buscar',
          toggleTheme: 'Cambiar tema',
          onThisPage: 'En esta página',
          builtWith: 'Desarrollado con',
          pageNotFound: 'Página no encontrada',
        },
      },
    ],
  },
});
