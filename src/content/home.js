// Nav scroll
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => nav.classList.toggle('scrolled', scrollY > 30), {passive:true});

// Fade-up
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => { if(e.isIntersecting){e.target.classList.add('visible'); obs.unobserve(e.target)} });
}, {threshold:0.12, rootMargin:'0px 0px -40px 0px'});
document.querySelectorAll('.fade-up').forEach(el => obs.observe(el));

// Hero image + caption cycling
(function(){
  const imgs = document.querySelectorAll('.hero-visual img');
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.hero-dot');
  if(!slides.length || !imgs.length) return;
  let cur = 0;
  setInterval(() => {
    imgs[cur].classList.remove('active');
    slides[cur].classList.remove('active');
    dots[cur].classList.remove('active');
    cur = (cur + 1) % slides.length;
    imgs[cur].classList.add('active');
    slides[cur].classList.add('active');
    dots[cur].classList.add('active');
  }, 5000);
})();

// Calculator
(function(){
  const MWST = 1.19;
  const typesWrap   = document.getElementById('calc-types');
  const slider      = document.getElementById('calc-qm');
  const sliderWrap  = document.getElementById('calc-qm-wrap');
  const sliderLabel = document.getElementById('calc-slider-label');
  const rangeOut    = document.getElementById('calc-range');
  if(!typesWrap || !slider) return;
  const allTypes = typesWrap.querySelectorAll('.calc-type');
  let active = typesWrap.querySelector('.calc-type.active');
  function getD(){
    return {
      min:parseFloat(active.dataset.min)||0,
      max:parseFloat(active.dataset.max)||0,
      unit:active.dataset.unit||'',
      fixed:active.dataset.fixed==='1',
      label:active.dataset.sliderLabel||'Fläche',
      sliderMax:parseInt(active.dataset.sliderMax)||300,
      sliderStep:parseInt(active.dataset.sliderStep)||5
    };
  }
  function fmt(n){return new Intl.NumberFormat('de-DE',{style:'currency',currency:'EUR',minimumFractionDigits:0,maximumFractionDigits:0}).format(n)}
  function update(){
    const d=getD();
    if(d.fixed){
      sliderWrap.style.display='none';
      rangeOut.innerHTML=fmt(Math.round(d.min*MWST))+'<span class="sep">—</span>'+fmt(Math.round(d.max*MWST));
    } else {
      sliderWrap.style.display='';
      const qty=parseFloat(slider.value)||0;
      const u=d.unit||'m²';
      slider.max=d.sliderMax; slider.step=d.sliderStep;
      if(parseFloat(slider.value)>d.sliderMax) slider.value=Math.round(d.sliderMax/2);
      sliderLabel.innerHTML=d.label+' in '+u+' <span class="val">'+slider.value+' '+u+'</span>';
      rangeOut.innerHTML=fmt(Math.round(qty*d.min*MWST))+'<span class="sep">—</span>'+fmt(Math.round(qty*d.max*MWST));
    }
  }
  allTypes.forEach(l=>{l.addEventListener('click',function(){allTypes.forEach(x=>x.classList.remove('active'));this.classList.add('active');this.querySelector('input').checked=true;active=this;update()})});
  slider.addEventListener('input',update);
  update();
})();

// Projects slider
(function(){
  const slider = document.querySelector('.proj-slider');
  const grid = document.querySelector('.proj-grid');
  const dotsWrap = document.querySelector('.proj-dots');
  const prevBtn = document.querySelector('.proj-prev');
  const nextBtn = document.querySelector('.proj-next');
  if(!slider || !grid || !dotsWrap) return;
  const cards = Array.from(grid.querySelectorAll('.proj-card'));
  if(cards.length <= 1){ if(prevBtn) prevBtn.style.display='none'; if(nextBtn) nextBtn.style.display='none'; return; }

  let current = 0;
  let isMobile = window.matchMedia('(max-width:640px)').matches;

  function buildDots(){
    dotsWrap.innerHTML = '';
    cards.forEach((_, i) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'proj-dot' + (i === 0 ? ' active' : '');
      b.setAttribute('aria-label', 'Projekt ' + (i + 1));
      b.addEventListener('click', () => goTo(i));
      dotsWrap.appendChild(b);
    });
  }

  function updateActive(){
    dotsWrap.querySelectorAll('.proj-dot').forEach((d, i) => d.classList.toggle('active', i === current));
  }

  function goTo(i){
    current = Math.max(0, Math.min(cards.length - 1, i));
    if(isMobile){
      const cardWidth = cards[0].offsetWidth;
      grid.scrollTo({ left: current * cardWidth, behavior: 'smooth' });
    }
    updateActive();
  }

  function next(){ goTo((current + 1) % cards.length); }
  function prev(){ goTo((current - 1 + cards.length) % cards.length); }

  if(prevBtn) prevBtn.addEventListener('click', prev);
  if(nextBtn) nextBtn.addEventListener('click', next);

  let scrollTimeout;
  grid.addEventListener('scroll', () => {
    if(!isMobile) return;
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      const cardWidth = cards[0].offsetWidth || grid.offsetWidth;
      current = Math.round(grid.scrollLeft / cardWidth);
      updateActive();
    }, 80);
  }, {passive:true});

  window.addEventListener('resize', () => {
    isMobile = window.matchMedia('(max-width:640px)').matches;
  }, {passive:true});

  buildDots();
})();