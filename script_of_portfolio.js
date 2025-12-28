// 1. CUSTOM CURSOR LOGIC
const cursor = document.querySelector('.cursor-dot');
if (cursor) {
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });
}

// 2. THE COUNTER FUNCTION (Defined FIRST to avoid errors)
const countNumbers = () => {
    const counters = document.querySelectorAll('.count');
    counters.forEach(counter => {
        const target = parseFloat(counter.getAttribute('data-target'));
        if (isNaN(target)) return; // Safety check

        const duration = 2000; 
        let startTime = null;

        const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            const value = progress * target;
            
            counter.innerText = target % 1 !== 0 ? value.toFixed(2) : Math.floor(value);
            
            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                counter.innerText = target;
            }
        };
        requestAnimationFrame(animate);
    });
};

// 3. THE TRIGGER (Intersection Observer)
const startObserver = () => {
    const statsSection = document.querySelector('#stats');
    
    if (!statsSection) {
        countNumbers(); // Fallback: If section not found, just run it
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Trigger when the section is visible
            if (entry.isIntersecting) {
                countNumbers();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    observer.observe(statsSection);
};

// 4. RUN ON PAGE LOAD
window.addEventListener('DOMContentLoaded', startObserver);
