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

// 3. INTERSECTION OBSERVER (Pro way to handle scroll)
const observerOptions = { threshold: 0.5 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            countNumbers();
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

observer.observe(document.querySelector('#stats'));
