(function() {
    const heroTitle = document.getElementById('hero-title');
    const heroSection = document.getElementById('hero');
    const popup = document.getElementById('hero-popup');
    const popupClose = document.getElementById('hero-popup-close');
    const popupText = document.getElementById('hero-popup-text');

    let hWght = 83, hWdth = 0, hItal = 50;

    function applyFont() {
        heroTitle.style.fontVariationSettings = `'wght' ${hWght}, 'wdth' ${hWdth}, 'ital' ${hItal}`;
    }

    if (isMobile) {
        // 팝업 멘트 변경
        popupText.innerHTML = 'You are on mobile!<br>Tilt your device and press the screen.';

        // Orientation → ital
        window.addEventListener('deviceorientation', (e) => {
            if (e.gamma !== null) {
                hItal = Math.min(100, Math.max(0, ((e.gamma + 90) / 180) * 100));
                applyFont();
            }
        });

        // Touch pressure → wght
        heroSection.addEventListener('touchstart', (e) => {
            const touch = e.touches[0];
            const r = (touch.radiusX + touch.radiusY) / 2;
            hWght = Math.min(150, Math.max(60, 60 + ((r - 20) / 30) * 90));
            applyFont();
        }, { passive: true });

        heroSection.addEventListener('touchend', () => {
            hWght = 83;
            applyFont();
        });

    } else {
        // 팝업 멘트
        popupText.innerHTML = 'You are on desktop!<br>Move the mouse, click randomly,<br>and move the cursor toward and away from the text.';

        function onMouseMove(e) {
            const cx = window.innerWidth / 2;
            const cy = window.innerHeight / 2;

            hItal = (e.clientX / window.innerWidth) * 100;

            const distY = Math.abs(e.clientY - cy);
            hWght = Math.min(150, Math.max(60, 60 + (distY / cy) * 90));

            const dist = Math.sqrt((e.clientX - cx) ** 2 + (e.clientY - cy) ** 2);
            const maxDist = Math.sqrt(cx ** 2 + cy ** 2);
            hWdth = Math.min(100, (dist / maxDist) * 100);

            applyFont();
        }

        function onMouseLeave() {
            hWght = 83; hWdth = 0; hItal = 50;
            applyFont();
        }

        const heroObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    window.addEventListener('mousemove', onMouseMove);
                    window.addEventListener('mouseleave', onMouseLeave);
                } else {
                    window.removeEventListener('mousemove', onMouseMove);
                    window.removeEventListener('mouseleave', onMouseLeave);
                }
            });
        }, { threshold: 0.1 });

        heroObserver.observe(heroSection);
    }

    popupClose.addEventListener('click', () => {
        popup.style.display = 'none';
    });
})();