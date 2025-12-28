// 1. CUSTOM CURSOR
const cursor = document.querySelector('.cursor-dot');
if (cursor) {
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });
}

// 2. THE COUNTER ENGINE
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
            
            // Decimal check for 89.94
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

// 3. THE TRIGGER (Observer)
// This part detects when the #stats section enters the screen
const statsSection = document.querySelector('#stats');

if (statsSection) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log("Stats visible! Starting count..."); // This helps you debug
                countNumbers();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    observer.observe(statsSection);
} else {
    // If for some reason #stats isn't found, just run the numbers after 1 second
    setTimeout(countNumbers, 1000);
}
