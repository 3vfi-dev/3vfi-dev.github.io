document.addEventListener("DOMContentLoaded", function () {
    const lines = document.querySelectorAll('.code-line');
    let delay = 0; // Délai initial pour l'animation de la machine à écrire

    // Fonction principale pour lancer l'animation
    function startTypingAnimation() {
        lines.forEach((line, index) => {
            const textContent = line.textContent.trim(); // Récupère le contenu de la ligne
            line.textContent = ''; // Efface le contenu initial pour simuler la frappe
            
            // Création d'un curseur pour chaque ligne
            const cursor = document.createElement('span');
            cursor.classList.add('cursor');
            line.appendChild(cursor); // Ajoute le curseur à la fin de la ligne

            if (textContent.length > 0) { // Si la ligne contient du texte
                setTimeout(() => {
                    let charIndex = 0;
                    const typeChar = () => {
                        if (charIndex < textContent.length) {
                            line.textContent = textContent.slice(0, charIndex + 1); // Ajoute le texte progressivement
                            line.appendChild(cursor); // Réajoute le curseur après chaque caractère
                            charIndex++;
                            setTimeout(typeChar, 30); // 30ms entre chaque caractère
                        } else {
                            line.classList.add('finished'); // Marque la ligne comme terminée
                        }
                    };
                    typeChar();
                }, delay);

                delay += textContent.length * 100 + 1000; // Délai basé sur la longueur du texte
            }
        });

        // Quand l'animation est terminée, le curseur continue de clignoter à la fin
        setTimeout(() => {
            const lastLine = lines[lines.length - 1];
            const lastCursor = lastLine.querySelector('.cursor');
            
            // S'assurer que le curseur reste visible à la fin du texte
            lastCursor.classList.add('cursor');
            lastLine.classList.add('finished'); // Laisser la dernière ligne en "terminée" avec le curseur clignotant

            setTimeout(() => {
                lines.forEach(line => {
                    line.classList.remove('finished'); // Réinitialise les lignes
                    line.textContent = ''; // Réinitialise le texte
                });
                delay = 0; // Réinitialise le délai
                startTypingAnimation(); // Redémarre l'animation
            }, delay + 500); // Ajoute un délai avant de redémarrer
        }, delay + 500); // Ajoute un délai après la dernière ligne avant de redémarrer
    }

  startTypingAnimation(); // Démarre l'animation pour la première fois
});
