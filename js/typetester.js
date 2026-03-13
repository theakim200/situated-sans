(function() {
    const tryDisplay = document.getElementById('try-display');
    const sliders = [
        { slider: document.getElementById('slider-slant'),  handle: document.getElementById('handle-slant'),  axis: 'ital' },
        { slider: document.getElementById('slider-width'),  handle: document.getElementById('handle-width'),  axis: 'wdth' },
        { slider: document.getElementById('slider-weight'), handle: document.getElementById('handle-weight'), axis: 'wght' },
    ];

    let vals = { ital: 50, wdth: 45, wght: 83 };

    function updateHandle(handle, slider) {
        const pct = (slider.value - slider.min) / (slider.max - slider.min);
        const trackWidth = slider.parentElement.offsetWidth;
        handle.style.left = (pct * trackWidth) + 'px';
        handle.textContent = Math.round(slider.value);
    }

    function applyTryFont() {
        tryDisplay.style.fontVariationSettings = `'wght' ${vals.wght}, 'wdth' ${vals.wdth}, 'ital' ${vals.ital}`;
    }

    sliders.forEach(({ slider, handle, axis }) => {
        updateHandle(handle, slider);
        slider.addEventListener('input', () => {
            vals[axis] = parseFloat(slider.value);
            updateHandle(handle, slider);
            applyTryFont();
        });
    });
})();