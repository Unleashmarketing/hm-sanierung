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