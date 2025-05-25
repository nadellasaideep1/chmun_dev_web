        function showLetter() {
            const principalLetter = document.getElementById('principalLetter');
            const secretaryLetter = document.getElementById('secretaryLetter');
            principalLetter.style.display = 'block';
            secretaryLetter.style.display = 'block';
            document.body.style.overflow = 'auto';
            principalLetter.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }