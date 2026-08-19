(function () {
  var wrap = document.getElementById('baWrap');
  if (!wrap) return;
  var before = document.getElementById('baBeforeImg');
  var handle = document.getElementById('baHandle');
  var dragging = false;

  function setPos(pct) {
    pct = Math.max(0, Math.min(100, pct));
    before.style.clipPath = 'inset(0 ' + (100 - pct) + '% 0 0)';
    handle.style.left = pct + '%';
  }

  function pctFromEvent(e) {
    var rect = wrap.getBoundingClientRect();
    var x = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left;
    return (x / rect.width) * 100;
  }

  function onDown(e) { dragging = true; wrap.classList.remove('nudge'); setPos(pctFromEvent(e)); e.preventDefault(); }
  function onMove(e) { if (!dragging) return; setPos(pctFromEvent(e)); }
  function onUp() { dragging = false; }

  wrap.addEventListener('mousedown', onDown);
  wrap.addEventListener('touchstart', onDown, { passive: false });
  window.addEventListener('mousemove', onMove);
  window.addEventListener('touchmove', onMove, { passive: true });
  window.addEventListener('mouseup', onUp);
  window.addEventListener('touchend', onUp);

  // Init + nudge animation when visible
  setPos(50);
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          wrap.classList.add('nudge');
          io.unobserve(wrap);
        }
      });
    }, { threshold: 0.35 });
    io.observe(wrap);
  }
})();