// Smooth scroll for CTA
document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('#cta').scrollIntoView({ behavior: 'smooth' });
    });
});

