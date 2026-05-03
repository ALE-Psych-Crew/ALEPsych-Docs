const { defineConfig } = require('@docmd/core');

module.exports = defineConfig({
  title: 'ALE Psych Docs',
  url: 'https://ale-psych-crew.github.io/ALEPsych-Docs',
  base: '/ALEPsych-Docs/',
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
  customJs: ['assets/favicons.js'],
  layout: {
    spa: false,
    menubar: {
      enabled: true,
      position: 'header',
      left: [
        {
          text: 'Back to main site',
          url: 'https://ale-psych-crew.github.io/ALE-Psych-Site/',
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
  i18n: {
    default: 'en',
    position: 'options-menu',
    stringMode: false,
    inPlace: false,
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
