document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) setTimeout(() => e.target.classList.add('visible'), i * 80);
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  const phrases = [
    'Desenvolvedor Java',
    'Analista de Dados',
    'Fã de Spring Boot',
    'Programador Python',
    'Dev Backend'
  ];

  const typingEl = document.getElementById('typing-text');
  if (!typingEl) return;

  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 90;

  function type() {
    const current = phrases[phraseIndex];

    if (!isDeleting) {
      charIndex++;
      typingEl.textContent = current.slice(0, charIndex);
      typingSpeed = charIndex === current.length ? 1800 : 90;
      if (charIndex === current.length) isDeleting = true;
    } else {
      charIndex--;
      typingEl.textContent = current.slice(0, charIndex);
      if (charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typingSpeed = 300;
      } else {
        typingSpeed = 45;
      }
    }

    setTimeout(type, typingSpeed);
  }

  setTimeout(type, 800);
});