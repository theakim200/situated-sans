const menuBtns = document.querySelectorAll('.menu-btn');
const hoverImgContainer = document.getElementById('hover-image-container');
const hoverImg = document.getElementById('hover-image');

const hoverStyles = {
    info:     { ital: 57, wdth: 37,  wght: 150 },
    try:      { ital: 50, wdth: 80,  wght: 76  },
    embody:   { ital: 44, wdth: 40,  wght: 150 },
    inuse:    { ital: 50, wdth: 21,  wght: 150 },
    research: { ital: 46, wdth: 40,  wght: 60  },
    download: { ital: 50, wdth: 50,  wght: 60  },
    credits:  { ital: 50, wdth: 100, wght: 60  },
};

menuBtns.forEach(btn => {
    const id = btn.dataset.section;
    const style = hoverStyles[id];
    const color = btn.dataset.color;
    const imgSrc = btn.dataset.img;
    const imgWidth = btn.dataset.imgWidth;

    btn.addEventListener('mouseenter', () => {
        btn.style.background = color;
        btn.style.borderRadius = '33px';
        btn.style.fontVariationSettings = `'ital' ${style.ital}, 'wdth' ${style.wdth}, 'wght' ${style.wght}`;

        hoverImg.src = imgSrc;
        hoverImg.style.width = imgWidth + 'vw';
        hoverImgContainer.style.display = 'block';

            // try 섹션 활성화 상태일 때만 multiply
            if (id === 'try' && document.querySelector('.menu-btn[data-section="try"]').classList.contains('active')) {
                hoverImgContainer.style.mixBlendMode = 'multiply';
            } else {
                hoverImgContainer.style.mixBlendMode = 'normal';
            }
            
            hoverImgContainer.style.display = 'block';
    });

    btn.addEventListener('mouseleave', () => {
        if (!btn.classList.contains('active')) {
            btn.style.background = '';
            btn.style.borderRadius = '';
            btn.style.fontVariationSettings = '';
        }
        hoverImgContainer.style.display = 'none';
    });

    btn.addEventListener('click', () => {
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    });
});

const sections = document.querySelectorAll('section[id]');

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.id;
            const color = entry.target.dataset.color;

            menuBtns.forEach(btn => {
                if (btn.dataset.section === id) {
                    btn.classList.add('active');
                    btn.style.background = btn.dataset.color;
                    btn.style.borderRadius = '33px';
                    btn.style.fontVariationSettings = `'ital' ${hoverStyles[id].ital}, 'wdth' ${hoverStyles[id].wdth}, 'wght' ${hoverStyles[id].wght}`;
                } else {
                    btn.classList.remove('active');
                    btn.style.background = '';
                    btn.style.borderRadius = '';
                    btn.style.fontVariationSettings = '';
                }
            });
        }
    });
}, { threshold: 0.5 });

sections.forEach(s => sectionObserver.observe(s));