// 1. CUSTOM CURSOR
const cursor = document.querySelector('.cursor-dot');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// 2. DECIMAL COUNTER LOGIC
const countNumbers = () => {
    const counters = document.querySelectorAll('.count');
    counters.forEach(counter => {
        const target = parseFloat(counter.getAttribute('data-target'));
        const duration = 2000; // 2 seconds
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

// 3. IMPROVED INTERSECTION OBSERVER
const statsSection = document.querySelector('#stats');

const observerOptions = {
    root: null, // means use the browser viewport
    threshold: 0.2 // trigger when at least 20% of the section is visible
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            countNumbers(); // This starts the 0 to 89.94 animation
            observer.unobserve(entry.target); // Stop watching once animated
        }
    });
}, observerOptions);

// This ensures the observer starts watching the stats section
if (statsSection) {
    observer.observe(statsSection);
} else {
    // Backup: If the observer fails, just run the numbers anyway
    countNumbers();
}
