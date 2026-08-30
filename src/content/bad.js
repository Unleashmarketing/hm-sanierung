// Nav scroll
const nav = document.getElementById('nav');
if (nav) {
  window.addEventListener('scroll', () => nav.classList.toggle('scrolled', scrollY > 30), { passive: true });
}

// Fade-up on scroll
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      obs.unobserve(e.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.fade-up').forEach(el => obs.observe(el));

// Hero project slider
const heroSlider = document.getElementById('heroSlider');
if (heroSlider) {
  const slides = heroSlider.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.hero-dot');
  const prev = document.querySelector('.hero-prev');
  const next = document.querySelector('.hero-next');

  const goTo = i => {
    const idx = (i + slides.length) % slides.length;
    heroSlider.scrollTo({ left: idx * heroSlider.clientWidth, behavior: 'smooth' });
  };

  const currentIndex = () => Math.round(heroSlider.scrollLeft / heroSlider.clientWidth);

  prev?.addEventListener('click', () => goTo(currentIndex() - 1));
  next?.addEventListener('click', () => goTo(currentIndex() + 1));
  dots.forEach((d, i) => d.addEventListener('click', () => goTo(i)));

  heroSlider.addEventListener('scroll', () => {
    const idx = currentIndex();
    dots.forEach((d, i) => d.classList.toggle('is-active', i === idx));
  }, { passive: true });

  // Autoplay, pauses on hover/touch
  let timer = setInterval(() => goTo(currentIndex() + 1), 5000);
  const stop = () => { clearInterval(timer); timer = null; };
  const start = () => { if (!timer) timer = setInterval(() => goTo(currentIndex() + 1), 5000); };
  heroSlider.addEventListener('pointerenter', stop);
  heroSlider.addEventListener('pointerleave', start);
  heroSlider.addEventListener('touchstart', stop, { passive: true });
}
