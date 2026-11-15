(function () {
  const numDots = 10;
  const dots = [];
  const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

  for (let i = 0; i < numDots; i++) {
    const dot = document.createElement('div');
    dot.className = 'trail-dot';
    dot.style.opacity = (numDots - i) / numDots;
    document.body.appendChild(dot);
    dots.push({ x: mouse.x, y: mouse.y, el: dot });
  }

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  function animate() {
    let x = mouse.x;
    let y = mouse.y;

    dots.forEach((dot) => {
      dot.x += (x - dot.x) * 0.4;
      dot.y += (y - dot.y) * 0.4;

      dot.el.style.left = dot.x + 'px';
      dot.el.style.top = dot.y + 'px';

      x = dot.x;
      y = dot.y;
    });

    requestAnimationFrame(animate);
  }

  animate();
})();