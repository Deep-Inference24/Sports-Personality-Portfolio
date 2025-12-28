const dot = document.querySelector('.cursor-dot');
const outline = document.querySelector('.cursor-outline');

// Cursor Movement
document.addEventListener('mousemove', (e) => {
    dot.style.left = e.clientX + 'px';
    dot.style.top = e.clientY + 'px';
    outline.style.left = e.clientX + 'px';
    outline.style.top = e.clientY + 'px';
});

// Cursor Interactions - works on modal close button too
const applyHoverEffect = () => {
    document.querySelectorAll('.hover-target, .row-clickable, .view-btn').forEach(item => {
        item.addEventListener('mouseenter', () => {
            outline.style.transform = 'translate(-50%, -50%) scale(1.8)';
            outline.style.background = 'rgba(197, 160, 89, 0.1)';
        });
        item.addEventListener('mouseleave', () => {
            outline.style.transform = 'translate(-50%, -50%) scale(1)';
            outline.style.background = 'transparent';
        });
    });
};
applyHoverEffect();

// Counter logic for personal bests
const countStats = () => {
    document.querySelectorAll('.count').forEach(c => {
        const target = parseFloat(c.getAttribute('data-target'));
        let current = 0;
        const inc = target / 100;
        const update = () => {
            current += inc;
            if (current < target) {
                c.innerText = target % 1 !== 0 ? current.toFixed(2) : Math.floor(current);
                requestAnimationFrame(update);
            } else { c.innerText = target; }
        };
        update();
    });
};

const observer = new IntersectionObserver(entries => {
    if(entries[0].isIntersecting) { countStats(); observer.disconnect(); }
}, { threshold: 0.5 });
if(document.querySelector('#stats')) observer.observe(document.querySelector('#stats'));

// Details Content
const data = {
    '2016': { t: "WORLD U20 RECORD", d: "A historic 86.48m throw in Bydgoszcz, Poland. Neeraj became the first Indian to hold a world record in track and field." },
    '2021': { t: "TOKYO OLYMPIC GOLD", d: "With a second-round throw of 87.58m, he secured India's first ever track and field Olympic Gold medal." },
    '2023': { t: "WORLD CHAMPION", d: "Secured Gold at the World Athletics Championships in Budapest with a throw of 88.17m." }
};

window.openModal = (yr) => {
    const modal = document.getElementById('detailsModal');
    const body = document.getElementById('modalBody');
    body.innerHTML = `<h1 style="color:#C5A059; font-family:Syncopate; font-size:3rem; margin-bottom:30px;">${data[yr].t}</h1><p style="font-size:1.4rem; line-height:1.6; font-weight:300;">${data[yr].d}</p>`;
    modal.style.display = "block";
    applyHoverEffect(); // Re-apply to ensure close button reacts
};

window.closeModal = () => document.getElementById('detailsModal').style.display = "none";
window.onclick = (e) => { if (e.target.id === 'detailsModal') closeModal(); };
