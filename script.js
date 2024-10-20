<script>
  function adjustFontSize(element) {
    const parent = element.parentElement;
    let fontSize = parseFloat(window.getComputedStyle(element).fontSize);
    const parentWidth = parent.offsetWidth;
    const elementWidth = element.scrollWidth;

    // Réduire la taille du texte tant qu'il dépasse la largeur de son conteneur
    while (elementWidth > parentWidth && fontSize > 0.5) {
      fontSize -= 0.1; // Réduit progressivement la taille du texte
      element.style.fontSize = fontSize + 'rem';
    }
  }

  // Appliquer la fonction à chaque .code-line
  document.querySelectorAll('.code-line').forEach(function(el) {
    adjustFontSize(el);
  });
</script>
