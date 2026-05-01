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
    { title: 'English Home', path: '/', icon: 'home' },
    { title: 'English Plugin Showcase', path: '/plugin-showcase', icon: 'wand' },
    { title: 'Inicio (ES)', path: '/es/', icon: 'languages' },
    { title: 'Vitrina de Plugins (ES)', path: '/es/plugin-showcase', icon: 'wand' },
  ],
  i18n: {
    default: 'en',
    // Use locale-specific source directories under book/src (en, es)
    // so routes are explicit and stable at /en/* and /es/*.
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
          previous: 'Previous',
          next: 'Next',
          selectLanguage: 'Select language',
          selectVersion: 'Select version',
          editThisPage: 'Edit this page',
          copyCode: 'Copy code',
          copiedToClipboard: 'Copied to clipboard',
          fallbackMessage: 'This page is not available in your selected language yet.',
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
          previous: 'Anterior',
          next: 'Siguiente',
          selectLanguage: 'Seleccionar idioma',
          selectVersion: 'Seleccionar versión',
          editThisPage: 'Editar esta página',
          copyCode: 'Copiar código',
          copiedToClipboard: 'Copiado al portapapeles',
          fallbackMessage: 'Esta página todavía no está disponible en el idioma seleccionado.',
          onThisPage: 'En esta página',
          builtWith: 'Desarrollado con',
          pageNotFound: 'Página no encontrada',
        },
      },
    ],
  },
});
