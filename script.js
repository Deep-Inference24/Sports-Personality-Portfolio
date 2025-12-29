// CURSOR
const cursor = document.getElementById('cursor-wrapper');
window.addEventListener('mousemove', (e) => {
    cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
});

// COUNTER ANIMATION (0 to Value)
const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const speed = target / 100;

        if (count < target) {
            counter.innerText = (count + speed).toFixed(2);
            setTimeout(updateCount, 20);
        } else {
            counter.innerText = target;
        }
    };
    updateCount();
});

// MODAL LOGIC
const modalData = {
    'tokyo': { title: "TOKYO 2021", body: "Neeraj won the historic Gold with a throw of 87.58m." },
    'budapest': { title: "WORLD CHAMPIONSHIPS 2023", body: "Clinched Gold with 88.17m in Hungary." }
};

window.openModal = (id) => {
    document.getElementById('modalBody').innerHTML = `
        <h2 style="color:#C5A059; font-family:Syncopate;">${modalData[id].title}</h2>
        <p style="margin-top:20px; font-size:1.2rem; line-height:1.6;">${modalData[id].body}</p>
    `;
    document.getElementById('detailsModal').style.display = "block";
};

window.closeModal = () => {
    document.getElementById('detailsModal').style.display = "none";
};
