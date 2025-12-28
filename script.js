// 1. STAT COUNTER
const countNumbers = () => {
    const counters = document.querySelectorAll('.count');
    counters.forEach(counter => {
        const target = parseFloat(counter.getAttribute('data-target'));
        const duration = 2000;
        let startTime = null;
        const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            const value = progress * target;
            counter.innerText = target % 1 !== 0 ? value.toFixed(2) : Math.floor(value);
            if (progress < 1) requestAnimationFrame(animate);
            else counter.innerText = target;
        };
        requestAnimationFrame(animate);
    });
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) { countNumbers(); observer.unobserve(entry.target); }
    });
}, { threshold: 0.5 });
document.querySelectorAll('#stats').forEach(s => observer.observe(s));

// 2. MODAL LOGIC
const eventData = {
    '2016': { title: "2016 World U20 Record", info: "86.48m throw in Poland. First Indian to set a world record in athletics." },
    '2021': { title: "2021 Tokyo Olympic Gold", info: "87.58m throw. Historic first track and field Gold for India." },
    '2023': { title: "2023 World Champion", info: "88.17m in Budapest. Became the reigning World Champion." }
};

window.openModal = function(year) {
    const data = eventData[year];
    document.getElementById('modalBody').innerHTML = `<h2>${data.title}</h2><p style="margin-top:20px">${data.info}</p>`;
    document.getElementById('detailsModal').style.display = "block";
};

window.closeModal = function() {
    document.getElementById('detailsModal').style.display = "none";
};
