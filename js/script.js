document.addEventListener('DOMContentLoaded', () => {
  // Initialize AOS library
  AOS.init();

  // Update current year in footer
  const yearSpan = document.querySelector('.current-year');
  yearSpan.textContent = new Date().getFullYear();

  // Smooth scroll for in-page anchor links (if you use any in future)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
});

// Scroll-based active nav link highlight (only applies if you use #links in nav)
document.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;

  document.querySelectorAll('nav a[href^="#"]').forEach(link => {
    const section = document.querySelector(link.getAttribute('href'));
    if (!section) return;

    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});
