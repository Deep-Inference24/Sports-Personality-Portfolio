const cursorWrapper = document.getElementById('cursor-wrapper');
const outline = document.querySelector('.cursor-outline');

// Move the container so dot and outline never de-align
window.addEventListener('mousemove', (e) => {
    cursorWrapper.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
});

// Hover effect
document.querySelectorAll('.hero-image-wrapper, .stat-box, .logo').forEach(el => {
    el.addEventListener('mouseenter', () => {
        outline.style.width = '70px';
        outline.style.height = '70px';
        outline.style.backgroundColor = 'rgba(197, 160, 89, 0.1)';
    });
    el.addEventListener('mouseleave', () => {
        outline.style.width = '40px';
        outline.style.height = '40px';
        outline.style.backgroundColor = 'transparent';
    });
});
