(function () {
  if (typeof document === 'undefined') return;

  var root = (window.DOCMD_ROOT || './');
  if (!root.endsWith('/')) root += '/';

  function upsertLink(rel, href, sizes) {
    var selector = 'link[rel="' + rel + '"]' + (sizes ? '[sizes="' + sizes + '"]' : '');
    var link = document.head.querySelector(selector);
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', rel);
      if (sizes) link.setAttribute('sizes', sizes);
      document.head.appendChild(link);
    }
    link.setAttribute('href', href);
  }

  upsertLink('icon', root + 'assets/icons/favicon-16.png', '16x16');
  upsertLink('icon', root + 'assets/icons/favicon-32.png', '32x32');
  upsertLink('apple-touch-icon', root + 'assets/icons/apple-touch-icon.png');

  var manifest = document.head.querySelector('link[rel="manifest"]');
  if (!manifest) {
    manifest = document.createElement('link');
    manifest.setAttribute('rel', 'manifest');
    document.head.appendChild(manifest);
  }
  manifest.setAttribute('href', root + 'assets/icons/site.webmanifest');
})();