// Scroll reveal
const reveals = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
reveals.forEach(el => io.observe(el));

// Stagger children inside grids
document.querySelectorAll('.services-grid, .team-grid, .testi-grid').forEach(grid => {
  grid.querySelectorAll('.reveal').forEach((card, i) => {
    card.style.transitionDelay = `${i * 0.08}s`;
  });
});
