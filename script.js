// 1. Cursor Dot
document.addEventListener('mousemove', (e) => {
    const dot = document.querySelector('.cursor-dot');
    if(dot) { dot.style.left = e.clientX + 'px'; dot.style.top = e.clientY + 'px'; }
});

// 2. Optimized Counter
const runCounters = () => {
    document.querySelectorAll('.count').forEach(c => {
        const target = parseFloat(c.getAttribute('data-target'));
        let count = 0;
        const speed = target / 100;
        const update = () => {
            count += speed;
            if (count < target) {
                c.innerText = target % 1 !== 0 ? count.toFixed(2) : Math.floor(count);
                setTimeout(update, 20);
            } else { c.innerText = target; }
        };
        update();
    });
};

// 3. Trigger Logic
const obs = new IntersectionObserver((es) => {
    es.forEach(e => { if(e.isIntersecting) { runCounters(); obs.unobserve(e.target); }});
}, { threshold: 0.1 });
const sBox = document.querySelector('#stats');
if(sBox) obs.observe(sBox);

// 4. Modal Database
const db = {
    '2016': { t: "2016 World Record", d: "First Indian to set a world record in Bydgoszcz (86.48m)." },
    '2021': { t: "2021 Tokyo Gold", d: "Historic Olympic Gold with a throw of 87.58m." },
    '2023': { t: "2023 World Champ", d: "Crowned World Champion in Budapest with 88.17m." }
};

window.openModal = (yr) => {
    document.getElementById('modalBody').innerHTML = `<h2 style="color:#C5A059">${db[yr].t}</h2><p style="margin-top:15px">${db[yr].d}</p>`;
    document.getElementById('detailsModal').style.display = "block";
};

window.closeModal = () => document.getElementById('detailsModal').style.display = "none";
