document.addEventListener("DOMContentLoaded", function() {
    const lines = document.querySelectorAll('.code-line');
    let delay = 0;

    function startTypingAnimation() {
        lines.forEach((line, index) => {
            const textContent = line.textContent.trim(); // Récupère le contenu de la ligne

            if (textContent.length > 0) { // Si la ligne contient du texte
                // Calcule la largeur que prendra le texte pour ajuster l'animation
                const textWidth = `${line.scrollWidth}px`; // Utilise scrollWidth pour obtenir la largeur du texte
                line.style.width = textWidth; // Ajuste la largeur pour correspondre à la taille du texte

                setTimeout(() => {
                    line.classList.remove('finished'); // Enlève la classe 'finished' si elle existe
                    line.classList.add('active'); // Ajoute la classe 'active' pour lancer l'animation

                    // Après l'animation, on retire le curseur clignotant
                    setTimeout(() => {
                        line.classList.add('finished'); // Ajoute la classe 'finished' pour retirer le curseur
                    }, 2000); // Correspond à la durée de l'animation CSS typewriter (2s ici)

                }, delay);
                delay += 2000; // Délai entre chaque ligne qui a du texte
            }
        });

        // Redémarre l'animation après que toutes les lignes animées sont terminées
        setTimeout(() => {
            lines.forEach(line => {
                line.classList.remove('active', 'finished'); // Réinitialise les lignes
                line.style.width = '0'; // Remet la largeur à 0 pour réanimer à chaque boucle
            });
            delay = 0; // Réinitialise le délai
            startTypingAnimation(); // Redémarre l'animation
        }, delay + 2000); // Ajoute un délai après la dernière ligne avant de redémarrer
    }

    startTypingAnimation(); // Démarre l'animation pour la première fois
});
