// 1. COUNTER LOGIC : For Neeraj's Stats
const counters = document.querySelectorAll('.count');

const animateCounters = () => {
    counters.forEach(counter => {
        const update = () => {
            // The '+' sign converts the string from HTML into a number
            const target = +counter.getAttribute('data-target');
            const current = +counter.innerText;
            
            // Checking if the number has a decimal (like 89.94)
            const isDecimal = target % 1 !== 0;
            const increment = target / 80; // Dividing by 80 controls the speed

            if (current < target) {
                const nextValue = current + increment;
                
                // If it's a decimal, show 2 digits. If not, show whole number.
                counter.innerText = isDecimal ? nextValue.toFixed(2) : Math.ceil(nextValue);
                
                // Repeat every 20 milliseconds for a smooth look
                setTimeout(update, 20);
            } else {
                // Ensure the final number is exactly the target
                counter.innerText = target;
            }
        };
        update();
    });
};

// 2. SCROLL OBSERVER : It triggers the animation when you reach the section
const handleScroll = () => {
    const statsSection = document.getElementById('stats');
    if (!statsSection) return;

    const sectionPos = statsSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 1.3;

    // If the section enters the screen, start counting
    if (sectionPos < screenPos) {
        animateCounters();
        // Remove listener after running once so it doesn't repeat
        window.removeEventListener('scroll', handleScroll);
    }
};

window.addEventListener('scroll', handleScroll);

// 3. MAKING THE TIMELINE INTERACTIVE 
const milestones = document.querySelectorAll('.milestone');

milestones.forEach(item => {
    item.addEventListener('click', () => {
        // Toggle the 'active' class we defined in CSS
        item.classList.toggle('active');
        
        // This part closes other open milestones when you click a new one
        milestones.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
            }
        });
    });
});

// 4. SMOOTH SCROLLING FOR NAVIGATION
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
