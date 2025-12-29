const dot = document.querySelector('.cursor-dot');
const outline = document.querySelector('.cursor-outline');

window.addEventListener('mousemove', (e) => {
    dot.style.left = e.clientX + 'px';
    dot.style.top = e.clientY + 'px';
    setTimeout(() => {
        outline.style.left = e.clientX + 'px';
        outline.style.top = e.clientY + 'px';
    }, 50);
});

// HOVER EFFECT FOR ACHIEVEMENTS
document.querySelectorAll('.row-clickable').forEach(row => {
    row.onmouseenter = () => { outline.classList.add('active'); outline.style.width = '80px'; outline.style.height = '80px'; };
    row.onmouseleave = () => { outline.classList.remove('active'); outline.style.width = '45px'; outline.style.height = '45px'; };
});

// COUNTER METER
const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
    const target = +counter.getAttribute('data-target');
    let current = 0;
    const update = () => {
        if (current < target) {
            current += target / 60;
            counter.innerText = target % 1 === 0 ? Math.ceil(current) : current.toFixed(2);
            requestAnimationFrame(update);
        } else { counter.innerText = target; }
    };
    update();
});

// MODALS
const info = {
    'tokyo': { t: "TOKYO 2021", b: "The historic Gold that ended India's 100-year wait for a track and field medal." },
    'budapest': { t: "WORLD CHAMPIONSHIPS 2023", b: "Neeraj became the first Indian to win a World Championship Gold with an 88.17m throw." },
    'paris': { t: "PARIS 2024", b: "A massive season-best throw of 89.45m secured consecutive Olympic medals for India." },
    'diamond': { t: "DIAMOND LEAGUE TROPHY", b: "The first Indian to ever lift the Diamond League Trophy in Zurich." }
};

window.openModal = (id) => {
    document.getElementById('modalBody').innerHTML = `<h2 style="color:#C5A059; font-family:Syncopate;">${info[id].t}</h2><p style="margin-top:20px; line-height:1.6;">${info[id].b}</p>`;
    document.getElementById('detailsModal').style.display = "block";
};
window.closeModal = () => document.getElementById('detailsModal').style.display = "none";
