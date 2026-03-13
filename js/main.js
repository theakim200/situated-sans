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
const embodyCaptions = ["A recording of a conversation with a friend using Em:body Typing", "Responsive phrases that reveal the writer's state and emotions", "A screenshot of the moment of sending a group text to multiple people", "Development process and debugging"];

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
    'Ocean Mist releases a piece of driftwood found at the Ocean Mist Bar back into Narragansett Bay, sealed with a GPS tracker. As it moves with the current, its position is logged and rendered as an evolving map on a live website. When the driftwood is gone, the site remains as an archive of that time. Gaps in the data, where the wood drifts beyond signal range, are part of the work. — by Faith Kim',
    'Ocean Mist releases a piece of driftwood found at the Ocean Mist Bar back into Narragansett Bay, sealed with a GPS tracker. As it moves with the current, its position is logged and rendered as an evolving map on a live website. When the driftwood is gone, the site remains as an archive of that time. Gaps in the data, where the wood drifts beyond signal range, are part of the work. \n— by Faith Kim @fk.88888',
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