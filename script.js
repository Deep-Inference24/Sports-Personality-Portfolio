const dot = document.querySelector('.cursor-dot');
const outline = document.querySelector('.cursor-outline');

// SMOOTH CURSOR LOGIC
window.addEventListener('mousemove', (e) => {
    const posX = e.clientX;
    const posY = e.clientY;

    // Use translate3d for hardware acceleration (smoothness)
    dot.style.transform = `translate3d(${posX}px, ${posY}px, 0)`;
    
    // Delayed outline effect
    outline.animate({
        transform: `translate3d(${posX}px, ${posY}px, 0)`
    }, { duration: 500, fill: "forwards" });
});

// HOVER INTERACTIONS
document.querySelectorAll('a, .hero-image-wrapper, tr, .fact-box').forEach(link => {
    link.addEventListener('mouseenter', () => {
        outline.style.width = '70px';
        outline.style.height = '70px';
        outline.style.backgroundColor = 'rgba(197, 160, 89, 0.1)';
    });
    link.addEventListener('mouseleave', () => {
        outline.style.width = '40px';
        outline.style.height = '40px';
        outline.style.backgroundColor = 'transparent';
    });
});
