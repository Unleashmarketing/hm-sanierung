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

  const goTo = i => {
    const idx = (i + slides.length) % slides.length;
    heroSlider.scrollTo({ left: idx * heroSlider.clientWidth, behavior: 'smooth' });
  };

  const currentIndex = () => Math.round(heroSlider.scrollLeft / heroSlider.clientWidth);

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

// ---------- PREIS-RECHNER ----------
const calcType = document.getElementById('calc-type');
const calcSize = document.getElementById('calc-size');
const calcSizeValue = document.getElementById('calc-size-value');
const calcLevelButtons = document.querySelectorAll('#calc-level button');
const calcPrice = document.getElementById('calc-price');
const calcRange = document.getElementById('calc-range');

// Preise pro m² inkl. Material, Trittschall und Verlegung; base = Anfahrt, Demontage, Entsorgung
const calcConfig = {
  laminat: { base: 250, perSqm: { basic: 35, comfort: 50, premium: 68 } },
  vinyl:   { base: 300, perSqm: { basic: 55, comfort: 72, premium: 95 } },
  parkett: { base: 400, perSqm: { basic: 95, comfort: 130, premium: 170 } },
  fliesen: { base: 350, perSqm: { basic: 68, comfort: 95, premium: 135 } }
};

let currentLevel = 'basic';
const fmt = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 });

function updateRangeFill() {
  if (!calcSize) return;
  const min = parseFloat(calcSize.min);
  const max = parseFloat(calcSize.max);
  const val = parseFloat(calcSize.value);
  const pct = ((val - min) / (max - min)) * 100;
  calcSize.style.setProperty('--range-fill', pct + '%');
}

function updateCalc() {
  if (!calcType || !calcSize || !calcPrice || !calcRange || !calcSizeValue) return;
  const type = calcType.value;
  const size = parseFloat(calcSize.value);
  calcSizeValue.textContent = String(size);

  const cfg = calcConfig[type];
  const levels = ['basic', 'comfort', 'premium'];
  const idx = levels.indexOf(currentLevel);
  const selected = Math.round((cfg.base + size * cfg.perSqm[currentLevel]) / 10) * 10;
  let max;
  if (idx < levels.length - 1) {
    max = Math.round((cfg.base + size * cfg.perSqm[levels[idx + 1]]) / 10) * 10;
  } else {
    max = Math.round(selected * 1.2 / 10) * 10;
  }

  calcPrice.textContent = `ab ${fmt.format(selected)}`;
  calcRange.textContent = `${fmt.format(selected)} – ${fmt.format(max)}`;
  updateRangeFill();
}

if (calcType && calcSize) {
  calcType.addEventListener('change', updateCalc);
  calcSize.addEventListener('input', updateCalc);
  calcLevelButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      calcLevelButtons.forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      currentLevel = btn.dataset.value;
      updateCalc();
    });
  });
  updateCalc();
}
