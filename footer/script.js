document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        // Calculate rotation
        const rotateX = ((y - centerY) / centerY) * 30; // Increased tilt intensity
        const rotateY = ((x - centerX) / centerX) * -30; // Increased tilt intensity

        // Calculate dynamic shadow offset
        const shadowX = ((x - centerX) / centerX) * -25; // Increased shadow offset for X
        const shadowY = ((y - centerY) / centerY) * -25;  // Increased shadow offset for Y

        // Apply transform and dynamic shadow
        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-15px) scale(1.1)`;
        card.style.boxShadow = `${shadowX}px ${shadowY}px 30px rgba(0, 0, 0, 0.4), 0 0 15px rgba(255, 255, 255, 0.2)`; // Add subtle glow
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = '';
        card.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    });

    card.addEventListener('click', () => {
        card.classList.add('no-shadow');
        setTimeout(() => {
            card.classList.remove('no-shadow');
        }, 1000);
    });
});