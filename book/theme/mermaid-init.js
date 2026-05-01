window.addEventListener("load", () => {
  if (!window.mermaid) return;

  window.mermaid.initialize({
    startOnLoad: true,
    theme: "dark",
    securityLevel: "loose",
  });
});
