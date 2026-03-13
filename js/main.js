const galleryBtns = document.querySelectorAll('.gallery-btn');
const galleryImgs = document.querySelectorAll('.gallery-img');
const captionEl = document.getElementById('gallery-caption');

const captions = ["A doctor's first fee note from 1953", "Female office worker September 1936 1930s Electric typewriter", "USB Typewriter Replaces the Keyboard in Your PC", "Apple keyboards M0110", "iPhone virtual keyboard"];

galleryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const idx = parseInt(btn.dataset.index);
        galleryBtns.forEach(b => b.classList.remove('active'));
        galleryImgs.forEach(i => i.classList.remove('active'));
        btn.classList.add('active');
        galleryImgs[idx].classList.add('active');
        captionEl.textContent = captions[idx];
    });
});

const embodyGalleryBtns = document.querySelectorAll('.embody-gallery-btn');
const embodyGalleryImgs = document.querySelectorAll('.embody-gallery-img');
const embodyCaption = document.getElementById('embody-gallery-caption');
const embodyCaptions = ['Caption 1', 'Caption 2', 'Caption 3', 'Caption 4', 'Caption 5'];

embodyGalleryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const idx = parseInt(btn.dataset.index);
        embodyGalleryBtns.forEach(b => b.classList.remove('active'));
        embodyGalleryImgs.forEach(i => i.classList.remove('active'));
        btn.classList.add('active');
        embodyGalleryImgs[idx].classList.add('active');
        embodyCaption.textContent = embodyCaptions[idx];
    });
});

const inuseItems = document.querySelectorAll('.inuse-item');
const inuseTexts = [
    'Digital typing has become uniform, fast, efficient, but also disembodied. Every keystroke produces identical letters, erasing the physical presence of the writer. Situated Sans challenges this reproducibility. What if digital text could carry traces of your body? Your posture, your breathing, your rhythm, your physical state in space and time?',
    'Digital typing has become uniform, fast, efficient, but also disembodied. Every keystroke produces identical letters, erasing the physical presence of the writer. Situated Sans challenges this reproducibility. What if digital text could carry traces of your body? Your posture, your breathing, your rhythm, your physical state in space and time?',
    'Digital typing has become uniform, fast, efficient, but also disembodied. Every keystroke produces identical letters, erasing the physical presence of the writer. Situated Sans challenges this reproducibility. What if digital text could carry traces of your body? Your posture, your breathing, your rhythm, your physical state in space and time?',
];

inuseItems.forEach((item, i) => {
    const btn = item.querySelector('.inuse-more');
    const original = '•••';
    
    item.addEventListener('mouseenter', () => {
        btn.addEventListener('transitionend', () => {
            btn.textContent = inuseTexts[i];
        }, { once: true });
    });
    
    item.addEventListener('mouseleave', () => {
        btn.textContent = original;
    });
});

// Research
const researchGalleryBtns = document.querySelectorAll('.research-gallery-btn');
const researchGalleryImgs = document.querySelectorAll('.research-gallery-img');
const researchCaption = document.getElementById('research-gallery-caption');
const researchCaptions = ['Caption 1', 'Caption 2', 'Caption 3', 'Caption 4', 'Caption 5'];

researchGalleryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const idx = parseInt(btn.dataset.index);
        researchGalleryBtns.forEach(b => b.classList.remove('active'));
        researchGalleryImgs.forEach(i => i.classList.remove('active'));
        btn.classList.add('active');
        researchGalleryImgs[idx].classList.add('active');
        researchCaption.textContent = researchCaptions[idx];
    });
});

// Download
document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const code = document.getElementById(btn.dataset.target).textContent;
        navigator.clipboard.writeText(code).then(() => {
            const img = btn.querySelector('img');
            img.style.opacity = '0.4';
            setTimeout(() => img.style.opacity = '1', 1500);
        });
    });
});