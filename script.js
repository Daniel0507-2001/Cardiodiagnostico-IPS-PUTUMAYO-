// Menú responsive
document.querySelector('.menu-toggle').addEventListener('click', () => {
  document.querySelector('nav').classList.toggle('active');
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});