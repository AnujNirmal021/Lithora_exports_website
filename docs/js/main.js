
// Current year in footer
document.querySelectorAll('#year').forEach(el => el.textContent = new Date().getFullYear());

// Intersection Observer to reveal elements smoothly - optimized for performance
if ('IntersectionObserver' in window) {
  const reveal = entries => {
    for (const e of entries) {
      if (e.isIntersecting) {
        e.target.classList.add('in-view');
        observer.unobserve(e.target);
      }
    }
  };
  const observer = new IntersectionObserver(reveal, { threshold: 0.15 });
  document.querySelectorAll('.card, .product-card, .stat-card, .hero-media img, .about-media img').forEach(el => observer.observe(el));
}

// Optional: close mobile menu after click - event delegation for better performance
document.addEventListener('click', (e) => {
  if (e.target.closest('.menu a')) {
    const toggle = document.getElementById('nav-toggle');
    if (toggle) toggle.checked = false;
  }
});

console.log('Global Stone & Materials Trading site ready.');
