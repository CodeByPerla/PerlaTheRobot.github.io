
document.addEventListener('DOMContentLoaded', () => {
    AOS.init();

    const yearSpan = document.querySelector('.current-year');
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;
});

// Rest of your JavaScript for smooth scrolling can remain unchanged.

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Update the active navigation link based on scroll position
document.addEventListener('scroll', () => {
    let scrollPosition = window.scrollY;

    document.querySelectorAll('.navigation a[href^="#"]').forEach(link => {
        let section = document.querySelector(link.getAttribute('href'));
        if (section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});


// Update year in the footer
document.addEventListener('DOMContentLoaded', () => {
    const yearSpan = document.querySelector('.current-year');
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;
});
