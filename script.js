// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add fade-in animation on scroll (for sections)
const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeIn 1s ease-in';
        }
    });
});
sections.forEach(section => observer.observe(section));

// Fun interactive effect: Random color change on explore button click
document.querySelector('.explore-btn').addEventListener('click', () => {
    const colors = ['#007bff', '#28a745', '#dc3545', '#ffc107'];
    document.querySelector('.explore-btn').style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
});

// Hamburger menu toggle
document.getElementById('menu-toggle').addEventListener('click', () => {
    document.querySelector('nav ul').classList.toggle('active');
});

