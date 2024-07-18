const heroTitle = document.getElementById('hero-title');
const heroSubtitle = document.getElementById('hero-subtitle');

setTimeout(() => {
  heroTitle.classList.add('active');
}, 500); // Delay for 0.5 seconds

setTimeout(() => {
  heroSubtitle.classList.add('active');
}, 1000); // Delay for 1 second after title animation
